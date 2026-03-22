# Ahmad Said Khan — Portfolio Website

Personal portfolio website built with Next.js 16, showcasing projects, experience, and skills as an AI Engineer and Software Developer.

**Live:** [portfolio-website-ahm.vercel.app](https://portfolio-website-ahm.vercel.app)

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Forms | react-hook-form + FormSubmit |
| Icons | react-social-icons, @heroicons/react |
| Typewriter | react-simple-typewriter |

---

## Features

- **Snap-scroll single page** — each section occupies the full viewport with smooth snap navigation
- **Animated sections** — Framer Motion entrance animations throughout
- **AI/ML project showcase** — including Next-Hire (AI recruitment platform), FlowBoard, and Netflix Clone
- **Contact form** — powered by FormSubmit, no backend required
- **Fully responsive** — optimised for mobile, tablet, and desktop

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint    # ESLint check
```

---

## Project Structure

```
app/
├── page.tsx          # Main page — assembles all sections
├── layout.tsx        # Root layout + metadata
└── globals.css       # Tailwind directives + custom classes

components/
├── Header.tsx        # Sticky nav with social icons
├── Hero.tsx          # Typewriter hero section
├── About.tsx         # Professional summary
├── Experience.tsx    # Work history cards
├── Skills.tsx        # Skills grid
├── Skill.tsx         # Individual skill bubble
├── Projects.tsx      # Horizontal project carousel
├── ContactMe.tsx     # Contact form
└── BackgroundCircles.tsx

public/
├── profile.jpg
├── next-hire.png
├── flowboard.png
└── netflix-clone.png
```

---

## Deployment

Deployed on [Vercel](https://vercel.com). Push to `main` to trigger a new deployment.

The contact form uses [FormSubmit](https://formsubmit.co) — no environment variables required.
