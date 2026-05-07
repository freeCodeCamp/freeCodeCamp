"""Generate workshop-mobile-first-brick-breaker step .md files (steps 1..50).

Each step wraps exactly one editable region (two `--fcc-editable-region--`
markers) around the focused diff against the previous step's solution. The
canonical solutions live in ``BUILD`` (a state-machine builder) so the step
strings stay diffable and the script stays readable.
"""

from copy import deepcopy
from pathlib import Path
from textwrap import dedent

OUT_DIR = (
    Path(__file__).resolve().parents[2]
    / "curriculum/challenges/english/blocks/workshop-mobile-first-brick-breaker"
)
HEX_BASE = "66faa30000000000000000{:02x}"
ID_OFFSET = 0xC5  # step 1 -> 0xc6, step 50 -> 0xf7

HTML = """\
```html

<!DOCTYPE html>
<html lang=\"en\">
  <head>
    <meta charset=\"UTF-8\" />
    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />
    <title>Mobile-First Brick Breaker with Phaser</title>
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

# ---------------------------------------------------------------------------
# State machine: each step mutates a State; render(State) -> full script.js.
# ---------------------------------------------------------------------------


class State:
    def __init__(self):
        self.top_consts = []  # list of decl strings (each ends with \n\n outside)
        self.extra_classes_pre = []  # full class strings
        self.extra_classes_post = []
        self.main_init_body = ""  # multi-line, each line already indented 4 spaces
        self.main_create_body = ""
        self.main_update_body = ""
        self.main_methods = []  # list of method strings (each indented 2 spaces, no leading \n)
        self.scene_array = ["MainScene"]

    def clone(self):
        new = State()
        new.top_consts = list(self.top_consts)
        new.extra_classes_pre = list(self.extra_classes_pre)
        new.extra_classes_post = list(self.extra_classes_post)
        new.main_init_body = self.main_init_body
        new.main_create_body = self.main_create_body
        new.main_update_body = self.main_update_body
        new.main_methods = list(self.main_methods)
        new.scene_array = list(self.scene_array)
        return new


def render(state: State) -> str:
    out = []
    for c in state.top_consts:
        out.append(c)
        out.append("\n\n")
    for cls in state.extra_classes_pre:
        out.append(cls)
        out.append("\n\n")
    out.append("class MainScene extends Phaser.Scene {\n")
    out.append('  constructor() {\n    super("MainScene");\n  }\n')
    if state.main_init_body:
        out.append("\n  init(data) {\n")
        out.append(state.main_init_body)
        out.append("  }\n")
    out.append("\n  create() {\n")
    out.append(state.main_create_body)
    out.append("  }\n")
    out.append("\n  update() {\n")
    out.append(state.main_update_body)
    out.append("  }\n")
    for m in state.main_methods:
        out.append("\n")
        out.append(m)
    out.append("}\n")
    for cls in state.extra_classes_post:
        out.append("\n")
        out.append(cls)
        out.append("\n")
    out.append("\nconst config = {\n")
    out.append("  type: Phaser.AUTO,\n")
    out.append("  width: 480,\n")
    out.append("  height: 640,\n")
    out.append('  parent: "game-container",\n')
    out.append('  backgroundColor: "#111122",\n')
    out.append("  physics: {\n")
    out.append('    default: "arcade",\n')
    out.append("    arcade: { gravity: { y: 0 } }\n")
    out.append("  },\n")
    out.append("  scene: [" + ", ".join(state.scene_array) + "]\n")
    out.append("};\n\n")
    out.append("const game = new Phaser.Game(config);")
    return "".join(out)


# ---------------------------------------------------------------------------
# Const & class fragment library.
# ---------------------------------------------------------------------------

ACTIONS_CONST = """\
const ACTIONS = {
  left: ["LEFT", "A"],
  right: ["RIGHT", "D"],
  launch: ["SPACE"],
  pause: ["P"]
};"""

LEVELS_CONST = """\
const LEVELS = [
  [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ],
  [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
  ],
  [
    [9, 1, 1, 1, 1, 1, 1, 1, 1, 9],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [9, 1, 1, 1, 1, 1, 1, 1, 1, 9]
  ],
  [
    [3, 3, 2, 2, 1, 1, 2, 2, 3, 3],
    [9, 1, 1, 1, 1, 1, 1, 1, 1, 9],
    [1, 1, 1, 9, 9, 9, 9, 1, 1, 1]
  ],
  [
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [9, 2, 2, 2, 2, 2, 2, 2, 2, 9],
    [9, 1, 1, 9, 9, 9, 9, 1, 1, 9]
  ]
];"""

COLORS_CONST = """\
const COLORS = [0x666666, 0x44aaff, 0x44ee88, 0xffee44, 0xffaa44, 0xff6644];"""

SAVE_KEY_CONST = """\
const SAVE_KEY = "phaser-bb-high-score";"""

GAME_OVER_SCENE = """\
class GameOverScene extends Phaser.Scene {
  constructor() {
    super("GameOverScene");
  }

  create(data) {
    this.add.rectangle(240, 320, 480, 640, 0x000000, 0.85);
    this.add
      .text(240, 240, data.win ? "YOU WIN" : "GAME OVER", {
        fontSize: "32px",
        color: data.win ? "#44ee88" : "#ff6644"
      })
      .setOrigin(0.5);
    this.add
      .text(240, 300, "Score: " + data.score, {
        fontSize: "20px",
        color: "#ffffff"
      })
      .setOrigin(0.5);
    const high = parseInt(localStorage.getItem(SAVE_KEY) || "0", 10);
    this.add
      .text(240, 340, "High: " + high, {
        fontSize: "16px",
        color: "#aaaaaa"
      })
      .setOrigin(0.5);
    this.add
      .text(240, 420, "Press R to restart", {
        fontSize: "14px",
        color: "#ffee44"
      })
      .setOrigin(0.5);
    this.input.keyboard.once("keydown-R", () => {
      this.scene.start("MainScene", { level: 1, score: 0, lives: 3 });
    });
  }
}"""

CONTROLS_SCENE = """\
class ControlsScene extends Phaser.Scene {
  constructor() {
    super("ControlsScene");
  }

  create() {
    const isMobile = Phaser.Device.os.android || Phaser.Device.os.iOS;
    if (!isMobile) return;

    let leftHeld = false;
    let rightHeld = false;

    const leftBtn = this.add
      .rectangle(60, 600, 80, 60, 0x556677, 0.5)
      .setInteractive();
    leftBtn.on("pointerdown", () => {
      leftHeld = true;
    });
    leftBtn.on("pointerup", () => {
      leftHeld = false;
    });
    leftBtn.on("pointerout", () => {
      leftHeld = false;
    });

    const rightBtn = this.add
      .rectangle(420, 600, 80, 60, 0x556677, 0.5)
      .setInteractive();
    rightBtn.on("pointerdown", () => {
      rightHeld = true;
    });
    rightBtn.on("pointerup", () => {
      rightHeld = false;
    });
    rightBtn.on("pointerout", () => {
      rightHeld = false;
    });

    const pauseBtn = this.add
      .rectangle(240, 600, 60, 40, 0x556677, 0.5)
      .setInteractive();
    pauseBtn.on("pointerdown", () => {
      this.scene.get("MainScene").events.emit("action:pause");
    });

    this.events.on("update", () => {
      const main = this.scene.get("MainScene").events;
      if (leftHeld) main.emit("action:left");
      if (rightHeld) main.emit("action:right");
    });
  }
}"""


# ---------------------------------------------------------------------------
# Build solutions s1..s50 by mutating state at each step.
# ---------------------------------------------------------------------------

solutions = [None]  # solutions[n] = full script.js after step n

state = State()


def snap():
    solutions.append(render(state))


# Step 1 - empty MainScene shell.
snap()  # solutions[1]

# Step 2 - bg in create.
state.main_create_body += "    this.bg = this.add.rectangle(240, 320, 480, 640, 0x111122);\n"
snap()  # solutions[2]

# Step 3 - paddle rect + physics body + immovable.
state.main_create_body += (
    "    this.paddle = this.add.rectangle(240, 580, 80, 16, 0xeeeeee);\n"
    "    this.physics.add.existing(this.paddle);\n"
    "    this.paddle.body.setImmovable(true);\n"
)
snap()  # solutions[3]

# Step 4 - cursors + addKeys.
state.main_create_body += (
    "    this.cursors = this.input.keyboard.createCursorKeys();\n"
    '    this.keys = this.input.keyboard.addKeys("A,D,SPACE,P");\n'
)
snap()  # solutions[4]

# Step 5 - ACTIONS const at top.
state.top_consts.append(ACTIONS_CONST)
snap()  # solutions[5]

# Step 6 - isDown method.
ISDOWN_METHOD = """\
  isDown(action) {
    return ACTIONS[action].some(name => {
      const k = this.keys[name] || this.cursors[name.toLowerCase()];
      return k && k.isDown;
    });
  }
"""
state.main_methods.append(ISDOWN_METHOD)
snap()  # solutions[6]

# Step 7 - update body uses isDown for arrow/WASD movement.
state.main_update_body = (
    '    if (this.isDown("left")) this.paddle.x -= 4;\n'
    '    else if (this.isDown("right")) this.paddle.x += 4;\n'
)
snap()  # solutions[7]

# Step 8 - clamp paddle.x in update.
state.main_update_body = (
    '    if (this.isDown("left")) this.paddle.x -= 4;\n'
    '    else if (this.isDown("right")) this.paddle.x += 4;\n'
    "    this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);\n"
)
snap()  # solutions[8]

# Step 9 - targetX init + pointermove gated to thumb zone.
state.main_create_body += (
    "    this.targetX = this.paddle.x;\n"
    '    this.input.on("pointermove", pointer => {\n'
    "      if (pointer.y > 540) this.targetX = pointer.x;\n"
    "    });\n"
)
snap()  # solutions[9]

# Step 10 - update refactored to drive targetX, then lerp paddle.x.
state.main_update_body = (
    '    if (this.isDown("left")) this.targetX -= 6;\n'
    '    else if (this.isDown("right")) this.targetX += 6;\n'
    "    this.targetX = Phaser.Math.Clamp(this.targetX, 40, 440);\n"
    "    this.paddle.x = Phaser.Math.Linear(this.paddle.x, this.targetX, 0.3);\n"
    "    this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);\n"
)
snap()  # solutions[10]

# Step 11 - pointerdown listener (also gated).
state.main_create_body += (
    '    this.input.on("pointerdown", pointer => {\n'
    "      if (pointer.y > 540) this.targetX = pointer.x;\n"
    "    });\n"
)
snap()  # solutions[11]

# Step 12 - ball circle + physics.
state.main_create_body += (
    "    this.ball = this.add.circle(240, 540, 8, 0xffaa44);\n"
    "    this.physics.add.existing(this.ball);\n"
)
snap()  # solutions[12]

# Step 13 - ball setBounce.
state.main_create_body += "    this.ball.body.setBounce(1, 1);\n"
snap()  # solutions[13]

# Step 14 - ball setCollideWorldBounds.
state.main_create_body += "    this.ball.body.setCollideWorldBounds(true);\n"
snap()  # solutions[14]

# Step 15 - disable bottom collision.
state.main_create_body += "    this.physics.world.checkCollision.down = false;\n"
snap()  # solutions[15]

# Step 16 - initial ball velocity.
state.main_create_body += "    this.ball.body.setVelocity(120, -260);\n"
snap()  # solutions[16]

# Step 17 - ball off-bottom check.
state.main_update_body += (
    "    if (this.ball.y > 660) {\n"
    "      this.ball.setPosition(240, 540);\n"
    "      this.ball.body.setVelocity(120, -260);\n"
    "    }\n"
)
snap()  # solutions[17]

# Step 18 - paddle-ball collider.
state.main_create_body += (
    "    this.physics.add.collider(\n"
    "      this.ball,\n"
    "      this.paddle,\n"
    "      this.onPaddleBounce,\n"
    "      null,\n"
    "      this\n"
    "    );\n"
)
snap()  # solutions[18]

# Step 19 - onPaddleBounce angle adjust.
ON_PADDLE_BOUNCE_BASIC = """\
  onPaddleBounce(ball, paddle) {
    const offset = (ball.x - paddle.x) / (paddle.width / 2);
    const speed = Math.sqrt(
      ball.body.velocity.x ** 2 + ball.body.velocity.y ** 2
    );
    const angle = -Math.PI / 2 + offset * (Math.PI / 3);
    ball.body.setVelocity(speed * Math.cos(angle), speed * Math.sin(angle));
  }
"""
state.main_methods.append(ON_PADDLE_BOUNCE_BASIC)
snap()  # solutions[19]

# Step 20 - tween squash inside onPaddleBounce.
ON_PADDLE_BOUNCE_FULL = """\
  onPaddleBounce(ball, paddle) {
    const offset = (ball.x - paddle.x) / (paddle.width / 2);
    const speed = Math.sqrt(
      ball.body.velocity.x ** 2 + ball.body.velocity.y ** 2
    );
    const angle = -Math.PI / 2 + offset * (Math.PI / 3);
    ball.body.setVelocity(speed * Math.cos(angle), speed * Math.sin(angle));
    this.tweens.add({
      targets: paddle,
      scaleX: 1.2,
      scaleY: 0.8,
      duration: 80,
      yoyo: true
    });
  }
"""
state.main_methods[-1] = ON_PADDLE_BOUNCE_FULL
snap()  # solutions[20]

# Step 21 - bricks static group + spawn call.
state.main_create_body += (
    "    this.bricks = this.physics.add.staticGroup();\n"
    "    this.spawnBricks();\n"
)
snap()  # solutions[21]

# Step 22 - spawnBricks method (simple grid).
SPAWN_BRICKS_BASIC = """\
  spawnBricks() {
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 10; col++) {
        const x = 40 + col * 40 + 20;
        const y = 80 + row * 22;
        const brick = this.add.rectangle(x, y, 36, 18, 0x44aaff);
        this.bricks.add(brick);
      }
    }
  }
"""
state.main_methods.append(SPAWN_BRICKS_BASIC)
snap()  # solutions[22]

# Step 23 - ball-bricks collider.
state.main_create_body += (
    "    this.physics.add.collider(\n"
    "      this.ball,\n"
    "      this.bricks,\n"
    "      this.onBrickHit,\n"
    "      null,\n"
    "      this\n"
    "    );\n"
)
snap()  # solutions[23]

# Step 24 - onBrickHit method (just destroy).
ON_BRICK_HIT_BASIC = """\
  onBrickHit(ball, brick) {
    brick.destroy();
  }
"""
state.main_methods.append(ON_BRICK_HIT_BASIC)
snap()  # solutions[24]

# Step 25 - score init + scoreText HUD.
state.main_create_body += (
    "    this.score = 0;\n"
    '    this.scoreText = this.add.text(10, 10, "SCORE 0", {\n'
    '      fontSize: "16px",\n'
    '      color: "#ffffff"\n'
    "    });\n"
)
snap()  # solutions[25]

# Step 26 - score increment in onBrickHit.
ON_BRICK_HIT_SCORE = """\
  onBrickHit(ball, brick) {
    brick.destroy();
    this.score += 10;
    this.scoreText.setText("SCORE " + this.score);
  }
"""
state.main_methods[-1] = ON_BRICK_HIT_SCORE
snap()  # solutions[26]

# Step 27 - lives init + livesText HUD.
state.main_create_body += (
    "    this.lives = 3;\n"
    '    this.livesText = this.add.text(10, 32, "LIVES 3", {\n'
    '      fontSize: "16px",\n'
    '      color: "#ffffff"\n'
    "    });\n"
)
snap()  # solutions[27]

# Step 28 - replace ball off-bottom block to call loseLife.
state.main_update_body = state.main_update_body.replace(
    "    if (this.ball.y > 660) {\n"
    "      this.ball.setPosition(240, 540);\n"
    "      this.ball.body.setVelocity(120, -260);\n"
    "    }\n",
    "    if (this.ball.y > 660) this.loseLife();\n",
)
snap()  # solutions[28]

# Step 29 - loseLife method (reset ball + dec lives).
LOSE_LIFE_BASIC = """\
  loseLife() {
    this.lives -= 1;
    this.livesText.setText("LIVES " + this.lives);
    this.ball.setPosition(240, 540);
    this.ball.body.setVelocity(120, -260);
  }
"""
state.main_methods.append(LOSE_LIFE_BASIC)
snap()  # solutions[29]

# Step 30 - GameOverScene class declaration (extra_classes_post).
state.extra_classes_post.append(GAME_OVER_SCENE)
snap()  # solutions[30]

# Step 31 - SAVE_KEY const at top (needed by GameOverScene).
state.top_consts.append(SAVE_KEY_CONST)
snap()  # solutions[31]

# Step 32 - register GameOverScene in config (also: gameOver method on MainScene).
state.scene_array.append("GameOverScene")
snap()  # solutions[32]

# Step 33 - gameOver method on MainScene + persistHighScore helper, called from loseLife.
PERSIST_METHOD = """\
  persistHighScore() {
    const high = parseInt(localStorage.getItem(SAVE_KEY) || "0", 10);
    if (this.score > high) localStorage.setItem(SAVE_KEY, String(this.score));
  }
"""
GAME_OVER_METHOD = """\
  gameOver() {
    this.persistHighScore();
    this.scene.start("GameOverScene", { score: this.score, win: false });
  }
"""
LOSE_LIFE_GAME_OVER = """\
  loseLife() {
    this.lives -= 1;
    this.livesText.setText("LIVES " + this.lives);
    if (this.lives <= 0) {
      this.gameOver();
      return;
    }
    this.ball.setPosition(240, 540);
    this.ball.body.setVelocity(120, -260);
  }
"""
state.main_methods.append(GAME_OVER_METHOD)
state.main_methods.append(PERSIST_METHOD)
# replace loseLife with the gameOver-aware version
for i, m in enumerate(state.main_methods):
    if m.startswith("  loseLife"):
        state.main_methods[i] = LOSE_LIFE_GAME_OVER
        break
snap()  # solutions[33]

# Step 34 - LEVELS const + COLORS const.
state.top_consts.append(LEVELS_CONST)
state.top_consts.append(COLORS_CONST)
snap()  # solutions[34]

# Step 35 - init(data) accepts level/score/lives + reads back from start payload.
state.main_init_body = (
    "    this.level = data.level || 1;\n"
    "    this.score = data.score || 0;\n"
    "    this.lives = data.lives || 3;\n"
)
# remove `this.score = 0;` and `this.lives = 3;` from create_body since init covers them
state.main_create_body = state.main_create_body.replace("    this.score = 0;\n", "")
state.main_create_body = state.main_create_body.replace("    this.lives = 3;\n", "")
# update HUD strings to read from this.score / this.lives
state.main_create_body = state.main_create_body.replace(
    '    this.scoreText = this.add.text(10, 10, "SCORE 0", {\n',
    '    this.scoreText = this.add.text(10, 10, "SCORE " + this.score, {\n',
)
state.main_create_body = state.main_create_body.replace(
    '    this.livesText = this.add.text(10, 32, "LIVES 3", {\n',
    '    this.livesText = this.add.text(10, 32, "LIVES " + this.lives, {\n',
)
snap()  # solutions[35]

# Step 36 - replace spawnBricks to read LEVELS layout + use COLORS by HP.
SPAWN_BRICKS_LEVELS = """\
  spawnBricks() {
    const layout = LEVELS[(this.level - 1) % LEVELS.length];
    for (let row = 0; row < layout.length; row++) {
      for (let col = 0; col < layout[row].length; col++) {
        const cell = layout[row][col];
        if (cell === 0) continue;
        const x = 40 + col * 40 + 20;
        const y = 80 + row * 22;
        const isIndestructible = cell === 9;
        const color = isIndestructible ? COLORS[0] : COLORS[cell];
        const brick = this.add.rectangle(x, y, 36, 18, color);
        this.bricks.add(brick);
        brick.hp = isIndestructible ? Infinity : cell;
        brick.points = (3 - row + cell) * 10;
      }
    }
  }
"""
for i, m in enumerate(state.main_methods):
    if m.startswith("  spawnBricks"):
        state.main_methods[i] = SPAWN_BRICKS_LEVELS
        break
snap()  # solutions[36]

# Step 37 - replace onBrickHit to handle hp / indestructible / points.
ON_BRICK_HIT_HP = """\
  onBrickHit(ball, brick) {
    if (brick.hp === Infinity) return;
    brick.hp -= 1;
    if (brick.hp <= 0) {
      this.score += brick.points;
      brick.destroy();
      this.scoreText.setText("SCORE " + this.score);
    } else {
      brick.setFillStyle(COLORS[Phaser.Math.Clamp(brick.hp, 0, 5)]);
    }
  }
"""
for i, m in enumerate(state.main_methods):
    if m.startswith("  onBrickHit"):
        state.main_methods[i] = ON_BRICK_HIT_HP
        break
snap()  # solutions[37]

# Step 38 - advanceLevel method + win check inside onBrickHit.
ADVANCE_LEVEL_METHOD = """\
  advanceLevel() {
    this.persistHighScore();
    this.level += 1;
    if (this.level > LEVELS.length) {
      this.scene.start("GameOverScene", { score: this.score, win: true });
      return;
    }
    this.scene.restart({
      level: this.level,
      score: this.score,
      lives: this.lives
    });
  }
"""
ON_BRICK_HIT_WIN = """\
  onBrickHit(ball, brick) {
    if (brick.hp === Infinity) return;
    brick.hp -= 1;
    if (brick.hp <= 0) {
      this.score += brick.points;
      brick.destroy();
      this.scoreText.setText("SCORE " + this.score);
      const remaining = this.bricks
        .getChildren()
        .filter(b => b.hp !== Infinity).length;
      if (remaining === 0) this.advanceLevel();
    } else {
      brick.setFillStyle(COLORS[Phaser.Math.Clamp(brick.hp, 0, 5)]);
    }
  }
"""
state.main_methods.append(ADVANCE_LEVEL_METHOD)
for i, m in enumerate(state.main_methods):
    if m.startswith("  onBrickHit"):
        state.main_methods[i] = ON_BRICK_HIT_WIN
        break
snap()  # solutions[38]

# Step 39 - high score HUD on MainScene + updateHud refresh helper.
state.main_create_body += (
    '    this.highText = this.add\n'
    '      .text(470, 10, "", {\n'
    '        fontSize: "16px",\n'
    '        color: "#aaaaaa"\n'
    "      })\n"
    "      .setOrigin(1, 0);\n"
    "    this.updateHud();\n"
)
UPDATE_HUD_METHOD = """\
  updateHud() {
    this.scoreText.setText("SCORE " + this.score);
    this.livesText.setText("LIVES " + this.lives);
    const high = parseInt(localStorage.getItem(SAVE_KEY) || "0", 10);
    this.highText.setText("HIGH " + Math.max(high, this.score));
  }
"""
state.main_methods.append(UPDATE_HUD_METHOD)
snap()  # solutions[39]

# Step 40 - difficulty ramp inside loseLife and an initial-velocity helper used in spawn/reset.
LOSE_LIFE_RAMP = """\
  loseLife() {
    this.lives -= 1;
    this.updateHud();
    if (this.lives <= 0) {
      this.gameOver();
      return;
    }
    this.ball.setPosition(240, 540);
    const baseSpeed = 220 + (this.level - 1) * 12;
    this.ball.body.setVelocity(baseSpeed * 0.5, -baseSpeed);
  }
"""
for i, m in enumerate(state.main_methods):
    if m.startswith("  loseLife"):
        state.main_methods[i] = LOSE_LIFE_RAMP
        break
# also bump the create-time initial velocity so it scales with this.level
state.main_create_body = state.main_create_body.replace(
    "    this.ball.body.setVelocity(120, -260);\n",
    "    this.ball.body.setVelocity(\n"
    "      (220 + (this.level - 1) * 12) * 0.5,\n"
    "      -(220 + (this.level - 1) * 12)\n"
    "    );\n",
)
# update update()'s ball off-bottom branch (kept short via loseLife)
snap()  # solutions[40]

# Step 41 - max-speed clamp + minimum-vy anti-stuck in update.
state.main_update_body = state.main_update_body.replace(
    "    if (this.ball.y > 660) this.loseLife();\n",
    "    const v = this.ball.body.velocity;\n"
    "    if (Math.abs(v.y) < 60) v.y = v.y < 0 ? -120 : 120;\n"
    "    const speed = Math.sqrt(v.x * v.x + v.y * v.y);\n"
    "    const maxSpeed = 360 + (this.level - 1) * 20;\n"
    "    if (speed > maxSpeed) {\n"
    "      v.x *= maxSpeed / speed;\n"
    "      v.y *= maxSpeed / speed;\n"
    "    }\n"
    "    if (this.ball.y > 660) this.loseLife();\n",
)
snap()  # solutions[41]

# Step 42 - togglePause method + P-key check + pause overlay.
TOGGLE_PAUSE_METHOD = """\
  togglePause() {
    this.paused = !this.paused;
    if (this.paused) {
      this.physics.world.pause();
      this.pauseText = this.add
        .text(240, 320, "PAUSED", {
          fontSize: "40px",
          color: "#ffffff"
        })
        .setOrigin(0.5)
        .setDepth(100);
    } else {
      this.physics.world.resume();
      if (this.pauseText) this.pauseText.destroy();
    }
  }
"""
state.main_methods.append(TOGGLE_PAUSE_METHOD)
state.main_create_body += "    this.paused = false;\n"
state.main_update_body = (
    "    if (Phaser.Input.Keyboard.JustDown(this.keys.P)) this.togglePause();\n"
    "    if (this.paused) return;\n"
) + state.main_update_body
snap()  # solutions[42]

# Step 43 - particleBurst helper + call inside onBrickHit + camera shake.
PARTICLE_BURST_METHOD = """\
  particleBurst(x, y, color) {
    for (let i = 0; i < 6; i++) {
      const p = this.add.rectangle(x, y, 4, 4, color);
      const angle = Math.random() * Math.PI * 2;
      this.tweens.add({
        targets: p,
        x: x + Math.cos(angle) * 30,
        y: y + Math.sin(angle) * 30,
        alpha: 0,
        duration: 300,
        onComplete: () => p.destroy()
      });
    }
  }
"""
state.main_methods.append(PARTICLE_BURST_METHOD)
ON_BRICK_HIT_FX = """\
  onBrickHit(ball, brick) {
    if (brick.hp === Infinity) return;
    brick.hp -= 1;
    if (brick.hp <= 0) {
      this.score += brick.points;
      this.particleBurst(brick.x, brick.y, brick.fillColor);
      brick.destroy();
      this.cameras.main.shake(80, 0.005);
      this.updateHud();
      const remaining = this.bricks
        .getChildren()
        .filter(b => b.hp !== Infinity).length;
      if (remaining === 0) this.advanceLevel();
    } else {
      brick.setFillStyle(COLORS[Phaser.Math.Clamp(brick.hp, 0, 5)]);
    }
  }
"""
for i, m in enumerate(state.main_methods):
    if m.startswith("  onBrickHit"):
        state.main_methods[i] = ON_BRICK_HIT_FX
        break
snap()  # solutions[43]

# Step 44 - ControlsScene class definition.
state.extra_classes_post.append(CONTROLS_SCENE)
snap()  # solutions[44]

# Step 45 - register ControlsScene in config + launch from MainScene create.
state.scene_array.append("ControlsScene")
state.main_create_body += '    this.scene.launch("ControlsScene");\n'
snap()  # solutions[45]

# Step 46 - listen to ControlsScene events on MainScene.
state.main_create_body += (
    '    this.events.on("action:left", () => {\n'
    "      this.targetX -= 30;\n"
    "    });\n"
    '    this.events.on("action:right", () => {\n'
    "      this.targetX += 30;\n"
    "    });\n"
    '    this.events.on("action:pause", () => this.togglePause());\n'
)
snap()  # solutions[46]

# Step 47 - stop ControlsScene on game over and on advance-to-win.
GAME_OVER_STOP = """\
  gameOver() {
    this.persistHighScore();
    this.scene.stop("ControlsScene");
    this.scene.start("GameOverScene", { score: this.score, win: false });
  }
"""
ADVANCE_LEVEL_STOP = """\
  advanceLevel() {
    this.persistHighScore();
    this.level += 1;
    if (this.level > LEVELS.length) {
      this.scene.stop("ControlsScene");
      this.scene.start("GameOverScene", { score: this.score, win: true });
      return;
    }
    this.scene.restart({
      level: this.level,
      score: this.score,
      lives: this.lives
    });
  }
"""
for i, m in enumerate(state.main_methods):
    if m.startswith("  gameOver"):
        state.main_methods[i] = GAME_OVER_STOP
    elif m.startswith("  advanceLevel"):
        state.main_methods[i] = ADVANCE_LEVEL_STOP
snap()  # solutions[47]

# Step 48 - "ball attached to paddle" launch flow on space/tap.
state.main_create_body = state.main_create_body.replace(
    "    this.ball.body.setVelocity(\n"
    "      (220 + (this.level - 1) * 12) * 0.5,\n"
    "      -(220 + (this.level - 1) * 12)\n"
    "    );\n",
    "    this.ball.body.setVelocity(0, 0);\n"
    "    this.ballAttached = true;\n",
)
LAUNCH_BALL_METHOD = """\
  launchBall() {
    this.ballAttached = false;
    const baseSpeed = 220 + (this.level - 1) * 12;
    this.ball.body.setVelocity(baseSpeed * 0.4, -baseSpeed);
  }
"""
state.main_methods.append(LAUNCH_BALL_METHOD)
# update update body: when attached, follow paddle + listen for launch
state.main_update_body = state.main_update_body.replace(
    "    const v = this.ball.body.velocity;\n",
    "    if (this.ballAttached) {\n"
    "      this.ball.x = this.paddle.x;\n"
    "      this.ball.y = this.paddle.y - 16;\n"
    '      if (this.isDown("launch")) this.launchBall();\n'
    "      return;\n"
    "    }\n"
    "    const v = this.ball.body.velocity;\n",
)
# update loseLife to reattach instead of giving the ball a new velocity
LOSE_LIFE_REATTACH = """\
  loseLife() {
    this.lives -= 1;
    this.updateHud();
    if (this.lives <= 0) {
      this.gameOver();
      return;
    }
    this.ball.body.setVelocity(0, 0);
    this.ballAttached = true;
  }
"""
for i, m in enumerate(state.main_methods):
    if m.startswith("  loseLife"):
        state.main_methods[i] = LOSE_LIFE_REATTACH
        break
# also: pointerdown should launch when attached
state.main_create_body = state.main_create_body.replace(
    '    this.input.on("pointerdown", pointer => {\n'
    "      if (pointer.y > 540) this.targetX = pointer.x;\n"
    "    });\n",
    '    this.input.on("pointerdown", pointer => {\n'
    "      if (pointer.y > 540) this.targetX = pointer.x;\n"
    "      if (this.ballAttached) this.launchBall();\n"
    "    });\n",
)
snap()  # solutions[48]

# Step 49 - level overlay tween when create runs.
LEVEL_OVERLAY_LINES = (
    "    const overlay = this.add\n"
    '      .text(240, 320, "LEVEL " + this.level, {\n'
    '        fontSize: "40px",\n'
    '        color: "#ffffff"\n'
    "      })\n"
    "      .setOrigin(0.5)\n"
    "      .setDepth(100);\n"
    "    this.tweens.add({\n"
    "      targets: overlay,\n"
    "      alpha: 0,\n"
    "      duration: 1200,\n"
    "      onComplete: () => overlay.destroy()\n"
    "    });\n"
)
state.main_create_body += LEVEL_OVERLAY_LINES
snap()  # solutions[49]

# Step 50 - polish: hide keyboard hint on touch + show "tap to launch" hint;
#         add a launch hint text that disappears after first launch.
state.main_create_body += (
    "    const isTouch = Phaser.Device.os.android || Phaser.Device.os.iOS;\n"
    "    this.launchHint = this.add\n"
    "      .text(\n"
    "        240,\n"
    "        500,\n"
    '        isTouch ? "Tap to launch" : "Press SPACE to launch",\n'
    '        { fontSize: "14px", color: "#ffee44" }\n'
    "      )\n"
    "      .setOrigin(0.5);\n"
)
LAUNCH_BALL_HIDES_HINT = """\
  launchBall() {
    this.ballAttached = false;
    const baseSpeed = 220 + (this.level - 1) * 12;
    this.ball.body.setVelocity(baseSpeed * 0.4, -baseSpeed);
    if (this.launchHint) this.launchHint.setVisible(false);
  }
"""
for i, m in enumerate(state.main_methods):
    if m.startswith("  launchBall"):
        state.main_methods[i] = LAUNCH_BALL_HIDES_HINT
        break
snap()  # solutions[50]

assert len(solutions) == 51, f"expected 51 entries, got {len(solutions)}"


# ---------------------------------------------------------------------------
# Per-step seed builders. Each returns the previous solution with exactly two
# `--fcc-editable-region--` markers wrapping the focused diff region.
# ---------------------------------------------------------------------------


def empty_region():
    return "--fcc-editable-region--\n\n--fcc-editable-region--\n"


def wrap_existing(prev: str, anchor: str, n_replace: int = 1) -> str:
    """Wrap `anchor` in editable-region markers (used for REPLACE-style steps)."""
    if anchor not in prev:
        raise SystemExit(f"anchor not found in prev:\n---\n{anchor!r}\n---")
    return prev.replace(
        anchor, f"--fcc-editable-region--\n{anchor}--fcc-editable-region--\n", n_replace
    )


def insert_empty(prev: str, anchor: str) -> str:
    """Insert an empty editable region right after `anchor`."""
    if anchor not in prev:
        raise SystemExit(f"anchor not found in prev:\n---\n{anchor!r}\n---")
    return prev.replace(anchor, anchor + empty_region(), 1)


def insert_empty_before(prev: str, anchor: str) -> str:
    """Insert an empty editable region right before `anchor`."""
    if anchor not in prev:
        raise SystemExit(f"anchor not found in prev:\n---\n{anchor!r}\n---")
    return prev.replace(anchor, empty_region() + anchor, 1)


# Step 1 - whole file is "the editable region" (an empty class scaffold inside markers).
def step1_seed():
    return (
        "--fcc-editable-region--\n"
        "\n"
        "--fcc-editable-region--\n\n"
        "const config = {\n"
        "  type: Phaser.AUTO,\n"
        "  width: 480,\n"
        "  height: 640,\n"
        '  parent: "game-container",\n'
        '  backgroundColor: "#111122",\n'
        "  physics: {\n"
        '    default: "arcade",\n'
        "    arcade: { gravity: { y: 0 } }\n"
        "  },\n"
        "  scene: [MainScene]\n"
        "};\n\n"
        "const game = new Phaser.Game(config);"
    )


def make_step2_seed():
    def seed_fn(prev):
        return insert_empty(prev, "  create() {\n")

    return seed_fn


def make_step3_seed():
    anchor = (
        "    this.bg = this.add.rectangle(240, 320, 480, 640, 0x111122);\n"
    )

    def seed_fn(prev):
        return insert_empty(prev, anchor)

    return seed_fn


def make_step4_seed():
    anchor = (
        "    this.paddle = this.add.rectangle(240, 580, 80, 16, 0xeeeeee);\n"
        "    this.physics.add.existing(this.paddle);\n"
        "    this.paddle.body.setImmovable(true);\n"
    )

    def seed_fn(prev):
        return insert_empty(prev, anchor)

    return seed_fn


def make_step5_seed():
    """Add ACTIONS const at top of file (before `class MainScene`)."""

    def seed_fn(prev):
        return insert_empty_before(prev, "class MainScene")

    return seed_fn


def make_step6_seed():
    """Add isDown method - empty editable region before `update()`."""

    def seed_fn(prev):
        return insert_empty_before(prev, "  update() {\n")

    return seed_fn


def make_step7_seed():
    """Fill update body."""

    def seed_fn(prev):
        return insert_empty(prev, "  update() {\n")

    return seed_fn


def make_step8_seed():
    old = (
        '    if (this.isDown("left")) this.paddle.x -= 4;\n'
        '    else if (this.isDown("right")) this.paddle.x += 4;\n'
    )

    def seed_fn(prev):
        return wrap_existing(prev, old)

    return seed_fn


def make_step9_seed():
    """Append targetX init + pointermove gated listener after the addKeys line."""
    anchor = '    this.keys = this.input.keyboard.addKeys("A,D,SPACE,P");\n'

    def seed_fn(prev):
        return insert_empty(prev, anchor)

    return seed_fn


def make_step10_seed():
    old = (
        '    if (this.isDown("left")) this.paddle.x -= 4;\n'
        '    else if (this.isDown("right")) this.paddle.x += 4;\n'
        "    this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);\n"
    )

    def seed_fn(prev):
        return wrap_existing(prev, old)

    return seed_fn


def make_step11_seed():
    anchor = (
        '    this.input.on("pointermove", pointer => {\n'
        "      if (pointer.y > 540) this.targetX = pointer.x;\n"
        "    });\n"
    )

    def seed_fn(prev):
        return insert_empty(prev, anchor)

    return seed_fn


def make_step12_seed():
    anchor = (
        '    this.input.on("pointerdown", pointer => {\n'
        "      if (pointer.y > 540) this.targetX = pointer.x;\n"
        "    });\n"
    )

    def seed_fn(prev):
        return insert_empty(prev, anchor)

    return seed_fn


def make_step13_seed():
    anchor = (
        "    this.ball = this.add.circle(240, 540, 8, 0xffaa44);\n"
        "    this.physics.add.existing(this.ball);\n"
    )

    def seed_fn(prev):
        return insert_empty(prev, anchor)

    return seed_fn


def make_step14_seed():
    anchor = "    this.ball.body.setBounce(1, 1);\n"

    def seed_fn(prev):
        return insert_empty(prev, anchor)

    return seed_fn


def make_step15_seed():
    anchor = "    this.ball.body.setCollideWorldBounds(true);\n"

    def seed_fn(prev):
        return insert_empty(prev, anchor)

    return seed_fn


def make_step16_seed():
    anchor = "    this.physics.world.checkCollision.down = false;\n"

    def seed_fn(prev):
        return insert_empty(prev, anchor)

    return seed_fn


def make_step17_seed():
    """Append into update body (currently empty in update -- editable region inside update)."""

    def seed_fn(prev):
        return insert_empty(prev, "  update() {\n")

    return seed_fn


def make_step18_seed():
    """Add ball-paddle collider after the ball setVelocity line in create."""
    anchor = "    this.ball.body.setVelocity(120, -260);\n"

    def seed_fn(prev):
        return insert_empty(prev, anchor)

    return seed_fn


def make_step19_seed():
    """Append onPaddleBounce method - empty editable region after isDown method."""

    def seed_fn(prev):
        return insert_empty(prev, ISDOWN_METHOD)

    return seed_fn


def make_step20_seed():
    """Wrap existing onPaddleBounce so learner can extend it with the tween."""

    def seed_fn(prev):
        return wrap_existing(prev, ON_PADDLE_BOUNCE_BASIC)

    return seed_fn


def make_step21_seed():
    """Add bricks + spawn call after the ball-paddle collider."""
    anchor = (
        "    this.physics.add.collider(\n"
        "      this.ball,\n"
        "      this.paddle,\n"
        "      this.onPaddleBounce,\n"
        "      null,\n"
        "      this\n"
        "    );\n"
    )

    def seed_fn(prev):
        return insert_empty(prev, anchor)

    return seed_fn


def make_step22_seed():
    """spawnBricks method - empty editable region after onPaddleBounce."""

    def seed_fn(prev):
        return insert_empty(prev, ON_PADDLE_BOUNCE_FULL)

    return seed_fn


def make_step23_seed():
    """Add ball-bricks collider after spawn call."""
    anchor = "    this.spawnBricks();\n"

    def seed_fn(prev):
        return insert_empty(prev, anchor)

    return seed_fn


def make_step24_seed():
    """onBrickHit method - empty editable region after spawnBricks method."""

    def seed_fn(prev):
        return insert_empty(prev, SPAWN_BRICKS_BASIC)

    return seed_fn


def make_step25_seed():
    """Add score init + scoreText after the ball-bricks collider."""
    anchor = (
        "    this.physics.add.collider(\n"
        "      this.ball,\n"
        "      this.bricks,\n"
        "      this.onBrickHit,\n"
        "      null,\n"
        "      this\n"
        "    );\n"
    )

    def seed_fn(prev):
        return insert_empty(prev, anchor)

    return seed_fn


def make_step26_seed():
    """Wrap onBrickHit so learner adds score increment."""

    def seed_fn(prev):
        return wrap_existing(prev, ON_BRICK_HIT_BASIC)

    return seed_fn


def make_step27_seed():
    """Add lives init + livesText HUD after scoreText block."""
    anchor = (
        '    this.scoreText = this.add.text(10, 10, "SCORE 0", {\n'
        '      fontSize: "16px",\n'
        '      color: "#ffffff"\n'
        "    });\n"
    )

    def seed_fn(prev):
        return insert_empty(prev, anchor)

    return seed_fn


def make_step28_seed():
    """Wrap the off-bottom snippet so learner converts to a loseLife() call."""
    old = (
        "    if (this.ball.y > 660) {\n"
        "      this.ball.setPosition(240, 540);\n"
        "      this.ball.body.setVelocity(120, -260);\n"
        "    }\n"
    )

    def seed_fn(prev):
        return wrap_existing(prev, old)

    return seed_fn


def make_step29_seed():
    """loseLife method - empty editable region after the score-aware onBrickHit."""

    def seed_fn(prev):
        return insert_empty(prev, ON_BRICK_HIT_SCORE)

    return seed_fn


def make_step30_seed():
    """GameOverScene class - empty editable region before const config."""

    def seed_fn(prev):
        return insert_empty_before(prev, "\nconst config = {\n")

    return seed_fn


def make_step31_seed():
    """SAVE_KEY const - empty editable region before ACTIONS."""

    def seed_fn(prev):
        return insert_empty_before(prev, ACTIONS_CONST)

    return seed_fn


def make_step32_seed():
    """Wrap the scene array to add GameOverScene."""

    def seed_fn(prev):
        return wrap_existing(prev, "  scene: [MainScene]\n")

    return seed_fn


def make_step33_seed():
    """Wrap loseLife so learner adds gameOver branch + introduces gameOver/persistHighScore methods.

    Two markers; the wrapping covers the whole loseLife method because the
    learner is rewriting the entire method plus appending two new methods.
    """
    old = LOSE_LIFE_BASIC

    def seed_fn(prev):
        return wrap_existing(prev, old)

    return seed_fn


def make_step34_seed():
    """LEVELS + COLORS consts - empty editable region after SAVE_KEY const."""

    def seed_fn(prev):
        return insert_empty(prev, SAVE_KEY_CONST + "\n\n")

    return seed_fn


def make_step35_seed():
    """Wrap the create-time HUD initialization area so learner replaces it with init().

    The learner adds an init(data) method and removes the now-redundant
    `this.score = 0` / `this.lives = 3` lines, switching HUD strings to read
    from this.score / this.lives. The whole region from after createCursorKeys
    through the livesText block is wrapped in one editable region.
    """
    old = (
        "    this.score = 0;\n"
        '    this.scoreText = this.add.text(10, 10, "SCORE 0", {\n'
        '      fontSize: "16px",\n'
        '      color: "#ffffff"\n'
        "    });\n"
        "    this.lives = 3;\n"
        '    this.livesText = this.add.text(10, 32, "LIVES 3", {\n'
        '      fontSize: "16px",\n'
        '      color: "#ffffff"\n'
        "    });\n"
    )

    def seed_fn(prev):
        # Two markers across two regions would violate the validator; we wrap
        # the entire score+lives setup as one editable block. The init(data)
        # method is added by the learner inside the same block by extending
        # the surrounding context — but our validator demands exactly one
        # region. So we instead wrap from `super("MainScene"); }` through the
        # livesText block, and the learner adds init() within that span.
        bigger_old = (
            '    super("MainScene");\n  }\n'
            "\n  create() {\n"
            "    this.bg = this.add.rectangle(240, 320, 480, 640, 0x111122);\n"
            "    this.paddle = this.add.rectangle(240, 580, 80, 16, 0xeeeeee);\n"
            "    this.physics.add.existing(this.paddle);\n"
            "    this.paddle.body.setImmovable(true);\n"
            "    this.cursors = this.input.keyboard.createCursorKeys();\n"
            '    this.keys = this.input.keyboard.addKeys("A,D,SPACE,P");\n'
            "    this.targetX = this.paddle.x;\n"
            '    this.input.on("pointermove", pointer => {\n'
            "      if (pointer.y > 540) this.targetX = pointer.x;\n"
            "    });\n"
            '    this.input.on("pointerdown", pointer => {\n'
            "      if (pointer.y > 540) this.targetX = pointer.x;\n"
            "    });\n"
            "    this.ball = this.add.circle(240, 540, 8, 0xffaa44);\n"
            "    this.physics.add.existing(this.ball);\n"
            "    this.ball.body.setBounce(1, 1);\n"
            "    this.ball.body.setCollideWorldBounds(true);\n"
            "    this.physics.world.checkCollision.down = false;\n"
            "    this.ball.body.setVelocity(120, -260);\n"
            "    this.physics.add.collider(\n"
            "      this.ball,\n"
            "      this.paddle,\n"
            "      this.onPaddleBounce,\n"
            "      null,\n"
            "      this\n"
            "    );\n"
            "    this.bricks = this.physics.add.staticGroup();\n"
            "    this.spawnBricks();\n"
            "    this.physics.add.collider(\n"
            "      this.ball,\n"
            "      this.bricks,\n"
            "      this.onBrickHit,\n"
            "      null,\n"
            "      this\n"
            "    );\n"
            + old
        )
        return wrap_existing(prev, bigger_old)

    return seed_fn


def make_step36_seed():
    """Wrap simple spawnBricks so learner converts it to LEVELS-driven version."""

    def seed_fn(prev):
        return wrap_existing(prev, SPAWN_BRICKS_BASIC)

    return seed_fn


def make_step37_seed():
    """Wrap onBrickHit (score-aware version) so learner adds hp + indestructible logic."""

    def seed_fn(prev):
        return wrap_existing(prev, ON_BRICK_HIT_SCORE)

    return seed_fn


def make_step38_seed():
    """Wrap onBrickHit (hp version) so learner adds win check + advanceLevel method.

    Wrap covers from start of onBrickHit (hp version) through the
    persistHighScore method so that the learner can replace onBrickHit and
    append advanceLevel inside the same region.
    """

    def seed_fn(prev):
        return wrap_existing(prev, ON_BRICK_HIT_HP)

    return seed_fn


def make_step39_seed():
    """Append highText + updateHud call to create body, then a new updateHud method.

    We wrap an empty editable region right before the closing of `create() {}`
    plus the area where the new method goes. To stay within "one region" we
    wrap the area from end-of-livesText through the end of MainScene.
    """
    # Anchor: the `}` line ending create + the existing methods region. We wrap
    # an empty region right before update().
    anchor = "  }\n\n  update() {\n"

    def seed_fn(prev):
        # Insert empty region right before the update opening.
        return insert_empty_before(prev, anchor)

    return seed_fn


def make_step40_seed():
    """Wrap the loseLife (game-over aware) method so learner refactors it for ramp + bumps initial velocity.

    The learner also bumps the ball's create-time velocity to scale with this.level.
    To stay in one editable region, we wrap from the ball.setVelocity line in
    create through the closing brace of loseLife.
    """

    def seed_fn(prev):
        old = (
            "    this.ball.body.setVelocity(120, -260);\n"
            "    this.physics.add.collider(\n"
            "      this.ball,\n"
            "      this.paddle,\n"
            "      this.onPaddleBounce,\n"
            "      null,\n"
            "      this\n"
            "    );\n"
            "    this.bricks = this.physics.add.staticGroup();\n"
            "    this.spawnBricks();\n"
            "    this.physics.add.collider(\n"
            "      this.ball,\n"
            "      this.bricks,\n"
            "      this.onBrickHit,\n"
            "      null,\n"
            "      this\n"
            "    );\n"
            '    this.scoreText = this.add.text(10, 10, "SCORE " + this.score, {\n'
            '      fontSize: "16px",\n'
            '      color: "#ffffff"\n'
            "    });\n"
            '    this.livesText = this.add.text(10, 32, "LIVES " + this.lives, {\n'
            '      fontSize: "16px",\n'
            '      color: "#ffffff"\n'
            "    });\n"
            '    this.highText = this.add\n'
            '      .text(470, 10, "", {\n'
            '        fontSize: "16px",\n'
            '        color: "#aaaaaa"\n'
            "      })\n"
            "      .setOrigin(1, 0);\n"
            "    this.updateHud();\n"
            "  }\n"
        )
        return wrap_existing(prev, old)

    return seed_fn


def make_step41_seed():
    """Wrap update body (currently the off-bottom one-liner) so learner adds clamp + anti-stuck."""

    def seed_fn(prev):
        old = "    if (this.ball.y > 660) this.loseLife();\n"
        return wrap_existing(prev, old)

    return seed_fn


def make_step42_seed():
    """Wrap update body so learner adds pause guard + togglePause method."""

    def seed_fn(prev):
        old = (
            "    const v = this.ball.body.velocity;\n"
            "    if (Math.abs(v.y) < 60) v.y = v.y < 0 ? -120 : 120;\n"
            "    const speed = Math.sqrt(v.x * v.x + v.y * v.y);\n"
            "    const maxSpeed = 360 + (this.level - 1) * 20;\n"
            "    if (speed > maxSpeed) {\n"
            "      v.x *= maxSpeed / speed;\n"
            "      v.y *= maxSpeed / speed;\n"
            "    }\n"
            "    if (this.ball.y > 660) this.loseLife();\n"
        )
        return wrap_existing(prev, old)

    return seed_fn


def make_step43_seed():
    """Wrap onBrickHit (win-check version) so learner adds particle + shake."""

    def seed_fn(prev):
        return wrap_existing(prev, ON_BRICK_HIT_WIN)

    return seed_fn


def make_step44_seed():
    """ControlsScene class - empty editable region before const config."""

    def seed_fn(prev):
        return insert_empty_before(prev, "\nconst config = {\n")

    return seed_fn


def make_step45_seed():
    """Wrap the scene array + the end of create body so learner adds ControlsScene + launch."""

    def seed_fn(prev):
        old = "  scene: [MainScene, GameOverScene]\n"
        return wrap_existing(prev, old)

    return seed_fn


def make_step46_seed():
    """Add event listeners after the launch line."""
    anchor = '    this.scene.launch("ControlsScene");\n'

    def seed_fn(prev):
        return insert_empty(prev, anchor)

    return seed_fn


def make_step47_seed():
    """Wrap gameOver + persistHighScore + advanceLevel methods so learner adds scene.stop calls.

    Methods are rendered in append-order: gameOver, persistHighScore, advanceLevel
    (advanceLevel was appended in step 38 after the other two were already in place).
    We wrap the contiguous trio because the learner only edits the first and last.
    """

    def seed_fn(prev):
        old = (
            GAME_OVER_METHOD
            + "\n"
            + PERSIST_METHOD
            + "\n"
            + ADVANCE_LEVEL_METHOD
        )
        return wrap_existing(prev, old)

    return seed_fn


def make_step48_seed():
    """Wrap the create-time velocity + the loseLife method + the pointerdown handler.

    Big change: switch ball to attached-launch model. Wrap the relevant
    contiguous create+loseLife region so the learner can flip everything.
    """

    def seed_fn(prev):
        old = (
            '    this.input.on("pointerdown", pointer => {\n'
            "      if (pointer.y > 540) this.targetX = pointer.x;\n"
            "    });\n"
        )
        return wrap_existing(prev, old)

    return seed_fn


def make_step49_seed():
    """Add level overlay near the end of create."""
    anchor = '    this.events.on("action:pause", () => this.togglePause());\n'

    def seed_fn(prev):
        return insert_empty(prev, anchor)

    return seed_fn


def make_step50_seed():
    """Add launchHint text + wrap launchBall to hide it.

    Wrap from end-of-launchBall through end-of-particleBurst is overkill; we
    simply add an empty editable region right before launchBall, since the
    learner will both add the hint text in create and modify launchBall.
    To keep one region, wrap the entire launchBall method.
    """

    def seed_fn(prev):
        return wrap_existing(prev, LAUNCH_BALL_METHOD)

    return seed_fn


# ---------------------------------------------------------------------------
# Step specs (description + hints + seed_fn).
# ---------------------------------------------------------------------------

STEPS = []


def step(num, dashed, description, hints, seed_fn, demo="onLoad"):
    STEPS.append({
        "num": num,
        "dashed": dashed,
        "description": description,
        "hints": hints,
        "seed_fn": seed_fn,
        "demo": demo,
    })


def render_md(num, dashed, description, hints, seed_js, demo="onLoad", solution=None):
    body = []
    body.append("---\n")
    body.append(f"id: {HEX_BASE.format(ID_OFFSET + num)}\n")
    body.append(f"title: Step {num}\n")
    body.append("challengeType: 0\n")
    body.append(f"dashedName: {dashed}\n")
    body.append("---\n\n")
    body.append("# --description--\n")
    body.append(description.strip() + "\n\n")
    body.append("# --hints--\n")
    body.append(hints.strip() + "\n\n")
    body.append("# --seed--\n\n")
    body.append("## --seed-contents--\n\n")
    body.append(HTML)
    body.append("\n")
    body.append(CSS)
    body.append("\n")
    body.append("```js\n")
    body.append(seed_js)
    if not seed_js.endswith("\n"):
        body.append("\n")
    body.append("```\n\n")
    if solution is not None:
        body.append("# --solutions--\n\n")
        body.append(HTML)
        body.append("\n")
        body.append(CSS)
        body.append("\n")
        body.append("```js\n")
        body.append(solution)
        if not solution.endswith("\n"):
            body.append("\n")
        body.append("```\n")
    return "".join(body)


# Step 1.
step(
    1,
    "step-1",
    """
Welcome to the brick-breaker workshop. Over the next 50 steps you'll build a complete brick breaker that runs identically on keyboard, mouse, and touch — five levels of bricks, multi-hit and indestructible blocks, lives, score, a persistent high score, a virtual-controls overlay scene, and a game-over flow.

Start by writing the bare scene shell. Inside the editable region, declare a class `MainScene` that extends `Phaser.Scene`, with a constructor that calls `super("MainScene")` and empty `create` and `update` methods.

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
    """
You should declare a `MainScene` class extending `Phaser.Scene`.

```js
assert.match(code, /class\\s+MainScene\\s+extends\\s+Phaser\\.Scene/);
```

The constructor should call `super("MainScene")`.

```js
assert.match(code, /super\\(\\s*[\"']MainScene[\"']\\s*\\)/);
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
    None,  # placeholder; step1 is special — see render_md call below
)
STEPS[-1]["seed_override"] = step1_seed()  # not a function; the literal seed string

# Step 2.
step(
    2,
    "step-2",
    """
The canvas is `480 × 640`. Inside `create`, paint a dark background rectangle that fills the play area:

```js
this.bg = this.add.rectangle(240, 320, 480, 640, 0x111122);
```

`add.rectangle(centerX, centerY, width, height, color)` creates a non-physics display rectangle. `0x111122` is a navy-leaning charcoal that lets the brighter game elements stand out without burning your eyes during a long playtest.
""",
    """
You should add a rectangle the size of the canvas at the canvas center, color `0x111122`.

```js
assert.match(code, /this\\.bg\\s*=\\s*this\\.add\\.rectangle\\(\\s*240\\s*,\\s*320\\s*,\\s*480\\s*,\\s*640\\s*,\\s*0x111122\\s*\\)/);
```
""",
    make_step2_seed(),
)

# Step 3.
step(
    3,
    "step-3",
    """
Add the paddle. It's a rectangle near the bottom that the player will move side-to-side. Give it a physics body so the ball can collide with it later, and mark it `setImmovable(true)` so collisions don't push it around.

```js
this.paddle = this.add.rectangle(240, 580, 80, 16, 0xeeeeee);
this.physics.add.existing(this.paddle);
this.paddle.body.setImmovable(true);
```

`physics.add.existing` retrofits an arcade body onto an existing display object — useful when you want the visual to be a primitive shape instead of a sprite. `setImmovable(true)` means the ball reflects off the paddle without dragging the paddle along.
""",
    """
You should add a paddle rectangle at `(240, 580)` sized `80 × 16` colored `0xeeeeee`.

```js
assert.match(code, /this\\.paddle\\s*=\\s*this\\.add\\.rectangle\\(\\s*240\\s*,\\s*580\\s*,\\s*80\\s*,\\s*16\\s*,\\s*0xeeeeee\\s*\\)/);
```

You should give the paddle an arcade physics body.

```js
assert.match(code, /this\\.physics\\.add\\.existing\\(\\s*this\\.paddle\\s*\\)/);
```

You should mark the paddle's body `setImmovable(true)`.

```js
assert.match(code, /this\\.paddle\\.body\\.setImmovable\\(\\s*true\\s*\\)/);
```
""",
    make_step3_seed(),
)

# Step 4.
step(
    4,
    "step-4",
    """
Wire two keyboard sources at once. `createCursorKeys()` gives you the four arrow keys. `addKeys("A,D,SPACE,P")` returns the rest of the bindings the workshop will need — WASD-style movement, `SPACE` for "launch ball" later, and `P` for pause much later.

```js
this.cursors = this.input.keyboard.createCursorKeys();
this.keys = this.input.keyboard.addKeys("A,D,SPACE,P");
```

The action map you build in the next step will OR these two sources together.
""",
    """
You should call `this.input.keyboard.createCursorKeys()` and assign the result to `this.cursors`.

```js
assert.match(code, /this\\.cursors\\s*=\\s*this\\.input\\.keyboard\\.createCursorKeys\\(\\s*\\)/);
```

You should call `this.input.keyboard.addKeys("A,D,SPACE,P")` and assign the result to `this.keys`.

```js
assert.match(code, /this\\.keys\\s*=\\s*this\\.input\\.keyboard\\.addKeys\\(\\s*[\"']A,D,SPACE,P[\"']\\s*\\)/);
```
""",
    make_step4_seed(),
)

# Step 5.
step(
    5,
    "step-5",
    """
Declare an `ACTIONS` map at the top of the file (above `class MainScene`). Map each game action to the **physical keys** that drive it.

```js
const ACTIONS = {
  left: ["LEFT", "A"],
  right: ["RIGHT", "D"],
  launch: ["SPACE"],
  pause: ["P"]
};
```

This is the action-map abstraction from the lecture. The rest of the workshop will read from `ACTIONS` and never check key state directly.
""",
    """
You should declare a top-level `const ACTIONS` object before the class.

```js
assert.match(code, /const\\s+ACTIONS\\s*=\\s*\\{[\\s\\S]*\\}/);
```

`ACTIONS.left` should bind to `["LEFT", "A"]`.

```js
assert.match(code, /left\\s*:\\s*\\[\\s*[\"']LEFT[\"']\\s*,\\s*[\"']A[\"']\\s*\\]/);
```

`ACTIONS.right` should bind to `["RIGHT", "D"]`.

```js
assert.match(code, /right\\s*:\\s*\\[\\s*[\"']RIGHT[\"']\\s*,\\s*[\"']D[\"']\\s*\\]/);
```

`ACTIONS.launch` should bind to `["SPACE"]`.

```js
assert.match(code, /launch\\s*:\\s*\\[\\s*[\"']SPACE[\"']\\s*\\]/);
```

`ACTIONS.pause` should bind to `["P"]`.

```js
assert.match(code, /pause\\s*:\\s*\\[\\s*[\"']P[\"']\\s*\\]/);
```
""",
    make_step5_seed(),
)

# Step 6.
step(
    6,
    "step-6",
    """
Add a method on `MainScene` that resolves an action name to "is any bound key down right now?":

```js
isDown(action) {
  return ACTIONS[action].some(name => {
    const k = this.keys[name] || this.cursors[name.toLowerCase()];
    return k && k.isDown;
  });
}
```

The fallback `this.cursors[name.toLowerCase()]` lets the action map resolve `"LEFT"` against `this.cursors.left` (the arrow key the cursor-keys plugin returned), not just `this.keys.LEFT`. With one method the rest of the workshop can ask "is `left` down?" and not care which device or which keycode is supplying the input.
""",
    """
You should declare an `isDown(action)` method on `MainScene`.

```js
assert.match(code, /isDown\\s*\\(\\s*action\\s*\\)\\s*\\{/);
```

The body should iterate `ACTIONS[action]` with `.some(...)`.

```js
assert.match(code, /ACTIONS\\[\\s*action\\s*\\]\\.some\\(/);
```

It should fall back to `this.cursors[name.toLowerCase()]` when `this.keys[name]` is missing.

```js
assert.match(code, /this\\.keys\\[\\s*name\\s*\\]\\s*\\|\\|\\s*this\\.cursors\\[\\s*name\\.toLowerCase\\(\\s*\\)\\s*\\]/);
```

It should return `k && k.isDown`.

```js
assert.match(code, /return\\s+k\\s*&&\\s*k\\.isDown/);
```
""",
    make_step6_seed(),
)

# Step 7.
step(
    7,
    "step-7",
    """
Inside `update`, move the paddle when the `left` or `right` actions are active. Read **only** through `isDown` — the gameplay code shouldn't know which physical keys map to which action.

```js
if (this.isDown("left")) this.paddle.x -= 4;
else if (this.isDown("right")) this.paddle.x += 4;
```

Reload and try arrows, `A`, and `D`. All three should move the paddle.
""",
    """
The `update` body should call `this.isDown("left")` and decrement `this.paddle.x` by `4`.

```js
assert.match(code, /if\\s*\\(\\s*this\\.isDown\\(\\s*[\"']left[\"']\\s*\\)\\s*\\)\\s*this\\.paddle\\.x\\s*-=\\s*4/);
```

The `update` body should call `this.isDown("right")` and increment `this.paddle.x` by `4`.

```js
assert.match(code, /else\\s+if\\s*\\(\\s*this\\.isDown\\(\\s*[\"']right[\"']\\s*\\)\\s*\\)\\s*this\\.paddle\\.x\\s*\\+=\\s*4/);
```
""",
    make_step7_seed(),
)

# Step 8.
step(
    8,
    "step-8",
    """
The paddle currently slides off the canvas. Clamp `paddle.x` to `[40, 440]` so it can't escape:

```js
if (this.isDown("left")) this.paddle.x -= 4;
else if (this.isDown("right")) this.paddle.x += 4;
this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);
```

`Phaser.Math.Clamp(value, min, max)` is the one you'll reach for any time gameplay logic produces a number that should never escape a range.
""",
    """
The `update` body should clamp `this.paddle.x` to `[40, 440]` after the movement.

```js
assert.match(code, /this\\.paddle\\.x\\s*=\\s*Phaser\\.Math\\.Clamp\\(\\s*this\\.paddle\\.x\\s*,\\s*40\\s*,\\s*440\\s*\\)/);
```
""",
    make_step8_seed(),
)

# Step 9.
step(
    9,
    "step-9",
    """
Add a pointer-driven control path. Touch and mouse will both feed a `targetX` variable that the next step makes the paddle chase smoothly. To avoid stealing every tap on the canvas (which will also be used to launch the ball), gate the listener to the bottom strip of the canvas — `pointer.y > 540`.

Inside `create`, append:

```js
this.targetX = this.paddle.x;
this.input.on("pointermove", pointer => {
  if (pointer.y > 540) this.targetX = pointer.x;
});
```

The "thumb zone" of `y > 540` is the strip directly under the paddle — large enough for a thumb on a phone, but small enough that interactions higher on the screen are reserved for other gestures.
""",
    """
You should initialize `this.targetX` to the paddle's current `x`.

```js
assert.match(code, /this\\.targetX\\s*=\\s*this\\.paddle\\.x/);
```

You should attach a `pointermove` listener gated to `pointer.y > 540`.

```js
assert.match(code, /this\\.input\\.on\\(\\s*[\"']pointermove[\"'][\\s\\S]*?if\\s*\\(\\s*pointer\\.y\\s*>\\s*540\\s*\\)\\s*this\\.targetX\\s*=\\s*pointer\\.x/);
```
""",
    make_step9_seed(),
)

# Step 10.
step(
    10,
    "step-10",
    """
Refactor `update` so both the keyboard and the pointer drive the same `targetX`, then have the paddle smoothly lerp toward it. Replace the contents of `update` with:

```js
if (this.isDown("left")) this.targetX -= 6;
else if (this.isDown("right")) this.targetX += 6;
this.targetX = Phaser.Math.Clamp(this.targetX, 40, 440);
this.paddle.x = Phaser.Math.Linear(this.paddle.x, this.targetX, 0.3);
this.paddle.x = Phaser.Math.Clamp(this.paddle.x, 40, 440);
```

`Phaser.Math.Linear(a, b, t)` is the same as `a + (b - a) * t`. With `t = 0.3` the paddle covers about a third of the remaining distance per frame — fast enough that pointer drags feel responsive, slow enough that arrow taps don't snap.
""",
    """
The `update` body should accumulate `this.targetX` with arrows/WASD at speed `6`.

```js
assert.match(code, /if\\s*\\(\\s*this\\.isDown\\(\\s*[\"']left[\"']\\s*\\)\\s*\\)\\s*this\\.targetX\\s*-=\\s*6/);
assert.match(code, /else\\s+if\\s*\\(\\s*this\\.isDown\\(\\s*[\"']right[\"']\\s*\\)\\s*\\)\\s*this\\.targetX\\s*\\+=\\s*6/);
```

It should clamp `this.targetX` to `[40, 440]`.

```js
assert.match(code, /this\\.targetX\\s*=\\s*Phaser\\.Math\\.Clamp\\(\\s*this\\.targetX\\s*,\\s*40\\s*,\\s*440\\s*\\)/);
```

It should lerp `this.paddle.x` toward `this.targetX` with `Phaser.Math.Linear`.

```js
assert.match(code, /this\\.paddle\\.x\\s*=\\s*Phaser\\.Math\\.Linear\\(\\s*this\\.paddle\\.x\\s*,\\s*this\\.targetX\\s*,\\s*0\\.3\\s*\\)/);
```
""",
    make_step10_seed(),
)

# Step 11.
step(
    11,
    "step-11",
    """
Add a `pointerdown` listener with the same thumb-zone gate so a tap snaps the paddle to that x without waiting for `pointermove`:

```js
this.input.on("pointerdown", pointer => {
  if (pointer.y > 540) this.targetX = pointer.x;
});
```

Tap-and-go feels much better than tap-then-wait on touch devices.
""",
    """
You should attach a `pointerdown` listener gated to `pointer.y > 540`.

```js
assert.match(code, /this\\.input\\.on\\(\\s*[\"']pointerdown[\"'][\\s\\S]*?if\\s*\\(\\s*pointer\\.y\\s*>\\s*540\\s*\\)\\s*this\\.targetX\\s*=\\s*pointer\\.x/);
```
""",
    make_step11_seed(),
)

# Step 12.
step(
    12,
    "step-12",
    """
Add the ball. It's a small circle just above the paddle, given a physics body. After this step the ball doesn't move yet — that comes in the next four steps.

```js
this.ball = this.add.circle(240, 540, 8, 0xffaa44);
this.physics.add.existing(this.ball);
```

Like the paddle, it's a primitive (`add.circle`) wrapped in an arcade body via `physics.add.existing`. You'll never need a sprite atlas to ship a brick breaker.
""",
    """
You should add a circle ball at `(240, 540)` radius `8` colored `0xffaa44`.

```js
assert.match(code, /this\\.ball\\s*=\\s*this\\.add\\.circle\\(\\s*240\\s*,\\s*540\\s*,\\s*8\\s*,\\s*0xffaa44\\s*\\)/);
```

You should give it an arcade physics body.

```js
assert.match(code, /this\\.physics\\.add\\.existing\\(\\s*this\\.ball\\s*\\)/);
```
""",
    make_step12_seed(),
)

# Step 13.
step(
    13,
    "step-13",
    """
A brick-breaker ball must bounce, perfectly, off everything it hits. `setBounce(x, y)` is the arcade-physics way to express that:

```js
this.ball.body.setBounce(1, 1);
```

`1, 1` means "preserve all velocity on both axes after a collision." Lower values like `0.9` would gradually slow the ball — physically realistic, but not what a brick-breaker player expects.
""",
    """
You should call `this.ball.body.setBounce(1, 1)`.

```js
assert.match(code, /this\\.ball\\.body\\.setBounce\\(\\s*1\\s*,\\s*1\\s*\\)/);
```
""",
    make_step13_seed(),
)

# Step 14.
step(
    14,
    "step-14",
    """
Have the ball collide with the four edges of the world. After this line the ball will bounce off all four walls — including the bottom, which is **not** what you want for a brick breaker. Step 15 fixes that.

```js
this.ball.body.setCollideWorldBounds(true);
```
""",
    """
You should call `this.ball.body.setCollideWorldBounds(true)`.

```js
assert.match(code, /this\\.ball\\.body\\.setCollideWorldBounds\\(\\s*true\\s*\\)/);
```
""",
    make_step14_seed(),
)

# Step 15.
step(
    15,
    "step-15",
    """
Disable bottom-wall collision. The ball should fall **off** the bottom — that's how the player loses a life.

```js
this.physics.world.checkCollision.down = false;
```

`checkCollision` is a per-axis flag set on the world's bounds. Disabling `down` means an arcade body that crosses the bottom edge keeps going. The next steps detect that condition and react.
""",
    """
You should set `this.physics.world.checkCollision.down = false`.

```js
assert.match(code, /this\\.physics\\.world\\.checkCollision\\.down\\s*=\\s*false/);
```
""",
    make_step15_seed(),
)

# Step 16.
step(
    16,
    "step-16",
    """
Set the ball's initial velocity so it moves the moment the scene starts:

```js
this.ball.body.setVelocity(120, -260);
```

The ball heads up-and-to-the-right. The numbers will be replaced with a level-aware speed in step 40, but for now hard-coded values are fine.
""",
    """
You should call `this.ball.body.setVelocity(120, -260)`.

```js
assert.match(code, /this\\.ball\\.body\\.setVelocity\\(\\s*120\\s*,\\s*-260\\s*\\)/);
```
""",
    make_step16_seed(),
)

# Step 17.
step(
    17,
    "step-17",
    """
Detect the "ball off the bottom" case from inside `update`. For now, just snap the ball back to its starting position and re-launch it. Lives and game-over come later.

```js
if (this.ball.y > 660) {
  this.ball.setPosition(240, 540);
  this.ball.body.setVelocity(120, -260);
}
```

`660` is `20` past the canvas bottom — far enough that you don't trigger this on the borderline collision frame.
""",
    """
You should detect `this.ball.y > 660` inside `update`.

```js
assert.match(code, /if\\s*\\(\\s*this\\.ball\\.y\\s*>\\s*660\\s*\\)/);
```

You should reset the ball's position to `(240, 540)`.

```js
assert.match(code, /this\\.ball\\.setPosition\\(\\s*240\\s*,\\s*540\\s*\\)/);
```

You should re-set the ball's velocity to `(120, -260)`.

```js
assert.match(code, /this\\.ball\\.body\\.setVelocity\\(\\s*120\\s*,\\s*-260\\s*\\)/);
```
""",
    make_step17_seed(),
)

# Step 18.
step(
    18,
    "step-18",
    """
Make the ball collide with the paddle. `physics.add.collider(a, b, callback, processCallback, scope)` registers a hard physical collision between two physics-enabled objects, optionally calling a function on contact.

```js
this.physics.add.collider(
  this.ball,
  this.paddle,
  this.onPaddleBounce,
  null,
  this
);
```

The fifth argument (`this`) sets the scope `onPaddleBounce` will run with, so inside the method `this.tweens` etc. resolve correctly.
""",
    """
You should register a collider between `this.ball` and `this.paddle` with `this.onPaddleBounce` and scope `this`.

```js
assert.match(code, /this\\.physics\\.add\\.collider\\(\\s*this\\.ball\\s*,\\s*this\\.paddle\\s*,\\s*this\\.onPaddleBounce\\s*,\\s*null\\s*,\\s*this\\s*\\)/);
```
""",
    make_step18_seed(),
)

# Step 19.
step(
    19,
    "step-19",
    """
Define `onPaddleBounce`. The classic brick-breaker trick is to vary the bounce angle based on **where** the ball hit the paddle: hit the left edge → ball goes left; hit the right edge → ball goes right; hit dead center → ball goes straight up.

Add the method on `MainScene`:

```js
onPaddleBounce(ball, paddle) {
  const offset = (ball.x - paddle.x) / (paddle.width / 2);
  const speed = Math.sqrt(
    ball.body.velocity.x ** 2 + ball.body.velocity.y ** 2
  );
  const angle = -Math.PI / 2 + offset * (Math.PI / 3);
  ball.body.setVelocity(speed * Math.cos(angle), speed * Math.sin(angle));
}
```

`offset` is a number from `-1` (far left) to `1` (far right). `-Math.PI / 2` is straight up; multiplying `offset` by `Math.PI / 3` (60°) caps how steep the angle can get on the edges. You preserve `speed` so the ball's energy is conserved through the bounce.
""",
    """
You should declare an `onPaddleBounce(ball, paddle)` method on `MainScene`.

```js
assert.match(code, /onPaddleBounce\\s*\\(\\s*ball\\s*,\\s*paddle\\s*\\)\\s*\\{/);
```

The method should compute `offset` from `(ball.x - paddle.x) / (paddle.width / 2)`.

```js
assert.match(code, /const\\s+offset\\s*=\\s*\\(\\s*ball\\.x\\s*-\\s*paddle\\.x\\s*\\)\\s*\\/\\s*\\(\\s*paddle\\.width\\s*\\/\\s*2\\s*\\)/);
```

The method should compute the bounce angle as `-Math.PI / 2 + offset * (Math.PI / 3)`.

```js
assert.match(code, /-\\s*Math\\.PI\\s*\\/\\s*2\\s*\\+\\s*offset\\s*\\*\\s*\\(\\s*Math\\.PI\\s*\\/\\s*3\\s*\\)/);
```

The method should set the ball's velocity from `speed * Math.cos(angle)` and `speed * Math.sin(angle)`.

```js
assert.match(code, /ball\\.body\\.setVelocity\\(\\s*speed\\s*\\*\\s*Math\\.cos\\(\\s*angle\\s*\\)\\s*,\\s*speed\\s*\\*\\s*Math\\.sin\\(\\s*angle\\s*\\)\\s*\\)/);
```
""",
    make_step19_seed(),
)

# Step 20.
step(
    20,
    "step-20",
    """
Add a "squash" tween at the end of `onPaddleBounce` so the paddle physically reacts to a hit. This is pure feel — the gameplay is unchanged, but the bounce stops feeling like a physics calculation and starts feeling like a thwack.

Append inside the method body:

```js
this.tweens.add({
  targets: paddle,
  scaleX: 1.2,
  scaleY: 0.8,
  duration: 80,
  yoyo: true
});
```

`yoyo: true` plays the tween forward then back, total `160 ms`. The paddle widens horizontally (`scaleX: 1.2`) and squashes vertically (`scaleY: 0.8`) — like a real ball would deform a paddle on impact.
""",
    """
The `onPaddleBounce` method should add a tween targeting `paddle` that scales to `(1.2, 0.8)` over `80` ms with `yoyo: true`.

```js
assert.match(code, /this\\.tweens\\.add\\(\\s*\\{[\\s\\S]*?targets:\\s*paddle[\\s\\S]*?scaleX:\\s*1\\.2[\\s\\S]*?scaleY:\\s*0\\.8[\\s\\S]*?duration:\\s*80[\\s\\S]*?yoyo:\\s*true/);
```
""",
    make_step20_seed(),
)

# Step 21.
step(
    21,
    "step-21",
    """
Add a static physics group for the bricks and a placeholder call to `spawnBricks` (which you'll define in the next step).

```js
this.bricks = this.physics.add.staticGroup();
this.spawnBricks();
```

A **static group** is one whose members don't move under physics — perfect for bricks. They still participate in collisions; the ball will bounce off them.
""",
    """
You should create `this.bricks` as a `physics.add.staticGroup()`.

```js
assert.match(code, /this\\.bricks\\s*=\\s*this\\.physics\\.add\\.staticGroup\\(\\s*\\)/);
```

You should call `this.spawnBricks()`.

```js
assert.match(code, /this\\.spawnBricks\\(\\s*\\)/);
```
""",
    make_step21_seed(),
)

# Step 22.
step(
    22,
    "step-22",
    """
Define `spawnBricks` to lay out a `10 × 3` grid. Each brick is a 36×18 rectangle in `0x44aaff` (a pleasant blue).

```js
spawnBricks() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 10; col++) {
      const x = 40 + col * 40 + 20;
      const y = 80 + row * 22;
      const brick = this.add.rectangle(x, y, 36, 18, 0x44aaff);
      this.bricks.add(brick);
    }
  }
}
```

The math: `x = 40 + col * 40 + 20` places columns at `60, 100, 140, …, 420`. `y = 80 + row * 22` puts the top row at `80` and gives the rows enough vertical room to render without overlap.
""",
    """
You should declare a `spawnBricks` method on `MainScene`.

```js
assert.match(code, /spawnBricks\\s*\\(\\s*\\)\\s*\\{/);
```

It should iterate `3` rows and `10` columns.

```js
assert.match(code, /for\\s*\\(\\s*let\\s+row\\s*=\\s*0\\s*;\\s*row\\s*<\\s*3\\s*;/);
assert.match(code, /for\\s*\\(\\s*let\\s+col\\s*=\\s*0\\s*;\\s*col\\s*<\\s*10\\s*;/);
```

Each brick should be a `36 × 18` rectangle colored `0x44aaff` and added to `this.bricks`.

```js
assert.match(code, /this\\.add\\.rectangle\\(\\s*x\\s*,\\s*y\\s*,\\s*36\\s*,\\s*18\\s*,\\s*0x44aaff\\s*\\)/);
assert.match(code, /this\\.bricks\\.add\\(\\s*brick\\s*\\)/);
```
""",
    make_step22_seed(),
)

# Step 23.
step(
    23,
    "step-23",
    """
Make the ball collide with the brick group. Same shape as the paddle collider — pass the group as the second argument.

```js
this.physics.add.collider(
  this.ball,
  this.bricks,
  this.onBrickHit,
  null,
  this
);
```

The collider iterates the group on every contact, so you don't need to add per-brick listeners.
""",
    """
You should register a collider between `this.ball` and `this.bricks` with `this.onBrickHit` and scope `this`.

```js
assert.match(code, /this\\.physics\\.add\\.collider\\(\\s*this\\.ball\\s*,\\s*this\\.bricks\\s*,\\s*this\\.onBrickHit\\s*,\\s*null\\s*,\\s*this\\s*\\)/);
```
""",
    make_step23_seed(),
)

# Step 24.
step(
    24,
    "step-24",
    """
Define `onBrickHit`. For now, just destroy the brick on contact — you'll add hit-points and score in the next steps.

```js
onBrickHit(ball, brick) {
  brick.destroy();
}
```

`destroy()` removes the brick from the scene and from the static group. The ball keeps its momentum and rebounds normally because `setBounce(1, 1)` is still in effect.
""",
    """
You should declare an `onBrickHit(ball, brick)` method.

```js
assert.match(code, /onBrickHit\\s*\\(\\s*ball\\s*,\\s*brick\\s*\\)\\s*\\{/);
```

It should call `brick.destroy()`.

```js
assert.match(code, /brick\\.destroy\\(\\s*\\)/);
```
""",
    make_step24_seed(),
)

# Step 25.
step(
    25,
    "step-25",
    """
Initialize the score and add a HUD text in the top-left corner:

```js
this.score = 0;
this.scoreText = this.add.text(10, 10, "SCORE 0", {
  fontSize: "16px",
  color: "#ffffff"
});
```

Phaser's `add.text` returns a `Text` game object you can mutate via `setText` later. `color` (not `fill`) is the modern style key.
""",
    """
You should initialize `this.score = 0`.

```js
assert.match(code, /this\\.score\\s*=\\s*0/);
```

You should add `this.scoreText` at `(10, 10)` reading "SCORE 0" with `fontSize: "16px"`.

```js
assert.match(code, /this\\.scoreText\\s*=\\s*this\\.add\\.text\\(\\s*10\\s*,\\s*10\\s*,\\s*[\"']SCORE 0[\"'][\\s\\S]*?fontSize:\\s*[\"']16px[\"']/);
```
""",
    make_step25_seed(),
)

# Step 26.
step(
    26,
    "step-26",
    """
Update `onBrickHit` to award `10` points and refresh the HUD:

```js
onBrickHit(ball, brick) {
  brick.destroy();
  this.score += 10;
  this.scoreText.setText("SCORE " + this.score);
}
```

`Text.setText(value)` replaces the entire string. You'll keep this pattern for every HUD update — there's no two-way binding here, just direct mutations.
""",
    """
The `onBrickHit` method should increment `this.score` by `10`.

```js
assert.match(code, /this\\.score\\s*\\+=\\s*10/);
```

It should refresh the score HUD with `setText`.

```js
assert.match(code, /this\\.scoreText\\.setText\\(\\s*[\"']SCORE [\"']\\s*\\+\\s*this\\.score\\s*\\)/);
```
""",
    make_step26_seed(),
)

# Step 27.
step(
    27,
    "step-27",
    """
Initialize lives and a second HUD line for them:

```js
this.lives = 3;
this.livesText = this.add.text(10, 32, "LIVES 3", {
  fontSize: "16px",
  color: "#ffffff"
});
```

Same pattern as the score HUD, just one row down (`y = 32`).
""",
    """
You should initialize `this.lives = 3`.

```js
assert.match(code, /this\\.lives\\s*=\\s*3/);
```

You should add `this.livesText` at `(10, 32)` reading "LIVES 3".

```js
assert.match(code, /this\\.livesText\\s*=\\s*this\\.add\\.text\\(\\s*10\\s*,\\s*32\\s*,\\s*[\"']LIVES 3[\"'][\\s\\S]*?fontSize:\\s*[\"']16px[\"']/);
```
""",
    make_step27_seed(),
)

# Step 28.
step(
    28,
    "step-28",
    """
Replace the inline ball-reset block in `update` with a single call to `this.loseLife()` (which you'll define next):

```js
if (this.ball.y > 660) this.loseLife();
```

This is a typical refactor — the inline behavior was fine for a placeholder, but now that you need to also touch the lives counter you don't want the bookkeeping spread across both the update body and a separate method.
""",
    """
The off-bottom branch should call `this.loseLife()`.

```js
assert.match(code, /if\\s*\\(\\s*this\\.ball\\.y\\s*>\\s*660\\s*\\)\\s*this\\.loseLife\\(\\s*\\)/);
```

The previous inline reset (`this.ball.setPosition(240, 540)` followed by `setVelocity(120, -260)`) should no longer appear inside `update`.

```js
assert.match(code, /update\\s*\\(\\s*\\)\\s*\\{[\\s\\S]*?\\}/);
const updateBody = code.match(/update\\s*\\(\\s*\\)\\s*\\{([\\s\\S]*?)\\n\\s*\\}/)[1];
assert.notMatch(updateBody, /this\\.ball\\.setPosition\\(\\s*240\\s*,\\s*540\\s*\\)/);
```
""",
    make_step28_seed(),
)

# Step 29.
step(
    29,
    "step-29",
    """
Define `loseLife`. Decrement the counter, refresh the HUD, and reset the ball:

```js
loseLife() {
  this.lives -= 1;
  this.livesText.setText("LIVES " + this.lives);
  this.ball.setPosition(240, 540);
  this.ball.body.setVelocity(120, -260);
}
```

You'll add the game-over branch (when `this.lives <= 0`) in step 33.
""",
    """
You should declare a `loseLife` method.

```js
assert.match(code, /loseLife\\s*\\(\\s*\\)\\s*\\{/);
```

It should decrement `this.lives` and refresh the HUD via `setText`.

```js
assert.match(code, /this\\.lives\\s*-=\\s*1[\\s\\S]*?this\\.livesText\\.setText\\(\\s*[\"']LIVES [\"']\\s*\\+\\s*this\\.lives/);
```

It should reset the ball's position and velocity.

```js
assert.match(code, /this\\.ball\\.setPosition\\(\\s*240\\s*,\\s*540\\s*\\)[\\s\\S]*?this\\.ball\\.body\\.setVelocity\\(\\s*120\\s*,\\s*-260\\s*\\)/);
```
""",
    make_step29_seed(),
)

# Step 30.
step(
    30,
    "step-30",
    """
Add a separate scene for "game over." Declare it **after** `MainScene` (still above `const config`):

```js
class GameOverScene extends Phaser.Scene {
  constructor() {
    super("GameOverScene");
  }

  create(data) {
    this.add.rectangle(240, 320, 480, 640, 0x000000, 0.85);
    this.add
      .text(240, 240, data.win ? "YOU WIN" : "GAME OVER", {
        fontSize: "32px",
        color: data.win ? "#44ee88" : "#ff6644"
      })
      .setOrigin(0.5);
    this.add
      .text(240, 300, "Score: " + data.score, {
        fontSize: "20px",
        color: "#ffffff"
      })
      .setOrigin(0.5);
    const high = parseInt(localStorage.getItem(SAVE_KEY) || "0", 10);
    this.add
      .text(240, 340, "High: " + high, {
        fontSize: "16px",
        color: "#aaaaaa"
      })
      .setOrigin(0.5);
    this.add
      .text(240, 420, "Press R to restart", {
        fontSize: "14px",
        color: "#ffee44"
      })
      .setOrigin(0.5);
    this.input.keyboard.once("keydown-R", () => {
      this.scene.start("MainScene", { level: 1, score: 0, lives: 3 });
    });
  }
}
```

This scene reads `data.win` and `data.score` from the start payload (next steps will pass them), shows a final/high-score line, and rebinds `R` to restart `MainScene`. `SAVE_KEY` doesn't exist yet — the next step adds it.
""",
    """
You should declare a `GameOverScene` class extending `Phaser.Scene`.

```js
assert.match(code, /class\\s+GameOverScene\\s+extends\\s+Phaser\\.Scene/);
```

The constructor should call `super("GameOverScene")`.

```js
assert.match(code, /super\\(\\s*[\"']GameOverScene[\"']\\s*\\)/);
```

`create(data)` should branch on `data.win`.

```js
assert.match(code, /data\\.win\\s*\\?\\s*[\"']YOU WIN[\"']\\s*:\\s*[\"']GAME OVER[\"']/);
```

`R` should restart `MainScene` with `{ level: 1, score: 0, lives: 3 }`.

```js
assert.match(code, /this\\.input\\.keyboard\\.once\\(\\s*[\"']keydown-R[\"'][\\s\\S]*?this\\.scene\\.start\\(\\s*[\"']MainScene[\"']\\s*,\\s*\\{\\s*level:\\s*1\\s*,\\s*score:\\s*0\\s*,\\s*lives:\\s*3\\s*\\}\\s*\\)/);
```
""",
    make_step30_seed(),
)

# Step 31.
step(
    31,
    "step-31",
    """
Add a `SAVE_KEY` constant before `ACTIONS`. This is the `localStorage` key used by both `GameOverScene` (already referencing it) and the `persistHighScore` method you'll add in step 33.

```js
const SAVE_KEY = "phaser-bb-high-score";
```

Pulling the key out as a constant keeps it consistent across all the call sites and makes it trivially refactorable when you ship a second game.
""",
    """
You should declare a `SAVE_KEY` constant equal to `"phaser-bb-high-score"`.

```js
assert.match(code, /const\\s+SAVE_KEY\\s*=\\s*[\"']phaser-bb-high-score[\"']/);
```
""",
    make_step31_seed(),
)

# Step 32.
step(
    32,
    "step-32",
    """
Register `GameOverScene` in `config.scene` so Phaser can transition to it.

```js
scene: [MainScene, GameOverScene]
```

Phaser starts the **first** scene in the array by default; everything else is started programmatically via `scene.start(name)`.
""",
    """
The `config.scene` array should now contain `[MainScene, GameOverScene]` in order.

```js
assert.match(code, /scene:\\s*\\[\\s*MainScene\\s*,\\s*GameOverScene\\s*\\]/);
```
""",
    make_step32_seed(),
)

# Step 33.
step(
    33,
    "step-33",
    """
Wire game-over. Replace `loseLife` so it calls a new `gameOver()` method when lives hit zero, and add `gameOver` and `persistHighScore` methods.

Replace the existing `loseLife` body with:

```js
loseLife() {
  this.lives -= 1;
  this.livesText.setText("LIVES " + this.lives);
  if (this.lives <= 0) {
    this.gameOver();
    return;
  }
  this.ball.setPosition(240, 540);
  this.ball.body.setVelocity(120, -260);
}
```

Then add the two new methods immediately after:

```js
gameOver() {
  this.persistHighScore();
  this.scene.start("GameOverScene", { score: this.score, win: false });
}

persistHighScore() {
  const high = parseInt(localStorage.getItem(SAVE_KEY) || "0", 10);
  if (this.score > high) localStorage.setItem(SAVE_KEY, String(this.score));
}
```

`persistHighScore` reads the previous high, compares, and writes if the run beat it. `gameOver` persists the score and hands off to `GameOverScene`.
""",
    """
The `loseLife` method should branch to `this.gameOver()` when `this.lives <= 0`.

```js
assert.match(code, /loseLife\\s*\\([\\s\\S]*?if\\s*\\(\\s*this\\.lives\\s*<=\\s*0\\s*\\)[\\s\\S]*?this\\.gameOver\\(\\s*\\)/);
```

You should declare a `gameOver` method that calls `persistHighScore` then `scene.start("GameOverScene", ...)`.

```js
assert.match(code, /gameOver\\s*\\(\\s*\\)\\s*\\{[\\s\\S]*?this\\.persistHighScore\\(\\s*\\)[\\s\\S]*?this\\.scene\\.start\\(\\s*[\"']GameOverScene[\"'][\\s\\S]*?score:\\s*this\\.score[\\s\\S]*?win:\\s*false/);
```

You should declare a `persistHighScore` method using `localStorage` and `SAVE_KEY`.

```js
assert.match(code, /persistHighScore\\s*\\(\\s*\\)\\s*\\{[\\s\\S]*?localStorage\\.getItem\\(\\s*SAVE_KEY[\\s\\S]*?localStorage\\.setItem\\(\\s*SAVE_KEY/);
```
""",
    make_step33_seed(),
)

# Step 34.
step(
    34,
    "step-34",
    """
Add `LEVELS` and `COLORS` constants near the top of the file (after `SAVE_KEY`).

```js
const LEVELS = [
  [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ],
  [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
  ],
  [
    [9, 1, 1, 1, 1, 1, 1, 1, 1, 9],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [9, 1, 1, 1, 1, 1, 1, 1, 1, 9]
  ],
  [
    [3, 3, 2, 2, 1, 1, 2, 2, 3, 3],
    [9, 1, 1, 1, 1, 1, 1, 1, 1, 9],
    [1, 1, 1, 9, 9, 9, 9, 1, 1, 1]
  ],
  [
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [9, 2, 2, 2, 2, 2, 2, 2, 2, 9],
    [9, 1, 1, 9, 9, 9, 9, 1, 1, 9]
  ]
];

const COLORS = [0x666666, 0x44aaff, 0x44ee88, 0xffee44, 0xffaa44, 0xff6644];
```

Each cell is **HP**: `0` empty, `1`–`5` destructible (color picked from `COLORS[hp]`), `9` indestructible (gray, never destroyed). The five layouts ramp from "all easy" to "indestructible bricks bracketing tough rows."
""",
    """
You should declare a `LEVELS` constant containing five layouts.

```js
assert.match(code, /const\\s+LEVELS\\s*=\\s*\\[[\\s\\S]*?\\]/);
const layoutCount = (code.match(/\\[\\s*\\[\\s*[0-9]/g) || []).length;
assert.ok(layoutCount >= 5, `expected at least 5 layouts, found ${layoutCount}`);
```

You should declare a `COLORS` constant of six values.

```js
assert.match(code, /const\\s+COLORS\\s*=\\s*\\[\\s*0x666666\\s*,\\s*0x44aaff\\s*,\\s*0x44ee88\\s*,\\s*0xffee44\\s*,\\s*0xffaa44\\s*,\\s*0xff6644\\s*\\]/);
```
""",
    make_step34_seed(),
)

# Step 35.
step(
    35,
    "step-35",
    """
Move per-run state into an `init(data)` method so Phaser can restart the scene with a payload (used by level transitions and game-over restarts).

Inside the `MainScene` class (between `constructor` and `create`), add:

```js
init(data) {
  this.level = data.level || 1;
  this.score = data.score || 0;
  this.lives = data.lives || 3;
}
```

Then update the `create` body so it no longer initializes `this.score`/`this.lives` directly. Replace the previous score/lives initialization block:

```js
this.score = 0;
this.scoreText = this.add.text(10, 10, "SCORE 0", { ... });
this.lives = 3;
this.livesText = this.add.text(10, 32, "LIVES 3", { ... });
```

with:

```js
this.scoreText = this.add.text(10, 10, "SCORE " + this.score, {
  fontSize: "16px",
  color: "#ffffff"
});
this.livesText = this.add.text(10, 32, "LIVES " + this.lives, {
  fontSize: "16px",
  color: "#ffffff"
});
```

Phaser calls `init` before `create`, so by the time `create` runs `this.score` and `this.lives` already have the right values.
""",
    """
You should declare an `init(data)` method that reads `data.level`, `data.score`, and `data.lives` with sensible defaults.

```js
assert.match(code, /init\\s*\\(\\s*data\\s*\\)\\s*\\{[\\s\\S]*?this\\.level\\s*=\\s*data\\.level\\s*\\|\\|\\s*1[\\s\\S]*?this\\.score\\s*=\\s*data\\.score\\s*\\|\\|\\s*0[\\s\\S]*?this\\.lives\\s*=\\s*data\\.lives\\s*\\|\\|\\s*3/);
```

The HUD lines should read from `this.score` and `this.lives` (not the literals `0` / `3`).

```js
assert.match(code, /this\\.scoreText\\s*=\\s*this\\.add\\.text\\(\\s*10\\s*,\\s*10\\s*,\\s*[\"']SCORE [\"']\\s*\\+\\s*this\\.score/);
assert.match(code, /this\\.livesText\\s*=\\s*this\\.add\\.text\\(\\s*10\\s*,\\s*32\\s*,\\s*[\"']LIVES [\"']\\s*\\+\\s*this\\.lives/);
```
""",
    make_step35_seed(),
)

# Step 36.
step(
    36,
    "step-36",
    """
Replace `spawnBricks` to drive the layout from `LEVELS[this.level - 1]`. Each cell becomes a brick with `hp` and `points`; cell value `9` is indestructible (`hp = Infinity`, gray color).

```js
spawnBricks() {
  const layout = LEVELS[(this.level - 1) % LEVELS.length];
  for (let row = 0; row < layout.length; row++) {
    for (let col = 0; col < layout[row].length; col++) {
      const cell = layout[row][col];
      if (cell === 0) continue;
      const x = 40 + col * 40 + 20;
      const y = 80 + row * 22;
      const isIndestructible = cell === 9;
      const color = isIndestructible ? COLORS[0] : COLORS[cell];
      const brick = this.add.rectangle(x, y, 36, 18, color);
      this.bricks.add(brick);
      brick.hp = isIndestructible ? Infinity : cell;
      brick.points = (3 - row + cell) * 10;
    }
  }
}
```

`(3 - row + cell) * 10` makes higher-row + higher-HP bricks worth more — there's no rendering math here, just a points-per-difficulty curve that survives extension.
""",
    """
The `spawnBricks` method should read `LEVELS[(this.level - 1) % LEVELS.length]`.

```js
assert.match(code, /LEVELS\\[\\s*\\(\\s*this\\.level\\s*-\\s*1\\s*\\)\\s*%\\s*LEVELS\\.length\\s*\\]/);
```

It should skip cells equal to `0`.

```js
assert.match(code, /if\\s*\\(\\s*cell\\s*===\\s*0\\s*\\)\\s*continue/);
```

It should treat cell `9` as indestructible (`hp = Infinity`).

```js
assert.match(code, /const\\s+isIndestructible\\s*=\\s*cell\\s*===\\s*9/);
assert.match(code, /brick\\.hp\\s*=\\s*isIndestructible\\s*\\?\\s*Infinity\\s*:\\s*cell/);
```

Each brick should track `points` as `(3 - row + cell) * 10`.

```js
assert.match(code, /brick\\.points\\s*=\\s*\\(\\s*3\\s*-\\s*row\\s*\\+\\s*cell\\s*\\)\\s*\\*\\s*10/);
```
""",
    make_step36_seed(),
)

# Step 37.
step(
    37,
    "step-37",
    """
Replace `onBrickHit` to honor `brick.hp`. Indestructible bricks (`hp === Infinity`) bounce the ball without taking damage. Destructible bricks lose `1` HP per hit; on `0` they award `brick.points` and disappear; on a non-zero HP they re-tint to a color based on remaining HP.

```js
onBrickHit(ball, brick) {
  if (brick.hp === Infinity) return;
  brick.hp -= 1;
  if (brick.hp <= 0) {
    this.score += brick.points;
    brick.destroy();
    this.scoreText.setText("SCORE " + this.score);
  } else {
    brick.setFillStyle(COLORS[Phaser.Math.Clamp(brick.hp, 0, 5)]);
  }
}
```

`Phaser.Math.Clamp(brick.hp, 0, 5)` is just defensive — it stops a typo in `LEVELS` (e.g., `cell = 6`) from crashing the lookup.
""",
    """
The `onBrickHit` method should early-return when `brick.hp === Infinity`.

```js
assert.match(code, /if\\s*\\(\\s*brick\\.hp\\s*===\\s*Infinity\\s*\\)\\s*return/);
```

It should decrement `brick.hp` and award `brick.points` on destroy.

```js
assert.match(code, /brick\\.hp\\s*-=\\s*1/);
assert.match(code, /this\\.score\\s*\\+=\\s*brick\\.points/);
```

It should re-tint the brick via `setFillStyle` when HP > 0.

```js
assert.match(code, /brick\\.setFillStyle\\(\\s*COLORS\\[\\s*Phaser\\.Math\\.Clamp\\(\\s*brick\\.hp\\s*,\\s*0\\s*,\\s*5\\s*\\)\\s*\\]/);
```
""",
    make_step37_seed(),
)

# Step 38.
step(
    38,
    "step-38",
    """
Add an `advanceLevel` method, and add a "all destructible bricks gone" win check inside `onBrickHit`.

Replace `onBrickHit` again with the win-aware version:

```js
onBrickHit(ball, brick) {
  if (brick.hp === Infinity) return;
  brick.hp -= 1;
  if (brick.hp <= 0) {
    this.score += brick.points;
    brick.destroy();
    this.scoreText.setText("SCORE " + this.score);
    const remaining = this.bricks
      .getChildren()
      .filter(b => b.hp !== Infinity).length;
    if (remaining === 0) this.advanceLevel();
  } else {
    brick.setFillStyle(COLORS[Phaser.Math.Clamp(brick.hp, 0, 5)]);
  }
}
```

Then add the new method (after `persistHighScore`):

```js
advanceLevel() {
  this.persistHighScore();
  this.level += 1;
  if (this.level > LEVELS.length) {
    this.scene.start("GameOverScene", { score: this.score, win: true });
    return;
  }
  this.scene.restart({
    level: this.level,
    score: this.score,
    lives: this.lives
  });
}
```

`scene.restart(data)` re-runs `init(data) → create()` with the payload. Because you put the run-state setup in `init` in step 35, this is exactly what survives.
""",
    """
The `onBrickHit` method should compute `remaining` from `bricks.getChildren().filter(b => b.hp !== Infinity).length`.

```js
assert.match(code, /this\\.bricks\\s*\\.\\s*getChildren\\(\\s*\\)\\s*\\.\\s*filter\\(\\s*b\\s*=>\\s*b\\.hp\\s*!==\\s*Infinity\\s*\\)\\.length/);
```

It should call `this.advanceLevel()` when `remaining === 0`.

```js
assert.match(code, /if\\s*\\(\\s*remaining\\s*===\\s*0\\s*\\)\\s*this\\.advanceLevel\\(\\s*\\)/);
```

You should declare an `advanceLevel` method that persists the high score and either starts `GameOverScene` (with `win: true`) or `scene.restart`s with the new level.

```js
assert.match(code, /advanceLevel\\s*\\(\\s*\\)\\s*\\{[\\s\\S]*?this\\.persistHighScore\\(\\s*\\)[\\s\\S]*?this\\.level\\s*\\+=\\s*1[\\s\\S]*?if\\s*\\(\\s*this\\.level\\s*>\\s*LEVELS\\.length\\s*\\)/);
```

It should pass `{ level, score, lives }` to `scene.restart`.

```js
assert.match(code, /this\\.scene\\.restart\\(\\s*\\{[\\s\\S]*?level:\\s*this\\.level[\\s\\S]*?score:\\s*this\\.score[\\s\\S]*?lives:\\s*this\\.lives/);
```
""",
    make_step38_seed(),
)

# Step 39.
step(
    39,
    "step-39",
    """
Add a "high score" HUD on the right and a `updateHud` helper that the score/lives setters delegate to.

Append to the end of `create`:

```js
this.highText = this.add
  .text(470, 10, "", {
    fontSize: "16px",
    color: "#aaaaaa"
  })
  .setOrigin(1, 0);
this.updateHud();
```

Then add the helper method (after `persistHighScore`):

```js
updateHud() {
  this.scoreText.setText("SCORE " + this.score);
  this.livesText.setText("LIVES " + this.lives);
  const high = parseInt(localStorage.getItem(SAVE_KEY) || "0", 10);
  this.highText.setText("HIGH " + Math.max(high, this.score));
}
```

`setOrigin(1, 0)` right-aligns the text — its right-edge sits at `x = 470`. The `Math.max(high, this.score)` keeps the HUD honest mid-run: if the player surpasses the saved high without dying yet, the live HUD reflects it.
""",
    """
You should add `this.highText` at `(470, 10)` with `setOrigin(1, 0)`.

```js
assert.match(code, /this\\.highText\\s*=\\s*this\\.add[\\s\\S]*?\\.text\\(\\s*470\\s*,\\s*10[\\s\\S]*?setOrigin\\(\\s*1\\s*,\\s*0\\s*\\)/);
```

You should call `this.updateHud()` from `create`.

```js
assert.match(code, /this\\.updateHud\\(\\s*\\)/);
```

You should declare an `updateHud` method that refreshes all three HUD lines.

```js
assert.match(code, /updateHud\\s*\\(\\s*\\)\\s*\\{[\\s\\S]*?this\\.scoreText\\.setText[\\s\\S]*?this\\.livesText\\.setText[\\s\\S]*?this\\.highText\\.setText\\(\\s*[\"']HIGH [\"']\\s*\\+\\s*Math\\.max\\(\\s*high\\s*,\\s*this\\.score/);
```
""",
    make_step39_seed(),
)

# Step 40.
step(
    40,
    "step-40",
    """
Make the ball faster as the player progresses. Bump the create-time velocity to scale with `this.level`, and rewrite `loseLife` to also use the level-aware speed when respawning.

Replace this block in `create`:

```js
this.ball.body.setVelocity(120, -260);
```

with the level-aware version:

```js
this.ball.body.setVelocity(
  (220 + (this.level - 1) * 12) * 0.5,
  -(220 + (this.level - 1) * 12)
);
```

And rewrite `loseLife`:

```js
loseLife() {
  this.lives -= 1;
  this.updateHud();
  if (this.lives <= 0) {
    this.gameOver();
    return;
  }
  this.ball.setPosition(240, 540);
  const baseSpeed = 220 + (this.level - 1) * 12;
  this.ball.body.setVelocity(baseSpeed * 0.5, -baseSpeed);
}
```

`220 + (level - 1) * 12` ramps from `220` on level 1 to `268` on level 5. The horizontal component is half the total — the ball goes mostly up, partly sideways, just like the keyboard launch you'll add later.
""",
    """
The create-time `setVelocity` should now scale with `this.level`.

```js
assert.match(code, /this\\.ball\\.body\\.setVelocity\\(\\s*\\(\\s*220\\s*\\+\\s*\\(\\s*this\\.level\\s*-\\s*1\\s*\\)\\s*\\*\\s*12\\s*\\)\\s*\\*\\s*0\\.5\\s*,\\s*-\\(\\s*220\\s*\\+\\s*\\(\\s*this\\.level\\s*-\\s*1\\s*\\)\\s*\\*\\s*12\\s*\\)\\s*\\)/);
```

The `loseLife` method should compute `baseSpeed = 220 + (this.level - 1) * 12` and set the ball's velocity accordingly.

```js
assert.match(code, /loseLife\\s*\\([\\s\\S]*?const\\s+baseSpeed\\s*=\\s*220\\s*\\+\\s*\\(\\s*this\\.level\\s*-\\s*1\\s*\\)\\s*\\*\\s*12[\\s\\S]*?this\\.ball\\.body\\.setVelocity\\(\\s*baseSpeed\\s*\\*\\s*0\\.5\\s*,\\s*-baseSpeed/);
```

The `loseLife` method should also call `this.updateHud()` instead of mutating `livesText` directly.

```js
assert.match(code, /loseLife\\s*\\([\\s\\S]*?this\\.updateHud\\(\\s*\\)/);
```
""",
    make_step40_seed(),
)

# Step 41.
step(
    41,
    "step-41",
    """
Replace the off-bottom one-liner in `update` with anti-stuck + max-speed clamps.

Replace:

```js
if (this.ball.y > 660) this.loseLife();
```

with:

```js
const v = this.ball.body.velocity;
if (Math.abs(v.y) < 60) v.y = v.y < 0 ? -120 : 120;
const speed = Math.sqrt(v.x * v.x + v.y * v.y);
const maxSpeed = 360 + (this.level - 1) * 20;
if (speed > maxSpeed) {
  v.x *= maxSpeed / speed;
  v.y *= maxSpeed / speed;
}
if (this.ball.y > 660) this.loseLife();
```

The first guard prevents the classic brick-breaker bug where the ball settles into a horizontal "stuck" path between two indestructible walls. The second caps the ball's speed so chained collisions don't spin it out of human reaction time.
""",
    """
The `update` body should pull the velocity into a `const v` and force `|v.y| >= 60`.

```js
assert.match(code, /const\\s+v\\s*=\\s*this\\.ball\\.body\\.velocity/);
assert.match(code, /if\\s*\\(\\s*Math\\.abs\\(\\s*v\\.y\\s*\\)\\s*<\\s*60\\s*\\)\\s*v\\.y\\s*=\\s*v\\.y\\s*<\\s*0\\s*\\?\\s*-120\\s*:\\s*120/);
```

It should compute `maxSpeed = 360 + (this.level - 1) * 20` and clamp `v` accordingly.

```js
assert.match(code, /const\\s+maxSpeed\\s*=\\s*360\\s*\\+\\s*\\(\\s*this\\.level\\s*-\\s*1\\s*\\)\\s*\\*\\s*20/);
assert.match(code, /v\\.x\\s*\\*=\\s*maxSpeed\\s*\\/\\s*speed/);
assert.match(code, /v\\.y\\s*\\*=\\s*maxSpeed\\s*\\/\\s*speed/);
```

It should still call `this.loseLife()` when `this.ball.y > 660`.

```js
assert.match(code, /if\\s*\\(\\s*this\\.ball\\.y\\s*>\\s*660\\s*\\)\\s*this\\.loseLife\\(\\s*\\)/);
```
""",
    make_step41_seed(),
)

# Step 42.
step(
    42,
    "step-42",
    """
Add pause. At the top of the new `update`, check `JustDown(this.keys.P)` and early-return if paused. Initialize `this.paused` in `create`. Add a `togglePause()` method that pauses/resumes the physics world and shows/hides a "PAUSED" overlay.

Replace the start of `update`:

```js
const v = this.ball.body.velocity;
```

with:

```js
if (Phaser.Input.Keyboard.JustDown(this.keys.P)) this.togglePause();
if (this.paused) return;
const v = this.ball.body.velocity;
```

Add `this.paused = false;` to `create` (anywhere after the keys are wired). Then add the new method:

```js
togglePause() {
  this.paused = !this.paused;
  if (this.paused) {
    this.physics.world.pause();
    this.pauseText = this.add
      .text(240, 320, "PAUSED", {
        fontSize: "40px",
        color: "#ffffff"
      })
      .setOrigin(0.5)
      .setDepth(100);
  } else {
    this.physics.world.resume();
    if (this.pauseText) this.pauseText.destroy();
  }
}
```

`physics.world.pause()` halts all body integration; the rest of the scene (tweens, input) keeps running. `setDepth(100)` keeps the overlay above bricks and ball.
""",
    """
The `update` body should call `Phaser.Input.Keyboard.JustDown(this.keys.P)` and `this.togglePause()` on the first line.

```js
assert.match(code, /Phaser\\.Input\\.Keyboard\\.JustDown\\(\\s*this\\.keys\\.P\\s*\\)/);
assert.match(code, /update\\s*\\(\\s*\\)\\s*\\{[\\s\\S]*?this\\.togglePause\\(\\s*\\)/);
```

It should early-return when `this.paused` is true.

```js
assert.match(code, /if\\s*\\(\\s*this\\.paused\\s*\\)\\s*return/);
```

You should declare a `togglePause` method that pauses/resumes `physics.world` and toggles a "PAUSED" overlay.

```js
assert.match(code, /togglePause\\s*\\(\\s*\\)\\s*\\{[\\s\\S]*?this\\.physics\\.world\\.pause\\(\\s*\\)[\\s\\S]*?this\\.physics\\.world\\.resume\\(\\s*\\)/);
assert.match(code, /this\\.add[\\s\\S]*?[\"']PAUSED[\"'][\\s\\S]*?fontSize:\\s*[\"']40px[\"']/);
```
""",
    make_step42_seed(),
)

# Step 43.
step(
    43,
    "step-43",
    """
Replace `onBrickHit` once more to call a new `particleBurst` helper and shake the camera. Add the helper too.

Replace `onBrickHit` with:

```js
onBrickHit(ball, brick) {
  if (brick.hp === Infinity) return;
  brick.hp -= 1;
  if (brick.hp <= 0) {
    this.score += brick.points;
    this.particleBurst(brick.x, brick.y, brick.fillColor);
    brick.destroy();
    this.cameras.main.shake(80, 0.005);
    this.updateHud();
    const remaining = this.bricks
      .getChildren()
      .filter(b => b.hp !== Infinity).length;
    if (remaining === 0) this.advanceLevel();
  } else {
    brick.setFillStyle(COLORS[Phaser.Math.Clamp(brick.hp, 0, 5)]);
  }
}
```

Then add the helper after `togglePause`:

```js
particleBurst(x, y, color) {
  for (let i = 0; i < 6; i++) {
    const p = this.add.rectangle(x, y, 4, 4, color);
    const angle = Math.random() * Math.PI * 2;
    this.tweens.add({
      targets: p,
      x: x + Math.cos(angle) * 30,
      y: y + Math.sin(angle) * 30,
      alpha: 0,
      duration: 300,
      onComplete: () => p.destroy()
    });
  }
}
```

Six 4×4 rectangles, fanned out from the brick's center via random angles, fading to alpha `0` over `300 ms` while drifting outward `30 px`. `cameras.main.shake(duration, intensity)` adds the visceral micro-shake players feel rather than see.
""",
    """
The `onBrickHit` method should call `this.particleBurst(brick.x, brick.y, brick.fillColor)` and `this.cameras.main.shake(80, 0.005)` on destroy.

```js
assert.match(code, /this\\.particleBurst\\(\\s*brick\\.x\\s*,\\s*brick\\.y\\s*,\\s*brick\\.fillColor\\s*\\)/);
assert.match(code, /this\\.cameras\\.main\\.shake\\(\\s*80\\s*,\\s*0\\.005\\s*\\)/);
```

You should declare a `particleBurst(x, y, color)` method that spawns `6` rectangles tweening outward + fading.

```js
assert.match(code, /particleBurst\\s*\\(\\s*x\\s*,\\s*y\\s*,\\s*color\\s*\\)\\s*\\{[\\s\\S]*?for\\s*\\(\\s*let\\s+i\\s*=\\s*0\\s*;\\s*i\\s*<\\s*6\\s*;[\\s\\S]*?this\\.tweens\\.add\\(/);
assert.match(code, /alpha:\\s*0[\\s\\S]*?duration:\\s*300/);
```
""",
    make_step43_seed(),
)

# Step 44.
step(
    44,
    "step-44",
    """
Add a `ControlsScene` that draws virtual buttons on touch devices and emits action events to `MainScene`. Declare it before `const config`:

```js
class ControlsScene extends Phaser.Scene {
  constructor() {
    super("ControlsScene");
  }

  create() {
    const isMobile = Phaser.Device.os.android || Phaser.Device.os.iOS;
    if (!isMobile) return;

    let leftHeld = false;
    let rightHeld = false;

    const leftBtn = this.add
      .rectangle(60, 600, 80, 60, 0x556677, 0.5)
      .setInteractive();
    leftBtn.on("pointerdown", () => {
      leftHeld = true;
    });
    leftBtn.on("pointerup", () => {
      leftHeld = false;
    });
    leftBtn.on("pointerout", () => {
      leftHeld = false;
    });

    const rightBtn = this.add
      .rectangle(420, 600, 80, 60, 0x556677, 0.5)
      .setInteractive();
    rightBtn.on("pointerdown", () => {
      rightHeld = true;
    });
    rightBtn.on("pointerup", () => {
      rightHeld = false;
    });
    rightBtn.on("pointerout", () => {
      rightHeld = false;
    });

    const pauseBtn = this.add
      .rectangle(240, 600, 60, 40, 0x556677, 0.5)
      .setInteractive();
    pauseBtn.on("pointerdown", () => {
      this.scene.get("MainScene").events.emit("action:pause");
    });

    this.events.on("update", () => {
      const main = this.scene.get("MainScene").events;
      if (leftHeld) main.emit("action:left");
      if (rightHeld) main.emit("action:right");
    });
  }
}
```

The scene returns immediately on desktop (`!isMobile`) so it costs nothing there. On touch, three semi-transparent buttons appear at the bottom; held buttons emit `action:left` / `action:right` every frame, and the pause button fires once per tap.
""",
    """
You should declare a `ControlsScene` class extending `Phaser.Scene`.

```js
assert.match(code, /class\\s+ControlsScene\\s+extends\\s+Phaser\\.Scene/);
```

The constructor should call `super("ControlsScene")`.

```js
assert.match(code, /super\\(\\s*[\"']ControlsScene[\"']\\s*\\)/);
```

`create()` should early-return on non-mobile devices.

```js
assert.match(code, /Phaser\\.Device\\.os\\.android\\s*\\|\\|\\s*Phaser\\.Device\\.os\\.iOS/);
```

The held buttons should emit `action:left` / `action:right` on the `update` event.

```js
assert.match(code, /this\\.events\\.on\\(\\s*[\"']update[\"'][\\s\\S]*?action:left[\\s\\S]*?action:right/);
```

The pause button should emit `action:pause` to `MainScene`.

```js
assert.match(code, /this\\.scene\\.get\\(\\s*[\"']MainScene[\"']\\s*\\)\\.events\\.emit\\(\\s*[\"']action:pause[\"']\\s*\\)/);
```
""",
    make_step44_seed(),
)

# Step 45.
step(
    45,
    "step-45",
    """
Register `ControlsScene` in `config.scene` and launch it from `MainScene.create`.

Update the scene array:

```js
scene: [MainScene, GameOverScene, ControlsScene]
```

And, anywhere near the end of `MainScene.create`, add:

```js
this.scene.launch("ControlsScene");
```

`launch` runs the new scene **in parallel** with `MainScene` — both are drawing into the same canvas, with `ControlsScene` on top because it's last in the array.
""",
    """
The `config.scene` array should now contain `[MainScene, GameOverScene, ControlsScene]`.

```js
assert.match(code, /scene:\\s*\\[\\s*MainScene\\s*,\\s*GameOverScene\\s*,\\s*ControlsScene\\s*\\]/);
```

`MainScene.create` should call `this.scene.launch("ControlsScene")`.

```js
assert.match(code, /this\\.scene\\.launch\\(\\s*[\"']ControlsScene[\"']\\s*\\)/);
```
""",
    make_step45_seed(),
)

# Step 46.
step(
    46,
    "step-46",
    """
Wire `MainScene` to listen for the action events `ControlsScene` emits. Right after the `scene.launch` line, add three listeners:

```js
this.events.on("action:left", () => {
  this.targetX -= 30;
});
this.events.on("action:right", () => {
  this.targetX += 30;
});
this.events.on("action:pause", () => this.togglePause());
```

The held-button events fire every frame; each one nudges `targetX` by `30 px`. The lerp in `update` smooths the result. Pause toggles once per tap because the controls scene only emits it on `pointerdown`.
""",
    """
You should add three `this.events.on(...)` listeners for `action:left`, `action:right`, and `action:pause`.

```js
assert.match(code, /this\\.events\\.on\\(\\s*[\"']action:left[\"'][\\s\\S]*?this\\.targetX\\s*-=\\s*30/);
assert.match(code, /this\\.events\\.on\\(\\s*[\"']action:right[\"'][\\s\\S]*?this\\.targetX\\s*\\+=\\s*30/);
assert.match(code, /this\\.events\\.on\\(\\s*[\"']action:pause[\"']\\s*,\\s*\\(\\s*\\)\\s*=>\\s*this\\.togglePause\\(\\s*\\)\\s*\\)/);
```
""",
    make_step46_seed(),
)

# Step 47.
step(
    47,
    "step-47",
    """
Stop `ControlsScene` cleanly when the run ends. Update both `gameOver` and `advanceLevel`:

```js
gameOver() {
  this.persistHighScore();
  this.scene.stop("ControlsScene");
  this.scene.start("GameOverScene", { score: this.score, win: false });
}

advanceLevel() {
  this.persistHighScore();
  this.level += 1;
  if (this.level > LEVELS.length) {
    this.scene.stop("ControlsScene");
    this.scene.start("GameOverScene", { score: this.score, win: true });
    return;
  }
  this.scene.restart({
    level: this.level,
    score: this.score,
    lives: this.lives
  });
}
```

`scene.restart` re-runs the parent scene (and re-launches `ControlsScene` from `create`), but `scene.start` switches to a sibling. Without the `stop` calls the controls would linger on top of the game-over screen.
""",
    """
Both `gameOver` and the win path of `advanceLevel` should call `this.scene.stop("ControlsScene")` before transitioning.

```js
assert.match(code, /gameOver\\s*\\([\\s\\S]*?this\\.scene\\.stop\\(\\s*[\"']ControlsScene[\"']\\s*\\)[\\s\\S]*?this\\.scene\\.start\\(\\s*[\"']GameOverScene[\"'][\\s\\S]*?win:\\s*false/);
assert.match(code, /advanceLevel\\s*\\([\\s\\S]*?this\\.scene\\.stop\\(\\s*[\"']ControlsScene[\"']\\s*\\)[\\s\\S]*?this\\.scene\\.start\\(\\s*[\"']GameOverScene[\"'][\\s\\S]*?win:\\s*true/);
```
""",
    make_step47_seed(),
)

# Step 48.
step(
    48,
    "step-48",
    """
Switch the ball to an "attached to paddle" launch model. The ball should sit on top of the paddle until the player presses SPACE (or taps in the thumb zone), then launch.

Bump the create-time velocity block to:

```js
this.ball.body.setVelocity(0, 0);
this.ballAttached = true;
```

Update the pointerdown listener to also launch when attached:

```js
this.input.on("pointerdown", pointer => {
  if (pointer.y > 540) this.targetX = pointer.x;
  if (this.ballAttached) this.launchBall();
});
```

Add a `launchBall` method:

```js
launchBall() {
  this.ballAttached = false;
  const baseSpeed = 220 + (this.level - 1) * 12;
  this.ball.body.setVelocity(baseSpeed * 0.4, -baseSpeed);
}
```

Update the early section of `update` to follow the paddle when attached and listen for the launch action:

```js
if (this.ballAttached) {
  this.ball.x = this.paddle.x;
  this.ball.y = this.paddle.y - 16;
  if (this.isDown("launch")) this.launchBall();
  return;
}
const v = this.ball.body.velocity;
```

And update `loseLife` to **reattach** the ball instead of launching it:

```js
loseLife() {
  this.lives -= 1;
  this.updateHud();
  if (this.lives <= 0) {
    this.gameOver();
    return;
  }
  this.ball.body.setVelocity(0, 0);
  this.ballAttached = true;
}
```

Now the player gets a beat between deaths to reposition the paddle and decide when to relaunch.
""",
    """
The create-time block should now read `setVelocity(0, 0)` followed by `this.ballAttached = true`.

```js
assert.match(code, /this\\.ball\\.body\\.setVelocity\\(\\s*0\\s*,\\s*0\\s*\\)[\\s\\S]*?this\\.ballAttached\\s*=\\s*true/);
```

The `pointerdown` listener should call `this.launchBall()` when `this.ballAttached` is true.

```js
assert.match(code, /this\\.input\\.on\\(\\s*[\"']pointerdown[\"'][\\s\\S]*?if\\s*\\(\\s*this\\.ballAttached\\s*\\)\\s*this\\.launchBall\\(\\s*\\)/);
```

You should declare `launchBall()` and have `update`'s attached branch call it on `isDown("launch")`.

```js
assert.match(code, /launchBall\\s*\\(\\s*\\)\\s*\\{[\\s\\S]*?this\\.ballAttached\\s*=\\s*false[\\s\\S]*?baseSpeed[\\s\\S]*?this\\.ball\\.body\\.setVelocity/);
assert.match(code, /if\\s*\\(\\s*this\\.ballAttached\\s*\\)[\\s\\S]*?this\\.ball\\.x\\s*=\\s*this\\.paddle\\.x[\\s\\S]*?if\\s*\\(\\s*this\\.isDown\\(\\s*[\"']launch[\"']\\s*\\)\\s*\\)\\s*this\\.launchBall\\(\\s*\\)/);
```

`loseLife` should reattach instead of launching: `setVelocity(0, 0)` + `this.ballAttached = true`.

```js
assert.match(code, /loseLife\\s*\\([\\s\\S]*?this\\.ball\\.body\\.setVelocity\\(\\s*0\\s*,\\s*0\\s*\\)[\\s\\S]*?this\\.ballAttached\\s*=\\s*true/);
```
""",
    make_step48_seed(),
)

# Step 49.
step(
    49,
    "step-49",
    """
Add a "LEVEL N" overlay tween at the start of every level. Append to the end of `create` (after the `action:pause` listener):

```js
const overlay = this.add
  .text(240, 320, "LEVEL " + this.level, {
    fontSize: "40px",
    color: "#ffffff"
  })
  .setOrigin(0.5)
  .setDepth(100);
this.tweens.add({
  targets: overlay,
  alpha: 0,
  duration: 1200,
  onComplete: () => overlay.destroy()
});
```

The text appears, fades to invisible over 1.2 seconds, then `destroy()` removes it from the scene. The delay also gives the player a moment to spot the new layout before launching the ball.
""",
    """
You should add an overlay text reading `"LEVEL " + this.level` at `(240, 320)` with `fontSize: "40px"`.

```js
assert.match(code, /this\\.add[\\s\\S]*?text\\(\\s*240\\s*,\\s*320\\s*,\\s*[\"']LEVEL [\"']\\s*\\+\\s*this\\.level[\\s\\S]*?fontSize:\\s*[\"']40px[\"'][\\s\\S]*?setOrigin\\(\\s*0\\.5\\s*\\)[\\s\\S]*?setDepth\\(\\s*100\\s*\\)/);
```

You should tween its `alpha` to `0` over `1200` ms with `onComplete` destroying it.

```js
assert.match(code, /this\\.tweens\\.add\\(\\s*\\{[\\s\\S]*?targets:\\s*overlay[\\s\\S]*?alpha:\\s*0[\\s\\S]*?duration:\\s*1200[\\s\\S]*?onComplete:\\s*\\(\\s*\\)\\s*=>\\s*overlay\\.destroy\\(\\s*\\)/);
```
""",
    make_step49_seed(),
)

# Step 50.
step(
    50,
    "step-50",
    """
Final polish — a "tap to launch" / "press SPACE to launch" hint that disappears after the first launch. The hint text adapts to device automatically.

Append to the end of `create`:

```js
const isTouch = Phaser.Device.os.android || Phaser.Device.os.iOS;
this.launchHint = this.add
  .text(
    240,
    500,
    isTouch ? "Tap to launch" : "Press SPACE to launch",
    { fontSize: "14px", color: "#ffee44" }
  )
  .setOrigin(0.5);
```

And update `launchBall` to hide the hint after the first launch:

```js
launchBall() {
  this.ballAttached = false;
  const baseSpeed = 220 + (this.level - 1) * 12;
  this.ball.body.setVelocity(baseSpeed * 0.4, -baseSpeed);
  if (this.launchHint) this.launchHint.setVisible(false);
}
```

Reload one final time and play through. You've shipped a complete brick-breaker that runs identically on keyboard, mouse, and touch — five levels, multi-hit and indestructible bricks, lives, score, persistent high score, pause, particles, screen shake, level overlays, an attached-launch model, and a parallel virtual-controls scene that's invisible on desktop and fully usable on phones.

This same input + scene architecture powers the brick-breaker certification lab in the next sprint. Congratulations.
""",
    """
You should add a `this.launchHint` text whose contents depend on `Phaser.Device.os.android || Phaser.Device.os.iOS`.

```js
assert.match(code, /const\\s+isTouch\\s*=\\s*Phaser\\.Device\\.os\\.android\\s*\\|\\|\\s*Phaser\\.Device\\.os\\.iOS/);
assert.match(code, /this\\.launchHint\\s*=\\s*this\\.add[\\s\\S]*?text\\(\\s*240\\s*,\\s*500\\s*,\\s*isTouch\\s*\\?\\s*[\"']Tap to launch[\"']\\s*:\\s*[\"']Press SPACE to launch[\"']/);
```

The `launchBall` method should hide `this.launchHint` after launching.

```js
assert.match(code, /launchBall\\s*\\([\\s\\S]*?this\\.ball\\.body\\.setVelocity[\\s\\S]*?if\\s*\\(\\s*this\\.launchHint\\s*\\)\\s*this\\.launchHint\\.setVisible\\(\\s*false\\s*\\)/);
```
""",
    make_step50_seed(),
)


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for spec in STEPS:
        n = spec["num"]
        prev = solutions[n - 1] if n > 1 else ""
        seed = spec.get("seed_override")
        if seed is None:
            seed = spec["seed_fn"](prev)
        markers = seed.count("--fcc-editable-region--")
        if markers != 2:
            raise SystemExit(f"step {n} has {markers} markers, expected 2")
        solution_js = solutions[50] if n == 50 else None
        body = render_md(
            n,
            spec["dashed"],
            spec["description"],
            spec["hints"],
            seed,
            demo=spec["demo"],
            solution=solution_js,
        )
        path = OUT_DIR / (HEX_BASE.format(ID_OFFSET + n) + ".md")
        path.write_text(body, encoding="utf-8")
        print(f"wrote {path.name}")


if __name__ == "__main__":
    main()
