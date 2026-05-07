"""Generate workshop-side-scrolling-platformer step .md files (steps 1..55).

Each step wraps exactly one editable region (two ``--fcc-editable-region--``
markers) around the focused diff against the previous step's solution. The
canonical solutions live in a state-machine builder so the seed/solution
chain stays an invariant: ``seed[n+1]`` is ``solutions[n]`` with markers
inserted at the spot where step ``n+1`` makes its change.
"""

from pathlib import Path

OUT_DIR = (
    Path(__file__).resolve().parents[2]
    / "curriculum/challenges/english/blocks/workshop-side-scrolling-platformer"
)
HEX_BASE = "66faa400000000000000{:04x}"
ID_OFFSET = 0xC3  # step 1 -> 0xc4, step 55 -> 0xfa


HTML = """\
```html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Side-Scrolling Platformer with Phaser</title>
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
  image-rendering: pixelated;
}

```
"""


# ---------------------------------------------------------------------------
# State machine: each step mutates a State; render(State) -> full script.js.
# ---------------------------------------------------------------------------


class State:
    def __init__(self):
        self.top_consts = []  # list of decl strings
        self.extra_classes_post = []  # full class strings (after MainScene)
        self.preload_body = ""  # multi-line, indented 4 spaces
        self.create_body = ""
        self.update_body = ""
        self.methods = []  # list of method strings (indented 2 spaces)
        self.scene_array = ["MainScene"]
        self.gravity_y = 0


def render(state: State) -> str:
    out = []
    for c in state.top_consts:
        out.append(c)
        out.append("\n\n")
    out.append("class MainScene extends Phaser.Scene {\n")
    out.append('  constructor() {\n    super("MainScene");\n  }\n')
    out.append("\n  preload() {\n")
    out.append(state.preload_body)
    out.append("  }\n")
    out.append("\n  create() {\n")
    out.append(state.create_body)
    out.append("  }\n")
    out.append("\n  update(time, delta) {\n")
    out.append(state.update_body)
    out.append("  }\n")
    for m in state.methods:
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
    out.append("  height: 192,\n")
    out.append('  parent: "game-container",\n')
    out.append('  backgroundColor: "#1a1a2e",\n')
    out.append("  pixelArt: true,\n")
    out.append("  physics: {\n")
    out.append('    default: "arcade",\n')
    out.append(
        "    arcade: { gravity: { y: " + str(state.gravity_y) + " }, debug: false }\n"
    )
    out.append("  },\n")
    out.append("  scene: [" + ", ".join(state.scene_array) + "]\n")
    out.append("};\n\n")
    out.append("new Phaser.Game(config);")
    return "".join(out)


# ---------------------------------------------------------------------------
# Const & class fragment library.
# ---------------------------------------------------------------------------

SAVE_KEY_CONST = """\
const SAVE_KEY = "phaser-platformer-progress";"""

GAME_OVER_SCENE = """\
class GameOverScene extends Phaser.Scene {
  constructor() {
    super("GameOverScene");
  }

  create() {
    this.add.rectangle(240, 96, 480, 192, 0x000000, 0.85);
    this.add
      .text(240, 70, "GAME OVER", { fontSize: "20px", color: "#ff6644" })
      .setOrigin(0.5);
    this.add
      .text(240, 110, "Press R to retry", { fontSize: "10px", color: "#ffee44" })
      .setOrigin(0.5);
    this.input.keyboard.once("keydown-R", () => {
      this.scene.start("MainScene");
    });
  }
}"""

PAUSE_SCENE = """\
class PauseScene extends Phaser.Scene {
  constructor() {
    super("PauseScene");
  }

  create() {
    this.add.rectangle(240, 96, 480, 192, 0x000000, 0.6);
    this.add
      .text(240, 80, "PAUSED", { fontSize: "20px", color: "#ffffff" })
      .setOrigin(0.5);
    this.add
      .text(240, 110, "Press P to resume", { fontSize: "10px", color: "#ffee44" })
      .setOrigin(0.5);
    this.input.keyboard.once("keydown-P", () => {
      this.scene.stop("PauseScene");
      this.scene.resume("MainScene");
    });
  }
}"""

LEVEL_SELECT_SCENE = """\
class LevelSelectScene extends Phaser.Scene {
  constructor() {
    super("LevelSelectScene");
  }

  create() {
    this.add.rectangle(240, 96, 480, 192, 0x111122);
    this.add
      .text(240, 60, "LEVEL SELECT", { fontSize: "16px", color: "#ffffff" })
      .setOrigin(0.5);
    const completed = localStorage.getItem(SAVE_KEY + ":complete") === "1";
    const label = completed ? "Level 1 [CLEAR]" : "Level 1";
    this.add
      .text(240, 100, label, { fontSize: "12px", color: "#44ee88" })
      .setOrigin(0.5);
    this.add
      .text(240, 130, "Press ENTER to play", { fontSize: "10px", color: "#ffee44" })
      .setOrigin(0.5);
    this.input.keyboard.once("keydown-ENTER", () => {
      this.scene.start("MainScene");
    });
  }
}"""


# ---------------------------------------------------------------------------
# Build solutions s1..s55 by mutating state at each step.
# ---------------------------------------------------------------------------

solutions = [None]
state = State()


def snap():
    solutions.append(render(state))


# Step 1 - empty MainScene shell with preload + create + update; gravity 800.
state.gravity_y = 800
snap()  # solutions[1]

# Step 2 - preload the hero spritesheet.
PRELOAD_SPRITESHEET = (
    '    this.load.spritesheet(\n'
    '      "hero",\n'
    '      "/curriculum-assets/phaser/spritesheets/hero-walk.png",\n'
    '      { frameWidth: 16, frameHeight: 16 }\n'
    '    );\n'
)
state.preload_body += PRELOAD_SPRITESHEET
snap()  # solutions[2]

# Step 3 - static group with three placeholder rectangles.
PLATFORMS_INIT_BLOCK = (
    "    this.platforms = this.physics.add.staticGroup();\n"
    "    this.platforms.add(this.add.rectangle(80, 160, 64, 16, 0x66ddff));\n"
    "    this.platforms.add(this.add.rectangle(240, 120, 64, 16, 0x66ddff));\n"
    "    this.platforms.add(this.add.rectangle(400, 80, 64, 16, 0x66ddff));\n"
)
state.create_body += PLATFORMS_INIT_BLOCK
snap()  # solutions[3]

# Step 4 - player sprite + collide world bounds.
PLAYER_INIT_BLOCK = (
    '    this.player = this.physics.add.sprite(40, 60, "hero", 12);\n'
    "    this.player.setCollideWorldBounds(true);\n"
)
state.create_body += PLAYER_INIT_BLOCK
snap()  # solutions[4]

# Step 5 - collider between player and platforms.
PLAYER_PLATFORMS_COLLIDER = (
    "    this.physics.add.collider(this.player, this.platforms);\n"
)
state.create_body += PLAYER_PLATFORMS_COLLIDER
snap()  # solutions[5]

# Step 6 - cursor keys + horizontal movement in update.
CURSORS_LINE = "    this.cursors = this.input.keyboard.createCursorKeys();\n"
state.create_body += CURSORS_LINE
HORIZONTAL_UPDATE_BLOCK = (
    "    if (this.cursors.left.isDown) {\n"
    "      this.player.setVelocityX(-140);\n"
    "    } else if (this.cursors.right.isDown) {\n"
    "      this.player.setVelocityX(140);\n"
    "    } else {\n"
    "      this.player.setVelocityX(0);\n"
    "    }\n"
)
state.update_body += HORIZONTAL_UPDATE_BLOCK
snap()  # solutions[6]

# Step 7 - naive jump on UP when touching down.
NAIVE_JUMP_BLOCK = (
    "    if (\n"
    "      Phaser.Input.Keyboard.JustDown(this.cursors.up) &&\n"
    "      this.player.body.touching.down\n"
    "    ) {\n"
    "      this.player.setVelocityY(-310);\n"
    "    }\n"
)
state.update_body += NAIVE_JUMP_BLOCK
snap()  # solutions[7]

# Step 8 - walk animation definition.
WALK_ANIM_BLOCK = (
    '    this.anims.create({\n'
    '      key: "walk",\n'
    '      frames: this.anims.generateFrameNumbers("hero", { start: 12, end: 15 }),\n'
    '      frameRate: 8,\n'
    '      repeat: -1\n'
    '    });\n'
)
state.create_body += WALK_ANIM_BLOCK
snap()  # solutions[8]

# Step 9 - drive walk anim and flipX from velocity in update.
ANIM_DRIVER_BLOCK = (
    "    const vx = this.player.body.velocity.x;\n"
    "    if (Math.abs(vx) > 1) {\n"
    '      this.player.anims.play("walk", true);\n'
    "      this.player.setFlipX(vx < 0);\n"
    "    } else {\n"
    "      this.player.anims.stop();\n"
    "      this.player.setFrame(12);\n"
    "    }\n"
)
state.update_body += ANIM_DRIVER_BLOCK
snap()  # solutions[9]

# Step 10 - coin static group + 3 coins + collect overlap.
COINS_INIT_BLOCK = (
    "    this.coins = this.physics.add.staticGroup();\n"
    "    [\n"
    "      [120, 140],\n"
    "      [260, 100],\n"
    "      [420, 60]\n"
    "    ].forEach(([x, y]) => {\n"
    "      this.coins.add(this.add.rectangle(x, y, 8, 8, 0xffee44));\n"
    "    });\n"
    "    this.score = 0;\n"
    "    this.physics.add.overlap(\n"
    "      this.player,\n"
    "      this.coins,\n"
    "      (player, coin) => {\n"
    "        coin.destroy();\n"
    "        this.score += 1;\n"
    "      },\n"
    "      null,\n"
    "      this\n"
    "    );\n"
)
state.create_body += COINS_INIT_BLOCK
snap()  # solutions[10]

# Step 11 - HP and HUD with per-frame refresh in update.
HP_HUD_INIT_BLOCK = (
    "    this.hp = 3;\n"
    '    this.hud = this.add.text(8, 8, "", {\n'
    '      fontSize: "10px",\n'
    '      color: "#ffffff"\n'
    "    });\n"
)
state.create_body += HP_HUD_INIT_BLOCK
HUD_UPDATE_LINE = (
    '    this.hud.setText("HP " + this.hp + "  COINS " + this.score);\n'
)
state.update_body += HUD_UPDATE_LINE
snap()  # solutions[11]

# Step 12 - replace 3 manual platforms with a 30-tile-wide LEVEL.
LEVEL_BUILDER_BLOCK = (
    "    const LEVEL = [\n"
    "      [0, 192, 176],\n"
    "      [256, 480, 176],\n"
    "      [560, 768, 176],\n"
    "      [832, 1280, 176],\n"
    "      [96, 192, 128],\n"
    "      [256, 320, 96],\n"
    "      [384, 480, 128],\n"
    "      [560, 624, 80],\n"
    "      [720, 832, 128],\n"
    "      [928, 1056, 96],\n"
    "      [1136, 1216, 64]\n"
    "    ];\n"
    "    LEVEL.forEach(([xs, xe, y]) => {\n"
    "      for (let x = xs; x < xe; x += 16) {\n"
    "        this.platforms.add(this.add.rectangle(x + 8, y, 16, 16, 0x66ddff));\n"
    "      }\n"
    "    });\n"
)
THREE_MANUAL_PLATFORMS = (
    "    this.platforms.add(this.add.rectangle(80, 160, 64, 16, 0x66ddff));\n"
    "    this.platforms.add(this.add.rectangle(240, 120, 64, 16, 0x66ddff));\n"
    "    this.platforms.add(this.add.rectangle(400, 80, 64, 16, 0x66ddff));\n"
)
state.create_body = state.create_body.replace(
    THREE_MANUAL_PLATFORMS, LEVEL_BUILDER_BLOCK
)
snap()  # solutions[12]

# Step 13 - camera follow.
CAMERA_FOLLOW_LINE = (
    "    this.cameras.main.startFollow(this.player, true, 0.1, 0.1);\n"
)
state.create_body += CAMERA_FOLLOW_LINE
snap()  # solutions[13]

# Step 14 - world + camera bounds inserted before camera follow.
BOUNDS_BLOCK = (
    "    this.physics.world.setBounds(0, 0, 1280, 192);\n"
    "    this.cameras.main.setBounds(0, 0, 1280, 192);\n"
)
state.create_body = state.create_body.replace(
    CAMERA_FOLLOW_LINE, BOUNDS_BLOCK + CAMERA_FOLLOW_LINE
)
snap()  # solutions[14]

# Step 15 - variable jump height: shorten on early UP release.
VAR_JUMP_BLOCK = (
    "    if (\n"
    "      Phaser.Input.Keyboard.JustUp(this.cursors.up) &&\n"
    "      this.player.body.velocity.y < -120\n"
    "    ) {\n"
    "      this.player.setVelocityY(-120);\n"
    "    }\n"
)
state.update_body += VAR_JUMP_BLOCK
snap()  # solutions[15]

# Step 16 - coyote time: track lastGroundedAt + replace naive jump check.
COYOTE_UPDATE_BLOCK = (
    "    const onGround =\n"
    "      this.player.body.touching.down || this.player.body.blocked.down;\n"
    "    if (onGround) this.lastGroundedAt = time;\n"
)
COYOTE_ONLY_CHECK = (
    "    if (\n"
    "      Phaser.Input.Keyboard.JustDown(this.cursors.up) &&\n"
    "      time - this.lastGroundedAt < 120\n"
    "    ) {\n"
    "      this.player.setVelocityY(-310);\n"
    "    }\n"
)
state.update_body = state.update_body.replace(
    NAIVE_JUMP_BLOCK, COYOTE_UPDATE_BLOCK + COYOTE_ONLY_CHECK
)
snap()  # solutions[16]

# Step 17 - jump buffering.
COYOTE_BUFFER_CHECK = (
    "    if (Phaser.Input.Keyboard.JustDown(this.cursors.up)) {\n"
    "      this.lastJumpPressedAt = time;\n"
    "    }\n"
    "    const canJump = time - this.lastGroundedAt < 120;\n"
    "    const buffered = time - this.lastJumpPressedAt < 120;\n"
    "    if (canJump && buffered) {\n"
    "      this.player.setVelocityY(-310);\n"
    "    }\n"
)
state.update_body = state.update_body.replace(
    COYOTE_ONLY_CHECK, COYOTE_BUFFER_CHECK
)
snap()  # solutions[17]

# Step 18 - clear timestamps right after firing the jump.
COYOTE_BUFFER_CHECK_RESET = (
    "    if (Phaser.Input.Keyboard.JustDown(this.cursors.up)) {\n"
    "      this.lastJumpPressedAt = time;\n"
    "    }\n"
    "    const canJump = time - this.lastGroundedAt < 120;\n"
    "    const buffered = time - this.lastJumpPressedAt < 120;\n"
    "    if (canJump && buffered) {\n"
    "      this.player.setVelocityY(-310);\n"
    "      this.lastGroundedAt = -Infinity;\n"
    "      this.lastJumpPressedAt = -Infinity;\n"
    "    }\n"
)
state.update_body = state.update_body.replace(
    COYOTE_BUFFER_CHECK, COYOTE_BUFFER_CHECK_RESET
)
snap()  # solutions[18]

# Step 19 - double-jump on second JustDown while airborne.
DOUBLE_JUMP_BLOCK = (
    "    if (\n"
    "      Phaser.Input.Keyboard.JustDown(this.cursors.up) &&\n"
    "      !canJump &&\n"
    "      this.canDoubleJump\n"
    "    ) {\n"
    "      this.player.setVelocityY(-260);\n"
    "      this.canDoubleJump = false;\n"
    "    }\n"
)
state.update_body += DOUBLE_JUMP_BLOCK
snap()  # solutions[19]

# Step 20 - replenish double-jump on landing.
GROUNDED_LINE = "    if (onGround) this.lastGroundedAt = time;\n"
RESET_DOUBLE_JUMP_LINE = "    if (onGround) this.canDoubleJump = true;\n"
state.update_body = state.update_body.replace(
    GROUNDED_LINE, GROUNDED_LINE + RESET_DOUBLE_JUMP_LINE
)
snap()  # solutions[20]

# Step 21 - moving platform with tween.
MOVING_PLATFORM_BLOCK = (
    "    this.movingPlatforms = this.physics.add.group({\n"
    "      allowGravity: false,\n"
    "      immovable: true\n"
    "    });\n"
    "    const moving = this.add.rectangle(240, 140, 48, 8, 0xffaa44);\n"
    "    this.movingPlatforms.add(moving);\n"
    "    this.tweens.add({\n"
    "      targets: moving,\n"
    "      x: 320,\n"
    "      duration: 1500,\n"
    "      yoyo: true,\n"
    "      repeat: -1,\n"
    '      ease: "Sine.easeInOut"\n'
    "    });\n"
    "    this.physics.add.collider(this.player, this.movingPlatforms);\n"
)
state.create_body += MOVING_PLATFORM_BLOCK
snap()  # solutions[21]

# Step 22 - parent-on-stand using body.deltaX().
RIDE_UPDATE_BLOCK = (
    "    this.movingPlatforms.getChildren().forEach((plat) => {\n"
    "      if (\n"
    "        this.player.body.touching.down &&\n"
    "        this.player.y < plat.y &&\n"
    "        Math.abs(this.player.x - plat.x) < plat.width / 2 + 8\n"
    "      ) {\n"
    "        this.player.x += plat.body.deltaX();\n"
    "      }\n"
    "    });\n"
)
state.update_body += RIDE_UPDATE_BLOCK
snap()  # solutions[22]

# Step 23 - spike static group + damage overlap + takeDamage method.
SPIKES_INIT_BLOCK = (
    "    this.spikes = this.physics.add.staticGroup();\n"
    "    [[400, 168], [800, 168], [1024, 168]].forEach(([x, y]) => {\n"
    "      this.spikes.add(this.add.rectangle(x, y, 16, 8, 0xff4444));\n"
    "    });\n"
    "    this.physics.add.overlap(\n"
    "      this.player,\n"
    "      this.spikes,\n"
    "      () => this.takeDamage(),\n"
    "      null,\n"
    "      this\n"
    "    );\n"
)
state.create_body += SPIKES_INIT_BLOCK
TAKE_DAMAGE_BASIC = (
    "  takeDamage() {\n"
    "    this.hp -= 1;\n"
    "  }\n"
)
state.methods.append(TAKE_DAMAGE_BASIC)
snap()  # solutions[23]

# Step 24 - invincibility frames.
TAKE_DAMAGE_IFRAMES = (
    "  takeDamage() {\n"
    "    if (this.time.now < this.invincibleUntil) return;\n"
    "    this.invincibleUntil = this.time.now + 800;\n"
    "    this.hp -= 1;\n"
    "  }\n"
)
state.methods = [
    TAKE_DAMAGE_IFRAMES if m is TAKE_DAMAGE_BASIC else m for m in state.methods
]
snap()  # solutions[24]

# Step 25 - tween player tint to red on damage.
TAKE_DAMAGE_TINT = (
    "  takeDamage() {\n"
    "    if (this.time.now < this.invincibleUntil) return;\n"
    "    this.invincibleUntil = this.time.now + 800;\n"
    "    this.hp -= 1;\n"
    "    this.player.setTint(0xff4444);\n"
    "    this.time.delayedCall(150, () => this.player.clearTint());\n"
    "  }\n"
)
state.methods = [
    TAKE_DAMAGE_TINT if m is TAKE_DAMAGE_IFRAMES else m for m in state.methods
]
snap()  # solutions[25]

# Step 26 - camera flash on damage.
TAKE_DAMAGE_FLASH = (
    "  takeDamage() {\n"
    "    if (this.time.now < this.invincibleUntil) return;\n"
    "    this.invincibleUntil = this.time.now + 800;\n"
    "    this.hp -= 1;\n"
    "    this.player.setTint(0xff4444);\n"
    "    this.time.delayedCall(150, () => this.player.clearTint());\n"
    "    this.cameras.main.flash(150, 200, 50, 50);\n"
    "  }\n"
)
state.methods = [
    TAKE_DAMAGE_FLASH if m is TAKE_DAMAGE_TINT else m for m in state.methods
]
snap()  # solutions[26]

# Step 27 - patrolling enemy.
PATROL_ENEMY_BLOCK = (
    "    this.enemies = this.physics.add.group();\n"
    "    [{ x: 320, y: 160 }, { x: 700, y: 64 }].forEach(({ x, y }) => {\n"
    "      const e = this.add.rectangle(x, y, 12, 12, 0xff66aa);\n"
    "      this.enemies.add(e);\n"
    "      e.body.setVelocityX(-40);\n"
    "      e.body.setBounce(1, 0);\n"
    "    });\n"
    "    this.physics.add.collider(this.enemies, this.platforms);\n"
)
state.create_body += PATROL_ENEMY_BLOCK
PATROL_UPDATE_BLOCK = (
    "    this.enemies.getChildren().forEach((e) => {\n"
    "      if (e.body.blocked.left) e.body.setVelocityX(40);\n"
    "      else if (e.body.blocked.right) e.body.setVelocityX(-40);\n"
    "    });\n"
)
state.update_body += PATROL_UPDATE_BLOCK
snap()  # solutions[27]

# Step 28 - stomp from above + handleEnemyContact method.
ENEMY_OVERLAP_LINE = (
    "    this.physics.add.overlap(\n"
    "      this.player,\n"
    "      this.enemies,\n"
    "      this.handleEnemyContact,\n"
    "      null,\n"
    "      this\n"
    "    );\n"
)
state.create_body += ENEMY_OVERLAP_LINE
HANDLE_ENEMY_STOMP_ONLY = (
    "  handleEnemyContact(player, enemy) {\n"
    "    if (player.body.bottom <= enemy.body.top + 4 && player.body.velocity.y > 0) {\n"
    "      enemy.destroy();\n"
    "      player.setVelocityY(-220);\n"
    "    }\n"
    "  }\n"
)
state.methods.append(HANDLE_ENEMY_STOMP_ONLY)
snap()  # solutions[28]

# Step 29 - side-touch -> takeDamage.
HANDLE_ENEMY_FULL = (
    "  handleEnemyContact(player, enemy) {\n"
    "    if (player.body.bottom <= enemy.body.top + 4 && player.body.velocity.y > 0) {\n"
    "      enemy.destroy();\n"
    "      player.setVelocityY(-220);\n"
    "    } else {\n"
    "      this.takeDamage();\n"
    "    }\n"
    "  }\n"
)
state.methods = [
    HANDLE_ENEMY_FULL if m is HANDLE_ENEMY_STOMP_ONLY else m for m in state.methods
]
snap()  # solutions[29]

# Step 30 - flying enemy with sine-wave Y motion.
FLYING_ENEMY_BLOCK = (
    "    this.flyingEnemies = this.physics.add.group({\n"
    "      allowGravity: false\n"
    "    });\n"
    "    const flyer = this.add.circle(900, 96, 8, 0xaa66ff);\n"
    "    this.flyingEnemies.add(flyer);\n"
    "    flyer.baseY = 96;\n"
    "    this.physics.add.overlap(\n"
    "      this.player,\n"
    "      this.flyingEnemies,\n"
    "      this.handleEnemyContact,\n"
    "      null,\n"
    "      this\n"
    "    );\n"
)
state.create_body += FLYING_ENEMY_BLOCK
FLYING_UPDATE_BLOCK = (
    "    this.flyingEnemies.getChildren().forEach((f) => {\n"
    "      f.y = f.baseY + Math.sin(time / 300) * 24;\n"
    "    });\n"
)
state.update_body += FLYING_UPDATE_BLOCK
snap()  # solutions[30]

# Step 31 - death state: HP 0 -> gameOver method.
TAKE_DAMAGE_DEATH = (
    "  takeDamage() {\n"
    "    if (this.time.now < this.invincibleUntil) return;\n"
    "    this.invincibleUntil = this.time.now + 800;\n"
    "    this.hp -= 1;\n"
    "    this.player.setTint(0xff4444);\n"
    "    this.time.delayedCall(150, () => this.player.clearTint());\n"
    "    this.cameras.main.flash(150, 200, 50, 50);\n"
    "    if (this.hp <= 0) this.gameOver();\n"
    "  }\n"
)
state.methods = [
    TAKE_DAMAGE_DEATH if m is TAKE_DAMAGE_FLASH else m for m in state.methods
]
GAME_OVER_METHOD = (
    "  gameOver() {\n"
    '    this.scene.start("GameOverScene");\n'
    "  }\n"
)
state.methods.append(GAME_OVER_METHOD)
snap()  # solutions[31]

# Step 32 - register GameOverScene class + add to scene array.
state.extra_classes_post.append(GAME_OVER_SCENE)
state.scene_array.append("GameOverScene")
snap()  # solutions[32]

# Step 33 - one-way platform with process callback.
ONE_WAY_BLOCK = (
    "    this.oneWayPlatforms = this.physics.add.staticGroup();\n"
    "    [[600, 144], [950, 144]].forEach(([x, y]) => {\n"
    "      this.oneWayPlatforms.add(\n"
    "        this.add.rectangle(x, y, 64, 4, 0xaaffaa)\n"
    "      );\n"
    "    });\n"
    "    this.physics.add.collider(\n"
    "      this.player,\n"
    "      this.oneWayPlatforms,\n"
    "      null,\n"
    "      (player, platform) => {\n"
    "        if (this.cursors.down.isDown) return false;\n"
    "        return player.body.bottom <= platform.body.top + 2;\n"
    "      },\n"
    "      this\n"
    "    );\n"
)
state.create_body += ONE_WAY_BLOCK
snap()  # solutions[33]

# Step 34 - checkpoint pickup.
CHECKPOINT_BLOCK = (
    "    this.spawnPoint = { x: 40, y: 60 };\n"
    "    this.checkpoints = this.physics.add.staticGroup();\n"
    "    this.checkpoints.add(\n"
    "      this.add.rectangle(640, 160, 8, 16, 0x44eeff)\n"
    "    );\n"
    "    this.physics.add.overlap(\n"
    "      this.player,\n"
    "      this.checkpoints,\n"
    "      (player, cp) => {\n"
    "        cp.setFillStyle(0x88ffaa);\n"
    "        this.spawnPoint = { x: cp.x, y: cp.y - 16 };\n"
    "      },\n"
    "      null,\n"
    "      this\n"
    "    );\n"
)
state.create_body += CHECKPOINT_BLOCK
snap()  # solutions[34]

# Step 35 - key pickup.
KEY_BLOCK = (
    "    this.hasKey = false;\n"
    "    this.key = this.add.rectangle(1120, 48, 10, 10, 0xffdd00);\n"
    "    this.physics.add.existing(this.key, true);\n"
    "    this.physics.add.overlap(\n"
    "      this.player,\n"
    "      this.key,\n"
    "      () => {\n"
    "        this.key.destroy();\n"
    "        this.hasKey = true;\n"
    "      },\n"
    "      null,\n"
    "      this\n"
    "    );\n"
)
state.create_body += KEY_BLOCK
snap()  # solutions[35]

# Step 36 - goal flag + winLevel method.
GOAL_BLOCK = (
    "    this.goal = this.add.rectangle(1240, 152, 12, 32, 0x44ee88);\n"
    "    this.physics.add.existing(this.goal, true);\n"
    "    this.physics.add.overlap(\n"
    "      this.player,\n"
    "      this.goal,\n"
    "      () => {\n"
    "        if (this.hasKey) this.winLevel();\n"
    "      },\n"
    "      null,\n"
    "      this\n"
    "    );\n"
)
state.create_body += GOAL_BLOCK
WIN_LEVEL_BASIC = (
    "  winLevel() {\n"
    "    if (this.won) return;\n"
    "    this.won = true;\n"
    "    this.physics.pause();\n"
    "    this.add\n"
    '      .text(this.player.x, 80, "LEVEL COMPLETE", {\n'
    '        fontSize: "16px",\n'
    '        color: "#44ee88"\n'
    "      })\n"
    "      .setOrigin(0.5);\n"
    "  }\n"
)
state.methods.append(WIN_LEVEL_BASIC)
snap()  # solutions[36]

# Step 37 - persist completion to localStorage.
WIN_LEVEL_PERSIST = (
    "  winLevel() {\n"
    "    if (this.won) return;\n"
    "    this.won = true;\n"
    "    this.physics.pause();\n"
    '    localStorage.setItem("phaser-platformer-progress:complete", "1");\n'
    "    this.add\n"
    '      .text(this.player.x, 80, "LEVEL COMPLETE", {\n'
    '        fontSize: "16px",\n'
    '        color: "#44ee88"\n'
    "      })\n"
    "      .setOrigin(0.5);\n"
    "  }\n"
)
state.methods = [
    WIN_LEVEL_PERSIST if m is WIN_LEVEL_BASIC else m for m in state.methods
]
snap()  # solutions[37]

# Step 38 - best time tracking and display.
BEST_TIME_INIT_BLOCK = (
    "    this.startTime = this.time.now;\n"
    "    this.bestTime = parseFloat(\n"
    '      localStorage.getItem("phaser-platformer-progress:best") || "Infinity"\n'
    "    );\n"
)
state.create_body += BEST_TIME_INIT_BLOCK
WIN_LEVEL_BEST_TIME = (
    "  winLevel() {\n"
    "    if (this.won) return;\n"
    "    this.won = true;\n"
    "    this.physics.pause();\n"
    '    localStorage.setItem("phaser-platformer-progress:complete", "1");\n'
    "    const elapsed = (this.time.now - this.startTime) / 1000;\n"
    "    if (elapsed < this.bestTime) {\n"
    "      this.bestTime = elapsed;\n"
    "      localStorage.setItem(\n"
    '        "phaser-platformer-progress:best",\n'
    "        elapsed.toFixed(2)\n"
    "      );\n"
    "    }\n"
    "    this.add\n"
    "      .text(\n"
    "        this.player.x,\n"
    "        80,\n"
    '        "LEVEL COMPLETE\\n" + elapsed.toFixed(2) + "s\\nbest " +\n'
    '          (this.bestTime === Infinity ? "--" : this.bestTime.toFixed(2)),\n'
    '        { fontSize: "12px", color: "#44ee88", align: "center" }\n'
    "      )\n"
    "      .setOrigin(0.5);\n"
    "  }\n"
)
state.methods = [
    WIN_LEVEL_BEST_TIME if m is WIN_LEVEL_PERSIST else m for m in state.methods
]
snap()  # solutions[38]

# Step 39 - screen shake on big landing.
LANDING_SHAKE_BLOCK = (
    "    if (onGround && this.prevVelocityY > 280) {\n"
    "      this.cameras.main.shake(120, 0.005);\n"
    "    }\n"
    "    this.prevVelocityY = this.player.body.velocity.y;\n"
)
state.update_body += LANDING_SHAKE_BLOCK
snap()  # solutions[39]

# Step 40 - dust particle burst on landing.
DUST_EMITTER_INIT = (
    '    this.dust = this.add.particles(0, 0, "hero", {\n'
    "      frame: 12,\n"
    "      speed: { min: 40, max: 80 },\n"
    "      scale: { start: 0.4, end: 0 },\n"
    "      lifespan: 200,\n"
    "      quantity: 4,\n"
    "      emitting: false\n"
    "    });\n"
)
state.create_body += DUST_EMITTER_INIT
LANDING_SHAKE_BLOCK_NEW = (
    "    if (onGround && this.prevVelocityY > 280) {\n"
    "      this.cameras.main.shake(120, 0.005);\n"
    "      this.dust.emitParticleAt(this.player.x, this.player.y + 8);\n"
    "    }\n"
    "    this.prevVelocityY = this.player.body.velocity.y;\n"
)
state.update_body = state.update_body.replace(
    LANDING_SHAKE_BLOCK, LANDING_SHAKE_BLOCK_NEW
)
snap()  # solutions[40]

# Step 41 - coin pickup tween.
COIN_OVERLAP_OLD = (
    "    this.physics.add.overlap(\n"
    "      this.player,\n"
    "      this.coins,\n"
    "      (player, coin) => {\n"
    "        coin.destroy();\n"
    "        this.score += 1;\n"
    "      },\n"
    "      null,\n"
    "      this\n"
    "    );\n"
)
COIN_OVERLAP_TWEEN = (
    "    this.physics.add.overlap(\n"
    "      this.player,\n"
    "      this.coins,\n"
    "      (player, coin) => {\n"
    "        this.tweens.add({\n"
    "          targets: coin,\n"
    "          scale: 2,\n"
    "          alpha: 0,\n"
    "          duration: 150,\n"
    "          onComplete: () => coin.destroy()\n"
    "        });\n"
    "        this.score += 1;\n"
    "      },\n"
    "      null,\n"
    "      this\n"
    "    );\n"
)
state.create_body = state.create_body.replace(COIN_OVERLAP_OLD, COIN_OVERLAP_TWEEN)
snap()  # solutions[41]

# Step 42 - wall-jump power-up pickup.
POWER_UP_BLOCK = (
    "    this.hasWallJumpPower = false;\n"
    "    this.wallPower = this.add.rectangle(880, 160, 10, 10, 0x88ffff);\n"
    "    this.physics.add.existing(this.wallPower, true);\n"
    "    this.physics.add.overlap(\n"
    "      this.player,\n"
    "      this.wallPower,\n"
    "      () => {\n"
    "        this.wallPower.destroy();\n"
    "        this.hasWallJumpPower = true;\n"
    "      },\n"
    "      null,\n"
    "      this\n"
    "    );\n"
)
state.create_body += POWER_UP_BLOCK
snap()  # solutions[42]

# Step 43 - wall slide.
WALL_SLIDE_BLOCK = (
    "    const pressingWall =\n"
    "      (this.cursors.left.isDown && this.player.body.touching.left) ||\n"
    "      (this.cursors.right.isDown && this.player.body.touching.right);\n"
    "    this.wallSliding =\n"
    "      this.hasWallJumpPower &&\n"
    "      pressingWall &&\n"
    "      !onGround &&\n"
    "      this.player.body.velocity.y > 0;\n"
    "    if (this.wallSliding) {\n"
    "      this.player.body.velocity.y = Math.min(\n"
    "        this.player.body.velocity.y,\n"
    "        60\n"
    "      );\n"
    "    }\n"
)
state.update_body += WALL_SLIDE_BLOCK
snap()  # solutions[43]

# Step 44 - wall jump.
WALL_JUMP_BLOCK = (
    "    if (\n"
    "      Phaser.Input.Keyboard.JustDown(this.cursors.up) &&\n"
    "      this.wallSliding\n"
    "    ) {\n"
    "      const dir = this.player.body.touching.left ? 1 : -1;\n"
    "      this.player.setVelocityX(200 * dir);\n"
    "      this.player.setVelocityY(-260);\n"
    "    }\n"
)
state.update_body += WALL_JUMP_BLOCK
snap()  # solutions[44]

# Step 45 - audio stub (chapter 7 fills in real audio).
AUDIO_STUB_LINE = (
    "    this.playSfx = (name) => {};\n"
)
state.create_body += AUDIO_STUB_LINE
snap()  # solutions[45]

# Step 46 - pause scene + P key handler.
PAUSE_BIND_BLOCK = (
    '    this.input.keyboard.on("keydown-P", () => {\n'
    "      this.scene.pause();\n"
    '      this.scene.launch("PauseScene");\n'
    "    });\n"
)
state.create_body += PAUSE_BIND_BLOCK
state.extra_classes_post.append(PAUSE_SCENE)
state.scene_array.append("PauseScene")
snap()  # solutions[46]

# Step 47 - level select stub scene + register + SAVE_KEY const.
state.top_consts.append(SAVE_KEY_CONST)
state.extra_classes_post.append(LEVEL_SELECT_SCENE)
state.scene_array.append("LevelSelectScene")
snap()  # solutions[47]

# Step 48 - F1 debug toggle.
DEBUG_TOGGLE_BLOCK = (
    '    this.input.keyboard.on("keydown-F1", () => {\n'
    "      const w = this.physics.world;\n"
    "      w.drawDebug = !w.drawDebug;\n"
    "      if (!w.drawDebug) w.debugGraphic.clear();\n"
    "    });\n"
)
state.create_body += DEBUG_TOGGLE_BLOCK
snap()  # solutions[48]

# Step 49 - ladders override gravity while overlapping.
LADDER_BLOCK = (
    "    this.ladders = this.physics.add.staticGroup();\n"
    "    this.ladders.add(\n"
    "      this.add.rectangle(496, 144, 8, 64, 0xddaa66, 0.6)\n"
    "    );\n"
    "    this.onLadder = false;\n"
    "    this.physics.add.overlap(\n"
    "      this.player,\n"
    "      this.ladders,\n"
    "      () => {\n"
    "        this.onLadder = true;\n"
    "      },\n"
    "      null,\n"
    "      this\n"
    "    );\n"
)
state.create_body += LADDER_BLOCK
LADDER_UPDATE_BLOCK = (
    "    if (this.onLadder) {\n"
    "      this.player.body.allowGravity = false;\n"
    "      if (this.cursors.up.isDown) this.player.setVelocityY(-80);\n"
    "      else if (this.cursors.down.isDown) this.player.setVelocityY(80);\n"
    "      else this.player.setVelocityY(0);\n"
    "    } else {\n"
    "      this.player.body.allowGravity = true;\n"
    "    }\n"
    "    this.onLadder = false;\n"
)
state.update_body += LADDER_UPDATE_BLOCK
snap()  # solutions[49]

# Step 50 - water tiles slow the player down.
WATER_BLOCK = (
    "    this.water = this.physics.add.staticGroup();\n"
    "    this.water.add(\n"
    "      this.add.rectangle(208, 168, 64, 16, 0x4488ff, 0.5)\n"
    "    );\n"
    "    this.physics.add.overlap(\n"
    "      this.player,\n"
    "      this.water,\n"
    "      () => {\n"
    "        this.player.body.velocity.x *= 0.6;\n"
    "        if (this.player.body.velocity.y > 0) {\n"
    "          this.player.body.velocity.y *= 0.4;\n"
    "        }\n"
    "      },\n"
    "      null,\n"
    "      this\n"
    "    );\n"
)
state.create_body += WATER_BLOCK
snap()  # solutions[50]

# Step 51 - clamp player max-fall via setMaxVelocity.
MAX_VEL_LINE = "    this.player.body.setMaxVelocity(140, 380);\n"
state.create_body += MAX_VEL_LINE
snap()  # solutions[51]

# Step 52 - prevent ceiling-bonk from triggering coyote.
GROUNDED_OLD = "    if (onGround) this.lastGroundedAt = time;\n"
GROUNDED_NEW = (
    "    if (onGround && !this.player.body.blocked.up) {\n"
    "      this.lastGroundedAt = time;\n"
    "    }\n"
)
state.update_body = state.update_body.replace(GROUNDED_OLD, GROUNDED_NEW)
snap()  # solutions[52]

# Step 53 - debug graphics off by default.
DEBUG_INIT_LINE = "    this.physics.world.drawDebug = false;\n"
state.create_body += DEBUG_INIT_LINE
snap()  # solutions[53]

# Step 54 - prevent enemy duplicate damage when stacked.
HANDLE_ENEMY_DEDUP = (
    "  handleEnemyContact(player, enemy) {\n"
    "    if (player.body.bottom <= enemy.body.top + 4 && player.body.velocity.y > 0) {\n"
    "      enemy.destroy();\n"
    "      player.setVelocityY(-220);\n"
    "    } else {\n"
    "      if (this.time.now - this.lastEnemyHitAt < 200) return;\n"
    "      this.lastEnemyHitAt = this.time.now;\n"
    "      this.takeDamage();\n"
    "    }\n"
    "  }\n"
)
state.methods = [
    HANDLE_ENEMY_DEDUP if m is HANDLE_ENEMY_FULL else m for m in state.methods
]
snap()  # solutions[54]

# Step 55 - hitbox tuning for game-feel (final integration).
HITBOX_BLOCK = (
    "    this.player.body.setSize(10, 14);\n"
    "    this.player.body.setOffset(3, 2);\n"
)
state.create_body = state.create_body.replace(
    "    this.player.setCollideWorldBounds(true);\n",
    "    this.player.setCollideWorldBounds(true);\n" + HITBOX_BLOCK,
)
snap()  # solutions[55]

assert len(solutions) == 56, f"expected 56 entries, got {len(solutions)}"


# ---------------------------------------------------------------------------
# Per-step seed builders. Each takes the previous solution and inserts exactly
# two `--fcc-editable-region--` markers wrapping the focused diff region.
# ---------------------------------------------------------------------------


def empty_region():
    return "--fcc-editable-region--\n\n--fcc-editable-region--\n"


def wrap_existing(prev: str, anchor: str) -> str:
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


def step1_seed():
    """Replace the entire MainScene class body with an empty editable region."""
    s1 = solutions[1]
    cls_start = s1.index("class MainScene extends Phaser.Scene {\n")
    cls_end = s1.index("}\n\nconst config", cls_start) + 2
    return (
        s1[:cls_start]
        + "--fcc-editable-region--\n\n--fcc-editable-region--\n\n"
        + s1[cls_end:]
    )


# Mapping: step n -> (anchor_helper, anchor_text). step n's seed builds from
# solutions[n - 1].

SEED_BUILDERS = {
    2: lambda prev: insert_empty(prev, "  preload() {\n"),
    3: lambda prev: insert_empty(prev, "  create() {\n"),
    4: lambda prev: insert_empty(prev, PLATFORMS_INIT_BLOCK),
    5: lambda prev: insert_empty(prev, PLAYER_INIT_BLOCK),
    6: lambda prev: insert_empty(prev, "  update(time, delta) {\n"),
    7: lambda prev: insert_empty(prev, HORIZONTAL_UPDATE_BLOCK),
    8: lambda prev: insert_empty(prev, CURSORS_LINE),
    9: lambda prev: insert_empty(prev, NAIVE_JUMP_BLOCK),
    10: lambda prev: insert_empty(prev, WALK_ANIM_BLOCK),
    11: lambda prev: insert_empty(prev, COINS_INIT_BLOCK),
    12: lambda prev: wrap_existing(prev, THREE_MANUAL_PLATFORMS),
    13: lambda prev: insert_empty(prev, HP_HUD_INIT_BLOCK),
    14: lambda prev: wrap_existing(prev, CAMERA_FOLLOW_LINE),
    15: lambda prev: insert_empty(prev, ANIM_DRIVER_BLOCK),
    16: lambda prev: wrap_existing(prev, NAIVE_JUMP_BLOCK),
    17: lambda prev: wrap_existing(prev, COYOTE_ONLY_CHECK),
    18: lambda prev: wrap_existing(prev, COYOTE_BUFFER_CHECK),
    19: lambda prev: insert_empty(prev, VAR_JUMP_BLOCK),
    20: lambda prev: wrap_existing(prev, GROUNDED_LINE),
    21: lambda prev: insert_empty(prev, CAMERA_FOLLOW_LINE),
    22: lambda prev: insert_empty(prev, DOUBLE_JUMP_BLOCK),
    23: lambda prev: insert_empty(prev, MOVING_PLATFORM_BLOCK),
    24: lambda prev: wrap_existing(prev, TAKE_DAMAGE_BASIC),
    25: lambda prev: wrap_existing(prev, TAKE_DAMAGE_IFRAMES),
    26: lambda prev: wrap_existing(prev, TAKE_DAMAGE_TINT),
    27: lambda prev: insert_empty(prev, SPIKES_INIT_BLOCK),
    28: lambda prev: insert_empty(prev, PATROL_ENEMY_BLOCK),
    29: lambda prev: wrap_existing(prev, HANDLE_ENEMY_STOMP_ONLY),
    30: lambda prev: insert_empty(prev, ENEMY_OVERLAP_LINE),
    31: lambda prev: wrap_existing(prev, TAKE_DAMAGE_FLASH),
    32: lambda prev: wrap_existing(prev, "  scene: [MainScene]\n"),
    33: lambda prev: insert_empty(prev, FLYING_ENEMY_BLOCK),
    34: lambda prev: insert_empty(prev, ONE_WAY_BLOCK),
    35: lambda prev: insert_empty(prev, CHECKPOINT_BLOCK),
    36: lambda prev: insert_empty(prev, KEY_BLOCK),
    37: lambda prev: wrap_existing(prev, WIN_LEVEL_BASIC),
    38: lambda prev: wrap_existing(prev, WIN_LEVEL_PERSIST),
    39: lambda prev: insert_empty(prev, FLYING_UPDATE_BLOCK),
    40: lambda prev: wrap_existing(prev, LANDING_SHAKE_BLOCK),
    41: lambda prev: wrap_existing(prev, COIN_OVERLAP_OLD),
    42: lambda prev: insert_empty(prev, DUST_EMITTER_INIT),
    43: lambda prev: insert_empty(prev, LANDING_SHAKE_BLOCK_NEW),
    44: lambda prev: insert_empty(prev, WALL_SLIDE_BLOCK),
    45: lambda prev: insert_empty(prev, POWER_UP_BLOCK),
    46: lambda prev: insert_empty(prev, AUDIO_STUB_LINE),
    47: lambda prev: insert_empty_before(prev, "class GameOverScene"),
    48: lambda prev: insert_empty(prev, PAUSE_BIND_BLOCK),
    49: lambda prev: insert_empty(prev, DEBUG_TOGGLE_BLOCK),
    50: lambda prev: insert_empty(prev, LADDER_BLOCK),
    51: lambda prev: insert_empty(prev, WATER_BLOCK),
    52: lambda prev: wrap_existing(prev, GROUNDED_OLD),
    53: lambda prev: insert_empty(prev, MAX_VEL_LINE),
    54: lambda prev: wrap_existing(prev, HANDLE_ENEMY_FULL),
    55: lambda prev: insert_empty_before(
        prev, "    this.player.setCollideWorldBounds(true);\n"
    ),
}


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
# Step specs (description + hints) - filled in below.
# ---------------------------------------------------------------------------

STEPS = []


def add_step(num, dashed, description, hints):
    STEPS.append(
        {
            "num": num,
            "dashed": dashed,
            "description": description,
            "hints": hints,
        }
    )


add_step(
    1,
    "step-1",
    """\
Welcome to the platformer workshop. Over the next 55 steps you will build a
complete side-scrolling platformer with a polished game-feel jump (variable
height, coyote time, jump buffering, double jump), enemies, hazards,
collectibles, a goal flag, a pause scene, and more.

Start by declaring the scene class. Inside the editable region declare a
`MainScene` that extends `Phaser.Scene`, with a constructor that calls
`super("MainScene")` and empty `preload`, `create`, and `update(time, delta)`
methods.

```js
class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  preload() {}

  create() {}

  update(time, delta) {}
}
```

The `config` object below already references `MainScene` and sets gravity to
`800` — once the class is defined the canvas mounts.
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

You should declare a `preload` method.

```js
assert.match(code, /preload\\s*\\(\\s*\\)\\s*\\{/);
```

You should declare a `create` method.

```js
assert.match(code, /create\\s*\\(\\s*\\)\\s*\\{/);
```

You should declare an `update` method that takes `time` and `delta`.

```js
assert.match(code, /update\\s*\\(\\s*time\\s*,\\s*delta\\s*\\)\\s*\\{/);
```
""",
)

add_step(
    2,
    "step-2",
    """\
Inside `preload`, load the hero spritesheet. The asset is a 4×4 grid of 16×16
frames; you will use frames 12–15 (right-facing walk cycle) for the player's
walk animation later.

```js
this.load.spritesheet(
  "hero",
  "/curriculum-assets/phaser/spritesheets/hero-walk.png",
  { frameWidth: 16, frameHeight: 16 }
);
```
""",
    """\
You should load the hero spritesheet under the key `"hero"` with 16×16 frames.

```js
assert.match(code, /this\\.load\\.spritesheet\\(\\s*["']hero["']\\s*,\\s*["']\\/curriculum-assets\\/phaser\\/spritesheets\\/hero-walk\\.png["']\\s*,\\s*\\{\\s*frameWidth\\s*:\\s*16\\s*,\\s*frameHeight\\s*:\\s*16\\s*\\}\\s*\\)/);
```
""",
)

add_step(
    3,
    "step-3",
    """\
Open `create` and lay down some level geometry. Static groups are the right
container for tiles that never move — gravity ignores them and they never
budge when collided with.

```js
this.platforms = this.physics.add.staticGroup();
this.platforms.add(this.add.rectangle(80, 160, 64, 16, 0x66ddff));
this.platforms.add(this.add.rectangle(240, 120, 64, 16, 0x66ddff));
this.platforms.add(this.add.rectangle(400, 80, 64, 16, 0x66ddff));
```

Three placeholder platforms is enough for now — you'll replace them with a
proper 30-tile level in step 12.
""",
    """\
You should create `this.platforms` as a `physics.add.staticGroup()`.

```js
assert.match(code, /this\\.platforms\\s*=\\s*this\\.physics\\.add\\.staticGroup\\(\\s*\\)/);
```

You should add three rectangles to `this.platforms` at the specified positions.

```js
assert.match(code, /this\\.platforms\\.add\\(\\s*this\\.add\\.rectangle\\(\\s*80\\s*,\\s*160\\s*,\\s*64\\s*,\\s*16/);
assert.match(code, /this\\.platforms\\.add\\(\\s*this\\.add\\.rectangle\\(\\s*240\\s*,\\s*120\\s*,\\s*64\\s*,\\s*16/);
assert.match(code, /this\\.platforms\\.add\\(\\s*this\\.add\\.rectangle\\(\\s*400\\s*,\\s*80\\s*,\\s*64\\s*,\\s*16/);
```
""",
)

add_step(
    4,
    "step-4",
    """\
Drop the hero into the world as a physics sprite. `physics.add.sprite` does
two things at once: it adds the sprite to the display list and gives it an
Arcade body. The body inherits world gravity, so the hero will fall toward
the platforms.

```js
this.player = this.physics.add.sprite(40, 60, "hero", 12);
this.player.setCollideWorldBounds(true);
```

`setCollideWorldBounds(true)` keeps the player inside the canvas rectangle
while you wire up controls. Frame 12 is the first walk-right pose in the
sheet — the hero faces right by default.
""",
    """\
You should add `this.player` as a physics sprite at `(40, 60)` using frame `12` of `"hero"`.

```js
assert.match(code, /this\\.player\\s*=\\s*this\\.physics\\.add\\.sprite\\(\\s*40\\s*,\\s*60\\s*,\\s*["']hero["']\\s*,\\s*12\\s*\\)/);
```

You should call `setCollideWorldBounds(true)` on the player.

```js
assert.match(code, /this\\.player\\.setCollideWorldBounds\\(\\s*true\\s*\\)/);
```
""",
)

add_step(
    5,
    "step-5",
    """\
Reload the canvas — the hero falls through the platforms because nothing has
told the engine they should collide. Register a collider:

```js
this.physics.add.collider(this.player, this.platforms);
```

`add.collider` blocks movement and resolves the collision automatically.
""",
    """\
You should register a collider between `this.player` and `this.platforms`.

```js
assert.match(code, /this\\.physics\\.add\\.collider\\(\\s*this\\.player\\s*,\\s*this\\.platforms\\s*\\)/);
```
""",
)

add_step(
    6,
    "step-6",
    """\
Wire up the arrow keys for left/right movement. First grab the cursor keys
in `create`:

```js
this.cursors = this.input.keyboard.createCursorKeys();
```

Then in `update`, drive the player's horizontal velocity:

```js
if (this.cursors.left.isDown) {
  this.player.setVelocityX(-140);
} else if (this.cursors.right.isDown) {
  this.player.setVelocityX(140);
} else {
  this.player.setVelocityX(0);
}
```

Setting the velocity to zero in the else branch stops the player crisply on
key release — without it the player would drift indefinitely.
""",
    """\
You should call `createCursorKeys()` and assign it to `this.cursors`.

```js
assert.match(code, /this\\.cursors\\s*=\\s*this\\.input\\.keyboard\\.createCursorKeys\\(\\s*\\)/);
```

You should set the player's velocity to `-140` when left is pressed, `140` when right is pressed, and `0` otherwise.

```js
assert.match(code, /this\\.cursors\\.left\\.isDown[\\s\\S]*?this\\.player\\.setVelocityX\\(\\s*-140\\s*\\)/);
assert.match(code, /this\\.cursors\\.right\\.isDown[\\s\\S]*?this\\.player\\.setVelocityX\\(\\s*140\\s*\\)/);
assert.match(code, /this\\.player\\.setVelocityX\\(\\s*0\\s*\\)/);
```
""",
)

add_step(
    7,
    "step-7",
    """\
Add a naive jump. When the up arrow is just-pressed AND the player is
touching the ground, fire an upward velocity:

```js
if (
  Phaser.Input.Keyboard.JustDown(this.cursors.up) &&
  this.player.body.touching.down
) {
  this.player.setVelocityY(-310);
}
```

`JustDown` fires for exactly the frame the key transitions from up to down,
so holding the key produces a single jump rather than continuous launch.
This naive check has known game-feel bugs that you'll fix later.
""",
    """\
You should test `Phaser.Input.Keyboard.JustDown(this.cursors.up)` together with `this.player.body.touching.down`.

```js
assert.match(code, /Phaser\\.Input\\.Keyboard\\.JustDown\\(\\s*this\\.cursors\\.up\\s*\\)[\\s\\S]*?this\\.player\\.body\\.touching\\.down/);
```

You should call `this.player.setVelocityY(-310)` inside the jump branch.

```js
assert.match(code, /this\\.player\\.setVelocityY\\(\\s*-310\\s*\\)/);
```
""",
)

add_step(
    8,
    "step-8",
    """\
Define a walk animation using frames 12–15 of the hero sheet (the
right-facing walk cycle):

```js
this.anims.create({
  key: "walk",
  frames: this.anims.generateFrameNumbers("hero", { start: 12, end: 15 }),
  frameRate: 8,
  repeat: -1
});
```

`repeat: -1` loops forever; `frameRate: 8` keeps the cycle readable. Each
animation key is a global resource on the scene, so you only have to define
it once.
""",
    """\
You should create an animation with key `"walk"` using frames 12–15 of `"hero"` at frame rate 8 with infinite repeat.

```js
assert.match(code, /this\\.anims\\.create\\(\\s*\\{[\\s\\S]*?key\\s*:\\s*["']walk["'][\\s\\S]*?generateFrameNumbers\\(\\s*["']hero["']\\s*,\\s*\\{\\s*start\\s*:\\s*12\\s*,\\s*end\\s*:\\s*15\\s*\\}[\\s\\S]*?frameRate\\s*:\\s*8[\\s\\S]*?repeat\\s*:\\s*-1/);
```
""",
)

add_step(
    9,
    "step-9",
    """\
Drive the animation from the player's velocity. While moving, play the walk
anim and flip horizontally when going left. While idle, freeze on frame 12.

```js
const vx = this.player.body.velocity.x;
if (Math.abs(vx) > 1) {
  this.player.anims.play("walk", true);
  this.player.setFlipX(vx < 0);
} else {
  this.player.anims.stop();
  this.player.setFrame(12);
}
```

The `true` second argument to `anims.play` tells Phaser "if this anim is
already playing, don't restart" — without it the walk cycle would reset to
frame 0 every frame.
""",
    """\
You should bind `vx` to `this.player.body.velocity.x`.

```js
assert.match(code, /const\\s+vx\\s*=\\s*this\\.player\\.body\\.velocity\\.x/);
```

You should play the `"walk"` animation and `setFlipX(vx < 0)` when moving.

```js
assert.match(code, /this\\.player\\.anims\\.play\\(\\s*["']walk["']\\s*,\\s*true\\s*\\)/);
assert.match(code, /this\\.player\\.setFlipX\\(\\s*vx\\s*<\\s*0\\s*\\)/);
```

You should stop animations and call `setFrame(12)` when idle.

```js
assert.match(code, /this\\.player\\.anims\\.stop\\(\\s*\\)/);
assert.match(code, /this\\.player\\.setFrame\\(\\s*12\\s*\\)/);
```
""",
)

add_step(
    10,
    "step-10",
    """\
Add three coins to the level and an overlap callback that removes them on
contact. Coins do not block movement, so use `add.overlap` instead of
`add.collider`:

```js
this.coins = this.physics.add.staticGroup();
[
  [120, 140],
  [260, 100],
  [420, 60]
].forEach(([x, y]) => {
  this.coins.add(this.add.rectangle(x, y, 8, 8, 0xffee44));
});
this.score = 0;
this.physics.add.overlap(
  this.player,
  this.coins,
  (player, coin) => {
    coin.destroy();
    this.score += 1;
  },
  null,
  this
);
```

`destroy` cleans up both the rectangle and its body in one call.
""",
    """\
You should create `this.coins` as a `physics.add.staticGroup()`.

```js
assert.match(code, /this\\.coins\\s*=\\s*this\\.physics\\.add\\.staticGroup\\(\\s*\\)/);
```

You should initialize `this.score` to `0`.

```js
assert.match(code, /this\\.score\\s*=\\s*0/);
```

You should register an overlap between the player and coins that calls `coin.destroy()` and increments `this.score`.

```js
assert.match(code, /this\\.physics\\.add\\.overlap\\(\\s*this\\.player\\s*,\\s*this\\.coins\\s*,[\\s\\S]*?coin\\.destroy\\(\\s*\\)[\\s\\S]*?this\\.score\\s*\\+=\\s*1/);
```
""",
)

add_step(
    11,
    "step-11",
    """\
Track HP and surface a HUD. Add the HP and HUD text in `create`:

```js
this.hp = 3;
this.hud = this.add.text(8, 8, "", {
  fontSize: "10px",
  color: "#ffffff"
});
```

Then refresh the HUD every frame in `update`:

```js
this.hud.setText("HP " + this.hp + "  COINS " + this.score);
```

Refreshing per frame is wasteful in theory but trivial in practice for a
single text label, and it means the HUD stays correct no matter what
mutates `this.hp` or `this.score`.
""",
    """\
You should initialize `this.hp` to `3`.

```js
assert.match(code, /this\\.hp\\s*=\\s*3/);
```

You should create `this.hud` as a text at `(8, 8)` with `fontSize: "10px"`.

```js
assert.match(code, /this\\.hud\\s*=\\s*this\\.add\\.text\\(\\s*8\\s*,\\s*8\\s*,\\s*["']{2}\\s*,\\s*\\{[\\s\\S]*?fontSize\\s*:\\s*["']10px["']/);
```

You should call `this.hud.setText("HP " + this.hp + "  COINS " + this.score)` in `update`.

```js
assert.match(code, /this\\.hud\\.setText\\(\\s*["']HP\\s*["']\\s*\\+\\s*this\\.hp\\s*\\+\\s*["']\\s*COINS\\s*["']\\s*\\+\\s*this\\.score\\s*\\)/);
```
""",
)

add_step(
    12,
    "step-12",
    """\
Replace the three placeholder platforms with a proper 30-tile-wide level laid
out as a list of horizontal tile runs. Each entry is `[xStart, xEnd, y]` —
expand to individual 16×16 tiles inside a `forEach` loop:

```js
const LEVEL = [
  [0, 192, 176],
  [256, 480, 176],
  [560, 768, 176],
  [832, 1280, 176],
  [96, 192, 128],
  [256, 320, 96],
  [384, 480, 128],
  [560, 624, 80],
  [720, 832, 128],
  [928, 1056, 96],
  [1136, 1216, 64]
];
LEVEL.forEach(([xs, xe, y]) => {
  for (let x = xs; x < xe; x += 16) {
    this.platforms.add(this.add.rectangle(x + 8, y, 16, 16, 0x66ddff));
  }
});
```

Four floor segments separated by three pits, plus seven mid-air platforms
varying in height — enough to exercise jump-tuning end-to-end.
""",
    """\
You should declare a `LEVEL` array of `[xs, xe, y]` runs that includes the floor segments and platforms.

```js
assert.match(code, /const\\s+LEVEL\\s*=\\s*\\[[\\s\\S]*?\\[\\s*0\\s*,\\s*192\\s*,\\s*176\\s*\\][\\s\\S]*?\\[\\s*1136\\s*,\\s*1216\\s*,\\s*64\\s*\\]/);
```

You should iterate `LEVEL` and emit 16×16 tiles via a nested loop.

```js
assert.match(code, /LEVEL\\.forEach\\(\\s*\\(\\s*\\[\\s*xs\\s*,\\s*xe\\s*,\\s*y\\s*\\]\\s*\\)\\s*=>\\s*\\{[\\s\\S]*?for\\s*\\(\\s*let\\s+x\\s*=\\s*xs\\s*;\\s*x\\s*<\\s*xe\\s*;\\s*x\\s*\\+=\\s*16\\s*\\)[\\s\\S]*?this\\.platforms\\.add\\(\\s*this\\.add\\.rectangle\\(\\s*x\\s*\\+\\s*8\\s*,\\s*y\\s*,\\s*16\\s*,\\s*16\\s*,\\s*0x66ddff/);
```
""",
)

add_step(
    13,
    "step-13",
    """\
The player now walks straight off the right edge of the canvas. Pin the
camera to follow the player so they stay on screen as the level scrolls:

```js
this.cameras.main.startFollow(this.player, true, 0.1, 0.1);
```

The two trailing arguments are the lerp factors for X and Y — `0.1` gives a
smooth chase that hides single-frame velocity jitter.
""",
    """\
You should call `this.cameras.main.startFollow` on the player with smooth lerp factors of `0.1`.

```js
assert.match(code, /this\\.cameras\\.main\\.startFollow\\(\\s*this\\.player\\s*,\\s*true\\s*,\\s*0\\.1\\s*,\\s*0\\.1\\s*\\)/);
```
""",
)

add_step(
    14,
    "step-14",
    """\
The camera scrolls past the level into empty space. Constrain both the
physics world and the camera to the level's actual extents:

```js
this.physics.world.setBounds(0, 0, 1280, 192);
this.cameras.main.setBounds(0, 0, 1280, 192);
```

`physics.world.setBounds` clamps the body's `setCollideWorldBounds` to the
new rectangle; `cameras.main.setBounds` stops the camera at the edges.
""",
    """\
You should call `this.physics.world.setBounds(0, 0, 1280, 192)`.

```js
assert.match(code, /this\\.physics\\.world\\.setBounds\\(\\s*0\\s*,\\s*0\\s*,\\s*1280\\s*,\\s*192\\s*\\)/);
```

You should call `this.cameras.main.setBounds(0, 0, 1280, 192)`.

```js
assert.match(code, /this\\.cameras\\.main\\.setBounds\\(\\s*0\\s*,\\s*0\\s*,\\s*1280\\s*,\\s*192\\s*\\)/);
```
""",
)

add_step(
    15,
    "step-15",
    """\
Add variable jump height. If the player releases UP early while still moving
upward, clamp the velocity to a small upward number so the rest of the jump
arc is shorter:

```js
if (
  Phaser.Input.Keyboard.JustUp(this.cursors.up) &&
  this.player.body.velocity.y < -120
) {
  this.player.setVelocityY(-120);
}
```

Tap UP for a short hop, hold UP for a full jump. This is the cheapest piece
of polish that makes a platformer feel responsive.
""",
    """\
You should listen for `JustUp(this.cursors.up)` and clamp `velocity.y` to `-120` when it is below `-120`.

```js
assert.match(code, /Phaser\\.Input\\.Keyboard\\.JustUp\\(\\s*this\\.cursors\\.up\\s*\\)[\\s\\S]*?this\\.player\\.body\\.velocity\\.y\\s*<\\s*-120[\\s\\S]*?this\\.player\\.setVelocityY\\(\\s*-120\\s*\\)/);
```
""",
)

add_step(
    16,
    "step-16",
    """\
Replace the naive jump check with a coyote-time gate. Track the timestamp of
the most recent grounded frame, and let the player jump for up to 120 ms
after leaving the ground:

```js
const onGround =
  this.player.body.touching.down || this.player.body.blocked.down;
if (onGround) this.lastGroundedAt = time;
if (
  Phaser.Input.Keyboard.JustDown(this.cursors.up) &&
  time - this.lastGroundedAt < 120
) {
  this.player.setVelocityY(-310);
}
```

`time` is the running scene clock passed into `update`. Combining
`touching.down` and `blocked.down` covers both standing on a tile and
standing on the world floor.
""",
    """\
You should compute `onGround` from `touching.down || blocked.down`.

```js
assert.match(code, /const\\s+onGround\\s*=[\\s\\S]*?this\\.player\\.body\\.touching\\.down[\\s\\S]*?this\\.player\\.body\\.blocked\\.down/);
```

You should stamp `this.lastGroundedAt = time` whenever `onGround` is true.

```js
assert.match(code, /if\\s*\\(\\s*onGround\\s*\\)\\s*this\\.lastGroundedAt\\s*=\\s*time/);
```

You should gate the jump on `time - this.lastGroundedAt < 120`.

```js
assert.match(code, /time\\s*-\\s*this\\.lastGroundedAt\\s*<\\s*120/);
```
""",
)

add_step(
    17,
    "step-17",
    """\
Add jump buffering. Stamp the timestamp of the most recent jump press and
fire the jump when both gates pass:

```js
if (Phaser.Input.Keyboard.JustDown(this.cursors.up)) {
  this.lastJumpPressedAt = time;
}
const canJump = time - this.lastGroundedAt < 120;
const buffered = time - this.lastJumpPressedAt < 120;
if (canJump && buffered) {
  this.player.setVelocityY(-310);
}
```

A press up to 120 ms before landing now fires immediately on touchdown.
Combined with coyote time, both timing failures the naive check has are
gone — the jump feels right.
""",
    """\
You should stamp `this.lastJumpPressedAt = time` on `JustDown(this.cursors.up)`.

```js
assert.match(code, /Phaser\\.Input\\.Keyboard\\.JustDown\\(\\s*this\\.cursors\\.up\\s*\\)[\\s\\S]*?this\\.lastJumpPressedAt\\s*=\\s*time/);
```

You should declare `canJump` and `buffered` as boolean expressions and gate the jump on `canJump && buffered`.

```js
assert.match(code, /const\\s+canJump\\s*=\\s*time\\s*-\\s*this\\.lastGroundedAt\\s*<\\s*120/);
assert.match(code, /const\\s+buffered\\s*=\\s*time\\s*-\\s*this\\.lastJumpPressedAt\\s*<\\s*120/);
assert.match(code, /if\\s*\\(\\s*canJump\\s*&&\\s*buffered\\s*\\)/);
```
""",
)

add_step(
    18,
    "step-18",
    """\
After firing the jump, reset both timestamps to `-Infinity`. Without this
fix the same press could fire multiple jumps inside the buffer window, and
coyote time could be re-triggered mid-air for chained ledge jumps:

```js
if (canJump && buffered) {
  this.player.setVelocityY(-310);
  this.lastGroundedAt = -Infinity;
  this.lastJumpPressedAt = -Infinity;
}
```

`-Infinity` makes the next `time - timestamp < 120` check evaluate to
`false` until the timestamp is restamped on the next ground frame or jump
press.
""",
    """\
You should set `this.lastGroundedAt = -Infinity` immediately after firing the jump.

```js
assert.match(code, /this\\.player\\.setVelocityY\\(\\s*-310\\s*\\)\\s*;\\s*this\\.lastGroundedAt\\s*=\\s*-Infinity/);
```

You should set `this.lastJumpPressedAt = -Infinity` immediately after firing the jump.

```js
assert.match(code, /this\\.lastJumpPressedAt\\s*=\\s*-Infinity/);
```
""",
)

add_step(
    19,
    "step-19",
    """\
Add a double-jump. While airborne (so coyote time is over) and the
`canDoubleJump` flag is set, allow exactly one extra mid-air jump:

```js
if (
  Phaser.Input.Keyboard.JustDown(this.cursors.up) &&
  !canJump &&
  this.canDoubleJump
) {
  this.player.setVelocityY(-260);
  this.canDoubleJump = false;
}
```

`-260` is a slightly weaker velocity than the regular jump's `-310` —
double-jumps in good platformers are typically shorter than the first jump
to keep both options meaningful.
""",
    """\
You should test `JustDown(this.cursors.up)`, `!canJump`, and `this.canDoubleJump` as the double-jump gate.

```js
assert.match(code, /Phaser\\.Input\\.Keyboard\\.JustDown\\(\\s*this\\.cursors\\.up\\s*\\)[\\s\\S]*?!canJump[\\s\\S]*?this\\.canDoubleJump/);
```

You should call `setVelocityY(-260)` and set `this.canDoubleJump = false`.

```js
assert.match(code, /this\\.player\\.setVelocityY\\(\\s*-260\\s*\\)/);
assert.match(code, /this\\.canDoubleJump\\s*=\\s*false/);
```
""",
)

add_step(
    20,
    "step-20",
    """\
The double-jump never replenishes — once you use it you cannot use it again.
Reset the flag to `true` on every grounded frame, immediately after the
existing `lastGroundedAt` stamp:

```js
if (onGround) this.lastGroundedAt = time;
if (onGround) this.canDoubleJump = true;
```

This is intentionally on its own line — combining the two writes into one
`if` saves a line but reads worse, and a future step (the ceiling-bonk
fix) will need to differ between them.
""",
    """\
You should set `this.canDoubleJump = true` on every grounded frame.

```js
assert.match(code, /if\\s*\\(\\s*onGround\\s*\\)\\s*this\\.canDoubleJump\\s*=\\s*true/);
```
""",
)

add_step(
    21,
    "step-21",
    """\
Add a moving platform. Unlike the static-group platforms you already have,
this one uses a regular dynamic group with `allowGravity` off and
`immovable` on — gravity ignores it but the player still treats it as solid:

```js
this.movingPlatforms = this.physics.add.group({
  allowGravity: false,
  immovable: true
});
const moving = this.add.rectangle(240, 140, 48, 8, 0xffaa44);
this.movingPlatforms.add(moving);
this.tweens.add({
  targets: moving,
  x: 320,
  duration: 1500,
  yoyo: true,
  repeat: -1,
  ease: "Sine.easeInOut"
});
this.physics.add.collider(this.player, this.movingPlatforms);
```

`yoyo: true` plus `repeat: -1` makes the tween bounce back and forth
forever; `Sine.easeInOut` smooths out the direction reversals so the
platform doesn't snap.
""",
    """\
You should create `this.movingPlatforms` as a dynamic group with `allowGravity: false` and `immovable: true`.

```js
assert.match(code, /this\\.movingPlatforms\\s*=\\s*this\\.physics\\.add\\.group\\(\\s*\\{[\\s\\S]*?allowGravity\\s*:\\s*false[\\s\\S]*?immovable\\s*:\\s*true/);
```

You should tween the moving platform's `x` to `320` with `yoyo: true` and `repeat: -1`.

```js
assert.match(code, /this\\.tweens\\.add\\(\\s*\\{[\\s\\S]*?x\\s*:\\s*320[\\s\\S]*?yoyo\\s*:\\s*true[\\s\\S]*?repeat\\s*:\\s*-1/);
```

You should register a collider between the player and `this.movingPlatforms`.

```js
assert.match(code, /this\\.physics\\.add\\.collider\\(\\s*this\\.player\\s*,\\s*this\\.movingPlatforms\\s*\\)/);
```
""",
)

add_step(
    22,
    "step-22",
    """\
Stand on the moving platform and you'll see a problem: when the platform
slides under your feet you don't move with it, so you slip off. Fix it by
having the player inherit the platform's per-frame X delta whenever they
are standing on it:

```js
this.movingPlatforms.getChildren().forEach((plat) => {
  if (
    this.player.body.touching.down &&
    this.player.y < plat.y &&
    Math.abs(this.player.x - plat.x) < plat.width / 2 + 8
  ) {
    this.player.x += plat.body.deltaX();
  }
});
```

`body.deltaX()` returns the platform's X movement during the most recent
physics step. Adding it to the player's X is the simplest "parent on stand"
pattern — no kinematic gymnastics required.
""",
    """\
You should iterate moving platforms and add `plat.body.deltaX()` to `this.player.x` while standing on one.

```js
assert.match(code, /this\\.movingPlatforms\\.getChildren\\(\\s*\\)\\.forEach\\(\\s*\\(\\s*plat\\s*\\)\\s*=>\\s*\\{[\\s\\S]*?this\\.player\\.body\\.touching\\.down[\\s\\S]*?this\\.player\\.x\\s*\\+=\\s*plat\\.body\\.deltaX\\(\\s*\\)/);
```
""",
)

add_step(
    23,
    "step-23",
    """\
Add a "spike" hazard. Spikes are static rectangles that hurt on overlap.
Place three spike tiles on the floor and wire an overlap that calls a
`takeDamage` method:

```js
this.spikes = this.physics.add.staticGroup();
[[400, 168], [800, 168], [1024, 168]].forEach(([x, y]) => {
  this.spikes.add(this.add.rectangle(x, y, 16, 8, 0xff4444));
});
this.physics.add.overlap(
  this.player,
  this.spikes,
  () => this.takeDamage(),
  null,
  this
);
```

Then add the matching method outside `update`, alongside the existing
methods of the class:

```js
takeDamage() {
  this.hp -= 1;
}
```
""",
    """\
You should create `this.spikes` as a `physics.add.staticGroup()` and add three spike rectangles to it.

```js
assert.match(code, /this\\.spikes\\s*=\\s*this\\.physics\\.add\\.staticGroup\\(\\s*\\)/);
assert.match(code, /this\\.spikes\\.add\\(\\s*this\\.add\\.rectangle\\([\\s\\S]*?16\\s*,\\s*8\\s*,\\s*0xff4444/);
```

You should register an overlap between the player and spikes that calls `this.takeDamage()`.

```js
assert.match(code, /this\\.physics\\.add\\.overlap\\(\\s*this\\.player\\s*,\\s*this\\.spikes\\s*,\\s*\\(\\s*\\)\\s*=>\\s*this\\.takeDamage\\(\\s*\\)/);
```

You should declare a `takeDamage` method that decrements `this.hp` by 1.

```js
assert.match(code, /takeDamage\\s*\\(\\s*\\)\\s*\\{[\\s\\S]*?this\\.hp\\s*-=\\s*1/);
```
""",
)

add_step(
    24,
    "step-24",
    """\
Walking through a spike rapidly drains all 3 HP in a few frames because the
overlap fires on every physics step. Fix it with invincibility frames —
ignore damage for 800 ms after the most recent hit:

```js
takeDamage() {
  if (this.time.now < this.invincibleUntil) return;
  this.invincibleUntil = this.time.now + 800;
  this.hp -= 1;
}
```

`this.time.now` is the running scene clock. `this.invincibleUntil` starts
as `undefined` — `this.time.now < undefined` evaluates to `false`, so the
first damage call always lands.
""",
    """\
You should early-return when `this.time.now < this.invincibleUntil`.

```js
assert.match(code, /takeDamage\\s*\\(\\s*\\)\\s*\\{\\s*if\\s*\\(\\s*this\\.time\\.now\\s*<\\s*this\\.invincibleUntil\\s*\\)\\s*return/);
```

You should set `this.invincibleUntil = this.time.now + 800` before applying damage.

```js
assert.match(code, /this\\.invincibleUntil\\s*=\\s*this\\.time\\.now\\s*\\+\\s*800/);
```
""",
)

add_step(
    25,
    "step-25",
    """\
Tween the player tint to red on damage and clear it 150 ms later. The
visible flash makes the damage event obvious even when HP is hard to read:

```js
takeDamage() {
  if (this.time.now < this.invincibleUntil) return;
  this.invincibleUntil = this.time.now + 800;
  this.hp -= 1;
  this.player.setTint(0xff4444);
  this.time.delayedCall(150, () => this.player.clearTint());
}
```

`time.delayedCall(ms, callback)` schedules a one-shot callback. It is the
right tool for "do something X ms from now" — Phaser cleans it up
automatically when the scene shuts down.
""",
    """\
You should call `this.player.setTint(0xff4444)` inside `takeDamage`.

```js
assert.match(code, /this\\.player\\.setTint\\(\\s*0xff4444\\s*\\)/);
```

You should schedule `this.player.clearTint()` 150 ms later via `delayedCall`.

```js
assert.match(code, /this\\.time\\.delayedCall\\(\\s*150\\s*,\\s*\\(\\s*\\)\\s*=>\\s*this\\.player\\.clearTint\\(\\s*\\)\\s*\\)/);
```
""",
)

add_step(
    26,
    "step-26",
    """\
Stack a 150-ms reddish camera flash on top of the tint:

```js
takeDamage() {
  if (this.time.now < this.invincibleUntil) return;
  this.invincibleUntil = this.time.now + 800;
  this.hp -= 1;
  this.player.setTint(0xff4444);
  this.time.delayedCall(150, () => this.player.clearTint());
  this.cameras.main.flash(150, 200, 50, 50);
}
```

`flash(duration, r, g, b)` overlays a one-shot flash of the specified
color on the entire camera. `(200, 50, 50)` is a muted red — bright enough
to register peripherally without blowing the player's eyes out.
""",
    """\
You should call `this.cameras.main.flash(150, 200, 50, 50)` inside `takeDamage`.

```js
assert.match(code, /this\\.cameras\\.main\\.flash\\(\\s*150\\s*,\\s*200\\s*,\\s*50\\s*,\\s*50\\s*\\)/);
```
""",
)

add_step(
    27,
    "step-27",
    """\
Spawn two patrolling enemies — small rectangles that walk left and bounce
off walls. They collide with the platforms (so they stand on them and stay
within rails):

```js
this.enemies = this.physics.add.group();
[{ x: 320, y: 160 }, { x: 700, y: 64 }].forEach(({ x, y }) => {
  const e = this.add.rectangle(x, y, 12, 12, 0xff66aa);
  this.enemies.add(e);
  e.body.setVelocityX(-40);
  e.body.setBounce(1, 0);
});
this.physics.add.collider(this.enemies, this.platforms);
```

Then in `update`, flip their direction whenever they hit a wall (use
`body.blocked.left` / `body.blocked.right`):

```js
this.enemies.getChildren().forEach((e) => {
  if (e.body.blocked.left) e.body.setVelocityX(40);
  else if (e.body.blocked.right) e.body.setVelocityX(-40);
});
```
""",
    """\
You should create `this.enemies` as a `physics.add.group()` with two patrolling enemies that have `setVelocityX(-40)` and `setBounce(1, 0)`.

```js
assert.match(code, /this\\.enemies\\s*=\\s*this\\.physics\\.add\\.group\\(\\s*\\)/);
assert.match(code, /e\\.body\\.setVelocityX\\(\\s*-40\\s*\\)/);
assert.match(code, /e\\.body\\.setBounce\\(\\s*1\\s*,\\s*0\\s*\\)/);
```

You should register a collider between enemies and platforms.

```js
assert.match(code, /this\\.physics\\.add\\.collider\\(\\s*this\\.enemies\\s*,\\s*this\\.platforms\\s*\\)/);
```

You should flip an enemy's velocity to `40` on `blocked.left` and `-40` on `blocked.right`.

```js
assert.match(code, /e\\.body\\.blocked\\.left[\\s\\S]*?e\\.body\\.setVelocityX\\(\\s*40\\s*\\)/);
assert.match(code, /e\\.body\\.blocked\\.right[\\s\\S]*?e\\.body\\.setVelocityX\\(\\s*-40\\s*\\)/);
```
""",
)

add_step(
    28,
    "step-28",
    """\
Make jumping on enemies kill them. Wire an overlap and add a
`handleEnemyContact` method that recognizes a stomp by comparing the
player's body bottom to the enemy's body top while moving downward:

```js
this.physics.add.overlap(
  this.player,
  this.enemies,
  this.handleEnemyContact,
  null,
  this
);
```

```js
handleEnemyContact(player, enemy) {
  if (player.body.bottom <= enemy.body.top + 4 && player.body.velocity.y > 0) {
    enemy.destroy();
    player.setVelocityY(-220);
  }
}
```

The `+ 4` slack absorbs floating-point jitter when the bodies barely
overlap. Setting velocity Y to `-220` gives the player a small bonus bounce
off the kill.
""",
    """\
You should register an overlap that calls `this.handleEnemyContact`.

```js
assert.match(code, /this\\.physics\\.add\\.overlap\\(\\s*this\\.player\\s*,\\s*this\\.enemies\\s*,\\s*this\\.handleEnemyContact/);
```

You should declare a `handleEnemyContact(player, enemy)` method that destroys the enemy and bounces the player on top contact.

```js
assert.match(code, /handleEnemyContact\\s*\\(\\s*player\\s*,\\s*enemy\\s*\\)\\s*\\{[\\s\\S]*?player\\.body\\.bottom\\s*<=\\s*enemy\\.body\\.top\\s*\\+\\s*4[\\s\\S]*?player\\.body\\.velocity\\.y\\s*>\\s*0[\\s\\S]*?enemy\\.destroy\\(\\s*\\)[\\s\\S]*?player\\.setVelocityY\\(\\s*-220\\s*\\)/);
```
""",
)

add_step(
    29,
    "step-29",
    """\
Side-touching an enemy currently does nothing. Add an `else` branch that
calls `takeDamage` so a body-to-body collision from any non-stomp angle
hurts:

```js
handleEnemyContact(player, enemy) {
  if (player.body.bottom <= enemy.body.top + 4 && player.body.velocity.y > 0) {
    enemy.destroy();
    player.setVelocityY(-220);
  } else {
    this.takeDamage();
  }
}
```

The iframe gating from step 24 already prevents this from chain-draining
HP every frame the player is in contact.
""",
    """\
You should call `this.takeDamage()` in the else branch of `handleEnemyContact`.

```js
assert.match(code, /handleEnemyContact[\\s\\S]*?else\\s*\\{[\\s\\S]*?this\\.takeDamage\\(\\s*\\)/);
```
""",
)

add_step(
    30,
    "step-30",
    """\
Add a flying enemy that ignores gravity and oscillates on the Y axis. Use a
separate group with `allowGravity: false`, place a circle, and reuse
`handleEnemyContact` for the overlap:

```js
this.flyingEnemies = this.physics.add.group({ allowGravity: false });
const flyer = this.add.circle(900, 96, 8, 0xaa66ff);
this.flyingEnemies.add(flyer);
flyer.baseY = 96;
this.physics.add.overlap(
  this.player,
  this.flyingEnemies,
  this.handleEnemyContact,
  null,
  this
);
```

Drive its Y in `update`:

```js
this.flyingEnemies.getChildren().forEach((f) => {
  f.y = f.baseY + Math.sin(time / 300) * 24;
});
```

`time / 300` gives a 6-second cycle; `* 24` is the amplitude in pixels.
""",
    """\
You should create `this.flyingEnemies` as a `physics.add.group({ allowGravity: false })`.

```js
assert.match(code, /this\\.flyingEnemies\\s*=\\s*this\\.physics\\.add\\.group\\(\\s*\\{\\s*allowGravity\\s*:\\s*false\\s*\\}\\s*\\)/);
```

You should add a circle flyer with `baseY = 96`.

```js
assert.match(code, /flyer\\.baseY\\s*=\\s*96/);
```

You should oscillate `f.y` via `Math.sin(time / 300) * 24`.

```js
assert.match(code, /f\\.y\\s*=\\s*f\\.baseY\\s*\\+\\s*Math\\.sin\\(\\s*time\\s*\\/\\s*300\\s*\\)\\s*\\*\\s*24/);
```
""",
)

add_step(
    31,
    "step-31",
    """\
HP drops to zero but nothing happens — the player stays at -1, -2, -3 HP and
keeps walking. Add a death state. Inside `takeDamage`, if HP hits zero or
below, kick over to a `gameOver` method:

```js
takeDamage() {
  if (this.time.now < this.invincibleUntil) return;
  this.invincibleUntil = this.time.now + 800;
  this.hp -= 1;
  this.player.setTint(0xff4444);
  this.time.delayedCall(150, () => this.player.clearTint());
  this.cameras.main.flash(150, 200, 50, 50);
  if (this.hp <= 0) this.gameOver();
}
```

```js
gameOver() {
  this.scene.start("GameOverScene");
}
```

`scene.start` takes the new scene's key — you'll define `GameOverScene` in
the next step.
""",
    """\
You should call `this.gameOver()` when `this.hp <= 0`.

```js
assert.match(code, /if\\s*\\(\\s*this\\.hp\\s*<=\\s*0\\s*\\)\\s*this\\.gameOver\\(\\s*\\)/);
```

You should declare a `gameOver` method that starts `"GameOverScene"`.

```js
assert.match(code, /gameOver\\s*\\(\\s*\\)\\s*\\{[\\s\\S]*?this\\.scene\\.start\\(\\s*["']GameOverScene["']\\s*\\)/);
```
""",
)

add_step(
    32,
    "step-32",
    """\
Define `GameOverScene` and register it in the config's scene array. The
scene draws a darkened overlay and waits for `R` to restart:

```js
class GameOverScene extends Phaser.Scene {
  constructor() {
    super("GameOverScene");
  }

  create() {
    this.add.rectangle(240, 96, 480, 192, 0x000000, 0.85);
    this.add
      .text(240, 70, "GAME OVER", { fontSize: "20px", color: "#ff6644" })
      .setOrigin(0.5);
    this.add
      .text(240, 110, "Press R to retry", { fontSize: "10px", color: "#ffee44" })
      .setOrigin(0.5);
    this.input.keyboard.once("keydown-R", () => {
      this.scene.start("MainScene");
    });
  }
}
```

Add the scene to the config (the editable region for this step is the
`scene` array line at the bottom of the file):

```js
scene: [MainScene, GameOverScene]
```
""",
    """\
You should declare a `GameOverScene` class extending `Phaser.Scene`.

```js
assert.match(code, /class\\s+GameOverScene\\s+extends\\s+Phaser\\.Scene/);
```

You should add `GameOverScene` to the `scene` array in the config.

```js
assert.match(code, /scene\\s*:\\s*\\[\\s*MainScene\\s*,\\s*GameOverScene/);
```

You should bind `keydown-R` to restart `"MainScene"`.

```js
assert.match(code, /this\\.input\\.keyboard\\.once\\(\\s*["']keydown-R["']\\s*,[\\s\\S]*?this\\.scene\\.start\\(\\s*["']MainScene["']\\s*\\)/);
```
""",
)

add_step(
    33,
    "step-33",
    """\
Add two one-way platforms — green ledges the player can jump up *through*
but lands *on*. Use `physics.add.collider`'s fourth-argument process
callback to gate the collision:

```js
this.oneWayPlatforms = this.physics.add.staticGroup();
[[600, 144], [950, 144]].forEach(([x, y]) => {
  this.oneWayPlatforms.add(
    this.add.rectangle(x, y, 64, 4, 0xaaffaa)
  );
});
this.physics.add.collider(
  this.player,
  this.oneWayPlatforms,
  null,
  (player, platform) => {
    if (this.cursors.down.isDown) return false;
    return player.body.bottom <= platform.body.top + 2;
  },
  this
);
```

Pressing DOWN drops through the platform — that is the standard
"intentional drop-through" gesture. The 2-px slack avoids flicker when the
bottom equals the top exactly.
""",
    """\
You should create `this.oneWayPlatforms` as a static group.

```js
assert.match(code, /this\\.oneWayPlatforms\\s*=\\s*this\\.physics\\.add\\.staticGroup\\(\\s*\\)/);
```

You should pass a process callback that returns `false` on `cursors.down.isDown` and otherwise returns `player.body.bottom <= platform.body.top + 2`.

```js
assert.match(code, /this\\.cursors\\.down\\.isDown[\\s\\S]*?return\\s+false[\\s\\S]*?player\\.body\\.bottom\\s*<=\\s*platform\\.body\\.top\\s*\\+\\s*2/);
```
""",
)

add_step(
    34,
    "step-34",
    """\
Add a checkpoint pickup. Touching it updates the player's spawn point so
that future game-overs respawn here instead of at the start (the goal
overlay step will read this):

```js
this.spawnPoint = { x: 40, y: 60 };
this.checkpoints = this.physics.add.staticGroup();
this.checkpoints.add(
  this.add.rectangle(640, 160, 8, 16, 0x44eeff)
);
this.physics.add.overlap(
  this.player,
  this.checkpoints,
  (player, cp) => {
    cp.setFillStyle(0x88ffaa);
    this.spawnPoint = { x: cp.x, y: cp.y - 16 };
  },
  null,
  this
);
```

Recoloring the checkpoint to a bright green is a low-cost visual
confirmation that the save took.
""",
    """\
You should initialize `this.spawnPoint` to `{ x: 40, y: 60 }`.

```js
assert.match(code, /this\\.spawnPoint\\s*=\\s*\\{\\s*x\\s*:\\s*40\\s*,\\s*y\\s*:\\s*60\\s*\\}/);
```

You should overlap with checkpoints and update `this.spawnPoint` to the checkpoint's location.

```js
assert.match(code, /cp\\.setFillStyle\\(\\s*0x88ffaa\\s*\\)/);
assert.match(code, /this\\.spawnPoint\\s*=\\s*\\{\\s*x\\s*:\\s*cp\\.x\\s*,\\s*y\\s*:\\s*cp\\.y\\s*-\\s*16\\s*\\}/);
```
""",
)

add_step(
    35,
    "step-35",
    """\
Add a key pickup. Picking it up flips a `hasKey` flag — the goal flag in
the next step rejects the player without it:

```js
this.hasKey = false;
this.key = this.add.rectangle(1120, 48, 10, 10, 0xffdd00);
this.physics.add.existing(this.key, true);
this.physics.add.overlap(
  this.player,
  this.key,
  () => {
    this.key.destroy();
    this.hasKey = true;
  },
  null,
  this
);
```

`physics.add.existing(rect, true)` promotes the rectangle to a static body
without putting it in a group.
""",
    """\
You should initialize `this.hasKey = false`.

```js
assert.match(code, /this\\.hasKey\\s*=\\s*false/);
```

You should overlap the player with `this.key`, destroy the key, and set `this.hasKey = true`.

```js
assert.match(code, /this\\.key\\.destroy\\(\\s*\\)[\\s\\S]*?this\\.hasKey\\s*=\\s*true/);
```
""",
)

add_step(
    36,
    "step-36",
    """\
Add the goal flag at the right edge of the level. Touching it triggers
`winLevel`, but only if the player has the key:

```js
this.goal = this.add.rectangle(1240, 152, 12, 32, 0x44ee88);
this.physics.add.existing(this.goal, true);
this.physics.add.overlap(
  this.player,
  this.goal,
  () => {
    if (this.hasKey) this.winLevel();
  },
  null,
  this
);
```

And the matching method outside `update`:

```js
winLevel() {
  if (this.won) return;
  this.won = true;
  this.physics.pause();
  this.add
    .text(this.player.x, 80, "LEVEL COMPLETE", {
      fontSize: "16px",
      color: "#44ee88"
    })
    .setOrigin(0.5);
}
```

The `if (this.won) return;` guards against the overlap firing on multiple
frames of contact — without it the text would spawn dozens of times.
""",
    """\
You should add a `goal` rectangle and overlap that calls `this.winLevel()` only when `this.hasKey`.

```js
assert.match(code, /this\\.goal\\s*=\\s*this\\.add\\.rectangle/);
assert.match(code, /if\\s*\\(\\s*this\\.hasKey\\s*\\)\\s*this\\.winLevel\\(\\s*\\)/);
```

You should declare a `winLevel` method that pauses physics and shows `LEVEL COMPLETE` text.

```js
assert.match(code, /winLevel\\s*\\(\\s*\\)\\s*\\{[\\s\\S]*?this\\.physics\\.pause\\(\\s*\\)[\\s\\S]*?["']LEVEL COMPLETE["']/);
```
""",
)

add_step(
    37,
    "step-37",
    """\
Persist completion to `localStorage` so a returning player sees their cleared
state across sessions. Inside `winLevel`, set the progress key:

```js
winLevel() {
  if (this.won) return;
  this.won = true;
  this.physics.pause();
  localStorage.setItem("phaser-platformer-progress:complete", "1");
  this.add
    .text(this.player.x, 80, "LEVEL COMPLETE", {
      fontSize: "16px",
      color: "#44ee88"
    })
    .setOrigin(0.5);
}
```

`localStorage` is synchronous and string-only — wrap any non-string state
in `JSON.stringify` if you need richer payloads later.
""",
    """\
You should call `localStorage.setItem("phaser-platformer-progress:complete", "1")` inside `winLevel`.

```js
assert.match(code, /localStorage\\.setItem\\(\\s*["']phaser-platformer-progress:complete["']\\s*,\\s*["']1["']\\s*\\)/);
```
""",
)

add_step(
    38,
    "step-38",
    """\
Track best clear time. Stamp `startTime` in `create`, read the existing
best from `localStorage`, then on win compute elapsed time and persist a new
best when applicable:

In `create`:

```js
this.startTime = this.time.now;
this.bestTime = parseFloat(
  localStorage.getItem("phaser-platformer-progress:best") || "Infinity"
);
```

Then expand `winLevel` to compute and display the run time:

```js
winLevel() {
  if (this.won) return;
  this.won = true;
  this.physics.pause();
  localStorage.setItem("phaser-platformer-progress:complete", "1");
  const elapsed = (this.time.now - this.startTime) / 1000;
  if (elapsed < this.bestTime) {
    this.bestTime = elapsed;
    localStorage.setItem(
      "phaser-platformer-progress:best",
      elapsed.toFixed(2)
    );
  }
  this.add
    .text(
      this.player.x,
      80,
      "LEVEL COMPLETE\\n" + elapsed.toFixed(2) + "s\\nbest " +
        (this.bestTime === Infinity ? "--" : this.bestTime.toFixed(2)),
      { fontSize: "12px", color: "#44ee88", align: "center" }
    )
    .setOrigin(0.5);
}
```
""",
    """\
You should stamp `this.startTime = this.time.now` and read `bestTime` from `localStorage`.

```js
assert.match(code, /this\\.startTime\\s*=\\s*this\\.time\\.now/);
assert.match(code, /this\\.bestTime\\s*=\\s*parseFloat\\([\\s\\S]*?phaser-platformer-progress:best/);
```

You should compute `elapsed` and update the best when shorter.

```js
assert.match(code, /const\\s+elapsed\\s*=\\s*\\(\\s*this\\.time\\.now\\s*-\\s*this\\.startTime\\s*\\)\\s*\\/\\s*1000/);
assert.match(code, /elapsed\\s*<\\s*this\\.bestTime[\\s\\S]*?localStorage\\.setItem\\(\\s*["']phaser-platformer-progress:best["']\\s*,\\s*elapsed\\.toFixed\\(\\s*2\\s*\\)/);
```
""",
)

add_step(
    39,
    "step-39",
    """\
Add a screen shake when the player lands from a tall fall. Track the
previous-frame Y velocity in `update`, and shake the camera if the player
hits the ground while falling fast:

```js
if (onGround && this.prevVelocityY > 280) {
  this.cameras.main.shake(120, 0.005);
}
this.prevVelocityY = this.player.body.velocity.y;
```

`shake(duration, intensity)`. `0.005` is gentle — bigger numbers feel
violent and ruin the readability of the rest of the canvas.
""",
    """\
You should detect a hard landing using `onGround && this.prevVelocityY > 280` and call `this.cameras.main.shake(120, 0.005)`.

```js
assert.match(code, /onGround\\s*&&\\s*this\\.prevVelocityY\\s*>\\s*280[\\s\\S]*?this\\.cameras\\.main\\.shake\\(\\s*120\\s*,\\s*0\\.005\\s*\\)/);
```

You should record `this.prevVelocityY = this.player.body.velocity.y` after the check.

```js
assert.match(code, /this\\.prevVelocityY\\s*=\\s*this\\.player\\.body\\.velocity\\.y/);
```
""",
)

add_step(
    40,
    "step-40",
    """\
Add a small dust-particle burst on hard landings. First, set up a particle
emitter in `create` with `emitting: false` so it does not auto-fire:

```js
this.dust = this.add.particles(0, 0, "hero", {
  frame: 12,
  speed: { min: 40, max: 80 },
  scale: { start: 0.4, end: 0 },
  lifespan: 200,
  quantity: 4,
  emitting: false
});
```

Then, in the existing landing-shake block, fire a burst at the player's feet:

```js
if (onGround && this.prevVelocityY > 280) {
  this.cameras.main.shake(120, 0.005);
  this.dust.emitParticleAt(this.player.x, this.player.y + 8);
}
this.prevVelocityY = this.player.body.velocity.y;
```

Reusing the hero spritesheet's frame 12 keeps things simple — no extra
asset to load.
""",
    """\
You should create a particle emitter `this.dust` using frame 12 of `"hero"` with `emitting: false`.

```js
assert.match(code, /this\\.dust\\s*=\\s*this\\.add\\.particles\\(\\s*0\\s*,\\s*0\\s*,\\s*["']hero["']\\s*,\\s*\\{[\\s\\S]*?frame\\s*:\\s*12[\\s\\S]*?emitting\\s*:\\s*false/);
```

You should call `this.dust.emitParticleAt(this.player.x, this.player.y + 8)` in the hard-landing branch.

```js
assert.match(code, /this\\.dust\\.emitParticleAt\\(\\s*this\\.player\\.x\\s*,\\s*this\\.player\\.y\\s*\\+\\s*8\\s*\\)/);
```
""",
)

add_step(
    41,
    "step-41",
    """\
Polish the coin pickup with a quick scale-and-fade tween before destroying:

```js
this.physics.add.overlap(
  this.player,
  this.coins,
  (player, coin) => {
    this.tweens.add({
      targets: coin,
      scale: 2,
      alpha: 0,
      duration: 150,
      onComplete: () => coin.destroy()
    });
    this.score += 1;
  },
  null,
  this
);
```

Tweening on the coin (a static body) is fine — Arcade does not retroactively
update static bodies' positions, but a 150-ms cosmetic tween on a body
that is about to destroy itself is harmless.
""",
    """\
You should tween the coin's `scale` to `2`, `alpha` to `0`, and destroy it on `onComplete`.

```js
assert.match(code, /this\\.tweens\\.add\\(\\s*\\{[\\s\\S]*?targets\\s*:\\s*coin[\\s\\S]*?scale\\s*:\\s*2[\\s\\S]*?alpha\\s*:\\s*0[\\s\\S]*?duration\\s*:\\s*150[\\s\\S]*?onComplete\\s*:\\s*\\(\\s*\\)\\s*=>\\s*coin\\.destroy\\(\\s*\\)/);
```
""",
)

add_step(
    42,
    "step-42",
    """\
Drop a wall-jump power-up into the level. Picking it up flips a flag that
gates wall-slide and wall-jump in the next two steps:

```js
this.hasWallJumpPower = false;
this.wallPower = this.add.rectangle(880, 160, 10, 10, 0x88ffff);
this.physics.add.existing(this.wallPower, true);
this.physics.add.overlap(
  this.player,
  this.wallPower,
  () => {
    this.wallPower.destroy();
    this.hasWallJumpPower = true;
  },
  null,
  this
);
```

Gating wall-jump behind a pickup is a gameplay choice — it lets the level
designer decide when the mechanic unlocks.
""",
    """\
You should add a `wallPower` rectangle and set `this.hasWallJumpPower = true` on overlap.

```js
assert.match(code, /this\\.hasWallJumpPower\\s*=\\s*false/);
assert.match(code, /this\\.wallPower\\s*=\\s*this\\.add\\.rectangle\\(\\s*880\\s*,\\s*160[\\s\\S]*?0x88ffff/);
assert.match(code, /this\\.wallPower\\.destroy\\(\\s*\\)[\\s\\S]*?this\\.hasWallJumpPower\\s*=\\s*true/);
```
""",
)

add_step(
    43,
    "step-43",
    """\
Implement a wall slide. When the player has the power-up, is pressed against
a wall mid-air, and is falling, dampen the fall to a wall-slide speed:

```js
const pressingWall =
  (this.cursors.left.isDown && this.player.body.touching.left) ||
  (this.cursors.right.isDown && this.player.body.touching.right);
this.wallSliding =
  this.hasWallJumpPower &&
  pressingWall &&
  !onGround &&
  this.player.body.velocity.y > 0;
if (this.wallSliding) {
  this.player.body.velocity.y = Math.min(
    this.player.body.velocity.y,
    60
  );
}
```

`Math.min` clamps the downward fall to `60` while leaving stronger upward
velocity (during a wall jump) untouched.
""",
    """\
You should compute `pressingWall` from `cursors.left.isDown && touching.left` or `cursors.right.isDown && touching.right`.

```js
assert.match(code, /const\\s+pressingWall\\s*=[\\s\\S]*?this\\.cursors\\.left\\.isDown\\s*&&\\s*this\\.player\\.body\\.touching\\.left[\\s\\S]*?this\\.cursors\\.right\\.isDown\\s*&&\\s*this\\.player\\.body\\.touching\\.right/);
```

You should set `this.wallSliding` to require `hasWallJumpPower`, `pressingWall`, `!onGround`, and `velocity.y > 0`.

```js
assert.match(code, /this\\.wallSliding\\s*=[\\s\\S]*?this\\.hasWallJumpPower[\\s\\S]*?pressingWall[\\s\\S]*?!onGround[\\s\\S]*?this\\.player\\.body\\.velocity\\.y\\s*>\\s*0/);
```

You should clamp `velocity.y` to a maximum of `60` while sliding.

```js
assert.match(code, /Math\\.min\\(\\s*this\\.player\\.body\\.velocity\\.y\\s*,\\s*60\\s*\\)/);
```
""",
)

add_step(
    44,
    "step-44",
    """\
Implement the wall jump. While wall sliding, a jump press launches the
player off the wall — opposite the touch direction:

```js
if (
  Phaser.Input.Keyboard.JustDown(this.cursors.up) &&
  this.wallSliding
) {
  const dir = this.player.body.touching.left ? 1 : -1;
  this.player.setVelocityX(200 * dir);
  this.player.setVelocityY(-260);
}
```

`dir` flips the X velocity sign based on which wall was touched. Combined
with the wall slide, you can chain jumps up vertical shafts.
""",
    """\
You should call `setVelocityX(200 * dir)` and `setVelocityY(-260)` when `JustDown(up)` and `wallSliding`.

```js
assert.match(code, /Phaser\\.Input\\.Keyboard\\.JustDown\\(\\s*this\\.cursors\\.up\\s*\\)\\s*&&\\s*this\\.wallSliding[\\s\\S]*?const\\s+dir\\s*=\\s*this\\.player\\.body\\.touching\\.left\\s*\\?\\s*1\\s*:\\s*-1[\\s\\S]*?this\\.player\\.setVelocityX\\(\\s*200\\s*\\*\\s*dir\\s*\\)[\\s\\S]*?this\\.player\\.setVelocityY\\(\\s*-260\\s*\\)/);
```
""",
)

add_step(
    45,
    "step-45",
    """\
Reserve a hook for audio without committing to specific sound assets yet —
chapter 7 will fill these in:

```js
this.playSfx = (name) => {};
```

A no-op stub means callers can write `this.playSfx("coin")` today and it
costs nothing. Replacing the stub later flips audio on globally without
touching any caller.
""",
    """\
You should declare `this.playSfx` as a function that takes a single argument and returns nothing.

```js
assert.match(code, /this\\.playSfx\\s*=\\s*\\(\\s*name\\s*\\)\\s*=>\\s*\\{\\s*\\}/);
```
""",
)

add_step(
    46,
    "step-46",
    """\
Add a pause scene. Pressing `P` pauses `MainScene` and launches a
`PauseScene` overlay; `P` again in the pause scene resumes:

```js
this.input.keyboard.on("keydown-P", () => {
  this.scene.pause();
  this.scene.launch("PauseScene");
});
```

Define the pause scene outside `MainScene`:

```js
class PauseScene extends Phaser.Scene {
  constructor() {
    super("PauseScene");
  }

  create() {
    this.add.rectangle(240, 96, 480, 192, 0x000000, 0.6);
    this.add
      .text(240, 80, "PAUSED", { fontSize: "20px", color: "#ffffff" })
      .setOrigin(0.5);
    this.add
      .text(240, 110, "Press P to resume", { fontSize: "10px", color: "#ffee44" })
      .setOrigin(0.5);
    this.input.keyboard.once("keydown-P", () => {
      this.scene.stop("PauseScene");
      this.scene.resume("MainScene");
    });
  }
}
```

Add `PauseScene` to the scene array:

```js
scene: [MainScene, GameOverScene, PauseScene]
```
""",
    """\
You should bind `keydown-P` in `MainScene` to pause and launch `PauseScene`.

```js
assert.match(code, /this\\.input\\.keyboard\\.on\\(\\s*["']keydown-P["']\\s*,[\\s\\S]*?this\\.scene\\.pause\\(\\s*\\)[\\s\\S]*?this\\.scene\\.launch\\(\\s*["']PauseScene["']/);
```

You should declare a `PauseScene` class extending `Phaser.Scene`.

```js
assert.match(code, /class\\s+PauseScene\\s+extends\\s+Phaser\\.Scene/);
```

You should add `PauseScene` to the `scene` config.

```js
assert.match(code, /scene\\s*:\\s*\\[\\s*MainScene\\s*,\\s*GameOverScene\\s*,\\s*PauseScene/);
```
""",
)

add_step(
    47,
    "step-47",
    """\
Add a stub level-select scene that previews a multi-level future. Add a
`SAVE_KEY` constant at the top of the file (used by the level select):

```js
const SAVE_KEY = "phaser-platformer-progress";
```

Then declare the scene before `GameOverScene`:

```js
class LevelSelectScene extends Phaser.Scene {
  constructor() {
    super("LevelSelectScene");
  }

  create() {
    this.add.rectangle(240, 96, 480, 192, 0x111122);
    this.add
      .text(240, 60, "LEVEL SELECT", { fontSize: "16px", color: "#ffffff" })
      .setOrigin(0.5);
    const completed = localStorage.getItem(SAVE_KEY + ":complete") === "1";
    const label = completed ? "Level 1 [CLEAR]" : "Level 1";
    this.add
      .text(240, 100, label, { fontSize: "12px", color: "#44ee88" })
      .setOrigin(0.5);
    this.add
      .text(240, 130, "Press ENTER to play", { fontSize: "10px", color: "#ffee44" })
      .setOrigin(0.5);
    this.input.keyboard.once("keydown-ENTER", () => {
      this.scene.start("MainScene");
    });
  }
}
```

And register it in the scene array:

```js
scene: [MainScene, GameOverScene, PauseScene, LevelSelectScene]
```
""",
    """\
You should declare a `SAVE_KEY` constant at the top of the file.

```js
assert.match(code, /const\\s+SAVE_KEY\\s*=\\s*["']phaser-platformer-progress["']/);
```

You should declare a `LevelSelectScene` class extending `Phaser.Scene`.

```js
assert.match(code, /class\\s+LevelSelectScene\\s+extends\\s+Phaser\\.Scene/);
```

You should add `LevelSelectScene` to the `scene` config.

```js
assert.match(code, /scene\\s*:\\s*\\[\\s*MainScene\\s*,\\s*GameOverScene\\s*,\\s*PauseScene\\s*,\\s*LevelSelectScene/);
```
""",
)

add_step(
    48,
    "step-48",
    """\
Wire up an F1 toggle for Arcade physics' debug graphics. Useful when tuning
hitboxes:

```js
this.input.keyboard.on("keydown-F1", () => {
  const w = this.physics.world;
  w.drawDebug = !w.drawDebug;
  if (!w.drawDebug) w.debugGraphic.clear();
});
```

`drawDebug` flips on a per-frame overlay drawing every body's bounding box;
clearing the graphic when toggling off avoids the last-frame ghost.
""",
    """\
You should bind `keydown-F1` to toggle `physics.world.drawDebug` and clear `debugGraphic` when off.

```js
assert.match(code, /this\\.input\\.keyboard\\.on\\(\\s*["']keydown-F1["']\\s*,[\\s\\S]*?w\\.drawDebug\\s*=\\s*!w\\.drawDebug[\\s\\S]*?w\\.debugGraphic\\.clear/);
```
""",
)

add_step(
    49,
    "step-49",
    """\
Add a ladder. While overlapping, gravity is disabled and UP/DOWN climb the
ladder at a slow speed.

In `create`:

```js
this.ladders = this.physics.add.staticGroup();
this.ladders.add(
  this.add.rectangle(496, 144, 8, 64, 0xddaa66, 0.6)
);
this.onLadder = false;
this.physics.add.overlap(
  this.player,
  this.ladders,
  () => {
    this.onLadder = true;
  },
  null,
  this
);
```

In `update`:

```js
if (this.onLadder) {
  this.player.body.allowGravity = false;
  if (this.cursors.up.isDown) this.player.setVelocityY(-80);
  else if (this.cursors.down.isDown) this.player.setVelocityY(80);
  else this.player.setVelocityY(0);
} else {
  this.player.body.allowGravity = true;
}
this.onLadder = false;
```

Resetting `onLadder` to `false` at the bottom of update means it must be
re-set by the overlap each frame to stay true — a clean way to detect "no
longer overlapping" without an `onExit` callback.
""",
    """\
You should create `this.ladders` as a static group and overlap to set `this.onLadder = true`.

```js
assert.match(code, /this\\.ladders\\s*=\\s*this\\.physics\\.add\\.staticGroup\\(\\s*\\)/);
assert.match(code, /this\\.onLadder\\s*=\\s*true/);
```

You should disable gravity and drive Y velocity from UP/DOWN while on a ladder.

```js
assert.match(code, /this\\.player\\.body\\.allowGravity\\s*=\\s*false[\\s\\S]*?this\\.cursors\\.up\\.isDown[\\s\\S]*?this\\.player\\.setVelocityY\\(\\s*-80\\s*\\)/);
assert.match(code, /this\\.cursors\\.down\\.isDown[\\s\\S]*?this\\.player\\.setVelocityY\\(\\s*80\\s*\\)/);
```

You should re-enable gravity and reset `onLadder` after the check.

```js
assert.match(code, /this\\.player\\.body\\.allowGravity\\s*=\\s*true/);
assert.match(code, /this\\.onLadder\\s*=\\s*false/);
```
""",
)

add_step(
    50,
    "step-50",
    """\
Add a water tile that slows the player down on overlap. The overlap
multiplies horizontal velocity by `0.6` and falling Y velocity by `0.4`
each frame, giving a viscous "swimming" feel:

```js
this.water = this.physics.add.staticGroup();
this.water.add(
  this.add.rectangle(208, 168, 64, 16, 0x4488ff, 0.5)
);
this.physics.add.overlap(
  this.player,
  this.water,
  () => {
    this.player.body.velocity.x *= 0.6;
    if (this.player.body.velocity.y > 0) {
      this.player.body.velocity.y *= 0.4;
    }
  },
  null,
  this
);
```

Only damping the falling case (`velocity.y > 0`) keeps jumps out of the
water from feeling weak.
""",
    """\
You should create `this.water` as a static group containing a translucent water rectangle.

```js
assert.match(code, /this\\.water\\s*=\\s*this\\.physics\\.add\\.staticGroup\\(\\s*\\)/);
assert.match(code, /this\\.water\\.add\\(\\s*this\\.add\\.rectangle\\(\\s*208\\s*,\\s*168\\s*,\\s*64\\s*,\\s*16\\s*,\\s*0x4488ff\\s*,\\s*0\\.5/);
```

You should multiply X velocity by `0.6` and falling Y velocity by `0.4` on overlap.

```js
assert.match(code, /this\\.player\\.body\\.velocity\\.x\\s*\\*=\\s*0\\.6/);
assert.match(code, /this\\.player\\.body\\.velocity\\.y\\s*>\\s*0[\\s\\S]*?this\\.player\\.body\\.velocity\\.y\\s*\\*=\\s*0\\.4/);
```
""",
)

add_step(
    51,
    "step-51",
    """\
Clamp the player's max velocity so a long fall does not break the physics
step or the camera shake threshold:

```js
this.player.body.setMaxVelocity(140, 380);
```

`setMaxVelocity(maxX, maxY)` enforces a per-axis ceiling. `140` matches
the run speed (so collisions can't push them past it laterally), and `380`
caps the fall slightly above the screen-shake threshold.
""",
    """\
You should call `this.player.body.setMaxVelocity(140, 380)`.

```js
assert.match(code, /this\\.player\\.body\\.setMaxVelocity\\(\\s*140\\s*,\\s*380\\s*\\)/);
```
""",
)

add_step(
    52,
    "step-52",
    """\
Bonking the ceiling currently re-stamps `lastGroundedAt` (because
`touching.down` flickers true on the moment of contact at the top of the
arc), giving the player a "ghost coyote jump" right after a head-bonk.
Block the stamp when the body is also blocked at the top:

```js
if (onGround && !this.player.body.blocked.up) {
  this.lastGroundedAt = time;
}
```

A small fix that cleans up an exotic but real edge case in tightly designed
levels.
""",
    """\
You should require `!this.player.body.blocked.up` before stamping `this.lastGroundedAt`.

```js
assert.match(code, /onGround\\s*&&\\s*!this\\.player\\.body\\.blocked\\.up[\\s\\S]*?this\\.lastGroundedAt\\s*=\\s*time/);
```
""",
)

add_step(
    53,
    "step-53",
    """\
Set debug graphics off by default in `create`:

```js
this.physics.world.drawDebug = false;
```

The config already sets `arcade.debug: false`, but explicitly initializing
the `drawDebug` flag makes the F1 toggle's first press deterministic.
""",
    """\
You should set `this.physics.world.drawDebug = false` in `create`.

```js
assert.match(code, /this\\.physics\\.world\\.drawDebug\\s*=\\s*false/);
```
""",
)

add_step(
    54,
    "step-54",
    """\
Two enemies stacked on top of each other can both fire `handleEnemyContact`
in the same frame, doubling the damage. Cool down enemy hits with a 200-ms
window:

```js
handleEnemyContact(player, enemy) {
  if (player.body.bottom <= enemy.body.top + 4 && player.body.velocity.y > 0) {
    enemy.destroy();
    player.setVelocityY(-220);
  } else {
    if (this.time.now - this.lastEnemyHitAt < 200) return;
    this.lastEnemyHitAt = this.time.now;
    this.takeDamage();
  }
}
```

The cooldown is independent of the iframe window — iframes block all
damage; this cooldown specifically prevents stacked-enemy double damage on
the same hit.
""",
    """\
You should early-return when `this.time.now - this.lastEnemyHitAt < 200`.

```js
assert.match(code, /this\\.time\\.now\\s*-\\s*this\\.lastEnemyHitAt\\s*<\\s*200[\\s\\S]*?return/);
```

You should stamp `this.lastEnemyHitAt = this.time.now` before calling `takeDamage`.

```js
assert.match(code, /this\\.lastEnemyHitAt\\s*=\\s*this\\.time\\.now[\\s\\S]*?this\\.takeDamage\\(\\s*\\)/);
```
""",
)

add_step(
    55,
    "step-55",
    """\
Final integration. Tune the player's body to be smaller than the sprite for
forgiving game-feel — players read the visual edge, not the body edge:

```js
this.player.body.setSize(10, 14);
this.player.body.setOffset(3, 2);
```

Insert these two lines immediately after `setCollideWorldBounds(true)`. The
10×14 hitbox sits centered horizontally inside the 16×16 sprite with a
small head margin, so corners feel forgiving.

Run the level end-to-end. Walk to the moving platform, ride it, jump up
through one-way platforms, hit a checkpoint, grab the wall-jump power-up,
collect coins, stomp enemies, dodge spikes, climb the ladder, swim through
water, find the key, and reach the goal flag. The level-complete overlay
shows your time and best. You shipped a complete platformer.
""",
    """\
You should call `this.player.body.setSize(10, 14)` after `setCollideWorldBounds`.

```js
assert.match(code, /this\\.player\\.body\\.setSize\\(\\s*10\\s*,\\s*14\\s*\\)/);
```

You should call `this.player.body.setOffset(3, 2)`.

```js
assert.match(code, /this\\.player\\.body\\.setOffset\\(\\s*3\\s*,\\s*2\\s*\\)/);
```
""",
)


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    if len(STEPS) != 55:
        raise SystemExit(f"expected 55 steps, got {len(STEPS)}")
    for spec in STEPS:
        n = spec["num"]
        if n == 1:
            seed = step1_seed()
        else:
            prev = solutions[n - 1]
            seed = SEED_BUILDERS[n](prev)
        markers = seed.count("--fcc-editable-region--")
        if markers != 2:
            raise SystemExit(f"step {n} has {markers} markers, expected 2")
        solution_js = solutions[55] if n == 55 else None
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
