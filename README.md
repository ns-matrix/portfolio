# Nitin Singh — Production Personal Portfolio

> **Data Scientist & AI / LLM Engineer**  
> B.Sc. Data Science (SGPI: 8.58) • Apprentice @ National Stock Exchange of India (NSE)  
> Location: Powai, Mumbai, Maharashtra, India  
> Email: `ns077751@gmail.com` • [GitHub](https://github.com/ns-matrix) • [LinkedIn](https://www.linkedin.com/in/singh-nitin-kumar-chakradhar-radha-339210262/) • [Google Developer Profile](https://developers.google.com/profile/u/nxmatrix)

---

## 🌟 Overview

This repository houses the production personal portfolio website for **Nitin Singh**. Built with modern HTML5, CSS3 custom design tokens, and modular vanilla JavaScript, this website is architected for maximum speed, accessibility, and visual polish across desktops, tablets, and smartphones.

### Key Highlights
- **Zero Fabrication:** Every metric, credential, project architecture, and grade is derived directly from Nitin's authentic academic records and certified programs.
- **Privacy & Security Isolation:** Strict isolation between public web assets and private source identity/banking documents via `.gitignore`.
- **High Performance:** All graphics, photography, and certificates are compressed and converted to modern WebP format (< 2 MB total asset weight across 25+ images).
- **Single Source of Truth (`js/data.js`):** Easily add or update projects, certificates, and skills without modifying layout HTML.
- **Accessible & Responsive:** WCAG AA compliant contrast ratios, keyboard navigation (ESC to close modals, arrow keys for lightbox), screen-reader friendly semantic markup, and fluid mobile drawer navigation.

---

## 🚀 Key Features

1. **Dark Futuristic Design System:**
   - Deep obsidian background (`#07080c`) with ambient dual radial glows (neon lime `#9cff00` and electric violet `#7c3aed`).
   - Micro-grid canvas texture with high-contrast, sharp typography.
   - Glassmorphism panels with fluid clamp-based responsiveness.

2. **Hero & Key Metrics Section:**
   - High-resolution studio portrait in an ambient floating card.
   - Real-time availability status badge.
   - Key stats counter bar highlighting **8.58 SGPI**, **12+ Verified Credentials**, **4+ Core AI Systems**, and **300+ Survey Responses**.

3. **Featured Projects with Case Study Modals:**
   - **PersonaPlex 7B (4-bit):** Conversational AI running 4-bit NF4 quantized LLM inference on Google Colab T4 with Gradio UI.
   - **EcomIQ:** Consumer behavior machine learning study on 300+ primary responses (Random Forest 92.23% accuracy) deployed on Streamlit Cloud.
   - **Movie Success Prediction:** KNN and SVM supervised learning with an interactive Tableau executive dashboard.
   - **Local AI & Vector Infrastructure:** Self-hosted retrieval pipeline utilizing FastAPI, Qdrant vector database, and Ollama.
   - Interactive *"Case Study"* modal for deep dives into problem statements, architecture, and results.

4. **12 Verified Industry Certifications:**
   - Full-page high-resolution scans viewable via full-screen lightbox.
   - Direct verification links for credentials from Deloitte, Udemy, Cisco, Livewire, NIIT, and QUASTECH.

5. **Interactive Portfolio Gallery:**
   - Dynamic category filter buttons (`All`, `AI & LLMs`, `Data Science`, `Systems`, `Credentials`).
   - Fullscreen Lightbox supporting keyboard navigation (`Escape`, `ArrowLeft`, `ArrowRight`) and mobile touch swiping.

6. **1-Click Contact & Social Connect:**
   - Direct email action with one-click clipboard copy and toast notification feedback.
   - Direct links to LinkedIn, GitHub, and Google Developer Profile.

---

## 📂 Directory Structure

```
c:\Profile\
├── index.html              # Production semantic HTML5 markup
├── vercel.json             # Vercel deployment headers, security, & caching
├── .gitignore              # Safeguards private documents & temp files
├── README.md               # Project documentation & deployment manual
├── css/
│   └── style.css           # Modular dark-futuristic responsive design system
├── js/
│   ├── data.js             # Single source of truth for portfolio data
│   └── main.js             # Dynamic rendering, lightbox, modals, & navigation
└── assets/
    ├── icons/
    │   └── favicon.svg     # Futuristic NS monogram vector icon
    ├── profile/
    │   └── avatar.webp     # High-res studio portrait (WebP optimized)
    ├── certifications/     # 12 high-resolution full-page WebP scans
    │   ├── quastech_python.webp
    │   ├── livewire_data_engineering.webp
    │   ├── livewire_powerbi.webp
    │   ├── niit_cyberops.webp
    │   ├── niit_word_excel.webp
    │   ├── niit_digital_marketing.webp
    │   ├── deloitte_data_analytics.webp
    │   ├── udemy_data_analysis.webp
    │   ├── udemy_r_programming.webp
    │   ├── csc_talent_hunt.webp
    │   ├── udaan_spoken_english.webp
    │   └── cisco_cybersecurity.webp
    ├── projects/           # Optimized project banners & architecture
    │   ├── personaplex.webp
    │   ├── ecomiq.webp
    │   ├── movie_analytics.webp
    │   └── local_ai.webp
    └── gallery/            # Filterable showcase media
        ├── personaplex_showcase.webp
        ├── ecomiq_banner.webp
        ├── ecomiq_survey.webp
        ├── local_ai_architecture.webp
        ├── movie_analytics_dashboard.webp
        ├── deloitte_spotlight.webp
        └── cyberops_spotlight.webp
```

---

## 🛠️ Local Development

To run and preview the website locally:

### Option 1: Python Built-in HTTP Server (Recommended)
Open your terminal in the project root:
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your web browser.

### Option 2: VS Code Live Server
1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` and click **"Open with Live Server"**.

---

## 🚢 Deployment Guide

### Deploying to Vercel (Instant)
1. Push this repository to GitHub:
   ```bash
   git init
   git add index.html css/ js/ assets/ vercel.json .gitignore README.md
   git commit -m "feat: initial production release of Nitin Singh portfolio"
   git branch -M main
   git remote add origin https://github.com/ns-matrix/portfolio.git
   git push -u origin main
   ```
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `portfolio` repository.
4. Framework Preset: **Other** (Static HTML).
5. Click **Deploy**. Vercel will automatically read `vercel.json` and apply all caching and security headers.

### Deploying to GitHub Pages
1. In your GitHub repository, go to **Settings** > **Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Choose branch `main` and folder `/ (root)`.
4. Click **Save**.

---

## 📝 How to Update Portfolio Content

To update projects, add new certifications, or change stats, you only need to edit **`js/data.js`**:

- **Add a New Certification:**
  Drop the certificate image in `assets/certifications/` and append a new object to the `certifications` array in `js/data.js`.
- **Add a New Project:**
  Drop the banner image in `assets/projects/` and add a new entry to the `projects` array in `js/data.js` with its case study narrative.
- **Update Education / Grades:**
  Update the `education` array in `js/data.js`.

---

## 📄 License & Attribution

Designed and engineered for **Nitin Singh**.  
All rights reserved © 2026.
