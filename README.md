
<div align="center">

```ascii
     _    ____  _______  __  ____ _____ 
    / \  |  _ \| ____\ \/ / / ___|_   _|
   / _ \ | |_) |  _|  \  / | |  _  | |  
  / ___ \|  __/| |___ /  \ | |_| | | |  
 /_/   \_\_|   |_____/_/\_\ \____| |_|  

```

---

## 🌟 Key Features

### 🏎️ Real-Time 3D Engine & Shaders

* 🎨 **Multi-Layer Metallic Shaders:** Dynamic clearcoat, metallic flake intensity, and roughness controls using custom `MeshPhysicalMaterial` pipelines.
* 💡 **Lighting Environments:** Instant switching between **Dark Studio**, **Cyber Neon**, and **Sunset Gold** lighting profiles with PCF soft shadows and ACESFilmic tone mapping.
* 🎥 **Cinematic Camera Drone:** Smooth camera orbital paths built using GSAP interpolation for preset views (*Hero, Cockpit, Track Wheels, Top-Down, Rear*).

### 🛠️ Interactive Vehicle Mechanics

* 🚪 **Active Aero & Body Control:** Toggle dihedral door sequences, bonnet/hood lifts, and active rear wing deployments in real time.
* 🛞 **Air Suspension Simulation:** Interactive ride-height adjustments (+40mm track lift vs low profile).
* 💡 **Illumination Controls:** Real-time headlamp, brake light, and interior ambient LED toggles.

### 🔊 Dynamic WebAudio Engine

* 🎶 **Procedural Engine Sounds:** Real-time V12 / V8 audio synth with interactive RPM revving, boost meters, and engine startup/shutdown ignition sequence.

### 🎨 Theme & UI Architecture

* 🌙 **Dual Interface Modes:** Fully adaptive Dark & Light mode themes with persisted local storage state.
* 💰 **Multi-Currency Pricing:** On-the-fly currency switching between **INR (₹ Lakh / Cr)** and **USD ($)**.
* 📸 **Export Spec Sheet:** Instant 4K canvas screenshot capturing and dynamic pricing breakdown modals with confetti celebrations.

---

## 🚗 Supported Vehicles

| Brand | Model | Chassis / Engine Spec | Base Price |
| --- | --- | --- | --- |
| 🏎️ **Lamborghini** | Apex GT V12 Hypercar | Atmospheric V12 / Carbon Monocoque | **₹ 8.89 Cr** / $1.07M |
| 👑 **Rolls-Royce** | Spectre Bespoke Saloon | Dual Electric / Bespoke Luxury | **₹ 9.50 Cr** / $1.15M |
| 🛞 **Toyota** | Fortuner Legender 4x4 | 2.8L Turbo Diesel / Off-Road | **₹ 48.50 Lakh** / $58K |
| ⚡ **MG** | Cyberster EV Roadster | Dual-Motor Electric EV | **₹ 65.00 Lakh** / $78K |
| 🏔️ **Mahindra** | Thar 4x4 Rugged Trail | mStallion Turbo / Mechanical 4WD | **₹ 17.50 Lakh** / $21K |
| 🏁 **Maruti Suzuki** | Swift Sport Boosterjet | 1.4L Boosterjet Turbo | **₹ 9.50 Lakh** / $11.5K |

---

## 💻 Tech Stack

### 🔄 System Architecture Flow

```
[ User Interaction ] ──► [ ConfiguratorUI.js ] ──► [ SoundFX.js (WebAudio Engine) ]
                                 │
                                 ▼
                     [ SceneManager.js (GSAP) ]
                                 │
                                 ▼
                   [ CarModel.js & Materials.js ] ──► [ 3D WebGL Canvas ]

```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v16.0 or higher) installed on your system.

### Local Installation & Development

1. **Clone the Repository:**
```bash
git clone [https://github.com/ritish-5a/CARZ-3D.git](https://github.com/ritish-5a/CARZ-3D.git)
cd CARZ-3D

```


2. **Install Dependencies:**
```bash
npm install

```


3. **Launch Development Server:**
```bash
npm run dev

```


Open your browser and navigate to `http://localhost:5173/`
4. **Build for Production:**
```bash
npm run build

```



---

## ☁️ Deployment

### Cloudflare Pages (Manual Direct Upload)

1. Generate the static production files:
```bash
npm run build

```


2. Navigate to your [Cloudflare Dashboard](https://dash.cloudflare.com/) -> **Workers & Pages**.
3. Select project **`carz-3d`** -> **Deployments** -> **Create New Deployment**.
4. Drag and drop all contents inside your local **`dist/`** directory directly into the Cloudflare dashboard uploader.
5. Click **Save and Deploy**.

---

## 👤 Author & Credits

Designed, Engineered & Developed by **S. RITISH**

* 🎓 **Institution:** Presidency University, Bengaluru
* 💻 **GitHub Profile:** [@ritish-5a](https://www.google.com/search?q=https://github.com/ritish-5a)
* 🌐 **Live Web Application:** [APEX GT 3D Configurator](https://www.google.com/search?q=https://carz-3d.ritishacc.workers.dev/)

---
