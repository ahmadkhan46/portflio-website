# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Tech Stack

- **Next.js 16** (App Router) with **React 19** and **TypeScript**
- **Tailwind CSS v4** for styling
- **Framer Motion** for animations
- **react-hook-form** for the contact form
- **react-simple-typewriter** for hero typewriter effect
- **react-social-icons** for social links in the header

## Architecture

Single-page portfolio using **snap-scroll** (`snap-y snap-mandatory`). All sections live in `app/page.tsx` and each section is a full-screen `div` with `snap-start`. Navigation buttons in the Hero section scroll users to named section anchors.

**Component structure:**
- `app/page.tsx` — assembles all sections in order: Header → Hero → About → Experience → Skills → Projects → ContactMe
- `app/layout.tsx` — root layout with site metadata
- `app/globals.css` — Tailwind directives plus two custom classes: `.heroButton` and `.contactInput`
- `components/` — one file per section component plus `Skill.tsx` (individual skill card) and `BackgroundCircles.tsx` (animated SVG rings in Hero)

**Design tokens:** Dark background `#242424`, gold accent `#F7AB0A`. Custom scrollbar uses the `tailwind-scrollbar` plugin (gray track, gold thumb).

**Contact form** uses the [FormSubmit](https://formsubmit.co) AJAX API — no backend needed.

**Images** are served via Next.js `<Image>`. Remote domains `images.unsplash.com` and `i.ibb.co` are whitelisted in `next.config.js`. Skill icons are loaded from the devicons CDN.
