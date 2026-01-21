# Data Structures: Performance Testing Workflow

**Feature**: Performance Testing Workflow Visualization  
**Date**: 2026-01-16

## Overview

This document defines the TypeScript interfaces and data structures used in the Performance Testing workflow visualization. All interfaces already exist in the codebase and are reused without modification.

---

## TypeScript Interfaces

### Activity

Represents a single activity within a performance testing phase.

```typescript
interface Activity {
  text: string
  type: 'personal' | 'in-meeting'
  scope: 'in' | 'out'
  experiment?: {
    name: string
    color: string
  }
}
```

#### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `text` | `string` | Yes | Activity description (e.g., "Identify motivation behind performance testing initiative") |
| `type` | `'personal' \| 'in-meeting'` | Yes | Work type: individual work or collaborative meeting |
| `scope` | `'in' \| 'out'` | Yes | AI scope: `'in'` = AI automation potential, `'out'` = manual/out of scope |
| `experiment` | `{ name: string, color: string }` | No | AI experiment details if `scope` is `'in'` |
| `experiment.name` | `string` | Yes (if experiment) | AI experiment name (e.g., "Script Generator") |
| `experiment.color` | `string` | Yes (if experiment) | Tailwind CSS background class (e.g., "bg-blue-600") |

#### Examples

```typescript
// Personal work with AI automation
{
  text: "Analyze test plan and convert to scripts",
  type: "personal",
  scope: "in",
  experiment: {
    name: "Script Generator",
    color: "bg-blue-600"
  }
}

// Meeting without AI automation
{
  text: "Review and validate scripts with team",
  type: "in-meeting",
  scope: "out"
}

// Personal work, manual process
{
  text: "Submit performance testing request to delivery team",
  type: "personal",
  scope: "out"
}
```

---

### ProcessStep

Represents a single phase in the Performance Testing workflow.

```typescript
interface ProcessStep {
  title: string
  owner: string
  activities: Activity[]
  isExpanded?: boolean
}
```

#### Properties

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `title` | `string` | Yes | - | Phase title (e.g., "Business Request") |
| `owner` | `string` | Yes | - | Owner role responsible for this phase |
| `activities` | `Activity[]` | Yes | - | Array of activities in this phase |
| `isExpanded` | `boolean` | No | Auto-determined | Default expansion state; if undefined, card expands if any activity has `scope: 'in'` |

#### Examples

```typescript
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
    // ... more activities
  ]
}
```

---

## AI Experiment Badge Colors

Standardized color scheme for AI experiments used in Performance Testing workflow.

### Color Palette

| Experiment | Color Class | Hex Equivalent | Usage |
|------------|-------------|----------------|-------|
| Context Acquisition Agent | `bg-cyan-500` | #06B6D4 | Phase 0 - Request acquisition |
| Discovery Agent | `bg-purple-500` | #A855F7 | Phase 1 - Architecture analysis |
| Load Modeler | `bg-indigo-500` | #6366F1 | Phase 1 - Load pattern analysis |
| Navigation & User Flow Modeler | `bg-blue-500` | #3B82F6 | Phase 1 - User flow development |
| TDSpora | `bg-teal-500` | #14B8A6 | Phase 1 - Test data management |
| Test Plan Validator | `bg-green-500` | #22C55E | Phase 1 - Test plan validation |
| Script Generator | `bg-blue-600` | #2563EB | Phase 2 - Script development |
| Scripts Healer | `bg-orange-500` | #F97316 | Phase 2 - Script validation & healing |
| Execution Orchestrator | `bg-amber-600` | #D97706 | Phase 3, 4, 6 - Test execution |
| Monitoring MCP | `bg-yellow-500` | #EAB308 | Phase 3 - Monitoring integration |
| Anomaly Detection | `bg-red-500` | #EF4444 | Phase 3, 6 - Issue detection |
| Transaction Breakdown Builder | `bg-purple-600` | #9333EA | Phase 4 - Root cause analysis |
| Baseline Curator | `bg-green-600` | #16A34A | Phase 4 - Baseline management |

### Color Guidelines

1. **Distinct Colors**: Each experiment uses a unique, easily distinguishable color
2. **Accessibility**: All colors meet WCAG AA contrast requirements with white text
3. **Semantic Grouping**: 
   - Blues (Discovery, Scripts): Analysis and generation
   - Greens (Validation, Baseline): Verification and standards
   - Oranges/Yellows (Execution, Monitoring): Active operations
   - Reds/Purples (Anomaly, RCA): Problem identification

---

## Work Type Badge Styles

### Badge Styling Functions

These functions exist in ProcessFlowCard.tsx and determine badge appearance:

```typescript
const getTagStyle = (type: 'personal' | 'in-meeting') => {
  return type === "in-meeting"
    ? "bg-green-100 dark:bg-green-600/30 text-green-700 dark:text-green-300 border-green-300 dark:border-green-500/40"
    : "bg-blue-100 dark:bg-blue-600/30 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-500/40"
}

const getScopeStyle = (scope: 'in' | 'out') => {
  return scope === "in"
    ? "bg-indigo-100 dark:bg-indigo-600/30 text-indigo-700 dark:text-indigo-300 border-indigo-300 dark:border-indigo-500/40"
    : "bg-gray-100 dark:bg-gray-600/30 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-500/40"
}
```

### Badge Display Logic

```typescript
// Work type badge - always displayed
<span className={getTagStyle(activity.type)}>
  {activity.type === "in-meeting" ? "In Meeting" : "Personal Work"}
</span>

// Scope badge - experiment if available, otherwise scope indicator
{activity.experiment ? (
  <span className={`${activity.experiment.color} text-white ...`}>
    {activity.experiment.name}
  </span>
) : (
  <span className={getScopeStyle(activity.scope)}>
    {activity.scope === "in" ? "AI Potential" : "Manual Process"}
  </span>
)}
```

---

## Theme Support

### Theme Types

```typescript
type Theme = 'crystal' | 'obsidian'
```

- **Crystal**: Light mode (default)
- **Obsidian**: Dark mode

### Theme Classes

Applied to document root:

```typescript
// Crystal (light)
<html className="">

// Obsidian (dark)
<html className="dark">
```

### Tailwind Dark Mode

All components use Tailwind's dark mode variants:

```typescript
// Light mode / Dark mode
"bg-white/60 dark:bg-obsidian-200/60"
"text-gray-900 dark:text-white"
"border-white/60 dark:border-obsidian-300/60"
```

---

## Data Validation Rules

### Activity Validation

```typescript
function validateActivity(activity: Activity): boolean {
  // Text must not be empty
  if (!activity.text || activity.text.trim() === '') return false
  
  // Type must be valid
  if (!['personal', 'in-meeting'].includes(activity.type)) return false
  
  // Scope must be valid
  if (!['in', 'out'].includes(activity.scope)) return false
  
  // If experiment exists, it must have name and color
  if (activity.experiment) {
    if (!activity.experiment.name || !activity.experiment.color) return false
    // Color must be a Tailwind class
    if (!activity.experiment.color.startsWith('bg-')) return false
  }
  
  // If scope is 'in', should have experiment (but not required)
  // If scope is 'out', should not have experiment
  if (activity.scope === 'out' && activity.experiment) {
    console.warn('Activity has scope "out" but includes experiment')
  }
  
  return true
}
```

### ProcessStep Validation

```typescript
function validateProcessStep(step: ProcessStep): boolean {
  // Title must not be empty
  if (!step.title || step.title.trim() === '') return false
  
  // Owner must not be empty
  if (!step.owner || step.owner.trim() === '') return false
  
  // Must have at least one activity
  if (!step.activities || step.activities.length === 0) return false
  
  // All activities must be valid
  if (!step.activities.every(validateActivity)) return false
  
  return true
}
```

---

## Data Transformation Helpers

### From Documentation to Activity

When converting performance testing docs to activities:

```typescript
function createActivity(
  text: string,
  type: 'personal' | 'in-meeting',
  hasAI: boolean,
  experimentName?: string,
  experimentColor?: string
): Activity {
  const activity: Activity = {
    text,
    type,
    scope: hasAI ? 'in' : 'out'
  }
  
  if (hasAI && experimentName && experimentColor) {
    activity.experiment = {
      name: experimentName,
      color: experimentColor
    }
  }
  
  return activity
}
```

### Example Usage

```typescript
// From: "Analyze test plan and convert to scripts" - Personal Work | Script Generator
const activity = createActivity(
  "Analyze test plan and convert to scripts",
  "personal",
  true,
  "Script Generator",
  "bg-blue-600"
)

// Result:
{
  text: "Analyze test plan and convert to scripts",
  type: "personal",
  scope: "in",
  experiment: {
    name: "Script Generator",
    color: "bg-blue-600"
  }
}
```

---

## Storage Schema

### LocalStorage

Theme preference is stored in localStorage:

```typescript
// Key
const THEME_STORAGE_KEY = 'analysta-theme'

// Value
type StoredTheme = 'crystal' | 'obsidian'

// Example
localStorage.setItem('analysta-theme', 'obsidian')
const theme = localStorage.getItem('analysta-theme') as StoredTheme
```

---

## Constants

### Phase Count

```typescript
const PERFORMANCE_TESTING_PHASE_COUNT = 7
```

### Phase Indices

```typescript
enum PerformanceTestingPhase {
  BusinessRequest = 0,          // Phase 0
  InceptionDiscovery = 1,       // Phase 1
  ScriptsDevelopment = 2,       // Phase 2
  TestExecution = 3,            // Phase 3
  PerformanceAnalysis = 4,      // Phase 4
  ReportingSignOff = 5,         // Phase 5
  ContinuousMonitoring = 6      // Phase 6
}
```

---

## Type Guards

### Activity Type Guards

```typescript
function hasExperiment(activity: Activity): activity is Activity & { experiment: { name: string; color: string } } {
  return activity.experiment !== undefined
}

function isPersonalWork(activity: Activity): boolean {
  return activity.type === 'personal'
}

function isInMeeting(activity: Activity): boolean {
  return activity.type === 'in-meeting'
}

function hasAIAutomation(activity: Activity): boolean {
  return activity.scope === 'in'
}
```

### Usage Example

```typescript
const activities: Activity[] = [/* ... */]

const aiActivities = activities.filter(hasAIAutomation)
const personalAIActivities = activities.filter(a => isPersonalWork(a) && hasAIAutomation(a))
```

---

## Data Immutability

All data structures are immutable. When updating:

```typescript
// ❌ DON'T: Mutate directly
step.activities.push(newActivity)

// ✅ DO: Create new array
const updatedStep = {
  ...step,
  activities: [...step.activities, newActivity]
}
```

---

## Export Structure

From `components/PerformanceAnalysisProcess.tsx`:

```typescript
// Interfaces are defined inline at top of file
interface Activity { /* ... */ }
interface ProcessStep { /* ... */ }

// Data is defined as constant
const steps: ProcessStep[] = [/* ... */]

// Component is default export
export default function PerformanceAnalysisProcess(props: PerformanceAnalysisProcessProps) {
  // ...
}
```

No separate types file needed - all types are co-located with the component that uses them, following the pattern from BusinessAnalysisProcess.tsx.
