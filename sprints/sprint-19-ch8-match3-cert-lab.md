# Sprint 19 — Chapter 8 cert lab + review/quiz

**Goal:** Cert lab `lab-match-3` plus chapter 8 review + quiz. Flip Chapter 8 from `comingSoon` to live.

**Prerequisites:** Sprint 18 merged.

**Out of scope:** Chapter 9.

---

## ID allocation

| Block                                 | IDs                        |
| ------------------------------------- | -------------------------- |
| `lab-match-3`                         | `66faab00000000000000000d` |
| `review-tweens-fx-and-matter-physics` | `66faad0000000000000000a7` |
| `quiz-tweens-fx-and-matter-physics`   | `66faac0000000000000000a7` |

---

## Deliverables

### 1. Block JSONs

| Path                                                                   | Type   |
| ---------------------------------------------------------------------- | ------ |
| `curriculum/structure/blocks/lab-match-3.json`                         | lab    |
| `curriculum/structure/blocks/review-tweens-fx-and-matter-physics.json` | review |
| `curriculum/structure/blocks/quiz-tweens-fx-and-matter-physics.json`   | quiz   |

### 2. Lab — `lab-match-3`

≥14 user stories:

1. `MainScene` extends `Phaser.Scene` with the standard methods.
2. The grid is exactly 8×8 with at least 5 distinct gem types.
3. Pointer/touch swap requires the two gems to be horizontally or vertically adjacent.
4. After a swap, all 3-in-a-row matches (horizontal AND vertical) are detected and cleared.
5. Cleared gems trigger a tween that scales them to 0 then destroys them.
6. Above-gems fall to fill empty positions via chained tweens.
7. New gems spawn at the top to fill the grid.
8. Cascades repeat until no more matches form.
9. Score increments per cleared gem.
10. Combo counter increments per cascade round, multiplying score.
11. A 4-in-a-row creates a "stripe" gem that clears its row on next match.
12. A 5-in-a-row creates a "color-bomb" that clears one full color on next match.
13. Win condition: clear N gems of a target color within M moves.
14. Lose condition: M moves used without hitting target.
15. Best score per level persists in `localStorage`.
16. Game accepts touch input on mobile.

Hints + solution from Sprint 17.

### 3. Review + quiz

Sections: tween anatomy, easing curves, chains, post-fx, arcade vs Matter, Matter bodies, constraints, when-to-use-which.

### 4. Wire into superblock

```json
{
  "dashedName": "tweens-fx-and-matter-physics",
  "modules": [
    {
      "dashedName": "tween-mastery-and-post-fx",
      "blocks": [
        "lecture-tween-system-from-scratch",
        "lecture-post-processing-pipelines",
        "workshop-match-3-puzzle"
      ]
    },
    {
      "dashedName": "intro-to-matter-physics",
      "blocks": [
        "lecture-arcade-vs-matter",
        "lecture-matter-bodies-and-constraints",
        "workshop-slingshot-launcher",
        "review-tweens-fx-and-matter-physics",
        "quiz-tweens-fx-and-matter-physics"
      ]
    },
    {
      "moduleType": "cert-project",
      "dashedName": "lab-match-3",
      "blocks": ["lab-match-3"]
    }
  ]
}
```

**Remove `comingSoon: true` from the chapter.**

### 5. i18n + Playwright

`e2e/phaser-match-3-lab.spec.ts`.

---

## Acceptance criteria

Same shape as previous cert-lab sprints.

---

## Definition of done

- [ ] Lab passes against reference and fails when individual user stories are broken.
- [ ] Chapter 8 no longer `comingSoon`.
- [ ] PR title: `feat(curriculum): add Phaser cert ch8 match-3 lab + review/quiz`.
