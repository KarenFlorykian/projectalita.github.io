'use client'

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
 * 
 * @param theme - Current theme ('crystal' or 'obsidian')
 * @param onToggleTheme - Callback to toggle theme
 */

import { motion } from 'framer-motion'
import ProcessFlowCard from '@/components/ProcessFlowCard'
import Footer from '@/components/Footer'
import ThemeToggle from '@/components/ThemeToggle'
import Link from 'next/link'

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

interface PerformanceAnalysisProcessProps {
  theme: 'crystal' | 'obsidian'
  onToggleTheme: () => void
}

export default function PerformanceAnalysisProcess({ theme, onToggleTheme }: PerformanceAnalysisProcessProps) {
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

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-obsidian-50 dark:via-obsidian-100 dark:to-primary-800/20 transition-colors duration-500">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/60 dark:bg-obsidian-200/60 backdrop-blur-xl border-b border-white/60 dark:border-obsidian-300/60 shadow-sm"
        style={{
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-primary-700 dark:text-blue-300 hover:text-primary-600 dark:hover:text-blue-200 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-semibold">Back to Home</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-primary-100 dark:bg-primary-600/20 text-primary-700 dark:text-blue-200 px-3 py-1.5 rounded-full text-xs font-medium border border-primary-200/50 dark:border-primary-500/30">
              <span className="w-1.5 h-1.5 bg-primary-500 dark:bg-blue-300 rounded-full animate-pulse"></span>
              Process Documentation
            </div>
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            {/* Title Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 dark:from-blue-500 dark:to-cyan-500 rounded-xl flex items-center justify-center shadow-lg dark:shadow-blue-500/50">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6"
            >
              AI-Assisted Performance Testing
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
              A comprehensive workflow from business request to continuous monitoring, 
              spanning 7 phases (Phase 0-6). Enhanced with AI-powered script generation, 
              execution orchestration, anomaly detection, and automated baseline management.
            </motion.p>

            {/* Legend */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-12 md:mt-16 space-y-4"
            >
              {/* Work Type */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Work Type:</span>
                <span className="border rounded-full px-3 py-1 text-xs font-medium bg-green-100 dark:bg-green-600/30 text-green-700 dark:text-green-300 border-green-300 dark:border-green-500/40">
                  In Meeting
                </span>
                <span className="border rounded-full px-3 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-600/30 text-blue-700 dark:text-blue-300 border-blue-300 dark:border-blue-500/40">
                  Personal Work
                </span>
              </div>

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
            </motion.div>
          </motion.div>

          {/* Process Flow */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
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
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 md:mt-24 text-center"
          >
            <div className="bg-white/60 dark:bg-obsidian-200/60 backdrop-blur-xl rounded-[24px] shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_2px_rgba(255,255,255,0.9)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_2px_rgba(255,255,255,0.1)] border border-white/60 dark:border-obsidian-300/60 p-8 md:p-12 max-w-3xl mx-auto"
              style={{
                backdropFilter: 'blur(20px) saturate(180%)',
                WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to explore AI in performance testing?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 md:mb-8">
                Discover how AI can enhance each step of your performance testing process
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full sm:w-auto relative overflow-hidden bg-primary-600/95 dark:bg-blue-500/90 backdrop-blur-xl text-white px-8 py-4 rounded-[20px] font-semibold text-lg shadow-[0_8px_24px_rgba(37,99,235,0.25),inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-1px_2px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_24px_rgba(59,130,246,0.4),inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-1px_2px_rgba(0,0,0,0.2)] hover:shadow-[0_12px_32px_rgba(37,99,235,0.35),inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-1px_2px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_12px_32px_rgba(59,130,246,0.5),inset_0_1px_1px_rgba(255,255,255,0.2),inset_0_-1px_2px_rgba(0,0,0,0.2)] transition-all duration-300 flex items-center justify-center gap-2 border border-primary-500/20 dark:border-blue-400/30"
                    style={{
                      backdropFilter: 'blur(20px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    }}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                    Back to Home
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232d5a87' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <Footer />
    </main>
  )
}
