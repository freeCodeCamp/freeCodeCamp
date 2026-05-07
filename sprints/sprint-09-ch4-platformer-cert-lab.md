# Sprint 09 — Chapter 4 cert lab + review/quiz

**Goal:** Cert lab `lab-platformer-level-1-1` plus chapter 4 review + quiz. Flip Chapter 4 from `comingSoon` to live.

**Prerequisites:** Sprint 08 merged.

**Out of scope:** Chapter 5.

---

## References

- `PHASER_CERTIFICATION_PLAN.md` §7 (Chapter 4).
- Sprint 08's platformer reference solution.
- Lab format reference: `curriculum/challenges/english/blocks/lab-space-shooter-with-phaser/66faa20000000000000000ab.md`.

---

## ID allocation

| Block                             | IDs                        |
| --------------------------------- | -------------------------- |
| `lab-platformer-level-1-1`        | `66faab00000000000000000b` |
| `review-arcade-physics-deep-dive` | `66faad0000000000000000a3` |
| `quiz-arcade-physics-deep-dive`   | `66faac0000000000000000a3` |

---

## Deliverables

### 1. Block JSONs

| Path                                                               | Type   |
| ------------------------------------------------------------------ | ------ |
| `curriculum/structure/blocks/lab-platformer-level-1-1.json`        | lab    |
| `curriculum/structure/blocks/review-arcade-physics-deep-dive.json` | review |
| `curriculum/structure/blocks/quiz-arcade-physics-deep-dive.json`   | quiz   |

### 2. Lab — `lab-platformer-level-1-1`

Single challenge `challengeType: 26`. ≥16 user stories covering:

1. `MainScene extends Phaser.Scene` with `preload`/`create`/`update`.
2. World gravity `y: 800`.
3. Player sprite with `setCollideWorldBounds(true)`.
4. Static group of platforms with at least 8 segments at varied heights.
5. Player jumps when UP is pressed and `body.touching.down`.
6. Variable jump height when UP is released early.
7. Coyote time of at least 80ms before jump grace expires.
8. Jump buffering of at least 80ms before landing.
9. Double-jump available once per airtime, reset on land.
10. At least one moving platform that the player rides correctly.
11. At least 2 enemy types (one patroller, one flyer).
12. Player jumps on enemy from above → enemy dies; player from side → player damaged.
13. At least 5 collectibles (coins) with overlap-pickup.
14. A goal flag that triggers a `LevelCompleteScene` when overlapped.
15. Game-over scene on HP zero with R-restart.
16. Persistent best time stored in `localStorage`.

Hints: regex assertions matching the canonical reference solution's structure. Solution: Sprint 08's step-55 reference solution.

### 3. Review — `review-arcade-physics-deep-dive`

Sections: gravity/drag/bounce, colliders vs overlaps, static groups, body offsets, collision sides, coyote time, jump buffering. Each with a runnable snippet.

### 4. Quiz — `quiz-arcade-physics-deep-dive`

20 questions, 18 to pass. Cover every concept from the lectures and workshop.

### 5. Wire into superblock

Update `arcade-physics-deep-dive` chapter to include review + quiz in module 2 and append the cert-project module:

```json
{
  "dashedName": "arcade-physics-deep-dive",
  "modules": [
    {
      "dashedName": "gravity-drag-and-bouncy-bodies",
      "blocks": [
        /* unchanged */
      ]
    },
    {
      "dashedName": "static-groups-and-platformer-physics",
      "blocks": [
        "lecture-static-groups-and-terrain",
        "lecture-body-offsets-and-collision-sides",
        "lecture-coyote-time-and-jump-buffering",
        "workshop-side-scrolling-platformer",
        "review-arcade-physics-deep-dive",
        "quiz-arcade-physics-deep-dive"
      ]
    },
    {
      "moduleType": "cert-project",
      "dashedName": "lab-platformer-level-1-1",
      "blocks": ["lab-platformer-level-1-1"]
    }
  ]
}
```

**Remove `comingSoon: true` from the chapter.** Chapter 4 is live.

### 6. i18n + Playwright

Add i18n entries. Add `e2e/phaser-platformer-lab.spec.ts` (paste reference, assert hints pass).

---

## Acceptance criteria

```bash
pnpm lint
pnpm test-curriculum-content
cd curriculum && pnpm test-tooling && cd ..
cd e2e && pnpm exec playwright test phaser-platformer-lab.spec.ts --project=chromium && cd ..
pnpm develop
# /learn/certified-game-developer-with-phaser/arcade-physics-deep-dive/ — chapter live, no "Coming soon".
# Lab passes against the reference; fails when each user story's code is broken.
```

---

## Definition of done

- [ ] Lab passes against reference solution.
- [ ] Lab fails as expected when each user story is individually broken.
- [ ] Chapter 4 no longer `comingSoon`.
- [ ] PR title: `feat(curriculum): add Phaser cert ch4 platformer lab + review/quiz`.
