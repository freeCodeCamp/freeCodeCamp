# Sprint 01 — Certification shell & migration

**Goal:** Stand up the new `certified-game-developer-with-phaser` superblock, register it in `curriculum.json`, migrate the two existing Phaser blocks into Chapter 1, and wire i18n. After this sprint the certification is visible (gated `comingSoon: true` on chapters 2–10) with one runnable workshop and one cert-claim lab.

**Prerequisites:** None. The current branch already contains the merged space-shooter workshop and lab.

**Out of scope:** Authoring any new chapter content. Touching client/redux beyond what's required to recognize the new superblock dashedName. See `sprints/README.md` §S9.

---

## References (read first)

- `PHASER_CERTIFICATION_PLAN.md` §5 (target superblock JSON shape) and §11 (file-system & ID layout).
- `sprints/README.md` §S2–S10 (all conventions).
- Existing v9 superblocks for shape parity:
  - `curriculum/structure/superblocks/javascript-v9.json`
  - `curriculum/structure/superblocks/responsive-web-design-v9.json`
  - `curriculum/structure/superblocks/full-stack-developer-v9.json` (look here for the `comingSoon` exam pattern).
- `curriculum/structure/curriculum.json` (top-level superblock + cert registry).
- `client/i18n/locales/english/intro.json` (look at the `learn-game-development-by-building-a-space-shooter-with-phaser` entry).

---

## Deliverables

### 1. New superblock JSON

`curriculum/structure/superblocks/certified-game-developer-with-phaser.json` — contains all 10 chapters' `dashedName`s. Chapters 2–10 are stubs with `comingSoon: true`. Chapter 1 contains the modules with the existing migrated blocks. Final chapter is the optional exam stub. Use the exact shape below:

```json
{
  "chapters": [
    {
      "dashedName": "phaser-foundations",
      "modules": [
        {
          "dashedName": "phaser-game-loop-and-scenes",
          "comingSoon": true,
          "blocks": []
        },
        {
          "dashedName": "arcade-physics-and-input-basics",
          "blocks": [
            "learn-game-development-by-building-a-space-shooter-with-phaser",
            "lab-space-shooter-with-phaser"
          ]
        },
        {
          "moduleType": "cert-project",
          "dashedName": "lab-space-shooter-with-phaser",
          "blocks": ["lab-space-shooter-with-phaser"]
        }
      ]
    },
    {
      "dashedName": "sprites-and-animation",
      "comingSoon": true,
      "modules": []
    },
    {
      "dashedName": "player-control-and-input",
      "comingSoon": true,
      "modules": []
    },
    {
      "dashedName": "arcade-physics-deep-dive",
      "comingSoon": true,
      "modules": []
    },
    {
      "dashedName": "tilemaps-and-level-design",
      "comingSoon": true,
      "modules": []
    },
    {
      "dashedName": "camera-worlds-and-parallax",
      "comingSoon": true,
      "modules": []
    },
    { "dashedName": "audio-and-game-feel", "comingSoon": true, "modules": [] },
    {
      "dashedName": "tweens-fx-and-matter-physics",
      "comingSoon": true,
      "modules": []
    },
    {
      "dashedName": "ai-state-machines-and-game-systems",
      "comingSoon": true,
      "modules": []
    },
    {
      "dashedName": "procgen-multiplayer-and-deployment",
      "comingSoon": true,
      "modules": []
    },
    {
      "chapterType": "exam",
      "dashedName": "certified-game-developer-with-phaser-exam",
      "comingSoon": true,
      "modules": [
        {
          "dashedName": "certified-game-developer-with-phaser-exam",
          "comingSoon": true,
          "blocks": ["exam-certified-game-developer-with-phaser"]
        }
      ]
    }
  ]
}
```

The `phaser-foundations` chapter has the `phaser-game-loop-and-scenes` module deliberately empty + `comingSoon: true` because Sprint 02 fills it in. The `arcade-physics-and-input-basics` module is fully populated using the migrated existing blocks.

### 2. Update `curriculum/structure/curriculum.json`

Add `certified-game-developer-with-phaser` to **both** the `superblocks` array (insert after `learn-dynamic-programming-in-python` at the end) and the `certifications` array (insert after the `full-stack-developer-v9` entry). Preserve existing array order; append-only.

### 3. Migrate existing blocks out of JS-DSA-22

Edit `curriculum/structure/superblocks/javascript-algorithms-and-data-structures-22.json` and remove these two array entries:

- `"learn-game-development-by-building-a-space-shooter-with-phaser"`
- `"lab-space-shooter-with-phaser"`

Preserve the order of all other blocks. Do not rename anything else.

### 4. i18n entries

Edit `client/i18n/locales/english/intro.json`. Add a new top-level entry under the existing intro structure (mirror the shape used by `responsive-web-design-v9`):

```json
"certified-game-developer-with-phaser": {
  "title": "Certified Game Developer with Phaser",
  "intro": [
    "Phaser is the most popular open-source 2D game framework on the web. This certification takes you from your first scene to shipping a polished, mobile-ready game.",
    "You will build a portfolio of complete games — top-down shooter, brick breaker, side-scrolling platformer, dungeon explorer, endless runner, match-3 puzzle, top-down RPG, roguelike, and a 2-player party game — while learning every major Phaser system: scenes, sprites, animation, input, arcade physics, tilemaps, cameras, audio, tweens, Matter physics, AI, procedural generation, multiplayer, and deployment."
  ],
  "blocks": {}
}
```

The migrated block titles (`learn-game-development-by-building-a-space-shooter-with-phaser` and `lab-space-shooter-with-phaser`) already have entries elsewhere in `intro.json`. Leave them where they are — the client resolves block titles independent of which superblock currently owns them.

### 5. Asset folder scaffolding

Create the empty asset directory tree (with `LICENSE.md` placeholder so git tracks it):

```
client/static/curriculum-assets/phaser/
client/static/curriculum-assets/phaser/spritesheets/.gitkeep
client/static/curriculum-assets/phaser/tilemaps/.gitkeep
client/static/curriculum-assets/phaser/audio/.gitkeep
client/static/curriculum-assets/phaser/ui/.gitkeep
client/static/curriculum-assets/phaser/LICENSE.md
```

`LICENSE.md` content:

```markdown
# Phaser Certification Asset Licenses

All assets in this directory and its subdirectories are CC0 1.0 Universal (Public Domain Dedication) unless individually noted otherwise.

| Asset path                                              | Source | Author | License |
| ------------------------------------------------------- | ------ | ------ | ------- |
| _(populated as assets are added in subsequent sprints)_ |        |        |         |
```

### 6. Client wiring (minimal)

The client resolves new superblocks dynamically from `curriculum.json` for the most part. Verify the following touch-points work without code changes by booting the dev server (see Acceptance Criteria). If any fails, surface it as an open question in the PR — do not patch the client outside the established pattern. Likely-affected files (read-only audit):

- `client/src/redux/index.ts` — superblock list aggregation.
- `client/src/templates/Introduction/super-block-intro.tsx` — superblock landing page.
- `client/src/utils/index.ts` — any cert-name lookups.

If the existing v9 cert pattern (`responsive-web-design-v9`) renders without per-cert code, this sprint requires no client changes. If it doesn't, add the new dashedName to the same lookup tables, mirroring the most recently added cert. Document everything you touched in the PR description.

---

## Step-by-step execution plan

1. `git checkout -b feat/phaser-cert-shell` from latest `main`.
2. Create the new superblock JSON (Deliverable 1) — copy the shape exactly.
3. Edit `curriculum/structure/curriculum.json` (Deliverable 2) — append the dashedName to both `superblocks` and `certifications`.
4. Edit JS-DSA-22 superblock (Deliverable 3) — remove the two block names.
5. Edit `client/i18n/locales/english/intro.json` (Deliverable 4) — add the new superblock entry.
6. Create the asset directory tree (Deliverable 5) — `mkdir -p` + `.gitkeep` files + `LICENSE.md`.
7. Audit client for hardcoded cert lists (Deliverable 6). Add the new dashedName to any lookup that whitelists per-cert; otherwise touch nothing.
8. Run the verification gate (see below).
9. Open the PR per `sprints/README.md` §S10.

---

## Acceptance criteria

All of these must pass:

```bash
# 1. Lint + type-check (CI parity)
pnpm lint

# 2. Curriculum content tests
pnpm test-curriculum-content

# 3. Curriculum tooling tests
cd curriculum && pnpm test-tooling && cd ..

# 4. The migrated workshop's Playwright spec still passes
cd e2e && pnpm exec playwright test phaser-space-shooter.spec.ts --project=chromium && cd ..

# 5. Manual: dev server boots and renders the new cert page
pnpm develop
# Visit http://localhost:8000/learn/certified-game-developer-with-phaser/
# Expect: superblock landing page renders with one populated chapter ("Foundations of Phaser Game Development") containing the existing space-shooter workshop and lab; chapters 2–10 visible but gated as "Coming soon".
```

Capture a screenshot of the new superblock landing page and attach it to the PR.

Sanity check: `pnpm exec rg --no-heading -F "learn-game-development-by-building-a-space-shooter-with-phaser" curriculum/structure/superblocks/` must show the block listed in `certified-game-developer-with-phaser.json` and **not** in `javascript-algorithms-and-data-structures-22.json`.

---

## Definition of done (sprint-specific)

In addition to `sprints/README.md` §S10:

- [ ] New superblock visible at `/learn/certified-game-developer-with-phaser/`.
- [ ] New superblock listed in `curriculum.json` under both `superblocks` and `certifications`.
- [ ] Existing space-shooter workshop and lab no longer appear in the JS-DSA-22 superblock landing page.
- [ ] Existing space-shooter workshop and lab work end-to-end inside the new cert (Playwright spec green).
- [ ] No translations touched. No dependency bumps. No edits to existing space-shooter challenge markdown.
- [ ] PR description titled `feat(curriculum): add Phaser certification shell` with summary + verification evidence.

---

## Migration safety note

Existing learners may have `learn-game-development-by-building-a-space-shooter-with-phaser` marked complete inside JS-DSA-22. Their progress is keyed by block dashedName, not superblock, so completion carries over automatically when the block reappears in the new cert. Verify this by:

1. Seeding a certified-user with the existing space-shooter block completed (use `pnpm seed:certified-user`).
2. Booting the dev server.
3. Navigating to the new cert page; confirming the migrated block shows as "Completed" in the UI.

If completion does not carry over, surface this in the PR — it likely means an additional client-side fix is needed and the sprint is blocked pending that decision.
