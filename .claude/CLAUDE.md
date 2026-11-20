# CLAUDE.md - AI Agent Instructions

## 1. Project Vision & Design Philosophy
This is a long-term personal portfolio, not a generic template. 
*   **Target Audience:** Recruiters, potential clients, hackathon judges, and developers.
*   **Design:** Personal, professional, clean, modern, timeless.
*   **Anti-Patterns (DO NOT USE):** Generic AI-generated aesthetics (massive centered hero sections, gradient backgrounds just for the sake of it, glassmorphism without function, repetitive feature cards, placeholder illustrations).
*   **Navigation Rules:** This is a single-page experience. The header/footer links (Home, About, Skills, Projects, Contact) scroll to sections on the homepage. The `/projects` page is a deliberate secondary destination reached only via a "View all projects" link, never from the primary nav.

## 2. Architecture & Tech Stack
*   **Frontend:** React, TypeScript, Vite, Tailwind CSS, Framer Motion. Routing uses `wouter` (not react-router).
*   **Backend:** Serverless. Originally Vercel Serverless + Nodemailer. Currently migrating/testing Cloudflare Workers + Resend HTTP API.
*   **State/Data:** No data-fetching library. Shared data (projects, posts) are plain typed arrays in `client/src/lib/`.
*   **Animations:** Wrapped in `<LazyMotion features={domAnimation} strict>`. Always use `m.div` instead of `motion.div`.
*   **Folder Structure:** 
    *   `client/` - Frontend source
    *   `client/src/components/ui/` - Shadcn/ui primitives
    *   `client/src/lib/` - Utilities, shared data, Zod schemas
    *   `api/` - Serverless backend handlers

## 3. Workflow & Rules for AI
*   **Before major changes:** Explain the proposed solution, list affected files, and wait for my approval. This includes folder restructuring, new libraries, routing changes, or major UI redesigns.
*   **Code Style:** Small milestones, reusable components, readable code. Avoid unnecessary abstractions and duplicate code.
*   **Definition of Done:** Functionality works, no existing features are broken, no unused code/dependencies remain, and it builds successfully (`npm run build`).
*   **Git:** Never develop directly on `main`. We use a foundation branch model (`main` = architecture/context, `redesign` = Vercel deployment, `redesign-cloudflare` = Cloudflare deployment).

## 4. Commands
*   `npm install` - Install deps
*   `npm run dev` - Start Vite dev server
*   `npm run build` - Production build
*   `npm run check` - Type-check with tsc
