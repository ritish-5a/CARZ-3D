<div align="center">

  <img src="https://capsule-render.vercel.app/render?type=waving&color=auto&height=220&section=header&text=APEX%20GT&fontSize=80&fontAlignY=35&animation=twinkling&desc=Multi-Brand%20Interactive%203D%20Hypercar%20Configurator&descAlignY=62&descScale=20" width="100%" alt="APEX GT Banner"/>

  <br/>

  [![Live Demo](https://img.shields.io/badge/LIVE%20DEMO-APEX%20GT-ff334b?style=for-the-badge&logo=cloudflare&logoColor=white)](https://carz-3d.ritishacc.workers.dev/)
  [![GitHub License](https://img.shields.io/badge/LICENSE-MIT-00e5ff?style=for-the-badge&logo=github)](LICENSE)
  [![Three.js](https://img.shields.io/badge/3D%20ENGINE-THREE.JS-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
  [![Vite](https://img.shields.io/badge/BUNDLER-VITE-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

  <p align="center">
    <b>A high-performance, real-time 3D web application allowing users to customize luxury and performance vehicles with photorealistic materials, interactive aero features, spatial audio, and dynamic lighting environments.</b>
  </p>

  <p align="center">
    <a href="#-key-features">Key Features</a> •
    <a href="#-supported-vehicles">Vehicles</a> •
    <a href="#-tech-stack">Tech Stack</a> •
    <a href="#-getting-started">Getting Started</a> •
    <a href="#-deployment">Deployment</a>
  </p>

  ---

</div>

## 🌟 Key Features

### 🏎️ Real-Time 3D Engine & Shaders
* **Multi-Layer Metallic Shaders:** Dynamic clearcoat, metallic flake intensity, and roughness controls using custom `MeshPhysicalMaterial` pipelines.
* **Lighting Environments:** Instant switching between **Dark Studio**, **Cyber Neon**, and **Sunset Gold** lighting profiles with PCF soft shadows and ACESFilmic tone mapping.
* **Cinematic Camera Drone:** Smooth camera orbital paths built using GSAP interpolation for preset views (*Hero, Cockpit, Track Wheels, Top-Down, Rear*).

### 🛠️ Interactive Vehicle Mechanics
* **Active Aero & Body Control:** Toggle dihedral door sequences, bonnet/hood lifts, and active rear wing deployments in real time.
* **Air Suspension Simulation:** Interactive ride-height adjustments (+40mm track lift vs low profile).
* **Illumination Controls:** Real-time headlamp, brake light, and interior ambient LED toggles.

### 🔊 Dynamic WebAudio Engine
* **Procedural Engine Sounds:** Real-time V12 / V8 audio synth with interactive RPM revving, boost meters, and engine startup/shutdown ignition sequence.

### 🎨 Theme & UI Architecture
* **Dual Interface Modes:** Fully adaptive Dark & Light mode themes with persisted local storage state.
* **Multi-Currency Pricing:** On-the-fly currency switching between **INR (₹ Lakh)** and **USD ($)**.
* **Export Spec Sheet:** Instant 4K canvas screenshot capturing and dynamic pricing breakdown modals with confetti celebrations.

---

## 🚗 Supported Vehicles

| Brand | Model | Chassis / Engine Spec | Base Price |
| :--- | :--- | :--- | :--- |
| **Lamborghini** | Apex GT V12 Hypercar | Atmospheric V12 / Carbon Monocoque | ₹ 8.89 Cr / $1.07M |
| **Rolls-Royce** | Spectre Bespoke Saloon | Dual Electric / Bespoke Luxury | ₹ 9.50 Cr / $1.15M |
| **Toyota** | Fortuner Legender 4x4 | 2.8L Turbo Diesel / Off-Road | ₹ 48.50 Lakh / $58K |
| **MG** | Cyberster EV Roadster | Dual-Motor Electric EV | ₹ 65.00 Lakh / $78K |
| **Mahindra** | Thar 4x4 Rugged Trail | mStallion Turbo / Mechanical 4WD | ₹ 17.50 Lakh / $21K |
| **Maruti Suzuki** | Swift Sport Boosterjet | 1.4L Boosterjet Turbo | ₹ 9.50 Lakh / $11.5K |

---

## 💻 Tech Stack
