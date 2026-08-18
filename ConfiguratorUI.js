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
        basePriceINR: 950000,
        basePriceUSD: 11500,
        defaultColor: '#d90429',
        paintCategory: 'gloss'
      },
      'mg': {
        brand: 'MG (MORRIS GARAGES)',
        model: 'Cyberster EV Roadster',
        country: '🇬🇧 UK / China',
        basePriceINR: 6500000,
        basePriceUSD: 78000,
        defaultColor: '#00e5ff',
        paintCategory: 'metallic'
      },
      'mahindra': {
        brand: 'MAHINDRA',
        model: 'Thar 4x4 Rugged Trail Edition',
        country: '🇮🇳 India',
        basePriceINR: 1750000,
        basePriceUSD: 21000,
        defaultColor: '#2b2d42',
        paintCategory: 'matte'
      },
      'lamborghini': {
        brand: 'LAMBORGHINI',
        model: 'Apex GT V12 Hypercar',
        country: '🇮🇹 Italy',
        basePriceINR: 88900000,
        basePriceUSD: 1070000,
        defaultColor: '#ff334b',
        paintCategory: 'metallic'
      }
    };

    // Configuration Options Pricing
    this.config = {
      paint: { color: '#ff334b', category: 'metallic', priceINR: 250000, priceUSD: 3000 },
      wheels: { style: 'forged', priceINR: 450000, priceUSD: 5500 },
      calipers: { color: '#ff334b', priceINR: 120000, priceUSD: 1500 },
      interior: { theme: 'black', priceINR: 380000, priceUSD: 4600 },
      tint: { type: 'clear', priceINR: 0, priceUSD: 0 }
    };

    this.dom = {};
    this.initDOMHandles();
    this.bindEvents();
    this.initThemeToggle();
    this.updatePriceDisplay();
    this.startTachometerLoop();
  }

  initDOMHandles() {
    this.dom.brandTitle = document.querySelector('.brand-title');
    this.dom.brandModel = document.querySelector('.brand-model');
    this.dom.brandSelector = document.getElementById('vehicle-select') || document.querySelector('.vehicle-select');
    this.dom.priceDisplayINR = document.querySelector('.price-inr');
    this.dom.priceDisplayUSD = document.querySelector('.price-usd');
    this.dom.currencyToggleBtn = document.getElementById('currency-toggle');
    
    // Controls
    this.dom.paintSwatches = document.querySelectorAll('.paint-swatch');
    this.dom.wheelBtns = document.querySelectorAll('.wheel-opt-btn');
    this.dom.caliperSwatches = document.querySelectorAll('.caliper-swatch');
    this.dom.interiorBtns = document.querySelectorAll('.interior-opt-btn');
    this.dom.envBtns = document.querySelectorAll('.env-btn');
    this.dom.camBtns = document.querySelectorAll('.cam-btn');

    // Interactive Car Toggles
    this.dom.doorBtn = document.getElementById('toggle-doors');
    this.dom.hoodBtn = document.getElementById('toggle-hood');
    this.dom.tailgateBtn = document.getElementById('toggle-tailgate');
    this.dom.airBtn = document.getElementById('toggle-suspension');
    this.dom.spoilerBtn = document.getElementById('toggle-spoiler');
    this.dom.headlightBtn = document.getElementById('toggle-headlights');

    // Audio HUD
    this.dom.engineStartBtn = document.getElementById('engine-start-btn');
    this.dom.revBtn = document.getElementById('rev-engine-btn');
    this.dom.rpmVal = document.getElementById('rpm-value');
    this.dom.rpmBar = document.getElementById('rpm-bar-fill');
    this.dom.boostVal = document.getElementById('boost-value');

    // Modals & UI Output
    this.dom.captureBtn = document.getElementById('capture-btn');
    this.dom.summaryBtn = document.getElementById('summary-btn');
    this.dom.summaryModal = document.getElementById('summary-modal');
    this.dom.modalCloseBtn = document.querySelector('.modal-close-btn');
    this.dom.summaryTableBody = document.getElementById('summary-table-body');
    this.dom.toastContainer = document.getElementById('toast-container');
  }

  // Complete Theme Toggle System (Light & Dark Mode)
  initThemeToggle() {
    const savedTheme = localStorage.getItem('app-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    const topNav = document.querySelector('.camera-dock') || 
                   document.querySelector('.camera-bar') || 
                   document.querySelector('.top-header') || 
                   document.body;

    const themeBtn = document.createElement('button');
    themeBtn.className = 'cam-btn theme-toggle-btn';
    themeBtn.id = 'theme-toggle';
    themeBtn.style.marginLeft = 'auto';
    themeBtn.innerHTML = savedTheme === 'dark' ? '☀️ Light' : '🌙 Dark';

    themeBtn.addEventListener('click', () => {
      soundFX.playClick();
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('app-theme', newTheme);
      themeBtn.innerHTML = newTheme === 'dark' ? '☀️ Light' : '🌙 Dark';

      if (this.sceneManager && typeof this.sceneManager.updateThemeBackground === 'function') {
        this.sceneManager.updateThemeBackground(newTheme);
      }
    });

    if (topNav) {
      topNav.appendChild(themeBtn);
    }
  }

  bindEvents() {
    // Brand Selection
    if (this.dom.brandSelector) {
      this.dom.brandSelector.addEventListener('change', (e) => {
        const brandKey = e.target.value;
        this.switchVehicleBrand(brandKey);
      });
    }

    // Vehicle Select Buttons (Alternative UI layout)
    document.querySelectorAll('.vehicle-card-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const brandKey = btn.dataset.brand;
        this.switchVehicleBrand(brandKey);
      });
    });

    // Paint Selection
    this.dom.paintSwatches.forEach(swatch => {
      swatch.addEventListener('click', () => {
        const hex = swatch.dataset.color;
        const cat = swatch.dataset.category || 'metallic';
        this.config.paint.color = hex;
        this.config.paint.category = cat;
        matManager.setPaintColor(hex, cat);
        soundFX.playClick();

        this.dom.paintSwatches.forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
        this.showToast(`Paint finish updated: ${cat.toUpperCase()}`);
      });
    });

    // Wheel Selection
    this.dom.wheelBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const style = btn.dataset.wheelStyle;
        this.config.wheels.style = style;
        this.car.switchWheelStyle(style);
        soundFX.playClick();

        this.dom.wheelBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // Caliper Color
    this.dom.caliperSwatches.forEach(swatch => {
      swatch.addEventListener('click', () => {
        const hex = swatch.dataset.color;
        this.config.calipers.color = hex;
        matManager.setCaliperColor(hex);
        soundFX.playClick();

        this.dom.caliperSwatches.forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
      });
    });

    // Interior Theme
    this.dom.interiorBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const theme = btn.dataset.interiorTheme;
        this.config.interior.theme = theme;
        matManager.setInteriorTheme(theme);
        soundFX.playClick();

        this.dom.interiorBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // Environments
    this.dom.envBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const env = btn.dataset.env;
        this.sceneManager.setEnvironment(env);
        soundFX.playClick();

        this.dom.envBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    // Camera Presets
    this.dom.camBtns.forEach(btn => {
      if (btn.id === 'theme-toggle') return;
      btn.addEventListener('click', () => {
        const camPreset = btn.dataset.cam;
        this.sceneManager.setCameraPreset(camPreset);
        soundFX.playClick();

        this.dom.camBtns.forEach(b => {
          if (b.id !== 'theme-toggle') b.classList.remove('active');
        });
        btn.classList.add('active');
      });
    });

    // Interactive Car Features
    if (this.dom.doorBtn) {
      this.dom.doorBtn.addEventListener('click', () => {
        const state = this.car.toggleDoors();
        this.dom.doorBtn.classList.toggle('active', state);
        this.showToast(state ? 'Dihedral Doors Opened' : 'Dihedral Doors Sealed');
      });
    }

    if (this.dom.hoodBtn) {
      this.dom.hoodBtn.addEventListener('click', () => {
        const state = this.car.toggleHood();
        this.dom.hoodBtn.classList.toggle('active', state);
        this.showToast(state ? 'Engine Bonnet Lifted' : 'Engine Bonnet Closed');
      });
    }

    if (this.dom.tailgateBtn) {
      this.dom.tailgateBtn.addEventListener('click', () => {
        const state = this.car.toggleTailgate();
        this.dom.tailgateBtn.classList.toggle('active', state);
      });
    }

    if (this.dom.airBtn) {
      this.dom.airBtn.addEventListener('click', () => {
        const state = this.car.toggleSuspension();
        this.dom.airBtn.classList.toggle('active', state);
        this.showToast(state ? 'Air Suspension: Lifted (+40mm)' : 'Air Suspension: Track Low');
      });
    }

    if (this.dom.spoilerBtn) {
      this.dom.spoilerBtn.addEventListener('click', () => {
        const state = this.car.toggleSpoiler();
        this.dom.spoilerBtn.classList.toggle('active', state);
        this.showToast(state ? 'Active Aero: Track Spoiler Deployed' : 'Active Aero: Retracted');
      });
    }

    if (this.dom.headlightBtn) {
      this.dom.headlightBtn.addEventListener('click', () => {
        const state = this.car.toggleHeadlights();
        this.dom.headlightBtn.classList.toggle('active', state);
      });
    }

    // Sound FX Controls
    if (this.dom.engineStartBtn) {
      this.dom.engineStartBtn.addEventListener('click', () => {
        const active = soundFX.toggleEngine();
        this.dom.engineStartBtn.classList.toggle('active', active);
        this.dom.engineStartBtn.textContent = active ? 'STOP ENGINE' : 'START ENGINE';
        this.showToast(active ? 'V12 Powertrain Ignited' : 'Powertrain Shut Down');
      });
    }

    if (this.dom.revBtn) {
      this.dom.revBtn.addEventListener('mousedown', () => soundFX.startRevving());
      this.dom.revBtn.addEventListener('mouseup', () => soundFX.stopRevving());
      this.dom.revBtn.addEventListener('mouseleave', () => soundFX.stopRevving());
      this.dom.revBtn.addEventListener('touchstart', (e) => { e.preventDefault(); soundFX.startRevving(); });
      this.dom.revBtn.addEventListener('touchend', () => soundFX.stopRevving());
    }

    // Currency Toggle
    if (this.dom.currencyToggleBtn) {
      this.dom.currencyToggleBtn.addEventListener('click', () => {
        this.currency = this.currency === 'INR' ? 'USD' : 'INR';
        this.dom.currencyToggleBtn.textContent = this.currency;
        this.updatePriceDisplay();
        soundFX.playClick();
      });
    }

    // Modal & Screenshot Actions
    if (this.dom.captureBtn) {
      this.dom.captureBtn.addEventListener('click', () => {
        soundFX.playClick();
        confetti({ particleCount: 80, spread: 60, origin: { y: 0.8 } });
        const dataUrl = this.sceneManager.captureScreenshot();
        const link = document.createElement('a');
        link.download = `APEX-GT-${this.car.currentBrand.toUpperCase()}-SPEC.png`;
        link.href = dataUrl;
        link.click();
        this.showToast('4K Canvas Snapshot Downloaded!');
      });
    }

    if (this.dom.summaryBtn) {
      this.dom.summaryBtn.addEventListener('click', () => {
        soundFX.playClick();
        this.populateSummaryTable();
        if (this.dom.summaryModal) this.dom.summaryModal.classList.add('active');
      });
    }

    if (this.dom.modalCloseBtn && this.dom.summaryModal) {
      this.dom.modalCloseBtn.addEventListener('click', () => {
        this.dom.summaryModal.classList.remove('active');
      });
    }
  }

  switchVehicleBrand(brandKey) {
    if (!this.vehicles[brandKey]) return;
    const info = this.vehicles[brandKey];

    this.car.switchBrand(brandKey);
    soundFX.setProfile(brandKey);
    matManager.setPaintColor(info.defaultColor, info.paintCategory);

    if (this.dom.brandTitle) this.dom.brandTitle.textContent = `${info.brand} `;
    if (this.dom.brandModel) this.dom.brandModel.textContent = `${info.model} // BY S. RITISH`;

    this.updatePriceDisplay();
    this.showToast(`Switched to ${info.brand} ${info.model}`);
  }

  formatCurrency(amountINR, amountUSD) {
    if (this.currency === 'INR') {
      return `₹ ${(amountINR / 100000).toFixed(2)} Lakh`;
    }
    return `$ ${amountUSD.toLocaleString()}`;
  }

  updatePriceDisplay() {
    const activeVehicle = this.vehicles[this.car.currentBrand] || this.vehicles['toyota'];
    const totalINR = activeVehicle.basePriceINR + this.config.paint.priceINR + this.config.wheels.priceINR + this.config.calipers.priceINR + this.config.interior.priceINR;
    const totalUSD = activeVehicle.basePriceUSD + this.config.paint.priceUSD + this.config.wheels.priceUSD + this.config.calipers.priceUSD + this.config.interior.priceUSD;

    const formatted = this.formatCurrency(totalINR, totalUSD);

    if (this.dom.priceDisplayINR) this.dom.priceDisplayINR.textContent = formatted;
    if (this.dom.priceDisplayUSD) this.dom.priceDisplayUSD.textContent = formatted;
  }

  populateSummaryTable() {
    if (!this.dom.summaryTableBody) return;
    const activeVehicle = this.vehicles[this.car.currentBrand];
    const totalINR = activeVehicle.basePriceINR + this.config.paint.priceINR + this.config.wheels.priceINR + this.config.calipers.priceINR + this.config.interior.priceINR;
    const totalUSD = activeVehicle.basePriceUSD + this.config.paint.priceUSD + this.config.wheels.priceUSD + this.config.calipers.priceUSD + this.config.interior.priceUSD;
    const formatted = this.formatCurrency(totalINR, totalUSD);

    this.dom.summaryTableBody.innerHTML = `
      <tr><td>Vehicle Chassis & Powertrain</td><td>${activeVehicle.brand} ${activeVehicle.model}</td></tr>
      <tr><td>Base Factory MSRP</td><td>${this.formatCurrency(activeVehicle.basePriceINR, activeVehicle.basePriceUSD)}</td></tr>
      <tr><td>Bespoke Exterior Paint</td><td>+${this.formatCurrency(this.config.paint.priceINR, this.config.paint.priceUSD)}</td></tr>
      <tr><td>Alloy Wheels & Calipers</td><td>+${this.formatCurrency(this.config.wheels.priceINR + this.config.calipers.priceINR, this.config.wheels.priceUSD + this.config.calipers.priceUSD)}</td></tr>
      <tr><td>Luxury Interior Package</td><td>+${this.formatCurrency(this.config.interior.priceINR, this.config.interior.priceUSD)}</td></tr>
      <tr class="total-row"><td>Total On-Road Value</td><td>${formatted}</td></tr>
    `;
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