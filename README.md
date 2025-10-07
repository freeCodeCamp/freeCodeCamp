# freeCodeCamp (Community Fork by girishlade111)

[![freeCodeCamp Social Banner](https://cdn.freecodecamp.org/platform/universal/fcc_banner_new.png)](https://www.freecodecamp.org/)

Note: This fork is maintained by contributors in India to experiment, learn, and propose improvements upstream. It mirrors the upstream architecture while providing an easy on-ramp for new contributors.

- PRs welcome • First-timers friendly • Automated setup • Active Discord support
- Badges: PRs welcome, first-timers-only, Open Source Helpers, LFX Health Score

## Purpose and Scope
freeCodeCamp is an open-source learning platform with a free, self-paced curriculum covering full‑stack web development and machine learning. This fork preserves upstream structure while adding contribution scaffolding and documentation tailored for new contributors.

Core goals of this fork:
- Lower the barrier to local setup on typical laptops with Node.js, Docker, and pnpm
- Provide hands-on contribution pathways (documentation, curriculum, UI, API)
- Keep changes non-breaking and easy to upstream as PRs

## Tech Stack Overview
- Monorepo: pnpm workspaces
- Languages: TypeScript (primary), JavaScript, CSS
- App Areas:
  - client/ – Next.js/React client app and learning UI
  - api/ – Node.js/TypeScript services, Prisma, exam and certification flows
  - curriculum/ – Source for lessons, projects, test definitions
  - shared/ – Cross-cutting packages and utilities
  - tools/ – Scripts and helpers (build, metadata, linting)
  - e2e/ – Playwright end-to-end tests and test utilities
- Tooling: ESLint (flat config), Prettier, Stylelint, Husky, Vitest, Playwright
- Package manager: pnpm
- Node: v22 (see .nvmrc)
- Dev containers/Docker: .devcontainer/, docker/

## Getting Started (Local Development)
Prerequisites:
- Node.js 22.x (nvm use recommended)
- pnpm >= 9
- Docker (for optional services and e2e)

1) Clone and install
- git clone https://github.com/girishlade111/freeCodeCamp.git
- cd freeCodeCamp
- nvm use (or install Node 22 per .nvmrc)
- corepack enable || npm i -g pnpm
- pnpm install

2) Environment
- cp sample.env .env 
- Adjust variables as needed (ports, URLs, DB creds for local)

3) Start services
- pnpm dev  # common pattern; see client/api package docs for exact scripts
- For Docker-based stack: docker compose up -d (see docker/ and .gitpod.yml references)

4) Access the app
- Client dev server will print a local URL (commonly http://localhost:3000)
- API service will expose its port per env (commonly http://localhost:3001)

Tips:
- If using VS Code, enable the dev container (.devcontainer) for reproducible setup
- Husky and lint-staged run on commit; fix via pnpm lint:fix when available

## Repository Structure (High Level)
- .github/ – CI, workflows
- api/ – server logic, Prisma, exam attempt logic
- client/ – curriculum UI, workshops, certification flows
- curriculum/ – challenge markdown, tests, meta
- e2e/ – Playwright config and specs
- shared/ – shared TS packages and constants
- tools/ – scripts (e.g., metadata maintenance)

## Common Scripts (indicative)
- pnpm -w lint      # run linters across workspace
- pnpm -w test      # run unit tests
- pnpm -w build     # build workspace packages
- pnpm -w e2e       # run Playwright e2e (ensure services are up)

Check individual package.json files for authoritative scripts.

## Contribution Guidelines (New Contributor Friendly)
We welcome small, focused contributions. Good first issues include:
- Docs: clarify setup steps, add FAQs, improve README sections
- Curriculum: grammar fixes, minor test clarifications, metadata improvements
- UI: accessibility polish, copy tweaks, non-breaking styling fixes
- Tools: lint rules, small script improvements, dev ergonomics

Workflow:
- Fork this repo and create a branch from main (e.g., chore/docs-improvements)
- Keep changes atomic and non-breaking
- Run linters/tests locally before committing
- Use Conventional Commits for messages:
  - docs:, chore:, fix:, feat:, refactor:, test:
- Open a Pull Request with context, screenshots (if UI), and test notes

Code Style:
- TypeScript strictness preferred for new code
- Prettier-managed formatting; do not reformat unrelated files
- Respect existing ESLint and Stylelint configs

Commit Hygiene:
- One logical change per commit/PR
- Include rationale in PR description and link to related issue if any

Review Process:
- Maintainers review for scope, clarity, tests, and alignment with upstream
- Requested changes are common—please iterate promptly

## Certifications and Learning Path
The platform includes 12 core certifications. Each certification entails ~300 hours and 5 required projects backed by automated tests. Examples include:
- Responsive Web Design: HTML, CSS fundamentals via project-based learning
- JavaScript algorithms and data structures, back end, quality assurance, ML/AI tracks (see the Learn platform for the full list)

Running Project Tests for Certifications:
- Many projects load a test bundle via CDN to verify user stories
- Example bundle: https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js

Academic Honesty:
- Certifications may be revoked for plagiarism; see freeCodeCamp Academic Honesty Policy

## Platform, Build, and Deployment Notes
- CI uploads client artifacts and validates builds (see .github workflows)
- Playwright is used for end-to-end testing
- Docker Compose is consolidated for local services
- Node 22 standardizes runtime in CI and dev containers

## FAQ
- Q: pnpm errors about peer deps?
  - A: See .npmrc—strict peers are disabled; try pnpm install --no-frozen-lockfile
- Q: Node version mismatch?
  - A: Run nvm use, or install Node 22.x per .nvmrc
- Q: Tests fail locally but pass in CI?
  - A: Ensure Docker services are running and env mirrors sample.env
- Q: Where do I start contributing?
  - A: Try documentation fixes, small curriculum clarifications, or tooling docstrings

## Resources
- Main site: https://www.freecodecamp.org/
- Contribute guide: https://contribute.freecodecamp.org/
- Discord: https://discord.gg/PRyKn3Vbay
- Academic Honesty: https://www.freecodecamp.org/news/academic-honesty-policy/
- Test bundle: https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js

## License
BSD-3-Clause (see LICENSE.md)
