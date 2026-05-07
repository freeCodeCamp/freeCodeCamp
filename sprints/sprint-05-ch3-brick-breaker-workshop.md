# Sprint 05 — Chapter 3 Module 2: Keyboard maps + brick breaker workshop

**Goal:** Two lectures on action-key mapping and on-screen virtual controls, plus the 50-step `workshop-mobile-first-brick-breaker` — a complete brick breaker game with keyboard, mouse, and touch input parity, physics colliders (not overlaps), brick layouts, and per-level state.

**Prerequisites:** Sprint 04 merged.

**Out of scope:** Brick-breaker cert lab + chapter 3 review/quiz (Sprint 06).

---

## References

- `PHASER_CERTIFICATION_PLAN.md` §6 (Chapter 3 Module 2).
- Sprint 04's lectures + workshop (the paddle + input pattern is reused as the starting point).
- Phaser docs: [`physics.add.collider`](https://newdocs.phaser.io/docs/3.80.1/Phaser.Physics.Arcade.ArcadePhysics#collider), [`Phaser.Geom.Rectangle`](https://newdocs.phaser.io/docs/3.80.1/Phaser.Geom.Rectangle), `body.touching.up/down/left/right`.

---

## ID allocation

| Block                                 | IDs                                                                |
| ------------------------------------- | ------------------------------------------------------------------ |
| `lecture-keyboard-mapping-patterns`   | `66faa30000000000000000c0` … `66faa30000000000000000c2` (3)        |
| `lecture-virtual-on-screen-controls`  | `66faa30000000000000000c3` … `66faa30000000000000000c5` (3)        |
| `workshop-mobile-first-brick-breaker` | `66faa30000000000000000c6` … `66faa30000000000000000f7` (50 steps) |

---

## Deliverables

### 1. Block JSONs

| Path                                                                   | Type     |
| ---------------------------------------------------------------------- | -------- |
| `curriculum/structure/blocks/lecture-keyboard-mapping-patterns.json`   | lecture  |
| `curriculum/structure/blocks/lecture-virtual-on-screen-controls.json`  | lecture  |
| `curriculum/structure/blocks/workshop-mobile-first-brick-breaker.json` | workshop |

### 2. Lecture challenges

`lecture-keyboard-mapping-patterns` × 3:

- "Mapping Actions to Keys, Not Keys to Actions" — define `actions = { left: ['LEFT', 'A'], right: ['RIGHT', 'D'], fire: ['SPACE'] }`; query `actions.fire.some(k => keys[k].isDown)`.
- "Supporting Both Arrows and WASD" — practical example with the action-map abstraction.
- "Remappable Controls" — UI scene that reads from a `Map<action, keyCode>`, persists to `localStorage`.

`lecture-virtual-on-screen-controls` × 3:

- "Designing for Touch and Keyboard at Once" — same input contract, different physical input devices.
- "Building a UI Scene for On-Screen Buttons" — separate `class ControlsScene extends Phaser.Scene` overlay.
- "Routing Virtual Input to Gameplay via Events" — `this.scene.get('MainScene').events.emit('action:fire')`.

### 3. Workshop — `workshop-mobile-first-brick-breaker` (50 steps)

A complete brick breaker:

- Paddle moved by arrows / pointer drag / virtual buttons (reuses Sprint 04's input contract).
- Ball with `setBounce(1)`, `setCollideWorldBounds(true)`, but only top/left/right (bottom is "lose").
- Bricks as a static group laid out in a grid; each brick stores hit-points.
- Collision via `physics.add.collider(ball, bricks, onBrickHit)`.
- Multi-level progression: clear all bricks → next level (different layout).
- Lives, score, persistent high score in `localStorage`.

Step plan (50 steps; each introduces one focused concept):

1. Bootstrap MainScene + config.
2. Add paddle rectangle.
3. Wire paddle to action-map keyboard input.
4. Wire paddle to pointer drag (reusing Sprint 04 lerp).
5. Add a UI/controls scene with on-screen buttons.
6. Connect virtual buttons via scene events.
7. Add the ball as `physics.add.image(...)`.
8. `ball.setVelocity(initialX, initialY)`.
9. `ball.setCollideWorldBounds(true)` + `ball.setBounce(1)`.
10. Disable bottom collision (`physics.world.setBoundsCollision(true, true, true, false)`).
11. Detect ball-leaves-bottom → lose a life.
12. `physics.add.collider(ball, paddle, paddleBounce)`.
13. `paddleBounce` adjusts the ball's X velocity based on where it hit the paddle (classic angle control).
14. Define a brick group (`physics.add.staticGroup`).
15. Generate a 10×6 grid of bricks programmatically.
16. Color bricks by row.
17. `physics.add.collider(ball, bricks, onBrickHit)`.
18. `onBrickHit` decrements brick HP; destroy at 0.
19. Score per brick (worth more for higher rows).
20. HUD with score, lives.
21. Game over scene when lives hit 0.
22. Restart with R / button.
23. Persist high score to `localStorage`.
24. Show high score on the title screen.
    25–28. Additional brick types (multi-hit, indestructible).
    29–32. Power-ups dropping from broken bricks (paddle-grow, multi-ball, slow-ball).
25. Multi-ball spawning logic.
26. Level definitions as JSON (5 levels of brick layouts shipped inline).
27. Level transition: ball pause → "LEVEL N" overlay → resume.
28. Difficulty ramp: ball speed +5% per level.
29. Add ball trail using a `Graphics` overlay (reuses Sprint 03 pattern).
30. Add screen shake on brick break.
31. Add tween squash on paddle bounce.
32. Add particle burst on brick destroy.
33. Persistent best level reached, displayed on title.
34. Pause / resume on `P` and on a virtual pause button.
35. Mobile detection: hide keyboard hints on touch-only.
36. Add a "mute" toggle (audio is added in chapter 7; this is a stub button now).
37. Polish: prevent ball from going horizontally stuck.
38. Polish: clamp ball speed max.
39. Polish: prevent paddle from clipping outside world.
40. Polish: title screen with start button.
41. Polish: end-of-game cinematic — fade overlay + final score.
42. Final integration: all 5 levels playable end-to-end.

Reference solution in step 50.

### 4. Wire into superblock

```json
{
  "dashedName": "player-control-and-input",
  "comingSoon": true,
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
        "workshop-mobile-first-brick-breaker"
      ]
    }
  ]
}
```

Keep `comingSoon: true` — Sprint 06 ships the cert lab + review/quiz and flips the flag.

### 5. i18n + Playwright

Add i18n entries. Add `e2e/phaser-brick-breaker.spec.ts`.

---

## Acceptance criteria

```bash
pnpm lint
pnpm test-curriculum-content
cd curriculum && pnpm test-tooling && cd ..
cd e2e && pnpm exec playwright test phaser-brick-breaker.spec.ts --project=chromium && cd ..
pnpm develop
# Walk through the workshop. Reach step 50 with the reference solution and verify:
#   - All 5 levels are clearable.
#   - Lives, score, and high-score behave correctly.
#   - Power-ups all function.
#   - Game works on keyboard, mouse drag, and (Playwright touch emulation) on touch.
```

Attach: 30-second GIF showing the brick breaker being played on each input modality.

---

## Definition of done

- [ ] All 50 workshop steps pass.
- [ ] Reference solution beats levels 1–5 by hand.
- [ ] LocalStorage high-score persists across page reloads.
- [ ] Playwright spec covers keyboard, pointer, and touch emulation.
- [ ] PR title: `feat(curriculum): add Phaser cert ch3 module 2 — brick breaker workshop`.
