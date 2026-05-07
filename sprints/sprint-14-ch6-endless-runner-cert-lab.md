# Sprint 14 — Chapter 6 cert lab + review/quiz

**Goal:** Cert lab `lab-endless-runner` plus chapter 6 review + quiz. Flip Chapter 6 from `comingSoon` to live.

**Prerequisites:** Sprint 13 merged.

**Out of scope:** Chapter 7.

---

## References

- `PHASER_CERTIFICATION_PLAN.md` §7 (Chapter 6) and §9 (cert lab summary).
- Sprint 13's endless runner reference solution.

---

## ID allocation

| Block                               | IDs                        |
| ----------------------------------- | -------------------------- |
| `lab-endless-runner`                | `66faab00000000000000000c` |
| `review-camera-worlds-and-parallax` | `66faad0000000000000000a5` |
| `quiz-camera-worlds-and-parallax`   | `66faac0000000000000000a5` |

---

## Deliverables

### 1. Block JSONs

| Path                                                                 | Type   |
| -------------------------------------------------------------------- | ------ |
| `curriculum/structure/blocks/lab-endless-runner.json`                | lab    |
| `curriculum/structure/blocks/review-camera-worlds-and-parallax.json` | review |
| `curriculum/structure/blocks/quiz-camera-worlds-and-parallax.json`   | quiz   |

### 2. Lab — `lab-endless-runner`

`challengeType: 26`. ≥14 user stories:

1. `MainScene` extends `Phaser.Scene` with `preload`/`create`/`update`.
2. The world has a `tileSprite` background with at least 3 layers at distinct scroll factors.
3. The player auto-runs at fixed X and jumps with SPACE.
4. The player jump uses coyote time and jump buffering.
5. Obstacles spawn from the right and scroll left.
6. Distance increases per frame and is rendered to the HUD.
7. The HUD lives on a second camera that ignores world transforms.
8. Best distance persists across reloads via `localStorage`.
9. Difficulty ramps with distance (faster scroll, tighter spawns).
10. Hitting an obstacle triggers a game-over scene with restart.
11. The player has at least one collectible (coin) and one power-up.
12. Camera shake fires on hit, but is suppressed when `prefers-reduced-motion` is set.
13. The game accepts touch input on mobile (tap to jump).
14. The player has at least 2 distinct obstacle types (one ground, one airborne requiring duck).

Hints: regex assertions targeting the canonical solution. Solution: Sprint 13's step-45 reference.

### 3. Review + quiz

Standard format. Cover camera follow/lerp/deadzone, world+camera bounds, shake/flash/fade, multi-camera UI overlays, parallax, and `prefers-reduced-motion`.

### 4. Wire into superblock

```json
{
  "dashedName": "camera-worlds-and-parallax",
  "modules": [
    {
      "dashedName": "camera-fundamentals",
      "blocks": [
        /* unchanged */
      ]
    },
    {
      "dashedName": "multi-camera-ui-and-parallax",
      "blocks": [
        "lecture-multi-camera-ui-overlays",
        "lecture-parallax-with-tilesprite",
        "workshop-side-scrolling-endless-runner",
        "review-camera-worlds-and-parallax",
        "quiz-camera-worlds-and-parallax"
      ]
    },
    {
      "moduleType": "cert-project",
      "dashedName": "lab-endless-runner",
      "blocks": ["lab-endless-runner"]
    }
  ]
}
```

**Remove `comingSoon: true` from the chapter.**

### 5. i18n + Playwright

`e2e/phaser-endless-runner-lab.spec.ts`.

---

## Acceptance criteria

Same shape as Sprint 06 / 09. Lab passes against reference; lab fails when each user story's code is removed individually.

---

## Definition of done

- [ ] Lab passes against reference solution.
- [ ] Chapter 6 no longer `comingSoon`.
- [ ] PR title: `feat(curriculum): add Phaser cert ch6 endless-runner lab + review/quiz`.
