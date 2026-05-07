# Sprint 03 — Chapter 2 Module 2: Depth, tinting & graphics

**Goal:** Finish Chapter 2. Two lectures cover depth/blend modes and tinting/`Graphics`, a 20-step workshop wires up a "particle pickup" effect (recolor on hit, vector "+10" floater, fade), and the chapter wraps with its review and quiz. Flip Chapter 2's `comingSoon` flag to `false`.

**Prerequisites:** Sprint 02 merged.

**Out of scope:** Chapter 3.

---

## References

- `PHASER_CERTIFICATION_PLAN.md` §6 (Chapter 2 Module 2).
- `sprints/README.md` §S2–S10.
- Quiz reference: `curriculum/challenges/english/blocks/quiz-javascript-classes/67358ac128957c865dcf3ddf.md`.
- Review reference: `curriculum/challenges/english/blocks/review-javascript-classes/6723d13d756751caf871d59c.md`.
- Phaser docs: [`Phaser.GameObjects.Graphics`](https://newdocs.phaser.io/docs/3.80.1/Phaser.GameObjects.Graphics), [`setDepth`](https://newdocs.phaser.io/docs/3.80.1/Phaser.GameObjects.Components.Depth#setDepth), [`setTint`](https://newdocs.phaser.io/docs/3.80.1/Phaser.GameObjects.Components.Tint#setTint).

---

## ID allocation

| Block                                  | IDs                                                                            |
| -------------------------------------- | ------------------------------------------------------------------------------ |
| `lecture-depth-and-blend-modes`        | `66faa20000000000000000db` … `66faa20000000000000000dd` (3 challenges)         |
| `lecture-tinting-and-the-graphics-api` | `66faa20000000000000000de` … `66faa20000000000000000e0` (3 challenges)         |
| `workshop-particle-pickup-effect`      | `66faa20000000000000000e1` … `66faa20000000000000000f4` (20 steps)             |
| `review-sprites-and-animation`         | `66faad0000000000000000a1` (chapter 2 review, in the `66faad...` review range) |
| `quiz-sprites-and-animation`           | `66faac0000000000000000a1` (chapter 2 quiz, in the `66faac...` quiz range)     |

The review and quiz use the chapter-level dashedName (`sprites-and-animation`), not the module-level ones — this matches the v9 convention of one review + one quiz per chapter.

---

## Deliverables

### 1. Block JSONs

| Path                                                                    | Type     |
| ----------------------------------------------------------------------- | -------- |
| `curriculum/structure/blocks/lecture-depth-and-blend-modes.json`        | lecture  |
| `curriculum/structure/blocks/lecture-tinting-and-the-graphics-api.json` | lecture  |
| `curriculum/structure/blocks/workshop-particle-pickup-effect.json`      | workshop |
| `curriculum/structure/blocks/review-sprites-and-animation.json`         | review   |
| `curriculum/structure/blocks/quiz-sprites-and-animation.json`           | quiz     |

### 2. Lecture challenges

`lecture-depth-and-blend-modes` × 3:

- "Why Depth Matters: Painter's Algorithm in 2D" — render order, `setDepth(n)`, mixing depth with the scene `displayList`.
- "Blend Modes in Phaser" — `Phaser.BlendModes.ADD`, `MULTIPLY`, `SCREEN`; visual demo of each via `:::interactive_editor`.
- "Common Layering Recipes" — background → midground → entities → foreground → UI scene.

`lecture-tinting-and-the-graphics-api` × 3:

- "Tinting Sprites at Runtime" — `setTint`, `setTintFill`, multi-corner tints, common pitfalls (texture must support tint).
- "Drawing Shapes with `Graphics`" — `lineStyle`, `fillStyle`, `fillRect`, `strokeCircle`, generating runtime art.
- "Combining Sprites and Graphics for Effects" — example: shake-on-hit using a tinted `Graphics` overlay; sample built in the next workshop.

### 3. Workshop — `workshop-particle-pickup-effect` (20 steps)

A small scene where the player walks (using the sprite-sheet pattern from Sprint 02) and walks into coins. On pickup:

- Coin recolors red via `setTint`, then scales to 0 and destroys.
- A "+10" text rendered via `Graphics`+`text` floats up and fades.
- Background depth-orders correctly (coins above bg, "+10" above coins, score HUD on a UI camera that ignores world).

Step plan:

1. Bootstrap scene + load sprite sheets (reuses Sprint-02 hero/coin assets).
2. Add hero, world bg, cursor input.
3. Add a coin group with 5 coins.
4. Set explicit depths: `bg.setDepth(0)`, hero/coins `setDepth(10)`, HUD `setDepth(100)`.
5. Add `physics.add.overlap(hero, coins, onPickup)`.
6. In `onPickup`, `setTint(0xff3366)`.
7. Tween `scaleX/scaleY` to 0 over 200 ms, then destroy coin.
8. Render a "+10" text at the coin's position.
9. Tween the "+10" text's `y -= 30` and `alpha = 0` over 500 ms, destroy on complete.
10. Add a `Graphics` instance, draw a glowing ring around the player.
11. Animate the ring's radius via tween on each pickup.
12. Add `BlendModes.ADD` on the ring for an additive glow.
13. Add a coin-trail `Graphics` line that follows the player.
14. Score HUD with `setScrollFactor(0)` (lock to camera).
15. Add a second camera for the HUD overlay (introduces multi-camera in preparation for chapter 6).
16. Pulse the HUD text on score change via tween (yoyo).
17. Add a "all collected" overlay: full-screen `Graphics` rectangle alpha-faded over the scene.
18. Tween the overlay alpha 0 → 0.6 over 500 ms.
19. Add a "RESTART" text on the overlay; spacebar restarts the scene.
20. Final polish: clamp tween counts, prevent double-pickup, freeze input during overlay.

Each step has regex-based hints. Reference solution in step 20.

### 4. Review — `review-sprites-and-animation`

Single challenge `challengeType: 31`. Body uses `# --interactive--`. Sections:

- **Sprite sheets and atlases** — recap loading, frame indexing.
- **Animations** — `anims.create`, `frameRate`, `repeat`, `yoyo`, playback control.
- **Depth and blend modes** — `setDepth`, common BlendMode constants.
- **Tinting and Graphics** — `setTint`, drawing primitives.

Each section has a working `:::interactive_editor` snippet showing the pattern.

### 5. Quiz — `quiz-sprites-and-animation`

20 questions covering Module 1 + Module 2 concepts. Mirror the structure of `quiz-javascript-classes` exactly: 4 distractors per question, single correct answer, 18/20 to pass. Mix conceptual (e.g. "What does `frameRate: 12` mean?") and code-output questions (e.g. "What does `setDepth(-1)` do given …").

### 6. Wire blocks into superblock

Update `curriculum/structure/superblocks/certified-game-developer-with-phaser.json`:

```json
{
  "dashedName": "sprites-and-animation",
  "modules": [
    {
      "dashedName": "loading-sprite-sheets-and-atlases",
      "blocks": [
        "lecture-asset-pipeline-overview",
        "lecture-loading-sprite-sheets",
        "workshop-animated-character-explorer",
        "lab-sprite-sheet-debugger"
      ]
    },
    {
      "dashedName": "depth-tinting-and-graphics",
      "blocks": [
        "lecture-depth-and-blend-modes",
        "lecture-tinting-and-the-graphics-api",
        "workshop-particle-pickup-effect",
        "review-sprites-and-animation",
        "quiz-sprites-and-animation"
      ]
    }
  ]
}
```

**Remove the `comingSoon: true` flag from the `sprites-and-animation` chapter.** Chapter 2 is now live.

### 7. i18n

Add entries for all five new block dashedNames.

### 8. Playwright spec

`e2e/phaser-particle-pickup.spec.ts` — workshop-final-state smoke test (canvas mounts, animations + tweens running, score increments on simulated overlap).

---

## Acceptance criteria

```bash
pnpm lint
pnpm test-curriculum-content
cd curriculum && pnpm test-tooling && cd ..
cd e2e && pnpm exec playwright test phaser-particle-pickup.spec.ts --project=chromium && cd ..
pnpm develop
# Visit http://localhost:8000/learn/certified-game-developer-with-phaser/sprites-and-animation/
# Click into Module 1 (Sprint 02 work) and Module 2; confirm both render fully unlocked, no "Coming soon".
# Run the quiz: paste 18+ correct answers and confirm pass; paste 17 correct and confirm fail.
```

Attach: GIF of the particle-pickup workshop final state, screenshot of the chapter 2 landing page (no "Coming soon" badge).

---

## Definition of done

- [ ] All 20 workshop steps pass their regex hints.
- [ ] Quiz has exactly 20 questions, 4 distractors each, single answer each.
- [ ] Review renders with working `:::interactive_editor` blocks.
- [ ] Chapter 2 no longer flagged `comingSoon`.
- [ ] Playwright spec green.
- [ ] PR title: `feat(curriculum): finish Phaser cert ch2 — graphics, tinting, ch2 review/quiz`.
