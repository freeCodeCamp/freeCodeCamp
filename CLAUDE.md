# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

This is a pnpm + Turborepo monorepo. Toolchain: Node `>=24`, pnpm `>=10`. Workspace packages:

- `api/` — Fastify 5 server (`@freecodecamp/api`), TypeBox schemas, Prisma + MongoDB. Entry: `src/server.ts` → `src/app.ts`. Routes in `src/routes/`, request lifecycle plugins in `src/plugins/` (auth, auth0, cookies, csrf, cors, mailer, growth-book, etc.). Three Prisma schemas under `prisma/`: main `schema.prisma`, plus `exam-environment.prisma` and `exam-creator.prisma`.
- `client/` — Gatsby 5 + React 18 SPA (`@freecodecamp/client`). Redux Toolkit + redux-saga + redux-observable. Tailwind CSS. Monaco editor + Sandpack for in-browser editors. i18n via `react-i18next`. `pages/`, `templates/`, `components/`, `redux/`, `client-only-routes/`.
- `curriculum/` — Challenge content + tooling (`@freecodecamp/curriculum`). Challenge markdown lives in `curriculum/challenges/<lang>/`; localized variants get linted by `lint-localized`. Build entry: `src/build-curriculum.ts`. Generated bundle: `curriculum/generated/curriculum.json`. Runs challenge tests via Puppeteer + jsdom.
- `e2e/` — Playwright tests (`@freecodecamp/e2e`). One `*.spec.ts` per feature at the root. Uses a stored auth state at `playwright/.auth/certified-user.json` produced by `global-setup.ts`. `webServer` block boots a Mailpit container automatically.
- `shared/` and `packages/shared/` — Cross-package types/utilities (`@freecodecamp/shared`). Always `setup` (build) before consumers can type-check.
- `packages/` — `eslint-config`, `challenge-builder`, `challenge-linter`, `shared`.
- `tools/` — Helper scripts: `challenge-helper-scripts` (create/insert/delete challenges), `challenge-parser`, `client-plugins/*`, `daily-challenges`, `scripts/seed*`, `crowdin`.
- `docker/` — `docker-compose.yml` (MongoDB + dev services) and `docker-compose.e2e.yml`.

Turbo orchestrates the graph: nearly every task `dependsOn: ["setup"]`, and `setup` depends on `^build`, so a fresh checkout must build `shared` (and curriculum tooling) before `api`/`client` will lint or test cleanly.

## Common commands

Run from the repo root unless noted. Turbo filter syntax is `-F=<pkg>`.

Setup / env:

- `pnpm install` — install all workspaces.
- `cp sample.env .env` — required env file (loaded by api, client tools, e2e). MongoDB at `MONGOHQ_URL=mongodb://127.0.0.1:27017/freecodecamp?directConnection=true`.
- `pnpm preseed` — runs `turbo setup` (builds shared deps, generates curriculum, creates client env files, copies browser scripts).
- `pnpm seed` — seed MongoDB with a demo user (variants: `seed:certified-user`, `seed:donating-user`, `seed:daily-challenges`, `seed:exams`, `seed:surveys`).

Develop:

- `pnpm develop` — run client and api together (turbo `develop`, persistent, no cache). Client on :8000 (Gatsby), api on :3000 by default.
- `pnpm develop:client` / `pnpm develop:api` — run one side. API uses `tsx watch` against `src/server.ts`; client uses `gatsby develop` with `--inspect=9230`.
- `pnpm start` — `turbo setup` then run api + serve built client in parallel.
- `pnpm serve:client` — `gatsby serve -p 8000` (after `pnpm build:client`).

Build:

- `pnpm build` — full build (turbo).
- `pnpm build:client` / `pnpm build:api` / `pnpm build:curriculum` — per-package.

Lint / format / type-check:

- `pnpm lint` — `turbo type-check && turbo lint && turbo lint-root` (this is the full CI lint pipeline; ESLint runs per-package with `--max-warnings 0`).
- `pnpm format` — runs eslint `--fix` then prettier write.
- `pnpm lint:prettier`, `pnpm lint:css` (stylelint), `pnpm knip` — additional checks.
- Per-package: `pnpm -F=@freecodecamp/api type-check` (or `lint`); same pattern for `@freecodecamp/client`, `@freecodecamp/curriculum`.

Tests (Vitest where applicable):

- `pnpm test` — turbo across all packages.
- `pnpm test-api` / `pnpm test-client` — per-side.
- Single Vitest file: `cd api && pnpm vitest run path/to/file.test.ts` (or `pnpm test:watch`, `pnpm test:ui`). Same shape inside `client/`.
- `pnpm test-curriculum-content` — generates per-block tests then runs them; `cd curriculum && pnpm test-tooling` for tooling-only tests.

E2E (Playwright):

- `pnpm playwright:install-build-tools` — once, installs browser binaries.
- `pnpm playwright:run` — full run (boots Mailpit via Docker, expects api+client already serving on `HOME_LOCATION` / `http://127.0.0.1:8000`).
- `pnpm playwright:watch` — UI mode.
- Single spec: `cd e2e && pnpm exec playwright test path/to/file.spec.ts` (add `--project=chromium`, `-g "test name"`, `--debug` as needed).

Curriculum authoring helpers (run from root):

- `pnpm create-new-project`, `pnpm create-new-language-block`, `pnpm create-new-quiz`.
- `pnpm rename-challenges`, `pnpm audit-challenges`.
- `pnpm i18n-sync` — sync i18n strings.

Prisma (api/):

- `cd api && pnpm prisma <cmd>` — runs prisma with the root `.env` loaded via `dotenv-cli`. `postinstall` already runs `prisma generate`.

## Conventions enforced by the repo

- Conventional commit titles for PRs: `<type>([scope]): <description>`. Valid types: `fix`, `feat`, `refactor`, `docs`, `test`. Common scopes: `curriculum`, `client`, `api`, `i18n`, `a11y`, `tools`. Title under ~50 chars; description must link issue with `Closes #XXXXX`.
- Test framework + location:
  - `api/` → Vitest, `*.test.ts` co-located with source.
  - `client/` → Vitest, `*.test.{ts,tsx}` co-located.
  - `e2e/` → Playwright, `*.spec.ts` at `e2e/` root.
- Functional code changes (bug fix or new feature) must add or update tests. Pure docs/config/type-only edits do not.
- pnpm overrides: `caniuse-lite` is pinned in `pnpm-workspace.yaml` so Renovate can refresh lockfiles — don't bump manually unless intentionally widening the pin. `minimumReleaseAge: 10080` (7 days) blocks too-fresh releases.
- ESLint is hoisted-out (`hoistPattern: ['!*eslint*']`) — each package owns its own ESLint install/config.
