# Component Contracts: Performance Testing Workflow

**Feature**: Performance Testing Workflow Visualization  
**Date**: 2026-01-16

## Overview

This document defines the interface contracts for all components used in the Performance Testing workflow visualization page. Most components are **reused** from the existing codebase with no modifications.

---

## 1. PerformanceAnalysisProcess (NEW)

### Purpose
Main component that renders the Performance Testing workflow with 7 phases, theme support, and interactive process cards.

### Location
`/web/src/components/PerformanceAnalysisProcess.tsx`

### Interface

```typescript
interface PerformanceAnalysisProcessProps {
  theme: 'crystal' | 'obsidian'
  onToggleTheme: () => void
}
```

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `theme` | `'crystal' \| 'obsidian'` | Yes | Current theme state (light or dark mode) |
| `onToggleTheme` | `() => void` | Yes | Callback function to toggle theme state |

### Internal Data Structure

```typescript
interface Activity {
  text: string
  type: 'personal' | 'in-meeting'
  scope: 'in' | 'out'
  experiment?: {
    name: string
    color: string // Tailwind CSS class (e.g., 'bg-blue-500')
  }
}

interface ProcessStep {
  title: string
  owner: string
  activities: Activity[]
  isExpanded?: boolean // Default expansion state
}

const steps: ProcessStep[] = [
  // 7 phases defined here
]
```

### Behavior

1. **Renders 7 Process Phases**: Creates ProcessFlowCard components for each phase with proper data
2. **Theme Support**: Applies theme-appropriate classes based on `theme` prop
3. **Layout**: Provides full-page layout with header, hero, process flow, and footer sections
4. **Animation**: Uses Framer Motion for sequential fade-in animations
5. **Responsive**: Adapts layout for mobile, tablet, and desktop viewports

### Responsibilities

- Define the 7-phase data structure with all activities
- Render sticky header with navigation and theme toggle
- Render hero section with title, description, and icon
- Render legend explaining work types and AI experiments
- Map process steps to ProcessFlowCard components
- Handle theme application to all child elements
- Provide responsive layout and spacing

### Does NOT Handle

- Theme state management (handled by page component)
- Theme persistence (handled by page component)
- Routing (handled by Next.js)
- Individual card expansion state (handled by ProcessFlowCard)

---

## 2. Page Component: /performance-testing/page.tsx (NEW)

### Purpose
Next.js page component that manages theme state, persists to localStorage, and renders PerformanceAnalysisProcess.

### Location
`/web/src/app/performance-testing/page.tsx`

### Interface

```typescript
export default function PerformanceTestingPage(): JSX.Element
```

### State Management

```typescript
const [theme, setTheme] = useState<'crystal' | 'obsidian'>('crystal')
const [mounted, setMounted] = useState(false)
```

### Behavior

1. **Theme Initialization**: 
   - Check localStorage for saved theme (`'analysta-theme'` key)
   - Fall back to system preference (prefers-color-scheme: dark)
   - Default to 'crystal' if no preference

2. **Theme Persistence**:
   - Save theme changes to localStorage
   - Apply/remove 'dark' class to document root

3. **Hydration Handling**:
   - Return null before mount to prevent flash of unstyled content
   - Set mounted state after hydration

4. **Render**: Pass theme and toggle callback to PerformanceAnalysisProcess

### Responsibilities

- Theme state management (useState)
- Theme persistence (localStorage)
- System preference detection
- Prevent hydration mismatch
- Render PerformanceAnalysisProcess with props

### Pattern Reference
Exact copy-adapt of `/app/business-analysis/page.tsx` with component name changed

---

## 3. ProcessFlowCard (REUSED)

### Purpose
Reusable component that displays a single process phase with collapsible activities.

### Location
`/web/src/components/ProcessFlowCard.tsx` (EXISTING - NO CHANGES)

### Interface

```typescript
interface ProcessFlowCardProps {
  title: string
  owner: string
  activities: Activity[]
  index: number
  isLast?: boolean
  defaultExpanded?: boolean
}
```

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | `string` | Yes | - | Phase title (e.g., "Business Request") |
| `owner` | `string` | Yes | - | Owner role (e.g., "Product Owner") |
| `activities` | `Activity[]` | Yes | - | Array of activities for this phase |
| `index` | `number` | Yes | - | Phase index for animation delay |
| `isLast` | `boolean` | No | `false` | Whether this is the last card (no arrow) |
| `defaultExpanded` | `boolean` | No | Auto-determined | Initial expansion state |

### Behavior

- **Collapsible**: Click header to expand/collapse activities
- **Default State**: Expands by default if any activity has `scope: 'in'`
- **Animations**: Fade-in on scroll, smooth expand/collapse transition
- **Badge Display**: Shows work type and scope badges for each activity
- **Arrow**: Shows animated down arrow between cards (except last)
- **Theme-Aware**: Adapts styling based on parent theme

### Usage in PerformanceAnalysisProcess

```typescript
{steps.map((step, index) => (
  <ProcessFlowCard
    key={index}
    title={step.title}
    owner={step.owner}
    activities={step.activities}
    index={index}
    isLast={index === steps.length - 1}
    defaultExpanded={step.isExpanded}
  />
))}
```

---

## 4. ThemeToggle (REUSED)

### Purpose
Button component to toggle between Crystal (light) and Obsidian (dark) themes.

### Location
`/web/src/components/ThemeToggle.tsx` (EXISTING - NO CHANGES)

### Interface

```typescript
interface ThemeToggleProps {
  theme: 'crystal' | 'obsidian'
  onToggle: () => void
}
```

### Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `theme` | `'crystal' \| 'obsidian'` | Yes | Current theme state |
| `onToggle` | `() => void` | Yes | Callback to toggle theme |

### Behavior

- Displays sun icon for light mode, moon icon for dark mode
- Smooth transition animation on toggle
- Accessible (keyboard navigable, ARIA labels)
- Responsive (proper touch targets on mobile)

---

## 5. Footer (REUSED)

### Purpose
Consistent footer with links and branding across all pages.

### Location
`/web/src/components/Footer.tsx` (EXISTING - NO CHANGES)

### Interface

```typescript
export default function Footer(): JSX.Element
```

### Behavior

- Renders footer with copyright, links, and branding
- Theme-aware styling
- Responsive layout

---

## 6. ExperimentCard (OPTIONAL - REUSED)

### Purpose
Card component to showcase AI experiments (optional for future experiments section).

### Location
`/web/src/components/ExperimentCard.tsx` (EXISTING - NO CHANGES)

### Interface

```typescript
interface ExperimentCardProps {
  title: string
  description: string
  videoId?: string
  githubRepo?: string
  badge?: { label: string; color: string }
  views?: string
  stars?: string
  status?: 'published' | 'coming-soon'
  thumbnail?: string
  backgroundImage?: string
  index?: number
  link?: string
  onClick?: () => void
}
```

### Usage (Optional)

If we add an experiments section showcasing Performance Testing AI tools, we can use:

```typescript
import { getPerfTestingExperiments } from '@/data/experiments'

{getPerfTestingExperiments().map((experiment, index) => (
  <ExperimentCard key={experiment.id} {...experiment} index={index} />
))}
```

---

## Component Hierarchy

```
/performance-testing (page.tsx)
└── <PerformanceAnalysisProcess theme={theme} onToggleTheme={toggleTheme}>
    ├── Header (sticky)
    │   ├── <Link href="/">Back to Home</Link>
    │   └── <ThemeToggle theme={theme} onToggle={onToggleTheme} />
    │
    ├── Hero Section
    │   ├── Icon Badge (animated)
    │   ├── Title (animated)
    │   └── Description (animated)
    │
    ├── Legend Section
    │   ├── Work Type badges
    │   └── AI Experiment badges
    │
    ├── Process Flow
    │   ├── <ProcessFlowCard /> (Phase 0)
    │   ├── Arrow
    │   ├── <ProcessFlowCard /> (Phase 1)
    │   ├── Arrow
    │   ├── <ProcessFlowCard /> (Phase 2)
    │   ├── Arrow
    │   ├── <ProcessFlowCard /> (Phase 3)
    │   ├── Arrow
    │   ├── <ProcessFlowCard /> (Phase 4)
    │   ├── Arrow
    │   ├── <ProcessFlowCard /> (Phase 5)
    │   ├── Arrow
    │   └── <ProcessFlowCard /> (Phase 6 - isLast=true)
    │
    └── <Footer />
```

---

## Testing Contracts

### Unit Testing (Future)

**PerformanceAnalysisProcess**:
- Renders 7 ProcessFlowCard components
- Passes correct props to each card
- Applies theme classes correctly
- Renders header, hero, legend, and footer

**Page Component**:
- Initializes theme from localStorage
- Falls back to system preference
- Saves theme changes to localStorage
- Prevents hydration mismatch

### Integration Testing

- Theme toggle updates localStorage and visual theme
- All 7 phases expand/collapse correctly
- Navigation links work correctly
- Responsive layout works at all breakpoints

### Visual Regression Testing

- Compare screenshots against Business Analysis page
- Verify glassmorphic effects render consistently
- Verify badge colors match specifications
- Verify theme transitions are smooth

---

## Accessibility Contracts

All components must meet WCAG AA standards:

- **Keyboard Navigation**: Tab, Enter, Space, Escape keys work
- **Focus Indicators**: Visible focus states on all interactive elements
- **ARIA Labels**: Proper roles and labels for screen readers
- **Color Contrast**: Minimum 4.5:1 ratio for text
- **Touch Targets**: Minimum 44px for mobile interactions
- **Semantic HTML**: Proper heading hierarchy, button elements, nav elements

---

## Performance Contracts

- **Page Load**: < 2 seconds on 3G connection
- **First Contentful Paint**: < 1 second
- **Time to Interactive**: < 3 seconds
- **Smooth Animations**: 60fps for all transitions
- **Theme Toggle**: < 300ms response time
- **Bundle Size**: No increase beyond adding one component file

---

## Migration from Business Analysis Pattern

### What to Copy

✅ **Page Component Structure**:
```typescript
// Copy from: app/business-analysis/page.tsx
// Adapt: Change component import and name
```

✅ **Component Structure**:
```typescript
// Copy from: components/BusinessAnalysisProcess.tsx
// Adapt: Change steps data array, update title/description
```

✅ **Theme Logic**: Use identical theme management code

✅ **Styling**: Use identical Tailwind classes and animations

✅ **Layout**: Use identical header, hero, legend, flow structure

### What to Change

⚙️ **Component Name**: `BusinessAnalysisProcess` → `PerformanceAnalysisProcess`

⚙️ **Steps Data**: Replace 10 BA steps with 7 Performance Testing phases

⚙️ **Title**: "AI-Assisted Business Analysis" → "AI-Assisted Performance Testing"

⚙️ **Description**: Update to describe Performance Testing workflow

⚙️ **Legend**: Update AI experiment badges to match Performance Testing experiments

⚙️ **Icon**: Change hero icon from clipboard to speedometer/chart (performance-related)

### What to Keep Identical

✓ Color scheme and glassmorphic styling  
✓ Animation patterns and timings  
✓ Responsive breakpoints and layout  
✓ Theme management logic  
✓ Component composition approach  
✓ Accessibility features
