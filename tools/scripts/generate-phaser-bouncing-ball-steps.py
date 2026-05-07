"""Generate workshop-bouncing-ball-lab step .md files (steps 1..20).

Each step wraps exactly one editable region (two ``--fcc-editable-region--``
markers) around the focused diff against the previous step's solution. The
canonical solutions live in a small state machine so that the seed/solution
chain stays an invariant: ``seed[n+1]`` is ``solutions[n]`` with markers
inserted at the spot where step ``n+1`` makes its change.
"""

from pathlib import Path

OUT_DIR = (
    Path(__file__).resolve().parents[2]
    / "curriculum/challenges/english/blocks/workshop-bouncing-ball-lab"
)
HEX_BASE = "66faa400000000000000{:04x}"
ID_OFFSET = 0xA6  # step 1 -> 0xa7, step 20 -> 0xba

HTML = """\
```html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bouncing Ball Lab with Phaser</title>
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


# ---------------------------------------------------------------------------
# State machine: each step mutates a State; render(State) -> full script.js.
# ---------------------------------------------------------------------------


class State:
    def __init__(self):
        self.create_body = ""  # multi-line, each line indented 4 spaces
        self.update_body = ""
        self.methods = []  # list of method strings indented 2 spaces
        self.gravity_y = 0


def render(state: State) -> str:
    out = []
    out.append("class MainScene extends Phaser.Scene {\n")
    out.append("  constructor() {\n")
    out.append('    super("MainScene");\n')
    out.append("  }\n")
    out.append("\n")
    out.append("  create() {\n")
    out.append(state.create_body)
    out.append("  }\n")
    out.append("\n")
    out.append("  update() {\n")
    out.append(state.update_body)
    out.append("  }\n")
    for m in state.methods:
        out.append("\n")
        out.append(m)
    out.append("}\n")
    out.append("\n")
    out.append("const config = {\n")
    out.append("  type: Phaser.AUTO,\n")
    out.append("  width: 480,\n")
    out.append("  height: 360,\n")
    out.append('  parent: "game-container",\n')
    out.append('  backgroundColor: "#1a1a2e",\n')
    out.append("  physics: {\n")
    out.append('    default: "arcade",\n')
    out.append("    arcade: { gravity: { y: " + str(state.gravity_y) + " } }\n")
    out.append("  },\n")
    out.append("  scene: [MainScene]\n")
    out.append("};\n")
    out.append("\n")
    out.append("new Phaser.Game(config);")
    return "".join(out)


# ---------------------------------------------------------------------------
# Build solutions s1..s20 by mutating state at each step.
# ---------------------------------------------------------------------------

solutions = [None]
state = State()


def snap():
    solutions.append(render(state))


# Step 1 - empty MainScene shell + config gravity 0.
snap()  # solutions[1]

# Step 2 - add ball circle + arcade body in create.
BALL_BLOCK = (
    "    this.ball = this.add.circle(240, 60, 12, 0xffaa44);\n"
    "    this.physics.add.existing(this.ball);\n"
)
state.create_body += BALL_BLOCK
snap()  # solutions[2]

# Step 3 - flip world gravity from 0 to 300 in the config.
state.gravity_y = 300
snap()  # solutions[3]

# Step 4 - setCollideWorldBounds(true).
WORLD_BOUNDS_LINE = "    this.ball.body.setCollideWorldBounds(true);\n"
state.create_body += WORLD_BOUNDS_LINE
snap()  # solutions[4]

# Step 5 - setBounce(0.7).
BOUNCE_07_LINE = "    this.ball.body.setBounce(0.7);\n"
state.create_body += BOUNCE_07_LINE
snap()  # solutions[5]

# Step 6 - swap setBounce(0.7) for setBounce(1).
BOUNCE_1_LINE = "    this.ball.body.setBounce(1);\n"
state.create_body = state.create_body.replace(BOUNCE_07_LINE, BOUNCE_1_LINE)
snap()  # solutions[6]

# Step 7 - setDragX(50).
DRAG_LINE = "    this.ball.body.setDragX(50);\n"
state.create_body += DRAG_LINE
snap()  # solutions[7]

# Step 8 - simple click-to-launch using setVelocity(dx, dy).
POINTER_SIMPLE = (
    '    this.input.on("pointerdown", (pointer) => {\n'
    "      this.ball.body.setVelocity(\n"
    "        pointer.x - this.ball.x,\n"
    "        pointer.y - this.ball.y\n"
    "      );\n"
    "    });\n"
)
state.create_body += POINTER_SIMPLE
snap()  # solutions[8]

# Step 9 - distance-scaled launch using Phaser.Math.Distance.Between.
POINTER_DISTANCE = (
    '    this.input.on("pointerdown", (pointer) => {\n'
    "      const dx = pointer.x - this.ball.x;\n"
    "      const dy = pointer.y - this.ball.y;\n"
    "      const dist = Phaser.Math.Distance.Between(\n"
    "        this.ball.x,\n"
    "        this.ball.y,\n"
    "        pointer.x,\n"
    "        pointer.y\n"
    "      );\n"
    "      const angle = Math.atan2(dy, dx);\n"
    "      const speed = Phaser.Math.Clamp(dist * 3, 100, 600);\n"
    "      this.ball.body.setVelocity(\n"
    "        Math.cos(angle) * speed,\n"
    "        Math.sin(angle) * speed\n"
    "      );\n"
    "    });\n"
)
state.create_body = state.create_body.replace(POINTER_SIMPLE, POINTER_DISTANCE)
snap()  # solutions[9]

# Step 10 - 5 floor segments via static group.
FLOORS_BLOCK = (
    "    this.floors = this.physics.add.staticGroup();\n"
    "    for (let i = 0; i < 5; i++) {\n"
    "      this.floors.add(\n"
    "        this.add.rectangle(50 + i * 90, 280, 70, 8, 0x66ddff)\n"
    "      );\n"
    "    }\n"
)
state.create_body += FLOORS_BLOCK
snap()  # solutions[10]

# Step 11 - collider(ball, floors).
FLOOR_COLLIDER_LINE = "    this.physics.add.collider(this.ball, this.floors);\n"
state.create_body += FLOOR_COLLIDER_LINE
snap()  # solutions[11]

# Step 12 - tilted floor segment (visually angled, AABB body).
TILTED_BLOCK = (
    "    const tilted = this.add.rectangle(240, 200, 80, 8, 0xff8866);\n"
    "    tilted.setAngle(25);\n"
    "    this.physics.add.existing(tilted, true);\n"
    "    this.floors.add(tilted);\n"
)
state.create_body += TILTED_BLOCK
snap()  # solutions[12]

# Step 13 - ceiling segment.
CEILING_BLOCK = (
    "    this.ceiling = this.add.rectangle(240, 8, 480, 8, 0x444466);\n"
    "    this.physics.add.existing(this.ceiling, true);\n"
    "    this.physics.add.collider(this.ball, this.ceiling);\n"
)
state.create_body += CEILING_BLOCK
snap()  # solutions[13]

# Step 14 - trampoline overlap with simple bounce on contact.
TRAMPOLINE_SIMPLE = (
    "    this.trampoline = this.add.rectangle(420, 320, 60, 6, 0xff44aa);\n"
    "    this.physics.add.existing(this.trampoline, true);\n"
    "    this.physics.add.overlap(\n"
    "      this.ball,\n"
    "      this.trampoline,\n"
    "      (ball) => ball.body.setVelocityY(-500)\n"
    "    );\n"
)
state.create_body += TRAMPOLINE_SIMPLE
snap()  # solutions[14]

# Step 15 - same overlap, but with process callback so it only fires going down.
TRAMPOLINE_PROCESS = (
    "    this.trampoline = this.add.rectangle(420, 320, 60, 6, 0xff44aa);\n"
    "    this.physics.add.existing(this.trampoline, true);\n"
    "    this.physics.add.overlap(\n"
    "      this.ball,\n"
    "      this.trampoline,\n"
    "      (ball) => ball.body.setVelocityY(-500),\n"
    "      (ball) => ball.body.velocity.y > 0\n"
    "    );\n"
)
state.create_body = state.create_body.replace(TRAMPOLINE_SIMPLE, TRAMPOLINE_PROCESS)
snap()  # solutions[15]

# Step 16 - wind zone overlap pushing horizontal velocity.
WIND_BLOCK = (
    "    this.windZone = this.add.rectangle(80, 140, 30, 120, 0x88ccff, 0.2);\n"
    "    this.physics.add.existing(this.windZone, true);\n"
    "    this.physics.add.overlap(this.ball, this.windZone, (ball) => {\n"
    "      ball.body.velocity.x += 4;\n"
    "    });\n"
)
state.create_body += WIND_BLOCK
snap()  # solutions[16]

# Step 17 - HUD readouts.
HUD_CREATE_BLOCK = (
    '    this.hud = this.add.text(8, 8, "", {\n'
    '      fontSize: "12px",\n'
    '      color: "#ffffff",\n'
    '      backgroundColor: "#00000088",\n'
    "      padding: { x: 4, y: 2 }\n"
    "    });\n"
)
state.create_body += HUD_CREATE_BLOCK
HUD_UPDATE_BLOCK = (
    "    const v = this.ball.body.velocity;\n"
    "    this.hud.setText(\n"
    '      "v.x " + v.x.toFixed(0) +\n'
    '      "\\nv.y " + v.y.toFixed(0) +\n'
    '      "\\npos.y " + this.ball.y.toFixed(0) +\n'
    '      "\\ngravity " + this.physics.world.gravity.y\n'
    "    );\n"
)
state.update_body += HUD_UPDATE_BLOCK
snap()  # solutions[17]

# Step 18 - reset button + resetBall method.
RESET_BUTTON_BLOCK = (
    "    this.resetBtn = this.add\n"
    "      .rectangle(440, 24, 60, 22, 0x3344aa)\n"
    "      .setInteractive();\n"
    "    this.add\n"
    '      .text(440, 24, "RESET", { fontSize: "11px", color: "#ffffff" })\n'
    "      .setOrigin(0.5);\n"
    '    this.resetBtn.on("pointerdown", () => this.resetBall());\n'
)
state.create_body += RESET_BUTTON_BLOCK
RESET_METHOD = (
    "  resetBall() {\n"
    "    this.ball.setPosition(240, 60);\n"
    "    this.ball.body.setVelocity(0, 0);\n"
    "  }\n"
)
state.methods.append(RESET_METHOD)
snap()  # solutions[18]

# Step 19 - Q/E keyboard adjust world gravity.
GRAVITY_KEYS_LINE = (
    '    this.gravityKeys = this.input.keyboard.addKeys("Q,E");\n'
)
state.create_body += GRAVITY_KEYS_LINE
GRAVITY_UPDATE_BLOCK = (
    "    if (Phaser.Input.Keyboard.JustDown(this.gravityKeys.Q)) {\n"
    "      this.physics.world.gravity.y = Math.max(\n"
    "        0,\n"
    "        this.physics.world.gravity.y - 100\n"
    "      );\n"
    "    }\n"
    "    if (Phaser.Input.Keyboard.JustDown(this.gravityKeys.E)) {\n"
    "      this.physics.world.gravity.y = Math.min(\n"
    "        1500,\n"
    "        this.physics.world.gravity.y + 100\n"
    "      );\n"
    "    }\n"
)
# Insert the gravity-adjust block at the TOP of update (above HUD readout) so
# the HUD reflects the new gravity in the same frame.
state.update_body = GRAVITY_UPDATE_BLOCK + state.update_body
snap()  # solutions[19]

# Step 20 - clamp ball velocity to prevent runaway physics.
CLAMP_BLOCK = (
    "    v.x = Phaser.Math.Clamp(v.x, -800, 800);\n"
    "    v.y = Phaser.Math.Clamp(v.y, -800, 800);\n"
)
# Insert the clamp lines RIGHT AFTER the `const v = ...;` line and BEFORE the
# `this.hud.setText(...)` call so the HUD sees the clamped values.
V_LINE = "    const v = this.ball.body.velocity;\n"
state.update_body = state.update_body.replace(
    V_LINE, V_LINE + CLAMP_BLOCK, 1
)
snap()  # solutions[20]

assert len(solutions) == 21, f"expected 21 entries, got {len(solutions)}"


# ---------------------------------------------------------------------------
# Per-step seed builders. Each takes the previous solution and inserts exactly
# two `--fcc-editable-region--` markers wrapping the focused diff region.
# ---------------------------------------------------------------------------


def empty_region():
    return "--fcc-editable-region--\n\n--fcc-editable-region--\n"


def wrap_existing(prev: str, anchor: str) -> str:
    """Wrap `anchor` (occurring exactly once) in editable-region markers."""
    if prev.count(anchor) != 1:
        raise SystemExit(
            f"anchor must occur exactly once; found {prev.count(anchor)}\n---\n{anchor!r}"
        )
    return prev.replace(
        anchor,
        f"--fcc-editable-region--\n{anchor}--fcc-editable-region--\n",
        1,
    )


def insert_empty(prev: str, anchor: str) -> str:
    if prev.count(anchor) != 1:
        raise SystemExit(
            f"anchor must occur exactly once; found {prev.count(anchor)}\n---\n{anchor!r}"
        )
    return prev.replace(anchor, anchor + empty_region(), 1)


def insert_empty_before(prev: str, anchor: str) -> str:
    if prev.count(anchor) != 1:
        raise SystemExit(
            f"anchor must occur exactly once; found {prev.count(anchor)}\n---\n{anchor!r}"
        )
    return prev.replace(anchor, empty_region() + anchor, 1)


# Step 1 - whole class is the editable region (an empty placeholder above the
# config block; the user types the entire class shell themselves).
def step1_seed():
    return (
        "--fcc-editable-region--\n"
        "\n"
        "--fcc-editable-region--\n"
        "\n"
        "const config = {\n"
        "  type: Phaser.AUTO,\n"
        "  width: 480,\n"
        "  height: 360,\n"
        '  parent: "game-container",\n'
        '  backgroundColor: "#1a1a2e",\n'
        "  physics: {\n"
        '    default: "arcade",\n'
        "    arcade: { gravity: { y: 0 } }\n"
        "  },\n"
        "  scene: [MainScene]\n"
        "};\n"
        "\n"
        "new Phaser.Game(config);"
    )


def make_step2_seed():
    return lambda prev: insert_empty(prev, "  create() {\n")


def make_step3_seed():
    return lambda prev: wrap_existing(
        prev, "    arcade: { gravity: { y: 0 } }\n"
    )


def make_step4_seed():
    return lambda prev: insert_empty(prev, BALL_BLOCK)


def make_step5_seed():
    return lambda prev: insert_empty(prev, WORLD_BOUNDS_LINE)


def make_step6_seed():
    return lambda prev: wrap_existing(prev, BOUNCE_07_LINE)


def make_step7_seed():
    return lambda prev: insert_empty(prev, BOUNCE_1_LINE)


def make_step8_seed():
    return lambda prev: insert_empty(prev, DRAG_LINE)


def make_step9_seed():
    return lambda prev: wrap_existing(prev, POINTER_SIMPLE)


def make_step10_seed():
    return lambda prev: insert_empty(prev, POINTER_DISTANCE)


def make_step11_seed():
    return lambda prev: insert_empty(prev, FLOORS_BLOCK)


def make_step12_seed():
    return lambda prev: insert_empty(prev, FLOOR_COLLIDER_LINE)


def make_step13_seed():
    return lambda prev: insert_empty(prev, TILTED_BLOCK)


def make_step14_seed():
    return lambda prev: insert_empty(prev, CEILING_BLOCK)


def make_step15_seed():
    return lambda prev: wrap_existing(prev, TRAMPOLINE_SIMPLE)


def make_step16_seed():
    return lambda prev: insert_empty(prev, TRAMPOLINE_PROCESS)


def make_step17_seed():
    return lambda prev: insert_empty(prev, WIND_BLOCK)


def make_step18_seed():
    """Two slots open at once isn't allowed; we wrap the create-side block and
    expect the user to add the matching method via the description."""
    return lambda prev: insert_empty(prev, HUD_CREATE_BLOCK)


def make_step19_seed():
    return lambda prev: insert_empty(prev, RESET_BUTTON_BLOCK)


def make_step20_seed():
    return lambda prev: insert_empty(prev, V_LINE)


# Lecture: each step description includes any helper method the description
# mentions; the editable region is a single contiguous slice. Step 18 has both a
# `create` block and a method to add — we put the editable region at the end of
# `create` and instruct the learner to add the method below the body of
# `create()` themselves; the hints check both insertions.


# ---------------------------------------------------------------------------
# Markdown rendering.
# ---------------------------------------------------------------------------


def render_md(
    step_num: int,
    dashed: str,
    description: str,
    hints: str,
    seed_js: str,
    solution_js: str | None = None,
) -> str:
    out = []
    out.append("---\n")
    out.append(f"id: {HEX_BASE.format(ID_OFFSET + step_num)}\n")
    out.append(f"title: Step {step_num}\n")
    out.append("challengeType: 0\n")
    out.append(f"dashedName: {dashed}\n")
    out.append("---\n\n")
    out.append("# --description--\n")
    out.append(description.rstrip() + "\n\n")
    out.append("# --hints--\n")
    out.append(hints.rstrip() + "\n\n")
    out.append("# --seed--\n\n")
    out.append("## --seed-contents--\n\n")
    out.append(HTML.rstrip() + "\n\n")
    out.append(CSS.rstrip() + "\n\n")
    out.append("```js\n")
    out.append(seed_js.rstrip() + "\n")
    out.append("```\n")
    if solution_js is not None:
        out.append("\n")
        out.append("# --solutions--\n\n")
        out.append(HTML.rstrip() + "\n\n")
        out.append(CSS.rstrip() + "\n\n")
        out.append("```js\n")
        out.append(solution_js.rstrip() + "\n")
        out.append("```\n")
    return "".join(out)


# ---------------------------------------------------------------------------
# Step specs.
# ---------------------------------------------------------------------------


STEPS = []


def add_step(num, dashed, description, hints, seed_fn=None, seed_override=None):
    STEPS.append(
        {
            "num": num,
            "dashed": dashed,
            "description": description,
            "hints": hints,
            "seed_fn": seed_fn,
            "seed_override": seed_override,
        }
    )


add_step(
    1,
    "step-1",
    """\
Welcome to the bouncing-ball lab. Over the next 20 steps you'll build a small physics sandbox where you can launch a ball with the mouse, watch it bounce off floors, ride a wind zone, hit a directional trampoline, and live-tune gravity from the keyboard.

Start with the bare scene shell. Inside the editable region, declare a class `MainScene` that extends `Phaser.Scene`, with a constructor that calls `super("MainScene")` and empty `create` and `update` methods.

```js
class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  create() {}

  update() {}
}
```

The `config` object below already references `MainScene`, so once the class is defined the canvas mounts.
""",
    """\
You should declare a `MainScene` class extending `Phaser.Scene`.

```js
assert.match(code, /class\\s+MainScene\\s+extends\\s+Phaser\\.Scene/);
```

The constructor should call `super("MainScene")`.

```js
assert.match(code, /super\\(\\s*["']MainScene["']\\s*\\)/);
```

You should declare an empty `create` method.

```js
assert.match(code, /create\\s*\\(\\s*\\)\\s*\\{/);
```

You should declare an empty `update` method.

```js
assert.match(code, /update\\s*\\(\\s*\\)\\s*\\{/);
```
""",
    seed_override=step1_seed(),
)

add_step(
    2,
    "step-2",
    """\
Inside `create`, drop a ball at the top of the canvas and give it an arcade physics body. The visual is a circle and the body is added to it via `physics.add.existing`.

```js
this.ball = this.add.circle(240, 60, 12, 0xffaa44);
this.physics.add.existing(this.ball);
```

Gravity is still `0`, so the ball will hang in mid-air for now. You'll fix that in the next step.
""",
    """\
You should add `this.ball` as a circle at `(240, 60)` with radius `12` and color `0xffaa44`.

```js
assert.match(code, /this\\.ball\\s*=\\s*this\\.add\\.circle\\(\\s*240\\s*,\\s*60\\s*,\\s*12\\s*,\\s*0xffaa44\\s*\\)/);
```

You should give the ball an arcade physics body with `this.physics.add.existing`.

```js
assert.match(code, /this\\.physics\\.add\\.existing\\(\\s*this\\.ball\\s*\\)/);
```
""",
    seed_fn=make_step2_seed(),
)

add_step(
    3,
    "step-3",
    """\
The ball needs to fall. Open up the editable region in the config and set `gravity.y` to `300`. Arcade physics measures gravity as a constant downward acceleration in pixels per second squared, so `300` gives a calm, observable fall — fast enough to see, slow enough to study.
""",
    """\
You should set the world gravity Y to `300` in the config's `physics.arcade` block.

```js
assert.match(code, /arcade\\s*:\\s*\\{\\s*gravity\\s*:\\s*\\{\\s*y\\s*:\\s*300\\s*\\}\\s*\\}/);
```
""",
    seed_fn=make_step3_seed(),
)

add_step(
    4,
    "step-4",
    """\
Reload the canvas — the ball falls right off the bottom and never returns. Tell its body to respect the world's edges so it stops at the floor:

```js
this.ball.body.setCollideWorldBounds(true);
```

`setCollideWorldBounds(true)` clamps the body to the canvas rectangle and gives you something to bounce off in the next step.
""",
    """\
You should call `this.ball.body.setCollideWorldBounds(true)`.

```js
assert.match(code, /this\\.ball\\.body\\.setCollideWorldBounds\\(\\s*true\\s*\\)/);
```
""",
    seed_fn=make_step4_seed(),
)

add_step(
    5,
    "step-5",
    """\
Tell the body to keep `0.7` of its speed on every collision:

```js
this.ball.body.setBounce(0.7);
```

`setBounce` is the coefficient of restitution: `0` means "stop on contact," `1` means "perfectly elastic." `0.7` is a soft rubber ball — it bounces a few times then settles.
""",
    """\
You should call `this.ball.body.setBounce(0.7)`.

```js
assert.match(code, /this\\.ball\\.body\\.setBounce\\(\\s*0\\.7\\s*\\)/);
```
""",
    seed_fn=make_step5_seed(),
)

add_step(
    6,
    "step-6",
    """\
Crank the bounce up to `1` to see what perfect elasticity looks like. With `setBounce(1)` the ball returns at the full speed it arrived at — and because gravity adds the same delta on the way down each cycle, it bounces in place forever. This is intentional: it's the easiest way to *feel* the difference a single coefficient makes.

Update the editable line to:

```js
this.ball.body.setBounce(1);
```
""",
    """\
You should set the bounce coefficient to `1`.

```js
assert.match(code, /this\\.ball\\.body\\.setBounce\\(\\s*1\\s*\\)/);
```

You should no longer call `setBounce(0.7)`.

```js
assert.notMatch(code, /setBounce\\(\\s*0\\.7\\s*\\)/);
```
""",
    seed_fn=make_step6_seed(),
)

add_step(
    7,
    "step-7",
    """\
Add horizontal drag so any sideways motion fades over time:

```js
this.ball.body.setDragX(50);
```

Drag is a per-second deceleration that only kicks in when nothing else is pushing on that axis. With the ball just falling vertically you won't see anything new yet — but in the next step you'll launch the ball sideways, and drag will start doing visible work.
""",
    """\
You should call `this.ball.body.setDragX(50)`.

```js
assert.match(code, /this\\.ball\\.body\\.setDragX\\(\\s*50\\s*\\)/);
```
""",
    seed_fn=make_step7_seed(),
)

add_step(
    8,
    "step-8",
    """\
Wire up a click-to-launch handler. On `pointerdown`, set the ball's velocity to the vector pointing from the ball to the click:

```js
this.input.on("pointerdown", (pointer) => {
  this.ball.body.setVelocity(
    pointer.x - this.ball.x,
    pointer.y - this.ball.y
  );
});
```

This gives you a quick aim-and-fire feel. The launch speed is whatever the raw `dx`/`dy` distance is in pixels — clicks far from the ball send it harder than nearby clicks. The next step replaces this with a calibrated, distance-scaled launch.
""",
    """\
You should register a `pointerdown` listener on `this.input`.

```js
assert.match(code, /this\\.input\\.on\\(\\s*["']pointerdown["']/);
```

You should set the ball's velocity using the raw `pointer.x - this.ball.x` and `pointer.y - this.ball.y` deltas.

```js
assert.match(code, /this\\.ball\\.body\\.setVelocity\\([\\s\\S]*?pointer\\.x\\s*-\\s*this\\.ball\\.x[\\s\\S]*?pointer\\.y\\s*-\\s*this\\.ball\\.y/);
```
""",
    seed_fn=make_step8_seed(),
)

add_step(
    9,
    "step-9",
    """\
The raw `dx`/`dy` launch is too sensitive at long range and too soft up close. Replace it with a clamped, distance-scaled version that uses `Phaser.Math.Distance.Between` to get the magnitude and trig to split it across X and Y:

```js
this.input.on("pointerdown", (pointer) => {
  const dx = pointer.x - this.ball.x;
  const dy = pointer.y - this.ball.y;
  const dist = Phaser.Math.Distance.Between(
    this.ball.x,
    this.ball.y,
    pointer.x,
    pointer.y
  );
  const angle = Math.atan2(dy, dx);
  const speed = Phaser.Math.Clamp(dist * 3, 100, 600);
  this.ball.body.setVelocity(
    Math.cos(angle) * speed,
    Math.sin(angle) * speed
  );
});
```

`Phaser.Math.Clamp(dist * 3, 100, 600)` guarantees a minimum oomph for tap-near launches and a hard cap for tap-far ones, so you never overflow the simulation.
""",
    """\
You should compute the click distance with `Phaser.Math.Distance.Between(this.ball.x, this.ball.y, pointer.x, pointer.y)`.

```js
assert.match(code, /Phaser\\.Math\\.Distance\\.Between\\(\\s*this\\.ball\\.x\\s*,\\s*this\\.ball\\.y\\s*,\\s*pointer\\.x\\s*,\\s*pointer\\.y\\s*\\)/);
```

You should clamp the launch speed with `Phaser.Math.Clamp(dist * 3, 100, 600)`.

```js
assert.match(code, /Phaser\\.Math\\.Clamp\\(\\s*dist\\s*\\*\\s*3\\s*,\\s*100\\s*,\\s*600\\s*\\)/);
```

You should split the speed across X and Y with `Math.cos(angle) * speed` and `Math.sin(angle) * speed`.

```js
assert.match(code, /Math\\.cos\\(\\s*angle\\s*\\)\\s*\\*\\s*speed/);
assert.match(code, /Math\\.sin\\(\\s*angle\\s*\\)\\s*\\*\\s*speed/);
```
""",
    seed_fn=make_step9_seed(),
)

add_step(
    10,
    "step-10",
    """\
Add five floor segments so the ball has things to bounce off besides the world bounds. Use a static physics group — every member gets an immovable physics body for free:

```js
this.floors = this.physics.add.staticGroup();
for (let i = 0; i < 5; i++) {
  this.floors.add(
    this.add.rectangle(50 + i * 90, 280, 70, 8, 0x66ddff)
  );
}
```

`physics.add.staticGroup` produces a group whose children are all static bodies. Adding a plain rectangle to it via `.add(rect)` automatically promotes the rectangle to a static body — no explicit `physics.add.existing` call needed.
""",
    """\
You should create `this.floors` with `this.physics.add.staticGroup()`.

```js
assert.match(code, /this\\.floors\\s*=\\s*this\\.physics\\.add\\.staticGroup\\(\\s*\\)/);
```

You should loop five times and add a rectangle to `this.floors` each iteration.

```js
assert.match(code, /for\\s*\\(\\s*let\\s+i\\s*=\\s*0\\s*;\\s*i\\s*<\\s*5\\s*;\\s*i\\+\\+\\s*\\)/);
assert.match(code, /this\\.floors\\.add\\(\\s*[\\s\\S]*?this\\.add\\.rectangle\\([\\s\\S]*?70\\s*,\\s*8\\s*,\\s*0x66ddff/);
```
""",
    seed_fn=make_step10_seed(),
)

add_step(
    11,
    "step-11",
    """\
Register a collider so the ball physically bounces off the floor segments:

```js
this.physics.add.collider(this.ball, this.floors);
```

A collider blocks movement and resolves the collision (using the bounce coefficient you set earlier). No callback is needed yet — the engine handles the rebound for you.
""",
    """\
You should call `this.physics.add.collider(this.ball, this.floors)`.

```js
assert.match(code, /this\\.physics\\.add\\.collider\\(\\s*this\\.ball\\s*,\\s*this\\.floors\\s*\\)/);
```
""",
    seed_fn=make_step11_seed(),
)

add_step(
    12,
    "step-12",
    """\
Add a *visually* tilted floor segment to the same group:

```js
const tilted = this.add.rectangle(240, 200, 80, 8, 0xff8866);
tilted.setAngle(25);
this.physics.add.existing(tilted, true);
this.floors.add(tilted);
```

Now bounce the ball off it — and watch the rebound. The ball treats it like a flat horizontal block, not a 25° ramp. That's because arcade physics bodies are axis-aligned bounding boxes (AABB) and ignore the visual `angle`. Real slopes need a different physics engine — the Matter.js chapter later in the certification handles that. For now, this is your reminder that arcade is fast and rectangular by design.
""",
    """\
You should declare a `tilted` rectangle at `(240, 200)` sized `80 × 8` with color `0xff8866`.

```js
assert.match(code, /const\\s+tilted\\s*=\\s*this\\.add\\.rectangle\\(\\s*240\\s*,\\s*200\\s*,\\s*80\\s*,\\s*8\\s*,\\s*0xff8866\\s*\\)/);
```

You should rotate the visual with `tilted.setAngle(25)`.

```js
assert.match(code, /tilted\\.setAngle\\(\\s*25\\s*\\)/);
```

You should give the tilted rectangle a static arcade body with `this.physics.add.existing(tilted, true)`.

```js
assert.match(code, /this\\.physics\\.add\\.existing\\(\\s*tilted\\s*,\\s*true\\s*\\)/);
```

You should add the tilted rectangle to `this.floors`.

```js
assert.match(code, /this\\.floors\\.add\\(\\s*tilted\\s*\\)/);
```
""",
    seed_fn=make_step12_seed(),
)

add_step(
    13,
    "step-13",
    """\
Cap the world with a ceiling so a strong upward launch eventually rebounds:

```js
this.ceiling = this.add.rectangle(240, 8, 480, 8, 0x444466);
this.physics.add.existing(this.ceiling, true);
this.physics.add.collider(this.ball, this.ceiling);
```

This ceiling is a separate static body, not part of `this.floors`, because the next steps add directional triggers (a trampoline, a wind zone) that should *only* react to the ball — adding the ceiling to the floor group would conflate them.
""",
    """\
You should create `this.ceiling` as a rectangle at `(240, 8)` sized `480 × 8` with color `0x444466`.

```js
assert.match(code, /this\\.ceiling\\s*=\\s*this\\.add\\.rectangle\\(\\s*240\\s*,\\s*8\\s*,\\s*480\\s*,\\s*8\\s*,\\s*0x444466\\s*\\)/);
```

You should give the ceiling a static body with `this.physics.add.existing(this.ceiling, true)`.

```js
assert.match(code, /this\\.physics\\.add\\.existing\\(\\s*this\\.ceiling\\s*,\\s*true\\s*\\)/);
```

You should register a collider between the ball and the ceiling.

```js
assert.match(code, /this\\.physics\\.add\\.collider\\(\\s*this\\.ball\\s*,\\s*this\\.ceiling\\s*\\)/);
```
""",
    seed_fn=make_step13_seed(),
)

add_step(
    14,
    "step-14",
    """\
Add a "trampoline" pad with an overlap callback that boosts the ball upward when they touch:

```js
this.trampoline = this.add.rectangle(420, 320, 60, 6, 0xff44aa);
this.physics.add.existing(this.trampoline, true);
this.physics.add.overlap(
  this.ball,
  this.trampoline,
  (ball) => ball.body.setVelocityY(-500)
);
```

Notice you used `overlap` here instead of `collider`. Overlaps fire callbacks but don't block movement — so the ball passes *through* the pad and gets a velocity injection on each frame of contact. Your trampoline currently fires on contact in *every* direction, which means it'll also fire when the ball is launched into it from below. The next step fixes that.
""",
    """\
You should create `this.trampoline` as a rectangle at `(420, 320)` sized `60 × 6` with color `0xff44aa`.

```js
assert.match(code, /this\\.trampoline\\s*=\\s*this\\.add\\.rectangle\\(\\s*420\\s*,\\s*320\\s*,\\s*60\\s*,\\s*6\\s*,\\s*0xff44aa\\s*\\)/);
```

You should give the trampoline a static body.

```js
assert.match(code, /this\\.physics\\.add\\.existing\\(\\s*this\\.trampoline\\s*,\\s*true\\s*\\)/);
```

You should register an `overlap` between the ball and the trampoline whose callback calls `ball.body.setVelocityY(-500)`.

```js
assert.match(code, /this\\.physics\\.add\\.overlap\\(\\s*this\\.ball\\s*,\\s*this\\.trampoline\\s*,\\s*\\(\\s*ball\\s*\\)\\s*=>\\s*ball\\.body\\.setVelocityY\\(\\s*-500\\s*\\)\\s*\\)/);
```
""",
    seed_fn=make_step14_seed(),
)

add_step(
    15,
    "step-15",
    """\
Add a process callback as the fourth argument to `overlap`. The process callback runs first, every frame the bodies touch, and decides whether the contact counts. Return `true` to allow it, `false` to skip — and we only want it to fire when the ball is moving downward:

```js
this.physics.add.overlap(
  this.ball,
  this.trampoline,
  (ball) => ball.body.setVelocityY(-500),
  (ball) => ball.body.velocity.y > 0
);
```

After this change, an upward launch can pass through the pad without triggering the boost. Only a falling ball gets thrown back up.
""",
    """\
You should pass a process callback as the fourth argument to the trampoline overlap that returns `ball.body.velocity.y > 0`.

```js
assert.match(code, /this\\.physics\\.add\\.overlap\\(\\s*this\\.ball\\s*,\\s*this\\.trampoline\\s*,\\s*\\(\\s*ball\\s*\\)\\s*=>\\s*ball\\.body\\.setVelocityY\\(\\s*-500\\s*\\)\\s*,\\s*\\(\\s*ball\\s*\\)\\s*=>\\s*ball\\.body\\.velocity\\.y\\s*>\\s*0\\s*\\)/);
```
""",
    seed_fn=make_step15_seed(),
)

add_step(
    16,
    "step-16",
    """\
Add a "wind zone" — a translucent column on the left edge that nudges anything inside it to the right:

```js
this.windZone = this.add.rectangle(80, 140, 30, 120, 0x88ccff, 0.2);
this.physics.add.existing(this.windZone, true);
this.physics.add.overlap(this.ball, this.windZone, (ball) => {
  ball.body.velocity.x += 4;
});
```

The fifth argument to `add.rectangle` is alpha — `0.2` makes the column translucent so you can see the ball pass through it. The overlap callback bumps `velocity.x` by `4` every frame the ball is inside, accumulating into a soft horizontal push that the X-axis drag from step 7 eventually wears down.
""",
    """\
You should create `this.windZone` as a rectangle at `(80, 140)` sized `30 × 120` with color `0x88ccff` and alpha `0.2`.

```js
assert.match(code, /this\\.windZone\\s*=\\s*this\\.add\\.rectangle\\(\\s*80\\s*,\\s*140\\s*,\\s*30\\s*,\\s*120\\s*,\\s*0x88ccff\\s*,\\s*0\\.2\\s*\\)/);
```

You should give the wind zone a static body.

```js
assert.match(code, /this\\.physics\\.add\\.existing\\(\\s*this\\.windZone\\s*,\\s*true\\s*\\)/);
```

You should register an overlap that adds `4` to `ball.body.velocity.x` per frame of contact.

```js
assert.match(code, /this\\.physics\\.add\\.overlap\\(\\s*this\\.ball\\s*,\\s*this\\.windZone\\s*,[\\s\\S]*?ball\\.body\\.velocity\\.x\\s*\\+=\\s*4/);
```
""",
    seed_fn=make_step16_seed(),
)

add_step(
    17,
    "step-17",
    """\
Wire up an on-screen HUD that shows the ball's velocity and Y position so you can see the physics engine's numbers in real time. Add a Phaser text object in `create`:

```js
this.hud = this.add.text(8, 8, "", {
  fontSize: "12px",
  color: "#ffffff",
  backgroundColor: "#00000088",
  padding: { x: 4, y: 2 }
});
```

Then, in the `update` method (which runs every frame), refresh the text from the body's current values:

```js
const v = this.ball.body.velocity;
this.hud.setText(
  "v.x " + v.x.toFixed(0) +
  "\\nv.y " + v.y.toFixed(0) +
  "\\npos.y " + this.ball.y.toFixed(0) +
  "\\ngravity " + this.physics.world.gravity.y
);
```

`toFixed(0)` keeps the readout integer-clean. The HUD updates every frame, so you can watch the numbers spike on impact and ease as drag does its work.
""",
    """\
You should create `this.hud` as an empty text at `(8, 8)` with the specified style options.

```js
assert.match(code, /this\\.hud\\s*=\\s*this\\.add\\.text\\(\\s*8\\s*,\\s*8\\s*,\\s*["']{2}/);
assert.match(code, /fontSize\\s*:\\s*["']12px["']/);
assert.match(code, /backgroundColor\\s*:\\s*["']#00000088["']/);
```

You should bind `const v = this.ball.body.velocity` in `update`.

```js
assert.match(code, /const\\s+v\\s*=\\s*this\\.ball\\.body\\.velocity/);
```

You should call `this.hud.setText(...)` with `v.x.toFixed(0)`, `v.y.toFixed(0)`, `this.ball.y.toFixed(0)`, and `this.physics.world.gravity.y`.

```js
assert.match(code, /this\\.hud\\.setText\\([\\s\\S]*?v\\.x\\.toFixed\\(\\s*0\\s*\\)[\\s\\S]*?v\\.y\\.toFixed\\(\\s*0\\s*\\)[\\s\\S]*?this\\.ball\\.y\\.toFixed\\(\\s*0\\s*\\)[\\s\\S]*?this\\.physics\\.world\\.gravity\\.y/);
```
""",
    seed_fn=make_step17_seed(),
)

add_step(
    18,
    "step-18",
    """\
Add a clickable RESET button that drops the ball back at its starting position. First, the button itself in `create`:

```js
this.resetBtn = this.add
  .rectangle(440, 24, 60, 22, 0x3344aa)
  .setInteractive();
this.add
  .text(440, 24, "RESET", { fontSize: "11px", color: "#ffffff" })
  .setOrigin(0.5);
this.resetBtn.on("pointerdown", () => this.resetBall());
```

Then, *outside* both `create` and `update` but still inside the `MainScene` class, add a `resetBall` method (a sibling of `create`/`update`):

```js
resetBall() {
  this.ball.setPosition(240, 60);
  this.ball.body.setVelocity(0, 0);
}
```

`setPosition` teleports the visual; `setVelocity(0, 0)` zeroes any momentum so the ball doesn't immediately fly back into wherever it was headed.
""",
    """\
You should create `this.resetBtn` as a rectangle at `(440, 24)` sized `60 × 22` with color `0x3344aa` and call `setInteractive()` on it.

```js
assert.match(code, /this\\.resetBtn\\s*=\\s*this\\.add[\\s\\S]*?\\.rectangle\\(\\s*440\\s*,\\s*24\\s*,\\s*60\\s*,\\s*22\\s*,\\s*0x3344aa\\s*\\)[\\s\\S]*?\\.setInteractive\\(\\s*\\)/);
```

You should add a centered `RESET` text label.

```js
assert.match(code, /\\.text\\(\\s*440\\s*,\\s*24\\s*,\\s*["']RESET["']/);
```

You should bind `pointerdown` on `this.resetBtn` to call `this.resetBall()`.

```js
assert.match(code, /this\\.resetBtn\\.on\\(\\s*["']pointerdown["']\\s*,\\s*\\(\\s*\\)\\s*=>\\s*this\\.resetBall\\(\\s*\\)\\s*\\)/);
```

You should declare a `resetBall` method on the scene that resets position and velocity.

```js
assert.match(code, /resetBall\\s*\\(\\s*\\)\\s*\\{[\\s\\S]*?this\\.ball\\.setPosition\\(\\s*240\\s*,\\s*60\\s*\\)[\\s\\S]*?this\\.ball\\.body\\.setVelocity\\(\\s*0\\s*,\\s*0\\s*\\)/);
```
""",
    seed_fn=make_step18_seed(),
)

add_step(
    19,
    "step-19",
    """\
Live-tune world gravity from the keyboard. First, add the keys in `create`:

```js
this.gravityKeys = this.input.keyboard.addKeys("Q,E");
```

Then, at the top of `update`, react to fresh presses with `Phaser.Input.Keyboard.JustDown` (which fires once per press, not every frame the key is held):

```js
if (Phaser.Input.Keyboard.JustDown(this.gravityKeys.Q)) {
  this.physics.world.gravity.y = Math.max(
    0,
    this.physics.world.gravity.y - 100
  );
}
if (Phaser.Input.Keyboard.JustDown(this.gravityKeys.E)) {
  this.physics.world.gravity.y = Math.min(
    1500,
    this.physics.world.gravity.y + 100
  );
}
```

`physics.world.gravity.y` is mutable at runtime — every body picks up the new value next frame. `Math.max(0, ...)` and `Math.min(1500, ...)` keep it inside a sensible window so a stuck-down key can't push the simulation into nonsense.
""",
    """\
You should add `this.gravityKeys = this.input.keyboard.addKeys("Q,E")` in `create`.

```js
assert.match(code, /this\\.gravityKeys\\s*=\\s*this\\.input\\.keyboard\\.addKeys\\(\\s*["']Q,E["']\\s*\\)/);
```

You should react to `Phaser.Input.Keyboard.JustDown(this.gravityKeys.Q)` by lowering `this.physics.world.gravity.y` by `100` (clamped at `0`).

```js
assert.match(code, /Phaser\\.Input\\.Keyboard\\.JustDown\\(\\s*this\\.gravityKeys\\.Q\\s*\\)[\\s\\S]*?Math\\.max\\(\\s*0\\s*,\\s*this\\.physics\\.world\\.gravity\\.y\\s*-\\s*100\\s*\\)/);
```

You should react to `Phaser.Input.Keyboard.JustDown(this.gravityKeys.E)` by raising `this.physics.world.gravity.y` by `100` (clamped at `1500`).

```js
assert.match(code, /Phaser\\.Input\\.Keyboard\\.JustDown\\(\\s*this\\.gravityKeys\\.E\\s*\\)[\\s\\S]*?Math\\.min\\(\\s*1500\\s*,\\s*this\\.physics\\.world\\.gravity\\.y\\s*\\+\\s*100\\s*\\)/);
```
""",
    seed_fn=make_step19_seed(),
)

add_step(
    20,
    "step-20",
    """\
You're one step from done. With gravity adjustable on the fly and a wind zone that adds velocity each frame, the ball can build up speeds the simulation isn't tuned for — visible as twitching, tunneling, or runaway bounces. Cap both axes right after you read the velocity and before the HUD prints it:

```js
v.x = Phaser.Math.Clamp(v.x, -800, 800);
v.y = Phaser.Math.Clamp(v.y, -800, 800);
```

`Phaser.Math.Clamp` enforces a hard ceiling and floor on each axis, keeping the body within speeds the engine handles cleanly. The HUD now always shows realistic numbers, and the trampoline + wind combo can't crash the physics step.

Reload one final time, click around, ride the trampoline, drift through the wind zone, mash Q/E to flip gravity. You've shipped a complete arcade-physics sandbox: a ball with bounce and drag, click-and-drag launch, five floors plus a tilted teaching-moment ramp, a ceiling, a directional trampoline, a wind zone, a live HUD, a reset button, runtime-tunable gravity, and velocity clamping. Every dial in arcade physics is now visible, audible, and yours.
""",
    """\
You should clamp `v.x` between `-800` and `800` with `Phaser.Math.Clamp` after reading the velocity.

```js
assert.match(code, /v\\.x\\s*=\\s*Phaser\\.Math\\.Clamp\\(\\s*v\\.x\\s*,\\s*-800\\s*,\\s*800\\s*\\)/);
```

You should clamp `v.y` between `-800` and `800` the same way.

```js
assert.match(code, /v\\.y\\s*=\\s*Phaser\\.Math\\.Clamp\\(\\s*v\\.y\\s*,\\s*-800\\s*,\\s*800\\s*\\)/);
```
""",
    seed_fn=make_step20_seed(),
)


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    if len(STEPS) != 20:
        raise SystemExit(f"expected 20 steps, got {len(STEPS)}")
    for spec in STEPS:
        n = spec["num"]
        prev = solutions[n - 1] if n > 1 else ""
        seed = spec.get("seed_override")
        if seed is None:
            seed = spec["seed_fn"](prev)
        markers = seed.count("--fcc-editable-region--")
        if markers != 2:
            raise SystemExit(f"step {n} has {markers} markers, expected 2")
        solution_js = solutions[20] if n == 20 else None
        body = render_md(
            n,
            spec["dashed"],
            spec["description"],
            spec["hints"],
            seed,
            solution_js=solution_js,
        )
        path = OUT_DIR / (HEX_BASE.format(ID_OFFSET + n) + ".md")
        path.write_text(body, encoding="utf-8")
        print(f"wrote {path.name}")


if __name__ == "__main__":
    main()
