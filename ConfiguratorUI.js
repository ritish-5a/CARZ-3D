/**
 * APEX GT // Multi-Brand Configurator UI Manager
 * Features: Toyota, Rolls-Royce, Maruti Suzuki, MG (Morris Garages), Mahindra, Lamborghini
 * Designed & Engineered by S. RITISH
 */

import { matManager } from '../3d/Materials.js';
import { soundFX } from '../audio/SoundFX.js';
import confetti from 'canvas-confetti';

export class ConfiguratorUI {
  constructor(sceneManager) {
    this.sceneManager = sceneManager;
    this.car = sceneManager.car;
    this.currency = 'INR'; // 'INR' or 'USD'

    // Multi-Vehicle Database
    this.vehicles = {
      'toyota': {
        brand: 'TOYOTA',
        model: 'Fortuner Legender 4x4 SUV',
        country: '🇯🇵 Japan / India',
        basePriceINR: 4850000,
        basePriceUSD: 58000,
        defaultColor: '#f8fafc',
        paintCategory: 'metallic'
      },
      'rolls_royce': {
        brand: 'ROLLS-ROYCE',
        model: 'Spectre Bespoke Grand Saloon',
        country: '🇬🇧 Great Britain',
        basePriceINR: 95000000,
        basePriceUSD: 1150000,
        defaultColor: '#111418',
        paintCategory: 'gloss'
      },
      'maruti': {
        brand: 'MARUTI SUZUKI',
        model: 'Swift Sport Boosterjet',
        country: '🇮🇳 India / Japan',
        basePriceINR: 980000,
        basePriceUSD: 11800,
        defaultColor: '#ff334b',
        paintCategory: 'metallic'
      },
      'mg': {
        brand: 'MG (MORRIS GARAGES)',
        model: 'Cyberster Electric Roadster',
        country: '🇬🇧 Morris Garages',
        basePriceINR: 6500000,
        basePriceUSD: 78000,
        defaultColor: '#ffd000',
        paintCategory: 'chameleon'
      },
      'mahindra': {
        brand: 'MAHINDRA',
        model: 'Thar 4x4 Rugged Trail',
        country: '🇮🇳 India',
        basePriceINR: 1850000,
        basePriceUSD: 22200,
        defaultColor: '#1b4332',
        paintCategory: 'matte'
      },
      'lamborghini': {
        brand: 'LAMBORGHINI',
        model: 'Apex GT Hypercar',
        country: '🇮🇹 Italy',
        basePriceINR: 41800000,
        basePriceUSD: 500000,
        defaultColor: '#ff5722',
        paintCategory: 'metallic'
      }
    };

    this.currentVehicleKey = 'toyota';

    this.config = {
      paint: {
        category: 'metallic',
        color: '#f8fafc',
        name: 'Platinum White Pearl',
        priceINR: 45000,
        priceUSD: 550,
        clearcoat: 1.0,
        metalness: 0.85,
        roughness: 0.2
      },
      wheels: {
        style: 'aero',
        styleName: 'Diamond-Cut Sport Alloy',
        finish: 'obsidian',
        priceINR: 65000,
        priceUSD: 800
      },
      calipers: {
        color: '#ff2233',
        name: 'Sport Red Calipers',
        priceINR: 15000,
        priceUSD: 180
      },
      interior: {
        leather: '#15161a',
        name: 'Obsidian Nappa Leather',
        isAlcantara: false,
        priceINR: 45000,
        priceUSD: 550
      },
      glass: {
        tint: 'clear',
        name: 'Ultra-Clear Crystal',
        priceINR: 0,
        priceUSD: 0
      },
      lighting: {
        headlights: false,
        underglow: false,
        underglowColor: '#00e5ff',
        priceINR: 25000,
        priceUSD: 300
      }
    };

    this.activeTab = 'garage';
    this.initDOM();
    this.bindEvents();
    this.updatePrice();
    this.startTachometerLoop();
  }

  initDOM() {
    this.dom = {
      priceBadge: document.getElementById('price-val-badge'),
      brandTitle: document.getElementById('brand-title-text'),
      brandModel: document.getElementById('brand-model-text'),
      currencyBtn: document.getElementById('currency-toggle-btn'),
      tabBtns: document.querySelectorAll('.tab-btn'),
      tabPanes: document.querySelectorAll('.tab-pane'),
      camBtns: document.querySelectorAll('.cam-btn'),
      pedalBtn: document.getElementById('pedal-rev-btn'),
      rpmVal: document.getElementById('tacho-rpm-val'),
      rpmBar: document.getElementById('rpm-fill-bar'),
      boostVal: document.getElementById('tacho-boost-val'),
      soundToggle: document.getElementById('sound-toggle-btn'),
      photoModal: document.getElementById('photo-modal'),
      summaryModal: document.getElementById('summary-modal'),
      photoPreview: document.getElementById('photo-preview-img'),
      toastContainer: document.getElementById('toast-container')
    };
  }

  bindEvents() {
    // 1. Vehicle Selector (Garage)
    document.querySelectorAll('.vehicle-card').forEach(card => {
      card.addEventListener('click', () => {
        soundFX.playClick();
        document.querySelectorAll('.vehicle-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');

        const key = card.dataset.vehicle;
        this.selectVehicle(key);
      });
    });

    // 2. Currency Switcher (INR <-> USD)
    if (this.dom.currencyBtn) {
      this.dom.currencyBtn.addEventListener('click', () => {
        soundFX.playClick();
        this.currency = this.currency === 'INR' ? 'USD' : 'INR';
        this.dom.currencyBtn.textContent = this.currency === 'INR' ? '₹ INR' : '$ USD';
        this.updatePrice();
        this.showToast(`Currency set to ${this.currency}`);
      });
    }

    // 3. Tab Navigation
    this.dom.tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        soundFX.playClick();
        this.switchTab(btn.dataset.tab);
      });
    });

    // 4. Camera Controls & Cinematic Showcase
    this.dom.camBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        soundFX.playClick();
        this.dom.camBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const view = btn.dataset.view;
        if (view === 'showcase') {
          const active = this.sceneManager.toggleCinematicShowcase();
          btn.classList.toggle('active', active);
          this.showToast(active ? "Cinematic Drone Showcase Active" : "Showcase Paused");
        } else {
          this.sceneManager.setCameraView(view);
        }
      });
    });

    // 5. Quick Docks & 3D Interactive Animation Controls
    const quickDoorBtn = document.getElementById('quick-doors-btn');
    if (quickDoorBtn) {
      quickDoorBtn.addEventListener('click', () => {
        const open = this.car.toggleDoors();
        quickDoorBtn.classList.toggle('active', open);
        this.showToast(open ? "Doors Opened" : "Doors Closed");
      });
    }

    const quickHoodBtn = document.getElementById('quick-hood-btn');
    if (quickHoodBtn) {
      quickHoodBtn.addEventListener('click', () => {
        const open = this.car.toggleHood();
        quickHoodBtn.classList.toggle('active', open);
        this.showToast(open ? "Engine Bay Hood Opened" : "Engine Hood Closed");
      });
    }

    const quickSuspensionBtn = document.getElementById('quick-suspension-btn');
    if (quickSuspensionBtn) {
      quickSuspensionBtn.addEventListener('click', () => {
        const raised = this.car.toggleSuspension();
        quickSuspensionBtn.classList.toggle('active', raised);
        this.showToast(raised ? "Off-Road Air Suspension Raised (+180mm)" : "Track Slammed Ride Height");
      });
    }

    const quickHazardBtn = document.getElementById('quick-hazard-btn');
    if (quickHazardBtn) {
      quickHazardBtn.addEventListener('click', () => {
        const flashing = this.car.toggleHazardLights();
        quickHazardBtn.classList.toggle('active', flashing);
        this.showToast(flashing ? "Hazard Flashers Active" : "Hazards Off");
      });
    }

    const quickLightsBtn = document.getElementById('quick-lights-btn');
    if (quickLightsBtn) {
      quickLightsBtn.addEventListener('click', () => {
        const on = this.car.toggleHeadlights();
        quickLightsBtn.classList.toggle('active', on);
        this.showToast(on ? "Projector Headlights Activated" : "Headlights Off");
      });
    }

    const quickRotateBtn = document.getElementById('quick-rotate-btn');
    if (quickRotateBtn) {
      quickRotateBtn.addEventListener('click', () => {
        const rotating = this.sceneManager.toggleAutoRotate();
        quickRotateBtn.classList.toggle('active', rotating);
        this.showToast(rotating ? "Turntable Enabled" : "Turntable Paused");
      });
    }

    // 6. Sound Toggle
    if (this.dom.soundToggle) {
      this.dom.soundToggle.addEventListener('click', () => {
        const muted = soundFX.toggleMute();
        this.dom.soundToggle.classList.toggle('active', !muted);
        this.showToast(muted ? "Audio Muted" : "Engine Audio On");
      });
    }

    // 7. Rev Pedal
    if (this.dom.pedalBtn) {
      const startRev = (e) => {
        e.preventDefault();
        this.dom.pedalBtn.classList.add('revving');
        soundFX.setRevving(true);
      };
      const stopRev = (e) => {
        e.preventDefault();
        this.dom.pedalBtn.classList.remove('revving');
        soundFX.setRevving(false);
      };
      this.dom.pedalBtn.addEventListener('mousedown', startRev);
      window.addEventListener('mouseup', stopRev);
      this.dom.pedalBtn.addEventListener('touchstart', startRev);
      window.addEventListener('touchend', stopRev);
    }

    // 8. Paint Swatches
    document.querySelectorAll('.paint-swatch').forEach(swatch => {
      swatch.addEventListener('click', () => {
        soundFX.playClick();
        document.querySelectorAll('.paint-swatch').forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');

        const color = swatch.dataset.color;
        const name = swatch.dataset.name;
        this.config.paint.color = color;
        this.config.paint.name = name;

        matManager.setPaint({
          color: color,
          type: this.config.paint.category,
          clearcoat: this.config.paint.clearcoat,
          metalness: this.config.paint.metalness,
          roughness: this.config.paint.roughness
        });

        const hexInput = document.getElementById('custom-paint-hex');
        if (hexInput) hexInput.value = color;

        this.updatePrice();
        this.showToast(`Paint: ${name}`);
      });
    });

    // Custom Paint
    const hexInput = document.getElementById('custom-paint-hex');
    const colorPicker = document.getElementById('custom-paint-picker');
    if (hexInput && colorPicker) {
      const applyColor = (val) => {
        this.config.paint.color = val;
        this.config.paint.name = "Bespoke Custom Blend";
        matManager.setPaint({
          color: val,
          type: this.config.paint.category,
          clearcoat: this.config.paint.clearcoat,
          metalness: this.config.paint.metalness,
          roughness: this.config.paint.roughness
        });
      };
      colorPicker.addEventListener('input', (e) => {
        hexInput.value = e.target.value;
        applyColor(e.target.value);
      });
      hexInput.addEventListener('change', (e) => {
        colorPicker.value = e.target.value;
        applyColor(e.target.value);
      });
    }

    // Finish Type
    document.querySelectorAll('.finish-segment-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        soundFX.playClick();
        document.querySelectorAll('.finish-segment-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const finish = btn.dataset.finish;
        this.config.paint.category = finish;
        matManager.setPaint({
          color: this.config.paint.color,
          type: finish,
          clearcoat: this.config.paint.clearcoat,
          metalness: this.config.paint.metalness,
          roughness: this.config.paint.roughness
        });
      });
    });

    // Wheels, Interior, Lighting events
    document.querySelectorAll('.rim-finish-swatch').forEach(swatch => {
      swatch.addEventListener('click', () => {
        soundFX.playClick();
        document.querySelectorAll('.rim-finish-swatch').forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
        matManager.setRimFinish(swatch.dataset.finish);
      });
    });

    document.querySelectorAll('.caliper-swatch').forEach(swatch => {
      swatch.addEventListener('click', () => {
        soundFX.playClick();
        document.querySelectorAll('.caliper-swatch').forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
        matManager.setCaliperColor(swatch.dataset.color);
      });
    });

    document.querySelectorAll('.leather-swatch').forEach(swatch => {
      swatch.addEventListener('click', () => {
        soundFX.playClick();
        document.querySelectorAll('.leather-swatch').forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
        matManager.setInteriorLeather(swatch.dataset.color, swatch.dataset.alcantara === 'true');
      });
    });

    // Photo Studio & Summary
    const openPhotoBtn = document.getElementById('open-photo-studio-btn');
    if (openPhotoBtn) {
      openPhotoBtn.addEventListener('click', () => {
        soundFX.playClick();
        const dataUrl = this.sceneManager.captureScreenshot('16:9');
        if (this.dom.photoPreview) this.dom.photoPreview.src = dataUrl;
        if (this.dom.photoModal) this.dom.photoModal.classList.add('open');
      });
    }

    const capturePhotoBtn = document.getElementById('capture-now-btn');
    if (capturePhotoBtn) {
      capturePhotoBtn.addEventListener('click', () => {
        soundFX.playClick();
        const dataUrl = this.sceneManager.captureScreenshot('16:9');
        const link = document.createElement('a');
        link.download = `${this.vehicles[this.currentVehicleKey].brand}-Custom-${Date.now()}.png`;
        link.href = dataUrl;
        link.click();
        this.showToast("📸 4K Studio Snapshot Downloaded");
      });
    }

    const openSummaryBtn = document.getElementById('open-summary-btn');
    if (openSummaryBtn) {
      openSummaryBtn.addEventListener('click', () => {
        soundFX.playClick();
        this.updatePrice();
        if (this.dom.summaryModal) this.dom.summaryModal.classList.add('open');
      });
    }

    const orderBtn = document.getElementById('place-order-btn');
    if (orderBtn) {
      orderBtn.addEventListener('click', () => {
        soundFX.playLockChirp();
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
        this.showToast(`🎉 ${this.vehicles[this.currentVehicleKey].brand} Build Reserved for S. RITISH!`);
      });
    }

    // Modal Close
    document.querySelectorAll('.modal-close-btn, .modal-overlay').forEach(el => {
      el.addEventListener('click', (e) => {
        if (e.target === el || el.classList.contains('modal-close-btn')) {
          soundFX.playClick();
          document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
        }
      });
    });
  }

  selectVehicle(brandKey) {
    if (!this.vehicles[brandKey]) return;
    this.currentVehicleKey = brandKey;
    const v = this.vehicles[brandKey];

    // Switch 3D Model
    this.car.switchVehicle(brandKey);

    // Update Header
    if (this.dom.brandTitle) {
      this.dom.brandTitle.innerHTML = `${v.brand} <span class="brand-tag">S. RITISH</span>`;
    }
    if (this.dom.brandModel) {
      this.dom.brandModel.textContent = `${v.model.toUpperCase()} // ${v.country}`;
    }

    // Apply Default Paint
    this.config.paint.color = v.defaultColor;
    this.config.paint.category = v.paintCategory;
    matManager.setPaint({
      color: v.defaultColor,
      type: v.paintCategory
    });

    this.updatePrice();
    this.showToast(`Switched to ${v.brand} - ${v.model}`);
  }

  switchTab(tabKey) {
    this.activeTab = tabKey;
    this.dom.tabBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.tab === tabKey));
    this.dom.tabPanes.forEach(pane => {
      pane.style.display = pane.id === `tab-${tabKey}` ? 'flex' : 'none';
    });
  }

  formatCurrency(inrAmount, usdAmount) {
    if (this.currency === 'INR') {
      if (inrAmount >= 10000000) {
        return `₹ ${(inrAmount / 10000000).toFixed(2)} Cr`;
      } else {
        return `₹ ${(inrAmount / 100000).toFixed(2)} Lakh`;
      }
    } else {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(usdAmount);
    }
  }

  updatePrice() {
    const v = this.vehicles[this.currentVehicleKey];
    const totalINR = v.basePriceINR + this.config.paint.priceINR + this.config.wheels.priceINR + this.config.calipers.priceINR + this.config.interior.priceINR + this.config.lighting.priceINR;
    const totalUSD = v.basePriceUSD + this.config.paint.priceUSD + this.config.wheels.priceUSD + this.config.calipers.priceUSD + this.config.interior.priceUSD + this.config.lighting.priceUSD;

    const formatted = this.formatCurrency(totalINR, totalUSD);
    if (this.dom.priceBadge) this.dom.priceBadge.textContent = formatted;

    const tableBody = document.getElementById('summary-table-body');
    if (tableBody) {
      tableBody.innerHTML = `
        <tr><td>Lead Designer & Commissioner</td><td><strong>S. RITISH</strong></td></tr>
        <tr><td>Brand & Model</td><td><strong>${v.brand} - ${v.model}</strong></td></tr>
        <tr><td>Base Showroom Price</td><td>${this.formatCurrency(v.basePriceINR, v.basePriceUSD)}</td></tr>
        <tr><td>Bespoke Exterior Paint</td><td>+${this.formatCurrency(this.config.paint.priceINR, this.config.paint.priceUSD)}</td></tr>
        <tr><td>Alloy Wheels & Calipers</td><td>+${this.formatCurrency(this.config.wheels.priceINR + this.config.calipers.priceINR, this.config.wheels.priceUSD + this.config.calipers.priceUSD)}</td></tr>
        <tr><td>Luxury Interior Package</td><td>+${this.formatCurrency(this.config.interior.priceINR, this.config.interior.priceUSD)}</td></tr>
        <tr class="total-row"><td>Total On-Road Value</td><td>${formatted}</td></tr>
      `;
    }
  }

  startTachometerLoop() {
    const loop = () => {
      const data = soundFX.getRPMData();
      if (this.dom.rpmVal) this.dom.rpmVal.textContent = data.rpm.toLocaleString();
      if (this.dom.rpmBar) this.dom.rpmBar.style.width = `${Math.max(10, data.normalized * 100)}%`;
      if (this.dom.boostVal) this.dom.boostVal.textContent = `+${data.boost} bar`;
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);
  }

  showToast(message) {
    if (!this.dom.toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.innerHTML = `<span>⚡</span><span>${message}</span>`;
    this.dom.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(-10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 2400);
  }
}