"""Generate workshop-camera-playground step .md files (steps 1..25).

Each step wraps exactly one editable region (two ``--fcc-editable-region--``
markers) around the focused diff against the previous step's solution. The
canonical solutions live in a state machine that keeps a single running
``script.js`` string and mutates it with anchor-based inserts and replaces.
"""

from pathlib import Path

OUT_DIR = (
    Path(__file__).resolve().parents[2]
    / "curriculum/challenges/english/blocks/workshop-camera-playground"
)
HEX_BASE = "66faa600000000000000{:04x}"
ID_OFFSET = 0xA9  # step 1 -> 0xaa, step 25 -> 0xc2


HTML = """\
```html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Camera Playground</title>
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


CONFIG_BLOCK = """\

const config = {
  type: Phaser.AUTO,
  width: 480,
  height: 320,
  parent: "game-container",
  backgroundColor: "#101020",
  physics: {
    default: "arcade",
    arcade: { gravity: { y: 0 }, debug: false }
  },
  scene: [MainScene]
};

new Phaser.Game(config);
"""


class State:
    def __init__(self, initial_text: str):
        self.text = initial_text

    def render(self) -> str:
        return self.text

    def insert_after(self, anchor: str, code: str) -> None:
        if self.text.count(anchor) != 1:
            raise SystemExit(
                f"insert_after anchor must be unique; found {self.text.count(anchor)}\n---\n{anchor!r}"
            )
        self.text = self.text.replace(anchor, anchor + code, 1)

    def replace(self, old: str, new: str) -> None:
        if self.text.count(old) != 1:
            raise SystemExit(
                f"replace target must be unique; found {self.text.count(old)}\n---\n{old!r}"
            )
        self.text = self.text.replace(old, new, 1)


INITIAL_TEXT = """\
class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  create() {
    /* main-create */
  }

  update(time, delta) {
    /* main-update */
  }
}
""" + CONFIG_BLOCK

state = State(INITIAL_TEXT)
solutions: list[str | None] = [None]


def snap() -> None:
    solutions.append(state.render())


snap()


REGION = "--fcc-editable-region--"


def seed_insert(prev_solution: str, anchor: str) -> str:
    if prev_solution.count(anchor) != 1:
        raise SystemExit(
            f"seed anchor must be unique; got {prev_solution.count(anchor)}\n---\n{anchor!r}"
        )
    region = f"{REGION}\n\n{REGION}\n"
    return prev_solution.replace(anchor, anchor + region, 1)


def seed_wrap(prev_solution: str, span: str) -> str:
    if prev_solution.count(span) != 1:
        raise SystemExit(
            f"seed wrap target must be unique; got {prev_solution.count(span)}\n---\n{span!r}"
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
            f"step out of order: tried to register {n}, current solutions length {len(solutions)}"
        )
    seeds.append(seed_text)
    titles.append(title)
    descriptions.append(description)
    hints_per_step.append(hints)
    mutate()
    snap()


# Step 1 special case: empty MainScene shell.

STEP1_SEED = (
    f"{REGION}\n\n{REGION}\n\nconst config = {{\n"
    "  type: Phaser.AUTO,\n"
    "  width: 480,\n"
    "  height: 320,\n"
    '  parent: "game-container",\n'
    '  backgroundColor: "#101020",\n'
    "  physics: {\n"
    '    default: "arcade",\n'
    "    arcade: { gravity: { y: 0 }, debug: false }\n"
    "  },\n"
    "  scene: [MainScene]\n"
    "};\n\n"
    "new Phaser.Game(config);\n"
)

titles.append("Step 1")
descriptions.append(
    "Welcome to the camera playground. Across 25 steps you'll build a wide "
    "scrolling world, fly the camera through every knob Phaser exposes "
    "(`startFollow`, `setLerp`, `setDeadzone`, `shake`, `flash`, `fade`, "
    "`setZoom`), add a minimap, and ship a `prefers-reduced-motion`-aware "
    "accessibility toggle.\n\nDeclare `MainScene` extending `Phaser.Scene` "
    'with a constructor that calls `super("MainScene")` and empty `create` '
    "and `update(time, delta)` methods.\n\n```js\n"
    "class MainScene extends Phaser.Scene {\n"
    "  constructor() {\n"
    '    super("MainScene");\n'
    "  }\n\n"
    "  create() {}\n\n"
    "  update(time, delta) {}\n"
    "}\n```\n\n"
    "The `config` object below is already filled in — a 480×320 canvas with "
    "arcade physics and zero gravity."
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
            "You should declare a `create` method.",
            r"\bcreate\s*\(\s*\)\s*\{",
        ),
        (
            "You should declare an `update` method that takes `time` and `delta`.",
            r"\bupdate\s*\(\s*time\s*,\s*delta\s*\)\s*\{",
        ),
    ]
)
seeds.append(STEP1_SEED)


# Code fragments

WORLD_RECTS = (
    "    const colors = [0x4dccbd, 0xff6b6b, 0xffd166, 0x6c8aff, 0xff9ce8];\n"
    "    for (let i = 0; i < 16; i++) {\n"
    "      const x = 120 + i * 240;\n"
    "      const y = 80 + (i % 4) * 120;\n"
    "      const w = 60 + (i % 3) * 30;\n"
    "      const h = 60 + ((i + 1) % 3) * 30;\n"
    "      this.add\n"
    "        .rectangle(x, y, w, h, colors[i % colors.length])\n"
    "        .setDepth(0);\n"
    "    }\n"
)

PLAYER_BLOCK = (
    "    this.player = this.add\n"
    "      .rectangle(80, 160, 16, 16, 0xffffff)\n"
    "      .setDepth(20);\n"
    "    this.physics.add.existing(this.player);\n"
)

MOVEMENT_BLOCK = (
    "    if (!this.cursors) {\n"
    "      this.cursors = this.input.keyboard.createCursorKeys();\n"
    "    }\n"
    "    const speed = 200;\n"
    "    const body = this.player.body;\n"
    "    body.setVelocity(0);\n"
    "    if (this.cursors.left.isDown) body.setVelocityX(-speed);\n"
    "    else if (this.cursors.right.isDown) body.setVelocityX(speed);\n"
    "    if (this.cursors.up.isDown) body.setVelocityY(-speed);\n"
    "    else if (this.cursors.down.isDown) body.setVelocityY(speed);\n"
)

CAMERA_FOLLOW = "    this.cameras.main.startFollow(this.player);\n"

WORLD_BOUNDS = (
    "    this.physics.world.setBounds(0, 0, 4000, 600);\n"
    "    this.player.body.setCollideWorldBounds(true);\n"
)

CAMERA_BOUNDS = "    this.cameras.main.setBounds(0, 0, 4000, 600);\n"

INSTRUCTIONS_BLOCK = (
    "    this.uiLayer = this.add.layer();\n"
    "    this.uiLayer.add(\n"
    "      this.add\n"
    '        .text(8, 300, "Arrows to move - try the buttons", {\n'
    '          fontSize: "9px",\n'
    '          color: "#cccccc"\n'
    "        })\n"
    "        .setScrollFactor(0)\n"
    "        .setDepth(110)\n"
    "    );\n"
)

MAKE_BUTTON_AND_SMOOTH = (
    "    this.makeButton = (x, y, label, onClick) => {\n"
    "      const w = 50;\n"
    "      const h = 16;\n"
    "      const bg = this.add\n"
    "        .rectangle(x, y, w, h, 0x222244, 1)\n"
    "        .setOrigin(0)\n"
    "        .setScrollFactor(0)\n"
    "        .setDepth(100);\n"
    "      const txt = this.add\n"
    "        .text(x + w / 2, y + h / 2, label, {\n"
    '          fontSize: "9px",\n'
    '          color: "#ffffff"\n'
    "        })\n"
    "        .setOrigin(0.5)\n"
    "        .setScrollFactor(0)\n"
    "        .setDepth(101);\n"
    '      bg.setInteractive().on("pointerdown", onClick);\n'
    "      this.uiLayer.add([bg, txt]);\n"
    "      return { bg, txt, setLabel: (s) => txt.setText(s) };\n"
    "    };\n"
    "    this.lerpOn = false;\n"
    '    const smoothBtn = this.makeButton(4, 4, "Smooth: off", () => {\n'
    "      this.lerpOn = !this.lerpOn;\n"
    '      smoothBtn.setLabel(this.lerpOn ? "Smooth: on" : "Smooth: off");\n'
    "      const k = this.lerpOn ? 0.1 : 1;\n"
    "      this.cameras.main.setLerp(k, k);\n"
    "    });\n"
)

DEADZONE_BUTTON = (
    "    this.applyDeadzone = () => {\n"
    "      const w = this.deadzoneOn ? 200 : 0;\n"
    "      const h = this.deadzoneOn ? 200 : 0;\n"
    "      this.cameras.main.setDeadzone(w, h);\n"
    "      if (this.deadzoneViz) this.deadzoneViz.setVisible(this.deadzoneOn);\n"
    "    };\n"
    "    this.deadzoneOn = false;\n"
    '    const deadBtn = this.makeButton(58, 4, "Dead: off", () => {\n'
    "      this.deadzoneOn = !this.deadzoneOn;\n"
    '      deadBtn.setLabel(this.deadzoneOn ? "Dead: on" : "Dead: off");\n'
    "      this.applyDeadzone();\n"
    "    });\n"
)

DEADZONE_VIZ = (
    "    this.deadzoneViz = this.add\n"
    "      .rectangle(240, 160, 200, 200, 0x000000, 0)\n"
    "      .setStrokeStyle(2, 0xff66cc)\n"
    "      .setScrollFactor(0)\n"
    "      .setDepth(60)\n"
    "      .setVisible(false);\n"
    "    this.uiLayer.add(this.deadzoneViz);\n"
    "    this.applyDeadzone();\n"
)

SHAKE_BUTTON = (
    "    this.shakeIntensity = 0.012;\n"
    '    this.makeButton(112, 4, "Shake", () => {\n'
    "      if (!this.reduceMotion) {\n"
    "        this.cameras.main.shake(300, this.shakeIntensity);\n"
    "      }\n"
    "    });\n"
)

SHAKE_INTENSITY_BLOCK = (
    "    this.shakeLevel = 1;\n"
    "    const shakeLevels = [0.005, 0.012, 0.025];\n"
    '    const shakeNames = ["low", "med", "high"];\n'
    '    const shakeLbl = this.makeButton(174, 24, "Shake: med", () => {\n'
    "      this.shakeLevel = (this.shakeLevel + 1) % 3;\n"
    "      this.shakeIntensity = shakeLevels[this.shakeLevel];\n"
    '      shakeLbl.setLabel("Shake: " + shakeNames[this.shakeLevel]);\n'
    "    });\n"
)

FLASH_BUTTON = (
    '    this.makeButton(166, 4, "Flash", () => {\n'
    "      if (!this.reduceMotion) {\n"
    "        this.cameras.main.flash(150, 255, 255, 255);\n"
    "      }\n"
    "    });\n"
)

FADE_BUTTON = (
    '    this.makeButton(220, 4, "Fade", () => {\n'
    "      if (this.reduceMotion) return;\n"
    "      this.cameras.main.fade(600, 0, 0, 0);\n"
    '      this.cameras.main.once("camerafadeoutcomplete", () => {\n'
    "        this.cameras.main.fadeIn(400, 0, 0, 0);\n"
    "      });\n"
    "    });\n"
)

ZOOM_BUTTONS = (
    "    this.zoom = 1;\n"
    "    this.applyZoom = (target) => {\n"
    "      this.zoom = target;\n"
    "      this.cameras.main.setZoom(target);\n"
    '      this.zoomLabel.setLabel("Zoom: " + target.toFixed(1));\n'
    "    };\n"
    '    this.zoomLabel = this.makeButton(38, 24, "Zoom: 1.0", () => {});\n'
    '    this.makeButton(4, 24, "-", () => this.applyZoom(this.zoom - 0.2));\n'
    '    this.makeButton(92, 24, "+", () => this.applyZoom(this.zoom + 0.2));\n'
)

ZOOM_TWEEN_REPLACEMENT = (
    "    this.zoom = 1;\n"
    "    this.applyZoom = (target) => {\n"
    "      this.zoom = target;\n"
    "      this.tweens.add({\n"
    "        targets: this.cameras.main,\n"
    "        zoom: target,\n"
    "        duration: 400,\n"
    '        ease: "Sine.InOut"\n'
    "      });\n"
    '      this.zoomLabel.setLabel("Zoom: " + target.toFixed(1));\n'
    "    };\n"
)

MINIMAP_INIT = (
    "    this.minimap = this.cameras.add(340, 256, 130, 60);\n"
    "    this.minimap.setBounds(0, 0, 4000, 600);\n"
    "    this.minimap.setBackgroundColor(0x111133);\n"
    "    this.minimap.startFollow(this.player);\n"
)

MINIMAP_IGNORE_BLOCK = (
    "    this.minimap.setZoom(0.06);\n"
    "    this.minimap.ignore([this.uiLayer, this.player]);\n"
)

MARKER_LAZY_BLOCK = (
    "    if (!this.marker) {\n"
    "      this.marker = this.add\n"
    "        .rectangle(this.player.x, this.player.y, 80, 80, 0xffff66, 1)\n"
    "        .setDepth(70);\n"
    "      this.cameras.main.ignore(this.marker);\n"
    "    }\n"
    "    this.marker.setPosition(this.player.x, this.player.y);\n"
)

BG_BUTTON = (
    "    this.bgIndex = 0;\n"
    "    const bgColors = [0x101020, 0x1f3030, 0x2a1a3a, 0x000000];\n"
    '    this.makeButton(274, 4, "BG", () => {\n'
    "      this.bgIndex = (this.bgIndex + 1) % bgColors.length;\n"
    "      this.cameras.main.setBackgroundColor(bgColors[this.bgIndex]);\n"
    "    });\n"
)

REDUCE_BUTTON_INMEM = (
    "    this.reduceMotion = false;\n"
    "    this.reduceBtn = this.makeButton(\n"
    "      328,\n"
    "      4,\n"
    '      "Motion: on",\n'
    "      () => {\n"
    "        this.reduceMotion = !this.reduceMotion;\n"
    "        this.reduceBtn.setLabel(\n"
    '          this.reduceMotion ? "Motion: off" : "Motion: on"\n'
    "        );\n"
    "      }\n"
    "    );\n"
)

REDUCE_BUTTON_PERSIST = (
    '    this.reduceMotion = localStorage.getItem("cam:reduce") === "true";\n'
    "    this.reduceBtn = this.makeButton(\n"
    "      328,\n"
    "      4,\n"
    '      this.reduceMotion ? "Motion: off" : "Motion: on",\n'
    "      () => {\n"
    "        this.reduceMotion = !this.reduceMotion;\n"
    '        localStorage.setItem("cam:reduce", String(this.reduceMotion));\n'
    "        this.reduceBtn.setLabel(\n"
    '          this.reduceMotion ? "Motion: off" : "Motion: on"\n'
    "        );\n"
    "      }\n"
    "    );\n"
)

REDUCE_PERSIST_LINE = (
    '    this.reduceMotion = localStorage.getItem("cam:reduce") === "true";\n'
)

REDUCE_MEDIA_BLOCK = (
    '    const persisted = localStorage.getItem("cam:reduce") === "true";\n'
    '    const mediaPref = window.matchMedia("(prefers-reduced-motion: reduce)").matches;\n'
    "    this.reduceMotion = persisted || mediaPref;\n"
)

ZOOM_TWEEN_BLOCK_FOR_WRAP = (
    "    this.applyZoom = (target) => {\n"
    "      this.zoom = target;\n"
    "      this.tweens.add({\n"
    "        targets: this.cameras.main,\n"
    "        zoom: target,\n"
    "        duration: 400,\n"
    '        ease: "Sine.InOut"\n'
    "      });\n"
    '      this.zoomLabel.setLabel("Zoom: " + target.toFixed(1));\n'
    "    };\n"
)

ZOOM_CLAMP_PLUS_SHUTDOWN = (
    "    this.applyZoom = (target) => {\n"
    "      const clamped = Phaser.Math.Clamp(target, 0.5, 2);\n"
    "      this.zoom = clamped;\n"
    "      this.tweens.add({\n"
    "        targets: this.cameras.main,\n"
    "        zoom: clamped,\n"
    "        duration: 400,\n"
    '        ease: "Sine.InOut"\n'
    "      });\n"
    '      this.zoomLabel.setLabel("Zoom: " + clamped.toFixed(1));\n'
    "    };\n"
    '    this.events.on("shutdown", () => this.tweens.killAll());\n'
)


# Step 2: world rectangles.
step(
    2,
    title="Step 2",
    description=(
        "A camera that scrolls is meaningless without a world to scroll "
        "across. Render 16 colored rectangles spaced along a 4000-pixel-wide "
        "world so the camera has something to chase.\n\nInside `MainScene.create`:\n\n"
        "```js\n"
        "const colors = [0x4dccbd, 0xff6b6b, 0xffd166, 0x6c8aff, 0xff9ce8];\n"
        "for (let i = 0; i < 16; i++) {\n"
        "  const x = 120 + i * 240;\n"
        "  const y = 80 + (i % 4) * 120;\n"
        "  const w = 60 + (i % 3) * 30;\n"
        "  const h = 60 + ((i + 1) % 3) * 30;\n"
        "  this.add.rectangle(x, y, w, h, colors[i % colors.length]).setDepth(0);\n"
        "}\n"
        "```\n\nAt this point only the leftmost rectangles are visible — "
        "the camera hasn't been told to follow anything yet."
    ),
    hints=[
        (
            "You should declare a `colors` array with five hex values.",
            r"const\s+colors\s*=\s*\[\s*0x4dccbd\s*,\s*0xff6b6b\s*,\s*0xffd166\s*,\s*0x6c8aff\s*,\s*0xff9ce8\s*\]",
        ),
        (
            "You should iterate `i` from `0` to `16` and call `this.add.rectangle` inside the loop.",
            r"for\s*\(\s*let\s+i\s*=\s*0\s*;\s*i\s*<\s*16\s*;[\s\S]*this\.add[\s\S]*\.rectangle\(",
        ),
        (
            "You should compute `x` as `120 + i * 240` so rectangles spread across the 4000px world.",
            r"const\s+x\s*=\s*120\s*\+\s*i\s*\*\s*240",
        ),
        (
            "You should pick the colour with `colors[i % colors.length]`.",
            r"colors\[\s*i\s*%\s*colors\.length\s*\]",
        ),
    ],
    seed_text=seed_wrap(solutions[1], "    /* main-create */\n"),
    mutate=lambda: state.replace("    /* main-create */\n", WORLD_RECTS),
)

# Step 3: player physics rectangle.
step(
    3,
    title="Step 3",
    description=(
        "The camera needs a target to follow. Add a 16×16 white rectangle and "
        "register it with arcade physics — that gives it a `body` for "
        "velocity and bounds-clamping later.\n\nAfter the rectangle loop in "
        "`create`:\n\n"
        "```js\n"
        "this.player = this.add\n"
        "  .rectangle(80, 160, 16, 16, 0xffffff)\n"
        "  .setDepth(20);\n"
        "this.physics.add.existing(this.player);\n"
        "```"
    ),
    hints=[
        (
            "You should create a 16×16 white rectangle at `(80, 160)` and store it on `this.player`.",
            r"this\.player\s*=\s*this\.add\s*\.rectangle\(\s*80\s*,\s*160\s*,\s*16\s*,\s*16\s*,\s*0xffffff\s*\)",
        ),
        (
            "You should give the player `setDepth(20)`.",
            r"\.setDepth\(\s*20\s*\)",
        ),
        (
            "You should register the player with arcade physics via `this.physics.add.existing(this.player)`.",
            r"this\.physics\.add\.existing\(\s*this\.player\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[2], WORLD_RECTS),
    mutate=lambda: state.insert_after(WORLD_RECTS, PLAYER_BLOCK),
)

# Step 4: cursor movement (lazy-init in update).
step(
    4,
    title="Step 4",
    description=(
        "The player needs input. Bind cursor keys lazily inside `update` "
        "(creating them on the first frame, reusing them after) and translate "
        "the held arrow keys into velocity on the player's body. Lazy-init "
        "keeps the keybinding alongside the input that consumes it — easier "
        "to reason about than splitting it across `create` and `update`.\n\n"
        "Inside `MainScene.update`:\n\n"
        "```js\n"
        "if (!this.cursors) {\n"
        "  this.cursors = this.input.keyboard.createCursorKeys();\n"
        "}\n"
        "const speed = 200;\n"
        "const body = this.player.body;\n"
        "body.setVelocity(0);\n"
        "if (this.cursors.left.isDown) body.setVelocityX(-speed);\n"
        "else if (this.cursors.right.isDown) body.setVelocityX(speed);\n"
        "if (this.cursors.up.isDown) body.setVelocityY(-speed);\n"
        "else if (this.cursors.down.isDown) body.setVelocityY(speed);\n"
        "```\n\nThe player should now glide around at 200 px/s. The camera "
        "still sits at `(0, 0)` though — it doesn't follow yet."
    ),
    hints=[
        (
            "You should lazily create `this.cursors` with `this.input.keyboard.createCursorKeys()`.",
            r"if\s*\(\s*!\s*this\.cursors\s*\)\s*\{\s*this\.cursors\s*=\s*this\.input\.keyboard\.createCursorKeys\(\s*\)\s*;\s*\}",
        ),
        (
            "You should declare `const speed = 200`.",
            r"const\s+speed\s*=\s*200",
        ),
        (
            "You should zero the body's velocity with `body.setVelocity(0)`.",
            r"body\.setVelocity\(\s*0\s*\)",
        ),
        (
            "You should map `cursors.left.isDown` to `body.setVelocityX(-speed)`.",
            r"this\.cursors\.left\.isDown[\s\S]*body\.setVelocityX\(\s*-\s*speed\s*\)",
        ),
        (
            "You should map `cursors.up.isDown` to `body.setVelocityY(-speed)`.",
            r"this\.cursors\.up\.isDown[\s\S]*body\.setVelocityY\(\s*-\s*speed\s*\)",
        ),
    ],
    seed_text=seed_wrap(solutions[3], "    /* main-update */\n"),
    mutate=lambda: state.replace("    /* main-update */\n", MOVEMENT_BLOCK),
)

# Step 5: camera follow.
step(
    5,
    title="Step 5",
    description=(
        "Tell the main camera to follow the player. With one line, the "
        "camera centres on the player and the world scrolls past as you "
        "move. The brittle `(0, 0)`-stuck behaviour disappears.\n\n"
        "After `physics.add.existing` in `create`:\n\n"
        "```js\n"
        "this.cameras.main.startFollow(this.player);\n"
        "```\n\nMove right with the arrow key — the camera should now "
        "scroll with you."
    ),
    hints=[
        (
            "You should call `this.cameras.main.startFollow(this.player)`.",
            r"this\.cameras\.main\.startFollow\(\s*this\.player\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[4], PLAYER_BLOCK),
    mutate=lambda: state.insert_after(PLAYER_BLOCK, CAMERA_FOLLOW),
)

# Step 6: world bounds.
step(
    6,
    title="Step 6",
    description=(
        "The world is conceptually 4000×600, but Phaser's physics engine "
        "still thinks the world is the default canvas size. Walk far enough "
        "right and the player slides off into negative-coordinate territory. "
        "Set the world bounds explicitly and ask the player's body to "
        "respect them.\n\nAfter `startFollow`:\n\n"
        "```js\n"
        "this.physics.world.setBounds(0, 0, 4000, 600);\n"
        "this.player.body.setCollideWorldBounds(true);\n"
        "```\n\nThe player should now stop cleanly at the world edges."
    ),
    hints=[
        (
            "You should call `this.physics.world.setBounds(0, 0, 4000, 600)`.",
            r"this\.physics\.world\.setBounds\(\s*0\s*,\s*0\s*,\s*4000\s*,\s*600\s*\)",
        ),
        (
            "You should opt the player body into bounds-clamping with `setCollideWorldBounds(true)`.",
            r"this\.player\.body\.setCollideWorldBounds\(\s*true\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[5], CAMERA_FOLLOW),
    mutate=lambda: state.insert_after(CAMERA_FOLLOW, WORLD_BOUNDS),
)

# Step 7: camera bounds.
step(
    7,
    title="Step 7",
    description=(
        "World bounds keep the player inside the level. Camera bounds keep "
        "the *camera* inside the level — without them, the camera happily "
        "scrolls past the right edge into empty world. Match the camera "
        "bounds to the world.\n\nAfter the world-bounds block:\n\n"
        "```js\n"
        "this.cameras.main.setBounds(0, 0, 4000, 600);\n"
        "```"
    ),
    hints=[
        (
            "You should call `this.cameras.main.setBounds(0, 0, 4000, 600)`.",
            r"this\.cameras\.main\.setBounds\(\s*0\s*,\s*0\s*,\s*4000\s*,\s*600\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[6], WORLD_BOUNDS),
    mutate=lambda: state.insert_after(WORLD_BOUNDS, CAMERA_BOUNDS),
)

# Step 8: instructions text + uiLayer.
step(
    8,
    title="Step 8",
    description=(
        "Players need a hint about controls. Create a `uiLayer` (a Phaser "
        "Layer that holds all screen-space UI — useful later for telling "
        "the minimap to skip rendering it) and add an instructions text "
        "anchored to the bottom of the canvas with `setScrollFactor(0)`.\n\n"
        "After the camera-bounds line:\n\n"
        "```js\n"
        "this.uiLayer = this.add.layer();\n"
        "this.uiLayer.add(\n"
        "  this.add\n"
        '    .text(8, 300, "Arrows to move - try the buttons", {\n'
        '      fontSize: "9px",\n'
        '      color: "#cccccc"\n'
        "    })\n"
        "    .setScrollFactor(0)\n"
        "    .setDepth(110)\n"
        ");\n"
        "```"
    ),
    hints=[
        (
            "You should create `this.uiLayer = this.add.layer()`.",
            r"this\.uiLayer\s*=\s*this\.add\.layer\(\s*\)",
        ),
        (
            "You should add an instructions text at `(8, 300)` with the message about arrows and buttons.",
            r'\.text\(\s*8\s*,\s*300\s*,\s*["\']Arrows to move - try the buttons["\']',
        ),
        (
            "The instructions text should pin to the screen via `setScrollFactor(0)`.",
            r'\.text\(\s*8\s*,\s*300\s*,[\s\S]*setScrollFactor\(\s*0\s*\)',
        ),
        (
            "Add the instructions text to the UI layer.",
            r"this\.uiLayer\.add\(",
        ),
    ],
    seed_text=seed_insert(solutions[7], CAMERA_BOUNDS),
    mutate=lambda: state.insert_after(CAMERA_BOUNDS, INSTRUCTIONS_BLOCK),
)


# Step 9: makeButton closure + smooth follow toggle.
step(
    9,
    title="Step 9",
    description=(
        "From here on, every camera knob gets a clickable button. Build a "
        "`makeButton(x, y, label, onClick)` closure that paints a 50×16 "
        "rectangle plus a centered text label, anchors them to the screen "
        "(`setScrollFactor(0)`), wires up the click, registers them on "
        "`this.uiLayer`, and returns a `setLabel` setter for runtime "
        "updates. Then ship the first button: a smooth-follow toggle that "
        "flips between exact tracking (`lerp = 1`) and cinematic smoothing "
        "(`lerp = 0.1`).\n\nAfter the instructions block:\n\n"
        "```js\n"
        "this.makeButton = (x, y, label, onClick) => {\n"
        "  const w = 50;\n"
        "  const h = 16;\n"
        "  const bg = this.add\n"
        "    .rectangle(x, y, w, h, 0x222244, 1)\n"
        "    .setOrigin(0)\n"
        "    .setScrollFactor(0)\n"
        "    .setDepth(100);\n"
        "  const txt = this.add\n"
        "    .text(x + w / 2, y + h / 2, label, {\n"
        '      fontSize: "9px",\n'
        '      color: "#ffffff"\n'
        "    })\n"
        "    .setOrigin(0.5)\n"
        "    .setScrollFactor(0)\n"
        "    .setDepth(101);\n"
        '  bg.setInteractive().on("pointerdown", onClick);\n'
        "  this.uiLayer.add([bg, txt]);\n"
        "  return { bg, txt, setLabel: (s) => txt.setText(s) };\n"
        "};\n"
        "this.lerpOn = false;\n"
        'const smoothBtn = this.makeButton(4, 4, "Smooth: off", () => {\n'
        "  this.lerpOn = !this.lerpOn;\n"
        '  smoothBtn.setLabel(this.lerpOn ? "Smooth: on" : "Smooth: off");\n'
        "  const k = this.lerpOn ? 0.1 : 1;\n"
        "  this.cameras.main.setLerp(k, k);\n"
        "});\n"
        "```"
    ),
    hints=[
        (
            "You should define `this.makeButton = (x, y, label, onClick) => { ... }`.",
            r"this\.makeButton\s*=\s*\(\s*x\s*,\s*y\s*,\s*label\s*,\s*onClick\s*\)\s*=>",
        ),
        (
            "Inside `makeButton`, create the background rectangle with `setScrollFactor(0)`.",
            r"\.rectangle\(\s*x\s*,\s*y\s*,\s*w\s*,\s*h\s*,\s*0x222244\s*,\s*1\s*\)[\s\S]*setScrollFactor\(\s*0\s*\)",
        ),
        (
            'Inside `makeButton`, wire the click via `bg.setInteractive().on("pointerdown", onClick)`.',
            r'bg\.setInteractive\(\s*\)\.on\(\s*["\']pointerdown["\']\s*,\s*onClick\s*\)',
        ),
        (
            "Add the smooth-follow toggle via `this.makeButton(4, 4, \"Smooth: off\", ...)`.",
            r'this\.makeButton\(\s*4\s*,\s*4\s*,\s*["\']Smooth: off["\']',
        ),
        (
            "The smooth-toggle handler should call `this.cameras.main.setLerp(k, k)` based on `this.lerpOn`.",
            r"this\.cameras\.main\.setLerp\(\s*k\s*,\s*k\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[8], INSTRUCTIONS_BLOCK),
    mutate=lambda: state.insert_after(INSTRUCTIONS_BLOCK, MAKE_BUTTON_AND_SMOOTH),
)

# Step 10: deadzone toggle button + applyDeadzone closure.
step(
    10,
    title="Step 10",
    description=(
        "Lerp smooths the camera's reaction. A **deadzone** controls "
        "*whether* the camera reacts at all for small movements. Add a "
        "`Dead` button that toggles a 200×200 deadzone on and off. The "
        "actual `setDeadzone` call lives in an `applyDeadzone` closure so "
        "future code (the visualizer in step 11) can keep its visibility "
        "in sync without duplicating logic.\n\nAfter the smooth toggle:\n\n"
        "```js\n"
        "this.applyDeadzone = () => {\n"
        "  const w = this.deadzoneOn ? 200 : 0;\n"
        "  const h = this.deadzoneOn ? 200 : 0;\n"
        "  this.cameras.main.setDeadzone(w, h);\n"
        "  if (this.deadzoneViz) this.deadzoneViz.setVisible(this.deadzoneOn);\n"
        "};\n"
        "this.deadzoneOn = false;\n"
        'const deadBtn = this.makeButton(58, 4, "Dead: off", () => {\n'
        "  this.deadzoneOn = !this.deadzoneOn;\n"
        '  deadBtn.setLabel(this.deadzoneOn ? "Dead: on" : "Dead: off");\n'
        "  this.applyDeadzone();\n"
        "});\n"
        "```"
    ),
    hints=[
        (
            "You should define `this.applyDeadzone = () => { ... }` that calls `this.cameras.main.setDeadzone(w, h)`.",
            r"this\.applyDeadzone\s*=\s*\(\s*\)\s*=>\s*\{[\s\S]*this\.cameras\.main\.setDeadzone\(\s*w\s*,\s*h\s*\)",
        ),
        (
            "`applyDeadzone` should sync the visualizer with `if (this.deadzoneViz) this.deadzoneViz.setVisible(this.deadzoneOn)`.",
            r"if\s*\(\s*this\.deadzoneViz\s*\)\s*this\.deadzoneViz\.setVisible\(\s*this\.deadzoneOn\s*\)",
        ),
        (
            'Add the `Dead: off` toggle via `this.makeButton(58, 4, "Dead: off", ...)`.',
            r'this\.makeButton\(\s*58\s*,\s*4\s*,\s*["\']Dead: off["\']',
        ),
        (
            "The handler should toggle `this.deadzoneOn` and call `this.applyDeadzone()`.",
            r"this\.deadzoneOn\s*=\s*!\s*this\.deadzoneOn[\s\S]*this\.applyDeadzone\(\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[9], MAKE_BUTTON_AND_SMOOTH),
    mutate=lambda: state.insert_after(MAKE_BUTTON_AND_SMOOTH, DEADZONE_BUTTON),
)

# Step 11: visualize deadzone with a Graphics-style rectangle.
step(
    11,
    title="Step 11",
    description=(
        "Tuning a deadzone by feel is hard. Render a magenta-stroked "
        "rectangle that mirrors the deadzone's bounds, anchored to the "
        "screen so it stays put as the camera scrolls. Toggle visibility "
        "via `applyDeadzone` (already wired in step 10).\n\nAfter the "
        "deadzone toggle:\n\n"
        "```js\n"
        "this.deadzoneViz = this.add\n"
        "  .rectangle(240, 160, 200, 200, 0x000000, 0)\n"
        "  .setStrokeStyle(2, 0xff66cc)\n"
        "  .setScrollFactor(0)\n"
        "  .setDepth(60)\n"
        "  .setVisible(false);\n"
        "this.uiLayer.add(this.deadzoneViz);\n"
        "this.applyDeadzone();\n"
        "```\n\nThe `applyDeadzone()` call at the end syncs the viz "
        "visibility with the current state."
    ),
    hints=[
        (
            "Create the deadzone visualizer at `(240, 160)` sized 200×200 with zero fill alpha.",
            r"this\.deadzoneViz\s*=\s*this\.add\s*\.rectangle\(\s*240\s*,\s*160\s*,\s*200\s*,\s*200\s*,\s*0x000000\s*,\s*0\s*\)",
        ),
        (
            "Give it a 2px magenta stroke via `.setStrokeStyle(2, 0xff66cc)`.",
            r"\.setStrokeStyle\(\s*2\s*,\s*0xff66cc\s*\)",
        ),
        (
            "The visualizer should pin to the screen via `setScrollFactor(0)` and start hidden.",
            r"\.setScrollFactor\(\s*0\s*\)[\s\S]*\.setVisible\(\s*false\s*\)",
        ),
        (
            "Add the visualizer to `this.uiLayer` and call `this.applyDeadzone()` to sync visibility.",
            r"this\.uiLayer\.add\(\s*this\.deadzoneViz\s*\)\s*;\s*this\.applyDeadzone\(\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[10], DEADZONE_BUTTON),
    mutate=lambda: state.insert_after(DEADZONE_BUTTON, DEADZONE_VIZ),
)

# Step 12: shake button.
step(
    12,
    title="Step 12",
    description=(
        "Time for juice. Add a `Shake` button that fires `cameras.main"
        ".shake(300, this.shakeIntensity)` — a 300 ms shake, default "
        "intensity `0.012`. Gate it behind `this.reduceMotion` so the "
        "accessibility toggle (step 22) silently disables it once "
        "wired.\n\nAfter the deadzone visualizer:\n\n"
        "```js\n"
        "this.shakeIntensity = 0.012;\n"
        'this.makeButton(112, 4, "Shake", () => {\n'
        "  if (!this.reduceMotion) {\n"
        "    this.cameras.main.shake(300, this.shakeIntensity);\n"
        "  }\n"
        "});\n"
        "```"
    ),
    hints=[
        (
            "Initialise `this.shakeIntensity = 0.012`.",
            r"this\.shakeIntensity\s*=\s*0\.012",
        ),
        (
            'Add a `Shake` button at `(112, 4)`.',
            r'this\.makeButton\(\s*112\s*,\s*4\s*,\s*["\']Shake["\']',
        ),
        (
            "The handler should guard with `if (!this.reduceMotion)` and call `this.cameras.main.shake(300, this.shakeIntensity)`.",
            r"if\s*\(\s*!\s*this\.reduceMotion\s*\)[\s\S]*this\.cameras\.main\.shake\(\s*300\s*,\s*this\.shakeIntensity\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[11], DEADZONE_VIZ),
    mutate=lambda: state.insert_after(DEADZONE_VIZ, SHAKE_BUTTON),
)

# Step 13: shake intensity stepper.
step(
    13,
    title="Step 13",
    description=(
        "A single intensity is rarely the right one. Add a stepper button "
        "on the second row that cycles through three levels — low (0.005), "
        "medium (0.012, default), and high (0.025) — and updates "
        "`this.shakeIntensity` so the next `Shake` press uses the new "
        "value.\n\nAfter the shake button:\n\n"
        "```js\n"
        "this.shakeLevel = 1;\n"
        "const shakeLevels = [0.005, 0.012, 0.025];\n"
        'const shakeNames = ["low", "med", "high"];\n'
        'const shakeLbl = this.makeButton(174, 24, "Shake: med", () => {\n'
        "  this.shakeLevel = (this.shakeLevel + 1) % 3;\n"
        "  this.shakeIntensity = shakeLevels[this.shakeLevel];\n"
        '  shakeLbl.setLabel("Shake: " + shakeNames[this.shakeLevel]);\n'
        "});\n"
        "```\n\nThe button starts on `med` (the default). Click cycles: "
        "med → high → low → med."
    ),
    hints=[
        (
            "Declare `this.shakeLevel = 1` (medium) and a `shakeLevels` array `[0.005, 0.012, 0.025]`.",
            r"this\.shakeLevel\s*=\s*1[\s\S]*const\s+shakeLevels\s*=\s*\[\s*0\.005\s*,\s*0\.012\s*,\s*0\.025\s*\]",
        ),
        (
            'Add a `"Shake: med"` button on the second row at `(174, 24)`.',
            r'this\.makeButton\(\s*174\s*,\s*24\s*,\s*["\']Shake: med["\']',
        ),
        (
            "The handler should advance `shakeLevel` modulo 3 and assign `shakeLevels[this.shakeLevel]` to `this.shakeIntensity`.",
            r"this\.shakeLevel\s*=\s*\(\s*this\.shakeLevel\s*\+\s*1\s*\)\s*%\s*3[\s\S]*this\.shakeIntensity\s*=\s*shakeLevels\[\s*this\.shakeLevel\s*\]",
        ),
    ],
    seed_text=seed_insert(solutions[12], SHAKE_BUTTON),
    mutate=lambda: state.insert_after(SHAKE_BUTTON, SHAKE_INTENSITY_BLOCK),
)

# Step 14: flash button.
step(
    14,
    title="Step 14",
    description=(
        "Add a `Flash` button: a 150 ms pure-white flash, perfect for "
        "damage-feedback prototyping. Same `reduceMotion` gate as shake.\n\n"
        "After the shake intensity block:\n\n"
        "```js\n"
        'this.makeButton(166, 4, "Flash", () => {\n'
        "  if (!this.reduceMotion) {\n"
        "    this.cameras.main.flash(150, 255, 255, 255);\n"
        "  }\n"
        "});\n"
        "```"
    ),
    hints=[
        (
            'Add a `Flash` button at `(166, 4)`.',
            r'this\.makeButton\(\s*166\s*,\s*4\s*,\s*["\']Flash["\']',
        ),
        (
            "The handler should call `this.cameras.main.flash(150, 255, 255, 255)` behind a `reduceMotion` guard.",
            r"if\s*\(\s*!\s*this\.reduceMotion\s*\)[\s\S]*this\.cameras\.main\.flash\(\s*150\s*,\s*255\s*,\s*255\s*,\s*255\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[13], SHAKE_INTENSITY_BLOCK),
    mutate=lambda: state.insert_after(SHAKE_INTENSITY_BLOCK, FLASH_BUTTON),
)

# Step 15: fade button (out + in).
step(
    15,
    title="Step 15",
    description=(
        "Where flash is percussive, **fade** is for transitions. Add a "
        "`Fade` button that fades to black over 600 ms, then fades back "
        "in over 400 ms once the fade-out completes. Use the "
        "`camerafadeoutcomplete` event to chain the fade-in.\n\nAfter the "
        "flash button:\n\n"
        "```js\n"
        'this.makeButton(220, 4, "Fade", () => {\n'
        "  if (this.reduceMotion) return;\n"
        "  this.cameras.main.fade(600, 0, 0, 0);\n"
        '  this.cameras.main.once("camerafadeoutcomplete", () => {\n'
        "    this.cameras.main.fadeIn(400, 0, 0, 0);\n"
        "  });\n"
        "});\n"
        "```\n\nThe `once` listener auto-removes after one firing — "
        "exactly what you want for a chained fade."
    ),
    hints=[
        (
            'Add a `Fade` button at `(220, 4)`.',
            r'this\.makeButton\(\s*220\s*,\s*4\s*,\s*["\']Fade["\']',
        ),
        (
            "The handler should call `this.cameras.main.fade(600, 0, 0, 0)`.",
            r"this\.cameras\.main\.fade\(\s*600\s*,\s*0\s*,\s*0\s*,\s*0\s*\)",
        ),
        (
            'Listen for `"camerafadeoutcomplete"` with `once`, then call `fadeIn(400, 0, 0, 0)`.',
            r'this\.cameras\.main\.once\(\s*["\']camerafadeoutcomplete["\']\s*,\s*\(\s*\)\s*=>\s*\{\s*this\.cameras\.main\.fadeIn\(\s*400\s*,\s*0\s*,\s*0\s*,\s*0\s*\)',
        ),
    ],
    seed_text=seed_insert(solutions[14], FLASH_BUTTON),
    mutate=lambda: state.insert_after(FLASH_BUTTON, FADE_BUTTON),
)

# Step 16: zoom buttons + applyZoom (instant set).
step(
    16,
    title="Step 16",
    description=(
        "Zoom is the next knob. Define `this.applyZoom(target)` (which "
        "instant-sets the camera zoom and refreshes a label) and three "
        "buttons on the second row: `-`, the current value, and `+`. "
        "Clicking `+` calls `this.applyZoom(this.zoom + 0.2)`; `-` "
        "subtracts.\n\nAfter the fade button:\n\n"
        "```js\n"
        "this.zoom = 1;\n"
        "this.applyZoom = (target) => {\n"
        "  this.zoom = target;\n"
        "  this.cameras.main.setZoom(target);\n"
        '  this.zoomLabel.setLabel("Zoom: " + target.toFixed(1));\n'
        "};\n"
        'this.zoomLabel = this.makeButton(38, 24, "Zoom: 1.0", () => {});\n'
        'this.makeButton(4, 24, "-", () => this.applyZoom(this.zoom - 0.2));\n'
        'this.makeButton(92, 24, "+", () => this.applyZoom(this.zoom + 0.2));\n'
        "```"
    ),
    hints=[
        (
            "Initialise `this.zoom = 1`.",
            r"this\.zoom\s*=\s*1\s*;",
        ),
        (
            "Define `this.applyZoom = (target) => { ... }` that calls `this.cameras.main.setZoom(target)`.",
            r"this\.applyZoom\s*=\s*\(\s*target\s*\)\s*=>\s*\{[\s\S]*this\.cameras\.main\.setZoom\(\s*target\s*\)",
        ),
        (
            "`applyZoom` should update the zoom label via `this.zoomLabel.setLabel(\"Zoom: \" + target.toFixed(1))`.",
            r'this\.zoomLabel\.setLabel\(\s*["\']Zoom: ["\']\s*\+\s*target\.toFixed\(\s*1\s*\)\s*\)',
        ),
        (
            'Create the zoom label at `(38, 24)` reading `"Zoom: 1.0"`.',
            r'this\.zoomLabel\s*=\s*this\.makeButton\(\s*38\s*,\s*24\s*,\s*["\']Zoom: 1\.0["\']',
        ),
        (
            'Add the `-` and `+` buttons at `(4, 24)` and `(92, 24)`.',
            r'this\.makeButton\(\s*4\s*,\s*24\s*,\s*["\']-["\'][\s\S]*this\.makeButton\(\s*92\s*,\s*24\s*,\s*["\']\+["\']',
        ),
    ],
    seed_text=seed_insert(solutions[15], FADE_BUTTON),
    mutate=lambda: state.insert_after(FADE_BUTTON, ZOOM_BUTTONS),
)

# Step 17: zoom transitions via tween.
step(
    17,
    title="Step 17",
    description=(
        "Instant zoom feels jarring. Replace `applyZoom`'s body so it "
        "tweens the camera zoom over 400 ms with a soft Sine ease — same "
        "result, much smoother feel.\n\nReplace the `this.applyZoom` "
        "definition:\n\n"
        "```js\n"
        "this.zoom = 1;\n"
        "this.applyZoom = (target) => {\n"
        "  this.zoom = target;\n"
        "  this.tweens.add({\n"
        "    targets: this.cameras.main,\n"
        "    zoom: target,\n"
        "    duration: 400,\n"
        '    ease: "Sine.InOut"\n'
        "  });\n"
        '  this.zoomLabel.setLabel("Zoom: " + target.toFixed(1));\n'
        "};\n"
        "```\n\nThe `+` and `-` buttons keep working — they call "
        "`applyZoom`, and `applyZoom` now tweens instead of snapping."
    ),
    hints=[
        (
            "Replace `applyZoom`'s body to call `this.tweens.add({ targets: this.cameras.main, zoom: target, ... })`.",
            r"this\.tweens\.add\(\s*\{\s*targets:\s*this\.cameras\.main\s*,\s*zoom:\s*target\s*,",
        ),
        (
            "Use a 400 ms duration and `\"Sine.InOut\"` ease.",
            r'duration:\s*400\s*,\s*ease:\s*["\']Sine\.InOut["\']',
        ),
        (
            "`setZoom` should no longer be called inside `applyZoom`.",
            r"this\.applyZoom\s*=\s*\(\s*target\s*\)\s*=>\s*\{(?:(?!this\.cameras\.main\.setZoom)[\s\S])*?this\.zoomLabel\.setLabel",
        ),
    ],
    seed_text=seed_wrap(
        solutions[16],
        "    this.zoom = 1;\n"
        "    this.applyZoom = (target) => {\n"
        "      this.zoom = target;\n"
        "      this.cameras.main.setZoom(target);\n"
        '      this.zoomLabel.setLabel("Zoom: " + target.toFixed(1));\n'
        "    };\n",
    ),
    mutate=lambda: state.replace(
        "    this.zoom = 1;\n"
        "    this.applyZoom = (target) => {\n"
        "      this.zoom = target;\n"
        "      this.cameras.main.setZoom(target);\n"
        '      this.zoomLabel.setLabel("Zoom: " + target.toFixed(1));\n'
        "    };\n",
        ZOOM_TWEEN_REPLACEMENT,
    ),
)


# Step 18: minimap camera.
step(
    18,
    title="Step 18",
    description=(
        "A second camera, fixed to the bottom-right of the canvas, gives "
        "the player a minimap. Phaser supports multiple cameras "
        "natively — `this.cameras.add(x, y, width, height)` returns a "
        "second camera that renders the same scene to its own viewport. "
        "Bind its bounds to the world, give it a dark background, and "
        "follow the player.\n\nAfter the zoom buttons:\n\n"
        "```js\n"
        "this.minimap = this.cameras.add(340, 256, 130, 60);\n"
        "this.minimap.setBounds(0, 0, 4000, 600);\n"
        "this.minimap.setBackgroundColor(0x111133);\n"
        "this.minimap.startFollow(this.player);\n"
        "```\n\nIt looks wrong right now: the minimap is at full zoom, "
        "showing nothing useful. Step 19 fixes that."
    ),
    hints=[
        (
            "Create the minimap with `this.cameras.add(340, 256, 130, 60)`.",
            r"this\.minimap\s*=\s*this\.cameras\.add\(\s*340\s*,\s*256\s*,\s*130\s*,\s*60\s*\)",
        ),
        (
            "Bind its bounds to the world: `this.minimap.setBounds(0, 0, 4000, 600)`.",
            r"this\.minimap\.setBounds\(\s*0\s*,\s*0\s*,\s*4000\s*,\s*600\s*\)",
        ),
        (
            "Give the minimap a dark background via `setBackgroundColor(0x111133)`.",
            r"this\.minimap\.setBackgroundColor\(\s*0x111133\s*\)",
        ),
        (
            "Tell the minimap to follow the player.",
            r"this\.minimap\.startFollow\(\s*this\.player\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[17], ZOOM_TWEEN_REPLACEMENT),
    mutate=lambda: state.insert_after(ZOOM_TWEEN_REPLACEMENT, MINIMAP_INIT),
)

# Step 19: minimap zoom + ignore.
step(
    19,
    title="Step 19",
    description=(
        "The minimap should be a tiny overview, not a full-zoom second "
        "view. Set its zoom to `0.06` (each world pixel renders as 0.06 "
        "minimap pixels) and tell it to ignore the UI layer and the player "
        "rectangle — the player is too small to see at this zoom anyway "
        "(step 20 adds a visible marker).\n\nAfter the minimap "
        "init:\n\n"
        "```js\n"
        "this.minimap.setZoom(0.06);\n"
        "this.minimap.ignore([this.uiLayer, this.player]);\n"
        "```"
    ),
    hints=[
        (
            "Call `this.minimap.setZoom(0.06)`.",
            r"this\.minimap\.setZoom\(\s*0\.06\s*\)",
        ),
        (
            "Call `this.minimap.ignore([this.uiLayer, this.player])`.",
            r"this\.minimap\.ignore\(\s*\[\s*this\.uiLayer\s*,\s*this\.player\s*\]\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[18], MINIMAP_INIT),
    mutate=lambda: state.insert_after(MINIMAP_INIT, MINIMAP_IGNORE_BLOCK),
)

# Step 20: marker on minimap (lazy-init in update).
step(
    20,
    title="Step 20",
    description=(
        "The player vanishes on the minimap because at zoom `0.06` a "
        "16-pixel rectangle renders at less than 1 pixel. The fix: a "
        "second sprite — large in world coordinates so it's visible at "
        "minimap zoom — that the *main* camera ignores so it never shows "
        "on the gameplay view. Mirror its position to the player every "
        "frame.\n\nLazy-init it inside `MainScene.update` so the "
        "creation and the per-frame position update sit together:\n\n"
        "```js\n"
        "if (!this.marker) {\n"
        "  this.marker = this.add\n"
        "    .rectangle(this.player.x, this.player.y, 80, 80, 0xffff66, 1)\n"
        "    .setDepth(70);\n"
        "  this.cameras.main.ignore(this.marker);\n"
        "}\n"
        "this.marker.setPosition(this.player.x, this.player.y);\n"
        "```\n\nThe yellow dot now travels across the minimap as the "
        "player moves."
    ),
    hints=[
        (
            "Lazy-create `this.marker` as an 80×80 yellow rectangle at the player's position.",
            r"if\s*\(\s*!\s*this\.marker\s*\)[\s\S]*this\.marker\s*=\s*this\.add\s*\.rectangle\(\s*this\.player\.x\s*,\s*this\.player\.y\s*,\s*80\s*,\s*80\s*,\s*0xffff66\s*,\s*1\s*\)",
        ),
        (
            "The marker should sit at depth 70.",
            r"this\.marker[\s\S]*\.setDepth\(\s*70\s*\)",
        ),
        (
            "Tell the *main* camera to ignore the marker so it only appears on the minimap.",
            r"this\.cameras\.main\.ignore\(\s*this\.marker\s*\)",
        ),
        (
            "Each frame, mirror the marker to the player with `this.marker.setPosition(this.player.x, this.player.y)`.",
            r"this\.marker\.setPosition\(\s*this\.player\.x\s*,\s*this\.player\.y\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[19], MOVEMENT_BLOCK),
    mutate=lambda: state.insert_after(MOVEMENT_BLOCK, MARKER_LAZY_BLOCK),
)

# Step 21: background color toggle.
step(
    21,
    title="Step 21",
    description=(
        "Add a `BG` button on the top row that cycles the camera's "
        "background colour through four palettes — useful for "
        "previewing how the world reads against different vignettes.\n\n"
        "After the deadzone-viz block (and before the shake or anywhere "
        "in the UI block — its order on the top row only matters "
        "visually). Insert it right after the deadzone visualizer for "
        "easy reading:\n\n"
        "```js\n"
        "this.bgIndex = 0;\n"
        "const bgColors = [0x101020, 0x1f3030, 0x2a1a3a, 0x000000];\n"
        'this.makeButton(274, 4, "BG", () => {\n'
        "  this.bgIndex = (this.bgIndex + 1) % bgColors.length;\n"
        "  this.cameras.main.setBackgroundColor(bgColors[this.bgIndex]);\n"
        "});\n"
        "```"
    ),
    hints=[
        (
            "Initialise `this.bgIndex = 0` and a `bgColors` array of four hex values.",
            r"this\.bgIndex\s*=\s*0[\s\S]*const\s+bgColors\s*=\s*\[\s*0x101020\s*,\s*0x1f3030\s*,\s*0x2a1a3a\s*,\s*0x000000\s*\]",
        ),
        (
            'Add a `BG` button at `(274, 4)`.',
            r'this\.makeButton\(\s*274\s*,\s*4\s*,\s*["\']BG["\']',
        ),
        (
            "The handler should advance `bgIndex` modulo `bgColors.length` and call `this.cameras.main.setBackgroundColor(bgColors[this.bgIndex])`.",
            r"this\.bgIndex\s*=\s*\(\s*this\.bgIndex\s*\+\s*1\s*\)\s*%\s*bgColors\.length[\s\S]*this\.cameras\.main\.setBackgroundColor\(\s*bgColors\[\s*this\.bgIndex\s*\]\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[20], DEADZONE_VIZ),
    mutate=lambda: state.insert_after(DEADZONE_VIZ, BG_BUTTON),
)

# Step 22: motion-reduced toggle (in-memory only).
step(
    22,
    title="Step 22",
    description=(
        "Time to honour accessibility. Add a `Motion: on` button that "
        "toggles `this.reduceMotion`. Once flipped, the existing shake, "
        "flash, and fade handlers (already gated on `this.reduceMotion`) "
        "silently no-op.\n\nAfter the BG button:\n\n"
        "```js\n"
        "this.reduceMotion = false;\n"
        "this.reduceBtn = this.makeButton(\n"
        "  328,\n"
        "  4,\n"
        '  "Motion: on",\n'
        "  () => {\n"
        "    this.reduceMotion = !this.reduceMotion;\n"
        "    this.reduceBtn.setLabel(\n"
        '      this.reduceMotion ? "Motion: off" : "Motion: on"\n'
        "    );\n"
        "  }\n"
        ");\n"
        "```\n\nClick `Motion: on` then `Shake` — the camera no longer "
        "shakes. Same for `Flash` and `Fade`."
    ),
    hints=[
        (
            "Initialise `this.reduceMotion = false`.",
            r"this\.reduceMotion\s*=\s*false",
        ),
        (
            'Add a `Motion: on` button at `(328, 4)` stored on `this.reduceBtn`.',
            r'this\.reduceBtn\s*=\s*this\.makeButton\(\s*328\s*,\s*4\s*,\s*["\']Motion: on["\']',
        ),
        (
            "The handler should flip `this.reduceMotion` and update the label between `\"Motion: on\"` and `\"Motion: off\"`.",
            r"this\.reduceMotion\s*=\s*!\s*this\.reduceMotion[\s\S]*this\.reduceBtn\.setLabel\([\s\S]*this\.reduceMotion\s*\?\s*[\"\']Motion: off[\"\']\s*:\s*[\"\']Motion: on[\"\']",
        ),
    ],
    seed_text=seed_insert(solutions[21], BG_BUTTON),
    mutate=lambda: state.insert_after(BG_BUTTON, REDUCE_BUTTON_INMEM),
)

# Step 23: persist motion-reduced to localStorage.
step(
    23,
    title="Step 23",
    description=(
        "Toggling reduce-motion on every reload is annoying. Persist it "
        "to `localStorage` and read the saved value at scene "
        "create-time.\n\nReplace the entire reduce-motion block — both "
        "the initial-value line and the button definition. The new "
        "version reads the persisted value, sets the initial label "
        "accordingly, and writes back on every toggle.\n\n"
        "```js\n"
        'this.reduceMotion = localStorage.getItem("cam:reduce") === "true";\n'
        "this.reduceBtn = this.makeButton(\n"
        "  328,\n"
        "  4,\n"
        '  this.reduceMotion ? "Motion: off" : "Motion: on",\n'
        "  () => {\n"
        "    this.reduceMotion = !this.reduceMotion;\n"
        '    localStorage.setItem("cam:reduce", String(this.reduceMotion));\n'
        "    this.reduceBtn.setLabel(\n"
        '      this.reduceMotion ? "Motion: off" : "Motion: on"\n'
        "    );\n"
        "  }\n"
        ");\n"
        "```\n\nReload the preview and the toggle remembers its state."
    ),
    hints=[
        (
            'Initialise `this.reduceMotion` from `localStorage.getItem("cam:reduce") === "true"`.',
            r'this\.reduceMotion\s*=\s*localStorage\.getItem\(\s*["\']cam:reduce["\']\s*\)\s*===\s*["\']true["\']',
        ),
        (
            'The initial label (third arg of `makeButton`) should depend on the persisted value: `this.reduceMotion ? "Motion: off" : "Motion: on"`.',
            r'makeButton\(\s*328\s*,\s*4\s*,\s*this\.reduceMotion\s*\?\s*["\']Motion: off["\']\s*:\s*["\']Motion: on["\']',
        ),
        (
            'The handler should call `localStorage.setItem("cam:reduce", String(this.reduceMotion))`.',
            r'localStorage\.setItem\(\s*["\']cam:reduce["\']\s*,\s*String\(\s*this\.reduceMotion\s*\)\s*\)',
        ),
    ],
    seed_text=seed_wrap(solutions[22], REDUCE_BUTTON_INMEM),
    mutate=lambda: state.replace(REDUCE_BUTTON_INMEM, REDUCE_BUTTON_PERSIST),
)

# Step 24: honor prefers-reduced-motion media query.
step(
    24,
    title="Step 24",
    description=(
        "Even better: honour the operating-system-level "
        "`prefers-reduced-motion` setting. If the user has enabled it in "
        "their OS, treat reduce-motion as on by default — without "
        "requiring them to flip the toggle. Combine the persisted value "
        "with the media query (logical OR).\n\nReplace the single "
        "`this.reduceMotion = ...` line:\n\n"
        "```js\n"
        'const persisted = localStorage.getItem("cam:reduce") === "true";\n'
        'const mediaPref = window.matchMedia("(prefers-reduced-motion: reduce)").matches;\n'
        "this.reduceMotion = persisted || mediaPref;\n"
        "```\n\nIf either source says yes, the camera stays calm."
    ),
    hints=[
        (
            'Read the persisted value into a `persisted` constant.',
            r'const\s+persisted\s*=\s*localStorage\.getItem\(\s*["\']cam:reduce["\']\s*\)\s*===\s*["\']true["\']',
        ),
        (
            'Read the OS preference via `window.matchMedia("(prefers-reduced-motion: reduce)").matches`.',
            r'const\s+mediaPref\s*=\s*window\.matchMedia\(\s*["\']\(\s*prefers-reduced-motion:\s*reduce\s*\)["\']\s*\)\.matches',
        ),
        (
            "OR the two values into `this.reduceMotion`.",
            r"this\.reduceMotion\s*=\s*persisted\s*\|\|\s*mediaPref",
        ),
    ],
    seed_text=seed_wrap(solutions[23], REDUCE_PERSIST_LINE),
    mutate=lambda: state.replace(REDUCE_PERSIST_LINE, REDUCE_MEDIA_BLOCK),
)

# Step 25: cleanup tweens on shutdown + clamp zoom.
step(
    25,
    title="Step 25",
    description=(
        "Final polish. Two changes, one editable region.\n\n"
        "1. Clamp `applyZoom`'s target so the player can't zoom beyond "
        "`[0.5, 2]` — at zoom 0.1 the world looks like an ant farm; at "
        "zoom 5 a single rectangle covers the screen. `Phaser.Math.Clamp` "
        "is the Phaser-idiomatic helper.\n"
        "2. Hook `\"shutdown\"` on the scene's events to kill all "
        "active tweens — including pending zoom tweens. Without this, "
        "restarting the scene leaves orphaned tweens running against a "
        "dead camera.\n\nReplace the `applyZoom` definition:\n\n"
        "```js\n"
        "this.applyZoom = (target) => {\n"
        "  const clamped = Phaser.Math.Clamp(target, 0.5, 2);\n"
        "  this.zoom = clamped;\n"
        "  this.tweens.add({\n"
        "    targets: this.cameras.main,\n"
        "    zoom: clamped,\n"
        "    duration: 400,\n"
        '    ease: "Sine.InOut"\n'
        "  });\n"
        '  this.zoomLabel.setLabel("Zoom: " + clamped.toFixed(1));\n'
        "};\n"
        'this.events.on("shutdown", () => this.tweens.killAll());\n'
        "```\n\nYou shipped a 25-step camera playground: cinematic "
        "follow, lerp, deadzone, world + camera bounds, screen shake "
        "with intensity steps, flash, fade, smooth zoom, minimap with "
        "a separate marker, background-colour cycling, and a "
        "`prefers-reduced-motion`-aware accessibility toggle. Sprint 13 "
        "takes these primitives and builds the endless runner workshop."
    ),
    hints=[
        (
            "Replace `applyZoom`'s body to clamp `target` with `Phaser.Math.Clamp(target, 0.5, 2)`.",
            r"const\s+clamped\s*=\s*Phaser\.Math\.Clamp\(\s*target\s*,\s*0\.5\s*,\s*2\s*\)",
        ),
        (
            "The tween should use `clamped` as the target zoom.",
            r"this\.tweens\.add\(\s*\{[\s\S]*targets:\s*this\.cameras\.main\s*,\s*zoom:\s*clamped",
        ),
        (
            "The label should read `\"Zoom: \" + clamped.toFixed(1)`.",
            r'this\.zoomLabel\.setLabel\(\s*["\']Zoom: ["\']\s*\+\s*clamped\.toFixed\(\s*1\s*\)\s*\)',
        ),
        (
            "Hook `\"shutdown\"` and call `this.tweens.killAll()`.",
            r'this\.events\.on\(\s*["\']shutdown["\']\s*,\s*\(\s*\)\s*=>\s*this\.tweens\.killAll\(\s*\)\s*\)',
        ),
    ],
    seed_text=seed_wrap(solutions[24], ZOOM_TWEEN_BLOCK_FOR_WRAP),
    mutate=lambda: state.replace(ZOOM_TWEEN_BLOCK_FOR_WRAP, ZOOM_CLAMP_PLUS_SHUTDOWN),
)


import re as _re

_ANCHOR_LINE = _re.compile(
    r"^[ \t]*/\* (?:main-create|main-update) \*/\n",
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
        hint_blocks.append(
            f"{text}\n\n```js\nassert.match(code, /{safe}/);\n```\n"
        )
    hints_md = "\n".join(hint_blocks)
    seed_clean = strip_anchors(seeds[n])
    solutions_section = ""
    if n == len(solutions) - 1:
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
{solutions_section}""".replace(
        "```\n```", "```\n\n```"
    )


def main():
    import json as _json
    import tempfile

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for n in range(1, len(solutions)):
        hex_id = HEX_BASE.format(ID_OFFSET + n)
        path = OUT_DIR / f"{hex_id}.md"
        path.write_text(render_markdown(n), encoding="utf-8")

    debug_path = Path(tempfile.gettempdir()) / "fcc-camera-playground-solutions.json"
    debug_path.write_text(
        _json.dumps(
            [strip_anchors(s) if s is not None else "" for s in solutions]
        ),
        encoding="utf-8",
    )
    print(f"Wrote {len(solutions) - 1} step files (1..{len(solutions) - 1})")


if __name__ == "__main__":
    main()
