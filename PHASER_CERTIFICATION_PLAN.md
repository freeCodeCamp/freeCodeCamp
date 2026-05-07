# Certified Game Developer with Phaser — Curriculum Extension Plan

A complete, certification-grade follow-on curriculum that builds on the recently merged "Learn Game Development by Building a Space Shooter with Phaser" workshop and its lab capstone. The proposal is to graduate this material out of the legacy `javascript-algorithms-and-data-structures-22` superblock and into a brand new, self-contained certification: **Certified Game Developer with Phaser** (`certified-game-developer-with-phaser`).

This document is the design spec, not the implementation. It describes the chapters, modules, blocks, projects, quizzes, labs, capstones, asset strategy, ID/file layout, and rollout roadmap a contributor would need to build the certification end-to-end.

---

## 1. Vision

Today, the Phaser content is one workshop and one lab tucked inside the JS-DSA-22 superblock. It teaches a single game (top-down space shooter) and stops. After 65 steps the learner can wire up a `Phaser.Game`, draw sprites, drive arcade physics, fire bullets, spawn enemies, transition to a `GameOverScene`, and ship a single playable game.

That's a great taster. It is not a game-development education.

**Certified Game Developer with Phaser** turns that taster into a full certification:

- **A complete vertical**: foundations → animation → physics → tilemaps → camera → audio → tweens/FX → AI → systems & UI → procedural generation → multiplayer → performance & deployment.
- **A portfolio of finished games**: 8+ workshop games and 5 capstone certification projects covering every major 2D genre (shooter, platformer, brick breaker, endless runner, match-3, top-down RPG, roguelike, real-time multiplayer).
- **Real freeCodeCamp pedagogy**: every module mixes lectures (theory + interactive editors), workshops (long step-by-step builds), labs (small targeted exercises), reviews (recap pages), quizzes (20-question gates), and `cert-project` modules.
- **A real certification**: registered in `curriculum/structure/curriculum.json` under `certifications`, gated by 5 user-story labs, claimable like RWD, JS-Algos, RDB, etc.

The bar: a learner who finishes this should be able to ship a polished 2D game on itch.io / GitHub Pages without reaching for a tutorial.

---

## 2. Existing baseline & reuse strategy

What already exists in this PR:

| Block                                                            | Type     | Purpose                                               | Steps |
| ---------------------------------------------------------------- | -------- | ----------------------------------------------------- | ----- |
| `learn-game-development-by-building-a-space-shooter-with-phaser` | workshop | Step-by-step construction of a top-down space shooter | 65    |
| `lab-space-shooter-with-phaser`                                  | lab      | User-story rebuild from blank file                    | 1     |

Both are currently wired into `curriculum/structure/superblocks/javascript-algorithms-and-data-structures-22.json` as flat blocks. They cover: Phaser game config, scene lifecycle (`preload` / `create` / `update`), arcade physics, cursor & key input, physics groups, timed events, overlap collisions, score/lives HUD, scene transitions with data, and a win/lose end state.

**Reuse plan:**

1. Keep both blocks exactly as-is (they're shipping). Deep-link to them from the new superblock as the **first chapter's capstone workshop + lab**, and remove them from JS-DSA-22 to avoid double-counting (or leave a redirect note in the v8 superblock — see Open Decisions §15).
2. Treat the existing 65-step build as the canonical "Chapter 1 capstone." Everything in chapters 2–10 builds upward from those primitives — the new content never re-teaches what the space shooter already taught.
3. Carry over the inline-SVG-as-data-URI asset convention used in the current block as the default for prototype-grade lessons. Real sprite sheets, tilemaps, and audio show up only in chapters 2, 5, and 7, where the asset strategy pivots (see §10).

---

## 3. Pedagogical philosophy

Every chapter follows the same loop, modeled directly on `javascript-v9` and `responsive-web-design-v9`:

1. **Lecture(s)** — `challengeType: 19` interactive-editor pages that introduce one concept at a time, each ending with 2–3 multiple-choice questions.
2. **Workshop(s)** — `challengeType: 0`, multifile, step-by-step builds (10–60 steps) where the learner constructs a complete, runnable artifact. This is where most learning happens.
3. **Lab(s)** — `challengeType: 26`, single-file user-story rebuilds where the learner proves they can do it without hand-holding.
4. **Review** — `challengeType: 31` single recap page collecting the chapter's key takeaways with `:::interactive_editor` snippets.
5. **Quiz** — `challengeType: 8`, 20 questions, must answer 18 correctly to pass. Questions test concepts taught in the chapter, not trivia.
6. **Cert-project module** — for chapters that gate the certification, a `moduleType: "cert-project"` module wrapping a single capstone lab.

**Three rules** that every block must honor:

- **Build, don't lecture.** Lectures are short and always lead into a workshop or lab. No standalone theory chapters.
- **Compounding game.** Each chapter ends with a complete, playable game. The next chapter does not start from zero — it imports patterns from prior chapters.
- **Genre per chapter.** Chapter N introduces system N + ships genre N. The two are paired so the system is justified by the genre's demands (e.g. tilemaps exist because chapter 5 builds a dungeon explorer that needs them).

---

## 4. Block taxonomy reference

For contributors building this out, the v9 block types and the JSON shape they require:

### Lecture block

```json
{
  "blockLabel": "lecture",
  "blockLayout": "challenge-list",
  "isUpcomingChange": false,
  "dashedName": "lecture-understanding-the-phaser-game-loop",
  "challengeOrder": [
    { "id": "<24-hex-id>", "title": "What Is a Game Loop?" },
    { "id": "<24-hex-id>", "title": "How Phaser's Update Loop Works" }
  ],
  "helpCategory": "JavaScript"
}
```

Each challenge file uses `challengeType: 19`, an `# --interactive--` body with `:::interactive_editor` blocks, and a `# --questions--` section with 2–3 multiple-choice questions ending in `## --video-solution--`.

### Workshop block

```json
{
  "blockLabel": "workshop",
  "blockLayout": "challenge-grid",
  "isUpcomingChange": false,
  "usesMultifileEditor": true,
  "hasEditableBoundaries": true,
  "dashedName": "workshop-side-scrolling-platformer",
  "challengeOrder": [
    { "id": "<id>", "title": "Step 1" },
    { "id": "<id>", "title": "Step 2" }
  ],
  "helpCategory": "JavaScript"
}
```

Step files use `challengeType: 0` and `--fcc-editable-region--` markers. The Phaser CDN is loaded in the seed HTML, exactly as the existing space-shooter steps do.

### Lab block

```json
{
  "blockLabel": "lab",
  "blockLayout": "link",
  "isUpcomingChange": false,
  "usesMultifileEditor": true,
  "dashedName": "lab-brick-breaker",
  "challengeOrder": [{ "id": "<id>", "title": "Build a Brick Breaker" }],
  "helpCategory": "JavaScript"
}
```

The single challenge uses `challengeType: 26`, a numbered list of user stories under `# --description--`, regex hint assertions, and a working `# --solutions--` block.

### Review & Quiz blocks

Both use `blockLayout: "link"`, a single challenge each, and `challengeType: 31` (review) or `challengeType: 8` (quiz). The quiz file contains a `# --quizzes--` section with 20 `### --question--` entries; the description states "you must correctly answer at least 18 of the 20 questions."

### Cert-project module

```json
{
  "moduleType": "cert-project",
  "dashedName": "lab-tower-defense",
  "blocks": ["lab-tower-defense"]
}
```

Lives inside a chapter's `modules` array. The block it points at is a normal lab; the `cert-project` flag is what ties it to the certification claim.

---

## 5. Curriculum architecture

The certification is a single v9-style superblock with **10 chapters**. Chapter 1 absorbs the existing space-shooter content; chapters 2–10 are new. Each chapter ends in either an internal capstone (workshop + lab) or a cert-project lab that counts toward the certification claim.

### Chapter map

| #   | Chapter                                         | New systems introduced                                                                                             | Genre shipped                           | Cert lab                                                               |
| --- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------- | ---------------------------------------------------------------------- |
| 1   | Foundations of Phaser Game Development          | Game loop, scenes, config, arcade physics basics, input, groups, collisions                                        | Top-down space shooter                  | — (uses existing lab)                                                  |
| 2   | Sprites, Animations & Visual Polish             | Sprite sheets, atlases, `this.anims`, depth/blend modes, tinting, `Phaser.GameObjects.Graphics`                    | Animated character explorer             | —                                                                      |
| 3   | Player Control & Cross-Device Input             | Keyboard maps, pointer/touch, virtual gamepad, input debouncing, drag/swipe                                        | Mobile-first brick breaker              | **Lab: Brick Breaker**                                                 |
| 4   | Arcade Physics Deep Dive                        | Bodies, drag, gravity, colliders vs overlaps, static groups, body offsets, slope handling                          | Side-scrolling platformer               | **Lab: Platformer Level 1-1**                                          |
| 5   | Tilemaps & Level Design with Tiled              | Tiled JSON pipeline, tile layers, collision-by-tile, object layers, multi-room transitions                         | Top-down dungeon explorer               | —                                                                      |
| 6   | Camera, Worlds & Parallax                       | Camera follow + lerp, deadzone, shake, world bounds, multi-camera UI overlay, parallax background                  | Side-scrolling endless runner           | **Lab: Endless Runner**                                                |
| 7   | Audio & Game Feel                               | `WebAudio` sound, music with fade, tweens for hit-pause, particles, screen shake, "juice"                          | Arcade brawler with juicy effects       | —                                                                      |
| 8   | Tweens, FX & Matter.js                          | Tween chains/timelines, easing, particle emitters, post-processing pipelines, intro to Matter physics              | Match-3 puzzle + slingshot launcher     | **Lab: Match-3**                                                       |
| 9   | AI, State Machines & Game Systems               | FSMs, behavior-tree primitives, line-of-sight, simple A\*, UI scenes, HUD, dialogue, inventory, localStorage saves | Top-down RPG slice                      | —                                                                      |
| 10  | Procedural Generation, Multiplayer & Deployment | Seeded RNG, BSP rooms, run-based progression, local multiplayer, networking patterns, mobile scaling, build & ship | Roguelike crawler + 2-player party game | **Lab: Roguelike Dungeon** + **Lab: Real-Time Multiplayer Party Game** |

### Block-count budget

| Block type                     | Per chapter (avg) | x10 chapters | Total                      |
| ------------------------------ | ----------------- | ------------ | -------------------------- |
| Lectures (4–6 challenges each) | 2 lecture blocks  | 20           | ~80–120 lecture challenges |
| Workshops (20–60 steps each)   | 1 workshop block  | 10           | ~300–500 workshop steps    |
| Labs (single capstone each)    | 1–2 labs          | 12           | 12 labs                    |
| Reviews                        | 1 review          | 10           | 10 reviews                 |
| Quizzes (20 questions each)    | 1 quiz            | 10           | 10 quizzes (200 questions) |
| Cert-project modules           | varies            | 5            | 5 cert labs                |

Roughly the same order of magnitude as `javascript-v9` (~30 modules, ~750 challenges), which is the right scale for a full certification.

### Top-level superblock JSON (target shape)

`curriculum/structure/superblocks/certified-game-developer-with-phaser.json`:

```json
{
  "chapters": [
    {
      "dashedName": "phaser-foundations",
      "modules": [
        {
          "dashedName": "phaser-game-loop-and-scenes",
          "blocks": [
            "lecture-introduction-to-game-development",
            "lecture-understanding-the-phaser-game-loop",
            "workshop-hello-phaser-coin-collector",
            "review-phaser-foundations",
            "quiz-phaser-foundations"
          ]
        },
        {
          "dashedName": "arcade-physics-and-input-basics",
          "blocks": [
            "lecture-arcade-physics-basics",
            "lecture-keyboard-and-input",
            "learn-game-development-by-building-a-space-shooter-with-phaser",
            "lab-space-shooter-with-phaser",
            "review-arcade-physics-basics",
            "quiz-arcade-physics-basics"
          ]
        }
      ]
    },
    {
      "dashedName": "sprites-and-animation",
      "modules": [
        /* … */
      ]
    },
    {
      "dashedName": "player-control-and-input",
      "modules": [
        /* … */
      ]
    },
    {
      "dashedName": "arcade-physics-deep-dive",
      "modules": [
        /* … */
      ]
    },
    {
      "dashedName": "tilemaps-and-level-design",
      "modules": [
        /* … */
      ]
    },
    {
      "dashedName": "camera-worlds-and-parallax",
      "modules": [
        /* … */
      ]
    },
    {
      "dashedName": "audio-and-game-feel",
      "modules": [
        /* … */
      ]
    },
    {
      "dashedName": "tweens-fx-and-matter-physics",
      "modules": [
        /* … */
      ]
    },
    {
      "dashedName": "ai-state-machines-and-game-systems",
      "modules": [
        /* … */
      ]
    },
    {
      "dashedName": "procgen-multiplayer-and-deployment",
      "modules": [
        /* … */
      ]
    },
    {
      "chapterType": "exam",
      "dashedName": "certified-game-developer-with-phaser-exam",
      "comingSoon": true,
      "modules": [
        {
          "dashedName": "certified-game-developer-with-phaser-exam",
          "comingSoon": true,
          "blocks": ["exam-certified-game-developer-with-phaser"]
        }
      ]
    }
  ]
}
```

The exam chapter is optional for v1 (mark `comingSoon: true` and ship without it, like `full-stack-developer-v9` does today). The cert is claimable based on the 5 cert-project labs alone.

---

## 6. Detailed chapter plans — Chapters 1–3

### Chapter 1 — Foundations of Phaser Game Development

**Why it exists:** Get the learner from zero to "I have a running Phaser game on screen with a player I can move," then absorb the existing space-shooter workshop as the chapter capstone.

**Learning outcomes.** By the end the learner can: explain what a game loop is, configure `Phaser.Game`, structure a `Phaser.Scene` with `preload`/`create`/`update`, draw and move sprites with arcade physics, read keyboard input, manage groups, detect overlaps, render HUD text, and transition between scenes with payload data.

**Modules:**

1. `phaser-game-loop-and-scenes`
   - `lecture-introduction-to-game-development` — what a game loop is, frames vs ticks, why fixed-step matters; ends with 3 questions.
   - `lecture-understanding-the-phaser-game-loop` — `Phaser.Game`, `config`, scene lifecycle, `preload`/`create`/`update`, `time` & `delta` arguments.
   - `workshop-hello-phaser-coin-collector` (~25 steps) — first scene, draw a player, move with cursor keys, spawn coins, score them. Pure prototype, no physics groups. Acts as a runway into the existing space-shooter workshop.
   - `review-phaser-foundations`
   - `quiz-phaser-foundations`
2. `arcade-physics-and-input-basics`
   - `lecture-arcade-physics-basics` — bodies, velocity, world bounds, gravity vector, overlaps vs colliders.
   - `lecture-keyboard-and-input` — `createCursorKeys`, `addKey`, polling vs events, input cooldowns.
   - **`learn-game-development-by-building-a-space-shooter-with-phaser`** (existing 65-step workshop, dropped in here unchanged).
   - **`lab-space-shooter-with-phaser`** (existing single-file lab, dropped in here unchanged).
   - `review-arcade-physics-basics`
   - `quiz-arcade-physics-basics`

**Asset strategy.** Inline data-URI SVGs only, matching the existing block. Zero external assets.

**Prerequisites surfaced in copy.** OOP & classes (covered in JS-DSA-22 / `learn-intermediate-oop-by-building-a-platformer-game`), ES6 modules, arrow functions, basic DOM understanding.

---

### Chapter 2 — Sprites, Animations & Visual Polish

**Why it exists:** The space shooter used static SVG rectangles. Real games breathe — they have walk cycles, idle bobs, hit flashes, particles, depth ordering. This chapter teaches the `this.anims` system and the visual primitives that make a game stop looking like a tech demo.

**Learning outcomes.** Load and use sprite sheets and texture atlases; create and play animations with `this.anims.create`/`sprite.anims.play`; use frames, frame rates, repeat, yoyo; layer with `setDepth`; tint and recolor with `setTint`; use `Phaser.GameObjects.Graphics` for runtime shape rendering; understand blend modes and alpha.

**Modules:**

1. `loading-sprite-sheets-and-atlases`
   - `lecture-asset-pipeline-overview` — single images vs sprite sheets vs texture atlases, why atlases matter.
   - `lecture-loading-sprite-sheets` — `this.load.spritesheet`, frame width/height, `frameWidth`/`frameHeight`/`endFrame`.
   - `workshop-animated-character-explorer` (~40 steps) — load a 4-direction walk-cycle sprite sheet, play idle/walk/run animations, flip on direction change, add an idle bob tween.
   - `lab-sprite-sheet-debugger` — small lab where the user is given a broken sprite-sheet load and must fix `frameWidth`/`endFrame`.
   - `review-sprite-sheets-and-atlases`
   - `quiz-sprite-sheets-and-atlases`
2. `depth-tinting-and-graphics`
   - `lecture-depth-and-blend-modes`
   - `lecture-tinting-and-the-graphics-api`
   - `workshop-particle-pickup-effect` (~20 steps) — recolor sprites on hit, draw a vector "+10" floater with `Graphics`, fade with tween.
   - `review-depth-tinting-and-graphics`
   - `quiz-depth-tinting-and-graphics`

**Asset strategy.** Switches from inline SVGs to a hosted spritesheet PNG (a small CC0 sprite sheet, e.g. Kenney's tiny dungeon, hosted under `client/static/curriculum-assets/phaser/...` or fetched from the existing freeCodeCamp asset CDN). One PNG per workshop, max ~40 KB each. See §10 for the asset hosting decision.

**Builds on chapter 1.** Reuses scene + arcade-physics + input pattern; only the sprite source changes.

---

### Chapter 3 — Player Control & Cross-Device Input

**Why it exists:** Most learners' games will be played on phones. The space shooter only ran on desktop because it took cursor keys. This chapter teaches how to build a game that works on keyboard, mouse, and touch from day one.

**Learning outcomes.** Bind `pointerdown`/`pointermove`/`pointerup`; build a virtual joypad scene; remap keyboard for WASD + arrows simultaneously; debounce input; implement drag and swipe; reason about input latency.

**Modules:**

1. `pointer-and-touch-input`
   - `lecture-pointer-events` — `this.input.on('pointerdown'/'pointermove'/'pointerup')`, `pointer.x/y`, `pointer.isDown`, multi-touch.
   - `lecture-drag-swipe-and-gestures` — drag using `setInteractive` + `dragstart`/`drag`/`dragend`, swipe via velocity over time.
   - `workshop-touch-paddle-prototype` (~25 steps) — a paddle that follows the pointer on touch and arrows on keyboard; same code path for both.
   - `review-pointer-and-touch-input`
   - `quiz-pointer-and-touch-input`
2. `keyboard-maps-and-virtual-controls`
   - `lecture-keyboard-mapping-patterns` — using objects to map action → key, alt-keys, simultaneous WASD + arrows.
   - `lecture-virtual-on-screen-controls` — designing a UI scene that pretends to be a controller, sending events to the gameplay scene.
   - `workshop-mobile-first-brick-breaker` (~50 steps) — full brick-breaker game: paddle on pointer & arrows, ball physics, brick groups, levels, win/lose. Uses physics colliders (not overlaps) for the first time.
   - `review-keyboard-maps-and-virtual-controls`
   - `quiz-keyboard-maps-and-virtual-controls`
3. **Cert-project module** — `lab-brick-breaker`
   - User stories: 12+ requirements covering paddle, ball, brick layout, collisions, levels, score, lives, mobile + desktop input, win/lose screens.
   - Hint regex set ~30 assertions; full reference solution in `--solutions--`.

**Builds on chapters 1–2.** Reuses arcade physics from Ch1 and the animation system from Ch2 (paddle stretches with a tween, bricks shatter with a graphics-and-tint effect).

---

## 7. Detailed chapter plans — Chapters 4–6

### Chapter 4 — Arcade Physics Deep Dive

**Why it exists:** Chapter 1 used arcade physics for a top-down shooter where gravity was zero and everything was overlap-based. Real platformers need gravity, jump arcs, drag, body offsets, static groups, and collision side detection. This chapter goes deep.

**Learning outcomes.** Configure gravity per-body and per-world; tune drag, max velocity, and bounce; distinguish `physics.add.collider` from `physics.add.overlap`; use static groups for terrain; offset and resize bodies (`body.setSize`, `body.setOffset`); detect which side a collision happened on (`body.touching.down/up/left/right`, `body.blocked.*`); implement coyote time and jump buffering.

**Modules:**

1. `gravity-drag-and-bouncy-bodies`
   - `lecture-gravity-velocity-and-drag`
   - `lecture-colliders-vs-overlaps`
   - `workshop-bouncing-ball-lab` (~20 steps) — a sandbox scene where the learner tunes gravity/drag/bounce live and sees the result.
   - `review-gravity-drag-bounce`
   - `quiz-gravity-drag-bounce`
2. `static-groups-and-platformer-physics`
   - `lecture-static-groups-and-terrain`
   - `lecture-body-offsets-and-collision-sides`
   - `lecture-coyote-time-and-jump-buffering` — game-feel tricks; why naive jumping feels bad.
   - `workshop-side-scrolling-platformer` (~55 steps) — full platformer level: player with jump/double-jump, coyote time, jump buffer, moving platforms, hazards, goal flag. **The physics centerpiece of the whole certification.**
   - `review-platformer-physics`
   - `quiz-platformer-physics`
3. **Cert-project module** — `lab-platformer-level-1-1`
   - User stories: player with full game-feel (coyote time, jump buffer, variable jump height), at least 2 enemy types, moving platforms, collectibles, win-by-flag, lose-by-fall, mobile + desktop input.

**Builds on chapters 1–3.** Reuses input maps, animation system, scene transitions; extends the physics primitives from Ch1.

---

### Chapter 5 — Tilemaps & Level Design with Tiled

**Why it exists:** Hand-placing every platform in code is fine for one room, terrible for ten. This chapter teaches the Tiled → Phaser pipeline so learners can author levels visually.

**Learning outcomes.** Author a level in [Tiled](https://www.mapeditor.org/) (or read pre-made Tiled JSON), load it with `this.load.tilemapTiledJSON`, attach a tileset, render multiple layers, mark tiles as collidable (`setCollisionByProperty`), use object layers for spawn points and triggers, transition between rooms via teleporter tiles.

**Modules:**

1. `tilemap-fundamentals`
   - `lecture-what-is-a-tilemap` — tile grids, tilesets, layers, the JSON structure Tiled exports.
   - `lecture-loading-tiled-json-into-phaser`
   - `workshop-first-tile-room` (~30 steps) — load a hand-crafted 20×15 room from JSON, render it, walk on it.
   - `review-tilemap-fundamentals`
   - `quiz-tilemap-fundamentals`
2. `collision-layers-and-object-layers`
   - `lecture-tile-collision-strategies` — index lists, property flags, rectangle overrides.
   - `lecture-object-layers-for-game-logic` — using object layers for spawns, doors, triggers, NPCs.
   - `workshop-top-down-dungeon-explorer` (~50 steps) — full top-down dungeon: 4 connected rooms, doors, locked door + key item, an NPC who tells you where the key is, victory room.
   - `review-collision-and-object-layers`
   - `quiz-collision-and-object-layers`

**Asset strategy.** Ships the certification's first tilemap JSON + tileset PNG bundle. ~3 tileset PNGs total across the chapter, all CC0. Stored in `client/static/curriculum-assets/phaser/tilemaps/`. See §10.

**Builds on chapters 1–4.** Reuses platformer physics from Ch4 for collision; reuses the input map and animation system; the dungeon's NPC dialog box is the first taste of the UI scene system that returns in Ch9.

---

### Chapter 6 — Camera, Worlds & Parallax

**Why it exists:** Once levels are bigger than the viewport, the camera matters. This chapter teaches camera follow, lerp, deadzone, shake, world bounds, multi-camera UI overlays, and parallax backgrounds.

**Learning outcomes.** Use `cameras.main.startFollow(target)` with lerp & deadzone; bind the camera to `physics.world.setBounds`; trigger `cameras.main.shake(duration, intensity)` and `flash`; render a UI HUD on a second camera that doesn't move; build a parallax background out of `tileSprite`s with different scroll factors.

**Modules:**

1. `camera-fundamentals`
   - `lecture-camera-follow-lerp-and-deadzone`
   - `lecture-world-bounds-and-camera-bounds`
   - `lecture-camera-shake-and-flash` — when juice helps (hit feedback) vs hurts (motion sickness).
   - `workshop-camera-playground` (~25 steps) — an interactive scene to experiment with each camera knob.
   - `review-camera-fundamentals`
   - `quiz-camera-fundamentals`
2. `multi-camera-ui-and-parallax`
   - `lecture-multi-camera-ui-overlays` — second camera that ignores world transforms.
   - `lecture-parallax-with-tilesprite`
   - `workshop-side-scrolling-endless-runner` (~45 steps) — endless runner: procedural ground tiles, increasing speed, parallax sky/mid/foreground, second camera for HUD, screen-shake on miss.
   - `review-multi-camera-and-parallax`
   - `quiz-multi-camera-and-parallax`
3. **Cert-project module** — `lab-endless-runner`
   - User stories: parallax background with at least 3 layers at different scroll factors, procedural obstacle spawning that ramps difficulty, distance-based score, screen shake on death, persistent best distance via localStorage.

**Builds on chapters 1–5.** The endless runner reuses input from Ch3, animation from Ch2, physics from Ch4, and shows the camera/parallax patterns of Ch6.

---

## 8. Detailed chapter plans — Chapters 7–10

### Chapter 7 — Audio & Game Feel

**Why it exists:** Every game in the certification so far has been silent and "stiff." Game feel is the difference between a competent prototype and a game someone wants to keep playing. This chapter is about audio and "juice."

**Learning outcomes.** Load and play sound effects with `this.load.audio` + `this.sound.add`; loop background music with crossfade; pan and modulate volume; layer hit-pause (briefly halting `this.physics.world.pause()` on impact), screen shake, particle bursts, and tweened squash/stretch into a single satisfying "punch."

**Modules:**

1. `audio-foundations`
   - `lecture-loading-and-playing-audio` — `audio` vs `audioSprite`, decoding, mobile autoplay constraints.
   - `lecture-volume-pan-and-music-fades` — `setVolume`, `setRate`, `tween` on a sound's volume.
   - `workshop-soundboard` (~20 steps) — a UI scene that plays a sound on each pad press; teaches loading multiple audio files and triggering on input.
   - `review-audio-foundations`
   - `quiz-audio-foundations`
2. `game-feel-and-juice`
   - `lecture-anatomy-of-a-juicy-hit` — squash/stretch tween + tint flash + screen shake + hit-pause + particle burst + audio cue, all stacked.
   - `lecture-particles-with-emitters` — `this.add.particles` (Phaser 3.60+) and the emitter API.
   - `workshop-arcade-brawler-with-juice` (~40 steps) — a 1-screen brawler: punch enemies that explode in particles, with the full juice stack on every hit.
   - `review-game-feel-and-juice`
   - `quiz-game-feel-and-juice`

**Asset strategy.** First audio assets: ~6 short SFX (hit, jump, coin, music loop, ambience, ui-click), all CC0, hosted same way as tilemaps. Total <500 KB. See §10.

**Builds on chapters 1–6.** Brawler reuses platformer physics from Ch4, animation from Ch2, camera shake from Ch6, input from Ch3.

---

### Chapter 8 — Tweens, FX & Matter.js

**Why it exists:** Some genres (puzzle, slingshot, ragdoll) demand more than arcade physics. This chapter teaches the Phaser `Tween` system end-to-end and introduces Matter.js as the second physics engine.

**Learning outcomes.** Build chained tweens, timelines, and easing curves; use the post-FX pipeline (`setPostPipeline`, glow / blur / pixelate) for visual effects; switch a scene to Matter physics; create rectangular and polygon Matter bodies; use constraints (springs and pins); slingshot bodies via pointer drag.

**Modules:**

1. `tween-mastery-and-post-fx`
   - `lecture-tween-system-from-scratch` — `this.tweens.add`, `targets`, easing functions, `chain`, `delay`, `yoyo`, `repeat`.
   - `lecture-post-processing-pipelines` — built-in pipelines, `setPostPipeline`, when to use them (transitions, hit-flashes) vs not (cost on mobile).
   - `workshop-match-3-puzzle` (~50 steps) — full match-3 game: 8×8 grid of gem sprites, swap with pointer/touch, detect 3-in-a-row matches, cascade with chained tweens, score, levels, win condition. **Tween-driven, no physics.**
   - `review-tweens-and-post-fx`
   - `quiz-tweens-and-post-fx`
2. `intro-to-matter-physics`
   - `lecture-arcade-vs-matter` — when each is the right tool.
   - `lecture-matter-bodies-and-constraints` — rectangle, circle, polygon, compound; pin and spring constraints.
   - `workshop-slingshot-launcher` (~40 steps) — Angry-Birds-style game: drag the projectile back against a spring constraint, release, watch it knock down a tower of Matter blocks. Score by blocks knocked off the ground.
   - `review-matter-physics`
   - `quiz-matter-physics`
3. **Cert-project module** — `lab-match-3`
   - User stories: 8×8 grid with at least 5 gem types, swap-to-match input, 3-and-4 match detection, cascading drops via chained tweens, level-based win conditions, time-attack mode.

**Builds on chapters 1–7.** Match-3 reuses sprite/animation from Ch2 and tween cascades; slingshot reuses pointer drag from Ch3 and screen shake from Ch6.

---

### Chapter 9 — AI, State Machines & Game Systems

**Why it exists:** All enemies in chapters 1–8 are scripted. Real games need enemies that patrol, chase, flee, and notice the player. They also need real game systems: HUD, dialogue, inventory, saves. This chapter delivers both.

**Learning outcomes.** Implement a finite state machine for an enemy; sketch a behavior-tree primitive (selector, sequence, action); compute line-of-sight with raycasting against tilemap collision; run a small grid A\* search for pathfinding; build a UI scene that overlays gameplay; render a HUD; implement an NPC dialogue system with branching; build a draggable inventory grid; persist game state to `localStorage`.

**Modules:**

1. `enemy-ai-and-state-machines`
   - `lecture-finite-state-machines-for-enemies` — patrol/chase/attack/flee, transitions, why FSMs scale better than `if`-chains.
   - `lecture-line-of-sight-and-raycasting` — using tilemap collision for visibility checks.
   - `lecture-grid-pathfinding-with-a-star` — minimal A\* over a tile grid, frame-budgeted.
   - `workshop-stealth-game-prototype` (~45 steps) — a 1-room stealth game: guard with vision cones, FSM (patrol → suspicious → alert → return), player must reach the goal without being seen for 3+ seconds.
   - `review-enemy-ai`
   - `quiz-enemy-ai`
2. `ui-scenes-hud-and-dialogue`
   - `lecture-ui-scenes-with-scene-launch`
   - `lecture-dialogue-trees-and-typewriter-effect`
   - `workshop-rpg-vertical-slice` (~55 steps) — top-down RPG slice: 3-room dungeon with NPCs, branching dialogue, HUD with HP/MP, inventory grid (drag & drop), pickup/equip/use items, localStorage save & load. **The systems centerpiece of the certification.**
   - `review-ui-scenes-and-dialogue`
   - `quiz-ui-scenes-and-dialogue`

**Builds on chapters 1–8.** Stealth game reuses tilemaps from Ch5, animation from Ch2, camera from Ch6. RPG slice reuses every previous system: tilemaps, animation, audio, juice, tweens, input.

---

### Chapter 10 — Procedural Generation, Multiplayer & Deployment

**Why it exists:** Two final big-payoff topics, then the cert ships. Procedural generation unlocks roguelikes; multiplayer unlocks party games; and a learner who can't deploy their game can't actually share it.

**Learning outcomes.** Use seeded RNG (`Phaser.Math.RandomDataGenerator`); generate dungeons via BSP or random-walk; structure run-based progression (perma-death, meta-currency); split keyboard for local co-op; reason about networking patterns (lockstep vs snapshot interpolation); use a thin client-side mock of a Colyseus / WebSocket server for the workshop; configure the Scale Manager for mobile; bundle and deploy to itch.io / GitHub Pages.

**Modules:**

1. `procedural-generation`
   - `lecture-seeded-rng-and-determinism`
   - `lecture-bsp-room-generation` — split rectangles recursively, connect with corridors.
   - `lecture-loot-tables-and-progression`
   - `workshop-roguelike-crawler` (~60 steps) — turn-based roguelike: BSP-generated dungeon, FOV, enemies with FSMs from Ch9, items from loot tables, perma-death, run summary, persistent meta-progress in localStorage.
   - `review-procedural-generation`
   - `quiz-procedural-generation`
2. `local-and-networked-multiplayer`
   - `lecture-local-multiplayer-input-splitting`
   - `lecture-networking-patterns` — lockstep vs snapshot, latency, what each pattern is good for. Concept-only; we don't ship a backend.
   - `lecture-mocking-a-multiplayer-server` — a local in-browser fake server that simulates network with `setTimeout` delays.
   - `workshop-2-player-party-game` (~45 steps) — split-keyboard local co-op party game (e.g. tank duel or bomberman-lite) with rounds, score, win-best-of-5.
   - `review-multiplayer-foundations`
   - `quiz-multiplayer-foundations`
3. `mobile-scaling-and-deployment`
   - `lecture-scale-manager-and-responsive-design`
   - `lecture-asset-loading-strategies-and-perf` — atlases over single textures, audio sprites, lazy-loaded levels.
   - `lecture-shipping-to-itch-io-and-github-pages` — build, zip, upload; recipe-style.
   - `workshop-optimize-and-ship-a-game` (~25 steps) — take a deliberately bloated reference game, atlas its sprites, pool its bullets, fix scaling, then walk through the deploy checklist.
   - `review-mobile-scaling-and-deployment`
   - `quiz-mobile-scaling-and-deployment`
4. **Cert-project module** — `lab-roguelike-dungeon`
   - User stories: BSP dungeon, FOV, enemies with FSMs, loot tables, run-based progression, perma-death, run summary screen, persistent meta-progress in localStorage. ~18 user stories.
5. **Cert-project module** — `lab-multiplayer-party-game`
   - User stories: 2-player split-keyboard local co-op, round-based scoring, win-best-of-N, mobile-friendly fallback that swaps in virtual buttons when no keyboard is detected, persistent leaderboard. ~14 user stories.

**Builds on every previous chapter.** This is the convergence point.

---

## 9. Capstone certification labs — summary

The certification is claimable by passing **5 cert-project labs**, one per relevant chapter:

| #   | Lab                          | Chapter | Anchored skills                                     |
| --- | ---------------------------- | ------- | --------------------------------------------------- |
| 1   | `lab-brick-breaker`          | Ch3     | Pointer + keyboard input, physics colliders, levels |
| 2   | `lab-platformer-level-1-1`   | Ch4     | Gravity, jump buffer, coyote time, hazards          |
| 3   | `lab-endless-runner`         | Ch6     | Camera, parallax, world bounds, persistent best     |
| 4   | `lab-match-3`                | Ch8     | Tween cascades, post-FX, grid logic                 |
| 5   | `lab-roguelike-dungeon`      | Ch10    | Procgen, FSM AI, run-based progression, save/load   |
| (6) | `lab-multiplayer-party-game` | Ch10    | Optional 6th cert lab — extends the cert if shipped |

Each lab follows the existing `lab-space-shooter-with-phaser.md` template: a single challenge, a numbered list of user stories, a comprehensive set of regex hint assertions, and a working reference solution under `# --solutions--`.

---

## 10. Asset & tooling considerations

### 10.1 Asset hosting

The existing space shooter ships zero binary assets — every sprite is an inlined `data:image/svg+xml` URI. That works for ~10 KB of crisp vector art. It does not work for sprite sheets, tilemaps, or audio.

Two options, in order of preference:

1. **Static assets under `client/static/curriculum-assets/phaser/`**, served by Gatsby. URL like `/curriculum-assets/phaser/spritesheets/dungeon-tiles.png`. Pros: bundled with the site, deterministic, works offline in dev. Cons: increases the client build size — needs a budget and tree-shaking discipline.
2. **freeCodeCamp's existing CDN** (whatever host is used today for course media). Pros: keeps client build small. Cons: another moving piece for contributors to learn; harder to mirror locally.

Recommendation: **option 1** for v1. Hard cap of **~5 MB total** new assets across the entire certification, broken down roughly as:

| Asset class             | Budget  | Used in                  |
| ----------------------- | ------- | ------------------------ |
| Sprite sheets / atlases | ~1.5 MB | Ch2, Ch4, Ch7, Ch9, Ch10 |
| Tilemap PNGs + JSON     | ~1 MB   | Ch5, Ch9, Ch10           |
| Audio (music + SFX)     | ~2 MB   | Ch7, Ch9, Ch10           |
| Misc UI / fonts         | ~500 KB | Ch9                      |

All assets must be CC0 or freeCodeCamp-owned. Kenney.nl, OpenGameArt CC0, and freeCodeCamp's own commissioned art are the safe sources. Each asset gets a `LICENSE.md` next to it crediting the source.

### 10.2 Phaser version

Pin to **Phaser 3.80.1** (the version the existing space-shooter block uses) to start. Audit before each minor version bump because:

- The `add.particles` API changed shape between 3.55 and 3.60.
- Some Matter constraint helpers were renamed in 3.6x.

Each block's seed HTML loads Phaser via the same CDN tag the existing block uses:

```html
<script src="https://cdn.jsdelivr.net/npm/phaser@3.80.1/dist/phaser.min.js"></script>
```

Do not bump piecemeal across the certification — every block in the cert moves together.

### 10.3 Workshop authoring & tooling

Use the existing helper scripts in `tools/challenge-helper-scripts/` (already documented in `CLAUDE.md`):

| Need                                  | Script                                                                               |
| ------------------------------------- | ------------------------------------------------------------------------------------ |
| Create a brand-new project (workshop) | `pnpm create-new-project`                                                            |
| Insert a step mid-workshop            | `pnpm -F=@freecodecamp/curriculum tsx tools/challenge-helper-scripts/insert-step.ts` |
| Append a step to a workshop           | `tools/challenge-helper-scripts/create-next-step.ts`                                 |
| Create a quiz                         | `pnpm create-new-quiz`                                                               |
| Reorder steps after edits             | `tools/challenge-helper-scripts/update-step-titles.ts`                               |
| Rename a block                        | `tools/challenge-helper-scripts/rename-block.ts`                                     |

For lectures and reviews there is no dedicated helper today — author them by hand following the `javascript-v9` examples cited in §4.

### 10.4 Testing the curriculum content

The curriculum has its own test pipeline:

```bash
pnpm test-curriculum-content   # generates per-block tests then runs them
cd curriculum && pnpm test-tooling  # tooling-only tests
```

Every workshop step's regex hints must be unit-testable against the reference solution. The contributor docs (see `docs/how-to-add-tests-to-challenges` in the freeCodeCamp main repo) describe the patterns; reuse them as-is.

### 10.5 End-to-end verification

The PR already adds `e2e/phaser-space-shooter.spec.ts`, which wires Playwright through the workshop. Adopt the same pattern per workshop:

```
e2e/phaser-coin-collector.spec.ts
e2e/phaser-brick-breaker.spec.ts
e2e/phaser-platformer.spec.ts
e2e/phaser-dungeon-explorer.spec.ts
…
```

Each spec runs the reference solution headlessly via the existing Playwright harness, asserts the canvas mounts, the scene transitions, and key gameplay states fire. This is the safety net against silent breakage when Phaser's underlying API shifts.

---

## 11. File-system & ID layout

### 11.1 Directory layout

```
curriculum/
  structure/
    superblocks/
      certified-game-developer-with-phaser.json     # NEW — chapters/modules wiring
    blocks/
      lecture-introduction-to-game-development.json  # NEW (one per lecture block)
      lecture-understanding-the-phaser-game-loop.json
      workshop-hello-phaser-coin-collector.json
      lab-brick-breaker.json
      review-phaser-foundations.json
      quiz-phaser-foundations.json
      … (one .json per block; ~70 new JSONs)
  challenges/
    english/
      blocks/
        lecture-introduction-to-game-development/
          <id>.md
          <id>.md
        workshop-hello-phaser-coin-collector/
          <id>.md  # one per step (~25 files)
        lab-brick-breaker/
          <id>.md  # single capstone
        … (~700 new .md files)
client/
  static/
    curriculum-assets/
      phaser/
        spritesheets/
        tilemaps/
        audio/
        ui/
        LICENSE.md
e2e/
  phaser-coin-collector.spec.ts
  phaser-brick-breaker.spec.ts
  …
```

### 11.2 ID convention

The existing block uses contiguous 24-hex ObjectIds: `66faa1000000000000000001` … `66faa1000000000000000041`. Follow the same convention but partition by chapter:

| Chapter       | ID prefix range                              | Free slots per chapter |
| ------------- | -------------------------------------------- | ---------------------- |
| Ch1           | `66faa10000000000000000xx` (existing — keep) | uses 0x01–0x41 today   |
| Ch2           | `66faa20000000000000000xx`                   | 256                    |
| Ch3           | `66faa30000000000000000xx`                   | 256                    |
| Ch4           | `66faa40000000000000000xx`                   | 256                    |
| …             | …                                            | …                      |
| Ch10          | `66faaA0000000000000000xx`                   | 256                    |
| Capstone labs | `66faaB0000000000000000xx`                   | 256                    |
| Quizzes       | `66faaC0000000000000000xx`                   | 256                    |
| Reviews       | `66faaD0000000000000000xx`                   | 256                    |
| Lectures      | `66faaE…` / `66faaF…`                        | 512                    |

256 challenges per chapter is plenty (the longest existing workshops cap at ~120 steps). Reserved ranges keep IDs grep-able and let `tools/challenge-helper-scripts/insert-step.ts` slot inserts into the right partition.

### 11.3 i18n hooks

Every block's title and intro need entries in `client/i18n/locales/english/intro.json` under the new superblock's key. Pattern matches the existing entries:

```json
"certified-game-developer-with-phaser": {
  "title": "Certified Game Developer with Phaser",
  "intro": [
    "Build real 2D games with Phaser 3 …",
    "By the end of this certification you will have shipped 8+ workshop games and 5 capstone projects …"
  ],
  "blocks": {
    "lecture-introduction-to-game-development": {
      "title": "Introduction to Game Development",
      "intro": ["…"]
    },
    "workshop-hello-phaser-coin-collector": {
      "title": "Build a Coin Collector with Phaser",
      "intro": ["…"]
    },
    …
  }
}
```

Translations follow the standard Crowdin pipeline (`pnpm i18n-sync`).

---

## 12. Implementation roadmap

A realistic build-out phased so the certification can ship incrementally rather than landing as one 50-PR mega-merge. Each phase lands cleanly and is independently useful.

### Phase 0 — Land the foundation (this PR)

Already done in the current branch:

- `learn-game-development-by-building-a-space-shooter-with-phaser` workshop (65 steps).
- `lab-space-shooter-with-phaser` capstone lab.
- `e2e/phaser-space-shooter.spec.ts` Playwright spec.
- Wired into `javascript-algorithms-and-data-structures-22.json`.

### Phase 1 — Stand up the certification shell (1 PR)

- Create `curriculum/structure/superblocks/certified-game-developer-with-phaser.json` with all 10 chapters' `dashedName`s in place but every chapter `comingSoon: true` except `phaser-foundations`.
- Move the existing two blocks from JS-DSA-22 into the new superblock under `phaser-foundations` → `arcade-physics-and-input-basics`. Decide via §15 Open Decisions whether to leave a redirect/banner in JS-DSA-22 or remove cleanly.
- Register the superblock in `curriculum/structure/curriculum.json` under `superblocks` and `certifications`.
- Add intro + block titles + intros to `client/i18n/locales/english/intro.json`.
- Wire client routes (gatsby `gatsby-node.ts` + the cert claim flow) to recognize the new cert dashedName.

This PR alone makes "Certified Game Developer with Phaser" appear in the curriculum map with one workshop + one lab, gated behind 1 cert-project lab (the existing `lab-space-shooter-with-phaser` upgraded to a `cert-project` module). It can be shipped as the new cert's v0.

### Phase 2 — Chapters 2 & 3 (3–5 PRs)

- Author chapter 2 (sprites & animations) end-to-end: 2 lectures + 1 workshop + 1 lab + review + quiz.
- Author chapter 3 (input + brick breaker) end-to-end: 2 lectures + 2 workshops + cert lab + review + quiz.
- Add Playwright specs for both new workshops.
- Asset bundle 1 (sprite sheets) lands here.

### Phase 3 — Chapters 4 & 5 (3–5 PRs)

- Chapter 4 (arcade physics deep dive + platformer cert lab).
- Chapter 5 (tilemaps + dungeon explorer).
- Asset bundle 2 (tilemaps + tilesets).

### Phase 4 — Chapters 6 & 7 (3–5 PRs)

- Chapter 6 (camera + endless runner cert lab).
- Chapter 7 (audio + game feel + brawler).
- Asset bundle 3 (audio).

### Phase 5 — Chapters 8 & 9 (3–5 PRs)

- Chapter 8 (tweens + Matter + match-3 cert lab).
- Chapter 9 (AI + UI + RPG slice).

### Phase 6 — Chapter 10 + cert finalization (2–3 PRs)

- Chapter 10 (procgen + multiplayer + deployment).
- Two final cert labs (`lab-roguelike-dungeon`, optional `lab-multiplayer-party-game`).
- Flip every chapter's `comingSoon` flag to `false`.
- Optional: build the certification exam under the `exam` chapter (still `comingSoon` if not ready).

### Phase 7 — Localization & polish

- Crowdin sync of all new English strings.
- Audit hint coverage on every workshop step; tighten regex hints based on early-learner failure data.
- Author 8 deep-dive freeCodeCamp News articles, one per workshop game, linked from each chapter's review page.

Every phase is independently mergeable behind feature flags / `comingSoon: true`, so the certification can collect dust on `main` for months without ever exposing half-finished material to learners.

---

## 13. Localization & accessibility

### Localization

- Every new string lives in `client/i18n/locales/english/intro.json` (or the relevant locale file) at authoring time. No string baked into JSX or markdown that bypasses i18n.
- Workshop and lab challenge bodies are translated via the standard Crowdin path on `curriculum/challenges/<lang>/blocks/...`.
- Asset captions and in-game text rendered to canvas use the existing fCC i18n pattern: pass keys to a helper that resolves at runtime, never hard-code English strings into Phaser scenes.

### Accessibility

- Every workshop game needs a `prefers-reduced-motion` opt-out path: when `window.matchMedia('(prefers-reduced-motion)').matches`, screen shake / camera flash / particle bursts must downscale or disable. Teach this in chapter 7's juice lecture so learners build the habit themselves.
- All cert-project labs require keyboard parity for any pointer-only interaction (otherwise screen-reader and motor-impaired learners can't complete them).
- Color-blind-friendly palettes for assets shipped under `client/static/curriculum-assets/phaser/`. Audit with [Coblis](https://www.color-blindness.com/coblis-color-blindness-simulator/) before merge.
- Audio is never gameplay-critical without a visual fallback (e.g. enemy footsteps in chapter 9's stealth game also pulse a vision cone).

---

## 14. Success metrics

How we'll know the certification is working — same metrics fCC tracks for other certs, applied here:

| Metric                             | Target                                                                                            | How measured                                        |
| ---------------------------------- | ------------------------------------------------------------------------------------------------- | --------------------------------------------------- |
| Workshop completion rate per step  | ≥ 85%                                                                                             | Existing freeCodeCamp telemetry on hint-pass ratios |
| Cert claim rate among Ch1 starters | ≥ 5% within 12 months                                                                             | freeCodeCamp cert-claim funnel                      |
| Lab pass rate first try            | ≥ 50%                                                                                             | hint-failure logs                                   |
| Forum help-category traffic        | Trends down per chapter as steps mature                                                           | `/forum` `JavaScript` category triage               |
| Translated locale count            | English + top 5 locales (Spanish, Portuguese, Chinese, Japanese, Ukrainian) within 6 months of v1 | Crowdin coverage report                             |
| Showcase games shipped             | ≥ 50 learner games linked from the freeCodeCamp showcase within 12 months                         | curated submissions thread                          |

---

## 15. Open decisions

A handful of design calls that require maintainer consensus before Phase 1 is greenlit:

1. **Migration vs duplication of the existing space-shooter blocks.** Two options:
   - **Migrate**: remove the blocks from `javascript-algorithms-and-data-structures-22.json` and reference them only from the new superblock. Cleaner, but breaks the v8 cert progression for in-flight learners.
   - **Cross-reference**: keep the blocks listed in JS-DSA-22 and _also_ in the new cert. Phaser appears in both places. Complicates progress tracking and "block already completed" UI logic.
   - **Recommendation**: migrate, with a one-time migration of any learner who has the old block marked "completed" so their cert-progress carries over.
2. **Phaser version pinning policy.** Major-bump cadence: yearly audit, or only on demand. Pinning to `3.80.x` is fine today; `4.x` is not yet stable.
3. **TypeScript or stay on JavaScript?** Every other workshop in the repo is plain JS in the multifile editor. Phaser has good `.d.ts` files; switching to TS would teach better professional habits but explodes scope. Recommendation: ship v1 in JS, evaluate TS later as a separate certification or chapter-11 expansion.
4. **Asset bundle vs CDN.** §10.1 — option 1 (static under `client/static/`) is the recommendation, but if the client build budget is already tight a CDN strategy may be necessary.
5. **Multiplayer chapter networking.** Chapter 10's networking workshop ships a _mock_ server (in-browser fake) by default. If the maintainers ever want a real server, that's a separate API service — out of scope for v1.
6. **Exam chapter.** Whether to author a 60-question certification exam (matching the v9 cert exams) for v1 or defer with `comingSoon: true`. Recommendation: defer; ship the cert as 5-lab-claim only, add the exam in Phase 7+.
7. **Naming.** "Certified Game Developer with Phaser" is the working title. Alternatives: "JavaScript Game Development with Phaser", "Phaser Game Development". Pick before Phase 1 since the dashedName threads through the entire build.

---

## 16. Appendix — Why this matters

freeCodeCamp's strongest certifications (RWD, JS-Algos, RDB) succeed because they pair real, useful skills with portfolio-quality artifacts. Game development is an underserved corner of the curriculum: it teaches OOP, state management, event-driven architecture, performance reasoning, and animation math — all in service of artifacts learners are actually proud to share. Shipping this certification gives:

- Learners who don't connect with web/data/CS-fundamentals certifications another doorway into engineering.
- Existing learners a "fun" capstone path after JS-Algos that compounds, not contradicts, what they already learned.
- The fCC showcase a steady stream of small, novel, demoable games — better social signal than yet another todo app.
- Educators a real reference curriculum for "how to teach 2D games via JavaScript" that's CC0, open, and translated.

The hard work — proving Phaser plus fCC's challenge runner can teach a real game — is already done in this PR. Everything in this plan is the natural extension of that proof of concept.
