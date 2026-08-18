/**
 * APEX GT // Bespoke 3D Hypercar Configurator Entry Point
 */

import { SceneManager } from './3d/SceneManager.js';
import { ConfiguratorUI } from './ui/ConfiguratorUI.js';
import { soundFX } from './audio/SoundFX.js';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('canvas-container');
  if (!container) return;

  // Initialize 3D Graphics Engine & Environment
  const sceneManager = new SceneManager(container);

  // Initialize Interactive UI HUD & Controls
  const configuratorUI = new ConfiguratorUI(sceneManager);

  // First user interaction unblocks Web Audio context
  const unlockAudio = () => {
    soundFX.init();
    soundFX.resume();
    window.removeEventListener('click', unlockAudio);
    window.removeEventListener('keydown', unlockAudio);
    window.removeEventListener('touchstart', unlockAudio);
  };
  window.addEventListener('click', unlockAudio);
  window.addEventListener('keydown', unlockAudio);
  window.addEventListener('touchstart', unlockAudio);

  console.log("%c APEX GT // Hypercar Configurator 3D Active ", "background: #ff334b; color: #fff; font-weight: bold; padding: 4px 8px; border-radius: 4px;");
});
