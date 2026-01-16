# Task Breakdown: Performance Testing Role Card

**Feature**: 002-performance-role  
**Created**: 2026-01-16  
**Total Estimated Effort**: 2.5 - 4 hours  
**Complexity**: Low  
**Risk Level**: Low ✅

## Task Summary

| Phase | Tasks | Estimated Time | Dependencies |
|-------|-------|----------------|--------------|
| 1. Pre-Implementation | 4 tasks | 30 min | None |
| 2. Core Implementation | 3 tasks | 30 min | Phase 1 |
| 3. Visual Testing | 6 tasks | 30 min | Phase 2 |
| 4. Responsive Testing | 5 tasks | 30 min | Phase 2 |
| 5. Interaction Testing | 6 tasks | 30 min | Phase 2 |
| 6. Accessibility Testing | 5 tasks | 20 min | Phase 2 |
| 7. Performance Testing | 4 tasks | 15 min | Phase 2 |
| 8. Cross-Browser Testing | 4 tasks | 20 min | Phase 3-7 |
| 9. Code Review & Refinement | 4 tasks | 30 min | Phase 3-7 |
| 10. Documentation | 3 tasks | 15 min | Phase 9 |
| 11. Deployment | 4 tasks | 20 min | Phase 10 |
| **TOTAL** | **48 tasks** | **4h 0min** | — |

---

## Phase 1: Pre-Implementation Setup

**Goal**: Prepare development environment and verify prerequisites  
**Duration**: 30 minutes  
**Dependencies**: None  
**Can Start**: Immediately ✅

### Task 1.1: Environment Setup and Verification
**User Story**: N/A (Setup)  
**Estimated Time**: 10 minutes  
**Assignee**: Developer  
**Priority**: P0 (Blocking)  
**Parallel**: No

**Acceptance Criteria**:
- [X] Git repository is on branch `002-performance-role`
- [X] Node.js 18+ is installed and verified
- [X] npm dependencies are installed in `web/` directory
- [X] Code editor is open with workspace loaded

**Steps**:
```bash
# 1. Verify current branch
cd /Users/Karen_Florykian/projects/projectalita.github.io
git branch --show-current
# Expected output: 002-performance-role

# 2. Verify Node.js version
node --version
# Expected: v18.x.x or higher

# 3. Install dependencies
cd web
npm install

# 4. Verify installation
npm list next react react-dom framer-motion tailwindcss
```

**Definition of Done**:
- All commands execute without errors
- Dependencies are installed
- Ready to start dev server

---

### Task 1.2: Review Existing RolesSection Component
**User Story**: N/A (Analysis)  
**Estimated Time**: 10 minutes  
**Assignee**: Developer  
**Priority**: P0 (Blocking)  
**Parallel**: No  
**Dependencies**: Task 1.1

**Acceptance Criteria**:
- [X] `RolesSection.tsx` file is open and reviewed
- [X] Role interface structure is understood (9 properties)
- [X] Current roles array location identified (line ~19-59)
- [X] Grid layout class identified (line ~103)

**Steps**:
```bash
# Open the target file
code web/src/components/RolesSection.tsx
```

**Review Checklist**:
- [ ] Locate `interface Role` definition (lines 6-16)
- [ ] Locate `const roles: Role[]` array (starts line ~19)
- [ ] Identify Business Analyst role object (lines ~20-39)
- [ ] Identify QA Engineer role object (lines ~40-58)
- [ ] Note the closing of roles array (line ~59)
- [ ] Locate grid container with `md:grid-cols-2` (line ~103)

**Definition of Done**:
- Developer understands where to insert new role object
- Developer understands grid layout structure

---

### Task 1.3: Verify Performance Testing Page Exists
**User Story**: US-1 (P1) - Performance Testing Role Display  
**Estimated Time**: 5 minutes  
**Assignee**: Developer  
**Priority**: P1  
**Parallel**: Yes (can run parallel with 1.2)  
**Dependencies**: Task 1.1

**Acceptance Criteria**:
- [X] `/performance-testing` page exists and loads
- [X] `PerformanceAnalysisProcess` component is functional
- [X] Page supports both Crystal and Obsidian themes

**Steps**:
```bash
# Start dev server
cd web
npm run dev

# Open browser to performance testing page
# Visit: http://localhost:3000/performance-testing
```

**Verification**:
- [ ] Page loads without errors
- [ ] 7-phase workflow visualization displays
- [ ] Theme toggle works correctly
- [ ] No console errors in browser dev tools

**Definition of Done**:
- Link target is confirmed to be functional
- Ready to add navigation from landing page

---

### Task 1.4: Prepare Implementation Code
**User Story**: US-1 (P1) - Performance Testing Role Display  
**Estimated Time**: 5 minutes  
**Assignee**: Developer  
**Priority**: P1  
**Parallel**: Yes (can run parallel with 1.2, 1.3)  
**Dependencies**: Task 1.1

**Acceptance Criteria**:
- [X] Role object code is copied from `plan.md`
- [X] Code is ready to paste into `RolesSection.tsx`
- [X] Developer understands the property values

**Steps**:
1. Open `specs/002-performance-role/plan.md`
2. Navigate to "Data Model" section (lines 351-377)
3. Copy the complete role object code
4. Keep in clipboard or separate file for easy access

**Code to Prepare** (from plan.md):
```typescript
{
  id: 'performance-test-engineer',
  title: 'Performance Test Engineer',
  description: 'Optimize application performance with AI-powered load testing, script generation, and intelligent anomaly detection.',
  icon: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
      />
    </svg>
  ),
  color: 'bg-orange-500',
  gradient: 'from-orange-500 to-amber-500',
  darkGradient: 'dark:from-orange-400 dark:to-amber-400',
  link: '/performance-testing',
  capabilities: [
    'AI-powered script generation & healing',
    'Load modeling & performance analysis',
    'Anomaly detection & root cause analysis',
    'Test plan automation & validation'
  ]
}
```

**Definition of Done**:
- Code is prepared and validated
- Ready for implementation

---

## Phase 2: Core Implementation

**Goal**: Add Performance Testing role object to RolesSection component  
**Duration**: 30 minutes  
**Dependencies**: Phase 1 complete  
**Risk Level**: Low ✅

### Task 2.1: Add Performance Testing Role Object
**User Story**: US-1 (P1) - Performance Testing Role Display  
**Estimated Time**: 15 minutes  
**Assignee**: Developer  
**Priority**: P1 (MVP)  
**Parallel**: No  
**Dependencies**: Phase 1 complete  
**Success Criteria**: FR-001 to FR-013, SC-001 to SC-005

**Acceptance Criteria**:
- [X] Role object added to `roles` array after QA Engineer
- [X] All 9 required properties are present
- [X] Syntax is valid (no missing commas or brackets)
- [X] File saves without errors

**Steps**:
1. Open `web/src/components/RolesSection.tsx`
2. Locate the `roles` array (line ~19)
3. Find the QA Engineer role object closing brace and comma (line ~58-59)
4. Position cursor after the QA Engineer comma, before array closing bracket
5. Press Enter to create new line
6. Paste the prepared role object code
7. Ensure proper indentation (match existing roles)
8. Add comma after the new role object
9. Save file (Cmd+S / Ctrl+S)

**Code Location**:
```typescript
const roles: Role[] = [
  {
    // Business Analyst role object
  },
  {
    // QA Engineer role object
  },  // ← Existing comma
  {
    // ← INSERT PERFORMANCE TESTING ROLE HERE
    id: 'performance-test-engineer',
    // ... rest of object
  },  // ← Add comma here
]  // ← End of array
```

**Validation**:
- [ ] TypeScript shows no errors in editor
- [ ] Prettier/ESLint auto-formatting works (if enabled)
- [ ] All properties match Role interface
- [ ] Syntax highlighting is correct

**Definition of Done**:
- Role object successfully added to roles array
- No TypeScript or syntax errors
- File saved successfully

---

### Task 2.2: Optimize Grid Layout for 3 Cards (Optional)
**User Story**: US-2 (P2) - Responsive Grid Layout  
**Estimated Time**: 10 minutes  
**Assignee**: Developer  
**Priority**: P2  
**Parallel**: No  
**Dependencies**: Task 2.1  
**Success Criteria**: FR-014 to FR-017, SC-011 to SC-013

**Acceptance Criteria**:
- [X] Grid layout supports 3 cards on large screens
- [X] Layout decision documented (2-col vs 3-col)
- [X] No horizontal scrolling at any breakpoint

**Steps**:
1. In `RolesSection.tsx`, locate grid container (line ~103)
2. Find: `<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">`

**Option A: Keep 2-Column Layout** (No Change):
- Cards display: Row 1: Business, QA | Row 2: Performance (centered)
- Pro: Consistent with current design
- Con: Performance card appears separate

**Option B: Add 3-Column Layout** (Recommended):
```typescript
// Change from:
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

// To:
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
```
- Cards display: Desktop (≥1024px) shows all 3 in one row
- Pro: Balanced visual layout on large screens
- Con: Cards slightly narrower on desktop

**Decision**: Choose Option A or B based on visual preference

**Definition of Done**:
- Grid layout decision made and implemented
- Ready for visual testing

---

### Task 2.3: Verify Dev Server Auto-Reload
**User Story**: N/A (Technical)  
**Estimated Time**: 5 minutes  
**Assignee**: Developer  
**Priority**: P1  
**Parallel**: No  
**Dependencies**: Task 2.1

**Acceptance Criteria**:
- [X] Dev server detects file changes
- [X] Browser auto-reloads with new role card
- [X] No build errors in terminal

**Steps**:
1. Ensure dev server is still running (`npm run dev`)
2. Save `RolesSection.tsx` file
3. Check terminal output for compilation status
4. Check browser auto-reload

**Expected Terminal Output**:
```
- event compiled client and server successfully in XXX ms
```

**Troubleshooting**:
- If build errors appear → Check syntax (missing commas, brackets)
- If auto-reload doesn't work → Manually refresh browser
- If TypeScript errors appear → Verify all properties match Role interface

**Definition of Done**:
- Changes successfully compiled
- Browser displays updated component
- No errors in terminal or console

---

## Phase 3: Visual Testing

**Goal**: Verify visual appearance of Performance Testing role card  
**Duration**: 30 minutes  
**Dependencies**: Phase 2 complete  
**Testing Environment**: http://localhost:3000

### Task 3.1: Verify Card Display and Structure
**User Story**: US-1 (P1) - Performance Testing Role Display  
**Estimated Time**: 5 minutes  
**Assignee**: QA / Developer  
**Priority**: P1 (MVP)  
**Parallel**: No  
**Dependencies**: Phase 2 complete  
**Success Criteria**: SC-001, SC-002

**Acceptance Criteria**:
- [ ] Landing page displays exactly 3 role cards
- [ ] Performance Testing card appears as 3rd card
- [ ] Card structure matches existing cards

**Steps**:
1. Open browser: http://localhost:3000
2. Scroll to "Built for Your Workflow" section
3. Count role cards displayed
4. Identify card order

**Visual Verification**:
- [ ] **Card 1**: Business Analyst (blue gradient)
- [ ] **Card 2**: QA Engineer (green gradient)
- [ ] **Card 3**: Performance Test Engineer (orange gradient) ← NEW

**Definition of Done**:
- 3 cards visible in correct order
- Basic structure is correct

---

### Task 3.2: Verify Orange/Amber Gradient Header
**User Story**: US-1 (P1), US-3 (P3)  
**Estimated Time**: 5 minutes  
**Assignee**: QA / Developer  
**Priority**: P1 (MVP)  
**Parallel**: Yes  
**Dependencies**: Task 3.1  
**Success Criteria**: SC-003, SC-015, SC-016, SC-017

**Acceptance Criteria**:
- [ ] Gradient transitions from orange to amber
- [ ] Gradient is distinct from blue and green cards
- [ ] Header height matches other cards (h-32, 128px)
- [ ] Border radius matches (24px, rounded-[24px])

**Visual Verification**:
1. Open browser dev tools (F12)
2. Inspect Performance Testing card header
3. Check computed styles

**Expected Styles**:
- `background-image`: `linear-gradient(to bottom right, ...)`
- `height`: `128px` (8rem)
- `border-radius`: `24px`

**Color Check**:
- Business Analyst: Blue (#3b82f6) → Cyan (#06b6d4)
- QA Engineer: Green (#22c55e) → Emerald (#10b981)
- **Performance Testing**: Orange (#f97316) → Amber (#f59e0b) ← Verify this

**Definition of Done**:
- Orange/amber gradient displays correctly
- Visually distinct from other cards

---

### Task 3.3: Verify Chart Bars Icon
**User Story**: US-1 (P1), US-3 (P3)  
**Estimated Time**: 5 minutes  
**Assignee**: QA / Developer  
**Priority**: P1 (MVP)  
**Parallel**: Yes  
**Dependencies**: Task 3.1  
**Success Criteria**: SC-018

**Acceptance Criteria**:
- [ ] Icon displays in gradient header
- [ ] Icon is visible and not distorted
- [ ] Icon size matches other cards (w-8 h-8, 32×32px)
- [ ] Icon color is white/light colored

**Visual Verification**:
1. Locate Performance Testing card header
2. Check icon display (chart bars visualization)
3. Inspect icon element in dev tools

**Expected SVG Properties**:
- `className`: `w-8 h-8`
- `width`: `32px` (computed)
- `height`: `32px` (computed)
- `stroke`: `currentColor` (inherits white color)

**Comparison**:
- Business Analyst: Clipboard icon
- QA Engineer: Checkmark circle icon
- **Performance Testing**: Chart bars icon ← Verify this

**Definition of Done**:
- Icon displays correctly
- Size matches other card icons

---

### Task 3.4: Verify Title and Description
**User Story**: US-1 (P1), US-3 (P3)  
**Estimated Time**: 5 minutes  
**Assignee**: QA / Developer  
**Priority**: P1 (MVP)  
**Parallel**: Yes  
**Dependencies**: Task 3.1  
**Success Criteria**: SC-004, SC-019

**Acceptance Criteria**:
- [ ] Title "Performance Test Engineer" is visible and readable
- [ ] Description text displays without truncation or overflow
- [ ] Typography matches other cards (font size, weight, line height)

**Visual Verification**:
1. Read title text: "Performance Test Engineer"
2. Read description: "Optimize application performance with AI-powered load testing, script generation, and intelligent anomaly detection."
3. Check text doesn't overflow card boundaries

**Typography Check**:
- Title: `text-xl font-semibold` (20px, 600 weight)
- Description: `text-sm text-gray-600` (14px, gray)

**Comparison with Other Cards**:
- [ ] Title font size matches
- [ ] Description font size matches
- [ ] Line spacing consistent

**Definition of Done**:
- Title and description display correctly
- Text is readable and properly styled

---

### Task 3.5: Verify Capabilities List
**User Story**: US-1 (P1)  
**Estimated Time**: 5 minutes  
**Assignee**: QA / Developer  
**Priority**: P1 (MVP)  
**Parallel**: Yes  
**Dependencies**: Task 3.1  
**Success Criteria**: SC-005, SC-019

**Acceptance Criteria**:
- [ ] All 4 capability bullets are visible
- [ ] Bullet points render correctly
- [ ] Text is readable and not truncated
- [ ] Spacing matches other cards

**Capability Verification**:
Read each capability:
1. [ ] "AI-powered script generation & healing"
2. [ ] "Load modeling & performance analysis"
3. [ ] "Anomaly detection & root cause analysis"
4. [ ] "Test plan automation & validation"

**Visual Check**:
- [ ] Checkmark icons appear before each capability
- [ ] Text wraps properly if needed
- [ ] Spacing between capabilities is consistent
- [ ] Font size matches other cards (`text-xs`)

**Definition of Done**:
- All 4 capabilities display correctly
- List formatting matches other cards

---

### Task 3.6: Verify Glassmorphic Styling
**User Story**: US-3 (P3) - Visual Consistency  
**Estimated Time**: 5 minutes  
**Assignee**: QA / Developer  
**Priority**: P3  
**Parallel**: Yes  
**Dependencies**: Task 3.1  
**Success Criteria**: SC-017

**Acceptance Criteria**:
- [ ] Card has glassmorphic effect (frosted glass appearance)
- [ ] Backdrop blur is visible
- [ ] Shadow effects match other cards
- [ ] Border styling consistent

**Visual Verification**:
1. Check card background has semi-transparent effect
2. Verify blur effect on card background
3. Compare shadow with Business Analyst and QA Engineer cards

**Inspect Styles** (dev tools):
- `backdrop-filter`: `blur(20px) saturate(180%)`
- `background-color`: `rgba(255, 255, 255, 0.6)` (light mode)
- `box-shadow`: Should match existing cards
- `border`: `1px solid rgba(255, 255, 255, 0.6)`

**Definition of Done**:
- Glassmorphic styling matches other cards
- Visual consistency maintained

---

## Phase 4: Responsive Testing

**Goal**: Verify card displays correctly at all breakpoints  
**Duration**: 30 minutes  
**Dependencies**: Phase 3 complete  
**Testing Environments**: Mobile, Tablet, Desktop

### Task 4.1: Test Mobile Layout (375px)
**User Story**: US-2 (P2) - Responsive Grid Layout  
**Estimated Time**: 8 minutes  
**Assignee**: QA / Developer  
**Priority**: P2  
**Parallel**: No  
**Dependencies**: Phase 3 complete  
**Success Criteria**: SC-011, SC-014

**Acceptance Criteria**:
- [ ] All 3 cards stack vertically
- [ ] No horizontal scrolling
- [ ] Cards maintain proper spacing
- [ ] Text is readable at mobile size

**Testing Steps**:
1. Open browser dev tools (F12)
2. Toggle device toolbar (Cmd+Shift+M / Ctrl+Shift+M)
3. Select iPhone SE (375×667) or similar
4. Navigate to landing page
5. Scroll to roles section

**Visual Verification**:
- [ ] Card 1 (Business Analyst) at top
- [ ] Card 2 (QA Engineer) in middle
- [ ] Card 3 (Performance Testing) at bottom
- [ ] Consistent gap between cards (24px)
- [ ] Cards span full width (minus padding)
- [ ] No text overflow or truncation

**Additional Device Tests**:
- [ ] iPhone 12 Pro (390×844)
- [ ] Samsung Galaxy S21 (360×800)

**Definition of Done**:
- Mobile layout works correctly
- No layout issues at small screen sizes

---

### Task 4.2: Test Tablet Layout (768px)
**User Story**: US-2 (P2) - Responsive Grid Layout  
**Estimated Time**: 8 minutes  
**Assignee**: QA / Developer  
**Priority**: P2  
**Parallel**: Yes  
**Dependencies**: Phase 3 complete  
**Success Criteria**: SC-012, SC-014

**Acceptance Criteria**:
- [ ] Cards display in 2-column grid
- [ ] 3rd card positioning is acceptable (wraps to 2nd row or spans)
- [ ] Grid gaps are consistent
- [ ] No horizontal scrolling

**Testing Steps**:
1. Set viewport to iPad (768×1024)
2. Navigate to landing page
3. Scroll to roles section

**Expected Layout** (if using `md:grid-cols-2`):
```
[Business Analyst] [QA Engineer]
[Performance Testing]
```

**Visual Verification**:
- [ ] Row 1: Business Analyst (left), QA Engineer (right)
- [ ] Row 2: Performance Testing (left or centered based on CSS)
- [ ] Consistent gaps (32px horizontal and vertical)
- [ ] Cards maintain aspect ratio
- [ ] Text remains readable

**Additional Device Tests**:
- [ ] iPad Mini (768×1024)
- [ ] iPad Pro (1024×1366) at narrow width

**Definition of Done**:
- Tablet layout works correctly
- 3-card grid displays acceptably

---

### Task 4.3: Test Desktop Layout (1440px)
**User Story**: US-2 (P2) - Responsive Grid Layout  
**Estimated Time**: 8 minutes  
**Assignee**: QA / Developer  
**Priority**: P2  
**Parallel**: Yes  
**Dependencies**: Phase 3 complete  
**Success Criteria**: SC-013, SC-014

**Acceptance Criteria**:
- [ ] Cards display in optimal grid layout
- [ ] All 3 cards visible without scrolling (in viewport)
- [ ] Spacing is balanced and visually pleasing
- [ ] Cards don't appear stretched or condensed

**Testing Steps**:
1. Set viewport to 1440×900 (standard laptop)
2. Navigate to landing page
3. Scroll to roles section

**Expected Layout**:

**If 2-column** (`md:grid-cols-2`):
```
[Business Analyst] [QA Engineer]
[Performance Testing]
```

**If 3-column** (`lg:grid-cols-3`):
```
[Business Analyst] [QA Engineer] [Performance Testing]
```

**Visual Verification**:
- [ ] Cards are balanced in width
- [ ] Spacing between cards is consistent
- [ ] No excessive whitespace
- [ ] Cards are visually grouped together

**Additional Resolution Tests**:
- [ ] 1920×1080 (Full HD)
- [ ] 2560×1440 (2K)

**Definition of Done**:
- Desktop layout looks professional
- 3 cards display in balanced arrangement

---

### Task 4.4: Test Ultra-Wide Screens (2560px+)
**User Story**: Edge Case  
**Estimated Time**: 3 minutes  
**Assignee**: QA / Developer  
**Priority**: P3  
**Parallel**: Yes  
**Dependencies**: Phase 3 complete  
**Success Criteria**: Edge case handling

**Acceptance Criteria**:
- [ ] Cards don't stretch excessively
- [ ] Layout maintains max-width constraint
- [ ] Content remains centered
- [ ] Visual hierarchy is maintained

**Testing Steps**:
1. Set viewport to 2560×1440 or larger
2. Navigate to landing page
3. Scroll to roles section

**Visual Verification**:
- [ ] Section respects max-width constraint (likely 7xl: 1280px)
- [ ] Cards don't become too wide (max comfortable width)
- [ ] Content is centered on screen
- [ ] No awkward stretching or spacing

**Definition of Done**:
- Ultra-wide displays are handled gracefully
- Layout doesn't break at extreme widths

---

### Task 4.5: Test Browser Resize Transitions
**User Story**: US-2 (P2) - Responsive Grid Layout  
**Estimated Time**: 3 minutes  
**Assignee**: QA / Developer  
**Priority**: P2  
**Parallel**: No  
**Dependencies**: Tasks 4.1-4.4  
**Success Criteria**: SC-014

**Acceptance Criteria**:
- [ ] No layout shift when resizing browser
- [ ] Transitions between breakpoints are smooth
- [ ] Cards reflow correctly at each breakpoint
- [ ] No flickering or jumping

**Testing Steps**:
1. Start with desktop width (1440px)
2. Slowly resize browser narrower
3. Watch layout transitions at breakpoints:
   - 1024px (lg breakpoint)
   - 768px (md breakpoint)
   - 640px (sm breakpoint)
4. Resize back to desktop width

**Visual Verification**:
- [ ] Cards smoothly reflow when crossing breakpoints
- [ ] No content jumps or shifts unexpectedly
- [ ] Grid transitions feel natural
- [ ] Text doesn't reflow awkwardly

**Definition of Done**:
- Resize behavior is smooth and professional
- No jarring layout shifts

---

## Phase 5: Interaction Testing

**Goal**: Verify user interactions with the Performance Testing card  
**Duration**: 30 minutes  
**Dependencies**: Phase 3 complete  
**Can Run Parallel**: Yes (with Phase 4)

### Task 5.1: Test Card Hover Animation
**User Story**: US-1 (P1) - Performance Testing Role Display  
**Estimated Time**: 5 minutes  
**Assignee**: QA / Developer  
**Priority**: P1 (MVP)  
**Parallel**: Yes  
**Dependencies**: Phase 3 complete  
**Success Criteria**: SC-007, SC-025

**Acceptance Criteria**:
- [ ] Card lifts on hover (8px upward movement)
- [ ] Animation is smooth (200ms duration)
- [ ] Shadow enhances during hover
- [ ] Animation performs at 60fps (no jank)

**Testing Steps**:
1. Navigate to landing page
2. Scroll to roles section
3. Hover mouse over Performance Testing card
4. Observe lift animation
5. Move mouse away, observe return animation

**Visual Verification**:
- [ ] Card smoothly lifts up by ~8px
- [ ] Shadow becomes more pronounced
- [ ] Animation feels snappy but not jarring
- [ ] Return animation is equally smooth

**Performance Check** (dev tools):
1. Open dev tools → Performance tab
2. Start recording
3. Hover over card
4. Stop recording
5. Check for 60fps (no dropped frames)

**Compare with Other Cards**:
- [ ] Business Analyst hover behavior matches
- [ ] QA Engineer hover behavior matches
- [ ] All animations feel consistent

**Definition of Done**:
- Hover animation works correctly
- Performance is smooth (60fps)

---

### Task 5.2: Test Cursor Change on Hover
**User Story**: US-1 (P1) - Performance Testing Role Display  
**Estimated Time**: 2 minutes  
**Assignee**: QA / Developer  
**Priority**: P1 (MVP)  
**Parallel**: Yes  
**Dependencies**: Phase 3 complete  
**Success Criteria**: SC-008

**Acceptance Criteria**:
- [ ] Cursor changes to pointer on card hover
- [ ] Cursor change is immediate (no delay)
- [ ] Indicates clickability

**Testing Steps**:
1. Navigate to landing page
2. Position cursor outside card
3. Move cursor onto Performance Testing card
4. Observe cursor change

**Visual Verification**:
- [ ] Default cursor (arrow) outside card
- [ ] Pointer cursor (hand) on card
- [ ] Cursor changes across entire card surface
- [ ] Matches behavior of other role cards

**Definition of Done**:
- Cursor indicates clickability correctly

---

### Task 5.3: Test Card Click Navigation
**User Story**: US-1 (P1) - Performance Testing Role Display  
**Estimated Time**: 8 minutes  
**Assignee**: QA / Developer  
**Priority**: P1 (MVP)  
**Parallel**: No  
**Dependencies**: Phase 3 complete  
**Success Criteria**: SC-006, SC-010

**Acceptance Criteria**:
- [ ] Clicking card navigates to `/performance-testing`
- [ ] Navigation is client-side (no page reload)
- [ ] Theme state is preserved after navigation
- [ ] Performance Testing page loads correctly

**Testing Steps**:
1. Navigate to landing page: http://localhost:3000
2. Set theme to Obsidian (dark mode)
3. Click on Performance Testing card
4. Verify navigation and theme preservation

**Verification**:
- [ ] URL changes to `/performance-testing`
- [ ] Page loads without full reload (client-side navigation)
- [ ] Theme remains Obsidian (dark mode preserved)
- [ ] PerformanceAnalysisProcess component renders (7 phases visible)
- [ ] No console errors

**Test Both Themes**:
1. **Crystal (Light) Theme**:
   - [ ] Click card → navigate → theme preserved
2. **Obsidian (Dark) Theme**:
   - [ ] Click card → navigate → theme preserved

**Definition of Done**:
- Navigation works correctly
- Theme state persists across navigation

---

### Task 5.4: Test Keyboard Navigation (Tab)
**User Story**: US-1 (P1) - Performance Testing Role Display  
**Estimated Time**: 5 minutes  
**Assignee**: QA / Developer  
**Priority**: P1 (MVP)  
**Parallel**: Yes  
**Dependencies**: Phase 3 complete  
**Success Criteria**: SC-009, SC-028

**Acceptance Criteria**:
- [ ] Tab key focuses on Performance Testing card
- [ ] Focus indicator is visible and clear
- [ ] Tab order is logical (Business → QA → Performance)
- [ ] Shift+Tab navigates backwards correctly

**Testing Steps**:
1. Navigate to landing page
2. Scroll to roles section
3. Click outside cards to clear focus
4. Press Tab repeatedly to navigate through page
5. Observe focus indicators

**Focus Order Verification**:
```
... → Business Analyst card → QA Engineer card → Performance Testing card → ...
```

**Visual Verification**:
- [ ] Focus outline/ring appears around card when tabbed to
- [ ] Focus indicator is clearly visible (not subtle)
- [ ] Focus indicator matches other cards
- [ ] Focus state has sufficient contrast

**Keyboard Navigation Flow**:
- [ ] Tab: Move forward through cards
- [ ] Shift+Tab: Move backward through cards
- [ ] Focus stays within visible boundaries

**Definition of Done**:
- Keyboard navigation works correctly
- Focus indicators are accessible

---

### Task 5.5: Test Keyboard Activation (Enter)
**User Story**: US-1 (P1) - Performance Testing Role Display  
**Estimated Time**: 5 minutes  
**Assignee**: QA / Developer  
**Priority**: P1 (MVP)  
**Parallel**: No  
**Dependencies**: Task 5.4  
**Success Criteria**: SC-009, SC-010

**Acceptance Criteria**:
- [ ] Enter key activates focused card (navigates)
- [ ] Space key also activates card (if applicable)
- [ ] Navigation behavior matches mouse click
- [ ] Theme state is preserved

**Testing Steps**:
1. Navigate to landing page
2. Use Tab to focus on Performance Testing card
3. Press Enter key
4. Verify navigation

**Keyboard Activation**:
- [ ] Press Tab until Performance Testing card is focused
- [ ] Press Enter → navigates to `/performance-testing`
- [ ] Press Tab until card is focused
- [ ] Press Space → navigates to `/performance-testing` (if supported)

**Verification**:
- [ ] Navigation works identically to mouse click
- [ ] No page reload (client-side routing)
- [ ] Theme preserved
- [ ] No console errors

**Definition of Done**:
- Keyboard activation works correctly
- Matches mouse click behavior

---

### Task 5.6: Test Multiple Click/Focus Cycles
**User Story**: US-1 (P1) - Performance Testing Role Display  
**Estimated Time**: 5 minutes  
**Assignee**: QA / Developer  
**Priority**: P2  
**Parallel**: Yes  
**Dependencies**: Tasks 5.3, 5.4, 5.5  
**Success Criteria**: Edge case handling

**Acceptance Criteria**:
- [ ] Repeated clicks work consistently
- [ ] Rapid clicks don't cause errors
- [ ] Focus state updates correctly after navigation and back

**Testing Steps**:
1. Click Performance Testing card → navigate
2. Use browser back button → return to landing page
3. Verify card state is correct
4. Repeat multiple times

**Edge Case Testing**:
- [ ] Rapid double-click doesn't cause double navigation
- [ ] Navigation back and forward works correctly
- [ ] Card hover state resets properly after return
- [ ] No memory leaks or state issues

**Definition of Done**:
- Interaction remains stable with repeated use
- No bugs with multiple interactions

---

## Phase 6: Accessibility Testing

**Goal**: Ensure Performance Testing card meets accessibility standards  
**Duration**: 20 minutes  
**Dependencies**: Phase 3 complete  
**Can Run Parallel**: Yes (with Phases 4-5)

### Task 6.1: Test WCAG AA Contrast (Light Theme)
**User Story**: US-3 (P3) - Visual Consistency  
**Estimated Time**: 5 minutes  
**Assignee**: QA / Accessibility Specialist  
**Priority**: P1 (MVP)  
**Parallel**: Yes  
**Dependencies**: Phase 3 complete  
**Success Criteria**: SC-020, SC-023

**Acceptance Criteria**:
- [ ] Title text meets 4.5:1 contrast ratio
- [ ] Description text meets 4.5:1 contrast ratio
- [ ] Capability text meets 4.5:1 contrast ratio
- [ ] All text is readable in Crystal (light) theme

**Testing Steps**:
1. Navigate to landing page in Crystal theme
2. Open browser dev tools
3. Use Lighthouse or axe DevTools for accessibility audit

**Manual Contrast Check**:
1. Inspect title element
2. Note text color and background color
3. Use WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/

**Expected Ratios** (WCAG AA):
- Normal text (< 18px): 4.5:1 minimum
- Large text (≥ 18px): 3:1 minimum

**Text Elements to Check**:
- [ ] Title "Performance Test Engineer" (text-xl, ~20px)
- [ ] Description text (text-sm, ~14px)
- [ ] Capability bullets (text-xs, ~12px)

**Colors in Light Theme**:
- Background: White/light gray (`bg-white/60`)
- Title: Dark gray (`text-gray-900`)
- Description: Medium gray (`text-gray-600`)
- Capabilities: Dark gray (`text-gray-700`)

**Definition of Done**:
- All text passes WCAG AA contrast requirements
- No accessibility warnings for contrast

---

### Task 6.2: Test WCAG AA Contrast (Dark Theme)
**User Story**: US-3 (P3) - Visual Consistency  
**Estimated Time**: 5 minutes  
**Assignee**: QA / Accessibility Specialist  
**Priority**: P1 (MVP)  
**Parallel**: Yes  
**Dependencies**: Phase 3 complete  
**Success Criteria**: SC-021, SC-023

**Acceptance Criteria**:
- [ ] Title text meets 4.5:1 contrast ratio
- [ ] Description text meets 4.5:1 contrast ratio
- [ ] Capability text meets 4.5:1 contrast ratio
- [ ] All text is readable in Obsidian (dark) theme

**Testing Steps**:
1. Toggle to Obsidian (dark) theme
2. Navigate to roles section
3. Run accessibility audit in dark mode

**Colors in Dark Theme**:
- Background: Dark gray (`dark:bg-obsidian-200/60`)
- Title: White (`dark:text-white`)
- Description: Light gray (`dark:text-gray-300`)
- Capabilities: Light gray (`dark:text-gray-200`)

**Verification**:
- [ ] Title stands out clearly
- [ ] Description is easily readable
- [ ] Capabilities have sufficient contrast
- [ ] Orange/amber gradient header is vibrant but not harsh

**Definition of Done**:
- All text passes WCAG AA contrast in dark theme
- No accessibility warnings

---

### Task 6.3: Test Screen Reader Compatibility
**User Story**: US-1 (P1) - Performance Testing Role Display  
**Estimated Time**: 5 minutes  
**Assignee**: QA / Accessibility Specialist  
**Priority**: P2  
**Parallel**: Yes  
**Dependencies**: Phase 3 complete  
**Success Criteria**: SC-029

**Acceptance Criteria**:
- [ ] Screen reader announces card content in logical order
- [ ] Title, description, and capabilities are all readable
- [ ] Link purpose is clear to screen reader users
- [ ] No confusing or redundant announcements

**Testing Steps (macOS)**:
1. Enable VoiceOver (Cmd+F5)
2. Navigate to landing page
3. Use VoiceOver navigation (Ctrl+Option+Arrow keys)
4. Listen to Performance Testing card announcements

**Testing Steps (Windows)**:
1. Open NVDA or JAWS
2. Navigate to landing page
3. Use screen reader navigation
4. Listen to card announcements

**Expected Announcement Order**:
1. Card identified as link/clickable element
2. Title: "Performance Test Engineer"
3. Description text
4. Capability list (4 items)
5. Link destination hint (if applicable)

**Verification**:
- [ ] All content is announced
- [ ] Announcement order is logical
- [ ] No missing or duplicate content
- [ ] Link purpose is clear ("Navigate to Performance Testing")

**Definition of Done**:
- Screen readers can access all card content
- Announcement flow is logical and complete

---

### Task 6.4: Test Reduced Motion Preference
**User Story**: Edge Case (Accessibility)  
**Estimated Time**: 3 minutes  
**Assignee**: QA / Developer  
**Priority**: P2  
**Parallel**: Yes  
**Dependencies**: Phase 3 complete  
**Success Criteria**: SC-030

**Acceptance Criteria**:
- [ ] `prefers-reduced-motion` setting is respected
- [ ] Animations are disabled when preference is set
- [ ] Card remains functional without animations
- [ ] Hover still indicates clickability (cursor change)

**Testing Steps (macOS)**:
1. Open System Settings → Accessibility → Display
2. Enable "Reduce motion"
3. Refresh browser
4. Test Performance Testing card

**Testing Steps (Windows)**:
1. Open Settings → Ease of Access → Display
2. Turn off "Show animations"
3. Refresh browser
4. Test card

**Verification**:
- [ ] Hover animation is disabled (no lift effect)
- [ ] Scroll entrance animation is disabled
- [ ] Cursor still changes to pointer
- [ ] Card is still clickable
- [ ] All content remains visible and accessible

**CSS Implementation Check** (in RolesSection.tsx):
Should have media query respecting reduced motion:
```css
@media (prefers-reduced-motion: reduce) {
  /* Animations disabled */
}
```

**Definition of Done**:
- Reduced motion preference is respected
- Card remains functional without animations

---

### Task 6.5: Run Automated Accessibility Audit
**User Story**: N/A (Quality Assurance)  
**Estimated Time**: 2 minutes  
**Assignee**: QA / Developer  
**Priority**: P1 (MVP)  
**Parallel**: Yes  
**Dependencies**: Phase 3 complete  
**Success Criteria**: SC-026

**Acceptance Criteria**:
- [ ] Lighthouse accessibility score ≥ 90
- [ ] No critical accessibility errors
- [ ] axe DevTools reports no violations
- [ ] All accessibility best practices followed

**Testing Steps**:
1. Open Chrome DevTools
2. Navigate to Lighthouse tab
3. Select "Accessibility" category
4. Run audit

**Lighthouse Categories**:
- [x] Accessibility (required)
- [ ] Performance (optional)
- [ ] Best Practices (optional)
- [ ] SEO (optional)

**Expected Results**:
- Accessibility score: 90-100 (green)
- No errors related to Performance Testing card
- Warnings (if any) are acceptable and documented

**Alternative Tools**:
- **axe DevTools**: Browser extension, more detailed
- **WAVE**: Web accessibility evaluation tool
- **Pa11y**: Command-line accessibility testing

**Definition of Done**:
- Automated audit passes with no critical issues
- Accessibility score meets target (≥90)

---

## Phase 7: Performance Testing

**Goal**: Verify Performance Testing card doesn't negatively impact page performance  
**Duration**: 15 minutes  
**Dependencies**: Phase 3 complete  
**Can Run Parallel**: Yes (with Phases 4-6)

### Task 7.1: Measure Page Load Time Impact
**User Story**: N/A (Performance)  
**Estimated Time**: 5 minutes  
**Assignee**: QA / Developer  
**Priority**: P2  
**Parallel**: Yes  
**Dependencies**: Phase 3 complete  
**Success Criteria**: SC-024

**Acceptance Criteria**:
- [ ] Page load time increase is < 50ms
- [ ] First Contentful Paint (FCP) remains fast
- [ ] Largest Contentful Paint (LCP) is unaffected
- [ ] Total bundle size increase is negligible

**Testing Steps**:
1. **Baseline Measurement** (before implementation):
   - Use Lighthouse or Performance tab
   - Record FCP, LCP, Total Blocking Time
2. **After Implementation**:
   - Run same measurements
   - Compare results

**Lighthouse Performance Metrics**:
- **First Contentful Paint (FCP)**: Target < 1.8s
- **Largest Contentful Paint (LCP)**: Target < 2.5s
- **Total Blocking Time (TBT)**: Target < 200ms
- **Cumulative Layout Shift (CLS)**: Target < 0.1

**Bundle Size Check**:
```bash
# Build production bundle
cd web
npm run build

# Check bundle sizes
# Look for .next/static/chunks sizes
```

**Expected Impact**:
- Code added: ~25 lines (data only)
- Bundle size increase: < 0.5KB gzipped
- No additional JavaScript execution

**Definition of Done**:
- Performance impact is negligible
- All Core Web Vitals remain in "good" range

---

### Task 7.2: Test Hover Animation Performance
**User Story**: N/A (Performance)  
**Estimated Time**: 5 minutes  
**Assignee**: QA / Developer  
**Priority**: P2  
**Parallel**: Yes  
**Dependencies**: Task 5.1  
**Success Criteria**: SC-025

**Acceptance Criteria**:
- [ ] Hover animation maintains 60fps
- [ ] No frame drops during animation
- [ ] Animation is smooth on standard hardware
- [ ] GPU acceleration is utilized (if available)

**Testing Steps**:
1. Open Chrome DevTools → Performance tab
2. Enable "Screenshots" and "Paint" in settings
3. Start recording
4. Hover over Performance Testing card
5. Stop recording after animation completes
6. Analyze frame rate

**Frame Rate Analysis**:
- **Target**: 60 fps (16.67ms per frame)
- **Acceptable**: > 50 fps (< 20ms per frame)
- **Poor**: < 30 fps (> 33ms per frame)

**Visual Check**:
- [ ] Animation appears smooth to the eye
- [ ] No stuttering or jank
- [ ] Card lift is fluid, not choppy

**Performance Profile Check**:
- [ ] Look for long tasks (> 50ms)
- [ ] Check for layout thrashing
- [ ] Verify GPU layer is created (if applicable)

**Testing on Different Hardware**:
- [ ] High-end device (MacBook Pro, gaming PC): Should be perfect
- [ ] Mid-range device (standard laptop): Should be smooth
- [ ] Low-end device (older hardware): Should be acceptable

**Definition of Done**:
- Animation performs at 60fps on standard hardware
- No performance regressions

---

### Task 7.3: Check Browser Console for Errors
**User Story**: N/A (Quality Assurance)  
**Estimated Time**: 3 minutes  
**Assignee**: QA / Developer  
**Priority**: P1 (MVP)  
**Parallel**: Yes  
**Dependencies**: Phase 3 complete  
**Success Criteria**: SC-026

**Acceptance Criteria**:
- [ ] No console errors related to Performance Testing card
- [ ] No console warnings related to card
- [ ] No React warnings (key props, etc.)
- [ ] No TypeScript errors in browser

**Testing Steps**:
1. Open browser DevTools (F12)
2. Navigate to Console tab
3. Clear console
4. Navigate to landing page
5. Scroll to roles section
6. Interact with Performance Testing card
7. Check for any errors or warnings

**Error Categories**:
- **Errors** (red): Critical issues that break functionality
- **Warnings** (yellow): Non-critical but should be addressed
- **Info** (blue): Informational messages

**Common Issues to Check**:
- [ ] No React key warnings
- [ ] No missing prop type warnings
- [ ] No network errors (images, fonts)
- [ ] No JavaScript execution errors
- [ ] No CSS parsing errors

**Definition of Done**:
- Console is clean (no errors or warnings)
- Card integration is error-free

---

### Task 7.4: Verify No Layout Shift (CLS)
**User Story**: N/A (Performance)  
**Estimated Time**: 2 minutes  
**Assignee**: QA / Developer  
**Priority**: P2  
**Parallel**: Yes  
**Dependencies**: Phase 3 complete  
**Success Criteria**: Edge case handling

**Acceptance Criteria**:
- [ ] No layout shift when card loads
- [ ] No layout shift during theme toggle
- [ ] Cumulative Layout Shift (CLS) remains < 0.1
- [ ] Content doesn't jump or reposition unexpectedly

**Testing Steps**:
1. Open Lighthouse in DevTools
2. Run Performance audit
3. Check CLS score

**Visual Testing**:
1. Navigate to landing page
2. Watch roles section as it loads
3. Toggle theme multiple times
4. Verify no content jumps

**CLS Score Targets**:
- **Good**: < 0.1
- **Needs Improvement**: 0.1 - 0.25
- **Poor**: > 0.25

**Common CLS Causes** (to avoid):
- Images without dimensions
- Ads or embeds
- Web fonts causing layout shift
- Dynamic content injection

**Definition of Done**:
- No visible layout shift
- CLS score remains in "good" range

---

## Phase 8: Cross-Browser Testing

**Goal**: Verify compatibility across major browsers  
**Duration**: 20 minutes  
**Dependencies**: Phases 3-7 complete  
**Testing**: Chrome, Firefox, Safari, Edge

### Task 8.1: Test in Chrome
**User Story**: N/A (Quality Assurance)  
**Estimated Time**: 5 minutes  
**Assignee**: QA / Developer  
**Priority**: P1 (MVP)  
**Parallel**: Yes  
**Dependencies**: Phases 3-7 complete  
**Success Criteria**: Browser compatibility

**Acceptance Criteria**:
- [ ] All visual tests pass in Chrome 90+
- [ ] All interaction tests pass
- [ ] No Chrome-specific issues

**Testing Steps**:
1. Open Chrome (latest version)
2. Navigate to: http://localhost:3000
3. Run through key test cases:
   - Visual display
   - Hover animation
   - Click navigation
   - Keyboard navigation
   - Theme toggle

**Chrome-Specific Checks**:
- [ ] Glassmorphic effect (backdrop-filter) works
- [ ] SVG icon renders correctly
- [ ] Grid layout displays properly
- [ ] Animations are smooth

**Definition of Done**:
- All tests pass in Chrome
- No browser-specific issues

---

### Task 8.2: Test in Firefox
**User Story**: N/A (Quality Assurance)  
**Estimated Time**: 5 minutes  
**Assignee**: QA / Developer  
**Priority**: P1 (MVP)  
**Parallel**: Yes  
**Dependencies**: Phases 3-7 complete  
**Success Criteria**: Browser compatibility

**Acceptance Criteria**:
- [ ] All visual tests pass in Firefox 88+
- [ ] All interaction tests pass
- [ ] No Firefox-specific rendering issues

**Testing Steps**:
1. Open Firefox (latest version)
2. Navigate to: http://localhost:3000
3. Run through key test cases

**Firefox-Specific Checks**:
- [ ] backdrop-filter works (check fallback if not supported)
- [ ] SVG rendering matches Chrome
- [ ] Font rendering is acceptable
- [ ] Grid layout is identical

**Known Firefox Differences**:
- Font rendering may differ slightly
- backdrop-filter support varies by version

**Definition of Done**:
- All tests pass in Firefox
- Any differences are acceptable/documented

---

### Task 8.3: Test in Safari
**User Story**: N/A (Quality Assurance)  
**Estimated Time**: 5 minutes  
**Assignee**: QA / Developer  
**Priority**: P1 (MVP)  
**Parallel**: Yes (macOS/iOS only)  
**Dependencies**: Phases 3-7 complete  
**Success Criteria**: Browser compatibility

**Acceptance Criteria**:
- [ ] All visual tests pass in Safari 14+
- [ ] All interaction tests pass
- [ ] No Safari-specific issues

**Testing Steps**:
1. Open Safari (latest version)
2. Navigate to: http://localhost:3000
3. Run through key test cases

**Safari-Specific Checks**:
- [ ] backdrop-filter requires `-webkit-` prefix (should be in Tailwind)
- [ ] SVG icon renders correctly
- [ ] Hover effects work on trackpad
- [ ] Mobile Safari (iOS): Touch interactions work

**Safari Known Issues**:
- backdrop-filter may need vendor prefix
- Some CSS features require `-webkit-`

**iOS Safari Testing** (if available):
- [ ] Open on iPhone
- [ ] Test mobile layout
- [ ] Test touch interactions

**Definition of Done**:
- All tests pass in Safari (macOS)
- Mobile Safari tested if available

---

### Task 8.4: Test in Edge
**User Story**: N/A (Quality Assurance)  
**Estimated Time**: 5 minutes  
**Assignee**: QA / Developer  
**Priority**: P2  
**Parallel**: Yes (Windows only)  
**Dependencies**: Phases 3-7 complete  
**Success Criteria**: Browser compatibility

**Acceptance Criteria**:
- [ ] All visual tests pass in Edge 90+
- [ ] All interaction tests pass
- [ ] No Edge-specific issues

**Testing Steps**:
1. Open Edge (latest version)
2. Navigate to: http://localhost:3000
3. Run through key test cases

**Edge-Specific Checks**:
- [ ] Rendering matches Chrome (Chromium-based)
- [ ] All Chromium features supported
- [ ] No unexpected differences

**Note**: Edge is Chromium-based (since 2020), so it should behave identically to Chrome in most cases.

**Definition of Done**:
- All tests pass in Edge
- Confirmed compatibility

---

## Phase 9: Code Review & Refinement

**Goal**: Ensure code quality and address any issues found during testing  
**Duration**: 30 minutes  
**Dependencies**: Phases 3-8 complete  
**Blocking**: Phase 10 (Deployment)

### Task 9.1: Self-Review Code Changes
**User Story**: N/A (Quality Assurance)  
**Estimated Time**: 10 minutes  
**Assignee**: Developer  
**Priority**: P1 (MVP)  
**Parallel**: No  
**Dependencies**: Phases 3-8 complete  
**Success Criteria**: SC-027

**Acceptance Criteria**:
- [X] Code follows existing patterns and conventions
- [X] No code duplication
- [X] TypeScript types are correct
- [X] Comments are appropriate (if needed)

**Review Checklist**:
- [ ] **Syntax**: No syntax errors, proper indentation
- [ ] **Consistency**: Matches style of existing role objects
- [ ] **Completeness**: All 9 required properties present
- [ ] **Correctness**: Property values match specification
- [ ] **Efficiency**: Reuses existing rendering logic (no duplication)

**Code Quality Checks**:
1. **Open `RolesSection.tsx`**
2. **Review changes**:
   - [ ] Role object structure is correct
   - [ ] Properties match Role interface
   - [ ] SVG icon is properly formatted
   - [ ] Capabilities array has 4 items
   - [ ] Comma after object (if not last in array)
3. **Check indentation**: Should match existing code
4. **Check line length**: Keep within reasonable limits

**Run Linter** (if configured):
```bash
cd web
npm run lint
```

**Definition of Done**:
- Code passes self-review
- Ready for peer review

---

### Task 9.2: Address Testing Issues
**User Story**: All  
**Estimated Time**: 10 minutes (variable)  
**Assignee**: Developer  
**Priority**: P1 (MVP)  
**Parallel**: No  
**Dependencies**: Phases 3-8 complete

**Acceptance Criteria**:
- [ ] All issues found during testing are resolved
- [ ] Failed test cases now pass
- [ ] Edge cases are handled

**Issue Categories**:
1. **Visual Issues**: Colors, spacing, alignment
2. **Responsive Issues**: Layout problems at breakpoints
3. **Interaction Issues**: Navigation, animations, keyboard
4. **Accessibility Issues**: Contrast, screen reader, focus
5. **Performance Issues**: Slow animations, console errors

**Process**:
1. Review test results from Phases 3-8
2. List all failed or problematic tests
3. Prioritize issues (P0 → P1 → P2 → P3)
4. Fix high-priority issues first
5. Re-test after each fix

**If No Issues**: Move to next task

**Definition of Done**:
- All critical issues resolved
- All P1 test cases pass

---

### Task 9.3: Peer Code Review
**User Story**: N/A (Quality Assurance)  
**Estimated Time**: 10 minutes  
**Assignee**: Peer Reviewer / Tech Lead  
**Priority**: P1 (MVP)  
**Parallel**: No  
**Dependencies**: Task 9.1, 9.2

**Acceptance Criteria**:
- [ ] Code review is completed by peer or tech lead
- [ ] No major issues identified
- [ ] Feedback is addressed (if any)
- [ ] Approval obtained for merge

**Review Process**:
1. **Create Pull Request** (or prepare for review)
2. **Reviewer checks**:
   - [ ] Code follows team conventions
   - [ ] Implementation matches specification
   - [ ] No security issues
   - [ ] No performance concerns
   - [ ] Tests pass (if automated tests exist)
3. **Address feedback** (if any)
4. **Obtain approval**

**Review Focus Areas**:
- **Correctness**: Does it work as specified?
- **Quality**: Is the code clean and maintainable?
- **Consistency**: Does it match existing patterns?
- **Documentation**: Are changes documented in spec?

**Definition of Done**:
- Code review completed
- Approval obtained (or no review required)

---

### Task 9.4: Final Manual Testing Pass
**User Story**: All  
**Estimated Time**: 10 minutes  
**Assignee**: QA / Developer  
**Priority**: P1 (MVP)  
**Parallel**: No  
**Dependencies**: Task 9.2, 9.3

**Acceptance Criteria**:
- [ ] All 30 success criteria pass
- [ ] No regressions in existing functionality
- [ ] Ready for deployment

**Final Test Checklist** (Quick Pass):
1. **Visual** (5 criteria):
   - [ ] 3 cards display correctly
   - [ ] Orange gradient visible
   - [ ] Icon, title, description, capabilities all present
2. **Interaction** (5 criteria):
   - [ ] Click navigates
   - [ ] Hover animates
   - [ ] Keyboard works
3. **Responsive** (4 criteria):
   - [ ] Mobile: vertical stack
   - [ ] Tablet: 2-column grid
   - [ ] Desktop: balanced layout
4. **Themes** (4 criteria):
   - [ ] Crystal theme works
   - [ ] Obsidian theme works
   - [ ] Toggle is smooth
5. **Accessibility** (3 criteria):
   - [ ] Keyboard accessible
   - [ ] Contrast sufficient
   - [ ] Screen reader compatible
6. **Performance** (4 criteria):
   - [ ] Fast load
   - [ ] Smooth animations
   - [ ] No errors

**Regression Testing**:
- [ ] Business Analyst card still works
- [ ] QA Engineer card still works
- [ ] Other page sections unaffected

**Definition of Done**:
- All tests pass
- No regressions
- Ready for deployment

---

## Phase 10: Documentation & Deployment

**Goal**: Document changes and deploy to production  
**Duration**: 20 minutes  
**Dependencies**: Phase 9 complete  
**Final Phase**: Deployment

### Task 10.1: Update Documentation
**User Story**: N/A (Documentation)  
**Estimated Time**: 5 minutes  
**Assignee**: Developer  
**Priority**: P2  
**Parallel**: Yes  
**Dependencies**: Phase 9 complete

**Acceptance Criteria**:
- [X] Implementation notes added to spec/plan
- [X] Any deviations from plan are documented
- [X] Screenshots updated (if applicable)

**Documentation Updates**:
1. **Update `specs/002-performance-role/README.md`**:
   - [ ] Mark implementation as complete
   - [ ] Note any changes from original plan
   - [ ] Document any issues encountered

2. **Update implementation notes**:
   ```markdown
   ## Implementation Complete
   - Date: YYYY-MM-DD
   - Implementation time: X hours
   - Changes from plan: [None / List changes]
   - Issues encountered: [None / List issues]
   ```

3. **Screenshots** (optional):
   - [ ] Take screenshot of landing page with 3 cards
   - [ ] Save to `docs/img/landing/` or similar

**Definition of Done**:
- Documentation is updated
- Implementation is recorded

---

### Task 10.2: Commit and Push Changes
**User Story**: N/A (Deployment)  
**Estimated Time**: 5 minutes  
**Assignee**: Developer  
**Priority**: P1 (MVP)  
**Parallel**: No  
**Dependencies**: Task 10.1

**Acceptance Criteria**:
- [ ] Changes are committed with descriptive message
- [ ] Commit follows team conventions
- [ ] Changes are pushed to remote branch

**Commit Steps**:
```bash
cd /Users/Karen_Florykian/projects/projectalita.github.io

# Stage changes
git add web/src/components/RolesSection.tsx

# If grid layout was changed:
# (Already staged above)

# Commit with conventional commit message
git commit -m "feat: Add Performance Testing role card to landing page

- Add third role card with orange/amber gradient
- Link to /performance-testing workflow page
- Include 4 AI-powered capabilities from documentation
- Maintain visual consistency with existing cards
- Support both Crystal and Obsidian themes
- Ensure WCAG AA accessibility compliance

Implements:
- User Story 1 (P1): Performance Testing Role Display
- User Story 2 (P2): Responsive Grid Layout
- User Story 3 (P3): Visual Consistency

Success Criteria: SC-001 to SC-030 (all 30 criteria met)

Closes #002"

# Push to remote
git push origin 002-performance-role
```

**Commit Message Convention**:
- **Type**: `feat` (new feature)
- **Scope**: (optional) component or area
- **Summary**: Brief description
- **Body**: Detailed changes and context
- **Footer**: Issue references, breaking changes

**Definition of Done**:
- Changes committed and pushed
- Ready for PR or merge

---

### Task 10.3: Create Pull Request
**User Story**: N/A (Deployment)  
**Estimated Time**: 5 minutes  
**Assignee**: Developer  
**Priority**: P1 (MVP)  
**Parallel**: No  
**Dependencies**: Task 10.2

**Acceptance Criteria**:
- [ ] Pull Request created
- [ ] PR description is complete and clear
- [ ] Reviewers are assigned
- [ ] Ready for review and merge

**PR Creation Steps**:
1. Go to GitHub repository
2. Navigate to Pull Requests tab
3. Click "New Pull Request"
4. Select branches:
   - Base: `001-performance-testing-workflow` (or `main`)
   - Compare: `002-performance-role`
5. Fill in PR template

**PR Title**:
```
feat: Add Performance Testing role card to landing page
```

**PR Description Template**:
```markdown
## Summary
Add a third role card to the landing page's RolesSection component to showcase AI-powered Performance Testing capabilities.

## Changes
- Added Performance Testing role object to `RolesSection.tsx`
- Orange/amber gradient styling for visual distinction
- 4 AI-powered capabilities from performance testing documentation
- Links to `/performance-testing` workflow page
- [Optional] Updated grid layout to `lg:grid-cols-3` for desktop

## Testing
- ✅ All 30 success criteria met (SC-001 to SC-030)
- ✅ Visual testing: Crystal and Obsidian themes
- ✅ Responsive testing: Mobile, tablet, desktop
- ✅ Interaction testing: Click, hover, keyboard
- ✅ Accessibility testing: WCAG AA compliance, screen reader
- ✅ Performance testing: No regressions
- ✅ Cross-browser testing: Chrome, Firefox, Safari, Edge

## Screenshots
[Add screenshots here if applicable]

## Related Issues
Closes #002
Implements specs/002-performance-role/spec.md

## Checklist
- [x] Code follows team conventions
- [x] All tests pass
- [x] Documentation updated
- [x] No breaking changes
- [x] Ready for review
```

**Assign Reviewers**:
- [ ] Peer reviewer
- [ ] Tech lead (if required)
- [ ] Design reviewer (if applicable)

**Definition of Done**:
- PR created and submitted
- Reviewers assigned
- Ready for approval

---

### Task 10.4: Merge and Deploy
**User Story**: N/A (Deployment)  
**Estimated Time**: 5 minutes  
**Assignee**: Developer / DevOps  
**Priority**: P1 (MVP)  
**Parallel**: No  
**Dependencies**: Task 10.3 (PR approved)

**Acceptance Criteria**:
- [ ] PR is approved by required reviewers
- [ ] PR is merged into target branch
- [ ] Deployment pipeline executes successfully
- [ ] Production site is updated

**Merge Steps**:
1. **Wait for PR approval**
2. **Resolve any conflicts** (if any)
3. **Merge PR**:
   - Merge method: "Squash and merge" or "Rebase and merge" (team preference)
   - Confirm merge
4. **Delete feature branch** (optional, after merge)

**Deployment** (GitHub Pages):
```bash
# If deploying from 001-performance-testing-workflow branch:
# The existing workflow (.github/workflows/deploy-unified.yml) 
# should automatically deploy when changes are pushed

# Monitor deployment:
# Go to: https://github.com/Karen_Florykian/projectalita.github.io/actions
# Check workflow status
```

**Post-Deployment Verification**:
1. **Wait for deployment** (usually 2-5 minutes)
2. **Visit production site**: 
   - URL: https://karen_florykian.github.io/projectalita.github.io/
   - Or custom domain if configured
3. **Verify Performance Testing card**:
   - [ ] Card displays correctly
   - [ ] Navigation works
   - [ ] Themes work
4. **Quick smoke test**:
   - [ ] Click card → navigate to workflow page
   - [ ] Toggle theme → verify both themes
   - [ ] Test on mobile device (if available)

**If Issues Found**:
- Create hotfix branch
- Fix issues
- Repeat deployment process

**Definition of Done**:
- Changes deployed to production
- Production verification complete
- Feature is live! 🎉

---

## Summary Statistics

### Total Task Breakdown
- **Total Tasks**: 48
- **Total Estimated Time**: 4 hours 0 minutes
- **Phases**: 11
- **User Stories Covered**: 3 (US-1, US-2, US-3)
- **Success Criteria Covered**: 30 (SC-001 to SC-030)
- **Functional Requirements**: 28 (FR-001 to FR-028)

### Task Distribution by Phase
| Phase | Tasks | Time | % of Total |
|-------|-------|------|------------|
| 1. Pre-Implementation | 4 | 30 min | 12.5% |
| 2. Core Implementation | 3 | 30 min | 12.5% |
| 3. Visual Testing | 6 | 30 min | 12.5% |
| 4. Responsive Testing | 5 | 30 min | 12.5% |
| 5. Interaction Testing | 6 | 30 min | 12.5% |
| 6. Accessibility Testing | 5 | 20 min | 8.3% |
| 7. Performance Testing | 4 | 15 min | 6.3% |
| 8. Cross-Browser Testing | 4 | 20 min | 8.3% |
| 9. Code Review & Refinement | 4 | 30 min | 12.5% |
| 10. Documentation | 3 | 15 min | 6.3% |
| 11. Deployment | 4 | 20 min | 8.3% |

### Task Priority Distribution
- **P0 (Blocking)**: 2 tasks
- **P1 (MVP)**: 28 tasks
- **P2 (Important)**: 15 tasks
- **P3 (Nice-to-have)**: 3 tasks

### Parallel Work Opportunities
**Phase 1**: Tasks 1.2, 1.3, 1.4 can run in parallel (save ~15 minutes)  
**Phase 3**: Tasks 3.2-3.6 can run in parallel (save ~20 minutes)  
**Phase 4**: Tasks 4.2-4.4 can run in parallel (save ~16 minutes)  
**Phases 4-6**: Can overlap with Phase 5 and 6 (save ~20 minutes)

**Optimized Timeline**: ~3 hours with parallel execution

### Risk Assessment by Task
- **Low Risk**: 40 tasks (83%)
- **Medium Risk**: 8 tasks (17%)
- **High Risk**: 0 tasks (0%)

### Dependencies
- **No Dependencies**: 4 tasks (can start immediately)
- **Single Dependency**: 30 tasks
- **Multiple Dependencies**: 14 tasks
- **Blocking Tasks**: 2 tasks (must complete before others)

---

## Recommended Execution Strategy

### Sprint 1: Core Implementation (1 hour)
**Goal**: Get basic functionality working
- Phase 1: Pre-Implementation (30 min)
- Phase 2: Core Implementation (30 min)
**Outcome**: Performance Testing card displays on landing page

### Sprint 2: Testing & Validation (2 hours)
**Goal**: Ensure quality and compatibility
- Phase 3: Visual Testing (30 min)
- Phase 4: Responsive Testing (30 min) [parallel with Phase 5]
- Phase 5: Interaction Testing (30 min) [parallel with Phase 4]
- Phase 6: Accessibility Testing (20 min)
- Phase 7: Performance Testing (15 min)
- Phase 8: Cross-Browser Testing (20 min)
**Outcome**: All tests pass, feature is validated

### Sprint 3: Polish & Deploy (1 hour)
**Goal**: Finalize and ship
- Phase 9: Code Review & Refinement (30 min)
- Phase 10: Documentation (15 min)
- Phase 11: Deployment (20 min)
**Outcome**: Feature is live in production

---

## Quick Reference: Critical Path

**Must Complete in Order**:
1. Task 1.1: Environment Setup (blocking)
2. Task 1.2: Review Component (blocking)
3. Task 2.1: Add Role Object (core implementation)
4. Task 3.1: Verify Display (basic validation)
5. Task 9.4: Final Testing Pass (quality gate)
6. Task 10.2: Commit & Push (deployment prerequisite)
7. Task 10.3: Create PR (review gate)
8. Task 10.4: Merge & Deploy (go live)

**Estimated Critical Path Time**: ~1.5 hours (if everything goes smoothly)

---

**Status**: ✅ Task breakdown complete and ready for execution

**Next Action**: Begin Phase 1 (Pre-Implementation Setup) → Task 1.1
