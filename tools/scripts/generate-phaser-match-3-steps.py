"""Generate workshop-match-3-puzzle step .md files (steps 1..50).

Sprint 17 / Chapter 8 Module 1: a tween-driven 8x8 match-3 puzzle. No
physics. Builds the grid, swap mechanic, match detection, cascade loop,
three special-gem rules, scoring, levels, post-FX, accessibility, audio,
mode select, and polish.

Constraints we honour:

* Exactly two ``--fcc-editable-region--`` markers per step.
* All references resolve at runtime.
* Each step's diff vs the previous step is a contiguous block we can wrap
  in a single editable region.

Architecture: arrow-function "methods" hang off ``this`` so any of them
(``swap``, ``findMatches``, ``cascade``, ``activateSpecial``...) can be
swapped in-place by replacing the entire closure. ``create()`` is split
into ordered anchor blocks:

    /* preload */ -> /* create-config */ -> /* create-grid */
      -> /* create-state */ -> /* create-input */
      -> /* create-methods */ -> /* create-fx */ -> /* create-music */
      -> /* create-cleanup */
    /* update-body */

Order matters: ``create-input`` registers event handlers that reference
``this.swap`` / ``this.cascade``; those methods are defined immediately
after in ``create-methods``. By the time a pointer event fires, all the
methods exist on ``this``.

Step layout (50 steps):

* 1-2:   bootstrap + grid config (constants, helpers).
* 3-4:   gem texture + 8x8 grid render with no-initial-match guard.
* 5:     pointer-down selection & adjacency check.
* 6-9:   swap tween + match detection + revert + scale-out destroy.
* 10-12: drop above-gems + spawn from top + cascade recursion.
* 13-15: score, HUD UIScene, combo counter.
* 16:    bonus combo score.
* 17-22: special gems: stripe, color-bomb, wrapped (creation + activation).
* 23:    creation flourish (chained tween + particle burst).
* 24-26: levels (objective, moves, win/lose end states).
* 27-29: GameOverScene + best-score persistence.
* 30-31: post-FX vignette + bloom on special creation.
* 32-33: prefers-reduced-motion damping + mobile drag input.
* 34-35: tutorial overlay + idle-hint pulses.
* 36-37: time-attack mode + TitleScene mode select.
* 38-39: audio cues + persistent SFX volume.
* 40:    pause menu.
* 41-49: polish (input lock, no-diagonal, recursion guard, pixel-perfect,
         resize, score animation, save/load, timer cleanup).
* 50:    final integration with 3-level progression.
"""

from __future__ import annotations

from pathlib import Path

OUT_DIR = (
    Path(__file__).resolve().parents[2]
    / "curriculum/challenges/english/blocks/workshop-match-3-puzzle"
)
HEX_BASE = "66faa800000000000000{:04x}"
ID_OFFSET = 0xA6  # step 1 -> 0xa7, step 50 -> 0xd8

REGION = "--fcc-editable-region--"


HTML = """\
```html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Match-3 Puzzle</title>
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
  background-color: #07071a;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

#game-container {
  box-shadow: 0 0 30px rgba(140, 90, 255, 0.4);
}

```
"""


def config_block(scene_list: str) -> str:
    return (
        "\n"
        "const config = {\n"
        "  type: Phaser.AUTO,\n"
        "  width: 800,\n"
        "  height: 600,\n"
        '  parent: "game-container",\n'
        '  backgroundColor: "#0a0a1a",\n'
        f"  scene: [{scene_list}]\n"
        "};\n\n"
        "new Phaser.Game(config);\n"
    )


CONFIG_MAIN_ONLY = config_block("MainScene")
CONFIG_WITH_UI = config_block("MainScene, UIScene")
CONFIG_WITH_GAMEOVER = config_block("MainScene, UIScene, GameOverScene")
CONFIG_WITH_TITLE = config_block(
    "TitleScene, MainScene, UIScene, GameOverScene"
)
CONFIG_FULL = config_block(
    "TitleScene, MainScene, UIScene, GameOverScene, PauseScene"
)


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
    /* create-config */
    /* create-grid */
    /* create-state */
    /* create-input */
    /* create-methods */
    /* create-fx */
    /* create-music */
    /* create-tutorial */
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


def _wrap_with_region(span: str) -> str:
    leading = ""
    inner = span
    while inner.startswith("\n"):
        leading += "\n"
        inner = inner[1:]
    return f"{leading}{REGION}\n{inner}{REGION}\n"


def seed_wrap(prev_solution: str, span: str) -> str:
    if prev_solution.count(span) != 1:
        raise SystemExit(
            f"seed wrap target not unique; got {prev_solution.count(span)}\n---\n{span!r}"
        )
    return prev_solution.replace(span, _wrap_with_region(span), 1)


def seed_wrap_multi(prev_solution: str, *spans: str) -> str:
    text = prev_solution
    for span in spans:
        if text.count(span) != 1:
            raise SystemExit(
                f"seed wrap multi: span not unique; got {text.count(span)}\n---\n{span!r}"
            )
        text = text.replace(span, _wrap_with_region(span), 1)
    return text


def seed_wrap_range(prev_solution: str, start_span: str, end_span: str) -> str:
    """Wrap one contiguous editable region from `start_span` start to
    `end_span` end. Workshop steps must have exactly one editable region;
    use this when several non-adjacent edits sit in the same file.
    """
    if prev_solution.count(start_span) != 1:
        raise SystemExit(
            f"seed wrap range: start not unique; got {prev_solution.count(start_span)}\n---\n{start_span!r}"
        )
    if prev_solution.count(end_span) != 1:
        raise SystemExit(
            f"seed wrap range: end not unique; got {prev_solution.count(end_span)}\n---\n{end_span!r}"
        )
    start_idx = prev_solution.find(start_span)
    end_idx = prev_solution.find(end_span) + len(end_span)
    if end_idx <= start_idx:
        raise SystemExit("seed wrap range: end appears before start")
    span = prev_solution[start_idx:end_idx]
    return seed_wrap(prev_solution, span)


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
# Step 1: empty MainScene shell.

STEP1_SEED = (
    f"{REGION}\n\n{REGION}\n\nconst config = {{\n"
    "  type: Phaser.AUTO,\n"
    "  width: 800,\n"
    "  height: 600,\n"
    '  parent: "game-container",\n'
    '  backgroundColor: "#0a0a1a",\n'
    "  scene: [MainScene]\n"
    "};\n\n"
    "new Phaser.Game(config);\n"
)

titles.append("Step 1")
descriptions.append(
    "Welcome to the match-3 puzzle workshop. Across 50 steps you'll build "
    "a complete match-3: an 8x8 grid of gem sprites, swap-and-cascade "
    "mechanics, three special-gem rules (stripe, color-bomb, wrapped), "
    "score, levels, time-attack mode, audio cues, post-FX bloom and "
    "vignette, a tutorial overlay, an idle hint system, mode select, "
    "pause menu, and `prefers-reduced-motion` damping.\n\nNo arcade "
    "physics this time - everything is tween-driven. You'll see why "
    "`tweens.chain` is the most important tool in your kit by the end of "
    "this workshop.\n\nStart with a `MainScene` extending `Phaser.Scene` "
    "with a constructor that calls `super(\"MainScene\")`, an empty "
    "`preload`, an empty `create`, and an `update(time, delta)`.\n\n"
    "```js\n"
    "class MainScene extends Phaser.Scene {\n"
    "  constructor() {\n"
    '    super("MainScene");\n'
    "  }\n\n"
    "  preload() {}\n\n"
    "  create() {}\n\n"
    "  update(time, delta) {}\n"
    "}\n```\n\n"
    "The 800x600 `config` is already wired in below."
)
hints_per_step.append(
    [
        (
            "Define `class MainScene extends Phaser.Scene`.",
            r"class\s+MainScene\s+extends\s+Phaser\.Scene",
        ),
        (
            'Call `super("MainScene")` from the constructor.',
            r'super\(\s*["\']MainScene["\']\s*\)',
        ),
        (
            "Define empty `preload()` and `create()` methods.",
            r"preload\s*\(\s*\)\s*\{[\s\S]*?\}\s*[\s\S]*create\s*\(\s*\)\s*\{[\s\S]*?\}",
        ),
        (
            "Define `update(time, delta)`.",
            r"update\s*\(\s*time\s*,\s*delta\s*\)\s*\{",
        ),
    ]
)
seeds.append(STEP1_SEED)


# -----------------------------------------------------------------------------
# Step 2: grid config (constants, gemX/gemY helpers, palette).

CONFIG_BLOCK_S2 = (
    "    this.cols = 8;\n"
    "    this.rows = 8;\n"
    "    this.cell = 56;\n"
    "    this.gridX = 400 - (this.cols * this.cell) / 2 + this.cell / 2;\n"
    "    this.gridY = 300 - (this.rows * this.cell) / 2 + this.cell / 2 + 30;\n"
    "    this.gemX = (col) => this.gridX + col * this.cell;\n"
    "    this.gemY = (row) => this.gridY + row * this.cell;\n"
    "    this.gemColors = [0xff4d6d, 0x4dadff, 0x6dff4d, 0xffd34d, 0xc14dff];\n"
)

step(
    2,
    title="Step 2",
    description=(
        "Match-3 needs a coordinate system. Inside `create`, define grid "
        "constants and two helpers for converting `(col, row)` pairs into "
        "screen pixels. The grid is `8x8` with `56`-pixel cells, centered "
        "horizontally and pushed `30px` down to leave room for HUD.\n\n"
        "After the `/* create-config */` comment, add:\n\n"
        "```js\n"
        "this.cols = 8;\n"
        "this.rows = 8;\n"
        "this.cell = 56;\n"
        "this.gridX = 400 - (this.cols * this.cell) / 2 + this.cell / 2;\n"
        "this.gridY = 300 - (this.rows * this.cell) / 2 + this.cell / 2 + 30;\n"
        "this.gemX = (col) => this.gridX + col * this.cell;\n"
        "this.gemY = (row) => this.gridY + row * this.cell;\n"
        "this.gemColors = [0xff4d6d, 0x4dadff, 0x6dff4d, 0xffd34d, 0xc14dff];\n"
        "```\n\n"
        "The five hex colors are the gem palette - red, blue, green, "
        "yellow, purple. We'll tint a single white `gem` texture five ways "
        "next step so we don't ship a separate sprite sheet."
    ),
    hints=[
        (
            "Set `this.cols = 8`, `this.rows = 8`, and `this.cell = 56`.",
            r"this\.cols\s*=\s*8[\s\S]*this\.rows\s*=\s*8[\s\S]*this\.cell\s*=\s*56",
        ),
        (
            "Center the grid: `this.gridX = 400 - (this.cols * this.cell) / 2 + this.cell / 2`.",
            r"this\.gridX\s*=\s*400\s*-\s*\(\s*this\.cols\s*\*\s*this\.cell\s*\)\s*/\s*2\s*\+\s*this\.cell\s*/\s*2",
        ),
        (
            "Define `this.gemX = (col) => this.gridX + col * this.cell`.",
            r"this\.gemX\s*=\s*\(\s*col\s*\)\s*=>\s*this\.gridX\s*\+\s*col\s*\*\s*this\.cell",
        ),
        (
            "Define `this.gemY = (row) => this.gridY + row * this.cell`.",
            r"this\.gemY\s*=\s*\(\s*row\s*\)\s*=>\s*this\.gridY\s*\+\s*row\s*\*\s*this\.cell",
        ),
        (
            "Define `this.gemColors` array with five hex colors.",
            r"this\.gemColors\s*=\s*\[\s*0x[0-9a-f]{6}\s*,\s*0x[0-9a-f]{6}\s*,\s*0x[0-9a-f]{6}\s*,\s*0x[0-9a-f]{6}\s*,\s*0x[0-9a-f]{6}\s*\]",
        ),
    ],
    seed_text=seed_insert(solutions[1], "/* create-config */\n"),
    mutate=lambda: state.insert_after("/* create-config */\n", CONFIG_BLOCK_S2),
)


# -----------------------------------------------------------------------------
# Step 3: render gem sprites - generate gem texture + 8x8 spawn loop.

GRID_BLOCK_S3 = (
    "    const g = this.add.graphics();\n"
    "    g.fillStyle(0xffffff, 1);\n"
    "    g.fillRoundedRect(0, 0, 48, 48, 10);\n"
    "    g.lineStyle(2, 0xffffff, 0.5);\n"
    "    g.strokeRoundedRect(0, 0, 48, 48, 10);\n"
    '    g.generateTexture("gem", 48, 48);\n'
    "    g.destroy();\n"
    "    this.gems = [];\n"
    "    this.gemTypes = [];\n"
    "    for (let r = 0; r < this.rows; r++) {\n"
    "      this.gems[r] = [];\n"
    "      this.gemTypes[r] = [];\n"
    "      for (let c = 0; c < this.cols; c++) {\n"
    "        const type = Phaser.Math.Between(0, this.gemColors.length - 1);\n"
    "        this.gemTypes[r][c] = type;\n"
    "        const sprite = this.add\n"
    '          .sprite(this.gemX(c), this.gemY(r), "gem")\n'
    "          .setTint(this.gemColors[type])\n"
    "          .setData({ row: r, col: c, type, special: null });\n"
    "        this.gems[r][c] = sprite;\n"
    "      }\n"
    "    }\n"
)

step(
    3,
    title="Step 3",
    description=(
        "Render the gems. First, draw a single white rounded-rectangle "
        "into a generated texture called `gem` - we tint it five different "
        "ways instead of shipping five sprite sheets. Then spawn an 8x8 "
        "grid of `gem` sprites, each with a random type and tint.\n\n"
        "After `/* create-grid */`, add:\n\n"
        "```js\n"
        "const g = this.add.graphics();\n"
        "g.fillStyle(0xffffff, 1);\n"
        "g.fillRoundedRect(0, 0, 48, 48, 10);\n"
        "g.lineStyle(2, 0xffffff, 0.5);\n"
        "g.strokeRoundedRect(0, 0, 48, 48, 10);\n"
        'g.generateTexture("gem", 48, 48);\n'
        "g.destroy();\n"
        "this.gems = [];\n"
        "this.gemTypes = [];\n"
        "for (let r = 0; r < this.rows; r++) {\n"
        "  this.gems[r] = [];\n"
        "  this.gemTypes[r] = [];\n"
        "  for (let c = 0; c < this.cols; c++) {\n"
        "    const type = Phaser.Math.Between(0, this.gemColors.length - 1);\n"
        "    this.gemTypes[r][c] = type;\n"
        "    const sprite = this.add\n"
        '      .sprite(this.gemX(c), this.gemY(r), "gem")\n'
        "      .setTint(this.gemColors[type])\n"
        "      .setData({ row: r, col: c, type, special: null });\n"
        "    this.gems[r][c] = sprite;\n"
        "  }\n"
        "}\n```\n\n"
        "Two side-effects worth noting: `setData({ row, col, type })` "
        "stashes grid coordinates on the sprite for later input handling, "
        "and `special: null` is a placeholder for stripe/color-bomb/wrapped "
        "tagging in step 17."
    ),
    hints=[
        (
            'Generate a `"gem"` texture with `g.generateTexture("gem", 48, 48)`.',
            r'g\.generateTexture\(\s*["\']gem["\']\s*,\s*48\s*,\s*48\s*\)',
        ),
        (
            "Initialize `this.gems = []` and `this.gemTypes = []`.",
            r"this\.gems\s*=\s*\[\s*\][\s\S]*this\.gemTypes\s*=\s*\[\s*\]",
        ),
        (
            "Loop `r` from 0 to `this.rows`.",
            r"for\s*\(\s*let\s+r\s*=\s*0\s*;\s*r\s*<\s*this\.rows\s*;\s*r\+\+\s*\)",
        ),
        (
            "Random type via `Phaser.Math.Between(0, this.gemColors.length - 1)`.",
            r"Phaser\.Math\.Between\(\s*0\s*,\s*this\.gemColors\.length\s*-\s*1\s*\)",
        ),
        (
            'Add a `"gem"` sprite at `this.gemX(c), this.gemY(r)` and `setTint(this.gemColors[type])`.',
            r'this\.add\s*\.\s*sprite\(\s*this\.gemX\(c\)\s*,\s*this\.gemY\(r\)\s*,\s*["\']gem["\']\s*\)[\s\S]*setTint\(\s*this\.gemColors\[type\]\s*\)',
        ),
        (
            "Stash grid coords with `.setData({ row: r, col: c, type, special: null })`.",
            r"setData\(\s*\{\s*row:\s*r\s*,\s*col:\s*c\s*,\s*type\s*,\s*special:\s*null\s*\}\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[2], "/* create-grid */\n"),
    mutate=lambda: state.insert_after("/* create-grid */\n", GRID_BLOCK_S3),
)


# -----------------------------------------------------------------------------
# Step 4: no-initial-match guard - replace inner type pick with a do-while.

INNER_PICK_S3 = (
    "        const type = Phaser.Math.Between(0, this.gemColors.length - 1);\n"
    "        this.gemTypes[r][c] = type;\n"
)

INNER_PICK_S4 = (
    "        let type;\n"
    "        do {\n"
    "          type = Phaser.Math.Between(0, this.gemColors.length - 1);\n"
    "        } while (\n"
    "          (c >= 2 &&\n"
    "            this.gemTypes[r][c - 1] === type &&\n"
    "            this.gemTypes[r][c - 2] === type) ||\n"
    "          (r >= 2 &&\n"
    "            this.gemTypes[r - 1][c] === type &&\n"
    "            this.gemTypes[r - 2][c] === type)\n"
    "        );\n"
    "        this.gemTypes[r][c] = type;\n"
)

step(
    4,
    title="Step 4",
    description=(
        "If the random fill creates a 3-in-a-row, the player sees matches "
        "vanish before they can move - boring start. Reroll the type when "
        "placing it would complete a 3-in-a-row to the left or above.\n\n"
        "Replace the random type pick:\n\n"
        "```js\n"
        "let type;\n"
        "do {\n"
        "  type = Phaser.Math.Between(0, this.gemColors.length - 1);\n"
        "} while (\n"
        "  (c >= 2 &&\n"
        "    this.gemTypes[r][c - 1] === type &&\n"
        "    this.gemTypes[r][c - 2] === type) ||\n"
        "  (r >= 2 &&\n"
        "    this.gemTypes[r - 1][c] === type &&\n"
        "    this.gemTypes[r - 2][c] === type)\n"
        ");\n"
        "this.gemTypes[r][c] = type;\n```\n\n"
        "The two `(c >= 2 ...)` and `(r >= 2 ...)` clauses check the two "
        "previous gems in this row/column. If both already match the "
        "candidate type, we'd be the third in a row - reroll. With 5 "
        "colors, the average expected reroll count is ~0.04, so this loop "
        "terminates fast."
    ),
    hints=[
        (
            "Replace `const type = ...` with `let type; do { ... } while (...);`.",
            r"do\s*\{\s*type\s*=\s*Phaser\.Math\.Between\(\s*0\s*,\s*this\.gemColors\.length\s*-\s*1\s*\)",
        ),
        (
            "Guard horizontal: `c >= 2 && this.gemTypes[r][c - 1] === type && this.gemTypes[r][c - 2] === type`.",
            r"c\s*>=\s*2\s*&&\s*this\.gemTypes\[r\]\[c\s*-\s*1\]\s*===\s*type\s*&&\s*this\.gemTypes\[r\]\[c\s*-\s*2\]\s*===\s*type",
        ),
        (
            "Guard vertical: `r >= 2 && this.gemTypes[r - 1][c] === type && this.gemTypes[r - 2][c] === type`.",
            r"r\s*>=\s*2\s*&&\s*this\.gemTypes\[r\s*-\s*1\]\[c\]\s*===\s*type\s*&&\s*this\.gemTypes\[r\s*-\s*2\]\[c\]\s*===\s*type",
        ),
    ],
    seed_text=seed_wrap(solutions[3], INNER_PICK_S3),
    mutate=lambda: state.replace(INNER_PICK_S3, INNER_PICK_S4),
)


# -----------------------------------------------------------------------------
# Step 5: pointer-down selection + adjacency check (calls this.swap, defined
# next step).

INPUT_BLOCK_S5 = (
    "    this.busy = false;\n"
    "    this.selected = null;\n"
    "    for (let r = 0; r < this.rows; r++) {\n"
    "      for (let c = 0; c < this.cols; c++) {\n"
    "        this.gems[r][c].setInteractive();\n"
    "      }\n"
    "    }\n"
    '    this.input.on("gameobjectdown", (pointer, gem) => {\n'
    "      if (this.busy) return;\n"
    "      if (!this.selected) {\n"
    "        this.selected = gem;\n"
    "        this.tweens.add({\n"
    "          targets: gem,\n"
    "          scale: 1.15,\n"
    "          duration: 120,\n"
    '          ease: "Cubic.easeOut"\n'
    "        });\n"
    "        return;\n"
    "      }\n"
    "      this.tweens.add({ targets: this.selected, scale: 1, duration: 120 });\n"
    "      const prev = this.selected;\n"
    "      this.selected = null;\n"
    "      if (gem === prev) return;\n"
    '      const dr = Math.abs(gem.getData("row") - prev.getData("row"));\n'
    '      const dc = Math.abs(gem.getData("col") - prev.getData("col"));\n'
    "      if (dr + dc !== 1) return;\n"
    '      const a = { row: prev.getData("row"), col: prev.getData("col") };\n'
    '      const b = { row: gem.getData("row"), col: gem.getData("col") };\n'
    "      this.swap(a, b);\n"
    "    });\n"
)

step(
    5,
    title="Step 5",
    description=(
        "Time to give the player input. Tapping a gem selects it (scale "
        "1.15 pop). Tapping a second gem either deselects (same gem), "
        "rejects (non-adjacent), or requests a swap (cardinal adjacent). "
        "Diagonal taps don't count - only horizontal/vertical neighbors.\n\n"
        "After `/* create-input */`, add:\n\n"
        "```js\n"
        "this.busy = false;\n"
        "this.selected = null;\n"
        "for (let r = 0; r < this.rows; r++) {\n"
        "  for (let c = 0; c < this.cols; c++) {\n"
        "    this.gems[r][c].setInteractive();\n"
        "  }\n"
        "}\n"
        'this.input.on("gameobjectdown", (pointer, gem) => {\n'
        "  if (this.busy) return;\n"
        "  if (!this.selected) {\n"
        "    this.selected = gem;\n"
        "    this.tweens.add({\n"
        "      targets: gem,\n"
        "      scale: 1.15,\n"
        "      duration: 120,\n"
        '      ease: "Cubic.easeOut"\n'
        "    });\n"
        "    return;\n"
        "  }\n"
        "  this.tweens.add({ targets: this.selected, scale: 1, duration: 120 });\n"
        "  const prev = this.selected;\n"
        "  this.selected = null;\n"
        "  if (gem === prev) return;\n"
        '  const dr = Math.abs(gem.getData("row") - prev.getData("row"));\n'
        '  const dc = Math.abs(gem.getData("col") - prev.getData("col"));\n'
        "  if (dr + dc !== 1) return;\n"
        '  const a = { row: prev.getData("row"), col: prev.getData("col") };\n'
        '  const b = { row: gem.getData("row"), col: gem.getData("col") };\n'
        "  this.swap(a, b);\n"
        "});\n```\n\n"
        "`this.swap` doesn't exist yet - we'll define it next step. "
        "JavaScript event handlers don't fire until after `create()` "
        "returns, so this works as long as `this.swap` is defined "
        "*somewhere* in `create()` before the first pointer event arrives."
    ),
    hints=[
        (
            "Initialize `this.busy = false` and `this.selected = null`.",
            r"this\.busy\s*=\s*false[\s\S]*this\.selected\s*=\s*null",
        ),
        (
            "Loop `gem.setInteractive()` over every grid cell.",
            r"this\.gems\[r\]\[c\]\.setInteractive\(\s*\)",
        ),
        (
            'Listen for `"gameobjectdown"` on `this.input`.',
            r'this\.input\.on\(\s*["\']gameobjectdown["\']\s*,\s*\(\s*pointer\s*,\s*gem\s*\)\s*=>',
        ),
        (
            "Pop the first selection with `tweens.add({ targets: gem, scale: 1.15 })`.",
            r"targets:\s*gem\s*,\s*scale:\s*1\.15",
        ),
        (
            "Reject non-adjacent taps with `if (dr + dc !== 1) return;`.",
            r"if\s*\(\s*dr\s*\+\s*dc\s*!==\s*1\s*\)\s*return",
        ),
        (
            "Call `this.swap(a, b)` on cardinal-adjacent taps.",
            r"this\.swap\(\s*a\s*,\s*b\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[4], "/* create-input */\n"),
    mutate=lambda: state.insert_after("/* create-input */\n", INPUT_BLOCK_S5),
)


# -----------------------------------------------------------------------------
# Helpers for incremental method definitions.

def swap_closure(body: str) -> str:
    return (
        "    this.swap = (a, b) => {\n"
        f"{body}"
        "    };\n"
    )


def find_matches_closure(body: str) -> str:
    return (
        "    this.findMatches = () => {\n"
        f"{body}"
        "    };\n"
    )


def cascade_closure(body: str) -> str:
    return (
        "    this.cascade = (matches, depth) => {\n"
        f"{body}"
        "    };\n"
    )


# Reusable swap PRELUDE that swaps grid + sprite refs immediately.
SWAP_PRELUDE = (
    "      if (this.busy) return;\n"
    "      this.busy = true;\n"
    "      const sA = this.gems[a.row][a.col];\n"
    "      const sB = this.gems[b.row][b.col];\n"
    "      const tA = this.gemTypes[a.row][a.col];\n"
    "      const tB = this.gemTypes[b.row][b.col];\n"
    "      this.gemTypes[a.row][a.col] = tB;\n"
    "      this.gemTypes[b.row][b.col] = tA;\n"
    "      this.gems[a.row][a.col] = sB;\n"
    "      this.gems[b.row][b.col] = sA;\n"
    "      sA.setData({ row: b.row, col: b.col, type: tA, special: sA.getData(\"special\") });\n"
    "      sB.setData({ row: a.row, col: a.col, type: tB, special: sB.getData(\"special\") });\n"
)

# -----------------------------------------------------------------------------
# Step 6: basic swap closure (position tween only, no match check).

SWAP_BODY_S6 = (
    SWAP_PRELUDE
    + "      this.tweens.add({\n"
      "        targets: sA,\n"
      "        x: this.gemX(b.col),\n"
      "        y: this.gemY(b.row),\n"
      "        duration: 200,\n"
      '        ease: "Cubic.easeOut"\n'
      "      });\n"
      "      this.tweens.add({\n"
      "        targets: sB,\n"
      "        x: this.gemX(a.col),\n"
      "        y: this.gemY(a.row),\n"
      "        duration: 200,\n"
      '        ease: "Cubic.easeOut",\n'
      "        onComplete: () => {\n"
      "          this.busy = false;\n"
      "        }\n"
      "      });\n"
)

step(
    6,
    title="Step 6",
    description=(
        "Define `this.swap` - the closure that animates two adjacent gems "
        "swapping positions. The state swap is immediate (we update "
        "`gemTypes` and `gems` arrays and the `setData` row/col tags) so "
        "subsequent logic sees the post-swap world. The tween only handles "
        "the visual interpolation.\n\n"
        "After `/* create-methods */`, add:\n\n"
        "```js\n"
        + swap_closure(SWAP_BODY_S6)
        + "```\n\n"
        "`if (this.busy) return;` is the input lock - while a tween is "
        "running, additional swap requests are dropped. The lock releases "
        "in `onComplete`. Two parallel tweens (one per gem) are simpler "
        "than a chain because both stages are identical durations."
    ),
    hints=[
        (
            "Define `this.swap = (a, b) => { ... };` on the scene.",
            r"this\.swap\s*=\s*\(\s*a\s*,\s*b\s*\)\s*=>",
        ),
        (
            "Bail with `if (this.busy) return;` before locking.",
            r"if\s*\(\s*this\.busy\s*\)\s*return\s*;\s*this\.busy\s*=\s*true",
        ),
        (
            "Swap `this.gemTypes[a.row][a.col]` with `this.gemTypes[b.row][b.col]`.",
            r"this\.gemTypes\[a\.row\]\[a\.col\]\s*=\s*tB[\s\S]*this\.gemTypes\[b\.row\]\[b\.col\]\s*=\s*tA",
        ),
        (
            "Tween sA toward `this.gemX(b.col), this.gemY(b.row)` over 200ms.",
            r"targets:\s*sA[\s\S]*x:\s*this\.gemX\(b\.col\)[\s\S]*y:\s*this\.gemY\(b\.row\)[\s\S]*duration:\s*200",
        ),
        (
            "Release the input lock from sB's `onComplete`.",
            r"onComplete:\s*\(\s*\)\s*=>\s*\{\s*this\.busy\s*=\s*false\s*;",
        ),
    ],
    seed_text=seed_insert(solutions[5], "/* create-methods */\n"),
    mutate=lambda: state.insert_after(
        "/* create-methods */\n", swap_closure(SWAP_BODY_S6)
    ),
)


# -----------------------------------------------------------------------------
# Step 7: findMatches helper + swap calls findMatches in onComplete.

FIND_MATCHES_BODY_S7 = (
    "      const matched = new Set();\n"
    "      for (let r = 0; r < this.rows; r++) {\n"
    "        let runStart = 0;\n"
    "        let runType = this.gemTypes[r][0];\n"
    "        for (let c = 1; c <= this.cols; c++) {\n"
    "          const t = c < this.cols ? this.gemTypes[r][c] : -2;\n"
    "          if (t === runType && runType >= 0) continue;\n"
    "          if (c - runStart >= 3 && runType >= 0) {\n"
    "            for (let k = runStart; k < c; k++) matched.add(`${r},${k}`);\n"
    "          }\n"
    "          runStart = c;\n"
    "          runType = t;\n"
    "        }\n"
    "      }\n"
    "      for (let c = 0; c < this.cols; c++) {\n"
    "        let runStart = 0;\n"
    "        let runType = this.gemTypes[0][c];\n"
    "        for (let r = 1; r <= this.rows; r++) {\n"
    "          const t = r < this.rows ? this.gemTypes[r][c] : -2;\n"
    "          if (t === runType && runType >= 0) continue;\n"
    "          if (r - runStart >= 3 && runType >= 0) {\n"
    "            for (let k = runStart; k < r; k++) matched.add(`${k},${c}`);\n"
    "          }\n"
    "          runStart = r;\n"
    "          runType = t;\n"
    "        }\n"
    "      }\n"
    "      return [...matched].map((s) => {\n"
    '        const [row, col] = s.split(",").map(Number);\n'
    "        return { row, col };\n"
    "      });\n"
)

# Step 7 swap: same prelude but onComplete now consults findMatches.
SWAP_BODY_S7 = (
    SWAP_PRELUDE
    + "      this.tweens.add({\n"
      "        targets: sA,\n"
      "        x: this.gemX(b.col),\n"
      "        y: this.gemY(b.row),\n"
      "        duration: 200,\n"
      '        ease: "Cubic.easeOut"\n'
      "      });\n"
      "      this.tweens.add({\n"
      "        targets: sB,\n"
      "        x: this.gemX(a.col),\n"
      "        y: this.gemY(a.row),\n"
      "        duration: 200,\n"
      '        ease: "Cubic.easeOut",\n'
      "        onComplete: () => {\n"
      "          const matches = this.findMatches();\n"
      "          if (matches.length === 0) {\n"
      "            this.busy = false;\n"
      "          } else {\n"
      "            this.busy = false;\n"
      "          }\n"
      "        }\n"
      "      });\n"
)

step(
    7,
    title="Step 7",
    description=(
        "After a swap settles you need to know if it triggered a match. "
        "Add `this.findMatches` - a sweep that returns every grid cell "
        "that's part of a 3+-in-a-row run. Then update `swap`'s "
        "`onComplete` to call it.\n\n"
        "Insert *before* `this.swap` in `/* create-methods */`:\n\n"
        "```js\n"
        + find_matches_closure(FIND_MATCHES_BODY_S7)
        + "```\n\n"
        "And replace the `onComplete` body in `swap`:\n\n"
        "```js\n"
        "onComplete: () => {\n"
        "  const matches = this.findMatches();\n"
        "  if (matches.length === 0) {\n"
        "    this.busy = false;\n"
        "  } else {\n"
        "    this.busy = false;\n"
        "  }\n"
        "}\n```\n\n"
        "We use a sentinel run-type of `-2` past the array end so the "
        "final group flushes correctly. Both branches release `this.busy` "
        "for now - we'll wire revert (no match) and cascade (match) in "
        "the next two steps."
    ),
    hints=[
        (
            "Define `this.findMatches = () => { ... };`.",
            r"this\.findMatches\s*=\s*\(\s*\)\s*=>",
        ),
        (
            "Use a `Set` keyed by `${r},${c}` strings to dedupe horizontal/vertical hits.",
            r"const\s+matched\s*=\s*new\s+Set\(\s*\)",
        ),
        (
            "Loop columns inside the row sweep and detect runs of length >= 3.",
            r"if\s*\(\s*c\s*-\s*runStart\s*>=\s*3\s*&&\s*runType\s*>=\s*0\s*\)",
        ),
        (
            "Return an array of `{ row, col }` objects.",
            r"return\s*\[\s*\.\.\.matched\s*\]\s*\.map\(",
        ),
        (
            "Have `swap`'s `onComplete` call `this.findMatches()`.",
            r"onComplete:\s*\(\s*\)\s*=>\s*\{\s*const\s+matches\s*=\s*this\.findMatches\(\s*\)",
        ),
    ],
    seed_text=seed_wrap(solutions[6], swap_closure(SWAP_BODY_S6)),
    mutate=lambda: state.replace(
        swap_closure(SWAP_BODY_S6),
        find_matches_closure(FIND_MATCHES_BODY_S7) + swap_closure(SWAP_BODY_S7),
    ),
)


# -----------------------------------------------------------------------------
# Step 8: revert tween if no matches.

SWAP_BODY_S8 = (
    SWAP_PRELUDE
    + "      this.tweens.add({\n"
      "        targets: sA,\n"
      "        x: this.gemX(b.col),\n"
      "        y: this.gemY(b.row),\n"
      "        duration: 200,\n"
      '        ease: "Cubic.easeOut"\n'
      "      });\n"
      "      this.tweens.add({\n"
      "        targets: sB,\n"
      "        x: this.gemX(a.col),\n"
      "        y: this.gemY(a.row),\n"
      "        duration: 200,\n"
      '        ease: "Cubic.easeOut",\n'
      "        onComplete: () => {\n"
      "          const matches = this.findMatches();\n"
      "          if (matches.length === 0) {\n"
      "            this.gemTypes[a.row][a.col] = tA;\n"
      "            this.gemTypes[b.row][b.col] = tB;\n"
      "            this.gems[a.row][a.col] = sA;\n"
      "            this.gems[b.row][b.col] = sB;\n"
      "            sA.setData({ row: a.row, col: a.col, type: tA, special: sA.getData(\"special\") });\n"
      "            sB.setData({ row: b.row, col: b.col, type: tB, special: sB.getData(\"special\") });\n"
      "            this.tweens.add({\n"
      "              targets: sA,\n"
      "              x: this.gemX(a.col),\n"
      "              y: this.gemY(a.row),\n"
      "              duration: 200,\n"
      '              ease: "Cubic.easeOut"\n'
      "            });\n"
      "            this.tweens.add({\n"
      "              targets: sB,\n"
      "              x: this.gemX(b.col),\n"
      "              y: this.gemY(b.row),\n"
      "              duration: 200,\n"
      '              ease: "Cubic.easeOut",\n'
      "              onComplete: () => { this.busy = false; }\n"
      "            });\n"
      "          } else {\n"
      "            this.busy = false;\n"
      "          }\n"
      "        }\n"
      "      });\n"
)

step(
    8,
    title="Step 8",
    description=(
        "When a swap creates no matches, the rules say it's illegal - "
        "tween the gems back to their original positions. Replace the "
        "no-match branch:\n\n"
        "```js\n"
        "if (matches.length === 0) {\n"
        "  this.gemTypes[a.row][a.col] = tA;\n"
        "  this.gemTypes[b.row][b.col] = tB;\n"
        "  this.gems[a.row][a.col] = sA;\n"
        "  this.gems[b.row][b.col] = sB;\n"
        '  sA.setData({ row: a.row, col: a.col, type: tA, special: sA.getData("special") });\n'
        '  sB.setData({ row: b.row, col: b.col, type: tB, special: sB.getData("special") });\n'
        "  this.tweens.add({\n"
        "    targets: sA,\n"
        "    x: this.gemX(a.col),\n"
        "    y: this.gemY(a.row),\n"
        "    duration: 200,\n"
        '    ease: "Cubic.easeOut"\n'
        "  });\n"
        "  this.tweens.add({\n"
        "    targets: sB,\n"
        "    x: this.gemX(b.col),\n"
        "    y: this.gemY(b.row),\n"
        "    duration: 200,\n"
        '    ease: "Cubic.easeOut",\n'
        "    onComplete: () => { this.busy = false; }\n"
        "  });\n"
        "}\n```\n\n"
        "Why mirror the swap (un-swap state then re-tween)? Because the "
        "match check happened *after* the visual swap completed - the "
        "sprites are already in the swapped positions. We have to flip "
        "everything back."
    ),
    hints=[
        (
            "Restore `this.gemTypes[a.row][a.col] = tA` (and the other three slots).",
            r"this\.gemTypes\[a\.row\]\[a\.col\]\s*=\s*tA[\s\S]*this\.gemTypes\[b\.row\]\[b\.col\]\s*=\s*tB",
        ),
        (
            "Re-`setData` the sprite refs back to the original `(row, col, type)`.",
            r"sA\.setData\(\s*\{\s*row:\s*a\.row\s*,\s*col:\s*a\.col\s*,\s*type:\s*tA",
        ),
        (
            "Tween `sA` back to `this.gemX(a.col), this.gemY(a.row)`.",
            r"targets:\s*sA[\s\S]*x:\s*this\.gemX\(a\.col\)[\s\S]*y:\s*this\.gemY\(a\.row\)",
        ),
        (
            "Release the lock from the second revert tween's `onComplete`.",
            r"onComplete:\s*\(\s*\)\s*=>\s*\{\s*this\.busy\s*=\s*false\s*;",
        ),
    ],
    seed_text=seed_wrap(solutions[7], swap_closure(SWAP_BODY_S7)),
    mutate=lambda: state.replace(
        swap_closure(SWAP_BODY_S7), swap_closure(SWAP_BODY_S8)
    ),
)


# -----------------------------------------------------------------------------
# Step 9: introduce cascade method (destroy matched gems) + swap calls cascade.

CASCADE_BODY_S9 = (
    "      matches.forEach(({ row, col }) => {\n"
    "        const gem = this.gems[row][col];\n"
    "        this.gems[row][col] = null;\n"
    "        this.gemTypes[row][col] = -1;\n"
    "        if (!gem) return;\n"
    "        this.tweens.add({\n"
    "          targets: gem,\n"
    "          scale: 0,\n"
    "          duration: 200,\n"
    '          ease: "Cubic.easeIn",\n'
    "          onComplete: () => gem.destroy()\n"
    "        });\n"
    "      });\n"
    "      this.time.delayedCall(220, () => {\n"
    "        this.busy = false;\n"
    "      });\n"
)

SWAP_BODY_S9 = SWAP_BODY_S8.replace(
    "          } else {\n"
    "            this.busy = false;\n"
    "          }\n",
    "          } else {\n"
    "            this.cascade(matches, 0);\n"
    "          }\n",
)

step(
    9,
    title="Step 9",
    description=(
        "Matched gems should *vanish* - tween their scale to `0` then "
        "destroy them. Add `this.cascade` as a closure that takes the "
        "match list and a recursion depth, and update `swap` to call it "
        "instead of releasing busy.\n\n"
        "Insert *before* `this.swap`:\n\n"
        "```js\n"
        + cascade_closure(CASCADE_BODY_S9)
        + "```\n\n"
        "Then in `swap`'s `onComplete`, replace `this.busy = false;` in "
        "the matches-found branch with `this.cascade(matches, 0);`.\n\n"
        "Each gem fades over `200ms` with `Cubic.easeIn` (slow start, "
        "fast finish - reads as 'leaving'). The 220ms `delayedCall` "
        "releases the input lock just after the destroy animations "
        "settle. We pass `depth = 0` so the cascade recursion in step 12 "
        "knows we're starting fresh."
    ),
    hints=[
        (
            "Define `this.cascade = (matches, depth) => { ... };`.",
            r"this\.cascade\s*=\s*\(\s*matches\s*,\s*depth\s*\)\s*=>",
        ),
        (
            "Iterate matches with `forEach(({ row, col }) => { ... })`.",
            r"matches\.forEach\(\s*\(\s*\{\s*row\s*,\s*col\s*\}\s*\)\s*=>",
        ),
        (
            "Tween `targets: gem, scale: 0, duration: 200, ease: \"Cubic.easeIn\"` then destroy.",
            r"targets:\s*gem\s*,\s*scale:\s*0\s*,\s*duration:\s*200\s*,\s*ease:\s*[\"\']Cubic\.easeIn",
        ),
        (
            "After the destroys, release `this.busy` via a `time.delayedCall`.",
            r"this\.time\.delayedCall\(\s*220\s*,",
        ),
        (
            "Call `this.cascade(matches, 0);` in `swap`'s match branch.",
            r"this\.cascade\(\s*matches\s*,\s*0\s*\)",
        ),
    ],
    seed_text=seed_wrap(solutions[8], swap_closure(SWAP_BODY_S8)),
    mutate=lambda: state.replace(
        swap_closure(SWAP_BODY_S8),
        cascade_closure(CASCADE_BODY_S9) + swap_closure(SWAP_BODY_S9),
    ),
)


# -----------------------------------------------------------------------------
# Step 10: cascade drops above-gems via tween.

CASCADE_BODY_S10 = (
    "      matches.forEach(({ row, col }) => {\n"
    "        const gem = this.gems[row][col];\n"
    "        this.gems[row][col] = null;\n"
    "        this.gemTypes[row][col] = -1;\n"
    "        if (!gem) return;\n"
    "        this.tweens.add({\n"
    "          targets: gem,\n"
    "          scale: 0,\n"
    "          duration: 200,\n"
    '          ease: "Cubic.easeIn",\n'
    "          onComplete: () => gem.destroy()\n"
    "        });\n"
    "      });\n"
    "      this.time.delayedCall(220, () => {\n"
    "        for (let c = 0; c < this.cols; c++) {\n"
    "          let writeRow = this.rows - 1;\n"
    "          for (let r = this.rows - 1; r >= 0; r--) {\n"
    "            if (this.gemTypes[r][c] === -1) continue;\n"
    "            if (writeRow !== r) {\n"
    "              this.gemTypes[writeRow][c] = this.gemTypes[r][c];\n"
    "              this.gems[writeRow][c] = this.gems[r][c];\n"
    "              this.gemTypes[r][c] = -1;\n"
    "              this.gems[r][c] = null;\n"
    "              const moved = this.gems[writeRow][c];\n"
    "              moved.setData({\n"
    "                row: writeRow,\n"
    "                col: c,\n"
    '                type: this.gemTypes[writeRow][c],\n'
    '                special: moved.getData("special")\n'
    "              });\n"
    "              this.tweens.add({\n"
    "                targets: moved,\n"
    "                y: this.gemY(writeRow),\n"
    "                duration: 280,\n"
    '                ease: "Cubic.easeIn"\n'
    "              });\n"
    "            }\n"
    "            writeRow--;\n"
    "          }\n"
    "        }\n"
    "        this.time.delayedCall(300, () => {\n"
    "          this.busy = false;\n"
    "        });\n"
    "      });\n"
)

step(
    10,
    title="Step 10",
    description=(
        "Now that matches destroy, gravity has to take over: every gem "
        "above an empty cell needs to drop down and fill it. Use a "
        "two-pointer column sweep with a chained tween for each gem that "
        "moves.\n\n"
        "Replace the `time.delayedCall(220, ...)` body with the drop "
        "logic:\n\n"
        "```js\n"
        "this.time.delayedCall(220, () => {\n"
        "  for (let c = 0; c < this.cols; c++) {\n"
        "    let writeRow = this.rows - 1;\n"
        "    for (let r = this.rows - 1; r >= 0; r--) {\n"
        "      if (this.gemTypes[r][c] === -1) continue;\n"
        "      if (writeRow !== r) {\n"
        "        this.gemTypes[writeRow][c] = this.gemTypes[r][c];\n"
        "        this.gems[writeRow][c] = this.gems[r][c];\n"
        "        this.gemTypes[r][c] = -1;\n"
        "        this.gems[r][c] = null;\n"
        "        const moved = this.gems[writeRow][c];\n"
        "        moved.setData({\n"
        "          row: writeRow,\n"
        "          col: c,\n"
        "          type: this.gemTypes[writeRow][c],\n"
        '          special: moved.getData("special")\n'
        "        });\n"
        "        this.tweens.add({\n"
        "          targets: moved,\n"
        "          y: this.gemY(writeRow),\n"
        "          duration: 280,\n"
        '          ease: \"Cubic.easeIn\"\n'
        "        });\n"
        "      }\n"
        "      writeRow--;\n"
        "    }\n"
        "  }\n"
        "  this.time.delayedCall(300, () => {\n"
        "    this.busy = false;\n"
        "  });\n"
        "});\n```\n\n"
        "The `writeRow` pointer trails the read pointer from the bottom: "
        "every non-empty gem 'falls' to the next empty `writeRow` slot. "
        "Empty cells at the top of each column are still empty - we'll "
        "fill them next step."
    ),
    hints=[
        (
            "Iterate columns and use a `writeRow` pointer starting at `this.rows - 1`.",
            r"let\s+writeRow\s*=\s*this\.rows\s*-\s*1",
        ),
        (
            "Skip empty cells with `if (this.gemTypes[r][c] === -1) continue;`.",
            r"if\s*\(\s*this\.gemTypes\[r\]\[c\]\s*===\s*-1\s*\)\s*continue",
        ),
        (
            "When `writeRow !== r`, copy the gem and tween its `y` to `this.gemY(writeRow)`.",
            r"this\.tweens\.add\(\s*\{\s*targets:\s*moved\s*,\s*y:\s*this\.gemY\(writeRow\)",
        ),
        (
            "Update `setData` with the new `(row, col, type)`.",
            r"moved\.setData\(\s*\{\s*row:\s*writeRow",
        ),
        (
            "Decrement `writeRow--` after handling each non-empty gem.",
            r"writeRow--",
        ),
    ],
    seed_text=seed_wrap(solutions[9], cascade_closure(CASCADE_BODY_S9)),
    mutate=lambda: state.replace(
        cascade_closure(CASCADE_BODY_S9), cascade_closure(CASCADE_BODY_S10)
    ),
)


# -----------------------------------------------------------------------------
# Step 11: cascade spawns new gems at top to fill empty cells.

CASCADE_BODY_S11 = CASCADE_BODY_S10.replace(
    "            writeRow--;\n"
    "          }\n"
    "        }\n"
    "        this.time.delayedCall(300, () => {\n"
    "          this.busy = false;\n"
    "        });\n",
    "            writeRow--;\n"
    "          }\n"
    "          for (let r = writeRow; r >= 0; r--) {\n"
    "            const type = Phaser.Math.Between(0, this.gemColors.length - 1);\n"
    "            this.gemTypes[r][c] = type;\n"
    "            const sprite = this.add\n"
    '              .sprite(this.gemX(c), this.gemY(-1 - (writeRow - r)), "gem")\n'
    "              .setTint(this.gemColors[type])\n"
    "              .setData({ row: r, col: c, type, special: null })\n"
    "              .setInteractive();\n"
    "            this.gems[r][c] = sprite;\n"
    "            this.tweens.add({\n"
    "              targets: sprite,\n"
    "              y: this.gemY(r),\n"
    "              duration: 280 + (writeRow - r) * 40,\n"
    '              ease: "Cubic.easeIn"\n'
    "            });\n"
    "          }\n"
    "        }\n"
    "        this.time.delayedCall(420, () => {\n"
    "          this.busy = false;\n"
    "        });\n",
)

step(
    11,
    title="Step 11",
    description=(
        "Empty cells above each `writeRow` need new gems. Spawn them off "
        "the top of the playfield (negative `gemY`) and tween them down "
        "with a slight stagger so they don't all arrive on the same "
        "frame.\n\n"
        "Inside the cascade column loop, after `writeRow--; }`, add the "
        "spawn loop:\n\n"
        "```js\n"
        "for (let r = writeRow; r >= 0; r--) {\n"
        "  const type = Phaser.Math.Between(0, this.gemColors.length - 1);\n"
        "  this.gemTypes[r][c] = type;\n"
        "  const sprite = this.add\n"
        '    .sprite(this.gemX(c), this.gemY(-1 - (writeRow - r)), \"gem\")\n'
        "    .setTint(this.gemColors[type])\n"
        "    .setData({ row: r, col: c, type, special: null })\n"
        "    .setInteractive();\n"
        "  this.gems[r][c] = sprite;\n"
        "  this.tweens.add({\n"
        "    targets: sprite,\n"
        "    y: this.gemY(r),\n"
        "    duration: 280 + (writeRow - r) * 40,\n"
        '    ease: \"Cubic.easeIn\"\n'
        "  });\n"
        "}\n```\n\n"
        "And bump the lock-release timer to 420ms (longest possible "
        "drop). The `setInteractive()` call is critical - new gems spawn "
        "without input bindings unless you opt them in."
    ),
    hints=[
        (
            "Loop `r` from `writeRow` down to `0` to fill empty cells.",
            r"for\s*\(\s*let\s+r\s*=\s*writeRow\s*;\s*r\s*>=\s*0\s*;\s*r--\s*\)",
        ),
        (
            "Spawn the new gem above the playfield at `this.gemY(-1 - (writeRow - r))`.",
            r"this\.gemY\(\s*-1\s*-\s*\(\s*writeRow\s*-\s*r\s*\)\s*\)",
        ),
        (
            "Call `.setInteractive()` on each new sprite.",
            r"\.setInteractive\(\s*\)\s*;\s*this\.gems\[r\]\[c\]\s*=\s*sprite",
        ),
        (
            "Tween the new sprite `y` to `this.gemY(r)` with stagger `280 + (writeRow - r) * 40`.",
            r"duration:\s*280\s*\+\s*\(\s*writeRow\s*-\s*r\s*\)\s*\*\s*40",
        ),
    ],
    seed_text=seed_wrap(solutions[10], cascade_closure(CASCADE_BODY_S10)),
    mutate=lambda: state.replace(
        cascade_closure(CASCADE_BODY_S10), cascade_closure(CASCADE_BODY_S11)
    ),
)


# -----------------------------------------------------------------------------
# Step 12: cascade recurses on new matches.

CASCADE_BODY_S12 = CASCADE_BODY_S11.replace(
    "        this.time.delayedCall(420, () => {\n"
    "          this.busy = false;\n"
    "        });\n",
    "        this.time.delayedCall(420, () => {\n"
    "          const more = this.findMatches();\n"
    "          if (more.length > 0) {\n"
    "            this.cascade(more, depth + 1);\n"
    "          } else {\n"
    "            this.busy = false;\n"
    "          }\n"
    "        });\n",
)

step(
    12,
    title="Step 12",
    description=(
        "After the new gems drop, they may form new 3-in-a-rows. The "
        "loop is recursive: cascade calls itself on the new matches. "
        "Cascade scoring (combos) and special-gem creation will hook "
        "into this loop later.\n\n"
        "Replace the lock-release branch:\n\n"
        "```js\n"
        "this.time.delayedCall(420, () => {\n"
        "  const more = this.findMatches();\n"
        "  if (more.length > 0) {\n"
        "    this.cascade(more, depth + 1);\n"
        "  } else {\n"
        "    this.busy = false;\n"
        "  }\n"
        "});\n```\n\n"
        "Each cascade level passes `depth + 1`. When `findMatches` "
        "returns empty, the recursion bottoms out and we release input. "
        "We'll add a recursion-depth guard in step 43 to defend against "
        "pathological grids - in practice the depth rarely exceeds 5."
    ),
    hints=[
        (
            "Compute `const more = this.findMatches()` after the spawn timer.",
            r"const\s+more\s*=\s*this\.findMatches\(\s*\)",
        ),
        (
            "Recurse with `this.cascade(more, depth + 1)` when matches still exist.",
            r"this\.cascade\(\s*more\s*,\s*depth\s*\+\s*1\s*\)",
        ),
        (
            "Release the lock with `this.busy = false` only when no more matches.",
            r"if\s*\(\s*more\.length\s*>\s*0\s*\)[\s\S]*else\s*\{\s*this\.busy\s*=\s*false",
        ),
    ],
    seed_text=seed_wrap(solutions[11], cascade_closure(CASCADE_BODY_S11)),
    mutate=lambda: state.replace(
        cascade_closure(CASCADE_BODY_S11), cascade_closure(CASCADE_BODY_S12)
    ),
)


# -----------------------------------------------------------------------------
# Step 13: scoring per matched gem (lazy-init pattern for state).

CASCADE_BODY_S13 = (
    "      this.score ??= 0;\n"
    "      this.score += matches.length * 10;\n"
    + CASCADE_BODY_S12
)

step(
    13,
    title="Step 13",
    description=(
        "Players need a number to climb. Each matched gem is worth `10` "
        "points. Use the lazy `??=` init pattern at the top of cascade so "
        "we don't need a separate state initializer.\n\n"
        "Replace the top of `cascade`:\n\n"
        "```js\n"
        "this.cascade = (matches, depth) => {\n"
        "  this.score ??= 0;\n"
        "  this.score += matches.length * 10;\n"
        "  matches.forEach(({ row, col }) => { /* ... */ });\n"
        "  // ... drop + cascade-recurse stays the same\n"
        "};\n```\n\n"
        "Two effects: `this.score ??= 0;` initializes once on the first "
        "cascade (without needing a `/* create-state */` block), and "
        "`this.score += matches.length * 10;` runs *every* cascade level "
        "- so a 5-cascade combo from one swap collects scoring 5x. The "
        "combo counter (step 15) will scale this further."
    ),
    hints=[
        (
            "Use `this.score ??= 0;` at the top of cascade for lazy state init.",
            r"this\.score\s*\?\?=\s*0",
        ),
        (
            "Increment via `this.score += matches.length * 10;`.",
            r"this\.score\s*\+=\s*matches\.length\s*\*\s*10",
        ),
    ],
    seed_text=seed_wrap(solutions[12], cascade_closure(CASCADE_BODY_S12)),
    mutate=lambda: state.replace(
        cascade_closure(CASCADE_BODY_S12), cascade_closure(CASCADE_BODY_S13)
    ),
)


# -----------------------------------------------------------------------------
# Step 14: UIScene HUD with score text. Wraps a large block from the cascade
# closure through the end of the file (config block).

UI_SCENE_S14 = (
    "\n\nclass UIScene extends Phaser.Scene {\n"
    "  constructor() {\n"
    '    super("UIScene");\n'
    "  }\n"
    "\n"
    "  create() {\n"
    "    this.scoreText = this.add\n"
    '      .text(20, 16, "Score: 0", {\n'
    '        fontSize: "22px",\n'
    '        color: "#ffffff",\n'
    '        fontStyle: "bold"\n'
    "      })\n"
    "      .setScrollFactor(0);\n"
    '    const main = this.scene.get("MainScene");\n'
    '    main.events.on("scoreUpdate", (score) => {\n'
    '      this.scoreText.setText("Score: " + score);\n'
    "    });\n"
    "  }\n"
    "}\n"
)

CASCADE_BODY_S14 = (
    "      this.score ??= 0;\n"
    "      this.score += matches.length * 10;\n"
    '      this.events.emit("scoreUpdate", this.score);\n'
    + CASCADE_BODY_S12
)

# Span we wrap for step 14 = cascade closure through end of file.
S14_SPAN_OLD = (
    cascade_closure(CASCADE_BODY_S13)
    + swap_closure(SWAP_BODY_S9)
    + "    /* create-fx */\n"
    "    /* create-music */\n"
    "    /* create-tutorial */\n"
    "    /* create-cleanup */\n"
    "  }\n"
    "\n"
    "  update(time, delta) {\n"
    "    /* update-body */\n"
    "  }\n"
    "}\n"
    + CONFIG_MAIN_ONLY
)

S14_SPAN_NEW = (
    cascade_closure(CASCADE_BODY_S14)
    + swap_closure(SWAP_BODY_S9)
    + "    /* create-fx */\n"
    "    /* create-music */\n"
    "    this.scene.launch(\"UIScene\");\n"
    "    /* create-tutorial */\n"
    "    /* create-cleanup */\n"
    "  }\n"
    "\n"
    "  update(time, delta) {\n"
    "    /* update-body */\n"
    "  }\n"
    "}"
    + UI_SCENE_S14
    + CONFIG_WITH_UI
)

step(
    14,
    title="Step 14",
    description=(
        "Build a separate `UIScene` to display the score on top of "
        "MainScene. Multi-scene UI is the cleanest way to keep HUD code "
        "out of game-loop code. UIScene listens for `scoreUpdate` events "
        "fired from MainScene's cascade.\n\n"
        "Three changes happen in this region:\n\n"
        "1. **Cascade emits the new score:** add `this.events.emit(\"scoreUpdate\", this.score);` right after the score increment.\n"
        "1. **Define `UIScene`** below `MainScene` class (outside the class block).\n"
        "1. **Update `scene` array** to include `UIScene` and **launch it** from `MainScene.create` via `this.scene.launch(\"UIScene\")` in the `/* create-music */` slot.\n\n"
        "```js\n"
        "this.events.emit(\"scoreUpdate\", this.score);\n"
        "// ...\n"
        "this.scene.launch(\"UIScene\");\n"
        "// ...\n"
        + UI_SCENE_S14.lstrip("\n")
        + "// ...\n"
        + 'scene: [MainScene, UIScene]\n'
        + "```\n\n"
        "`setScrollFactor(0)` glues the score to the camera so it doesn't "
        "scroll when MainScene's camera moves. Multi-scene HUD is the "
        "Chapter 6 pattern - it lives across `event.emit` boundaries."
    ),
    hints=[
        (
            'Emit `"scoreUpdate"` with the new score from cascade.',
            r'this\.events\.emit\(\s*["\']scoreUpdate["\']\s*,\s*this\.score\s*\)',
        ),
        (
            'Define `class UIScene extends Phaser.Scene` with `super("UIScene")`.',
            r'class\s+UIScene\s+extends\s+Phaser\.Scene[\s\S]*super\(\s*["\']UIScene["\']\s*\)',
        ),
        (
            'In UIScene.create, add `this.scoreText = this.add.text(...)` and listen on `main.events.on("scoreUpdate", ...)`.',
            r'main\.events\.on\(\s*["\']scoreUpdate["\']\s*,\s*\(\s*score\s*\)\s*=>',
        ),
        (
            'Launch UIScene from MainScene with `this.scene.launch("UIScene")`.',
            r'this\.scene\.launch\(\s*["\']UIScene["\']\s*\)',
        ),
        (
            "Add UIScene to the `scene` array.",
            r"scene:\s*\[\s*MainScene\s*,\s*UIScene\s*\]",
        ),
    ],
    seed_text=seed_wrap(solutions[13], S14_SPAN_OLD),
    mutate=lambda: state.replace(S14_SPAN_OLD, S14_SPAN_NEW),
)


# -----------------------------------------------------------------------------
# Step 15: combo counter.

CASCADE_BODY_S15 = (
    "      this.score ??= 0;\n"
    "      this.combo ??= 0;\n"
    "      this.combo = depth + 1;\n"
    '      this.events.emit("comboUpdate", this.combo);\n'
    "      this.score += matches.length * 10;\n"
    '      this.events.emit("scoreUpdate", this.score);\n'
    + CASCADE_BODY_S12
)

step(
    15,
    title="Step 15",
    description=(
        "When a swap kicks off a chain of matches, each cascade level is "
        "one combo step. Track the combo counter and emit a "
        "`comboUpdate` event - UIScene will display it next step.\n\n"
        "Replace cascade's score block with combo bookkeeping:\n\n"
        "```js\n"
        "this.score ??= 0;\n"
        "this.combo ??= 0;\n"
        "this.combo = depth + 1;\n"
        "this.events.emit(\"comboUpdate\", this.combo);\n"
        "this.score += matches.length * 10;\n"
        "this.events.emit(\"scoreUpdate\", this.score);\n```\n\n"
        "Note `this.combo = depth + 1`. Cascade depth `0` is the "
        "user-initiated swap (combo = 1). Depth `1` is the first cascade "
        "fall (combo = 2), and so on. The combo counter resets implicitly "
        "on the next user swap because the new cascade starts at depth `0` "
        "again."
    ),
    hints=[
        (
            "Lazy-init combo with `this.combo ??= 0;` at the top of cascade.",
            r"this\.combo\s*\?\?=\s*0",
        ),
        (
            "Set `this.combo = depth + 1` at every cascade level.",
            r"this\.combo\s*=\s*depth\s*\+\s*1",
        ),
        (
            'Emit `"comboUpdate"` with the new combo value.',
            r'this\.events\.emit\(\s*["\']comboUpdate["\']\s*,\s*this\.combo\s*\)',
        ),
    ],
    seed_text=seed_wrap(solutions[14], cascade_closure(CASCADE_BODY_S14)),
    mutate=lambda: state.replace(
        cascade_closure(CASCADE_BODY_S14), cascade_closure(CASCADE_BODY_S15)
    ),
)


# -----------------------------------------------------------------------------
# Step 16: bonus combo score (multiplies match value by combo).

CASCADE_BODY_S16 = (
    "      this.score ??= 0;\n"
    "      this.combo ??= 0;\n"
    "      this.combo = depth + 1;\n"
    '      this.events.emit("comboUpdate", this.combo);\n'
    "      this.score += matches.length * 10 * this.combo;\n"
    '      this.events.emit("scoreUpdate", this.score);\n'
    + CASCADE_BODY_S12
)

step(
    16,
    title="Step 16",
    description=(
        "A 4-cascade combo should pay out *more* than four separate swaps "
        "of the same match count. Multiply the match value by the combo "
        "level so deeper cascades cascade-reward.\n\n"
        "Change the score line:\n\n"
        "```js\n"
        "this.score += matches.length * 10 * this.combo;\n```\n\n"
        "Match math example: a 5-gem match at combo 3 scores `5 * 10 * 3 "
        "= 150` instead of just `50`. The reward curve becomes "
        "non-linear, which is what makes match-3 chains feel exciting."
    ),
    hints=[
        (
            "Multiply matches by `this.combo` for the bonus.",
            r"this\.score\s*\+=\s*matches\.length\s*\*\s*10\s*\*\s*this\.combo",
        ),
    ],
    seed_text=seed_wrap(solutions[15], cascade_closure(CASCADE_BODY_S15)),
    mutate=lambda: state.replace(
        cascade_closure(CASCADE_BODY_S15), cascade_closure(CASCADE_BODY_S16)
    ),
)


# -----------------------------------------------------------------------------
# Step 17: stripe creation rule (4-in-a-row spares one cell, tags it stripe).
#
# findMatches now returns { cells, runs } where runs annotate the H/V runs.
# cascade uses matches.cells/runs and spares one cell per run-of-4+ as a
# stripe. swap consumes the new shape via matches.cells.length.

FIND_MATCHES_BODY_S17 = (
    "      const cells = new Map();\n"
    "      const runs = [];\n"
    "      for (let r = 0; r < this.rows; r++) {\n"
    "        let runStart = 0;\n"
    "        let runType = this.gemTypes[r][0];\n"
    "        for (let c = 1; c <= this.cols; c++) {\n"
    "          const t = c < this.cols ? this.gemTypes[r][c] : -2;\n"
    "          if (t === runType && runType >= 0) continue;\n"
    "          if (c - runStart >= 3 && runType >= 0) {\n"
    '            runs.push({ orient: "h", row: r, col: runStart, len: c - runStart, type: runType });\n'
    "            for (let k = runStart; k < c; k++) {\n"
    "              cells.set(`${r},${k}`, { row: r, col: k, type: runType });\n"
    "            }\n"
    "          }\n"
    "          runStart = c;\n"
    "          runType = t;\n"
    "        }\n"
    "      }\n"
    "      for (let c = 0; c < this.cols; c++) {\n"
    "        let runStart = 0;\n"
    "        let runType = this.gemTypes[0][c];\n"
    "        for (let r = 1; r <= this.rows; r++) {\n"
    "          const t = r < this.rows ? this.gemTypes[r][c] : -2;\n"
    "          if (t === runType && runType >= 0) continue;\n"
    "          if (r - runStart >= 3 && runType >= 0) {\n"
    '            runs.push({ orient: "v", row: runStart, col: c, len: r - runStart, type: runType });\n'
    "            for (let k = runStart; k < r; k++) {\n"
    "              cells.set(`${k},${c}`, { row: k, col: c, type: runType });\n"
    "            }\n"
    "          }\n"
    "          runStart = r;\n"
    "          runType = t;\n"
    "        }\n"
    "      }\n"
    "      return { cells: [...cells.values()], runs };\n"
)

# Cascade S17: consumes { cells, runs }, spares one cell per run-of-4+ as a stripe.
CASCADE_BODY_S17 = (
    "      this.score ??= 0;\n"
    "      this.combo ??= 0;\n"
    "      this.combo = depth + 1;\n"
    '      this.events.emit("comboUpdate", this.combo);\n'
    "      this.score += matches.cells.length * 10 * this.combo;\n"
    '      this.events.emit("scoreUpdate", this.score);\n'
    "      const spared = new Set();\n"
    "      matches.runs.forEach((run) => {\n"
    "        if (run.len < 4) return;\n"
    "        const key = `${run.row},${run.col}`;\n"
    "        if (spared.has(key)) return;\n"
    "        spared.add(key);\n"
    "        const gem = this.gems[run.row][run.col];\n"
    "        if (!gem) return;\n"
    '        const stripeKind = run.orient === "h" ? "stripe-h" : "stripe-v";\n'
    "        gem.setData({\n"
    "          row: run.row,\n"
    "          col: run.col,\n"
    "          type: run.type,\n"
    "          special: stripeKind\n"
    "        });\n"
    "        this.tweens.add({\n"
    "          targets: gem,\n"
    "          scale: 1.3,\n"
    "          duration: 140,\n"
    "          yoyo: true,\n"
    '          ease: "Cubic.easeOut"\n'
    "        });\n"
    "      });\n"
    "      matches.cells.forEach(({ row, col }) => {\n"
    "        if (spared.has(`${row},${col}`)) return;\n"
    "        const gem = this.gems[row][col];\n"
    "        this.gems[row][col] = null;\n"
    "        this.gemTypes[row][col] = -1;\n"
    "        if (!gem) return;\n"
    "        this.tweens.add({\n"
    "          targets: gem,\n"
    "          scale: 0,\n"
    "          duration: 200,\n"
    '          ease: "Cubic.easeIn",\n'
    "          onComplete: () => gem.destroy()\n"
    "        });\n"
    "      });\n"
    "      this.time.delayedCall(220, () => {\n"
    "        for (let c = 0; c < this.cols; c++) {\n"
    "          let writeRow = this.rows - 1;\n"
    "          for (let r = this.rows - 1; r >= 0; r--) {\n"
    "            if (this.gemTypes[r][c] === -1) continue;\n"
    "            if (writeRow !== r) {\n"
    "              this.gemTypes[writeRow][c] = this.gemTypes[r][c];\n"
    "              this.gems[writeRow][c] = this.gems[r][c];\n"
    "              this.gemTypes[r][c] = -1;\n"
    "              this.gems[r][c] = null;\n"
    "              const moved = this.gems[writeRow][c];\n"
    "              moved.setData({\n"
    "                row: writeRow,\n"
    "                col: c,\n"
    "                type: this.gemTypes[writeRow][c],\n"
    '                special: moved.getData("special")\n'
    "              });\n"
    "              this.tweens.add({\n"
    "                targets: moved,\n"
    "                y: this.gemY(writeRow),\n"
    "                duration: 280,\n"
    '                ease: "Cubic.easeIn"\n'
    "              });\n"
    "            }\n"
    "            writeRow--;\n"
    "          }\n"
    "          for (let r = writeRow; r >= 0; r--) {\n"
    "            const type = Phaser.Math.Between(0, this.gemColors.length - 1);\n"
    "            this.gemTypes[r][c] = type;\n"
    "            const sprite = this.add\n"
    '              .sprite(this.gemX(c), this.gemY(-1 - (writeRow - r)), "gem")\n'
    "              .setTint(this.gemColors[type])\n"
    "              .setData({ row: r, col: c, type, special: null })\n"
    "              .setInteractive();\n"
    "            this.gems[r][c] = sprite;\n"
    "            this.tweens.add({\n"
    "              targets: sprite,\n"
    "              y: this.gemY(r),\n"
    "              duration: 280 + (writeRow - r) * 40,\n"
    '              ease: "Cubic.easeIn"\n'
    "            });\n"
    "          }\n"
    "        }\n"
    "        this.time.delayedCall(420, () => {\n"
    "          const more = this.findMatches();\n"
    "          if (more.cells.length > 0) {\n"
    "            this.cascade(more, depth + 1);\n"
    "          } else {\n"
    "            this.busy = false;\n"
    "          }\n"
    "        });\n"
    "      });\n"
)

SWAP_BODY_S17 = (
    SWAP_PRELUDE
    + "      this.tweens.add({\n"
      "        targets: sA,\n"
      "        x: this.gemX(b.col),\n"
      "        y: this.gemY(b.row),\n"
      "        duration: 200,\n"
      '        ease: "Cubic.easeOut"\n'
      "      });\n"
      "      this.tweens.add({\n"
      "        targets: sB,\n"
      "        x: this.gemX(a.col),\n"
      "        y: this.gemY(a.row),\n"
      "        duration: 200,\n"
      '        ease: "Cubic.easeOut",\n'
      "        onComplete: () => {\n"
      "          const matches = this.findMatches();\n"
      "          if (matches.cells.length === 0) {\n"
      "            this.gemTypes[a.row][a.col] = tA;\n"
      "            this.gemTypes[b.row][b.col] = tB;\n"
      "            this.gems[a.row][a.col] = sA;\n"
      "            this.gems[b.row][b.col] = sB;\n"
      "            sA.setData({ row: a.row, col: a.col, type: tA, special: sA.getData(\"special\") });\n"
      "            sB.setData({ row: b.row, col: b.col, type: tB, special: sB.getData(\"special\") });\n"
      "            this.tweens.add({\n"
      "              targets: sA,\n"
      "              x: this.gemX(a.col),\n"
      "              y: this.gemY(a.row),\n"
      "              duration: 200,\n"
      '              ease: "Cubic.easeOut"\n'
      "            });\n"
      "            this.tweens.add({\n"
      "              targets: sB,\n"
      "              x: this.gemX(b.col),\n"
      "              y: this.gemY(b.row),\n"
      "              duration: 200,\n"
      '              ease: "Cubic.easeOut",\n'
      "              onComplete: () => { this.busy = false; }\n"
      "            });\n"
      "          } else {\n"
      "            this.cascade(matches, 0);\n"
      "          }\n"
      "        }\n"
      "      });\n"
)

step(
    17,
    title="Step 17",
    description=(
        "Time to introduce special gems. The first rule: a 4-in-a-row "
        "match creates a STRIPE gem - a special that on its next match "
        "wipes the entire row (or column, depending on direction).\n\n"
        "This step refactors three closures together:\n\n"
        "1. **`findMatches`** now returns `{ cells, runs }` where `runs` "
        "lists every horizontal/vertical run of length 3+. Each run "
        "carries `{ orient, row, col, len, type }`.\n"
        "1. **`cascade`** consumes `matches.cells` (instead of "
        "`matches`) and uses `matches.runs` to detect runs of length 4+. "
        "For each such run, it *spares* one cell from destruction, tags "
        "it `special: \"stripe-h\"` (or `\"stripe-v\"`), and pulses it "
        "with a yoyo scale to visually announce the creation.\n"
        "1. **`swap`** uses `matches.cells.length` for the no-match check.\n\n"
        "Replace findMatches, cascade, and swap with the v17 versions. "
        "(See the editable region below.) The stripe gem doesn't *do* "
        "anything yet on activation - that's step 18."
    ),
    hints=[
        (
            "`findMatches` returns `{ cells, runs }`.",
            r"return\s*\{\s*cells:\s*\[\s*\.\.\.cells\.values\(\s*\)\s*\]\s*,\s*runs\s*\}",
        ),
        (
            'Each run object carries `orient`, `row`, `col`, `len`, `type`.',
            r'runs\.push\(\s*\{\s*orient:\s*["\']h["\']\s*,\s*row:\s*r\s*,\s*col:\s*runStart\s*,\s*len:\s*c\s*-\s*runStart\s*,\s*type:\s*runType\s*\}',
        ),
        (
            'In cascade, iterate `matches.runs.forEach(...)` and skip runs of `len < 4`.',
            r"matches\.runs\.forEach\([\s\S]*if\s*\(\s*run\.len\s*<\s*4\s*\)\s*return",
        ),
        (
            'Tag the spared gem with `special: "stripe-h"` or `"stripe-v"` based on `run.orient`.',
            r'special:\s*stripeKind',
        ),
        (
            'Use `matches.cells.length` in swap and cascade-recurse checks.',
            r'matches\.cells\.length\s*===\s*0',
        ),
    ],
    seed_text=seed_wrap(
        solutions[16],
        find_matches_closure(FIND_MATCHES_BODY_S7)
        + cascade_closure(CASCADE_BODY_S16)
        + swap_closure(SWAP_BODY_S9),
    ),
    mutate=lambda: state.replace(
        find_matches_closure(FIND_MATCHES_BODY_S7)
        + cascade_closure(CASCADE_BODY_S16)
        + swap_closure(SWAP_BODY_S9),
        find_matches_closure(FIND_MATCHES_BODY_S17)
        + cascade_closure(CASCADE_BODY_S17)
        + swap_closure(SWAP_BODY_S17),
    ),
)


# -----------------------------------------------------------------------------
# Step 18: stripe activation. When a stripe gem is destroyed in cascade, it
# clears its entire row (stripe-h) or column (stripe-v) via the activateSpecial
# helper.

ACTIVATE_SPECIAL_BODY_S18 = (
    "      const special = gem.getData(\"special\");\n"
    "      if (!special) return;\n"
    "      gem.setData({\n"
    "        row: gem.getData(\"row\"),\n"
    "        col: gem.getData(\"col\"),\n"
    "        type: gem.getData(\"type\"),\n"
    "        special: null\n"
    "      });\n"
    "      const sr = gem.getData(\"row\");\n"
    "      const sc = gem.getData(\"col\");\n"
    "      const targets = [];\n"
    '      if (special === "stripe-h") {\n'
    "        for (let c = 0; c < this.cols; c++) {\n"
    "          if (this.gems[sr][c]) {\n"
    "            targets.push({ row: sr, col: c, type: this.gemTypes[sr][c] });\n"
    "          }\n"
    "        }\n"
    '      } else if (special === "stripe-v") {\n'
    "        for (let r = 0; r < this.rows; r++) {\n"
    "          if (this.gems[r][sc]) {\n"
    "            targets.push({ row: r, col: sc, type: this.gemTypes[r][sc] });\n"
    "          }\n"
    "        }\n"
    "      }\n"
    "      targets.forEach((cell) => {\n"
    "        const key = `${cell.row},${cell.col}`;\n"
    "        if (allCells.has(key)) return;\n"
    "        allCells.set(key, cell);\n"
    "        const chainGem = this.gems[cell.row][cell.col];\n"
    "        if (chainGem && chainGem.getData(\"special\")) {\n"
    "          this.activateSpecial(chainGem, allCells);\n"
    "        }\n"
    "      });\n"
)


def activate_special_closure(body: str) -> str:
    return (
        "    this.activateSpecial = (gem, allCells) => {\n"
        f"{body}"
        "    };\n"
    )


# Cascade S18 builds allCells map from matches.cells, runs activateSpecial on
# any pre-existing specials, then proceeds with sparing + destruction.
CASCADE_BODY_S18 = (
    "      this.score ??= 0;\n"
    "      this.combo ??= 0;\n"
    "      this.combo = depth + 1;\n"
    '      this.events.emit("comboUpdate", this.combo);\n'
    "      const allCells = new Map(\n"
    "        matches.cells.map((c) => [`${c.row},${c.col}`, c])\n"
    "      );\n"
    "      [...allCells.values()].forEach((cell) => {\n"
    "        const g2 = this.gems[cell.row][cell.col];\n"
    '        if (g2 && g2.getData("special")) this.activateSpecial(g2, allCells);\n'
    "      });\n"
    "      this.score += allCells.size * 10 * this.combo;\n"
    '      this.events.emit("scoreUpdate", this.score);\n'
    "      const spared = new Set();\n"
    "      matches.runs.forEach((run) => {\n"
    "        if (run.len < 4) return;\n"
    "        const key = `${run.row},${run.col}`;\n"
    "        if (spared.has(key)) return;\n"
    "        const existingGem = this.gems[run.row][run.col];\n"
    '        if (existingGem && existingGem.getData("special")) return;\n'
    "        spared.add(key);\n"
    "        const gem = existingGem;\n"
    "        if (!gem) return;\n"
    '        const stripeKind = run.orient === "h" ? "stripe-h" : "stripe-v";\n'
    "        gem.setData({\n"
    "          row: run.row,\n"
    "          col: run.col,\n"
    "          type: run.type,\n"
    "          special: stripeKind\n"
    "        });\n"
    "        this.tweens.add({\n"
    "          targets: gem,\n"
    "          scale: 1.3,\n"
    "          duration: 140,\n"
    "          yoyo: true,\n"
    '          ease: "Cubic.easeOut"\n'
    "        });\n"
    "      });\n"
    "      [...allCells.values()].forEach(({ row, col }) => {\n"
    "        if (spared.has(`${row},${col}`)) return;\n"
    "        const gem = this.gems[row][col];\n"
    "        this.gems[row][col] = null;\n"
    "        this.gemTypes[row][col] = -1;\n"
    "        if (!gem) return;\n"
    "        this.tweens.add({\n"
    "          targets: gem,\n"
    "          scale: 0,\n"
    "          duration: 200,\n"
    '          ease: "Cubic.easeIn",\n'
    "          onComplete: () => gem.destroy()\n"
    "        });\n"
    "      });\n"
    "      this.time.delayedCall(220, () => {\n"
    "        for (let c = 0; c < this.cols; c++) {\n"
    "          let writeRow = this.rows - 1;\n"
    "          for (let r = this.rows - 1; r >= 0; r--) {\n"
    "            if (this.gemTypes[r][c] === -1) continue;\n"
    "            if (writeRow !== r) {\n"
    "              this.gemTypes[writeRow][c] = this.gemTypes[r][c];\n"
    "              this.gems[writeRow][c] = this.gems[r][c];\n"
    "              this.gemTypes[r][c] = -1;\n"
    "              this.gems[r][c] = null;\n"
    "              const moved = this.gems[writeRow][c];\n"
    "              moved.setData({\n"
    "                row: writeRow,\n"
    "                col: c,\n"
    "                type: this.gemTypes[writeRow][c],\n"
    '                special: moved.getData("special")\n'
    "              });\n"
    "              this.tweens.add({\n"
    "                targets: moved,\n"
    "                y: this.gemY(writeRow),\n"
    "                duration: 280,\n"
    '                ease: "Cubic.easeIn"\n'
    "              });\n"
    "            }\n"
    "            writeRow--;\n"
    "          }\n"
    "          for (let r = writeRow; r >= 0; r--) {\n"
    "            const type = Phaser.Math.Between(0, this.gemColors.length - 1);\n"
    "            this.gemTypes[r][c] = type;\n"
    "            const sprite = this.add\n"
    '              .sprite(this.gemX(c), this.gemY(-1 - (writeRow - r)), "gem")\n'
    "              .setTint(this.gemColors[type])\n"
    "              .setData({ row: r, col: c, type, special: null })\n"
    "              .setInteractive();\n"
    "            this.gems[r][c] = sprite;\n"
    "            this.tweens.add({\n"
    "              targets: sprite,\n"
    "              y: this.gemY(r),\n"
    "              duration: 280 + (writeRow - r) * 40,\n"
    '              ease: "Cubic.easeIn"\n'
    "            });\n"
    "          }\n"
    "        }\n"
    "        this.time.delayedCall(420, () => {\n"
    "          const more = this.findMatches();\n"
    "          if (more.cells.length > 0) {\n"
    "            this.cascade(more, depth + 1);\n"
    "          } else {\n"
    "            this.busy = false;\n"
    "          }\n"
    "        });\n"
    "      });\n"
)

step(
    18,
    title="Step 18",
    description=(
        "A stripe gem is *fun* because activating it wipes a whole "
        "row/column of gems. When cascade processes the matches, any "
        "matched cell that's already tagged `special: \"stripe-h\"` (or "
        "`stripe-v`) should expand the destruction set to include every "
        "gem in that gem's row (or column).\n\n"
        "Insert a new method `this.activateSpecial(gem, allCells)` "
        "*before* `this.findMatches`:\n\n"
        "```js\n"
        + activate_special_closure(ACTIVATE_SPECIAL_BODY_S18)
        + "```\n\n"
        "And replace `cascade`'s body so that it builds an `allCells` "
        "map, runs `activateSpecial` on any pre-existing specials in the "
        "match list, scores the *expanded* set, and skips creating a new "
        "stripe at a cell that's already a special (avoids "
        "double-counting).\n\n"
        "The recursive `activateSpecial` call inside `targets.forEach` "
        "handles chain reactions: a stripe activated stripe-of-different "
        "orientation triggers both rows and columns clearing in a "
        "cascade. (We'll get richer chain reactions in steps 20 and 22.)"
    ),
    hints=[
        (
            "Define `this.activateSpecial = (gem, allCells) => { ... };`.",
            r"this\.activateSpecial\s*=\s*\(\s*gem\s*,\s*allCells\s*\)\s*=>",
        ),
        (
            'Read the special tag from `gem.getData("special")`.',
            r'const\s+special\s*=\s*gem\.getData\(\s*["\']special["\']\s*\)',
        ),
        (
            "Clear `gem.setData({ ..., special: null })` so it doesn't activate twice.",
            r"special:\s*null",
        ),
        (
            'For "stripe-h", iterate `c < this.cols` and push every cell in row `sr`.',
            r'if\s*\(\s*special\s*===\s*["\']stripe-h["\']\s*\)',
        ),
        (
            'For "stripe-v", iterate `r < this.rows` and push every cell in column `sc`.',
            r'if\s*\(\s*special\s*===\s*["\']stripe-v["\']\s*\)',
        ),
        (
            "Recurse `this.activateSpecial(chainGem, allCells)` for chain reactions.",
            r"this\.activateSpecial\(\s*chainGem\s*,\s*allCells\s*\)",
        ),
        (
            "In cascade, build `const allCells = new Map(matches.cells.map(c => [..., c]));`.",
            r"new\s+Map\(\s*matches\.cells\.map\(",
        ),
    ],
    seed_text=seed_wrap(
        solutions[17],
        find_matches_closure(FIND_MATCHES_BODY_S17)
        + cascade_closure(CASCADE_BODY_S17),
    ),
    mutate=lambda: state.replace(
        find_matches_closure(FIND_MATCHES_BODY_S17)
        + cascade_closure(CASCADE_BODY_S17),
        find_matches_closure(FIND_MATCHES_BODY_S17)
        + activate_special_closure(ACTIVATE_SPECIAL_BODY_S18)
        + cascade_closure(CASCADE_BODY_S18),
    ),
)


# -----------------------------------------------------------------------------
# Step 19: 5-in-a-row color-bomb creation rule.

# Cascade S19: detect runs of len >= 5 -> tag spared cell "color-bomb"; len 4 -> stripe.
CASCADE_BODY_S19 = CASCADE_BODY_S18.replace(
    "      matches.runs.forEach((run) => {\n"
    "        if (run.len < 4) return;\n"
    "        const key = `${run.row},${run.col}`;\n"
    "        if (spared.has(key)) return;\n"
    "        const existingGem = this.gems[run.row][run.col];\n"
    '        if (existingGem && existingGem.getData("special")) return;\n'
    "        spared.add(key);\n"
    "        const gem = existingGem;\n"
    "        if (!gem) return;\n"
    '        const stripeKind = run.orient === "h" ? "stripe-h" : "stripe-v";\n'
    "        gem.setData({\n"
    "          row: run.row,\n"
    "          col: run.col,\n"
    "          type: run.type,\n"
    "          special: stripeKind\n"
    "        });\n"
    "        this.tweens.add({\n"
    "          targets: gem,\n"
    "          scale: 1.3,\n"
    "          duration: 140,\n"
    "          yoyo: true,\n"
    '          ease: "Cubic.easeOut"\n'
    "        });\n"
    "      });\n",
    "      matches.runs.forEach((run) => {\n"
    "        if (run.len < 4) return;\n"
    "        const key = `${run.row},${run.col}`;\n"
    "        if (spared.has(key)) return;\n"
    "        const existingGem = this.gems[run.row][run.col];\n"
    '        if (existingGem && existingGem.getData("special")) return;\n'
    "        spared.add(key);\n"
    "        const gem = existingGem;\n"
    "        if (!gem) return;\n"
    "        let kind;\n"
    "        if (run.len >= 5) {\n"
    '          kind = "color-bomb";\n'
    "        } else {\n"
    '          kind = run.orient === "h" ? "stripe-h" : "stripe-v";\n'
    "        }\n"
    "        gem.setData({\n"
    "          row: run.row,\n"
    "          col: run.col,\n"
    "          type: run.type,\n"
    "          special: kind\n"
    "        });\n"
    "        this.tweens.add({\n"
    "          targets: gem,\n"
    "          scale: 1.4,\n"
    "          duration: 160,\n"
    "          yoyo: true,\n"
    '          ease: "Cubic.easeOut"\n'
    "        });\n"
    "      });\n",
)

step(
    19,
    title="Step 19",
    description=(
        "A 5-in-a-row deserves more than a stripe - it should create a "
        "COLOR-BOMB, the special that on activation wipes every gem of "
        "one color from the board. (Activation is step 20.)\n\n"
        "Replace cascade's run-spare branch:\n\n"
        "```js\n"
        "let kind;\n"
        "if (run.len >= 5) {\n"
        '  kind = "color-bomb";\n'
        "} else {\n"
        '  kind = run.orient === "h" ? "stripe-h" : "stripe-v";\n'
        "}\n"
        "gem.setData({\n"
        "  row: run.row,\n"
        "  col: run.col,\n"
        "  type: run.type,\n"
        "  special: kind\n"
        "});\n```\n\n"
        "We bumped the creation pulse to `1.4` and `160ms` so a 5-run "
        "feels distinctly bigger than a 4-run. Visual differentiation "
        "(stripe-arrow vs color-bomb-star vs wrapped-sparkle) comes in "
        "step 23."
    ),
    hints=[
        (
            'Use `kind = "color-bomb"` when `run.len >= 5`.',
            r"if\s*\(\s*run\.len\s*>=\s*5\s*\)\s*\{\s*kind\s*=\s*[\"\']color-bomb",
        ),
        (
            'Otherwise `kind = run.orient === "h" ? "stripe-h" : "stripe-v"`.',
            r'kind\s*=\s*run\.orient\s*===\s*["\']h["\']\s*\?\s*["\']stripe-h["\']',
        ),
        (
            'Set `special: kind` on the spared gem.',
            r"special:\s*kind",
        ),
    ],
    seed_text=seed_wrap(solutions[18], cascade_closure(CASCADE_BODY_S18)),
    mutate=lambda: state.replace(
        cascade_closure(CASCADE_BODY_S18), cascade_closure(CASCADE_BODY_S19)
    ),
)


# -----------------------------------------------------------------------------
# Step 20: color-bomb activation: clear all gems of one color.

ACTIVATE_SPECIAL_BODY_S20 = ACTIVATE_SPECIAL_BODY_S18.replace(
    "      } else if (special === \"stripe-v\") {\n"
    "        for (let r = 0; r < this.rows; r++) {\n"
    "          if (this.gems[r][sc]) {\n"
    "            targets.push({ row: r, col: sc, type: this.gemTypes[r][sc] });\n"
    "          }\n"
    "        }\n"
    "      }\n",
    "      } else if (special === \"stripe-v\") {\n"
    "        for (let r = 0; r < this.rows; r++) {\n"
    "          if (this.gems[r][sc]) {\n"
    "            targets.push({ row: r, col: sc, type: this.gemTypes[r][sc] });\n"
    "          }\n"
    "        }\n"
    "      } else if (special === \"color-bomb\") {\n"
    '        const colorTarget = gem.getData("type");\n'
    "        for (let r = 0; r < this.rows; r++) {\n"
    "          for (let c = 0; c < this.cols; c++) {\n"
    "            if (this.gemTypes[r][c] === colorTarget && this.gems[r][c]) {\n"
    "              targets.push({ row: r, col: c, type: colorTarget });\n"
    "            }\n"
    "          }\n"
    "        }\n"
    "      }\n",
)

step(
    20,
    title="Step 20",
    description=(
        "When a color-bomb activates, it wipes EVERY gem of its own "
        "color from the board. Modify `activateSpecial` to add a "
        "`color-bomb` branch that scans the entire grid for matching "
        "type and adds them all to `targets`.\n\n"
        "Insert into `activateSpecial`, after the `stripe-v` branch:\n\n"
        "```js\n"
        '} else if (special === "color-bomb") {\n'
        '  const colorTarget = gem.getData("type");\n'
        "  for (let r = 0; r < this.rows; r++) {\n"
        "    for (let c = 0; c < this.cols; c++) {\n"
        "      if (this.gemTypes[r][c] === colorTarget && this.gems[r][c]) {\n"
        "        targets.push({ row: r, col: c, type: colorTarget });\n"
        "      }\n"
        "    }\n"
        "  }\n"
        "}\n```\n\n"
        "A color-bomb on a 5-color board with even distribution clears "
        "~13 gems per activation, scoring `13 * 10 * combo`. Combine "
        "with a stripe (chain via `targets.forEach`) and you can clear "
        "30+ gems in one chain."
    ),
    hints=[
        (
            'Add an `else if (special === "color-bomb")` branch.',
            r'else\s+if\s*\(\s*special\s*===\s*["\']color-bomb["\']\s*\)',
        ),
        (
            'Read the target color via `gem.getData("type")`.',
            r"const\s+colorTarget\s*=\s*gem\.getData\(",
        ),
        (
            "Iterate every grid cell and push matching-type cells.",
            r"if\s*\(\s*this\.gemTypes\[r\]\[c\]\s*===\s*colorTarget\s*&&\s*this\.gems\[r\]\[c\]\s*\)",
        ),
    ],
    seed_text=seed_wrap(
        solutions[19], activate_special_closure(ACTIVATE_SPECIAL_BODY_S18)
    ),
    mutate=lambda: state.replace(
        activate_special_closure(ACTIVATE_SPECIAL_BODY_S18),
        activate_special_closure(ACTIVATE_SPECIAL_BODY_S20),
    ),
)


# -----------------------------------------------------------------------------
# Step 21: T/L-shape wrapped gem creation.

# Cascade S21: after run-based sparing, scan for H/V intersections of same type
# and tag those cells as wrapped.
CASCADE_BODY_S21 = CASCADE_BODY_S19.replace(
    "      [...allCells.values()].forEach(({ row, col }) => {\n",
    "      const hRuns = matches.runs.filter((r) => r.orient === \"h\");\n"
    "      const vRuns = matches.runs.filter((r) => r.orient === \"v\");\n"
    "      hRuns.forEach((h) => {\n"
    "        vRuns.forEach((v) => {\n"
    "          if (h.type !== v.type) return;\n"
    "          const hr = h.row;\n"
    "          const vc = v.col;\n"
    "          const inH = vc >= h.col && vc < h.col + h.len;\n"
    "          const inV = hr >= v.row && hr < v.row + v.len;\n"
    "          if (!(inH && inV)) return;\n"
    "          const key = `${hr},${vc}`;\n"
    "          if (spared.has(key)) return;\n"
    "          const gem = this.gems[hr][vc];\n"
    "          if (!gem) return;\n"
    '          if (gem.getData("special")) return;\n'
    "          spared.add(key);\n"
    "          gem.setData({\n"
    "            row: hr,\n"
    "            col: vc,\n"
    "            type: h.type,\n"
    '            special: "wrapped"\n'
    "          });\n"
    "          this.tweens.add({\n"
    "            targets: gem,\n"
    "            scale: 1.5,\n"
    "            duration: 180,\n"
    "            yoyo: true,\n"
    '            ease: "Cubic.easeOut"\n'
    "          });\n"
    "        });\n"
    "      });\n"
    "      [...allCells.values()].forEach(({ row, col }) => {\n",
)

step(
    21,
    title="Step 21",
    description=(
        "When a match forms a T or L shape - a horizontal run AND a "
        "vertical run that intersect at one cell, sharing the same type - "
        "the intersection cell becomes a WRAPPED gem. Wrapped gems clear "
        "a 3x3 area on activation (step 22).\n\n"
        "After the existing run-sparing block in cascade, add:\n\n"
        "```js\n"
        'const hRuns = matches.runs.filter((r) => r.orient === "h");\n'
        'const vRuns = matches.runs.filter((r) => r.orient === "v");\n'
        "hRuns.forEach((h) => {\n"
        "  vRuns.forEach((v) => {\n"
        "    if (h.type !== v.type) return;\n"
        "    const hr = h.row;\n"
        "    const vc = v.col;\n"
        "    const inH = vc >= h.col && vc < h.col + h.len;\n"
        "    const inV = hr >= v.row && hr < v.row + v.len;\n"
        "    if (!(inH && inV)) return;\n"
        "    const key = `${hr},${vc}`;\n"
        "    if (spared.has(key)) return;\n"
        "    const gem = this.gems[hr][vc];\n"
        "    if (!gem) return;\n"
        '    if (gem.getData("special")) return;\n'
        "    spared.add(key);\n"
        "    gem.setData({\n"
        "      row: hr,\n"
        "      col: vc,\n"
        "      type: h.type,\n"
        '      special: "wrapped"\n'
        "    });\n"
        "    this.tweens.add({\n"
        "      targets: gem,\n"
        "      scale: 1.5,\n"
        "      duration: 180,\n"
        "      yoyo: true,\n"
        '      ease: \"Cubic.easeOut\"\n'
        "    });\n"
        "  });\n"
        "});\n```\n\n"
        "The cross product of `hRuns x vRuns` is small - at most ~3x3 = "
        "9 pairs. We bail early on type mismatch and on cells already "
        "spared by the 4-run / 5-run logic (so a 5-run doesn't get "
        "demoted from color-bomb to wrapped)."
    ),
    hints=[
        (
            'Filter horizontal runs with `matches.runs.filter((r) => r.orient === "h")`.',
            r'hRuns\s*=\s*matches\.runs\.filter\(\s*\(\s*r\s*\)\s*=>\s*r\.orient\s*===\s*["\']h["\']\s*\)',
        ),
        (
            "Cross-iterate hRuns x vRuns.",
            r"hRuns\.forEach\([\s\S]*vRuns\.forEach",
        ),
        (
            "Check `inH && inV` for the actual intersection cell.",
            r"const\s+inH\s*=\s*vc\s*>=\s*h\.col\s*&&\s*vc\s*<\s*h\.col\s*\+\s*h\.len",
        ),
        (
            'Tag the intersection gem with `special: "wrapped"`.',
            r'special:\s*["\']wrapped["\']',
        ),
    ],
    seed_text=seed_wrap(solutions[20], cascade_closure(CASCADE_BODY_S19)),
    mutate=lambda: state.replace(
        cascade_closure(CASCADE_BODY_S19), cascade_closure(CASCADE_BODY_S21)
    ),
)


# -----------------------------------------------------------------------------
# Step 22: wrapped activation - clear 3x3 area.

ACTIVATE_SPECIAL_BODY_S22 = ACTIVATE_SPECIAL_BODY_S20.replace(
    "      } else if (special === \"color-bomb\") {\n"
    '        const colorTarget = gem.getData("type");\n'
    "        for (let r = 0; r < this.rows; r++) {\n"
    "          for (let c = 0; c < this.cols; c++) {\n"
    "            if (this.gemTypes[r][c] === colorTarget && this.gems[r][c]) {\n"
    "              targets.push({ row: r, col: c, type: colorTarget });\n"
    "            }\n"
    "          }\n"
    "        }\n"
    "      }\n",
    "      } else if (special === \"color-bomb\") {\n"
    '        const colorTarget = gem.getData("type");\n'
    "        for (let r = 0; r < this.rows; r++) {\n"
    "          for (let c = 0; c < this.cols; c++) {\n"
    "            if (this.gemTypes[r][c] === colorTarget && this.gems[r][c]) {\n"
    "              targets.push({ row: r, col: c, type: colorTarget });\n"
    "            }\n"
    "          }\n"
    "        }\n"
    "      } else if (special === \"wrapped\") {\n"
    "        for (let dr = -1; dr <= 1; dr++) {\n"
    "          for (let dc = -1; dc <= 1; dc++) {\n"
    "            const r = sr + dr;\n"
    "            const c = sc + dc;\n"
    "            if (r < 0 || r >= this.rows) continue;\n"
    "            if (c < 0 || c >= this.cols) continue;\n"
    "            if (!this.gems[r][c]) continue;\n"
    "            targets.push({ row: r, col: c, type: this.gemTypes[r][c] });\n"
    "          }\n"
    "        }\n"
    "      }\n",
)

step(
    22,
    title="Step 22",
    description=(
        "A wrapped gem clears every gem in a 3x3 area centered on "
        "itself. Add the `wrapped` branch to `activateSpecial`:\n\n"
        "```js\n"
        '} else if (special === "wrapped") {\n'
        "  for (let dr = -1; dr <= 1; dr++) {\n"
        "    for (let dc = -1; dc <= 1; dc++) {\n"
        "      const r = sr + dr;\n"
        "      const c = sc + dc;\n"
        "      if (r < 0 || r >= this.rows) continue;\n"
        "      if (c < 0 || c >= this.cols) continue;\n"
        "      if (!this.gems[r][c]) continue;\n"
        "      targets.push({ row: r, col: c, type: this.gemTypes[r][c] });\n"
        "    }\n"
        "  }\n"
        "}\n```\n\n"
        "The bounds check `r < 0 || r >= this.rows` keeps the 3x3 from "
        "wrapping past the grid edges, so a wrapped on row 0 only "
        "clears 6 gems instead of 9."
    ),
    hints=[
        (
            'Add an `else if (special === "wrapped")` branch.',
            r'else\s+if\s*\(\s*special\s*===\s*["\']wrapped["\']\s*\)',
        ),
        (
            "Iterate `dr` and `dc` from -1 to 1.",
            r"for\s*\(\s*let\s+dr\s*=\s*-1\s*;\s*dr\s*<=\s*1\s*;\s*dr\+\+\s*\)[\s\S]*for\s*\(\s*let\s+dc\s*=\s*-1\s*;\s*dc\s*<=\s*1",
        ),
        (
            "Bail with bounds checks `r < 0 || r >= this.rows`.",
            r"if\s*\(\s*r\s*<\s*0\s*\|\|\s*r\s*>=\s*this\.rows\s*\)\s*continue",
        ),
    ],
    seed_text=seed_wrap(
        solutions[21], activate_special_closure(ACTIVATE_SPECIAL_BODY_S20)
    ),
    mutate=lambda: state.replace(
        activate_special_closure(ACTIVATE_SPECIAL_BODY_S20),
        activate_special_closure(ACTIVATE_SPECIAL_BODY_S22),
    ),
)


# -----------------------------------------------------------------------------
# Step 23: animate special creation with tweens.chain (multi-stage pulse).

CASCADE_BODY_S23 = CASCADE_BODY_S21.replace(
    "        this.tweens.add({\n"
    "          targets: gem,\n"
    "          scale: 1.4,\n"
    "          duration: 160,\n"
    "          yoyo: true,\n"
    '          ease: "Cubic.easeOut"\n'
    "        });\n",
    "        this.tweens.chain({\n"
    "          targets: gem,\n"
    "          tweens: [\n"
    '            { scale: 1.5, duration: 120, ease: "Cubic.easeOut" },\n'
    '            { scale: 0.85, duration: 80, ease: "Cubic.easeIn" },\n'
    '            { scale: 1, duration: 140, ease: "Back.easeOut" }\n'
    "          ]\n"
    "        });\n",
).replace(
    "          this.tweens.add({\n"
    "            targets: gem,\n"
    "            scale: 1.5,\n"
    "            duration: 180,\n"
    "            yoyo: true,\n"
    '            ease: "Cubic.easeOut"\n'
    "          });\n",
    "          this.tweens.chain({\n"
    "            targets: gem,\n"
    "            tweens: [\n"
    '              { scale: 1.7, duration: 140, ease: "Cubic.easeOut" },\n'
    '              { scale: 0.9, duration: 80, ease: "Cubic.easeIn" },\n'
    '              { scale: 1, duration: 140, ease: "Back.easeOut" }\n'
    "            ]\n"
    "          });\n",
)

step(
    23,
    title="Step 23",
    description=(
        "The simple yoyo scale doesn't sell creation drama. Use "
        "`tweens.chain` for a 3-stage pulse: pop big, dip below "
        "baseline, settle with a `Back.easeOut` overshoot. The dip+"
        "rebound reads as 'gathering energy then releasing'.\n\n"
        "Replace both special-creation tweens with `tweens.chain`. The "
        "run-spawned stripe / color-bomb gets:\n\n"
        "```js\n"
        "this.tweens.chain({\n"
        "  targets: gem,\n"
        "  tweens: [\n"
        '    { scale: 1.5, duration: 120, ease: "Cubic.easeOut" },\n'
        '    { scale: 0.85, duration: 80, ease: "Cubic.easeIn" },\n'
        '    { scale: 1, duration: 140, ease: "Back.easeOut" }\n'
        "  ]\n"
        "});\n```\n\n"
        "And the wrapped intersection gets a slightly bigger pop "
        "(`scale: 1.7`, longer first stage) because T/L matches are "
        "rarer.\n\n"
        "Three stages chained on one target = exactly what "
        "`tweens.chain` was designed for. The dip-and-rebound shape is "
        "what gives the gem its 'just born' feeling."
    ),
    hints=[
        (
            "Use `this.tweens.chain({ targets: gem, tweens: [...] })`.",
            r"this\.tweens\.chain\(\s*\{\s*targets:\s*gem\s*,\s*tweens:",
        ),
        (
            "Stage 1: `scale: 1.5, duration: 120, ease: \"Cubic.easeOut\"`.",
            r"scale:\s*1\.5\s*,\s*duration:\s*120\s*,\s*ease:\s*[\"\']Cubic\.easeOut",
        ),
        (
            "Stage 2 dip: `scale: 0.85, duration: 80, ease: \"Cubic.easeIn\"`.",
            r"scale:\s*0\.85\s*,\s*duration:\s*80\s*,\s*ease:\s*[\"\']Cubic\.easeIn",
        ),
        (
            "Stage 3 settle: `scale: 1, duration: 140, ease: \"Back.easeOut\"`.",
            r"scale:\s*1\s*,\s*duration:\s*140\s*,\s*ease:\s*[\"\']Back\.easeOut",
        ),
        (
            "For wrapped (intersection), bump stage 1 to `scale: 1.7`.",
            r"scale:\s*1\.7\s*,\s*duration:\s*140",
        ),
    ],
    seed_text=seed_wrap(solutions[22], cascade_closure(CASCADE_BODY_S21)),
    mutate=lambda: state.replace(
        cascade_closure(CASCADE_BODY_S21), cascade_closure(CASCADE_BODY_S23)
    ),
)


# -----------------------------------------------------------------------------
# Step 24: level definitions + lazy-init level state in cascade.

CASCADE_BODY_S24 = CASCADE_BODY_S23.replace(
    "      this.score ??= 0;\n"
    "      this.combo ??= 0;\n"
    "      this.combo = depth + 1;\n",
    "      this.score ??= 0;\n"
    "      this.combo ??= 0;\n"
    "      this.combo = depth + 1;\n"
    "      this.LEVELS ??= [\n"
    "        { color: 0, target: 25, moves: 20 },\n"
    "        { color: 1, target: 30, moves: 22 },\n"
    "        { color: 2, target: 35, moves: 24 }\n"
    "      ];\n"
    "      this.level ??= 0;\n"
    "      this.movesLeft ??= this.LEVELS[this.level].moves;\n"
    "      this.targetColor ??= this.LEVELS[this.level].color;\n"
    "      this.targetCount ??= this.LEVELS[this.level].target;\n"
    "      this.matchedTarget ??= 0;\n"
    "      const targetMatched = matches.cells.filter(\n"
    "        (c) => c.type === this.targetColor\n"
    "      ).length;\n"
    "      if (targetMatched > 0) {\n"
    "        this.matchedTarget += targetMatched;\n"
    '        this.events.emit("targetUpdate", {\n'
    "          matched: this.matchedTarget,\n"
    "          target: this.targetCount\n"
    "        });\n"
    "      }\n",
)

step(
    24,
    title="Step 24",
    description=(
        "A puzzle without a goal is just a sandbox. Define three levels, "
        "each with a `targetColor`, `target` count, and move budget. "
        "Track how many target-color gems have been matched.\n\n"
        "Add the level state at the top of cascade, after the combo "
        "lines:\n\n"
        "```js\n"
        "this.LEVELS ??= [\n"
        "  { color: 0, target: 25, moves: 20 },\n"
        "  { color: 1, target: 30, moves: 22 },\n"
        "  { color: 2, target: 35, moves: 24 }\n"
        "];\n"
        "this.level ??= 0;\n"
        "this.movesLeft ??= this.LEVELS[this.level].moves;\n"
        "this.targetColor ??= this.LEVELS[this.level].color;\n"
        "this.targetCount ??= this.LEVELS[this.level].target;\n"
        "this.matchedTarget ??= 0;\n"
        "const targetMatched = matches.cells.filter(\n"
        "  (c) => c.type === this.targetColor\n"
        ").length;\n"
        "if (targetMatched > 0) {\n"
        "  this.matchedTarget += targetMatched;\n"
        '  this.events.emit("targetUpdate", {\n'
        "    matched: this.matchedTarget,\n"
        "    target: this.targetCount\n"
        "  });\n"
        "}\n```\n\n"
        "Three levels of escalating difficulty: 25 reds in 20 moves, 30 "
        "blues in 22 moves, 35 greens in 24 moves. The "
        "`matches.cells.filter` counts how many cleared gems matched the "
        "target color this cascade level - special-gem activations "
        "naturally count too because they expand `allCells` (which the "
        "filter doesn't see; we'll fix that in step 26)."
    ),
    hints=[
        (
            "Define `this.LEVELS ??= [...]` with three level configs.",
            r"this\.LEVELS\s*\?\?=\s*\[",
        ),
        (
            "Lazy-init `this.level ??= 0`, `this.movesLeft ??= ...`, etc.",
            r"this\.movesLeft\s*\?\?=\s*this\.LEVELS\[this\.level\]\.moves",
        ),
        (
            "Filter `matches.cells` by `c.type === this.targetColor` and accumulate.",
            r"matches\.cells\.filter\(\s*\(\s*c\s*\)\s*=>\s*c\.type\s*===\s*this\.targetColor",
        ),
        (
            'Emit `"targetUpdate"` with `{ matched, target }`.',
            r'this\.events\.emit\(\s*["\']targetUpdate["\']\s*,\s*\{\s*matched:\s*this\.matchedTarget',
        ),
    ],
    seed_text=seed_wrap(solutions[23], cascade_closure(CASCADE_BODY_S23)),
    mutate=lambda: state.replace(
        cascade_closure(CASCADE_BODY_S23), cascade_closure(CASCADE_BODY_S24)
    ),
)


# -----------------------------------------------------------------------------
# Step 25: HUD with moves remaining + objective. Updates UIScene to listen for
# movesUpdate / targetUpdate events. Decrement movesLeft per user swap.

UI_SCENE_S25 = (
    "\n\nclass UIScene extends Phaser.Scene {\n"
    "  constructor() {\n"
    '    super("UIScene");\n'
    "  }\n"
    "\n"
    "  create() {\n"
    "    this.scoreText = this.add\n"
    '      .text(20, 16, "Score: 0", {\n'
    '        fontSize: "22px",\n'
    '        color: "#ffffff",\n'
    '        fontStyle: "bold"\n'
    "      })\n"
    "      .setScrollFactor(0);\n"
    "    this.movesText = this.add\n"
    '      .text(400, 16, "Moves: --", {\n'
    '        fontSize: "20px",\n'
    '        color: "#ffd34d",\n'
    '        fontStyle: "bold"\n'
    "      })\n"
    "      .setScrollFactor(0)\n"
    "      .setOrigin(0.5, 0);\n"
    "    this.targetText = this.add\n"
    '      .text(780, 16, "0 / 0", {\n'
    '        fontSize: "20px",\n'
    '        color: "#ffffff"\n'
    "      })\n"
    "      .setScrollFactor(0)\n"
    "      .setOrigin(1, 0);\n"
    '    const main = this.scene.get("MainScene");\n'
    '    main.events.on("scoreUpdate", (score) => {\n'
    '      this.scoreText.setText("Score: " + score);\n'
    "    });\n"
    '    main.events.on("movesUpdate", (moves) => {\n'
    '      this.movesText.setText("Moves: " + moves);\n'
    "    });\n"
    '    main.events.on("targetUpdate", ({ matched, target }) => {\n'
    "      const clamped = Math.min(matched, target);\n"
    '      this.targetText.setText(clamped + " / " + target);\n'
    "    });\n"
    "  }\n"
    "}\n"
)

# Swap S25: decrement movesLeft when a user-initiated swap commits to a match.
SWAP_BODY_S25 = SWAP_BODY_S17.replace(
    "          } else {\n"
    "            this.cascade(matches, 0);\n"
    "          }\n",
    "          } else {\n"
    "            if (typeof this.movesLeft === \"number\") {\n"
    "              this.movesLeft--;\n"
    '              this.events.emit("movesUpdate", this.movesLeft);\n'
    "            }\n"
    "            this.cascade(matches, 0);\n"
    "          }\n",
)

step(
    25,
    title="Step 25",
    description=(
        "The HUD needs to show how many moves remain and progress toward "
        "the objective. Two changes:\n\n"
        "1. **Decrement `this.movesLeft`** per matched user swap, in "
        "`swap`'s match branch. Emit `movesUpdate`.\n"
        "1. **Add `movesText` and `targetText`** to UIScene plus the "
        "two new event listeners.\n\n"
        "Replace UIScene with the v25 version (3 text elements, 3 "
        "listeners) and update swap's match branch to:\n\n"
        "```js\n"
        "} else {\n"
        '  if (typeof this.movesLeft === "number") {\n'
        "    this.movesLeft--;\n"
        '    this.events.emit("movesUpdate", this.movesLeft);\n'
        "  }\n"
        "  this.cascade(matches, 0);\n"
        "}\n```\n\n"
        "We bail with `typeof this.movesLeft === \"number\"` because the "
        "first user swap fires *before* cascade (which initializes "
        "`movesLeft`) - the very first move is free. The HUD will show "
        "`Moves: --` until then."
    ),
    hints=[
        (
            "Add `this.movesText` to UIScene.create.",
            r"this\.movesText\s*=\s*this\.add",
        ),
        (
            "Add `this.targetText` aligned to the right edge.",
            r"setOrigin\(\s*1\s*,\s*0\s*\)",
        ),
        (
            'Listen for `"movesUpdate"` and update `movesText`.',
            r'main\.events\.on\(\s*["\']movesUpdate["\']\s*,\s*\(\s*moves\s*\)\s*=>',
        ),
        (
            'Listen for `"targetUpdate"` with destructuring `{ matched, target }`.',
            r'main\.events\.on\(\s*["\']targetUpdate["\']\s*,\s*\(\s*\{\s*matched\s*,\s*target\s*\}\s*\)',
        ),
        (
            "In `swap`'s match branch, decrement `this.movesLeft`.",
            r"this\.movesLeft--",
        ),
    ],
    seed_text=seed_wrap(
        solutions[24],
        swap_closure(SWAP_BODY_S17)
        + "    /* create-fx */\n"
        + "    /* create-music */\n"
        + "    this.scene.launch(\"UIScene\");\n"
        + "    /* create-tutorial */\n"
        + "    /* create-cleanup */\n"
        + "  }\n"
        + "\n"
        + "  update(time, delta) {\n"
        + "    /* update-body */\n"
        + "  }\n"
        + "}"
        + UI_SCENE_S14,
    ),
    mutate=lambda: state.replace(
        swap_closure(SWAP_BODY_S17)
        + "    /* create-fx */\n"
        + "    /* create-music */\n"
        + "    this.scene.launch(\"UIScene\");\n"
        + "    /* create-tutorial */\n"
        + "    /* create-cleanup */\n"
        + "  }\n"
        + "\n"
        + "  update(time, delta) {\n"
        + "    /* update-body */\n"
        + "  }\n"
        + "}"
        + UI_SCENE_S14,
        swap_closure(SWAP_BODY_S25)
        + "    /* create-fx */\n"
        + "    /* create-music */\n"
        + "    this.scene.launch(\"UIScene\");\n"
        + "    /* create-tutorial */\n"
        + "    /* create-cleanup */\n"
        + "  }\n"
        + "\n"
        + "  update(time, delta) {\n"
        + "    /* update-body */\n"
        + "  }\n"
        + "}"
        + UI_SCENE_S25,
    ),
)


# -----------------------------------------------------------------------------
# Step 26: introduce this.checkLevelEnd and call after cascade settles.

CHECK_LEVEL_END_BODY_S26 = (
    "      if (typeof this.movesLeft !== \"number\") return;\n"
    "      if (this.matchedTarget >= this.targetCount) {\n"
    '        this.events.emit("levelComplete", { level: this.level });\n'
    "      } else if (this.movesLeft <= 0) {\n"
    '        this.events.emit("levelFailed", { level: this.level });\n'
    "      }\n"
)


def check_level_end_closure(body: str) -> str:
    return (
        "    this.checkLevelEnd = () => {\n"
        f"{body}"
        "    };\n"
    )


# Cascade S26: at end of recurse-or-release, call checkLevelEnd when busy releases.
CASCADE_BODY_S26 = CASCADE_BODY_S24.replace(
    "          if (more.cells.length > 0) {\n"
    "            this.cascade(more, depth + 1);\n"
    "          } else {\n"
    "            this.busy = false;\n"
    "          }\n",
    "          if (more.cells.length > 0) {\n"
    "            this.cascade(more, depth + 1);\n"
    "          } else {\n"
    "            this.busy = false;\n"
    "            this.checkLevelEnd();\n"
    "          }\n",
)

step(
    26,
    title="Step 26",
    description=(
        "End conditions: the player WINS the level when "
        "`matchedTarget >= targetCount`, and LOSES when "
        "`movesLeft <= 0` without hitting target. Both check at the end "
        "of the cascade chain.\n\n"
        "Insert `this.checkLevelEnd` *after* `this.activateSpecial` in "
        "`/* create-methods */`:\n\n"
        "```js\n"
        + check_level_end_closure(CHECK_LEVEL_END_BODY_S26)
        + "```\n\n"
        "And add the call to cascade's lock-release branch:\n\n"
        "```js\n"
        "} else {\n"
        "  this.busy = false;\n"
        "  this.checkLevelEnd();\n"
        "}\n```\n\n"
        "Right now both branches just emit events. UIScene won't react "
        "to them yet - we'll wire win/lose UI next steps."
    ),
    hints=[
        (
            "Define `this.checkLevelEnd = () => { ... };`.",
            r"this\.checkLevelEnd\s*=\s*\(\s*\)\s*=>",
        ),
        (
            'Emit `"levelComplete"` when target met.',
            r'this\.events\.emit\(\s*["\']levelComplete["\']',
        ),
        (
            'Emit `"levelFailed"` when out of moves.',
            r'this\.events\.emit\(\s*["\']levelFailed["\']',
        ),
        (
            "Call `this.checkLevelEnd()` after cascade releases busy.",
            r"this\.busy\s*=\s*false\s*;\s*this\.checkLevelEnd\(\s*\)",
        ),
    ],
    seed_text=seed_wrap(
        solutions[25],
        find_matches_closure(FIND_MATCHES_BODY_S17)
        + activate_special_closure(ACTIVATE_SPECIAL_BODY_S22)
        + cascade_closure(CASCADE_BODY_S24),
    ),
    mutate=lambda: state.replace(
        find_matches_closure(FIND_MATCHES_BODY_S17)
        + activate_special_closure(ACTIVATE_SPECIAL_BODY_S22)
        + cascade_closure(CASCADE_BODY_S24),
        find_matches_closure(FIND_MATCHES_BODY_S17)
        + activate_special_closure(ACTIVATE_SPECIAL_BODY_S22)
        + check_level_end_closure(CHECK_LEVEL_END_BODY_S26)
        + cascade_closure(CASCADE_BODY_S26),
    ),
)


# -----------------------------------------------------------------------------
# Step 27: win -> next level. checkLevelEnd handles win path by advancing
# level and restarting MainScene.

CHECK_LEVEL_END_BODY_S27 = (
    "      if (typeof this.movesLeft !== \"number\") return;\n"
    "      if (this.matchedTarget >= this.targetCount) {\n"
    '        this.events.emit("levelComplete", { level: this.level });\n'
    "        this.cameras.main.flash(400, 100, 220, 180);\n"
    "        const nextLevel = this.level + 1;\n"
    "        this.time.delayedCall(700, () => {\n"
    "          if (nextLevel < this.LEVELS.length) {\n"
    '            this.scene.restart({ level: nextLevel });\n'
    "          } else {\n"
    '            this.events.emit("gameWon", {\n'
    "              score: this.score,\n"
    "              best: this.bestScore\n"
    "            });\n"
    "          }\n"
    "        });\n"
    "      } else if (this.movesLeft <= 0) {\n"
    '        this.events.emit("levelFailed", { level: this.level });\n'
    "      }\n"
)

INIT_METHOD = (
    "  init(data) {\n"
    "    this.startLevel = (data && data.level) || 0;\n"
    "  }\n"
    "\n"
)

# Cascade S27: when restarting with init data, level state should pick up
# from this.startLevel rather than always 0.
CASCADE_BODY_S27 = CASCADE_BODY_S26.replace(
    "      this.level ??= 0;\n",
    "      this.level ??= this.startLevel ?? 0;\n",
)

step(
    27,
    title="Step 27",
    description=(
        "On win, advance to the next level. Use `this.scene.restart` "
        "with init data so MainScene re-runs `create` with a fresh grid "
        "and fresh level state.\n\n"
        "Three changes:\n\n"
        "1. **Add a `init(data)` method** to MainScene that captures "
        "`data.level` as `this.startLevel`.\n"
        "1. **Lazy-init `this.level`** from `this.startLevel ?? 0` so "
        "restarts pick up the new level.\n"
        "1. **Update `checkLevelEnd`** to flash blue, then "
        "`this.scene.restart({ level: nextLevel })` after a 700ms beat.\n\n"
        "If the player clears the last level, emit `gameWon` instead. "
        "We'll wire a victory screen later."
    ),
    hints=[
        (
            "Define `init(data)` on MainScene capturing `data.level`.",
            r"init\s*\(\s*data\s*\)\s*\{[\s\S]*this\.startLevel",
        ),
        (
            "Lazy-init `this.level ??= this.startLevel ?? 0`.",
            r"this\.level\s*\?\?=\s*this\.startLevel\s*\?\?\s*0",
        ),
        (
            "Flash the camera blue with `cameras.main.flash(400, 100, 220, 180)`.",
            r"this\.cameras\.main\.flash\(\s*400\s*,\s*100\s*,\s*220\s*,\s*180\s*\)",
        ),
        (
            "Restart MainScene with `this.scene.restart({ level: nextLevel })`.",
            r"this\.scene\.restart\(\s*\{\s*level:\s*nextLevel\s*\}\s*\)",
        ),
        (
            'Emit `"gameWon"` when there is no next level.',
            r'this\.events\.emit\(\s*["\']gameWon["\']',
        ),
    ],
    seed_text=seed_wrap(
        solutions[26],
        "  preload() {\n"
        "    /* preload */\n"
        "  }\n"
        "\n"
        "  create() {\n"
        + check_level_end_closure(CHECK_LEVEL_END_BODY_S26).replace(
            "    this.checkLevelEnd",
            "  this.checkLevelEnd",  # bogus pattern; will be replaced below
        ),
    )
    if False
    else (
        # We use a simpler wrap: wrap the constructor + preload + create() opening
        # PLUS the checkLevelEnd closure body PLUS cascade body.
        seed_wrap(
            solutions[26],
            "  preload() {\n    /* preload */\n  }\n",
        )
    ),
    mutate=lambda: (
        state.replace(
            "  preload() {\n    /* preload */\n  }\n",
            "  preload() {\n    /* preload */\n  }\n\n" + INIT_METHOD,
        ),
        state.replace(
            check_level_end_closure(CHECK_LEVEL_END_BODY_S26),
            check_level_end_closure(CHECK_LEVEL_END_BODY_S27),
        ),
        state.replace(
            cascade_closure(CASCADE_BODY_S26), cascade_closure(CASCADE_BODY_S27)
        ),
    ),
)


# -----------------------------------------------------------------------------
# Step 28: GameOverScene + UIScene listens for levelFailed -> launch GameOver.

GAME_OVER_SCENE = (
    "\n\nclass GameOverScene extends Phaser.Scene {\n"
    "  constructor() {\n"
    '    super("GameOverScene");\n'
    "  }\n"
    "\n"
    "  init(data) {\n"
    "    this.payload = data || {};\n"
    "  }\n"
    "\n"
    "  create() {\n"
    "    const { width, height } = this.scale;\n"
    "    this.add\n"
    "      .rectangle(width / 2, height / 2, width, height, 0x000000, 0.75)\n"
    "      .setScrollFactor(0);\n"
    '    const title = this.payload.win ? "Level cleared!" : "Out of moves";\n'
    '    const titleColor = this.payload.win ? "#6dff4d" : "#ff4d6d";\n'
    "    this.add\n"
    "      .text(width / 2, height / 2 - 80, title, {\n"
    '        fontSize: "32px",\n'
    "        color: titleColor,\n"
    '        fontStyle: "bold"\n'
    "      })\n"
    "      .setOrigin(0.5);\n"
    "    this.add\n"
    "      .text(\n"
    "        width / 2,\n"
    "        height / 2 - 30,\n"
    '        "Score " + (this.payload.score || 0),\n'
    '        { fontSize: "22px", color: "#ffffff" }\n'
    "      )\n"
    "      .setOrigin(0.5);\n"
    "    this.add\n"
    "      .text(\n"
    "        width / 2,\n"
    "        height / 2 + 4,\n"
    '        "Best  " + (this.payload.best || 0),\n'
    '        { fontSize: "18px", color: "#ffd34d" }\n'
    "      )\n"
    "      .setOrigin(0.5);\n"
    "    const retry = this.add\n"
    '      .text(width / 2, height / 2 + 80, "Tap to retry", {\n'
    '        fontSize: "20px",\n'
    '        color: "#ffd34d",\n'
    '        fontStyle: "bold"\n'
    "      })\n"
    "      .setOrigin(0.5)\n"
    "      .setInteractive();\n"
    '    retry.on("pointerdown", () => {\n'
    '      this.scene.stop("UIScene");\n'
    '      this.scene.stop("GameOverScene");\n'
    "      const target = this.payload.win\n"
    "        ? (this.payload.level || 0)\n"
    "        : (this.payload.level || 0);\n"
    '      this.scene.start("MainScene", { level: target });\n'
    "    });\n"
    "  }\n"
    "}\n"
)

UI_SCENE_S28 = UI_SCENE_S25.replace(
    "    main.events.on(\"targetUpdate\", ({ matched, target }) => {\n"
    "      const clamped = Math.min(matched, target);\n"
    "      this.targetText.setText(clamped + \" / \" + target);\n"
    "    });\n"
    "  }\n"
    "}\n",
    "    main.events.on(\"targetUpdate\", ({ matched, target }) => {\n"
    "      const clamped = Math.min(matched, target);\n"
    "      this.targetText.setText(clamped + \" / \" + target);\n"
    "    });\n"
    '    main.events.on("levelFailed", () => {\n'
    "      const payload = {\n"
    "        win: false,\n"
    "        level: main.level,\n"
    "        score: main.score,\n"
    "        best: main.bestScore || 0\n"
    "      };\n"
    '      this.scene.stop("MainScene");\n'
    "      this.time.delayedCall(200, () => {\n"
    '        this.scene.launch("GameOverScene", payload);\n'
    "      });\n"
    "    });\n"
    "  }\n"
    "}\n",
)

step(
    28,
    title="Step 28",
    description=(
        "Lose state needs a Game Over screen. Add a `GameOverScene` "
        "class with a tap-to-retry button, register it in the `scene` "
        "array, and have `UIScene` listen for `levelFailed` to launch "
        "the Game Over scene with the current score.\n\n"
        "Add `GameOverScene` after `UIScene`:\n\n"
        "```js\n"
        + GAME_OVER_SCENE.lstrip("\n")
        + "```\n\n"
        "And in UIScene, listen for `levelFailed`:\n\n"
        "```js\n"
        'main.events.on("levelFailed", () => {\n'
        "  const payload = {\n"
        "    win: false,\n"
        "    level: main.level,\n"
        "    score: main.score,\n"
        "    best: main.bestScore || 0\n"
        "  };\n"
        '  this.scene.stop("MainScene");\n'
        "  this.time.delayedCall(200, () => {\n"
        '    this.scene.launch("GameOverScene", payload);\n'
        "  });\n"
        "});\n```\n\n"
        "Plus update `config.scene` to "
        "`[MainScene, UIScene, GameOverScene]`."
    ),
    hints=[
        (
            'Define `class GameOverScene extends Phaser.Scene` with `super("GameOverScene")`.',
            r'class\s+GameOverScene\s+extends\s+Phaser\.Scene[\s\S]*super\(\s*["\']GameOverScene["\']\s*\)',
        ),
        (
            "Use `this.scale` for `width` / `height` inside GameOverScene.",
            r"const\s+\{\s*width\s*,\s*height\s*\}\s*=\s*this\.scale",
        ),
        (
            "Add a tap-to-retry text with `.setInteractive()` listening on `pointerdown`.",
            r'retry\.on\(\s*["\']pointerdown["\']\s*,',
        ),
        (
            'In UIScene, listen for `"levelFailed"` and launch GameOverScene.',
            r'main\.events\.on\(\s*["\']levelFailed["\']\s*,',
        ),
        (
            "Update the config scene array to include GameOverScene.",
            r"scene:\s*\[\s*MainScene\s*,\s*UIScene\s*,\s*GameOverScene\s*\]",
        ),
    ],
    seed_text=seed_wrap(
        solutions[27], UI_SCENE_S25 + CONFIG_WITH_UI
    ),
    mutate=lambda: state.replace(
        UI_SCENE_S25 + CONFIG_WITH_UI,
        UI_SCENE_S28 + GAME_OVER_SCENE + CONFIG_WITH_GAMEOVER,
    ),
)


# -----------------------------------------------------------------------------
# Step 29: persist best score per level in localStorage.

CHECK_LEVEL_END_BODY_S29 = CHECK_LEVEL_END_BODY_S27.replace(
    "      if (typeof this.movesLeft !== \"number\") return;\n",
    "      if (typeof this.movesLeft !== \"number\") return;\n"
    '      const bestKey = "match3-best-" + this.level;\n'
    "      const stored = parseInt(\n"
    "        window.localStorage?.getItem(bestKey) || \"0\",\n"
    "        10\n"
    "      );\n"
    "      this.bestScore = Math.max(stored, this.score);\n"
    "      if (this.bestScore > stored) {\n"
    "        window.localStorage?.setItem(bestKey, String(this.bestScore));\n"
    "      }\n",
)

step(
    29,
    title="Step 29",
    description=(
        "When a level ends (win or lose), check the player's score "
        "against the stored best for that level. Persist the higher one "
        "in `localStorage` under `match3-best-<level>`.\n\n"
        "Insert at the top of `checkLevelEnd`, just after the early "
        "return:\n\n"
        "```js\n"
        'const bestKey = "match3-best-" + this.level;\n'
        "const stored = parseInt(\n"
        '  window.localStorage?.getItem(bestKey) || "0",\n'
        "  10\n"
        ");\n"
        "this.bestScore = Math.max(stored, this.score);\n"
        "if (this.bestScore > stored) {\n"
        "  window.localStorage?.setItem(bestKey, String(this.bestScore));\n"
        "}\n```\n\n"
        "Use `?.` chaining on `window.localStorage` so the code doesn't "
        "throw on iframes that block storage. The Game Over scene reads "
        "`main.bestScore` for the 'Best' line."
    ),
    hints=[
        (
            'Read the stored best with `localStorage?.getItem("match3-best-" + this.level)`.',
            r'window\.localStorage\s*\?\.\s*getItem\(\s*bestKey\s*\)',
        ),
        (
            "Compare with `Math.max(stored, this.score)`.",
            r"Math\.max\(\s*stored\s*,\s*this\.score\s*\)",
        ),
        (
            "Persist with `localStorage?.setItem(bestKey, String(this.bestScore))`.",
            r"window\.localStorage\s*\?\.\s*setItem\(\s*bestKey\s*,\s*String\(\s*this\.bestScore\s*\)",
        ),
    ],
    seed_text=seed_wrap(
        solutions[28], check_level_end_closure(CHECK_LEVEL_END_BODY_S27)
    ),
    mutate=lambda: state.replace(
        check_level_end_closure(CHECK_LEVEL_END_BODY_S27),
        check_level_end_closure(CHECK_LEVEL_END_BODY_S29),
    ),
)


# -----------------------------------------------------------------------------
# Step 30: post-FX vignette around the playfield.

FX_BLOCK_S30 = (
    "    this.cameras.main.postFX.addVignette(0.5, 0.5, 0.7, 0.42);\n"
)

step(
    30,
    title="Step 30",
    description=(
        "A subtle vignette frames the playfield and pulls the eye "
        "toward the center where the action is. Apply it to the main "
        "camera once during create.\n\n"
        "After `/* create-fx */`, add:\n\n"
        "```js\n"
        "this.cameras.main.postFX.addVignette(0.5, 0.5, 0.7, 0.42);\n```\n\n"
        "`(0.5, 0.5)` centers the falloff. `radius: 0.7` controls how "
        "wide the bright zone is, `strength: 0.42` how dark the corners "
        "get. Don't push strength much above `0.5` - the bottom-row gems "
        "start getting lost in shadow."
    ),
    hints=[
        (
            "Call `this.cameras.main.postFX.addVignette(0.5, 0.5, 0.7, 0.42)`.",
            r"this\.cameras\.main\.postFX\.addVignette\(\s*0\.5\s*,\s*0\.5\s*,\s*0\.7\s*,\s*0\.42\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[29], "/* create-fx */\n"),
    mutate=lambda: state.insert_after("/* create-fx */\n", FX_BLOCK_S30),
)


# -----------------------------------------------------------------------------
# Step 31: bloom on special-gem creation.

CASCADE_BODY_S31 = CASCADE_BODY_S27.replace(
    "        this.tweens.chain({\n"
    "          targets: gem,\n"
    "          tweens: [\n"
    '            { scale: 1.5, duration: 120, ease: "Cubic.easeOut" },\n'
    '            { scale: 0.85, duration: 80, ease: "Cubic.easeIn" },\n'
    '            { scale: 1, duration: 140, ease: "Back.easeOut" }\n'
    "          ]\n"
    "        });\n"
    "      });\n",
    "        const bloom = gem.postFX.addBloom(0xffffff, 1, 1, 0.5, 1.6, 6);\n"
    "        this.tweens.add({\n"
    "          targets: bloom,\n"
    "          strength: { from: 1.6, to: 0 },\n"
    "          duration: 700,\n"
    "          onComplete: () => gem.postFX.remove(bloom)\n"
    "        });\n"
    "        this.tweens.chain({\n"
    "          targets: gem,\n"
    "          tweens: [\n"
    '            { scale: 1.5, duration: 120, ease: "Cubic.easeOut" },\n'
    '            { scale: 0.85, duration: 80, ease: "Cubic.easeIn" },\n'
    '            { scale: 1, duration: 140, ease: "Back.easeOut" }\n'
    "          ]\n"
    "        });\n"
    "      });\n",
).replace(
    "          this.tweens.chain({\n"
    "            targets: gem,\n"
    "            tweens: [\n"
    '              { scale: 1.7, duration: 140, ease: "Cubic.easeOut" },\n'
    '              { scale: 0.9, duration: 80, ease: "Cubic.easeIn" },\n'
    '              { scale: 1, duration: 140, ease: "Back.easeOut" }\n'
    "            ]\n"
    "          });\n",
    "          const bloom = gem.postFX.addBloom(0xff8be6, 1, 1, 0.6, 2, 8);\n"
    "          this.tweens.add({\n"
    "            targets: bloom,\n"
    "            strength: { from: 2, to: 0 },\n"
    "            duration: 800,\n"
    "            onComplete: () => gem.postFX.remove(bloom)\n"
    "          });\n"
    "          this.tweens.chain({\n"
    "            targets: gem,\n"
    "            tweens: [\n"
    '              { scale: 1.7, duration: 140, ease: "Cubic.easeOut" },\n'
    '              { scale: 0.9, duration: 80, ease: "Cubic.easeIn" },\n'
    '              { scale: 1, duration: 140, ease: "Back.easeOut" }\n'
    "            ]\n"
    "          });\n",
)

step(
    31,
    title="Step 31",
    description=(
        "Add a transient bloom to every newly-created special gem. "
        "Tween the bloom's `strength` from peak to `0` over 700-800ms, "
        "then `postFX.remove` to dispose of it (otherwise it costs every "
        "frame for the rest of the gem's life).\n\n"
        "Both creation paths get a bloom. The 4-/5-run special gets a "
        "white bloom; the wrapped intersection gets a magenta bloom for "
        "differentiation:\n\n"
        "```js\n"
        "const bloom = gem.postFX.addBloom(0xffffff, 1, 1, 0.5, 1.6, 6);\n"
        "this.tweens.add({\n"
        "  targets: bloom,\n"
        "  strength: { from: 1.6, to: 0 },\n"
        "  duration: 700,\n"
        "  onComplete: () => gem.postFX.remove(bloom)\n"
        "});\n```\n\n"
        "Tweening the controller's `strength` is exactly the per-frame "
        "FX manipulation pattern the lecture warned about - we pay the "
        "GPU cost for the duration of the bloom, then dispose."
    ),
    hints=[
        (
            "Add a bloom via `gem.postFX.addBloom(...)`.",
            r"gem\.postFX\.addBloom\(",
        ),
        (
            "Tween `bloom.strength` from peak to `0`.",
            r"strength:\s*\{\s*from:\s*\d+(?:\.\d+)?\s*,\s*to:\s*0\s*\}",
        ),
        (
            "Remove the bloom on tween complete with `gem.postFX.remove(bloom)`.",
            r"gem\.postFX\.remove\(\s*bloom\s*\)",
        ),
    ],
    seed_text=seed_wrap(solutions[30], cascade_closure(CASCADE_BODY_S27)),
    mutate=lambda: state.replace(
        cascade_closure(CASCADE_BODY_S27), cascade_closure(CASCADE_BODY_S31)
    ),
)


# -----------------------------------------------------------------------------
# Step 32: prefers-reduced-motion damping. Add a `this.reduceMotion` lazy init
# in cascade and a `dur` helper that scales tween durations.

CASCADE_BODY_S32 = CASCADE_BODY_S31.replace(
    "      this.score ??= 0;\n",
    "      this.reduceMotion ??=\n"
    '        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches || false;\n'
    "      const dur = (ms) =>\n"
    "        Math.round(ms * (this.reduceMotion ? 0.45 : 1));\n"
    "      this.score ??= 0;\n",
).replace(
    "          duration: 200,\n          ease: \"Cubic.easeIn\",\n          onComplete: () => gem.destroy()\n",
    "          duration: dur(200),\n          ease: \"Cubic.easeIn\",\n          onComplete: () => gem.destroy()\n",
).replace(
    "                duration: 280,\n                ease: \"Cubic.easeIn\"\n",
    "                duration: dur(280),\n                ease: \"Cubic.easeIn\"\n",
).replace(
    "              duration: 280 + (writeRow - r) * 40,\n",
    "              duration: dur(280 + (writeRow - r) * 40),\n",
)

step(
    32,
    title="Step 32",
    description=(
        "Players with `prefers-reduced-motion` enabled want shorter, "
        "calmer animations. Detect the preference once, then pipe long "
        "durations through a `dur()` helper that scales by `0.45` when "
        "reduced motion is active.\n\n"
        "At the top of cascade:\n\n"
        "```js\n"
        "this.reduceMotion ??=\n"
        '  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches || false;\n'
        "const dur = (ms) =>\n"
        "  Math.round(ms * (this.reduceMotion ? 0.45 : 1));\n```\n\n"
        "Then replace key durations: the destroy `duration: 200` becomes "
        "`duration: dur(200)`, the drop `duration: 280` becomes "
        "`duration: dur(280)`, and the staggered drop "
        "`duration: 280 + (writeRow - r) * 40` becomes "
        "`duration: dur(280 + (writeRow - r) * 40)`.\n\n"
        "The 200ms swap tween in `swap` is left at full speed because "
        "swaps are intentional player actions - shortening them feels "
        "twitchy."
    ),
    hints=[
        (
            'Use `window.matchMedia?.("(prefers-reduced-motion: reduce)").matches`.',
            r'window\.matchMedia\s*\?\.\s*\(\s*["\']\(prefers-reduced-motion:\s*reduce\)["\']\s*\)\.matches',
        ),
        (
            "Define a local `const dur = (ms) => Math.round(ms * (this.reduceMotion ? 0.45 : 1))`.",
            r"const\s+dur\s*=\s*\(\s*ms\s*\)\s*=>\s*Math\.round\(\s*ms\s*\*\s*\(\s*this\.reduceMotion\s*\?\s*0\.45\s*:\s*1\s*\)\s*\)",
        ),
        (
            "Wrap the destroy tween's duration: `duration: dur(200)`.",
            r"duration:\s*dur\(\s*200\s*\)",
        ),
        (
            "Wrap the drop tween durations: `duration: dur(280)` and `duration: dur(280 + (writeRow - r) * 40)`.",
            r"duration:\s*dur\(\s*280\s*\+\s*\(\s*writeRow\s*-\s*r\s*\)\s*\*\s*40\s*\)",
        ),
    ],
    seed_text=seed_wrap(solutions[31], cascade_closure(CASCADE_BODY_S31)),
    mutate=lambda: state.replace(
        cascade_closure(CASCADE_BODY_S31), cascade_closure(CASCADE_BODY_S32)
    ),
)


# -----------------------------------------------------------------------------
# Step 33: mobile touch - drag gem in cardinal direction to swap.

INPUT_BLOCK_S33 = (
    "    this.busy = false;\n"
    "    this.selected = null;\n"
    "    this.dragStart = null;\n"
    "    for (let r = 0; r < this.rows; r++) {\n"
    "      for (let c = 0; c < this.cols; c++) {\n"
    "        this.gems[r][c].setInteractive();\n"
    "      }\n"
    "    }\n"
    '    this.input.on("gameobjectdown", (pointer, gem) => {\n'
    "      if (this.busy) return;\n"
    "      this.dragStart = { x: pointer.x, y: pointer.y, gem };\n"
    "      if (!this.selected) {\n"
    "        this.selected = gem;\n"
    "        this.tweens.add({\n"
    "          targets: gem,\n"
    "          scale: 1.15,\n"
    "          duration: 120,\n"
    '          ease: "Cubic.easeOut"\n'
    "        });\n"
    "        return;\n"
    "      }\n"
    "      this.tweens.add({ targets: this.selected, scale: 1, duration: 120 });\n"
    "      const prev = this.selected;\n"
    "      this.selected = null;\n"
    "      if (gem === prev) return;\n"
    '      const dr = Math.abs(gem.getData("row") - prev.getData("row"));\n'
    '      const dc = Math.abs(gem.getData("col") - prev.getData("col"));\n'
    "      if (dr + dc !== 1) return;\n"
    '      const a = { row: prev.getData("row"), col: prev.getData("col") };\n'
    '      const b = { row: gem.getData("row"), col: gem.getData("col") };\n'
    "      this.swap(a, b);\n"
    "    });\n"
    '    this.input.on("pointerup", (pointer) => {\n'
    "      if (!this.dragStart) return;\n"
    "      const start = this.dragStart;\n"
    "      this.dragStart = null;\n"
    "      const dx = pointer.x - start.x;\n"
    "      const dy = pointer.y - start.y;\n"
    "      const adx = Math.abs(dx);\n"
    "      const ady = Math.abs(dy);\n"
    "      if (Math.max(adx, ady) < 20) return;\n"
    "      if (this.busy) return;\n"
    '      const r = start.gem.getData("row");\n'
    '      const c = start.gem.getData("col");\n'
    "      let target = null;\n"
    "      if (adx > ady) {\n"
    "        const tc = c + (dx > 0 ? 1 : -1);\n"
    "        if (tc >= 0 && tc < this.cols) target = this.gems[r][tc];\n"
    "      } else {\n"
    "        const tr = r + (dy > 0 ? 1 : -1);\n"
    "        if (tr >= 0 && tr < this.rows) target = this.gems[tr][c];\n"
    "      }\n"
    "      if (!target) return;\n"
    "      if (this.selected) {\n"
    "        this.tweens.add({ targets: this.selected, scale: 1, duration: 120 });\n"
    "        this.selected = null;\n"
    "      }\n"
    "      this.swap(\n"
    "        { row: r, col: c },\n"
    '        { row: target.getData("row"), col: target.getData("col") }\n'
    "      );\n"
    "    });\n"
)

step(
    33,
    title="Step 33",
    description=(
        "Mobile players expect to drag a gem in a direction to swap. "
        "Add a `pointerup` handler that compares the start and end "
        "positions: if the absolute drag is at least `20px`, treat it as "
        "a directional swap on the dominant axis (horizontal if "
        "`adx > ady`).\n\n"
        "Replace `/* create-input */` with the v33 block (preserves "
        "tap-then-tap, adds drag-to-swap). Key drag logic:\n\n"
        "```js\n"
        'this.input.on("pointerup", (pointer) => {\n'
        "  if (!this.dragStart) return;\n"
        "  const start = this.dragStart;\n"
        "  this.dragStart = null;\n"
        "  const dx = pointer.x - start.x;\n"
        "  const dy = pointer.y - start.y;\n"
        "  const adx = Math.abs(dx);\n"
        "  const ady = Math.abs(dy);\n"
        "  if (Math.max(adx, ady) < 20) return;\n"
        "  if (this.busy) return;\n"
        '  const r = start.gem.getData("row");\n'
        '  const c = start.gem.getData("col");\n'
        "  let target = null;\n"
        "  if (adx > ady) {\n"
        "    const tc = c + (dx > 0 ? 1 : -1);\n"
        "    if (tc >= 0 && tc < this.cols) target = this.gems[r][tc];\n"
        "  } else {\n"
        "    const tr = r + (dy > 0 ? 1 : -1);\n"
        "    if (tr >= 0 && tr < this.rows) target = this.gems[tr][c];\n"
        "  }\n"
        "  if (!target) return;\n"
        "  this.swap(\n"
        "    { row: r, col: c },\n"
        '    { row: target.getData("row"), col: target.getData("col") }\n'
        "  );\n"
        "});\n```\n\n"
        "The `Math.max(adx, ady) < 20` filter prevents accidental swaps "
        "from finger jitter. Both input modes coexist - mobile users "
        "drag, desktop users tap-tap."
    ),
    hints=[
        (
            "Track the drag start with `this.dragStart = { x: pointer.x, y: pointer.y, gem }` on `gameobjectdown`.",
            r"this\.dragStart\s*=\s*\{\s*x:\s*pointer\.x\s*,\s*y:\s*pointer\.y\s*,\s*gem\s*\}",
        ),
        (
            'Listen for `"pointerup"` to compute the drag delta.',
            r'this\.input\.on\(\s*["\']pointerup["\']',
        ),
        (
            "Threshold the drag with `Math.max(adx, ady) < 20`.",
            r"Math\.max\(\s*adx\s*,\s*ady\s*\)\s*<\s*20",
        ),
        (
            "Pick horizontal vs vertical with `if (adx > ady)`.",
            r"if\s*\(\s*adx\s*>\s*ady\s*\)\s*\{",
        ),
    ],
    seed_text=seed_wrap(solutions[32], INPUT_BLOCK_S5),
    mutate=lambda: state.replace(INPUT_BLOCK_S5, INPUT_BLOCK_S33),
)


# -----------------------------------------------------------------------------
# Step 34: tutorial overlay on first run.

TUTORIAL_BLOCK_S34 = (
    '    if (!window.localStorage?.getItem("match3-tutorial-seen")) {\n'
    "      const dim = this.add\n"
    "        .rectangle(width / 2, height / 2, width, height, 0x000000, 0.7)\n"
    "        .setDepth(100);\n"
    "      const card = this.add\n"
    "        .rectangle(width / 2, height / 2, 360, 220, 0x12121f, 1)\n"
    "        .setStrokeStyle(2, 0x55c8ff)\n"
    "        .setDepth(101);\n"
    "      const title = this.add\n"
    '        .text(width / 2, height / 2 - 70, "Match 3", {\n'
    '          fontFamily: "monospace",\n'
    '          fontSize: "24px",\n'
    '          color: "#fff"\n'
    "        })\n"
    "        .setOrigin(0.5)\n"
    "        .setDepth(102);\n"
    "      const body = this.add\n"
    "        .text(\n"
    "          width / 2,\n"
    "          height / 2 - 10,\n"
    '          "Drag or tap two adjacent gems\\nto swap. Match 3+ to clear.",\n'
    "          {\n"
    '            fontFamily: "monospace",\n'
    '            fontSize: "14px",\n'
    '            color: "#cdd",\n'
    '            align: "center"\n'
    "          }\n"
    "        )\n"
    "        .setOrigin(0.5)\n"
    "        .setDepth(102);\n"
    "      const cta = this.add\n"
    '        .text(width / 2, height / 2 + 60, "Tap to start", {\n'
    '          fontFamily: "monospace",\n'
    '          fontSize: "16px",\n'
    '          color: "#55c8ff"\n'
    "        })\n"
    "        .setOrigin(0.5)\n"
    "        .setDepth(102);\n"
    "      this.tweens.add({\n"
    "        targets: cta,\n"
    "        alpha: { from: 1, to: 0.3 },\n"
    "        duration: 700,\n"
    "        yoyo: true,\n"
    "        repeat: -1\n"
    "      });\n"
    "      const dismiss = () => {\n"
    '        window.localStorage?.setItem("match3-tutorial-seen", "1");\n'
    "        [dim, card, title, body, cta].forEach((o) => o.destroy());\n"
    "      };\n"
    '      dim.setInteractive().on("pointerdown", dismiss);\n'
    '      this.input.keyboard?.once("keydown", dismiss);\n'
    "    }\n"
)

step(
    34,
    title="Step 34",
    description=(
        "First-time players need to know they can swap gems. Show a "
        "dismissable tutorial overlay only on the first launch, gated by "
        "a `localStorage` flag.\n\n"
        "Add a `/* create-tutorial */` block right before "
        "`/* create-cleanup */`. The overlay is a stack of `Rectangle` + "
        "`Text` game objects on `setDepth(100+)` to render above the "
        "grid. A pulsing 'Tap to start' CTA cues interaction. Dismiss "
        "via pointerdown on the dim layer or any keypress, and persist "
        "the seen-flag so it never shows again on this device:\n\n"
        "```js\n"
        'if (!window.localStorage?.getItem("match3-tutorial-seen")) {\n'
        "  const dim = this.add\n"
        "    .rectangle(width / 2, height / 2, width, height, 0x000000, 0.7)\n"
        "    .setDepth(100);\n"
        "  // ... card + title + body + pulsing CTA ...\n"
        "  const dismiss = () => {\n"
        '    window.localStorage?.setItem("match3-tutorial-seen", "1");\n'
        "    [dim, card, title, body, cta].forEach((o) => o.destroy());\n"
        "  };\n"
        '  dim.setInteractive().on("pointerdown", dismiss);\n'
        '  this.input.keyboard?.once("keydown", dismiss);\n'
        "}\n```\n\n"
        "All overlay objects live on `setDepth(100..102)`, layered "
        "above gems (default depth 0)."
    ),
    hints=[
        (
            "Gate the overlay on `window.localStorage?.getItem(\"match3-tutorial-seen\")`.",
            r'window\.localStorage\s*\?\.\s*getItem\(\s*["\']match3-tutorial-seen["\']\s*\)',
        ),
        (
            "Use `this.add.rectangle(...)` for the dim background and card.",
            r"this\.add\s*\n?\s*\.rectangle\(",
        ),
        (
            "Layer the overlay with `setDepth(100)` and above.",
            r"setDepth\(\s*10[0-2]\s*\)",
        ),
        (
            "Pulse the CTA with a yoyo/repeat tween.",
            r"yoyo:\s*true\s*,\s*\n\s*repeat:\s*-1",
        ),
        (
            "Persist with `window.localStorage?.setItem(\"match3-tutorial-seen\", \"1\")`.",
            r'window\.localStorage\s*\?\.\s*setItem\(\s*["\']match3-tutorial-seen["\']\s*,\s*["\']1["\']\s*\)',
        ),
    ],
    seed_text=seed_wrap(solutions[33], "    /* create-tutorial */\n"),
    mutate=lambda: state.replace(
        "    /* create-tutorial */\n",
        "    /* create-tutorial */\n" + TUTORIAL_BLOCK_S34,
    ),
)


# -----------------------------------------------------------------------------
# Step 35: idle-hint pulses on a possible match after 5s of inactivity.

HINT_HELPER_S35 = (
    "    this.findHint = () => {\n"
    "      for (let r = 0; r < this.rows; r++) {\n"
    "        for (let c = 0; c < this.cols; c++) {\n"
    "          if (c + 1 < this.cols) {\n"
    "            [\n"
    "              this.gemTypes[r][c],\n"
    "              this.gemTypes[r][c + 1]\n"
    "            ] = [\n"
    "              this.gemTypes[r][c + 1],\n"
    "              this.gemTypes[r][c]\n"
    "            ];\n"
    "            const ok = this.findMatches().cells.length > 0;\n"
    "            [\n"
    "              this.gemTypes[r][c],\n"
    "              this.gemTypes[r][c + 1]\n"
    "            ] = [\n"
    "              this.gemTypes[r][c + 1],\n"
    "              this.gemTypes[r][c]\n"
    "            ];\n"
    "            if (ok) return [this.gems[r][c], this.gems[r][c + 1]];\n"
    "          }\n"
    "          if (r + 1 < this.rows) {\n"
    "            [\n"
    "              this.gemTypes[r][c],\n"
    "              this.gemTypes[r + 1][c]\n"
    "            ] = [\n"
    "              this.gemTypes[r + 1][c],\n"
    "              this.gemTypes[r][c]\n"
    "            ];\n"
    "            const ok = this.findMatches().cells.length > 0;\n"
    "            [\n"
    "              this.gemTypes[r][c],\n"
    "              this.gemTypes[r + 1][c]\n"
    "            ] = [\n"
    "              this.gemTypes[r + 1][c],\n"
    "              this.gemTypes[r][c]\n"
    "            ];\n"
    "            if (ok) return [this.gems[r][c], this.gems[r + 1][c]];\n"
    "          }\n"
    "        }\n"
    "      }\n"
    "      return null;\n"
    "    };\n"
)

# methods block already contains find_matches_closure + activate_special_closure +
# swap_closure(SWAP_BODY_S25) + cascade_closure(CASCADE_BODY_S32) + check_level_end_closure().
# We append find_hint after them.

METHODS_S33 = (
    find_matches_closure(FIND_MATCHES_BODY_S17)
    + activate_special_closure(ACTIVATE_SPECIAL_BODY_S22)
    + check_level_end_closure(CHECK_LEVEL_END_BODY_S29)
    + cascade_closure(CASCADE_BODY_S32)
    + swap_closure(SWAP_BODY_S25)
)

# Update block: after each cascade settle, schedule a hint timer that pulses
# the suggested gems if the player idles for 5s. Also clear timer on swap.

CASCADE_BODY_S35 = CASCADE_BODY_S32.replace(
    "          } else {\n"
    "            this.busy = false;\n"
    "            this.checkLevelEnd();\n"
    "          }\n",
    "          } else {\n"
    "            this.busy = false;\n"
    "            this.checkLevelEnd();\n"
    "            this.hintTimer?.remove();\n"
    "            this.hintTimer = this.time.delayedCall(5000, () => {\n"
    "              if (this.busy) return;\n"
    "              const pair = this.findHint();\n"
    "              if (!pair) return;\n"
    "              this.tweens.add({\n"
    "                targets: pair,\n"
    "                scale: 1.15,\n"
    "                duration: 320,\n"
    "                yoyo: true,\n"
    "                repeat: 2,\n"
    '                ease: "Sine.easeInOut"\n'
    "              });\n"
    "            });\n"
    "          }\n",
)
if CASCADE_BODY_S35 == CASCADE_BODY_S32:
    raise SystemExit("CASCADE_BODY_S35 replace pattern did not match")

SWAP_BODY_S35 = SWAP_BODY_S25.replace(
    "      this.busy = true;\n",
    "      this.busy = true;\n      this.hintTimer?.remove();\n",
)

METHODS_S35 = (
    find_matches_closure(FIND_MATCHES_BODY_S17)
    + activate_special_closure(ACTIVATE_SPECIAL_BODY_S22)
    + check_level_end_closure(CHECK_LEVEL_END_BODY_S29)
    + cascade_closure(CASCADE_BODY_S35)
    + swap_closure(SWAP_BODY_S35)
    + HINT_HELPER_S35
)

step(
    35,
    title="Step 35",
    description=(
        "Idle players need a nudge. Add a `findHint()` helper that "
        "tries every adjacent swap, asks `findMatches()` if it would "
        "score, and returns the first pair that does. Then schedule a "
        "5-second `time.delayedCall` after each cascade settles - if "
        "the player still hasn't moved, pulse the hinted pair.\n\n"
        "Add `findHint`:\n\n"
        "```js\n"
        "this.findHint = () => {\n"
        "  for (let r = 0; r < this.rows; r++) {\n"
        "    for (let c = 0; c < this.cols; c++) {\n"
        "      if (c + 1 < this.cols) {\n"
        "        // simulate the swap, test, swap back\n"
        "        [this.gemTypes[r][c], this.gemTypes[r][c + 1]] =\n"
        "          [this.gemTypes[r][c + 1], this.gemTypes[r][c]];\n"
        "        const ok = this.findMatches().cells.length > 0;\n"
        "        [this.gemTypes[r][c], this.gemTypes[r][c + 1]] =\n"
        "          [this.gemTypes[r][c + 1], this.gemTypes[r][c]];\n"
        "        if (ok) return [this.gems[r][c], this.gems[r][c + 1]];\n"
        "      }\n"
        "      // ... mirror for vertical pair ...\n"
        "    }\n"
        "  }\n"
        "  return null;\n"
        "};\n```\n\n"
        "After the cascade settles, schedule the hint:\n\n"
        "```js\n"
        "this.hintTimer?.remove();\n"
        "this.hintTimer = this.time.delayedCall(5000, () => {\n"
        "  if (this.busy) return;\n"
        "  const pair = this.findHint();\n"
        "  if (!pair) return;\n"
        "  this.tweens.add({\n"
        "    targets: pair,\n"
        "    scale: 1.15,\n"
        "    duration: 320,\n"
        "    yoyo: true,\n"
        "    repeat: 2,\n"
        '    ease: \"Sine.easeInOut\"\n'
        "  });\n"
        "});\n```\n\n"
        "Also call `this.hintTimer?.remove()` in `swap` so a player "
        "action immediately cancels the pending pulse."
    ),
    hints=[
        (
            "Add a `this.findHint = () => { ... }` helper that simulates each adjacent swap.",
            r"this\.findHint\s*=\s*\(\s*\)\s*=>",
        ),
        (
            "Inside, swap, test `this.findMatches().cells.length > 0`, then swap back.",
            r"this\.findMatches\(\)\.cells\.length\s*>\s*0",
        ),
        (
            "Schedule the hint with `this.time.delayedCall(5000, ...)` after the settle.",
            r"this\.hintTimer\s*=\s*this\.time\.delayedCall\(\s*5000",
        ),
        (
            "Pulse the pair using a yoyo tween with `repeat: 2`.",
            r"repeat:\s*2",
        ),
        (
            "Cancel the hint on player action: `this.hintTimer?.remove()` at the top of swap.",
            r"this\.hintTimer\s*\?\.\s*remove\(\)",
        ),
    ],
    seed_text=seed_wrap(solutions[34], METHODS_S33),
    mutate=lambda: state.replace(METHODS_S33, METHODS_S35),
)


# -----------------------------------------------------------------------------
# Step 36: dead-board reshuffle. When findHint returns null, scramble.

CASCADE_BODY_S36 = CASCADE_BODY_S35.replace(
    "            this.hintTimer?.remove();\n"
    "            this.hintTimer = this.time.delayedCall(5000, () => {\n"
    "              if (this.busy) return;\n"
    "              const pair = this.findHint();\n"
    "              if (!pair) return;\n"
    "              this.tweens.add({\n"
    "                targets: pair,\n"
    "                scale: 1.15,\n"
    "                duration: 320,\n"
    "                yoyo: true,\n"
    "                repeat: 2,\n"
    '                ease: "Sine.easeInOut"\n'
    "              });\n"
    "            });\n",
    "            const pair = this.findHint();\n"
    "            if (!pair) {\n"
    "              this.reshuffle();\n"
    "              return;\n"
    "            }\n"
    "            this.hintTimer?.remove();\n"
    "            this.hintTimer = this.time.delayedCall(5000, () => {\n"
    "              if (this.busy) return;\n"
    "              const stillPair = this.findHint();\n"
    "              if (!stillPair) return;\n"
    "              this.tweens.add({\n"
    "                targets: stillPair,\n"
    "                scale: 1.15,\n"
    "                duration: 320,\n"
    "                yoyo: true,\n"
    "                repeat: 2,\n"
    '                ease: "Sine.easeInOut"\n'
    "              });\n"
    "            });\n",
)
if CASCADE_BODY_S36 == CASCADE_BODY_S35:
    raise SystemExit("CASCADE_BODY_S36 replace pattern did not match")

RESHUFFLE_HELPER_S36 = (
    "    this.reshuffle = () => {\n"
    "      this.busy = true;\n"
    "      const all = [];\n"
    "      for (let r = 0; r < this.rows; r++) {\n"
    "        for (let c = 0; c < this.cols; c++) {\n"
    "          if (this.gems[r][c]) all.push(this.gemTypes[r][c]);\n"
    "        }\n"
    "      }\n"
    "      Phaser.Utils.Array.Shuffle(all);\n"
    "      let idx = 0;\n"
    "      for (let r = 0; r < this.rows; r++) {\n"
    "        for (let c = 0; c < this.cols; c++) {\n"
    "          if (!this.gems[r][c]) continue;\n"
    "          const newType = all[idx++];\n"
    "          this.gemTypes[r][c] = newType;\n"
    "          this.gems[r][c]\n"
    "            .setTint(this.gemColors[newType])\n"
    '            .setData({ row: r, col: c, type: newType, special: null });\n'
    "        }\n"
    "      }\n"
    "      this.cameras.main.shake(220, 0.005);\n"
    "      const matches = this.findMatches();\n"
    "      if (matches.cells.length > 0) {\n"
    "        this.cascade(matches, 0);\n"
    "      } else {\n"
    "        this.busy = false;\n"
    "      }\n"
    "    };\n"
)

METHODS_S36 = (
    find_matches_closure(FIND_MATCHES_BODY_S17)
    + activate_special_closure(ACTIVATE_SPECIAL_BODY_S22)
    + check_level_end_closure(CHECK_LEVEL_END_BODY_S29)
    + cascade_closure(CASCADE_BODY_S36)
    + swap_closure(SWAP_BODY_S35)
    + HINT_HELPER_S35
    + RESHUFFLE_HELPER_S36
)

step(
    36,
    title="Step 36",
    description=(
        "If `findHint()` returns `null`, the player is stuck on a dead "
        "board with no possible matches. Add a `reshuffle()` helper that "
        "scrambles all gem types in place using "
        "`Phaser.Utils.Array.Shuffle`, then validates by running "
        "`findMatches()` - if the shuffle accidentally created matches, "
        "kick straight into a cascade.\n\n"
        "```js\n"
        "this.reshuffle = () => {\n"
        "  this.busy = true;\n"
        "  const all = [];\n"
        "  for (let r = 0; r < this.rows; r++) {\n"
        "    for (let c = 0; c < this.cols; c++) {\n"
        "      if (this.gems[r][c]) all.push(this.gemTypes[r][c]);\n"
        "    }\n"
        "  }\n"
        "  Phaser.Utils.Array.Shuffle(all);\n"
        "  let idx = 0;\n"
        "  for (let r = 0; r < this.rows; r++) {\n"
        "    for (let c = 0; c < this.cols; c++) {\n"
        "      if (!this.gems[r][c]) continue;\n"
        "      const newType = all[idx++];\n"
        "      this.gemTypes[r][c] = newType;\n"
        "      this.gems[r][c]\n"
        "        .setTint(this.gemColors[newType])\n"
        '        .setData({ row: r, col: c, type: newType, special: null });\n'
        "    }\n"
        "  }\n"
        "  this.cameras.main.shake(220, 0.005);\n"
        "  const matches = this.findMatches();\n"
        "  if (matches.cells.length > 0) {\n"
        "    this.cascade(matches, 0);\n"
        "  } else {\n"
        "    this.busy = false;\n"
        "  }\n"
        "};\n```\n\n"
        "After cascade settles, call `findHint()` first - if `null`, "
        "trigger the reshuffle instead of starting the idle timer. The "
        "`cameras.main.shake` gives haptic feedback that something "
        "structural just happened. Reshuffles preserve gem identity (no "
        "destroyed/respawned objects), so combo/score state is "
        "untouched."
    ),
    hints=[
        (
            "Add `this.reshuffle = () => { ... }` as a new helper.",
            r"this\.reshuffle\s*=\s*\(\s*\)\s*=>",
        ),
        (
            "Use `Phaser.Utils.Array.Shuffle(all)` to randomize the type pool.",
            r"Phaser\.Utils\.Array\.Shuffle\(",
        ),
        (
            "Call `this.cameras.main.shake` for haptic feedback.",
            r"this\.cameras\.main\.shake\(",
        ),
        (
            "After cascade settles, `if (!this.findHint()) this.reshuffle();` instead of starting the hint timer.",
            r"if\s*\(\s*!\s*pair\s*\)\s*\{\s*\n\s*this\.reshuffle\(\)",
        ),
    ],
    seed_text=seed_wrap(solutions[35], METHODS_S35),
    mutate=lambda: state.replace(METHODS_S35, METHODS_S36),
)


# -----------------------------------------------------------------------------
# Step 37: TitleScene as the boot scene; "Tap to start" launches MainScene.

CONFIG_S36 = (
    "\n"
    "const config = {\n"
    "  type: Phaser.AUTO,\n"
    "  width: 800,\n"
    "  height: 600,\n"
    '  parent: "game-container",\n'
    '  backgroundColor: "#0a0a1a",\n'
    "  scene: [MainScene, UIScene, GameOverScene]\n"
    "};\n"
    "\n"
    "new Phaser.Game(config);\n"
)

TITLE_SCENE_S37 = (
    "\n"
    "class TitleScene extends Phaser.Scene {\n"
    "  constructor() {\n"
    '    super("TitleScene");\n'
    "  }\n"
    "\n"
    "  create() {\n"
    "    const { width, height } = this.scale;\n"
    "    this.cameras.main.setBackgroundColor(0x101025);\n"
    "    this.add\n"
    '      .text(width / 2, height / 2 - 80, "MATCH 3", {\n'
    '        fontFamily: "monospace",\n'
    '        fontSize: "56px",\n'
    '        color: "#ffd34d",\n'
    '        fontStyle: "bold"\n'
    "      })\n"
    "      .setOrigin(0.5);\n"
    "    this.add\n"
    '      .text(width / 2, height / 2 - 20, "Tween Mastery Workshop", {\n'
    '        fontFamily: "monospace",\n'
    '        fontSize: "16px",\n'
    '        color: "#cdd"\n'
    "      })\n"
    "      .setOrigin(0.5);\n"
    "    const start = this.add\n"
    '      .text(width / 2, height / 2 + 60, "Tap to start", {\n'
    '        fontFamily: "monospace",\n'
    '        fontSize: "22px",\n'
    '        color: "#55c8ff",\n'
    '        fontStyle: "bold"\n'
    "      })\n"
    "      .setOrigin(0.5)\n"
    "      .setInteractive();\n"
    "    this.tweens.add({\n"
    "      targets: start,\n"
    "      alpha: { from: 1, to: 0.4 },\n"
    "      duration: 700,\n"
    "      yoyo: true,\n"
    "      repeat: -1\n"
    "    });\n"
    "    const launch = () => {\n"
    '      this.scene.start("MainScene", { level: 0 });\n'
    "    };\n"
    '    start.on("pointerdown", launch);\n'
    '    this.input.keyboard?.once("keydown", launch);\n'
    "  }\n"
    "}\n"
)

CONFIG_S37 = (
    "\n"
    "const config = {\n"
    "  type: Phaser.AUTO,\n"
    "  width: 800,\n"
    "  height: 600,\n"
    '  parent: "game-container",\n'
    '  backgroundColor: "#0a0a1a",\n'
    "  scene: [TitleScene, MainScene, UIScene, GameOverScene]\n"
    "};\n"
    "\n"
    "new Phaser.Game(config);\n"
)

step(
    37,
    title="Step 37",
    description=(
        "Add a `TitleScene` as the boot scene so the player isn't "
        "dropped straight into a board. The title pulses 'Tap to start' "
        "via a yoyo tween and launches MainScene with `{ level: 0 }`.\n\n"
        "Define `TitleScene` after `GameOverScene` and put it FIRST in "
        "the config's `scene` array - Phaser boots the first scene by "
        "default:\n\n"
        "```js\n"
        "class TitleScene extends Phaser.Scene {\n"
        "  constructor() {\n"
        '    super(\"TitleScene\");\n'
        "  }\n"
        "\n"
        "  create() {\n"
        "    // ... title text + pulsing 'Tap to start' ...\n"
        "    const launch = () => {\n"
        '      this.scene.start(\"MainScene\", { level: 0 });\n'
        "    };\n"
        '    start.on(\"pointerdown\", launch);\n'
        '    this.input.keyboard?.once(\"keydown\", launch);\n'
        "  }\n"
        "}\n"
        "\n"
        "scene: [TitleScene, MainScene, UIScene, GameOverScene]\n```\n\n"
        "Pulsing CTAs are a tween idiom: `alpha: { from: 1, to: 0.4 }` "
        "with `yoyo: true` and `repeat: -1` runs forever. The "
        "`Tap to start` text becomes a soft signal without stealing "
        "attention from the title."
    ),
    hints=[
        (
            'Define `class TitleScene extends Phaser.Scene` with `super("TitleScene")`.',
            r'class\s+TitleScene\s+extends\s+Phaser\.Scene[\s\S]*super\(\s*["\']TitleScene["\']\s*\)',
        ),
        (
            'Pulse the CTA with a yoyo `alpha` tween (`repeat: -1`).',
            r'alpha:\s*\{\s*from:\s*1\s*,\s*to:\s*0\.4\s*\}',
        ),
        (
            'Launch `MainScene` from the start handler with `this.scene.start("MainScene", { level: 0 })`.',
            r'this\.scene\.start\(\s*["\']MainScene["\']\s*,\s*\{\s*level:\s*0\s*\}\s*\)',
        ),
        (
            "Add `TitleScene` as the FIRST entry in the config's `scene` array.",
            r"scene:\s*\[\s*TitleScene\s*,",
        ),
    ],
    seed_text=seed_wrap(solutions[36], CONFIG_S36),
    mutate=lambda: state.replace(CONFIG_S36, TITLE_SCENE_S37 + CONFIG_S37),
)


# -----------------------------------------------------------------------------
# Step 38: Time-Attack mode. TitleScene gets two buttons; MainScene reads
# data.mode and either uses level system or counts down a 60s timer.

INIT_BLOCK = (
    "  init(data) {\n    this.startLevel = (data && data.level) || 0;\n  }\n"
)
INIT_BLOCK_S38 = (
    "  init(data) {\n"
    "    this.startLevel = (data && data.level) || 0;\n"
    '    this.mode = (data && data.mode) || "classic";\n'
    "    this.timeLeft = 60;\n"
    "  }\n"
)

CHECK_LEVEL_END_BODY_S38 = (
    "      const bestKey =\n"
    '        this.mode === "time" ? "match3-best-time" : "match3-best-" + this.level;\n'
    "      const stored = parseInt(\n"
    '        window.localStorage?.getItem(bestKey) || "0",\n'
    "        10\n"
    "      );\n"
    "      this.bestScore = Math.max(stored, this.score);\n"
    "      if (this.bestScore > stored) {\n"
    "        window.localStorage?.setItem(bestKey, String(this.bestScore));\n"
    "      }\n"
    '      if (this.mode === "time") {\n'
    "        if (this.timeLeft <= 0) {\n"
    '          this.events.emit("levelFailed", { level: this.level });\n'
    "        }\n"
    "        return;\n"
    "      }\n"
    '      if (typeof this.movesLeft !== "number") return;\n'
    "      if (this.matchedTarget >= this.targetCount) {\n"
    '        this.events.emit("levelComplete", { level: this.level });\n'
    "        this.cameras.main.flash(400, 100, 220, 180);\n"
    "        const nextLevel = this.level + 1;\n"
    "        this.time.delayedCall(700, () => {\n"
    "          if (nextLevel < this.LEVELS.length) {\n"
    '            this.scene.restart({ level: nextLevel });\n'
    "          } else {\n"
    '            this.events.emit("gameWon", {\n'
    "              score: this.score,\n"
    "              best: this.bestScore\n"
    "            });\n"
    "          }\n"
    "        });\n"
    "      } else if (this.movesLeft <= 0) {\n"
    '        this.events.emit("levelFailed", { level: this.level });\n'
    "      }\n"
)

UPDATE_BODY_S38 = (
    '    if (this.mode !== "time") return;\n'
    "    if (this.timeLeft <= 0) return;\n"
    "    this.timeLeft -= delta / 1000;\n"
    '    this.events.emit("timeUpdate", Math.max(0, this.timeLeft));\n'
    "    if (this.timeLeft <= 0 && !this.busy) {\n"
    "      this.checkLevelEnd();\n"
    "    }\n"
)

TITLE_SCENE_S38 = TITLE_SCENE_S37.replace(
    "    const start = this.add\n"
    '      .text(width / 2, height / 2 + 60, "Tap to start", {\n'
    '        fontFamily: "monospace",\n'
    '        fontSize: "22px",\n'
    '        color: "#55c8ff",\n'
    '        fontStyle: "bold"\n'
    "      })\n"
    "      .setOrigin(0.5)\n"
    "      .setInteractive();\n"
    "    this.tweens.add({\n"
    "      targets: start,\n"
    "      alpha: { from: 1, to: 0.4 },\n"
    "      duration: 700,\n"
    "      yoyo: true,\n"
    "      repeat: -1\n"
    "    });\n"
    "    const launch = () => {\n"
    '      this.scene.start("MainScene", { level: 0 });\n'
    "    };\n"
    '    start.on("pointerdown", launch);\n'
    '    this.input.keyboard?.once("keydown", launch);\n',
    "    const makeBtn = (y, label, mode) => {\n"
    "      const btn = this.add\n"
    "        .text(width / 2, y, label, {\n"
    '          fontFamily: "monospace",\n'
    '          fontSize: "22px",\n'
    '          color: "#55c8ff",\n'
    '          fontStyle: "bold",\n'
    "          backgroundColor: \"#0d2235\",\n"
    "          padding: { x: 18, y: 8 }\n"
    "        })\n"
    "        .setOrigin(0.5)\n"
    "        .setInteractive();\n"
    '      btn.on("pointerover", () => btn.setColor("#ffd34d"));\n'
    '      btn.on("pointerout", () => btn.setColor("#55c8ff"));\n'
    '      btn.on("pointerdown", () =>\n'
    '        this.scene.start("MainScene", { level: 0, mode })\n'
    "      );\n"
    "      return btn;\n"
    "    };\n"
    '    makeBtn(height / 2 + 50, "Classic", "classic");\n'
    '    makeBtn(height / 2 + 100, "Time Attack 60s", "time");\n',
)

step(
    38,
    title="Step 38",
    description=(
        "Add a Time Attack mode: 60 seconds, unlimited moves, score "
        "until the timer runs out. Add a `mode` parameter to "
        "`MainScene.init`, branch `checkLevelEnd` for `'time'` mode, "
        "and decrement `this.timeLeft` in `update(time, delta)` (where "
        "`delta` is milliseconds since the previous frame).\n\n"
        "Update `init(data)` to read both `level` and `mode`:\n\n"
        "```js\n"
        "init(data) {\n"
        "  this.startLevel = (data && data.level) || 0;\n"
        '  this.mode = (data && data.mode) || "classic";\n'
        "  this.timeLeft = 60;\n"
        "}\n```\n\n"
        "Drive the timer from `update`:\n\n"
        "```js\n"
        'if (this.mode !== "time") return;\n'
        "if (this.timeLeft <= 0) return;\n"
        "this.timeLeft -= delta / 1000;\n"
        'this.events.emit("timeUpdate", Math.max(0, this.timeLeft));\n'
        "if (this.timeLeft <= 0 && !this.busy) this.checkLevelEnd();\n```\n\n"
        "In `checkLevelEnd`, branch early on `mode === \"time\"`: emit "
        "`levelFailed` only when the timer hits zero. Time-attack uses "
        "a separate `localStorage` key `match3-best-time` so it doesn't "
        "compete with classic-level bests. The TitleScene grows two "
        "buttons that pass the chosen mode to `MainScene.start`."
    ),
    hints=[
        (
            "Read `data && data.mode` (default `\"classic\"`) in `init`.",
            r'this\.mode\s*=\s*\(\s*data\s*&&\s*data\.mode\s*\)\s*\|\|\s*["\']classic["\']',
        ),
        (
            "Decrement `this.timeLeft -= delta / 1000` in `update`.",
            r"this\.timeLeft\s*-=\s*delta\s*/\s*1000",
        ),
        (
            'Emit `"timeUpdate"` with `Math.max(0, this.timeLeft)`.',
            r'this\.events\.emit\(\s*["\']timeUpdate["\']\s*,\s*Math\.max\(\s*0\s*,\s*this\.timeLeft\s*\)\s*\)',
        ),
        (
            'In `checkLevelEnd`, branch early when `this.mode === "time"`.',
            r'this\.mode\s*===\s*["\']time["\']',
        ),
        (
            "TitleScene now has two buttons that pass `mode` to `MainScene.start`.",
            r'this\.scene\.start\(\s*["\']MainScene["\']\s*,\s*\{\s*level:\s*0\s*,\s*mode\s*\}\s*\)',
        ),
    ],
    seed_text=seed_wrap_range(solutions[37], INIT_BLOCK, TITLE_SCENE_S37),
    mutate=lambda: (
        state.replace(INIT_BLOCK, INIT_BLOCK_S38),
        state.replace(
            check_level_end_closure(CHECK_LEVEL_END_BODY_S29),
            check_level_end_closure(CHECK_LEVEL_END_BODY_S38),
        ),
        state.replace("    /* update-body */\n", UPDATE_BODY_S38),
        state.replace(TITLE_SCENE_S37, TITLE_SCENE_S38),
    ),
)


# -----------------------------------------------------------------------------
# Step 39: Audio cues. Preload 4 SFX from chapter 7 assets and trigger them
# at swap, match-clear, special creation, and game over.

PRELOAD_S39 = (
    '    this.load.audio(\n'
    '      "sfxClick",\n'
    '      "/curriculum-assets/phaser/audio/sfx-ui-click.ogg"\n'
    "    );\n"
    "    this.load.audio(\n"
    '      "sfxMatch",\n'
    '      "/curriculum-assets/phaser/audio/sfx-coin.ogg"\n'
    "    );\n"
    "    this.load.audio(\n"
    '      "sfxSpecial",\n'
    '      "/curriculum-assets/phaser/audio/sfx-explosion.ogg"\n'
    "    );\n"
    "    this.load.audio(\n"
    '      "sfxFail",\n'
    '      "/curriculum-assets/phaser/audio/sfx-hit.ogg"\n'
    "    );\n"
)

# In swap, play sfxClick at start. In cascade, play sfxMatch on settle and
# sfxSpecial on special creation.

SWAP_BODY_S39 = SWAP_BODY_S35.replace(
    "      this.busy = true;\n      this.hintTimer?.remove();\n",
    "      this.busy = true;\n"
    "      this.hintTimer?.remove();\n"
    '      this.sound.play("sfxClick", { volume: 0.4 });\n',
)

CASCADE_BODY_S39 = CASCADE_BODY_S36.replace(
    "      this.score += allCells.size * 10 * this.combo;\n",
    "      this.score += allCells.size * 10 * this.combo;\n"
    '      this.sound.play("sfxMatch", { volume: 0.45 });\n',
).replace(
    "        const bloom = gem.postFX.addBloom(0xffffff, 1, 1, 0.5, 1.6, 6);\n",
    '        this.sound.play("sfxSpecial", { volume: 0.35, rate: 1.2 });\n'
    "        const bloom = gem.postFX.addBloom(0xffffff, 1, 1, 0.5, 1.6, 6);\n",
).replace(
    "          const bloom = gem.postFX.addBloom(0xff8be6, 1, 1, 0.6, 2, 8);\n",
    '          this.sound.play("sfxSpecial", { volume: 0.4, rate: 0.9 });\n'
    "          const bloom = gem.postFX.addBloom(0xff8be6, 1, 1, 0.6, 2, 8);\n",
)

CHECK_LEVEL_END_BODY_S39 = CHECK_LEVEL_END_BODY_S38.replace(
    '          this.events.emit("levelFailed", { level: this.level });\n'
    "        }\n"
    "        return;\n"
    "      }\n",
    '          this.sound.play("sfxFail", { volume: 0.5 });\n'
    '          this.events.emit("levelFailed", { level: this.level });\n'
    "        }\n"
    "        return;\n"
    "      }\n",
).replace(
    "      } else if (this.movesLeft <= 0) {\n"
    '        this.events.emit("levelFailed", { level: this.level });\n'
    "      }\n",
    "      } else if (this.movesLeft <= 0) {\n"
    '        this.sound.play("sfxFail", { volume: 0.5 });\n'
    '        this.events.emit("levelFailed", { level: this.level });\n'
    "      }\n",
)

METHODS_S39 = (
    find_matches_closure(FIND_MATCHES_BODY_S17)
    + activate_special_closure(ACTIVATE_SPECIAL_BODY_S22)
    + check_level_end_closure(CHECK_LEVEL_END_BODY_S39)
    + cascade_closure(CASCADE_BODY_S39)
    + swap_closure(SWAP_BODY_S39)
    + HINT_HELPER_S35
    + RESHUFFLE_HELPER_S36
)

METHODS_S38 = (
    find_matches_closure(FIND_MATCHES_BODY_S17)
    + activate_special_closure(ACTIVATE_SPECIAL_BODY_S22)
    + check_level_end_closure(CHECK_LEVEL_END_BODY_S38)
    + cascade_closure(CASCADE_BODY_S36)
    + swap_closure(SWAP_BODY_S35)
    + HINT_HELPER_S35
    + RESHUFFLE_HELPER_S36
)

step(
    39,
    title="Step 39",
    description=(
        "Audio cues turn a silent grid into a satisfying juicy puzzle. "
        "Load 4 SFX in `preload`, then call `this.sound.play(...)` at "
        "the four key moments: swap initiated, match cleared, special "
        "created, and game lost.\n\n"
        "Preload borrows Chapter 7's audio assets:\n\n"
        "```js\n"
        'this.load.audio("sfxClick", "/curriculum-assets/phaser/audio/sfx-ui-click.ogg");\n'
        'this.load.audio("sfxMatch", "/curriculum-assets/phaser/audio/sfx-coin.ogg");\n'
        'this.load.audio("sfxSpecial", "/curriculum-assets/phaser/audio/sfx-explosion.ogg");\n'
        'this.load.audio("sfxFail", "/curriculum-assets/phaser/audio/sfx-hit.ogg");\n'
        "```\n\n"
        "Trigger at the right beats:\n\n"
        "```js\n"
        "// in swap, after busy=true\n"
        'this.sound.play("sfxClick", { volume: 0.4 });\n'
        "\n"
        "// in cascade, after score increment\n"
        'this.sound.play("sfxMatch", { volume: 0.45 });\n'
        "\n"
        "// in cascade, before each special-creation bloom\n"
        'this.sound.play("sfxSpecial", { volume: 0.35, rate: 1.2 });\n'
        "\n"
        "// in checkLevelEnd, before each levelFailed emit\n"
        'this.sound.play("sfxFail", { volume: 0.5 });\n'
        "```\n\n"
        "The wrapped-special SFX uses `rate: 0.9` (lower pitch) and the "
        "stripe/color-bomb uses `rate: 1.2` (higher pitch), so the ear "
        "can distinguish them. Volumes stay below 0.5 so SFX never "
        "drown out one another."
    ),
    hints=[
        (
            "Load `sfxClick`, `sfxMatch`, `sfxSpecial`, `sfxFail` in `preload`.",
            r'this\.load\.audio\(\s*["\']sfxClick["\']',
        ),
        (
            'Play `"sfxClick"` at the start of `swap`.',
            r'this\.sound\.play\(\s*["\']sfxClick["\']\s*,',
        ),
        (
            'Play `"sfxMatch"` after the score increment in `cascade`.',
            r'this\.sound\.play\(\s*["\']sfxMatch["\']\s*,',
        ),
        (
            'Play `"sfxSpecial"` before each bloom in `cascade`.',
            r'this\.sound\.play\(\s*["\']sfxSpecial["\']\s*,',
        ),
        (
            'Play `"sfxFail"` before each `levelFailed` emit in `checkLevelEnd`.',
            r'this\.sound\.play\(\s*["\']sfxFail["\']\s*,',
        ),
    ],
    seed_text=seed_wrap_range(
        solutions[38], "    /* preload */\n", METHODS_S38
    ),
    mutate=lambda: (
        state.replace("    /* preload */\n", "    /* preload */\n" + PRELOAD_S39),
        state.replace(METHODS_S38, METHODS_S39),
    ),
)


# -----------------------------------------------------------------------------
# Step 40: Pause menu. Press P to pause, overlay shows Resume / Quit.

INPUT_BLOCK_S40_TAIL = (
    '    this.input.keyboard?.on("keydown-P", () => {\n'
    "      if (this.pauseLayer || this.busy) return;\n"
    "      this.scene.pause();\n"
    "      this.scene.launch(\"PauseScene\");\n"
    "    });\n"
)

PAUSE_SCENE_S40 = (
    "\n"
    "class PauseScene extends Phaser.Scene {\n"
    "  constructor() {\n"
    '    super("PauseScene");\n'
    "  }\n"
    "\n"
    "  create() {\n"
    "    const { width, height } = this.scale;\n"
    "    this.add\n"
    "      .rectangle(width / 2, height / 2, width, height, 0x000000, 0.7)\n"
    "      .setScrollFactor(0);\n"
    "    this.add\n"
    '      .text(width / 2, height / 2 - 60, "Paused", {\n'
    '        fontFamily: "monospace",\n'
    '        fontSize: "32px",\n'
    '        color: "#ffd34d",\n'
    '        fontStyle: "bold"\n'
    "      })\n"
    "      .setOrigin(0.5);\n"
    "    const mkBtn = (y, label, onPick) => {\n"
    "      const btn = this.add\n"
    "        .text(width / 2, y, label, {\n"
    '          fontFamily: "monospace",\n'
    '          fontSize: "20px",\n'
    '          color: "#55c8ff",\n'
    "          backgroundColor: \"#0d2235\",\n"
    "          padding: { x: 16, y: 6 }\n"
    "        })\n"
    "        .setOrigin(0.5)\n"
    "        .setInteractive();\n"
    '      btn.on("pointerover", () => btn.setColor("#ffd34d"));\n'
    '      btn.on("pointerout", () => btn.setColor("#55c8ff"));\n'
    '      btn.on("pointerdown", onPick);\n'
    "      return btn;\n"
    "    };\n"
    '    mkBtn(height / 2, "Resume", () => {\n'
    "      this.scene.stop();\n"
    '      this.scene.resume("MainScene");\n'
    "    });\n"
    '    mkBtn(height / 2 + 50, "Back to Title", () => {\n'
    '      this.scene.stop("MainScene");\n'
    '      this.scene.stop("UIScene");\n'
    "      this.scene.stop();\n"
    '      this.scene.start("TitleScene");\n'
    "    });\n"
    '    this.input.keyboard?.on("keydown-P", () => {\n'
    "      this.scene.stop();\n"
    '      this.scene.resume("MainScene");\n'
    "    });\n"
    "  }\n"
    "}\n"
)

CONFIG_S40 = (
    "\n"
    "const config = {\n"
    "  type: Phaser.AUTO,\n"
    "  width: 800,\n"
    "  height: 600,\n"
    '  parent: "game-container",\n'
    '  backgroundColor: "#0a0a1a",\n'
    "  scene: [TitleScene, MainScene, UIScene, GameOverScene, PauseScene]\n"
    "};\n"
    "\n"
    "new Phaser.Game(config);\n"
)

step(
    40,
    title="Step 40",
    description=(
        "Add a `PauseScene` triggered by the `P` key. The pause menu "
        "stops MainScene's update + tween processing, then offers "
        "Resume or Back-to-Title.\n\n"
        "In MainScene's `/* create-input */`, listen for the P key:\n\n"
        "```js\n"
        'this.input.keyboard?.on("keydown-P", () => {\n'
        "  if (this.pauseLayer || this.busy) return;\n"
        "  this.scene.pause();\n"
        '  this.scene.launch(\"PauseScene\");\n'
        "});\n```\n\n"
        "Define `PauseScene` after `GameOverScene`. Its `create` "
        "stacks a dim overlay, two buttons, and a P-key listener that "
        "mirrors the resume action so the player can toggle pause "
        "with the same key:\n\n"
        "```js\n"
        'mkBtn(height / 2, "Resume", () => {\n'
        "  this.scene.stop();\n"
        '  this.scene.resume(\"MainScene\");\n'
        "});\n```\n\n"
        "Add `PauseScene` to the config's `scene` array. Order doesn't "
        "matter for non-boot scenes, but keep it last for readability. "
        "`scene.pause()` halts MainScene's update loop AND its tween "
        "manager - the grid freezes mid-animation, exactly what we "
        "want for a clean pause."
    ),
    hints=[
        (
            'Listen for `"keydown-P"` in MainScene to launch `PauseScene`.',
            r'this\.input\.keyboard\s*\?\.\s*on\(\s*["\']keydown-P["\']',
        ),
        (
            'Call `this.scene.pause()` then `this.scene.launch("PauseScene")`.',
            r'this\.scene\.pause\(\)[\s\S]*this\.scene\.launch\(\s*["\']PauseScene["\']',
        ),
        (
            'Define `class PauseScene extends Phaser.Scene` with `super("PauseScene")`.',
            r'class\s+PauseScene\s+extends\s+Phaser\.Scene[\s\S]*super\(\s*["\']PauseScene["\']\s*\)',
        ),
        (
            "Resume button calls `this.scene.resume(\"MainScene\")` after stopping itself.",
            r'this\.scene\.resume\(\s*["\']MainScene["\']\s*\)',
        ),
        (
            "Add `PauseScene` to the config's `scene` array.",
            r"scene:\s*\[\s*TitleScene\s*,\s*MainScene\s*,\s*UIScene\s*,\s*GameOverScene\s*,\s*PauseScene\s*\]",
        ),
    ],
    seed_text=seed_wrap_range(
        solutions[39], "    /* create-cleanup */\n", CONFIG_S37
    ),
    mutate=lambda: (
        state.replace(
            "    /* create-cleanup */\n",
            INPUT_BLOCK_S40_TAIL + "    /* create-cleanup */\n",
        ),
        state.replace(CONFIG_S37, PAUSE_SCENE_S40 + CONFIG_S40),
    ),
)


# -----------------------------------------------------------------------------
# Step 41: persistent mute toggle. M key, applies to all SFX, persists in
# localStorage.

INIT_BLOCK_S41 = (
    "  init(data) {\n"
    "    this.startLevel = (data && data.level) || 0;\n"
    '    this.mode = (data && data.mode) || "classic";\n'
    "    this.timeLeft = 60;\n"
    "    this.muted =\n"
    '      window.localStorage?.getItem("match3-muted") === "1";\n'
    "  }\n"
)

INPUT_BLOCK_MUTE_TAIL = (
    '    this.input.keyboard?.on("keydown-M", () => {\n'
    "      this.muted = !this.muted;\n"
    "      this.sound.mute = this.muted;\n"
    "      window.localStorage?.setItem(\n"
    '        "match3-muted",\n'
    '        this.muted ? "1" : "0"\n'
    "      );\n"
    '      this.events.emit("muteUpdate", this.muted);\n'
    "    });\n"
    "    this.sound.mute = this.muted;\n"
)

step(
    41,
    title="Step 41",
    description=(
        "Add a mute toggle on `M`. Read the persisted state in `init`, "
        "apply it to `this.sound.mute` once in create, and toggle it on "
        "every M keypress.\n\n"
        "Update `init`:\n\n"
        "```js\n"
        "this.muted =\n"
        '  window.localStorage?.getItem("match3-muted") === "1";\n'
        "```\n\n"
        "Just before `/* create-cleanup */`, register the keybind and "
        "apply the initial mute state:\n\n"
        "```js\n"
        'this.input.keyboard?.on("keydown-M", () => {\n'
        "  this.muted = !this.muted;\n"
        "  this.sound.mute = this.muted;\n"
        "  window.localStorage?.setItem(\n"
        '    "match3-muted",\n'
        '    this.muted ? "1" : "0"\n'
        "  );\n"
        '  this.events.emit("muteUpdate", this.muted);\n'
        "});\n"
        "this.sound.mute = this.muted;\n```\n\n"
        "`this.sound.mute = true` silences ALL sounds globally - cleaner "
        "than tracking per-call volume. The UI can listen for "
        "`muteUpdate` to toggle a mute icon in a future step."
    ),
    hints=[
        (
            "Read `\"match3-muted\"` from localStorage in `init`.",
            r'window\.localStorage\s*\?\.\s*getItem\(\s*["\']match3-muted["\']\s*\)\s*===\s*["\']1["\']',
        ),
        (
            "Bind `\"keydown-M\"` to flip `this.muted` and assign to `this.sound.mute`.",
            r'this\.input\.keyboard\s*\?\.\s*on\(\s*["\']keydown-M["\']',
        ),
        (
            "Persist the new state with `setItem(\"match3-muted\", this.muted ? \"1\" : \"0\")`.",
            r'setItem\(\s*\n?\s*["\']match3-muted["\']\s*,\s*\n?\s*this\.muted\s*\?\s*["\']1["\']\s*:\s*["\']0["\']\s*\)',
        ),
        (
            "Apply the initial state once with `this.sound.mute = this.muted;`.",
            r"this\.sound\.mute\s*=\s*this\.muted",
        ),
    ],
    seed_text=seed_wrap_range(
        solutions[40], INIT_BLOCK_S38, INPUT_BLOCK_S40_TAIL
    ),
    mutate=lambda: (
        state.replace(INIT_BLOCK_S38, INIT_BLOCK_S41),
        state.replace(
            INPUT_BLOCK_S40_TAIL,
            INPUT_BLOCK_S40_TAIL + INPUT_BLOCK_MUTE_TAIL,
        ),
    ),
)


# -----------------------------------------------------------------------------
# Step 42: UIScene timer + best-score line in time-attack mode.

UI_SCENE_S25 = (
    "\n"
    "class UIScene extends Phaser.Scene {\n"
    "  constructor() {\n"
    '    super("UIScene");\n'
    "  }\n"
    "\n"
    "  create() {\n"
    "    this.scoreText = this.add\n"
    '      .text(20, 16, "Score: 0", {\n'
    '        fontSize: "22px",\n'
    '        color: "#ffffff",\n'
    '        fontStyle: "bold"\n'
    "      })\n"
    "      .setScrollFactor(0);\n"
    "    this.movesText = this.add\n"
    '      .text(400, 16, "Moves: --", {\n'
    '        fontSize: "20px",\n'
    '        color: "#ffd34d",\n'
    '        fontStyle: "bold"\n'
    "      })\n"
    "      .setScrollFactor(0)\n"
    "      .setOrigin(0.5, 0);\n"
    "    this.targetText = this.add\n"
    '      .text(780, 16, "0 / 0", {\n'
    '        fontSize: "20px",\n'
    '        color: "#ffffff"\n'
    "      })\n"
    "      .setScrollFactor(0)\n"
    "      .setOrigin(1, 0);\n"
    "    const main = this.scene.get(\"MainScene\");\n"
    '    main.events.on("scoreUpdate", (score) => {\n'
    '      this.scoreText.setText("Score: " + score);\n'
    "    });\n"
    '    main.events.on("movesUpdate", (moves) => {\n'
    '      this.movesText.setText("Moves: " + moves);\n'
    "    });\n"
    '    main.events.on("targetUpdate", ({ matched, target }) => {\n'
    "      const clamped = Math.min(matched, target);\n"
    '      this.targetText.setText(clamped + " / " + target);\n'
    "    });\n"
    '    main.events.on("levelFailed", () => {\n'
    "      const payload = {\n"
    "        win: false,\n"
    "        level: main.level,\n"
    "        score: main.score,\n"
    "        best: main.bestScore || 0\n"
    "      };\n"
    '      this.scene.stop("MainScene");\n'
    "      this.time.delayedCall(200, () => {\n"
    '        this.scene.launch("GameOverScene", payload);\n'
    "      });\n"
    "    });\n"
    "  }\n"
    "}\n"
)

UI_SCENE_S42 = UI_SCENE_S25.replace(
    "    this.movesText = this.add\n"
    '      .text(400, 16, "Moves: --", {\n',
    "    const main = this.scene.get(\"MainScene\");\n"
    "    const inTimeMode = main.mode === \"time\";\n"
    "    this.movesText = this.add\n"
    '      .text(400, 16, inTimeMode ? "Time: 60s" : "Moves: --", {\n',
).replace(
    "    const main = this.scene.get(\"MainScene\");\n"
    '    main.events.on("scoreUpdate", (score) => {\n'
    '      this.scoreText.setText("Score: " + score);\n'
    "    });\n"
    '    main.events.on("movesUpdate", (moves) => {\n'
    '      this.movesText.setText("Moves: " + moves);\n'
    "    });\n",
    '    main.events.on("scoreUpdate", (score) => {\n'
    '      this.scoreText.setText("Score: " + score);\n'
    "    });\n"
    '    main.events.on("movesUpdate", (moves) => {\n'
    "      if (inTimeMode) return;\n"
    '      this.movesText.setText("Moves: " + moves);\n'
    "    });\n"
    '    main.events.on("timeUpdate", (t) => {\n'
    "      if (!inTimeMode) return;\n"
    '      const sec = Math.ceil(t).toString().padStart(2, "0");\n'
    '      this.movesText.setText("Time: " + sec + "s");\n'
    "      if (t < 10) this.movesText.setColor(\"#ff4d6d\");\n"
    "    });\n",
)

step(
    42,
    title="Step 42",
    description=(
        "Wire the time-attack timer into UIScene so the player can see "
        "the seconds tick down. Detect mode at scene start and pick "
        "`'Moves: --'` vs `'Time: 60s'` text accordingly. Listen for "
        "`timeUpdate`, format with `padStart`, and turn the text red "
        "below 10s.\n\n"
        "Detect mode at the top of UIScene's `create`:\n\n"
        "```js\n"
        'const main = this.scene.get("MainScene");\n'
        'const inTimeMode = main.mode === "time";\n'
        "```\n\n"
        "Listen for `timeUpdate` in time mode:\n\n"
        "```js\n"
        'main.events.on("timeUpdate", (t) => {\n'
        "  if (!inTimeMode) return;\n"
        '  const sec = Math.ceil(t).toString().padStart(2, "0");\n'
        '  this.movesText.setText("Time: " + sec + "s");\n'
        '  if (t < 10) this.movesText.setColor("#ff4d6d");\n'
        "});\n```\n\n"
        "Suppress `movesUpdate` updates in time mode by returning early, "
        "so the same text element happily handles both modes. The 10s "
        "color flip is a classic 'last 10 seconds' urgency tell."
    ),
    hints=[
        (
            "Detect mode with `main.mode === \"time\"`.",
            r'main\.mode\s*===\s*["\']time["\']',
        ),
        (
            "Listen for `timeUpdate` and format with `padStart(2, \"0\")`.",
            r'main\.events\.on\(\s*["\']timeUpdate["\']',
        ),
        (
            "Color the text `\"#ff4d6d\"` once `t < 10`.",
            r'this\.movesText\.setColor\(\s*["\']#ff4d6d["\']\s*\)',
        ),
        (
            "Skip `movesUpdate` work when `inTimeMode` is true.",
            r"if\s*\(\s*inTimeMode\s*\)\s*return\s*;",
        ),
    ],
    seed_text=seed_wrap(solutions[41], UI_SCENE_S25),
    mutate=lambda: state.replace(UI_SCENE_S25, UI_SCENE_S42),
)


# -----------------------------------------------------------------------------
# Step 43: floating score popups when a match clears.

CASCADE_BODY_S43 = CASCADE_BODY_S39.replace(
    "      this.score += allCells.size * 10 * this.combo;\n"
    '      this.sound.play("sfxMatch", { volume: 0.45 });\n',
    "      const gained = allCells.size * 10 * this.combo;\n"
    "      this.score += gained;\n"
    '      this.sound.play("sfxMatch", { volume: 0.45 });\n'
    "      const center = [...allCells.values()].reduce(\n"
    "        (acc, c) => ({\n"
    "          row: acc.row + c.row,\n"
    "          col: acc.col + c.col\n"
    "        }),\n"
    "        { row: 0, col: 0 }\n"
    "      );\n"
    "      const cx = this.gemX(center.col / allCells.size);\n"
    "      const cy = this.gemY(center.row / allCells.size);\n"
    "      const popup = this.add\n"
    '        .text(cx, cy, "+" + gained, {\n'
    '          fontFamily: "monospace",\n'
    '          fontSize: "26px",\n'
    "          color:\n"
    '            this.combo > 2 ? "#ffd34d" : "#ffffff",\n'
    '          fontStyle: "bold",\n'
    '          stroke: "#000",\n'
    "          strokeThickness: 4\n"
    "        })\n"
    "        .setOrigin(0.5)\n"
    "        .setDepth(60);\n"
    "      this.tweens.add({\n"
    "        targets: popup,\n"
    "        y: cy - 60,\n"
    "        alpha: { from: 1, to: 0 },\n"
    "        scale: { from: 0.6, to: 1.2 },\n"
    "        duration: dur(700),\n"
    '        ease: "Cubic.easeOut",\n'
    "        onComplete: () => popup.destroy()\n"
    "      });\n",
)

METHODS_S43 = (
    find_matches_closure(FIND_MATCHES_BODY_S17)
    + activate_special_closure(ACTIVATE_SPECIAL_BODY_S22)
    + check_level_end_closure(CHECK_LEVEL_END_BODY_S39)
    + cascade_closure(CASCADE_BODY_S43)
    + swap_closure(SWAP_BODY_S39)
    + HINT_HELPER_S35
    + RESHUFFLE_HELPER_S36
)

step(
    43,
    title="Step 43",
    description=(
        "Show a floating `+N` text popup at the centroid of every "
        "cleared cluster. Tween it upward, fade alpha to `0`, scale "
        "from 0.6 to 1.2, then `destroy`. Combo > 2 gets a gold tint "
        "to celebrate big chains.\n\n"
        "Calculate the centroid:\n\n"
        "```js\n"
        "const center = [...allCells.values()].reduce(\n"
        "  (acc, c) => ({\n"
        "    row: acc.row + c.row,\n"
        "    col: acc.col + c.col\n"
        "  }),\n"
        "  { row: 0, col: 0 }\n"
        ");\n"
        "const cx = this.gemX(center.col / allCells.size);\n"
        "const cy = this.gemY(center.row / allCells.size);\n```\n\n"
        "Drive the popup tween:\n\n"
        "```js\n"
        "this.tweens.add({\n"
        "  targets: popup,\n"
        "  y: cy - 60,\n"
        "  alpha: { from: 1, to: 0 },\n"
        "  scale: { from: 0.6, to: 1.2 },\n"
        "  duration: dur(700),\n"
        '  ease: \"Cubic.easeOut\",\n'
        "  onComplete: () => popup.destroy()\n"
        "});\n```\n\n"
        "Reusing `dur()` keeps the popup respectful of "
        "`prefers-reduced-motion`. `setDepth(60)` puts it above the "
        "gems (depth 0) but below the tutorial overlay (depth 100+)."
    ),
    hints=[
        (
            "Compute the centroid of `allCells` by reducing rows/cols.",
            r"\.reduce\(\s*\n?\s*\(\s*acc\s*,\s*c\s*\)\s*=>\s*\(\s*\{",
        ),
        (
            "Stash the gain into `const gained = allCells.size * 10 * this.combo;`.",
            r"const\s+gained\s*=\s*allCells\.size\s*\*\s*10\s*\*\s*this\.combo",
        ),
        (
            'Add a `text(cx, cy, "+" + gained, ...)` popup with `setDepth(60)`.',
            r'\.text\(\s*cx\s*,\s*cy\s*,\s*["\']\+["\']\s*\+\s*gained',
        ),
        (
            "Tween the popup with `y: cy - 60`, `alpha: { from: 1, to: 0 }`, `scale: { from: 0.6, to: 1.2 }`.",
            r"y:\s*cy\s*-\s*60",
        ),
    ],
    seed_text=seed_wrap(solutions[42], METHODS_S39),
    mutate=lambda: state.replace(METHODS_S39, METHODS_S43),
)


# -----------------------------------------------------------------------------
# Step 44: combo flash text on UIScene.

UI_SCENE_S44 = UI_SCENE_S42.replace(
    "    this.targetText = this.add\n"
    '      .text(780, 16, "0 / 0", {\n'
    '        fontSize: "20px",\n'
    '        color: "#ffffff"\n'
    "      })\n"
    "      .setScrollFactor(0)\n"
    "      .setOrigin(1, 0);\n",
    "    this.targetText = this.add\n"
    '      .text(780, 16, "0 / 0", {\n'
    '        fontSize: "20px",\n'
    '        color: "#ffffff"\n'
    "      })\n"
    "      .setScrollFactor(0)\n"
    "      .setOrigin(1, 0);\n"
    "    this.comboText = this.add\n"
    '      .text(400, 56, "", {\n'
    '        fontFamily: "monospace",\n'
    '        fontSize: "26px",\n'
    '        color: "#ffd34d",\n'
    '        fontStyle: "bold"\n'
    "      })\n"
    "      .setScrollFactor(0)\n"
    "      .setOrigin(0.5, 0)\n"
    "      .setAlpha(0);\n",
).replace(
    '    main.events.on("targetUpdate", ({ matched, target }) => {\n'
    "      const clamped = Math.min(matched, target);\n"
    '      this.targetText.setText(clamped + " / " + target);\n'
    "    });\n",
    '    main.events.on("targetUpdate", ({ matched, target }) => {\n'
    "      const clamped = Math.min(matched, target);\n"
    '      this.targetText.setText(clamped + " / " + target);\n'
    "    });\n"
    '    main.events.on("comboUpdate", (combo) => {\n'
    "      if (combo < 2) return;\n"
    '      this.comboText.setText("Combo x" + combo + "!");\n'
    "      this.tweens.add({\n"
    "        targets: this.comboText,\n"
    "        alpha: { from: 1, to: 0 },\n"
    "        y: { from: 56, to: 30 },\n"
    "        duration: 600,\n"
    '        ease: "Cubic.easeOut"\n'
    "      });\n"
    "    });\n",
)

step(
    44,
    title="Step 44",
    description=(
        "Add a combo flash above the moves counter. UIScene already "
        "receives `comboUpdate` from the cascade - tween a 'Combo xN!' "
        "label upward and fade it out only when the combo is at least "
        "2 (filtering out the trivial first-cascade combo of 1).\n\n"
        "```js\n"
        "this.comboText = this.add\n"
        '  .text(400, 56, "", {\n'
        '    fontFamily: "monospace",\n'
        '    fontSize: "26px",\n'
        '    color: "#ffd34d",\n'
        '    fontStyle: "bold"\n'
        "  })\n"
        "  .setScrollFactor(0)\n"
        "  .setOrigin(0.5, 0)\n"
        "  .setAlpha(0);\n"
        "\n"
        'main.events.on("comboUpdate", (combo) => {\n'
        "  if (combo < 2) return;\n"
        '  this.comboText.setText("Combo x" + combo + "!");\n'
        "  this.tweens.add({\n"
        "    targets: this.comboText,\n"
        "    alpha: { from: 1, to: 0 },\n"
        "    y: { from: 56, to: 30 },\n"
        "    duration: 600,\n"
        '    ease: "Cubic.easeOut"\n'
        "  });\n"
        "});\n```\n\n"
        "The `from`/`to` form on `alpha` and `y` resets to the start "
        "value on every fire, so each cascade stage gets a fresh flash. "
        "Combo `< 2` short-circuits the trivial single-cascade case."
    ),
    hints=[
        (
            "Add a `this.comboText = this.add.text(400, 56, ...)` field.",
            r"this\.comboText\s*=\s*this\.add",
        ),
        (
            'Listen for `"comboUpdate"`.',
            r'main\.events\.on\(\s*["\']comboUpdate["\']',
        ),
        (
            "Skip the flash with `if (combo < 2) return;`.",
            r"if\s*\(\s*combo\s*<\s*2\s*\)\s*return\s*;",
        ),
        (
            "Tween `alpha: { from: 1, to: 0 }` and `y: { from: 56, to: 30 }`.",
            r"y:\s*\{\s*from:\s*56\s*,\s*to:\s*30\s*\}",
        ),
    ],
    seed_text=seed_wrap(solutions[43], UI_SCENE_S42),
    mutate=lambda: state.replace(UI_SCENE_S42, UI_SCENE_S44),
)


# -----------------------------------------------------------------------------
# Step 45: mode-aware GameOverScene + UIScene forwards mode in payload.

GAME_OVER_TITLE_OLD = (
    '    const title = this.payload.win ? "Level cleared!" : "Out of moves";\n'
)
GAME_OVER_TITLE_NEW = (
    "    const title = this.payload.win\n"
    '      ? (this.payload.mode === "time" ? "Run finished!" : "Level cleared!")\n'
    '      : (this.payload.mode === "time" ? "Time\'s up!" : "Out of moves");\n'
)

GAME_OVER_RETRY_OLD = (
    '    retry.on("pointerdown", () => {\n'
    '      this.scene.stop("UIScene");\n'
    '      this.scene.stop("GameOverScene");\n'
    "      const target = this.payload.win\n"
    "        ? (this.payload.level || 0)\n"
    "        : (this.payload.level || 0);\n"
    '      this.scene.start("MainScene", { level: target });\n'
    "    });\n"
)
GAME_OVER_RETRY_NEW = (
    '    retry.on("pointerdown", () => {\n'
    '      this.scene.stop("UIScene");\n'
    '      this.scene.stop("GameOverScene");\n'
    '      this.scene.start("TitleScene");\n'
    "    });\n"
)

UI_SCENE_S45 = UI_SCENE_S44.replace(
    '    main.events.on("levelFailed", () => {\n'
    "      const payload = {\n"
    "        win: false,\n"
    "        level: main.level,\n"
    "        score: main.score,\n"
    "        best: main.bestScore || 0\n"
    "      };\n",
    '    main.events.on("levelFailed", () => {\n'
    "      const payload = {\n"
    "        win: false,\n"
    "        level: main.level,\n"
    "        mode: main.mode,\n"
    "        score: main.score,\n"
    "        best: main.bestScore || 0\n"
    "      };\n",
)

step(
    45,
    title="Step 45",
    description=(
        "Make the Game Over screen mode-aware. UIScene forwards "
        "`main.mode` in the payload, and GameOverScene swaps "
        "'Out of moves' for 'Time's up!' in time mode. The retry "
        "button now returns to TitleScene instead of restarting the "
        "current level - the player may want to switch modes.\n\n"
        "Update GameOverScene's title:\n\n"
        "```js\n"
        "const title = this.payload.win\n"
        '  ? (this.payload.mode === "time" ? "Run finished!" : "Level cleared!")\n'
        '  : (this.payload.mode === "time" ? "Time\\\'s up!" : "Out of moves");\n'
        "```\n\n"
        "And the retry handler now goes back to title:\n\n"
        "```js\n"
        'this.scene.start("TitleScene");\n'
        "```\n\n"
        "UIScene includes `mode: main.mode` in the payload it ships to "
        "GameOverScene. The discriminator string makes the scene "
        "self-describing."
    ),
    hints=[
        (
            "Branch the title on `this.payload.mode === \"time\"`.",
            r'this\.payload\.mode\s*===\s*["\']time["\']',
        ),
        (
            "Time-mode failure says `\"Time's up!\"`.",
            r"Time\\?'s up!|Time's up!",
        ),
        (
            "Retry now goes to `TitleScene`.",
            r'this\.scene\.start\(\s*["\']TitleScene["\']\s*\)',
        ),
        (
            "UIScene forwards `mode: main.mode` in its payload.",
            r"mode:\s*main\.mode",
        ),
    ],
    seed_text=seed_wrap_range(
        solutions[44], UI_SCENE_S44, GAME_OVER_RETRY_OLD
    ),
    mutate=lambda: (
        state.replace(GAME_OVER_TITLE_OLD, GAME_OVER_TITLE_NEW),
        state.replace(GAME_OVER_RETRY_OLD, GAME_OVER_RETRY_NEW),
        state.replace(UI_SCENE_S44, UI_SCENE_S45),
    ),
)


# -----------------------------------------------------------------------------
# Step 46: TitleScene shows persisted best scores.

TITLE_BEST_BLOCK = (
    "    const classicBest = Math.max(\n"
    "      ...[0, 1, 2].map((lvl) =>\n"
    "        parseInt(\n"
    '          window.localStorage?.getItem("match3-best-" + lvl) || "0",\n'
    "          10\n"
    "        )\n"
    "      )\n"
    "    );\n"
    "    const timeBest = parseInt(\n"
    '      window.localStorage?.getItem("match3-best-time") || "0",\n'
    "      10\n"
    "    );\n"
    "    this.add\n"
    "      .text(\n"
    "        width / 2,\n"
    "        height - 60,\n"
    '        "Best classic " + classicBest + "  |  Best time " + timeBest,\n'
    "        {\n"
    '          fontFamily: "monospace",\n'
    '          fontSize: "14px",\n'
    '          color: "#888"\n'
    "        }\n"
    "      )\n"
    "      .setOrigin(0.5);\n"
)

TITLE_SCENE_S46 = TITLE_SCENE_S38.replace(
    "    const makeBtn = (y, label, mode) => {\n",
    TITLE_BEST_BLOCK + "    const makeBtn = (y, label, mode) => {\n",
)

step(
    46,
    title="Step 46",
    description=(
        "Title screen feels alive when it knows the player. Show the "
        "best classic-mode score (max across all 3 levels) and the "
        "best time-mode score, both pulled straight from "
        "`localStorage`.\n\n"
        "```js\n"
        "const classicBest = Math.max(\n"
        "  ...[0, 1, 2].map((lvl) =>\n"
        "    parseInt(\n"
        '      window.localStorage?.getItem(\"match3-best-\" + lvl) || \"0\",\n'
        "      10\n"
        "    )\n"
        "  )\n"
        ");\n"
        "const timeBest = parseInt(\n"
        '  window.localStorage?.getItem(\"match3-best-time\") || \"0\",\n'
        "  10\n"
        ");\n```\n\n"
        "Render below the buttons in a softer color (`#888`) so it "
        "reads as supporting info, not chrome. The best scores update "
        "every time the player visits the title - no event wiring "
        "needed because TitleScene's `create` runs every cold start."
    ),
    hints=[
        (
            "Read `\"match3-best-\" + lvl` for each classic level via `Math.max(...[0, 1, 2].map(...))`.",
            r'window\.localStorage\s*\?\.\s*getItem\(\s*["\']match3-best-["\']\s*\+\s*lvl\s*\)',
        ),
        (
            "Read `\"match3-best-time\"` for time-attack.",
            r'window\.localStorage\s*\?\.\s*getItem\(\s*["\']match3-best-time["\']\s*\)',
        ),
        (
            "Render the line at `height - 60` in `#888`.",
            r'color:\s*["\']#888["\']',
        ),
    ],
    seed_text=seed_wrap(solutions[45], TITLE_SCENE_S38),
    mutate=lambda: state.replace(TITLE_SCENE_S38, TITLE_SCENE_S46),
)


# -----------------------------------------------------------------------------
# Step 47: special-activation flash radial. activateSpecial drops a quick
# expanding ring at the special's position.

ACTIVATE_SPECIAL_BODY_S47 = ACTIVATE_SPECIAL_BODY_S22.replace(
    '      const special = gem.getData("special");\n'
    "      if (!special) return;\n",
    '      const special = gem.getData("special");\n'
    "      if (!special) return;\n"
    "      const flashColor =\n"
    '        special === "color-bomb"\n'
    "          ? 0xff8be6\n"
    '          : special === "wrapped"\n'
    "          ? 0xffd34d\n"
    "          : 0x55c8ff;\n"
    "      const ring = this.add\n"
    "        .circle(gem.x, gem.y, 14, flashColor, 0)\n"
    "        .setStrokeStyle(3, flashColor, 1)\n"
    "        .setDepth(50);\n"
    "      this.tweens.add({\n"
    "        targets: ring,\n"
    "        radius: 80,\n"
    "        alpha: { from: 1, to: 0 },\n"
    "        duration: 360,\n"
    '        ease: "Cubic.easeOut",\n'
    "        onComplete: () => ring.destroy()\n"
    "      });\n",
)

METHODS_S47 = (
    find_matches_closure(FIND_MATCHES_BODY_S17)
    + activate_special_closure(ACTIVATE_SPECIAL_BODY_S47)
    + check_level_end_closure(CHECK_LEVEL_END_BODY_S39)
    + cascade_closure(CASCADE_BODY_S43)
    + swap_closure(SWAP_BODY_S39)
    + HINT_HELPER_S35
    + RESHUFFLE_HELPER_S36
)

step(
    47,
    title="Step 47",
    description=(
        "Activating a special is the most dramatic moment in a "
        "match-3. Make it feel that way: drop an expanding ring at the "
        "special's position, color-coded by special type, and tween "
        "the radius from 14 to 80 while alpha fades to 0.\n\n"
        "```js\n"
        "const flashColor =\n"
        '  special === "color-bomb"\n'
        "    ? 0xff8be6\n"
        '    : special === "wrapped"\n'
        "    ? 0xffd34d\n"
        "    : 0x55c8ff;\n"
        "const ring = this.add\n"
        "  .circle(gem.x, gem.y, 14, flashColor, 0)\n"
        "  .setStrokeStyle(3, flashColor, 1)\n"
        "  .setDepth(50);\n"
        "this.tweens.add({\n"
        "  targets: ring,\n"
        "  radius: 80,\n"
        "  alpha: { from: 1, to: 0 },\n"
        "  duration: 360,\n"
        '  ease: \"Cubic.easeOut\",\n'
        "  onComplete: () => ring.destroy()\n"
        "});\n```\n\n"
        "Tweening `radius` directly works because Phaser's `Arc` "
        "(`this.add.circle`) exposes it as a property. The fill is "
        "alpha 0 (transparent) and the stroke is the color, giving us "
        "a clean ring rather than a filled circle. `setDepth(50)` "
        "keeps the ring above gems but below UI overlays."
    ),
    hints=[
        (
            "Pick `flashColor` per special type with a nested ternary.",
            r"flashColor\s*=\s*\n?\s*special\s*===\s*[\"']color-bomb[\"']",
        ),
        (
            "Build the ring with `this.add.circle(gem.x, gem.y, 14, flashColor, 0).setStrokeStyle(...)`.",
            r"this\.add\s*\.circle\(\s*gem\.x\s*,\s*gem\.y\s*,\s*14\s*,\s*flashColor",
        ),
        (
            "Tween `radius: 80` with `alpha: { from: 1, to: 0 }`.",
            r"radius:\s*80",
        ),
        (
            "Destroy the ring on `onComplete`.",
            r"onComplete:\s*\(\s*\)\s*=>\s*ring\.destroy\(\s*\)",
        ),
    ],
    seed_text=seed_wrap(solutions[46], METHODS_S43),
    mutate=lambda: state.replace(METHODS_S43, METHODS_S47),
)


# -----------------------------------------------------------------------------
# Step 48: gameWon handler. UIScene listens and launches GameOverScene with
# win: true.

UI_SCENE_S48 = UI_SCENE_S45.replace(
    '    main.events.on("levelFailed", () => {\n'
    "      const payload = {\n"
    "        win: false,\n"
    "        level: main.level,\n"
    "        mode: main.mode,\n"
    "        score: main.score,\n"
    "        best: main.bestScore || 0\n"
    "      };\n"
    '      this.scene.stop("MainScene");\n'
    "      this.time.delayedCall(200, () => {\n"
    '        this.scene.launch("GameOverScene", payload);\n'
    "      });\n"
    "    });\n",
    '    main.events.on("levelFailed", () => {\n'
    "      const payload = {\n"
    "        win: false,\n"
    "        level: main.level,\n"
    "        mode: main.mode,\n"
    "        score: main.score,\n"
    "        best: main.bestScore || 0\n"
    "      };\n"
    '      this.scene.stop("MainScene");\n'
    "      this.time.delayedCall(200, () => {\n"
    '        this.scene.launch("GameOverScene", payload);\n'
    "      });\n"
    "    });\n"
    '    main.events.on("gameWon", ({ score, best }) => {\n'
    "      const payload = {\n"
    "        win: true,\n"
    "        level: main.level,\n"
    "        mode: main.mode,\n"
    "        score,\n"
    "        best\n"
    "      };\n"
    '      this.scene.stop("MainScene");\n'
    "      this.time.delayedCall(200, () => {\n"
    '        this.scene.launch("GameOverScene", payload);\n'
    "      });\n"
    "    });\n",
)

step(
    48,
    title="Step 48",
    description=(
        "Until now, completing all 3 classic levels emits `gameWon` but "
        "nothing listens. Add a UIScene handler that launches "
        "GameOverScene with `win: true` so the player gets a "
        "celebration screen, not a frozen board.\n\n"
        "```js\n"
        'main.events.on("gameWon", ({ score, best }) => {\n'
        "  const payload = {\n"
        "    win: true,\n"
        "    level: main.level,\n"
        "    mode: main.mode,\n"
        "    score,\n"
        "    best\n"
        "  };\n"
        '  this.scene.stop("MainScene");\n'
        "  this.time.delayedCall(200, () => {\n"
        '    this.scene.launch("GameOverScene", payload);\n'
        "  });\n"
        "});\n```\n\n"
        "GameOverScene already shows 'Level cleared!' or 'Run finished!' "
        "based on `payload.mode` and `payload.win`, so no further "
        "GameOverScene changes are needed for this celebration flow."
    ),
    hints=[
        (
            'Listen for `"gameWon"`.',
            r'main\.events\.on\(\s*["\']gameWon["\']',
        ),
        (
            "Build the payload with `win: true` and forward `score`, `best`.",
            r"win:\s*true",
        ),
        (
            "Stop MainScene, then launch GameOverScene after 200ms via `this.time.delayedCall`.",
            r"this\.time\.delayedCall\(\s*200\s*,",
        ),
    ],
    seed_text=seed_wrap(solutions[47], UI_SCENE_S45),
    mutate=lambda: state.replace(UI_SCENE_S45, UI_SCENE_S48),
)


# -----------------------------------------------------------------------------
# Step 49: camera shake on big combos (combo >= 3).

CASCADE_BODY_S49 = CASCADE_BODY_S43.replace(
    "      this.combo ??= 0;\n      this.combo = depth + 1;\n",
    "      this.combo ??= 0;\n"
    "      this.combo = depth + 1;\n"
    "      if (this.combo >= 3) {\n"
    "        this.cameras.main.shake(140, 0.004 + this.combo * 0.0015);\n"
    "      }\n",
)

METHODS_S49 = (
    find_matches_closure(FIND_MATCHES_BODY_S17)
    + activate_special_closure(ACTIVATE_SPECIAL_BODY_S47)
    + check_level_end_closure(CHECK_LEVEL_END_BODY_S39)
    + cascade_closure(CASCADE_BODY_S49)
    + swap_closure(SWAP_BODY_S39)
    + HINT_HELPER_S35
    + RESHUFFLE_HELPER_S36
)

step(
    49,
    title="Step 49",
    description=(
        "Reward big chains with camera shake. At combo `>= 3`, shake "
        "the camera with intensity that scales with combo size. The "
        "first two cascades stay still so the player notices the "
        "transition into 'wow' territory.\n\n"
        "```js\n"
        "if (this.combo >= 3) {\n"
        "  this.cameras.main.shake(140, 0.004 + this.combo * 0.0015);\n"
        "}\n```\n\n"
        "`shake(duration, intensity)` is normalized: 0.004 is barely "
        "perceptible, 0.02 is dramatic. Combo 3 = 0.0085, combo 5 = "
        "0.0115. Keeping it inside cascade means it triggers per "
        "cascade level, so a long chain produces escalating shakes."
    ),
    hints=[
        (
            "Gate the shake on `this.combo >= 3`.",
            r"if\s*\(\s*this\.combo\s*>=\s*3\s*\)",
        ),
        (
            "Use `this.cameras.main.shake(140, 0.004 + this.combo * 0.0015)`.",
            r"this\.cameras\.main\.shake\(\s*140\s*,\s*0\.004\s*\+\s*this\.combo\s*\*\s*0\.0015",
        ),
    ],
    seed_text=seed_wrap(solutions[48], METHODS_S47),
    mutate=lambda: state.replace(METHODS_S47, METHODS_S49),
)


# -----------------------------------------------------------------------------
# Step 50: final - extend LEVELS to 5 entries, polish CTA.

CASCADE_LEVELS_OLD = (
    "      this.LEVELS ??= [\n"
    '        { color: 0, target: 25, moves: 20 },\n'
    '        { color: 1, target: 30, moves: 22 },\n'
    '        { color: 2, target: 35, moves: 24 }\n'
    "      ];\n"
)

CASCADE_LEVELS_NEW = (
    "      this.LEVELS ??= [\n"
    '        { color: 0, target: 25, moves: 20 },\n'
    '        { color: 1, target: 30, moves: 22 },\n'
    '        { color: 2, target: 35, moves: 24 },\n'
    '        { color: 3, target: 40, moves: 22 },\n'
    '        { color: 4, target: 50, moves: 20 }\n'
    "      ];\n"
)

TITLE_BEST_S50 = (
    '          window.localStorage?.getItem("match3-best-" + lvl) || "0",\n'
)
TITLE_BEST_S50_NEW = (
    '          window.localStorage?.getItem("match3-best-" + lvl) || "0",\n'
)

# Extend the classic best read range to cover 5 levels.

TITLE_BEST_RANGE_OLD = (
    "    const classicBest = Math.max(\n"
    "      ...[0, 1, 2].map((lvl) =>\n"
)
TITLE_BEST_RANGE_NEW = (
    "    const classicBest = Math.max(\n"
    "      ...[0, 1, 2, 3, 4].map((lvl) =>\n"
)

step(
    50,
    title="Step 50",
    description=(
        "Final polish: ship the full 5-level classic campaign. Two "
        "level rows go from 8x8x3-color to 8x8x5-color "
        "(`gemColors` already holds 5), making endgame harder by "
        "increasing palette size and target counts.\n\n"
        "```js\n"
        "this.LEVELS ??= [\n"
        '  { color: 0, target: 25, moves: 20 },\n'
        '  { color: 1, target: 30, moves: 22 },\n'
        '  { color: 2, target: 35, moves: 24 },\n'
        '  { color: 3, target: 40, moves: 22 },\n'
        '  { color: 4, target: 50, moves: 20 }\n'
        "];\n```\n\n"
        "Update TitleScene's classic-best calculation to cover all 5 "
        "level keys:\n\n"
        "```js\n"
        "...[0, 1, 2, 3, 4].map((lvl) => ...)\n```\n\n"
        "And that's the workshop. The player can play all 5 classic "
        "levels with combo bonuses, special gems, persistent best "
        "scores, time-attack mode, mute toggle, pause menu, idle "
        "hints, dead-board reshuffles, and post-FX bloom on every "
        "special. Total: ~600 lines of vanilla Phaser, built from "
        "tweens and pipelines."
    ),
    hints=[
        (
            "Append a 4th and 5th `LEVELS` entry.",
            r"\{\s*color:\s*3\s*,\s*target:\s*40[\s\S]*\{\s*color:\s*4\s*,\s*target:\s*50",
        ),
        (
            "Update TitleScene's `[0, 1, 2]` to `[0, 1, 2, 3, 4]`.",
            r"\[\s*0\s*,\s*1\s*,\s*2\s*,\s*3\s*,\s*4\s*\]\.map",
        ),
    ],
    seed_text=seed_wrap_range(
        solutions[49], CASCADE_LEVELS_OLD, TITLE_BEST_RANGE_OLD
    ),
    mutate=lambda: (
        state.replace(CASCADE_LEVELS_OLD, CASCADE_LEVELS_NEW),
        state.replace(TITLE_BEST_RANGE_OLD, TITLE_BEST_RANGE_NEW),
    ),
)


# -----------------------------------------------------------------------------
# Emit step files.

assert len(solutions) == 51, f"expected 51 solutions, got {len(solutions)}"

import re as _re

_ANCHOR_LINE = _re.compile(
    r"^[ \t]*/\* (?:preload|create-config|create-grid|create-state|"
    r"create-input|create-methods|create-fx|create-music|"
    r"create-tutorial|create-cleanup|update-body) \*/\n",
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


def main() -> None:
    import json as _json
    import tempfile

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for n in range(1, len(solutions)):
        hex_id = HEX_BASE.format(ID_OFFSET + n)
        path = OUT_DIR / f"{hex_id}.md"
        path.write_text(render_markdown(n), encoding="utf-8")

    debug_path = Path(tempfile.gettempdir()) / "fcc-match-3-solutions.json"
    debug_path.write_text(
        _json.dumps(
            [strip_anchors(s) if s is not None else "" for s in solutions]
        ),
        encoding="utf-8",
    )
    print(f"Wrote {len(solutions) - 1} step files (1..{len(solutions) - 1})")


if __name__ == "__main__":
    main()
