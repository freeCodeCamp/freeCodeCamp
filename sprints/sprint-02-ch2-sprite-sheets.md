# Sprint 02 — Chapter 2 Module 1: Sprite sheets & atlases

**Goal:** Author Chapter 2 Module 1 end-to-end. Lectures introduce the asset pipeline and sprite-sheet loading, the workshop builds an animated character explorer (~40 steps), and the lab forces the learner to debug a broken sprite-sheet load. First binary asset bundle for the certification lands here.

**Prerequisites:** Sprint 01 merged.

**Out of scope:** Chapter 2 Module 2 (depth/tinting/graphics — that's Sprint 03). Touching any other chapter.

---

## References

- `PHASER_CERTIFICATION_PLAN.md` §6 (Chapter 2 plan).
- `sprints/README.md` §S2–S10.
- Workshop step reference: `curriculum/challenges/english/blocks/learn-game-development-by-building-a-space-shooter-with-phaser/66faa1000000000000000003.md`.
- Lecture reference: `curriculum/challenges/english/blocks/lecture-understanding-how-to-work-with-classes-in-javascript/6733affc29df1304e2c97e88.md`.
- Lab reference: `curriculum/challenges/english/blocks/lab-space-shooter-with-phaser/66faa20000000000000000ab.md`.
- Phaser docs: [`Phaser.Animations.AnimationManager#create`](https://newdocs.phaser.io/docs/3.80.1/Phaser.Animations.AnimationManager#create), [`Loader.LoaderPlugin#spritesheet`](https://newdocs.phaser.io/docs/3.80.1/Phaser.Loader.LoaderPlugin#spritesheet).

---

## ID allocation

Allocate from the `66faa2...` chapter-2 range. The existing lab `lab-space-shooter-with-phaser` already burns `66faa20000000000000000ab`, so skip past it.

| Block                                  | IDs                                                                    |
| -------------------------------------- | ---------------------------------------------------------------------- |
| `lecture-asset-pipeline-overview`      | `66faa20000000000000000ac` … `66faa20000000000000000ae` (3 challenges) |
| `lecture-loading-sprite-sheets`        | `66faa20000000000000000af` … `66faa20000000000000000b1` (3 challenges) |
| `workshop-animated-character-explorer` | `66faa20000000000000000b2` … `66faa20000000000000000d9` (40 steps)     |
| `lab-sprite-sheet-debugger`            | `66faa20000000000000000da` (1 challenge)                               |

---

## Deliverables

### 1. Asset bundle 1 — sprite sheets

Add CC0 sprite sheets to `client/static/curriculum-assets/phaser/spritesheets/`. Use [Kenney's "Tiny Town"](https://www.kenney.nl/assets/tiny-town) or equivalent CC0 source.

| File            | Use                                                        |
| --------------- | ---------------------------------------------------------- |
| `hero-walk.png` | 4-direction 4-frame walk cycle, 16×16 frames, 64×64 total. |
| `coin.png`      | 8-frame coin spin, 16×16 frames, 128×16 total.             |
| `slime.png`     | 4-frame idle bob, 16×16 frames, 64×16 total.               |

Append three rows to `client/static/curriculum-assets/phaser/LICENSE.md` crediting source, author, and license URL for each PNG. Total bundle size <100 KB.

### 2. Block JSONs

| Path                                                                    | Type     |
| ----------------------------------------------------------------------- | -------- |
| `curriculum/structure/blocks/lecture-asset-pipeline-overview.json`      | lecture  |
| `curriculum/structure/blocks/lecture-loading-sprite-sheets.json`        | lecture  |
| `curriculum/structure/blocks/workshop-animated-character-explorer.json` | workshop |
| `curriculum/structure/blocks/lab-sprite-sheet-debugger.json`            | lab      |

Use the templates in `sprints/README.md` §S4.

### 3. Lecture challenges

`curriculum/challenges/english/blocks/lecture-asset-pipeline-overview/<id>.md` × 3:

- "What Is a Sprite Sheet?" — explain grid-of-frames, contrast with single images.
- "Sprite Sheets vs Texture Atlases" — fixed grid vs packed-with-JSON; tradeoffs.
- "Loading Strategies and Asset Budgets" — when to load up-front vs lazy; mobile constraints.

`curriculum/challenges/english/blocks/lecture-loading-sprite-sheets/<id>.md` × 3:

- "Loading a Sprite Sheet with `this.load.spritesheet`" — `frameWidth`, `frameHeight`, optional `endFrame`/`startFrame`.
- "Defining an Animation with `this.anims.create`" — `frames`, `frameRate`, `repeat`, `yoyo`.
- "Playing and Controlling Animations on a Sprite" — `sprite.anims.play`, `sprite.anims.stop`, `setFlipX`, `complete` event.

Each lecture challenge: `challengeType: 19`, body uses `# --interactive--` and `:::interactive_editor` blocks for runnable Phaser snippets. End each with 2–3 multiple-choice `# --questions--` (each block has `## --video-solution--`).

### 4. Workshop — `workshop-animated-character-explorer` (40 steps)

Builds a small interactive scene: load the hero sprite sheet, define `idle`/`walk-down`/`walk-up`/`walk-left`/`walk-right` animations, move the hero with cursor keys, flip horizontal on left/right, switch animations by direction, and spawn a coin that plays its spin animation forever.

Step-by-step plan (steps map approximately one concept each):

1. Declare `class MainScene extends Phaser.Scene` and constructor.
2. Add empty `preload`, `create`, `update`.
3. Add the Phaser `config` and `new Phaser.Game(config)` boilerplate.
4. `this.load.spritesheet("hero", "/curriculum-assets/phaser/spritesheets/hero-walk.png", { frameWidth: 16, frameHeight: 16 })`.
   5–8. Same for `coin` and `slime` sprite sheets, plus a static `bg` rectangle.
5. In `create`: render a tile-sprite background.
6. Spawn `this.player = this.physics.add.sprite(x, y, "hero", 0)`.
7. `this.player.setCollideWorldBounds(true)`, `this.player.setScale(2)`.
8. Create `cursors` from `createCursorKeys`.
9. Define an `idle` animation from frames 0..3 of `hero` at 6 FPS, repeat -1.
   14–17. Define `walk-down`/`walk-up`/`walk-left`/`walk-right` animations (frame range per direction).
10. In `update`: call `this.player.setVelocity(0)`.
11. If `cursors.left.isDown`, set X velocity, play `walk-left`, `setFlipX(false)`.
12. Same for right (with `setFlipX(true)`), up, down.
13. Else play `idle`.
14. Add a coin sprite at a fixed point.
15. Define a `coin-spin` animation, repeat -1.
16. `coin.anims.play("coin-spin")`.
17. Add a slime that bobs in place using `idle` anim.
18. Track which direction the player is facing and only switch animation if direction changed (avoid retriggering the same anim every frame).
    27–30. Add multiple coins as a group, randomly placed.
19. Add `this.physics.add.overlap(player, coins, collectCoin)`.
20. `collectCoin` plays a tween that scales the coin to 0 then destroys it.
21. Add a score counter HUD (`this.add.text`).
    34–37. Add a slime patrol that walks left/right and uses `setFlipX` to face direction.
22. Add a hit overlap between player and slime that flashes the camera.
23. Add an "all coins collected" check that fires a "Level Cleared" overlay.
24. Final polish step: pin the camera, lock world bounds, freeze input on level cleared.

Each step's `# --hints--` uses regex `assert.match(code, /…/)` against the canonical solution. Each step's seed has `--fcc-editable-region--` markers around the change zone, mirroring the existing space-shooter workshop's pattern.

The reference solution lives in step 40's `# --solutions--` block. Verify locally that the reference solution renders, animates, and accepts input before opening the PR.

### 5. Lab — `lab-sprite-sheet-debugger`

Single challenge `challengeType: 26`. Description hands the learner a deliberately broken `script.js` (wrong `frameWidth`, missing `endFrame`, animation defined but never played). User stories (12 minimum):

1. The hero sprite sheet should be loaded with `frameWidth` `16` and `frameHeight` `16`.
2. An animation named `walk-right` should be defined using frames 8 through 11.
3. The hero sprite should play the `walk-right` animation when the right arrow key is held.
4. … (continue covering every concept the workshop introduced).

Hints are regex assertions; the `# --solutions--` block contains the corrected `script.js`.

### 6. Wire blocks into the superblock

Edit `curriculum/structure/superblocks/certified-game-developer-with-phaser.json`. In the `sprites-and-animation` chapter (currently empty + `comingSoon: true`), replace the empty `modules` with:

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
    }
  ]
}
```

Keep `comingSoon: true` on the chapter — Sprint 03 finishes Module 2 + review/quiz before flipping it.

### 7. i18n

Add titles and intros under `certified-game-developer-with-phaser.blocks` in `client/i18n/locales/english/intro.json` for each new block.

### 8. Playwright spec

Create `e2e/phaser-animated-character-explorer.spec.ts` mirroring `e2e/phaser-space-shooter.spec.ts`. It should:

- Boot the workshop's final step in the multifile editor.
- Verify the canvas mounts and the hero animation plays (look for non-static frames via `page.evaluate` of the canvas pixel hash, or use Phaser's debug exposure as the existing spec does).
- Verify cursor key input moves the hero.

---

## Step-by-step execution plan

1. Branch from latest `main`: `git checkout -b feat/phaser-cert-ch2-m1`.
2. Drop the asset bundle (Deliverable 1) and update `LICENSE.md`.
3. Use `pnpm create-new-project` to bootstrap the workshop block, then `tools/challenge-helper-scripts/create-next-step.ts` for steps 2–40.
4. Author all 40 step `.md` files in order, validating each one's regex hints against the running reference solution.
5. Hand-author the two lecture blocks and their challenge `.md` files (`challengeType: 19`).
6. Hand-author the lab block and its single capstone `.md` (`challengeType: 26`).
7. Update `certified-game-developer-with-phaser.json` (Deliverable 6).
8. Add i18n entries (Deliverable 7).
9. Author the Playwright spec (Deliverable 8).
10. Run the verification gate.

---

## Acceptance criteria

```bash
pnpm lint
pnpm test-curriculum-content
cd curriculum && pnpm test-tooling && cd ..
cd e2e && pnpm exec playwright test phaser-animated-character-explorer.spec.ts --project=chromium && cd ..
pnpm develop
# Visit http://localhost:8000/learn/certified-game-developer-with-phaser/sprites-and-animation/loading-sprite-sheets-and-atlases/
# Click each lecture challenge — confirm the interactive editors render and questions are answerable.
# Open the workshop — step through the first 5 steps and the last 5 steps, confirm hint pass/fail behave correctly.
# Open the lab — paste the reference solution from --solutions-- and confirm all hints pass.
```

GIF the workshop's final state (animated hero walking, coins spinning) and attach to PR.

---

## Definition of done

- [ ] All 40 workshop steps pass their regex hints against the canonical solution.
- [ ] Lab passes against its `--solutions--` reference.
- [ ] Both lectures render with working `:::interactive_editor` blocks and answerable questions.
- [ ] Asset bundle PNGs total <100 KB.
- [ ] `LICENSE.md` lists every new asset.
- [ ] Playwright spec runs green.
- [ ] No translations touched; no dependency bumps; no edits to non-Ch2 files.
- [ ] PR title: `feat(curriculum): add Phaser cert ch2 module 1 — sprite sheets`.
