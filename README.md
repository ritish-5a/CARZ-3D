<div align="center">

```ascii
     _    ____  _______  __  ____ _____ 
    / \  |  _ \| ____\ \/ / / ___|_   _|
   / _ \ | |_) |  _|  \  / | |  _  | |  
  / ___ \|  __/| |___ /  \ | |_| | | |  
 /_/   \_\_|   |_____/_/\_\ \____| |_|

🌟 Key Features🏎️ Real-Time 3D Engine & Shaders🎨 Multi-Layer Metallic Shaders: Dynamic clearcoat, metallic flake intensity, and roughness controls using custom MeshPhysicalMaterial pipelines.💡 Lighting Environments: Instant switching between Dark Studio, Cyber Neon, and Sunset Gold lighting profiles with PCF soft shadows and ACESFilmic tone mapping.🎥 Cinematic Camera Drone: Smooth camera orbital paths built using GSAP interpolation for preset views (Hero, Cockpit, Track Wheels, Top-Down, Rear).🛠️ Interactive Vehicle Mechanics🚪 Active Aero & Body Control: Toggle dihedral door sequences, bonnet/hood lifts, and active rear wing deployments in real time.🛞 Air Suspension Simulation: Interactive ride-height adjustments (+40mm track lift vs low profile).💡 Illumination Controls: Real-time headlamp, brake light, and interior ambient LED toggles.🔊 Dynamic WebAudio Engine🎶 Procedural Engine Sounds: Real-time V12 / V8 audio synth with interactive RPM revving, boost meters, and engine startup/shutdown ignition sequence.🎨 Theme & UI Architecture🌙 Dual Interface Modes: Fully adaptive Dark & Light mode themes with persisted local storage state.💰 Multi-Currency Pricing: On-the-fly currency switching between INR (₹ Lakh / Cr) and USD ($).📸 Export Spec Sheet: Instant 4K canvas screenshot capturing and dynamic pricing breakdown modals with confetti celebrations.🚗 Supported VehiclesBrandModelChassis / Engine SpecBase Price🏎️ LamborghiniApex GT V12 HypercarAtmospheric V12 / Carbon Monocoque₹ 8.89 Cr / $1.07M👑 Rolls-RoyceSpectre Bespoke SaloonDual Electric / Bespoke Luxury₹ 9.50 Cr / $1.15M🛞 ToyotaFortuner Legender 4x42.8L Turbo Diesel / Off-Road₹ 48.50 Lakh / $58K⚡ MGCyberster EV RoadsterDual-Motor Electric EV₹ 65.00 Lakh / $78K🏔️ MahindraThar 4x4 Rugged TrailmStallion Turbo / Mechanical 4WD₹ 17.50 Lakh / $21K🏁 Maruti SuzukiSwift Sport Boosterjet1.4L Boosterjet Turbo₹ 9.50 Lakh / $11.5K💻 Tech Stack🔄 System Architecture Flow[ User Interaction ] ──► [ ConfiguratorUI.js ] ──► [ SoundFX.js (WebAudio Engine) ]
                                 │
                                 ▼
                     [ SceneManager.js (GSAP) ]
                                 │
                                 ▼
                   [ CarModel.js & Materials.js ] ──► [ 3D WebGL Canvas ]
