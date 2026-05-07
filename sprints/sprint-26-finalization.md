# Sprint 26 — Certification finalization

**Goal:** Ship-prep. End-to-end acceptance test through every chapter, every workshop, every lab, every quiz. Crowdin sync prep so locale teams can pick up translations. CLAUDE.md updates so future contributors know the cert exists. Final flip from staging-quality to live.

**Prerequisites:** Sprints 01–25 all merged.

**Out of scope:** Authoring the optional certification exam (separate post-v1 sprint), translating into non-English locales (Crowdin handles that asynchronously after this sprint pushes the source strings).

---

## References

- `PHASER_CERTIFICATION_PLAN.md` §12 (implementation roadmap, Phase 7).
- `CLAUDE.md` at repo root (the contributor onboarding doc — gets the new section).
- `sprints/README.md` for the full block manifest.

---

## Deliverables

### 1. End-to-end acceptance suite

A new file `e2e/phaser-certification-acceptance.spec.ts` that runs through the entire certification top-to-bottom in a single test run. It:

1. Iterates every workshop block in the cert (10 chapters × ~1 workshop each + the existing space-shooter workshop).
2. For each workshop, loads the final step's reference solution, asserts the canvas mounts, waits for stable FPS for 3 seconds, captures a screenshot.
3. Iterates every cert-project lab (7 labs).
4. For each, pastes the canonical solution, asserts every hint passes.
5. Iterates every quiz block (10 quizzes).
6. For each, programmatically selects 18 correct answers and asserts pass; selects 17 correct and asserts fail.
7. Generates an `acceptance-report.md` with screenshots + pass/fail per check.

Run via `cd e2e && pnpm exec playwright test phaser-certification-acceptance.spec.ts --project=chromium`. Expected runtime: ~10 minutes. Document this in the test file header so contributors don't think it's hung.

### 2. CLAUDE.md update

Append a new section to the root `CLAUDE.md` documenting the Phaser certification:

```markdown
## Phaser certification

The `Certified Game Developer with Phaser` superblock lives at `curriculum/structure/superblocks/certified-game-developer-with-phaser.json`. Asset bundles are under `client/static/curriculum-assets/phaser/`. The full spec is in `PHASER_CERTIFICATION_PLAN.md` and the build sprints are in `sprints/`.

Conventions specific to this cert:

- Phaser is pinned to `3.80.1` via CDN in every workshop's seed HTML.
- Workshop blocks must set `disableLoopProtectTests: true` and `disableLoopProtectPreview: true` (Phaser's render loop trips fCC's loop-protect heuristics).
- Asset bundles are CC0 only; every file is credited in `client/static/curriculum-assets/phaser/LICENSE.md`.
- Every workshop has a Playwright spec under `e2e/phaser-<game-name>.spec.ts`.
- The full end-to-end acceptance test is `e2e/phaser-certification-acceptance.spec.ts`. Run before any cert-related PR merges to main.
```

### 3. Crowdin sync prep

Run `pnpm i18n-sync` to push English source strings to Crowdin. Document in the PR description:

- The list of new translation keys (every block title, every block intro, every challenge `--description--` body).
- Estimated word count.
- Recommended target locales for first translation pass (Spanish, Portuguese, Chinese, Japanese, Ukrainian — per `PHASER_CERTIFICATION_PLAN.md` §14).

Do not edit any non-English `intro.json` files in this sprint. Crowdin owns the translation flow.

### 4. Knip + dependency hygiene

Run `pnpm knip` to confirm no orphaned files were added across the 25 prior sprints. Address any flagged orphans (most likely candidates: unused asset entries, unused i18n keys, unused JSON block files that were drafted but never wired into the superblock).

### 5. Performance budget audit

Boot the cert page on a fresh browser. Measure:

- Initial JS bundle delta vs `main` before Sprint 01. Target: <500 KB increase.
- Total `client/static/curriculum-assets/phaser/` size. Target: <5 MB (per the §10.1 budget).
- Cert landing-page Lighthouse score: ≥90 across performance, accessibility, best practices.

If any budget is violated, document the deviation and either address it in this sprint (small overruns) or open a follow-up issue (large overruns).

### 6. Final cert claim flow verification

Use `pnpm seed:certified-user` then manually mark all 7 cert-project labs as completed. Visit the cert claim page. Verify:

- The "Certified Game Developer with Phaser" cert is offered.
- Claiming it generates a verifiable cert page at `/certification/<username>/certified-game-developer-with-phaser`.
- The cert page renders with the correct title, learner name, completion date.
- Sharing links work.

If any flow breaks, either fix it in this sprint or open a blocker issue against the cert claim subsystem before the final flip.

### 7. Documentation pass

Update `PHASER_CERTIFICATION_PLAN.md` §15 (Open Decisions) — strike through every decision that's now resolved through the implementation, with a one-line note on what was chosen and why.

Update `sprints/README.md` — mark every sprint with status: `[shipped]` next to its row.

### 8. Announcement-ready artifacts

Generate (do not publish — the maintainers handle publishing) the following materials, saved under `docs/phaser-cert-launch/`:

- `announcement-blog.md` — a draft for freeCodeCamp News announcing the cert.
- `social-thread.md` — Twitter/X + Mastodon thread teaser.
- `screenshot-pack/` — 12 screenshots of the most visually-distinctive workshops at their final state.

These are drafts. The freeCodeCamp comms team owns publishing.

---

## Step-by-step execution plan

1. Branch from latest `main` after Sprint 25 merges: `git checkout -b feat/phaser-cert-finalize`.
2. Author `e2e/phaser-certification-acceptance.spec.ts` and run it; iterate until it produces a clean acceptance report.
3. Update `CLAUDE.md` with the new section.
4. Run `pnpm i18n-sync`; capture the output for the PR description.
5. Run `pnpm knip`; address orphans.
6. Run the performance budget audit; capture results.
7. Run the cert claim flow manually; capture screenshots.
8. Update `PHASER_CERTIFICATION_PLAN.md` and `sprints/README.md` per Deliverable 7.
9. Generate the announcement artifacts under `docs/phaser-cert-launch/`.
10. Run the full repo gate (see Acceptance criteria below).
11. Open the PR.

---

## Acceptance criteria

```bash
# Full CI parity
pnpm lint
pnpm test-curriculum-content
cd curriculum && pnpm test-tooling && cd ..
pnpm test
pnpm knip

# Full Playwright run
cd e2e && pnpm exec playwright test --project=chromium && cd ..
cd e2e && pnpm exec playwright test phaser-certification-acceptance.spec.ts --project=chromium && cd ..
cd e2e && pnpm exec playwright test phaser-certification-acceptance.spec.ts --project='Mobile Safari' && cd ..

# Smoke
pnpm develop
# Click into every chapter; confirm none flagged "Coming soon".
# Pass at least one quiz manually to confirm the gate.
# Claim the cert with the seeded certified-user; confirm the cert page renders.
```

Attach to the PR:

- The `acceptance-report.md` produced by the e2e suite.
- A screenshot of the cert claim page recognizing the cert.
- A screenshot of the rendered claimed cert.
- The output of `pnpm i18n-sync` showing keys pushed to Crowdin.
- The Lighthouse report (PNG or PDF).

---

## Definition of done

- [ ] End-to-end acceptance suite green across desktop and mobile presets.
- [ ] CLAUDE.md updated.
- [ ] Crowdin sync executed.
- [ ] Knip clean.
- [ ] Performance budgets met (or deviations documented + accepted).
- [ ] Cert claim flow works end-to-end.
- [ ] Plan + sprints README marked complete.
- [ ] Launch artifacts staged.
- [ ] Final cert page published at `/learn/certified-game-developer-with-phaser/` with all 10 chapters live and 7 cert-project modules accepting submissions.
- [ ] PR title: `feat(curriculum): finalize Phaser certification — acceptance, docs, launch prep`.

---

## After this sprint

The certification ships. From here:

- **Localization** — Crowdin community translates English strings. Maintainers merge locale PRs as they arrive.
- **Exam authoring** — Optional follow-up sprint to author the 60-question certification exam under the `certified-game-developer-with-phaser-exam` chapter (currently `comingSoon: true` from Sprint 01). This is a separate effort with its own PR.
- **Phaser version bumps** — Re-audit yearly. When `Phaser 4.x` stabilizes, scope a dedicated migration sprint.
- **Showcase** — freeCodeCamp News articles per workshop, learner-game showcase thread on the forum.

The build is done. Go ship it.
