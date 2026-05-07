# Sprint 13 — Chapter 6 Module 2: Endless runner workshop

**Goal:** Two lectures (multi-camera UI overlays and parallax with `tileSprite`) plus the 45-step `workshop-side-scrolling-endless-runner` — a complete endless runner with parallax, scoring, ramping difficulty, and screen shake.

**Prerequisites:** Sprint 12 merged.

**Out of scope:** Endless runner cert lab + chapter 6 finalize (Sprint 14).

---

## References

- `PHASER_CERTIFICATION_PLAN.md` §7 (Chapter 6 Module 2).
- Phaser docs: [`GameObjects.TileSprite`](https://newdocs.phaser.io/docs/3.80.1/Phaser.GameObjects.TileSprite), [`Cameras.Scene2D.CameraManager.add`](https://newdocs.phaser.io/docs/3.80.1/Phaser.Cameras.Scene2D.CameraManager#add), `setScrollFactor`.
- The existing space-shooter workshop's `tileSprite` background usage is a good baseline.

---

## ID allocation

| Block                                    | IDs                                                                |
| ---------------------------------------- | ------------------------------------------------------------------ |
| `lecture-multi-camera-ui-overlays`       | `66faa6000000000000000ß0c4` … `66faa60000000000000000c6`           |
| `lecture-parallax-with-tilesprite`       | `66faa60000000000000000c7` … `66faa60000000000000000c9`            |
| `workshop-side-scrolling-endless-runner` | `66faa60000000000000000ca` … `66faa60000000000000000f6` (45 steps) |

---

## Deliverables

### 1. Block JSONs

| Path                                                                      | Type     |
| ------------------------------------------------------------------------- | -------- |
| `curriculum/structure/blocks/lecture-multi-camera-ui-overlays.json`       | lecture  |
| `curriculum/structure/blocks/lecture-parallax-with-tilesprite.json`       | lecture  |
| `curriculum/structure/blocks/workshop-side-scrolling-endless-runner.json` | workshop |

### 2. Lecture challenges

`lecture-multi-camera-ui-overlays` × 3:

- "Why a Second Camera for UI" — main camera scrolls; HUD shouldn't.
- "Excluding Game Objects from a Camera" — `camera.ignore(obj)`.
- "Layering: Game Camera + UI Camera" — depth interactions.

`lecture-parallax-with-tilesprite` × 3:

- "What `tileSprite` Does" — repeats a texture across an area.
- "Scroll Factors" — `setScrollFactor(0.2)` for slow background, `1.0` for foreground.
- "Building a Layered Parallax Background" — sky → distant mountains → midground hills → foreground silhouettes.

### 3. Workshop — `workshop-side-scrolling-endless-runner` (45 steps)

A complete endless runner: player auto-scrolls, jumps over obstacles, distance-based score, parallax, screen shake on hit, persistent best distance.

Step plan:

1. Bootstrap MainScene + config (`gravity.y: 1500`).
2. Render `tileSprite` for sky (slow), mountains (medium), ground (fast).
3. Set scroll factors per layer.
4. Add a player sprite using the chapter-2 hero.
5. Set player to fixed X with auto-scrolling world.
6. Add a static-group ground tile that scrolls right→left.
7. Recycle ground tiles when off-screen left.
8. Add `physics.add.collider(player, ground)`.
9. Wire SPACE for jump — only when grounded.
10. Add coyote time (reuses Sprint 08 pattern).
11. Add jump buffer.
12. Add an obstacle group: cacti or rocks scrolling left.
13. Spawn an obstacle every N seconds with random gap.
14. `physics.add.overlap(player, obstacles, onHit)`.
15. `onHit` triggers game-over scene.
16. Distance score increments per frame.
17. HUD: distance, best distance.
18. Best distance persists in `localStorage`.
19. Increase scroll speed every 1000 distance units.
20. Decrease obstacle spacing as speed increases.
21. Add a coin pickup that adds bonus distance.
22. Add a "double-jump" power-up.
23. Add a flying enemy that requires ducking.
24. Add a duck input (DOWN arrow): shrink player hitbox via `setSize`.
25. Camera shake on hit.
26. Camera flash on power-up.
27. Add a parallax cloud layer (slowest).
28. Add tinted dawn-to-dusk color shift on a global scroll.
29. Add background music stub (placeholder; chapter 7 fills in).
30. Add particle dust trail behind the player.
31. Honor `prefers-reduced-motion` — skip shake/flash/dust.
32. Add a virtual jump button on touch.
33. Mobile: hide keyboard hint, show "TAP TO JUMP".
34. Add a "ramp" difficulty curve UI.
35. Add a rare "boost" power-up that briefly doubles speed.
36. Add a UI scene for HUD (separate camera).
37. Have the UI camera ignore world-space objects.
38. Game over: fade to black then "Best: N → New Best!" if applicable.
39. Restart on R / tap.
40. Add a session counter (number of runs).
41. Persist sessions in localStorage.
42. Add a 30-second tutorial "ghost" overlay on first run.
43. Polish: clamp obstacle spawn so they never overlap.
44. Polish: lock player Y to ground when not jumping.
45. Final integration: full run beating personal best, restart, beat again.

Reference solution in step 45.

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
    },
    {
      "dashedName": "multi-camera-ui-and-parallax",
      "blocks": [
        "lecture-multi-camera-ui-overlays",
        "lecture-parallax-with-tilesprite",
        "workshop-side-scrolling-endless-runner"
      ]
    }
  ]
}
```

Keep `comingSoon: true`.

### 5. i18n + Playwright

`e2e/phaser-endless-runner.spec.ts`.

---

## Acceptance criteria

```bash
pnpm lint
pnpm test-curriculum-content
cd curriculum && pnpm test-tooling && cd ..
cd e2e && pnpm exec playwright test phaser-endless-runner.spec.ts --project=chromium && cd ..
pnpm develop
# Beat your own best distance; verify localStorage persists; verify motion-reduced disables shakes.
```

---

## Definition of done

- [ ] All 45 workshop steps pass.
- [ ] Parallax visibly differentiates between 4 layers.
- [ ] Best distance persists.
- [ ] Game responds to keyboard, mouse, and touch tap.
- [ ] PR title: `feat(curriculum): add Phaser cert ch6 module 2 — endless runner workshop`.
