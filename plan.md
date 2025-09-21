# LearnStamp Frontend Development Plan

## Project Overview
Setting up a React + TypeScript + Vite project with shadcn/ui for LearnStamp - a social learning platform that provides proof-of-understanding for video content through timestamped micro-quizzes.

## Phase 1: Project Foundation ✅

### 1.1 Project Initialization
- [ ] Create React + TypeScript Vite project using `pnpm create vite@latest`
- [ ] Install base dependencies
- [ ] Clean up default Vite template files

### 1.2 Tailwind CSS Setup
- [ ] Install Tailwind CSS and @tailwindcss/vite plugin
- [ ] Replace src/index.css with Tailwind imports
- [ ] Configure Tailwind for the project

### 1.3 TypeScript Configuration
- [ ] Update tsconfig.json with baseUrl and path mapping for "@/*"
- [ ] Update tsconfig.app.json with path resolution
- [ ] Install @types/node for path resolution

### 1.4 Vite Configuration
- [ ] Update vite.config.ts with:
  - Path alias configuration (@/ -> ./src/)
  - Tailwind CSS plugin integration
  - React plugin setup

### 1.5 shadcn/ui Setup
- [ ] Run `pnpm dlx shadcn@latest init` to initialize
- [ ] Configure components.json with LearnStamp design preferences
- [ ] Install essential components (Button, Card, Badge, Input, etc.)

## Phase 2: Design System Implementation 🎨

### 2.1 Design Tokens
- [ ] Implement LearnStamp color palette (light/dark themes)
  - Primary: #4F46E5 (light) / #818CF8 (dark)
  - Success: #16A34A / #22C55E
  - Warning: #EAB308
  - Danger: #DC2626 / #F87171
- [ ] Configure spacing scale (4pt base: xs=4, sm=8, md=12, lg=16, xl=24, etc.)
- [ ] Set up typography scale (Inter font family)
- [ ] Configure border radius values (sm=6, md=10, lg=14, pill=999)
- [ ] Add shadow tokens (sm, md, lg)

### 2.2 CSS Variables Setup
- [ ] Create CSS custom properties for all design tokens
- [ ] Implement dark mode support with prefers-color-scheme
- [ ] Update Tailwind config to use CSS variables

### 2.3 Component Customization
- [ ] Customize shadcn components to match LearnStamp design system
- [ ] Ensure WCAG 2.1 AA contrast compliance (4.5:1 for text, 3:1 for large text)
- [ ] Implement focus states with visible focus rings

## Phase 3: Core Components 🧩

### 3.1 Essential shadcn Components
- [ ] Button (Primary, Secondary, Ghost, Destructive variants)
- [ ] Card (with header, body, footer slots)
- [ ] Badge/Tag (default, success, warning, danger variants)
- [ ] Input and form components
- [ ] Tooltip with proper accessibility
- [ ] Modal/Dialog components
- [ ] Tabs component
- [ ] Progress component

### 3.2 LearnStamp-Specific Components
- [ ] **StampCard** - Core timestamped quiz component
  - Timestamp chip display
  - Question text (max 140 chars)
  - Difficulty indicator
  - Answer CTA button
  - Success/error states
- [ ] **QuizChoice** - Multiple choice answer component
  - Radio button list with large tap targets (44x44px min)
  - Selected state styling
  - Correct/incorrect feedback with icons + text
  - aria-live announcements
- [ ] **StampProgress** - Learning progress visualization
  - Progress bar with StampRate display
  - Tabular lining figures for numbers
- [ ] **TimestampChip** - Video timestamp display component
- [ ] **ConceptGraph** - Visual concept mapping component
- [ ] **CreatorAnalytics** - Dashboard components for creators

## Phase 4: Application Structure 🏗️

### 4.1 Routing Setup
- [ ] Install and configure React Router
- [ ] Set up main routes:
  - `/` - Home/Landing page
  - `/watch` - Video watching interface with stamp overlay
  - `/profile` - StampBook (learner profile)
  - `/creator` - Creator Dashboard
  - `/concepts` - StampGraph visualization

### 4.2 Layout Components
- [ ] Main application layout with navigation
- [ ] Video overlay layout for stamp integration
- [ ] Dashboard layout for creator analytics
- [ ] Mobile-responsive navigation

### 4.3 State Management
- [ ] Set up state management solution (Context API or Zustand)
- [ ] User authentication state
- [ ] Stamp/quiz state management
- [ ] Video playback state

## Phase 5: Feature Implementation 🚀

### 5.1 Core Features
- [ ] Video timestamp integration
- [ ] Quiz creation and answering flow
- [ ] Stamp minting simulation (U2U integration placeholder)
- [ ] User profile and StampBook
- [ ] Basic creator analytics

### 5.2 Accessibility & UX
- [ ] Keyboard navigation support
- [ ] Screen reader compatibility
- [ ] Focus management
- [ ] Error handling and user feedback
- [ ] Loading states and micro-interactions

### 5.3 Responsive Design
- [ ] Mobile-first responsive implementation
- [ ] Touch-friendly interactions
- [ ] Adaptive layouts for different screen sizes

## Phase 6: Integration & Polish ✨

### 6.1 API Integration Preparation
- [ ] Set up API client structure
- [ ] Mock data for development
- [ ] Error boundary implementation

### 6.2 Performance Optimization
- [ ] Code splitting and lazy loading
- [ ] Image optimization
- [ ] Bundle size optimization

### 6.3 Testing & Quality
- [ ] Component testing setup
- [ ] Accessibility testing
- [ ] Cross-browser compatibility

## Brand Guidelines Compliance ✅

### Voice & Messaging
- [ ] Implement "Stamp your understanding" tagline
- [ ] Use LearnStamp terminology consistently:
  - Stamp (proof artifact)
  - Stamping (answering process)
  - StampBook (profile)
  - StampGraph (concept map)
  - StampRate (pass rate)
  - Checkpoint (timestamped quiz)

### Visual Identity
- [ ] Implement LearnStamp logo and branding
- [ ] Follow accessibility guidelines (WCAG 2.1 AA)
- [ ] Use approved color palette and typography
- [ ] Implement proper focus states and interactions

## Technical Requirements

### Dependencies
- React 18+
- TypeScript 5+
- Vite 6+
- Tailwind CSS 4+
- shadcn/ui components
- React Router
- Inter font family

### Browser Support
- Modern browsers with ES2020+ support
- Mobile Safari and Chrome
- Accessibility features support

### Performance Targets
- First Contentful Paint < 1.5s
- Largest Contentful Paint < 2.5s
- Cumulative Layout Shift < 0.1

---

## Getting Started Checklist

1. ✅ Read project documentation (Readme.md, brand-guideline.md, design-system.md)
2. ⏳ Create this plan.md document
3. ⏳ Initialize Vite project with React + TypeScript
4. ⏳ Set up Tailwind CSS and shadcn/ui
5. ⏳ Implement design system tokens
6. ⏳ Build core components
7. ⏳ Create application structure
8. ⏳ Implement key features
9. ⏳ Test and polish

**Next Step**: Initialize the Vite project and begin Phase 1 implementation.