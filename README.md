# Mmanas-Tech — UI/UX Designer & Frontend Developer
## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Sections](#sections)
- [Reusable Components](#reusable-components)
- [Customization Guide](#customization-guide)
- [Public Assets](#public-assets)
- [Deployment](#deployment)
- [Browser Support](#browser-support)
- [Author & Contact](#author--contact)
- [License](#license)

## Overview

**Mmanas-Tech** is a single-page portfolio for a UI/UX designer and frontend developer, designed to feel cinematic, premium, and "years ahead of traditional web design." The site is fully responsive, mobile-first, and uses fluid `clamp()` typography to scale gracefully from phone to ultra-wide displays.

The brand statement: immersive experiences, cinematic storytelling, advanced UI/UX design, and cutting-edge 3D web technologies — not just websites, but memorable digital experiences.

## Features

- **Magnetic hero portrait** — Mouse-following magnet effect (padding 150, strength 3) wrapped around a 3D transparent mascot
- **Scroll-driven marquee** — Two rows of preview GIFs moving in opposite directions based on scroll position, throttled with `requestAnimationFrame`
- **Sticky-stacking project cards** — Three cards scale and stack as you scroll, powered by `useScroll` + `useTransform`
- **Character-by-character scroll-reveal** — AnimatedText fades each character from 0.2 to 1 opacity based on its position in the text and scroll progress
- **Fullscreen contact overlay** — Opens from any "Contact Me" button or the nav link; closes via X button, ESC, backdrop click, or browser back button (uses `history.pushState`)
- **Fluid responsive typography** — `clamp()`-based font sizing across all headings
- **Dark theme** — `#0C0C0C` background with a gradient text effect on section headings (`linear-gradient(180deg, #646973 0%, #BBCCD7 100%)`)
- **Performance-conscious** — Passive scroll listeners, `willChange: transform`, lazy-loaded images, GPU-accelerated transforms
- **Kanit typeface** — Loaded from Google Fonts (weights 300–900)

## Tech Stack

| Technology        | Version  | Purpose                                    |
| ----------------- | -------- | ------------------------------------------ |
| React             | ^18.3.1  | UI framework                               |
| TypeScript        | ^5.6.3   | Type safety                                |
| Vite              | ^5.4.11  | Build tool & dev server                    |
| Tailwind CSS      | ^3.4.1   | Utility-first styling                      |
| Framer Motion     | ^12.38.0 | Animations, `useScroll`, `useTransform`    |
| Lucide React      | ^0.344.0 | Icon library                               |
| PostCSS           | ^8.4.49  | Tailwind processing                        |
| Autoprefixer      | ^10.4.20 | Vendor prefixing                           |
| @vitejs/plugin-react | ^4.3.4 | React Fast Refresh & JSX transform       |

## Prerequisites

- **Node.js** >= 18
- **npm** >= 9 (or pnpm / yarn)

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the URL printed in the terminal (default: http://localhost:5173)
```

## Available Scripts

| Command           | Description                                       |
| ----------------- | ------------------------------------------------- |
| `npm run dev`     | Start the Vite dev server with HMR                |
| `npm run build`   | Type-check (`tsc -b`) and build for production   |
| `npm run preview` | Preview the production build locally              |

The production build outputs to `dist/` and is a fully static site (~98 kB gzipped JS, ~4 kB gzipped CSS).

## Project Structure

```
profile/
├── public/                              # Static assets, served at site root
│   ├── mascot.png                       # Hero 3D mascot — MUST be transparent PNG
│   ├── nethravedha1.png                 # Project 01 - left col image 1
│   ├── nethravedha2.png                 # Project 01 - left col image 2
│   ├── nethravedha3.png                 # Project 01 - right col image
│   ├── cryiq1.png                       # Project 02 - left col image 1
│   ├── cryiq2.png                       # Project 02 - left col image 2
│   ├── cryiq3.png                       # Project 02 - right col image
│   ├── flowai1.png                      # Project 03 - left col image 1
│   ├── flowai2.png                      # Project 03 - left col image 2
│   └── flowai3.png                      # Project 03 - right col image
│
├── src/
│   ├── main.tsx                         # React entry; mounts <App/> inside <ContactProvider/>
│   ├── App.tsx                          # Section composition + <AnimatePresence> for Contact
│   ├── index.css                        # Tailwind directives, reset, .hero-heading, .sticky-card
│   ├── vite-env.d.ts
│   │
│   ├── context/
│   │   └── ContactContext.tsx           # isOpen / open() / close() + popstate handler
│   │
│   ├── components/
│   │   ├── FadeIn.tsx                   # Framer Motion wrapper using motion.create()
│   │   ├── Magnet.tsx                   # Mouse-following magnetic hover effect
│   │   ├── AnimatedText.tsx             # Char-by-char scroll-driven opacity reveal
│   │   ├── ContactButton.tsx            # Gradient pill button → opens Contact overlay
│   │   └── LiveProjectButton.tsx        # Ghost outline pill with ArrowUpRight icon
│   │
│   └── sections/
│       ├── HeroSection.tsx              # Nav, massive "HI, I'M MANAS" heading, mascot, bottom bar
│       ├── MarqueeSection.tsx           # 21 GIFs in two scroll-parallax rows
│       ├── AboutSection.tsx             # 4 corner 3D decorations + animated bio
│       ├── ServicesSection.tsx          # 5 service items on a white rounded-top section
│       ├── ProjectsSection.tsx          # 3 sticky-stacking project cards
│       └── ContactPage.tsx              # Fullscreen contact overlay
│
├── index.html                           # Kanit font preload + root div
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
└── .gitignore
```

## Sections

The site is composed of six sections, rendered in order inside a `<main className="overflow-x-clip">`.

### 1. HeroSection

Full-viewport (`h-screen`) hero. Contains:
- A 4-link navbar (About, Price, Projects, Contact) — the **Contact** link opens the contact overlay
- A massive `clamp(12vw, 13vw, 13vw)` heading: **"Hi, i'm manas"** with the `.hero-heading` gradient, inside an `overflow-hidden` wrapper for a slide-in effect
- A centered 3D mascot wrapped in `<Magnet>`, with a soft blue→violet radial glow behind it
- A bottom bar: short left-aligned description + right-aligned `<ContactButton>`

### 2. MarqueeSection

Two rows of preview GIFs (21 total from `motionsites.ai`):
- Row 1: first 11 images, tripled → moves right on scroll
- Row 2: remaining 10 images, tripled → moves left on scroll
- Scroll offset formula: `(window.scrollY - sectionTop + window.innerHeight) * 0.3`
- `requestAnimationFrame`-throttled scroll handler updates `translate3d` directly on the row elements (no React re-renders)

### 3. AboutSection

`min-h-screen` centered section with:
- Four decorative 3D PNGs in the corners (moon, lego, abstract object, 3D group), each fading in from its respective side
- "About me" heading with the gradient
- Animated bio paragraph (`<AnimatedText>` — char-by-char reveal, opacity 0.2 → 1)
- A second `<ContactButton>` below the text

### 4. ServicesSection

White (`#FFFFFF`) section with rounded top corners (40 / 50 / 60 px). Contains:
- A "Services" heading
- A vertical list of 5 service items (01–05), staggered fade-in (`i * 0.1`)
- Each item: huge number on the left, name + description on the right, separated by 1px borders

### 5. ProjectsSection

Dark section that pulls up over the white Services section (`-mt-10` → `-mt-14`) with rounded top corners, creating a card-on-card effect. Contains:
- A "Project" heading
- A `relative` container that holds three sticky project cards
- Each card: `sticky top-24 md:top-32 + index * 28px`, scale animation from `1` → `targetScale` where `targetScale = 1 - (totalCards - 1 - index) * 0.03`
- Each card layout: huge number + "Featured Project" label + project name + `<LiveProjectButton>` on top, 40/60 image grid (2 stacked + 1 tall) on the bottom

### 6. ContactPage (overlay)

Rendered conditionally via `<AnimatePresence>` in `App.tsx`. Fullscreen `fixed inset-0 z-[100]`:
- Dark backdrop with a blue→violet radial glow
- "Contact" heading + "Let's build something incredible together" subtitle
- Vertical list of 5 contact methods (Phone, Email, LinkedIn, GitHub, Instagram) with Lucide icons
- Phone → `tel:+918125464855`, Email → `mailto:`, socials open in a new tab
- Close via X button, ESC, backdrop click, or browser back button

## Reusable Components

| Component         | Purpose                                                                                          |
| ----------------- | ------------------------------------------------------------------------------------------------ |
| `FadeIn`          | Framer Motion wrapper. Props: `delay`, `duration` (default 0.7), `x` (0), `y` (30), `as`. Easing `[0.25, 0.1, 0.25, 1]`. Uses `motion.create()`. |
| `Magnet`          | Tracks cursor position; applies `translate3d` to the child, activated within `padding` px of the element. Smooth in/out transitions. |
| `AnimatedText`    | Renders each character of a string with an opacity (`0.2 → 1`) driven by `useScroll` with offset `['start 0.8', 'end 0.2']`. |
| `ContactButton`   | Gradient pill (123deg purple→orange) with inset shadow + 2px white outline offset -3px. Calls `useContact().open()`. |
| `LiveProjectButton` | Ghost outline pill with an `ArrowUpRight` icon. Opens the project's repo URL in a new tab. |

## Customization Guide

### Update personal / contact details
Edit the `items` array in **`src/sections/ContactPage.tsx`**:
```ts
{ icon: Phone, label: 'Phone', value: '8125464855', href: 'tel:+918125464855', external: false },
// ... etc
```

### Change the hero heading
In **`src/sections/HeroSection.tsx`**, find the `<span>` containing `Hi, i'm manas` and replace the text. Also adjust the font-size classes (`text-[12vw] sm:text-[12.5vw] md:text-[13vw] lg:text-[13vw]`) if the new string has a different length — the rule of thumb is ~`100vw / (chars * 0.6)` max.

### Update project cards (name, URL, images)
Edit the `projects` array in **`src/sections/ProjectsSection.tsx`**. Each entry:
```ts
{
  num: '01',
  name: 'Nethravedha',
  url: 'https://github.com/Mmanas-tech/nethra-vedha',
  col1Img1: '/nethravedha1.png',   // left col, top
  col1Img2: '/nethravedha2.png',   // left col, bottom
  col2Img:  '/nethravedha3.png',   // right col, full height
}
```
Drop the new images into `public/` and reference them with a leading `/`.

### Replace the hero mascot
Drop a new transparent PNG at **`public/mascot.png`**. The transparent background is critical — the page's `#0C0C0C` shows through it. If your source image has a baked-in background, use [remove.bg](https://remove.bg) to strip it.

### Update the marquee GIFs
Edit the `ALL_IMAGES` array in **`src/sections/MarqueeSection.tsx`**. The first 11 go to row 1 (right on scroll), the remaining 10 to row 2 (left on scroll). All are tripled for seamless scrolling.

### Update About bio text
Edit the `ABOUT_TEXT` constant in **`src/sections/AboutSection.tsx`**.

### Update Services list
Edit the `services` array in **`src/sections/ServicesSection.tsx`**.

### Replace the 4 About-section corner decorations
Update the four `src=` URLs on the `<img>` tags in **`src/sections/AboutSection.tsx`** (moon, 3D object, lego, 3D group). Adjust the `w-*` classes for different sizes.

### Change the heading gradient
The `.hero-heading` class in **`src/index.css`**:
```css
.hero-heading {
  background: linear-gradient(180deg, #646973 0%, #BBCCD7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

### Change the Contact button gradient
The `style` object at the top of **`src/components/ContactButton.tsx`**:
```ts
background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
```

### Change the page background
`html`, `body`, and `#root` are set to `#0C0C0C` in **`src/index.css`**.

### Change the font
1. Update the Google Fonts `<link>` in **`index.html`** (current: `Kanit` weights 300–900)
2. Update the `font-family` in **`src/index.css`**

### Change the nav links
Edit the `navLinks` array in **`src/sections/HeroSection.tsx`**. Note: the link with `label: 'Contact'` is rendered as a button that opens the contact overlay; the rest are anchor links.

## Public Assets

Everything in `public/` is served at the site root.

- **mascot.png** — 3D hero mascot, transparent PNG. Used by `HeroSection`.
- **nethravedha1/2/3.png, cryiq1/2/3.png, flowai1/2/3.png** — Project card images. Two for the left column, one for the right.

Recommended image sizes for crisp display on retina:
- Mascot: 800×1000 px (or larger, transparent background)
- Project images: 1280×800+ px

## Deployment

The `dist/` folder produced by `npm run build` is a fully static site. Drop it on any static host:

- **Vercel** — `vercel deploy` (auto-detects Vite)
- **Netlify** — `netlify deploy --dir=dist --prod`
- **GitHub Pages** — push `dist/` to a `gh-pages` branch
- **Cloudflare Pages** — connect the repo, build command `npm run build`, output dir `dist`

Make sure the `mascot.png` and the 9 project images are committed to `public/` before deploying.

## Browser Support

Targets modern evergreen browsers:
- Chrome / Edge >= 100
- Firefox >= 100
- Safari >= 15.4

Uses ES2020, CSS `backdrop-filter`, CSS custom properties, `position: sticky`, and the History API. No transpilation for legacy browsers is configured by default.

## Author & Contact

**Manas Maddela** — Mmanas-Tech
UI/UX Designer & Frontend Developer
Hyderabad, India

- Email: [mmanas.tech@gmail.com](mailto:mmanas.tech@gmail.com)
- Phone: +91 81254 64855
- LinkedIn: [manas-maddela](https://www.linkedin.com/in/manas-maddela-1698b8372/)
- GitHub: [Mmanas-tech](https://github.com/Mmanas-tech)
- Instagram: [@manas_14xd](https://www.instagram.com/manas_14xd/)

## License

MIT — free to use, modify, and distribute. Attribution appreciated.
