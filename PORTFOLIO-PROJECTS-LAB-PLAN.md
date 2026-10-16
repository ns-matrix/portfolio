# Portfolio + Projects Lab Information Architecture and Project Timeline Plan

Repository: ns-matrix/portfolio  
Primary pages: index.html (main portfolio), projects-showcase.html (Projects Lab)  
Visual direction: neon-green / black cybersecurity-terminal theme from the supplied design references.

## 1. Product goals
1. Keep the main portfolio concise and recruiter-focused.
2. Make Projects Lab the searchable, filterable catalogue of public projects.
3. Create a dedicated, shareable case-study page for every eligible public project.
4. Display verified project dates and sort newest-first without inventing dates.
5. Use a single project data source where practical so dates, links, tags, and summaries remain consistent.
6. Preserve static-host compatibility and the current HTML/CSS/vanilla-JavaScript approach.

## 2. What belongs on the main portfolio (index.html)

The main portfolio is the professional landing page, not the full project documentation site.

### Recommended sections
1. **Header / navigation:** NX-Matrix identity; About, Skills, Featured Projects, Experience, Certifications, Gallery, Contact; prominent Projects Lab link; GitHub and LinkedIn.
2. **Hero:** name, target role, concise value proposition, one-sentence summary of software engineering, data science, and applied AI; actions for featured work, Projects Lab, and GitHub.
3. **Professional snapshot:** NSE internship/apprenticeship with accurate team wording, B.Sc. Data Science education, and a small number of verified highlights.
4. **Skills:** grouped categories such as Software Development, Data & Analytics, AI/ML, and Tools/Infrastructure. Show representative skills, not every package.
5. **Featured projects (3–4 maximum):** curate the strongest evidence rather than repeating the whole catalogue. Suggested candidates: EcomIQ, CodeGuard AI, Axiom LinkedIn AI only if public, and NX Matrix Teams AI or another well-documented public project. Each card should show name, value statement, verified date/status, up to four technologies, and Case study / Source actions. Show Live demo only when its URL is verified.
6. **Experience:** public-safe NSE internship/apprenticeship details, responsibilities that can be disclosed, tools, and verified outcomes. Do not publish confidential internal work.
7. **Education and certifications:** education summary and selected credentials; retain the certificate gallery if it is useful.
8. **Contact:** professional email, LinkedIn, GitHub, and a clear contact action.

### Keep out of the main portfolio
- Long setup instructions, exhaustive feature lists, full dependency lists, or every repository in a dense grid.
- Full architecture documentation for every project.
- Unverified launch dates, user counts, benchmark scores, or production claims.

## 3. What belongs in Projects Lab (projects-showcase.html)

Projects Lab is the complete public project catalogue. Keep the neon-green terminal theme with angular cards, clear labels, and readable responsive layouts.

### Page structure
1. **Compact hero:** Projects Lab title, concise intro, links to the main portfolio and GitHub.
2. **Search and filters:** search by name, summary, stack, or category. Categories: AI & ML, Data & Analytics, Web Products, Developer Tools, Business / Operations Tools, Other.
3. **Newest-first catalogue:** sort by verified primary date descending by default. Add optional sorting for Newest first, Oldest first, Recently updated, and Alphabetical if it improves usability.
4. **Project cards:** title, category, verified summary, creation/publication date, optional last-updated date, up to four verified technology tags, optional real thumbnail, View case study, Source code, and optional verified Live demo.
5. **Optional feature spotlight:** one or two strong projects may receive a larger visual treatment, but all eligible projects still appear in the catalogue.
6. **Footer:** main portfolio, GitHub, LinkedIn, contact.

### Date labels
Use clearly different labels:
- **Created 16 Oct 2026** — repository creation metadata.
- **Published 16 Oct 2026** — only when a real release/publication date is verified.
- **Updated 16 Oct 2026** — last-push/commit metadata; this is not the creation date.

Store dates in ISO format (YYYY-MM-DD) for sorting, then format for display. Do not treat latest commit date as creation date.

## 4. Dedicated project case-study pages

Create a separate static HTML page for each suitable public repository, linked from its Projects Lab card and from the main portfolio if featured. Reuse the existing project template and shared project-page stylesheet.

### Suggested page paths
- projects/codeguard-ai.html
- projects/ecomiq.html
- projects/axiom-linkedin-ai.html
- projects/nxmatrix-teams-ai.html
- projects/petal-rush.html

Before moving the existing codeguard-ai.html, check current links. Prefer compatibility links or a redirect if changing a public path.

### Every case-study page should include
1. Breadcrumbs: Portfolio → Projects Lab → Project.
2. Hero: name, category, value proposition, verified date, confirmed status if available, source/demo links.
3. Project facts: repository, created date, last update if useful, stack, license if known, status.
4. Problem and intended users.
5. Three to six specific capabilities supported by README or code.
6. Real screenshots or assets with descriptive alt text; never present a mockup as a live screenshot.
7. Architecture and data flow, with diagram only if it reflects actual implementation.
8. Technical decisions and trade-offs, where documented.
9. Verified quick-start instructions, prerequisites, environment-variable names only, and README link. Never expose secrets.
10. Tests or benchmarks only where evidence exists.
11. Known limitations and next steps, with planned work labelled as planned.
12. Source, verified live demo, documentation, and back-to-Projects-Lab links.

### Private repository policy
Do not create public case studies for private repositories or expose their names, source details, architecture, screenshots, or internal workflows unless the user explicitly chooses to publish that material. The public site should contain only eligible public projects by default.

## 5. Date definitions and source policy

Source priority:
1. **Created date:** GitHub repository metadata created_at. This is the default reliable date available for a repository.
2. **Published date:** earliest verified GitHub Release publication date, package release date, or documented public launch date. Use only when an actual record exists.
3. **Updated date:** GitHub pushed_at or latest commit timestamp. This indicates repository activity, not project creation.
4. **Project start date:** use only when documented in README or explicitly provided by the user.

Rules:
- Do not infer dates from screenshots, filenames, conversation dates, or the date a portfolio card was added.
- If the date cannot be retrieved, label it “Date not verified” and place it after projects with verified dates.
- Keep date source metadata alongside each project: dateCreated, datePublished, dateUpdated, dateSource.
- Default sort key: datePublished when a verified release/publication date exists; otherwise dateCreated.
- Explain the date rule briefly in the UI.

## 6. Single source of truth

Prefer extending js/data.js with a project catalogue rather than maintaining duplicated metadata in index.html and Projects Lab.

Suggested record:
- id: codeguard-ai
- name: CodeGuard AI
- slug: projects/codeguard-ai.html
- category: ai
- summary: verified short summary
- dateCreated: YYYY-MM-DD
- datePublished: null when unknown
- dateUpdated: YYYY-MM-DD
- dateSource: GitHub repository metadata
- technologies: list of verified tags
- repositoryUrl: public repository URL
- demoUrl: null when no verified demo exists
- thumbnail: path only when an asset exists
- visibility: public
- featured: boolean

Keep missing optional values null rather than using fake placeholders. Projects Lab should render/sort cards from this catalogue where practical. Main portfolio featured cards should reference the same project IDs and URLs. Detail pages may initially be static HTML, but title, dates, and links must match the catalogue.

## 7. Rollout phases

### Phase 1 — Inventory and verification
- Inventory repositories owned by ns-matrix.
- Exclude portfolio and the ns-matrix profile README repository from project cards.
- Exclude private repositories from public pages.
- Inspect README, languages/topics when available, repository creation date, last-push date, release dates, homepage, and actual screenshot assets.
- Record evidence for descriptions, stack tags, demos, and status.

### Phase 2 — Confirm content policy
- Review the proposed featured projects.
- Resolve ambiguous dates and launch status before publishing them.
- Keep the main portfolio curated and Projects Lab comprehensive.

### Phase 3 — Date data and sorting
- Add verified date metadata to the project catalogue.
- Display a labelled date on each card.
- Implement newest-first sorting and test ties, missing dates, search, and category filters.

### Phase 4 — Create all eligible public case-study pages
- Use the shared project-page theme/template.
- Write project-specific content based on each repository's README and code.
- Link every eligible project card to its page.
- Link featured main-portfolio cards to the same pages.
- Do not link to a missing file; if a page is not ready, label it “Case study coming soon” until complete.

### Phase 5 — Quality assurance and deployment
- Check every internal and external link, mobile layout, keyboard focus, alt text, and reduced-motion behavior.
- Confirm newest-first date ordering and search/filter behavior.
- Confirm public/private visibility.
- Commit changes to main.
- Verify the Vercel production deployment commit SHA matches the final GitHub commit. Do not claim deployment success before verification.
- Verify Netlify separately only if it remains part of the intended hosting workflow.

## 8. Acceptance criteria
- [ ] Main portfolio remains concise and recruiter-focused.
- [ ] Projects Lab includes all eligible public projects except the portfolio repo and profile README repo.
- [ ] Each card displays a correctly labelled date.
- [ ] Default sort is newest verified project first.
- [ ] Search and category filters continue to work after sorting.
- [ ] Every eligible public project has a dedicated page linked from Projects Lab.
- [ ] Featured projects on the main portfolio link to the same pages.
- [ ] Every page uses the shared neon-terminal theme and responsive layout.
- [ ] No fabricated dates, metrics, demos, or capabilities.
- [ ] No private repository information is exposed.
- [ ] Final deployment is verified against the final commit.

## Recommended division
**Main portfolio = who you are, your skills, verified experience, and 3–4 strongest projects. Projects Lab = every eligible public project, searchable and newest-first. Individual project pages = technical case study, evidence, architecture, setup, and links.**
