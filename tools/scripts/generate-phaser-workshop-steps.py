"""Generate workshop-animated-character-explorer step .md files (steps 13..40).

Steps 1..12 were authored by hand to establish the pedagogical voice; from
step 13 onward the structure is uniform — a description, a hints block,
a seed JS string with `--fcc-editable-region--` markers, and (only on
step 40) an explicit `# --solutions--` block. This generator keeps the
40-step progression verifiable from a single source of truth.
"""

from pathlib import Path
import textwrap

OUT_DIR = (
    Path(__file__).resolve().parents[2]
    / "curriculum/challenges/english/blocks/workshop-animated-character-explorer"
)
HEX = "66faa20000000000000000{:02x}"

HTML = """\
```html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Animated Character Explorer with Phaser</title>
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


def md(step_num: int, dashed: str, description: str, hints: str, seed_js: str, solution_js: str | None = None) -> str:
    out = []
    out.append("---")
    out.append(f"id: {HEX.format(0xb1 + step_num)}")
    out.append(f"title: Step {step_num}")
    out.append("challengeType: 0")
    out.append(f"dashedName: {dashed}")
    out.append("---")
    out.append("")
    out.append("# --description--")
    out.append("")
    out.append(description.rstrip())
    out.append("")
    out.append("# --hints--")
    out.append("")
    out.append(hints.rstrip())
    out.append("")
    out.append("# --seed--")
    out.append("")
    out.append("## --seed-contents--")
    out.append("")
    out.append(HTML.rstrip())
    out.append("")
    out.append(CSS.rstrip())
    out.append("")
    out.append("```js")
    out.append(seed_js.rstrip())
    out.append("")
    out.append("```")
    if solution_js is not None:
        out.append("")
        out.append("# --solutions--")
        out.append("")
        out.append(HTML.rstrip())
        out.append("")
        out.append(CSS.rstrip())
        out.append("")
        out.append("```js")
        out.append(solution_js.rstrip())
        out.append("")
        out.append("```")
    out.append("")
    return "\n".join(out)


# ---------------- shared cumulative state helpers ----------------

PRELOAD_BODY = """\
    this.load.spritesheet(
      "hero",
      "/curriculum-assets/phaser/spritesheets/hero-walk.png",
      { frameWidth: 16, frameHeight: 16 }
    );
    this.load.spritesheet(
      "coin",
      "/curriculum-assets/phaser/spritesheets/coin.png",
      { frameWidth: 16, frameHeight: 16 }
    );
    this.load.spritesheet(
      "slime",
      "/curriculum-assets/phaser/spritesheets/slime.png",
      { frameWidth: 16, frameHeight: 16 }
    );"""

CONFIG_BLOCK = """\
const config = {
  type: Phaser.AUTO,
  width: 480,
  height: 360,
  parent: "game-container",
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: { gravity: { y: 0 } }
  },
  scene: [MainScene]
};

const game = new Phaser.Game(config);"""


def scene(create_body: str, update_body: str = "", helper_methods: str = "") -> str:
    """Wrap a create() body and optional update()/helper methods in MainScene + the boilerplate config."""
    parts = [
        "class MainScene extends Phaser.Scene {",
        "  constructor() {",
        '    super("MainScene");',
        "  }",
        "",
        "  preload() {",
        PRELOAD_BODY,
        "  }",
        "",
        "  create() {",
    ]
    if create_body.strip():
        parts.append(create_body.rstrip())
    parts.append("  }")
    parts.append("")
    parts.append("  update() {")
    if update_body.strip():
        parts.append(update_body.rstrip())
    parts.append("  }")
    if helper_methods.strip():
        parts.append("")
        parts.append(helper_methods.rstrip())
    parts.append("}")
    parts.append("")
    parts.append(CONFIG_BLOCK)
    return "\n".join(parts)


def wrap_editable(scene_str: str, anchor: str, marker_block: str = "") -> str:
    """Insert --fcc-editable-region-- markers right after the line ending with anchor."""
    needle = anchor
    idx = scene_str.find(needle)
    if idx < 0:
        raise SystemExit(f"anchor not found: {anchor!r}")
    eol = scene_str.find("\n", idx)
    insertion = (
        "\n--fcc-editable-region--\n"
        + (marker_block.rstrip() + "\n" if marker_block.strip() else "\n")
        + "--fcc-editable-region--"
    )
    return scene_str[: eol] + insertion + scene_str[eol:]


# ---------------- create() body fragments at end of each step ----------------

CREATE_AFTER_STEP_12 = """\
    this.add.rectangle(240, 180, 480, 360, 0x223344);
    this.player = this.physics.add.sprite(240, 180, "hero", 0);
    this.player.setCollideWorldBounds(true);
    this.player.setScale(2);
    this.cursors = this.input.keyboard.createCursorKeys();

    this.anims.create({
      key: "idle",
      frames: this.anims.generateFrameNumbers("hero", { start: 0, end: 0 }),
      frameRate: 6,
      repeat: -1
    });"""

ANIMS_WALK_DOWN = """\
    this.anims.create({
      key: "walk-down",
      frames: this.anims.generateFrameNumbers("hero", { start: 0, end: 3 }),
      frameRate: 8,
      repeat: -1
    });"""

ANIMS_WALK_UP = """\
    this.anims.create({
      key: "walk-up",
      frames: this.anims.generateFrameNumbers("hero", { start: 4, end: 7 }),
      frameRate: 8,
      repeat: -1
    });"""

ANIMS_WALK_LEFT = """\
    this.anims.create({
      key: "walk-left",
      frames: this.anims.generateFrameNumbers("hero", { start: 8, end: 11 }),
      frameRate: 8,
      repeat: -1
    });"""

ANIMS_WALK_RIGHT = """\
    this.anims.create({
      key: "walk-right",
      frames: this.anims.generateFrameNumbers("hero", { start: 12, end: 15 }),
      frameRate: 8,
      repeat: -1
    });"""

ANIMS_COIN_SPIN = """\
    this.anims.create({
      key: "coin-spin",
      frames: this.anims.generateFrameNumbers("coin", { start: 0, end: 7 }),
      frameRate: 12,
      repeat: -1
    });"""

ANIMS_SLIME_IDLE = """\
    this.anims.create({
      key: "slime-idle",
      frames: this.anims.generateFrameNumbers("slime", { start: 0, end: 3 }),
      frameRate: 4,
      repeat: -1
    });"""

COINS_GROUP_BLOCK = """\
    this.coins = this.physics.add.group();
    [
      [80, 80],
      [400, 80],
      [80, 280],
      [400, 280],
      [240, 80]
    ].forEach(([x, y]) => {
      const coin = this.coins.create(x, y, "coin");
    });"""

COINS_GROUP_BLOCK_FULL = """\
    this.coins = this.physics.add.group();
    [
      [80, 80],
      [400, 80],
      [80, 280],
      [400, 280],
      [240, 80]
    ].forEach(([x, y]) => {
      const coin = this.coins.create(x, y, "coin");
      coin.setScale(2);
      coin.anims.play("coin-spin");
    });"""

SLIME_SPAWN = """    this.slime = this.physics.add.sprite(240, 320, "slime");"""

SLIME_PHYSICS = """\
    this.slime.setScale(2);
    this.slime.setCollideWorldBounds(true);
    this.slime.setVelocityX(60);
    this.slime.setBounce(1, 0);"""

SLIME_PLAY = """    this.slime.anims.play("slime-idle");"""

OVERLAP_COINS = """    this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this);"""

OVERLAP_SLIME = """    this.physics.add.overlap(this.player, this.slime, this.hitSlime, null, this);"""

SCORE_BLOCK = """\
    this.score = 0;
    this.scoreText = this.add.text(10, 10, "Coins: 0/5", {
      fontSize: "16px",
      fill: "#ffffff"
    });"""

CLEARED_INIT = """    this.cleared = false;"""

# update() bodies, evolving across steps
UPDATE_AFTER_STEP_17 = """    this.player.setVelocity(0);"""

UPDATE_LEFT = """\
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-120);
      this.player.setFlipX(false);
      this.player.anims.play("walk-left", true);
    }"""

UPDATE_LEFT_RIGHT = """\
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-120);
      this.player.setFlipX(false);
      this.player.anims.play("walk-left", true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(120);
      this.player.setFlipX(true);
      this.player.anims.play("walk-right", true);
    }"""

UPDATE_LRU = """\
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-120);
      this.player.setFlipX(false);
      this.player.anims.play("walk-left", true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(120);
      this.player.setFlipX(true);
      this.player.anims.play("walk-right", true);
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-120);
      this.player.anims.play("walk-up", true);
    }"""

UPDATE_LRUD = """\
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-120);
      this.player.setFlipX(false);
      this.player.anims.play("walk-left", true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(120);
      this.player.setFlipX(true);
      this.player.anims.play("walk-right", true);
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-120);
      this.player.anims.play("walk-up", true);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(120);
      this.player.anims.play("walk-down", true);
    }"""

UPDATE_LRUD_IDLE = """\
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-120);
      this.player.setFlipX(false);
      this.player.anims.play("walk-left", true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(120);
      this.player.setFlipX(true);
      this.player.anims.play("walk-right", true);
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-120);
      this.player.anims.play("walk-up", true);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(120);
      this.player.anims.play("walk-down", true);
    } else {
      this.player.anims.play("idle", true);
    }"""

UPDATE_SLIME_FLIP = """\
    if (this.slime.body.velocity.x > 0) {
      this.slime.setFlipX(true);
    } else if (this.slime.body.velocity.x < 0) {
      this.slime.setFlipX(false);
    }"""

# helper methods
COLLECT_COIN_WITH_SCORE = """\
  collectCoin(player, coin) {
    this.tweens.add({
      targets: coin,
      scale: 0,
      duration: 200,
      onComplete: () => coin.destroy()
    });
    this.score += 1;
    this.scoreText.setText("Coins: " + this.score + "/5");
  }"""

COLLECT_COIN_FULL = """\
  collectCoin(player, coin) {
    this.tweens.add({
      targets: coin,
      scale: 0,
      duration: 200,
      onComplete: () => coin.destroy()
    });
    this.score += 1;
    this.scoreText.setText("Coins: " + this.score + "/5");
    if (this.score >= 5) {
      this.cleared = true;
      this.add.text(240, 180, "Level Cleared!", {
        fontSize: "32px",
        fill: "#ffff00"
      }).setOrigin(0.5);
      this.input.keyboard.enabled = false;
    }
  }"""

HIT_SLIME = """\
  hitSlime() {
    this.cameras.main.flash(150, 255, 0, 0);
  }"""


def write(step_num: int, dashed: str, description: str, hints: str, seed_js: str, solution_js: str | None = None) -> None:
    path = OUT_DIR / f"{HEX.format(0xb1 + step_num)}.md"
    path.write_text(md(step_num, dashed, description, hints, seed_js, solution_js))


# ---------------- per-step authoring (steps 13..40) ----------------

# Step 13: anims.create walk-down
def step_13() -> None:
    create_now = CREATE_AFTER_STEP_12
    seed = insert_markers_after_last_close(scene(create_now))
    desc = (
        "Define the down-facing walk cycle. Frames `0..3` of the hero sheet are the four-frame "
        "down-walk loop.\n\n"
        "Below the `idle` animation, register a `walk-down` animation: `key: \"walk-down\"`, "
        "frames from `start: 0, end: 3` of the hero, `frameRate: 8`, `repeat: -1`."
    )
    hints = textwrap.dedent("""\
        You should call `this.anims.create` with the `key` `"walk-down"`.

        ```js
        assert.match(code, /this\\.anims\\.create\\(\\s*\\{[\\s\\S]*?key\\s*:\\s*(['"`])walk-down\\1/);
        ```

        The `walk-down` animation should use `this.anims.generateFrameNumbers("hero", { start: 0, end: 3 })`.

        ```js
        assert.match(code, /key\\s*:\\s*(['"`])walk-down\\1[\\s\\S]*?frames\\s*:\\s*this\\.anims\\.generateFrameNumbers\\(\\s*(['"`])hero\\2\\s*,\\s*\\{\\s*start\\s*:\\s*0\\s*,\\s*end\\s*:\\s*3\\s*\\}\\s*\\)/);
        ```

        The `walk-down` animation should set `frameRate: 8` and `repeat: -1`.

        ```js
        assert.match(code, /key\\s*:\\s*(['"`])walk-down\\1[\\s\\S]*?frameRate\\s*:\\s*8[\\s\\S]*?repeat\\s*:\\s*-1/);
        ```
        """)
    write(13, "step-13", desc, hints, seed)


# Step 14: anims.create walk-up
def step_14() -> None:
    create_now = CREATE_AFTER_STEP_12 + "\n" + ANIMS_WALK_DOWN
    seed = wrap_editable(scene(create_now), anchor="end: 3 })", marker_block="")
    # the "end: 3 })," anchor uniquely matches walk-down; insert markers after the closing line
    # we need the markers *after* the closing }); of walk-down — search for that exact close
    # rebuild explicitly
    seed = wrap_editable(scene(create_now), anchor="repeat: -1\n    });", marker_block="")
    # there are now two `repeat: -1\n    });` matches — first is idle, second walk-down. We
    # want markers after the SECOND. Switch anchor to a uniquely identifying pattern.
    # use the trailing line of walk-down's block as anchor
    full = scene(create_now)
    # find last occurrence of '});' inside create() body
    close_token = "      repeat: -1\n    });"
    idx = full.rfind(close_token, 0, full.find("update()"))
    if idx < 0:
        raise SystemExit("walk-down close not found")
    eol = full.find("\n", idx + len(close_token) - 1)
    seed = (
        full[: idx + len(close_token)]
        + "\n--fcc-editable-region--\n\n--fcc-editable-region--"
        + full[idx + len(close_token):]
    )
    desc = (
        "Frames `4..7` are the up-facing walk cycle. Below the `walk-down` animation, register "
        "`walk-up` with `start: 4, end: 7`, `frameRate: 8`, `repeat: -1`."
    )
    hints = textwrap.dedent("""\
        You should call `this.anims.create` with the `key` `"walk-up"`.

        ```js
        assert.match(code, /this\\.anims\\.create\\(\\s*\\{[\\s\\S]*?key\\s*:\\s*(['"`])walk-up\\1/);
        ```

        The `walk-up` animation should use frames `start: 4, end: 7` of `"hero"`.

        ```js
        assert.match(code, /key\\s*:\\s*(['"`])walk-up\\1[\\s\\S]*?frames\\s*:\\s*this\\.anims\\.generateFrameNumbers\\(\\s*(['"`])hero\\2\\s*,\\s*\\{\\s*start\\s*:\\s*4\\s*,\\s*end\\s*:\\s*7\\s*\\}\\s*\\)/);
        ```

        The `walk-up` animation should set `frameRate: 8` and `repeat: -1`.

        ```js
        assert.match(code, /key\\s*:\\s*(['"`])walk-up\\1[\\s\\S]*?frameRate\\s*:\\s*8[\\s\\S]*?repeat\\s*:\\s*-1/);
        ```
        """)
    write(14, "step-14", desc, hints, seed)


def insert_markers_after_last_close(full: str, close_token: str = "      repeat: -1\n    });") -> str:
    """Insert editable-region markers after the LAST occurrence of close_token before update()."""
    boundary = full.find("update()")
    idx = full.rfind(close_token, 0, boundary)
    if idx < 0:
        raise SystemExit(f"close token not found before update(): {close_token!r}")
    end = idx + len(close_token)
    return (
        full[:end]
        + "\n--fcc-editable-region--\n\n--fcc-editable-region--"
        + full[end:]
    )


def insert_markers_after_token(full: str, token: str) -> str:
    """Insert editable-region markers after the FIRST occurrence of token."""
    idx = full.find(token)
    if idx < 0:
        raise SystemExit(f"token not found: {token!r}")
    end = idx + len(token)
    return (
        full[:end]
        + "\n--fcc-editable-region--\n\n--fcc-editable-region--"
        + full[end:]
    )


# Step 15: anims.create walk-left
def step_15() -> None:
    create_now = CREATE_AFTER_STEP_12 + "\n" + ANIMS_WALK_DOWN + "\n" + ANIMS_WALK_UP
    seed = insert_markers_after_last_close(scene(create_now))
    desc = (
        "Frames `8..11` are the left-facing walk cycle. Below the `walk-up` animation, register "
        "`walk-left` with `start: 8, end: 11`, `frameRate: 8`, `repeat: -1`."
    )
    hints = textwrap.dedent("""\
        You should call `this.anims.create` with the `key` `"walk-left"`.

        ```js
        assert.match(code, /this\\.anims\\.create\\(\\s*\\{[\\s\\S]*?key\\s*:\\s*(['"`])walk-left\\1/);
        ```

        The `walk-left` animation should use frames `start: 8, end: 11` of `"hero"`.

        ```js
        assert.match(code, /key\\s*:\\s*(['"`])walk-left\\1[\\s\\S]*?frames\\s*:\\s*this\\.anims\\.generateFrameNumbers\\(\\s*(['"`])hero\\2\\s*,\\s*\\{\\s*start\\s*:\\s*8\\s*,\\s*end\\s*:\\s*11\\s*\\}\\s*\\)/);
        ```

        The `walk-left` animation should set `frameRate: 8` and `repeat: -1`.

        ```js
        assert.match(code, /key\\s*:\\s*(['"`])walk-left\\1[\\s\\S]*?frameRate\\s*:\\s*8[\\s\\S]*?repeat\\s*:\\s*-1/);
        ```
        """)
    write(15, "step-15", desc, hints, seed)


# Step 16: anims.create walk-right
def step_16() -> None:
    create_now = (
        CREATE_AFTER_STEP_12 + "\n" + ANIMS_WALK_DOWN + "\n" + ANIMS_WALK_UP + "\n" + ANIMS_WALK_LEFT
    )
    seed = insert_markers_after_last_close(scene(create_now))
    desc = (
        "Frames `12..15` complete the four-direction walk cycle. Below the `walk-left` animation, "
        "register `walk-right` with `start: 12, end: 15`, `frameRate: 8`, `repeat: -1`."
    )
    hints = textwrap.dedent("""\
        You should call `this.anims.create` with the `key` `"walk-right"`.

        ```js
        assert.match(code, /this\\.anims\\.create\\(\\s*\\{[\\s\\S]*?key\\s*:\\s*(['"`])walk-right\\1/);
        ```

        The `walk-right` animation should use frames `start: 12, end: 15` of `"hero"`.

        ```js
        assert.match(code, /key\\s*:\\s*(['"`])walk-right\\1[\\s\\S]*?frames\\s*:\\s*this\\.anims\\.generateFrameNumbers\\(\\s*(['"`])hero\\2\\s*,\\s*\\{\\s*start\\s*:\\s*12\\s*,\\s*end\\s*:\\s*15\\s*\\}\\s*\\)/);
        ```

        The `walk-right` animation should set `frameRate: 8` and `repeat: -1`.

        ```js
        assert.match(code, /key\\s*:\\s*(['"`])walk-right\\1[\\s\\S]*?frameRate\\s*:\\s*8[\\s\\S]*?repeat\\s*:\\s*-1/);
        ```
        """)
    write(16, "step-16", desc, hints, seed)


CREATE_AFTER_STEP_16 = (
    CREATE_AFTER_STEP_12
    + "\n"
    + ANIMS_WALK_DOWN
    + "\n"
    + ANIMS_WALK_UP
    + "\n"
    + ANIMS_WALK_LEFT
    + "\n"
    + ANIMS_WALK_RIGHT
)


# Step 17: update setVelocity(0)
def step_17() -> None:
    full = scene(CREATE_AFTER_STEP_16)
    seed = insert_markers_after_token(full, "  update() {")
    desc = (
        "Switch to `update`. The first thing every frame is to reset the player's velocity, so "
        "the previous frame's input doesn't carry over.\n\n"
        "Inside `update`, call `this.player.setVelocity(0)`."
    )
    hints = textwrap.dedent("""\
        You should call `this.player.setVelocity(0)` inside `update`.

        ```js
        assert.match(code, /this\\.player\\.setVelocity\\(\\s*0\\s*\\)/);
        ```
        """)
    write(17, "step-17", desc, hints, seed)


# Step 18: cursors.left handler
def step_18() -> None:
    full = scene(CREATE_AFTER_STEP_16, UPDATE_AFTER_STEP_17)
    seed = insert_markers_after_token(full, "this.player.setVelocity(0);")
    desc = (
        "Detect the left arrow. Below `setVelocity(0)`, add an `if` block:\n\n"
        "- when `this.cursors.left.isDown` is true, call `this.player.setVelocityX(-120)`, "
        "`this.player.setFlipX(false)`, and `this.player.anims.play(\"walk-left\", true)`.\n\n"
        "The `true` second argument to `anims.play` is `ignoreIfPlaying`. Without it, the "
        "animation restarts at frame 0 every tick the key is held — and the sprite looks frozen."
    )
    hints = textwrap.dedent("""\
        Your `update` should branch on `this.cursors.left.isDown`.

        ```js
        assert.match(code, /if\\s*\\(\\s*this\\.cursors\\.left\\.isDown\\s*\\)/);
        ```

        Pressing the left arrow should call `this.player.setVelocityX(-120)`.

        ```js
        assert.match(code, /this\\.cursors\\.left\\.isDown[\\s\\S]*?this\\.player\\.setVelocityX\\(\\s*-120\\s*\\)/);
        ```

        Pressing the left arrow should call `this.player.setFlipX(false)`.

        ```js
        assert.match(code, /this\\.cursors\\.left\\.isDown[\\s\\S]*?this\\.player\\.setFlipX\\(\\s*false\\s*\\)/);
        ```

        Pressing the left arrow should play the `walk-left` animation with `ignoreIfPlaying`.

        ```js
        assert.match(code, /this\\.cursors\\.left\\.isDown[\\s\\S]*?this\\.player\\.anims\\.play\\(\\s*(['"`])walk-left\\1\\s*,\\s*true\\s*\\)/);
        ```
        """)
    write(18, "step-18", desc, hints, seed)


# Step 19: cursors.right handler (else if)
def step_19() -> None:
    full = scene(CREATE_AFTER_STEP_16, UPDATE_AFTER_STEP_17 + "\n" + UPDATE_LEFT)
    seed = insert_markers_after_token(full, '"walk-left", true);\n    }')
    desc = (
        "Mirror the left handler for the right arrow. Add an `else if` to the existing `if`:\n\n"
        "- when `this.cursors.right.isDown` is true, call `setVelocityX(120)`, `setFlipX(true)`, "
        "and `anims.play(\"walk-right\", true)`.\n\n"
        "`setFlipX(true)` mirrors the sprite — the right-facing walk uses the same source frames "
        "as the left, just flipped."
    )
    hints = textwrap.dedent("""\
        Your `update` should branch on `this.cursors.right.isDown`.

        ```js
        assert.match(code, /this\\.cursors\\.right\\.isDown/);
        ```

        Pressing the right arrow should call `this.player.setVelocityX(120)` and `setFlipX(true)`.

        ```js
        assert.match(code, /this\\.cursors\\.right\\.isDown[\\s\\S]*?this\\.player\\.setVelocityX\\(\\s*120\\s*\\)[\\s\\S]*?this\\.player\\.setFlipX\\(\\s*true\\s*\\)/);
        ```

        Pressing the right arrow should play the `walk-right` animation with `ignoreIfPlaying`.

        ```js
        assert.match(code, /this\\.cursors\\.right\\.isDown[\\s\\S]*?this\\.player\\.anims\\.play\\(\\s*(['"`])walk-right\\1\\s*,\\s*true\\s*\\)/);
        ```
        """)
    write(19, "step-19", desc, hints, seed)


# Step 20: cursors.up handler
def step_20() -> None:
    full = scene(CREATE_AFTER_STEP_16, UPDATE_AFTER_STEP_17 + "\n" + UPDATE_LEFT_RIGHT)
    seed = insert_markers_after_token(full, '"walk-right", true);\n    }')
    desc = (
        "Add the up arrow. Append another `else if`:\n\n"
        "- when `this.cursors.up.isDown` is true, call `setVelocityY(-120)` and "
        "`anims.play(\"walk-up\", true)`. (No flip — the up-facing frames are already drawn.)"
    )
    hints = textwrap.dedent("""\
        Your `update` should branch on `this.cursors.up.isDown`.

        ```js
        assert.match(code, /this\\.cursors\\.up\\.isDown/);
        ```

        Pressing the up arrow should call `this.player.setVelocityY(-120)`.

        ```js
        assert.match(code, /this\\.cursors\\.up\\.isDown[\\s\\S]*?this\\.player\\.setVelocityY\\(\\s*-120\\s*\\)/);
        ```

        Pressing the up arrow should play the `walk-up` animation with `ignoreIfPlaying`.

        ```js
        assert.match(code, /this\\.cursors\\.up\\.isDown[\\s\\S]*?this\\.player\\.anims\\.play\\(\\s*(['"`])walk-up\\1\\s*,\\s*true\\s*\\)/);
        ```
        """)
    write(20, "step-20", desc, hints, seed)


# Step 21: cursors.down handler
def step_21() -> None:
    full = scene(CREATE_AFTER_STEP_16, UPDATE_AFTER_STEP_17 + "\n" + UPDATE_LRU)
    seed = insert_markers_after_token(full, '"walk-up", true);\n    }')
    desc = (
        "Add the down arrow. Append the final `else if`:\n\n"
        "- when `this.cursors.down.isDown` is true, call `setVelocityY(120)` and "
        "`anims.play(\"walk-down\", true)`."
    )
    hints = textwrap.dedent("""\
        Your `update` should branch on `this.cursors.down.isDown`.

        ```js
        assert.match(code, /this\\.cursors\\.down\\.isDown/);
        ```

        Pressing the down arrow should call `this.player.setVelocityY(120)`.

        ```js
        assert.match(code, /this\\.cursors\\.down\\.isDown[\\s\\S]*?this\\.player\\.setVelocityY\\(\\s*120\\s*\\)/);
        ```

        Pressing the down arrow should play the `walk-down` animation with `ignoreIfPlaying`.

        ```js
        assert.match(code, /this\\.cursors\\.down\\.isDown[\\s\\S]*?this\\.player\\.anims\\.play\\(\\s*(['"`])walk-down\\1\\s*,\\s*true\\s*\\)/);
        ```
        """)
    write(21, "step-21", desc, hints, seed)


# Step 22: else play idle
def step_22() -> None:
    full = scene(CREATE_AFTER_STEP_16, UPDATE_AFTER_STEP_17 + "\n" + UPDATE_LRUD)
    seed = insert_markers_after_token(full, '"walk-down", true);\n    }')
    desc = (
        "When no arrow is held, play the `idle` animation. Append a final `else` branch that "
        "calls `this.player.anims.play(\"idle\", true)`."
    )
    hints = textwrap.dedent("""\
        Your `update` should fall through to playing the `idle` animation when no arrow is held.

        ```js
        assert.match(code, /\\}\\s*else\\s*\\{[\\s\\S]*?this\\.player\\.anims\\.play\\(\\s*(['"`])idle\\1\\s*,\\s*true\\s*\\)/);
        ```
        """)
    write(22, "step-22", desc, hints, seed)


# Step 23: anims.create coin-spin
def step_23() -> None:
    create_now = CREATE_AFTER_STEP_16
    seed = insert_markers_after_last_close(scene(create_now, UPDATE_AFTER_STEP_17 + "\n" + UPDATE_LRUD_IDLE))
    desc = (
        "The coin sheet has 8 frames showing a full spin. Below `walk-right`, register the "
        "coin animation: `key: \"coin-spin\"`, frames from `start: 0, end: 7` of `\"coin\"`, "
        "`frameRate: 12`, `repeat: -1`."
    )
    hints = textwrap.dedent("""\
        You should call `this.anims.create` with the `key` `"coin-spin"`.

        ```js
        assert.match(code, /this\\.anims\\.create\\(\\s*\\{[\\s\\S]*?key\\s*:\\s*(['"`])coin-spin\\1/);
        ```

        The `coin-spin` animation should use `start: 0, end: 7` of `"coin"`.

        ```js
        assert.match(code, /key\\s*:\\s*(['"`])coin-spin\\1[\\s\\S]*?frames\\s*:\\s*this\\.anims\\.generateFrameNumbers\\(\\s*(['"`])coin\\2\\s*,\\s*\\{\\s*start\\s*:\\s*0\\s*,\\s*end\\s*:\\s*7\\s*\\}\\s*\\)/);
        ```

        The `coin-spin` animation should set `frameRate: 12` and `repeat: -1`.

        ```js
        assert.match(code, /key\\s*:\\s*(['"`])coin-spin\\1[\\s\\S]*?frameRate\\s*:\\s*12[\\s\\S]*?repeat\\s*:\\s*-1/);
        ```
        """)
    write(23, "step-23", desc, hints, seed)


CREATE_AFTER_STEP_23 = CREATE_AFTER_STEP_16 + "\n" + ANIMS_COIN_SPIN


# Step 24: spawn coin group + 5 coin sprites (no scale/anim yet)
def step_24() -> None:
    full = scene(CREATE_AFTER_STEP_23, UPDATE_AFTER_STEP_17 + "\n" + UPDATE_LRUD_IDLE)
    seed = insert_markers_after_last_close(full)
    desc = (
        "Spawn the coins. A `Phaser.Physics.Arcade.Group` lets you batch-create sprites that all "
        "share collision behavior.\n\n"
        "Below the `coin-spin` animation, declare `this.coins` as `this.physics.add.group()`. "
        "Then iterate over the array `[[80, 80], [400, 80], [80, 280], [400, 280], [240, 80]]` "
        "with `forEach(([x, y]) => { ... })` and inside the loop call `const coin = "
        "this.coins.create(x, y, \"coin\");`."
    )
    hints = textwrap.dedent("""\
        You should declare `this.coins` as `this.physics.add.group()`.

        ```js
        assert.match(code, /this\\.coins\\s*=\\s*this\\.physics\\.add\\.group\\(\\s*\\)/);
        ```

        You should iterate the five coin positions with `forEach` and create a coin sprite for each.

        ```js
        assert.match(code, /\\[\\s*\\[\\s*80\\s*,\\s*80\\s*\\][\\s\\S]*?\\[\\s*240\\s*,\\s*80\\s*\\]\\s*\\][\\s\\S]*?\\.forEach\\(\\s*\\(\\[?x\\s*,\\s*y\\]?\\)?\\s*=>/);
        ```

        Inside the loop you should call `this.coins.create(x, y, "coin")`.

        ```js
        assert.match(code, /this\\.coins\\.create\\(\\s*x\\s*,\\s*y\\s*,\\s*(['"`])coin\\1\\s*\\)/);
        ```
        """)
    write(24, "step-24", desc, hints, seed)


# Step 25: forEach setScale + anims.play("coin-spin")
def step_25() -> None:
    create_now = CREATE_AFTER_STEP_23 + "\n" + COINS_GROUP_BLOCK
    full = scene(create_now, UPDATE_AFTER_STEP_17 + "\n" + UPDATE_LRUD_IDLE)
    seed = insert_markers_after_token(full, 'const coin = this.coins.create(x, y, "coin");')
    desc = (
        "Inside the `forEach` loop, scale each coin to twice its size and start it spinning. "
        "After `const coin = this.coins.create(...)`, call `coin.setScale(2)` and "
        "`coin.anims.play(\"coin-spin\")`."
    )
    hints = textwrap.dedent("""\
        Inside the `forEach` you should call `coin.setScale(2)`.

        ```js
        assert.match(code, /coin\\.setScale\\(\\s*2\\s*\\)/);
        ```

        Inside the `forEach` you should play the `coin-spin` animation on the coin.

        ```js
        assert.match(code, /coin\\.anims\\.play\\(\\s*(['"`])coin-spin\\1\\s*\\)/);
        ```
        """)
    write(25, "step-25", desc, hints, seed)


CREATE_AFTER_STEP_25 = CREATE_AFTER_STEP_23 + "\n" + COINS_GROUP_BLOCK_FULL


# Step 26: anims.create slime-idle
def step_26() -> None:
    full = scene(CREATE_AFTER_STEP_25, UPDATE_AFTER_STEP_17 + "\n" + UPDATE_LRUD_IDLE)
    # close after the forEach block — its closing `});` is the last in create at this point
    close_token = "    });"
    boundary = full.find("update()")
    idx = full.rfind(close_token, 0, boundary)
    end = idx + len(close_token)
    seed = (
        full[:end]
        + "\n--fcc-editable-region--\n\n--fcc-editable-region--"
        + full[end:]
    )
    desc = (
        "The slime sheet's 4 frames show a slow squish-and-stretch idle. Below the coin "
        "`forEach`, register the slime's animation: `key: \"slime-idle\"`, frames from "
        "`start: 0, end: 3` of `\"slime\"`, `frameRate: 4`, `repeat: -1`."
    )
    hints = textwrap.dedent("""\
        You should call `this.anims.create` with the `key` `"slime-idle"`.

        ```js
        assert.match(code, /this\\.anims\\.create\\(\\s*\\{[\\s\\S]*?key\\s*:\\s*(['"`])slime-idle\\1/);
        ```

        The `slime-idle` animation should use `start: 0, end: 3` of `"slime"`.

        ```js
        assert.match(code, /key\\s*:\\s*(['"`])slime-idle\\1[\\s\\S]*?frames\\s*:\\s*this\\.anims\\.generateFrameNumbers\\(\\s*(['"`])slime\\2\\s*,\\s*\\{\\s*start\\s*:\\s*0\\s*,\\s*end\\s*:\\s*3\\s*\\}\\s*\\)/);
        ```

        The `slime-idle` animation should set `frameRate: 4` and `repeat: -1`.

        ```js
        assert.match(code, /key\\s*:\\s*(['"`])slime-idle\\1[\\s\\S]*?frameRate\\s*:\\s*4[\\s\\S]*?repeat\\s*:\\s*-1/);
        ```
        """)
    write(26, "step-26", desc, hints, seed)


CREATE_AFTER_STEP_26 = CREATE_AFTER_STEP_25 + "\n" + ANIMS_SLIME_IDLE


# Step 27: spawn slime sprite
def step_27() -> None:
    full = scene(CREATE_AFTER_STEP_26, UPDATE_AFTER_STEP_17 + "\n" + UPDATE_LRUD_IDLE)
    seed = insert_markers_after_last_close(full)
    desc = (
        "Spawn the slime patrol on the floor of the room. Below the `slime-idle` animation, "
        "assign `this.physics.add.sprite(240, 320, \"slime\")` to `this.slime`."
    )
    hints = textwrap.dedent("""\
        You should assign `this.physics.add.sprite(240, 320, "slime")` to `this.slime`.

        ```js
        assert.match(code, /this\\.slime\\s*=\\s*this\\.physics\\.add\\.sprite\\(\\s*240\\s*,\\s*320\\s*,\\s*(['"`])slime\\1\\s*\\)/);
        ```
        """)
    write(27, "step-27", desc, hints, seed)


CREATE_AFTER_STEP_27 = CREATE_AFTER_STEP_26 + "\n" + SLIME_SPAWN


# Step 28: slime physics setup
def step_28() -> None:
    full = scene(CREATE_AFTER_STEP_27, UPDATE_AFTER_STEP_17 + "\n" + UPDATE_LRUD_IDLE)
    seed = insert_markers_after_token(full, '"slime");')
    desc = (
        "Configure the slime so it patrols. Below the line that creates `this.slime`, call:\n\n"
        "- `this.slime.setScale(2)` — match the hero's display scale.\n"
        "- `this.slime.setCollideWorldBounds(true)` — keep it inside the canvas.\n"
        "- `this.slime.setVelocityX(60)` — start it moving rightward.\n"
        "- `this.slime.setBounce(1, 0)` — perfect horizontal bounce, no vertical."
    )
    hints = textwrap.dedent("""\
        You should call `this.slime.setScale(2)`.

        ```js
        assert.match(code, /this\\.slime\\.setScale\\(\\s*2\\s*\\)/);
        ```

        You should call `this.slime.setCollideWorldBounds(true)`.

        ```js
        assert.match(code, /this\\.slime\\.setCollideWorldBounds\\(\\s*true\\s*\\)/);
        ```

        You should call `this.slime.setVelocityX(60)`.

        ```js
        assert.match(code, /this\\.slime\\.setVelocityX\\(\\s*60\\s*\\)/);
        ```

        You should call `this.slime.setBounce(1, 0)`.

        ```js
        assert.match(code, /this\\.slime\\.setBounce\\(\\s*1\\s*,\\s*0\\s*\\)/);
        ```
        """)
    write(28, "step-28", desc, hints, seed)


CREATE_AFTER_STEP_28 = CREATE_AFTER_STEP_27 + "\n" + SLIME_PHYSICS


# Step 29: slime.anims.play("slime-idle")
def step_29() -> None:
    full = scene(CREATE_AFTER_STEP_28, UPDATE_AFTER_STEP_17 + "\n" + UPDATE_LRUD_IDLE)
    seed = insert_markers_after_token(full, "this.slime.setBounce(1, 0);")
    desc = (
        "Make the slime breathe. Below `setBounce`, call "
        "`this.slime.anims.play(\"slime-idle\")` so the squish-stretch idle plays from the start."
    )
    hints = textwrap.dedent("""\
        You should call `this.slime.anims.play("slime-idle")`.

        ```js
        assert.match(code, /this\\.slime\\.anims\\.play\\(\\s*(['"`])slime-idle\\1\\s*\\)/);
        ```
        """)
    write(29, "step-29", desc, hints, seed)


CREATE_AFTER_STEP_29 = CREATE_AFTER_STEP_28 + "\n" + SLIME_PLAY


# Step 30: slime setFlipX in update based on velocity.x
def step_30() -> None:
    full = scene(CREATE_AFTER_STEP_29, UPDATE_AFTER_STEP_17 + "\n" + UPDATE_LRUD_IDLE)
    seed = insert_markers_after_token(full, '"idle", true);\n    }')
    desc = (
        "Make the slime face the way it's moving. At the bottom of `update`, after the player's "
        "input handling, add:\n\n"
        "- `if (this.slime.body.velocity.x > 0)`: call `this.slime.setFlipX(true)`.\n"
        "- `else if (this.slime.body.velocity.x < 0)`: call `this.slime.setFlipX(false)`.\n\n"
        "Reading `body.velocity.x` works because the slime has an arcade-physics body."
    )
    hints = textwrap.dedent("""\
        Your `update` should branch on `this.slime.body.velocity.x > 0`.

        ```js
        assert.match(code, /this\\.slime\\.body\\.velocity\\.x\\s*>\\s*0[\\s\\S]*?this\\.slime\\.setFlipX\\(\\s*true\\s*\\)/);
        ```

        Your `update` should branch on `this.slime.body.velocity.x < 0`.

        ```js
        assert.match(code, /this\\.slime\\.body\\.velocity\\.x\\s*<\\s*0[\\s\\S]*?this\\.slime\\.setFlipX\\(\\s*false\\s*\\)/);
        ```
        """)
    write(30, "step-30", desc, hints, seed)


UPDATE_AFTER_STEP_30 = UPDATE_AFTER_STEP_17 + "\n" + UPDATE_LRUD_IDLE + "\n" + UPDATE_SLIME_FLIP


COLLECT_COIN_EMPTY = """\
  collectCoin(player, coin) {
  }"""


COLLECT_COIN_TWEEN_ONLY = """\
  collectCoin(player, coin) {
    this.tweens.add({
      targets: coin,
      scale: 0,
      duration: 200,
      onComplete: () => coin.destroy()
    });
  }"""


# Step 31: wire the coin overlap (collectCoin handler doesn't exist yet)
def step_31() -> None:
    full = scene(CREATE_AFTER_STEP_29, UPDATE_AFTER_STEP_30)
    seed = insert_markers_after_token(full, 'this.slime.anims.play("slime-idle");')
    desc = (
        "Wire collisions. Below `slime.anims.play(...)`, call "
        "`this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this)`. "
        "When the player overlaps a coin, Phaser will look up `this.collectCoin` and call it "
        "with the right `this`. The handler doesn't exist yet — you'll add an empty shell next "
        "step, then fill its body."
    )
    hints = textwrap.dedent("""\
        You should register an overlap between `this.player` and `this.coins` that calls `this.collectCoin`.

        ```js
        assert.match(code, /this\\.physics\\.add\\.overlap\\(\\s*this\\.player\\s*,\\s*this\\.coins\\s*,\\s*this\\.collectCoin\\s*,\\s*null\\s*,\\s*this\\s*\\)/);
        ```
        """)
    write(31, "step-31", desc, hints, seed)


CREATE_AFTER_STEP_31 = CREATE_AFTER_STEP_29 + "\n" + OVERLAP_COINS


# Step 32: introduce empty collectCoin method shell after update()
def step_32() -> None:
    full = scene(CREATE_AFTER_STEP_31, UPDATE_AFTER_STEP_30)
    # Insert markers between update()'s closing `  }` and the class's closing `}`.
    update_token = "  update() {"
    update_idx = full.find(update_token)
    if update_idx < 0:
        raise SystemExit("update() not found")
    update_close = full.find("\n  }", update_idx)
    end = update_close + len("\n  }")
    seed = (
        full[:end]
        + "\n--fcc-editable-region--\n\n--fcc-editable-region--"
        + full[end:]
    )
    desc = (
        "Define the handler. After the closing brace of `update()` (still inside `MainScene`), "
        "add an empty `collectCoin(player, coin)` method. You'll fill its body in the next step."
    )
    hints = textwrap.dedent("""\
        Your class should define a `collectCoin(player, coin)` method.

        ```js
        assert.match(code, /collectCoin\\s*\\(\\s*player\\s*,\\s*coin\\s*\\)\\s*\\{/);
        ```
        """)
    write(32, "step-32", desc, hints, seed)


# Step 33: fill collectCoin body with tween + destroy
def step_33() -> None:
    full = scene(CREATE_AFTER_STEP_31, UPDATE_AFTER_STEP_30, COLLECT_COIN_EMPTY)
    # Insert markers inside collectCoin's empty body
    shell_open = "  collectCoin(player, coin) {\n"
    idx = full.find(shell_open)
    if idx < 0:
        raise SystemExit("collectCoin shell not found")
    end = idx + len(shell_open)
    seed = (
        full[:end]
        + "--fcc-editable-region--\n\n--fcc-editable-region--\n"
        + full[end:]
    )
    desc = (
        "Inside `collectCoin`, animate the coin away. Call "
        "`this.tweens.add({ targets: coin, scale: 0, duration: 200, onComplete: () => coin.destroy() })`. "
        "The tween shrinks the coin to nothing over 200 ms, then destroys the sprite so the "
        "physics group stops tracking it."
    )
    hints = textwrap.dedent("""\
        `collectCoin` should call `this.tweens.add` targeting the coin with `scale: 0`.

        ```js
        assert.match(code, /this\\.tweens\\.add\\(\\s*\\{[\\s\\S]*?targets\\s*:\\s*coin[\\s\\S]*?scale\\s*:\\s*0/);
        ```

        The tween should run for `duration: 200`.

        ```js
        assert.match(code, /duration\\s*:\\s*200/);
        ```

        The tween should destroy the coin on complete.

        ```js
        assert.match(code, /onComplete\\s*:\\s*\\(\\s*\\)\\s*=>\\s*coin\\.destroy\\(\\s*\\)/);
        ```
        """)
    write(33, "step-33", desc, hints, seed)


# Step 34: HUD — score + scoreText below the overlap
def step_34() -> None:
    full = scene(CREATE_AFTER_STEP_31, UPDATE_AFTER_STEP_30, COLLECT_COIN_TWEEN_ONLY)
    seed = insert_markers_after_token(
        full,
        "this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this);",
    )
    desc = (
        "Add a HUD that tracks coins collected. Below the overlap line, set `this.score = 0`. "
        "Then create a `Phaser.GameObjects.Text` at `(10, 10)` with the message `\"Coins: 0/5\"` "
        "and assign it to `this.scoreText`. Use `{ fontSize: \"16px\", fill: \"#ffffff\" }` for "
        "the style."
    )
    hints = textwrap.dedent("""\
        You should set `this.score = 0`.

        ```js
        assert.match(code, /this\\.score\\s*=\\s*0\\b/);
        ```

        You should assign a `Phaser.Text` at `(10, 10)` to `this.scoreText`.

        ```js
        assert.match(code, /this\\.scoreText\\s*=\\s*this\\.add\\.text\\(\\s*10\\s*,\\s*10\\s*,\\s*(['"`])Coins:\\s*0\\/5\\1[\\s\\S]*?fontSize\\s*:\\s*(['"`])16px\\2[\\s\\S]*?fill\\s*:\\s*(['"`])#ffffff\\3/);
        ```
        """)
    write(34, "step-34", desc, hints, seed)


CREATE_AFTER_STEP_34 = CREATE_AFTER_STEP_31 + "\n" + SCORE_BLOCK


# Step 35: increment score + setText in collectCoin body
def step_35() -> None:
    full = scene(CREATE_AFTER_STEP_34, UPDATE_AFTER_STEP_30, COLLECT_COIN_TWEEN_ONLY)
    seed = insert_markers_after_token(
        full, "onComplete: () => coin.destroy()\n    });"
    )
    desc = (
        "Now reward the player. Inside `collectCoin`, after the tween, increment "
        "`this.score += 1` and call `this.scoreText.setText(\"Coins: \" + this.score + \"/5\")` "
        "to refresh the HUD."
    )
    hints = textwrap.dedent("""\
        Your `collectCoin` should increment `this.score` by 1.

        ```js
        assert.match(code, /this\\.score\\s*\\+=\\s*1\\b/);
        ```

        Your `collectCoin` should refresh the HUD with `this.scoreText.setText(...)`.

        ```js
        assert.match(code, /this\\.scoreText\\.setText\\(\\s*(['"`])Coins:\\s*\\1\\s*\\+\\s*this\\.score\\s*\\+\\s*(['"`])\\/5\\2\\s*\\)/);
        ```
        """)
    write(35, "step-35", desc, hints, seed)


# Step 36: wire slime overlap (hitSlime handler doesn't exist yet)
def step_36() -> None:
    full = scene(CREATE_AFTER_STEP_34, UPDATE_AFTER_STEP_30, COLLECT_COIN_WITH_SCORE)
    seed = insert_markers_after_token(
        full,
        'this.scoreText = this.add.text(10, 10, "Coins: 0/5", {\n      fontSize: "16px",\n      fill: "#ffffff"\n    });',
    )
    desc = (
        "Add slime danger. Below the `scoreText` line, register a second overlap between the "
        "player and the slime that calls `this.hitSlime`: "
        "`this.physics.add.overlap(this.player, this.slime, this.hitSlime, null, this)`. "
        "You'll define the handler in the next step."
    )
    hints = textwrap.dedent("""\
        You should register an overlap between `this.player` and `this.slime` that calls `this.hitSlime`.

        ```js
        assert.match(code, /this\\.physics\\.add\\.overlap\\(\\s*this\\.player\\s*,\\s*this\\.slime\\s*,\\s*this\\.hitSlime\\s*,\\s*null\\s*,\\s*this\\s*\\)/);
        ```
        """)
    write(36, "step-36", desc, hints, seed)


CREATE_AFTER_STEP_36 = CREATE_AFTER_STEP_34 + "\n" + OVERLAP_SLIME


# Step 37: define hitSlime helper that flashes the camera red
def step_37() -> None:
    full = scene(
        CREATE_AFTER_STEP_36,
        UPDATE_AFTER_STEP_30,
        COLLECT_COIN_WITH_SCORE,
    )
    boundary = full.find("\nconst config")
    class_close = full.rfind("\n}", 0, boundary)
    seed = (
        full[:class_close]
        + "\n--fcc-editable-region--\n\n--fcc-editable-region--"
        + full[class_close:]
    )
    desc = (
        "Define the `hitSlime` handler. After the closing brace of `collectCoin`, add a "
        "`hitSlime()` method whose body calls `this.cameras.main.flash(150, 255, 0, 0)`. The "
        "four arguments are duration in ms and the red, green, and blue channels — pure red "
        "for 150 ms."
    )
    hints = textwrap.dedent("""\
        Your class should define a `hitSlime()` method.

        ```js
        assert.match(code, /hitSlime\\s*\\(\\s*\\)\\s*\\{/);
        ```

        `hitSlime` should call `this.cameras.main.flash(150, 255, 0, 0)`.

        ```js
        assert.match(code, /this\\.cameras\\.main\\.flash\\(\\s*150\\s*,\\s*255\\s*,\\s*0\\s*,\\s*0\\s*\\)/);
        ```
        """)
    write(37, "step-37", desc, hints, seed)


# Step 38: this.cleared = false in create
def step_38() -> None:
    full = scene(
        CREATE_AFTER_STEP_36,
        UPDATE_AFTER_STEP_30,
        COLLECT_COIN_WITH_SCORE + "\n\n" + HIT_SLIME,
    )
    seed = insert_markers_after_token(
        full,
        "this.physics.add.overlap(this.player, this.slime, this.hitSlime, null, this);",
    )
    desc = (
        "Get ready for the win condition. Below the slime overlap, set `this.cleared = false` — "
        "a flag the rest of the game will read to know when the level is over."
    )
    hints = textwrap.dedent("""\
        You should initialize `this.cleared = false` in `create`.

        ```js
        assert.match(code, /this\\.cleared\\s*=\\s*false\\b/);
        ```
        """)
    write(38, "step-38", desc, hints, seed)


CREATE_AFTER_STEP_38 = CREATE_AFTER_STEP_36 + "\n" + CLEARED_INIT


# Step 39: in collectCoin, when score >= 5, set cleared = true, show overlay, freeze keyboard
def step_39() -> None:
    full = scene(
        CREATE_AFTER_STEP_38,
        UPDATE_AFTER_STEP_30,
        COLLECT_COIN_WITH_SCORE + "\n\n" + HIT_SLIME,
    )
    seed = insert_markers_after_token(
        full,
        'this.scoreText.setText("Coins: " + this.score + "/5");',
    )
    desc = (
        "Inside `collectCoin`, after the score update, add the level-cleared check:\n\n"
        "```js\n"
        "if (this.score >= 5) {\n"
        "  this.cleared = true;\n"
        "  this.add.text(240, 180, \"Level Cleared!\", {\n"
        "    fontSize: \"32px\",\n"
        "    fill: \"#ffff00\"\n"
        "  }).setOrigin(0.5);\n"
        "  this.input.keyboard.enabled = false;\n"
        "}\n"
        "```\n\n"
        "`setOrigin(0.5)` centers the text at `(240, 180)` instead of anchoring its top-left "
        "there. Disabling `this.input.keyboard.enabled` freezes the player so the celebration "
        "stands still."
    )
    hints = textwrap.dedent("""\
        Your `collectCoin` should branch on `this.score >= 5`.

        ```js
        assert.match(code, /if\\s*\\(\\s*this\\.score\\s*>=\\s*5\\s*\\)/);
        ```

        On clear, you should set `this.cleared = true`.

        ```js
        assert.match(code, /this\\.score\\s*>=\\s*5[\\s\\S]*?this\\.cleared\\s*=\\s*true/);
        ```

        On clear, you should add a centered `"Level Cleared!"` text at `(240, 180)`.

        ```js
        assert.match(code, /this\\.add\\.text\\(\\s*240\\s*,\\s*180\\s*,\\s*(['"`])Level Cleared!\\1[\\s\\S]*?fontSize\\s*:\\s*(['"`])32px\\2[\\s\\S]*?fill\\s*:\\s*(['"`])#ffff00\\3[\\s\\S]*?\\)\\s*\\.setOrigin\\(\\s*0\\.5\\s*\\)/);
        ```

        On clear, you should disable the keyboard with `this.input.keyboard.enabled = false`.

        ```js
        assert.match(code, /this\\.input\\.keyboard\\.enabled\\s*=\\s*false/);
        ```
        """)
    write(39, "step-39", desc, hints, seed)


# Step 40 (final): early-return at top of update + show full reference solution
def step_40() -> None:
    create_now = CREATE_AFTER_STEP_38
    helpers_now = COLLECT_COIN_FULL + "\n\n" + HIT_SLIME
    seed_full = scene(create_now, UPDATE_AFTER_STEP_30, helpers_now)
    seed = insert_markers_after_token(seed_full, "  update() {")
    update_with_guard = "    if (this.cleared) return;\n" + UPDATE_AFTER_STEP_30
    solution_full = scene(create_now, update_with_guard, helpers_now)
    desc = (
        "One final touch — and a full playthrough. At the very top of `update`, add "
        "`if (this.cleared) return;` so once the level is cleared, no further player movement, "
        "slime tracking, or animation logic runs. The celebration text stays put.\n\n"
        "Now play the game: walk the hero with the arrow keys, collect all 5 coins, watch the "
        "`Level Cleared!` overlay appear. Bump the slime to see the camera flash red.\n\n"
        "Congratulations — you've shipped your first sprite-sheet-driven Phaser game."
    )
    hints = textwrap.dedent("""\
        At the top of `update`, you should early-return when `this.cleared` is true.

        ```js
        assert.match(code, /update\\s*\\(\\s*\\)\\s*\\{\\s*if\\s*\\(\\s*this\\.cleared\\s*\\)\\s*return\\s*;?/);
        ```

        `this.player.setVelocity(0)` should still follow the early-return.

        ```js
        assert.match(code, /if\\s*\\(\\s*this\\.cleared\\s*\\)\\s*return\\s*;[\\s\\S]*?this\\.player\\.setVelocity\\(\\s*0\\s*\\)/);
        ```
        """)
    write(40, "step-40", desc, hints, seed, solution_js=solution_full)


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    step_13()
    step_14()
    step_15()
    step_16()
    step_17()
    step_18()
    step_19()
    step_20()
    step_21()
    step_22()
    step_23()
    step_24()
    step_25()
    step_26()
    step_27()
    step_28()
    step_29()
    step_30()
    step_31()
    step_32()
    step_33()
    step_34()
    step_35()
    step_36()
    step_37()
    step_38()
    step_39()
    step_40()


if __name__ == "__main__":
    main()
