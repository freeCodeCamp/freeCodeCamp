# Sprint 21 — Chapter 9 Module 2: UI scenes, HUD & dialogue + RPG slice

**Goal:** Two lectures (UI scenes; dialogue trees + typewriter) and a 55-step RPG vertical slice — the systems centerpiece of the certification. Reuses every previous chapter. Plus chapter 9 review + quiz, and flip Chapter 9 from `comingSoon` to live.

**Prerequisites:** Sprint 20 merged.

**Out of scope:** Chapter 10.

---

## References

- `PHASER_CERTIFICATION_PLAN.md` §8 (Chapter 9 Module 2).
- Phaser docs: [`Scene.launch`](https://newdocs.phaser.io/docs/3.80.1/Phaser.Scene#launch), [`scene.events`](https://newdocs.phaser.io/docs/3.80.1/Phaser.Scenes.Events).

---

## ID allocation

| Block                                          | IDs                                                                                                           |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `lecture-ui-scenes-with-scene-launch`          | `66faa90000000000000000d7` … `66faa90000000000000000d9`                                                       |
| `lecture-dialogue-trees-and-typewriter-effect` | `66faa90000000000000000da` … `66faa90000000000000000dc`                                                       |
| `workshop-rpg-vertical-slice`                  | `66faa90000000000000000dd` … `66faa90000000000000000ff` (55 steps; this fully consumes the `66faa9...` range) |
| `review-ai-state-machines-and-game-systems`    | `66faad0000000000000000a8`                                                                                    |
| `quiz-ai-state-machines-and-game-systems`      | `66faac0000000000000000a8`                                                                                    |

> If the workshop overflows the chapter-9 range, allocate from the start of the chapter-10 range and document it in the PR. The chapter-10 ID range starts at `66faaa...`.

### UI assets

Add to `client/static/curriculum-assets/phaser/ui/`:

- `dialogue-frame.png` — a 9-slice border for dialogue boxes.
- `inventory-slot.png` — single inventory slot graphic.
- `bitmapfont.png` + `bitmapfont.xml` — bitmap font for HUD/dialogue.

Update `LICENSE.md`. Total <500 KB.

---

## Deliverables

### 1. Block JSONs

| Path                                                                            | Type     |
| ------------------------------------------------------------------------------- | -------- |
| `curriculum/structure/blocks/lecture-ui-scenes-with-scene-launch.json`          | lecture  |
| `curriculum/structure/blocks/lecture-dialogue-trees-and-typewriter-effect.json` | lecture  |
| `curriculum/structure/blocks/workshop-rpg-vertical-slice.json`                  | workshop |
| `curriculum/structure/blocks/review-ai-state-machines-and-game-systems.json`    | review   |
| `curriculum/structure/blocks/quiz-ai-state-machines-and-game-systems.json`      | quiz     |

### 2. Lecture challenges

`lecture-ui-scenes-with-scene-launch` × 3:

- "Why a Separate UI Scene" — keeps HUD logic out of gameplay scene; survives gameplay-scene restarts.
- "Launching a Parallel Scene" — `this.scene.launch('UIScene')`.
- "Communicating Between Scenes" — `this.scene.get('GameScene').events.on('score:changed', ...)`.

`lecture-dialogue-trees-and-typewriter-effect` × 3:

- "Modeling a Dialogue Tree" — a node has text + branches.
- "Typewriter Effect" — render N characters per frame; skip on input.
- "Branching Choices and Conditions" — gating dialogue on flags/inventory.

### 3. Workshop — `workshop-rpg-vertical-slice` (55 steps)

A top-down RPG slice: 3-room dungeon with NPCs, branching dialogue, HUD with HP/MP, inventory grid (drag-drop), pickup/equip/use, save/load.

Step plan (highlights):

1–6. Bootstrap + tilemap loading + player + cursor input. 7. Add HP and MP variables. 8. Launch a `UIScene` in parallel. 9. UIScene listens for `hp:changed` and `mp:changed` events. 10. Render HP/MP bars in UIScene. 11. Add an NPC. 12. E to talk; emit `dialogue:start` event with a node ID. 13. UIScene shows a dialogue box at bottom. 14. Typewriter effect on text. 15. Skip-to-end on second tap. 16. Branching dialogue choices (A/B/C buttons). 17. Choices update game flags. 18. Branching based on flags (a previously-met NPC remembers). 19. Add an inventory grid (`Map<slotIndex, item>`). 20. Open with I key; UIScene handles. 21. Inventory slots are draggable (uses chapter-3 drag pattern). 22. Drop item on another slot to swap. 23. Drop item out of inventory to discard. 24. Use button on each slot (consume potion, equip weapon). 25. Equipping an item updates player stats. 26. Add 5 item types (potion, sword, shield, key, scroll). 27. Items pick up on overlap with world drops. 28. Random world drops from defeated enemies. 29. Add a basic combat system: melee attack swing. 30. Enemy FSM (reuses chapter 9 module 1 patterns). 31. HP damage on player hit. 32. MP cost on scroll use. 33. Scroll spell: AOE damage + particle effect. 34. Add a quest log: track active and completed quests. 35. NPC offers quest; accepting adds to log. 36. Completing a quest condition closes it and grants reward. 37. Chest with locked state requires key from inventory. 38. Add a multi-room map with door transitions (reuses chapter 5 dungeon explorer). 39. Save game state (HP, MP, position, inventory, quest progress, world flags) to localStorage. 40. Load game state on scene start. 41. Save slot UI (3 slots). 42. Continue / new game / load on the title screen. 43. Add ambient music (chapter 7). 44. SFX for hit, pickup, use, dialogue (chapter 7). 45. Volume settings persist (reuses chapter 7). 46. Add motion-reduced respect throughout. 47. Add accessibility: dialogue typewriter speed setting. 48. Mobile: virtual joystick + virtual A/B buttons. 49. Mobile: tap-to-talk near NPCs. 50. Polish: prevent dialogue while in combat. 51. Polish: pause game when inventory open. 52. Polish: cleanup all UIScene event listeners on shutdown. 53. Polish: prevent quest completion races. 54. Polish: clamp HP/MP to valid bounds. 55. Final integration: a full vertical-slice run from spawn → quest → combat → boss → save → reload → continue.

Reference solution in step 55.

### 4. Review + quiz

Sections covering: FSMs, line-of-sight, A\*, UI scenes, dialogue trees, inventory, quest tracking, save/load.

### 5. Wire into superblock

```json
{
  "dashedName": "ai-state-machines-and-game-systems",
  "modules": [
    {
      "dashedName": "enemy-ai-and-state-machines",
      "blocks": [
        /* unchanged from Sprint 20 */
      ]
    },
    {
      "dashedName": "ui-scenes-hud-and-dialogue",
      "blocks": [
        "lecture-ui-scenes-with-scene-launch",
        "lecture-dialogue-trees-and-typewriter-effect",
        "workshop-rpg-vertical-slice",
        "review-ai-state-machines-and-game-systems",
        "quiz-ai-state-machines-and-game-systems"
      ]
    }
  ]
}
```

**Remove `comingSoon: true` from the chapter.** No cert lab — chapter 9's complexity is the lab. Chapter 10 has the next two cert labs.

### 6. i18n + Playwright

`e2e/phaser-rpg-slice.spec.ts`.

---

## Acceptance criteria

```bash
pnpm lint
pnpm test-curriculum-content
cd curriculum && pnpm test-tooling && cd ..
cd e2e && pnpm exec playwright test phaser-rpg-slice.spec.ts --project=chromium && cd ..
pnpm develop
# Save → close → reopen → continue restores all state.
# Talk to NPC, accept quest, complete, see flag updated, dialogue branches accordingly.
```

---

## Definition of done

- [ ] All 55 workshop steps pass.
- [ ] Save/load is round-trip safe across page reload.
- [ ] All 5 item types behave correctly.
- [ ] Mobile virtual joystick + A/B buttons functional.
- [ ] Chapter 9 no longer `comingSoon`.
- [ ] PR title: `feat(curriculum): add Phaser cert ch9 module 2 — RPG slice + ch9 finalize`.
