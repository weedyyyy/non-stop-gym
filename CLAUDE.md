# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
npx tsc --noEmit # Type check without emitting
```

## Architecture

This is a Next.js 16 landing page for Non-Stop Gym, a martial arts training center. The site is bilingual (English/Arabic) with full RTL support.

### Route Structure

- `/` - English landing page (`app/page.tsx`)
- `/ar` - Arabic RTL landing page (`app/ar/page.tsx`)

Each language has its own layout file setting appropriate `lang` and `dir` attributes.

### Key Patterns

**Fonts**: Three Google Fonts loaded in root layout via `next/font`:
- Inter (body text)
- Oswald (headings)
- Tajawal (Arabic text, with `font-tajawal` class)

**Styling**: Tailwind CSS 4 with custom CSS variables in `globals.css`:
- Gold accent color: `#c9a227`
- Dark background: `#0a0a0a`
- Custom button classes: `.btn-gold`, `.btn-outline-gold`
- Custom card class: `.card-dark`

**Components**: Located in `app/components/`:
- `Lightbox.tsx` - Modal for image gallery viewing

**RTL Support**: Arabic page uses:
- `dir="rtl"` on html element
- `.animated-underline-rtl` class for RTL hover effects
- Swapped gradient directions (`to-r` ↔ `to-l`)
- `dir="ltr"` on phone numbers and times to keep them readable

### External Integrations

- Google Maps embed for location
- Google Forms link for membership applications
- Unsplash/Pexels images (configured in `next.config.ts`)
