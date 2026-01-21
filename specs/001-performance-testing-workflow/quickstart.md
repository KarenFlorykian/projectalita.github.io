# Quickstart: Performance Testing Workflow Implementation

**Feature**: Performance Testing Workflow Visualization Page  
**Date**: 2026-01-16  
**Time Estimate**: 2-3 hours

## Overview

This guide provides step-by-step instructions to implement the Performance Testing workflow visualization page. The implementation follows the existing Business Analysis page pattern, making it straightforward to complete.

**What You'll Build**:
- New route: `/performance-testing`
- New page component: `app/performance-testing/page.tsx`
- New process component: `components/PerformanceAnalysisProcess.tsx`

**Prerequisites**:
- Node.js and npm installed
- Next.js development server running (`npm run dev`)
- Familiarity with the existing Business Analysis page
- Code editor (VS Code recommended)

---

## Step 1: Create the Page Component (15 minutes)

### 1.1 Create Directory and File

```bash
cd web/src/app
mkdir performance-testing
cd performance-testing
touch page.tsx
```

### 1.2 Copy Template from Business Analysis

Open `app/business-analysis/page.tsx` and copy the entire contents.

### 1.3 Modify for Performance Testing

Paste into `app/performance-testing/page.tsx` and make these changes:

```typescript
'use client'

import { useState, useEffect } from 'react'
import PerformanceAnalysisProcess from '@/components/PerformanceAnalysisProcess' // CHANGED
import ThemeToggle from '@/components/ThemeToggle'

export default function PerformanceTestingPage() { // CHANGED function name
  const [theme, setTheme] = useState<'crystal' | 'obsidian'>('crystal')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('analysta-theme') as 'crystal' | 'obsidian'
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme) {
      setTheme(savedTheme)
    } else if (systemPrefersDark) {
      setTheme('obsidian')
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    const root = document.documentElement
    if (theme === 'obsidian') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('analysta-theme', theme)
  }, [theme, mounted])

  const toggleTheme = () => {
    setTheme(prev => prev === 'crystal' ? 'obsidian' : 'crystal')
  }

  if (!mounted) {
    return null
  }

  return (
    <>
      <PerformanceAnalysisProcess theme={theme} onToggleTheme={toggleTheme} /> {/* CHANGED */}
    </>
  )
}
```

**Changes Made**:
- Import: `BusinessAnalysisProcess` → `PerformanceAnalysisProcess`
- Function name: `BusinessAnalysisPage` → `PerformanceTestingPage`
- Component: `<BusinessAnalysisProcess />` → `<PerformanceAnalysisProcess />`

### 1.4 Verify File

```bash
# Check the file was created
ls -la app/performance-testing/
# Should see: page.tsx
```

---

## Step 2: Create the Process Component (45 minutes)

### 2.1 Create Component File

```bash
cd web/src/components
touch PerformanceAnalysisProcess.tsx
```

### 2.2 Copy Template from Business Analysis

Open `components/BusinessAnalysisProcess.tsx` and copy the entire contents.

### 2.3 Update Component Header

Paste into `PerformanceAnalysisProcess.tsx` and update the header:

```typescript
'use client'

import { motion } from 'framer-motion'
import ProcessFlowCard from '@/components/ProcessFlowCard'
import ExperimentCard from '@/components/ExperimentCard'
import Footer from '@/components/Footer'
import ThemeToggle from '@/components/ThemeToggle'
import Link from 'next/link'
// Remove getBAExperiments import if you're not using experiments section

interface Activity {
  text: string
  type: 'personal' | 'in-meeting'
  scope: 'in' | 'out'
  experiment?: {
    name: string
    color: string
  }
}

interface ProcessStep {
  title: string
  owner: string
  activities: Activity[]
  isExpanded?: boolean
}

interface PerformanceAnalysisProcessProps { // CHANGED
  theme: 'crystal' | 'obsidian'
  onToggleTheme: () => void
}

export default function PerformanceAnalysisProcess({ theme, onToggleTheme }: PerformanceAnalysisProcessProps) { // CHANGED
  // Component content continues...
}
```

### 2.4 Replace Steps Data

Find the `const steps: ProcessStep[] = [...]` array and **replace entirely** with the 7-phase data from `data-model.md`:

```typescript
const steps: ProcessStep[] = [
  {
    title: "Business Request",
    owner: "Product Owner",
    isExpanded: true,
    activities: [
      {
        text: "Identify motivation behind performance testing initiative",
        type: "in-meeting",
        scope: "out"
      },
      {
        text: "Obtain knowledge about business and system under test",
        type: "in-meeting",
        scope: "out"
      },
      {
        text: "Define preliminary scope and performance expectations",
        type: "personal",
        scope: "out"
      },
      {
        text: "Submit performance testing request to delivery team",
        type: "personal",
        scope: "in",
        experiment: {
          name: "Context Acquisition Agent",
          color: "bg-cyan-500"
        }
      }
    ]
  },
  // ... (continue with all 7 phases from data-model.md)
]
```

**Note**: Copy the complete steps array from `specs/001-performance-testing-workflow/data-model.md` - it's too long to include inline here.

### 2.5 Update Hero Section

Find the hero section (around line 218-240) and update:

```typescript
<motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6"
>
  AI-Assisted Performance Testing {/* CHANGED */}
  <br />
  <span className="bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500 dark:from-blue-400 dark:via-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
    End-to-End Process
  </span>
</motion.h1>

<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
>
  A comprehensive workflow from business request to continuous monitoring,  {/* CHANGED */}
  spanning 7 phases (Phase 0-6). Enhanced with AI-powered script generation,
  execution orchestration, anomaly detection, and automated baseline management.
</motion.p>
```

### 2.6 Update Hero Icon (Optional)

Find the hero icon badge (around line 211-215) and optionally change the icon to something performance-related:

```typescript
<div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 dark:from-blue-500 dark:to-cyan-500 rounded-xl flex items-center justify-center shadow-lg dark:shadow-blue-500/50">
  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    {/* Performance/Chart icon */}
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
</div>
```

### 2.7 Update Legend Section

Find the legend section (around line 269-317) and update the AI experiment badges:

```typescript
{/* AI Performance Testing Experiments */}
<div className="flex flex-wrap items-center justify-center gap-3">
  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">AI Performance Testing Experiments:</span>
  <span className="border rounded-full px-3 py-1 text-xs font-bold text-white bg-cyan-500 border-white/20 shadow-sm">
    Context Acquisition Agent
  </span>
  <span className="border rounded-full px-3 py-1 text-xs font-bold text-white bg-purple-500 border-white/20 shadow-sm">
    Discovery Agent
  </span>
  <span className="border rounded-full px-3 py-1 text-xs font-bold text-white bg-indigo-500 border-white/20 shadow-sm">
    Load Modeler
  </span>
  <span className="border rounded-full px-3 py-1 text-xs font-bold text-white bg-blue-500 border-white/20 shadow-sm">
    User Flow Modeler
  </span>
  <span className="border rounded-full px-3 py-1 text-xs font-bold text-white bg-teal-500 border-white/20 shadow-sm">
    TDSpora
  </span>
  <span className="border rounded-full px-3 py-1 text-xs font-bold text-white bg-green-500 border-white/20 shadow-sm">
    Test Plan Validator
  </span>
  <span className="border rounded-full px-3 py-1 text-xs font-bold text-white bg-blue-600 border-white/20 shadow-sm">
    Script Generator
  </span>
  <span className="border rounded-full px-3 py-1 text-xs font-bold text-white bg-orange-500 border-white/20 shadow-sm">
    Scripts Healer
  </span>
  <span className="border rounded-full px-3 py-1 text-xs font-bold text-white bg-amber-600 border-white/20 shadow-sm">
    Execution Orchestrator
  </span>
  <span className="border rounded-full px-3 py-1 text-xs font-bold text-white bg-yellow-500 border-white/20 shadow-sm">
    Monitoring MCP
  </span>
  <span className="border rounded-full px-3 py-1 text-xs font-bold text-white bg-red-500 border-white/20 shadow-sm">
    Anomaly Detection
  </span>
  <span className="border rounded-full px-3 py-1 text-xs font-bold text-white bg-purple-600 border-white/20 shadow-sm">
    Transaction Breakdown Builder
  </span>
  <span className="border rounded-full px-3 py-1 text-xs font-bold text-white bg-green-600 border-white/20 shadow-sm">
    Baseline Curator
  </span>
</div>
```

### 2.8 Remove or Update Experiments Section (Optional)

If you want to skip the experiments showcase cards section, find and **remove** this section (around line 242-267):

```typescript
{/* Featured Experiments */}
<motion.div...>
  ...ExperimentCard components...
</motion.div>
```

Or keep it and update to show Performance Testing experiments (requires updating `experiments.ts` - see Step 3).

### 2.9 Update CTA Section

Find the CTA section (around line 349-352) and update the text:

```typescript
<h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
  Ready to explore AI in performance testing?
</h3>
<p className="text-gray-600 dark:text-gray-300 mb-6 md:mb-8">
  Discover how AI can enhance each step of your performance testing process
</p>
```

---

## Step 3: Update Experiments Data (Optional, 15 minutes)

If you want to showcase Performance Testing experiments, add a helper function to `experiments.ts`:

### 3.1 Open File

```bash
cd web/src/data
# Edit experiments.ts
```

### 3.2 Add Helper Function

Add this function at the end of the file (before existing helpers or at the end):

```typescript
// Helper to get Performance Testing experiments
export const getPerfTestingExperiments = (): Experiment[] => {
  // Define performance testing experiments or filter from existing
  return [
    {
      id: 'script-generator',
      title: 'Performance Script Generator',
      description: 'AI-powered generation of performance test scripts from test plans with automatic correlation and parameterization',
      phase: 'phase-1',
      status: 'coming-soon',
      badge: { label: 'Coming Soon', color: 'bg-blue-600' }
    },
    {
      id: 'anomaly-detection',
      title: 'Performance Anomaly Detection',
      description: 'Intelligent detection of performance regressions and anomalies using statistical analysis and machine learning',
      phase: 'phase-1',
      status: 'coming-soon',
      badge: { label: 'Coming Soon', color: 'bg-red-500' }
    },
    {
      id: 'execution-orchestrator',
      title: 'Test Execution Orchestrator',
      description: 'Automated orchestration of performance test execution, monitoring, and baseline management at scale',
      phase: 'phase-2',
      status: 'coming-soon',
      badge: { label: 'Coming Soon', color: 'bg-amber-600' }
    }
  ]
}
```

### 3.3 Use in Component

In `PerformanceAnalysisProcess.tsx`, import and use:

```typescript
import { getPerfTestingExperiments } from '@/data/experiments'

// In the experiments section:
{getPerfTestingExperiments().map((experiment, index) => (
  <ExperimentCard
    key={experiment.id}
    title={experiment.title}
    description={experiment.description}
    status={experiment.status}
    badge={experiment.badge}
    index={index}
  />
))}
```

---

## Step 4: Add Navigation Link (10 minutes)

### 4.1 Update Home Page (Optional)

If you want to add a link from the home page to the Performance Testing page:

Open `app/page.tsx` or the appropriate navigation component and add a link:

```typescript
<Link 
  href="/performance-testing"
  className="..."
>
  Performance Testing Workflow
</Link>
```

---

## Step 5: Test the Implementation (30 minutes)

### 5.1 Start Development Server

```bash
cd web
npm run dev
```

### 5.2 Navigate to Page

Open browser and go to: `http://localhost:3000/performance-testing`

### 5.3 Validation Checklist

**Visual Inspection**:
- [ ] Page loads without errors
- [ ] Hero section displays with correct title "AI-Assisted Performance Testing"
- [ ] 7 phase cards render (Phase 0-6)
- [ ] Phases 0, 1, 2 are expanded by default
- [ ] Phases 3, 4, 5, 6 are collapsed by default
- [ ] Legend section displays work type and AI experiment badges
- [ ] Footer renders at bottom

**Interaction Testing**:
- [ ] Click phase headers to expand/collapse cards
- [ ] Verify smooth animation on expand/collapse
- [ ] Click theme toggle - page switches between light/dark
- [ ] Theme preference persists on page reload
- [ ] Click "Back to Home" - navigates to home page
- [ ] Scroll animations trigger smoothly

**Responsive Testing**:
- [ ] Resize to mobile (375px) - layout stacks vertically
- [ ] Resize to tablet (768px) - proper spacing
- [ ] Resize to desktop (1440px+) - proper max-width
- [ ] All badges wrap properly on mobile

**Content Verification**:
- [ ] Phase 0 has 4 activities
- [ ] Phase 1 has 7 activities
- [ ] Phase 2 has 5 activities
- [ ] Phase 3 has 3 activities
- [ ] Phase 4 has 4 activities
- [ ] Phase 5 has 3 activities
- [ ] Phase 6 has 5 activities
- [ ] AI experiment badges display with correct colors
- [ ] Activity text matches performance testing docs

**Accessibility Testing**:
- [ ] Tab through all interactive elements (keyboard navigation)
- [ ] Press Enter/Space on cards to expand/collapse
- [ ] Focus indicators are visible
- [ ] Text has sufficient contrast (use browser dev tools)

### 5.4 Cross-Browser Testing

Test in:
- [ ] Chrome
- [ ] Firefox
- [ ] Safari (macOS)
- [ ] Edge

### 5.5 Performance Testing

Open Chrome DevTools > Lighthouse and run audit:

- [ ] Performance score > 90
- [ ] Accessibility score > 90
- [ ] Best Practices score > 90
- [ ] First Contentful Paint < 1.5s

---

## Step 6: Troubleshooting

### Common Issues

**Issue**: Page shows blank/white screen  
**Solution**: Check browser console for errors. Likely import path issue. Verify:
```typescript
import PerformanceAnalysisProcess from '@/components/PerformanceAnalysisProcess'
```

**Issue**: Theme doesn't persist  
**Solution**: Check localStorage key matches: `'analysta-theme'`

**Issue**: Cards don't expand/collapse  
**Solution**: Verify ProcessFlowCard import is correct and the component hasn't changed

**Issue**: Animations are choppy  
**Solution**: Check Framer Motion is installed: `npm list framer-motion`

**Issue**: Styling looks different from Business Analysis page  
**Solution**: Compare Tailwind classes - ensure you copied exact classes

**Issue**: Hydration mismatch error  
**Solution**: Ensure `'use client'` directive is at top of both page and component files

---

## Step 7: Final Polish (15 minutes)

### 7.1 Code Review

- [ ] Remove any commented-out code
- [ ] Ensure consistent formatting (run Prettier)
- [ ] Check for console.log statements
- [ ] Verify all imports are used
- [ ] Confirm no TypeScript errors

### 7.2 Documentation

Add a comment at the top of the component:

```typescript
/**
 * PerformanceAnalysisProcess Component
 * 
 * Displays the 7-phase Performance Testing workflow (Phase 0-6) with:
 * - Interactive collapsible phase cards
 * - AI experiment badges showing automation opportunities
 * - Theme support (Crystal/Obsidian)
 * - Responsive design (mobile to desktop)
 * 
 * Based on performance testing documentation in /docs/performance testing/
 */
```

### 7.3 Screenshot Documentation (Optional)

Take screenshots for documentation:
- Full page view (desktop, light mode)
- Full page view (desktop, dark mode)
- Mobile view
- Expanded phase card showing activities
- Legend section

---

## Success Criteria

Your implementation is complete when:

✅ **Page loads at `/performance-testing` route**  
✅ **All 7 phases display with correct content**  
✅ **Theme toggle works and persists**  
✅ **Responsive on mobile, tablet, desktop**  
✅ **All interactions smooth and animated**  
✅ **No console errors**  
✅ **Matches Business Analysis page style**  
✅ **Accessibility standards met (WCAG AA)**  
✅ **Performance > 90 on Lighthouse**

---

## Next Steps

After successful implementation:

1. **User Testing**: Have stakeholders review the page
2. **Content Updates**: If performance testing docs change, update activities
3. **Add Experiments**: Populate experiments section if desired
4. **Integration**: Link from main navigation/landing page
5. **Analytics**: Add tracking to measure engagement
6. **SEO**: Add meta tags for search optimization

---

## Time Breakdown

| Step | Estimated Time |
|------|----------------|
| 1. Create Page Component | 15 min |
| 2. Create Process Component | 45 min |
| 3. Update Experiments Data | 15 min (optional) |
| 4. Add Navigation Link | 10 min (optional) |
| 5. Test Implementation | 30 min |
| 6. Troubleshooting | Variable |
| 7. Final Polish | 15 min |
| **Total** | **2-3 hours** |

---

## Resources

- **Reference Component**: `components/BusinessAnalysisProcess.tsx`
- **Reference Page**: `app/business-analysis/page.tsx`
- **Data Model**: `specs/001-performance-testing-workflow/data-model.md`
- **Component Contracts**: `specs/001-performance-testing-workflow/contracts/components.md`
- **Data Structures**: `specs/001-performance-testing-workflow/contracts/data-structures.md`
- **Performance Testing Docs**: `/docs/performance testing/Phase-*`

---

## Support

If you encounter issues:
1. Compare your code with `BusinessAnalysisProcess.tsx`
2. Check that all 7 phases from `data-model.md` are copied correctly
3. Verify TypeScript interfaces match `data-structures.md`
4. Ensure all imports resolve correctly
5. Check browser console for specific errors

**Remember**: This is essentially a copy-adapt-test workflow. The patterns are proven, so issues are usually simple mismatches in naming or imports.
