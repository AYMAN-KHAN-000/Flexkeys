<div align="center">
  <br />
  <a href="https://github.com/Itssanthoshhere/FLEX-Keyboard-3D" target="_blank">
    <img src="public/Readme/flexThumbnail.jpg" alt="Project Banner">
  </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next.js-000?style=for-the-badge&logo=next.js&logoColor=white" />
    <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
    <img src="https://img.shields.io/badge/-TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
    <img src="https://img.shields.io/badge/-PrismicCMS-F4B400?style=for-the-badge&logo=prismic&logoColor=white" />
    <img src="https://img.shields.io/badge/-React_Three_Fiber-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
    <img src="https://img.shields.io/badge/-Drei-FF007C?style=for-the-badge&logoColor=white" />
    <img src="https://img.shields.io/badge/-Three.js-000?style=for-the-badge&logo=three.js&logoColor=white" />
    <img src="https://img.shields.io/badge/-GSAP-FF6600?style=for-the-badge&logoColor=white" />
    <img src="https://img.shields.io/badge/-SliceMachine-0078D7?style=for-the-badge&logoColor=white" />
    <img src="https://img.shields.io/badge/-clsx-6C757D?style=for-the-badge&logoColor=white" />
    <img src="https://img.shields.io/badge/-Stripe-635BFF?style=for-the-badge&logo=stripe&logoColor=white" />
  </div>

  <div align="center">
    <h3>⌨️ FLEX Keyboards</h3>
    An interactive, modern keyboard showcase with <b>3D animations</b> & <b>Stripe-powered payments</b> using <b>Next.js 15, TailwindCSS, Prismic CMS, and React Three Fiber</b>.<br/>
    <i>Built step by step with Slice Machine, GSAP animations, and secure checkout flow.</i>
  </div>

  <br />

  <a href="https://flexkeys-1-t2b9g7x0o-ayman-khans-projects.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20Live%20Demo-brightgreen?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
  <br />
</div>

---

## 📋 Table of Contents

1. ✨ [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🧱 [Project Structure](#project-structure)
6. 📝 [Customization](#customization)
7. 📄 [License](#license)
8. 🔗 [Contacts](#contacts)

---

## ✨ Introduction

FLEX Keyboards is a **3D interactive keyboard showcase** website. Users can explore keyboard models, switch types, and keycaps in 3D with smooth animations. The site also integrates **Stripe Checkout** for secure, real-world payment flows — making it a **mini e-commerce experience**.

It leverages **Next.js 15**, **TailwindCSS**, **Prismic CMS**, and **React Three Fiber** to deliver immersive interactions and content-driven layouts.

---

## ⚙️ Tech Stack

#### ⚡ Framework & Core

- **[Next.js 15](https://nextjs.org/)** – Full-stack React framework for SSR, SSG, and ISR.
- **React 19 (RC)** – Component-based UI library.
- **TypeScript 5** – Static typing for safer, maintainable code.

#### 🎨 Styling & UI

- **[Tailwind CSS 3.4](https://tailwindcss.com/)** – Utility-first CSS framework.
- **Fluid Tailwind** – Responsive fluid typography & spacing.
- **clsx** – Conditional class management for dynamic styling.
- **React Icons** – Ready-to-use icon sets.

#### 📦 CMS & Content

- **[Prismic CMS](https://prismic.io/)** – Headless CMS for managing dynamic content.
  - `@prismicio/client`, `@prismicio/react`, `@prismicio/next` – Prismic SDKs for Next.js integration.

- **Slice Machine** – Local custom type & slice builder for content modeling.

#### 🎬 Animation

- **[GSAP 3.12](https://greensock.com/gsap/)** – Timeline-based animations for smooth transitions.
- **@gsap/react** – GSAP integration with React components.

#### 🖼 3D & Visualization

- **[Three.js 0.171](https://threejs.org/)** – 3D rendering engine.
- **React Three Fiber** – React renderer for Three.js.
- **[@react-three/drei](https://github.com/pmndrs/drei)** – Helpers & controls for React Three Fiber.

#### 💳 Payments

- **[Stripe Checkout](https://stripe.com/checkout)** – Secure payment gateway for checkout flows.

#### 🧹 Tooling

- **ESLint** + `eslint-config-next` – Linting and code quality.
- **PostCSS** – CSS processing.
- **Turbopack** – Fast local dev server (`next dev`).

---

## 🔋 Features

- **Landing Page** – Hero section with immersive 3D keyboard.
- **3D Keyboard Models** – Rotate, zoom, and interact with keyboard layouts.
- **Switch Playground** – Explore switches in 3D for tactile comparison.
- **Keycap Changer** – Visualize custom keycap sets in real-time.
- **Dynamic Content** – Manage content via Prismic CMS.
- **Smooth Animations** – Powered by GSAP timelines and ScrollTrigger.
- **Secure Payments** – Stripe Checkout integration for real transactions.
- **Responsive Design** – Desktop, tablet, and mobile friendly.

---

## 🤸 Quick Start

### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- Stripe account (for testing checkout flow)

### Clone the Project

```bash
git clone https://github.com/ayman-khan-000/FLEX-Keyboard-3D.git
cd FLEX-Keyboards
```

### Install Dependencies

```bash
npm install
```

### Set Environment Variables

Create a `.env.local` file and add your **Stripe keys**:

```bash
STRIPE_PUBLIC_KEY=your_public_key
STRIPE_SECRET_KEY=your_secret_key
```

### Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the project.

---

## 🧱 Project Structure

| File/Component           | Description                                         |
| ------------------------ | --------------------------------------------------- |
| `app/layout.tsx`         | Layout wrapper and global providers                 |
| `app/page.tsx`           | Homepage rendering                                  |
| `slices/*/index.tsx`     | Prismic slice components                            |
| `components/Bounded.tsx` | Layout wrapper with consistent padding              |
| `components/Navbar.tsx`  | Header navigation bar with menu and checkout button |
| `components/Footer.tsx`  | Footer with links and branding                      |
| `components/Loader.tsx`  | Loader animation for 3D canvas                      |
| `components/Scene.tsx`   | 3D scene for keyboards using React Three Fiber      |
| `utils/stripe.ts`        | Stripe checkout configuration & helpers             |

---

## 📝 Customization

### Add Pages & Slices


2. Create a new **Page**
3. Add slices (heading, body, 3D components)
4. Publish and view at `/your-page-slug`


