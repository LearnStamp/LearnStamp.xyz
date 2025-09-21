# LearnStamp — Design System

Version: 1.0  
Last updated: 2025-09-21

## 0) Purpose
A minimal, accessible, implementation-ready system for brand, product, and marketing. Pairs with brand-guideline.md. Includes tokens, components, and usage examples.

---

## 1) Design Tokens

### 1.1 Color (semantic-first)
- ls.color.bg: Light: #0C0E12 on text? No—semantic flip below
- Light theme
  - ls.color.surface: #0C0E12? (Dark) — use for dark theme. See below.
- Light
  - ls.color.bg: #FFFFFF
  - ls.color.surface: #F7F8FA
  - ls.color.surfaceAlt: #EEF0F4
  - ls.color.text: #0F172A
  - ls.color.textMuted: #475569
  - ls.color.primary: #4F46E5
  - ls.color.primaryAlt: #6366F1
  - ls.color.success: #16A34A
  - ls.color.warning: #EAB308
  - ls.color.danger: #DC2626
  - ls.color.border: #E2E8F0
  - ls.color.stroke: #CBD5E1
  - ls.color.focus: #22C55E (AA on white with 3px ring)
- Dark
  - ls.color.bg: #0B0F1A
  - ls.color.surface: #0F172A
  - ls.color.surfaceAlt: #111827
  - ls.color.text: #E5E7EB
  - ls.color.textMuted: #9CA3AF
  - ls.color.primary: #818CF8
  - ls.color.primaryAlt: #A5B4FC
  - ls.color.success: #22C55E
  - ls.color.warning: #EAB308
  - ls.color.danger: #F87171
  - ls.color.border: #1F2937
  - ls.color.stroke: #334155
  - ls.color.focus: #22C55E

Contrast
- Body text on bg ≥ 4.5:1; large text ≥ 3:1 (WCAG 2.1 AA).
- Primary on surfaces ≥ 4.5:1 for text buttons; use filled buttons where AA is not met.

State overlays (alpha on top of base)
- hover: 8%
- pressed: 16%
- disabled: 38% text opacity

### 1.2 Spacing (4pt base)
- ls.space.xs: 4
- ls.space.sm: 8
- ls.space.md: 12
- ls.space.lg: 16
- ls.space.xl: 24
- ls.space.2xl: 32
- ls.space.3xl: 40
- ls.space.4xl: 48
- ls.space.5xl: 64

### 1.3 Radii
- ls.radius.sm: 6
- ls.radius.md: 10
- ls.radius.lg: 14
- ls.radius.pill: 999

### 1.4 Elevation (shadow)
- ls.shadow.sm: 0 1px 2px rgba(0,0,0,0.06)
- ls.shadow.md: 0 4px 12px rgba(0,0,0,0.10)
- ls.shadow.lg: 0 12px 24px rgba(0,0,0,0.14)

### 1.5 Typography
- Primary family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"
- Scale (px/rem at 16 base)
  - h1: 32/1.25, 700
  - h2: 24/1.3, 700
  - h3: 20/1.4, 600
  - body: 16/1.6, 400
  - small: 14/1.5, 400
  - micro: 12/1.4, 500
- Numeric
  - ls.font.tracking-tight: -0.01em
  - ls.font.tracking-normal: 0

### 1.6 Motion
- Durations: fast 120ms, base 200ms, slow 300ms
- Easing: standard cubic-bezier(0.2, 0.0, 0, 1), emphasized ease-out cubic-bezier(0.2, 0.8, 0.2, 1)
- Reduce motion: honor prefers-reduced-motion

### 1.7 Breakpoints
- sm: 640, md: 768, lg: 1024, xl: 1280, 2xl: 1536

---

## 2) CSS Variables (example)
```css
:root {
  --ls-bg: #ffffff;
  --ls-surface: #f7f8fa;
  --ls-surface-alt: #eef0f4;
  --ls-text: #0f172a;
  --ls-text-muted: #475569;
  --ls-primary: #4f46e5;
  --ls-primary-alt: #6366f1;
  --ls-success: #16a34a;
  --ls-warning: #eab308;
  --ls-danger: #dc2626;
  --ls-border: #e2e8f0;
  --ls-stroke: #cbd5e1;
  --ls-focus: #22c55e;

  --ls-space-xs: 4px;
  --ls-space-sm: 8px;
  --ls-space-md: 12px;
  --ls-space-lg: 16px;
  --ls-space-xl: 24px;
  --ls-space-2xl: 32px;

  --ls-radius-sm: 6px;
  --ls-radius-md: 10px;
  --ls-radius-lg: 14px;
  --ls-radius-pill: 999px;

  --ls-shadow-sm: 0 1px 2px rgba(0,0,0,0.06);
  --ls-shadow-md: 0 4px 12px rgba(0,0,0,0.10);
  --ls-shadow-lg: 0 12px 24px rgba(0,0,0,0.14);

  --ls-dur-fast: 120ms;
  --ls-dur-base: 200ms;
  --ls-dur-slow: 300ms;
  --ls-ease: cubic-bezier(0.2, 0.0, 0, 1);
  --ls-ease-out: cubic-bezier(0.2, 0.8, 0.2, 1);
}
@media (prefers-color-scheme: dark) {
  :root {
    --ls-bg: #0b0f1a;
    --ls-surface: #0f172a;
    --ls-surface-alt: #111827;
    --ls-text: #e5e7eb;
    --ls-text-muted: #9ca3af;
    --ls-primary: #818cf8;
    --ls-primary-alt: #a5b4fc;
    --ls-success: #22c55e;
    --ls-warning: #eab308;
    --ls-danger: #f87171;
    --ls-border: #1f2937;
    --ls-stroke: #334155;
    --ls-focus: #22c55e;
  }
}
```

---

## 3) Component Specs

### 3.1 Button
- Sizes: sm (32px), md (40px), lg (48px), radius md
- Types:
  - Primary (filled): bg primary, text white; hover overlay 8%; pressed 16%
  - Secondary (outlined): 1px border, text primary, hover bg surfaceAlt
  - Ghost: text primary, hover bg surfaceAlt
  - Destructive: bg danger, text white
- States: hover, focus (2px inner + 3px outer ring color focus), disabled (38% text opacity, 24% bg desat)

### 3.2 Tag/Badge
- 20–24px height, pill radius
- Variants: default (surfaceAlt), success, warning, danger, info (primaryAlt)

### 3.3 Card
- Padding: xl (24)
- Radius: lg
- Shadow: md
- Header/subheader/body slots; optional divider (stroke)

### 3.4 Stamp Card (key object)
- Elements: timestamp chip, question text (max 140 chars), difficulty dot (A11y: text label), answer CTA
- Correct answer: success state + “Stamped” badge
- Wrong answer: surface warning state + “Try again” hint; never color-only feedback

### 3.5 Quiz Choice
- Radio list; large tap targets (min 44×44)
- Selected: 2px border primary; correct/incorrect: icon + text; announce via aria-live

### 3.6 Progress (StampRate)
- Bar with label; large numbers use tabular lining figures
- Colors: neutral base, success highlight

### 3.7 Tooltip
- Delay: 300ms
- Positioning: 8px offset
- Arrow: 6px
- Escape and focus-trap compliant

### 3.8 Modal/Sheet
- Width: 560–720px desktop; full-bleed sheet on mobile
- Close: ESC, visible X, click outside (configurable)
- Focus return to invoker

### 3.9 Tabs
- Underline style; 44px min height; left-aligned; strong focus indicator

---

## 4) Iconography
- Style: 2px strokes, rounded joins, 24px grid
- Key icons: Stamp, Checkpoint, Time/Clock, Graph, Success, Warning, Error
- Ensure text alternative for icon-only buttons

---

## 5) Grid
- Container: 1200px max, 24px gutters
- Columns: 12 desktop, 8 tablet, 4 mobile

---

## 6) Accessibility Rules
- Hit area ≥ 44×44
- Focus visible on all interactive elements
- Keyboard order matches visual flow
- aria-live=polite for answer feedback
- Language attributes set; clear error text

---

## 7) Usage Examples

### 7.1 Button HTML
```html
<button class="btn btn--primary">Stamp your understanding</button>
```

### 7.2 Tailwind mapping (example)
```js
// tailwind.config.js
theme: {
  extend: {
    colors: {
      bg: "var(--ls-bg)",
      surface: "var(--ls-surface)",
      primary: "var(--ls-primary)",
      success: "var(--ls-success)",
      warning: "var(--ls-warning)",
      danger: "var(--ls-danger)"
    },
    borderRadius: {
      md: "10px",
      lg: "14px",
      pill: "999px"
    },
    boxShadow: {
      ls: "var(--ls-shadow-md)"
    }
  }
}
```

---

## 8) Localization & Length
- Headlines ≤ 60 chars; question text ≤ 140 chars; tooltip ≤ 80 chars.
- Allow 30–40% text expansion for non-English.

---

## 9) Assets & Export
- Logos in SVG + monochrome variants.
- Color tokens exported as JSON for apps and as CSS variables for web.
- Provide dark/light screenshots with AA proofs.
