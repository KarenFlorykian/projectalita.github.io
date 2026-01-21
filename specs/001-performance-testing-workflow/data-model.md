# Data Model: Performance Testing Workflow - 7 Phases

**Feature**: Performance Testing Workflow Visualization  
**Date**: 2026-01-16  
**Source**: `/docs/performance testing/Phase-0-Business-Request.md` through `Phase-6-Continuous-Monitoring.md`

## Overview

This document contains the complete data structure for the 7 Performance Testing phases to be rendered in `PerformanceAnalysisProcess.tsx`. All content is extracted directly from the performance testing documentation.

---

## Complete Steps Array

```typescript
const steps: ProcessStep[] = [
  // Phase 0
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

  // Phase 1
  {
    title: "Inception and Discovery",
    owner: "Performance Testing Lead",
    isExpanded: true,
    activities: [
      {
        text: "Align on project scope and performance expectations",
        type: "in-meeting",
        scope: "out"
      },
      {
        text: "Access infrastructure and obtain monitoring access",
        type: "personal",
        scope: "out"
      },
      {
        text: "Review product architecture and component diagrams",
        type: "personal",
        scope: "in",
        experiment: {
          name: "Discovery Agent",
          color: "bg-purple-500"
        }
      },
      {
        text: "Review product usage patterns and build load model",
        type: "personal",
        scope: "in",
        experiment: {
          name: "Load Modeler",
          color: "bg-indigo-500"
        }
      },
      {
        text: "Navigate application interfaces and develop user flows",
        type: "personal",
        scope: "in",
        experiment: {
          name: "Navigation & User Flow Modeler",
          color: "bg-blue-500"
        }
      },
      {
        text: "Define test data management requirements",
        type: "personal",
        scope: "in",
        experiment: {
          name: "TDSpora",
          color: "bg-teal-500"
        }
      },
      {
        text: "Validate test plan and prerequisites",
        type: "personal",
        scope: "in",
        experiment: {
          name: "Test Plan Validator",
          color: "bg-green-500"
        }
      }
    ]
  },

  // Phase 2
  {
    title: "Scripts Development",
    owner: "Performance Test Lead",
    isExpanded: true,
    activities: [
      {
        text: "Initialize performance repository structure using boilerplates",
        type: "personal",
        scope: "in",
        experiment: {
          name: "Script Generator",
          color: "bg-blue-600"
        }
      },
      {
        text: "Analyze test plan and convert to scripts with dynamic correlation",
        type: "personal",
        scope: "in",
        experiment: {
          name: "Script Generator",
          color: "bg-blue-600"
        }
      },
      {
        text: "Create data-driven scripts with load model parameterization",
        type: "personal",
        scope: "in",
        experiment: {
          name: "Script Generator",
          color: "bg-blue-600"
        }
      },
      {
        text: "Run script validation checks and apply automated healing",
        type: "personal",
        scope: "in",
        experiment: {
          name: "Scripts Healer",
          color: "bg-orange-500"
        }
      },
      {
        text: "Review and validate scripts with delivery team",
        type: "in-meeting",
        scope: "out"
      }
    ]
  },

  // Phase 3
  {
    title: "Test Execution & Monitoring",
    owner: "Performance Test Lead",
    isExpanded: false,
    activities: [
      {
        text: "Deploy scripts and execute performance tests with baseline definition",
        type: "personal",
        scope: "in",
        experiment: {
          name: "Execution Orchestrator",
          color: "bg-amber-600"
        }
      },
      {
        text: "Consolidate logs and system monitoring metrics",
        type: "personal",
        scope: "in",
        experiment: {
          name: "Monitoring MCP",
          color: "bg-yellow-500"
        }
      },
      {
        text: "Validate findings with anomaly detection",
        type: "personal",
        scope: "in",
        experiment: {
          name: "Anomaly Detection",
          color: "bg-red-500"
        }
      }
    ]
  },

  // Phase 4
  {
    title: "Performance Analysis",
    owner: "Performance Analyst / Delivery Team",
    isExpanded: false,
    activities: [
      {
        text: "Perform root cause analysis and generate transaction breakdowns",
        type: "in-meeting",
        scope: "in",
        experiment: {
          name: "Transaction Breakdown Builder",
          color: "bg-purple-600"
        }
      },
      {
        text: "Validate and retest after fixes",
        type: "personal",
        scope: "in",
        experiment: {
          name: "Execution Orchestrator",
          color: "bg-amber-600"
        }
      },
      {
        text: "Capture learnings in knowledge base",
        type: "in-meeting",
        scope: "out"
      },
      {
        text: "Adjust baselines and thresholds based on changes",
        type: "personal",
        scope: "in",
        experiment: {
          name: "Baseline Curator",
          color: "bg-green-600"
        }
      }
    ]
  },

  // Phase 5
  {
    title: "Reporting & Sign-off",
    owner: "Performance Test Lead / Delivery Manager",
    isExpanded: false,
    activities: [
      {
        text: "Generate executive performance report",
        type: "personal",
        scope: "out"
      },
      {
        text: "Present findings to stakeholders",
        type: "in-meeting",
        scope: "out"
      },
      {
        text: "Update governance documentation",
        type: "personal",
        scope: "out"
      }
    ]
  },

  // Phase 6
  {
    title: "Continuous Monitoring",
    owner: "Performance Test Lead",
    isExpanded: false,
    activities: [
      {
        text: "Configure continuous monitoring infrastructure",
        type: "personal",
        scope: "in",
        experiment: {
          name: "Execution Orchestrator",
          color: "bg-amber-600"
        }
      },
      {
        text: "Establish synthetic monitoring and alert triggers",
        type: "personal",
        scope: "out"
      },
      {
        text: "Monitor production performance using synthetic monitoring",
        type: "personal",
        scope: "in",
        experiment: {
          name: "Anomaly Detection Agent",
          color: "bg-red-500"
        }
      },
      {
        text: "Generate periodic performance health reports",
        type: "personal",
        scope: "out"
      },
      {
        text: "Refine monitoring and thresholds based on production data",
        type: "personal",
        scope: "out"
      }
    ]
  }
]
```

---

## Phase Breakdown

### Phase 0: Business Request

**Owner**: Product Owner  
**Default State**: Expanded  
**Activities**: 4  
**AI Experiments**: 1 (Context Acquisition Agent)

| Activity | Type | AI Automation |
|----------|------|---------------|
| Identify motivation behind performance testing initiative | In Meeting | Manual |
| Obtain knowledge about business and system under test | In Meeting | Manual |
| Define preliminary scope and performance expectations | Personal | Manual |
| Submit performance testing request to delivery team | Personal | **Context Acquisition Agent** |

**Purpose**: Recognize the need for performance testing, define preliminary scope, and submit formal request to the performance team.

---

### Phase 1: Inception and Discovery

**Owner**: Performance Testing Lead  
**Default State**: Expanded  
**Activities**: 7  
**AI Experiments**: 5 (Discovery Agent, Load Modeler, Navigation & User Flow Modeler, TDSpora, Test Plan Validator)

| Activity | Type | AI Automation |
|----------|------|---------------|
| Align on project scope and performance expectations | In Meeting | Manual |
| Access infrastructure and obtain monitoring access | Personal | Manual |
| Review product architecture and component diagrams | Personal | **Discovery Agent** |
| Review product usage patterns and build load model | Personal | **Load Modeler** |
| Navigate application interfaces and develop user flows | Personal | **Navigation & User Flow Modeler** |
| Define test data management requirements | Personal | **TDSpora** |
| Validate test plan and prerequisites | Personal | **Test Plan Validator** |

**Purpose**: Analyze system architecture, flows, data requirements, and create comprehensive test plan with AI-powered discovery and modeling.

---

### Phase 2: Scripts Development

**Owner**: Performance Test Lead  
**Default State**: Expanded  
**Activities**: 5  
**AI Experiments**: 2 (Script Generator, Scripts Healer)

| Activity | Type | AI Automation |
|----------|------|---------------|
| Initialize performance repository structure using boilerplates | Personal | **Script Generator** |
| Analyze test plan and convert to scripts with dynamic correlation | Personal | **Script Generator** |
| Create data-driven scripts with load model parameterization | Personal | **Script Generator** |
| Run script validation checks and apply automated healing | Personal | **Scripts Healer** |
| Review and validate scripts with delivery team | In Meeting | Manual |

**Purpose**: Generate, validate, and optimize performance test scripts with AI-powered automation and healing.

---

### Phase 3: Test Execution & Monitoring

**Owner**: Performance Test Lead  
**Default State**: Collapsed  
**Activities**: 3  
**AI Experiments**: 3 (Execution Orchestrator, Monitoring MCP, Anomaly Detection)

| Activity | Type | AI Automation |
|----------|------|---------------|
| Deploy scripts and execute performance tests with baseline definition | Personal | **Execution Orchestrator** |
| Consolidate logs and system monitoring metrics | Personal | **Monitoring MCP** |
| Validate findings with anomaly detection | Personal | **Anomaly Detection** |

**Purpose**: Execute tests, establish baselines, monitor system metrics, and detect anomalies with full AI automation.

---

### Phase 4: Performance Analysis

**Owner**: Performance Analyst / Delivery Team  
**Default State**: Collapsed  
**Activities**: 4  
**AI Experiments**: 3 (Transaction Breakdown Builder, Execution Orchestrator, Baseline Curator)

| Activity | Type | AI Automation |
|----------|------|---------------|
| Perform root cause analysis and generate transaction breakdowns | In Meeting | **Transaction Breakdown Builder** |
| Validate and retest after fixes | Personal | **Execution Orchestrator** |
| Capture learnings in knowledge base | In Meeting | Manual |
| Adjust baselines and thresholds based on changes | Personal | **Baseline Curator** |

**Purpose**: Conduct root cause analysis, validate fixes, capture learnings, and maintain baselines with AI-assisted investigation.

---

### Phase 5: Reporting & Sign-off

**Owner**: Performance Test Lead / Delivery Manager  
**Default State**: Collapsed  
**Activities**: 3  
**AI Experiments**: 0 (All manual)

| Activity | Type | AI Automation |
|----------|------|---------------|
| Generate executive performance report | Personal | Manual |
| Present findings to stakeholders | In Meeting | Manual |
| Update governance documentation | Personal | Manual |

**Purpose**: Generate executive reports, present to stakeholders, and obtain sign-off for production release.

---

### Phase 6: Continuous Monitoring

**Owner**: Performance Test Lead  
**Default State**: Collapsed  
**Activities**: 5  
**AI Experiments**: 2 (Execution Orchestrator, Anomaly Detection Agent)

| Activity | Type | AI Automation |
|----------|------|---------------|
| Configure continuous monitoring infrastructure | Personal | **Execution Orchestrator** |
| Establish synthetic monitoring and alert triggers | Personal | Manual |
| Monitor production performance using synthetic monitoring | Personal | **Anomaly Detection Agent** |
| Generate periodic performance health reports | Personal | Manual |
| Refine monitoring and thresholds based on production data | Personal | Manual |

**Purpose**: Establish continuous monitoring in production, detect regressions, and optimize thresholds with ongoing AI support.

---

## Statistics

### Overall Summary

| Metric | Count |
|--------|-------|
| Total Phases | 7 |
| Total Activities | 31 |
| Personal Work Activities | 24 (77%) |
| In Meeting Activities | 7 (23%) |
| AI-Automated Activities | 18 (58%) |
| Manual Activities | 13 (42%) |
| Unique AI Experiments | 13 |
| Default Expanded Phases | 3 (Phases 0, 1, 2) |
| Default Collapsed Phases | 4 (Phases 3, 4, 5, 6) |

### AI Experiments Usage

| Experiment | Phases Used | Frequency |
|------------|-------------|-----------|
| Execution Orchestrator | 3, 4, 6 | 3 |
| Anomaly Detection | 3, 6 | 2 |
| Script Generator | 2 | 3 |
| Scripts Healer | 2 | 1 |
| Context Acquisition Agent | 0 | 1 |
| Discovery Agent | 1 | 1 |
| Load Modeler | 1 | 1 |
| Navigation & User Flow Modeler | 1 | 1 |
| TDSpora | 1 | 1 |
| Test Plan Validator | 1 | 1 |
| Monitoring MCP | 3 | 1 |
| Transaction Breakdown Builder | 4 | 1 |
| Baseline Curator | 4 | 1 |

### AI Automation by Phase

| Phase | AI Activities | Total Activities | % Automated |
|-------|---------------|------------------|-------------|
| 0: Business Request | 1 | 4 | 25% |
| 1: Inception & Discovery | 5 | 7 | 71% |
| 2: Scripts Development | 4 | 5 | 80% |
| 3: Test Execution | 3 | 3 | 100% |
| 4: Performance Analysis | 3 | 4 | 75% |
| 5: Reporting & Sign-off | 0 | 3 | 0% |
| 6: Continuous Monitoring | 2 | 5 | 40% |

---

## Implementation Notes

### Default Expansion Strategy

**Expanded by default (isExpanded: true)**:
- Phase 0: Business Request
- Phase 1: Inception and Discovery
- Phase 2: Scripts Development

**Rationale**: These are the critical setup phases (P1 in spec) that define the workflow. Expanding them immediately shows users the foundation of the process.

**Collapsed by default (isExpanded: false)**:
- Phase 3: Test Execution & Monitoring
- Phase 4: Performance Analysis
- Phase 5: Reporting & Sign-off
- Phase 6: Continuous Monitoring

**Rationale**: These are execution and analysis phases (P2, P3 in spec) that users can expand as needed. Collapsing them prevents information overload on initial page load.

### Activity Text Guidelines

1. **Concise**: Keep under 100 characters for mobile readability
2. **Action-Oriented**: Start with verbs (Analyze, Generate, Review, etc.)
3. **Specific**: Include key details (what, how, or where)
4. **Consistent**: Use parallel structure across similar activities

### Experiment Assignment Rules

1. **scope: 'in'** only when AI experiment is assigned
2. **scope: 'out'** for all manual activities
3. **experiment object** must include both name and color
4. **color classes** must use Tailwind's bg-* pattern
5. **experiment names** should match the AI tool/agent name exactly

### Maintenance

When adding new activities:
1. Extract activity text from performance testing docs
2. Determine if it's personal work or in-meeting
3. Check if AI automation applies (consult with performance team)
4. If AI applies, assign appropriate experiment name and color
5. Add to the correct phase in the steps array
6. Update statistics in this document

When adding new AI experiments:
1. Choose a unique, distinct color (check color palette)
2. Ensure WCAG AA contrast with white text
3. Document in data-structures.md color table
4. Update statistics showing usage frequency
