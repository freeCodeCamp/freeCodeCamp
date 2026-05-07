# Sprint 08 — Chapter 4 Module 2: Platformer physics workshop

**Goal:** The physics centerpiece of the certification. Three lectures (static groups, body offsets/collision sides, coyote time / jump buffering) and a 55-step workshop building a polished side-scrolling platformer with full game-feel.

**Prerequisites:** Sprint 07 merged.

**Out of scope:** Platformer cert lab + chapter 4 review/quiz (Sprint 09).

---

## References

- `PHASER_CERTIFICATION_PLAN.md` §7 (Chapter 4 Module 2).
- Phaser docs: [`physics.add.staticGroup`](https://newdocs.phaser.io/docs/3.80.1/Phaser.Physics.Arcade.ArcadePhysics#staticGroup), [`Body.setSize`](https://newdocs.phaser.io/docs/3.80.1/Phaser.Physics.Arcade.Body#setSize), [`Body.setOffset`](https://newdocs.phaser.io/docs/3.80.1/Phaser.Physics.Arcade.Body#setOffset), `body.touching` and `body.blocked`.
- Game-feel reference: [Coyote Time and Jump Buffering](https://www.gamedeveloper.com/design/coyote-time-and-jump-buffering) (concept; the workshop derives implementation from scratch).

---

## ID allocation

| Block                                      | IDs                                                                |
| ------------------------------------------ | ------------------------------------------------------------------ |
| `lecture-static-groups-and-terrain`        | `66faa40000000000000000bb` … `66faa40000000000000000bd`            |
| `lecture-body-offsets-and-collision-sides` | `66faa40000000000000000be` … `66faa40000000000000000c0`            |
| `lecture-coyote-time-and-jump-buffering`   | `66faa40000000000000000c1` … `66faa40000000000000000c3`            |
| `workshop-side-scrolling-platformer`       | `66faa40000000000000000c4` … `66faa40000000000000000fa` (55 steps) |

---

## Deliverables

### 1. Block JSONs

| Path                                                                        | Type     |
| --------------------------------------------------------------------------- | -------- |
| `curriculum/structure/blocks/lecture-static-groups-and-terrain.json`        | lecture  |
| `curriculum/structure/blocks/lecture-body-offsets-and-collision-sides.json` | lecture  |
| `curriculum/structure/blocks/lecture-coyote-time-and-jump-buffering.json`   | lecture  |
| `curriculum/structure/blocks/workshop-side-scrolling-platformer.json`       | workshop |

### 2. Lecture challenges

`lecture-static-groups-and-terrain` × 3:

- "Static Groups Explained" — bodies that never move; cheap collision targets.
- "Tile-Sized Platforms" — building terrain at 16-pixel resolution.
- "When to Use a Static Group vs a Tilemap" — preview of chapter 5.

`lecture-body-offsets-and-collision-sides` × 3:

- "Bodies Don't Have to Match Sprites" — `setSize`/`setOffset` for hitbox tuning.
- "Reading `body.touching` and `body.blocked`" — distinguishing actively-colliding-this-frame from blocked-against-bound.
- "One-Way Platforms" — process-callback to disable collision when player is below.

`lecture-coyote-time-and-jump-buffering` × 3:

- "Why Naive Jumping Feels Bad" — frame-perfect demands; player perception.
- "Coyote Time" — N ms grace after leaving ground.
- "Jump Buffering" — N ms grace before landing.

### 3. Workshop — `workshop-side-scrolling-platformer` (55 steps)

A complete platformer level: player with full game-feel jump (variable height + coyote time + jump buffer + double-jump), 2 enemy types, moving platforms, hazards, collectibles, goal flag.

Step plan (high-level — fill in exact regex hints during authoring):

1. Bootstrap MainScene + config (`gravity.y: 800`).
2. Load player sprite sheet (reuses Sprint 02 hero) + tileset PNG.
3. Add a static group of platform tiles, manually placed.
4. Add the player as `physics.add.sprite`, `setCollideWorldBounds(true)`.
5. `physics.add.collider(player, platforms)`.
6. Wire arrow keys for left/right walking.
7. Add `setVelocityY(jumpVelocity)` on UP if `body.touching.down`.
8. Add player walk/idle/jump/fall animations (reuses the chapter-2 animation pattern).
9. Switch animations based on `body.velocity` and `body.touching.down`.
10. Add a coin group; collect on overlap.
11. Add HP and a HUD.
12. Build a 30-tile-wide level with varying platform heights.
13. Add the camera follow (preview of chapter 6).
14. `physics.world.setBounds(...)` and `cameras.main.setBounds(...)`.
15. Add variable jump height: short jump if user releases jump key early.
16. Add a coyote-time grace window (`lastGroundedAt`).
17. Add a jump-buffer grace window (`lastJumpPressedAt`).
18. Combine 16 + 17 — jumping feels right now.
19. Add double-jump (only allowed off-ground, consumes a flag).
20. Reset double-jump on landing.
21. Add a "moving platform" — sprite with a tween `x` back-and-forth.
22. Make moving platform behave correctly under the player (parent-on-stand or velocity inheritance).
23. Add a "spike" hazard tile that hurts on touch.
24. Add player invincibility frames after taking damage.
25. Tween the player tint to red on damage and back.
26. Camera flash on damage.
27. Add a patrolling enemy: rectangle that walks left, flips at edges or walls.
28. Player jumps on enemy → enemy dies + small player bounce.
29. Player touches enemy from side → player takes damage.
30. Add a flying enemy: sine-wave Y motion.
31. Add a death state: HP 0 → game over scene.
32. Game over scene with restart on R.
33. Add a one-way platform (process-callback hides collision when player below).
34. Add a "checkpoint" object: passing through saves spawn point.
35. Add a "key" pickup that unlocks the goal door.
36. Goal flag at level end → "level complete" overlay.
37. Persist completion state to `localStorage`.
38. Add a "best time" measure.
39. Add screen shake on landing from large heights.
40. Add a small dust particle burst on landing.
41. Add a coin-pickup tween (reuses Ch2 pattern).
42. Add a "wall jump" power-up that enables wall slide on a flag.
43. Implement wall slide: when pressed against a wall in mid-air, reduce gravity.
44. Implement wall jump: triggered by jump while wall sliding.
45. Add an audio-stub call (placeholder; chapter 7 fills in actual audio).
46. Add a pause menu (P key + virtual button reuse).
47. Add a level select stub (1 level shipped here; expandable to N).
48. Add a debug toggle (`Phaser.Physics.Arcade.World#drawDebug`) on a hotkey.
49. Add ladders: vertical climbable rectangles overlap-detected, override gravity while overlapping.
50. Add water tiles: slow-down zone (drag boost on overlap).
51. Polish: clamp player max-fall speed.
52. Polish: prevent ceiling-bonk from triggering coyote.
53. Polish: hide debug graphics in non-dev mode.
54. Polish: prevent enemy duplicate-damage when stacked.
55. Final integration: run the level end-to-end, beat it, see the win overlay.

Reference solution in step 55.

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
    },
    {
      "dashedName": "static-groups-and-platformer-physics",
      "blocks": [
        "lecture-static-groups-and-terrain",
        "lecture-body-offsets-and-collision-sides",
        "lecture-coyote-time-and-jump-buffering",
        "workshop-side-scrolling-platformer"
      ]
    }
  ]
}
```

Keep `comingSoon: true`.

### 5. i18n + Playwright

`e2e/phaser-platformer.spec.ts`.

---

## Acceptance criteria

```bash
pnpm lint
pnpm test-curriculum-content
cd curriculum && pnpm test-tooling && cd ..
cd e2e && pnpm exec playwright test phaser-platformer.spec.ts --project=chromium && cd ..
pnpm develop
# Beat the level by hand to verify game feel:
#   - Coyote time: jump 100ms after leaving a ledge succeeds.
#   - Jump buffer: pressing jump just before landing fires immediately on land.
#   - Variable jump height: tap jump briefly = short jump; hold = full jump.
#   - Double-jump consumed once per air time.
```

Attach: 30-second GIF of the platformer being beaten end-to-end.

---

## Definition of done

- [ ] All 55 workshop steps pass.
- [ ] Player movement passes the four game-feel checks above.
- [ ] Playwright spec green.
- [ ] PR title: `feat(curriculum): add Phaser cert ch4 module 2 — platformer workshop`.
