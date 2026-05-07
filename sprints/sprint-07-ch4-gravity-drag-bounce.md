# Sprint 07 — Chapter 4 Module 1: Gravity, drag & bounce

**Goal:** Open Chapter 4 with two lectures (gravity/velocity/drag, colliders vs overlaps) and a 20-step "bouncing ball lab" sandbox where the learner tunes physics knobs live.

**Prerequisites:** Sprint 06 merged.

**Out of scope:** Platformer workshop (Sprint 08), platformer cert lab (Sprint 09).

---

## References

- `PHASER_CERTIFICATION_PLAN.md` §7 (Chapter 4 Module 1).
- Phaser docs: [`Body.setGravityY`](https://newdocs.phaser.io/docs/3.80.1/Phaser.Physics.Arcade.Body#setGravityY), [`setDrag`](https://newdocs.phaser.io/docs/3.80.1/Phaser.Physics.Arcade.Body#setDrag), [`setBounce`](https://newdocs.phaser.io/docs/3.80.1/Phaser.Physics.Arcade.Body#setBounce), [`physics.add.collider` vs `overlap`](https://newdocs.phaser.io/docs/3.80.1/Phaser.Physics.Arcade.ArcadePhysics).

---

## ID allocation (Chapter 4 range = `66faa4...`)

| Block                               | IDs                                                                |
| ----------------------------------- | ------------------------------------------------------------------ |
| `lecture-gravity-velocity-and-drag` | `66faa40000000000000000a1` … `66faa40000000000000000a3`            |
| `lecture-colliders-vs-overlaps`     | `66faa40000000000000000a4` … `66faa40000000000000000a6`            |
| `workshop-bouncing-ball-lab`        | `66faa40000000000000000a7` … `66faa40000000000000000ba` (20 steps) |

---

## Deliverables

### 1. Block JSONs

| Path                                                                 | Type     |
| -------------------------------------------------------------------- | -------- |
| `curriculum/structure/blocks/lecture-gravity-velocity-and-drag.json` | lecture  |
| `curriculum/structure/blocks/lecture-colliders-vs-overlaps.json`     | lecture  |
| `curriculum/structure/blocks/workshop-bouncing-ball-lab.json`        | workshop |

### 2. Lecture challenges

`lecture-gravity-velocity-and-drag` × 3:

- "World Gravity vs Body Gravity" — `physics.world.gravity.y` vs `body.setGravityY`.
- "Velocity, Acceleration, and Drag" — units (px/s, px/s²), why drag matters.
- "Bounce, Friction, and Restitution" — `setBounce(x)`, world bounds bounce, surface friction.

`lecture-colliders-vs-overlaps` × 3:

- "When to Use a Collider vs an Overlap" — collider blocks movement; overlap fires a callback but doesn't stop motion.
- "The Process Callback" — third arg to `collider`/`overlap` to conditionally skip a collision.
- "Multiple Colliders on the Same Body" — chaining colliders for layered behavior.

### 3. Workshop — `workshop-bouncing-ball-lab` (20 steps)

A sandbox scene with a ball, sliders, and a real-time readout. Each step tweaks one physics knob.

Step plan:

1. Bootstrap MainScene + config.
2. Add a single ball with arcade physics.
3. Set `gravity.y: 300` in the config.
4. Drop the ball and observe — clamps at world bottom.
5. `ball.setBounce(0.7)` — see it bounce.
6. Compare `setBounce(0)` vs `setBounce(1)`.
7. `ball.setDragX(50)` — horizontal damping.
8. Click anywhere to launch the ball with `setVelocity(dx, dy)` toward the click.
9. Add a `Phaser.Math.Distance.Between` calc to scale launch by distance.
10. Add 5 floor segments using a static group.
11. `physics.add.collider(ball, floors)`.
12. Tilt one floor segment by drawing it as an angled rect — show that arcade physics doesn't handle slopes natively (intentional teaching moment, sets up Matter in chapter 8).
13. Add a "ceiling" static segment for dropdown cancellation.
14. Add a "trampoline" platform with `setBounce(2)` on overlap.
15. Convert the trampoline to use a process-callback overlap that only fires going down.
16. Add a "wind zone" overlap that applies horizontal velocity.
17. Add HUD readouts for `body.velocity.x`, `velocity.y`, `position.y`.
18. Add a UI button to reset the ball.
19. Add a slider for world gravity, live updating `physics.world.gravity.y`.
20. Final polish: clamp velocities, prevent runaway physics.

Reference solution in step 20.

### 4. Wire into superblock

```json
{
  "dashedName": "arcade-physics-deep-dive",
  "comingSoon": true,
  "modules": [
    {
      "dashedName": "gravity-drag-and-bouncy-bodies",
      "blocks": [
        "lecture-gravity-velocity-and-drag",
        "lecture-colliders-vs-overlaps",
        "workshop-bouncing-ball-lab"
      ]
    }
  ]
}
```

Keep `comingSoon: true`.

### 5. i18n + Playwright

Add i18n entries. Add `e2e/phaser-bouncing-ball.spec.ts`.

---

## Acceptance criteria

```bash
pnpm lint
pnpm test-curriculum-content
cd curriculum && pnpm test-tooling && cd ..
cd e2e && pnpm exec playwright test phaser-bouncing-ball.spec.ts --project=chromium && cd ..
pnpm develop
# Walk through the workshop and confirm the live HUD updates as the ball bounces.
```

---

## Definition of done

- [ ] All 20 workshop steps pass.
- [ ] Both lectures' interactive snippets execute cleanly.
- [ ] Playwright spec runs green.
- [ ] PR title: `feat(curriculum): add Phaser cert ch4 module 1 — gravity drag bounce`.
