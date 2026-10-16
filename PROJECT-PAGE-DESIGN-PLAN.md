# Projects Lab + Project Detail Pages — Design Plan

## Goal
Give Projects Lab and individual project pages one professional design language. Keep the site lightweight and static-host friendly: HTML, CSS, and vanilla JavaScript.

## Design system
- Direction: technical editorial / premium dark interface with clear hierarchy and restrained effects.
- Background: obsidian #080b12 with subtle blue-green radial lighting.
- Panels: #101722 and #141e2b; borders #273448.
- Accent: lime #b9f45b for primary actions; cyan #75dcca for secondary technical accents; optional violet #a9a1ff.
- Typography: system sans-serif for body copy; monospace for labels, tags, and technical metadata.
- Layout: centered max-width, 20px card radius, consistent spacing, fluid clamp() headings, generous whitespace.
- Motion: short hover transitions; honor prefers-reduced-motion.
- Accessibility: semantic landmarks, visible focus, descriptive links, readable contrast, responsive layouts.

## Projects Lab page
1. Shared navigation: NS brand, Portfolio, Projects Lab, GitHub.
2. Hero: positioning statement, concise intro, Explore projects CTA.
3. Catalogue: category filters, search, consistent cards, type labels, verified technology tags.
4. Card actions: case study/live demo plus source link.
5. Supporting sections: selected work, approach, about, contact; avoid repeating every detail in the cards.

## Individual project page
1. Breadcrumbs: Home → Projects Lab → Project.
2. Hero: category, project name, value proposition, source/demo CTA.
3. Quick facts: type, primary focus, status, technology stack.
4. Context: problem and design approach.
5. Capabilities: 3–6 specific, verifiable features.
6. Architecture: explain data flow and responsibility of each layer.
7. Run/inspect: short quick-start snippet, prerequisites, README link.
8. Closing CTA: repository and return to Projects Lab.

## Content rules
- Only claim capabilities, stacks, metrics, demos, and deployment status supported by README or actual code.
- Label future ideas as potential improvements, not implemented features.
- Do not invent user counts, benchmark scores, adoption, or production status.
- Keep the overview concise; put technical depth into architecture and setup.

## Files
- projects-showcase.html — catalogue / Projects Lab.
- codeguard-ai.html — first implemented case study.
- project-template.html — reusable HTML starter for future pages.
- assets/css/project-page.css — shared individual-page theme.
- PROJECT-PAGE-DESIGN-PLAN.md — this plan.

## Implementation sequence
1. Publish the theme stylesheet and reusable template.
2. Use CodeGuard AI as the first complete page.
3. Link the CodeGuard AI card to its dedicated page.
4. Copy the template for later projects, replacing every {{PLACEHOLDER}} with verified details.
5. Check links, mobile layout, keyboard focus, and static-host paths before release.
