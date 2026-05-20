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
