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
    this.scene.fog = new THREE.FogExp2(0x07090e, 0.04);

    this.camera = new THREE.PerspectiveCamera(38, this.width / this.height, 0.1, 100);
    this.camera.position.set(4.5, 1.6, 4.8);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
      preserveDrawingBuffer: true
    });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.container.appendChild(this.renderer.domElement);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.maxPolarAngle = Math.PI / 2 - 0.03;
    this.controls.minDistance = 2.2;
    this.controls.maxDistance = 16.0;
    this.controls.target.set(0, 0.55, 0);

    this.createShowroomFloor();
  }

  createShowroomFloor() {
    const floorCanvas = document.createElement('canvas');
    floorCanvas.width = 512;
    floorCanvas.height = 512;
    const ctx = floorCanvas.getContext('2d');
    const grad = ctx.createRadialGradient(256, 256, 40, 256, 256, 256);
    grad.addColorStop(0, '#151a24');
    grad.addColorStop(0.55, '#0a0d14');
    grad.addColorStop(1, '#05070a');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 512, 512);

    const floorTex = new THREE.CanvasTexture(floorCanvas);
    const floorGeo = new THREE.PlaneGeometry(35, 35);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x080a0f,
      map: floorTex,
      roughness: 0.16,
      metalness: 0.88,
      envMapIntensity: 1.2
    });
    this.floor = new THREE.Mesh(floorGeo, floorMat);
    this.floor.rotateX(-Math.PI / 2);
    this.floor.receiveShadow = true;
    this.scene.add(this.floor);

    this.grid = new THREE.GridHelper(26, 26, 0xff334b, 0x1e2738);
    this.grid.position.y = 0.005;
    this.scene.add(this.grid);

    // Contact Shadow
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 512;
    shadowCanvas.height = 512;
    const sCtx = shadowCanvas.getContext('2d');
    const sGrad = sCtx.createRadialGradient(256, 256, 50, 256, 256, 240);
    sGrad.addColorStop(0, 'rgba(0,0,0,0.95)');
    sGrad.addColorStop(0.6, 'rgba(0,0,0,0.65)');
    sGrad.addColorStop(1, 'rgba(0,0,0,0)');
    sCtx.fillStyle = sGrad;
    sCtx.fillRect(0, 0, 512, 512);

    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(3.6, 5.6),
      new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, opacity: 0.88, depthWrite: false })
    );
    shadowMesh.rotateX(-Math.PI / 2);
    shadowMesh.position.set(0, 0.01, 0);
    this.scene.add(shadowMesh);
  }

  setupEnvironments() {
    // 1. Studio Lighting
    const studioGroup = new THREE.Group();
    studioGroup.add(new THREE.AmbientLight(0xffffff, 0.85));

    const mainLight = new THREE.DirectionalLight(0xffffff, 3.5);
    mainLight.position.set(4, 9, 5);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 2048;
    mainLight.shadow.mapSize.height = 2048;
    studioGroup.add(mainLight);

    const rimL = new THREE.DirectionalLight(0xffffff, 2.4);
    rimL.position.set(-7, 3.5, -4);
    studioGroup.add(rimL);

    const rimR = new THREE.DirectionalLight(0xffffff, 2.0);
    rimR.position.set(7, 3, -3);
    studioGroup.add(rimR);

    this.studioLights.push(studioGroup);
    this.scene.add(studioGroup);

    // 2. Cyberpunk Neon
    const cyberGroup = new THREE.Group();
    cyberGroup.visible = false;
    cyberGroup.add(new THREE.AmbientLight(0x0c1024, 1.3));

    const cyanLight = new THREE.PointLight(0x00e5ff, 14.0, 20);
    cyanLight.position.set(-4.5, 3.5, 2);
    cyberGroup.add(cyanLight);

    const magLight = new THREE.PointLight(0xff0077, 12.0, 20);
    magLight.position.set(4.5, 3.5, -2);
    cyberGroup.add(magLight);

    this.cyberLights.push(cyberGroup);
    this.scene.add(cyberGroup);

    // 3. Sunset Vista
    const sunsetGroup = new THREE.Group();
    sunsetGroup.visible = false;
    sunsetGroup.add(new THREE.AmbientLight(0x2c1930, 1.1));

    const sun = new THREE.DirectionalLight(0xffaa33, 5.0);
    sun.position.set(8, 2.8, 6);
    sun.castShadow = true;
    sunsetGroup.add(sun);

    this.sunsetLights.push(sunsetGroup);
    this.scene.add(sunsetGroup);
  }

  setEnvironment(envKey) {
    this.envType = envKey;
    this.studioLights.forEach(g => g.visible = envKey === 'studio');
    this.cyberLights.forEach(g => g.visible = envKey === 'cyberpunk');
    this.sunsetLights.forEach(g => g.visible = envKey === 'sunset');

    if (envKey === 'studio') {
      this.scene.background.set(0x07090e);
      this.grid.material.color.set(0xff334b);
      this.renderer.toneMappingExposure = 1.2;
    } else if (envKey === 'cyberpunk') {
      this.scene.background.set(0x04060d);
      this.grid.material.color.set(0x00e5ff);
      this.renderer.toneMappingExposure = 1.4;
    } else {
      this.scene.background.set(0x1a0f1d);
      this.grid.material.color.set(0xffaa33);
      this.renderer.toneMappingExposure = 1.3;
    }
  }

  setupCar() {
    this.car = new CarModel(this.scene);
  }

  setCameraView(viewKey) {
    this.isCinematicShowcase = false;
    const views = {
      'hero': { pos: [4.5, 1.5, 4.6], target: [0, 0.55, 0], fov: 38 },
      'side': { pos: [5.6, 1.2, 0], target: [0, 0.55, 0], fov: 36 },
      'front': { pos: [0, 1.1, -5.2], target: [0, 0.52, 0], fov: 36 },
      'cockpit': { pos: [-0.36, 0.88, 0.2], target: [-0.36, 0.65, -0.6], fov: 55 },
      'wheel': { pos: [2.1, 0.45, -1.2], target: [0.95, 0.45, -1.4], fov: 30 },
      'rear': { pos: [-3.4, 1.5, 4.8], target: [0, 0.65, 1.8], fov: 36 },
      'top': { pos: [0.05, 8.5, 0.05], target: [0, 0, 0], fov: 34 }
    };

    const v = views[viewKey] || views.hero;
    gsap.to(this.camera.position, { x: v.pos[0], y: v.pos[1], z: v.pos[2], duration: 1.3, ease: 'power3.inOut' });
    gsap.to(this.controls.target, {
      x: v.target[0], y: v.target[1], z: v.target[2],
      duration: 1.3, ease: 'power3.inOut',
      onUpdate: () => this.camera.lookAt(this.controls.target)
    });
    gsap.to(this.camera, {
      fov: v.fov, duration: 1.3, ease: 'power3.inOut',
      onUpdate: () => this.camera.updateProjectionMatrix()
    });
  }

  toggleCinematicShowcase() {
    this.isCinematicShowcase = !this.isCinematicShowcase;
    if (this.isCinematicShowcase) {
      this.autoRotate = false;
      this.controls.autoRotate = false;
    }
    return this.isCinematicShowcase;
  }

  toggleAutoRotate() {
    this.autoRotate = !this.autoRotate;
    this.controls.autoRotate = this.autoRotate;
    this.controls.autoRotateSpeed = this.turntableSpeed * 1.5;
    return this.autoRotate;
  }

  setTurntableSpeed(speed) {
    this.turntableSpeed = speed;
    this.controls.autoRotateSpeed = speed * 1.5;
  }

  captureScreenshot(aspectRatio = '16:9') {
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
      const camY = 1.4 + Math.cos(this.cinematicTime * 0.7) * 0.6;
      this.camera.position.x = Math.sin(this.cinematicTime) * radius;
      this.camera.position.z = Math.cos(this.cinematicTime) * radius;
      this.camera.position.y = camY;
      this.camera.lookAt(0, 0.55, 0);
    } else {
      this.controls.update();
    }

    this.renderer.render(this.scene, this.camera);
  }
}