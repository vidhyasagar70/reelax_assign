# Reelax — Checkout UI (React + Tailwind)

Live demo: https://reelax-assign-iidw.vercel.app/

---

## Project Overview

Reelax — Checkout UI is a modern, responsive React frontend built with Tailwind CSS and Vite. It implements a polished SaaS-style checkout experience featuring a wallet balance, coupon application, pricing breakdown, and a clear call-to-action to complete payment. The project focuses on reusable components, pixel-accurate UI, and a production-ready structure that is recruiter-friendly.

---

## Table of Contents

- Features
- Tech Stack
- Quick Start
- Available Scripts
- Build & Deploy
- Folder Structure
- Component Architecture
- UI / UX Highlights
- Responsive Design Notes
- Clean Code & Best Practices
- Future Improvements
- GitHub Submission & Commit Messages
- Author

---

## Features

- Pixel-perfect checkout UI following modern SaaS styling
- Responsive layout (mobile → desktop) using Tailwind CSS utilities
- Reusable component library (Card, Button, InputField, CouponCard, WalletSection, OrderSummary)
- Interactive coupon selection with distinct card styles and radio indicators
- Wallet balance application with feedback state
- Pricing breakdown including tax and applied discounts
- Clean component-based architecture ideal for scaling and reuse
- Production-ready build and Vercel deployment

---

## Tech Stack

- React
- Tailwind CSS
- Vite
- lucide-react (icons)
- ESLint
- Deployed on Vercel

---

## Quick Start

1. Clone the repository
```bash
git clone https://github.com/<your-username>/reelax-checkout.git
cd reelax-checkout/frontend
```

2. Install dependencies
```bash
npm install
```

3. Run locally (development)
```bash
npm run dev
# open the printed local host (typically http://localhost:5173)
```

4. Build for production
```bash
npm run build
```

5. Preview the production build locally
```bash
npm run preview
```

---

## Available Scripts

- `npm run dev` — Start Vite dev server.
- `npm run build` — Create optimized production build.
- `npm run preview` — Preview production build locally.
- `npm run lint` — Run ESLint checks.

---

## Build & Deploy

Production build is handled by Vite. The `npm run build` command generates the `dist/` folder with optimized assets. This project is deployed to Vercel for CDN-backed delivery.

Vercel setup recommendations:
- Connect the repository to Vercel.
- Root or project path: `/frontend` (if deploying only the frontend folder).
- Build command: `npm run build`
- Output directory: `dist`

---

## Folder Structure

```
frontend/
├─ public/                # static assets
├─ src/
│  ├─ assets/             # images, svgs, fonts
│  ├─ components/         # reusable React components
│  │  ├─ checkout/        # OrderSummary, CouponCard, WalletSection, etc.
│  │  └─ ui/              # Button, Card, InputField, Icons
│  ├─ data/               # static data (plans, coupons, wallet)
│  ├─ hooks/              # custom hooks (if any)
│  ├─ layouts/            # layout components and scaffolding
│  ├─ pages/              # top-level route components
│  ├─ utils/              # helpers (formatCurrency, classNames)
│  └─ main.jsx            # Vite + React entry
├─ index.html
├─ package.json
└─ tailwind.config.js
```

---

## Component Architecture & Highlights

This project uses a component-driven architecture with small, focused UI primitives composed into domain-level components:

- `src/components/ui/` — Base primitives: `Button`, `Card`, `InputField`, `Icons`.
- `src/components/checkout/` — Checkout composition: `OrderSummary`, `CouponCard`, `WalletSection`, `PriceBreakdown`.

UI highlights:
- Nested bordered cards to visually group wallet, coupons, and pricing without changing layout.
- Distinct coupon mini-cards with iconography and circular selection indicators.
- Sticky right-side order summary on large viewports using `lg:sticky lg:top-24`.

---

## Responsive Design Notes

- Mobile-first approach using Tailwind utilities.
- Breakpoints used: `sm` (≥640px), `md` (≥768px), `lg` (≥1024px).
- Layout strategy: stack vertically on mobile, reflow to columns and sticky summary on `lg`.
- Spacing: consistent use of `space-y-4`, `gap-4`, `px-4`/`py-4` tokens to maintain rhythm.

---

## Clean Code & Best Practices

- Single-responsibility components for readability and reuse.
- Separation of UI and data: `components/` vs `data/`.
- Centralized primitives (e.g., `Button`) to avoid duplicated Tailwind classes.
- ESLint configured; run `npm run lint` before commits.

---

## Project Description (Recruiter-friendly)

Reelax — Checkout UI is a production-focused frontend demonstrating strong frontend engineering skills: component design, responsive patterns, accessible interactions, and deployable build pipelines. The codebase demonstrates pragmatic architecture decisions: Vite for fast iteration, Tailwind for consistent utility-based styling, and a component-first approach for maintainability.

---

## Future Improvements

- Add unit tests with Jest and React Testing Library.
- Add end-to-end tests (Playwright/Cypress) for checkout flows.
- Integrate feature flags/analytics for conversion tracking.
- Add internationalization and multi-currency formatting.

---

## GitHub Submission & Commit Message Examples

Repository tagline:
> Reelax — Pixel-perfect, responsive checkout UI (React, Tailwind, Vite)

Suggested commit messages:
- `feat(ui): add nested coupon card components and iconography`
- `feat(checkout): implement wallet card with apply state and feedback`
- `fix(css): adjust border spacing for coupon cards`
- `chore(deps): add lucide-react for icons`

---

## Deployment

Deployed to Vercel:

- Live demo: https://reelax-assign-iidw.vercel.app/

QA checklist completed:
- Production build: `npm run build` — validated
- Responsive checks on mobile/tablet/desktop — validated
- Linting: `npm run lint` — recommended before commits

---

## Author

- Abhigyan Pandey — Frontend Engineer
- Email: abhigyan.pandey@getreelax.com

---

If you want, I can also add a short `README_SHORT.md`, `CONTRIBUTING.md`, or `CHANGELOG.md` for submission polish — which should I add next?
# Checkout Billing UI

Production-style React + Vite + Tailwind CSS checkout page that matches the provided billing/order-summary mockup and includes real interactions such as form validation, coupon selection, wallet toggling, responsive navigation, and live total calculation.

## Stack

- React 19
- Vite 8
- Tailwind CSS 4

## Structure

```text
src/
  components/
    checkout/
    layout/
    ui/
  constants/
  data/
  hooks/
  layouts/
  pages/
  styles/
  utils/
```

## Key Features

- Responsive top navbar with desktop actions and mobile menu
- Controlled billing form with validation and reset handling
- Selectable coupon cards plus coupon-code input and apply action
- Wallet balance toggle with live checkout total updates
- Selected plan highlight and upgrade action
- Reusable UI primitives for cards, buttons, inputs, and selects

## Local Setup

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Notes

- Tailwind is wired through `@tailwindcss/vite` and the global theme lives in `src/styles/theme.css`.
- Checkout state is centralized in `src/hooks/useCheckoutState.js` so the page stays composable and maintainable.# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
