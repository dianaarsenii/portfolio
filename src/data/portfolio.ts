export type CaseStudy = {
  id: string;
  label: string;
  title: string;
  summary: string;
  challenge: string;
  approach: string[];
  tradeoffs: string[];
  outcomes: { label: string; value: string }[];
  note: string;
};

export const navItems = [
  { label: "Work", href: "#work" },
  { label: "AI", href: "#ai" },
  { label: "Demo", href: "#demo" },
  { label: "CV", href: "#cv" },
  { label: "About", href: "#about" },
];

export const skills = [
  "React",
  "TypeScript",
  "JavaScript",
  "Design systems",
  "Accessibility",
  "Frontend architecture",
  "Performance tuning",
  "Product thinking",
  "Testing",
  "AI-assisted workflows",
  "CI/CD",
  "Cross-platform UI",
  "UX collaboration",
];

export const aiWorkflowHighlights = [
  {
    title: "Rapid prototyping",
    text: "I use AI to generate initial UI ideas, technical scaffolding, and low-risk exploration paths before narrowing to a production-ready implementation.",
  },
  {
    title: "Code understanding",
    text: "AI helps me summarize unfamiliar code paths, spot edge cases, and surface potential regressions faster when working across legacy and modern systems.",
  },
  {
    title: "Quality loop",
    text: "I use AI for test scenarios, edge-case review, and release checklists — but I always validate the output against product requirements and runtime behavior.",
  },
];

export type ExperienceEntry = {
  id: string;
  period: string;
  role: string;
  title: string;
  summary: string;
  achievements: string[];
  metrics: { label: string; value: string }[];
  accent: string;
};

export const experienceEntries: ExperienceEntry[] = [
  {
    id: "crunchyroll-console-frontend",
    period: "01/06/2021 — 05/07/2026",
    role: "Software Engineer (Frontend / Game Consoles)",
    title: "React Native to React.js migration for PlayStation 4 and shared product experiences",
    summary:
      "Led the major frontend migration from React Native to React.js at Crunchyroll to address PlayStation 4 performance constraints and improve long-term maintainability across the product.",
    achievements: [
      "Spearheaded the migration from React Native to React.js, improving application performance, stability, and maintainability on console devices.",
      "Owned frontend feature delivery from requirements discovery through implementation, testing, release, and post-release support for livestream, closed captions, and video player features.",
      "Partnered with Sony engineers to investigate platform-specific issues, integrate native APIs, and meet console certification requirements.",
      "Accelerated release velocity by 50% by moving the engineering organization to a structured 2-week sprint release train and automating build/test/package workflows in GitHub Actions and CircleCI.",
      "Integrated a custom AI-based localization library to streamline translation workflows and reduce manual engineering effort.",
    ],
    metrics: [
      { label: "Release velocity", value: "+50%" },
      { label: "Platform shift", value: "RN → React" },
      { label: "Scope", value: "PS4 + web" },
    ],
    accent: "green",
  },
  {
    id: "endava-fintech-frontend",
    period: "01/03/2020 — 10/05/2021",
    role: "Frontend Engineer",
    title: "Frontend engineering for complex FinTech and Crypto web applications",
    summary:
      "Built and modernized modular React applications for high-complexity FinTech and Crypto products, focusing on architecture, reusable components, and performance optimization.",
    achievements: [
      "Spearheaded development of complex FinTech and Crypto web applications using React, TypeScript, and modular UI architectures.",
      "Migrated legacy class-based components to functional components with React Hooks, successfully decoupling business logic and simplifying maintenance.",
      "Architected reusable UI libraries and implemented critical frontend performance optimizations to improve responsiveness and long-term maintainability.",
      "Worked closely with UX/UI designers, backend teams, and product managers to deliver seamless, high-quality user journeys.",
    ],
    metrics: [
      { label: "Stack", value: "React + TS" },
      { label: "Architecture", value: "Modernized" },
      { label: "Focus", value: "Performance" },
    ],
    accent: "blue",
  },
  {
    id: "endava-ios-engineer",
    period: "02/10/2016 — 06/08/2018",
    role: "iOS Software Engineer",
    title: "Production iOS development, integrations, and team mentoring",
    summary:
      "Engineered and maintained production-grade iOS applications in Swift and Objective-C, while leading mobile development work and mentoring junior engineers.",
    achievements: [
      "Engineered, tested, and maintained production-grade iOS applications using Swift and Objective-C.",
      "Integrated mission-critical third-party services like Firebase and designed offline storage and custom navigation flows to support resilient app behavior.",
      "Mentored junior engineers and interns, improving internal documentation and streamlining onboarding.",
      "Collaborated with distributed global teams across design, product, and backend engineering to deliver cohesive product experiences.",
    ],
    metrics: [
      { label: "Platform", value: "iOS" },
      { label: "Team", value: "Lead" },
      { label: "Mentorship", value: "Junior" },
    ],
    accent: "gold",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "console-migration",
    label: "01 · CONSOLE · PERFORMANCE",
    title: "Migrating a PlayStation 4 frontend to React.js without compromising product quality",
    summary:
      "I led the frontend migration of Crunchyroll’s console application from React Native to React.js to address performance constraints, improve maintainability, and reduce product risk on a constrained platform.",
    challenge:
      "The product was running on a console platform with stricter performance and certification requirements, while the existing React Native architecture created maintenance friction and limited scaling opportunities for the product team.",
    approach: [
      "Mapped the migration plan around business-critical screens and platform constraints, prioritizing the highest-value paths first and isolating platform-specific issues early.",
      "Partnered closely with Sony engineers and internal teams to investigate native and console-specific issues, integrate required APIs, and keep the app aligned with certification requirements.",
      "Defined release checkpoints, automation improvements, and regression validation so the migration was stable enough for product and platform requirements without blocking delivery.",
    ],
    tradeoffs: [
      "The team had to balance migration speed against product risk. We prioritized maintainability and console compatibility over a quick rewrite, which meant a phased approach rather than a one-shot swap.",
      "I kept the migration grounded in operator trust: if a screen was not ready for platform constraints or release quality, it stayed behind the migration boundary until it met the bar.",
    ],
    outcomes: [
      { label: "Release velocity", value: "+50%" },
      { label: "Performance", value: "Improved" },
      { label: "Stability", value: "Higher" },
    ],
    note: "Crunchyroll · Software Engineer (Frontend / Game Consoles) · 2021–2026",
  },
  {
    id: "frontend-ownership",
    label: "02 · PRODUCT · OWNERSHIP",
    title: "Shipping product features across streaming, video playback, and platform constraints",
    summary:
      "I owned frontend delivery across high-impact product experiences—including livestream support, closed captions, video player integrations, and global UI work—while coordinating with design, backend, and platform teams.",
    challenge:
      "The team needed to ship reliable product features across multiple platform constraints without losing quality, while also working through release automation and platform-specific compatibility issues.",
    approach: [
      "Handled the full frontend lifecycle from requirement discovery to testing, release, and post-release support so product priorities stayed connected to implementation realities.",
      "Improved release workflows with GitHub Actions and CircleCI, reducing manual effort and creating a more consistent delivery rhythm for product and platform teams.",
      "Introduced AI-assisted localization tooling to streamline translation work and reduce repetitive engineering effort while maintaining quality checks.",
    ],
    tradeoffs: [
      "We deliberately optimized for consistent execution and release confidence instead of chasing too many parallel experiments. That meant narrowing scope in some areas so the most critical product capabilities could ship reliably.",
      "I favored explicit validation, clear fallback behavior, and platform-aware fixes over short-term visual polish when product quality and certification requirements were at stake.",
    ],
    outcomes: [
      { label: "Workflow speed", value: "+50%" },
      { label: "Localization effort", value: "Reduced" },
      { label: "Feature delivery", value: "Owned end-to-end" },
    ],
    note: "Crunchyroll · Product & platform delivery · 2021–2026",
  },
];
