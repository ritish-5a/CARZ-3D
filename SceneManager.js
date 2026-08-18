/**
 * APEX GT // 3D Scene, Lighting Environments, Cinematic Showcase Drone & Camera Orchestration
 */

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import gsap from 'gsap';
import { CarModel } from './CarModel.js';

export class SceneManager {
  constructor(container) {
    this.container = container;
    this.width = container.clientWidth;
    this.height = container.clientHeight;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.car = null;

    // Environment & Lighting
    this.envType = 'studio';
    this.studioLights = [];
    this.cyberLights = [];
    this.sunsetLights = [];
    this.floor = null;
    this.grid = null;

    // Turntable & Cinematic Showcase
    this.autoRotate = false;
    this.turntableSpeed = 1.0;
    this.isCinematicShowcase = false;
    this.cinematicTime = 0;

    this.init();
    this.setupEnvironments();
    this.setupCar();
    this.setupResize();
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  init() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x07090e);
    this.scene.fog = new THREE.FogExp2(0x07090e, 0.035);

    this.camera = new THREE.PerspectiveCamera(42, this.width / this.height, 0.1, 100);
    this.camera.position.set(4.8, 1.6, 5.2);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;

    this.container.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.maxPolarAngle = Math.PI / 2 - 0.02; // Prevents camera going below ground
    this.controls.minDistance = 2.5;
    this.controls.maxDistance = 14.0;
    this.controls.target.set(0, 0.5, 0);

    // Reflective Floor
    const floorGeo = new THREE.PlaneGeometry(60, 60);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x090b10,
      roughness: 0.35,
      metalness: 0.7
    });
    this.floor = new THREE.Mesh(floorGeo, floorMat);
    this.floor.rotation.x = -Math.PI / 2;
    this.floor.receiveShadow = true;
    this.scene.add(this.floor);

    // Floor Grid
    this.grid = new THREE.GridHelper(40, 40, 0xff334b, 0x1f2937);
    this.grid.position.y = 0.01;
    this.scene.add(this.grid);
  }

  // Dynamic Background Update for Theme Switching (Light & Dark Mode)
  updateThemeBackground(theme) {
    if (!this.scene) return;
    const bgHex = theme === 'light' ? 0xe2e8f0 : 0x07090e;
    
    if (this.scene.background) {
      this.scene.background.setHex(bgHex);
    }
    if (this.scene.fog) {
      this.scene.fog.color.setHex(bgHex);
    }
    if (this.floor && this.floor.material) {
      this.floor.material.color.setHex(theme === 'light' ? 0xcbd5e1 : 0x090b10);
    }
  }

  setupEnvironments() {
    // Ambient Light
    const ambient = new THREE.AmbientLight(0xffffff, 0.8);
    this.scene.add(ambient);

    // 1. Dark Studio Profile
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
    keyLight.position.set(5, 8, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 2048;
    keyLight.shadow.mapSize.height = 2048;

    const fillLight = new THREE.DirectionalLight(0x80bfff, 1.2);
    fillLight.position.set(-5, 4, -5);

    const rimLight = new THREE.DirectionalLight(0xff334b, 1.8);
    rimLight.position.set(0, 5, -6);

    this.studioLights = [keyLight, fillLight, rimLight];
    this.studioLights.forEach(l => this.scene.add(l));

    // 2. Cyber Neon Profile
    const cyberCyan = new THREE.PointLight(0x00e5ff, 4.0, 15);
    cyberCyan.position.set(-4, 2, 3);

    const cyberPink = new THREE.PointLight(0xff0055, 4.0, 15);
    cyberPink.position.set(4, 2, -3);

    this.cyberLights = [cyberCyan, cyberPink];
    this.cyberLights.forEach(l => {
      l.visible = false;
      this.scene.add(l);
    });

    // 3. Sunset Gold Profile
    const sunGold = new THREE.DirectionalLight(0xffaa44, 3.5);
    sunGold.position.set(8, 3, 4);

    const skyPurple = new THREE.DirectionalLight(0x552288, 1.0);
    skyPurple.position.set(-8, 6, -4);

    this.sunsetLights = [sunGold, skyPurple];
    this.sunsetLights.forEach(l => {
      l.visible = false;
      this.scene.add(l);
    });
  }

  setupCar() {
    this.car = new CarModel(this.scene);
  }

  setEnvironment(envType) {
    this.envType = envType;

    this.studioLights.forEach(l => l.visible = (envType === 'studio'));
    this.cyberLights.forEach(l => l.visible = (envType === 'cyber'));
    this.sunsetLights.forEach(l => l.visible = (envType === 'sunset'));

    if (envType === 'studio') {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      this.scene.background.setHex(isLight ? 0xe2e8f0 : 0x07090e);
      this.scene.fog.color.setHex(isLight ? 0xe2e8f0 : 0x07090e);
    } else if (envType === 'cyber') {
      this.scene.background.setHex(0x030308);
      this.scene.fog.color.setHex(0x030308);
    } else if (envType === 'sunset') {
      this.scene.background.setHex(0x1a0c18);
      this.scene.fog.color.setHex(0x1a0c18);
    }
  }

  setCameraPreset(preset) {
    this.isCinematicShowcase = false;

    const targets = {
      'hero': { pos: { x: 4.8, y: 1.6, z: 5.2 }, look: { x: 0, y: 0.5, z: 0 } },
      'side': { pos: { x: 0, y: 1.1, z: 6.5 }, look: { x: 0, y: 0.5, z: 0 } },
      'front': { pos: { x: 0, y: 1.0, z: 5.5 }, look: { x: 0, y: 0.4, z: 0 } },
      'rear': { pos: { x: 0, y: 1.2, z: -5.5 }, look: { x: 0, y: 0.5, z: 0 } },
      'cockpit': { pos: { x: 0.35, y: 1.05, z: 0.1 }, look: { x: -0.2, y: 0.85, z: 1.5 } },
      'wheels': { pos: { x: 2.2, y: 0.5, z: 2.0 }, look: { x: 1.2, y: 0.3, z: 1.2 } },
      'top': { pos: { x: 0.01, y: 9.0, z: 0.01 }, look: { x: 0, y: 0, z: 0 } }
    };

    if (preset === 'cinematic') {
      this.isCinematicShowcase = true;
      return;
    }

    const t = targets[preset] || targets.hero;

    gsap.to(this.camera.position, {
      x: t.pos.x,
      y: t.pos.y,
      z: t.pos.z,
      duration: 1.6,
      ease: 'power3.inOut'
    });

    gsap.to(this.controls.target, {
      x: t.look.x,
      y: t.look.y,
      z: t.look.z,
      duration: 1.6,
      ease: 'power3.inOut'
    });
  }

  toggleTurntable() {
    this.autoRotate = !this.autoRotate;
    this.controls.autoRotate = this.autoRotate;
    this.controls.autoRotateSpeed = this.turntableSpeed * 1.5;
    return this.autoRotate;
  }

  setTurntableSpeed(speed) {
    this.turntableSpeed = speed;
    this.controls.autoRotateSpeed = speed * 1.5;
  }

  captureScreenshot() {
    const gridVis = this.grid.visible;
    this.grid.visible = false;
    this.renderer.render(this.scene, this.camera);
    const dataUrl = this.renderer.domElement.toDataURL('image/png');
    this.grid.visible = gridVis;
    return dataUrl;
  }

  setupResize() {
    window.addEventListener('resize', () => {
      this.width = this.container.clientWidth;
      this.height = this.container.clientHeight;
      this.camera.aspect = this.width / this.height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.width, this.height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });
  }

  animate() {
    requestAnimationFrame(this.animate);

    if (this.isCinematicShowcase) {
      this.cinematicTime += 0.008;
      const radius = 5.2 + Math.sin(this.cinematicTime * 0.5) * 1.2;
      const camY = 1.4 + Math.cos(this.cinematicTime * 0.4) * 0.6;
      
      this.camera.position.x = Math.sin(this.cinematicTime) * radius;
      this.camera.position.z = Math.cos(this.cinematicTime) * radius;
      this.camera.position.y = Math.max(0.6, camY);
      this.controls.target.set(0, 0.5, 0);
    }

    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }
}