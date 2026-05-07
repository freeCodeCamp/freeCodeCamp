# Sprint 06 — Chapter 3 cert lab + review/quiz

**Goal:** First cert-project lab. `lab-brick-breaker` makes the learner rebuild the brick-breaker from a blank file against ~14 user stories. Plus the chapter 3 review and quiz. Flip Chapter 3 from `comingSoon` to live.

**Prerequisites:** Sprint 05 merged.

**Out of scope:** Chapter 4.

---

## References

- `PHASER_CERTIFICATION_PLAN.md` §6 (Chapter 3) and §9 (cert lab summary).
- Lab reference: `curriculum/challenges/english/blocks/lab-space-shooter-with-phaser/66faa20000000000000000ab.md`.
- Sprint 05's brick-breaker workshop reference solution — that's the gold standard the lab tests against.

---

## ID allocation

| Block                             | IDs                                                         |
| --------------------------------- | ----------------------------------------------------------- |
| `lab-brick-breaker`               | `66faab00000000000000000a` (capstone-lab range `66faab...`) |
| `review-player-control-and-input` | `66faad0000000000000000a2`                                  |
| `quiz-player-control-and-input`   | `66faac0000000000000000a2`                                  |

---

## Deliverables

### 1. Block JSONs

| Path                                                               | Type   |
| ------------------------------------------------------------------ | ------ |
| `curriculum/structure/blocks/lab-brick-breaker.json`               | lab    |
| `curriculum/structure/blocks/review-player-control-and-input.json` | review |
| `curriculum/structure/blocks/quiz-player-control-and-input.json`   | quiz   |

### 2. Lab — `lab-brick-breaker`

`curriculum/challenges/english/blocks/lab-brick-breaker/<id>.md`. Single challenge, `challengeType: 26`. Mirror the structure of `66faa20000000000000000ab.md` exactly.

#### User stories (≥14)

```
1. You should declare a class named MainScene that extends Phaser.Scene.
2. MainScene should have a constructor that calls super("MainScene").
3. MainScene should define preload, create, and update methods.
4. You should declare a class named GameOverScene that extends Phaser.Scene.
5. The Phaser config should set type: Phaser.AUTO, width: 480, height: 640, parent: "game-container", and physics.default: "arcade".
6. You should declare a paddle inside MainScene.create that responds to LEFT/RIGHT arrow keys, the A/D keys, and pointer drag.
7. You should declare a ball with setCollideWorldBounds(true), setBounce(1), and an initial velocity.
8. The bottom of the world should not collide with the ball; losing the ball should decrement lives.
9. You should declare a static group of bricks laid out in at least a 10x5 grid.
10. The ball colliding with a brick should destroy the brick and add to the score.
11. The game should track at least 3 lives and a numeric score, both rendered to a HUD.
12. You should reach a "level cleared" state when all bricks are destroyed and advance to the next level.
13. You should declare at least one power-up that drops from a destroyed brick and applies a temporary effect when caught by the paddle.
14. The high score should persist across page reloads using localStorage.
```

#### Hints (regex assertions)

Use regex `assert.match(code, /…/)` per story. Aim for 1–3 assertions per story. Examples:

```js
assert.match(code, /class\s+MainScene\s+extends\s+Phaser\.Scene\s*\{/);
assert.match(code, /this\.physics\.add\.staticGroup\(/);
assert.match(code, /setCollideWorldBounds\(\s*true\s*\)/);
assert.match(code, /setBounce\(\s*1\s*\)/);
assert.match(
  code,
  /this\.physics\.world\.setBoundsCollision\(\s*true\s*,\s*true\s*,\s*true\s*,\s*false\s*\)/
);
assert.match(code, /localStorage\.(setItem|getItem)\(/);
```

#### Solution

`# --solutions--` contains the workshop's step-50 reference solution, single-file.

### 3. Review — `review-player-control-and-input`

Single challenge `challengeType: 31`, body uses `# --interactive--`. Sections:

- **Pointer events** — recap pointer event handlers, `setInteractive`, multi-touch.
- **Drag and swipe** — drag mechanics, swipe detection.
- **Action-map keyboard input** — actions-as-data pattern.
- **Virtual on-screen controls** — the UI scene + scene-events pattern.

Each section has a runnable `:::interactive_editor` snippet.

### 4. Quiz — `quiz-player-control-and-input`

20 questions, 18 to pass. Cover:

- Pointer event names and properties.
- `setInteractive({ draggable: true })` and the drag event sequence.
- Multi-touch via `addPointer`.
- Action-map abstraction benefits.
- Virtual button → main scene event routing.
- `localStorage` usage for control prefs.

### 5. Wire into superblock

Update `certified-game-developer-with-phaser.json`:

```json
{
  "dashedName": "player-control-and-input",
  "modules": [
    {
      "dashedName": "pointer-and-touch-input",
      "blocks": [
        "lecture-pointer-events",
        "lecture-drag-swipe-and-gestures",
        "workshop-touch-paddle-prototype"
      ]
    },
    {
      "dashedName": "keyboard-maps-and-virtual-controls",
      "blocks": [
        "lecture-keyboard-mapping-patterns",
        "lecture-virtual-on-screen-controls",
        "workshop-mobile-first-brick-breaker",
        "review-player-control-and-input",
        "quiz-player-control-and-input"
      ]
    },
    {
      "moduleType": "cert-project",
      "dashedName": "lab-brick-breaker",
      "blocks": ["lab-brick-breaker"]
    }
  ]
}
```

**Remove `comingSoon: true` from the `player-control-and-input` chapter.** Chapter 3 is live.

### 6. i18n + Playwright

Add i18n entries for `lab-brick-breaker`, `review-player-control-and-input`, `quiz-player-control-and-input`. Add `e2e/phaser-brick-breaker-lab.spec.ts` that pastes the reference solution and asserts all hints pass.

---

## Acceptance criteria

```bash
pnpm lint
pnpm test-curriculum-content
cd curriculum && pnpm test-tooling && cd ..
cd e2e && pnpm exec playwright test phaser-brick-breaker-lab.spec.ts --project=chromium && cd ..
pnpm develop
# Visit /learn/certified-game-developer-with-phaser/player-control-and-input/
# Confirm:
#   - Module 1, Module 2, and the cert-project module all visible.
#   - Lab passes when reference solution is pasted.
#   - Lab fails (with helpful hint feedback) when each user story's code is removed individually.
#   - Quiz: 18 correct = pass, 17 = fail.
```

Attach: screenshots of (a) chapter 3 landing page no longer showing "Coming soon", (b) a passing lab with the reference solution, (c) the cert claim page recognizing the new lab as a cert-project (if cert-claim flow already supports it).

---

## Definition of done

- [ ] Lab has ≥14 user stories with regex hints.
- [ ] Lab passes against the reference solution.
- [ ] Lab fails as expected when each user story is individually broken.
- [ ] Review and quiz authored.
- [ ] Chapter 3 no longer flagged `comingSoon`.
- [ ] PR title: `feat(curriculum): add Phaser cert ch3 brick-breaker lab + review/quiz`.
