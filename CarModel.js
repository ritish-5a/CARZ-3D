/**
 * APEX GT // Ultra-Realistic Multi-Brand 3D Automotive Engine
 * Featuring:
 *  1. TOYOTA Fortuner Legender 4x4 SUV
 *  2. ROLLS-ROYCE Spectre / Phantom Bespoke Grand Saloon
 *  3. MARUTI SUZUKI Swift Sport
 *  4. MG (Morris Garages) Cyberster Electric Roadster
 *  5. MAHINDRA Thar 4x4 Rugged Trail Off-Roader
 *  6. LAMBORGHINI Apex GT Extreme Hypercar
 *
 * Designed and Engineered by S. RITISH
 */

import * as THREE from 'three';
import { matManager } from './Materials.js';
import gsap from 'gsap';
import { soundFX } from '../audio/SoundFX.js';

export class CarModel {
  constructor(scene) {
    this.scene = scene;
    this.root = new THREE.Group();
    this.root.name = "ApexGarageRoot";

    this.currentBrand = 'toyota';
    this.vehicleGroups = {};
    
    // Animation States
    this.doorsOpen = false;
    this.hoodOpen = false;
    this.tailgateOpen = false;
    this.suspensionRaised = false;
    this.spoilerTrackMode = false;
    this.headlightsOn = false;
    this.underglowOn = false;
    this.hazardFlashing = false;
    this.hazardInterval = null;

    // Animated Node Handles per vehicle
    this.animatedNodes = {
      toyota: {},
      rolls_royce: {},
      maruti: {},
      mg: {},
      mahindra: {},
      lamborghini: {}
    };

    this.headlightSpotlights = [];
    this.volumetricCones = [];

    this.buildAllVehicles();
    this.scene.add(this.root);
    this.switchVehicle('toyota');
  }

  buildAllVehicles() {
    this.vehicleGroups['toyota'] = this.buildToyotaFortuner();
    this.vehicleGroups['rolls_royce'] = this.buildRollsRoyceSpectre();
    this.vehicleGroups['maruti'] = this.buildMarutiSwift();
    this.vehicleGroups['mg'] = this.buildMGCyberster();
    this.vehicleGroups['mahindra'] = this.buildMahindraThar();
    this.vehicleGroups['lamborghini'] = this.buildApexHypercar();

    Object.keys(this.vehicleGroups).forEach(key => {
      this.root.add(this.vehicleGroups[key]);
      this.vehicleGroups[key].visible = false;
    });
  }

  // =========================================================================
  // 1. TOYOTA FORTUNER LEGENDER (4x4 Full-Size Luxury SUV)
  // =========================================================================
  buildToyotaFortuner() {
    const group = new THREE.Group();
    group.name = "ToyotaFortuner";
    const mats = matManager.materials;
    const nodes = this.animatedNodes.toyota;

    // Main Suspension Root (allows air-suspension height adjustment)
    const bodyRoot = new THREE.Group();
    nodes.bodyRoot = bodyRoot;
    group.add(bodyRoot);

    // Sculpted SUV Lower Body & Underbody Skid Plates
    const lowerBodyGeo = new THREE.BoxGeometry(2.05, 0.55, 4.65);
    const lowerBody = new THREE.Mesh(lowerBodyGeo, mats.bodyPaint);
    lowerBody.position.set(0, 0.72, 0);
    lowerBody.castShadow = true;
    lowerBody.receiveShadow = true;
    bodyRoot.add(lowerBody);

    // Power-Bulge Sculpted SUV Hood
    const hoodGeo = new THREE.BoxGeometry(1.68, 0.12, 1.45);
    const hood = new THREE.Mesh(hoodGeo, mats.bodyPaint);
    hood.position.set(0, 1.06, -1.35);
    hood.rotation.x = -0.06;
    hood.castShadow = true;
    nodes.hood = hood;
    bodyRoot.add(hood);

    // Detailed 2.8L D-4D Turbo Diesel Engine Bay
    const engineBay = new THREE.Group();
    engineBay.position.set(0, 0.72, -1.35);
    const engineBlock = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.35, 0.9), mats.engineBlock);
    const intercooler = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.08, 0.4), mats.titaniumExhaust);
    intercooler.position.set(0, 0.22, 0);
    engineBay.add(engineBlock);
    engineBay.add(intercooler);
    bodyRoot.add(engineBay);

    // Upper Glass Greenhouse & Floating Blacked-Out Pillars
    const cabinGeo = new THREE.BoxGeometry(1.82, 0.72, 2.7);
    const cabin = new THREE.Mesh(cabinGeo, mats.bodyPaint);
    cabin.position.set(0, 1.32, 0.45);
    cabin.castShadow = true;
    bodyRoot.add(cabin);

    // Front Curved Windshield
    const windshield = new THREE.Mesh(new THREE.BoxGeometry(1.72, 0.65, 0.06), mats.windshield);
    windshield.position.set(0, 1.38, -0.85);
    windshield.rotation.x = 0.52;
    bodyRoot.add(windshield);

    // Side & Rear Windows
    const sideGlassL = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.48, 2.2), mats.windshield);
    sideGlassL.position.set(-0.92, 1.34, 0.5);
    bodyRoot.add(sideGlassL);

    const sideGlassR = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.48, 2.2), mats.windshield);
    sideGlassR.position.set(0.92, 1.34, 0.5);
    bodyRoot.add(sideGlassR);

    // Dual-Tier Legender Piano Black Grille with Chrome Accents
    const grille = new THREE.Mesh(
      new THREE.BoxGeometry(1.58, 0.52, 0.15),
      new THREE.MeshStandardMaterial({ color: 0x0a0a0c, roughness: 0.15, metalness: 0.85 })
    );
    grille.position.set(0, 0.78, -2.32);
    bodyRoot.add(grille);

    // Toyota Chrome Oval Emblem
    const emblem = new THREE.Mesh(
      new THREE.TorusGeometry(0.09, 0.02, 16, 24),
      new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.95, roughness: 0.05 })
    );
    emblem.position.set(0, 0.92, -2.41);
    bodyRoot.add(emblem);

    // Quad-LED Projector Split Headlamps with Dynamic L-Shaped DRLs
    for (let side of [-1, 1]) {
      const headHousing = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.16, 0.22), mats.headlightGlass);
      headHousing.position.set(side * 0.76, 0.96, -2.22);
      bodyRoot.add(headHousing);

      const drl = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.025, 0.08), mats.drlLED);
      drl.position.set(side * 0.76, 1.03, -2.31);
      bodyRoot.add(drl);

      // Spotlights for high-beam road projection
      const spot = new THREE.SpotLight(0xffffff, 0, 35, Math.PI / 6, 0.45, 1.2);
      spot.position.set(side * 0.76, 0.96, -2.35);
      spot.target.position.set(side * 0.5, 0, -14);
      bodyRoot.add(spot);
      bodyRoot.add(spot.target);
      this.headlightSpotlights.push(spot);
    }

    // Flared Muscular Wheel Arches
    for (let side of [-1, 1]) {
      const archF = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.36, 0.95), mats.matteCarbon);
      archF.position.set(side * 1.04, 0.58, -1.45);
      bodyRoot.add(archF);

      const archR = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.36, 0.95), mats.matteCarbon);
      archR.position.set(side * 1.04, 0.58, 1.45);
      bodyRoot.add(archR);

      // Functional SUV Running Footsteps
      const step = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.04, 2.3), mats.matteCarbon);
      step.position.set(side * 1.08, 0.38, 0.05);
      bodyRoot.add(step);

      // Silver Roof Rails
      const rail = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.05, 2.6), mats.titaniumExhaust);
      rail.position.set(side * 0.78, 1.72, 0.4);
      bodyRoot.add(rail);
    }

    // Rear Roof Spoiler & Dynamic LED Taillights
    const rearSpoiler = new THREE.Mesh(new THREE.BoxGeometry(1.82, 0.06, 0.45), mats.bodyPaint);
    rearSpoiler.position.set(0, 1.68, 1.85);
    bodyRoot.add(rearSpoiler);

    const rearLightBar = new THREE.Mesh(new THREE.BoxGeometry(1.88, 0.08, 0.08), mats.taillightLED);
    rearLightBar.position.set(0, 0.98, 2.34);
    bodyRoot.add(rearLightBar);

    // Opening Front Left Door & Right Door
    const doorL = new THREE.Group();
    doorL.position.set(-1.02, 0.72, -0.6);
    const doorMeshL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.65, 1.15), mats.bodyPaint);
    doorMeshL.position.set(0, 0.2, 0.55);
    doorL.add(doorMeshL);
    nodes.doorL = doorL;
    bodyRoot.add(doorL);

    const doorR = new THREE.Group();
    doorR.position.set(1.02, 0.72, -0.6);
    const doorMeshR = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.65, 1.15), mats.bodyPaint);
    doorMeshR.position.set(0, 0.2, 0.55);
    doorR.add(doorMeshR);
    nodes.doorR = doorR;
    bodyRoot.add(doorR);

    // Wheels (Front & Rear Dual-Tone Machine Finish)
    this.addDetailedWheels(group, {
      frontZ: -1.45, rearZ: 1.45,
      x: 0.98, y: 0.48,
      radius: 0.48, width: 0.32
    });

    return group;
  }

  // =========================================================================
  // 2. ROLLS-ROYCE SPECTRE / PHANTOM (Bespoke Grand Saloon)
  // =========================================================================
  buildRollsRoyceSpectre() {
    const group = new THREE.Group();
    group.name = "RollsRoyceSpectre";
    const mats = matManager.materials;
    const nodes = this.animatedNodes.rolls_royce;

    const bodyRoot = new THREE.Group();
    nodes.bodyRoot = bodyRoot;
    group.add(bodyRoot);

    // Long Wheelbase Sovereign Stature
    const lowerBody = new THREE.Mesh(
      new THREE.BoxGeometry(2.08, 0.52, 5.2),
      mats.bodyPaint
    );
    lowerBody.position.set(0, 0.58, 0);
    lowerBody.castShadow = true;
    lowerBody.receiveShadow = true;
    bodyRoot.add(lowerBody);

    // Monumental High Bonnet
    const hood = new THREE.Mesh(
      new THREE.BoxGeometry(1.78, 0.1, 1.95),
      mats.bodyPaint
    );
    hood.position.set(0, 0.88, -1.55);
    hood.rotation.x = -0.04;
    nodes.hood = hood;
    bodyRoot.add(hood);

    // Colossal 6.75L Twin-Turbo V12 Powertrain (under hood)
    const v12 = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.4, 1.2), mats.engineBlock);
    v12.position.set(0, 0.6, -1.55);
    bodyRoot.add(v12);

    // Illuminated Pantheon Chrome Grille
    const pantheon = new THREE.Mesh(
      new THREE.BoxGeometry(1.35, 0.74, 0.18),
      new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 1.0, roughness: 0.02, envMapIntensity: 2.2 })
    );
    pantheon.position.set(0, 0.74, -2.55);
    bodyRoot.add(pantheon);

    // Individual Polished Vertical Chrome Vanes
    for (let i = -0.55; i <= 0.55; i += 0.075) {
      const vane = new THREE.Mesh(
        new THREE.BoxGeometry(0.012, 0.68, 0.03),
        new THREE.MeshBasicMaterial({ color: 0xffffff })
      );
      vane.position.set(i, 0.74, -2.65);
      bodyRoot.add(vane);
    }

    // Spirit of Ecstasy Chromed Figurine Mascot
    const ecstasy = new THREE.Mesh(
      new THREE.ConeGeometry(0.045, 0.14, 16),
      new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 1.0, roughness: 0.01 })
    );
    ecstasy.position.set(0, 1.16, -2.48);
    bodyRoot.add(ecstasy);

    // Ultra-Slim Laser Headlights
    for (let side of [-1, 1]) {
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.08, 0.12), mats.headlightGlass);
      head.position.set(side * 0.84, 0.94, -2.5);
      bodyRoot.add(head);

      const drl = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.02, 0.05), mats.drlLED);
      drl.position.set(side * 0.84, 0.97, -2.56);
      bodyRoot.add(drl);

      const spot = new THREE.SpotLight(0xffffff, 0, 40, Math.PI / 6, 0.4, 1.1);
      spot.position.set(side * 0.84, 0.94, -2.6);
      spot.target.position.set(side * 0.5, 0, -15);
      bodyRoot.add(spot);
      bodyRoot.add(spot.target);
      this.headlightSpotlights.push(spot);
    }

    // Stately Curved Roofline & Fastback Tail
    const cabin = new THREE.Mesh(new THREE.BoxGeometry(1.86, 0.58, 2.9), mats.bodyPaint);
    cabin.position.set(0, 1.14, 0.55);
    cabin.castShadow = true;
    bodyRoot.add(cabin);

    const windshield = new THREE.Mesh(new THREE.BoxGeometry(1.78, 0.58, 0.06), mats.windshield);
    windshield.position.set(0, 1.18, -0.85);
    windshield.rotation.x = 0.42;
    bodyRoot.add(windshield);

    // Iconic Coach Suicide Doors (Hinged at Rear, opens backward!)
    const coachDoorL = new THREE.Group();
    coachDoorL.position.set(-1.05, 0.58, 1.55); // Hinge at rear C-pillar
    const coachDoorMeshL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.65, 1.6), mats.bodyPaint);
    coachDoorMeshL.position.set(0, 0.22, -0.8);
    coachDoorL.add(coachDoorMeshL);
    nodes.coachDoorL = coachDoorL;
    bodyRoot.add(coachDoorL);

    const coachDoorR = new THREE.Group();
    coachDoorR.position.set(1.05, 0.58, 1.55);
    const coachDoorMeshR = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.65, 1.6), mats.bodyPaint);
    coachDoorMeshR.position.set(0, 0.22, -0.8);
    coachDoorR.add(coachDoorMeshR);
    nodes.coachDoorR = coachDoorR;
    bodyRoot.add(coachDoorR);

    // 23" Luxury Monoblock Wheels with Self-Righting Hubs
    this.addDetailedWheels(group, {
      frontZ: -1.65, rearZ: 1.65,
      x: 0.98, y: 0.44,
      radius: 0.44, width: 0.28
    });

    return group;
  }

  // =========================================================================
  // 3. MARUTI SUZUKI SWIFT SPORT (Hot Sport Hatch)
  // =========================================================================
  buildMarutiSwift() {
    const group = new THREE.Group();
    group.name = "MarutiSwift";
    const mats = matManager.materials;
    const nodes = this.animatedNodes.maruti;

    const bodyRoot = new THREE.Group();
    nodes.bodyRoot = bodyRoot;
    group.add(bodyRoot);

    // Compact Aerodynamic Body Shell
    const lowerBody = new THREE.Mesh(
      new THREE.BoxGeometry(1.76, 0.48, 3.85),
      mats.bodyPaint
    );
    lowerBody.position.set(0, 0.46, 0);
    lowerBody.castShadow = true;
    bodyRoot.add(lowerBody);

    // Sloping Clamshell Hood
    const hood = new THREE.Mesh(new THREE.BoxGeometry(1.45, 0.08, 1.15), mats.bodyPaint);
    hood.position.set(0, 0.68, -1.2);
    hood.rotation.x = -0.12;
    nodes.hood = hood;
    bodyRoot.add(hood);

    // Black Honeycomb Sport Grille with Suzuki Chrome 'S'
    const grille = new THREE.Mesh(new THREE.BoxGeometry(1.18, 0.42, 0.12), mats.matteCarbon);
    grille.position.set(0, 0.52, -1.86);
    bodyRoot.add(grille);

    const suzukiS = new THREE.Mesh(
      new THREE.BoxGeometry(0.14, 0.14, 0.04),
      new THREE.MeshStandardMaterial({ color: 0xffffff, metalness: 0.95, roughness: 0.08 })
    );
    suzukiS.position.set(0, 0.62, -1.94);
    suzukiS.rotation.z = 0.35;
    bodyRoot.add(suzukiS);

    // Swept-Back Projector Headlamps with LED DRLs
    for (let side of [-1, 1]) {
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.16, 0.22), mats.headlightGlass);
      head.position.set(side * 0.64, 0.72, -1.78);
      bodyRoot.add(head);

      const drl = new THREE.Mesh(new THREE.TorusGeometry(0.06, 0.015, 12, 16), mats.drlLED);
      drl.position.set(side * 0.64, 0.72, -1.88);
      bodyRoot.add(drl);

      const spot = new THREE.SpotLight(0xffffff, 0, 30, Math.PI / 6, 0.4, 1.1);
      spot.position.set(side * 0.64, 0.72, -1.9);
      spot.target.position.set(side * 0.4, 0, -12);
      bodyRoot.add(spot);
      bodyRoot.add(spot.target);
      this.headlightSpotlights.push(spot);
    }

    // Two-Tone Black Floating Roof
    const roof = new THREE.Mesh(
      new THREE.BoxGeometry(1.48, 0.04, 1.85),
      new THREE.MeshStandardMaterial({ color: 0x080a0e, roughness: 0.18, metalness: 0.8 })
    );
    roof.position.set(0, 1.18, 0.15);
    bodyRoot.add(roof);

    // Dual Polished Exhaust Tailpipes
    for (let side of [-1, 1]) {
      const tip = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 0.15, 16), mats.titaniumExhaust);
      tip.rotateX(Math.PI / 2);
      tip.position.set(side * 0.48, 0.28, 1.94);
      bodyRoot.add(tip);
    }

    // Opening Doors
    const doorL = new THREE.Group();
    doorL.position.set(-0.88, 0.46, -0.45);
    const doorMeshL = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.58, 1.05), mats.bodyPaint);
    doorMeshL.position.set(0, 0.18, 0.52);
    doorL.add(doorMeshL);
    nodes.doorL = doorL;
    bodyRoot.add(doorL);

    const doorR = new THREE.Group();
    doorR.position.set(0.88, 0.46, -0.45);
    const doorMeshR = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.58, 1.05), mats.bodyPaint);
    doorMeshR.position.set(0, 0.18, 0.52);
    doorR.add(doorMeshR);
    nodes.doorR = doorR;
    bodyRoot.add(doorR);

    // 17" Sport Diamond-Cut Alloy Wheels
    this.addDetailedWheels(group, {
      frontZ: -1.2, rearZ: 1.2,
      x: 0.85, y: 0.34,
      radius: 0.34, width: 0.22
    });

    return group;
  }

  // =========================================================================
  // 4. MG (MORRIS GARAGES) CYBERSTER (Electric Hyper-Roadster)
  // =========================================================================
  buildMGCyberster() {
    const group = new THREE.Group();
    group.name = "MGCyberster";
    const mats = matManager.materials;
    const nodes = this.animatedNodes.mg;

    const bodyRoot = new THREE.Group();
    nodes.bodyRoot = bodyRoot;
    group.add(bodyRoot);

    // Sleek Low Electric Roadster Platform
    const body = new THREE.Mesh(
      new THREE.CylinderGeometry(0.88, 0.98, 4.3, 16, 4),
      mats.bodyPaint
    );
    body.rotateX(Math.PI / 2);
    body.scale.set(1.0, 0.38, 1.0);
    body.position.set(0, 0.46, 0);
    body.castShadow = true;
    bodyRoot.add(body);

    // MG Illuminated Octagonal Emblem
    const mgBadge = new THREE.Mesh(
      new THREE.CylinderGeometry(0.1, 0.1, 0.02, 8),
      new THREE.MeshStandardMaterial({ color: 0x00e5ff, emissive: 0x00e5ff, emissiveIntensity: 2.5 })
    );
    mgBadge.rotateX(Math.PI / 2);
    mgBadge.position.set(0, 0.48, -2.16);
    bodyRoot.add(mgBadge);

    // Electric Dihedral Scissor Doors (Left & Right)
    const scissorDoorL = new THREE.Group();
    scissorDoorL.position.set(-0.88, 0.48, -0.45);
    const scissorMeshL = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.44, 1.25), mats.bodyPaint);
    scissorMeshL.position.set(0, 0.06, 0.62);
    scissorDoorL.add(scissorMeshL);
    nodes.scissorDoorL = scissorDoorL;
    bodyRoot.add(scissorDoorL);

    const scissorDoorR = new THREE.Group();
    scissorDoorR.position.set(0.88, 0.48, -0.45);
    const scissorMeshR = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.44, 1.25), mats.bodyPaint);
    scissorMeshR.position.set(0, 0.06, 0.62);
    scissorDoorR.add(scissorMeshR);
    nodes.scissorDoorR = scissorDoorR;
    bodyRoot.add(scissorDoorR);

    // Signature Kinetic Arrow LED Taillights
    for (let side of [-1, 1]) {
      const arrow = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.28, 3), mats.taillightLED);
      arrow.rotateZ(side * Math.PI / 2);
      arrow.position.set(side * 0.72, 0.62, 2.14);
      bodyRoot.add(arrow);
    }

    // 20" Turbine Aero Wheels
    this.addDetailedWheels(group, {
      frontZ: -1.35, rearZ: 1.35,
      x: 0.92, y: 0.35,
      radius: 0.38, width: 0.26
    });

    return group;
  }

  // =========================================================================
  // 5. MAHINDRA THAR 4x4 (Rugged Indian Trail Off-Roader)
  // =========================================================================
  buildMahindraThar() {
    const group = new THREE.Group();
    group.name = "MahindraThar";
    const mats = matManager.materials;
    const nodes = this.animatedNodes.mahindra;

    const bodyRoot = new THREE.Group();
    nodes.bodyRoot = bodyRoot;
    group.add(bodyRoot);

    // Boxy Heavy-Duty 4x4 Body
    const body = new THREE.Mesh(new THREE.BoxGeometry(1.85, 0.98, 3.75), mats.bodyPaint);
    body.position.set(0, 1.02, 0);
    body.castShadow = true;
    bodyRoot.add(body);

    // Signature 7-Vertical Slat Off-Road Grille
    const grille = new THREE.Mesh(new THREE.BoxGeometry(1.42, 0.54, 0.12), mats.matteCarbon);
    grille.position.set(0, 0.92, -1.91);
    bodyRoot.add(grille);

    // Circular Retro Halo LED Headlamps
    for (let side of [-1, 1]) {
      const head = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.13, 0.08, 16), mats.headlightGlass);
      head.rotateX(Math.PI / 2);
      head.position.set(side * 0.56, 0.96, -1.92);
      bodyRoot.add(head);

      const halo = new THREE.Mesh(new THREE.TorusGeometry(0.13, 0.02, 12, 24), mats.drlLED);
      halo.position.set(side * 0.56, 0.96, -1.96);
      bodyRoot.add(halo);

      const spot = new THREE.SpotLight(0xffffff, 0, 35, Math.PI / 6, 0.4, 1.2);
      spot.position.set(side * 0.56, 0.96, -1.98);
      spot.target.position.set(side * 0.4, 0, -14);
      bodyRoot.add(spot);
      bodyRoot.add(spot.target);
      this.headlightSpotlights.push(spot);
    }

    // Wide Flared Wheel Arches
    for (let side of [-1, 1]) {
      const archF = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.38, 0.85), mats.matteCarbon);
      archF.position.set(side * 1.02, 0.74, -1.25);
      bodyRoot.add(archF);

      const archR = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.38, 0.85), mats.matteCarbon);
      archR.position.set(side * 1.02, 0.74, 1.25);
      bodyRoot.add(archR);
    }

    // Rear Mounted Spare Tire on Tailgate
    const spareTire = new THREE.Mesh(new THREE.CylinderGeometry(0.46, 0.46, 0.28, 24), mats.tire);
    spareTire.rotateZ(Math.PI / 2);
    spareTire.position.set(0, 0.96, 2.02);
    bodyRoot.add(spareTire);

    // Opening Front Doors
    const doorL = new THREE.Group();
    doorL.position.set(-0.95, 0.72, -0.4);
    const doorMeshL = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.75, 1.15), mats.bodyPaint);
    doorMeshL.position.set(0, 0.22, 0.56);
    doorL.add(doorMeshL);
    nodes.doorL = doorL;
    bodyRoot.add(doorL);

    const doorR = new THREE.Group();
    doorR.position.set(0.95, 0.72, -0.4);
    const doorMeshR = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.75, 1.15), mats.bodyPaint);
    doorMeshR.position.set(0, 0.22, 0.56);
    doorR.add(doorMeshR);
    nodes.doorR = doorR;
    bodyRoot.add(doorR);

    // Deep-Dish 18" Beadlock Off-Road Wheels
    this.addDetailedWheels(group, {
      frontZ: -1.25, rearZ: 1.25,
      x: 0.98, y: 0.52,
      radius: 0.48, width: 0.32
    });

    return group;
  }

  // =========================================================================
  // 6. LAMBORGHINI APEX HYPERCAR
  // =========================================================================
  buildApexHypercar() {
    const group = new THREE.Group();
    group.name = "ApexHypercar";
    const mats = matManager.materials;
    const nodes = this.animatedNodes.lamborghini;

    const bodyRoot = new THREE.Group();
    nodes.bodyRoot = bodyRoot;
    group.add(bodyRoot);

    // Razor-Sharp Fuselage
    const bodyCoreGeo = new THREE.CylinderGeometry(0.85, 1.02, 3.8, 16, 8);
    bodyCoreGeo.rotateX(Math.PI / 2);
    bodyCoreGeo.scale(1.0, 0.42, 1.0);
    const bodyCore = new THREE.Mesh(bodyCoreGeo, mats.bodyPaint);
    bodyCore.position.set(0, 0.46, 0);
    bodyCore.castShadow = true;
    bodyRoot.add(bodyCore);

    // Front Carbon Aerodynamic Splitter
    const frontSplitter = new THREE.Mesh(new THREE.BoxGeometry(1.96, 0.04, 0.6), mats.matteCarbon);
    frontSplitter.position.set(0, 0.14, -2.1);
    bodyRoot.add(frontSplitter);

    // Dihedral Scissor Doors (Upward + Outward Swing)
    const scissorDoorL = new THREE.Group();
    scissorDoorL.position.set(-0.88, 0.52, -0.55);
    const scissorMeshL = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.48, 1.3), mats.bodyPaint);
    scissorMeshL.position.set(0, 0.05, 0.65);
    scissorDoorL.add(scissorMeshL);
    nodes.scissorDoorL = scissorDoorL;
    bodyRoot.add(scissorDoorL);

    const scissorDoorR = new THREE.Group();
    scissorDoorR.position.set(0.88, 0.52, -0.55);
    const scissorMeshR = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.48, 1.3), mats.bodyPaint);
    scissorMeshR.position.set(0, 0.05, 0.65);
    scissorDoorR.add(scissorMeshR);
    nodes.scissorDoorR = scissorDoorR;
    bodyRoot.add(scissorDoorR);

    // Active Aero Hydraulic Rear Wing
    const spoilerGroup = new THREE.Group();
    spoilerGroup.position.set(0, 0.78, 1.85);
    const wingBlade = new THREE.Mesh(new THREE.BoxGeometry(1.96, 0.04, 0.38), mats.carbonFiber);
    wingBlade.position.set(0, 0.28, -0.05);
    spoilerGroup.add(wingBlade);
    nodes.spoilerGroup = spoilerGroup;
    bodyRoot.add(spoilerGroup);

    // Quad Titanium Exhaust Outlets
    for (let i = -1.5; i <= 1.5; i += 1.0) {
      const exhaust = new THREE.Mesh(new THREE.CylinderGeometry(0.065, 0.065, 0.22, 16), mats.titaniumExhaust);
      exhaust.rotateX(Math.PI / 2);
      exhaust.position.set(i * 0.12, 0.54, 2.22);
      bodyRoot.add(exhaust);
    }

    // Spotlights & Volumetrics
    for (let side of [-1, 1]) {
      const spot = new THREE.SpotLight(0xffffff, 0, 30, Math.PI / 6, 0.5, 1.2);
      spot.position.set(side * 0.68, 0.48, -2.05);
      spot.target.position.set(side * 0.5, -0.4, -12);
      bodyRoot.add(spot);
      bodyRoot.add(spot.target);
      this.headlightSpotlights.push(spot);
    }

    // 21" Forged Track Alloy Wheels
    this.addDetailedWheels(group, {
      frontZ: -1.35, rearZ: 1.35,
      x: 0.92, y: 0.36,
      radius: 0.37, width: 0.3
    });

    return group;
  }

  // Wheel Factory Helper with PBR Textures
  addDetailedWheels(parentGroup, cfg) {
    const mats = matManager.materials;
    const positions = [
      { x: -cfg.x, y: cfg.y, z: cfg.frontZ, isLeft: true },
      { x: cfg.x, y: cfg.y, z: cfg.frontZ, isLeft: false },
      { x: -cfg.x, y: cfg.y, z: cfg.rearZ, isLeft: true },
      { x: cfg.x, y: cfg.y, z: cfg.rearZ, isLeft: false }
    ];

    positions.forEach(pos => {
      const wheelHub = new THREE.Group();
      wheelHub.position.set(pos.x, pos.y, pos.z);

      const tireGeo = new THREE.CylinderGeometry(cfg.radius, cfg.radius, cfg.width, 32);
      tireGeo.rotateZ(Math.PI / 2);
      const tire = new THREE.Mesh(tireGeo, mats.tire);
      tire.castShadow = true;
      wheelHub.add(tire);

      const rotorGeo = new THREE.CylinderGeometry(cfg.radius * 0.72, cfg.radius * 0.72, 0.03, 24);
      rotorGeo.rotateZ(Math.PI / 2);
      const rotor = new THREE.Mesh(rotorGeo, mats.brakeRotor);
      rotor.position.set(pos.isLeft ? 0.02 : -0.02, 0, 0);
      wheelHub.add(rotor);

      const caliperGeo = new THREE.BoxGeometry(0.08, 0.16, 0.14);
      const caliper = new THREE.Mesh(caliperGeo, mats.caliper);
      caliper.position.set(pos.isLeft ? 0.05 : -0.05, cfg.radius * 0.42, 0.1);
      wheelHub.add(caliper);

      const rimBarrel = new THREE.Mesh(
        new THREE.CylinderGeometry(cfg.radius * 0.78, cfg.radius * 0.78, cfg.width * 0.9, 24, 1, true),
        mats.rim
      );
      rimBarrel.rotateZ(Math.PI / 2);
      wheelHub.add(rimBarrel);

      // Multi-Spoke Alloy Wheels
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const spoke = new THREE.Mesh(
          new THREE.BoxGeometry(cfg.width * 0.7, cfg.radius * 0.7, 0.025),
          mats.rim
        );
        spoke.position.set(
          pos.isLeft ? -cfg.width * 0.22 : cfg.width * 0.22,
          Math.sin(angle) * (cfg.radius * 0.48),
          Math.cos(angle) * (cfg.radius * 0.48)
        );
        spoke.rotation.x = angle;
        wheelHub.add(spoke);
      }

      parentGroup.add(wheelHub);
    });
  }

  // --- Dynamic Vehicle Switcher ---
  switchVehicle(brandKey) {
    if (!this.vehicleGroups[brandKey]) return;
    this.currentBrand = brandKey;
    soundFX.playLockChirp();

    Object.keys(this.vehicleGroups).forEach(key => {
      this.vehicleGroups[key].visible = key === brandKey;
    });

    soundFX.setVehicleProfile(brandKey);
  }

  // --- Advanced 3D Animation Controls ---

  toggleDoors() {
    this.doorsOpen = !this.doorsOpen;
    soundFX.playDoorSound(this.doorsOpen);

    const b = this.currentBrand;
    const nodes = this.animatedNodes[b];

    if (b === 'rolls_royce') {
      // Coach Suicide Doors swing backward
      if (nodes.coachDoorL && nodes.coachDoorR) {
        const rotY = this.doorsOpen ? 1.2 : 0;
        gsap.to(nodes.coachDoorL.rotation, { y: -rotY, duration: 1.2, ease: 'power3.inOut' });
        gsap.to(nodes.coachDoorR.rotation, { y: rotY, duration: 1.2, ease: 'power3.inOut' });
      }
    } else if (b === 'lamborghini' || b === 'mg') {
      // Scissor Doors swing upward and outward
      if (nodes.scissorDoorL && nodes.scissorDoorR) {
        const rotZ = this.doorsOpen ? -0.85 : 0;
        const rotY = this.doorsOpen ? 0.35 : 0;
        gsap.to(nodes.scissorDoorL.rotation, { z: rotZ, y: rotY, duration: 1.1, ease: 'power3.inOut' });
        gsap.to(nodes.scissorDoorR.rotation, { z: -rotZ, y: -rotY, duration: 1.1, ease: 'power3.inOut' });
      }
    } else {
      // Regular Luxury Doors swing forward
      if (nodes.doorL && nodes.doorR) {
        const rotY = this.doorsOpen ? 1.05 : 0;
        gsap.to(nodes.doorL.rotation, { y: rotY, duration: 1.0, ease: 'power3.inOut' });
        gsap.to(nodes.doorR.rotation, { y: -rotY, duration: 1.0, ease: 'power3.inOut' });
      }
    }

    return this.doorsOpen;
  }

  toggleHood() {
    this.hoodOpen = !this.hoodOpen;
    soundFX.playDoorSound(this.hoodOpen);
    const nodes = this.animatedNodes[this.currentBrand];

    if (nodes.hood) {
      const rotX = this.hoodOpen ? 0.75 : 0;
      gsap.to(nodes.hood.rotation, { x: rotX, duration: 1.1, ease: 'power3.inOut' });
    }
    return this.hoodOpen;
  }

  toggleSuspension() {
    this.suspensionRaised = !this.suspensionRaised;
    soundFX.playServoSound();
    const nodes = this.animatedNodes[this.currentBrand];

    if (nodes.bodyRoot) {
      const targetY = this.suspensionRaised ? 0.18 : 0;
      gsap.to(nodes.bodyRoot.position, { y: targetY, duration: 0.9, ease: 'power2.inOut' });
    }
    return this.suspensionRaised;
  }

  toggleSpoiler() {
    this.spoilerTrackMode = !this.spoilerTrackMode;
    soundFX.playServoSound();
    const nodes = this.animatedNodes.lamborghini;

    if (nodes.spoilerGroup) {
      const targetY = this.spoilerTrackMode ? 0.98 : 0.78;
      const targetRotX = this.spoilerTrackMode ? 0.28 : 0;
      gsap.to(nodes.spoilerGroup.position, { y: targetY, duration: 0.9, ease: 'power2.out' });
      gsap.to(nodes.spoilerGroup.rotation, { x: targetRotX, duration: 0.9, ease: 'power2.out' });
    }
    return this.spoilerTrackMode;
  }

  toggleHeadlights() {
    this.headlightsOn = !this.headlightsOn;
    soundFX.playHeadlightClick();
    matManager.setHeadlights(this.headlightsOn ? 'high' : 'off');

    this.headlightSpotlights.forEach(spot => {
      gsap.to(spot, { intensity: this.headlightsOn ? 18.0 : 0.0, duration: 0.3 });
    });
    return this.headlightsOn;
  }

  toggleHazardLights() {
    this.hazardFlashing = !this.hazardFlashing;
    soundFX.playClick();

    if (this.hazardFlashing) {
      let state = false;
      this.hazardInterval = setInterval(() => {
        state = !state;
        matManager.materials.turnSignalLED.emissiveIntensity = state ? 5.0 : 0.0;
        matManager.materials.turnSignalLED.needsUpdate = true;
      }, 450);
    } else {
      if (this.hazardInterval) clearInterval(this.hazardInterval);
      matManager.materials.turnSignalLED.emissiveIntensity = 0.0;
      matManager.materials.turnSignalLED.needsUpdate = true;
    }
    return this.hazardFlashing;
  }
}
