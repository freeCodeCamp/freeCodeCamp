"""Generate workshop-touch-paddle-prototype step .md files (steps 1..25).

Workshop validator enforces *exactly one* editable region per step (i.e. 2
`--fcc-editable-region--` markers total). Each step adds one focused concept
into a single contiguous region of the previous step's solution.
"""

from pathlib import Path

OUT_DIR = (
    Path(__file__).resolve().parents[2]
    / "curriculum/challenges/english/blocks/workshop-touch-paddle-prototype"
)
HEX_BASE = "66faa30000000000000000{:02x}"
ID_OFFSET = 0xA6  # step 1 -> 0xa7, step 25 -> 0xbf

HTML = """\
```html

<!DOCTYPE html>
<html lang=\"en\">
  <head>
    <meta charset=\"UTF-8\" />
    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />
    <title>Touch Paddle Prototype with Phaser</title>
    <link rel=\"stylesheet\" href=\"./styles.css\" />
    <script src=\"https://cdn.jsdelivr.net/npm/phaser@3.80.1/dist/phaser.min.js\"></script>
  </head>
  <body>
    <div id=\"game-container\"></div>
    <script src=\"./script.js\"></script>
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

CONFIG = """\
const config = {
  type: Phaser.AUTO,
  width: 480,
  height: 640,
  parent: \"game-container\",
  backgroundColor: \"#000033\",
  physics: {
    default: \"arcade\",
    arcade: { gravity: { y: 0 } }
  },
  scene: [MainScene]
};

const game = new Phaser.Game(config);"""


# ---------------------------------------------------------------------------
# Solution snippets per step (s1..s25). Each returns the full script.js.
# ---------------------------------------------------------------------------


def s1():
    # Empty MainScene shell + config + game instance.
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  create() {{
  }}

  update() {{
  }}
}}

{CONFIG}
"""


def s2():
    # Add bg + paddle in create.
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  create() {{
    this.bg = this.add.rectangle(240, 320, 480, 640, 0x223344);
    this.paddle = this.add.rectangle(240, 580, 80, 16, 0xeeeeee);
    this.physics.add.existing(this.paddle);
    this.paddle.body.setImmovable(true);
  }}

  update() {{
  }}
}}

{CONFIG}
"""


def s3():
    # Add cursors in create.
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  create() {{
    this.bg = this.add.rectangle(240, 320, 480, 640, 0x223344);
    this.paddle = this.add.rectangle(240, 580, 80, 16, 0xeeeeee);
    this.physics.add.existing(this.paddle);
    this.paddle.body.setImmovable(true);
    this.cursors = this.input.keyboard.createCursorKeys();
  }}

  update() {{
  }}
}}

{CONFIG}
"""


def s4():
    # Move paddle with arrows in update.
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  create() {{
    this.bg = this.add.rectangle(240, 320, 480, 640, 0x223344);
    this.paddle = this.add.rectangle(240, 580, 80, 16, 0xeeeeee);
    this.physics.add.existing(this.paddle);
    this.paddle.body.setImmovable(true);
    this.cursors = this.input.keyboard.createCursorKeys();
  }}

  update() {{
    if (this.cursors.left.isDown) this.paddle.x -= 4;
    else if (this.cursors.right.isDown) this.paddle.x += 4;
  }}
}}

{CONFIG}
"""


def s5():
    # Clamp paddle.x in update.
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  create() {{
    this.bg = this.add.rectangle(240, 320, 480, 640, 0x223344);
    this.paddle = this.add.rectangle(240, 580, 80, 16, 0xeeeeee);
    this.physics.add.existing(this.paddle);
    this.paddle.body.setImmovable(true);
    this.cursors = this.input.keyboard.createCursorKeys();
  }}

  update() {{
    if (this.cursors.left.isDown) this.paddle.x -= 4;
    else if (this.cursors.right.isDown) this.paddle.x += 4;
    this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);
  }}
}}

{CONFIG}
"""


def s6():
    # Add track line under paddle.
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  create() {{
    this.bg = this.add.rectangle(240, 320, 480, 640, 0x223344);
    this.track = this.add.rectangle(240, 580, 460, 4, 0x556677);
    this.paddle = this.add.rectangle(240, 580, 80, 16, 0xeeeeee);
    this.physics.add.existing(this.paddle);
    this.paddle.body.setImmovable(true);
    this.cursors = this.input.keyboard.createCursorKeys();
  }}

  update() {{
    if (this.cursors.left.isDown) this.paddle.x -= 4;
    else if (this.cursors.right.isDown) this.paddle.x += 4;
    this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);
  }}
}}

{CONFIG}
"""


def s7():
    # Add targetX + pointermove listener.
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  create() {{
    this.bg = this.add.rectangle(240, 320, 480, 640, 0x223344);
    this.track = this.add.rectangle(240, 580, 460, 4, 0x556677);
    this.paddle = this.add.rectangle(240, 580, 80, 16, 0xeeeeee);
    this.physics.add.existing(this.paddle);
    this.paddle.body.setImmovable(true);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.targetX = this.paddle.x;
    this.input.on(\"pointermove\", pointer => {{
      this.targetX = pointer.x;
    }});
  }}

  update() {{
    if (this.cursors.left.isDown) this.paddle.x -= 4;
    else if (this.cursors.right.isDown) this.paddle.x += 4;
    this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);
  }}
}}

{CONFIG}
"""


def s8():
    # Lerp paddle.x toward targetX in update (after the keyboard / clamp lines).
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  create() {{
    this.bg = this.add.rectangle(240, 320, 480, 640, 0x223344);
    this.track = this.add.rectangle(240, 580, 460, 4, 0x556677);
    this.paddle = this.add.rectangle(240, 580, 80, 16, 0xeeeeee);
    this.physics.add.existing(this.paddle);
    this.paddle.body.setImmovable(true);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.targetX = this.paddle.x;
    this.input.on(\"pointermove\", pointer => {{
      this.targetX = pointer.x;
    }});
  }}

  update() {{
    if (this.cursors.left.isDown) this.paddle.x -= 4;
    else if (this.cursors.right.isDown) this.paddle.x += 4;
    this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);
    this.paddle.x = Phaser.Math.Linear(this.paddle.x, this.targetX, 0.2);
  }}
}}

{CONFIG}
"""


def s9():
    # Add pointerdown listener that also sets targetX.
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  create() {{
    this.bg = this.add.rectangle(240, 320, 480, 640, 0x223344);
    this.track = this.add.rectangle(240, 580, 460, 4, 0x556677);
    this.paddle = this.add.rectangle(240, 580, 80, 16, 0xeeeeee);
    this.physics.add.existing(this.paddle);
    this.paddle.body.setImmovable(true);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.targetX = this.paddle.x;
    this.input.on(\"pointermove\", pointer => {{
      this.targetX = pointer.x;
    }});
    this.input.on(\"pointerdown\", pointer => {{
      this.targetX = pointer.x;
    }});
  }}

  update() {{
    if (this.cursors.left.isDown) this.paddle.x -= 4;
    else if (this.cursors.right.isDown) this.paddle.x += 4;
    this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);
    this.paddle.x = Phaser.Math.Linear(this.paddle.x, this.targetX, 0.2);
  }}
}}

{CONFIG}
"""


def s10():
    # Refactor arrows in update to mutate targetX, not paddle.x.
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  create() {{
    this.bg = this.add.rectangle(240, 320, 480, 640, 0x223344);
    this.track = this.add.rectangle(240, 580, 460, 4, 0x556677);
    this.paddle = this.add.rectangle(240, 580, 80, 16, 0xeeeeee);
    this.physics.add.existing(this.paddle);
    this.paddle.body.setImmovable(true);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.targetX = this.paddle.x;
    this.input.on(\"pointermove\", pointer => {{
      this.targetX = pointer.x;
    }});
    this.input.on(\"pointerdown\", pointer => {{
      this.targetX = pointer.x;
    }});
  }}

  update() {{
    if (this.cursors.left.isDown) this.targetX -= 4;
    else if (this.cursors.right.isDown) this.targetX += 4;
    this.targetX = Phaser.Math.Clamp(this.targetX, 40, 440);
    this.paddle.x = Phaser.Math.Linear(this.paddle.x, this.targetX, 0.2);
    this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);
  }}
}}

{CONFIG}
"""


HELP_TEXT_BLOCK = """    this.helpText = this.add
      .text(240, 40, \"DRAG to move \\u2022 ARROWS to move\", {
        fontSize: \"14px\",
        fill: \"#ffffff\"
      })
      .setOrigin(0.5);"""


def s11():
    # Add help text instructional banner.
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  create() {{
    this.bg = this.add.rectangle(240, 320, 480, 640, 0x223344);
    this.track = this.add.rectangle(240, 580, 460, 4, 0x556677);
    this.paddle = this.add.rectangle(240, 580, 80, 16, 0xeeeeee);
    this.physics.add.existing(this.paddle);
    this.paddle.body.setImmovable(true);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.targetX = this.paddle.x;
    this.input.on(\"pointermove\", pointer => {{
      this.targetX = pointer.x;
    }});
    this.input.on(\"pointerdown\", pointer => {{
      this.targetX = pointer.x;
    }});
{HELP_TEXT_BLOCK}
  }}

  update() {{
    if (this.cursors.left.isDown) this.targetX -= 4;
    else if (this.cursors.right.isDown) this.targetX += 4;
    this.targetX = Phaser.Math.Clamp(this.targetX, 40, 440);
    this.paddle.x = Phaser.Math.Linear(this.paddle.x, this.targetX, 0.2);
    this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);
  }}
}}

{CONFIG}
"""


def s12():
    # Make paddle draggable + drag handler that moves paddle on both axes.
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  create() {{
    this.bg = this.add.rectangle(240, 320, 480, 640, 0x223344);
    this.track = this.add.rectangle(240, 580, 460, 4, 0x556677);
    this.paddle = this.add.rectangle(240, 580, 80, 16, 0xeeeeee);
    this.physics.add.existing(this.paddle);
    this.paddle.body.setImmovable(true);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.targetX = this.paddle.x;
    this.input.on(\"pointermove\", pointer => {{
      this.targetX = pointer.x;
    }});
    this.input.on(\"pointerdown\", pointer => {{
      this.targetX = pointer.x;
    }});
{HELP_TEXT_BLOCK}
    this.paddle.setInteractive({{ draggable: true }});
    this.paddle.on(\"drag\", (pointer, dragX, dragY) => {{
      this.paddle.setPosition(dragX, dragY);
      this.targetX = dragX;
    }});
  }}

  update() {{
    if (this.cursors.left.isDown) this.targetX -= 4;
    else if (this.cursors.right.isDown) this.targetX += 4;
    this.targetX = Phaser.Math.Clamp(this.targetX, 40, 440);
    this.paddle.x = Phaser.Math.Linear(this.paddle.x, this.targetX, 0.2);
    this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);
  }}
}}

{CONFIG}
"""


def s13():
    # Snap dragged paddle's y to 580; only x moves.
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  create() {{
    this.bg = this.add.rectangle(240, 320, 480, 640, 0x223344);
    this.track = this.add.rectangle(240, 580, 460, 4, 0x556677);
    this.paddle = this.add.rectangle(240, 580, 80, 16, 0xeeeeee);
    this.physics.add.existing(this.paddle);
    this.paddle.body.setImmovable(true);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.targetX = this.paddle.x;
    this.input.on(\"pointermove\", pointer => {{
      this.targetX = pointer.x;
    }});
    this.input.on(\"pointerdown\", pointer => {{
      this.targetX = pointer.x;
    }});
{HELP_TEXT_BLOCK}
    this.paddle.setInteractive({{ draggable: true }});
    this.paddle.on(\"drag\", (pointer, dragX) => {{
      this.paddle.y = 580;
      this.targetX = dragX;
    }});
  }}

  update() {{
    if (this.cursors.left.isDown) this.targetX -= 4;
    else if (this.cursors.right.isDown) this.targetX += 4;
    this.targetX = Phaser.Math.Clamp(this.targetX, 40, 440);
    this.paddle.x = Phaser.Math.Linear(this.paddle.x, this.targetX, 0.2);
    this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);
  }}
}}

{CONFIG}
"""


def s14():
    # Add thumb zone visual + gate pointermove/pointerdown to bottom strip.
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  create() {{
    this.bg = this.add.rectangle(240, 320, 480, 640, 0x223344);
    this.track = this.add.rectangle(240, 580, 460, 4, 0x556677);
    this.paddle = this.add.rectangle(240, 580, 80, 16, 0xeeeeee);
    this.physics.add.existing(this.paddle);
    this.paddle.body.setImmovable(true);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.targetX = this.paddle.x;
    this.input.on(\"pointermove\", pointer => {{
      if (pointer.y > 540) this.targetX = pointer.x;
    }});
    this.input.on(\"pointerdown\", pointer => {{
      if (pointer.y > 540) this.targetX = pointer.x;
    }});
    this.thumbZone = this.add.rectangle(240, 600, 480, 80, 0xffffff, 0.04);
{HELP_TEXT_BLOCK}
    this.paddle.setInteractive({{ draggable: true }});
    this.paddle.on(\"drag\", (pointer, dragX) => {{
      this.paddle.y = 580;
      this.targetX = dragX;
    }});
  }}

  update() {{
    if (this.cursors.left.isDown) this.targetX -= 4;
    else if (this.cursors.right.isDown) this.targetX += 4;
    this.targetX = Phaser.Math.Clamp(this.targetX, 40, 440);
    this.paddle.x = Phaser.Math.Linear(this.paddle.x, this.targetX, 0.2);
    this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);
  }}
}}

{CONFIG}
"""


VBUTTONS_VISUALS = """    this.leftBtn = this.add.rectangle(40, 320, 60, 60, 0x556677);
    this.leftBtn.setInteractive();
    this.rightBtn = this.add.rectangle(440, 320, 60, 60, 0x556677);
    this.rightBtn.setInteractive();"""


def s15():
    # Add virtual left/right button rectangles with setInteractive (always visible for now).
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  create() {{
    this.bg = this.add.rectangle(240, 320, 480, 640, 0x223344);
    this.track = this.add.rectangle(240, 580, 460, 4, 0x556677);
    this.paddle = this.add.rectangle(240, 580, 80, 16, 0xeeeeee);
    this.physics.add.existing(this.paddle);
    this.paddle.body.setImmovable(true);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.targetX = this.paddle.x;
    this.input.on(\"pointermove\", pointer => {{
      if (pointer.y > 540) this.targetX = pointer.x;
    }});
    this.input.on(\"pointerdown\", pointer => {{
      if (pointer.y > 540) this.targetX = pointer.x;
    }});
    this.thumbZone = this.add.rectangle(240, 600, 480, 80, 0xffffff, 0.04);
{HELP_TEXT_BLOCK}
    this.paddle.setInteractive({{ draggable: true }});
    this.paddle.on(\"drag\", (pointer, dragX) => {{
      this.paddle.y = 580;
      this.targetX = dragX;
    }});
{VBUTTONS_VISUALS}
  }}

  update() {{
    if (this.cursors.left.isDown) this.targetX -= 4;
    else if (this.cursors.right.isDown) this.targetX += 4;
    this.targetX = Phaser.Math.Clamp(this.targetX, 40, 440);
    this.paddle.x = Phaser.Math.Linear(this.paddle.x, this.targetX, 0.2);
    this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);
  }}
}}

{CONFIG}
"""


VBUTTONS_HANDLERS_BASIC = """    this.leftBtn.on(\"pointerdown\", () => {
      this.targetX -= 60;
    });
    this.rightBtn.on(\"pointerdown\", () => {
      this.targetX += 60;
    });"""


def s16():
    # Wire pointerdown handlers on virtual buttons to mutate targetX.
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  create() {{
    this.bg = this.add.rectangle(240, 320, 480, 640, 0x223344);
    this.track = this.add.rectangle(240, 580, 460, 4, 0x556677);
    this.paddle = this.add.rectangle(240, 580, 80, 16, 0xeeeeee);
    this.physics.add.existing(this.paddle);
    this.paddle.body.setImmovable(true);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.targetX = this.paddle.x;
    this.input.on(\"pointermove\", pointer => {{
      if (pointer.y > 540) this.targetX = pointer.x;
    }});
    this.input.on(\"pointerdown\", pointer => {{
      if (pointer.y > 540) this.targetX = pointer.x;
    }});
    this.thumbZone = this.add.rectangle(240, 600, 480, 80, 0xffffff, 0.04);
{HELP_TEXT_BLOCK}
    this.paddle.setInteractive({{ draggable: true }});
    this.paddle.on(\"drag\", (pointer, dragX) => {{
      this.paddle.y = 580;
      this.targetX = dragX;
    }});
{VBUTTONS_VISUALS}
{VBUTTONS_HANDLERS_BASIC}
  }}

  update() {{
    if (this.cursors.left.isDown) this.targetX -= 4;
    else if (this.cursors.right.isDown) this.targetX += 4;
    this.targetX = Phaser.Math.Clamp(this.targetX, 40, 440);
    this.paddle.x = Phaser.Math.Linear(this.paddle.x, this.targetX, 0.2);
    this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);
  }}
}}

{CONFIG}
"""


MOBILE_VISIBILITY_BLOCK = """    this.isMobile = Phaser.Device.os.android || Phaser.Device.os.iOS;
    this.leftBtn.setVisible(this.isMobile);
    this.rightBtn.setVisible(this.isMobile);"""


def s17():
    # Add Phaser.Device.os mobile detection and hide buttons on desktop.
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  create() {{
    this.bg = this.add.rectangle(240, 320, 480, 640, 0x223344);
    this.track = this.add.rectangle(240, 580, 460, 4, 0x556677);
    this.paddle = this.add.rectangle(240, 580, 80, 16, 0xeeeeee);
    this.physics.add.existing(this.paddle);
    this.paddle.body.setImmovable(true);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.targetX = this.paddle.x;
    this.input.on(\"pointermove\", pointer => {{
      if (pointer.y > 540) this.targetX = pointer.x;
    }});
    this.input.on(\"pointerdown\", pointer => {{
      if (pointer.y > 540) this.targetX = pointer.x;
    }});
    this.thumbZone = this.add.rectangle(240, 600, 480, 80, 0xffffff, 0.04);
{HELP_TEXT_BLOCK}
    this.paddle.setInteractive({{ draggable: true }});
    this.paddle.on(\"drag\", (pointer, dragX) => {{
      this.paddle.y = 580;
      this.targetX = dragX;
    }});
{VBUTTONS_VISUALS}
{VBUTTONS_HANDLERS_BASIC}
{MOBILE_VISIBILITY_BLOCK}
  }}

  update() {{
    if (this.cursors.left.isDown) this.targetX -= 4;
    else if (this.cursors.right.isDown) this.targetX += 4;
    this.targetX = Phaser.Math.Clamp(this.targetX, 40, 440);
    this.paddle.x = Phaser.Math.Linear(this.paddle.x, this.targetX, 0.2);
    this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);
  }}
}}

{CONFIG}
"""


SWIPE_BLOCK = """    this.swipeStart = null;
    this.input.on(\"pointerdown\", pointer => {
      this.swipeStart = { x: pointer.x, t: this.time.now };
    });
    this.input.on(\"pointerup\", pointer => {
      if (!this.swipeStart) return;
      const dx = pointer.x - this.swipeStart.x;
      const dt = this.time.now - this.swipeStart.t;
      if (Math.abs(dx) > 80 && dt < 250) {
        this.targetX = dx > 0 ? 440 : 40;
      }
      this.swipeStart = null;
    });"""


def s18():
    # Add swipe gesture detection (pointerdown/pointerup pair).
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  create() {{
    this.bg = this.add.rectangle(240, 320, 480, 640, 0x223344);
    this.track = this.add.rectangle(240, 580, 460, 4, 0x556677);
    this.paddle = this.add.rectangle(240, 580, 80, 16, 0xeeeeee);
    this.physics.add.existing(this.paddle);
    this.paddle.body.setImmovable(true);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.targetX = this.paddle.x;
    this.input.on(\"pointermove\", pointer => {{
      if (pointer.y > 540) this.targetX = pointer.x;
    }});
    this.input.on(\"pointerdown\", pointer => {{
      if (pointer.y > 540) this.targetX = pointer.x;
    }});
    this.thumbZone = this.add.rectangle(240, 600, 480, 80, 0xffffff, 0.04);
{HELP_TEXT_BLOCK}
    this.paddle.setInteractive({{ draggable: true }});
    this.paddle.on(\"drag\", (pointer, dragX) => {{
      this.paddle.y = 580;
      this.targetX = dragX;
    }});
{VBUTTONS_VISUALS}
{VBUTTONS_HANDLERS_BASIC}
{MOBILE_VISIBILITY_BLOCK}
{SWIPE_BLOCK}
  }}

  update() {{
    if (this.cursors.left.isDown) this.targetX -= 4;
    else if (this.cursors.right.isDown) this.targetX += 4;
    this.targetX = Phaser.Math.Clamp(this.targetX, 40, 440);
    this.paddle.x = Phaser.Math.Linear(this.paddle.x, this.targetX, 0.2);
    this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);
  }}
}}

{CONFIG}
"""


VBUTTONS_HANDLERS_DEBOUNCED = """    this.lastButtonAt = 0;
    this.leftBtn.on(\"pointerdown\", () => {
      if (this.time.now - this.lastButtonAt < 100) return;
      this.lastButtonAt = this.time.now;
      this.targetX -= 60;
    });
    this.rightBtn.on(\"pointerdown\", () => {
      if (this.time.now - this.lastButtonAt < 100) return;
      this.lastButtonAt = this.time.now;
      this.targetX += 60;
    });"""


def s19():
    # Replace the basic virtual-button handlers with debounced versions.
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  create() {{
    this.bg = this.add.rectangle(240, 320, 480, 640, 0x223344);
    this.track = this.add.rectangle(240, 580, 460, 4, 0x556677);
    this.paddle = this.add.rectangle(240, 580, 80, 16, 0xeeeeee);
    this.physics.add.existing(this.paddle);
    this.paddle.body.setImmovable(true);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.targetX = this.paddle.x;
    this.input.on(\"pointermove\", pointer => {{
      if (pointer.y > 540) this.targetX = pointer.x;
    }});
    this.input.on(\"pointerdown\", pointer => {{
      if (pointer.y > 540) this.targetX = pointer.x;
    }});
    this.thumbZone = this.add.rectangle(240, 600, 480, 80, 0xffffff, 0.04);
{HELP_TEXT_BLOCK}
    this.paddle.setInteractive({{ draggable: true }});
    this.paddle.on(\"drag\", (pointer, dragX) => {{
      this.paddle.y = 580;
      this.targetX = dragX;
    }});
{VBUTTONS_VISUALS}
{VBUTTONS_HANDLERS_DEBOUNCED}
{MOBILE_VISIBILITY_BLOCK}
{SWIPE_BLOCK}
  }}

  update() {{
    if (this.cursors.left.isDown) this.targetX -= 4;
    else if (this.cursors.right.isDown) this.targetX += 4;
    this.targetX = Phaser.Math.Clamp(this.targetX, 40, 440);
    this.paddle.x = Phaser.Math.Linear(this.paddle.x, this.targetX, 0.2);
    this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);
  }}
}}

{CONFIG}
"""


FALLING_BLOCK = """    this.falling = this.add.rectangle(
      Phaser.Math.Between(40, 440),
      0,
      16,
      16,
      0xffaa44
    );
    this.physics.add.existing(this.falling);
    this.falling.body.setVelocityY(120);"""


def s20():
    # Add falling target rectangle with vertical velocity.
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  create() {{
    this.bg = this.add.rectangle(240, 320, 480, 640, 0x223344);
    this.track = this.add.rectangle(240, 580, 460, 4, 0x556677);
    this.paddle = this.add.rectangle(240, 580, 80, 16, 0xeeeeee);
    this.physics.add.existing(this.paddle);
    this.paddle.body.setImmovable(true);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.targetX = this.paddle.x;
    this.input.on(\"pointermove\", pointer => {{
      if (pointer.y > 540) this.targetX = pointer.x;
    }});
    this.input.on(\"pointerdown\", pointer => {{
      if (pointer.y > 540) this.targetX = pointer.x;
    }});
    this.thumbZone = this.add.rectangle(240, 600, 480, 80, 0xffffff, 0.04);
{HELP_TEXT_BLOCK}
    this.paddle.setInteractive({{ draggable: true }});
    this.paddle.on(\"drag\", (pointer, dragX) => {{
      this.paddle.y = 580;
      this.targetX = dragX;
    }});
{VBUTTONS_VISUALS}
{VBUTTONS_HANDLERS_DEBOUNCED}
{MOBILE_VISIBILITY_BLOCK}
{SWIPE_BLOCK}
{FALLING_BLOCK}
  }}

  update() {{
    if (this.cursors.left.isDown) this.targetX -= 4;
    else if (this.cursors.right.isDown) this.targetX += 4;
    this.targetX = Phaser.Math.Clamp(this.targetX, 40, 440);
    this.paddle.x = Phaser.Math.Linear(this.paddle.x, this.targetX, 0.2);
    this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);
  }}
}}

{CONFIG}
"""


ON_CATCH_EMPTY = """  onCatch(paddle, falling) {
  }"""


def s21():
    # Define empty onCatch method on the class.
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  create() {{
    this.bg = this.add.rectangle(240, 320, 480, 640, 0x223344);
    this.track = this.add.rectangle(240, 580, 460, 4, 0x556677);
    this.paddle = this.add.rectangle(240, 580, 80, 16, 0xeeeeee);
    this.physics.add.existing(this.paddle);
    this.paddle.body.setImmovable(true);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.targetX = this.paddle.x;
    this.input.on(\"pointermove\", pointer => {{
      if (pointer.y > 540) this.targetX = pointer.x;
    }});
    this.input.on(\"pointerdown\", pointer => {{
      if (pointer.y > 540) this.targetX = pointer.x;
    }});
    this.thumbZone = this.add.rectangle(240, 600, 480, 80, 0xffffff, 0.04);
{HELP_TEXT_BLOCK}
    this.paddle.setInteractive({{ draggable: true }});
    this.paddle.on(\"drag\", (pointer, dragX) => {{
      this.paddle.y = 580;
      this.targetX = dragX;
    }});
{VBUTTONS_VISUALS}
{VBUTTONS_HANDLERS_DEBOUNCED}
{MOBILE_VISIBILITY_BLOCK}
{SWIPE_BLOCK}
{FALLING_BLOCK}
  }}

  update() {{
    if (this.cursors.left.isDown) this.targetX -= 4;
    else if (this.cursors.right.isDown) this.targetX += 4;
    this.targetX = Phaser.Math.Clamp(this.targetX, 40, 440);
    this.paddle.x = Phaser.Math.Linear(this.paddle.x, this.targetX, 0.2);
    this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);
  }}

{ON_CATCH_EMPTY}
}}

{CONFIG}
"""


SCORE_HUD_BLOCK = """    this.physics.add.overlap(
      this.paddle,
      this.falling,
      this.onCatch,
      null,
      this
    );
    this.score = 0;
    this.scoreText = this.add.text(10, 10, \"Score: 0\", {
      fontSize: \"20px\",
      fill: \"#ffffff\"
    });
    this.scoreText.setScrollFactor(0);"""


def s22():
    # Wire physics.add.overlap to onCatch + add score state + scoreText HUD.
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  create() {{
    this.bg = this.add.rectangle(240, 320, 480, 640, 0x223344);
    this.track = this.add.rectangle(240, 580, 460, 4, 0x556677);
    this.paddle = this.add.rectangle(240, 580, 80, 16, 0xeeeeee);
    this.physics.add.existing(this.paddle);
    this.paddle.body.setImmovable(true);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.targetX = this.paddle.x;
    this.input.on(\"pointermove\", pointer => {{
      if (pointer.y > 540) this.targetX = pointer.x;
    }});
    this.input.on(\"pointerdown\", pointer => {{
      if (pointer.y > 540) this.targetX = pointer.x;
    }});
    this.thumbZone = this.add.rectangle(240, 600, 480, 80, 0xffffff, 0.04);
{HELP_TEXT_BLOCK}
    this.paddle.setInteractive({{ draggable: true }});
    this.paddle.on(\"drag\", (pointer, dragX) => {{
      this.paddle.y = 580;
      this.targetX = dragX;
    }});
{VBUTTONS_VISUALS}
{VBUTTONS_HANDLERS_DEBOUNCED}
{MOBILE_VISIBILITY_BLOCK}
{SWIPE_BLOCK}
{FALLING_BLOCK}
{SCORE_HUD_BLOCK}
  }}

  update() {{
    if (this.cursors.left.isDown) this.targetX -= 4;
    else if (this.cursors.right.isDown) this.targetX += 4;
    this.targetX = Phaser.Math.Clamp(this.targetX, 40, 440);
    this.paddle.x = Phaser.Math.Linear(this.paddle.x, this.targetX, 0.2);
    this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);
  }}

{ON_CATCH_EMPTY}
}}

{CONFIG}
"""


ON_CATCH_BASIC = """  onCatch(paddle, falling) {
    this.tweens.add({
      targets: paddle,
      scaleX: 1.4,
      scaleY: 1.4,
      duration: 100,
      yoyo: true
    });
    this.score += 1;
    this.scoreText.setText(\"Score: \" + this.score);
  }"""


def s23():
    # Implement onCatch body: paddle pulse + score increment + setText.
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  create() {{
    this.bg = this.add.rectangle(240, 320, 480, 640, 0x223344);
    this.track = this.add.rectangle(240, 580, 460, 4, 0x556677);
    this.paddle = this.add.rectangle(240, 580, 80, 16, 0xeeeeee);
    this.physics.add.existing(this.paddle);
    this.paddle.body.setImmovable(true);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.targetX = this.paddle.x;
    this.input.on(\"pointermove\", pointer => {{
      if (pointer.y > 540) this.targetX = pointer.x;
    }});
    this.input.on(\"pointerdown\", pointer => {{
      if (pointer.y > 540) this.targetX = pointer.x;
    }});
    this.thumbZone = this.add.rectangle(240, 600, 480, 80, 0xffffff, 0.04);
{HELP_TEXT_BLOCK}
    this.paddle.setInteractive({{ draggable: true }});
    this.paddle.on(\"drag\", (pointer, dragX) => {{
      this.paddle.y = 580;
      this.targetX = dragX;
    }});
{VBUTTONS_VISUALS}
{VBUTTONS_HANDLERS_DEBOUNCED}
{MOBILE_VISIBILITY_BLOCK}
{SWIPE_BLOCK}
{FALLING_BLOCK}
{SCORE_HUD_BLOCK}
  }}

  update() {{
    if (this.cursors.left.isDown) this.targetX -= 4;
    else if (this.cursors.right.isDown) this.targetX += 4;
    this.targetX = Phaser.Math.Clamp(this.targetX, 40, 440);
    this.paddle.x = Phaser.Math.Linear(this.paddle.x, this.targetX, 0.2);
    this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);
  }}

{ON_CATCH_BASIC}
}}

{CONFIG}
"""


ON_CATCH_FULL = """  onCatch(paddle, falling) {
    this.tweens.add({
      targets: paddle,
      scaleX: 1.4,
      scaleY: 1.4,
      duration: 100,
      yoyo: true
    });
    this.score += 1;
    this.scoreText.setText(\"Score: \" + this.score);
    falling.y = 0;
    falling.x = Phaser.Math.Between(40, 440);
    falling.body.setVelocityY(120 + this.score * 10);
  }"""


def s24():
    # Reset falling rect on catch + ramp velocity.
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  create() {{
    this.bg = this.add.rectangle(240, 320, 480, 640, 0x223344);
    this.track = this.add.rectangle(240, 580, 460, 4, 0x556677);
    this.paddle = this.add.rectangle(240, 580, 80, 16, 0xeeeeee);
    this.physics.add.existing(this.paddle);
    this.paddle.body.setImmovable(true);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.targetX = this.paddle.x;
    this.input.on(\"pointermove\", pointer => {{
      if (pointer.y > 540) this.targetX = pointer.x;
    }});
    this.input.on(\"pointerdown\", pointer => {{
      if (pointer.y > 540) this.targetX = pointer.x;
    }});
    this.thumbZone = this.add.rectangle(240, 600, 480, 80, 0xffffff, 0.04);
{HELP_TEXT_BLOCK}
    this.paddle.setInteractive({{ draggable: true }});
    this.paddle.on(\"drag\", (pointer, dragX) => {{
      this.paddle.y = 580;
      this.targetX = dragX;
    }});
{VBUTTONS_VISUALS}
{VBUTTONS_HANDLERS_DEBOUNCED}
{MOBILE_VISIBILITY_BLOCK}
{SWIPE_BLOCK}
{FALLING_BLOCK}
{SCORE_HUD_BLOCK}
  }}

  update() {{
    if (this.cursors.left.isDown) this.targetX -= 4;
    else if (this.cursors.right.isDown) this.targetX += 4;
    this.targetX = Phaser.Math.Clamp(this.targetX, 40, 440);
    this.paddle.x = Phaser.Math.Linear(this.paddle.x, this.targetX, 0.2);
    this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);
  }}

{ON_CATCH_FULL}
}}

{CONFIG}
"""


def s25():
    # Add gameOver flag + freeze update + miss check.
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  create() {{
    this.bg = this.add.rectangle(240, 320, 480, 640, 0x223344);
    this.track = this.add.rectangle(240, 580, 460, 4, 0x556677);
    this.paddle = this.add.rectangle(240, 580, 80, 16, 0xeeeeee);
    this.physics.add.existing(this.paddle);
    this.paddle.body.setImmovable(true);
    this.cursors = this.input.keyboard.createCursorKeys();
    this.targetX = this.paddle.x;
    this.input.on(\"pointermove\", pointer => {{
      if (pointer.y > 540) this.targetX = pointer.x;
    }});
    this.input.on(\"pointerdown\", pointer => {{
      if (pointer.y > 540) this.targetX = pointer.x;
    }});
    this.thumbZone = this.add.rectangle(240, 600, 480, 80, 0xffffff, 0.04);
{HELP_TEXT_BLOCK}
    this.paddle.setInteractive({{ draggable: true }});
    this.paddle.on(\"drag\", (pointer, dragX) => {{
      this.paddle.y = 580;
      this.targetX = dragX;
    }});
{VBUTTONS_VISUALS}
{VBUTTONS_HANDLERS_DEBOUNCED}
{MOBILE_VISIBILITY_BLOCK}
{SWIPE_BLOCK}
{FALLING_BLOCK}
{SCORE_HUD_BLOCK}
    this.gameOver = false;
  }}

  update() {{
    if (this.gameOver) return;
    if (this.cursors.left.isDown) this.targetX -= 4;
    else if (this.cursors.right.isDown) this.targetX += 4;
    this.targetX = Phaser.Math.Clamp(this.targetX, 40, 440);
    this.paddle.x = Phaser.Math.Linear(this.paddle.x, this.targetX, 0.2);
    this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);
    if (this.falling.y > 640) {{
      this.gameOver = true;
      this.helpText.setText(\"GAME OVER \\u00b7 refresh to restart\");
    }}
  }}

{ON_CATCH_FULL}
}}

{CONFIG}
"""


SOLUTIONS = [None, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10,
             s11, s12, s13, s14, s15, s16, s17, s18, s19, s20,
             s21, s22, s23, s24, s25]


# ---------------------------------------------------------------------------
# Step metadata: description, hints, seed function (returns prev with markers).
# ---------------------------------------------------------------------------


STEPS = []


def step(num: int, dashed: str, description: str, hints: str, seed_fn, *, demo: bool = True):
    STEPS.append({
        "num": num,
        "dashed": dashed,
        "description": description,
        "hints": hints,
        "seed": seed_fn,
        "demo": demo,
    })


# Step 1 — empty file, full editable region.
def step1_seed(_prev):
    return "--fcc-editable-region--\n\n--fcc-editable-region--\n"


step(
    1, "step-1",
    """
Welcome! In this workshop you'll build a paddle prototype that responds equally well to keyboard arrows, mouse clicks, finger drags, and on-screen virtual buttons. Then you'll layer a falling-target catch game on top so the paddle has something to do.

Start by declaring a class named `MainScene` that extends `Phaser.Scene` and gives the scene the key `"MainScene"` in its constructor. Add empty `create()` and `update()` methods.

Below the class, declare a `config` object with `type: Phaser.AUTO`, `width: 480`, `height: 640`, `parent: "game-container"`, `backgroundColor: "#000033"`, the standard arcade-physics block (`{ default: "arcade", arcade: { gravity: { y: 0 } } }`), and `scene: [MainScene]`. Then start the game with `new Phaser.Game(config)`.
""",
    """
You should declare a class named `MainScene` that extends `Phaser.Scene`.

```js
assert.match(code, /class\\s+MainScene\\s+extends\\s+Phaser\\.Scene\\s*\\{/);
```

The constructor should call `super("MainScene")`.

```js
assert.match(code, /constructor\\s*\\(\\s*\\)\\s*\\{\\s*super\\(\\s*[\"']MainScene[\"']\\s*\\)/);
```

You should declare empty `create` and `update` methods.

```js
assert.match(code, /create\\s*\\(\\s*\\)\\s*\\{[\\s\\S]*?\\}/);
assert.match(code, /update\\s*\\(\\s*\\)\\s*\\{[\\s\\S]*?\\}/);
```

You should configure the game at 480 by 640 with arcade physics, gravity `y: 0`, and `scene: [MainScene]`.

```js
assert.match(code, /type:\\s*Phaser\\.AUTO/);
assert.match(code, /width:\\s*480/);
assert.match(code, /height:\\s*640/);
assert.match(code, /default:\\s*[\"']arcade[\"']/);
assert.match(code, /gravity:\\s*\\{\\s*y:\\s*0\\s*\\}/);
assert.match(code, /scene:\\s*\\[\\s*MainScene\\s*\\]/);
```

You should create the game with `new Phaser.Game(config)`.

```js
assert.match(code, /new\\s+Phaser\\.Game\\(\\s*config\\s*\\)/);
```
""",
    step1_seed,
)


# Step 2 — wrap empty create() body.
def step2_seed(prev):
    return prev.replace(
        "  create() {\n  }\n",
        "  create() {\n--fcc-editable-region--\n\n--fcc-editable-region--\n  }\n",
        1,
    )


step(
    2, "step-2",
    """
Inside `create`, paint a dark background and a bright paddle.

Add `this.bg = this.add.rectangle(240, 320, 480, 640, 0x223344)` to fill the canvas. Then add `this.paddle = this.add.rectangle(240, 580, 80, 16, 0xeeeeee)` for the paddle near the bottom edge. Give the paddle an arcade physics body with `this.physics.add.existing(this.paddle)`, then mark it immovable so the falling target won't shove it: `this.paddle.body.setImmovable(true)`.
""",
    """
You should paint a 480 by 640 background rectangle centered at `(240, 320)` with color `0x223344`.

```js
assert.match(code, /this\\.bg\\s*=\\s*this\\.add\\.rectangle\\(\\s*240\\s*,\\s*320\\s*,\\s*480\\s*,\\s*640\\s*,\\s*0x223344/);
```

You should create a paddle rectangle at `(240, 580)` sized `80` by `16` with color `0xeeeeee`.

```js
assert.match(code, /this\\.paddle\\s*=\\s*this\\.add\\.rectangle\\(\\s*240\\s*,\\s*580\\s*,\\s*80\\s*,\\s*16\\s*,\\s*0xeeeeee/);
```

You should give the paddle an arcade physics body via `this.physics.add.existing` and mark it immovable.

```js
assert.match(code, /this\\.physics\\.add\\.existing\\(\\s*this\\.paddle\\s*\\)/);
assert.match(code, /this\\.paddle\\.body\\.setImmovable\\(\\s*true\\s*\\)/);
```
""",
    step2_seed,
)


# Step 3 — append cursors to create().
def step3_seed(prev):
    return prev.replace(
        "    this.paddle.body.setImmovable(true);\n",
        "    this.paddle.body.setImmovable(true);\n--fcc-editable-region--\n\n--fcc-editable-region--\n",
        1,
    )


step(
    3, "step-3",
    """
The keyboard half of the input contract starts here. Below the paddle setup, register the cursor keys: `this.cursors = this.input.keyboard.createCursorKeys()`. That single call gives you a cursors object with `left`, `right`, `up`, `down`, and `space` you can poll every frame.
""",
    """
You should call `this.input.keyboard.createCursorKeys()` and store the result on `this.cursors`.

```js
assert.match(code, /this\\.cursors\\s*=\\s*this\\.input\\.keyboard\\.createCursorKeys\\(\\s*\\)/);
```
""",
    step3_seed,
)


# Step 4 — wrap empty update() body.
def step4_seed(prev):
    return prev.replace(
        "  update() {\n  }\n",
        "  update() {\n--fcc-editable-region--\n\n--fcc-editable-region--\n  }\n",
        1,
    )


step(
    4, "step-4",
    """
Move the paddle in `update`. When the left arrow is held, slide the paddle left four pixels per frame: `if (this.cursors.left.isDown) this.paddle.x -= 4;`. Then add the matching `else if` branch for the right arrow that bumps `this.paddle.x` by `+4`.

Open the live preview, click into it, and tap the arrow keys — the paddle should glide left and right.
""",
    """
You should subtract `4` from `this.paddle.x` while `this.cursors.left.isDown`.

```js
assert.match(code, /if\\s*\\(\\s*this\\.cursors\\.left\\.isDown\\s*\\)[\\s\\S]*?this\\.paddle\\.x\\s*-=\\s*4/);
```

You should add `4` to `this.paddle.x` while `this.cursors.right.isDown` in the matching `else if`.

```js
assert.match(code, /else\\s+if\\s*\\(\\s*this\\.cursors\\.right\\.isDown\\s*\\)[\\s\\S]*?this\\.paddle\\.x\\s*\\+=\\s*4/);
```
""",
    step4_seed,
)


# Step 5 — append clamp to update().
def step5_seed(prev):
    return prev.replace(
        "    else if (this.cursors.right.isDown) this.paddle.x += 4;\n",
        "    else if (this.cursors.right.isDown) this.paddle.x += 4;\n--fcc-editable-region--\n\n--fcc-editable-region--\n",
        1,
    )


step(
    5, "step-5",
    """
Without a clamp the paddle will slide off either side and disappear. After the arrow checks, force `this.paddle.x` to stay between `40` and `440`: `this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);`.

`Phaser.Math.Clamp(value, min, max)` is the workhorse you'll use any time you need a value to stay inside a range without the noise of a `Math.min(Math.max(...))` sandwich.
""",
    """
You should clamp `this.paddle.x` between `40` and `440` using `Phaser.Math.Clamp`.

```js
assert.match(code, /this\\.paddle\\.x\\s*=\\s*Phaser\\.Math\\.Clamp\\(\\s*this\\.paddle\\.x\\s*,\\s*40\\s*,\\s*440\\s*\\)/);
```
""",
    step5_seed,
)


# Step 6 — insert track line above paddle in create().
def step6_seed(prev):
    return prev.replace(
        "    this.paddle = this.add.rectangle(240, 580, 80, 16, 0xeeeeee);\n",
        "--fcc-editable-region--\n\n--fcc-editable-region--\n    this.paddle = this.add.rectangle(240, 580, 80, 16, 0xeeeeee);\n",
        1,
    )


step(
    6, "step-6",
    """
A subtle visual cue helps the player see the paddle's lane. Above the paddle creation, add a thin horizontal track rectangle: `this.track = this.add.rectangle(240, 580, 460, 4, 0x556677);`.

Order matters here — Phaser draws objects in the order they are added, so the track sits *under* the paddle rather than over it.
""",
    """
You should create a thin track rectangle at `(240, 580)` sized `460` by `4` with color `0x556677`.

```js
assert.match(code, /this\\.track\\s*=\\s*this\\.add\\.rectangle\\(\\s*240\\s*,\\s*580\\s*,\\s*460\\s*,\\s*4\\s*,\\s*0x556677/);
```

The track should be created *before* the paddle so it renders underneath.

```js
assert.match(code, /this\\.track\\s*=[\\s\\S]*?this\\.paddle\\s*=/);
```
""",
    step6_seed,
)


# Step 7 — append targetX + pointermove listener after cursors.
def step7_seed(prev):
    return prev.replace(
        "    this.cursors = this.input.keyboard.createCursorKeys();\n",
        "    this.cursors = this.input.keyboard.createCursorKeys();\n--fcc-editable-region--\n\n--fcc-editable-region--\n",
        1,
    )


step(
    7, "step-7",
    """
Time to wire pointer input. Initialize a tracked target position with `this.targetX = this.paddle.x;`. Then register a `pointermove` listener that snaps the target to the cursor or finger:

```js
this.input.on("pointermove", pointer => {
  this.targetX = pointer.x;
});
```

Nothing visible changes yet — `targetX` is a value held in scene state. The next step uses it.
""",
    """
You should initialize `this.targetX` to `this.paddle.x`.

```js
assert.match(code, /this\\.targetX\\s*=\\s*this\\.paddle\\.x/);
```

You should register a `pointermove` listener via `this.input.on` that sets `this.targetX = pointer.x`.

```js
assert.match(code, /this\\.input\\.on\\(\\s*[\"']pointermove[\"'][\\s\\S]*?this\\.targetX\\s*=\\s*pointer\\.x/);
```
""",
    step7_seed,
)


# Step 8 — append lerp line at end of update().
def step8_seed(prev):
    return prev.replace(
        "    this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);\n",
        "    this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);\n--fcc-editable-region--\n\n--fcc-editable-region--\n",
        1,
    )


step(
    8, "step-8",
    """
Make `targetX` matter. After the clamp in `update`, ease the paddle toward the target each frame: `this.paddle.x = Phaser.Math.Linear(this.paddle.x, this.targetX, 0.2);`.

`Phaser.Math.Linear(a, b, t)` returns `a + (b - a) * t`. With `t = 0.2`, the paddle moves 20% of the remaining distance per frame — smooth without lag.

You'll notice the keyboard now feels off: arrows still nudge `paddle.x`, but the lerp pulls it back toward whatever `targetX` was last set to. Step 10 fixes that. Drag the mouse for now and the paddle chases your cursor.
""",
    """
You should ease `this.paddle.x` toward `this.targetX` with `Phaser.Math.Linear` and a factor of `0.2`.

```js
assert.match(code, /this\\.paddle\\.x\\s*=\\s*Phaser\\.Math\\.Linear\\(\\s*this\\.paddle\\.x\\s*,\\s*this\\.targetX\\s*,\\s*0\\.2\\s*\\)/);
```
""",
    step8_seed,
)


# Step 9 — append pointerdown listener after the pointermove block.
def step9_seed(prev):
    needle = "    this.input.on(\"pointermove\", pointer => {\n      this.targetX = pointer.x;\n    });\n"
    return prev.replace(
        needle,
        needle + "--fcc-editable-region--\n\n--fcc-editable-region--\n",
        1,
    )


step(
    9, "step-9",
    """
A tap should move the paddle immediately, not only on the next mouse move. Right after the `pointermove` listener, add a `pointerdown` listener that also writes to `this.targetX`:

```js
this.input.on("pointerdown", pointer => {
  this.targetX = pointer.x;
});
```

Now the very first click already steers the paddle.
""",
    """
You should register a `pointerdown` listener via `this.input.on` that sets `this.targetX = pointer.x`.

```js
assert.match(code, /this\\.input\\.on\\(\\s*[\"']pointerdown[\"'][\\s\\S]*?this\\.targetX\\s*=\\s*pointer\\.x/);
```
""",
    step9_seed,
)


# Step 10 — wrap the previous-step update body so the learner refactors it.
def step10_seed(prev):
    old = (
        "    if (this.cursors.left.isDown) this.paddle.x -= 4;\n"
        "    else if (this.cursors.right.isDown) this.paddle.x += 4;\n"
        "    this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);\n"
        "    this.paddle.x = Phaser.Math.Linear(this.paddle.x, this.targetX, 0.2);\n"
    )
    new = "--fcc-editable-region--\n" + old + "--fcc-editable-region--\n"
    return prev.replace(old, new, 1)


step(
    10, "step-10",
    """
Unify the inputs. Refactor `update` so both keyboard and pointer feed the same `targetX` channel:

- Replace `this.paddle.x -= 4` with `this.targetX -= 4` for the left arrow, and the matching `+= 4` for the right arrow.
- Clamp `this.targetX` between `40` and `440` (so arrows can't overshoot off-screen).
- Keep the `Phaser.Math.Linear` lerp line as-is.
- Add a final `this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);` after the lerp so the rendered paddle stays on-canvas even when `targetX` changes faster than the lerp can catch up.

Now the paddle responds the same whether you press arrows, click, or drag: every input writes to `targetX`, and `update` smoothly follows.
""",
    """
The keyboard handlers should mutate `this.targetX`, not `this.paddle.x`.

```js
assert.match(code, /if\\s*\\(\\s*this\\.cursors\\.left\\.isDown\\s*\\)[\\s\\S]*?this\\.targetX\\s*-=\\s*4/);
assert.match(code, /else\\s+if\\s*\\(\\s*this\\.cursors\\.right\\.isDown\\s*\\)[\\s\\S]*?this\\.targetX\\s*\\+=\\s*4/);
```

You should clamp `this.targetX` to the `[40, 440]` range *before* the lerp.

```js
assert.match(code, /this\\.targetX\\s*=\\s*Phaser\\.Math\\.Clamp\\(\\s*this\\.targetX\\s*,\\s*40\\s*,\\s*440\\s*\\)/);
```

You should also clamp `this.paddle.x` to `[40, 440]` *after* the lerp so the on-screen paddle never escapes the canvas.

```js
assert.match(code, /Phaser\\.Math\\.Linear\\([\\s\\S]*?this\\.paddle\\.x\\s*=\\s*Phaser\\.Math\\.Clamp\\(\\s*this\\.paddle\\.x\\s*,\\s*40\\s*,\\s*440\\s*\\)/);
```
""",
    step10_seed,
)


# Step 11 — append help text block after pointerdown listener.
def step11_seed(prev):
    needle = "    this.input.on(\"pointerdown\", pointer => {\n      this.targetX = pointer.x;\n    });\n"
    return prev.replace(
        needle,
        needle + "--fcc-editable-region--\n\n--fcc-editable-region--\n",
        1,
    )


step(
    11, "step-11",
    """
Players need to know the controls. Below the `pointerdown` listener, add an instructional banner near the top of the screen:

```js
this.helpText = this.add
  .text(240, 40, "DRAG to move \\u2022 ARROWS to move", {
    fontSize: "14px",
    fill: "#ffffff"
  })
  .setOrigin(0.5);
```

`setOrigin(0.5)` centers the text on its `(x, y)` so the line stays balanced regardless of length.
""",
    """
You should add `this.helpText` as a centered text reading `DRAG to move` and `ARROWS to move`.

```js
assert.match(code, /this\\.helpText\\s*=\\s*this\\.add[\\s\\S]*?\\.text\\(\\s*240\\s*,\\s*40[\\s\\S]*?DRAG\\s+to\\s+move[\\s\\S]*?ARROWS\\s+to\\s+move/);
```

The text should call `setOrigin(0.5)` to center it.

```js
assert.match(code, /\\.setOrigin\\(\\s*0\\.5\\s*\\)/);
```
""",
    step11_seed,
)


# Step 12 — append draggable + drag handler after help text block.
def step12_seed(prev):
    needle = "      .setOrigin(0.5);\n"
    return prev.replace(
        needle,
        needle + "--fcc-editable-region--\n\n--fcc-editable-region--\n",
        1,
    )


step(
    12, "step-12",
    """
Make the paddle draggable. Below the help text, mark the paddle interactive with the `draggable` flag and listen for the per-object `drag` event:

```js
this.paddle.setInteractive({ draggable: true });
this.paddle.on("drag", (pointer, dragX, dragY) => {
  this.paddle.setPosition(dragX, dragY);
  this.targetX = dragX;
});
```

Try grabbing the paddle and tugging it around — it follows the pointer freely on both axes. The next step constrains the vertical motion.
""",
    """
You should mark the paddle interactive with `draggable: true`.

```js
assert.match(code, /this\\.paddle\\.setInteractive\\(\\s*\\{\\s*draggable:\\s*true\\s*\\}\\s*\\)/);
```

You should attach a `drag` handler to the paddle that calls `setPosition(dragX, dragY)` and sets `this.targetX = dragX`.

```js
assert.match(code, /this\\.paddle\\.on\\(\\s*[\"']drag[\"'][\\s\\S]*?\\(pointer,\\s*dragX,\\s*dragY\\)[\\s\\S]*?this\\.paddle\\.setPosition\\(\\s*dragX\\s*,\\s*dragY\\s*\\)[\\s\\S]*?this\\.targetX\\s*=\\s*dragX/);
```
""",
    step12_seed,
)


# Step 13 — wrap the previous drag handler so the learner edits it.
def step13_seed(prev):
    old = (
        "    this.paddle.on(\"drag\", (pointer, dragX, dragY) => {\n"
        "      this.paddle.setPosition(dragX, dragY);\n"
        "      this.targetX = dragX;\n"
        "    });\n"
    )
    new = "--fcc-editable-region--\n" + old + "--fcc-editable-region--\n"
    return prev.replace(old, new, 1)


step(
    13, "step-13",
    """
The paddle should ride a horizontal track, not float freely. Replace the drag handler so it pins `paddle.y` to `580` and only updates `targetX`:

```js
this.paddle.on("drag", (pointer, dragX) => {
  this.paddle.y = 580;
  this.targetX = dragX;
});
```

Two things changed: the callback drops the `dragY` parameter (we don't use it), and the body snaps `paddle.y` back to its lane. The lerp in `update` still drives the paddle's `x`, so motion stays smooth.
""",
    """
The drag handler should pin `this.paddle.y` to `580`.

```js
assert.match(code, /this\\.paddle\\.on\\(\\s*[\"']drag[\"'][\\s\\S]*?this\\.paddle\\.y\\s*=\\s*580/);
```

The drag handler should still set `this.targetX = dragX`.

```js
assert.match(code, /this\\.paddle\\.on\\(\\s*[\"']drag[\"'][\\s\\S]*?this\\.targetX\\s*=\\s*dragX/);
```

The drag handler should no longer call `setPosition` — only `y` and `targetX` change.

```js
assert.notMatch(code, /this\\.paddle\\.on\\(\\s*[\"']drag[\"'][\\s\\S]*?setPosition\\(/);
```
""",
    step13_seed,
)


# Step 14 — wrap previous pointer listeners so the learner gates them and adds the thumb zone.
def step14_seed(prev):
    old = (
        "    this.input.on(\"pointermove\", pointer => {\n"
        "      this.targetX = pointer.x;\n"
        "    });\n"
        "    this.input.on(\"pointerdown\", pointer => {\n"
        "      this.targetX = pointer.x;\n"
        "    });\n"
    )
    new = "--fcc-editable-region--\n" + old + "--fcc-editable-region--\n"
    return prev.replace(old, new, 1)


step(
    14, "step-14",
    """
On a phone, your thumbs rest near the bottom of the screen. Constrain pointer steering so only touches in that bottom strip move the paddle, leaving the rest of the screen free for HUD interaction.

Modify both the `pointermove` and `pointerdown` listeners to gate on `pointer.y > 540`. Then add a faint visual hint right below the listeners:

```js
this.thumbZone = this.add.rectangle(240, 600, 480, 80, 0xffffff, 0.04);
```

The 0.04 alpha keeps the rectangle barely visible — enough to suggest the touch zone without dominating the screen.
""",
    """
The `pointermove` listener should only update `this.targetX` when `pointer.y > 540`.

```js
assert.match(code, /this\\.input\\.on\\(\\s*[\"']pointermove[\"'][\\s\\S]*?if\\s*\\(\\s*pointer\\.y\\s*>\\s*540\\s*\\)\\s*this\\.targetX\\s*=\\s*pointer\\.x/);
```

The `pointerdown` listener should also gate on `pointer.y > 540`.

```js
assert.match(code, /this\\.input\\.on\\(\\s*[\"']pointerdown[\"'][\\s\\S]*?if\\s*\\(\\s*pointer\\.y\\s*>\\s*540\\s*\\)\\s*this\\.targetX\\s*=\\s*pointer\\.x/);
```

You should add `this.thumbZone` as a faint translucent rectangle at `(240, 600)` sized `480` by `80`.

```js
assert.match(code, /this\\.thumbZone\\s*=\\s*this\\.add\\.rectangle\\(\\s*240\\s*,\\s*600\\s*,\\s*480\\s*,\\s*80\\s*,\\s*0xffffff\\s*,\\s*0\\.04\\s*\\)/);
```
""",
    step14_seed,
)


# Step 15 — append left/right virtual button visuals after drag handler.
def step15_seed(prev):
    needle = (
        "    this.paddle.on(\"drag\", (pointer, dragX) => {\n"
        "      this.paddle.y = 580;\n"
        "      this.targetX = dragX;\n"
        "    });\n"
    )
    return prev.replace(
        needle,
        needle + "--fcc-editable-region--\n\n--fcc-editable-region--\n",
        1,
    )


step(
    15, "step-15",
    """
Mobile players who don't want to drag still need a way to steer. Below the drag handler, add a pair of on-screen buttons:

```js
this.leftBtn = this.add.rectangle(40, 320, 60, 60, 0x556677);
this.leftBtn.setInteractive();
this.rightBtn = this.add.rectangle(440, 320, 60, 60, 0x556677);
this.rightBtn.setInteractive();
```

Each button is a `60` by `60` square at the left and right edges. `setInteractive()` flips on Phaser's hit testing so the button can later receive `pointerdown` events.
""",
    """
You should add `this.leftBtn` as a `60` by `60` rectangle at `(40, 320)` with color `0x556677` and call `setInteractive` on it.

```js
assert.match(code, /this\\.leftBtn\\s*=\\s*this\\.add\\.rectangle\\(\\s*40\\s*,\\s*320\\s*,\\s*60\\s*,\\s*60\\s*,\\s*0x556677/);
assert.match(code, /this\\.leftBtn\\.setInteractive\\(\\s*\\)/);
```

You should add `this.rightBtn` as a `60` by `60` rectangle at `(440, 320)` and call `setInteractive` on it.

```js
assert.match(code, /this\\.rightBtn\\s*=\\s*this\\.add\\.rectangle\\(\\s*440\\s*,\\s*320\\s*,\\s*60\\s*,\\s*60\\s*,\\s*0x556677/);
assert.match(code, /this\\.rightBtn\\.setInteractive\\(\\s*\\)/);
```
""",
    step15_seed,
)


# Step 16 — append basic button handlers after the visuals block.
def step16_seed(prev):
    needle = (
        "    this.leftBtn = this.add.rectangle(40, 320, 60, 60, 0x556677);\n"
        "    this.leftBtn.setInteractive();\n"
        "    this.rightBtn = this.add.rectangle(440, 320, 60, 60, 0x556677);\n"
        "    this.rightBtn.setInteractive();\n"
    )
    return prev.replace(
        needle,
        needle + "--fcc-editable-region--\n\n--fcc-editable-region--\n",
        1,
    )


step(
    16, "step-16",
    """
Wire the buttons to the same `targetX` channel as the keyboard. After the button visuals, register `pointerdown` handlers on each:

```js
this.leftBtn.on("pointerdown", () => {
  this.targetX -= 60;
});
this.rightBtn.on("pointerdown", () => {
  this.targetX += 60;
});
```

A button tap shifts the target by `60` pixels — about three quarters of the paddle width — so the move feels deliberate. The lerp in `update` glides the paddle smoothly from one stop to the next.
""",
    """
You should attach a `pointerdown` handler to `this.leftBtn` that subtracts `60` from `this.targetX`.

```js
assert.match(code, /this\\.leftBtn\\.on\\(\\s*[\"']pointerdown[\"'][\\s\\S]*?this\\.targetX\\s*-=\\s*60/);
```

You should attach a `pointerdown` handler to `this.rightBtn` that adds `60` to `this.targetX`.

```js
assert.match(code, /this\\.rightBtn\\.on\\(\\s*[\"']pointerdown[\"'][\\s\\S]*?this\\.targetX\\s*\\+=\\s*60/);
```
""",
    step16_seed,
)


# Step 17 — append mobile detection + visibility block after handlers.
def step17_seed(prev):
    needle = (
        "    this.leftBtn.on(\"pointerdown\", () => {\n"
        "      this.targetX -= 60;\n"
        "    });\n"
        "    this.rightBtn.on(\"pointerdown\", () => {\n"
        "      this.targetX += 60;\n"
        "    });\n"
    )
    return prev.replace(
        needle,
        needle + "--fcc-editable-region--\n\n--fcc-editable-region--\n",
        1,
    )


step(
    17, "step-17",
    """
On desktop, the virtual buttons clutter the canvas. Detect mobile and hide the buttons unless the user is on Android or iOS:

```js
this.isMobile = Phaser.Device.os.android || Phaser.Device.os.iOS;
this.leftBtn.setVisible(this.isMobile);
this.rightBtn.setVisible(this.isMobile);
```

`Phaser.Device.os` exposes the runtime's best guess at what platform you're on. The two flags here cover the dominant touch platforms; `desktop` and others will get `false`, hiding the buttons.
""",
    """
You should detect mobile via `Phaser.Device.os.android || Phaser.Device.os.iOS` and store the result on `this.isMobile`.

```js
assert.match(code, /this\\.isMobile\\s*=\\s*Phaser\\.Device\\.os\\.android\\s*\\|\\|\\s*Phaser\\.Device\\.os\\.iOS/);
```

You should call `this.leftBtn.setVisible(this.isMobile)` and `this.rightBtn.setVisible(this.isMobile)`.

```js
assert.match(code, /this\\.leftBtn\\.setVisible\\(\\s*this\\.isMobile\\s*\\)/);
assert.match(code, /this\\.rightBtn\\.setVisible\\(\\s*this\\.isMobile\\s*\\)/);
```
""",
    step17_seed,
)


# Step 18 — append swipe block after the mobile visibility block.
def step18_seed(prev):
    needle = (
        "    this.leftBtn.setVisible(this.isMobile);\n"
        "    this.rightBtn.setVisible(this.isMobile);\n"
    )
    return prev.replace(
        needle,
        needle + "--fcc-editable-region--\n\n--fcc-editable-region--\n",
        1,
    )


step(
    18, "step-18",
    """
Now add a swipe gesture so a quick horizontal flick dashes the paddle to that side. Below the mobile visibility block, capture the start of every press and measure the release:

```js
this.swipeStart = null;
this.input.on("pointerdown", pointer => {
  this.swipeStart = { x: pointer.x, t: this.time.now };
});
this.input.on("pointerup", pointer => {
  if (!this.swipeStart) return;
  const dx = pointer.x - this.swipeStart.x;
  const dt = this.time.now - this.swipeStart.t;
  if (Math.abs(dx) > 80 && dt < 250) {
    this.targetX = dx > 0 ? 440 : 40;
  }
  this.swipeStart = null;
});
```

Phaser dispatches multiple listeners for the same event, so this `pointerdown` listener coexists with the thumb-zone listener you added earlier — they both run.
""",
    """
You should initialize `this.swipeStart` to `null`.

```js
assert.match(code, /this\\.swipeStart\\s*=\\s*null/);
```

You should record the swipe origin on `pointerdown` with both `x` and a timestamp from `this.time.now`.

```js
assert.match(code, /this\\.input\\.on\\(\\s*[\"']pointerdown[\"'][\\s\\S]*?this\\.swipeStart\\s*=\\s*\\{\\s*x:\\s*pointer\\.x\\s*,\\s*t:\\s*this\\.time\\.now\\s*\\}/);
```

You should detect a swipe on `pointerup` using a distance threshold of `80` and a time threshold of `250`.

```js
assert.match(code, /this\\.input\\.on\\(\\s*[\"']pointerup[\"'][\\s\\S]*?Math\\.abs\\(\\s*dx\\s*\\)\\s*>\\s*80\\s*&&\\s*dt\\s*<\\s*250/);
```

A right-going swipe should set `this.targetX` to `440`; a left-going swipe to `40`.

```js
assert.match(code, /this\\.targetX\\s*=\\s*dx\\s*>\\s*0\\s*\\?\\s*440\\s*:\\s*40/);
```
""",
    step18_seed,
)


# Step 19 — wrap previous basic button handlers so the learner adds the debounce.
def step19_seed(prev):
    old = (
        "    this.leftBtn.on(\"pointerdown\", () => {\n"
        "      this.targetX -= 60;\n"
        "    });\n"
        "    this.rightBtn.on(\"pointerdown\", () => {\n"
        "      this.targetX += 60;\n"
        "    });\n"
    )
    new = "--fcc-editable-region--\n" + old + "--fcc-editable-region--\n"
    return prev.replace(old, new, 1)


step(
    19, "step-19",
    """
A frantic finger can mash a button several times in one frame, and on some devices `pointerdown` fires twice for one tap. Add a 100 ms debounce shared between both buttons so back-to-back triggers within that window are dropped:

```js
this.lastButtonAt = 0;
this.leftBtn.on("pointerdown", () => {
  if (this.time.now - this.lastButtonAt < 100) return;
  this.lastButtonAt = this.time.now;
  this.targetX -= 60;
});
this.rightBtn.on("pointerdown", () => {
  if (this.time.now - this.lastButtonAt < 100) return;
  this.lastButtonAt = this.time.now;
  this.targetX += 60;
});
```

The same `lastButtonAt` is shared between both buttons — pressing left then right in quick succession is also rate-limited, which feels more deliberate.
""",
    """
You should declare `this.lastButtonAt = 0` before the button handlers.

```js
assert.match(code, /this\\.lastButtonAt\\s*=\\s*0/);
```

The left-button handler should early-return if `this.time.now - this.lastButtonAt < 100`.

```js
assert.match(code, /this\\.leftBtn\\.on\\(\\s*[\"']pointerdown[\"'][\\s\\S]*?if\\s*\\(\\s*this\\.time\\.now\\s*-\\s*this\\.lastButtonAt\\s*<\\s*100\\s*\\)\\s*return/);
```

The right-button handler should also early-return on the same debounce window.

```js
assert.match(code, /this\\.rightBtn\\.on\\(\\s*[\"']pointerdown[\"'][\\s\\S]*?if\\s*\\(\\s*this\\.time\\.now\\s*-\\s*this\\.lastButtonAt\\s*<\\s*100\\s*\\)\\s*return/);
```

Both handlers should update `this.lastButtonAt` to `this.time.now` before mutating `this.targetX`.

```js
assert.match(code, /this\\.lastButtonAt\\s*=\\s*this\\.time\\.now[\\s\\S]*?this\\.targetX\\s*-=\\s*60/);
assert.match(code, /this\\.lastButtonAt\\s*=\\s*this\\.time\\.now[\\s\\S]*?this\\.targetX\\s*\\+=\\s*60/);
```
""",
    step19_seed,
)


# Step 20 — append falling rectangle block after swipe block.
def step20_seed(prev):
    needle = (
        "    this.input.on(\"pointerup\", pointer => {\n"
        "      if (!this.swipeStart) return;\n"
        "      const dx = pointer.x - this.swipeStart.x;\n"
        "      const dt = this.time.now - this.swipeStart.t;\n"
        "      if (Math.abs(dx) > 80 && dt < 250) {\n"
        "        this.targetX = dx > 0 ? 440 : 40;\n"
        "      }\n"
        "      this.swipeStart = null;\n"
        "    });\n"
    )
    return prev.replace(
        needle,
        needle + "--fcc-editable-region--\n\n--fcc-editable-region--\n",
        1,
    )


step(
    20, "step-20",
    """
The paddle has nothing to do yet. Spawn a falling target the player must catch:

```js
this.falling = this.add.rectangle(
  Phaser.Math.Between(40, 440),
  0,
  16,
  16,
  0xffaa44
);
this.physics.add.existing(this.falling);
this.falling.body.setVelocityY(120);
```

`Phaser.Math.Between(min, max)` returns a random integer in the inclusive range — perfect for picking a spawn x. The body's `setVelocityY(120)` makes the rectangle drift down at 120 px/s; arcade physics handles the per-frame motion for you.
""",
    """
You should spawn `this.falling` as a `16` by `16` rectangle at a random x in `[40, 440]`, y `0`, color `0xffaa44`.

```js
assert.match(code, /this\\.falling\\s*=\\s*this\\.add\\.rectangle\\(\\s*Phaser\\.Math\\.Between\\(\\s*40\\s*,\\s*440\\s*\\)\\s*,\\s*0\\s*,\\s*16\\s*,\\s*16\\s*,\\s*0xffaa44/);
```

You should give it an arcade physics body and a downward velocity of `120`.

```js
assert.match(code, /this\\.physics\\.add\\.existing\\(\\s*this\\.falling\\s*\\)/);
assert.match(code, /this\\.falling\\.body\\.setVelocityY\\(\\s*120\\s*\\)/);
```
""",
    step20_seed,
)


# Step 21 — add empty onCatch method to the class (after update closes).
def step21_seed(prev):
    old = "    this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);\n  }\n}\n"
    new = (
        "    this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);\n"
        "  }\n"
        "\n"
        "--fcc-editable-region--\n\n--fcc-editable-region--\n"
        "}\n"
    )
    return prev.replace(old, new, 1)


step(
    21, "step-21",
    """
Define an empty handler the physics overlap will eventually call. Below `update`, declare:

```js
onCatch(paddle, falling) {
}
```

It does nothing for now — but having the method on the class lets the next step pass `this.onCatch` into a `physics.add.overlap` call without a `ReferenceError`.
""",
    """
You should declare an `onCatch(paddle, falling)` method on the class.

```js
assert.match(code, /onCatch\\s*\\(\\s*paddle\\s*,\\s*falling\\s*\\)\\s*\\{/);
```
""",
    step21_seed,
)


# Step 22 — append overlap + score init + scoreText after the falling block.
def step22_seed(prev):
    needle = (
        "    this.falling = this.add.rectangle(\n"
        "      Phaser.Math.Between(40, 440),\n"
        "      0,\n"
        "      16,\n"
        "      16,\n"
        "      0xffaa44\n"
        "    );\n"
        "    this.physics.add.existing(this.falling);\n"
        "    this.falling.body.setVelocityY(120);\n"
    )
    return prev.replace(
        needle,
        needle + "--fcc-editable-region--\n\n--fcc-editable-region--\n",
        1,
    )


step(
    22, "step-22",
    """
Wire the overlap and the score HUD. Right after the falling rectangle block, add:

```js
this.physics.add.overlap(
  this.paddle,
  this.falling,
  this.onCatch,
  null,
  this
);
this.score = 0;
this.scoreText = this.add.text(10, 10, "Score: 0", {
  fontSize: "20px",
  fill: "#ffffff"
});
this.scoreText.setScrollFactor(0);
```

The overlap's fifth argument (`this`) sets the scope `onCatch` runs with, so inside the method `this.score` and `this.scoreText` resolve correctly.

`setScrollFactor(0)` locks the score text to camera coordinates — it stays at the top-left no matter how the world scrolls (relevant once you reach the camera chapter).
""",
    """
You should call `this.physics.add.overlap` with `this.paddle`, `this.falling`, `this.onCatch`, `null`, and `this`.

```js
assert.match(code, /this\\.physics\\.add\\.overlap\\(\\s*this\\.paddle\\s*,\\s*this\\.falling\\s*,\\s*this\\.onCatch\\s*,\\s*null\\s*,\\s*this\\s*\\)/);
```

You should initialize `this.score = 0` and create `this.scoreText` reading `Score: 0`.

```js
assert.match(code, /this\\.score\\s*=\\s*0/);
assert.match(code, /this\\.scoreText\\s*=\\s*this\\.add\\.text\\(\\s*10\\s*,\\s*10\\s*,\\s*[\"']Score:\\s*0[\"']/);
```

You should call `this.scoreText.setScrollFactor(0)`.

```js
assert.match(code, /this\\.scoreText\\.setScrollFactor\\(\\s*0\\s*\\)/);
```
""",
    step22_seed,
)


# Step 23 — wrap previous empty onCatch so the learner fills the body.
def step23_seed(prev):
    old = (
        "  onCatch(paddle, falling) {\n"
        "  }\n"
    )
    new = "--fcc-editable-region--\n" + old + "--fcc-editable-region--\n"
    return prev.replace(old, new, 1)


step(
    23, "step-23",
    """
Fill in `onCatch` so the catch is satisfying. Inside the method body, pulse the paddle with a tween and bump the score:

```js
this.tweens.add({
  targets: paddle,
  scaleX: 1.4,
  scaleY: 1.4,
  duration: 100,
  yoyo: true
});
this.score += 1;
this.scoreText.setText("Score: " + this.score);
```

`yoyo: true` runs the tween forward and then back, so the paddle expands and snaps back over 200 ms total. The HUD updates to reflect the new score.
""",
    """
The `onCatch` method should add a tween targeting `paddle` that scales it to `1.4` over `100` ms with `yoyo: true`.

```js
assert.match(code, /onCatch\\s*\\(\\s*paddle\\s*,\\s*falling\\s*\\)[\\s\\S]*?this\\.tweens\\.add\\(\\s*\\{[\\s\\S]*?targets:\\s*paddle[\\s\\S]*?scaleX:\\s*1\\.4[\\s\\S]*?scaleY:\\s*1\\.4[\\s\\S]*?duration:\\s*100[\\s\\S]*?yoyo:\\s*true/);
```

The method should increment `this.score` and update `this.scoreText`.

```js
assert.match(code, /onCatch\\s*\\([\\s\\S]*?this\\.score\\s*\\+=\\s*1[\\s\\S]*?this\\.scoreText\\.setText\\(\\s*[\"']Score:\\s*[\"']\\s*\\+\\s*this\\.score/);
```
""",
    step23_seed,
)


# Step 24 — wrap previous onCatch (tween + score) so the learner adds the reset+ramp.
def step24_seed(prev):
    old = (
        "  onCatch(paddle, falling) {\n"
        "    this.tweens.add({\n"
        "      targets: paddle,\n"
        "      scaleX: 1.4,\n"
        "      scaleY: 1.4,\n"
        "      duration: 100,\n"
        "      yoyo: true\n"
        "    });\n"
        "    this.score += 1;\n"
        "    this.scoreText.setText(\"Score: \" + this.score);\n"
        "  }\n"
    )
    new = "--fcc-editable-region--\n" + old + "--fcc-editable-region--\n"
    return prev.replace(old, new, 1)


step(
    24, "step-24",
    """
After every catch, recycle the falling target and ramp the difficulty. Append three lines to the end of `onCatch`:

```js
falling.y = 0;
falling.x = Phaser.Math.Between(40, 440);
falling.body.setVelocityY(120 + this.score * 10);
```

The target snaps back to the top with a fresh random x, then falls at `120 + score * 10` px/s — so by the tenth catch it's already 100 px/s faster.
""",
    """
The `onCatch` method should reset `falling.y` to `0` and `falling.x` to a fresh `Phaser.Math.Between(40, 440)`.

```js
assert.match(code, /onCatch\\s*\\([\\s\\S]*?falling\\.y\\s*=\\s*0[\\s\\S]*?falling\\.x\\s*=\\s*Phaser\\.Math\\.Between\\(\\s*40\\s*,\\s*440\\s*\\)/);
```

You should ramp the falling speed via `falling.body.setVelocityY(120 + this.score * 10)`.

```js
assert.match(code, /falling\\.body\\.setVelocityY\\(\\s*120\\s*\\+\\s*this\\.score\\s*\\*\\s*10\\s*\\)/);
```
""",
    step24_seed,
)


# Step 25 — wrap end-of-create through end-of-update so the learner adds the gameOver state.
def step25_seed(prev):
    old = (
        "    this.scoreText.setScrollFactor(0);\n"
        "  }\n"
        "\n"
        "  update() {\n"
        "    if (this.cursors.left.isDown) this.targetX -= 4;\n"
        "    else if (this.cursors.right.isDown) this.targetX += 4;\n"
        "    this.targetX = Phaser.Math.Clamp(this.targetX, 40, 440);\n"
        "    this.paddle.x = Phaser.Math.Linear(this.paddle.x, this.targetX, 0.2);\n"
        "    this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);\n"
        "  }\n"
    )
    new = "--fcc-editable-region--\n" + old + "--fcc-editable-region--\n"
    return prev.replace(old, new, 1)


step(
    25, "step-25",
    """
Final polish: add a game-over state. Initialize a flag at the end of `create`: `this.gameOver = false;`. Then, at the top of `update`, early-return when the game is over: `if (this.gameOver) return;`.

Just before `update` ends, check whether the falling target has dropped past the bottom of the canvas:

```js
if (this.falling.y > 640) {
  this.gameOver = true;
  this.helpText.setText("GAME OVER \\u00b7 refresh to restart");
}
```

Now play. Use the keyboard, drag the paddle, swipe left or right, or tap the left/right buttons. Catch as many falling targets as you can; miss one and the help text becomes a sober "GAME OVER · refresh to restart."

Congratulations — you've shipped a multi-input paddle prototype that runs identically on desktop and mobile. The brick-breaker workshop in the next sprint builds the full game on top of this foundation.
""",
    """
You should set `this.gameOver = false` at the end of `create`.

```js
assert.match(code, /this\\.gameOver\\s*=\\s*false/);
```

`update` should early-return when `this.gameOver` is true.

```js
assert.match(code, /update\\s*\\(\\s*\\)\\s*\\{\\s*if\\s*\\(\\s*this\\.gameOver\\s*\\)\\s*return/);
```

`update` should detect a miss when `this.falling.y > 640`, set `this.gameOver = true`, and update `this.helpText` with `GAME OVER`.

```js
assert.match(code, /if\\s*\\(\\s*this\\.falling\\.y\\s*>\\s*640\\s*\\)[\\s\\S]*?this\\.gameOver\\s*=\\s*true[\\s\\S]*?this\\.helpText\\.setText\\(\\s*[\"']GAME\\s+OVER/);
```
""",
    step25_seed,
)


# ---------------------------------------------------------------------------
# Render the .md files.
# ---------------------------------------------------------------------------


def render_md(num: int, dashed: str, description: str, hints: str, seed_js: str, *, demo: bool, solution: str | None) -> str:
    out = []
    out.append("---")
    out.append(f"id: {HEX_BASE.format(ID_OFFSET + num)}")
    out.append(f"title: Step {num}")
    out.append("challengeType: 0")
    out.append(f"dashedName: {dashed}")
    if demo:
        out.append("demoType: onLoad")
    out.append("---")
    out.append("")
    out.append("# --description--")
    out.append("")
    out.append(description.strip())
    out.append("")
    out.append("# --hints--")
    out.append("")
    out.append(hints.strip())
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
    out.append(seed_js.rstrip("\n"))
    out.append("```")
    if solution is not None:
        out.append("")
        out.append("# --solutions--")
        out.append("")
        out.append(HTML.rstrip())
        out.append("")
        out.append(CSS.rstrip())
        out.append("")
        out.append("```js")
        out.append(solution.rstrip("\n"))
        out.append("```")
    out.append("")
    return "\n".join(out)


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for spec in STEPS:
        n = spec["num"]
        prev = SOLUTIONS[n - 1]() if n > 1 else ""
        seed_js = spec["seed"](prev)
        markers = seed_js.count("--fcc-editable-region--")
        if markers != 2:
            raise SystemExit(f"step {n} has {markers} markers, expected 2")
        solution_js = SOLUTIONS[n]() if n == 25 else None
        body = render_md(
            n,
            spec["dashed"],
            spec["description"],
            spec["hints"],
            seed_js,
            demo=spec["demo"],
            solution=solution_js,
        )
        path = OUT_DIR / (HEX_BASE.format(ID_OFFSET + n) + ".md")
        path.write_text(body, encoding="utf-8")
        print(f"wrote {path.name}")


if __name__ == "__main__":
    main()
