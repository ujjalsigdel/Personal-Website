# Ujjal Sigdel - Personal Portfolio Website (Foundation)

## 🔗 Live Links
- **Current Production (Vercel)**: [https://www.ujjalsigdel.com.np](https://www.ujjalsigdel.com.np)
- **Cloudflare Workers Preview**: [https://personal-website.ujjalsigdel.workers.dev/](https://personal-website.ujjalsigdel.workers.dev/)
- **v1.0 Original Archive**: [View the first version of this portfolio](https://personal-website-git-v10-original-ujjal-sigdels-projects.vercel.app/)

## Overview

This repository contains the source code for my personal portfolio website. It is treated as a long-term software project rather than a one-time portfolio, intended to evolve continuously throughout my academic and professional career.

**How this repository is organized:** engineering and visual design are deliberately separated. 

The branch you are looking at, `main`, is the **engineering foundation** — it is **not** the production portfolio and renders only a placeholder page. The current visual implementations live on the `redesign` and `redesign-cloudflare` branches. `main` exists so that future redesigns inherit the engineering (backend, accessibility, SEO, performance, tooling, AI context) without inheriting a specific visual identity.

---

## Branch Model

This repository uses a **Foundation / Design Branch** model. Changes flow one way: `main` → design branches.

- **`main`**: The design-blind engineering foundation (shared configuration, backend logic, AI context). This is the branch you are currently on.
- **`redesign`**: The primary production visual implementation deployed to **Vercel** (Node.js + Nodemailer).
- **`redesign-cloudflare`**: The parallel deployment configured for **Cloudflare Workers** (using Resend for email).
- **`v1.0-original`**: Frozen archive of the first version of the site.

---

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion

### Backend & Deployment
- **Vercel**: Node.js Serverless Functions + Nodemailer (on the `redesign` branch).
- **Cloudflare**: Workers Runtime + Resend HTTP API (on the `redesign-cloudflare` branch).

---

## Local Development

*Note: `npm run dev` on `main` serves the foundation's placeholder page. To see the production site locally, check out the `redesign` branch.*

Install dependencies:
```bash
npm install
```

Run development server:
```bash
npm run dev
```

Build production version:
```bash
npm run build
```

---

## Documentation

Project documentation and AI agent context are stored in the `.claude/` directory:
- `.claude/CLAUDE.md` — AI agent instructions, design philosophy, and workflow rules.
- `.claude/FOUNDATION.md` — Architectural contract and layer boundaries.

These files should be read before making significant architectural or design changes.
