# Sprint 11 — Chapter 5 Module 2: Dungeon explorer + ch5 finalize

**Goal:** Two lectures (collision-layer strategies + object-layers-as-game-logic), the 50-step dungeon explorer workshop, and chapter 5 review + quiz. Flip Chapter 5 from `comingSoon` to live. Chapter 5 has no cert lab — its capstone is the workshop itself, and the chapter ships unblocked once the review/quiz land.

**Prerequisites:** Sprint 10 merged.

**Out of scope:** Chapter 6.

---

## References

- `PHASER_CERTIFICATION_PLAN.md` §7 (Chapter 5 Module 2).
- Sprint 10's tilemap loading workshop reference solution.
- Phaser docs: [`Tilemaps.TilemapLayer.setCollisionByProperty`](https://newdocs.phaser.io/docs/3.80.1/Phaser.Tilemaps.TilemapLayer#setCollisionByProperty), [`map.findObject`](https://newdocs.phaser.io/docs/3.80.1/Phaser.Tilemaps.Tilemap#findObject), [`map.getObjectLayer`](https://newdocs.phaser.io/docs/3.80.1/Phaser.Tilemaps.Tilemap#getObjectLayer).

---

## ID allocation

| Block                                  | IDs                                                                |
| -------------------------------------- | ------------------------------------------------------------------ |
| `lecture-tile-collision-strategies`    | `66faa50000000000000000c5` … `66faa50000000000000000c7`            |
| `lecture-object-layers-for-game-logic` | `66faa50000000000000000c8` … `66faa50000000000000000ca`            |
| `workshop-top-down-dungeon-explorer`   | `66faa50000000000000000cb` … `66faa50000000000000000fc` (50 steps) |
| `review-tilemaps-and-level-design`     | `66faad0000000000000000a4`                                         |
| `quiz-tilemaps-and-level-design`       | `66faac0000000000000000a4`                                         |

---

## Deliverables

### 1. Block JSONs

| Path                                                                    | Type     |
| ----------------------------------------------------------------------- | -------- |
| `curriculum/structure/blocks/lecture-tile-collision-strategies.json`    | lecture  |
| `curriculum/structure/blocks/lecture-object-layers-for-game-logic.json` | lecture  |
| `curriculum/structure/blocks/workshop-top-down-dungeon-explorer.json`   | workshop |
| `curriculum/structure/blocks/review-tilemaps-and-level-design.json`     | review   |
| `curriculum/structure/blocks/quiz-tilemaps-and-level-design.json`       | quiz     |

### 2. Lecture challenges

`lecture-tile-collision-strategies` × 3:

- "Index-based vs Property-based Tile Collision" — `setCollision`, `setCollisionByProperty`, tradeoffs.
- "Per-Tile Rectangle Overrides" — custom hitboxes for irregular tiles.
- "Performance Tips" — only enable collision on layers that need it; cull off-screen tiles.

`lecture-object-layers-for-game-logic` × 3:

- "Object Layers as Game Data" — spawn points, doors, triggers, NPCs.
- "Reading Custom Properties" — Tiled custom-property panel; Phaser `properties` array.
- "Doors and Room Transitions" — pattern: door object → load next map → spawn at receiving door.

### 3. Workshop — `workshop-top-down-dungeon-explorer` (50 steps)

Loads `dungeon-01.json` (multi-room), renders, walks the player around, manages doors that swap rooms within the same map (or between maps), an NPC who tells you where to find a key, a locked door that requires the key, and a victory room.

Step plan (selected highlights — fill in regex hints during authoring):

1–6. Bootstrap, load map + tileset, render layers. 7. Add player from object-layer spawn point. 8. Configure wall collision. 9. Add cursor-key movement with 8-direction input. 10. Add the NPC sprite from an object-layer entry. 11. Add a "talk" action when the player presses E next to the NPC. 12. Render dialogue text via a UI scene. 13. Typewriter effect on dialogue text. 14. Dialogue advances on E or pointer-tap. 15. Mark the NPC as "talked-to" in scene state. 16. Add a key item pickup from object layer. 17. Show "Key obtained" notice. 18. Add a locked door object that requires `inventory.has('key')`. 19. Locked-door interaction: with key → unlock + transition; without → "you need a key" prompt. 20. Add a second room: another tilemap object layer or a sub-region of the same map. 21. Camera transitions between rooms (fade-out, swap, fade-in). 22. Persist room state (which doors are unlocked) across transitions. 23. Add a torch that emits a soft-light tween. 24. Add a chest object: open on E, drop a coin. 25. Add a hostile slime in a later room. 26. Slime patrol path defined by an object-layer polyline. 27. Slime damages player on overlap. 28. HP bar. 29. Player attack: punching swing in cardinal direction. 30. Slime takes damage on attack overlap. 31. Slime knockback on damage. 32. Slime defeated → drops loot. 33. Add a save point object: pressing E saves player position + inventory to localStorage. 34. Add a load-game flow at scene start. 35. Add multiple keys, multiple doors. 36. Add a "victory room" with a goal flag. 37. Goal flag → victory overlay + cinematic fade. 38. Add ambient music stub (placeholder; chapter 7 fills in). 39. Add minimap on a second camera (preview of chapter 6). 40. Render minimap from the floor layer at 0.1 scale. 41. Add a player marker on minimap. 42. Add room labels. 43. Polish: prevent NPC-talk-while-mid-attack. 44. Polish: clamp dialogue advance debounce. 45. Polish: prevent multiple slime damage stacks per frame. 46. Polish: door cooldown to prevent re-trigger. 47. Polish: camera bounds adjust per room. 48. Polish: input lock during scene transition. 49. Polish: clean up dialogue UI scene events on shutdown. 50. Final integration: complete run from spawn → key → door → slime → chest → save → victory.

Reference solution in step 50.

### 4. Review — `review-tilemaps-and-level-design`

Sections: tile grids, tilesets, layers, object layers, collision strategies, room transitions. Each with a runnable snippet.

### 5. Quiz — `quiz-tilemaps-and-level-design`

20 questions, 18 to pass.

### 6. Wire into superblock

```json
{
  "dashedName": "tilemaps-and-level-design",
  "modules": [
    {
      "dashedName": "tilemap-fundamentals",
      "blocks": [
        "lecture-what-is-a-tilemap",
        "lecture-loading-tiled-json-into-phaser",
        "workshop-first-tile-room"
      ]
    },
    {
      "dashedName": "collision-layers-and-object-layers",
      "blocks": [
        "lecture-tile-collision-strategies",
        "lecture-object-layers-for-game-logic",
        "workshop-top-down-dungeon-explorer",
        "review-tilemaps-and-level-design",
        "quiz-tilemaps-and-level-design"
      ]
    }
  ]
}
```

**Remove `comingSoon: true` from the chapter.** Chapter 5 has no cert lab — that's intentional; chapter 6's runner serves as the next cert checkpoint.

### 7. i18n + Playwright

Add i18n entries. Add `e2e/phaser-dungeon-explorer.spec.ts`.

---

## Acceptance criteria

```bash
pnpm lint
pnpm test-curriculum-content
cd curriculum && pnpm test-tooling && cd ..
cd e2e && pnpm exec playwright test phaser-dungeon-explorer.spec.ts --project=chromium && cd ..
pnpm develop
# /learn/certified-game-developer-with-phaser/tilemaps-and-level-design/ — chapter live.
# Walk a full run end-to-end in the workshop's final step.
```

Attach: GIF of the dungeon being explored end-to-end (NPC talk, key, door, slime, victory).

---

## Definition of done

- [ ] All 50 workshop steps pass.
- [ ] Save/load flow works across page reload.
- [ ] Chapter 5 no longer `comingSoon`.
- [ ] PR title: `feat(curriculum): add Phaser cert ch5 module 2 — dungeon explorer + ch5 finalize`.
