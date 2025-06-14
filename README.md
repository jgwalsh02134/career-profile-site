# J. Gregory Walsh — Career Profile Site

[![Site Status](https://img.shields.io/website?up_message=online\&url=https%3A%2F%2Fjgwalsh.com)](https://jgwalsh.com)
[![Stars](https://img.shields.io/github/stars/jgwalsh02134/career-profile-site?style=social)](https://github.com/jgwalsh02134/career-profile-site/stargazers)
[![Cloudflare Pages](https://img.shields.io/badge/Deployed%20with-Cloudflare%20Pages-F38020?logo=cloudflare\&logoColor=white)](https://pages.cloudflare.com)
[![License](https://img.shields.io/badge/license-All%20rights%20reserved-lightgrey)](#license)

---

## Purpose

* Provides a single‑page, mobile‑first profile showcasing J. Gregory Walsh’s behavioral‑science credentials, crisis‑management record, and strategic‑analysis portfolio.
* Serves recruiters and hiring panels in federal service, law‑enforcement, and security‑focused private sectors.
* Doubles as a quick‑reference hub (digital card, vCard, QR code) for conference and field networking.

## Live Demonstration

* **Primary site:** [https://jgwalsh.com](https://jgwalsh.com)
* **Compact card:** [https://jgwalsh.com/digital-card.html](https://jgwalsh.com/digital-card.html)

## Feature Highlights

* Responsive layout powered by **Tailwind CSS** (JIT build, \~5 kB gzipped).
* **Dark‑/light‑mode** toggle with preference persistence (`localStorage`).
* Accessible navigation (landmark roles, skip link, visible focus states, WAI‑ARIA patterns).
* Structured metadata: Open Graph, Twitter Card, and JSON‑LD *Person* schema for enhanced discoverability.
* Downloadable résumé (PDF) and vCard; quick‑share QR code embedded in the digital card.
* Cloudflare Pages CI/CD workflow for automatic testing, minification, and deployment.

## Repository Layout

```text
/
├─ src/                 → HTML partials, Markdown content, Tailwind config
├─ public/              → Favicons, images, avatars, manifest
├─ dist/                → Production build (generated)
├─ .github/workflows/   → CI pipeline (Lighthouse + Cloudflare Pages)
└─ wrangler.toml        → Deployment and Worker configuration
```

## Local Development

**Prerequisites:** Node ≥ 20 LTS, npm ≥ 10

```bash
git clone https://github.com/jgwalsh02134/career-profile-site.git
cd career-profile-site
npm ci                   # install exact dependency versions
npm run dev              # start local server with hot‑reload
```

Create an optimized production build:

```bash
npm run build            # outputs to /dist
```

## Continuous Deployment

* Every push to **`main`** triggers GitHub Actions:

  * Lints Markdown, HTML, and JS; runs accessibility checks.
  * Generates a production Tailwind build and Worker bundle.
  * Publishes to Cloudflare Pages with a project‑scoped API token.
* The workflow fails if Lighthouse scores for Performance, SEO, or Accessibility drop below 90.

## Customisation Guide

* **Branding:** Edit `tailwind.config.js` to change fonts, colour palette, or spacing scale.
* **Content:** Update Markdown files in `/src/content` and rebuild (`npm run build`).
* **Icons:** Replace or extend self‑hosted SVGs in `/public/icons`.
* **Headers / CSP:** Adjust settings in `wrangler.toml` to inject analytics or stricter security headers.

## Roadmap

* Progressive Web App (PWA) manifest and offline cache.
* Automated résumé parser generating JSON‑LD from source DOCX.
* Translated versions (ES, FR) with language switcher.
* End‑to‑end tests (Playwright) for critical user flows.

## License

© 2025 J. Gregory Walsh. All rights reserved.
Cloning or forking is permitted for reference only. Redistribution or derivative commercial use requires written permission.

---

**Contact**
[jgwalsh@proton.me](mailto:jgwalsh@proton.me)
[LinkedIn](https://www.linkedin.com/in/jgregorywalsh) | [GitHub](https://github.com/jgwalsh02134)
