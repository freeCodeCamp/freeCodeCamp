"""Generate workshop-side-scrolling-endless-runner step .md files (steps 1..45).

Each step wraps exactly one editable region around the focused diff against
the previous step's solution. The canonical solutions live in a state machine
that keeps a single running ``script.js`` string and mutates it with
anchor-based inserts and replaces, mirroring the Sprint 12 camera-playground
generator.
"""

from pathlib import Path

OUT_DIR = (
    Path(__file__).resolve().parents[2]
    / "curriculum/challenges/english/blocks/workshop-side-scrolling-endless-runner"
)
HEX_BASE = "66faa600000000000000{:04x}"
ID_OFFSET = 0xC9  # step 1 -> 0xca, step 45 -> 0xf6


HTML = """\
```html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Endless Runner</title>
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
  backgroundColor: "#1a1d2e",
  physics: {
    default: "arcade",
    arcade: { gravity: { y: 1500 }, debug: false }
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

  preload() {
    /* main-preload */
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
            f"seed insert anchor must be unique; got {prev_solution.count(anchor)}\n---\n{anchor!r}"
        )
    region = f"{REGION}\n\n{REGION}\n"
    return prev_solution.replace(anchor, anchor + region, 1)


def chain(*fns):
    def runner() -> None:
        for fn in fns:
            fn()
    return runner


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


# Step 1 special case: empty MainScene shell with the pre-filled config.

STEP1_SEED = (
    f"{REGION}\n\n{REGION}\n\nconst config = {{\n"
    "  type: Phaser.AUTO,\n"
    "  width: 480,\n"
    "  height: 320,\n"
    '  parent: "game-container",\n'
    '  backgroundColor: "#1a1d2e",\n'
    "  physics: {\n"
    '    default: "arcade",\n'
    "    arcade: { gravity: { y: 1500 }, debug: false }\n"
    "  },\n"
    "  scene: [MainScene]\n"
    "};\n\n"
    "new Phaser.Game(config);\n"
)

titles.append("Step 1")
descriptions.append(
    "Welcome to the endless-runner workshop. Across 45 steps you will build "
    "a complete endless runner: a player auto-scrolling past a four-layer "
    "parallax background, jumping over cacti, ducking flying birds, eating "
    "coins, persisting a personal best in `localStorage`, and ramping in "
    "difficulty until you crash.\n\n"
    "The world has gravity baked in. The `config` object below sets "
    "`gravity.y: 1500` — strong gravity is what makes a satisfying jump arc; "
    "a wimpy `300` value floats forever. Endless runners traditionally pull "
    "a player down hard.\n\nDeclare a `MainScene` class extending "
    '`Phaser.Scene` with a constructor that calls `super("MainScene")` and '
    "empty `preload`, `create`, and `update(time, delta)` methods.\n\n"
    "```js\n"
    "class MainScene extends Phaser.Scene {\n"
    "  constructor() {\n"
    '    super("MainScene");\n'
    "  }\n\n"
    "  preload() {}\n\n"
    "  create() {}\n\n"
    "  update(time, delta) {}\n"
    "}\n```\n\n"
    "The `config` object is already filled in — keep it as-is."
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
            "You should declare an `update` method that takes `time` and `delta`.",
            r"\bupdate\s*\(\s*time\s*,\s*delta\s*\)\s*\{",
        ),
    ]
)
seeds.append(STEP1_SEED)


# ----------------------------------------------------------------------------
# Code fragments
# ----------------------------------------------------------------------------

PRELOAD_PARALLAX_THREE = (
    '    this.load.image(\n      "sky",\n      "/curriculum-assets/phaser/spritesheets/parallax-sky.png"\n    );\n'
    '    this.load.image(\n      "mountains",\n      "/curriculum-assets/phaser/spritesheets/parallax-mountains.png"\n    );\n'
    '    this.load.image(\n      "ground",\n      "/curriculum-assets/phaser/spritesheets/parallax-ground.png"\n    );\n'
)

CREATE_TILESPRITES_THREE = (
    '    this.sky = this.add\n      .tileSprite(240, 160, 480, 320, "sky")\n      .setScrollFactor(0);\n'
    '    this.mountains = this.add\n      .tileSprite(240, 200, 480, 160, "mountains")\n      .setScrollFactor(0);\n'
    '    this.groundTile = this.add\n      .tileSprite(240, 288, 480, 64, "ground")\n      .setScrollFactor(0);\n'
    "    this.tickParallax = (dt) => {\n"
    "      this.sky.tilePositionX += 5 * dt;\n"
    "      this.mountains.tilePositionX += 25 * dt;\n"
    "      this.groundTile.tilePositionX += 240 * dt;\n"
    "    };\n"
)

UPDATE_PARALLAX_CALL = (
    "    const dt = delta / 1000;\n"
    "    this.tickParallax(dt);\n"
)

PRELOAD_HERO = (
    '    this.load.spritesheet(\n      "hero",\n      "/curriculum-assets/phaser/spritesheets/hero-walk.png",\n      { frameWidth: 16, frameHeight: 16 }\n    );\n'
)

CREATE_PLAYER = (
    '    this.player = this.physics.add.sprite(80, 200, "hero", 12);\n'
    "    this.player.setCollideWorldBounds(true);\n"
    "    this.anims.create({\n"
    '      key: "run",\n'
    '      frames: this.anims.generateFrameNumbers("hero", { frames: [12, 13, 14, 15] }),\n'
    "      frameRate: 10,\n"
    "      repeat: -1\n"
    "    });\n"
    '    this.player.play("run");\n'
)

GROUND_BODY_BLOCK = (
    "    this.groundBody = this.add\n"
    "      .rectangle(240, 264, 480, 8, 0x000000, 0)\n"
    "      .setOrigin(0.5, 0);\n"
    "    this.physics.add.existing(this.groundBody, true);\n"
)

COLLIDER_BLOCK = (
    "    this.physics.add.collider(this.player, this.groundBody);\n"
)

JUMP_BOOTSTRAP_BLOCK = (
    '    this.jumpKey = this.input.keyboard.addKey("SPACE");\n'
    "    this.lastGroundedAt = -Infinity;\n"
    "    this.lastJumpPressedAt = -Infinity;\n"
    "    this.updateJump = (time) => {\n"
    "      const grounded =\n"
    "        this.player.body.blocked.down || this.player.body.touching.down;\n"
    "      if (\n"
    "        Phaser.Input.Keyboard.JustDown(this.jumpKey) &&\n"
    "          grounded\n"
    "      ) {\n"
    "        this.player.setVelocityY(-600);\n"
    "      }\n"
    "    };\n"
)

UPDATE_JUMP_CALL = (
    "    this.updateJump(time);\n"
)

JUMP_COYOTE_REPLACEMENT = (
    "    this.updateJump = (time) => {\n"
    "      const grounded =\n"
    "        this.player.body.blocked.down || this.player.body.touching.down;\n"
    "      if (grounded) this.lastGroundedAt = time;\n"
    "      if (Phaser.Input.Keyboard.JustDown(this.jumpKey)) {\n"
    "        if (time - this.lastGroundedAt < 120) {\n"
    "          this.player.setVelocityY(-600);\n"
    "          this.lastGroundedAt = -Infinity;\n"
    "        }\n"
    "      }\n"
    "    };\n"
)

JUMP_BUFFER_REPLACEMENT = (
    "    this.updateJump = (time) => {\n"
    "      const grounded =\n"
    "        this.player.body.blocked.down || this.player.body.touching.down;\n"
    "      if (grounded) this.lastGroundedAt = time;\n"
    "      if (Phaser.Input.Keyboard.JustDown(this.jumpKey)) {\n"
    "        this.lastJumpPressedAt = time;\n"
    "      }\n"
    "      const canJump = time - this.lastGroundedAt < 120;\n"
    "      const buffered = time - this.lastJumpPressedAt < 120;\n"
    "      if (canJump && buffered) {\n"
    "        this.player.setVelocityY(-600);\n"
    "        this.lastGroundedAt = -Infinity;\n"
    "        this.lastJumpPressedAt = -Infinity;\n"
    "      }\n"
    "    };\n"
)

JUMP_NAIVE_FOR_REPLACE = (
    "    this.updateJump = (time) => {\n"
    "      const grounded =\n"
    "        this.player.body.blocked.down || this.player.body.touching.down;\n"
    "      if (\n"
    "        Phaser.Input.Keyboard.JustDown(this.jumpKey) &&\n"
    "          grounded\n"
    "      ) {\n"
    "        this.player.setVelocityY(-600);\n"
    "      }\n"
    "    };\n"
)

PRELOAD_CACTUS = (
    '    this.load.image(\n      "cactus",\n      "/curriculum-assets/phaser/spritesheets/cactus.png"\n    );\n'
)

CACTUS_GROUP_AND_SPAWN = (
    "    this.scrollSpeed = 200;\n"
    "    this.distance = 0;\n"
    "    this.obstacles = this.physics.add.group({ allowGravity: false });\n"
    "    this.spawnObstacle = () => {\n"
    '      const cactus = this.obstacles.create(520, 248, "cactus");\n'
    "      cactus.body.setVelocityX(-this.scrollSpeed);\n"
    "      cactus.setOrigin(0.5, 1);\n"
    "      cactus.body.setSize(16, 28).setOffset(4, 4);\n"
    "    };\n"
    "    this.spawnObstacle();\n"
)

OBSTACLE_TIMER_BLOCK = (
    "    this.obstacleTimer = this.time.addEvent({\n"
    "      delay: 1500,\n"
    "      loop: true,\n"
    "      callback: this.spawnObstacle\n"
    "    });\n"
)

OVERLAP_GAME_OVER_BLOCK = (
    "    this.physics.add.overlap(this.player, this.obstacles, () => {\n"
    "      this.gameOverDeath();\n"
    "    });\n"
)

GAME_OVER_DEATH_CLOSURE = (
    "    this.gameOver = false;\n"
    "    this.gameOverDeath = () => {\n"
    "      if (this.gameOver) return;\n"
    "      this.gameOver = true;\n"
    "      this.obstacleTimer.remove(false);\n"
    "      this.player.setVelocity(0, 0);\n"
    "      this.player.anims.stop();\n"
    "      this.add\n"
    '        .text(240, 140, "Game Over", {\n'
    '          fontSize: "24px",\n'
    '          color: "#ffffff"\n'
    "        })\n"
    "        .setOrigin(0.5)\n"
    "        .setDepth(200);\n"
    "    };\n"
)

UPDATE_DISTANCE_BLOCK = (
    "    if (!this.gameOver) {\n"
    "      this.distance += (this.scrollSpeed * delta) / 1000;\n"
    "    }\n"
)

HUD_DISTANCE_TEXT_BLOCK = (
    "    this.distanceText = this.add\n"
    '      .text(8, 8, "Dist: 0", {\n'
    '        fontSize: "12px",\n'
    '        color: "#ffffff"\n'
    "      })\n"
    "      .setScrollFactor(0)\n"
    "      .setDepth(120);\n"
)

BEST_INIT_AND_TEXT_BLOCK = (
    '    this.bestDistance = parseInt(\n'
    '      localStorage.getItem("runner:best") || "0",\n'
    "      10\n"
    "    );\n"
    "    this.bestText = this.add\n"
    '      .text(8, 24, "Best: " + this.bestDistance, {\n'
    '        fontSize: "10px",\n'
    '        color: "#cccccc"\n'
    "      })\n"
    "      .setScrollFactor(0)\n"
    "      .setDepth(120);\n"
)

UPDATE_HUD_BLOCK = (
    "    this.distanceText.setText(\n"
    '      "Dist: " + Math.floor(this.distance)\n'
    "    );\n"
)

BEST_PERSIST_BLOCK = (
    "      const dist = Math.floor(this.distance);\n"
    "      if (dist > this.bestDistance) {\n"
    "        this.bestDistance = dist;\n"
    '        localStorage.setItem("runner:best", String(dist));\n'
    '        this.bestText.setText("Best: " + dist);\n'
    "      }\n"
)

UPDATE_DISTANCE_PLUS_RAMP = (
    "    if (!this.gameOver) {\n"
    "      this.distance += (this.scrollSpeed * delta) / 1000;\n"
    "      this.scrollSpeed =\n"
    "        200 + Math.floor(this.distance / 1000) * 50;\n"
    "    }\n"
)

UPDATE_DISTANCE_PLUS_DELAY = (
    "    if (!this.gameOver) {\n"
    "      this.distance += (this.scrollSpeed * delta) / 1000;\n"
    "      const speedLevel = Math.floor(this.distance / 1000);\n"
    "      this.scrollSpeed = 200 + speedLevel * 50;\n"
    "      this.obstacleTimer.delay = Math.max(\n"
    "        500,\n"
    "        1500 - speedLevel * 100\n"
    "      );\n"
    "    }\n"
)

UPDATE_DISTANCE_WITH_BOOST = (
    "    if (!this.gameOver) {\n"
    "      this.distance += (this.scrollSpeed * delta) / 1000;\n"
    "      const speedLevel = Math.floor(this.distance / 1000);\n"
    "      const base = 200 + speedLevel * 50;\n"
    "      const boosting = this.time.now < this.boostUntil;\n"
    "      this.scrollSpeed = boosting ? base * 2 : base;\n"
    "      this.obstacleTimer.delay = Math.max(\n"
    "        500,\n"
    "        1500 - speedLevel * 100\n"
    "      );\n"
    "    }\n"
)

# Sprawning helper for additional groups (coin, double-jump, flyer, boost).

PRELOAD_COIN = (
    '    this.load.spritesheet(\n      "coin",\n      "/curriculum-assets/phaser/spritesheets/coin.png",\n      { frameWidth: 16, frameHeight: 16 }\n    );\n'
)

COIN_GROUP_BLOCK = (
    "    this.coins = this.physics.add.group({ allowGravity: false });\n"
    "    this.anims.create({\n"
    '      key: "spin",\n'
    '      frames: this.anims.generateFrameNumbers("coin", { frames: [0, 1, 2, 3, 4, 5, 6, 7] }),\n'
    "      frameRate: 12,\n"
    "      repeat: -1\n"
    "    });\n"
    "    this.spawnCoin = () => {\n"
    '      const c = this.coins.create(520, 200, "coin", 0);\n'
    "      c.body.setVelocityX(-this.scrollSpeed);\n"
    '      c.play("spin");\n'
    "    };\n"
    "    this.coinTimer = this.time.addEvent({\n"
    "      delay: 2700,\n"
    "      loop: true,\n"
    "      callback: this.spawnCoin\n"
    "    });\n"
    "    this.physics.add.overlap(this.player, this.coins, (_p, coin) => {\n"
    "      coin.destroy();\n"
    "      this.distance += 50;\n"
    "    });\n"
)

DOUBLE_JUMP_GROUP_BLOCK = (
    "    this.canDoubleJump = false;\n"
    "    this.didDoubleJump = false;\n"
    "    this.powerups = this.physics.add.group({ allowGravity: false });\n"
    "    this.spawnDoubleJump = () => {\n"
    "      const p = this.add.rectangle(520, 200, 14, 14, 0x66ddff);\n"
    "      this.physics.add.existing(p);\n"
    "      this.powerups.add(p);\n"
    "      p.body.setVelocityX(-this.scrollSpeed);\n"
    '      p.kind = "double";\n'
    "    };\n"
    "    this.powerupTimer = this.time.addEvent({\n"
    "      delay: 6500,\n"
    "      loop: true,\n"
    "      callback: this.spawnDoubleJump\n"
    "    });\n"
    "    this.physics.add.overlap(this.player, this.powerups, (_p, item) => {\n"
    '      if (item.kind === "double") {\n'
    "        this.canDoubleJump = true;\n"
    "      }\n"
    "      item.destroy();\n"
    "    });\n"
)

JUMP_DOUBLE_REPLACEMENT = (
    "    this.updateJump = (time) => {\n"
    "      const grounded =\n"
    "        this.player.body.blocked.down || this.player.body.touching.down;\n"
    "      if (grounded) {\n"
    "        this.lastGroundedAt = time;\n"
    "        this.didDoubleJump = false;\n"
    "      }\n"
    "      if (Phaser.Input.Keyboard.JustDown(this.jumpKey)) {\n"
    "        this.lastJumpPressedAt = time;\n"
    "      }\n"
    "      const canJump = time - this.lastGroundedAt < 120;\n"
    "      const buffered = time - this.lastJumpPressedAt < 120;\n"
    "      if (canJump && buffered) {\n"
    "        this.player.setVelocityY(-600);\n"
    "        this.lastGroundedAt = -Infinity;\n"
    "        this.lastJumpPressedAt = -Infinity;\n"
    "      } else if (\n"
    "        buffered &&\n"
    "        this.canDoubleJump &&\n"
    "        !this.didDoubleJump &&\n"
    "        !grounded\n"
    "      ) {\n"
    "        this.player.setVelocityY(-520);\n"
    "        this.didDoubleJump = true;\n"
    "        this.lastJumpPressedAt = -Infinity;\n"
    "      }\n"
    "    };\n"
)

PRELOAD_FLYER = (
    '    this.load.spritesheet(\n      "flyer",\n      "/curriculum-assets/phaser/spritesheets/flying-enemy.png",\n      { frameWidth: 24, frameHeight: 16 }\n    );\n'
)

FLYER_GROUP_BLOCK = (
    "    this.flyers = this.physics.add.group({ allowGravity: false });\n"
    "    this.spawnFlyer = () => {\n"
    '      const f = this.flyers.create(520, 200, "flyer", 0);\n'
    "      f.body.setVelocityX(-this.scrollSpeed);\n"
    "    };\n"
    "    this.anims.create({\n"
    '      key: "fly",\n'
    '      frames: this.anims.generateFrameNumbers("flyer", { frames: [0, 1, 2, 3] }),\n'
    "      frameRate: 8,\n"
    "      repeat: -1\n"
    "    });\n"
    "    this.flyerTimer = this.time.addEvent({\n"
    "      delay: 4500,\n"
    "      loop: true,\n"
    "      callback: this.spawnFlyer\n"
    "    });\n"
    "    this.physics.add.overlap(this.player, this.flyers, () => {\n"
    "      this.gameOverDeath();\n"
    "    });\n"
)

DUCK_INPUT_BLOCK = (
    '    this.duckKey = this.input.keyboard.addKey("DOWN");\n'
    "    this.applyDuck = (down) => {\n"
    "      if (down) {\n"
    "        this.player.body.setSize(12, 8).setOffset(2, 8);\n"
    "      } else {\n"
    "        this.player.body.setSize(16, 16).setOffset(0, 0);\n"
    "      }\n"
    "    };\n"
)

UPDATE_DUCK_BLOCK = (
    "    this.applyDuck(this.duckKey.isDown);\n"
)

POWERUP_FLASH_OLD = (
    "    this.physics.add.overlap(this.player, this.powerups, (_p, item) => {\n"
    '      if (item.kind === "double") {\n'
    "        this.canDoubleJump = true;\n"
    "      }\n"
    "      item.destroy();\n"
    "    });\n"
)

POWERUP_FLASH_NEW = (
    "    this.physics.add.overlap(this.player, this.powerups, (_p, item) => {\n"
    '      if (item.kind === "double") {\n'
    "        this.canDoubleJump = true;\n"
    "      }\n"
    "      item.destroy();\n"
    "      this.cameras.main.flash(160, 102, 221, 255);\n"
    "    });\n"
)

PRELOAD_CLOUDS = (
    '    this.load.image(\n      "clouds",\n      "/curriculum-assets/phaser/spritesheets/parallax-clouds.png"\n    );\n'
)

DUST_TEXTURE_BLOCK = (
    "    const dustGfx = this.make.graphics({ x: 0, y: 0, add: false });\n"
    "    dustGfx.fillStyle(0xffffff, 0.6);\n"
    "    dustGfx.fillCircle(2, 2, 2);\n"
    '    dustGfx.generateTexture("dust", 4, 4);\n'
    "    dustGfx.destroy();\n"
    '    this.dust = this.add.particles(0, 0, "dust", {\n'
    "      lifespan: 400,\n"
    "      speedX: { min: -120, max: -60 },\n"
    "      speedY: { min: -10, max: 10 },\n"
    "      scale: { start: 1, end: 0 },\n"
    "      quantity: 1,\n"
    "      frequency: 90,\n"
    "      follow: this.player,\n"
    "      followOffset: { x: -4, y: 6 }\n"
    "    });\n"
)

REDUCE_MOTION_INIT_BLOCK = (
    "    this.reduceMotion = window.matchMedia(\n"
    '      "(prefers-reduced-motion: reduce)"\n'
    "    ).matches;\n"
    "    if (this.reduceMotion && this.dust) this.dust.stop();\n"
)

# Clamp obstacle spawn so they never overlap.
SPAWN_OBSTACLE_OLD = (
    "    this.spawnObstacle = () => {\n"
    '      const cactus = this.obstacles.create(520, 248, "cactus");\n'
    "      cactus.body.setVelocityX(-this.scrollSpeed);\n"
    "      cactus.setOrigin(0.5, 1);\n"
    "      cactus.body.setSize(16, 28).setOffset(4, 4);\n"
    "    };\n"
)

SPAWN_OBSTACLE_CLAMP = (
    "    this.lastObstacleX = -Infinity;\n"
    "    this.spawnObstacle = () => {\n"
    "      if (520 - this.lastObstacleX < 200) return;\n"
    '      const cactus = this.obstacles.create(520, 248, "cactus");\n'
    "      cactus.body.setVelocityX(-this.scrollSpeed);\n"
    "      cactus.setOrigin(0.5, 1);\n"
    "      cactus.body.setSize(16, 28).setOffset(4, 4);\n"
    "      this.lastObstacleX = 520;\n"
    "    };\n"
)

PLAYER_SNAP_BLOCK = (
    "    if (\n"
    "      (this.player.body.blocked.down || this.player.body.touching.down) &&\n"
    "      this.player.body.velocity.y >= 0\n"
    "    ) {\n"
    "      this.player.y = 256;\n"
    "    }\n"
)

START_OVERLAY_BLOCK = (
    "    this.started = false;\n"
    "    this.startText = this.add\n"
    "      .text(\n"
    "        240,\n"
    "        160,\n"
    '        "Press SPACE / Tap to start",\n'
    "        {\n"
    '          fontSize: "14px",\n'
    '          color: "#ffffff",\n'
    '          backgroundColor: "#000000aa",\n'
    "          padding: { x: 8, y: 4 }\n"
    "        }\n"
    "      )\n"
    "      .setOrigin(0.5)\n"
    "      .setScrollFactor(0)\n"
    "      .setDepth(200);\n"
    "    this.uiLayer.add(this.startText);\n"
    "    this.startGame = () => {\n"
    "      if (this.started) return;\n"
    "      this.started = true;\n"
    "      this.startText.destroy();\n"
    "    };\n"
)

# Step 2 — preload three parallax textures.
step(
    2,
    title="Step 2",
    description=(
        "The world has gravity but no scenery. Start by loading the three "
        "parallax PNGs you'll stack in the next step. The asset bundle ships "
        "with the curriculum, so all you need are three loader calls.\n\n"
        "Inside `preload`:\n\n"
        "```js\n"
        'this.load.image(\n  "sky",\n  "/curriculum-assets/phaser/spritesheets/parallax-sky.png"\n);\n'
        'this.load.image(\n  "mountains",\n  "/curriculum-assets/phaser/spritesheets/parallax-mountains.png"\n);\n'
        'this.load.image(\n  "ground",\n  "/curriculum-assets/phaser/spritesheets/parallax-ground.png"\n);\n'
        "```\n\nThe images are tileable — left edge meets right edge — so "
        "they'll loop forever in a `tileSprite` without visible seams."
    ),
    hints=[
        (
            'You should call `this.load.image("sky", "/curriculum-assets/phaser/spritesheets/parallax-sky.png")`.',
            r'this\.load\.image\(\s*["\']sky["\']\s*,\s*["\']/curriculum-assets/phaser/spritesheets/parallax-sky\.png["\']\s*\)',
        ),
        (
            'You should call `this.load.image("mountains", "/curriculum-assets/phaser/spritesheets/parallax-mountains.png")`.',
            r'this\.load\.image\(\s*["\']mountains["\']\s*,\s*["\']/curriculum-assets/phaser/spritesheets/parallax-mountains\.png["\']\s*\)',
        ),
        (
            'You should call `this.load.image("ground", "/curriculum-assets/phaser/spritesheets/parallax-ground.png")`.',
            r'this\.load\.image\(\s*["\']ground["\']\s*,\s*["\']/curriculum-assets/phaser/spritesheets/parallax-ground\.png["\']\s*\)',
        ),
    ],
    seed_text=seed_wrap(solutions[1], "    /* main-preload */\n"),
    mutate=lambda: state.replace("    /* main-preload */\n", PRELOAD_PARALLAX_THREE),
)

# Step 3 — three tileSprites + tickParallax closure (back-to-front, scroll factor 0).
step(
    3,
    title="Step 3",
    description=(
        "Stack three `tileSprite`s back-to-front and define a closure that "
        "advances each layer at its own speed. Add order is render order, so "
        "the sky goes in first (back), then mountains, then ground (front). "
        "Each `tileSprite(x, y, width, height, key)` is centred at `(x, y)` "
        "and tiles its texture across `(width, height)`. Chain "
        "`setScrollFactor(0)` so the layers stay locked to the camera even "
        "if you add a shake later. Then capture the per-frame parallax "
        "advance in a `this.tickParallax(dt)` closure — when you add a "
        "cloud layer in step 34 you'll just edit one block.\n\nInside "
        "`create`:\n\n"
        "```js\n"
        'this.sky = this.add\n  .tileSprite(240, 160, 480, 320, "sky")\n  .setScrollFactor(0);\n'
        'this.mountains = this.add\n  .tileSprite(240, 200, 480, 160, "mountains")\n  .setScrollFactor(0);\n'
        'this.groundTile = this.add\n  .tileSprite(240, 288, 480, 64, "ground")\n  .setScrollFactor(0);\n'
        "this.tickParallax = (dt) => {\n"
        "  this.sky.tilePositionX += 5 * dt;\n"
        "  this.mountains.tilePositionX += 25 * dt;\n"
        "  this.groundTile.tilePositionX += 240 * dt;\n"
        "};\n"
        "```\n\nThe sky drifts at 5 px/s, mountains at 25 px/s, ground at "
        "240 px/s. The 48× ratio between sky and ground is what tells your "
        "eye the sky is far and the ground is close."
    ),
    hints=[
        (
            'You should chain `.setScrollFactor(0)` after creating `this.sky` with the `"sky"` key.',
            r'this\.sky\s*=\s*this\.add\s*\.tileSprite\(\s*240\s*,\s*160\s*,\s*480\s*,\s*320\s*,\s*["\']sky["\']\s*\)\s*\.setScrollFactor\(\s*0\s*\)',
        ),
        (
            'You should create `this.mountains` and chain `.setScrollFactor(0)`.',
            r'this\.mountains\s*=\s*this\.add\s*\.tileSprite\(\s*240\s*,\s*200\s*,\s*480\s*,\s*160\s*,\s*["\']mountains["\']\s*\)\s*\.setScrollFactor\(\s*0\s*\)',
        ),
        (
            'You should create `this.groundTile` and chain `.setScrollFactor(0)`.',
            r'this\.groundTile\s*=\s*this\.add\s*\.tileSprite\(\s*240\s*,\s*288\s*,\s*480\s*,\s*64\s*,\s*["\']ground["\']\s*\)\s*\.setScrollFactor\(\s*0\s*\)',
        ),
        (
            "You should define `this.tickParallax = (dt) => { ... }` advancing the sky at `5 * dt`, mountains at `25 * dt`, and ground at `240 * dt`.",
            r"this\.tickParallax\s*=\s*\(\s*dt\s*\)\s*=>\s*\{[\s\S]*this\.sky\.tilePositionX\s*\+=\s*5\s*\*\s*dt[\s\S]*this\.mountains\.tilePositionX\s*\+=\s*25\s*\*\s*dt[\s\S]*this\.groundTile\.tilePositionX\s*\+=\s*240\s*\*\s*dt",
        ),
    ],
    seed_text=seed_wrap(solutions[2], "    /* main-create */\n"),
    mutate=lambda: state.replace("    /* main-create */\n", CREATE_TILESPRITES_THREE),
)

# Step 4 — wire tickParallax(dt) into the update loop.
step(
    4,
    title="Step 4",
    description=(
        "Closures don't run themselves. Convert `delta` (milliseconds) into "
        "seconds and call `this.tickParallax(dt)` once per frame.\n\nInside "
        "`update`:\n\n"
        "```js\n"
        "const dt = delta / 1000;\n"
        "this.tickParallax(dt);\n"
        "```\n\nReload the preview — the sky drifts almost imperceptibly, "
        "the mountains a little faster, and the ground races past. The "
        "speed-ratio gives the eye depth even though every layer is 2D."
    ),
    hints=[
        (
            "You should compute `const dt = delta / 1000` so the parallax is frame-rate independent.",
            r"const\s+dt\s*=\s*delta\s*/\s*1000",
        ),
        (
            "You should call `this.tickParallax(dt)` to advance each tile sprite.",
            r"this\.tickParallax\(\s*dt\s*\)",
        ),
    ],
    seed_text=seed_wrap(solutions[3], "    /* main-update */\n"),
    mutate=lambda: state.replace("    /* main-update */\n", UPDATE_PARALLAX_CALL),
)

# Step 5 — preload hero spritesheet, add player sprite, register run animation.
PLAYER_FULL_BLOCK = PRELOAD_HERO

step(
    5,
    title="Step 5",
    description=(
        "Time to add the runner. The hero spritesheet is 64 × 64 with four "
        "rows of 16 × 16 frames; the rightward-walk row sits at frames 12-15. "
        "Load the spritesheet in `preload`, then in `create` add a physics "
        "sprite at the fixed runner X position (`80`), build a four-frame "
        "`run` animation, and play it.\n\nFirst, append the hero loader at "
        "the end of `preload`:\n\n"
        "```js\n"
        'this.load.spritesheet(\n'
        '  "hero",\n'
        '  "/curriculum-assets/phaser/spritesheets/hero-walk.png",\n'
        "  { frameWidth: 16, frameHeight: 16 }\n"
        ");\n"
        "```"
    ),
    hints=[
        (
            'You should call `this.load.spritesheet("hero", "/curriculum-assets/phaser/spritesheets/hero-walk.png", { frameWidth: 16, frameHeight: 16 })`.',
            r'this\.load\.spritesheet\(\s*["\']hero["\']\s*,\s*["\']/curriculum-assets/phaser/spritesheets/hero-walk\.png["\']\s*,\s*\{\s*frameWidth:\s*16\s*,\s*frameHeight:\s*16\s*\}\s*\)',
        ),
    ],
    seed_text=seed_insert(
        solutions[4],
        '      "/curriculum-assets/phaser/spritesheets/parallax-ground.png"\n    );\n',
    ),
    mutate=lambda: state.insert_after(
        '      "/curriculum-assets/phaser/spritesheets/parallax-ground.png"\n    );\n',
        PRELOAD_HERO,
    ),
)

# Step 6 — add the physics sprite and run animation in create().
step(
    6,
    title="Step 6",
    description=(
        "Create the physics sprite at `(80, 200)` using frame 12 (the first "
        "frame of the rightward-walk row). Phaser's arcade physics gives it a "
        "body so gravity can pull it down once the world has a floor. Tell it "
        "to collide with the world bounds, then build the four-frame `run` "
        "animation cycling frames 12-15 at 10 fps, and play it.\n\nAt the "
        "end of `create` (after the parallax tile sprites):\n\n"
        "```js\n"
        'this.player = this.physics.add.sprite(80, 200, "hero", 12);\n'
        "this.player.setCollideWorldBounds(true);\n"
        "this.anims.create({\n"
        '  key: "run",\n'
        '  frames: this.anims.generateFrameNumbers("hero", { frames: [12, 13, 14, 15] }),\n'
        "  frameRate: 10,\n"
        "  repeat: -1\n"
        "});\n"
        'this.player.play("run");\n'
        "```\n\nThe player is now in the world. Without a ground body the "
        "next step will add, gravity will drop the hero through the floor — "
        "that's expected for one frame of progress."
    ),
    hints=[
        (
            'You should create `this.player` with `this.physics.add.sprite(80, 200, "hero", 12)`.',
            r'this\.player\s*=\s*this\.physics\.add\.sprite\(\s*80\s*,\s*200\s*,\s*["\']hero["\']\s*,\s*12\s*\)',
        ),
        (
            "You should call `this.player.setCollideWorldBounds(true)`.",
            r"this\.player\.setCollideWorldBounds\(\s*true\s*\)",
        ),
        (
            'You should create the `"run"` animation with frames `[12, 13, 14, 15]` at `frameRate: 10` and `repeat: -1`.',
            r'this\.anims\.create\(\s*\{\s*key:\s*["\']run["\']\s*,\s*frames:\s*this\.anims\.generateFrameNumbers\(\s*["\']hero["\']\s*,\s*\{\s*frames:\s*\[\s*12\s*,\s*13\s*,\s*14\s*,\s*15\s*\]\s*\}\s*\)\s*,\s*frameRate:\s*10\s*,\s*repeat:\s*-1\s*\}\s*\)',
        ),
        (
            'You should call `this.player.play("run")`.',
            r'this\.player\.play\(\s*["\']run["\']\s*\)',
        ),
    ],
    seed_text=seed_insert(solutions[5], CREATE_TILESPRITES_THREE),
    mutate=lambda: state.insert_after(CREATE_TILESPRITES_THREE, CREATE_PLAYER),
)

# Step 7 — invisible static ground body so the player has something to land on.
step(
    7,
    title="Step 7",
    description=(
        "Gravity pulls the hero down forever — there's no floor. Add an "
        "**invisible static rectangle** as a physics body the player will "
        "collide with. The visible `groundTile` is decorative; this rectangle "
        "is the actual collision surface. Place it just below the grass "
        "strip of the ground tile so the player's feet line up with the "
        "visible ground.\n\nAt the end of `create`:\n\n"
        "```js\n"
        "this.groundBody = this.add\n"
        "  .rectangle(240, 264, 480, 8, 0x000000, 0)\n"
        "  .setOrigin(0.5, 0);\n"
        "this.physics.add.existing(this.groundBody, true);\n"
        "```\n\n`add.rectangle(x, y, width, height, color, alpha)` with "
        "`alpha: 0` is invisible. `setOrigin(0.5, 0)` puts the rectangle's "
        "*top* at `y = 264`. `physics.add.existing(obj, true)` registers it "
        "as a **static** body — immovable, no gravity, perfect for floors."
    ),
    hints=[
        (
            "You should create `this.groundBody` as `this.add.rectangle(240, 264, 480, 8, 0x000000, 0)` with origin `(0.5, 0)`.",
            r"this\.groundBody\s*=\s*this\.add\s*\.rectangle\(\s*240\s*,\s*264\s*,\s*480\s*,\s*8\s*,\s*0x000000\s*,\s*0\s*\)\s*\.setOrigin\(\s*0\.5\s*,\s*0\s*\)",
        ),
        (
            "You should register the ground rectangle as a static physics body via `this.physics.add.existing(this.groundBody, true)`.",
            r"this\.physics\.add\.existing\(\s*this\.groundBody\s*,\s*true\s*\)",
        ),
    ],
    seed_text=seed_insert(
        solutions[6],
        '    this.player.play("run");\n',
    ),
    mutate=lambda: state.insert_after(
        '    this.player.play("run");\n',
        GROUND_BODY_BLOCK,
    ),
)

# Step 8 — collider between player and ground.
step(
    8,
    title="Step 8",
    description=(
        "A static body alone doesn't stop a falling sprite — Phaser arcade "
        "physics needs you to register the **collider** explicitly.\n\n"
        "After registering the ground body in `create`:\n\n"
        "```js\n"
        "this.physics.add.collider(this.player, this.groundBody);\n"
        "```\n\nThe player now lands on the ground. Reload the preview and "
        "the hero stands at the surface, animation cycling. Collisions are "
        "now the foundation for the next step: jumping."
    ),
    hints=[
        (
            "You should register a collider between `this.player` and `this.groundBody` via `this.physics.add.collider`.",
            r"this\.physics\.add\.collider\(\s*this\.player\s*,\s*this\.groundBody\s*\)",
        ),
    ],
    seed_text=seed_insert(
        solutions[7],
        "    this.physics.add.existing(this.groundBody, true);\n",
    ),
    mutate=lambda: state.insert_after(
        "    this.physics.add.existing(this.groundBody, true);\n",
        COLLIDER_BLOCK,
    ),
)


# Step 9 — jump bootstrap: SPACE key + state + naive updateJump closure.
step(
    9,
    title="Step 9",
    description=(
        "Wire the jump in two parts. This step sets up the **closure**; the "
        "next step calls it from `update`. Add a `SPACE` key, two timestamp "
        "trackers (you'll need them for coyote time and jump buffering "
        "soon), and a `this.updateJump(time)` closure that — for now — does "
        "the naive thing: jumps when grounded.\n\nAt the end of `create`:\n\n"
        "```js\n"
        'this.jumpKey = this.input.keyboard.addKey("SPACE");\n'
        "this.lastGroundedAt = -Infinity;\n"
        "this.lastJumpPressedAt = -Infinity;\n"
        "this.updateJump = (time) => {\n"
        "  const grounded =\n"
        "    this.player.body.blocked.down || this.player.body.touching.down;\n"
        "  if (\n"
        "    Phaser.Input.Keyboard.JustDown(this.jumpKey) &&\n"
        "      grounded\n"
        "  ) {\n"
        "    this.player.setVelocityY(-600);\n"
        "  }\n"
        "};\n"
        "```\n\nThe closure isn't called yet — that's step 10. With "
        "gravity at `1500` and a launch velocity of `-600`, the arc lasts "
        "roughly 800 ms; tune both numbers if your obstacles need different "
        "spacing."
    ),
    hints=[
        (
            'You should add the SPACE key as `this.jumpKey = this.input.keyboard.addKey("SPACE")`.',
            r'this\.jumpKey\s*=\s*this\.input\.keyboard\.addKey\(\s*["\']SPACE["\']\s*\)',
        ),
        (
            "You should initialise `this.lastGroundedAt = -Infinity` (you'll use it for coyote time soon).",
            r"this\.lastGroundedAt\s*=\s*-Infinity",
        ),
        (
            "You should initialise `this.lastJumpPressedAt = -Infinity`.",
            r"this\.lastJumpPressedAt\s*=\s*-Infinity",
        ),
        (
            "Inside `this.updateJump = (time) => { ... }` you should jump only when grounded — call `setVelocityY(-600)`.",
            r"this\.updateJump\s*=\s*\(\s*time\s*\)\s*=>\s*\{[\s\S]*Phaser\.Input\.Keyboard\.JustDown\(\s*this\.jumpKey\s*\)[\s\S]*setVelocityY\(\s*-600\s*\)",
        ),
    ],
    seed_text=seed_insert(
        solutions[8],
        "    this.physics.add.collider(this.player, this.groundBody);\n",
    ),
    mutate=lambda: state.insert_after(
        "    this.physics.add.collider(this.player, this.groundBody);\n",
        JUMP_BOOTSTRAP_BLOCK,
    ),
)

# Step 10 — wire updateJump into update body.
step(
    10,
    title="Step 10",
    description=(
        "Closures don't run themselves. Call `this.updateJump(time)` once "
        "per frame in `update`, after the parallax animation.\n\nAt the end "
        "of `update`:\n\n"
        "```js\n"
        "this.updateJump(time);\n"
        "```\n\nReload — SPACE now jumps. The naive check fires the jump "
        "only on key-press frames where the player happens to be touching "
        "the ground; the next two steps make it forgiving."
    ),
    hints=[
        (
            "You should call `this.updateJump(time)` in `update`.",
            r"this\.updateJump\(\s*time\s*\)",
        ),
    ],
    seed_text=seed_insert(
        solutions[9],
        "    this.tickParallax(dt);\n",
    ),
    mutate=lambda: state.insert_after(
        "    this.tickParallax(dt);\n",
        UPDATE_JUMP_CALL,
    ),
)

# Step 11 — coyote time replaces the naive updateJump body.
step(
    11,
    title="Step 11",
    description=(
        "**Coyote time** lets the player jump for a brief grace period after "
        "leaving a ledge — named for cartoons where Wile E. Coyote runs off "
        "a cliff and stays in the air a beat too long. Without it, players "
        "feel cheated when they press SPACE the same frame they walk off.\n"
        "\nReplace the entire `this.updateJump` closure with the "
        "coyote-aware version. Track the latest grounded time, and allow a "
        "jump if the press happens within 120 ms of leaving the ground:\n\n"
        "```js\n"
        "this.updateJump = (time) => {\n"
        "  const grounded =\n"
        "    this.player.body.blocked.down || this.player.body.touching.down;\n"
        "  if (grounded) this.lastGroundedAt = time;\n"
        "  if (Phaser.Input.Keyboard.JustDown(this.jumpKey)) {\n"
        "    if (time - this.lastGroundedAt < 120) {\n"
        "      this.player.setVelocityY(-600);\n"
        "      this.lastGroundedAt = -Infinity;\n"
        "    }\n"
        "  }\n"
        "};\n"
        "```\n\nResetting `this.lastGroundedAt = -Infinity` after firing is "
        "what blocks repeated jumps from a single grounded frame."
    ),
    hints=[
        (
            "You should stamp `this.lastGroundedAt = time` whenever the player is grounded.",
            r"if\s*\(\s*grounded\s*\)\s*this\.lastGroundedAt\s*=\s*time",
        ),
        (
            "You should allow a jump when `time - this.lastGroundedAt < 120`.",
            r"if\s*\(\s*time\s*-\s*this\.lastGroundedAt\s*<\s*120\s*\)",
        ),
        (
            "After firing the jump you should set `this.lastGroundedAt = -Infinity` to prevent a second jump.",
            r"this\.player\.setVelocityY\(\s*-600\s*\)\s*;\s*\n\s*this\.lastGroundedAt\s*=\s*-Infinity",
        ),
    ],
    seed_text=seed_wrap(solutions[10], JUMP_NAIVE_FOR_REPLACE),
    mutate=lambda: state.replace(JUMP_NAIVE_FOR_REPLACE, JUMP_COYOTE_REPLACEMENT),
)

# Step 12 — jump buffer adds forgiving early-press handling.
step(
    12,
    title="Step 12",
    description=(
        "**Jump buffer** is the symmetric forgiveness window: a press "
        "registered up to 120 ms *before* landing fires the jump on "
        "touchdown. Combined with coyote time, both timing failures of the "
        "naive check are gone — the jump feels right at every BPM.\n\n"
        "Replace the `updateJump` closure once more. Stamp the press time in "
        "`this.lastJumpPressedAt`, then fire only when *both* the coyote "
        "and buffer windows are open:\n\n"
        "```js\n"
        "this.updateJump = (time) => {\n"
        "  const grounded =\n"
        "    this.player.body.blocked.down || this.player.body.touching.down;\n"
        "  if (grounded) this.lastGroundedAt = time;\n"
        "  if (Phaser.Input.Keyboard.JustDown(this.jumpKey)) {\n"
        "    this.lastJumpPressedAt = time;\n"
        "  }\n"
        "  const canJump = time - this.lastGroundedAt < 120;\n"
        "  const buffered = time - this.lastJumpPressedAt < 120;\n"
        "  if (canJump && buffered) {\n"
        "    this.player.setVelocityY(-600);\n"
        "    this.lastGroundedAt = -Infinity;\n"
        "    this.lastJumpPressedAt = -Infinity;\n"
        "  }\n"
        "};\n"
        "```\n\nResetting both timestamps after firing prevents double-fire "
        "on a single press."
    ),
    hints=[
        (
            "You should stamp `this.lastJumpPressedAt = time` on `JustDown(this.jumpKey)`.",
            r"if\s*\(\s*Phaser\.Input\.Keyboard\.JustDown\(\s*this\.jumpKey\s*\)\s*\)\s*\{\s*\n\s*this\.lastJumpPressedAt\s*=\s*time",
        ),
        (
            "You should compute `canJump` and `buffered` from the two timestamps.",
            r"const\s+canJump\s*=\s*time\s*-\s*this\.lastGroundedAt\s*<\s*120[\s\S]*const\s+buffered\s*=\s*time\s*-\s*this\.lastJumpPressedAt\s*<\s*120",
        ),
        (
            "You should only jump when both `canJump && buffered` are true.",
            r"if\s*\(\s*canJump\s*&&\s*buffered\s*\)",
        ),
        (
            "After firing you should reset *both* `this.lastGroundedAt` and `this.lastJumpPressedAt` to `-Infinity` inside the `canJump && buffered` block.",
            r"if\s*\(\s*canJump\s*&&\s*buffered\s*\)\s*\{\s*[\s\S]*this\.lastGroundedAt\s*=\s*-Infinity\s*;\s*\n\s*this\.lastJumpPressedAt\s*=\s*-Infinity",
        ),
    ],
    seed_text=seed_wrap(solutions[11], JUMP_COYOTE_REPLACEMENT),
    mutate=lambda: state.replace(JUMP_COYOTE_REPLACEMENT, JUMP_BUFFER_REPLACEMENT),
)

# Step 13 — preload the cactus image.
step(
    13,
    title="Step 13",
    description=(
        "Time for obstacles. The cactus PNG is a 24 × 32 pixel art sprite. "
        "Load it next to the hero spritesheet:\n\n"
        "```js\n"
        'this.load.image(\n  "cactus",\n  "/curriculum-assets/phaser/spritesheets/cactus.png"\n);\n'
        "```"
    ),
    hints=[
        (
            'You should call `this.load.image("cactus", "/curriculum-assets/phaser/spritesheets/cactus.png")`.',
            r'this\.load\.image\(\s*["\']cactus["\']\s*,\s*["\']/curriculum-assets/phaser/spritesheets/cactus\.png["\']\s*\)',
        ),
    ],
    seed_text=seed_insert(
        solutions[12],
        '    this.load.spritesheet(\n      "hero",\n      "/curriculum-assets/phaser/spritesheets/hero-walk.png",\n      { frameWidth: 16, frameHeight: 16 }\n    );\n',
    ),
    mutate=lambda: state.insert_after(
        '    this.load.spritesheet(\n      "hero",\n      "/curriculum-assets/phaser/spritesheets/hero-walk.png",\n      { frameWidth: 16, frameHeight: 16 }\n    );\n',
        PRELOAD_CACTUS,
    ),
)

# Step 14 — obstacles group + spawnObstacle closure + initial spawn.
step(
    14,
    title="Step 14",
    description=(
        "Build the obstacle system as a closure-driven group. Initialise the "
        "scroll speed and distance score, create a physics group with "
        "`allowGravity: false` (we want obstacles flying along the ground, "
        "not arcing), define `this.spawnObstacle` to drop a cactus at the "
        "right edge with a leftward velocity, and call it once for the "
        "first obstacle on screen.\n\nAt the end of `create`:\n\n"
        "```js\n"
        "this.scrollSpeed = 200;\n"
        "this.distance = 0;\n"
        "this.obstacles = this.physics.add.group({ allowGravity: false });\n"
        "this.spawnObstacle = () => {\n"
        '  const cactus = this.obstacles.create(520, 248, "cactus");\n'
        "  cactus.body.setVelocityX(-this.scrollSpeed);\n"
        "  cactus.setOrigin(0.5, 1);\n"
        "  cactus.body.setSize(16, 28).setOffset(4, 4);\n"
        "};\n"
        "this.spawnObstacle();\n"
        "```\n\n`setOrigin(0.5, 1)` puts the cactus's *base* at `y = 248`, so "
        "the foot of the cactus sits on the ground surface. `setSize(16, 28)` "
        "shrinks the collision box (the PNG has a transparent border)."
    ),
    hints=[
        (
            "You should initialise `this.scrollSpeed = 200` and `this.distance = 0`.",
            r"this\.scrollSpeed\s*=\s*200[\s\S]*this\.distance\s*=\s*0",
        ),
        (
            "You should create `this.obstacles` as `this.physics.add.group({ allowGravity: false })`.",
            r"this\.obstacles\s*=\s*this\.physics\.add\.group\(\s*\{\s*allowGravity:\s*false\s*\}\s*\)",
        ),
        (
            'You should define `this.spawnObstacle` to call `this.obstacles.create(520, 248, "cactus")` and set the leftward velocity.',
            r'this\.spawnObstacle\s*=[\s\S]*this\.obstacles\.create\(\s*520\s*,\s*248\s*,\s*["\']cactus["\']\s*\)[\s\S]*setVelocityX\(\s*-\s*this\.scrollSpeed\s*\)',
        ),
        (
            "You should call `this.spawnObstacle()` once after defining it to seed the first obstacle.",
            r"this\.spawnObstacle\(\)\s*;",
        ),
    ],
    seed_text=seed_insert(solutions[13], JUMP_BUFFER_REPLACEMENT),
    mutate=lambda: state.insert_after(JUMP_BUFFER_REPLACEMENT, CACTUS_GROUP_AND_SPAWN),
)

# Step 15 — obstacle timer that respawns every 1500 ms.
step(
    15,
    title="Step 15",
    description=(
        "One cactus is a hazard; an endless conveyor of cacti is a game. "
        "`Phaser.Time.Clock.addEvent` fires a callback on a delay; with "
        "`loop: true` it repeats forever.\n\nAt the end of `create`:\n\n"
        "```js\n"
        "this.obstacleTimer = this.time.addEvent({\n"
        "  delay: 1500,\n"
        "  loop: true,\n"
        "  callback: this.spawnObstacle\n"
        "});\n"
        "```\n\n1500 ms gives the player ~3 seconds of clear runway between "
        "cacti at the starting scroll speed — enough room to learn the "
        "jump timing. Step 24 will tighten this as difficulty ramps."
    ),
    hints=[
        (
            "You should create `this.obstacleTimer` with `this.time.addEvent({ delay: 1500, loop: true, callback: this.spawnObstacle })`.",
            r"this\.obstacleTimer\s*=\s*this\.time\.addEvent\(\s*\{\s*delay:\s*1500\s*,\s*loop:\s*true\s*,\s*callback:\s*this\.spawnObstacle\s*\}\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[14], CACTUS_GROUP_AND_SPAWN),
    mutate=lambda: state.insert_after(CACTUS_GROUP_AND_SPAWN, OBSTACLE_TIMER_BLOCK),
)

# Step 16 — gameOverDeath closure.
step(
    16,
    title="Step 16",
    description=(
        "Define how the run ends — but don't wire the trigger yet. "
        "`this.gameOverDeath` flips the `gameOver` flag, stops the obstacle "
        "timer, freezes the player (kills velocity + animation), and shows a "
        "Game Over text. Idempotent: if `gameOver` is already true, return "
        "immediately.\n\nAt the end of `create`:\n\n"
        "```js\n"
        "this.gameOver = false;\n"
        "this.gameOverDeath = () => {\n"
        "  if (this.gameOver) return;\n"
        "  this.gameOver = true;\n"
        "  this.obstacleTimer.remove(false);\n"
        "  this.player.setVelocity(0, 0);\n"
        "  this.player.anims.stop();\n"
        "  this.add\n"
        '    .text(240, 140, "Game Over", { fontSize: "24px", color: "#ffffff" })\n'
        "    .setOrigin(0.5)\n"
        "    .setDepth(200);\n"
        "};\n"
        "```\n\n`obstacleTimer.remove(false)` cancels the timer without "
        "firing one last callback — without that, you'd see one extra cactus "
        "spawn after death."
    ),
    hints=[
        (
            "You should initialise `this.gameOver = false`.",
            r"this\.gameOver\s*=\s*false",
        ),
        (
            "Inside `this.gameOverDeath` you should guard with `if (this.gameOver) return;` then set `this.gameOver = true`.",
            r"this\.gameOverDeath\s*=[\s\S]*if\s*\(\s*this\.gameOver\s*\)\s*return\s*;[\s\S]*this\.gameOver\s*=\s*true",
        ),
        (
            "You should call `this.obstacleTimer.remove(false)`.",
            r"this\.obstacleTimer\.remove\(\s*false\s*\)",
        ),
        (
            'You should freeze the player with `this.player.setVelocity(0, 0)` and `this.player.anims.stop()`.',
            r"this\.player\.setVelocity\(\s*0\s*,\s*0\s*\)[\s\S]*this\.player\.anims\.stop\(\s*\)",
        ),
        (
            'You should show a `"Game Over"` text at `(240, 140)`.',
            r'this\.add\s*\.text\(\s*240\s*,\s*140\s*,\s*["\']Game Over["\']',
        ),
    ],
    seed_text=seed_insert(solutions[15], OBSTACLE_TIMER_BLOCK),
    mutate=lambda: state.insert_after(OBSTACLE_TIMER_BLOCK, GAME_OVER_DEATH_CLOSURE),
)

# Step 17 — wire the overlap that triggers gameOverDeath.
step(
    17,
    title="Step 17",
    description=(
        "Now connect the trigger. `physics.add.overlap` calls a callback any "
        "frame the two objects overlap.\n\nAt the end of `create`:\n\n"
        "```js\n"
        "this.physics.add.overlap(this.player, this.obstacles, () => {\n"
        "  this.gameOverDeath();\n"
        "});\n"
        "```\n\nThe wrapping arrow function is intentional — passing "
        "`this.gameOverDeath` directly would bind `this` poorly when arcade "
        "physics calls back. The arrow captures `this` from the enclosing "
        "`create` scope. Run into a cactus and the run ends."
    ),
    hints=[
        (
            "You should register `this.physics.add.overlap(this.player, this.obstacles, ...)` with a callback that calls `this.gameOverDeath()`.",
            r"this\.physics\.add\.overlap\(\s*this\.player\s*,\s*this\.obstacles\s*,[\s\S]*this\.gameOverDeath\(\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[16], GAME_OVER_DEATH_CLOSURE),
    mutate=lambda: state.insert_after(GAME_OVER_DEATH_CLOSURE, OVERLAP_GAME_OVER_BLOCK),
)

# Step 18 — distance score increments per frame.
step(
    18,
    title="Step 18",
    description=(
        "The distance score is the heart of the scoring loop. Every frame "
        "(while alive) it grows by `scrollSpeed * dt` — pixels of forward "
        "travel. `delta` is in milliseconds; divide by 1000.\n\nAt the end of "
        "`update`:\n\n"
        "```js\n"
        "if (!this.gameOver) {\n"
        "  this.distance += (this.scrollSpeed * delta) / 1000;\n"
        "}\n"
        "```\n\nThe `if (!this.gameOver)` guard freezes the score when the "
        "run ends — no growth post-mortem."
    ),
    hints=[
        (
            "You should accumulate `this.distance += (this.scrollSpeed * delta) / 1000` while `!this.gameOver`.",
            r"if\s*\(\s*!\s*this\.gameOver\s*\)\s*\{[\s\S]*this\.distance\s*\+=\s*\(\s*this\.scrollSpeed\s*\*\s*delta\s*\)\s*/\s*1000",
        ),
    ],
    seed_text=seed_insert(solutions[17], "    this.updateJump(time);\n"),
    mutate=lambda: state.insert_after(
        "    this.updateJump(time);\n",
        UPDATE_DISTANCE_BLOCK,
    ),
)

# Step 19 — HUD distance text in create.
step(
    19,
    title="Step 19",
    description=(
        "Add the HUD. Pin a `Dist: 0` label to the top-left with "
        "`setScrollFactor(0)` and `setDepth(120)` (above the world, below "
        "anything coming later).\n\nAt the end of `create`:\n\n"
        "```js\n"
        "this.distanceText = this.add\n"
        '  .text(8, 8, "Dist: 0", {\n'
        '    fontSize: "12px",\n'
        '    color: "#ffffff"\n'
        "  })\n"
        "  .setScrollFactor(0)\n"
        "  .setDepth(120);\n"
        "```\n\nThe label exists but stays at `0` until you wire the live "
        "update — that's the next step."
    ),
    hints=[
        (
            'You should create `this.distanceText` as `this.add.text(8, 8, "Dist: 0", { ... })` chained with `.setScrollFactor(0)` and `.setDepth(120)`.',
            r'this\.distanceText\s*=\s*this\.add\s*\.text\(\s*8\s*,\s*8\s*,\s*["\']Dist: 0["\'][\s\S]*\.setScrollFactor\(\s*0\s*\)\s*\.setDepth\(\s*120\s*\)',
        ),
    ],
    seed_text=seed_insert(solutions[18], OVERLAP_GAME_OVER_BLOCK),
    mutate=lambda: state.insert_after(OVERLAP_GAME_OVER_BLOCK, HUD_DISTANCE_TEXT_BLOCK),
)

# Step 20 — wire the HUD distance text update in update().
step(
    20,
    title="Step 20",
    description=(
        "Refresh the label every frame.\n\nAt the end of `update`:\n\n"
        "```js\n"
        'this.distanceText.setText("Dist: " + Math.floor(this.distance));\n'
        "```\n\n`Math.floor` rounds the floating-point distance to a clean "
        "integer. Reload — the counter ticks up as you run. Hitting a cactus "
        "freezes the count because the score-update guard already returns "
        "early when `gameOver`."
    ),
    hints=[
        (
            'You should call `this.distanceText.setText("Dist: " + Math.floor(this.distance))` in `update`.',
            r'this\.distanceText\.setText\(\s*["\']Dist: ["\']\s*\+\s*Math\.floor\(\s*this\.distance\s*\)\s*\)',
        ),
    ],
    seed_text=seed_insert(solutions[19], UPDATE_DISTANCE_BLOCK),
    mutate=lambda: state.insert_after(UPDATE_DISTANCE_BLOCK, UPDATE_HUD_BLOCK),
)

# Step 21 — best init from localStorage + best HUD text.
step(
    21,
    title="Step 21",
    description=(
        "A score that doesn't survive a refresh isn't really a personal "
        "best. Read the saved best from `localStorage` (or `0` on first run) "
        "and surface it as a second line of HUD text under the live "
        "distance.\n\nAt the end of `create`, after the distance text:\n\n"
        "```js\n"
        "this.bestDistance = parseInt(\n"
        '  localStorage.getItem("runner:best") || "0",\n'
        "  10\n"
        ");\n"
        "this.bestText = this.add\n"
        '  .text(8, 24, "Best: " + this.bestDistance, {\n'
        '    fontSize: "10px",\n'
        '    color: "#cccccc"\n'
        "  })\n"
        "  .setScrollFactor(0)\n"
        "  .setDepth(120);\n"
        "```\n\nIf you've never finished a run before, the value is `0` — "
        "the next step persists a beat-it value at game-over."
    ),
    hints=[
        (
            'You should read `this.bestDistance = parseInt(localStorage.getItem("runner:best") || "0", 10)`.',
            r'this\.bestDistance\s*=\s*parseInt\(\s*localStorage\.getItem\(\s*["\']runner:best["\']\s*\)\s*\|\|\s*["\']0["\']\s*,\s*10\s*\)',
        ),
        (
            'You should create `this.bestText` with a label of `"Best: " + this.bestDistance`.',
            r'this\.bestText\s*=\s*this\.add\s*\.text\(\s*8\s*,\s*24\s*,\s*["\']Best: ["\']\s*\+\s*this\.bestDistance',
        ),
    ],
    seed_text=seed_insert(solutions[20], HUD_DISTANCE_TEXT_BLOCK),
    mutate=lambda: state.insert_after(HUD_DISTANCE_TEXT_BLOCK, BEST_INIT_AND_TEXT_BLOCK),
)

# Step 22 — persist best on game over.
step(
    22,
    title="Step 22",
    description=(
        "Inside `gameOverDeath`, just after stopping the timer and freezing "
        "the player, write the new best to `localStorage` if you beat the "
        "previous one. Update the HUD label so the score reads correctly "
        "before the player restarts.\n\nReplace the `this.add.text(...)` "
        "Game Over block in `gameOverDeath` so the persistence happens "
        "*before* the death banner — order matters so a fresh `bestText` "
        "label is in place when the banner draws over the world.\n\n"
        "Insert before the existing Game Over text:\n\n"
        "```js\n"
        "const dist = Math.floor(this.distance);\n"
        "if (dist > this.bestDistance) {\n"
        "  this.bestDistance = dist;\n"
        '  localStorage.setItem("runner:best", String(dist));\n'
        '  this.bestText.setText("Best: " + dist);\n'
        "}\n"
        "```"
    ),
    hints=[
        (
            "You should compare `Math.floor(this.distance) > this.bestDistance`.",
            r"if\s*\(\s*dist\s*>\s*this\.bestDistance\s*\)",
        ),
        (
            'You should call `localStorage.setItem("runner:best", String(dist))`.',
            r'localStorage\.setItem\(\s*["\']runner:best["\']\s*,\s*String\(\s*dist\s*\)\s*\)',
        ),
        (
            'You should refresh the HUD with `this.bestText.setText("Best: " + dist)`.',
            r'this\.bestText\.setText\(\s*["\']Best: ["\']\s*\+\s*dist\s*\)',
        ),
    ],
    seed_text=seed_insert(
        solutions[21],
        "      this.player.anims.stop();\n",
    ),
    mutate=lambda: state.insert_after(
        "      this.player.anims.stop();\n",
        BEST_PERSIST_BLOCK,
    ),
)

# Step 23 — difficulty ramp scales scrollSpeed with distance.
step(
    23,
    title="Step 23",
    description=(
        "Endless runners get harder. Every 1000 units of distance, increase "
        "the scroll speed by 50 px/s. The world flows past faster, the "
        "obstacle physics objects (already given `body.setVelocityX(-this.scrollSpeed)` "
        "at spawn) carry the new speed forward.\n\nReplace the score-update "
        "block in `update`:\n\n"
        "```js\n"
        "if (!this.gameOver) {\n"
        "  this.distance += (this.scrollSpeed * delta) / 1000;\n"
        "  this.scrollSpeed =\n"
        "    200 + Math.floor(this.distance / 1000) * 50;\n"
        "}\n"
        "```\n\nThe ramp tops out around 1000 px/s if a player is patient "
        "enough (which they won't be — they'll crash long before)."
    ),
    hints=[
        (
            "You should compute `this.scrollSpeed = 200 + Math.floor(this.distance / 1000) * 50` while `!this.gameOver`.",
            r"this\.scrollSpeed\s*=\s*\n?\s*200\s*\+\s*Math\.floor\(\s*this\.distance\s*/\s*1000\s*\)\s*\*\s*50",
        ),
    ],
    seed_text=seed_wrap(solutions[22], UPDATE_DISTANCE_BLOCK),
    mutate=lambda: state.replace(UPDATE_DISTANCE_BLOCK, UPDATE_DISTANCE_PLUS_RAMP),
)

# Step 24 — shrinking obstacle delay at higher speeds.
step(
    24,
    title="Step 24",
    description=(
        "Faster scroll without faster spawn means cacti grow further apart "
        "as the run progresses — the *opposite* of harder. Compensate by "
        "shrinking the obstacle timer's delay so spawns get tighter as "
        "speed levels up. Floor at 500 ms — any tighter and the player has "
        "no reaction time.\n\nReplace the score-update block again:\n\n"
        "```js\n"
        "if (!this.gameOver) {\n"
        "  this.distance += (this.scrollSpeed * delta) / 1000;\n"
        "  const speedLevel = Math.floor(this.distance / 1000);\n"
        "  this.scrollSpeed = 200 + speedLevel * 50;\n"
        "  this.obstacleTimer.delay = Math.max(\n"
        "    500,\n"
        "    1500 - speedLevel * 100\n"
        "  );\n"
        "}\n"
        "```"
    ),
    hints=[
        (
            "You should compute `const speedLevel = Math.floor(this.distance / 1000)` once and reuse it.",
            r"const\s+speedLevel\s*=\s*Math\.floor\(\s*this\.distance\s*/\s*1000\s*\)",
        ),
        (
            "You should set `this.obstacleTimer.delay = Math.max(500, 1500 - speedLevel * 100)`.",
            r"this\.obstacleTimer\.delay\s*=\s*Math\.max\(\s*500\s*,\s*1500\s*-\s*speedLevel\s*\*\s*100\s*\)",
        ),
    ],
    seed_text=seed_wrap(solutions[23], UPDATE_DISTANCE_PLUS_RAMP),
    mutate=lambda: state.replace(UPDATE_DISTANCE_PLUS_RAMP, UPDATE_DISTANCE_PLUS_DELAY),
)

# Step 25 — clamp obstacle spawn so they never overlap.
step(
    25,
    title="Step 25",
    description=(
        "At high speeds, two cacti can spawn close enough that no jump "
        "clears both — an unavoidable death. Track the X of the most "
        "recently-spawned obstacle and refuse to spawn another within "
        "200 px of it.\n\nReplace the existing `spawnObstacle` definition:\n\n"
        "```js\n"
        "this.lastObstacleX = -Infinity;\n"
        "this.spawnObstacle = () => {\n"
        "  if (520 - this.lastObstacleX < 200) return;\n"
        '  const cactus = this.obstacles.create(520, 248, "cactus");\n'
        "  cactus.body.setVelocityX(-this.scrollSpeed);\n"
        "  cactus.setOrigin(0.5, 1);\n"
        "  cactus.body.setSize(16, 28).setOffset(4, 4);\n"
        "  this.lastObstacleX = 520;\n"
        "};\n"
        "```\n\nThe guard reads: \"if the previous obstacle's X is closer "
        "than 200 px to my spawn point (520), skip this spawn.\" Because "
        "obstacles travel left, `520 - lastObstacleX < 200` is true only "
        "when the previous one is still very close to the right edge — "
        "i.e., recently spawned."
    ),
    hints=[
        (
            "You should declare `this.lastObstacleX = -Infinity` before redefining `spawnObstacle`.",
            r"this\.lastObstacleX\s*=\s*-Infinity",
        ),
        (
            "Inside `spawnObstacle` you should `return` when `520 - this.lastObstacleX < 200`.",
            r"if\s*\(\s*520\s*-\s*this\.lastObstacleX\s*<\s*200\s*\)\s*return",
        ),
        (
            "You should set `this.lastObstacleX = 520` after creating the cactus.",
            r"this\.lastObstacleX\s*=\s*520",
        ),
    ],
    seed_text=seed_wrap(solutions[24], SPAWN_OBSTACLE_OLD),
    mutate=lambda: state.replace(SPAWN_OBSTACLE_OLD, SPAWN_OBSTACLE_CLAMP),
)

# Step 26 — preload coin spritesheet.
step(
    26,
    title="Step 26",
    description=(
        "Time for collectibles. The coin spritesheet already exists from "
        "Chapter 2 — 8 frames at 16 × 16 each, in a 128 × 16 strip. Load "
        "it next to the cactus image in `preload`:\n\n"
        "```js\n"
        'this.load.spritesheet(\n  "coin",\n  "/curriculum-assets/phaser/spritesheets/coin.png",\n  { frameWidth: 16, frameHeight: 16 }\n);\n'
        "```"
    ),
    hints=[
        (
            'You should call `this.load.spritesheet("coin", "/curriculum-assets/phaser/spritesheets/coin.png", { frameWidth: 16, frameHeight: 16 })`.',
            r'this\.load\.spritesheet\(\s*["\']coin["\']\s*,\s*["\']/curriculum-assets/phaser/spritesheets/coin\.png["\']\s*,\s*\{\s*frameWidth:\s*16\s*,\s*frameHeight:\s*16\s*\}\s*\)',
        ),
    ],
    seed_text=seed_insert(solutions[25], PRELOAD_CACTUS),
    mutate=lambda: state.insert_after(PRELOAD_CACTUS, PRELOAD_COIN),
)

# Step 27 — coin spawn group + animation + overlap.
step(
    27,
    title="Step 27",
    description=(
        "Spawn coins at intervals; eating one adds 50 to the distance "
        "score. Animate the spritesheet's 8-frame spin at 12 fps.\n\nAt "
        "the end of `create`:\n\n"
        "```js\n"
        "this.coins = this.physics.add.group({ allowGravity: false });\n"
        "this.anims.create({\n"
        '  key: "spin",\n'
        '  frames: this.anims.generateFrameNumbers("coin", { frames: [0, 1, 2, 3, 4, 5, 6, 7] }),\n'
        "  frameRate: 12,\n"
        "  repeat: -1\n"
        "});\n"
        "this.spawnCoin = () => {\n"
        '  const c = this.coins.create(520, 200, "coin", 0);\n'
        "  c.body.setVelocityX(-this.scrollSpeed);\n"
        '  c.play("spin");\n'
        "};\n"
        "this.coinTimer = this.time.addEvent({\n"
        "  delay: 2700,\n"
        "  loop: true,\n"
        "  callback: this.spawnCoin\n"
        "});\n"
        "this.physics.add.overlap(this.player, this.coins, (_p, coin) => {\n"
        "  coin.destroy();\n"
        "  this.distance += 50;\n"
        "});\n"
        "```\n\n2700 ms makes coins less frequent than cacti — they're "
        "rewards, not noise."
    ),
    hints=[
        (
            "You should create `this.coins` as a `physics.add.group({ allowGravity: false })`.",
            r"this\.coins\s*=\s*this\.physics\.add\.group\(\s*\{\s*allowGravity:\s*false\s*\}\s*\)",
        ),
        (
            'You should register a `"spin"` animation with frames `[0, 1, 2, 3, 4, 5, 6, 7]` and `frameRate: 12`.',
            r'this\.anims\.create\(\s*\{\s*key:\s*["\']spin["\'][\s\S]*frames:\s*\[\s*0\s*,\s*1\s*,\s*2\s*,\s*3\s*,\s*4\s*,\s*5\s*,\s*6\s*,\s*7\s*\][\s\S]*frameRate:\s*12',
        ),
        (
            "You should define `this.spawnCoin` to create a coin at `(520, 200)` with leftward velocity and play the spin animation.",
            r'this\.spawnCoin\s*=[\s\S]*this\.coins\.create\(\s*520\s*,\s*200\s*,\s*["\']coin["\']\s*,\s*0\s*\)[\s\S]*setVelocityX\(\s*-\s*this\.scrollSpeed\s*\)[\s\S]*\.play\(\s*["\']spin["\']\s*\)',
        ),
        (
            "You should register a coin overlap callback that destroys the coin and adds 50 to `this.distance`.",
            r"this\.physics\.add\.overlap\(\s*this\.player\s*,\s*this\.coins[\s\S]*coin\.destroy\(\s*\)[\s\S]*this\.distance\s*\+=\s*50",
        ),
    ],
    seed_text=seed_insert(solutions[26], BEST_INIT_AND_TEXT_BLOCK),
    mutate=lambda: state.insert_after(BEST_INIT_AND_TEXT_BLOCK, COIN_GROUP_BLOCK),
)

# Step 28 — double-jump powerups group + overlap.
step(
    28,
    title="Step 28",
    description=(
        "Power-ups break the jump rules. Add a generic `powerups` group "
        "and a spawner for **cyan double-jump pickups**. The pickup tags "
        "itself with `kind: \"double\"` so the overlap callback can dispatch "
        "behavior — you'll add a second kind in step 41.\n\nAt the end of "
        "`create`:\n\n"
        "```js\n"
        "this.canDoubleJump = false;\n"
        "this.didDoubleJump = false;\n"
        "this.powerups = this.physics.add.group({ allowGravity: false });\n"
        "this.spawnDoubleJump = () => {\n"
        "  const p = this.add.rectangle(520, 200, 14, 14, 0x66ddff);\n"
        "  this.physics.add.existing(p);\n"
        "  this.powerups.add(p);\n"
        "  p.body.setVelocityX(-this.scrollSpeed);\n"
        '  p.kind = "double";\n'
        "};\n"
        "this.powerupTimer = this.time.addEvent({\n"
        "  delay: 6500,\n"
        "  loop: true,\n"
        "  callback: this.spawnDoubleJump\n"
        "});\n"
        "this.physics.add.overlap(this.player, this.powerups, (_p, item) => {\n"
        '  if (item.kind === "double") {\n'
        "    this.canDoubleJump = true;\n"
        "  }\n"
        "  item.destroy();\n"
        "});\n"
        "```\n\nA cyan square is enough — the visual language teaches the "
        "player which icon does what after one or two pickups."
    ),
    hints=[
        (
            "You should initialise `this.canDoubleJump = false` and `this.didDoubleJump = false`.",
            r"this\.canDoubleJump\s*=\s*false[\s\S]*this\.didDoubleJump\s*=\s*false",
        ),
        (
            "You should create `this.powerups` as a `physics.add.group({ allowGravity: false })`.",
            r"this\.powerups\s*=\s*this\.physics\.add\.group\(\s*\{\s*allowGravity:\s*false\s*\}\s*\)",
        ),
        (
            'You should tag the spawned pickup as `p.kind = "double"`.',
            r'p\.kind\s*=\s*["\']double["\']',
        ),
        (
            "You should register an overlap that sets `this.canDoubleJump = true` when `item.kind === \"double\"`.",
            r'item\.kind\s*===\s*["\']double["\'][\s\S]*this\.canDoubleJump\s*=\s*true',
        ),
    ],
    seed_text=seed_insert(solutions[27], COIN_GROUP_BLOCK),
    mutate=lambda: state.insert_after(COIN_GROUP_BLOCK, DOUBLE_JUMP_GROUP_BLOCK),
)

# Step 29 — extend updateJump with a mid-air double-jump branch.
step(
    29,
    title="Step 29",
    description=(
        "Now that pickups grant `this.canDoubleJump = true`, extend "
        "`updateJump` to consume one mid-air jump per airborne pass. Reset "
        "`this.didDoubleJump` whenever the player is grounded (so each "
        "double-jump is single-use until you land again).\n\nReplace the "
        "buffer-only `updateJump` closure:\n\n"
        "```js\n"
        "this.updateJump = (time) => {\n"
        "  const grounded =\n"
        "    this.player.body.blocked.down || this.player.body.touching.down;\n"
        "  if (grounded) {\n"
        "    this.lastGroundedAt = time;\n"
        "    this.didDoubleJump = false;\n"
        "  }\n"
        "  if (Phaser.Input.Keyboard.JustDown(this.jumpKey)) {\n"
        "    this.lastJumpPressedAt = time;\n"
        "  }\n"
        "  const canJump = time - this.lastGroundedAt < 120;\n"
        "  const buffered = time - this.lastJumpPressedAt < 120;\n"
        "  if (canJump && buffered) {\n"
        "    this.player.setVelocityY(-600);\n"
        "    this.lastGroundedAt = -Infinity;\n"
        "    this.lastJumpPressedAt = -Infinity;\n"
        "  } else if (\n"
        "    buffered &&\n"
        "    this.canDoubleJump &&\n"
        "    !this.didDoubleJump &&\n"
        "    !grounded\n"
        "  ) {\n"
        "    this.player.setVelocityY(-520);\n"
        "    this.didDoubleJump = true;\n"
        "    this.lastJumpPressedAt = -Infinity;\n"
        "  }\n"
        "};\n"
        "```\n\nThe double-jump kicks weaker (`-520` instead of `-600`) so "
        "it feels like a re-jump rather than an equal launch."
    ),
    hints=[
        (
            "You should reset `this.didDoubleJump = false` while grounded.",
            r"if\s*\(\s*grounded\s*\)\s*\{[\s\S]*this\.didDoubleJump\s*=\s*false",
        ),
        (
            "The double-jump branch should require `buffered`, `this.canDoubleJump`, `!this.didDoubleJump`, and `!grounded`.",
            r"else\s+if\s*\([\s\S]*buffered[\s\S]*this\.canDoubleJump[\s\S]*!\s*this\.didDoubleJump[\s\S]*!\s*grounded",
        ),
        (
            "The double-jump should fire `setVelocityY(-520)` and stamp `this.didDoubleJump = true`.",
            r"this\.player\.setVelocityY\(\s*-520\s*\)[\s\S]*this\.didDoubleJump\s*=\s*true",
        ),
    ],
    seed_text=seed_wrap(solutions[28], JUMP_BUFFER_REPLACEMENT),
    mutate=lambda: state.replace(JUMP_BUFFER_REPLACEMENT, JUMP_DOUBLE_REPLACEMENT),
)

# Step 30 — preload flying enemy spritesheet.
step(
    30,
    title="Step 30",
    description=(
        "Birds fly. The flying enemy spritesheet is a 96 × 16 strip — four "
        "24 × 16 frames of wing flapping.\n\nIn `preload`:\n\n"
        "```js\n"
        'this.load.spritesheet(\n  "flyer",\n  "/curriculum-assets/phaser/spritesheets/flying-enemy.png",\n  { frameWidth: 24, frameHeight: 16 }\n);\n'
        "```"
    ),
    hints=[
        (
            'You should call `this.load.spritesheet("flyer", "/curriculum-assets/phaser/spritesheets/flying-enemy.png", { frameWidth: 24, frameHeight: 16 })`.',
            r'this\.load\.spritesheet\(\s*["\']flyer["\']\s*,\s*["\']/curriculum-assets/phaser/spritesheets/flying-enemy\.png["\']\s*,\s*\{\s*frameWidth:\s*24\s*,\s*frameHeight:\s*16\s*\}\s*\)',
        ),
    ],
    seed_text=seed_insert(solutions[29], PRELOAD_COIN),
    mutate=lambda: state.insert_after(PRELOAD_COIN, PRELOAD_FLYER),
)

# Step 31 — flying enemy spawn group + animation + overlap.
step(
    31,
    title="Step 31",
    description=(
        "Spawn flying birds at head height. Touching one ends the run "
        "(same as a cactus). Register a 4-frame `\"fly\"` animation, a "
        "spawner that drops a flyer at `(520, 200)` (chest height — too "
        "high to jump over, you must duck), a 4500 ms timer, and the "
        "overlap callback.\n\nAt the end of `create`:\n\n"
        "```js\n"
        "this.flyers = this.physics.add.group({ allowGravity: false });\n"
        "this.spawnFlyer = () => {\n"
        '  const f = this.flyers.create(520, 200, "flyer", 0);\n'
        "  f.body.setVelocityX(-this.scrollSpeed);\n"
        "};\n"
        "this.anims.create({\n"
        '  key: "fly",\n'
        '  frames: this.anims.generateFrameNumbers("flyer", { frames: [0, 1, 2, 3] }),\n'
        "  frameRate: 8,\n"
        "  repeat: -1\n"
        "});\n"
        "this.flyerTimer = this.time.addEvent({\n"
        "  delay: 4500,\n"
        "  loop: true,\n"
        "  callback: this.spawnFlyer\n"
        "});\n"
        "this.physics.add.overlap(this.player, this.flyers, () => {\n"
        "  this.gameOverDeath();\n"
        "});\n"
        "```"
    ),
    hints=[
        (
            "You should create `this.flyers` as a `physics.add.group({ allowGravity: false })`.",
            r"this\.flyers\s*=\s*this\.physics\.add\.group\(\s*\{\s*allowGravity:\s*false\s*\}\s*\)",
        ),
        (
            'You should register the `"fly"` animation with frames `[0, 1, 2, 3]` and `frameRate: 8`.',
            r'this\.anims\.create\(\s*\{\s*key:\s*["\']fly["\'][\s\S]*frames:\s*\[\s*0\s*,\s*1\s*,\s*2\s*,\s*3\s*\][\s\S]*frameRate:\s*8',
        ),
        (
            'You should define `this.spawnFlyer` to create a flyer at `(520, 200)` with leftward velocity.',
            r'this\.spawnFlyer\s*=[\s\S]*this\.flyers\.create\(\s*520\s*,\s*200\s*,\s*["\']flyer["\']\s*,\s*0\s*\)[\s\S]*setVelocityX\(\s*-\s*this\.scrollSpeed\s*\)',
        ),
        (
            "You should create `this.flyerTimer` with `delay: 4500` and `callback: this.spawnFlyer`.",
            r"this\.flyerTimer\s*=\s*this\.time\.addEvent\(\s*\{\s*delay:\s*4500\s*,\s*loop:\s*true\s*,\s*callback:\s*this\.spawnFlyer",
        ),
        (
            "You should register an overlap with `this.flyers` that calls `this.gameOverDeath()`.",
            r"this\.physics\.add\.overlap\(\s*this\.player\s*,\s*this\.flyers[\s\S]*this\.gameOverDeath\(\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[30], DOUBLE_JUMP_GROUP_BLOCK),
    mutate=lambda: state.insert_after(DOUBLE_JUMP_GROUP_BLOCK, FLYER_GROUP_BLOCK),
)


# Step 32 — duck input: closure + wire call.
def _step32_seed():
    prev = solutions[31]
    prepop = prev.replace(
        "    this.updateJump(time);\n",
        "    this.updateJump(time);\n" + UPDATE_DUCK_BLOCK,
        1,
    )
    return seed_insert(prepop, FLYER_GROUP_BLOCK)


step(
    32,
    title="Step 32",
    description=(
        "Birds fly at chest height. Crouch under them with the DOWN arrow. "
        "`setSize` shrinks the player's collision body; `setOffset` "
        "re-anchors it so the smaller body lines up with the lower half of "
        "the sprite.\n\nThe `update` line `this.applyDuck(this.duckKey.isDown);` "
        "is already wired below. Add the **closure and key** at the end of "
        "`create`:\n\n"
        "```js\n"
        'this.duckKey = this.input.keyboard.addKey("DOWN");\n'
        "this.applyDuck = (down) => {\n"
        "  if (down) {\n"
        "    this.player.body.setSize(12, 8).setOffset(2, 8);\n"
        "  } else {\n"
        "    this.player.body.setSize(16, 16).setOffset(0, 0);\n"
        "  }\n"
        "};\n"
        "```\n\nThe ducked body is `12 × 8` — slim enough to slide under "
        "the bird's `(24, 16)` body."
    ),
    hints=[
        (
            'You should add the DOWN key as `this.duckKey = this.input.keyboard.addKey("DOWN")`.',
            r'this\.duckKey\s*=\s*this\.input\.keyboard\.addKey\(\s*["\']DOWN["\']\s*\)',
        ),
        (
            "Inside `this.applyDuck` you should call `setSize(12, 8).setOffset(2, 8)` when ducked.",
            r"this\.player\.body\.setSize\(\s*12\s*,\s*8\s*\)\s*\.setOffset\(\s*2\s*,\s*8\s*\)",
        ),
        (
            "When standing, restore the body with `setSize(16, 16).setOffset(0, 0)`.",
            r"this\.player\.body\.setSize\(\s*16\s*,\s*16\s*\)\s*\.setOffset\(\s*0\s*,\s*0\s*\)",
        ),
    ],
    seed_text=_step32_seed(),
    mutate=chain(
        lambda: state.insert_after(FLYER_GROUP_BLOCK, DUCK_INPUT_BLOCK),
        lambda: state.insert_after(
            "    this.updateJump(time);\n",
            UPDATE_DUCK_BLOCK,
        ),
    ),
)

# Step 33 — camera shake on hit (single line in gameOverDeath).
step(
    33,
    title="Step 33",
    description=(
        "A crash should hit the player physically as well as visually. Add "
        "a camera shake to `gameOverDeath` — short and sharp, applied "
        "between flipping the flag and stopping the timer.\n\nInside "
        "`gameOverDeath`, after `this.gameOver = true;`:\n\n"
        "```js\n"
        "this.cameras.main.shake(220, 0.012);\n"
        "```\n\n220 ms at 0.012 intensity reads as a meaty crash without "
        "vomit-inducing rattle. Anyone who's reduced-motion sensitive "
        "deserves an opt-out — that's step 38."
    ),
    hints=[
        (
            "You should add `this.cameras.main.shake(220, 0.012)` inside `gameOverDeath`.",
            r"this\.cameras\.main\.shake\(\s*220\s*,\s*0\.012\s*\)",
        ),
    ],
    seed_text=seed_insert(
        solutions[32],
        "      this.gameOver = true;\n",
    ),
    mutate=lambda: state.insert_after(
        "      this.gameOver = true;\n",
        "      this.cameras.main.shake(220, 0.012);\n",
    ),
)

# Step 34 — camera flash on power-up pickup.
step(
    34,
    title="Step 34",
    description=(
        "Power-ups need a positive flourish. A purple flash on the main "
        "camera reads as a buff applied to the world.\n\nReplace the "
        "powerup overlap callback to add the flash before destroying the "
        "item:\n\n"
        "```js\n"
        "this.physics.add.overlap(this.player, this.powerups, (_p, item) => {\n"
        '  if (item.kind === "double") {\n'
        "    this.canDoubleJump = true;\n"
        "  }\n"
        "  item.destroy();\n"
        "  this.cameras.main.flash(160, 102, 221, 255);\n"
        "});\n"
        "```\n\n`flash(duration, r, g, b)` overlays a coloured rectangle "
        "that fades to transparent over `duration` ms. `(102, 221, 255)` "
        "is a vibrant cyan — same family as the pickup itself."
    ),
    hints=[
        (
            "Inside the powerup overlap you should call `this.cameras.main.flash(160, 102, 221, 255)`.",
            r"this\.cameras\.main\.flash\(\s*160\s*,\s*102\s*,\s*221\s*,\s*255\s*\)",
        ),
    ],
    seed_text=seed_wrap(solutions[33], POWERUP_FLASH_OLD),
    mutate=lambda: state.replace(POWERUP_FLASH_OLD, POWERUP_FLASH_NEW),
)

# Step 35 — preload cloud parallax layer + add tileSprite + update tickParallax.
step(
    35,
    title="Step 35",
    description=(
        "A fourth parallax layer rounds out the depth: low clouds drifting "
        "between the mountains and the ground. Load the texture, add the "
        "tile sprite (transparent above the clouds, so it blends), then "
        "**update `tickParallax`** to advance the cloud's tile position too. "
        "Single editable region, three concerns: that's the payoff for the "
        "closure pattern.\n\nReplace the entire parallax-and-closure block "
        "in `create`:\n\n"
        "```js\n"
        'this.sky = this.add\n  .tileSprite(240, 160, 480, 320, "sky")\n  .setScrollFactor(0);\n'
        'this.clouds = this.add\n  .tileSprite(240, 120, 480, 96, "clouds")\n  .setScrollFactor(0);\n'
        'this.mountains = this.add\n  .tileSprite(240, 200, 480, 160, "mountains")\n  .setScrollFactor(0);\n'
        'this.groundTile = this.add\n  .tileSprite(240, 288, 480, 64, "ground")\n  .setScrollFactor(0);\n'
        "this.tickParallax = (dt) => {\n"
        "  this.sky.tilePositionX += 5 * dt;\n"
        "  this.clouds.tilePositionX += 12 * dt;\n"
        "  this.mountains.tilePositionX += 25 * dt;\n"
        "  this.groundTile.tilePositionX += 240 * dt;\n"
        "};\n"
        "```\n\nAlso load the cloud texture in `preload` (already populated "
        "above the editable region — Phaser lets you preload assets in any "
        "order)."
    ),
    hints=[
        (
            'You should create `this.clouds` as `this.add.tileSprite(240, 120, 480, 96, "clouds").setScrollFactor(0)`.',
            r'this\.clouds\s*=\s*this\.add\s*\.tileSprite\(\s*240\s*,\s*120\s*,\s*480\s*,\s*96\s*,\s*["\']clouds["\']\s*\)\s*\.setScrollFactor\(\s*0\s*\)',
        ),
        (
            "Inside `this.tickParallax` you should advance `this.clouds.tilePositionX += 12 * dt`.",
            r"this\.clouds\.tilePositionX\s*\+=\s*12\s*\*\s*dt",
        ),
    ],
    seed_text=(
        lambda prev=solutions[34]: seed_wrap(
            prev.replace(
                PRELOAD_PARALLAX_THREE,
                PRELOAD_PARALLAX_THREE.replace(
                    '    this.load.image(\n      "mountains",',
                    "    this.load.image(\n"
                    '      "clouds",\n'
                    '      "/curriculum-assets/phaser/spritesheets/parallax-clouds.png"\n'
                    "    );\n"
                    '    this.load.image(\n      "mountains",',
                    1,
                ),
                1,
            ),
            CREATE_TILESPRITES_THREE,
        )
    )(),
    mutate=chain(
        lambda: state.replace(
            PRELOAD_PARALLAX_THREE,
            PRELOAD_PARALLAX_THREE.replace(
                '    this.load.image(\n      "mountains",',
                "    this.load.image(\n"
                '      "clouds",\n'
                '      "/curriculum-assets/phaser/spritesheets/parallax-clouds.png"\n'
                "    );\n"
                '    this.load.image(\n      "mountains",',
                1,
            ),
        ),
        lambda: state.replace(
            CREATE_TILESPRITES_THREE,
            (
                '    this.sky = this.add\n      .tileSprite(240, 160, 480, 320, "sky")\n      .setScrollFactor(0);\n'
                '    this.clouds = this.add\n      .tileSprite(240, 120, 480, 96, "clouds")\n      .setScrollFactor(0);\n'
                '    this.mountains = this.add\n      .tileSprite(240, 200, 480, 160, "mountains")\n      .setScrollFactor(0);\n'
                '    this.groundTile = this.add\n      .tileSprite(240, 288, 480, 64, "ground")\n      .setScrollFactor(0);\n'
                "    this.tickParallax = (dt) => {\n"
                "      this.sky.tilePositionX += 5 * dt;\n"
                "      this.clouds.tilePositionX += 12 * dt;\n"
                "      this.mountains.tilePositionX += 25 * dt;\n"
                "      this.groundTile.tilePositionX += 240 * dt;\n"
                "    };\n"
            ),
        ),
    ),
)

# Step 36 — particle dust trail behind the player.
step(
    36,
    title="Step 36",
    description=(
        "Game-feel polish — the runner kicks up dust as they sprint. "
        "Generate a 4 × 4 white dot texture from a `Graphics` object (no "
        "asset load needed) and emit one particle every 90 ms behind the "
        "player.\n\nAt the end of `create`:\n\n"
        "```js\n"
        "const dustGfx = this.make.graphics({ x: 0, y: 0, add: false });\n"
        "dustGfx.fillStyle(0xffffff, 0.6);\n"
        "dustGfx.fillCircle(2, 2, 2);\n"
        'dustGfx.generateTexture("dust", 4, 4);\n'
        "dustGfx.destroy();\n"
        'this.dust = this.add.particles(0, 0, "dust", {\n'
        "  lifespan: 400,\n"
        "  speedX: { min: -120, max: -60 },\n"
        "  speedY: { min: -10, max: 10 },\n"
        "  scale: { start: 1, end: 0 },\n"
        "  quantity: 1,\n"
        "  frequency: 90,\n"
        "  follow: this.player,\n"
        "  followOffset: { x: -4, y: 6 }\n"
        "});\n"
        "```\n\n`follow: this.player` makes the emitter chase the player; "
        "`followOffset` places the spawn point at the heel."
    ),
    hints=[
        (
            "You should create a graphics object with `this.make.graphics({ x: 0, y: 0, add: false })`.",
            r"this\.make\.graphics\(\s*\{\s*x:\s*0\s*,\s*y:\s*0\s*,\s*add:\s*false\s*\}\s*\)",
        ),
        (
            'You should generate a `"dust"` texture sized `4 × 4`.',
            r'generateTexture\(\s*["\']dust["\']\s*,\s*4\s*,\s*4\s*\)',
        ),
        (
            'You should create `this.dust = this.add.particles(0, 0, "dust", { ... })` with `follow: this.player`.',
            r'this\.dust\s*=\s*this\.add\.particles\(\s*0\s*,\s*0\s*,\s*["\']dust["\']\s*,[\s\S]*follow:\s*this\.player',
        ),
    ],
    seed_text=seed_insert(solutions[35], DUCK_INPUT_BLOCK),
    mutate=lambda: state.insert_after(DUCK_INPUT_BLOCK, DUST_TEXTURE_BLOCK),
)

# Step 37 — honor prefers-reduced-motion: gate shake/flash/dust.
step(
    37,
    title="Step 37",
    description=(
        "Reduced motion is an accessibility setting. Detect it via "
        "`window.matchMedia(\"(prefers-reduced-motion: reduce)\")`, store "
        "the result on `this.reduceMotion`, and stop the dust emitter if "
        "the user opted out. Step 33's shake and step 34's flash will be "
        "wrapped in checks now.\n\nAt the end of `create`:\n\n"
        "```js\n"
        "this.reduceMotion = window.matchMedia(\n"
        '  "(prefers-reduced-motion: reduce)"\n'
        ").matches;\n"
        "if (this.reduceMotion && this.dust) this.dust.stop();\n"
        "```\n\nGuard the shake call you wrote in step 33 to skip when "
        "reduced motion is set, and replace the bare `flash` line in the "
        "powerup overlap so it only fires when motion is allowed (both "
        "edits are pre-populated in the seed)."
    ),
    hints=[
        (
            'You should set `this.reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches`.',
            r'this\.reduceMotion\s*=\s*window\.matchMedia\(\s*\n?\s*["\']\(prefers-reduced-motion:\s*reduce\)["\']\s*\n?\s*\)\.matches',
        ),
        (
            "You should call `this.dust.stop()` when `this.reduceMotion` is true.",
            r"if\s*\(\s*this\.reduceMotion\s*&&\s*this\.dust\s*\)\s*this\.dust\.stop\(\s*\)",
        ),
    ],
    seed_text=(
        lambda prev=solutions[36]: seed_insert(
            prev.replace(
                "      this.cameras.main.shake(220, 0.012);\n",
                "      if (!this.reduceMotion) this.cameras.main.shake(220, 0.012);\n",
                1,
            ).replace(
                "      this.cameras.main.flash(160, 102, 221, 255);\n",
                "      if (!this.reduceMotion) {\n        this.cameras.main.flash(160, 102, 221, 255);\n      }\n",
                1,
            ),
            DUST_TEXTURE_BLOCK,
        )
    )(),
    mutate=chain(
        lambda: state.replace(
            "      this.cameras.main.shake(220, 0.012);\n",
            "      if (!this.reduceMotion) this.cameras.main.shake(220, 0.012);\n",
        ),
        lambda: state.replace(
            "      this.cameras.main.flash(160, 102, 221, 255);\n",
            "      if (!this.reduceMotion) {\n        this.cameras.main.flash(160, 102, 221, 255);\n      }\n",
        ),
        lambda: state.insert_after(DUST_TEXTURE_BLOCK, REDUCE_MOTION_INIT_BLOCK),
    ),
)

# Step 38 — pointer/touch input fires jump.
step(
    38,
    title="Step 38",
    description=(
        "Mobile players don't have a SPACE key. Reuse the jump buffer by "
        "stamping `lastJumpPressedAt` on any pointerdown event — same "
        "buffer-window logic in `updateJump` handles the rest.\n\nAt the "
        "end of `create`:\n\n"
        "```js\n"
        'this.input.on("pointerdown", () => {\n'
        "  if (this.gameOver) return;\n"
        "  this.lastJumpPressedAt = this.time.now;\n"
        "});\n"
        "```\n\nTouch the canvas — the player jumps. The buffer-window "
        "rules ensure even imprecise taps register cleanly."
    ),
    hints=[
        (
            'You should register `this.input.on("pointerdown", ...)` that stamps `this.lastJumpPressedAt = this.time.now`.',
            r'this\.input\.on\(\s*["\']pointerdown["\'][\s\S]*this\.lastJumpPressedAt\s*=\s*this\.time\.now',
        ),
        (
            "You should `return` early if `this.gameOver` is true.",
            r'this\.input\.on\(\s*["\']pointerdown["\'][\s\S]*if\s*\(\s*this\.gameOver\s*\)\s*return',
        ),
    ],
    seed_text=seed_insert(solutions[37], REDUCE_MOTION_INIT_BLOCK),
    mutate=lambda: state.insert_after(
        REDUCE_MOTION_INIT_BLOCK,
        '    this.input.on("pointerdown", () => {\n'
        "      if (this.gameOver) return;\n"
        "      this.lastJumpPressedAt = this.time.now;\n"
        "    });\n",
    ),
)

POINTERDOWN_BLOCK = (
    '    this.input.on("pointerdown", () => {\n'
    "      if (this.gameOver) return;\n"
    "      this.lastJumpPressedAt = this.time.now;\n"
    "    });\n"
)

HUD_CONTAINER_BLOCK = (
    "    this.hud = this.add.container(0, 0).setScrollFactor(0).setDepth(120);\n"
    "    this.hud.add([this.distanceText, this.bestText]);\n"
)

UI_CAM_BLOCK = "    this.uiCam = this.cameras.add(0, 0, 480, 320);\n"

IGNORE_LIST_BLOCK = (
    "    this.cameras.main.ignore(this.hud);\n"
    "    this.uiCam.ignore([\n"
    "      this.sky,\n"
    "      this.clouds,\n"
    "      this.mountains,\n"
    "      this.groundTile,\n"
    "      this.player,\n"
    "      this.groundBody,\n"
    "      this.obstacles,\n"
    "      this.coins,\n"
    "      this.powerups,\n"
    "      this.flyers,\n"
    "      this.dust\n"
    "    ]);\n"
)

GAMEOVER_BANNER_OLD = (
    "      this.add\n"
    '        .text(240, 140, "Game Over", {\n'
    '          fontSize: "24px",\n'
    '          color: "#ffffff"\n'
    "        })\n"
    "        .setOrigin(0.5)\n"
    "        .setDepth(200);\n"
)

GAMEOVER_BANNER_NEW = (
    "      const newBest = Math.floor(this.distance) >= this.bestDistance;\n"
    "      const banner = this.add\n"
    "        .text(\n"
    "          240,\n"
    "          140,\n"
    '          newBest ? "New Best!" : "Game Over",\n'
    "          {\n"
    '            fontSize: "24px",\n'
    '            color: newBest ? "#ffd866" : "#ffffff"\n'
    "          }\n"
    "        )\n"
    "        .setOrigin(0.5)\n"
    "        .setScrollFactor(0)\n"
    "        .setDepth(200);\n"
    "      const hint = this.add\n"
    '        .text(240, 180, "Press R to restart", {\n'
    '          fontSize: "12px",\n'
    '          color: "#aaccff"\n'
    "        })\n"
    "        .setOrigin(0.5)\n"
    "        .setScrollFactor(0)\n"
    "        .setDepth(200);\n"
    "      this.hud.add([banner, hint]);\n"
)

RESTART_KEY_BLOCK = (
    '    this.input.keyboard.on("keydown-R", () => {\n'
    "      if (this.gameOver) this.scene.restart();\n"
    "    });\n"
)

SESSIONS_INIT_HUD_BLOCK = (
    '    this.sessions = parseInt(\n      localStorage.getItem("runner:sessions") || "0",\n      10\n    );\n'
    "    this.sessionsText = this.add\n"
    '      .text(8, 38, "Runs: " + this.sessions, {\n'
    '        fontSize: "10px",\n'
    '        color: "#aaccff"\n'
    "      })\n"
    "      .setScrollFactor(0)\n"
    "      .setDepth(120);\n"
    "    this.hud.add(this.sessionsText);\n"
)

SESSIONS_BUMP_BLOCK = (
    "      this.sessions += 1;\n"
    '      localStorage.setItem("runner:sessions", String(this.sessions));\n'
    '      this.sessionsText.setText("Runs: " + this.sessions);\n'
)


# Step 39 — wrap HUD elements in a container so a single ignore call hides them.
step(
    39,
    title="Step 39",
    description=(
        "The lecture pair this workshop builds on showed that you exclude "
        "objects from a camera by passing a `Container`, `Group`, or "
        "`Layer` to `Camera#ignore` — much cleaner than ignoring each text "
        "individually. Wrap the existing HUD texts in a container right "
        "after they're created.\n\nAfter the `bestText` block in `create`:\n\n"
        "```js\n"
        "this.hud = this.add\n"
        "  .container(0, 0)\n"
        "  .setScrollFactor(0)\n"
        "  .setDepth(120);\n"
        "this.hud.add([this.distanceText, this.bestText]);\n"
        "```\n\nThe container's depth doesn't matter yet — once the UI "
        "camera is wired up next step it'll always render on top regardless. "
        "But setting it now keeps the HUD floating above everything when "
        "running on a single-camera render path."
    ),
    hints=[
        (
            "You should create `this.hud` with `this.add.container(0, 0)` and chain `setScrollFactor(0)`.",
            r"this\.hud\s*=\s*this\.add\s*\.container\(\s*0\s*,\s*0\s*\)\s*\.setScrollFactor\(\s*0\s*\)",
        ),
        (
            "You should add `this.distanceText` and `this.bestText` to the container with `this.hud.add([this.distanceText, this.bestText])`.",
            r"this\.hud\.add\(\s*\[\s*this\.distanceText\s*,\s*this\.bestText\s*\]\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[38], BEST_INIT_AND_TEXT_BLOCK),
    mutate=lambda: state.insert_after(
        BEST_INIT_AND_TEXT_BLOCK, HUD_CONTAINER_BLOCK
    ),
)

# Step 40 — second camera that will host the UI.
step(
    40,
    title="Step 40",
    description=(
        "Add a **second** camera covering the same `(0, 0, 480, 320)` "
        "viewport. Phaser renders cameras in the order they were added — so "
        "the new `uiCam` draws *on top of* the main camera. Until you tell "
        "it what to ignore (next step), both cameras still draw the entire "
        "scene, so the world appears doubled. Don't panic — that's the "
        "diagnostic that proves you have two cameras live.\n\nRight after "
        "the HUD container:\n\n"
        "```js\n"
        "this.uiCam = this.cameras.add(0, 0, 480, 320);\n"
        "```\n\nLecture recap: `cameras.add(x, y, width, height)` creates "
        "and returns a new camera; it's pushed to the end of the manager's "
        "list, which controls render order."
    ),
    hints=[
        (
            "You should add a second camera with `this.uiCam = this.cameras.add(0, 0, 480, 320)`.",
            r"this\.uiCam\s*=\s*this\.cameras\.add\(\s*0\s*,\s*0\s*,\s*480\s*,\s*320\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[39], HUD_CONTAINER_BLOCK),
    mutate=lambda: state.insert_after(HUD_CONTAINER_BLOCK, UI_CAM_BLOCK),
)

# Step 41 — ignore lists carve the two cameras apart.
step(
    41,
    title="Step 41",
    description=(
        "Right now the world renders twice (main camera draws everything, "
        "UI camera draws everything on top). Fix that with a pair of "
        "`ignore` calls: tell the **main** camera to skip the HUD container, "
        "and tell the **UI** camera to skip every world game object. After "
        "this step the HUD only renders via the UI camera, and the world "
        "only renders via the main camera — that's the multi-camera UI "
        "pattern in five lines.\n\nAfter the `uiCam` line:\n\n"
        "```js\n"
        "this.cameras.main.ignore(this.hud);\n"
        "this.uiCam.ignore([\n"
        "  this.sky,\n"
        "  this.clouds,\n"
        "  this.mountains,\n"
        "  this.groundTile,\n"
        "  this.player,\n"
        "  this.groundBody,\n"
        "  this.obstacles,\n"
        "  this.coins,\n"
        "  this.powerups,\n"
        "  this.flyers,\n"
        "  this.dust\n"
        "]);\n"
        "```\n\n`ignore` accepts a single GameObject, an array of "
        "GameObjects, or a Group/Container/Layer — that's why one call "
        "covers the whole HUD and another array covers every world object."
    ),
    hints=[
        (
            "You should call `this.cameras.main.ignore(this.hud)` so the main camera skips the HUD container.",
            r"this\.cameras\.main\.ignore\(\s*this\.hud\s*\)",
        ),
        (
            "You should call `this.uiCam.ignore([...])` listing every world object — sky, clouds, mountains, groundTile, player, groundBody, obstacles, coins, powerups, flyers, dust.",
            r"this\.uiCam\.ignore\(\s*\[\s*this\.sky[\s\S]*this\.dust\s*\]\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[40], UI_CAM_BLOCK),
    mutate=lambda: state.insert_after(UI_CAM_BLOCK, IGNORE_LIST_BLOCK),
)

# Step 42 — game-over banner uses the HUD container and shows a "New Best!" variant.
step(
    42,
    title="Step 42",
    description=(
        "Replace the basic `Game Over` text in `gameOverDeath` with a "
        "richer banner: the headline switches to **`New Best!`** in gold "
        "when the player crossed their previous record, and a hint line "
        "below tells them how to restart. Add both to `this.hud` so the UI "
        "camera renders them on top of the frozen world.\n\nReplace the "
        "old banner block inside `gameOverDeath`:\n\n"
        "```js\n"
        "const newBest = Math.floor(this.distance) >= this.bestDistance;\n"
        "const banner = this.add\n"
        "  .text(\n"
        "    240,\n"
        "    140,\n"
        '    newBest ? "New Best!" : "Game Over",\n'
        "    {\n"
        '      fontSize: "24px",\n'
        '      color: newBest ? "#ffd866" : "#ffffff"\n'
        "    }\n"
        "  )\n"
        "  .setOrigin(0.5)\n"
        "  .setScrollFactor(0)\n"
        "  .setDepth(200);\n"
        "const hint = this.add\n"
        '  .text(240, 180, "Press R to restart", {\n'
        '    fontSize: "12px",\n'
        '    color: "#aaccff"\n'
        "  })\n"
        "  .setOrigin(0.5)\n"
        "  .setScrollFactor(0)\n"
        "  .setDepth(200);\n"
        "this.hud.add([banner, hint]);\n"
        "```\n\nNote the `>=` for `newBest` — the persist block already "
        "wrote the new best to `this.bestDistance` *before* the banner "
        "renders, so equality means \"they tied or beat their record on "
        "this run.\""
    ),
    hints=[
        (
            "You should compute `const newBest = Math.floor(this.distance) >= this.bestDistance`.",
            r"const\s+newBest\s*=\s*Math\.floor\(\s*this\.distance\s*\)\s*>=\s*this\.bestDistance",
        ),
        (
            'The banner text should switch on `newBest`: `newBest ? "New Best!" : "Game Over"`.',
            r'newBest\s*\?\s*["\']New Best!["\']\s*:\s*["\']Game Over["\']',
        ),
        (
            'You should colour the banner gold (`"#ffd866"`) on a new best, white otherwise.',
            r'color:\s*newBest\s*\?\s*["\']#ffd866["\']\s*:\s*["\']#ffffff["\']',
        ),
        (
            'You should render the hint `"Press R to restart"` at `(240, 180)`.',
            r'\.text\(\s*240\s*,\s*180\s*,\s*["\']Press R to restart["\']',
        ),
        (
            "You should add both texts to the HUD container with `this.hud.add([banner, hint])`.",
            r"this\.hud\.add\(\s*\[\s*banner\s*,\s*hint\s*\]\s*\)",
        ),
    ],
    seed_text=seed_wrap(solutions[41], GAMEOVER_BANNER_OLD),
    mutate=lambda: state.replace(GAMEOVER_BANNER_OLD, GAMEOVER_BANNER_NEW),
)

# Step 43 — restart key (R) gated on game-over state.
step(
    43,
    title="Step 43",
    description=(
        "Wire up the `R` key the banner promises. Use "
        "`this.input.keyboard.on(\"keydown-R\", ...)` and gate the restart "
        "on `this.gameOver` so an accidental tap mid-run doesn't reset "
        "your distance.\n\nAfter the pointerdown handler in `create`:\n\n"
        "```js\n"
        'this.input.keyboard.on("keydown-R", () => {\n'
        "  if (this.gameOver) this.scene.restart();\n"
        "});\n"
        "```\n\n`scene.restart()` re-runs `init`, `preload`, and `create` "
        "from scratch. `localStorage` survives the restart, so the best "
        "distance and (next step) the run counter persist across deaths."
    ),
    hints=[
        (
            'You should register `this.input.keyboard.on("keydown-R", ...)` in `create`.',
            r'this\.input\.keyboard\.on\(\s*["\']keydown-R["\']',
        ),
        (
            "Inside the keydown-R callback you should call `this.scene.restart()` only when `this.gameOver` is true.",
            r'keydown-R["\']\s*,\s*\(\s*\)\s*=>\s*\{\s*if\s*\(\s*this\.gameOver\s*\)\s*this\.scene\.restart\(\s*\)',
        ),
    ],
    seed_text=seed_insert(solutions[42], POINTERDOWN_BLOCK),
    mutate=lambda: state.insert_after(POINTERDOWN_BLOCK, RESTART_KEY_BLOCK),
)

# Step 44 — sessions counter init + HUD entry.
step(
    44,
    title="Step 44",
    description=(
        "Persist a run counter the same way you persisted the best "
        "distance: read it from `localStorage` on scene start, render it "
        "as another HUD text, and add it to the same `this.hud` container "
        "so the UI camera picks it up automatically.\n\nAfter the HUD "
        "container's `add(...)` call:\n\n"
        "```js\n"
        "this.sessions = parseInt(\n"
        '  localStorage.getItem("runner:sessions") || "0",\n'
        "  10\n"
        ");\n"
        "this.sessionsText = this.add\n"
        '  .text(8, 38, "Runs: " + this.sessions, {\n'
        '    fontSize: "10px",\n'
        '    color: "#aaccff"\n'
        "  })\n"
        "  .setScrollFactor(0)\n"
        "  .setDepth(120);\n"
        "this.hud.add(this.sessionsText);\n"
        "```\n\nThe counter only ticks up when a run ends — that's the "
        "next step. For now it should display whatever number was "
        "previously persisted (or `0` on a fresh browser)."
    ),
    hints=[
        (
            'You should read `this.sessions = parseInt(localStorage.getItem("runner:sessions") || "0", 10)`.',
            r'this\.sessions\s*=\s*parseInt\(\s*\n?\s*localStorage\.getItem\(\s*["\']runner:sessions["\']\s*\)\s*\|\|\s*["\']0["\']\s*,\s*\n?\s*10\s*\n?\s*\)',
        ),
        (
            'You should create `this.sessionsText` with the label `"Runs: " + this.sessions` at `(8, 38)`.',
            r'this\.sessionsText\s*=\s*this\.add\s*\.text\(\s*8\s*,\s*38\s*,\s*["\']Runs: ["\']\s*\+\s*this\.sessions',
        ),
        (
            "You should add `this.sessionsText` to the HUD container with `this.hud.add(this.sessionsText)`.",
            r"this\.hud\.add\(\s*this\.sessionsText\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[43], HUD_CONTAINER_BLOCK),
    mutate=lambda: state.insert_after(
        HUD_CONTAINER_BLOCK, SESSIONS_INIT_HUD_BLOCK
    ),
)

# Step 45 — capstone: persist the run counter on every death.
step(
    45,
    title="Step 45",
    description=(
        "Final step. Bump the run counter when the player dies, persist "
        "the new value, and refresh the HUD label so the player sees "
        "their session number tick up live before the banner appears. "
        "After this commit, restart the run a few times — the `Runs:` "
        "counter should keep climbing across reloads, just like the best "
        "distance.\n\nInside `gameOverDeath`, immediately after the "
        "best-persistence block (and before the banner renders):\n\n"
        "```js\n"
        "this.sessions += 1;\n"
        'localStorage.setItem("runner:sessions", String(this.sessions));\n'
        'this.sessionsText.setText("Runs: " + this.sessions);\n'
        "```\n\nThat's the workshop. You have a four-layer parallax world "
        "with a coyote-time + buffered jump, double-jump pickups, "
        "ducking under flying enemies, ramping difficulty, persistent "
        "best, persistent run count, multi-camera UI overlay, "
        "reduced-motion accessibility, pointer + keyboard input, and a "
        "restart loop — in 45 small steps. Ship it."
    ),
    hints=[
        (
            "Inside `gameOverDeath` you should run `this.sessions += 1` after the best-persistence block.",
            r"this\.sessions\s*\+=\s*1",
        ),
        (
            'You should persist the new value with `localStorage.setItem("runner:sessions", String(this.sessions))`.',
            r'localStorage\.setItem\(\s*["\']runner:sessions["\']\s*,\s*String\(\s*this\.sessions\s*\)\s*\)',
        ),
        (
            'You should refresh the HUD label with `this.sessionsText.setText("Runs: " + this.sessions)`.',
            r'this\.sessionsText\.setText\(\s*["\']Runs: ["\']\s*\+\s*this\.sessions\s*\)',
        ),
    ],
    seed_text=seed_insert(solutions[44], BEST_PERSIST_BLOCK),
    mutate=lambda: state.insert_after(BEST_PERSIST_BLOCK, SESSIONS_BUMP_BLOCK),
)


import re as _re

_ANCHOR_LINE = _re.compile(
    r"^[ \t]*/\* (?:main-preload|main-create|main-update) \*/\n",
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
    debug_path = (
        Path(tempfile.gettempdir()) / "fcc-endless-runner-solutions.json"
    )
    debug_path.write_text(
        _json.dumps(
            [strip_anchors(s) if s is not None else "" for s in solutions]
        ),
        encoding="utf-8",
    )
    print(f"Wrote {len(solutions) - 1} step files (1..{len(solutions) - 1})")


if __name__ == "__main__":
    main()
