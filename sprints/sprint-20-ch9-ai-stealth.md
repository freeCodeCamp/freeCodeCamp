# Sprint 20 — Chapter 9 Module 1: Enemy AI & state machines

**Goal:** Three lectures (FSMs, line-of-sight/raycasting, A\* pathfinding) and the 45-step `workshop-stealth-game-prototype` — a 1-room stealth game with patrolling guards, vision cones, and FSM-driven alert states.

**Prerequisites:** Sprint 19 merged.

**Out of scope:** RPG vertical slice + chapter 9 finalize (Sprint 21).

---

## References

- `PHASER_CERTIFICATION_PLAN.md` §8 (Chapter 9 Module 1).
- "AI for Games" by Ian Millington (concept; implementation is from-scratch in Phaser).
- Phaser docs: [`Tilemaps.TilemapLayer.getTileAtWorldXY`](https://newdocs.phaser.io/docs/3.80.1/Phaser.Tilemaps.TilemapLayer#getTileAtWorldXY) for line-of-sight raycasting against walls.

---

## ID allocation (Chapter 9 range = `66faa9...`)

| Block                                       | IDs                                                                |
| ------------------------------------------- | ------------------------------------------------------------------ |
| `lecture-finite-state-machines-for-enemies` | `66faa90000000000000000a1` … `66faa90000000000000000a3`            |
| `lecture-line-of-sight-and-raycasting`      | `66faa90000000000000000a4` … `66faa90000000000000000a6`            |
| `lecture-grid-pathfinding-with-a-star`      | `66faa90000000000000000a7` … `66faa90000000000000000a9`            |
| `workshop-stealth-game-prototype`           | `66faa90000000000000000aa` … `66faa90000000000000000d6` (45 steps) |

---

## Deliverables

### 1. Block JSONs

| Path                                                                         | Type     |
| ---------------------------------------------------------------------------- | -------- |
| `curriculum/structure/blocks/lecture-finite-state-machines-for-enemies.json` | lecture  |
| `curriculum/structure/blocks/lecture-line-of-sight-and-raycasting.json`      | lecture  |
| `curriculum/structure/blocks/lecture-grid-pathfinding-with-a-star.json`      | lecture  |
| `curriculum/structure/blocks/workshop-stealth-game-prototype.json`           | workshop |

### 2. Lecture challenges

`lecture-finite-state-machines-for-enemies` × 3:

- "Why FSMs Beat If-Chains" — clarity, debuggability, scalability.
- "States, Transitions, Events" — the formal model.
- "Implementing an FSM in Plain JavaScript" — `class GuardFSM { ... }` running inside the enemy's update.

`lecture-line-of-sight-and-raycasting` × 3:

- "Vision Cones from Scratch" — angle + radius + direction; `Phaser.Math.Angle.Between`.
- "Raycasting Against a Tilemap" — step along the ray, query tiles, stop at first wall.
- "Optimization: Cone-First, Then Ray" — cheap reject before expensive ray.

`lecture-grid-pathfinding-with-a-star` × 3:

- "Grid Search Basics" — open set, closed set, g-cost, h-cost, f-cost.
- "Implementing A\* on a Tile Grid" — minimal complete implementation, ~50 LOC.
- "Frame-Budgeting Long Searches" — yield to next frame after N nodes expanded.

### 3. Workshop — `workshop-stealth-game-prototype` (45 steps)

A 1-room stealth game (reuses Sprint 10's tilemap approach): guard with vision cone, FSM (patrol → suspicious → alert → return), player must reach the goal without being seen for 3+ seconds.

Step plan:

1. Bootstrap MainScene + config.
2. Load tileset + simple tilemap.
3. Render layers (floor, walls).
4. Add player on a spawn point.
5. Add a goal flag on a spawn point.
6. Wire 8-direction movement.
7. Add a guard rectangle.
8. Add patrol-path waypoints (object layer).
9. Implement basic patrol: walk to next waypoint, then next.
10. Define a `GuardFSM` class with states: `PATROL`, `SUSPICIOUS`, `ALERT`, `RETURN`.
11. Wire current state + transition method.
12. Render guard's vision cone with `Graphics.fillTriangle`.
13. Cone follows guard rotation.
14. Compute angle + distance from guard to player.
15. If player inside cone radius and angle, attempt line-of-sight.
16. Implement raycast against walls layer using `tilemap.getTileAtWorldXY` along the ray.
17. If LOS clear, transition to `SUSPICIOUS`.
18. `SUSPICIOUS` state: pause patrol, rotate toward player.
19. Suspicion meter increases while player visible; decreases otherwise.
20. At meter max → `ALERT` state.
21. `ALERT`: chase player using A\* pathfinding to player's position.
22. Implement A\* against a binary collision grid built from the walls layer.
23. Move guard one node per tick along the path.
24. If guard touches player → game over.
25. If meter empties → `RETURN` state.
26. `RETURN`: A\* back to patrol path.
27. Once back, transition to `PATROL`.
28. Tint the cone yellow in suspicious, red in alert.
29. Add a shadow zone where the guard's vision is reduced.
30. Add multiple guards with different patrol routes.
31. Add a "noise" mechanic: running emits a noise that nearby guards detect (no LOS needed).
32. Crouch button: slow movement, no noise, smaller player hitbox.
33. HUD: stealth meter (how visible/audible the player is).
34. Goal: reach the flag — game won.
35. 3-second timer if visible: game lost.
36. Add a "distract" item: throw to lure guards.
37. Distraction is consumed; spawn a noise event at the throw target.
38. Persist best time in localStorage.
39. Add audio cues for spotted/alarm/return.
40. Honor `prefers-reduced-motion`: dim alarm flash; don't disable gameplay-relevant motion.
41. Polish: clamp guard pathing search to a reasonable budget per frame.
42. Polish: prevent guards stacking on the same waypoint.
43. Polish: handle door/key from object-layer.
44. Polish: clean up FSM event listeners on shutdown.
45. Final integration: complete a full stealth run end-to-end.

Reference solution in step 45.

### 4. Wire into superblock

```json
{
  "dashedName": "ai-state-machines-and-game-systems",
  "comingSoon": true,
  "modules": [
    {
      "dashedName": "enemy-ai-and-state-machines",
      "blocks": [
        "lecture-finite-state-machines-for-enemies",
        "lecture-line-of-sight-and-raycasting",
        "lecture-grid-pathfinding-with-a-star",
        "workshop-stealth-game-prototype"
      ]
    }
  ]
}
```

Keep `comingSoon: true`.

### 5. i18n + Playwright

`e2e/phaser-stealth-game.spec.ts`.

---

## Acceptance criteria

```bash
pnpm lint
pnpm test-curriculum-content
cd curriculum && pnpm test-tooling && cd ..
cd e2e && pnpm exec playwright test phaser-stealth-game.spec.ts --project=chromium && cd ..
pnpm develop
# Verify: guard cycles through PATROL → SUSPICIOUS → ALERT → RETURN; A* reaches the player; player can win without being detected.
```

---

## Definition of done

- [ ] All 45 workshop steps pass.
- [ ] FSM transitions are observable (debug overlay shows current state).
- [ ] A\* finds shortest path within frame budget.
- [ ] PR title: `feat(curriculum): add Phaser cert ch9 module 1 — AI + stealth game`.
