export class ConfiguratorUI {
  constructor(sceneManager) {
    this.sceneManager = sceneManager;
    
    // Brand & Vehicle Configurations
    this.vehicles = {
      fortuner: {
        name: "TOYOTA Fortuner",
        subtitle: "Legender 4x4 Luxury SUV",
        basePrice: 5140000,
        icon: "🚙"
      },
      spectre: {
        name: "ROLLS-ROYCE Spectre",
        subtitle: "Bespoke Grand Saloon Electric",
        basePrice: 75000000,
        icon: "👑"
      },
      swift: {
        name: "MARUTI SUZUKI Swift",
        subtitle: "ZXi+ Urban Hatchback",
        basePrice: 950000,
        icon: "🚗"
      },
      cyber: {
        name: "LAMBORGHINI Revuelto",
        subtitle: "V12 Hybrid Hypercar",
        basePrice: 88900000,
        icon: "⚡"
      }
    };

    // Run Initializations
    this.initUI();
    this.initThemeToggle();
  }

  initUI() {
    console.log("Configurator UI Initialized");
  }

  // Light and Dark Mode Toggle Handler
  initThemeToggle() {
    // 1. Read saved theme preference or default to dark
    const savedTheme = localStorage.getItem('app-theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);

    // 2. Locate the top navigation bar container
    const topNav = document.querySelector('.camera-bar') || 
                   document.querySelector('.top-nav') || 
                   document.querySelector('#camera-controls') || 
                   document.body;

    // 3. Create theme toggle button element
    const themeBtn = document.createElement('button');
    themeBtn.className = 'theme-toggle-btn';
    themeBtn.id = 'theme-toggle';
    themeBtn.innerHTML = savedTheme === 'dark' ? '☀️ Light' : '🌙 Dark';

    // 4. Handle Theme Switch on Click
    themeBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('app-theme', newTheme);
      themeBtn.innerHTML = newTheme === 'dark' ? '☀️ Light' : '🌙 Dark';

      // Update 3D canvas background color dynamically
      if (this.sceneManager && typeof this.sceneManager.updateThemeBackground === 'function') {
        this.sceneManager.updateThemeBackground(newTheme);
      }
    });

    // 5. Append button to top navigation bar
    if (topNav) {
      topNav.appendChild(themeBtn);
    }
  }
}