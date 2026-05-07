# Sprint 12 — Chapter 6 Module 1: Camera fundamentals

**Goal:** Three lectures on camera follow/lerp/deadzone, world bounds, and camera shake/flash; a 25-step "camera playground" workshop where the learner experiments with each knob.

**Prerequisites:** Sprint 11 merged.

**Out of scope:** Endless runner workshop (Sprint 13) and cert lab (Sprint 14).

---

## References

- `PHASER_CERTIFICATION_PLAN.md` §7 (Chapter 6 Module 1).
- Phaser docs: [`Cameras.Scene2D.Camera#startFollow`](https://newdocs.phaser.io/docs/3.80.1/Phaser.Cameras.Scene2D.Camera#startFollow), `setBounds`, `setDeadzone`, `shake`, `flash`, `fade`.

---

## ID allocation (Chapter 6 range = `66faa6...`)

| Block                                     | IDs                                                                |
| ----------------------------------------- | ------------------------------------------------------------------ |
| `lecture-camera-follow-lerp-and-deadzone` | `66faa60000000000000000a1` … `66faa60000000000000000a3`            |
| `lecture-world-bounds-and-camera-bounds`  | `66faa60000000000000000a4` … `66faa60000000000000000a6`            |
| `lecture-camera-shake-and-flash`          | `66faa60000000000000000a7` … `66faa60000000000000000a9`            |
| `workshop-camera-playground`              | `66faa60000000000000000aa` … `66faa60000000000000000c3` (25 steps) |

---

## Deliverables

### 1. Block JSONs

| Path                                                                       | Type     |
| -------------------------------------------------------------------------- | -------- |
| `curriculum/structure/blocks/lecture-camera-follow-lerp-and-deadzone.json` | lecture  |
| `curriculum/structure/blocks/lecture-world-bounds-and-camera-bounds.json`  | lecture  |
| `curriculum/structure/blocks/lecture-camera-shake-and-flash.json`          | lecture  |
| `curriculum/structure/blocks/workshop-camera-playground.json`              | workshop |

### 2. Lecture challenges

`lecture-camera-follow-lerp-and-deadzone` × 3:

- "Following a Target" — `cameras.main.startFollow(target)`.
- "Lerp for Smoothing" — `startFollow(target, true, 0.1, 0.1)`; why values < 1 feel smoother.
- "Deadzones" — `setDeadzone(width, height)`; the camera doesn't move while the target stays inside.

`lecture-world-bounds-and-camera-bounds` × 3:

- "World Bounds" — `physics.world.setBounds`.
- "Camera Bounds" — `cameras.main.setBounds`.
- "Why Both Matter" — preventing the camera from showing nothing.

`lecture-camera-shake-and-flash` × 3:

- "When Juice Helps and When It Hurts" — game-feel rules.
- "`shake(duration, intensity)`" — params and gotchas.
- "`flash` and `fade`" — color overlays for transitions and damage feedback.

### 3. Workshop — `workshop-camera-playground` (25 steps)

A scene with a movable player and a series of UI buttons that toggle each camera knob.

Step plan:

1. Bootstrap MainScene + config.
2. Render a wide procedurally-generated world (just colored rectangles spaced across 4000px).
3. Add the player as a physics sprite.
4. Add cursor-key movement.
5. `cameras.main.startFollow(player)`.
6. Add a wide world: `physics.world.setBounds(0, 0, 4000, 600)`.
7. `cameras.main.setBounds(0, 0, 4000, 600)`.
8. Test moving — camera follows.
9. Add a UI button: "Toggle smooth follow" (`startFollow(target, true, 0.1, 0.1)` vs `startFollow(target)`).
10. Add a UI button: "Toggle deadzone" — switches `setDeadzone(200, 200)` on/off.
11. Visualize the deadzone with a `Graphics` rectangle on the camera.
12. Add a UI button: "Shake camera" → `cameras.main.shake(300, 0.01)`.
13. Add a slider for shake intensity.
14. Add a UI button: "Flash white" → `flash(150, 255, 255, 255)`.
15. Add a UI button: "Fade to black for 1s" → `fade(1000, 0, 0, 0)` then back in.
16. Add a "zoom" slider that calls `setZoom(value)`.
17. Add zoom transitions via tween: `tweens.add({ targets: cameras.main, zoom: target, duration: 500 })`.
18. Add a second camera fixed to the bottom-right showing a minimap.
19. The minimap camera ignores the player and uses a tiny zoom.
20. Render a small player marker on the minimap (separate sprite that mirrors player position).
21. Add `cameras.main.setBackgroundColor(...)` toggle.
22. Add motion-reduced mode: a UI button that disables all shakes (preview of accessibility).
23. Persist motion-reduced state to localStorage.
24. Honor `window.matchMedia('(prefers-reduced-motion)')` automatically.
25. Final polish: clean up tweens on shutdown, lock zoom to a sensible range.

Reference solution in step 25.

### 4. Wire into superblock

```json
{
  "dashedName": "camera-worlds-and-parallax",
  "comingSoon": true,
  "modules": [
    {
      "dashedName": "camera-fundamentals",
      "blocks": [
        "lecture-camera-follow-lerp-and-deadzone",
        "lecture-world-bounds-and-camera-bounds",
        "lecture-camera-shake-and-flash",
        "workshop-camera-playground"
      ]
    }
  ]
}
```

Keep `comingSoon: true`.

### 5. i18n + Playwright

`e2e/phaser-camera-playground.spec.ts`.

---

## Acceptance criteria

```bash
pnpm lint
pnpm test-curriculum-content
cd curriculum && pnpm test-tooling && cd ..
cd e2e && pnpm exec playwright test phaser-camera-playground.spec.ts --project=chromium && cd ..
pnpm develop
# Walk through every UI button in the workshop's final step. Confirm `prefers-reduced-motion` actually disables shakes.
```

---

## Definition of done

- [ ] All 25 workshop steps pass.
- [ ] `prefers-reduced-motion` correctly disables camera juice.
- [ ] PR title: `feat(curriculum): add Phaser cert ch6 module 1 — camera fundamentals`.
