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

<div align="center">

  <table>
    <tr>
      <td align="center" width="33%">
        <img src="https://techstack-generator.vercel.app/threejs-icon.svg" width="48" height="48" alt="Three.js" /><br/>
        <b>3D WebGL Engine</b><br/>
        <sub>Three.js (PCF Shadows & Metallic Shaders)</sub>
      </td>
      <td align="center" width="33%">
        <img src="https://raw.githubusercontent.com/dehash/svg-logos/master/svg/greensock.svg" width="48" height="48" alt="GSAP" /><br/>
        <b>Animation Matrix</b><br/>
        <sub>GSAP Orbital Camera Interpolation</sub>
      </td>
      <td align="center" width="33%">
        <img src="https://vitejs.dev/logo.svg" width="48" height="48" alt="Vite" /><br/>
        <b>Build System</b><br/>
        <sub>Vite Ultra-Fast Bundler</sub>
      </td>
    </tr>
    <tr>
      <td align="center" width="33%">
        <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png" width="48" height="48" alt="WebAudio" /><br/>
        <b>Spatial Sound Engine</b><br/>
        <sub>HTML5 Procedural WebAudio Synth</sub>
      </td>
      <td align="center" width="33%">
        <img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png" width="48" height="48" alt="Glassmorphism" /><br/>
        <b>Interactive UI</b><br/>
        <sub>CSS Glassmorphism & Themes</sub>
      </td>
      <td align="center" width="33%">
        <img src="https://user-images.githubusercontent.com/23264/106598434-9e719e00-654f-11eb-9e59-6167043cfa01.png" width="48" height="48" alt="Cloudflare" /><br/>
        <b>Cloud Infrastructure</b><br/>
        <sub>Cloudflare Pages Workers Platform</sub>
      </td>
    </tr>
  </table>

</div>

<br/>

### 🔄 System Architecture Flow

[ User Interaction ] ──► [ ConfiguratorUI.js ] ──► [ SoundFX.js (WebAudio Engine) ]
│
▼
[ SceneManager.js (GSAP) ]
│
▼
[ CarModel.js & Materials.js ] ──► [ 3D WebGL Canvas ]


## 🚀 Getting Started

### Prerequisites
Ensure you have **Node.js** (v16.0 or higher) installed on your system.

### Local Installation & Development

1. **Clone the Repository:**
   ```bash
   git clone [https://github.com/ritish-5a/CARZ-3D.git](https://github.com/ritish-5a/CARZ-3D.git)
   cd CARZ-3D


  👤 Author & Credits
Designed, Engineered & Developed by S. RITISH

🎓 Institution: Presidency University, Bengaluru

💻 GitHub Profile: @ritish-5a

🌐 Live Web Application: APEX GT 3D Configurator
