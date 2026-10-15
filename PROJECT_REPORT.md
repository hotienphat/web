# Project Report: Tech Student CV & Web Portfolio

## 1. Project Overview
* **Author:** Hồ Tiến Phát (Lake Fot)
* **University:** HUTECH - Ho Chi Minh City University of Technology
* **Major:** Information Technology / Software Engineering
* **Live Deployment:** [GitHub Pages](https://hotienphat.github.io/web/)

This repository serves as a personal high-interactivity web portfolio supporting a tech career CV. It bridges traditional résumé presentation with an interactive digital space featuring 3D WebGL graphics, GSAP scroll controls, physics-based UI elements, and a real-time synchronized music player.

---

## 2. Technical Stack & Architecture

```
Client Browser
 ├── index.html        (Semantic HTML5 skeleton, meta tags, and accessibility markup)
 ├── style.css         (Design tokens, Glassmorphism surfaces, responsive CSS grid, theme variables)
 ├── data.js           (Structured static datasets: Bento shortcuts, audio playlist, synchronized lyrics)
 ├── script.js         (Application core: physics simulation, snap scrolling, audio engine, event bus)
 ├── tree.js           (3D WebGL experience: Three.js scene, Bonsai Island, 4-season particle weather)
 └── Portfolio.jsx     (Clean standalone React/Tailwind component for modern framework reference)
```

### Key Libraries
* **Three.js (r128) & OrbitControls:** Powers the interactive 3D Bonsai Island and seasonal particle systems.
* **GSAP (3.12.5) & ScrollTrigger:** Drives 144Hz interpolated scroll-snapping and page transitions.
* **FontAwesome (6.5.1) & Lucide Icons:** Modern iconography for navigational and interactive elements.
* **Tailwind CSS v4:** Utility classes and design tokens.

---

## 3. Core Modules

| Module | Location | Description |
| :--- | :--- | :--- |
| **Hero & Lanyard Badge** | `script.js` (`initLanyardBadge`) | Cutout portrait with 144Hz pendulum spring physics, touch drag, and mobile gyroscope tilt support. |
| **About & Rotating Badge** | `index.html`, `style.css` | Personal bio and philosophy framed with a 360° rotating SVG text-path circular badge. |
| **Bento Shortcuts Hub** | `data.js`, `script.js` | Modular card grid categorizing social channels, utility tools, student projects, and entertainment. |
| **Project Showcase** | `script.js` (`initHorizontalAccordion`) | Horizontal interactive accordion displaying production projects with responsive hover expansion. |
| **3D Seasons Bonsai** | `tree.js` (`initTreeExperience`) | 3D WebGL scene with real-time switching between Spring (blossoms), Summer (lush), Autumn (foliage), and Winter (snow). |
| **Soundtrack & Dynamic Lyrics** | `script.js` (`initMusicPlayer`) | Slide-out music drawer with synchronized real-time lyrics in a top navigation dynamic island pill. |
| **Theme System** | `script.js` (`initThemeToggle`) | Dual theme (Moss Green Dark / Studio Porcelain Light) featuring circular ripple clip-path transition. |

---

## 4. Build & Maintenance Commands

```bash
# Compile and minify Tailwind CSS
npm run build:css

# Watch for CSS changes during development
npm run watch:css

# Clean output builds safely across all OS platforms
npm run clean
```

---

## 5. Academic Documentation
For the complete, in-depth academic report covering IT career pathways (Dev, Data, UI/UX, IT Support), AI CV builders comparison (Rezi, Kickresume, Canva AI), and defense presentation guidelines, refer to [BAO_CAO_DO_AN.md](./BAO_CAO_DO_AN.md).
