/**
 * APEX GT // Multi-Vehicle Web Audio Synthesizer Engine
 * Generates realistic bespoke soundscapes for Rolls-Royce, Toyota, Maruti Suzuki,
 * MG Cyberster Electric, Mahindra 4x4, and Lamborghini.
 * Designed by S. RITISH
 */

class SoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.isRevving = false;
    this.currentRPM = 950;
    this.targetRPM = 950;
    this.idleRPM = 950;
    this.maxRPM = 8600;
    this.currentProfile = 'toyota';
    
    // Audio Nodes
    this.masterGain = null;
    this.engineGain = null;
    this.osc1 = null;
    this.osc2 = null;
    this.oscSub = null;
    this.turboOsc = null;
    this.turboGain = null;
    this.filter = null;
    this.distortion = null;
    this.engineStarted = false;
    
    this.updateLoop = this.updateLoop.bind(this);
    requestAnimationFrame(this.updateLoop);
  }

  init() {
    if (this.ctx) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
      this.setupEngineNodes();
    } catch (err) {
      console.warn("Web Audio API not supported:", err);
    }
  }

  resume() {
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setupEngineNodes() {
    if (!this.ctx) return;

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);

    this.engineGain = this.ctx.createGain();
    this.engineGain.gain.setValueAtTime(0.0, this.ctx.currentTime);

    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = 'lowpass';
    this.filter.frequency.setValueAtTime(450, this.ctx.currentTime);
    this.filter.Q.setValueAtTime(3.5, this.ctx.currentTime);

    this.distortion = this.ctx.createWaveShaper();
    this.distortion.curve = this.makeDistortionCurve(16);
    this.distortion.oversample = '4x';

    this.osc1 = this.ctx.createOscillator();
    this.osc1.type = 'sawtooth';
    this.osc1.frequency.setValueAtTime(36, this.ctx.currentTime);

    this.osc2 = this.ctx.createOscillator();
    this.osc2.type = 'triangle';
    this.osc2.frequency.setValueAtTime(72, this.ctx.currentTime);

    this.oscSub = this.ctx.createOscillator();
    this.oscSub.type = 'sine';
    this.oscSub.frequency.setValueAtTime(18, this.ctx.currentTime);

    this.turboOsc = this.ctx.createOscillator();
    this.turboOsc.type = 'sine';
    this.turboOsc.frequency.setValueAtTime(1100, this.ctx.currentTime);

    this.turboGain = this.ctx.createGain();
    this.turboGain.gain.setValueAtTime(0.0, this.ctx.currentTime);
    this.turboOsc.connect(this.turboGain);
    this.turboGain.connect(this.masterGain);

    this.osc1.connect(this.distortion);
    this.osc2.connect(this.distortion);
    this.oscSub.connect(this.filter);
    this.distortion.connect(this.filter);
    this.filter.connect(this.engineGain);
    this.engineGain.connect(this.masterGain);

    this.osc1.start();
    this.osc2.start();
    this.oscSub.start();
    this.turboOsc.start();
  }

  makeDistortionCurve(amount) {
    const k = typeof amount === 'number' ? amount : 20;
    const n_samples = 44100;
    const curve = new Float32Array(n_samples);
    const deg = Math.PI / 180;
    for (let i = 0; i < n_samples; ++i) {
      const x = (i * 2) / n_samples - 1;
      curve[i] = ((3 + k) * x * 20 * deg) / (Math.PI + k * Math.abs(x));
    }
    return curve;
  }

  setVehicleProfile(brandKey) {
    this.currentProfile = brandKey;
    if (brandKey === 'rolls_royce') {
      this.idleRPM = 600;
      this.maxRPM = 5500;
    } else if (brandKey === 'mg') {
      this.idleRPM = 0;
      this.maxRPM = 14000;
    } else if (brandKey === 'maruti') {
      this.idleRPM = 850;
      this.maxRPM = 6800;
    } else if (brandKey === 'toyota' || brandKey === 'mahindra') {
      this.idleRPM = 750;
      this.maxRPM = 5200;
    } else {
      this.idleRPM = 950;
      this.maxRPM = 8600;
    }
    this.targetRPM = this.idleRPM;
  }

  startEngine() {
    this.init();
    this.resume();
    if (!this.ctx || this.isMuted) return;

    this.engineStarted = true;
    this.playStarterSound();

    setTimeout(() => {
      if (this.engineGain && this.ctx) {
        this.engineGain.gain.cancelScheduledValues(this.ctx.currentTime);
        this.engineGain.gain.linearRampToValueAtTime(0.4, this.ctx.currentTime + 0.6);
      }
    }, 450);
  }

  playStarterSound() {
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;
    const starterOsc = this.ctx.createOscillator();
    const starterGain = this.ctx.createGain();
    starterOsc.type = 'sawtooth';
    starterOsc.frequency.setValueAtTime(140, now);
    starterOsc.frequency.exponentialRampToValueAtTime(320, now + 0.35);

    starterGain.gain.setValueAtTime(0.5, now);
    starterGain.gain.exponentialRampToValueAtTime(0.01, now + 0.45);

    starterOsc.connect(starterGain);
    starterGain.connect(this.masterGain);
    starterOsc.start(now);
    starterOsc.stop(now + 0.45);
  }

  setRevving(state) {
    this.init();
    this.resume();
    this.isRevving = state;
    if (!this.engineStarted) this.startEngine();

    this.targetRPM = state ? this.maxRPM : this.idleRPM;
    if (!state && this.currentRPM > 4200 && this.currentProfile !== 'mg' && this.currentProfile !== 'rolls_royce') {
      this.playExhaustPop();
    }
  }

  playExhaustPop() {
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;
    const bufferSize = this.ctx.sampleRate * 0.07;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = buffer;

    const popFilter = this.ctx.createBiquadFilter();
    popFilter.type = 'bandpass';
    popFilter.frequency.setValueAtTime(650, now);

    const popGain = this.ctx.createGain();
    popGain.gain.setValueAtTime(0.55, now);
    popGain.gain.exponentialRampToValueAtTime(0.01, now + 0.07);

    whiteNoise.connect(popFilter);
    popFilter.connect(popGain);
    popGain.connect(this.masterGain);
    whiteNoise.start(now);
    whiteNoise.stop(now + 0.08);
  }

  updateLoop() {
    if (this.ctx && this.engineStarted && !this.isMuted) {
      const lerpSpeed = this.isRevving ? 0.09 : 0.05;
      this.currentRPM += (this.targetRPM - this.currentRPM) * lerpSpeed;

      const norm = (this.currentRPM - this.idleRPM) / (this.maxRPM - this.idleRPM || 1);
      const now = this.ctx.currentTime;

      if (this.currentProfile === 'mg') {
        // Electric Hyper-Drive Whine
        this.osc1.type = 'sine';
        this.osc1.frequency.setValueAtTime(200 + norm * 1800, now);
        this.filter.frequency.setValueAtTime(1200 + norm * 3500, now);
        this.turboGain.gain.setValueAtTime(norm * 0.3, now);
        this.turboOsc.frequency.setValueAtTime(800 + norm * 2600, now);
      } else {
        const baseFreq = 26 + norm * 140;
        this.osc1.frequency.setValueAtTime(baseFreq, now);
        this.osc2.frequency.setValueAtTime(baseFreq * 2.0, now);
        this.filter.frequency.setValueAtTime(250 + norm * 2400, now);
        this.turboGain.gain.setValueAtTime(norm * 0.16, now);
        this.turboOsc.frequency.setValueAtTime(900 + norm * 4200, now);
      }
    }
    requestAnimationFrame(this.updateLoop);
  }

  getRPMData() {
    return {
      rpm: Math.round(this.currentRPM),
      normalized: Math.max(0, Math.min(1, (this.currentRPM - this.idleRPM) / (this.maxRPM - this.idleRPM || 1))),
      boost: ((this.currentRPM / (this.maxRPM || 1)) * 2.1).toFixed(1)
    };
  }

  playDoorSound(isOpen) {
    this.init();
    this.resume();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;

    const latchOsc = this.ctx.createOscillator();
    const latchGain = this.ctx.createGain();
    latchOsc.type = 'sawtooth';
    latchOsc.frequency.setValueAtTime(isOpen ? 750 : 420, now);
    latchOsc.frequency.exponentialRampToValueAtTime(110, now + 0.06);

    latchGain.gain.setValueAtTime(0.4, now);
    latchGain.gain.exponentialRampToValueAtTime(0.01, now + 0.07);

    latchOsc.connect(latchGain);
    latchGain.connect(this.masterGain);
    latchOsc.start(now);
    latchOsc.stop(now + 0.08);
  }

  playHeadlightClick() {
    this.init();
    this.resume();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1400, now);
    osc.frequency.exponentialRampToValueAtTime(500, now + 0.04);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.06);
  }

  playLockChirp() {
    this.init();
    this.resume();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;

    for (let i = 0; i < 2; i++) {
      const startTime = now + i * 0.09;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(2400, startTime);
      osc.frequency.linearRampToValueAtTime(2900, startTime + 0.04);

      gain.gain.setValueAtTime(0.28, startTime);
      gain.gain.exponentialRampToValueAtTime(0.01, startTime + 0.05);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(startTime);
      osc.stop(startTime + 0.06);
    }
  }

  playServoSound() {
    this.init();
    this.resume();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(420, now);
    osc.frequency.linearRampToValueAtTime(580, now + 0.35);

    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.42);
  }

  playClick() {
    this.init();
    this.resume();
    if (!this.ctx || this.isMuted) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(750, now);
    osc.frequency.exponentialRampToValueAtTime(180, now + 0.03);

    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.03);

    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start(now);
    osc.stop(now + 0.04);
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : 0.7, this.ctx.currentTime);
    }
    return this.isMuted;
  }
}

export const soundFX = new SoundEngine();
