# Phaser Certification — Sprint Workbook

This folder is the executable build plan for the **Certified Game Developer with Phaser** certification. Each `sprint-NN-*.md` is a complete prompt you can hand to an AI coding agent (or a human contributor) and have them open one merge-ready PR.

The full design rationale lives in [`PHASER_CERTIFICATION_PLAN.md`](../PHASER_CERTIFICATION_PLAN.md) at the repo root. Read it once before starting Sprint 01. After that, each sprint is self-contained.

---

## Sprint index

Sprints are numbered in execution order. Skipping is not safe — later sprints assume earlier sprints' artifacts exist.

| #   | File                                       | Output                                                                                                                   | Approx PR size |
| --- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | -------------- |
| 01  | `sprint-01-cert-shell.md`                  | New superblock + curriculum.json wiring + migrate existing space-shooter blocks                                          | M              |
| 02  | `sprint-02-ch2-sprite-sheets.md`           | Ch2 Module 1 — sprite-sheet lectures + animated character explorer workshop + sprite-sheet debugger lab + asset bundle 1 | L              |
| 03  | `sprint-03-ch2-graphics-and-tinting.md`    | Ch2 Module 2 — depth/tinting/graphics + particle-pickup workshop + ch2 review/quiz                                       | M              |
| 04  | `sprint-04-ch3-pointer-input.md`           | Ch3 Module 1 — pointer/touch lectures + touch-paddle workshop                                                            | M              |
| 05  | `sprint-05-ch3-brick-breaker-workshop.md`  | Ch3 Module 2 — keyboard map lectures + 50-step brick breaker workshop                                                    | L              |
| 06  | `sprint-06-ch3-brick-breaker-cert-lab.md`  | Ch3 cert lab `lab-brick-breaker` + ch3 review/quiz/finalize                                                              | M              |
| 07  | `sprint-07-ch4-gravity-drag-bounce.md`     | Ch4 Module 1 — gravity/drag/bounce lectures + bouncing-ball sandbox workshop                                             | M              |
| 08  | `sprint-08-ch4-platformer-workshop.md`     | Ch4 Module 2 — platformer physics lectures + 55-step platformer workshop                                                 | L              |
| 09  | `sprint-09-ch4-platformer-cert-lab.md`     | Ch4 cert lab `lab-platformer-level-1-1` + ch4 review/quiz/finalize                                                       | M              |
| 10  | `sprint-10-ch5-tilemap-fundamentals.md`    | Ch5 Module 1 — tilemap lectures + first-tile-room workshop + tileset assets bundle 2                                     | L              |
| 11  | `sprint-11-ch5-dungeon-explorer.md`        | Ch5 Module 2 — collision/object-layer lectures + dungeon explorer workshop + ch5 finalize                                | L              |
| 12  | `sprint-12-ch6-camera-fundamentals.md`     | Ch6 Module 1 — camera lectures + camera playground workshop                                                              | M              |
| 13  | `sprint-13-ch6-endless-runner-workshop.md` | Ch6 Module 2 — multi-camera/parallax lectures + 45-step endless runner workshop                                          | L              |
| 14  | `sprint-14-ch6-endless-runner-cert-lab.md` | Ch6 cert lab `lab-endless-runner` + ch6 review/quiz/finalize                                                             | M              |
| 15  | `sprint-15-ch7-audio-foundations.md`       | Ch7 Module 1 — audio lectures + soundboard workshop + audio asset bundle 3                                               | L              |
| 16  | `sprint-16-ch7-game-feel-juice.md`         | Ch7 Module 2 — juice lectures + arcade brawler workshop + ch7 finalize                                                   | L              |
| 17  | `sprint-17-ch8-tweens-and-match3.md`       | Ch8 Module 1 — tween/post-fx lectures + 50-step match-3 workshop                                                         | L              |
| 18  | `sprint-18-ch8-matter-slingshot.md`        | Ch8 Module 2 — Matter physics lectures + slingshot workshop                                                              | L              |
| 19  | `sprint-19-ch8-match3-cert-lab.md`         | Ch8 cert lab `lab-match-3` + ch8 review/quiz/finalize                                                                    | M              |
| 20  | `sprint-20-ch9-ai-stealth.md`              | Ch9 Module 1 — FSM/A\*/line-of-sight lectures + stealth workshop                                                         | L              |
| 21  | `sprint-21-ch9-rpg-slice.md`               | Ch9 Module 2 — UI scene/dialogue lectures + RPG slice workshop + ch9 finalize                                            | L              |
| 22  | `sprint-22-ch10-procgen-roguelike.md`      | Ch10 Module 1 — procgen lectures + roguelike workshop                                                                    | L              |
| 23  | `sprint-23-ch10-multiplayer.md`            | Ch10 Module 2 — multiplayer lectures + 2-player party game workshop                                                      | L              |
| 24  | `sprint-24-ch10-deployment.md`             | Ch10 Module 3 — scaling/deployment lectures + optimize-and-ship workshop                                                 | M              |
| 25  | `sprint-25-ch10-cert-labs.md`              | Ch10 cert labs `lab-roguelike-dungeon` + `lab-multiplayer-party-game` + ch10 finalize                                    | L              |
| 26  | `sprint-26-finalization.md`                | End-to-end cert acceptance test, Crowdin sync prep, CLAUDE.md updates, flip cert from `comingSoon` to live               | S              |

PR-size key: **S** ≈ <500 LOC, **M** ≈ 500–2,000 LOC, **L** ≈ >2,000 LOC (mostly challenge markdown).

---

## Shared conventions

Every sprint relies on these. Read once, then sprints will reference back here.

### S1. Phaser pinning

Every workshop step's seed HTML loads Phaser via:

```html
<script src="https://cdn.jsdelivr.net/npm/phaser@3.80.1/dist/phaser.min.js"></script>
```

Do not bump version inside an individual sprint. A version bump is its own dedicated sprint, post-v1.

### S2. Block ID partitioning

The existing `learn-game-development-by-building-a-space-shooter-with-phaser` workshop uses the `66faa10000000000000000xx` range. The certification reserves these prefixes:

| Range                   | Owner                                             |
| ----------------------- | ------------------------------------------------- |
| `66faa1...`             | Chapter 1 (existing)                              |
| `66faa2...`             | Chapter 2                                         |
| `66faa3...`             | Chapter 3                                         |
| `66faa4...`             | Chapter 4                                         |
| `66faa5...`             | Chapter 5                                         |
| `66faa6...`             | Chapter 6                                         |
| `66faa7...`             | Chapter 7                                         |
| `66faa8...`             | Chapter 8                                         |
| `66faa9...`             | Chapter 9                                         |
| `66faaa...`             | Chapter 10                                        |
| `66faab...`             | Capstone / cert-project labs                      |
| `66faac...`             | Quizzes (10 quizzes × 1 ID each, one per chapter) |
| `66faad...`             | Reviews (10 reviews × 1 ID each)                  |
| `66faae...` `66faaf...` | Lectures (one ID per lecture challenge)           |

Each sprint declares its exact ID range up front. Use sequential hex within that range; no gaps unless a step is deliberately reserved for future insertion.

### S3. File-system layout

```
curriculum/
  structure/
    superblocks/certified-game-developer-with-phaser.json   (created in Sprint 01)
    blocks/<dashedName>.json                                (one per block)
  challenges/
    english/
      blocks/<dashedName>/<id>.md                           (one per challenge)
client/
  static/
    curriculum-assets/
      phaser/
        spritesheets/  (Sprint 02)
        tilemaps/      (Sprint 10)
        audio/         (Sprint 15)
        ui/            (Sprint 21)
        LICENSE.md     (Sprint 02 — appended in each asset sprint)
e2e/
  phaser-<game-name>.spec.ts                                (one per workshop)
```

### S4. Block JSON shapes (paste-ready templates)

**Lecture block** (`blockLayout: "challenge-list"`, individual challenges use `challengeType: 19`):

```json
{
  "blockLabel": "lecture",
  "blockLayout": "challenge-list",
  "isUpcomingChange": false,
  "dashedName": "lecture-<topic>",
  "challengeOrder": [{ "id": "<24-hex>", "title": "<Question or Concept>" }],
  "helpCategory": "JavaScript"
}
```

**Workshop block** (multifile, step-by-step, `challengeType: 0`):

```json
{
  "blockLabel": "workshop",
  "blockLayout": "challenge-grid",
  "isUpcomingChange": false,
  "usesMultifileEditor": true,
  "hasEditableBoundaries": true,
  "disableLoopProtectTests": true,
  "disableLoopProtectPreview": true,
  "dashedName": "workshop-<game-name>",
  "challengeOrder": [{ "id": "<24-hex>", "title": "Step 1" }],
  "helpCategory": "JavaScript"
}
```

The `disableLoopProtect*` flags match the existing `learn-game-development-by-building-a-space-shooter-with-phaser.json`; Phaser's render loop trips fCC's loop-protect heuristics without them.

**Lab block** (single capstone, `challengeType: 26`):

```json
{
  "blockLabel": "lab",
  "blockLayout": "link",
  "isUpcomingChange": false,
  "usesMultifileEditor": true,
  "dashedName": "lab-<game-name>",
  "challengeOrder": [{ "id": "<24-hex>", "title": "Build a <Game Name>" }],
  "helpCategory": "JavaScript"
}
```

**Review block** (single page, `challengeType: 31`):

```json
{
  "blockLabel": "review",
  "blockLayout": "link",
  "isUpcomingChange": false,
  "dashedName": "review-<topic>",
  "challengeOrder": [{ "id": "<24-hex>", "title": "<Topic> Review" }],
  "helpCategory": "JavaScript"
}
```

**Quiz block** (20 questions, `challengeType: 8`, must answer 18 correctly):

```json
{
  "blockLabel": "quiz",
  "blockLayout": "link",
  "isUpcomingChange": false,
  "dashedName": "quiz-<topic>",
  "challengeOrder": [{ "id": "<24-hex>", "title": "<Topic> Quiz" }],
  "helpCategory": "JavaScript"
}
```

### S5. Challenge file conventions

- Workshop step front-matter: `id`, `title`, `challengeType: 0`, `dashedName`, optional `demoType: onLoad` for step-1.
- Lecture front-matter: `challengeType: 19`. Body uses `# --interactive--`, `:::interactive_editor` blocks for runnable snippets, ends with `# --questions--` containing 2–3 multiple-choice questions, each with `## --video-solution--`.
- Lab front-matter: `challengeType: 26`. Body has `# --description--` (numbered user stories), `# --hints--` (regex assertions), `# --seed--` (empty `--seed-contents--`), `# --solutions--` (working reference).
- Review front-matter: `challengeType: 31`. Body uses `# --interactive--` with `:::interactive_editor` blocks. No questions section.
- Quiz front-matter: `challengeType: 8`. Body has `# --description--` ("To pass the quiz, you must correctly answer at least 18 of the 20 questions below.") and `# --quizzes--` containing 20 `### --question--` entries with `#### --distractors--` and `#### --answer--`.

For each format, the canonical reference in the existing repo is:

| Format        | Reference file                                                                                                                                                                                                    |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Workshop step | `curriculum/challenges/english/blocks/learn-game-development-by-building-a-space-shooter-with-phaser/66faa1000000000000000003.md`                                                                                 |
| Lab           | `curriculum/challenges/english/blocks/lab-space-shooter-with-phaser/66faa20000000000000000ab.md` (note: this ID is in the `66faa2` range and predates this plan; new Ch2 IDs start at `66faa20000000000000000ac`) |
| Lecture       | `curriculum/challenges/english/blocks/lecture-understanding-how-to-work-with-classes-in-javascript/6733affc29df1304e2c97e88.md`                                                                                   |
| Quiz          | `curriculum/challenges/english/blocks/quiz-javascript-classes/67358ac128957c865dcf3ddf.md`                                                                                                                        |
| Review        | `curriculum/challenges/english/blocks/review-javascript-classes/6723d13d756751caf871d59c.md`                                                                                                                      |

> **Heads-up:** the existing lab `lab-space-shooter-with-phaser` already burns the ID `66faa20000000000000000ab`. New Ch2 sprints must skip past it (start at `66faa20000000000000000ac`).

### S6. Helper scripts

Run from repo root unless noted.

| Need                                               | Command                                                                          |
| -------------------------------------------------- | -------------------------------------------------------------------------------- |
| Create a new workshop project (block + first step) | `pnpm create-new-project`                                                        |
| Append a step to a workshop                        | `pnpm tsx tools/challenge-helper-scripts/create-next-step.ts <dashedName>`       |
| Insert a step at a given position                  | `pnpm tsx tools/challenge-helper-scripts/insert-step.ts <dashedName> <position>` |
| Reorder step titles after edits                    | `pnpm tsx tools/challenge-helper-scripts/update-step-titles.ts <dashedName>`     |
| Rename a block dashedName                          | `pnpm tsx tools/challenge-helper-scripts/rename-block.ts <oldName> <newName>`    |
| Create a quiz block + first challenge              | `pnpm create-new-quiz`                                                           |
| Delete a challenge                                 | `pnpm tsx tools/challenge-helper-scripts/delete-challenge.ts <id>`               |

For lecture and review blocks there is no helper today. Author them by hand following the references in §S5. **Do not** write a new helper script in any sprint other than one explicitly chartered for tooling.

### S7. i18n

Every block's title and intro need an entry in `client/i18n/locales/english/intro.json` under the new superblock key `certified-game-developer-with-phaser`. Pattern:

```json
"certified-game-developer-with-phaser": {
  "title": "Certified Game Developer with Phaser",
  "intro": ["…", "…"],
  "blocks": {
    "<block-dashedName>": { "title": "…", "intro": ["…"] }
  }
}
```

Sprints touch only English. Translations land later via `pnpm i18n-sync` (Sprint 26).

### S8. Verification matrix

Every sprint must pass these gates before opening a PR. Do not skip any.

```bash
# Curriculum content tests (regenerates per-block tests, runs them)
pnpm test-curriculum-content

# Curriculum tooling tests
cd curriculum && pnpm test-tooling && cd ..

# Type-check + lint everything (CI parity)
pnpm lint

# Playwright spec for any workshop the sprint added or modified
pnpm playwright:install-build-tools  # once, if not done
cd e2e && pnpm exec playwright test phaser-<workshop-name>.spec.ts --project=chromium && cd ..

# Smoke: dev server boots, the new block(s) render without runtime errors
pnpm develop  # then visit /learn/certified-game-developer-with-phaser/...
```

For any sprint adding markdown challenges, run `pnpm format` once at the end to normalize.

### S9. Out-of-scope guardrails (apply to every sprint)

These are forbidden in any sprint unless that sprint's charter explicitly permits them:

- Touching `package.json` / `pnpm-workspace.yaml` / `renovate.json`.
- Bumping any dependency version, including Phaser.
- Editing `client/src/templates/` or `client/src/redux/` outside what's required to wire the new superblock dashedName.
- Editing the existing `learn-game-development-by-building-a-space-shooter-with-phaser` and `lab-space-shooter-with-phaser` block contents (Sprint 01 only moves them; nobody edits them).
- Translating any string into a non-English locale (Crowdin pipeline owns that).
- Editing other certifications' superblock JSONs.

If a sprint encounters one of these as a real blocker, stop and surface it; do not work around silently.

### S10. Definition of done (every sprint)

Before opening the PR:

1. All files listed in the sprint's "Deliverables" section exist with the correct content.
2. `pnpm lint` passes with zero warnings.
3. `pnpm test-curriculum-content` passes for the affected blocks.
4. Any new workshop has a Playwright spec under `e2e/` that runs green against the reference solution.
5. The PR description follows the repo convention (`<type>([scope]): <description>`, links the issue with `Closes #XXXXX`).
6. Screenshots / GIFs of the workshop's reference solution rendering correctly are attached to the PR if it added or changed a workshop.
7. The sprint's "Acceptance criteria" section's commands all produce the expected output, pasted into the PR description as evidence.

---

## How to execute a sprint

```
1. Read sprints/README.md (this file) once per workspace session.
2. Open the lowest-numbered un-merged sprint file.
3. Verify all "Prerequisites" sprints have been merged to main.
4. Execute the sprint's "Step-by-step execution plan" top to bottom.
5. Run the §S8 verification matrix.
6. Open the PR per §S10.
7. Move on to the next sprint.
```

Do not start a new sprint until the previous sprint's PR is merged. If a sprint reveals a structural problem with the plan, file an issue against `PHASER_CERTIFICATION_PLAN.md` and pause; do not silently deviate.
