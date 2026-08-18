import * as THREE from 'three';

export class SceneManager {
  constructor(container) {
    this.container = container;
    this.scene = new THREE.Scene();
    // ... your existing constructor setup ...
  }

  // PLACE THE METHOD INSIDE THE CLASS BODY HERE:
  updateThemeBackground(theme) {
    if (!this.scene) return;
    const bgHex = theme === 'light' ? 0xe2e8f0 : 0x050508;
    
    if (this.scene.background) {
      this.scene.background.set(bgHex);
    }
    if (this.scene.fog) {
      this.scene.fog.color.set(bgHex);
    }
  }

  // ... your other existing class methods (render, animate, setupLights, etc.) ...
}