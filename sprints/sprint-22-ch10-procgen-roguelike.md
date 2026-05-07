# Sprint 22 — Chapter 10 Module 1: Procedural generation + roguelike

**Goal:** Three lectures (seeded RNG, BSP rooms, loot tables) and the 60-step `workshop-roguelike-crawler` — a turn-based roguelike with procedurally generated dungeons.

**Prerequisites:** Sprint 21 merged.

**Out of scope:** Multiplayer (Sprint 23), deployment (Sprint 24), cert labs (Sprint 25).

---

## References

- `PHASER_CERTIFICATION_PLAN.md` §8 (Chapter 10 Module 1).
- Phaser docs: [`Phaser.Math.RandomDataGenerator`](https://newdocs.phaser.io/docs/3.80.1/Phaser.Math.RandomDataGenerator) for seeded RNG.
- BSP dungeon-generation reference: <https://www.roguebasin.com/index.php/Basic_BSP_Dungeon_generation> (concept; implementation from-scratch).

---

## ID allocation (Chapter 10 range = `66faaa...`)

| Block                                 | IDs                                                                |
| ------------------------------------- | ------------------------------------------------------------------ |
| `lecture-seeded-rng-and-determinism`  | `66faaa0000000000000000a1` … `66faaa0000000000000000a3`            |
| `lecture-bsp-room-generation`         | `66faaa0000000000000000a4` … `66faaa0000000000000000a6`            |
| `lecture-loot-tables-and-progression` | `66faaa0000000000000000a7` … `66faaa0000000000000000a9`            |
| `workshop-roguelike-crawler`          | `66faaa0000000000000000aa` … `66faaa0000000000000000e5` (60 steps) |

---

## Deliverables

### 1. Block JSONs

| Path                                                                   | Type     |
| ---------------------------------------------------------------------- | -------- |
| `curriculum/structure/blocks/lecture-seeded-rng-and-determinism.json`  | lecture  |
| `curriculum/structure/blocks/lecture-bsp-room-generation.json`         | lecture  |
| `curriculum/structure/blocks/lecture-loot-tables-and-progression.json` | lecture  |
| `curriculum/structure/blocks/workshop-roguelike-crawler.json`          | workshop |

### 2. Lecture challenges

`lecture-seeded-rng-and-determinism` × 3:

- "Seeded RNG and Why Determinism Matters" — same seed → same dungeon → reproducible bugs.
- "Phaser's `RandomDataGenerator`" — `pick`, `between`, `weightedPick`.
- "Avoiding `Math.random` for Game-Critical RNG" — separation of game RNG vs cosmetic RNG.

`lecture-bsp-room-generation` × 3:

- "Binary Space Partition for Dungeons" — recursive split of a rectangle until min size.
- "Placing Rooms Inside Leaves" — random sub-rectangle per leaf.
- "Connecting Rooms with Corridors" — connect sibling-leaf rooms in a tree.

`lecture-loot-tables-and-progression` × 3:

- "Weighted Loot Tables" — common/uncommon/rare/epic; weighted random pick.
- "Per-Floor Loot Curves" — better loot deeper in the dungeon.
- "Meta-Progression" — perma-unlocks across runs.

### 3. Workshop — `workshop-roguelike-crawler` (60 steps)

A turn-based roguelike: BSP-generated dungeon, FOV, FSM-driven enemies (reuses chapter 9 AI), loot tables, perma-death, run summary, persistent meta-progress.

Step plan (selected highlights):

1. Bootstrap MainScene + config (no real-time physics; turn-based).
2. Implement seeded RNG via `RandomDataGenerator`.
3. Implement BSP split: split rectangle horizontally or vertically based on aspect ratio.
4. Recurse until min-size.
5. Place a random room inside each leaf.
6. Connect sibling rooms with corridors.
7. Render the dungeon as a grid of tile rectangles.
8. Place player on a random spawn tile in the entry room.
9. Wire arrow-key turn-based movement (one tile per press).
10. Implement FOV: only render tiles within N steps from player.
11. Track explored tiles; render dimmed.
12. Place enemies in non-entry rooms.
13. Enemy turn after player turn.
14. Enemy AI: chase if visible, wander if not.
15. Combat: bumping enemy attacks; HP drops on hit.
16. Game over on HP zero.
17. Run summary with stats (turns, kills, depth).
18. Place an exit tile in the deepest room.
19. Stepping on exit advances to next floor.
20. Re-run BSP for next floor with deeper-RNG seed.
21. Track current floor.
22. HUD: HP, floor, turn count.
23. Add loot drops from enemies.
24. Loot tables per floor depth.
25. Items have rarities (common/uncommon/rare/epic).
26. Inventory grid (reuses Sprint 21).
27. Equippable items modify stats.
28. Consumable items (potions).
29. Spell scrolls with limited uses.
30. Add traps in some tiles.
31. Add chests with weighted loot.
32. Add boss room every 5 floors.
33. Boss has multi-stage AI.
34. Defeating boss yields meta-currency.
35. Persist meta-currency across runs in localStorage.
36. Title screen shop with meta-purchases (starting items, +HP, etc).
37. Apply meta-purchases at run start.
38. Run-summary screen with cause-of-death.
39. Save mid-run in case of disconnect.
40. Resume in-progress run on reload.
41. Add hunger/turn-counter mechanic.
42. Add status effects (poison, frozen).
43. Add ranged attack option.
44. Spell book lists available scrolls.
45. Tooltip on hover for items.
46. Map view (M key) showing whole dungeon (zoomed-out camera).
47. Difficulty modifiers (skip levels for higher rewards).
48. Daily-challenge seed (reuses today's date as seed, identical for all players).
49. Leaderboard (local-only): best depth reached.
50. Mobile touch input: tap to move toward direction.
51. Audio cues for hit, level-up, death (chapter 7).
52. Particle effects on enemy defeat (chapter 7).
53. Honor `prefers-reduced-motion` (no flash on damage).
54. Polish: prevent player-stuck-in-wall edge cases.
55. Polish: BSP doesn't generate impossibly small rooms.
56. Polish: clamp FOV recompute frequency.
57. Polish: defensive limits on dungeon depth.
58. Polish: clean up all timers/listeners on scene shutdown.
59. Polish: handle rapid input without queueing turns.
60. Final integration: complete a full 5-floor run, die, see meta-progress applied to next run.

Reference solution in step 60.

### 4. Wire into superblock

```json
{
  "dashedName": "procgen-multiplayer-and-deployment",
  "comingSoon": true,
  "modules": [
    {
      "dashedName": "procedural-generation",
      "blocks": [
        "lecture-seeded-rng-and-determinism",
        "lecture-bsp-room-generation",
        "lecture-loot-tables-and-progression",
        "workshop-roguelike-crawler"
      ]
    }
  ]
}
```

Keep `comingSoon: true`.

### 5. i18n + Playwright

`e2e/phaser-roguelike.spec.ts`.

---

## Acceptance criteria

```bash
pnpm lint
pnpm test-curriculum-content
cd curriculum && pnpm test-tooling && cd ..
cd e2e && pnpm exec playwright test phaser-roguelike.spec.ts --project=chromium && cd ..
pnpm develop
# Beat 5 floors; verify deterministic dungeons (same seed = same layout); verify meta-progress carries across runs.
```

---

## Definition of done

- [ ] All 60 workshop steps pass.
- [ ] BSP generates valid, connected dungeons across many seeds (no isolated rooms).
- [ ] Same seed reliably produces same dungeon.
- [ ] Meta-currency persists across runs.
- [ ] PR title: `feat(curriculum): add Phaser cert ch10 module 1 — procgen + roguelike`.
