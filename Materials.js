/**
 * APEX GT // Procedural Texture Generator & Realistic PBR Automotive Materials
 */

import * as THREE from 'three';

class MaterialManager {
  constructor() {
    this.textures = {};
    this.materials = {};
    this.generateProceduralTextures();
    this.createMaterials();
  }

  generateProceduralTextures() {
    // 1. Carbon Fiber Normal & Roughness Map (2x2 twill weave pattern)
    const carbonCanvas = document.createElement('canvas');
    carbonCanvas.width = 256;
    carbonCanvas.height = 256;
    const carbonCtx = carbonCanvas.getContext('2d');
    
    carbonCtx.fillStyle = '#111111';
    carbonCtx.fillRect(0, 0, 256, 256);
    
    const tileSize = 16;
    for (let y = 0; y < 256; y += tileSize) {
      for (let x = 0; x < 256; x += tileSize) {
        const isDiagonal = ((x / tileSize) + (y / tileSize)) % 2 === 0;
        carbonCtx.fillStyle = isDiagonal ? '#242424' : '#0c0c0c';
        carbonCtx.fillRect(x, y, tileSize, tileSize);

        // Sub-weave micro-threads
        carbonCtx.strokeStyle = isDiagonal ? '#363636' : '#181818';
        carbonCtx.lineWidth = 1;
        for (let k = 0; k < tileSize; k += 4) {
          carbonCtx.beginPath();
          if (isDiagonal) {
            carbonCtx.moveTo(x + k, y);
            carbonCtx.lineTo(x + k, y + tileSize);
          } else {
            carbonCtx.moveTo(x, y + k);
            carbonCtx.lineTo(x + tileSize, y + k);
          }
          carbonCtx.stroke();
        }
      }
    }
    
    const carbonTex = new THREE.CanvasTexture(carbonCanvas);
    carbonTex.wrapS = THREE.RepeatWrapping;
    carbonTex.wrapT = THREE.RepeatWrapping;
    carbonTex.repeat.set(24, 24);
    this.textures.carbon = carbonTex;

    // 2. Tire Tread Bump Map (High-grip directional grooves)
    const tireCanvas = document.createElement('canvas');
    tireCanvas.width = 512;
    tireCanvas.height = 256;
    const tireCtx = tireCanvas.getContext('2d');

    tireCtx.fillStyle = '#808080';
    tireCtx.fillRect(0, 0, 512, 256);

    // Longitudinal circumferential water channels
    tireCtx.fillStyle = '#000000';
    tireCtx.fillRect(0, 50, 512, 14);
    tireCtx.fillRect(0, 110, 512, 16);
    tireCtx.fillRect(0, 170, 512, 14);

    // Lateral diagonal traction sipes
    tireCtx.strokeStyle = '#222222';
    tireCtx.lineWidth = 4;
    for (let x = 0; x < 512; x += 16) {
      tireCtx.beginPath();
      tireCtx.moveTo(x, 0);
      tireCtx.lineTo(x + 20, 50);
      tireCtx.stroke();

      tireCtx.beginPath();
      tireCtx.moveTo(x, 256);
      tireCtx.lineTo(x + 20, 184);
      tireCtx.stroke();

      tireCtx.beginPath();
      tireCtx.moveTo(x, 64);
      tireCtx.lineTo(x + 24, 110);
      tireCtx.stroke();

      tireCtx.beginPath();
      tireCtx.moveTo(x, 126);
      tireCtx.lineTo(x + 24, 170);
      tireCtx.stroke();
    }

    const tireTex = new THREE.CanvasTexture(tireCanvas);
    tireTex.wrapS = THREE.RepeatWrapping;
    tireTex.wrapT = THREE.RepeatWrapping;
    tireTex.repeat.set(8, 1);
    this.textures.tire = tireTex;

    // 3. Drilled Ceramic Brake Rotor Disc Texture
    const brakeCanvas = document.createElement('canvas');
    brakeCanvas.width = 512;
    brakeCanvas.height = 512;
    const brakeCtx = brakeCanvas.getContext('2d');

    // Metallic brushed surface
    const gradient = brakeCtx.createRadialGradient(256, 256, 80, 256, 256, 240);
    gradient.addColorStop(0, '#555555');
    gradient.addColorStop(0.5, '#777777');
    gradient.addColorStop(1, '#444444');
    brakeCtx.fillStyle = gradient;
    brakeCtx.fillRect(0, 0, 512, 512);

    // Concentric micro-machining lines
    brakeCtx.strokeStyle = 'rgba(255,255,255,0.08)';
    brakeCtx.lineWidth = 1;
    for (let r = 90; r < 240; r += 3) {
      brakeCtx.beginPath();
      brakeCtx.arc(256, 256, r, 0, Math.PI * 2);
      brakeCtx.stroke();
    }

    // Cross-drilled cooling holes
    brakeCtx.fillStyle = '#0a0a0a';
    const numSpirals = 16;
    for (let s = 0; s < numSpirals; s++) {
      const baseAngle = (s / numSpirals) * Math.PI * 2;
      for (let step = 0; step < 6; step++) {
        const radius = 105 + step * 22;
        const angle = baseAngle + step * 0.12;
        const hx = 256 + Math.cos(angle) * radius;
        const hy = 256 + Math.sin(angle) * radius;
        
        brakeCtx.beginPath();
        brakeCtx.arc(hx, hy, 4, 0, Math.PI * 2);
        brakeCtx.fill();
      }
    }

    const brakeTex = new THREE.CanvasTexture(brakeCanvas);
    this.textures.brake = brakeTex;

    // 4. Leather / Alcantara Micro-Texture
    const leatherCanvas = document.createElement('canvas');
    leatherCanvas.width = 256;
    leatherCanvas.height = 256;
    const leatherCtx = leatherCanvas.getContext('2d');
    leatherCtx.fillStyle = '#808080';
    leatherCtx.fillRect(0, 0, 256, 256);

    const imgData = leatherCtx.getImageData(0, 0, 256, 256);
    for (let i = 0; i < imgData.data.length; i += 4) {
      const val = 120 + Math.random() * 40;
      imgData.data[i] = val;
      imgData.data[i + 1] = val;
      imgData.data[i + 2] = val;
      imgData.data[i + 3] = 255;
    }
    leatherCtx.putImageData(imgData, 0, 0);

    const leatherTex = new THREE.CanvasTexture(leatherCanvas);
    leatherTex.wrapS = THREE.RepeatWrapping;
    leatherTex.wrapT = THREE.RepeatWrapping;
    leatherTex.repeat.set(16, 16);
    this.textures.leather = leatherTex;
  }

  createMaterials() {
    // 1. Exterior Car Paint (PBR Clearcoat with physical depth)
    this.materials.bodyPaint = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#ff334b'), // Rosso Corsa Default
      metalness: 0.75,
      roughness: 0.18,
      clearcoat: 1.0,
      clearcoatRoughness: 0.04,
      reflectivity: 1.0,
      envMapIntensity: 1.6,
      sheen: 0.3,
      sheenColor: new THREE.Color('#ffffff')
    });

    // 2. Secondary Livery / Carbon Panels
    this.materials.carbonFiber = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#141414'),
      map: this.textures.carbon,
      bumpMap: this.textures.carbon,
      bumpScale: 0.015,
      metalness: 0.85,
      roughness: 0.25,
      clearcoat: 0.9,
      clearcoatRoughness: 0.08,
      envMapIntensity: 1.3
    });

    // 3. Matte Carbon Aero (Front splitter, diffuser, wing)
    this.materials.matteCarbon = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#1c1c1c'),
      map: this.textures.carbon,
      roughness: 0.65,
      metalness: 0.3,
      envMapIntensity: 0.8
    });

    // 4. Glass Materials
    this.materials.windshield = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#152230'),
      transmission: 0.88,
      opacity: 1.0,
      transparent: true,
      roughness: 0.03,
      ior: 1.52,
      reflectivity: 0.9,
      envMapIntensity: 1.8
    });

    this.materials.headlightGlass = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#ffffff'),
      transmission: 0.94,
      transparent: true,
      roughness: 0.04,
      ior: 1.48,
      reflectivity: 0.95
    });

    // 5. LED Emissives
    this.materials.headlightLED = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#ffffff'),
      emissive: new THREE.Color('#ffffff'),
      emissiveIntensity: 0.0, // Off by default, turned on via controls
      roughness: 0.1
    });

    this.materials.drlLED = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#aee8ff'),
      emissive: new THREE.Color('#aee8ff'),
      emissiveIntensity: 3.5, // Bright daytime light strip
      roughness: 0.1
    });

    this.materials.taillightLED = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#ff0022'),
      emissive: new THREE.Color('#ff0022'),
      emissiveIntensity: 2.8,
      roughness: 0.2
    });

    this.materials.turnSignalLED = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#ffaa00'),
      emissive: new THREE.Color('#ffaa00'),
      emissiveIntensity: 0.0,
      roughness: 0.2
    });

    this.materials.underglowLED = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#00e5ff'),
      emissive: new THREE.Color('#00e5ff'),
      emissiveIntensity: 0.0,
      roughness: 0.1
    });

    // 6. Wheels & Brakes
    this.materials.rim = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#16171a'), // Gloss Obsidian
      metalness: 0.95,
      roughness: 0.15,
      envMapIntensity: 1.5
    });

    this.materials.tire = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#1c1c1e'),
      bumpMap: this.textures.tire,
      bumpScale: 0.04,
      roughness: 0.85,
      metalness: 0.08
    });

    this.materials.brakeRotor = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#dcdcdc'),
      map: this.textures.brake,
      metalness: 0.9,
      roughness: 0.22,
      envMapIntensity: 1.2
    });

    this.materials.caliper = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#ff2233'), // Brembo Red
      metalness: 0.4,
      roughness: 0.2,
      envMapIntensity: 1.4
    });

    // 7. Interior Materials
    this.materials.interiorLeather = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#15161a'), // Obsidian Nappa
      bumpMap: this.textures.leather,
      bumpScale: 0.02,
      roughness: 0.7,
      metalness: 0.1
    });

    this.materials.interiorStitch = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#ff334b'),
      roughness: 0.5
    });

    this.materials.interiorTrim = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#101010'),
      metalness: 0.9,
      roughness: 0.2
    });

    this.materials.cockpitScreen = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#00e5ff')
    });

    // 8. Titanium Exhaust & Engine Details
    this.materials.titaniumExhaust = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#28303d'),
      metalness: 0.95,
      roughness: 0.25,
      envMapIntensity: 1.5
    });

    this.materials.engineBlock = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#2b2b2b'),
      metalness: 0.8,
      roughness: 0.4
    });
  }

  // --- Dynamic Color & Finish Update Handlers ---

  setPaint(config) {
    if (!this.materials.bodyPaint) return;
    
    // config: { color, type: 'gloss' | 'metallic' | 'matte' | 'chameleon' | 'carbon', clearcoat, metalness, roughness }
    const color = new THREE.Color(config.color || '#ff334b');
    this.materials.bodyPaint.color.copy(color);

    if (config.type === 'matte') {
      this.materials.bodyPaint.metalness = 0.25;
      this.materials.bodyPaint.roughness = 0.65;
      this.materials.bodyPaint.clearcoat = 0.1;
      this.materials.bodyPaint.clearcoatRoughness = 0.8;
      this.materials.bodyPaint.iridescence = 0.0;
    } else if (config.type === 'metallic') {
      this.materials.bodyPaint.metalness = 0.88;
      this.materials.bodyPaint.roughness = 0.22;
      this.materials.bodyPaint.clearcoat = 1.0;
      this.materials.bodyPaint.clearcoatRoughness = 0.04;
      this.materials.bodyPaint.iridescence = 0.0;
    } else if (config.type === 'chameleon') {
      this.materials.bodyPaint.metalness = 0.6;
      this.materials.bodyPaint.roughness = 0.18;
      this.materials.bodyPaint.clearcoat = 1.0;
      this.materials.bodyPaint.clearcoatRoughness = 0.02;
      this.materials.bodyPaint.iridescence = 0.95;
      this.materials.bodyPaint.iridescenceIOR = 1.6;
    } else if (config.type === 'carbon') {
      this.materials.bodyPaint.metalness = 0.8;
      this.materials.bodyPaint.roughness = 0.3;
      this.materials.bodyPaint.clearcoat = 1.0;
      this.materials.bodyPaint.map = this.textures.carbon;
      this.materials.bodyPaint.bumpMap = this.textures.carbon;
      this.materials.bodyPaint.bumpScale = 0.012;
      this.materials.bodyPaint.needsUpdate = true;
      return;
    } else { // Gloss
      this.materials.bodyPaint.metalness = 0.35;
      this.materials.bodyPaint.roughness = 0.12;
      this.materials.bodyPaint.clearcoat = 1.0;
      this.materials.bodyPaint.clearcoatRoughness = 0.03;
      this.materials.bodyPaint.iridescence = 0.0;
      this.materials.bodyPaint.map = null;
      this.materials.bodyPaint.bumpMap = null;
    }

    if (config.clearcoat !== undefined) this.materials.bodyPaint.clearcoat = config.clearcoat;
    if (config.metalness !== undefined) this.materials.bodyPaint.metalness = config.metalness;
    if (config.roughness !== undefined) this.materials.bodyPaint.roughness = config.roughness;

    this.materials.bodyPaint.needsUpdate = true;
  }

  setRimFinish(finishKey) {
    const finishes = {
      'obsidian': { color: '#141416', metalness: 0.95, roughness: 0.12 },
      'titanium': { color: '#7a8089', metalness: 0.92, roughness: 0.28 },
      'gold': { color: '#d4af37', metalness: 0.88, roughness: 0.22 },
      'chrome': { color: '#f0f0f0', metalness: 1.0, roughness: 0.05 },
      'bronze': { color: '#8c6239', metalness: 0.85, roughness: 0.35 }
    };
    const f = finishes[finishKey] || finishes.obsidian;
    this.materials.rim.color.set(f.color);
    this.materials.rim.metalness = f.metalness;
    this.materials.rim.roughness = f.roughness;
    this.materials.rim.needsUpdate = true;
  }

  setCaliperColor(hexColor) {
    this.materials.caliper.color.set(hexColor);
    this.materials.caliper.needsUpdate = true;
  }

  setInteriorLeather(hexColor, isAlcantara = false) {
    this.materials.interiorLeather.color.set(hexColor);
    if (isAlcantara) {
      this.materials.interiorLeather.roughness = 0.9;
      this.materials.interiorLeather.metalness = 0.02;
    } else {
      this.materials.interiorLeather.roughness = 0.65;
      this.materials.interiorLeather.metalness = 0.12;
    }
    this.materials.interiorLeather.needsUpdate = true;
  }

  setWindowTint(tintType) {
    const tints = {
      'clear': { color: '#2a3b4c', transmission: 0.92, opacity: 1.0 },
      'smoke': { color: '#101720', transmission: 0.70, opacity: 1.0 },
      'limo': { color: '#05070a', transmission: 0.35, opacity: 1.0 },
      'chameleon': { color: '#d4af37', transmission: 0.78, opacity: 1.0, iridescence: 0.9 }
    };
    const t = tints[tintType] || tints.clear;
    this.materials.windshield.color.set(t.color);
    this.materials.windshield.transmission = t.transmission;
    if (t.iridescence) {
      this.materials.windshield.iridescence = t.iridescence;
    } else {
      this.materials.windshield.iridescence = 0.0;
    }
    this.materials.windshield.needsUpdate = true;
  }

  setHeadlights(state) {
    // state: 'off' | 'drl' | 'high'
    if (state === 'off') {
      this.materials.headlightLED.emissiveIntensity = 0.0;
      this.materials.drlLED.emissiveIntensity = 0.2;
    } else if (state === 'drl') {
      this.materials.headlightLED.emissiveIntensity = 0.0;
      this.materials.drlLED.emissiveIntensity = 3.5;
    } else if (state === 'high') {
      this.materials.headlightLED.emissiveIntensity = 6.0;
      this.materials.drlLED.emissiveIntensity = 4.5;
    }
    this.materials.headlightLED.needsUpdate = true;
    this.materials.drlLED.needsUpdate = true;
  }

  setUnderglow(enabled, hexColor = '#00e5ff') {
    this.materials.underglowLED.color.set(hexColor);
    this.materials.underglowLED.emissive.set(hexColor);
    this.materials.underglowLED.emissiveIntensity = enabled ? 5.0 : 0.0;
    this.materials.underglowLED.needsUpdate = true;
  }
}

export const matManager = new MaterialManager();
