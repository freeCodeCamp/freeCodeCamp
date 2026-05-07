# Sprint 04 — Chapter 3 Module 1: Pointer & touch input

**Goal:** Open Chapter 3 with two lectures on Phaser's pointer/touch event system and a 25-step workshop that builds a paddle prototype which works the same way on keyboard, mouse, and touch.

**Prerequisites:** Sprint 03 merged.

**Out of scope:** Brick-breaker workshop (Sprint 05), brick-breaker cert lab (Sprint 06).

---

## References

- `PHASER_CERTIFICATION_PLAN.md` §6 (Chapter 3 Module 1).
- `sprints/README.md` §S2–S10.
- Phaser docs: [`Phaser.Input.InputPlugin`](https://newdocs.phaser.io/docs/3.80.1/Phaser.Input.InputPlugin), `pointerdown`/`pointermove`/`pointerup` events, [`setInteractive`](https://newdocs.phaser.io/docs/3.80.1/Phaser.GameObjects.GameObject#setInteractive).

---

## ID allocation (Chapter 3 range = `66faa3...`)

| Block                             | IDs                                                                    |
| --------------------------------- | ---------------------------------------------------------------------- |
| `lecture-pointer-events`          | `66faa30000000000000000a1` … `66faa30000000000000000a3` (3 challenges) |
| `lecture-drag-swipe-and-gestures` | `66faa30000000000000000a4` … `66faa30000000000000000a6` (3 challenges) |
| `workshop-touch-paddle-prototype` | `66faa30000000000000000a7` … `66faa30000000000000000bf` (25 steps)     |

---

## Deliverables

### 1. Block JSONs

| Path                                                               | Type     |
| ------------------------------------------------------------------ | -------- |
| `curriculum/structure/blocks/lecture-pointer-events.json`          | lecture  |
| `curriculum/structure/blocks/lecture-drag-swipe-and-gestures.json` | lecture  |
| `curriculum/structure/blocks/workshop-touch-paddle-prototype.json` | workshop |

### 2. Lecture challenges

`lecture-pointer-events` × 3:

- "Pointer Events: One API for Mouse and Touch" — `this.input.on('pointerdown'/'pointermove'/'pointerup')`, `pointer.x`, `pointer.y`, `pointer.isDown`. Demo on a `:::interactive_editor` snippet that logs to a text label.
- "Per-Object Input with `setInteractive`" — making a sprite individually clickable, `pointerover`/`pointerout`, hit-area shapes.
- "Multi-Touch Basics" — `this.input.addPointer(n)`, accessing `this.input.pointer1`/`pointer2`/etc.

`lecture-drag-swipe-and-gestures` × 3:

- "Dragging Sprites" — `setInteractive({ draggable: true })`, `dragstart`, `drag`, `dragend`.
- "Detecting a Swipe" — measure pointer Δx/Δy + Δt between `pointerdown` and `pointerup`; threshold + direction.
- "Latency and Input Smoothing" — why touch on mobile feels slightly off vs cursor, why averaging the last N samples is sometimes better.

### 3. Workshop — `workshop-touch-paddle-prototype` (25 steps)

A simple paddle scene where the same code path drives the paddle on keyboard arrows OR touch/pointer drag. Acts as runway into the full brick breaker.

Step plan:

1. Bootstrap: `MainScene` + `Phaser.Game(config)`.
2. Render a paddle rectangle via `this.add.rectangle` (no sprite sheet needed yet).
3. Add a `cursors` keyboard input.
4. In `update`, move the paddle with arrow keys.
5. Clamp the paddle's `x` to the world bounds.
6. Render a horizontal "track" line under the paddle for visual feedback.
7. Add `this.input.on('pointermove', …)` that sets `targetX = pointer.x`.
8. Each frame, ease `paddle.x` toward `targetX` (lerp).
9. Add `pointerdown` to set the initial target (start moving immediately on tap).
10. Combine: keyboard sets `targetX` to discrete steps; pointer sets it to absolute.
11. Add a "DOWN: drag to move, KEYS: arrows to move" instructional text.
12. Make the paddle a draggable `setInteractive({ draggable: true })` and listen for `drag`.
13. Snap the dragged paddle's `y` to a fixed value so only `x` moves.
14. Add a small "thumb zone" rectangle at the bottom of the screen — only touches inside it move the paddle.
15. Add a virtual on-screen left/right button pair (using `setInteractive` + `pointerdown`/`pointerup`).
16. Map virtual buttons to the same `targetX` setter as keyboard.
17. Detect mobile via the `Phaser.Device.os.android || .iOS` flag and only show virtual buttons on mobile.
18. Add a swipe gesture: a fast horizontal pointer release dashes the paddle to that side.
19. Add a debounce so pressing a virtual button repeatedly doesn't double-trigger.
20. Add a "score on dodging" placeholder (a falling rectangle the paddle must catch).
21. `physics.add.overlap(paddle, falling, onCatch)`.
22. `onCatch` plays a tween scale pulse on the paddle and increments score.
23. Show "Score: N" in a HUD via `setScrollFactor(0)`.
24. Reset the falling rectangle to the top with new random `x`.
25. Final polish: ramp falling speed with score, freeze input on game over.

Reference solution in step 25.

### 4. Wire into superblock

Update `certified-game-developer-with-phaser.json`. Replace the `player-control-and-input` chapter with:

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
    }
  ]
}
```

Keep `comingSoon: true` — Sprints 05 and 06 finish the chapter before flipping it.

### 5. i18n + Playwright

Add i18n entries for the three new block dashedNames. Add `e2e/phaser-touch-paddle.spec.ts`.

---

## Acceptance criteria

```bash
pnpm lint
pnpm test-curriculum-content
cd curriculum && pnpm test-tooling && cd ..
cd e2e && pnpm exec playwright test phaser-touch-paddle.spec.ts --project=chromium && cd ..
pnpm develop
# Visit /learn/certified-game-developer-with-phaser/player-control-and-input/pointer-and-touch-input/
# Verify paddle responds to both arrow keys and pointer drag in the workshop's final step.
```

Attach: GIF of the workshop responding to mouse drag AND keyboard.

---

## Definition of done

- [ ] All 25 workshop steps pass against canonical solution.
- [ ] Both lectures' interactive snippets execute without runtime error.
- [ ] Playwright spec exercises both keyboard and pointer paths.
- [ ] PR title: `feat(curriculum): add Phaser cert ch3 module 1 — pointer and touch input`.
