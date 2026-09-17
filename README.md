# Tudor Sendrescu — CV

Personal CV / résumé site, built to showcase cybersecurity and software
development experience, skills, certifications and projects.

Inspired by [brittanychiang.com](https://brittanychiang.com)'s fixed-sidebar
layout.

## Stack

- [Vite](https://vite.dev) + React + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Lucide](https://lucide.dev) icons

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
npm run lint     # oxlint
```

## Content

All résumé content (experience, education, skills, certifications,
projects, contact details, social links, résumé PDF link) lives in
[`src/data/profile.ts`](./src/data/profile.ts) as placeholder data marked
"coming soon" — edit that file to fill in real content. No other files need
to change for content updates.

To add the downloadable résumé PDF once it's ready: drop the file in
`public/` (e.g. `public/resume.pdf`) and set `resumeUrl: "/resume.pdf"` in
`src/data/profile.ts`.

## Deployment

Deploys cleanly to Vercel/Netlify as a static Vite build (`npm run build`
→ `dist/`).
