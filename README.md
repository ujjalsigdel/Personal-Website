# Ujjal Sigdel - Personal Portfolio Website (Vercel Variant)

## 🔗 Live Links
- **Current Production (Vercel)**: [https://www.ujjalsigdel.com.np](https://www.ujjalsigdel.com.np)
- **Cloudflare Workers Preview**: [https://personal-website.ujjalsigdel.workers.dev/](https://personal-website.ujjalsigdel.workers.dev/)
- **v1.0 Original Archive**: [View the first version of this portfolio](https://personal-website-git-v10-original-ujjal-sigdels-projects.vercel.app/)

## Overview

This repository contains the source code for my personal portfolio website. 

This specific branch (`redesign`) is the **primary production deployment**, configured to run on **Vercel** using Node.js Serverless Functions for the backend.

The goal of this project is to showcase my technical skills, projects, achievements, experience, and professional growth. It is treated as a long-term software project rather than a one-time portfolio.

---

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion

### Backend (Vercel)
- Node.js (Vercel Serverless Functions)
- Nodemailer (SMTP for email delivery)
- Zod (Validation)

### Deployment
- Vercel

### Version Control
- Git
- GitHub

---

## Architecture & Branches

This repository uses a **Foundation / Design Branch** model.
- `main`: The design-blind engineering foundation (shared configuration, backend logic, AI context).
- `redesign`: This branch. The primary production visual implementation deployed to **Vercel**.
- `redesign-cloudflare`: A parallel deployment configured for **Cloudflare Workers** (using Resend for email).
- `v1.0-original`: Frozen archive of the first version of the site.

---

## Current Features

- Responsive design
- Contact form (Powered by Vercel Serverless & Nodemailer)
- Email delivery
- Downloadable CV
- Featured projects showcase
- Full project archive with category filtering (`/projects`)
- Skills section
- Smooth animations

---

## Local Development

Install dependencies:

```bash
npm install
```

Run the Vite development server (Frontend + local Vercel API):

```bash
npm run dev
```

Build the production version:

```bash
npm run build
```

---

## Documentation

Project documentation and AI agent context are stored in the `.claude/` directory:
- `.claude/CLAUDE.md` — AI agent instructions, design philosophy, and workflow rules.
- `.claude/FOUNDATION.md` — Architectural contract and layer boundaries.

Please read these files before making significant architectural or design changes.
