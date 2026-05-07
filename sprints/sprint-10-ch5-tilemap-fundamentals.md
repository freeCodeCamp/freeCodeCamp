# Sprint 10 — Chapter 5 Module 1: Tilemap fundamentals

**Goal:** Two lectures on the Tiled→Phaser pipeline, a 30-step workshop loading the certification's first hand-authored tilemap, and asset bundle 2 (tilesets + sample maps).

**Prerequisites:** Sprint 09 merged.

**Out of scope:** Dungeon explorer workshop + ch5 finalize (Sprint 11).

---

## References

- `PHASER_CERTIFICATION_PLAN.md` §7 (Chapter 5 Module 1).
- Tiled docs: <https://doc.mapeditor.org/en/stable/>.
- Phaser docs: [`Phaser.Tilemaps.Tilemap`](https://newdocs.phaser.io/docs/3.80.1/Phaser.Tilemaps.Tilemap), [`load.tilemapTiledJSON`](https://newdocs.phaser.io/docs/3.80.1/Phaser.Loader.LoaderPlugin#tilemapTiledJSON).

---

## ID allocation (Chapter 5 range = `66faa5...`)

| Block                                    | IDs                                                                |
| ---------------------------------------- | ------------------------------------------------------------------ |
| `lecture-what-is-a-tilemap`              | `66faa50000000000000000a1` … `66faa50000000000000000a3`            |
| `lecture-loading-tiled-json-into-phaser` | `66faa50000000000000000a4` … `66faa50000000000000000a6`            |
| `workshop-first-tile-room`               | `66faa50000000000000000a7` … `66faa50000000000000000c4` (30 steps) |

---

## Deliverables

### 1. Asset bundle 2 — tilemaps

Add to `client/static/curriculum-assets/phaser/tilemaps/`:

| File                  | Use                                                                       |
| --------------------- | ------------------------------------------------------------------------- |
| `tileset-dungeon.png` | 16×16 tile pack, ~120 tiles. Source: Kenney's "Roguelike/RPG" pack (CC0). |
| `room-01.json`        | Tiled-exported JSON, 20×15 tiles, 2 layers (`floor`, `walls`).            |
| `dungeon-01.json`     | Tiled-exported JSON, 60×40 tiles, multi-room. Used in Sprint 11.          |

Update `LICENSE.md`. Total bundle <800 KB.

### 2. Block JSONs

| Path                                                                      | Type     |
| ------------------------------------------------------------------------- | -------- |
| `curriculum/structure/blocks/lecture-what-is-a-tilemap.json`              | lecture  |
| `curriculum/structure/blocks/lecture-loading-tiled-json-into-phaser.json` | lecture  |
| `curriculum/structure/blocks/workshop-first-tile-room.json`               | workshop |

### 3. Lecture challenges

`lecture-what-is-a-tilemap` × 3:

- "Tile Grids and Tilesets" — what a tile is, what a tileset is, why tiles repeat.
- "Layers" — `floor`, `walls`, `decorations`; rendering order; collision layers.
- "Object Layers" — non-tile data (spawn points, doors, triggers).

`lecture-loading-tiled-json-into-phaser` × 3:

- "Loading the JSON and the Tileset Image" — `load.tilemapTiledJSON` + `load.image`.
- "Building the Tilemap in `create`" — `make.tilemap`, `addTilesetImage`, `createLayer`.
- "Rendering Multiple Layers in Order" — depth + scroll.

### 4. Workshop — `workshop-first-tile-room` (30 steps)

Loads `room-01.json`, renders both layers, places a player on a spawn point from an object layer, and lets the player walk on the floor while colliding with walls.

Step plan:

1. Bootstrap MainScene + config.
2. `this.load.image('tiles', '/curriculum-assets/phaser/tilemaps/tileset-dungeon.png')`.
3. `this.load.tilemapTiledJSON('room1', '/curriculum-assets/phaser/tilemaps/room-01.json')`.
4. In `create`, `const map = this.make.tilemap({ key: 'room1' })`.
5. `const tileset = map.addTilesetImage('dungeon', 'tiles')`.
6. `const floor = map.createLayer('floor', tileset, 0, 0)`.
7. `const walls = map.createLayer('walls', tileset, 0, 0)`.
8. Set explicit depths on floor and walls.
9. Add the player at a fixed spawn point (preview of object-layer in step 17).
10. Wire cursor-key movement.
11. Configure walls layer collision: `walls.setCollisionByProperty({ collides: true })`.
12. `physics.add.collider(player, walls)`.
13. Set world bounds to map size: `physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels)`.
14. `cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels)`.
15. `cameras.main.startFollow(player)`.
16. Render a debug-collision overlay on a hotkey.
17. Read the object layer: `const spawn = map.findObject('objects', o => o.name === 'spawn')`.
18. Move player to `spawn.x, spawn.y`.
19. Add a door object from the object layer.
20. On overlap with the door, log "next room" (placeholder for Sprint 11).
21. Add an item pickup from object layer (`type: 'coin'`).
22. Group all coin objects, add overlap with player.
23. Score on coin pickup.
24. HUD: score, room name (read from map properties).
25. Add depth sorting between player and wall tiles for over/under appearance.
26. Add a "torch" decoration that pulses tint via tween.
27. Add a `setCollision(idx, true)` example for tiles flagged by index instead of property (alternative API).
28. Compare both flagging APIs.
29. Add a destroy-tile call on a hotkey: `walls.removeTileAt(x, y)`.
30. Final polish: clean up event listeners, lock player to world bounds.

Reference solution in step 30.

### 5. Wire into superblock

```json
{
  "dashedName": "tilemaps-and-level-design",
  "comingSoon": true,
  "modules": [
    {
      "dashedName": "tilemap-fundamentals",
      "blocks": [
        "lecture-what-is-a-tilemap",
        "lecture-loading-tiled-json-into-phaser",
        "workshop-first-tile-room"
      ]
    }
  ]
}
```

Keep `comingSoon: true`.

### 6. i18n + Playwright

Add i18n entries. Add `e2e/phaser-first-tile-room.spec.ts`.

---

## Acceptance criteria

```bash
pnpm lint
pnpm test-curriculum-content
cd curriculum && pnpm test-tooling && cd ..
cd e2e && pnpm exec playwright test phaser-first-tile-room.spec.ts --project=chromium && cd ..
pnpm develop
# Workshop final step: tilemap renders, player walks freely on floor, blocks on walls, picks up coins.
```

---

## Definition of done

- [ ] Asset bundle 2 lands with `LICENSE.md` updated.
- [ ] All 30 workshop steps pass.
- [ ] Tilemap renders correctly with both layers and at least one object-layer spawn.
- [ ] Playwright spec green.
- [ ] PR title: `feat(curriculum): add Phaser cert ch5 module 1 — tilemap fundamentals`.
