"""Generate workshop-arcade-brawler-with-juice step .md files (steps 1..40).

The workshop demonstrates the Chapter 7 game-feel toolkit on a 1-screen
brawler: hit enemies with the full juice stack (squash/stretch + tint flash
+ camera shake + hit-pause + particles + audio cue), heavy-hit and crit
variants, music + reduced-motion accessibility, touch controls, and a
Game Over flow.

Constraints we honour:

* Exactly two ``--fcc-editable-region--`` markers per step.
* All references resolve at runtime (helpers and emitters created before
  the code that calls them).
* Each step's diff vs the previous step is a contiguous block we can wrap
  in a single editable region.

To make every step a single-region edit, we follow the Sprint-15 pattern:

* Game "methods" (attack, onHit, spawnEnemy, ...) live as arrow-function
  properties on ``this`` defined inside ``create``. Steps can modify or
  extend them in place.
* ALL key/pointer input is wired in ``create`` via event listeners, not in
  ``update`` polling.  ``update`` only runs continuous movement off
  ``isDown`` flags.
* ``update`` gets its body in step 3 and is touched again only in steps that
  add per-frame logic (combo decay, spawn ramp).

Step layout (40 steps):

* 1-2:   bootstrap + assets + helpers + player.
* 3:     movement + facing.
* 4:     attack action + ``this.attack`` stub.
* 5-7:   hitbox + 5 enemies + overlap callback.
* 8-13:  the six-stack juice ladder inside ``onHit``.
* 14-15: tween-chain recoil + HP-driven destroy with bigger explode.
* 16-17: score + UIScene HUD.
* 18-19: spawn timer + ramping spawn rate.
* 20-21: sword sprite + Graphics swing trail.
* 22-23: combo counter + HUD scaling.
* 24-26: heavy hit + scaled shake + slow-mo.
* 27:    crit-chance extra particles.
* 28-29: player damage + GameOverScene.
* 30-31: boss enemy + boss-defeat cinematic.
* 32:    persistent best score.
* 33:    prefers-reduced-motion juice scaling.
* 34-35: mute toggle + touch buttons.
* 36-39: polish (anti-spam, anti-overlap, font clamp, emitter dispose).
* 40:    final reference solution.
"""

from __future__ import annotations

from pathlib import Path

OUT_DIR = (
    Path(__file__).resolve().parents[2]
    / "curriculum/challenges/english/blocks/workshop-arcade-brawler-with-juice"
)
HEX_BASE = "66faa700000000000000{:04x}"
ID_OFFSET = 0xC0  # step 1 -> 0xc1, step 40 -> 0xe8

REGION = "--fcc-editable-region--"


HTML = """\
```html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Arcade Brawler</title>
    <link rel="stylesheet" href="./styles.css" />
    <script src="https://cdn.jsdelivr.net/npm/phaser@3.80.1/dist/phaser.min.js"></script>
  </head>
  <body>
    <div id="game-container"></div>
    <script src="./script.js"></script>
  </body>
</html>

```
"""

CSS = """\
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

#game-container {
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

```
"""


# Single-scene config (steps 1..16).
def config_block(scene_list: str) -> str:
    return (
        "\n"
        "const config = {\n"
        "  type: Phaser.AUTO,\n"
        "  width: 800,\n"
        "  height: 600,\n"
        '  parent: "game-container",\n'
        '  backgroundColor: "#101020",\n'
        '  physics: { default: "arcade", arcade: { debug: false } },\n'
        f"  scene: [{scene_list}]\n"
        "};\n\n"
        "new Phaser.Game(config);\n"
    )


CONFIG_MAIN_ONLY = config_block("MainScene")
CONFIG_WITH_UI = config_block("MainScene, UIScene")
CONFIG_WITH_GAMEOVER = config_block("MainScene, UIScene, GameOverScene")


class State:
    def __init__(self, initial_text: str):
        self.text = initial_text

    def render(self) -> str:
        return self.text

    def insert_after(self, anchor: str, code: str) -> None:
        if self.text.count(anchor) != 1:
            raise SystemExit(
                f"insert_after anchor not unique; found {self.text.count(anchor)}\n---\n{anchor!r}"
            )
        self.text = self.text.replace(anchor, anchor + code, 1)

    def replace(self, old: str, new: str) -> None:
        if self.text.count(old) != 1:
            raise SystemExit(
                f"replace target not unique; found {self.text.count(old)}\n---\n{old!r}"
            )
        self.text = self.text.replace(old, new, 1)


# Initial scene shell. Anchor comments mark insertion points; they're
# stripped from rendered output. Kept ordered so create() reads top-down:
#
#   helpers → player → input → world → methods → music → cleanup
#
# update-body holds the per-frame movement/keys logic.
INITIAL_TEXT = (
    """\
class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  preload() {
    /* preload */
  }

  create() {
    /* create-helpers */
    /* create-player */
    /* create-input */
    /* create-world */
    /* create-methods */
    /* create-juice */
    /* create-music */
    /* create-cleanup */
  }

  update(time, delta) {
    /* update-body */
  }
}
"""
    + CONFIG_MAIN_ONLY
)


state = State(INITIAL_TEXT)
solutions: list[str | None] = [None]


def snap() -> None:
    solutions.append(state.render())


snap()  # solutions[1]


def seed_insert(prev_solution: str, anchor: str) -> str:
    if prev_solution.count(anchor) != 1:
        raise SystemExit(
            f"seed anchor not unique; got {prev_solution.count(anchor)}\n---\n{anchor!r}"
        )
    region = f"{REGION}\n\n{REGION}\n"
    return prev_solution.replace(anchor, anchor + region, 1)


def seed_wrap(prev_solution: str, span: str) -> str:
    if prev_solution.count(span) != 1:
        raise SystemExit(
            f"seed wrap target not unique; got {prev_solution.count(span)}\n---\n{span!r}"
        )
    wrapped = f"{REGION}\n{span}{REGION}\n"
    return prev_solution.replace(span, wrapped, 1)


seeds: list[str | None] = [None]
descriptions: list[str | None] = [None]
hints_per_step: list[list[tuple[str, str]] | None] = [None]
titles: list[str | None] = [None]


def step(
    n: int,
    *,
    title: str,
    description: str,
    hints: list[tuple[str, str]],
    seed_text: str,
    mutate,
):
    if n != len(solutions):
        raise SystemExit(
            f"step out of order: tried {n}, current solutions length {len(solutions)}"
        )
    seeds.append(seed_text)
    titles.append(title)
    descriptions.append(description)
    hints_per_step.append(hints)
    mutate()
    snap()


# -----------------------------------------------------------------------------
# Reusable code fragments. Naming convention: BLOCKS used by exactly one step
# end with the step number (e.g. ON_HIT_S8); BLOCKS that get rewritten across
# multiple steps carry no suffix and are tracked through their replacement
# constants.

PRELOAD_BODY = (
    "    this.load.spritesheet(\n"
    '      "hero",\n'
    '      "/curriculum-assets/phaser/spritesheets/hero-walk.png",\n'
    "      { frameWidth: 16, frameHeight: 16 }\n"
    "    );\n"
    "    [\n"
    '      "sfx-hit",\n'
    '      "sfx-explosion",\n'
    '      "sfx-coin",\n'
    '      "sfx-jump",\n'
    '      "sfx-ui-click",\n'
    '      "sfx-ping"\n'
    "    ].forEach((key) => {\n"
    "      this.load.audio(key, [`audio/${key}.ogg`, `audio/${key}.mp3`]);\n"
    "    });\n"
    '    this.load.audio("music-ambient", [\n'
    '      "audio/music-ambient.ogg",\n'
    '      "audio/music-ambient.mp3"\n'
    "    ]);\n"
)

HELPERS_BLOCK = (
    "    this.juice = 1;\n"
    "    const g = this.add.graphics();\n"
    "    g.fillStyle(0xffffff, 1);\n"
    "    g.fillCircle(4, 4, 4);\n"
    '    g.generateTexture("particle", 8, 8);\n'
    "    g.destroy();\n"
    "    [\n"
    '      ["idle", 0, 0],\n'
    '      ["walk-down", 0, 3],\n'
    '      ["walk-up", 4, 7],\n'
    '      ["walk-left", 8, 11],\n'
    '      ["walk-right", 12, 15]\n'
    "    ].forEach(([key, start, end]) => {\n"
    "      this.anims.create({\n"
    "        key,\n"
    '        frames: this.anims.generateFrameNumbers("hero", { start, end }),\n'
    "        frameRate: 8,\n"
    "        repeat: -1\n"
    "      });\n"
    "    });\n"
)

PLAYER_BLOCK = (
    "    this.player = this.physics.add\n"
    '      .sprite(400, 300, "hero")\n'
    "      .setScale(2);\n"
    "    this.player.setCollideWorldBounds(true);\n"
    '    this.lastFacing = "down";\n'
)

INPUT_BLOCK = (
    "    this.cursors = this.input.keyboard.createCursorKeys();\n"
    '    this.keyMap = this.input.keyboard.addKeys("W,A,S,D,J,K,M");\n'
)

UPDATE_MOVE_BLOCK = (
    "    if (!this.player.active) return;\n"
    "    const speed = 150;\n"
    "    let vx = 0;\n"
    "    let vy = 0;\n"
    "    if (this.cursors.left.isDown || this.keyMap.A.isDown) vx -= speed;\n"
    "    if (this.cursors.right.isDown || this.keyMap.D.isDown) vx += speed;\n"
    "    if (this.cursors.up.isDown || this.keyMap.W.isDown) vy -= speed;\n"
    "    if (this.cursors.down.isDown || this.keyMap.S.isDown) vy += speed;\n"
    "    this.player.body.setVelocity(vx, vy);\n"
    '    if (vx > 0) this.lastFacing = "right";\n'
    '    else if (vx < 0) this.lastFacing = "left";\n'
    '    else if (vy < 0) this.lastFacing = "up";\n'
    '    else if (vy > 0) this.lastFacing = "down";\n'
    "    if (vx !== 0 || vy !== 0) {\n"
    '      this.player.anims.play("walk-" + this.lastFacing, true);\n'
    "    } else {\n"
    '      this.player.anims.play("idle", true);\n'
    "    }\n"
)

# Step 4: attack input wiring + this.attack closure (initial stub).
ATTACK_BLOCK_S4 = (
    "    this.attack = () => {\n"
    "      this.attacking = true;\n"
    '      this.sound.play("sfx-ui-click", { volume: 0.3 });\n'
    "      this.time.delayedCall(150, () => {\n"
    "        this.attacking = false;\n"
    "      });\n"
    "    };\n"
    "    this.input.on(\"pointerdown\", () => this.attack());\n"
    '    this.input.keyboard.on("keydown-J", () => this.attack());\n'
)

# Step 5 transforms ATTACK_BLOCK_S4 into ATTACK_BLOCK_S5 by rewriting the
# closure body to position+activate the hitbox, AND adds the hitbox creation
# block above it. Both happen inside a single editable region wrapping the
# entire create-world section.
HITBOX_AND_ATTACK_S5 = (
    "    this.hitbox = this.add\n"
    "      .rectangle(0, 0, 40, 60, 0xff0000, 0)\n"
    "      .setOrigin(0.5);\n"
    "    this.physics.add.existing(this.hitbox);\n"
    "    this.hitbox.body.setAllowGravity(false);\n"
    "    this.hitbox.active = false;\n"
    "    this.attack = () => {\n"
    "      if (this.attacking) return;\n"
    "      this.attacking = true;\n"
    "      const face = this.lastFacing;\n"
    "      let dx = 0;\n"
    "      let dy = 0;\n"
    '      if (face === "right") dx = 30;\n'
    '      else if (face === "left") dx = -30;\n'
    '      else if (face === "up") dy = -30;\n'
    '      else if (face === "down") dy = 30;\n'
    "      this.hitbox.setPosition(this.player.x + dx, this.player.y + dy);\n"
    "      this.hitbox.active = true;\n"
    '      this.sound.play("sfx-ui-click", { volume: 0.3 });\n'
    "      this.time.delayedCall(150, () => {\n"
    "        this.attacking = false;\n"
    "        this.hitbox.active = false;\n"
    "      });\n"
    "    };\n"
    "    this.input.on(\"pointerdown\", () => this.attack());\n"
    '    this.input.keyboard.on("keydown-J", () => this.attack());\n'
)


# -----------------------------------------------------------------------------
# Step 1: empty MainScene shell.

STEP1_SEED = (
    f"{REGION}\n\n{REGION}\n\nconst config = {{\n"
    "  type: Phaser.AUTO,\n"
    "  width: 800,\n"
    "  height: 600,\n"
    '  parent: "game-container",\n'
    '  backgroundColor: "#101020",\n'
    '  physics: { default: "arcade", arcade: { debug: false } },\n'
    "  scene: [MainScene]\n"
    "};\n\n"
    "new Phaser.Game(config);\n"
)

titles.append("Step 1")
descriptions.append(
    "Welcome to the arcade brawler. Across 40 steps you'll wire a "
    "one-screen fighter where every enemy hit fires the full Chapter-7 "
    "juice stack (squash + tint flash + screen shake + hit-pause + "
    "particle burst + audio cue), plus a sword swing, combo counter, "
    "crits, slow-mo, boss fight, persistent best score, mute toggle, "
    "touch controls, and `prefers-reduced-motion` damping.\n\nStart with "
    "a `MainScene` extending `Phaser.Scene` with a constructor that calls "
    '`super("MainScene")`, an empty `preload`, an empty `create`, and an '
    "`update(time, delta)`.\n\n```js\n"
    "class MainScene extends Phaser.Scene {\n"
    "  constructor() {\n"
    '    super("MainScene");\n'
    "  }\n\n"
    "  preload() {}\n\n"
    "  create() {}\n\n"
    "  update(time, delta) {}\n"
    "}\n```\n\n"
    "The 800x600 Arcade-Physics `config` is already wired in below."
)
hints_per_step.append(
    [
        (
            "You should declare a `MainScene` class extending `Phaser.Scene`.",
            r"class\s+MainScene\s+extends\s+Phaser\.Scene",
        ),
        (
            'The constructor should call `super("MainScene")`.',
            r'super\(\s*["\']MainScene["\']\s*\)',
        ),
        (
            "You should declare a `preload` method.",
            r"\bpreload\s*\(\s*\)\s*\{",
        ),
        (
            "You should declare a `create` method.",
            r"\bcreate\s*\(\s*\)\s*\{",
        ),
        (
            "You should declare an `update(time, delta)` method.",
            r"\bupdate\s*\(\s*time\s*,\s*delta\s*\)\s*\{",
        ),
    ]
)
seeds.append(STEP1_SEED)


# -----------------------------------------------------------------------------
# Step 2: load assets + helpers + place player.
step(
    2,
    title="Step 2",
    description=(
        "Load the Chapter-2 hero sprite sheet plus the Chapter-7 audio "
        "bundle, set up the master juice multiplier, generate a 1×1 "
        "particle texture, register the walk/idle animations, and place "
        "the player.\n\nIn `preload`:\n\n```js\n"
        "this.load.spritesheet(\n"
        '  "hero",\n'
        '  "/curriculum-assets/phaser/spritesheets/hero-walk.png",\n'
        "  { frameWidth: 16, frameHeight: 16 }\n"
        ");\n"
        "[\n"
        '  "sfx-hit",\n'
        '  "sfx-explosion",\n'
        '  "sfx-coin",\n'
        '  "sfx-jump",\n'
        '  "sfx-ui-click",\n'
        '  "sfx-ping"\n'
        "].forEach((key) => {\n"
        "  this.load.audio(key, [`audio/${key}.ogg`, `audio/${key}.mp3`]);\n"
        "});\n"
        'this.load.audio("music-ambient", [\n'
        '  "audio/music-ambient.ogg",\n'
        '  "audio/music-ambient.mp3"\n'
        "]);\n```\n\n"
        "Then in `create`, declare the helpers and the player:\n\n```js\n"
        "this.juice = 1;\n"
        "const g = this.add.graphics();\n"
        "g.fillStyle(0xffffff, 1);\n"
        "g.fillCircle(4, 4, 4);\n"
        'g.generateTexture("particle", 8, 8);\n'
        "g.destroy();\n"
        "[\n"
        '  ["idle", 0, 0],\n'
        '  ["walk-down", 0, 3],\n'
        '  ["walk-up", 4, 7],\n'
        '  ["walk-left", 8, 11],\n'
        '  ["walk-right", 12, 15]\n'
        "].forEach(([key, start, end]) => {\n"
        "  this.anims.create({\n"
        "    key,\n"
        '    frames: this.anims.generateFrameNumbers("hero", { start, end }),\n'
        "    frameRate: 8,\n"
        "    repeat: -1\n"
        "  });\n"
        "});\n"
        "this.player = this.physics.add\n"
        '  .sprite(400, 300, "hero")\n'
        "  .setScale(2);\n"
        "this.player.setCollideWorldBounds(true);\n"
        'this.lastFacing = "down";\n```\n\n'
        "`this.juice = 1` is the master juice multiplier - step 33 will "
        "flip it to `0.2` when `prefers-reduced-motion` is set. Generating "
        "the `particle` texture at runtime avoids shipping a sprite asset."
    ),
    hints=[
        (
            'Inside `preload`, load the `"hero"` spritesheet from `/curriculum-assets/phaser/spritesheets/hero-walk.png` with 16×16 frames.',
            r'this\.load\.spritesheet\(\s*["\']hero["\'][\s\S]*hero-walk\.png[\s\S]*frameWidth:\s*16\s*,\s*frameHeight:\s*16',
        ),
        (
            "Load each Chapter-7 SFX (`sfx-hit`, `sfx-explosion`, `sfx-coin`, `sfx-jump`, `sfx-ui-click`, `sfx-ping`) plus `music-ambient` with `.ogg` and `.mp3` fallbacks.",
            r'\[\s*"sfx-hit",[\s\S]*"sfx-explosion",[\s\S]*"sfx-coin",[\s\S]*"sfx-jump",[\s\S]*"sfx-ui-click",[\s\S]*"sfx-ping"\s*\][\s\S]*this\.load\.audio\(\s*key',
        ),
        (
            "Initialise `this.juice = 1` so later steps can scale juice in one place.",
            r"this\.juice\s*=\s*1\b",
        ),
        (
            'Generate a runtime `"particle"` texture with `Graphics.generateTexture("particle", 8, 8)`.',
            r'g\.generateTexture\(\s*["\']particle["\']\s*,\s*8\s*,\s*8\s*\)',
        ),
        (
            'Build `this.player` as a physics sprite at `(400, 300, "hero")` scaled `2x` with `setCollideWorldBounds(true)`.',
            r'this\.player\s*=\s*this\.physics\.add\s*\.sprite\(\s*400\s*,\s*300\s*,\s*["\']hero["\']\s*\)[\s\S]*\.setScale\(\s*2\s*\)[\s\S]*setCollideWorldBounds\(\s*true\s*\)',
        ),
    ],
    seed_text=seed_insert(solutions[1], "/* preload */\n"),
    mutate=lambda: (
        state.insert_after("/* preload */\n", PRELOAD_BODY),
        state.insert_after("/* create-helpers */\n", HELPERS_BLOCK),
        state.insert_after("/* create-player */\n", PLAYER_BLOCK),
    ),
)


# -----------------------------------------------------------------------------
# Step 3: cursor + WASD movement + facing tracking + walk anim.
step(
    3,
    title="Step 3",
    description=(
        "Wire eight-direction movement using BOTH cursor keys AND WASD via "
        "the action-map pattern. Track the last non-zero facing so the "
        "step-5 hitbox knows which side to swing.\n\nIn `create`:\n\n```js\n"
        "this.cursors = this.input.keyboard.createCursorKeys();\n"
        'this.keyMap = this.input.keyboard.addKeys("W,A,S,D,J,K,M");\n'
        "```\n\nAnd in `update(time, delta)`:\n\n```js\n"
        "if (!this.player.active) return;\n"
        "const speed = 150;\n"
        "let vx = 0;\n"
        "let vy = 0;\n"
        "if (this.cursors.left.isDown || this.keyMap.A.isDown) vx -= speed;\n"
        "if (this.cursors.right.isDown || this.keyMap.D.isDown) vx += speed;\n"
        "if (this.cursors.up.isDown || this.keyMap.W.isDown) vy -= speed;\n"
        "if (this.cursors.down.isDown || this.keyMap.S.isDown) vy += speed;\n"
        "this.player.body.setVelocity(vx, vy);\n"
        'if (vx > 0) this.lastFacing = "right";\n'
        'else if (vx < 0) this.lastFacing = "left";\n'
        'else if (vy < 0) this.lastFacing = "up";\n'
        'else if (vy > 0) this.lastFacing = "down";\n'
        "if (vx !== 0 || vy !== 0) {\n"
        '  this.player.anims.play("walk-" + this.lastFacing, true);\n'
        "} else {\n"
        '  this.player.anims.play("idle", true);\n'
        "}\n```\n\nMove with WASD or arrow keys to verify."
    ),
    hints=[
        (
            "Create `this.cursors` with `this.input.keyboard.createCursorKeys()`.",
            r"this\.cursors\s*=\s*this\.input\.keyboard\.createCursorKeys\(\s*\)",
        ),
        (
            'Add the `"W,A,S,D,J,K,M"` key map (J/K for attacks, M for mute).',
            r'this\.keyMap\s*=\s*this\.input\.keyboard\.addKeys\(\s*["\']W,A,S,D,J,K,M["\']\s*\)',
        ),
        (
            "In `update`, accumulate `vx` and `vy` from the cursor or keyMap input at speed `150`.",
            r"const\s+speed\s*=\s*150[\s\S]*let\s+vx\s*=\s*0[\s\S]*let\s+vy\s*=\s*0",
        ),
        (
            "Apply the movement with `this.player.body.setVelocity(vx, vy)`.",
            r"this\.player\.body\.setVelocity\(\s*vx\s*,\s*vy\s*\)",
        ),
        (
            'Play `"walk-" + this.lastFacing` when moving and `"idle"` when stationary.',
            r'this\.player\.anims\.play\(\s*["\']walk-["\']\s*\+\s*this\.lastFacing[\s\S]*this\.player\.anims\.play\(\s*["\']idle["\']',
        ),
    ],
    seed_text=(
        # Single editable region from /* create-input */ through /* update-body */;
        # student fills both spots in one contiguous edit.
        solutions[2]
        .replace(
            "/* create-input */\n",
            REGION + "\n/* create-input */\n",
            1,
        )
        .replace(
            "/* update-body */\n",
            "/* update-body */\n" + REGION + "\n",
            1,
        )
    ),
    mutate=lambda: (
        state.insert_after("/* create-input */\n", INPUT_BLOCK),
        state.insert_after("/* update-body */\n", UPDATE_MOVE_BLOCK),
    ),
)


# -----------------------------------------------------------------------------
# Step 4: attack action - pointer + J key, plus this.attack stub.
step(
    4,
    title="Step 4",
    description=(
        "Wire the attack action. We'll route everything through a "
        "`this.attack = () => ...` closure so later steps can grow it into "
        "the full juice pipeline without rewriting the input handlers.\n\n"
        "In `create` (under `/* create-methods */`):\n\n```js\n"
        "this.attack = () => {\n"
        "  this.attacking = true;\n"
        '  this.sound.play("sfx-ui-click", { volume: 0.3 });\n'
        "  this.time.delayedCall(150, () => {\n"
        "    this.attacking = false;\n"
        "  });\n"
        "};\n"
        'this.input.on("pointerdown", () => this.attack());\n'
        'this.input.keyboard.on("keydown-J", () => this.attack());\n```\n\n'
        "Click the canvas or press `J` to hear the swing - no visible hit "
        "yet (that comes in step 5)."
    ),
    hints=[
        (
            "Define `this.attack = () => { ... }` as an arrow-function closure.",
            r"this\.attack\s*=\s*\(\s*\)\s*=>\s*\{",
        ),
        (
            "Inside `attack`, set `this.attacking = true` and play `sfx-ui-click`.",
            r'this\.attacking\s*=\s*true[\s\S]*this\.sound\.play\(\s*["\']sfx-ui-click["\']',
        ),
        (
            "Reset `this.attacking = false` after `150ms` via `this.time.delayedCall`.",
            r"this\.time\.delayedCall\(\s*150[\s\S]*this\.attacking\s*=\s*false",
        ),
        (
            'Wire pointer click via `this.input.on("pointerdown", () => this.attack())`.',
            r'this\.input\.on\(\s*["\']pointerdown["\']\s*,\s*\(\s*\)\s*=>\s*this\.attack\(\s*\)\s*\)',
        ),
        (
            'Wire the `J` key via `this.input.keyboard.on("keydown-J", () => this.attack())`.',
            r'this\.input\.keyboard\.on\(\s*["\']keydown-J["\']\s*,\s*\(\s*\)\s*=>\s*this\.attack\(\s*\)\s*\)',
        ),
    ],
    seed_text=seed_insert(solutions[3], "/* create-methods */\n"),
    mutate=lambda: state.insert_after("/* create-methods */\n", ATTACK_BLOCK_S4),
)


# -----------------------------------------------------------------------------
# Step 5: hitbox + extend attack() to position/activate it. The editable
# region wraps ATTACK_BLOCK_S4 (the previous attack closure) so the student
# replaces it with HITBOX_AND_ATTACK_S5 in one contiguous edit.
step(
    5,
    title="Step 5",
    description=(
        "Add an invisible hitbox rectangle that activates only during the "
        "attack frames and is positioned in front of the player based on "
        "`this.lastFacing`.\n\nReplace the entire attack block from step 4 "
        "with the version below. The diff: a new `this.hitbox` rectangle "
        "(zero alpha, physics-enabled) at the top of the block, and an "
        "extended `this.attack` closure that positions+activates the "
        "hitbox per facing.\n\n```js\n"
        "this.hitbox = this.add\n"
        "  .rectangle(0, 0, 40, 60, 0xff0000, 0)\n"
        "  .setOrigin(0.5);\n"
        "this.physics.add.existing(this.hitbox);\n"
        "this.hitbox.body.setAllowGravity(false);\n"
        "this.hitbox.active = false;\n"
        "this.attack = () => {\n"
        "  if (this.attacking) return;\n"
        "  this.attacking = true;\n"
        "  const face = this.lastFacing;\n"
        "  let dx = 0;\n"
        "  let dy = 0;\n"
        '  if (face === "right") dx = 30;\n'
        '  else if (face === "left") dx = -30;\n'
        '  else if (face === "up") dy = -30;\n'
        '  else if (face === "down") dy = 30;\n'
        "  this.hitbox.setPosition(this.player.x + dx, this.player.y + dy);\n"
        "  this.hitbox.active = true;\n"
        '  this.sound.play("sfx-ui-click", { volume: 0.3 });\n'
        "  this.time.delayedCall(150, () => {\n"
        "    this.attacking = false;\n"
        "    this.hitbox.active = false;\n"
        "  });\n"
        "};\n"
        'this.input.on("pointerdown", () => this.attack());\n'
        'this.input.keyboard.on("keydown-J", () => this.attack());\n```\n\n'
        "The hitbox is invisible (alpha `0`); it exists purely to overlap "
        "with enemies in step 7. The `if (this.attacking) return;` guard "
        "prevents spam from chaining hits while the swing is mid-frame."
    ),
    hints=[
        (
            "Build `this.hitbox` as a `40×60` zero-alpha rectangle and add a physics body via `physics.add.existing`.",
            r"this\.hitbox\s*=[\s\S]*\.rectangle\(\s*0\s*,\s*0\s*,\s*40\s*,\s*60[\s\S]*this\.physics\.add\.existing\(\s*this\.hitbox\s*\)",
        ),
        (
            "Disable gravity on the hitbox body and start with `active = false`.",
            r"this\.hitbox\.body\.setAllowGravity\(\s*false\s*\)[\s\S]*this\.hitbox\.active\s*=\s*false",
        ),
        (
            "Inside `attack`, compute `dx`/`dy` from `this.lastFacing` (±30 horizontal/vertical) and call `this.hitbox.setPosition(this.player.x + dx, this.player.y + dy)`.",
            r"this\.hitbox\.setPosition\(\s*this\.player\.x\s*\+\s*dx\s*,\s*this\.player\.y\s*\+\s*dy\s*\)",
        ),
        (
            "Set `this.hitbox.active = true` for the attack window and back to `false` in the `delayedCall`.",
            r"this\.hitbox\.active\s*=\s*true[\s\S]*this\.time\.delayedCall\(\s*150[\s\S]*this\.hitbox\.active\s*=\s*false",
        ),
        (
            "Guard against attack spam with `if (this.attacking) return;` at the top of `attack`.",
            r"if\s*\(\s*this\.attacking\s*\)\s*return\s*;",
        ),
    ],
    seed_text=seed_wrap(solutions[4], ATTACK_BLOCK_S4),
    mutate=lambda: state.replace(ATTACK_BLOCK_S4, HITBOX_AND_ATTACK_S5),
)


# -----------------------------------------------------------------------------
# Step 6: enemies group + spawnEnemy closure + 5 starter enemies.

ENEMIES_BLOCK_S6 = (
    "    this.enemies = this.physics.add.group();\n"
    "    this.spawnEnemy = () => {\n"
    "      const x = Phaser.Math.Between(50, 750);\n"
    "      const y = Phaser.Math.Between(50, 550);\n"
    "      const enemy = this.add\n"
    "        .rectangle(x, y, 30, 30, 0xff5252)\n"
    "        .setOrigin(0.5);\n"
    "      this.physics.add.existing(enemy);\n"
    "      enemy.body.setCollideWorldBounds(true);\n"
    "      enemy.hp = 2;\n"
    "      this.enemies.add(enemy);\n"
    "      return enemy;\n"
    "    };\n"
    "    for (let i = 0; i < 5; i += 1) this.spawnEnemy();\n"
)

step(
    6,
    title="Step 6",
    description=(
        "Add a `physics.add.group()` of enemies plus a `this.spawnEnemy = "
        "() => ...` closure so future steps can spawn on a timer.\n\n"
        "Insert under `/* create-world */`:\n\n```js\n"
        "this.enemies = this.physics.add.group();\n"
        "this.spawnEnemy = () => {\n"
        "  const x = Phaser.Math.Between(50, 750);\n"
        "  const y = Phaser.Math.Between(50, 550);\n"
        "  const enemy = this.add\n"
        "    .rectangle(x, y, 30, 30, 0xff5252)\n"
        "    .setOrigin(0.5);\n"
        "  this.physics.add.existing(enemy);\n"
        "  enemy.body.setCollideWorldBounds(true);\n"
        "  enemy.hp = 2;\n"
        "  this.enemies.add(enemy);\n"
        "  return enemy;\n"
        "};\n"
        "for (let i = 0; i < 5; i += 1) this.spawnEnemy();\n```\n\n"
        "Five red 30×30 rectangles spawn at random positions. Each carries "
        "`enemy.hp = 2` (step 15 uses it to gate destroy)."
    ),
    hints=[
        (
            "Create `this.enemies = this.physics.add.group()`.",
            r"this\.enemies\s*=\s*this\.physics\.add\.group\(\s*\)",
        ),
        (
            "Define `this.spawnEnemy = () => { ... }` as a closure.",
            r"this\.spawnEnemy\s*=\s*\(\s*\)\s*=>\s*\{",
        ),
        (
            "Inside `spawnEnemy`, place a 30×30 red (`0xff5252`) rectangle at a random `(x, y)` with `Phaser.Math.Between(50, 750/550)`.",
            r"Phaser\.Math\.Between\(\s*50\s*,\s*750\s*\)[\s\S]*Phaser\.Math\.Between\(\s*50\s*,\s*550\s*\)[\s\S]*\.rectangle\(\s*x\s*,\s*y\s*,\s*30\s*,\s*30\s*,\s*0xff5252\s*\)",
        ),
        (
            "Add a physics body, enable world-bounds collision, set `enemy.hp = 2`, and add to the group.",
            r"this\.physics\.add\.existing\(\s*enemy\s*\)[\s\S]*setCollideWorldBounds\(\s*true\s*\)[\s\S]*enemy\.hp\s*=\s*2[\s\S]*this\.enemies\.add\(\s*enemy\s*\)",
        ),
        (
            "Spawn `5` enemies with `for (let i = 0; i < 5; i += 1) this.spawnEnemy();`.",
            r"for\s*\(\s*let\s+i\s*=\s*0\s*;\s*i\s*<\s*5\s*;\s*i\s*\+=\s*1\s*\)\s*this\.spawnEnemy\(\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[5], "/* create-world */\n"),
    mutate=lambda: state.insert_after("/* create-world */\n", ENEMIES_BLOCK_S6),
)


# -----------------------------------------------------------------------------
# Step 7: onHit + overlap registration + pre-declare juice state. The block
# anchors to the section comment so steps 8..16 can replace the onHit body
# (which lives at /* onhit-body */) in place.

# We track the onHit body separately and use it to drive each step's region.
ONHIT_BODY_HEADER = "    this.onHit = (enemy) => {\n"
ONHIT_BODY_FOOTER = "    };\n"


def onhit_block(body: str) -> str:
    return ONHIT_BODY_HEADER + body + ONHIT_BODY_FOOTER


ONHIT_BODY_S7 = "      if (!enemy.active) return;\n"

JUICE_SETUP_BLOCK_S7 = (
    "    this.score = 0;\n"
    "    this.combo = 0;\n"
    "    this.bestScore = 0;\n"
    '    this.fx = this.add.particles(0, 0, "particle", {\n'
    "      speed: { min: -200, max: 200 },\n"
    "      lifespan: 500,\n"
    "      scale: { start: 1, end: 0 },\n"
    "      gravityY: 200,\n"
    "      emitting: false\n"
    "    });\n"
    + onhit_block(ONHIT_BODY_S7)
    + "    this.physics.add.overlap(this.hitbox, this.enemies, (hb, enemy) => {\n"
    "      if (!this.hitbox.active) return;\n"
    "      this.onHit(enemy);\n"
    "    });\n"
)

step(
    7,
    title="Step 7",
    description=(
        "Wire the `onHit` pipeline. We pre-declare `score`/`combo`/`bestScore` "
        "state and a particle emitter (`this.fx`) so the next 6 steps can layer "
        "the juice stack without juggling `create()` locations.\n\n"
        "Insert under `/* create-juice */` - this runs AFTER the hitbox/attack "
        "block so `this.hitbox` already exists when the overlap callback "
        "registers:\n\n```js\n"
        "this.score = 0;\n"
        "this.combo = 0;\n"
        "this.bestScore = 0;\n"
        'this.fx = this.add.particles(0, 0, "particle", {\n'
        "  speed: { min: -200, max: 200 },\n"
        "  lifespan: 500,\n"
        "  scale: { start: 1, end: 0 },\n"
        "  gravityY: 200,\n"
        "  emitting: false\n"
        "});\n"
        "this.onHit = (enemy) => {\n"
        "  if (!enemy.active) return;\n"
        "};\n"
        "this.physics.add.overlap(this.hitbox, this.enemies, (hb, enemy) => {\n"
        "  if (!this.hitbox.active) return;\n"
        "  this.onHit(enemy);\n"
        "});\n```\n\n"
        "The emitter has `emitting: false` so it stays idle. Steps 13+ "
        "fire it via `this.fx.explode(n, x, y)`. The overlap callback "
        "guards on `this.hitbox.active` so the hit only fires during the "
        "150ms attack window from step 5."
    ),
    hints=[
        (
            "Initialise `this.score = 0`, `this.combo = 0`, `this.bestScore = 0`.",
            r"this\.score\s*=\s*0[\s\S]*this\.combo\s*=\s*0[\s\S]*this\.bestScore\s*=\s*0",
        ),
        (
            'Create the idle particle emitter `this.fx = this.add.particles(0, 0, "particle", { ..., emitting: false })`.',
            r'this\.fx\s*=\s*this\.add\.particles\(\s*0\s*,\s*0\s*,\s*["\']particle["\'][\s\S]*emitting:\s*false',
        ),
        (
            "Stub `this.onHit = (enemy) => { if (!enemy.active) return; };`.",
            r"this\.onHit\s*=\s*\(\s*enemy\s*\)\s*=>\s*\{[\s\S]*if\s*\(\s*!enemy\.active\s*\)\s*return\s*;[\s\S]*\};",
        ),
        (
            "Register `this.physics.add.overlap(this.hitbox, this.enemies, ...)` and call `this.onHit(enemy)` only when `this.hitbox.active`.",
            r"this\.physics\.add\.overlap\(\s*this\.hitbox\s*,\s*this\.enemies[\s\S]*if\s*\(\s*!this\.hitbox\.active\s*\)\s*return\s*;[\s\S]*this\.onHit\(\s*enemy\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[6], "/* create-juice */\n"),
    mutate=lambda: state.insert_after("/* create-juice */\n", JUICE_SETUP_BLOCK_S7),
)


# -----------------------------------------------------------------------------
# Steps 8..16: juice ladder + score increment. Each replaces the onHit body
# in place. We track the body progressively.

# Helper: build the seed wrapping the previous onHit body and the mutation
# that replaces it with the new body.
def step_replace_onhit(
    n: int,
    *,
    title: str,
    description: str,
    hints: list[tuple[str, str]],
    prev_body: str,
    new_body: str,
) -> str:
    """Returns the new body (so callers can update the running variable)."""
    prev_block = onhit_block(prev_body)
    new_block = onhit_block(new_body)
    step(
        n,
        title=title,
        description=description,
        hints=hints,
        seed_text=seed_wrap(solutions[n - 1], prev_block),
        mutate=lambda: state.replace(prev_block, new_block),
    )
    return new_body


SQUASH_LINES = (
    "      this.tweens.add({\n"
    "        targets: enemy,\n"
    "        scaleX: 1.3,\n"
    "        scaleY: 0.7,\n"
    "        duration: 60,\n"
    "        yoyo: true,\n"
    '        ease: "Power2"\n'
    "      });\n"
)
TINT_LINES = (
    "      enemy.setFillStyle(0xffffff);\n"
    "      this.time.delayedCall(80, () => {\n"
    "        if (enemy.active) enemy.setFillStyle(0xff5252);\n"
    "      });\n"
)
SHAKE_LINES = "      this.cameras.main.shake(80, 0.005);\n"
PAUSE_LINES = (
    "      this.physics.world.pause();\n"
    "      this.time.delayedCall(40, () => this.physics.world.resume());\n"
)
PARTICLE_LINES = "      this.fx.explode(20, enemy.x, enemy.y);\n"
RECOIL_LINES = (
    "      const dx = enemy.x - this.player.x;\n"
    "      const dy = enemy.y - this.player.y;\n"
    "      const len = Math.hypot(dx, dy) || 1;\n"
    "      const startX = enemy.x;\n"
    "      const startY = enemy.y;\n"
    "      this.tweens.chain({\n"
    "        targets: enemy,\n"
    "        tweens: [\n"
    '          { x: startX + (dx / len) * 30, y: startY + (dy / len) * 30, duration: 60, ease: "Power2" },\n'
    '          { x: startX, y: startY, duration: 120, ease: "Power2" }\n'
    "        ]\n"
    "      });\n"
)


# Step 8: + audio cue (sfx-hit).
ONHIT_BODY_S8 = (
    "      if (!enemy.active) return;\n"
    '      this.sound.play("sfx-hit", { volume: 0.5 });\n'
)
step_replace_onhit(
    8,
    title="Step 8",
    description=(
        "Layer 1 of the six-stack juice recipe: an audio cue. Replace the "
        "`this.onHit` closure body with:\n\n```js\n"
        "if (!enemy.active) return;\n"
        'this.sound.play("sfx-hit", { volume: 0.5 });\n```\n\n'
        "Click an enemy. Hear the punch. Audio is the cheapest, fastest "
        "win in the juice stack - it lands before the eye finishes parsing "
        "the visual change."
    ),
    hints=[
        (
            "Keep the early return on inactive enemies.",
            r"if\s*\(\s*!enemy\.active\s*\)\s*return\s*;",
        ),
        (
            'Play `"sfx-hit"` with `{ volume: 0.5 }`.',
            r'this\.sound\.play\(\s*["\']sfx-hit["\']\s*,\s*\{\s*volume:\s*0\.5\s*\}\s*\)',
        ),
    ],
    prev_body=ONHIT_BODY_S7,
    new_body=ONHIT_BODY_S8,
)


# Step 9: + squash/stretch tween.
ONHIT_BODY_S9 = ONHIT_BODY_S8 + SQUASH_LINES
step_replace_onhit(
    9,
    title="Step 9",
    description=(
        "Layer 2: squash & stretch. Append a 1.3/0.7 yoyo tween on the "
        "enemy's `scaleX/scaleY`. Replace the `onHit` body with:\n\n```js\n"
        "if (!enemy.active) return;\n"
        'this.sound.play("sfx-hit", { volume: 0.5 });\n'
        "this.tweens.add({\n"
        "  targets: enemy,\n"
        "  scaleX: 1.3,\n"
        "  scaleY: 0.7,\n"
        "  duration: 60,\n"
        "  yoyo: true,\n"
        '  ease: "Power2"\n'
        "});\n```\n\n"
        "60ms each leg, `yoyo: true` runs forward+reverse for a 120ms "
        "total animation. The enemy momentarily flattens then snaps back."
    ),
    hints=[
        (
            "Add a `tweens.add` on `targets: enemy`.",
            r"this\.tweens\.add\(\s*\{[\s\S]*targets:\s*enemy",
        ),
        (
            "Tween `scaleX: 1.3` and `scaleY: 0.7`.",
            r"scaleX:\s*1\.3[\s\S]*scaleY:\s*0\.7",
        ),
        (
            "Use `duration: 60` and `yoyo: true` so the tween animates back to 1×1.",
            r"duration:\s*60[\s\S]*yoyo:\s*true",
        ),
    ],
    prev_body=ONHIT_BODY_S8,
    new_body=ONHIT_BODY_S9,
)


# Step 10: + tint flash.
ONHIT_BODY_S10 = ONHIT_BODY_S8 + TINT_LINES + SQUASH_LINES
step_replace_onhit(
    10,
    title="Step 10",
    description=(
        "Layer 3: tint flash. Insert a white flash that restores after "
        "80ms (we use `setFillStyle` because our enemies are `Rectangle` "
        "objects - on `Sprite` you'd use `setTint` / `clearTint`).\n\n"
        "Replace `onHit` body with:\n\n```js\n"
        "if (!enemy.active) return;\n"
        'this.sound.play("sfx-hit", { volume: 0.5 });\n'
        "enemy.setFillStyle(0xffffff);\n"
        "this.time.delayedCall(80, () => {\n"
        "  if (enemy.active) enemy.setFillStyle(0xff5252);\n"
        "});\n"
        "this.tweens.add({\n"
        "  targets: enemy,\n"
        "  scaleX: 1.3,\n"
        "  scaleY: 0.7,\n"
        "  duration: 60,\n"
        "  yoyo: true,\n"
        '  ease: "Power2"\n'
        "});\n```\n\n"
        "The `if (enemy.active)` guard inside the delayedCall avoids "
        "calling `setFillStyle` on a destroyed enemy - destroy can happen "
        "before the 80ms timer fires (preview of step 15)."
    ),
    hints=[
        (
            "Set `enemy.setFillStyle(0xffffff)` immediately on hit.",
            r"enemy\.setFillStyle\(\s*0xffffff\s*\)",
        ),
        (
            "Restore `enemy.setFillStyle(0xff5252)` after `80ms` with a `time.delayedCall`.",
            r"this\.time\.delayedCall\(\s*80[\s\S]*enemy\.setFillStyle\(\s*0xff5252\s*\)",
        ),
        (
            "Guard the restore with `if (enemy.active)` so it tolerates a destroyed enemy.",
            r"if\s*\(\s*enemy\.active\s*\)\s*enemy\.setFillStyle\(\s*0xff5252\s*\)",
        ),
    ],
    prev_body=ONHIT_BODY_S9,
    new_body=ONHIT_BODY_S10,
)


# Step 11: + camera shake.
ONHIT_BODY_S11 = (
    "      if (!enemy.active) return;\n"
    '      this.sound.play("sfx-hit", { volume: 0.5 });\n'
    + SHAKE_LINES
    + TINT_LINES
    + SQUASH_LINES
)
step_replace_onhit(
    11,
    title="Step 11",
    description=(
        "Layer 4: camera shake. Insert `this.cameras.main.shake(80, 0.005)` "
        "right after the SFX call.\n\nReplace `onHit` body with:\n\n```js\n"
        "if (!enemy.active) return;\n"
        'this.sound.play("sfx-hit", { volume: 0.5 });\n'
        "this.cameras.main.shake(80, 0.005);\n"
        "enemy.setFillStyle(0xffffff);\n"
        "this.time.delayedCall(80, () => {\n"
        "  if (enemy.active) enemy.setFillStyle(0xff5252);\n"
        "});\n"
        "this.tweens.add({\n"
        "  targets: enemy,\n"
        "  scaleX: 1.3,\n"
        "  scaleY: 0.7,\n"
        "  duration: 60,\n"
        "  yoyo: true,\n"
        '  ease: "Power2"\n'
        "});\n```\n\n"
        "Shake intensity is fraction-of-screen (`0.005` = 0.5%). Step 25 "
        "scales it by hit magnitude."
    ),
    hints=[
        (
            "Call `this.cameras.main.shake(80, 0.005)` once per hit.",
            r"this\.cameras\.main\.shake\(\s*80\s*,\s*0\.005\s*\)",
        ),
    ],
    prev_body=ONHIT_BODY_S10,
    new_body=ONHIT_BODY_S11,
)


# Step 12: + hit-pause.
ONHIT_BODY_S12 = (
    "      if (!enemy.active) return;\n"
    '      this.sound.play("sfx-hit", { volume: 0.5 });\n'
    + SHAKE_LINES
    + PAUSE_LINES
    + TINT_LINES
    + SQUASH_LINES
)
step_replace_onhit(
    12,
    title="Step 12",
    description=(
        "Layer 5: hit-pause. The most under-used juice ingredient. "
        "Pausing physics for 40ms gives the brain a beat to register that "
        "something heavy just happened.\n\nReplace `onHit` body with:\n\n"
        "```js\n"
        "if (!enemy.active) return;\n"
        'this.sound.play("sfx-hit", { volume: 0.5 });\n'
        "this.cameras.main.shake(80, 0.005);\n"
        "this.physics.world.pause();\n"
        "this.time.delayedCall(40, () => this.physics.world.resume());\n"
        "enemy.setFillStyle(0xffffff);\n"
        "this.time.delayedCall(80, () => {\n"
        "  if (enemy.active) enemy.setFillStyle(0xff5252);\n"
        "});\n"
        "this.tweens.add({\n"
        "  targets: enemy,\n"
        "  scaleX: 1.3,\n"
        "  scaleY: 0.7,\n"
        "  duration: 60,\n"
        "  yoyo: true,\n"
        '  ease: "Power2"\n'
        "});\n```\n\n"
        "`physics.world.pause()` freezes velocities, but the time manager "
        "keeps ticking - so the `delayedCall(40, ...resume())` still "
        "fires. Tweens use the tween manager (also independent), so the "
        "squash and tint timers continue through the pause."
    ),
    hints=[
        (
            "Call `this.physics.world.pause()` in `onHit`.",
            r"this\.physics\.world\.pause\(\s*\)",
        ),
        (
            "Resume after `40ms` via `this.time.delayedCall(40, () => this.physics.world.resume())`.",
            r"this\.time\.delayedCall\(\s*40\s*,\s*\(\s*\)\s*=>\s*this\.physics\.world\.resume\(\s*\)\s*\)",
        ),
    ],
    prev_body=ONHIT_BODY_S11,
    new_body=ONHIT_BODY_S12,
)


# Step 13: + particle burst.
ONHIT_BODY_S13 = ONHIT_BODY_S12 + PARTICLE_LINES
step_replace_onhit(
    13,
    title="Step 13",
    description=(
        "Layer 6 (final): particle burst. The emitter we built in step 7 "
        "is sitting idle - call `explode(n, x, y)` to fire `n` particles "
        "from `(x, y)` in a one-shot burst.\n\nAppend to the `onHit` body:"
        "\n\n```js\n"
        "this.fx.explode(20, enemy.x, enemy.y);\n```\n\n"
        "Click an enemy now and you'll see all six juice layers stack on "
        "the same frame: SFX + shake + freeze + flash + squash + sparks. "
        "This is the recipe."
    ),
    hints=[
        (
            "Call `this.fx.explode(20, enemy.x, enemy.y)`.",
            r"this\.fx\.explode\(\s*20\s*,\s*enemy\.x\s*,\s*enemy\.y\s*\)",
        ),
    ],
    prev_body=ONHIT_BODY_S12,
    new_body=ONHIT_BODY_S13,
)


# Step 14: + recoil tween chain.
ONHIT_BODY_S14 = ONHIT_BODY_S13 + RECOIL_LINES
step_replace_onhit(
    14,
    title="Step 14",
    description=(
        "Add a recoil tween chain - the enemy gets knocked back, then "
        "settles. Multi-step tween chains are the bread-and-butter of "
        "movement game-feel.\n\nAppend to the `onHit` body:\n\n```js\n"
        "const dx = enemy.x - this.player.x;\n"
        "const dy = enemy.y - this.player.y;\n"
        "const len = Math.hypot(dx, dy) || 1;\n"
        "const startX = enemy.x;\n"
        "const startY = enemy.y;\n"
        "this.tweens.chain({\n"
        "  targets: enemy,\n"
        "  tweens: [\n"
        '    { x: startX + (dx / len) * 30, y: startY + (dy / len) * 30, duration: 60, ease: "Power2" },\n'
        '    { x: startX, y: startY, duration: 120, ease: "Power2" }\n'
        "  ]\n"
        "});\n```\n\n"
        "We capture `startX/startY` BEFORE the chain because each tween "
        "evaluates its target at start time - if we wrote `x: enemy.x` in "
        "the second tween, it would resolve to the recoiled position and "
        "the enemy would never come back."
    ),
    hints=[
        (
            "Use `this.tweens.chain` with `targets: enemy` and an array of `tweens`.",
            r"this\.tweens\.chain\(\s*\{[\s\S]*targets:\s*enemy[\s\S]*tweens:\s*\[",
        ),
        (
            "Compute the unit vector `(dx/len, dy/len)` away from `this.player`.",
            r"Math\.hypot\(\s*dx\s*,\s*dy\s*\)",
        ),
        (
            "Capture `startX = enemy.x` BEFORE the chain so the second tween can return to the original position.",
            r"const\s+startX\s*=\s*enemy\.x[\s\S]*const\s+startY\s*=\s*enemy\.y",
        ),
        (
            "First tween moves out by 30 px, second tween returns to `(startX, startY)` at 120ms.",
            r"\{\s*x:\s*startX\s*\+[\s\S]*duration:\s*60[\s\S]*\{\s*x:\s*startX\s*,\s*y:\s*startY\s*,\s*duration:\s*120",
        ),
    ],
    prev_body=ONHIT_BODY_S13,
    new_body=ONHIT_BODY_S14,
)


# Step 15: + HP/destroy. Restructure: gate non-fatal effects on hp > 0.
ONHIT_BODY_S15 = (
    "      if (!enemy.active) return;\n"
    "      enemy.hp -= 1;\n"
    "      if (enemy.hp <= 0) {\n"
    '        this.sound.play("sfx-explosion", { volume: 0.5 });\n'
    "        this.cameras.main.shake(120, 0.008);\n"
    "        this.fx.explode(40, enemy.x, enemy.y);\n"
    "        enemy.destroy();\n"
    "        return;\n"
    "      }\n"
    '      this.sound.play("sfx-hit", { volume: 0.5 });\n'
    + SHAKE_LINES
    + PAUSE_LINES
    + PARTICLE_LINES
    + TINT_LINES
    + SQUASH_LINES
    + RECOIL_LINES
)
step_replace_onhit(
    15,
    title="Step 15",
    description=(
        "Reduce `enemy.hp` by 1 each hit; on zero, run a heavier juice "
        "stack and destroy. The kill branch returns early so the recoil/"
        "tint/squash tweens never run on a destroyed enemy.\n\n"
        "Replace the `onHit` body with:\n\n```js\n"
        "if (!enemy.active) return;\n"
        "enemy.hp -= 1;\n"
        "if (enemy.hp <= 0) {\n"
        '  this.sound.play("sfx-explosion", { volume: 0.5 });\n'
        "  this.cameras.main.shake(120, 0.008);\n"
        "  this.fx.explode(40, enemy.x, enemy.y);\n"
        "  enemy.destroy();\n"
        "  return;\n"
        "}\n"
        '// ...rest of the existing juice (sfx-hit + shake + pause + particles + tint + squash + recoil)\n```\n\n'
        "Each enemy spawns with `hp = 2`, so first hit triggers the full "
        "non-lethal stack and second hit triggers the destroy stack."
    ),
    hints=[
        (
            "Decrement `enemy.hp -= 1` immediately after the active check.",
            r"if\s*\(\s*!enemy\.active\s*\)\s*return\s*;[\s\S]*enemy\.hp\s*-=\s*1",
        ),
        (
            "When `enemy.hp <= 0`, play `sfx-explosion`, shake bigger (`120, 0.008`), explode `40` particles, and `enemy.destroy()`.",
            r'if\s*\(\s*enemy\.hp\s*<=\s*0\s*\)\s*\{[\s\S]*sfx-explosion[\s\S]*shake\(\s*120\s*,\s*0\.008\s*\)[\s\S]*this\.fx\.explode\(\s*40[\s\S]*enemy\.destroy\(\s*\)',
        ),
        (
            "Return early after destroy so the rest of the juice doesn't run on a dead target.",
            r"enemy\.destroy\(\s*\)\s*;\s*return\s*;",
        ),
    ],
    prev_body=ONHIT_BODY_S14,
    new_body=ONHIT_BODY_S15,
)


# Step 16: score on hit (+1 hit, +5 kill).
ONHIT_BODY_S16 = (
    "      if (!enemy.active) return;\n"
    "      enemy.hp -= 1;\n"
    "      if (enemy.hp <= 0) {\n"
    "        this.score += 5;\n"
    '        this.sound.play("sfx-explosion", { volume: 0.5 });\n'
    "        this.cameras.main.shake(120, 0.008);\n"
    "        this.fx.explode(40, enemy.x, enemy.y);\n"
    "        enemy.destroy();\n"
    "        return;\n"
    "      }\n"
    "      this.score += 1;\n"
    '      this.sound.play("sfx-hit", { volume: 0.5 });\n'
    + SHAKE_LINES
    + PAUSE_LINES
    + PARTICLE_LINES
    + TINT_LINES
    + SQUASH_LINES
    + RECOIL_LINES
)
step_replace_onhit(
    16,
    title="Step 16",
    description=(
        "Track the score. `+1` per non-fatal hit, `+5` per kill.\n\n"
        "Add `this.score += 5;` to the kill branch and `this.score += 1;` "
        "to the non-fatal branch:\n\n```js\n"
        "if (enemy.hp <= 0) {\n"
        "  this.score += 5;\n"
        "  // ...kill juice...\n"
        "  return;\n"
        "}\n"
        "this.score += 1;\n"
        "// ...non-fatal juice...\n```\n\n"
        "We've got the number; step 17 builds a UIScene to render it."
    ),
    hints=[
        (
            "Increment `this.score += 5` inside the kill branch.",
            r"if\s*\(\s*enemy\.hp\s*<=\s*0\s*\)\s*\{[\s\S]*this\.score\s*\+=\s*5",
        ),
        (
            "Increment `this.score += 1` for non-fatal hits.",
            r"\}\s*this\.score\s*\+=\s*1",
        ),
    ],
    prev_body=ONHIT_BODY_S15,
    new_body=ONHIT_BODY_S16,
)


# -----------------------------------------------------------------------------
# Step 17: UIScene HUD. The editable region wraps the end-of-MainScene through
# the config's scene array so the student can splice in the UIScene class and
# update the scene list in one contiguous edit. We rely on the UIScene being
# `active: true` in its constructor so MainScene doesn't have to launch it.

UI_SCENE_S17 = (
    "\nclass UIScene extends Phaser.Scene {\n"
    "  constructor() {\n"
    '    super({ key: "UIScene", active: true });\n'
    "  }\n\n"
    "  create() {\n"
    "    this.scoreText = this.add\n"
    '      .text(8, 8, "SCORE 0", { fontSize: "20px", color: "#ffffff" })\n'
    "      .setScrollFactor(0);\n"
    "  }\n\n"
    "  update() {\n"
    '    const main = this.scene.get("MainScene");\n'
    "    if (!main) return;\n"
    "    this.scoreText.setText(`SCORE ${main.score ?? 0}`);\n"
    "  }\n"
    "}\n"
)

CONFIG_PRE_S17 = (
    "\nconst config = {\n"
    "  type: Phaser.AUTO,\n"
    "  width: 800,\n"
    "  height: 600,\n"
    '  parent: "game-container",\n'
    '  backgroundColor: "#101020",\n'
    '  physics: { default: "arcade", arcade: { debug: false } },\n'
    "  scene: [MainScene]\n"
    "};\n"
)

CONFIG_POST_S17 = (
    "\nconst config = {\n"
    "  type: Phaser.AUTO,\n"
    "  width: 800,\n"
    "  height: 600,\n"
    '  parent: "game-container",\n'
    '  backgroundColor: "#101020",\n'
    '  physics: { default: "arcade", arcade: { debug: false } },\n'
    "  scene: [MainScene, UIScene]\n"
    "};\n"
)

step(
    17,
    title="Step 17",
    description=(
        "Render the score on a separate UIScene so HUD draw calls don't "
        "compete with the main scene's camera shake.\n\n"
        "Add a `UIScene` class between `MainScene` and `const config`, and "
        "update the scene list to include it. Phaser only auto-starts the "
        "first scene in the array, so we set `active: true` in the "
        "constructor:\n\n```js\n"
        "class UIScene extends Phaser.Scene {\n"
        "  constructor() {\n"
        '    super({ key: "UIScene", active: true });\n'
        "  }\n\n"
        "  create() {\n"
        "    this.scoreText = this.add\n"
        '      .text(8, 8, "SCORE 0", { fontSize: \"20px\", color: \"#ffffff\" })\n'
        "      .setScrollFactor(0);\n"
        "  }\n\n"
        "  update() {\n"
        '    const main = this.scene.get("MainScene");\n'
        "    if (!main) return;\n"
        "    this.scoreText.setText(`SCORE ${main.score ?? 0}`);\n"
        "  }\n"
        "}\n```\n\n"
        "Then update the config:\n\n```js\n"
        "scene: [MainScene, UIScene]\n```\n\n"
        "`setScrollFactor(0)` keeps the text pinned to the camera even "
        "during shake. The `??` fallback covers the one frame where "
        "MainScene exists but `score` hasn't been initialised yet."
    ),
    hints=[
        (
            "Define `class UIScene extends Phaser.Scene`.",
            r"class\s+UIScene\s+extends\s+Phaser\.Scene",
        ),
        (
            'In the constructor pass `{ key: "UIScene", active: true }` to `super` so it auto-starts.',
            r'super\(\s*\{\s*key:\s*["\']UIScene["\']\s*,\s*active:\s*true\s*\}\s*\)',
        ),
        (
            "Create `this.scoreText` with `setScrollFactor(0)` so the HUD survives camera shake.",
            r"this\.scoreText\s*=[\s\S]*setScrollFactor\(\s*0\s*\)",
        ),
        (
            'In `update`, read `this.scene.get("MainScene")` and write `this.scoreText.setText(`SCORE ${main.score ?? 0}`)`.',
            r'this\.scene\.get\(\s*["\']MainScene["\']\s*\)[\s\S]*this\.scoreText\.setText\(\s*`SCORE\s*\$\{main\.score\s*\?\?\s*0\}`\s*\)',
        ),
        (
            "Add `UIScene` to the config's `scene` array.",
            r"scene:\s*\[\s*MainScene\s*,\s*UIScene\s*\]",
        ),
    ],
    seed_text=seed_wrap(solutions[16], CONFIG_PRE_S17),
    mutate=lambda: state.replace(CONFIG_PRE_S17, UI_SCENE_S17 + CONFIG_POST_S17),
)


# -----------------------------------------------------------------------------
# Step 18: spawn timer. Replace the for-loop with a 2-second timer.

SPAWN_FOR_S6 = "    for (let i = 0; i < 5; i += 1) this.spawnEnemy();\n"
SPAWN_TIMER_S18 = (
    "    for (let i = 0; i < 3; i += 1) this.spawnEnemy();\n"
    "    this.spawnTimer = this.time.addEvent({\n"
    "      delay: 2000,\n"
    "      callback: this.spawnEnemy,\n"
    "      loop: true\n"
    "    });\n"
)
step(
    18,
    title="Step 18",
    description=(
        "Spawn enemies on a 2-second timer. Drop the initial wave to 3 "
        "(the timer will refill the room) and add a looping `time.addEvent`."
        "\n\nReplace the line:\n\n```js\n"
        "for (let i = 0; i < 5; i += 1) this.spawnEnemy();\n```\n\nwith:"
        "\n\n```js\n"
        "for (let i = 0; i < 3; i += 1) this.spawnEnemy();\n"
        "this.spawnTimer = this.time.addEvent({\n"
        "  delay: 2000,\n"
        "  callback: this.spawnEnemy,\n"
        "  loop: true\n"
        "});\n```\n\n"
        "Because `this.spawnEnemy` is an arrow function, its `this` is "
        "already bound to the scene - we don't need `callbackScope`."
    ),
    hints=[
        (
            "Drop the initial spawn count to 3.",
            r"for\s*\(\s*let\s+i\s*=\s*0\s*;\s*i\s*<\s*3\s*;\s*i\s*\+=\s*1\s*\)\s*this\.spawnEnemy\(\s*\)",
        ),
        (
            "Save the timer to `this.spawnTimer` so step 19 can ramp it.",
            r"this\.spawnTimer\s*=\s*this\.time\.addEvent",
        ),
        (
            "Set `delay: 2000`, `callback: this.spawnEnemy`, `loop: true`.",
            r"delay:\s*2000[\s\S]*callback:\s*this\.spawnEnemy[\s\S]*loop:\s*true",
        ),
    ],
    seed_text=seed_wrap(solutions[17], SPAWN_FOR_S6),
    mutate=lambda: state.replace(SPAWN_FOR_S6, SPAWN_TIMER_S18),
)


# -----------------------------------------------------------------------------
# Step 19: ramp spawn rate. Replace the fixed-delay timer with a recursive
# scheduler that shrinks the delay each spawn.

SPAWN_TIMER_BLOCK_S18 = (
    "    this.spawnTimer = this.time.addEvent({\n"
    "      delay: 2000,\n"
    "      callback: this.spawnEnemy,\n"
    "      loop: true\n"
    "    });\n"
)
SPAWN_RAMP_BLOCK_S19 = (
    "    this.spawnDelay = 2000;\n"
    "    const scheduleSpawn = () => {\n"
    "      this.time.delayedCall(this.spawnDelay, () => {\n"
    '        if (!this.scene.isActive("MainScene")) return;\n'
    "        this.spawnEnemy();\n"
    "        this.spawnDelay = Math.max(400, this.spawnDelay - 50);\n"
    "        scheduleSpawn();\n"
    "      });\n"
    "    };\n"
    "    scheduleSpawn();\n"
)
step(
    19,
    title="Step 19",
    description=(
        "Make the game progressively harder by shrinking the spawn delay "
        "each tick. Replace the `time.addEvent` with a recursive scheduler "
        "that subtracts `50ms` per spawn (clamped at `400ms`):\n\n```js\n"
        "this.spawnDelay = 2000;\n"
        "const scheduleSpawn = () => {\n"
        "  this.time.delayedCall(this.spawnDelay, () => {\n"
        '    if (!this.scene.isActive("MainScene")) return;\n'
        "    this.spawnEnemy();\n"
        "    this.spawnDelay = Math.max(400, this.spawnDelay - 50);\n"
        "    scheduleSpawn();\n"
        "  });\n"
        "};\n"
        "scheduleSpawn();\n```\n\n"
        "We can't just mutate `spawnTimer.delay` - Phaser's TimerEvent "
        "uses the delay value at insertion time. The recursive pattern "
        "schedules the next firing AFTER the current one runs, so each "
        "delay sees the latest value. The `isActive` guard prevents the "
        "scheduler from continuing after a scene shutdown."
    ),
    hints=[
        (
            "Initialise `this.spawnDelay = 2000`.",
            r"this\.spawnDelay\s*=\s*2000",
        ),
        (
            "Define a recursive `scheduleSpawn` arrow function that uses `this.time.delayedCall`.",
            r"const\s+scheduleSpawn\s*=\s*\(\s*\)\s*=>\s*\{[\s\S]*this\.time\.delayedCall\(\s*this\.spawnDelay",
        ),
        (
            "Inside the callback, guard with `this.scene.isActive(\"MainScene\")` before spawning.",
            r'if\s*\(\s*!this\.scene\.isActive\(\s*["\']MainScene["\']\s*\)\s*\)\s*return',
        ),
        (
            "After spawning, shrink the delay with `Math.max(400, this.spawnDelay - 50)` and call `scheduleSpawn()` again.",
            r"this\.spawnDelay\s*=\s*Math\.max\(\s*400\s*,\s*this\.spawnDelay\s*-\s*50\s*\)[\s\S]*scheduleSpawn\(\s*\)",
        ),
        (
            "Kick off the loop with `scheduleSpawn();`.",
            r"\}\s*;\s*scheduleSpawn\(\s*\)\s*;",
        ),
    ],
    seed_text=seed_wrap(solutions[18], SPAWN_TIMER_BLOCK_S18),
    mutate=lambda: state.replace(SPAWN_TIMER_BLOCK_S18, SPAWN_RAMP_BLOCK_S19),
)


# -----------------------------------------------------------------------------
# Steps 20..21 modify the attack closure. We track the closure body progressively.

ATTACK_BODY_S5 = (
    "      if (this.attacking) return;\n"
    "      this.attacking = true;\n"
    "      const face = this.lastFacing;\n"
    "      let dx = 0;\n"
    "      let dy = 0;\n"
    '      if (face === "right") dx = 30;\n'
    '      else if (face === "left") dx = -30;\n'
    '      else if (face === "up") dy = -30;\n'
    '      else if (face === "down") dy = 30;\n'
    "      this.hitbox.setPosition(this.player.x + dx, this.player.y + dy);\n"
    "      this.hitbox.active = true;\n"
    '      this.sound.play("sfx-ui-click", { volume: 0.3 });\n'
    "      this.time.delayedCall(150, () => {\n"
    "        this.attacking = false;\n"
    "        this.hitbox.active = false;\n"
    "      });\n"
)


def attack_closure(body: str) -> str:
    return "    this.attack = () => {\n" + body + "    };\n"


def attack_closure_heavy(body: str) -> str:
    return "    this.attack = (heavy = false) => {\n" + body + "    };\n"


# Step 20: sword sprite that swings on attack via tween rotation.
ATTACK_BODY_S20 = (
    "      if (this.attacking) return;\n"
    "      this.attacking = true;\n"
    "      const face = this.lastFacing;\n"
    "      let dx = 0;\n"
    "      let dy = 0;\n"
    "      let baseAngle = 0;\n"
    '      if (face === "right") { dx = 30; baseAngle = 0; }\n'
    '      else if (face === "left") { dx = -30; baseAngle = 180; }\n'
    '      else if (face === "up") { dy = -30; baseAngle = -90; }\n'
    '      else if (face === "down") { dy = 30; baseAngle = 90; }\n'
    "      this.hitbox.setPosition(this.player.x + dx, this.player.y + dy);\n"
    "      this.hitbox.active = true;\n"
    "      if (!this.sword) {\n"
    "        this.sword = this.add\n"
    "          .rectangle(0, 0, 32, 4, 0xffeeaa)\n"
    "          .setOrigin(0, 0.5)\n"
    "          .setVisible(false);\n"
    "      }\n"
    "      this.sword.setVisible(true)\n"
    "        .setPosition(this.player.x, this.player.y)\n"
    "        .setAngle(baseAngle - 60);\n"
    "      this.tweens.add({\n"
    "        targets: this.sword,\n"
    "        angle: baseAngle + 60,\n"
    "        duration: 150,\n"
    '        ease: "Power2",\n'
    "        onComplete: () => this.sword.setVisible(false)\n"
    "      });\n"
    '      this.sound.play("sfx-ui-click", { volume: 0.3 });\n'
    "      this.time.delayedCall(150, () => {\n"
    "        this.attacking = false;\n"
    "        this.hitbox.active = false;\n"
    "      });\n"
)
step(
    20,
    title="Step 20",
    description=(
        "Add a sword that swings around the player on each attack. We "
        "lazy-create the sprite on first attack so we don't have to "
        "revisit `create()`.\n\n"
        "Replace the entire `this.attack` closure body with:\n\n```js\n"
        "if (this.attacking) return;\n"
        "this.attacking = true;\n"
        "const face = this.lastFacing;\n"
        "let dx = 0;\n"
        "let dy = 0;\n"
        "let baseAngle = 0;\n"
        'if (face === "right") { dx = 30; baseAngle = 0; }\n'
        'else if (face === "left") { dx = -30; baseAngle = 180; }\n'
        'else if (face === "up") { dy = -30; baseAngle = -90; }\n'
        'else if (face === "down") { dy = 30; baseAngle = 90; }\n'
        "this.hitbox.setPosition(this.player.x + dx, this.player.y + dy);\n"
        "this.hitbox.active = true;\n"
        "if (!this.sword) {\n"
        "  this.sword = this.add\n"
        "    .rectangle(0, 0, 32, 4, 0xffeeaa)\n"
        "    .setOrigin(0, 0.5)\n"
        "    .setVisible(false);\n"
        "}\n"
        "this.sword.setVisible(true)\n"
        "  .setPosition(this.player.x, this.player.y)\n"
        "  .setAngle(baseAngle - 60);\n"
        "this.tweens.add({\n"
        "  targets: this.sword,\n"
        "  angle: baseAngle + 60,\n"
        "  duration: 150,\n"
        '  ease: "Power2",\n'
        "  onComplete: () => this.sword.setVisible(false)\n"
        "});\n"
        'this.sound.play("sfx-ui-click", { volume: 0.3 });\n'
        "this.time.delayedCall(150, () => {\n"
        "  this.attacking = false;\n"
        "  this.hitbox.active = false;\n"
        "});\n```\n\n"
        "Origin `(0, 0.5)` puts the rotation pivot at the sword's hilt - "
        "the blade sweeps around the player. We tween from `baseAngle - "
        "60` to `baseAngle + 60` for a 120° arc."
    ),
    hints=[
        (
            "Track `baseAngle` per facing - 0 right, 180 left, -90 up, 90 down.",
            r'baseAngle\s*=\s*0[\s\S]*baseAngle\s*=\s*180[\s\S]*baseAngle\s*=\s*-90[\s\S]*baseAngle\s*=\s*90',
        ),
        (
            "Lazy-create `this.sword` as a 32×4 rectangle with `setOrigin(0, 0.5)` so it pivots at the hilt.",
            r"this\.sword\s*=[\s\S]*\.rectangle\(\s*0\s*,\s*0\s*,\s*32\s*,\s*4[\s\S]*setOrigin\(\s*0\s*,\s*0\.5\s*\)",
        ),
        (
            "Position the sword on the player and start at `baseAngle - 60`.",
            r"this\.sword\.setVisible\(\s*true\s*\)[\s\S]*setPosition\(\s*this\.player\.x\s*,\s*this\.player\.y\s*\)[\s\S]*setAngle\(\s*baseAngle\s*-\s*60\s*\)",
        ),
        (
            "Tween `angle` to `baseAngle + 60` over 150ms.",
            r"this\.tweens\.add\(\s*\{[\s\S]*targets:\s*this\.sword[\s\S]*angle:\s*baseAngle\s*\+\s*60[\s\S]*duration:\s*150",
        ),
        (
            "Hide the sword in the tween's `onComplete`.",
            r"onComplete:\s*\(\s*\)\s*=>\s*this\.sword\.setVisible\(\s*false\s*\)",
        ),
    ],
    seed_text=seed_wrap(solutions[19], attack_closure(ATTACK_BODY_S5)),
    mutate=lambda: state.replace(
        attack_closure(ATTACK_BODY_S5), attack_closure(ATTACK_BODY_S20)
    ),
)


# Step 21: swing trail using Graphics.
ATTACK_BODY_S21 = (
    "      if (this.attacking) return;\n"
    "      this.attacking = true;\n"
    "      const face = this.lastFacing;\n"
    "      let dx = 0;\n"
    "      let dy = 0;\n"
    "      let baseAngle = 0;\n"
    '      if (face === "right") { dx = 30; baseAngle = 0; }\n'
    '      else if (face === "left") { dx = -30; baseAngle = 180; }\n'
    '      else if (face === "up") { dy = -30; baseAngle = -90; }\n'
    '      else if (face === "down") { dy = 30; baseAngle = 90; }\n'
    "      this.hitbox.setPosition(this.player.x + dx, this.player.y + dy);\n"
    "      this.hitbox.active = true;\n"
    "      if (!this.sword) {\n"
    "        this.sword = this.add\n"
    "          .rectangle(0, 0, 32, 4, 0xffeeaa)\n"
    "          .setOrigin(0, 0.5)\n"
    "          .setVisible(false);\n"
    "      }\n"
    "      if (!this.swingTrail) {\n"
    "        this.swingTrail = this.add.graphics();\n"
    "      }\n"
    "      this.swingTrail.clear();\n"
    "      this.swingTrail.lineStyle(4, 0xffeeaa, 0.8);\n"
    "      this.swingTrail.beginPath();\n"
    "      this.swingTrail.arc(\n"
    "        this.player.x,\n"
    "        this.player.y,\n"
    "        36,\n"
    "        Phaser.Math.DegToRad(baseAngle - 60),\n"
    "        Phaser.Math.DegToRad(baseAngle + 60)\n"
    "      );\n"
    "      this.swingTrail.strokePath();\n"
    "      this.swingTrail.alpha = 1;\n"
    "      this.tweens.add({\n"
    "        targets: this.swingTrail,\n"
    "        alpha: 0,\n"
    "        duration: 200\n"
    "      });\n"
    "      this.sword.setVisible(true)\n"
    "        .setPosition(this.player.x, this.player.y)\n"
    "        .setAngle(baseAngle - 60);\n"
    "      this.tweens.add({\n"
    "        targets: this.sword,\n"
    "        angle: baseAngle + 60,\n"
    "        duration: 150,\n"
    '        ease: "Power2",\n'
    "        onComplete: () => this.sword.setVisible(false)\n"
    "      });\n"
    '      this.sound.play("sfx-ui-click", { volume: 0.3 });\n'
    "      this.time.delayedCall(150, () => {\n"
    "        this.attacking = false;\n"
    "        this.hitbox.active = false;\n"
    "      });\n"
)
step(
    21,
    title="Step 21",
    description=(
        "Layer a Graphics-drawn arc behind the sword swing - the standard "
        "fighting-game speed line.\n\n"
        "Insert this block right BEFORE the existing sword tween (after "
        "the lazy-create of `this.sword`):\n\n```js\n"
        "if (!this.swingTrail) {\n"
        "  this.swingTrail = this.add.graphics();\n"
        "}\n"
        "this.swingTrail.clear();\n"
        "this.swingTrail.lineStyle(4, 0xffeeaa, 0.8);\n"
        "this.swingTrail.beginPath();\n"
        "this.swingTrail.arc(\n"
        "  this.player.x,\n"
        "  this.player.y,\n"
        "  36,\n"
        "  Phaser.Math.DegToRad(baseAngle - 60),\n"
        "  Phaser.Math.DegToRad(baseAngle + 60)\n"
        ");\n"
        "this.swingTrail.strokePath();\n"
        "this.swingTrail.alpha = 1;\n"
        "this.tweens.add({\n"
        "  targets: this.swingTrail,\n"
        "  alpha: 0,\n"
        "  duration: 200\n"
        "});\n```\n\n"
        "`Graphics.arc` takes radians, not degrees - hence the conversion. "
        "We `clear()` before each draw so the previous swing doesn't accumulate."
    ),
    hints=[
        (
            "Lazy-create `this.swingTrail = this.add.graphics()`.",
            r"this\.swingTrail\s*=\s*this\.add\.graphics\(\s*\)",
        ),
        (
            "Use `lineStyle(4, 0xffeeaa, 0.8)` and `arc(player.x, player.y, 36, ...)` with `Phaser.Math.DegToRad` for the angles.",
            r"lineStyle\(\s*4\s*,\s*0xffeeaa\s*,\s*0\.8\s*\)[\s\S]*Phaser\.Math\.DegToRad\(\s*baseAngle\s*-\s*60\s*\)[\s\S]*Phaser\.Math\.DegToRad\(\s*baseAngle\s*\+\s*60\s*\)",
        ),
        (
            "Tween the trail's `alpha` to 0 over 200ms.",
            r"this\.tweens\.add\(\s*\{[\s\S]*targets:\s*this\.swingTrail[\s\S]*alpha:\s*0[\s\S]*duration:\s*200",
        ),
        (
            "Call `this.swingTrail.clear()` before each draw so previous swings don't pile up.",
            r"this\.swingTrail\.clear\(\s*\)",
        ),
    ],
    seed_text=seed_wrap(solutions[20], attack_closure(ATTACK_BODY_S20)),
    mutate=lambda: state.replace(
        attack_closure(ATTACK_BODY_S20), attack_closure(ATTACK_BODY_S21)
    ),
)


# Step 22: combo counter (modify onHit to bump combo + reset timer).
ONHIT_BODY_S22 = (
    "      if (!enemy.active) return;\n"
    "      this.combo += 1;\n"
    "      if (this._comboReset) this._comboReset.remove();\n"
    "      this._comboReset = this.time.delayedCall(2000, () => {\n"
    "        this.combo = 0;\n"
    "      });\n"
    "      enemy.hp -= 1;\n"
    "      if (enemy.hp <= 0) {\n"
    "        this.score += 5;\n"
    '        this.sound.play("sfx-explosion", { volume: 0.5 });\n'
    "        this.cameras.main.shake(120, 0.008);\n"
    "        this.fx.explode(40, enemy.x, enemy.y);\n"
    "        enemy.destroy();\n"
    "        return;\n"
    "      }\n"
    "      this.score += 1;\n"
    '      this.sound.play("sfx-hit", { volume: 0.5 });\n'
    + SHAKE_LINES
    + PAUSE_LINES
    + PARTICLE_LINES
    + TINT_LINES
    + SQUASH_LINES
    + RECOIL_LINES
)
step_replace_onhit(
    22,
    title="Step 22",
    description=(
        "Track a combo counter that bumps on every hit and resets after "
        "2 seconds without one.\n\nInsert RIGHT AFTER the active check in "
        "`onHit`:\n\n```js\n"
        "this.combo += 1;\n"
        "if (this._comboReset) this._comboReset.remove();\n"
        "this._comboReset = this.time.delayedCall(2000, () => {\n"
        "  this.combo = 0;\n"
        "});\n```\n\n"
        "Each hit re-arms the reset timer; if the player keeps hitting, "
        "the timer never fires. Step 23 wires the combo into the HUD."
    ),
    hints=[
        (
            "Increment `this.combo += 1` on every hit.",
            r"this\.combo\s*\+=\s*1",
        ),
        (
            "Cancel any existing `this._comboReset.remove()` before scheduling a new one.",
            r"if\s*\(\s*this\._comboReset\s*\)\s*this\._comboReset\.remove\(\s*\)",
        ),
        (
            "Reset combo to 0 with `this.time.delayedCall(2000, () => { this.combo = 0; })`.",
            r"this\._comboReset\s*=\s*this\.time\.delayedCall\(\s*2000[\s\S]*this\.combo\s*=\s*0",
        ),
    ],
    prev_body=ONHIT_BODY_S16,
    new_body=ONHIT_BODY_S22,
)


# Step 23: combo in HUD with growing tint. Modify UIScene.

UI_SCENE_S17_BODY = (
    "  create() {\n"
    "    this.scoreText = this.add\n"
    '      .text(8, 8, "SCORE 0", { fontSize: "20px", color: "#ffffff" })\n'
    "      .setScrollFactor(0);\n"
    "  }\n\n"
    "  update() {\n"
    '    const main = this.scene.get("MainScene");\n'
    "    if (!main) return;\n"
    "    this.scoreText.setText(`SCORE ${main.score ?? 0}`);\n"
    "  }\n"
)

UI_SCENE_S23_BODY = (
    "  create() {\n"
    "    this.scoreText = this.add\n"
    '      .text(8, 8, "SCORE 0", { fontSize: "20px", color: "#ffffff" })\n'
    "      .setScrollFactor(0);\n"
    "    this.comboText = this.add\n"
    '      .text(8, 36, "", { fontSize: "16px", color: "#ffeeaa" })\n'
    "      .setScrollFactor(0);\n"
    "  }\n\n"
    "  update() {\n"
    '    const main = this.scene.get("MainScene");\n'
    "    if (!main) return;\n"
    "    this.scoreText.setText(`SCORE ${main.score ?? 0}`);\n"
    "    const combo = main.combo ?? 0;\n"
    "    if (combo > 1) {\n"
    "      this.comboText.setText(`COMBO x${combo}`);\n"
    "      this.comboText.setScale(1 + combo * 0.05);\n"
    "      this.comboText.setTint(\n"
    "        Phaser.Display.Color.GetColor(255, Math.max(80, 255 - combo * 12), 100)\n"
    "      );\n"
    "    } else {\n"
    '      this.comboText.setText("");\n'
    "    }\n"
    "  }\n"
)
step(
    23,
    title="Step 23",
    description=(
        "Show the combo in the HUD with a growing scale + warming tint. "
        "Replace the body of `UIScene` with:\n\n```js\n"
        "create() {\n"
        "  this.scoreText = this.add\n"
        '    .text(8, 8, "SCORE 0", { fontSize: "20px", color: "#ffffff" })\n'
        "    .setScrollFactor(0);\n"
        "  this.comboText = this.add\n"
        '    .text(8, 36, "", { fontSize: "16px", color: "#ffeeaa" })\n'
        "    .setScrollFactor(0);\n"
        "}\n\n"
        "update() {\n"
        '  const main = this.scene.get("MainScene");\n'
        "  if (!main) return;\n"
        "  this.scoreText.setText(`SCORE ${main.score ?? 0}`);\n"
        "  const combo = main.combo ?? 0;\n"
        "  if (combo > 1) {\n"
        "    this.comboText.setText(`COMBO x${combo}`);\n"
        "    this.comboText.setScale(1 + combo * 0.05);\n"
        "    this.comboText.setTint(\n"
        "      Phaser.Display.Color.GetColor(255, Math.max(80, 255 - combo * 12), 100)\n"
        "    );\n"
        "  } else {\n"
        '    this.comboText.setText("");\n'
        "  }\n"
        "}\n```\n\n"
        "Step 38 will clamp the scale and tint so combo 50 doesn't take "
        "over the screen."
    ),
    hints=[
        (
            "Add `this.comboText` at `(8, 36)` styled `#ffeeaa`.",
            r"this\.comboText\s*=[\s\S]*\.text\(\s*8\s*,\s*36[\s\S]*ffeeaa",
        ),
        (
            "Read `main.combo ?? 0` and only render when `combo > 1`.",
            r"const\s+combo\s*=\s*main\.combo\s*\?\?\s*0[\s\S]*if\s*\(\s*combo\s*>\s*1\s*\)",
        ),
        (
            "Scale the combo text with `setScale(1 + combo * 0.05)`.",
            r"this\.comboText\.setScale\(\s*1\s*\+\s*combo\s*\*\s*0\.05\s*\)",
        ),
        (
            "Tint via `Phaser.Display.Color.GetColor(255, Math.max(80, 255 - combo * 12), 100)`.",
            r"Phaser\.Display\.Color\.GetColor\(\s*255\s*,\s*Math\.max\(\s*80\s*,\s*255\s*-\s*combo\s*\*\s*12\s*\)\s*,\s*100\s*\)",
        ),
    ],
    seed_text=seed_wrap(solutions[22], UI_SCENE_S17_BODY),
    mutate=lambda: state.replace(UI_SCENE_S17_BODY, UI_SCENE_S23_BODY),
)


# Step 24: heavy hit variant. Add K-key listener + heavy-aware attack closure.
INPUT_LISTENERS_S5 = (
    '    this.input.on("pointerdown", () => this.attack());\n'
    '    this.input.keyboard.on("keydown-J", () => this.attack());\n'
)
INPUT_LISTENERS_S24 = (
    '    this.input.on("pointerdown", () => this.attack());\n'
    '    this.input.keyboard.on("keydown-J", () => this.attack());\n'
    '    this.input.keyboard.on("keydown-K", () => this.attack(true));\n'
)

ATTACK_BODY_S24 = (
    "      if (this.attacking) return;\n"
    "      this.attacking = true;\n"
    "      this.heavyMode = heavy;\n"
    "      const face = this.lastFacing;\n"
    "      let dx = 0;\n"
    "      let dy = 0;\n"
    "      let baseAngle = 0;\n"
    '      if (face === "right") { dx = 30; baseAngle = 0; }\n'
    '      else if (face === "left") { dx = -30; baseAngle = 180; }\n'
    '      else if (face === "up") { dy = -30; baseAngle = -90; }\n'
    '      else if (face === "down") { dy = 30; baseAngle = 90; }\n'
    "      this.hitbox.setPosition(this.player.x + dx, this.player.y + dy);\n"
    "      this.hitbox.active = true;\n"
    "      if (!this.sword) {\n"
    "        this.sword = this.add\n"
    "          .rectangle(0, 0, 32, 4, 0xffeeaa)\n"
    "          .setOrigin(0, 0.5)\n"
    "          .setVisible(false);\n"
    "      }\n"
    "      if (!this.swingTrail) {\n"
    "        this.swingTrail = this.add.graphics();\n"
    "      }\n"
    "      this.swingTrail.clear();\n"
    "      this.swingTrail.lineStyle(heavy ? 8 : 4, heavy ? 0xff5555 : 0xffeeaa, 0.8);\n"
    "      this.swingTrail.beginPath();\n"
    "      this.swingTrail.arc(\n"
    "        this.player.x,\n"
    "        this.player.y,\n"
    "        heavy ? 48 : 36,\n"
    "        Phaser.Math.DegToRad(baseAngle - 60),\n"
    "        Phaser.Math.DegToRad(baseAngle + 60)\n"
    "      );\n"
    "      this.swingTrail.strokePath();\n"
    "      this.swingTrail.alpha = 1;\n"
    "      this.tweens.add({\n"
    "        targets: this.swingTrail,\n"
    "        alpha: 0,\n"
    "        duration: 200\n"
    "      });\n"
    "      this.sword.setVisible(true)\n"
    "        .setPosition(this.player.x, this.player.y)\n"
    "        .setScale(heavy ? 1.5 : 1)\n"
    "        .setAngle(baseAngle - 60);\n"
    "      this.tweens.add({\n"
    "        targets: this.sword,\n"
    "        angle: baseAngle + 60,\n"
    "        duration: heavy ? 220 : 150,\n"
    '        ease: "Power2",\n'
    "        onComplete: () => this.sword.setVisible(false)\n"
    "      });\n"
    '      this.sound.play(heavy ? "sfx-jump" : "sfx-ui-click", { volume: 0.4 });\n'
    "      this.time.delayedCall(heavy ? 220 : 150, () => {\n"
    "        this.attacking = false;\n"
    "        this.hitbox.active = false;\n"
    "        this.heavyMode = false;\n"
    "      });\n"
)

# Combine the attack closure and listener block - they sit adjacent in
# /* create-methods */ so wrap them together.
def attack_and_listeners(body: str, listeners: str, signature_heavy: bool = False) -> str:
    closure = attack_closure_heavy(body) if signature_heavy else attack_closure(body)
    return closure + listeners


step(
    24,
    title="Step 24",
    description=(
        "Add a heavy attack on the `K` key that signals stronger juice "
        "downstream. We change the closure signature to `(heavy = false)`, "
        "stash the flag on `this.heavyMode`, and beef up the visuals "
        "(thicker arc, larger sword, longer windup).\n\n"
        "Replace the entire `this.attack` closure AND its listener "
        "block with:\n\n```js\n"
        "this.attack = (heavy = false) => {\n"
        "  if (this.attacking) return;\n"
        "  this.attacking = true;\n"
        "  this.heavyMode = heavy;\n"
        "  const face = this.lastFacing;\n"
        "  let dx = 0;\n"
        "  let dy = 0;\n"
        "  let baseAngle = 0;\n"
        '  if (face === "right") { dx = 30; baseAngle = 0; }\n'
        '  else if (face === "left") { dx = -30; baseAngle = 180; }\n'
        '  else if (face === "up") { dy = -30; baseAngle = -90; }\n'
        '  else if (face === "down") { dy = 30; baseAngle = 90; }\n'
        "  this.hitbox.setPosition(this.player.x + dx, this.player.y + dy);\n"
        "  this.hitbox.active = true;\n"
        "  // ...sword + trail with heavy variants...\n"
        '  this.sound.play(heavy ? "sfx-jump" : "sfx-ui-click", { volume: 0.4 });\n'
        "  this.time.delayedCall(heavy ? 220 : 150, () => {\n"
        "    this.attacking = false;\n"
        "    this.hitbox.active = false;\n"
        "    this.heavyMode = false;\n"
        "  });\n"
        "};\n"
        'this.input.on("pointerdown", () => this.attack());\n'
        'this.input.keyboard.on("keydown-J", () => this.attack());\n'
        'this.input.keyboard.on("keydown-K", () => this.attack(true));\n```\n\n'
        "`heavy` toggles every juice ingredient: thicker trail (8 vs 4), "
        "wider arc radius (48 vs 36), 1.5× sword scale, slower swing "
        "(220 vs 150ms), and a heavier audio cue. Step 25 reads "
        "`this.heavyMode` to scale the shake."
    ),
    hints=[
        (
            "Change the signature to `this.attack = (heavy = false) => { ... }`.",
            r"this\.attack\s*=\s*\(\s*heavy\s*=\s*false\s*\)\s*=>",
        ),
        (
            "Track `this.heavyMode = heavy;` so `onHit` can read it.",
            r"this\.heavyMode\s*=\s*heavy\s*;",
        ),
        (
            "Reset `this.heavyMode = false` inside the cooldown `delayedCall`.",
            r"this\.heavyMode\s*=\s*false",
        ),
        (
            "Listen for `keydown-K` and call `this.attack(true)`.",
            r'this\.input\.keyboard\.on\(\s*["\']keydown-K["\']\s*,\s*\(\s*\)\s*=>\s*this\.attack\(\s*true\s*\)\s*\)',
        ),
        (
            'Vary the SFX between `"sfx-jump"` (heavy) and `"sfx-ui-click"` (light).',
            r'heavy\s*\?\s*["\']sfx-jump["\']\s*:\s*["\']sfx-ui-click["\']',
        ),
    ],
    seed_text=seed_wrap(solutions[23], attack_and_listeners(ATTACK_BODY_S21, INPUT_LISTENERS_S5)),
    mutate=lambda: state.replace(
        attack_and_listeners(ATTACK_BODY_S21, INPUT_LISTENERS_S5),
        attack_and_listeners(ATTACK_BODY_S24, INPUT_LISTENERS_S24, signature_heavy=True),
    ),
)


# Step 25: scale shake by impact (heavyMode in onHit).
ONHIT_BODY_S25 = (
    "      if (!enemy.active) return;\n"
    "      this.combo += 1;\n"
    "      if (this._comboReset) this._comboReset.remove();\n"
    "      this._comboReset = this.time.delayedCall(2000, () => {\n"
    "        this.combo = 0;\n"
    "      });\n"
    "      const impact = this.heavyMode ? 2 : 1;\n"
    "      enemy.hp -= this.heavyMode ? 2 : 1;\n"
    "      if (enemy.hp <= 0) {\n"
    "        this.score += 5 * impact;\n"
    '        this.sound.play("sfx-explosion", { volume: 0.5 });\n'
    "        this.cameras.main.shake(120 * impact, 0.008 * impact);\n"
    "        this.fx.explode(40 * impact, enemy.x, enemy.y);\n"
    "        enemy.destroy();\n"
    "        return;\n"
    "      }\n"
    "      this.score += 1 * impact;\n"
    '      this.sound.play("sfx-hit", { volume: 0.5 });\n'
    "      this.cameras.main.shake(80 * impact, 0.005 * impact);\n"
    + PAUSE_LINES
    + "      this.fx.explode(20 * impact, enemy.x, enemy.y);\n"
    + TINT_LINES
    + SQUASH_LINES
    + RECOIL_LINES
)
step_replace_onhit(
    25,
    title="Step 25",
    description=(
        "Read `this.heavyMode` in `onHit` to scale every juice magnitude. "
        "Heavy hits do double damage, double score, double shake, double "
        "particles.\n\nReplace the `onHit` body to compute `const impact = "
        "this.heavyMode ? 2 : 1;` once, then multiply the magnitudes by "
        "`impact`:\n\n```js\n"
        "const impact = this.heavyMode ? 2 : 1;\n"
        "enemy.hp -= this.heavyMode ? 2 : 1;\n"
        "if (enemy.hp <= 0) {\n"
        "  this.score += 5 * impact;\n"
        "  this.cameras.main.shake(120 * impact, 0.008 * impact);\n"
        "  this.fx.explode(40 * impact, enemy.x, enemy.y);\n"
        "  // ...\n"
        "}\n"
        "this.score += 1 * impact;\n"
        "this.cameras.main.shake(80 * impact, 0.005 * impact);\n"
        "this.fx.explode(20 * impact, enemy.x, enemy.y);\n"
        "// ...\n```\n\n"
        "Magnitudes scale linearly with damage. The squash/tint/recoil "
        "tweens are independent of impact - they're per-frame visuals, not "
        "magnitude-driven."
    ),
    hints=[
        (
            "Compute `const impact = this.heavyMode ? 2 : 1;` after the combo update.",
            r"const\s+impact\s*=\s*this\.heavyMode\s*\?\s*2\s*:\s*1",
        ),
        (
            "Decrement HP by 2 on heavy, 1 otherwise.",
            r"enemy\.hp\s*-=\s*this\.heavyMode\s*\?\s*2\s*:\s*1",
        ),
        (
            "Multiply non-fatal score (1 * impact), shake (80 * impact, 0.005 * impact), and particles (20 * impact) by `impact`.",
            r"this\.score\s*\+=\s*1\s*\*\s*impact[\s\S]*shake\(\s*80\s*\*\s*impact\s*,\s*0\.005\s*\*\s*impact\s*\)[\s\S]*explode\(\s*20\s*\*\s*impact",
        ),
        (
            "Multiply kill score (5 * impact), kill shake (120 * impact, 0.008 * impact), and kill particles (40 * impact).",
            r"this\.score\s*\+=\s*5\s*\*\s*impact[\s\S]*shake\(\s*120\s*\*\s*impact\s*,\s*0\.008\s*\*\s*impact\s*\)[\s\S]*explode\(\s*40\s*\*\s*impact",
        ),
    ],
    prev_body=ONHIT_BODY_S22,
    new_body=ONHIT_BODY_S25,
)


# Step 26: slow-mo on heavy hit.
ONHIT_BODY_S26 = (
    "      if (!enemy.active) return;\n"
    "      this.combo += 1;\n"
    "      if (this._comboReset) this._comboReset.remove();\n"
    "      this._comboReset = this.time.delayedCall(2000, () => {\n"
    "        this.combo = 0;\n"
    "      });\n"
    "      const impact = this.heavyMode ? 2 : 1;\n"
    "      if (this.heavyMode) {\n"
    "        this.time.timeScale = 0.4;\n"
    "        this.time.delayedCall(120, () => {\n"
    "          this.time.timeScale = 1;\n"
    "        });\n"
    "      }\n"
    "      enemy.hp -= this.heavyMode ? 2 : 1;\n"
    "      if (enemy.hp <= 0) {\n"
    "        this.score += 5 * impact;\n"
    '        this.sound.play("sfx-explosion", { volume: 0.5 });\n'
    "        this.cameras.main.shake(120 * impact, 0.008 * impact);\n"
    "        this.fx.explode(40 * impact, enemy.x, enemy.y);\n"
    "        enemy.destroy();\n"
    "        return;\n"
    "      }\n"
    "      this.score += 1 * impact;\n"
    '      this.sound.play("sfx-hit", { volume: 0.5 });\n'
    "      this.cameras.main.shake(80 * impact, 0.005 * impact);\n"
    + PAUSE_LINES
    + "      this.fx.explode(20 * impact, enemy.x, enemy.y);\n"
    + TINT_LINES
    + SQUASH_LINES
    + RECOIL_LINES
)
step_replace_onhit(
    26,
    title="Step 26",
    description=(
        "Heavy hits also drop time into slow-mo for a beat. Insert this "
        "block right after the `impact` computation in `onHit`:\n\n```js\n"
        "if (this.heavyMode) {\n"
        "  this.time.timeScale = 0.4;\n"
        "  this.time.delayedCall(120, () => {\n"
        "    this.time.timeScale = 1;\n"
        "  });\n"
        "}\n```\n\n"
        "`time.timeScale = 0.4` slows ALL Phaser time (tweens, "
        "delayedCalls). The 120ms timer is itself slowed - real time is "
        "120 / 0.4 = 300ms. Restore to 1 lets the rest of the juice play "
        "out at full speed."
    ),
    hints=[
        (
            "Drop into slow-mo only when `this.heavyMode` is true.",
            r"if\s*\(\s*this\.heavyMode\s*\)\s*\{[\s\S]*this\.time\.timeScale\s*=\s*0\.4",
        ),
        (
            "Restore `this.time.timeScale = 1` after `this.time.delayedCall(120, ...)`.",
            r"this\.time\.delayedCall\(\s*120[\s\S]*this\.time\.timeScale\s*=\s*1",
        ),
    ],
    prev_body=ONHIT_BODY_S25,
    new_body=ONHIT_BODY_S26,
)


# Step 27: crit chance with extra particles.
ONHIT_BODY_S27 = (
    "      if (!enemy.active) return;\n"
    "      this.combo += 1;\n"
    "      if (this._comboReset) this._comboReset.remove();\n"
    "      this._comboReset = this.time.delayedCall(2000, () => {\n"
    "        this.combo = 0;\n"
    "      });\n"
    "      const isCrit = Math.random() < 0.2;\n"
    "      const impact = (this.heavyMode ? 2 : 1) * (isCrit ? 1.5 : 1);\n"
    "      if (this.heavyMode) {\n"
    "        this.time.timeScale = 0.4;\n"
    "        this.time.delayedCall(120, () => {\n"
    "          this.time.timeScale = 1;\n"
    "        });\n"
    "      }\n"
    "      enemy.hp -= this.heavyMode ? 2 : 1;\n"
    "      if (enemy.hp <= 0) {\n"
    "        this.score += 5 * impact;\n"
    '        this.sound.play("sfx-explosion", { volume: 0.5 });\n'
    "        this.cameras.main.shake(120 * impact, 0.008 * impact);\n"
    "        this.fx.explode(40 * impact, enemy.x, enemy.y);\n"
    "        if (isCrit) this.fx.explode(30, enemy.x, enemy.y);\n"
    "        enemy.destroy();\n"
    "        return;\n"
    "      }\n"
    "      this.score += 1 * impact;\n"
    '      this.sound.play("sfx-hit", { volume: 0.5 });\n'
    '      if (isCrit) this.sound.play("sfx-coin", { volume: 0.4 });\n'
    "      this.cameras.main.shake(80 * impact, 0.005 * impact);\n"
    + PAUSE_LINES
    + "      this.fx.explode(20 * impact, enemy.x, enemy.y);\n"
    + "      if (isCrit) this.fx.explode(20, enemy.x, enemy.y);\n"
    + TINT_LINES
    + SQUASH_LINES
    + RECOIL_LINES
)
step_replace_onhit(
    27,
    title="Step 27",
    description=(
        "20% of hits become crits - 1.5× score and a bonus particle "
        "burst with `sfx-coin`.\n\nInsert at the top of `onHit` (after the "
        "combo update):\n\n```js\n"
        "const isCrit = Math.random() < 0.2;\n"
        "const impact = (this.heavyMode ? 2 : 1) * (isCrit ? 1.5 : 1);\n```\n\n"
        "Then in the kill branch:\n\n```js\n"
        "if (isCrit) this.fx.explode(30, enemy.x, enemy.y);\n```\n\n"
        "And in the non-fatal branch:\n\n```js\n"
        'if (isCrit) this.sound.play("sfx-coin", { volume: 0.4 });\n'
        "// ...\n"
        "if (isCrit) this.fx.explode(20, enemy.x, enemy.y);\n```\n\n"
        "We multiply the existing `impact` by `1.5` on crit so score "
        "scales but everything else (shake, base particles) keeps the "
        "same base impact. The bonus burst is the visual payoff."
    ),
    hints=[
        (
            "Roll `const isCrit = Math.random() < 0.2;`.",
            r"const\s+isCrit\s*=\s*Math\.random\(\s*\)\s*<\s*0\.2",
        ),
        (
            "Bake crit into impact: `(this.heavyMode ? 2 : 1) * (isCrit ? 1.5 : 1)`.",
            r"const\s+impact\s*=\s*\(\s*this\.heavyMode\s*\?\s*2\s*:\s*1\s*\)\s*\*\s*\(\s*isCrit\s*\?\s*1\.5\s*:\s*1\s*\)",
        ),
        (
            "Add a bonus 30-particle burst on crit kills.",
            r"if\s*\(\s*isCrit\s*\)\s*this\.fx\.explode\(\s*30\s*,",
        ),
        (
            'Play `"sfx-coin"` on crit non-fatal hits.',
            r'if\s*\(\s*isCrit\s*\)\s*this\.sound\.play\(\s*["\']sfx-coin["\']',
        ),
    ],
    prev_body=ONHIT_BODY_S26,
    new_body=ONHIT_BODY_S27,
)


# Step 28: player damage state. Append player overlap + invul state.
PLAYER_DAMAGE_BLOCK_S28 = (
    "    this.playerHp = 3;\n"
    "    this.invulnerable = false;\n"
    "    this.physics.add.overlap(this.player, this.enemies, () => {\n"
    "      if (this.invulnerable || !this.player.active) return;\n"
    "      this.invulnerable = true;\n"
    "      this.cameras.main.shake(150, 0.015);\n"
    "      this.cameras.main.flash(150, 255, 0, 0);\n"
    "      this.player.setTintFill(0xff0000);\n"
    "      this.tweens.add({\n"
    "        targets: this.player,\n"
    "        alpha: 0.3,\n"
    "        duration: 100,\n"
    "        yoyo: true,\n"
    "        repeat: 3\n"
    "      });\n"
    "      this.time.delayedCall(200, () => this.player.clearTint());\n"
    '      this.sound.play("sfx-hit", { volume: 0.7 });\n'
    "      this.playerHp -= 1;\n"
    "      this.time.delayedCall(800, () => {\n"
    "        this.invulnerable = false;\n"
    "        this.player.alpha = 1;\n"
    "      });\n"
    "    });\n"
)

ENEMY_OVERLAP_BLOCK = (
    "    this.physics.add.overlap(this.hitbox, this.enemies, (hb, enemy) => {\n"
    "      if (!this.hitbox.active) return;\n"
    "      this.onHit(enemy);\n"
    "    });\n"
)
step(
    28,
    title="Step 28",
    description=(
        "Add a player damage state so getting touched by an enemy "
        "triggers the full damage-juice stack: red flash, red tint, "
        "shake, alpha blink for invulnerability frames.\n\n"
        "Append below the existing `physics.add.overlap(this.hitbox, ...)`:"
        "\n\n```js\n"
        "this.playerHp = 3;\n"
        "this.invulnerable = false;\n"
        "this.physics.add.overlap(this.player, this.enemies, () => {\n"
        "  if (this.invulnerable || !this.player.active) return;\n"
        "  this.invulnerable = true;\n"
        "  this.cameras.main.shake(150, 0.015);\n"
        "  this.cameras.main.flash(150, 255, 0, 0);\n"
        "  this.player.setTintFill(0xff0000);\n"
        "  this.tweens.add({\n"
        "    targets: this.player,\n"
        "    alpha: 0.3,\n"
        "    duration: 100,\n"
        "    yoyo: true,\n"
        "    repeat: 3\n"
        "  });\n"
        "  this.time.delayedCall(200, () => this.player.clearTint());\n"
        '  this.sound.play("sfx-hit", { volume: 0.7 });\n'
        "  this.playerHp -= 1;\n"
        "  this.time.delayedCall(800, () => {\n"
        "    this.invulnerable = false;\n"
        "    this.player.alpha = 1;\n"
        "  });\n"
        "});\n```\n\n"
        "`flash(duration, r, g, b)` overlays a colored rectangle. The "
        "alpha tween with `repeat: 3, yoyo: true` runs the blink 7 times "
        "(initial + 3 yoyo pairs). Step 29 wires the game-over scene when "
        "`playerHp <= 0`."
    ),
    hints=[
        (
            "Initialise `this.playerHp = 3` and `this.invulnerable = false`.",
            r"this\.playerHp\s*=\s*3[\s\S]*this\.invulnerable\s*=\s*false",
        ),
        (
            "Register `this.physics.add.overlap(this.player, this.enemies, ...)`.",
            r"this\.physics\.add\.overlap\(\s*this\.player\s*,\s*this\.enemies",
        ),
        (
            "Guard with `if (this.invulnerable || !this.player.active) return;`.",
            r"if\s*\(\s*this\.invulnerable\s*\|\|\s*!this\.player\.active\s*\)\s*return",
        ),
        (
            "Use `cameras.main.flash(150, 255, 0, 0)` for the red flash.",
            r"this\.cameras\.main\.flash\(\s*150\s*,\s*255\s*,\s*0\s*,\s*0\s*\)",
        ),
        (
            "Set `this.player.setTintFill(0xff0000)` and clear it after 200ms.",
            r"this\.player\.setTintFill\(\s*0xff0000\s*\)[\s\S]*delayedCall\(\s*200[\s\S]*clearTint",
        ),
        (
            "Decrement `this.playerHp -= 1` and clear `invulnerable` after 800ms.",
            r"this\.playerHp\s*-=\s*1[\s\S]*delayedCall\(\s*800[\s\S]*this\.invulnerable\s*=\s*false",
        ),
    ],
    seed_text=seed_wrap(solutions[27], ENEMY_OVERLAP_BLOCK),
    mutate=lambda: state.replace(
        ENEMY_OVERLAP_BLOCK, ENEMY_OVERLAP_BLOCK + PLAYER_DAMAGE_BLOCK_S28
    ),
)


# Step 29: GameOverScene. Edit the player damage callback to route to the new
# scene AND splice the new class into the file. Editable region wraps from
# the player damage block through the config.

GAMEOVER_SCENE_S29 = (
    "\nclass GameOverScene extends Phaser.Scene {\n"
    "  constructor() {\n"
    '    super("GameOverScene");\n'
    "  }\n"
    "  create(data) {\n"
    "    this.add\n"
    "      .rectangle(400, 300, 800, 600, 0x000000, 0.7)\n"
    "      .setOrigin(0.5);\n"
    "    this.add\n"
    '      .text(400, 220, "GAME OVER", { fontSize: "48px", color: "#ff5252" })\n'
    "      .setOrigin(0.5);\n"
    "    this.add\n"
    '      .text(400, 290, `SCORE ${data?.score ?? 0}`, { fontSize: "28px", color: "#ffffff" })\n'
    "      .setOrigin(0.5);\n"
    "    this.add\n"
    '      .text(400, 330, `BEST  ${data?.best ?? 0}`, { fontSize: "20px", color: "#ffeeaa" })\n'
    "      .setOrigin(0.5);\n"
    "    const btn = this.add\n"
    "      .text(400, 410, \"PLAY AGAIN\", { fontSize: \"22px\", color: \"#ffffff\", backgroundColor: \"#2a3045\", padding: { x: 14, y: 8 } })\n"
    "      .setOrigin(0.5)\n"
    "      .setInteractive();\n"
    '    btn.on("pointerup", () => {\n'
    '      this.scene.stop("GameOverScene");\n'
    '      this.scene.stop("UIScene");\n'
    '      this.scene.start("MainScene");\n'
    '      this.scene.launch("UIScene");\n'
    "    });\n"
    "  }\n"
    "}\n"
)

PLAYER_DAMAGE_S29 = (
    "    this.playerHp = 3;\n"
    "    this.invulnerable = false;\n"
    "    this.physics.add.overlap(this.player, this.enemies, () => {\n"
    "      if (this.invulnerable || !this.player.active) return;\n"
    "      this.invulnerable = true;\n"
    "      this.cameras.main.shake(150, 0.015);\n"
    "      this.cameras.main.flash(150, 255, 0, 0);\n"
    "      this.player.setTintFill(0xff0000);\n"
    "      this.tweens.add({\n"
    "        targets: this.player,\n"
    "        alpha: 0.3,\n"
    "        duration: 100,\n"
    "        yoyo: true,\n"
    "        repeat: 3\n"
    "      });\n"
    "      this.time.delayedCall(200, () => this.player.clearTint());\n"
    '      this.sound.play("sfx-hit", { volume: 0.7 });\n'
    "      this.playerHp -= 1;\n"
    "      if (this.playerHp <= 0) {\n"
    "        this.player.active = false;\n"
    "        this.player.body.setVelocity(0, 0);\n"
    "        this.time.delayedCall(400, () => {\n"
    '          this.scene.pause("MainScene");\n'
    '          this.scene.launch("GameOverScene", {\n'
    "            score: this.score,\n"
    "            best: this.bestScore\n"
    "          });\n"
    "        });\n"
    "        return;\n"
    "      }\n"
    "      this.time.delayedCall(800, () => {\n"
    "        this.invulnerable = false;\n"
    "        this.player.alpha = 1;\n"
    "      });\n"
    "    });\n"
)

CONFIG_POST_S29 = (
    "\nconst config = {\n"
    "  type: Phaser.AUTO,\n"
    "  width: 800,\n"
    "  height: 600,\n"
    '  parent: "game-container",\n'
    '  backgroundColor: "#101020",\n'
    '   physics: { default: "arcade", arcade: { debug: false } },\n'
    "  scene: [MainScene, UIScene, GameOverScene]\n"
    "};\n"
)

# Use a unique tail span: from PLAYER_DAMAGE_BLOCK_S28 through CONFIG_POST_S17
# (the existing config). We replace BOTH in one edit.
SPAN_S28 = PLAYER_DAMAGE_BLOCK_S28 + "  }\n\n  update(time, delta) {\n"
# easier: wrap the config block + the player-damage block separately is two
# regions. Use a single contiguous span: from start of PLAYER_DAMAGE_BLOCK_S28
# through end-of-config. But there's other code between them. So we wrap the
# entire range.

# Actually simpler: edit only the player damage callback (single region) and
# THEN do a separate edit for the config. But each step is one region.
# Solution: wrap from PLAYER_DAMAGE_BLOCK_S28 (start) THROUGH CONFIG_POST_S17
# (end), which forms ONE contiguous span in the file.

SPAN_PRE_S29 = PLAYER_DAMAGE_BLOCK_S28
SPAN_POST_S29 = (
    PLAYER_DAMAGE_S29
)


def _step_29_seed():
    # We need ONE editable region. Wrap from PLAYER_DAMAGE_BLOCK_S28 start
    # through CONFIG_POST_S17 end - they're sequential at the bottom of the
    # MainScene + before the config.
    s = solutions[28]
    head_idx = s.index(PLAYER_DAMAGE_BLOCK_S28)
    tail_idx = s.index(CONFIG_POST_S17) + len(CONFIG_POST_S17)
    span = s[head_idx:tail_idx]
    return s.replace(span, f"{REGION}\n{span}{REGION}\n", 1)


def _step_29_mutate():
    state.replace(PLAYER_DAMAGE_BLOCK_S28, PLAYER_DAMAGE_S29)
    state.replace(CONFIG_POST_S17, GAMEOVER_SCENE_S29 + CONFIG_POST_S29)


step(
    29,
    title="Step 29",
    description=(
        "Wire a Game Over scene that pops up when `playerHp <= 0`, shows "
        "the score + best, and offers a restart button.\n\n"
        "Inside the player-damage callback, replace the `delayedCall(800, "
        "() => { this.invulnerable = false; ... })` reset with a fatal "
        "branch:\n\n```js\n"
        "if (this.playerHp <= 0) {\n"
        "  this.player.active = false;\n"
        "  this.player.body.setVelocity(0, 0);\n"
        "  this.time.delayedCall(400, () => {\n"
        '    this.scene.pause("MainScene");\n'
        '    this.scene.launch("GameOverScene", {\n'
        "      score: this.score,\n"
        "      best: this.bestScore\n"
        "    });\n"
        "  });\n"
        "  return;\n"
        "}\n"
        "this.time.delayedCall(800, () => {\n"
        "  this.invulnerable = false;\n"
        "  this.player.alpha = 1;\n"
        "});\n```\n\n"
        "Then add a `GameOverScene` class between `UIScene` and `const "
        "config`, and update the config's scene list to "
        "`[MainScene, UIScene, GameOverScene]`. The Game Over scene "
        "displays SCORE / BEST and a `PLAY AGAIN` button that restarts "
        "MainScene + UIScene.\n\n"
        "We `pause` MainScene rather than `stop` so the camera stays "
        "frozen behind the overlay. The 400ms delay before launching the "
        "scene lets the death blink animation finish."
    ),
    hints=[
        (
            "Add a `GameOverScene` class with `super(\"GameOverScene\")`.",
            r'class\s+GameOverScene\s+extends\s+Phaser\.Scene[\s\S]*super\(\s*["\']GameOverScene["\']\s*\)',
        ),
        (
            "Receive data via `create(data)` and read `data?.score` / `data?.best`.",
            r"create\s*\(\s*data\s*\)[\s\S]*data\?\.score[\s\S]*data\?\.best",
        ),
        (
            'Render a `"PLAY AGAIN"` button that on `"pointerup"` stops MainScene + UIScene + GameOverScene and re-launches MainScene + UIScene.',
            r'pointerup[\s\S]*scene\.stop\(\s*["\']GameOverScene["\']\s*\)[\s\S]*scene\.start\(\s*["\']MainScene["\']\s*\)',
        ),
        (
            "Add `GameOverScene` to the config's `scene` array.",
            r"scene:\s*\[\s*MainScene\s*,\s*UIScene\s*,\s*GameOverScene\s*\]",
        ),
        (
            'In MainScene, when `playerHp <= 0`, pause MainScene and launch GameOverScene with `{ score, best }`.',
            r'if\s*\(\s*this\.playerHp\s*<=\s*0\s*\)[\s\S]*scene\.pause\(\s*["\']MainScene["\']\s*\)[\s\S]*scene\.launch\(\s*["\']GameOverScene["\']\s*,\s*\{\s*score:',
        ),
    ],
    seed_text=_step_29_seed(),
    mutate=_step_29_mutate,
)


# -----------------------------------------------------------------------------
# Step 30: boss enemy with multi-stage HP. Append to /* create-world */.

BOSS_BLOCK_S30 = (
    "    this.spawnBoss = () => {\n"
    "      const boss = this.add\n"
    "        .rectangle(400, 80, 80, 80, 0x880000)\n"
    "        .setStrokeStyle(3, 0xffeeaa)\n"
    "        .setOrigin(0.5);\n"
    "      this.physics.add.existing(boss);\n"
    "      boss.body.setCollideWorldBounds(true);\n"
    "      boss.hp = 20;\n"
    "      boss.isBoss = true;\n"
    "      this.enemies.add(boss);\n"
    "      return boss;\n"
    "    };\n"
    "    this.time.delayedCall(20000, () => this.spawnBoss());\n"
)
step(
    30,
    title="Step 30",
    description=(
        "Add a boss enemy with `hp = 20` that spawns 20 seconds in. The "
        "existing `onHit` already handles HP - the boss soaks 20 hits "
        "before exploding.\n\nInsert under `/* create-world */`:\n\n```js\n"
        "this.spawnBoss = () => {\n"
        "  const boss = this.add\n"
        "    .rectangle(400, 80, 80, 80, 0x880000)\n"
        "    .setStrokeStyle(3, 0xffeeaa)\n"
        "    .setOrigin(0.5);\n"
        "  this.physics.add.existing(boss);\n"
        "  boss.body.setCollideWorldBounds(true);\n"
        "  boss.hp = 20;\n"
        "  boss.isBoss = true;\n"
        "  this.enemies.add(boss);\n"
        "  return boss;\n"
        "};\n"
        "this.time.delayedCall(20000, () => this.spawnBoss());\n```\n\n"
        "We attach `boss.isBoss = true` so step 31 can branch the kill "
        "cinematic. The boss is in the same `this.enemies` group, so the "
        "existing hitbox overlap automatically targets it."
    ),
    hints=[
        (
            "Define `this.spawnBoss = () => { ... }` as a closure on the scene.",
            r"this\.spawnBoss\s*=\s*\(\s*\)\s*=>\s*\{",
        ),
        (
            "Spawn the boss as an `80×80` `0x880000` rectangle at `(400, 80)` with `setStrokeStyle(3, 0xffeeaa)`.",
            r"\.rectangle\(\s*400\s*,\s*80\s*,\s*80\s*,\s*80\s*,\s*0x880000\s*\)[\s\S]*setStrokeStyle\(\s*3\s*,\s*0xffeeaa\s*\)",
        ),
        (
            "Set `boss.hp = 20` and `boss.isBoss = true`.",
            r"boss\.hp\s*=\s*20[\s\S]*boss\.isBoss\s*=\s*true",
        ),
        (
            "Schedule the boss with `this.time.delayedCall(20000, () => this.spawnBoss())`.",
            r"this\.time\.delayedCall\(\s*20000\s*,\s*\(\s*\)\s*=>\s*this\.spawnBoss\(\s*\)\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[29], SPAWN_RAMP_BLOCK_S19),
    mutate=lambda: state.insert_after(SPAWN_RAMP_BLOCK_S19, BOSS_BLOCK_S30),
)


# Step 31: boss-defeat cinematic in onHit (gate on enemy.isBoss).
ONHIT_BODY_S31 = (
    "      if (!enemy.active) return;\n"
    "      this.combo += 1;\n"
    "      if (this._comboReset) this._comboReset.remove();\n"
    "      this._comboReset = this.time.delayedCall(2000, () => {\n"
    "        this.combo = 0;\n"
    "      });\n"
    "      const isCrit = Math.random() < 0.2;\n"
    "      const impact = (this.heavyMode ? 2 : 1) * (isCrit ? 1.5 : 1);\n"
    "      if (this.heavyMode) {\n"
    "        this.time.timeScale = 0.4;\n"
    "        this.time.delayedCall(120, () => {\n"
    "          this.time.timeScale = 1;\n"
    "        });\n"
    "      }\n"
    "      enemy.hp -= this.heavyMode ? 2 : 1;\n"
    "      if (enemy.hp <= 0) {\n"
    "        if (enemy.isBoss) {\n"
    "          this.score += 100;\n"
    "          this.cameras.main.shake(800, 0.02);\n"
    "          for (let i = 0; i < 8; i += 1) {\n"
    "            this.time.delayedCall(i * 100, () => {\n"
    "              this.fx.explode(\n"
    "                50,\n"
    "                enemy.x + Phaser.Math.Between(-50, 50),\n"
    "                enemy.y + Phaser.Math.Between(-50, 50)\n"
    "              );\n"
    '              this.sound.play("sfx-explosion", { volume: 0.5 });\n'
    "            });\n"
    "          }\n"
    "          enemy.destroy();\n"
    "          return;\n"
    "        }\n"
    "        this.score += 5 * impact;\n"
    '        this.sound.play("sfx-explosion", { volume: 0.5 });\n'
    "        this.cameras.main.shake(120 * impact, 0.008 * impact);\n"
    "        this.fx.explode(40 * impact, enemy.x, enemy.y);\n"
    "        if (isCrit) this.fx.explode(30, enemy.x, enemy.y);\n"
    "        enemy.destroy();\n"
    "        return;\n"
    "      }\n"
    "      this.score += 1 * impact;\n"
    '      this.sound.play("sfx-hit", { volume: 0.5 });\n'
    '      if (isCrit) this.sound.play("sfx-coin", { volume: 0.4 });\n'
    "      this.cameras.main.shake(80 * impact, 0.005 * impact);\n"
    + PAUSE_LINES
    + "      this.fx.explode(20 * impact, enemy.x, enemy.y);\n"
    + "      if (isCrit) this.fx.explode(20, enemy.x, enemy.y);\n"
    + TINT_LINES
    + SQUASH_LINES
    + RECOIL_LINES
)
step_replace_onhit(
    31,
    title="Step 31",
    description=(
        "When the boss dies (`enemy.hp <= 0 && enemy.isBoss`), play a "
        "long shake plus a chain of 8 staggered particle bursts. Insert "
        "this branch FIRST inside the `if (enemy.hp <= 0)` block:\n\n```js\n"
        "if (enemy.isBoss) {\n"
        "  this.score += 100;\n"
        "  this.cameras.main.shake(800, 0.02);\n"
        "  for (let i = 0; i < 8; i += 1) {\n"
        "    this.time.delayedCall(i * 100, () => {\n"
        "      this.fx.explode(\n"
        "        50,\n"
        "        enemy.x + Phaser.Math.Between(-50, 50),\n"
        "        enemy.y + Phaser.Math.Between(-50, 50)\n"
        "      );\n"
        '      this.sound.play("sfx-explosion", { volume: 0.5 });\n'
        "    });\n"
        "  }\n"
        "  enemy.destroy();\n"
        "  return;\n"
        "}\n```\n\n"
        "Cinematics like this are the perfect place for restraint: a "
        "long 800ms shake feels meaningful only because regular hits have "
        "60-120ms shakes. If every hit shook for a second the player "
        "would tune it out by hit 5."
    ),
    hints=[
        (
            "Detect boss kill with `if (enemy.isBoss)` inside the `enemy.hp <= 0` branch.",
            r"if\s*\(\s*enemy\.hp\s*<=\s*0\s*\)\s*\{[\s\S]*if\s*\(\s*enemy\.isBoss\s*\)",
        ),
        (
            "Award `+100` score and `cameras.main.shake(800, 0.02)`.",
            r"this\.score\s*\+=\s*100[\s\S]*shake\(\s*800\s*,\s*0\.02\s*\)",
        ),
        (
            "Stagger 8 bursts with `this.time.delayedCall(i * 100, ...)` and `Phaser.Math.Between(-50, 50)` jitter.",
            r"for\s*\(\s*let\s+i\s*=\s*0\s*;\s*i\s*<\s*8[\s\S]*delayedCall\(\s*i\s*\*\s*100[\s\S]*Phaser\.Math\.Between\(\s*-50\s*,\s*50\s*\)",
        ),
        (
            "Each burst is 50 particles and plays `sfx-explosion`.",
            r"this\.fx\.explode\(\s*50[\s\S]*sfx-explosion",
        ),
    ],
    prev_body=ONHIT_BODY_S27,
    new_body=ONHIT_BODY_S31,
)


# Step 32: persistent best score. Replace the entire juice-state block (incl
# the score init line and onHit body) so we can change `bestScore = 0` to
# `bestScore = parseInt(...)` AND add the persist call inside onHit in one
# editable region.

JUICE_STATE_BLOCK_S7 = (
    "    this.score = 0;\n"
    "    this.combo = 0;\n"
    "    this.bestScore = 0;\n"
    '    this.fx = this.add.particles(0, 0, "particle", {\n'
    "      speed: { min: -200, max: 200 },\n"
    "      lifespan: 500,\n"
    "      scale: { start: 1, end: 0 },\n"
    "      gravityY: 200,\n"
    "      emitting: false\n"
    "    });\n"
    + onhit_block(ONHIT_BODY_S31)
)
JUICE_STATE_BLOCK_S32 = (
    "    this.score = 0;\n"
    "    this.combo = 0;\n"
    "    try {\n"
    '      this.bestScore = parseInt(localStorage.getItem("brawlerBest") ?? "0", 10) || 0;\n'
    "    } catch (e) {\n"
    "      this.bestScore = 0;\n"
    "    }\n"
    '    this.fx = this.add.particles(0, 0, "particle", {\n'
    "      speed: { min: -200, max: 200 },\n"
    "      lifespan: 500,\n"
    "      scale: { start: 1, end: 0 },\n"
    "      gravityY: 200,\n"
    "      emitting: false\n"
    "    });\n"
    + onhit_block(
        ONHIT_BODY_S31.replace(
            "      this.score += 1 * impact;\n",
            "      this.score += 1 * impact;\n"
            "      if (this.score > this.bestScore) {\n"
            "        this.bestScore = this.score;\n"
            "        try {\n"
            '          localStorage.setItem("brawlerBest", String(this.bestScore));\n'
            "        } catch (e) {}\n"
            "      }\n",
        )
    )
)
step(
    32,
    title="Step 32",
    description=(
        "Persist the best score to `localStorage` so it survives reloads. "
        "Replace `this.bestScore = 0` with a parsed `localStorage.getItem` "
        "(wrapped in try/catch for browsers that block storage), and "
        "extend `onHit` to write back when `score > bestScore`.\n\n"
        "In the juice-state block:\n\n```js\n"
        "try {\n"
        '  this.bestScore = parseInt(localStorage.getItem("brawlerBest") ?? "0", 10) || 0;\n'
        "} catch (e) {\n"
        "  this.bestScore = 0;\n"
        "}\n```\n\n"
        "Inside `onHit` (after `this.score += 1 * impact;`):\n\n```js\n"
        "if (this.score > this.bestScore) {\n"
        "  this.bestScore = this.score;\n"
        "  try {\n"
        '    localStorage.setItem("brawlerBest", String(this.bestScore));\n'
        "  } catch (e) {}\n"
        "}\n```\n\n"
        "We persist on every score change rather than at game-over so a "
        "browser refresh mid-run still saves your peak. The try/catch "
        "swallows storage errors (private mode, denied permissions)."
    ),
    hints=[
        (
            'Read `bestScore` from `localStorage.getItem("brawlerBest")` with a `parseInt`.',
            r'parseInt\(\s*localStorage\.getItem\(\s*["\']brawlerBest["\']\s*\)\s*\?\?\s*["\']0["\']\s*,\s*10\s*\)',
        ),
        (
            "Wrap the read in `try { ... } catch (e) { this.bestScore = 0; }`.",
            r"try\s*\{[\s\S]*localStorage\.getItem[\s\S]*\}\s*catch\s*\(\s*e\s*\)\s*\{[\s\S]*this\.bestScore\s*=\s*0",
        ),
        (
            "After `this.score += 1 * impact;`, write back via `localStorage.setItem` when score beats best.",
            r"this\.score\s*\+=\s*1\s*\*\s*impact[\s\S]*if\s*\(\s*this\.score\s*>\s*this\.bestScore\s*\)[\s\S]*localStorage\.setItem\(\s*.brawlerBest",
        ),
    ],
    seed_text=seed_wrap(solutions[31], JUICE_STATE_BLOCK_S7),
    mutate=lambda: state.replace(JUICE_STATE_BLOCK_S7, JUICE_STATE_BLOCK_S32),
)


# Step 33: prefers-reduced-motion juice scaling. Lazy-detect inside onHit so
# the edit is a single onHit-body replacement.

ONHIT_BODY_S32 = (
    ONHIT_BODY_S31.replace(
        "      this.score += 1 * impact;\n",
        "      this.score += 1 * impact;\n"
        "      if (this.score > this.bestScore) {\n"
        "        this.bestScore = this.score;\n"
        "        try {\n"
        '          localStorage.setItem("brawlerBest", String(this.bestScore));\n'
        "        } catch (e) {}\n"
        "      }\n",
    )
)

ONHIT_BODY_S33 = (
    ONHIT_BODY_S32.replace(
        "      if (!enemy.active) return;\n",
        "      if (!enemy.active) return;\n"
        "      if (this._juiceComputed !== true) {\n"
        "        this.juice = window.matchMedia(\n"
        '          "(prefers-reduced-motion: reduce)"\n'
        "        ).matches\n"
        "          ? 0.2\n"
        "          : 1;\n"
        "        this._juiceComputed = true;\n"
        "      }\n",
    )
    .replace(
        "      const impact = (this.heavyMode ? 2 : 1) * (isCrit ? 1.5 : 1);\n",
        "      const impact = (this.heavyMode ? 2 : 1) * (isCrit ? 1.5 : 1) * this.juice;\n",
    )
    .replace(
        "      if (this.heavyMode) {\n"
        "        this.time.timeScale = 0.4;\n"
        "        this.time.delayedCall(120, () => {\n"
        "          this.time.timeScale = 1;\n"
        "        });\n"
        "      }\n",
        "      if (this.heavyMode && this.juice >= 0.8) {\n"
        "        this.time.timeScale = 0.4;\n"
        "        this.time.delayedCall(120, () => {\n"
        "          this.time.timeScale = 1;\n"
        "        });\n"
        "      }\n",
    )
)

step_replace_onhit(
    33,
    title="Step 33",
    description=(
        "Honour `prefers-reduced-motion` by clamping `this.juice` to `0.2` "
        "when the user requests it. We lazy-check `matchMedia` on the "
        "first hit so the edit lives entirely inside `onHit`.\n\n"
        "Replace the `onHit` body so it now:\n\n"
        "1. Lazy-detects motion preference on the first hit:\n\n```js\n"
        "if (this._juiceComputed !== true) {\n"
        "  this.juice = window.matchMedia(\n"
        '    "(prefers-reduced-motion: reduce)"\n'
        "  ).matches\n"
        "    ? 0.2\n"
        "    : 1;\n"
        "  this._juiceComputed = true;\n"
        "}\n```\n\n"
        "1. Bakes `this.juice` into `impact`:\n\n```js\n"
        "const impact = (this.heavyMode ? 2 : 1) * (isCrit ? 1.5 : 1) * this.juice;\n```\n\n"
        "1. Suppresses slow-mo on damped juice:\n\n```js\n"
        "if (this.heavyMode && this.juice >= 0.8) {\n"
        "  this.time.timeScale = 0.4;\n"
        "  // ...\n"
        "}\n```\n\n"
        "When juice is `0.2`: shake drops from 80px to 16px, particles go "
        "from 20 to 4, slow-mo is suppressed entirely. Mechanics intact, "
        "visual aggression dialed back."
    ),
    hints=[
        (
            'Lazy-check `window.matchMedia("(prefers-reduced-motion: reduce)").matches` on first hit and set `this.juice` to `0.2` or `1`.',
            r'window\.matchMedia\(\s*["\']\(prefers-reduced-motion:\s*reduce\)["\']\s*\)\.matches[\s\S]*\?\s*0\.2\s*:\s*1',
        ),
        (
            "Cache the result on `this._juiceComputed` so subsequent hits skip the check.",
            r"this\._juiceComputed\s*=\s*true",
        ),
        (
            "Multiply `impact` by `this.juice`.",
            r"const\s+impact\s*=\s*\(\s*this\.heavyMode\s*\?\s*2\s*:\s*1\s*\)\s*\*\s*\(\s*isCrit\s*\?\s*1\.5\s*:\s*1\s*\)\s*\*\s*this\.juice",
        ),
        (
            "Suppress slow-mo when juice is damped (`this.juice >= 0.8`).",
            r"if\s*\(\s*this\.heavyMode\s*&&\s*this\.juice\s*>=\s*0\.8\s*\)",
        ),
    ],
    prev_body=ONHIT_BODY_S32,
    new_body=ONHIT_BODY_S33,
)


# Step 34: mute toggle in HUD.
UI_SCENE_S23_BODY_FULL = (
    "class UIScene extends Phaser.Scene {\n"
    "  constructor() {\n"
    '    super({ key: "UIScene", active: true });\n'
    "  }\n\n"
    + UI_SCENE_S23_BODY
    + "}\n"
)

UI_SCENE_S34_BODY = (
    "  create() {\n"
    "    this.scoreText = this.add\n"
    '      .text(8, 8, "SCORE 0", { fontSize: "20px", color: "#ffffff" })\n'
    "      .setScrollFactor(0);\n"
    "    this.comboText = this.add\n"
    '      .text(8, 36, "", { fontSize: "16px", color: "#ffeeaa" })\n'
    "      .setScrollFactor(0);\n"
    "    this.bestText = this.add\n"
    '      .text(792, 8, "BEST 0", { fontSize: "16px", color: "#ffeeaa" })\n'
    "      .setOrigin(1, 0)\n"
    "      .setScrollFactor(0);\n"
    "    const muteLabel = () => (this.sound.mute ? \"\\u266b OFF\" : \"\\u266b ON\");\n"
    "    this.muteText = this.add\n"
    "      .text(792, 32, muteLabel(), {\n"
    '        fontSize: "16px",\n'
    '        color: "#ffffff",\n'
    '        backgroundColor: "#2a3045",\n'
    "        padding: { x: 8, y: 4 }\n"
    "      })\n"
    "      .setOrigin(1, 0)\n"
    "      .setScrollFactor(0)\n"
    "      .setInteractive();\n"
    "    const toggleMute = () => {\n"
    "      this.sound.mute = !this.sound.mute;\n"
    "      this.muteText.setText(muteLabel());\n"
    "    };\n"
    '    this.muteText.on("pointerup", toggleMute);\n'
    '    this.input.keyboard.on("keydown-M", toggleMute);\n'
    "  }\n\n"
    "  update() {\n"
    '    const main = this.scene.get("MainScene");\n'
    "    if (!main) return;\n"
    "    this.scoreText.setText(`SCORE ${main.score ?? 0}`);\n"
    "    this.bestText.setText(`BEST ${main.bestScore ?? 0}`);\n"
    "    const combo = main.combo ?? 0;\n"
    "    if (combo > 1) {\n"
    "      this.comboText.setText(`COMBO x${combo}`);\n"
    "      this.comboText.setScale(1 + combo * 0.05);\n"
    "      this.comboText.setTint(\n"
    "        Phaser.Display.Color.GetColor(255, Math.max(80, 255 - combo * 12), 100)\n"
    "      );\n"
    "    } else {\n"
    '      this.comboText.setText("");\n'
    "    }\n"
    "  }\n"
)

step(
    34,
    title="Step 34",
    description=(
        "Add a mute toggle to the HUD plus the `M` key as a shortcut. "
        "Also surface the `BEST` score in the corner.\n\n"
        "Replace the `UIScene` body with:\n\n```js\n"
        "create() {\n"
        "  this.scoreText = this.add\n"
        '    .text(8, 8, "SCORE 0", { fontSize: "20px", color: "#ffffff" })\n'
        "    .setScrollFactor(0);\n"
        "  this.comboText = this.add\n"
        '    .text(8, 36, "", { fontSize: "16px", color: "#ffeeaa" })\n'
        "    .setScrollFactor(0);\n"
        "  this.bestText = this.add\n"
        '    .text(792, 8, "BEST 0", { fontSize: "16px", color: "#ffeeaa" })\n'
        "    .setOrigin(1, 0)\n"
        "    .setScrollFactor(0);\n"
        "  const muteLabel = () => (this.sound.mute ? \"\\u266b OFF\" : \"\\u266b ON\");\n"
        "  this.muteText = this.add\n"
        "    .text(792, 32, muteLabel(), {\n"
        '      fontSize: "16px",\n'
        '      color: "#ffffff",\n'
        '      backgroundColor: "#2a3045",\n'
        "      padding: { x: 8, y: 4 }\n"
        "    })\n"
        "    .setOrigin(1, 0)\n"
        "    .setScrollFactor(0)\n"
        "    .setInteractive();\n"
        "  const toggleMute = () => {\n"
        "    this.sound.mute = !this.sound.mute;\n"
        "    this.muteText.setText(muteLabel());\n"
        "  };\n"
        '  this.muteText.on("pointerup", toggleMute);\n'
        '  this.input.keyboard.on("keydown-M", toggleMute);\n'
        "}\n\n"
        "update() {\n"
        '  const main = this.scene.get("MainScene");\n'
        "  if (!main) return;\n"
        "  this.scoreText.setText(`SCORE ${main.score ?? 0}`);\n"
        "  this.bestText.setText(`BEST ${main.bestScore ?? 0}`);\n"
        "  // ...combo logic...\n"
        "}\n```\n\n"
        "`this.sound` is the global `BaseSoundManager`, so muting from "
        "UIScene affects MainScene too."
    ),
    hints=[
        (
            "Read mute state via `this.sound.mute` and toggle on click.",
            r"this\.sound\.mute\s*=\s*!this\.sound\.mute",
        ),
        (
            "Display BEST score with `this.bestText` pinned to the right via `setOrigin(1, 0)`.",
            r"this\.bestText\s*=[\s\S]*setOrigin\(\s*1\s*,\s*0\s*\)",
        ),
        (
            'Wire `this.muteText.on("pointerup", toggleMute)` and `this.input.keyboard.on("keydown-M", toggleMute)`.',
            r'this\.muteText\.on\(\s*["\']pointerup["\']\s*,\s*toggleMute\s*\)[\s\S]*this\.input\.keyboard\.on\(\s*["\']keydown-M["\']\s*,\s*toggleMute\s*\)',
        ),
        (
            "Update the BEST text every frame from `main.bestScore ?? 0`.",
            r"this\.bestText\.setText\(\s*`BEST\s*\$\{main\.bestScore\s*\?\?\s*0\}`\s*\)",
        ),
    ],
    seed_text=seed_wrap(solutions[33], UI_SCENE_S23_BODY),
    mutate=lambda: state.replace(UI_SCENE_S23_BODY, UI_SCENE_S34_BODY),
)


# Step 35: virtual touch buttons (an ATK button on the canvas).
UI_SCENE_S35_BODY = (
    UI_SCENE_S34_BODY
    + (
        "\n"
        "  attachTouchControls() {\n"
        '    const main = this.scene.get("MainScene");\n'
        "    if (!main) return;\n"
        "    const atk = this.add\n"
        '      .rectangle(720, 540, 120, 80, 0x6c8aff, 0.6)\n'
        "      .setScrollFactor(0)\n"
        "      .setStrokeStyle(2, 0xffffff)\n"
        "      .setInteractive();\n"
        "    this.add\n"
        '      .text(720, 540, "ATK", {\n'
        '        fontSize: "22px",\n'
        '        color: "#ffffff"\n'
        "      })\n"
        "      .setOrigin(0.5)\n"
        "      .setScrollFactor(0);\n"
        "    const heavy = this.add\n"
        "      .rectangle(580, 540, 100, 80, 0xff5252, 0.6)\n"
        "      .setScrollFactor(0)\n"
        "      .setStrokeStyle(2, 0xffffff)\n"
        "      .setInteractive();\n"
        "    this.add\n"
        '      .text(580, 540, "HEAVY", {\n'
        '        fontSize: "16px",\n'
        '        color: "#ffffff"\n'
        "      })\n"
        "      .setOrigin(0.5)\n"
        "      .setScrollFactor(0);\n"
        '    atk.on("pointerdown", () => main.attack && main.attack());\n'
        '    heavy.on("pointerdown", () => main.attack && main.attack(true));\n'
        "  }\n"
    )
)

# We splice attachTouchControls() into UIScene AND call it once after create().
# Single-region edit: wrap the entire UIScene body and replace.
UI_SCENE_S34_FULL = (
    "class UIScene extends Phaser.Scene {\n"
    "  constructor() {\n"
    '    super({ key: "UIScene", active: true });\n'
    "  }\n\n"
    + UI_SCENE_S34_BODY
    + "}\n"
)

UI_SCENE_S35_FULL = (
    "class UIScene extends Phaser.Scene {\n"
    "  constructor() {\n"
    '    super({ key: "UIScene", active: true });\n'
    "  }\n\n"
    + UI_SCENE_S34_BODY.replace(
        '    this.input.keyboard.on("keydown-M", toggleMute);\n  }',
        '    this.input.keyboard.on("keydown-M", toggleMute);\n'
        "    this.attachTouchControls();\n"
        "  }",
    )
    + "\n"
    "  attachTouchControls() {\n"
    '    const main = this.scene.get("MainScene");\n'
    "    if (!main) return;\n"
    "    const atk = this.add\n"
    "      .rectangle(720, 540, 120, 80, 0x6c8aff, 0.6)\n"
    "      .setScrollFactor(0)\n"
    "      .setStrokeStyle(2, 0xffffff)\n"
    "      .setInteractive();\n"
    "    this.add\n"
    '      .text(720, 540, "ATK", { fontSize: "22px", color: "#ffffff" })\n'
    "      .setOrigin(0.5)\n"
    "      .setScrollFactor(0);\n"
    "    const heavy = this.add\n"
    "      .rectangle(580, 540, 100, 80, 0xff5252, 0.6)\n"
    "      .setScrollFactor(0)\n"
    "      .setStrokeStyle(2, 0xffffff)\n"
    "      .setInteractive();\n"
    "    this.add\n"
    '      .text(580, 540, "HEAVY", { fontSize: "16px", color: "#ffffff" })\n'
    "      .setOrigin(0.5)\n"
    "      .setScrollFactor(0);\n"
    '    atk.on("pointerdown", () => main.attack && main.attack());\n'
    '    heavy.on("pointerdown", () => main.attack && main.attack(true));\n'
    "  }\n"
    "}\n"
)

step(
    35,
    title="Step 35",
    description=(
        "Add on-screen ATK/HEAVY buttons for touch users. They live on the "
        "UIScene so they're pinned to the camera and survive shake.\n\n"
        "Add a method `attachTouchControls()` to `UIScene`, call it from "
        "`create`, and the touch buttons forward to MainScene's `attack`:"
        "\n\n```js\n"
        "// Inside create(), after the keyboard listener:\n"
        "this.attachTouchControls();\n\n"
        "// New method on UIScene:\n"
        "attachTouchControls() {\n"
        '  const main = this.scene.get("MainScene");\n'
        "  if (!main) return;\n"
        "  const atk = this.add\n"
        "    .rectangle(720, 540, 120, 80, 0x6c8aff, 0.6)\n"
        "    .setScrollFactor(0)\n"
        "    .setStrokeStyle(2, 0xffffff)\n"
        "    .setInteractive();\n"
        "  this.add\n"
        '    .text(720, 540, "ATK", { fontSize: "22px", color: "#ffffff" })\n'
        "    .setOrigin(0.5)\n"
        "    .setScrollFactor(0);\n"
        "  const heavy = this.add\n"
        "    .rectangle(580, 540, 100, 80, 0xff5252, 0.6)\n"
        "    .setScrollFactor(0)\n"
        "    .setStrokeStyle(2, 0xffffff)\n"
        "    .setInteractive();\n"
        "  this.add\n"
        '    .text(580, 540, "HEAVY", { fontSize: "16px", color: "#ffffff" })\n'
        "    .setOrigin(0.5)\n"
        "    .setScrollFactor(0);\n"
        '  atk.on("pointerdown", () => main.attack && main.attack());\n'
        '  heavy.on("pointerdown", () => main.attack && main.attack(true));\n'
        "}\n```\n\n"
        "We could conditionally show the buttons on touch devices only, "
        "but always-visible is simpler and lets desktop users click them."
    ),
    hints=[
        (
            "Define `attachTouchControls()` on `UIScene` that fetches `this.scene.get(\"MainScene\")`.",
            r'attachTouchControls\s*\(\s*\)\s*\{[\s\S]*this\.scene\.get\(\s*["\']MainScene["\']\s*\)',
        ),
        (
            "Render an ATK rectangle at `(720, 540, 120, 80, 0x6c8aff, 0.6)`.",
            r"\.rectangle\(\s*720\s*,\s*540\s*,\s*120\s*,\s*80\s*,\s*0x6c8aff\s*,\s*0\.6\s*\)",
        ),
        (
            "Render a HEAVY rectangle at `(580, 540, 100, 80, 0xff5252, 0.6)`.",
            r"\.rectangle\(\s*580\s*,\s*540\s*,\s*100\s*,\s*80\s*,\s*0xff5252\s*,\s*0\.6\s*\)",
        ),
        (
            'Wire ATK to `main.attack()` and HEAVY to `main.attack(true)` via `pointerdown`.',
            r'atk\.on\(\s*["\']pointerdown["\']\s*,\s*\(\s*\)\s*=>\s*main\.attack\s*&&\s*main\.attack\(\s*\)\s*\)[\s\S]*heavy\.on\(\s*["\']pointerdown["\']\s*,\s*\(\s*\)\s*=>\s*main\.attack\s*&&\s*main\.attack\(\s*true\s*\)\s*\)',
        ),
        (
            "Call `this.attachTouchControls()` at the end of UIScene's `create()`.",
            r"this\.attachTouchControls\(\s*\)",
        ),
    ],
    seed_text=seed_wrap(solutions[34], UI_SCENE_S34_FULL),
    mutate=lambda: state.replace(UI_SCENE_S34_FULL, UI_SCENE_S35_FULL),
)


# Step 36: anti-spam attack cooldown (300ms instead of 150ms when chained).
ATTACK_BODY_S36 = (
    ATTACK_BODY_S24
    .replace(
        "      if (this.attacking) return;\n",
        "      if (this.attacking) return;\n"
        "      const now = this.time.now;\n"
        "      if (now - (this._lastAttack ?? 0) < 200) return;\n"
        "      this._lastAttack = now;\n",
    )
)

step(
    36,
    title="Step 36",
    description=(
        "The 150ms cooldown still lets perfect-tap players chain attacks. "
        "Add a 200ms minimum gap between attacks, even after the cooldown "
        "fires.\n\nReplace the entry guard in `attack`:\n\n```js\n"
        "if (this.attacking) return;\n"
        "const now = this.time.now;\n"
        "if (now - (this._lastAttack ?? 0) < 200) return;\n"
        "this._lastAttack = now;\n```\n\n"
        "We use the SCENE's `time.now` (millis since boot) so it respects "
        "`time.timeScale` from step 26 - if you slow-mo, attacks slow too. "
        "This is intentional: pacing should be consistent."
    ),
    hints=[
        (
            "Read `this.time.now` and stash on `this._lastAttack`.",
            r"const\s+now\s*=\s*this\.time\.now",
        ),
        (
            "Reject attacks within 200ms of the last one with `if (now - (this._lastAttack ?? 0) < 200) return;`.",
            r"if\s*\(\s*now\s*-\s*\(\s*this\._lastAttack\s*\?\?\s*0\s*\)\s*<\s*200\s*\)\s*return",
        ),
        (
            "Update `this._lastAttack = now;` after passing the cooldown check.",
            r"this\._lastAttack\s*=\s*now",
        ),
    ],
    seed_text=seed_wrap(
        solutions[35],
        attack_closure_heavy(ATTACK_BODY_S24),
    ),
    mutate=lambda: state.replace(
        attack_closure_heavy(ATTACK_BODY_S24),
        attack_closure_heavy(ATTACK_BODY_S36),
    ),
)


# Step 37: enemy-vs-enemy collider so they don't pile up.
ENEMY_COLLIDER_S37 = (
    "    this.physics.add.collider(this.enemies, this.enemies);\n"
)

step(
    37,
    title="Step 37",
    description=(
        "By default, enemies in the same group don't collide. Add a "
        "self-collider so they bounce off each other instead of stacking "
        "on the same pixel.\n\nAfter the boss spawn block (`/* create-world "
        "*/`), add:\n\n```js\n"
        "this.physics.add.collider(this.enemies, this.enemies);\n```\n\n"
        "Phaser's collider applies symmetric momentum exchange. Without "
        "this, every enemy pursues the player and they pile up - making "
        "the hitbox overlap fire 5+ times per swing."
    ),
    hints=[
        (
            "Call `this.physics.add.collider(this.enemies, this.enemies)`.",
            r"this\.physics\.add\.collider\(\s*this\.enemies\s*,\s*this\.enemies\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[36], BOSS_BLOCK_S30),
    mutate=lambda: state.insert_after(BOSS_BLOCK_S30, ENEMY_COLLIDER_S37),
)


# Step 38: clamp combo font size in UIScene.
UI_SCENE_S38_FULL = UI_SCENE_S35_FULL.replace(
    "      this.comboText.setScale(1 + combo * 0.05);\n",
    "      this.comboText.setScale(1 + Math.min(0.6, combo * 0.05));\n",
).replace(
    "      this.comboText.setTint(\n"
    "        Phaser.Display.Color.GetColor(255, Math.max(80, 255 - combo * 12), 100)\n"
    "      );\n",
    "      this.comboText.setTint(\n"
    "        Phaser.Display.Color.GetColor(\n"
    "          255,\n"
    "          Math.max(80, 255 - Math.min(combo, 12) * 14),\n"
    "          100\n"
    "        )\n"
    "      );\n",
)

step(
    38,
    title="Step 38",
    description=(
        "At combo 50 the HUD text scales 3.5× and the tint clamps at "
        "pure red - both look broken. Clamp the scale curve at 1.6× and "
        "the tint at combo 12.\n\nIn `UIScene.update()`, replace the combo "
        "scale + tint:\n\n```js\n"
        "this.comboText.setScale(1 + Math.min(0.6, combo * 0.05));\n"
        "this.comboText.setTint(\n"
        "  Phaser.Display.Color.GetColor(\n"
        "    255,\n"
        "    Math.max(80, 255 - Math.min(combo, 12) * 14),\n"
        "    100\n"
        "  )\n"
        ");\n```\n\n"
        "`Math.min(0.6, ...)` caps the scale so combo > 12 stops growing. "
        "`Math.min(combo, 12) * 14` saturates the tint at combo 12 instead "
        "of letting it pin to red after combo 14. Restraint over "
        "spectacle - rule one of juice."
    ),
    hints=[
        (
            "Cap the scale offset at `0.6` via `Math.min(0.6, combo * 0.05)`.",
            r"setScale\(\s*1\s*\+\s*Math\.min\(\s*0\.6\s*,\s*combo\s*\*\s*0\.05\s*\)\s*\)",
        ),
        (
            "Cap the tint exponent with `Math.min(combo, 12) * 14`.",
            r"Math\.max\(\s*80\s*,\s*255\s*-\s*Math\.min\(\s*combo\s*,\s*12\s*\)\s*\*\s*14\s*\)",
        ),
    ],
    seed_text=seed_wrap(solutions[37], UI_SCENE_S35_FULL),
    mutate=lambda: state.replace(UI_SCENE_S35_FULL, UI_SCENE_S38_FULL),
)


# Step 39: dispose emitters + tweens on shutdown (in /* create-cleanup */).
CLEANUP_BLOCK_S39 = (
    "    this.events.on(Phaser.Scenes.Events.SHUTDOWN, () => {\n"
    "      if (this.fx) this.fx.destroy();\n"
    "      if (this.swingTrail) this.swingTrail.destroy();\n"
    "      if (this.sword) this.sword.destroy();\n"
    "      this.tweens.killAll();\n"
    "      this.sound.stopAll();\n"
    "    });\n"
)

step(
    39,
    title="Step 39",
    description=(
        "Emitters, graphics, sounds, and tweens leak when a scene "
        "restarts unless we tear them down. Hook the SHUTDOWN event in "
        "`/* create-cleanup */`.\n\n```js\n"
        "this.events.on(Phaser.Scenes.Events.SHUTDOWN, () => {\n"
        "  if (this.fx) this.fx.destroy();\n"
        "  if (this.swingTrail) this.swingTrail.destroy();\n"
        "  if (this.sword) this.sword.destroy();\n"
        "  this.tweens.killAll();\n"
        "  this.sound.stopAll();\n"
        "});\n```\n\n"
        "`SHUTDOWN` fires when `scene.stop` runs. Without this, clicking "
        "PLAY AGAIN from the Game Over scene would leave the old "
        "particle emitter dangling - drawing forever to a destroyed "
        "scene."
    ),
    hints=[
        (
            "Listen for `Phaser.Scenes.Events.SHUTDOWN`.",
            r"this\.events\.on\(\s*Phaser\.Scenes\.Events\.SHUTDOWN",
        ),
        (
            "Destroy `this.fx` if it exists.",
            r"if\s*\(\s*this\.fx\s*\)\s*this\.fx\.destroy\(\s*\)",
        ),
        (
            "Destroy `this.swingTrail` and `this.sword`.",
            r"if\s*\(\s*this\.swingTrail\s*\)\s*this\.swingTrail\.destroy[\s\S]*if\s*\(\s*this\.sword\s*\)\s*this\.sword\.destroy",
        ),
        (
            "Call `this.tweens.killAll()` and `this.sound.stopAll()`.",
            r"this\.tweens\.killAll\(\s*\)[\s\S]*this\.sound\.stopAll\(\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[38], "/* create-cleanup */\n"),
    mutate=lambda: state.insert_after("/* create-cleanup */\n", CLEANUP_BLOCK_S39),
)


# Step 40: final integration. 60-second run timer that triggers GameOver.
SIXTY_SECOND_S40 = (
    "    this.time.delayedCall(60000, () => {\n"
    "      if (!this.player.active) return;\n"
    "      this.player.active = false;\n"
    "      this.player.body.setVelocity(0, 0);\n"
    "      this.cameras.main.flash(400, 100, 200, 255);\n"
    '      this.sound.play("sfx-coin", { volume: 0.6 });\n'
    "      this.time.delayedCall(500, () => {\n"
    '        this.scene.pause("MainScene");\n'
    '        this.scene.launch("GameOverScene", {\n'
    "          score: this.score,\n"
    "          best: this.bestScore\n"
    "        });\n"
    "      });\n"
    "    });\n"
)

step(
    40,
    title="Step 40",
    description=(
        "Final integration: a 60-second run timer that ends the round on "
        "a celebratory blue flash and routes to the Game Over scene. The "
        "victory feels different from a death because the flash is blue "
        "(not red) and the cue is `sfx-coin` (not `sfx-hit`).\n\n"
        "Add to `/* create-cleanup */`:\n\n```js\n"
        "this.time.delayedCall(60000, () => {\n"
        "  if (!this.player.active) return;\n"
        "  this.player.active = false;\n"
        "  this.player.body.setVelocity(0, 0);\n"
        "  this.cameras.main.flash(400, 100, 200, 255);\n"
        '  this.sound.play("sfx-coin", { volume: 0.6 });\n'
        "  this.time.delayedCall(500, () => {\n"
        '    this.scene.pause("MainScene");\n'
        '    this.scene.launch("GameOverScene", {\n'
        "      score: this.score,\n"
        "      best: this.bestScore\n"
        "    });\n"
        "  });\n"
        "});\n```\n\n"
        "You shipped a 40-step arcade brawler with the full juice stack, "
        "a boss fight, persistent best score, accessibility damping, "
        "mute toggle, and touch controls. The reference solution is the "
        "current state of `script.js`. Sprint 16 done."
    ),
    hints=[
        (
            "Schedule the round-over with `this.time.delayedCall(60000, ...)`.",
            r"this\.time\.delayedCall\(\s*60000",
        ),
        (
            "Flash the camera blue with `cameras.main.flash(400, 100, 200, 255)`.",
            r"this\.cameras\.main\.flash\(\s*400\s*,\s*100\s*,\s*200\s*,\s*255\s*\)",
        ),
        (
            'Play `"sfx-coin"` as the victory cue.',
            r'this\.sound\.play\(\s*["\']sfx-coin["\']',
        ),
        (
            'Pause MainScene and launch GameOverScene with `{ score, best }` after a 500ms beat.',
            r'this\.scene\.pause\(\s*["\']MainScene["\']\s*\)[\s\S]*this\.scene\.launch\(\s*["\']GameOverScene["\']\s*,\s*\{\s*score:\s*this\.score',
        ),
    ],
    seed_text=seed_insert(solutions[39], CLEANUP_BLOCK_S39),
    mutate=lambda: state.insert_after(CLEANUP_BLOCK_S39, SIXTY_SECOND_S40),
)


# Renderer ---------------------------------------------------------------------

import re as _re

_ANCHOR_LINE = _re.compile(
    r"^[ \t]*/\* (?:create-helpers|create-player|create-input|create-world|create-methods|create-juice|create-music|create-cleanup|update-body|preload) \*/\n",
    _re.MULTILINE,
)


def strip_anchors(text: str) -> str:
    return _ANCHOR_LINE.sub("", text)


def escape_regex_slashes(pattern: str) -> str:
    out = []
    i = 0
    while i < len(pattern):
        if pattern[i] == "\\" and i + 1 < len(pattern):
            out.append(pattern[i : i + 2])
            i += 2
            continue
        if pattern[i] == "/":
            out.append(r"\/")
        else:
            out.append(pattern[i])
        i += 1
    return "".join(out)


def render_markdown(n: int) -> str:
    hex_id = HEX_BASE.format(ID_OFFSET + n)
    title = titles[n]
    dashed = f"step-{n}"
    desc = descriptions[n]
    hint_blocks = []
    for text, regex in hints_per_step[n]:
        safe = escape_regex_slashes(regex)
        hint_blocks.append(f"{text}\n\n```js\nassert.match(code, /{safe}/);\n```\n")
    hints_md = "\n".join(hint_blocks)
    seed_clean = strip_anchors(seeds[n])
    solutions_section = ""
    if n == 40 and len(solutions) > 40:
        sol_clean = strip_anchors(solutions[n])
        solutions_section = (
            "\n# --solutions--\n\n"
            f"{HTML}\n{CSS}\n```js\n{sol_clean}```\n"
        )
    return f"""---
id: {hex_id}
title: {title}
challengeType: 0
dashedName: {dashed}
---

# --description--
{desc}

# --hints--
{hints_md}
# --seed--

## --seed-contents--

{HTML}
{CSS}
```js
{seed_clean}```
{solutions_section}""".replace("```\n```", "```\n\n```")


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for n in range(1, len(solutions)):
        hex_id = HEX_BASE.format(ID_OFFSET + n)
        path = OUT_DIR / f"{hex_id}.md"
        path.write_text(render_markdown(n), encoding="utf-8")
    print(f"Wrote {len(solutions) - 1} step files (1..{len(solutions) - 1})")


if __name__ == "__main__":
    main()
