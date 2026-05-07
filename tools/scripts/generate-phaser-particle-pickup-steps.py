"""Generate workshop-particle-pickup-effect step .md files (steps 1..20).

Workshop validator enforces *exactly one* editable region per step (i.e. 2
`--fcc-editable-region--` markers total). Each step adds one focused concept
into a single contiguous region of the previous step's solution.
"""

from pathlib import Path

OUT_DIR = (
    Path(__file__).resolve().parents[2]
    / "curriculum/challenges/english/blocks/workshop-particle-pickup-effect"
)
HEX_BASE = "66faa20000000000000000{:02x}"
ID_OFFSET = 0xE0  # step 1 → 0xe1, step 2 → 0xe2, …, step 20 → 0xf4

HTML = """\
```html

<!DOCTYPE html>
<html lang=\"en\">
  <head>
    <meta charset=\"UTF-8\" />
    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />
    <title>Particle Pickup Effect with Phaser</title>
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
  height: 360,
  parent: \"game-container\",
  pixelArt: true,
  physics: {
    default: \"arcade\",
    arcade: { gravity: { y: 0 } }
  },
  scene: [MainScene]
};

const game = new Phaser.Game(config);"""


HERO_ANIMS = """    this.anims.create({
      key: \"idle\",
      frames: this.anims.generateFrameNumbers(\"hero\", { start: 0, end: 0 }),
      frameRate: 6,
      repeat: -1
    });
    this.anims.create({
      key: \"walk-down\",
      frames: this.anims.generateFrameNumbers(\"hero\", { start: 0, end: 3 }),
      frameRate: 8,
      repeat: -1
    });
    this.anims.create({
      key: \"walk-up\",
      frames: this.anims.generateFrameNumbers(\"hero\", { start: 4, end: 7 }),
      frameRate: 8,
      repeat: -1
    });
    this.anims.create({
      key: \"walk-left\",
      frames: this.anims.generateFrameNumbers(\"hero\", { start: 8, end: 11 }),
      frameRate: 8,
      repeat: -1
    });
    this.anims.create({
      key: \"walk-right\",
      frames: this.anims.generateFrameNumbers(\"hero\", { start: 12, end: 15 }),
      frameRate: 8,
      repeat: -1
    });
    this.anims.create({
      key: \"coin-spin\",
      frames: this.anims.generateFrameNumbers(\"coin\", { start: 0, end: 7 }),
      frameRate: 12,
      repeat: -1
    });
    this.player.anims.play(\"idle\");"""


UPDATE_BODY = """    this.player.setVelocity(0);
    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-120);
      this.player.setFlipX(false);
      this.player.anims.play(\"walk-left\", true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(120);
      this.player.setFlipX(true);
      this.player.anims.play(\"walk-right\", true);
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-120);
      this.player.anims.play(\"walk-up\", true);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(120);
      this.player.anims.play(\"walk-down\", true);
    } else {
      this.player.anims.play(\"idle\", true);
    }"""


COIN_GROUP_DEPTH = """    this.coins = this.physics.add.group();
    [
      [80, 80],
      [400, 80],
      [80, 280],
      [400, 280],
      [240, 80]
    ].forEach(([x, y]) => {
      const coin = this.coins.create(x, y, \"coin\");
      coin.setScale(2);
      coin.setDepth(10);
      coin.anims.play(\"coin-spin\");
    });"""


CREATE_DEPTHS_TAIL = """    this.bg.setDepth(0);
    this.player.setDepth(10);"""


RING_INIT = """    this.ring = this.add.graphics();
    this.ring.setDepth(50);
    this.ring.lineStyle(2, 0xffffff, 1);
    this.ring.strokeCircle(0, 0, 24);
    this.ring.setPosition(this.player.x, this.player.y);"""


RING_INIT_WITH_BLEND = """    this.ring = this.add.graphics();
    this.ring.setDepth(50);
    this.ring.setBlendMode(Phaser.BlendModes.ADD);
    this.ring.lineStyle(2, 0xffffff, 1);
    this.ring.strokeCircle(0, 0, 24);
    this.ring.setPosition(this.player.x, this.player.y);"""


HUD_INIT = """    this.score = 0;
    this.scoreText = this.add.text(10, 10, \"Score: 0\", {
      fontSize: \"16px\",
      fill: \"#ffffff\"
    });
    this.scoreText.setScrollFactor(0);
    this.scoreText.setDepth(100);"""


UI_CAMERA = """    this.uiCamera = this.cameras.add(0, 0, 480, 360);
    this.cameras.main.ignore(this.scoreText);
    this.uiCamera.ignore([this.bg, this.player, this.coins, this.ring]);"""


# ---------------------------------------------------------------------------
# Solution snapshot for each step. Each function returns the script.js
# AFTER step N is completed (i.e. the seed of step N+1 is structurally
# this minus the editable region).
# ---------------------------------------------------------------------------


def s1():
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}
}}

{CONFIG}"""


def s2():
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  preload() {{
    this.load.spritesheet(
      \"hero\",
      \"/curriculum-assets/phaser/spritesheets/hero-walk.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
    this.load.spritesheet(
      \"coin\",
      \"/curriculum-assets/phaser/spritesheets/coin.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
  }}
}}

{CONFIG}"""


def s3():
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  preload() {{
    this.load.spritesheet(
      \"hero\",
      \"/curriculum-assets/phaser/spritesheets/hero-walk.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
    this.load.spritesheet(
      \"coin\",
      \"/curriculum-assets/phaser/spritesheets/coin.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
  }}

  create() {{
    this.bg = this.add.rectangle(240, 180, 480, 360, 0x223344);
    this.player = this.physics.add.sprite(240, 180, \"hero\", 0);
    this.player.setCollideWorldBounds(true);
    this.player.setScale(2);
    this.cursors = this.input.keyboard.createCursorKeys();
  }}
}}

{CONFIG}"""


def s4():
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  preload() {{
    this.load.spritesheet(
      \"hero\",
      \"/curriculum-assets/phaser/spritesheets/hero-walk.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
    this.load.spritesheet(
      \"coin\",
      \"/curriculum-assets/phaser/spritesheets/coin.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
  }}

  create() {{
    this.bg = this.add.rectangle(240, 180, 480, 360, 0x223344);
    this.player = this.physics.add.sprite(240, 180, \"hero\", 0);
    this.player.setCollideWorldBounds(true);
    this.player.setScale(2);
    this.cursors = this.input.keyboard.createCursorKeys();

{HERO_ANIMS}
  }}
}}

{CONFIG}"""


def s5():
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  preload() {{
    this.load.spritesheet(
      \"hero\",
      \"/curriculum-assets/phaser/spritesheets/hero-walk.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
    this.load.spritesheet(
      \"coin\",
      \"/curriculum-assets/phaser/spritesheets/coin.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
  }}

  create() {{
    this.bg = this.add.rectangle(240, 180, 480, 360, 0x223344);
    this.player = this.physics.add.sprite(240, 180, \"hero\", 0);
    this.player.setCollideWorldBounds(true);
    this.player.setScale(2);
    this.cursors = this.input.keyboard.createCursorKeys();

{HERO_ANIMS}
  }}

  update() {{
{UPDATE_BODY}
  }}
}}

{CONFIG}"""


def s6():
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  preload() {{
    this.load.spritesheet(
      \"hero\",
      \"/curriculum-assets/phaser/spritesheets/hero-walk.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
    this.load.spritesheet(
      \"coin\",
      \"/curriculum-assets/phaser/spritesheets/coin.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
  }}

  create() {{
    this.bg = this.add.rectangle(240, 180, 480, 360, 0x223344);
    this.player = this.physics.add.sprite(240, 180, \"hero\", 0);
    this.player.setCollideWorldBounds(true);
    this.player.setScale(2);
    this.cursors = this.input.keyboard.createCursorKeys();

{HERO_ANIMS}

{COIN_GROUP_DEPTH}
  }}

  update() {{
{UPDATE_BODY}
  }}
}}

{CONFIG}"""


def s7():
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  preload() {{
    this.load.spritesheet(
      \"hero\",
      \"/curriculum-assets/phaser/spritesheets/hero-walk.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
    this.load.spritesheet(
      \"coin\",
      \"/curriculum-assets/phaser/spritesheets/coin.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
  }}

  create() {{
    this.bg = this.add.rectangle(240, 180, 480, 360, 0x223344);
    this.player = this.physics.add.sprite(240, 180, \"hero\", 0);
    this.player.setCollideWorldBounds(true);
    this.player.setScale(2);
    this.cursors = this.input.keyboard.createCursorKeys();

{HERO_ANIMS}

{COIN_GROUP_DEPTH}

{CREATE_DEPTHS_TAIL}
  }}

  update() {{
{UPDATE_BODY}
  }}
}}

{CONFIG}"""


def s8():
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  preload() {{
    this.load.spritesheet(
      \"hero\",
      \"/curriculum-assets/phaser/spritesheets/hero-walk.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
    this.load.spritesheet(
      \"coin\",
      \"/curriculum-assets/phaser/spritesheets/coin.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
  }}

  create() {{
    this.bg = this.add.rectangle(240, 180, 480, 360, 0x223344);
    this.player = this.physics.add.sprite(240, 180, \"hero\", 0);
    this.player.setCollideWorldBounds(true);
    this.player.setScale(2);
    this.cursors = this.input.keyboard.createCursorKeys();

{HERO_ANIMS}

{COIN_GROUP_DEPTH}

{CREATE_DEPTHS_TAIL}
    this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this);
  }}

  update() {{
{UPDATE_BODY}
  }}
}}

{CONFIG}"""


def s9():
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  preload() {{
    this.load.spritesheet(
      \"hero\",
      \"/curriculum-assets/phaser/spritesheets/hero-walk.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
    this.load.spritesheet(
      \"coin\",
      \"/curriculum-assets/phaser/spritesheets/coin.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
  }}

  create() {{
    this.bg = this.add.rectangle(240, 180, 480, 360, 0x223344);
    this.player = this.physics.add.sprite(240, 180, \"hero\", 0);
    this.player.setCollideWorldBounds(true);
    this.player.setScale(2);
    this.cursors = this.input.keyboard.createCursorKeys();

{HERO_ANIMS}

{COIN_GROUP_DEPTH}

{CREATE_DEPTHS_TAIL}
    this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this);
  }}

  update() {{
{UPDATE_BODY}
  }}

  collectCoin(player, coin) {{
    coin.setTint(0xff3366);
  }}
}}

{CONFIG}"""


def s10():
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  preload() {{
    this.load.spritesheet(
      \"hero\",
      \"/curriculum-assets/phaser/spritesheets/hero-walk.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
    this.load.spritesheet(
      \"coin\",
      \"/curriculum-assets/phaser/spritesheets/coin.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
  }}

  create() {{
    this.bg = this.add.rectangle(240, 180, 480, 360, 0x223344);
    this.player = this.physics.add.sprite(240, 180, \"hero\", 0);
    this.player.setCollideWorldBounds(true);
    this.player.setScale(2);
    this.cursors = this.input.keyboard.createCursorKeys();

{HERO_ANIMS}

{COIN_GROUP_DEPTH}

{CREATE_DEPTHS_TAIL}
    this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this);
  }}

  update() {{
{UPDATE_BODY}
  }}

  collectCoin(player, coin) {{
    coin.setTint(0xff3366);
    this.tweens.add({{
      targets: coin,
      scale: 0,
      duration: 200,
      onComplete: () => coin.destroy()
    }});
  }}
}}

{CONFIG}"""


def s11():
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  preload() {{
    this.load.spritesheet(
      \"hero\",
      \"/curriculum-assets/phaser/spritesheets/hero-walk.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
    this.load.spritesheet(
      \"coin\",
      \"/curriculum-assets/phaser/spritesheets/coin.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
  }}

  create() {{
    this.bg = this.add.rectangle(240, 180, 480, 360, 0x223344);
    this.player = this.physics.add.sprite(240, 180, \"hero\", 0);
    this.player.setCollideWorldBounds(true);
    this.player.setScale(2);
    this.cursors = this.input.keyboard.createCursorKeys();

{HERO_ANIMS}

{COIN_GROUP_DEPTH}

{CREATE_DEPTHS_TAIL}
    this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this);
  }}

  update() {{
{UPDATE_BODY}
  }}

  collectCoin(player, coin) {{
    coin.setTint(0xff3366);
    this.tweens.add({{
      targets: coin,
      scale: 0,
      duration: 200,
      onComplete: () => coin.destroy()
    }});
    const floater = this.add.text(coin.x, coin.y, \"+10\", {{
      fontSize: \"16px\",
      fill: \"#ffeeaa\"
    }});
    floater.setOrigin(0.5);
    floater.setDepth(50);
    this.tweens.add({{
      targets: floater,
      y: floater.y - 30,
      alpha: 0,
      duration: 500,
      onComplete: () => floater.destroy()
    }});
  }}
}}

{CONFIG}"""


def s12():
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  preload() {{
    this.load.spritesheet(
      \"hero\",
      \"/curriculum-assets/phaser/spritesheets/hero-walk.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
    this.load.spritesheet(
      \"coin\",
      \"/curriculum-assets/phaser/spritesheets/coin.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
  }}

  create() {{
    this.bg = this.add.rectangle(240, 180, 480, 360, 0x223344);
    this.player = this.physics.add.sprite(240, 180, \"hero\", 0);
    this.player.setCollideWorldBounds(true);
    this.player.setScale(2);
    this.cursors = this.input.keyboard.createCursorKeys();

{HERO_ANIMS}

{COIN_GROUP_DEPTH}

{CREATE_DEPTHS_TAIL}
    this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this);

{RING_INIT}
  }}

  update() {{
{UPDATE_BODY}
  }}

  collectCoin(player, coin) {{
    coin.setTint(0xff3366);
    this.tweens.add({{
      targets: coin,
      scale: 0,
      duration: 200,
      onComplete: () => coin.destroy()
    }});
    const floater = this.add.text(coin.x, coin.y, \"+10\", {{
      fontSize: \"16px\",
      fill: \"#ffeeaa\"
    }});
    floater.setOrigin(0.5);
    floater.setDepth(50);
    this.tweens.add({{
      targets: floater,
      y: floater.y - 30,
      alpha: 0,
      duration: 500,
      onComplete: () => floater.destroy()
    }});
  }}
}}

{CONFIG}"""


def s13():
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  preload() {{
    this.load.spritesheet(
      \"hero\",
      \"/curriculum-assets/phaser/spritesheets/hero-walk.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
    this.load.spritesheet(
      \"coin\",
      \"/curriculum-assets/phaser/spritesheets/coin.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
  }}

  create() {{
    this.bg = this.add.rectangle(240, 180, 480, 360, 0x223344);
    this.player = this.physics.add.sprite(240, 180, \"hero\", 0);
    this.player.setCollideWorldBounds(true);
    this.player.setScale(2);
    this.cursors = this.input.keyboard.createCursorKeys();

{HERO_ANIMS}

{COIN_GROUP_DEPTH}

{CREATE_DEPTHS_TAIL}
    this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this);

{RING_INIT}
  }}

  update() {{
{UPDATE_BODY}
    this.ring.setPosition(this.player.x, this.player.y);
  }}

  collectCoin(player, coin) {{
    coin.setTint(0xff3366);
    this.tweens.add({{
      targets: coin,
      scale: 0,
      duration: 200,
      onComplete: () => coin.destroy()
    }});
    const floater = this.add.text(coin.x, coin.y, \"+10\", {{
      fontSize: \"16px\",
      fill: \"#ffeeaa\"
    }});
    floater.setOrigin(0.5);
    floater.setDepth(50);
    this.tweens.add({{
      targets: floater,
      y: floater.y - 30,
      alpha: 0,
      duration: 500,
      onComplete: () => floater.destroy()
    }});
  }}
}}

{CONFIG}"""


def s14():
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  preload() {{
    this.load.spritesheet(
      \"hero\",
      \"/curriculum-assets/phaser/spritesheets/hero-walk.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
    this.load.spritesheet(
      \"coin\",
      \"/curriculum-assets/phaser/spritesheets/coin.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
  }}

  create() {{
    this.bg = this.add.rectangle(240, 180, 480, 360, 0x223344);
    this.player = this.physics.add.sprite(240, 180, \"hero\", 0);
    this.player.setCollideWorldBounds(true);
    this.player.setScale(2);
    this.cursors = this.input.keyboard.createCursorKeys();

{HERO_ANIMS}

{COIN_GROUP_DEPTH}

{CREATE_DEPTHS_TAIL}
    this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this);

{RING_INIT_WITH_BLEND}
  }}

  update() {{
{UPDATE_BODY}
    this.ring.setPosition(this.player.x, this.player.y);
  }}

  collectCoin(player, coin) {{
    coin.setTint(0xff3366);
    this.tweens.add({{
      targets: coin,
      scale: 0,
      duration: 200,
      onComplete: () => coin.destroy()
    }});
    const floater = this.add.text(coin.x, coin.y, \"+10\", {{
      fontSize: \"16px\",
      fill: \"#ffeeaa\"
    }});
    floater.setOrigin(0.5);
    floater.setDepth(50);
    this.tweens.add({{
      targets: floater,
      y: floater.y - 30,
      alpha: 0,
      duration: 500,
      onComplete: () => floater.destroy()
    }});
  }}
}}

{CONFIG}"""


def s15():
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  preload() {{
    this.load.spritesheet(
      \"hero\",
      \"/curriculum-assets/phaser/spritesheets/hero-walk.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
    this.load.spritesheet(
      \"coin\",
      \"/curriculum-assets/phaser/spritesheets/coin.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
  }}

  create() {{
    this.bg = this.add.rectangle(240, 180, 480, 360, 0x223344);
    this.player = this.physics.add.sprite(240, 180, \"hero\", 0);
    this.player.setCollideWorldBounds(true);
    this.player.setScale(2);
    this.cursors = this.input.keyboard.createCursorKeys();

{HERO_ANIMS}

{COIN_GROUP_DEPTH}

{CREATE_DEPTHS_TAIL}
    this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this);

{RING_INIT_WITH_BLEND}
  }}

  update() {{
{UPDATE_BODY}
    this.ring.setPosition(this.player.x, this.player.y);
  }}

  collectCoin(player, coin) {{
    coin.setTint(0xff3366);
    this.tweens.add({{
      targets: coin,
      scale: 0,
      duration: 200,
      onComplete: () => coin.destroy()
    }});
    const floater = this.add.text(coin.x, coin.y, \"+10\", {{
      fontSize: \"16px\",
      fill: \"#ffeeaa\"
    }});
    floater.setOrigin(0.5);
    floater.setDepth(50);
    this.tweens.add({{
      targets: floater,
      y: floater.y - 30,
      alpha: 0,
      duration: 500,
      onComplete: () => floater.destroy()
    }});
    this.tweens.add({{
      targets: this.ring,
      scale: 1.5,
      duration: 200,
      yoyo: true
    }});
  }}
}}

{CONFIG}"""


def s16():
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  preload() {{
    this.load.spritesheet(
      \"hero\",
      \"/curriculum-assets/phaser/spritesheets/hero-walk.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
    this.load.spritesheet(
      \"coin\",
      \"/curriculum-assets/phaser/spritesheets/coin.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
  }}

  create() {{
    this.bg = this.add.rectangle(240, 180, 480, 360, 0x223344);
    this.player = this.physics.add.sprite(240, 180, \"hero\", 0);
    this.player.setCollideWorldBounds(true);
    this.player.setScale(2);
    this.cursors = this.input.keyboard.createCursorKeys();

{HERO_ANIMS}

{COIN_GROUP_DEPTH}

{CREATE_DEPTHS_TAIL}
    this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this);

{RING_INIT_WITH_BLEND}

{HUD_INIT}
  }}

  update() {{
{UPDATE_BODY}
    this.ring.setPosition(this.player.x, this.player.y);
  }}

  collectCoin(player, coin) {{
    coin.setTint(0xff3366);
    this.tweens.add({{
      targets: coin,
      scale: 0,
      duration: 200,
      onComplete: () => coin.destroy()
    }});
    const floater = this.add.text(coin.x, coin.y, \"+10\", {{
      fontSize: \"16px\",
      fill: \"#ffeeaa\"
    }});
    floater.setOrigin(0.5);
    floater.setDepth(50);
    this.tweens.add({{
      targets: floater,
      y: floater.y - 30,
      alpha: 0,
      duration: 500,
      onComplete: () => floater.destroy()
    }});
    this.tweens.add({{
      targets: this.ring,
      scale: 1.5,
      duration: 200,
      yoyo: true
    }});
  }}
}}

{CONFIG}"""


def s17():
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  preload() {{
    this.load.spritesheet(
      \"hero\",
      \"/curriculum-assets/phaser/spritesheets/hero-walk.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
    this.load.spritesheet(
      \"coin\",
      \"/curriculum-assets/phaser/spritesheets/coin.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
  }}

  create() {{
    this.bg = this.add.rectangle(240, 180, 480, 360, 0x223344);
    this.player = this.physics.add.sprite(240, 180, \"hero\", 0);
    this.player.setCollideWorldBounds(true);
    this.player.setScale(2);
    this.cursors = this.input.keyboard.createCursorKeys();

{HERO_ANIMS}

{COIN_GROUP_DEPTH}

{CREATE_DEPTHS_TAIL}
    this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this);

{RING_INIT_WITH_BLEND}

{HUD_INIT}
  }}

  update() {{
{UPDATE_BODY}
    this.ring.setPosition(this.player.x, this.player.y);
  }}

  collectCoin(player, coin) {{
    coin.setTint(0xff3366);
    this.tweens.add({{
      targets: coin,
      scale: 0,
      duration: 200,
      onComplete: () => coin.destroy()
    }});
    const floater = this.add.text(coin.x, coin.y, \"+10\", {{
      fontSize: \"16px\",
      fill: \"#ffeeaa\"
    }});
    floater.setOrigin(0.5);
    floater.setDepth(50);
    this.tweens.add({{
      targets: floater,
      y: floater.y - 30,
      alpha: 0,
      duration: 500,
      onComplete: () => floater.destroy()
    }});
    this.tweens.add({{
      targets: this.ring,
      scale: 1.5,
      duration: 200,
      yoyo: true
    }});
    this.score += 10;
    this.scoreText.setText(\"Score: \" + this.score);
  }}
}}

{CONFIG}"""


def s18():
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  preload() {{
    this.load.spritesheet(
      \"hero\",
      \"/curriculum-assets/phaser/spritesheets/hero-walk.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
    this.load.spritesheet(
      \"coin\",
      \"/curriculum-assets/phaser/spritesheets/coin.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
  }}

  create() {{
    this.bg = this.add.rectangle(240, 180, 480, 360, 0x223344);
    this.player = this.physics.add.sprite(240, 180, \"hero\", 0);
    this.player.setCollideWorldBounds(true);
    this.player.setScale(2);
    this.cursors = this.input.keyboard.createCursorKeys();

{HERO_ANIMS}

{COIN_GROUP_DEPTH}

{CREATE_DEPTHS_TAIL}
    this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this);

{RING_INIT_WITH_BLEND}

{HUD_INIT}

{UI_CAMERA}
  }}

  update() {{
{UPDATE_BODY}
    this.ring.setPosition(this.player.x, this.player.y);
  }}

  collectCoin(player, coin) {{
    coin.setTint(0xff3366);
    this.tweens.add({{
      targets: coin,
      scale: 0,
      duration: 200,
      onComplete: () => coin.destroy()
    }});
    const floater = this.add.text(coin.x, coin.y, \"+10\", {{
      fontSize: \"16px\",
      fill: \"#ffeeaa\"
    }});
    floater.setOrigin(0.5);
    floater.setDepth(50);
    this.tweens.add({{
      targets: floater,
      y: floater.y - 30,
      alpha: 0,
      duration: 500,
      onComplete: () => floater.destroy()
    }});
    this.tweens.add({{
      targets: this.ring,
      scale: 1.5,
      duration: 200,
      yoyo: true
    }});
    this.score += 10;
    this.scoreText.setText(\"Score: \" + this.score);
  }}
}}

{CONFIG}"""


def s19():
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  preload() {{
    this.load.spritesheet(
      \"hero\",
      \"/curriculum-assets/phaser/spritesheets/hero-walk.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
    this.load.spritesheet(
      \"coin\",
      \"/curriculum-assets/phaser/spritesheets/coin.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
  }}

  create() {{
    this.bg = this.add.rectangle(240, 180, 480, 360, 0x223344);
    this.player = this.physics.add.sprite(240, 180, \"hero\", 0);
    this.player.setCollideWorldBounds(true);
    this.player.setScale(2);
    this.cursors = this.input.keyboard.createCursorKeys();

{HERO_ANIMS}

{COIN_GROUP_DEPTH}

{CREATE_DEPTHS_TAIL}
    this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this);

{RING_INIT_WITH_BLEND}

{HUD_INIT}

{UI_CAMERA}
  }}

  update() {{
{UPDATE_BODY}
    this.ring.setPosition(this.player.x, this.player.y);
  }}

  collectCoin(player, coin) {{
    coin.setTint(0xff3366);
    this.tweens.add({{
      targets: coin,
      scale: 0,
      duration: 200,
      onComplete: () => coin.destroy()
    }});
    const floater = this.add.text(coin.x, coin.y, \"+10\", {{
      fontSize: \"16px\",
      fill: \"#ffeeaa\"
    }});
    floater.setOrigin(0.5);
    floater.setDepth(50);
    this.tweens.add({{
      targets: floater,
      y: floater.y - 30,
      alpha: 0,
      duration: 500,
      onComplete: () => floater.destroy()
    }});
    this.tweens.add({{
      targets: this.ring,
      scale: 1.5,
      duration: 200,
      yoyo: true
    }});
    this.score += 10;
    this.scoreText.setText(\"Score: \" + this.score);
    this.tweens.add({{
      targets: this.scoreText,
      scale: 1.4,
      duration: 100,
      yoyo: true
    }});
  }}
}}

{CONFIG}"""


def s20():
    return f"""class MainScene extends Phaser.Scene {{
  constructor() {{
    super(\"MainScene\");
  }}

  preload() {{
    this.load.spritesheet(
      \"hero\",
      \"/curriculum-assets/phaser/spritesheets/hero-walk.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
    this.load.spritesheet(
      \"coin\",
      \"/curriculum-assets/phaser/spritesheets/coin.png\",
      {{ frameWidth: 16, frameHeight: 16 }}
    );
  }}

  create() {{
    this.bg = this.add.rectangle(240, 180, 480, 360, 0x223344);
    this.player = this.physics.add.sprite(240, 180, \"hero\", 0);
    this.player.setCollideWorldBounds(true);
    this.player.setScale(2);
    this.cursors = this.input.keyboard.createCursorKeys();

{HERO_ANIMS}

{COIN_GROUP_DEPTH}

{CREATE_DEPTHS_TAIL}
    this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this);

{RING_INIT_WITH_BLEND}

{HUD_INIT}

{UI_CAMERA}
  }}

  update() {{
{UPDATE_BODY}
    this.ring.setPosition(this.player.x, this.player.y);
  }}

  collectCoin(player, coin) {{
    coin.setTint(0xff3366);
    this.tweens.add({{
      targets: coin,
      scale: 0,
      duration: 200,
      onComplete: () => coin.destroy()
    }});
    const floater = this.add.text(coin.x, coin.y, \"+10\", {{
      fontSize: \"16px\",
      fill: \"#ffeeaa\"
    }});
    floater.setOrigin(0.5);
    floater.setDepth(50);
    this.tweens.add({{
      targets: floater,
      y: floater.y - 30,
      alpha: 0,
      duration: 500,
      onComplete: () => floater.destroy()
    }});
    this.tweens.add({{
      targets: this.ring,
      scale: 1.5,
      duration: 200,
      yoyo: true
    }});
    this.score += 10;
    this.scoreText.setText(\"Score: \" + this.score);
    this.tweens.add({{
      targets: this.scoreText,
      scale: 1.4,
      duration: 100,
      yoyo: true
    }});
    if (this.score >= 50) {{
      const overlay = this.add.graphics();
      overlay.fillStyle(0x000000, 1);
      overlay.fillRect(0, 0, 480, 360);
      overlay.setDepth(200);
      overlay.setAlpha(0);
      overlay.setScrollFactor(0);
      this.cameras.main.ignore(overlay);
      this.tweens.add({{ targets: overlay, alpha: 0.6, duration: 500 }});
      const restartText = this.add.text(240, 180, \"Press SPACE to restart\", {{
        fontSize: \"18px\",
        fill: \"#ffffff\"
      }});
      restartText.setOrigin(0.5);
      restartText.setDepth(201);
      restartText.setScrollFactor(0);
      this.cameras.main.ignore(restartText);
      this.input.keyboard.once(\"keydown-SPACE\", () => this.scene.restart());
    }}
  }}
}}

{CONFIG}"""


SOLUTIONS = [None,
              s1, s2, s3, s4, s5, s6, s7, s8, s9, s10,
              s11, s12, s13, s14, s15, s16, s17, s18, s19, s20]


# ---------------------------------------------------------------------------
# Per-step description, hints and seed mutator. The seed mutator takes the
# previous step's solution and returns the seed for *this* step (with one
# editable region marked).
# ---------------------------------------------------------------------------


STEPS = []


def step(num, dashed, description, hints, seed_fn, *, demo: bool = False):
    STEPS.append({
        "num": num,
        "dashed": dashed,
        "description": description.strip("\n"),
        "hints": hints.strip("\n"),
        "seed": seed_fn,
        "demo": demo,
    })


# Step 1 — empty file with a single editable region.
step(
    1, "step-1",
    """
Welcome! In this workshop you'll build a particle-pickup effect on top of the sprite-sheet hero from the previous workshop. The hero walks, coins recolor and shrink on pickup, a vector "+10" floats up and fades, a glowing ring pulses around the player, and a multi-camera HUD tracks your score. The HTML and CSS are wired — work in `script.js`.

Start by declaring a class named `MainScene` that extends `Phaser.Scene` and gives the scene the key `"MainScene"` in its constructor.
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
""",
    lambda prev: "--fcc-editable-region--\n\n--fcc-editable-region--\n",
    demo=True,
)


def replace_block(prev, anchor_start, anchor_end, new_block):
    """Replace the substring starting at `anchor_start` and ending at `anchor_end`
    (both exclusive of the anchor text) with `new_block`. Used to wrap a chunk
    of `prev` with editable-region markers."""
    start = prev.index(anchor_start) + len(anchor_start)
    end = prev.index(anchor_end, start)
    return prev[:start] + new_block + prev[end:]


# Step 2 — preload spritesheets.
def step2_seed(prev):
    return prev.replace(
        "    super(\"MainScene\");\n  }\n}",
        "    super(\"MainScene\");\n  }\n\n--fcc-editable-region--\n\n--fcc-editable-region--\n}",
        1,
    )


step(
    2, "step-2",
    """
Add a `preload` method to `MainScene`. Load the hero walk sprite sheet under the key `"hero"` from `/curriculum-assets/phaser/spritesheets/hero-walk.png`, and the coin sprite sheet under `"coin"` from `/curriculum-assets/phaser/spritesheets/coin.png`. Both sheets use `frameWidth: 16` and `frameHeight: 16`.
""",
    """
You should call `this.load.spritesheet` with the key `"hero"`.

```js
assert.match(code, /this\\.load\\.spritesheet\\s*\\(\\s*[\"']hero[\"']/);
```

You should call `this.load.spritesheet` with the key `"coin"`.

```js
assert.match(code, /this\\.load\\.spritesheet\\s*\\(\\s*[\"']coin[\"']/);
```

Both spritesheets should declare `frameWidth: 16` and `frameHeight: 16`.

```js
assert.match(code, /frameWidth:\\s*16,\\s*frameHeight:\\s*16/);
```
""",
    step2_seed,
)


# Step 3 — create() with bg, player, cursors.
def step3_seed(prev):
    return prev.replace(
        "  }\n}\n\nconst config",
        "  }\n\n--fcc-editable-region--\n\n--fcc-editable-region--\n}\n\nconst config",
        1,
    )


step(
    3, "step-3",
    """
Add a `create` method to `MainScene`. Inside it, paint a midnight-blue background rectangle at the centre of the scene with `this.bg = this.add.rectangle(240, 180, 480, 360, 0x223344);`. Then add the hero as a physics sprite at `(240, 180)` with frame `0`, scale it 2× and bind it to the world bounds. Finish by capturing cursor keys into `this.cursors`.
""",
    """
You should assign a rectangle to `this.bg`.

```js
assert.match(code, /this\\.bg\\s*=\\s*this\\.add\\.rectangle\\s*\\(/);
```

You should assign a physics sprite to `this.player` using the `"hero"` texture.

```js
assert.match(code, /this\\.player\\s*=\\s*this\\.physics\\.add\\.sprite\\s*\\(\\s*240\\s*,\\s*180\\s*,\\s*[\"']hero[\"']/);
```

You should make the player collide with the world bounds and scale it by 2.

```js
assert.match(code, /this\\.player\\.setCollideWorldBounds\\(\\s*true\\s*\\)/);
assert.match(code, /this\\.player\\.setScale\\(\\s*2\\s*\\)/);
```

You should capture cursor keys into `this.cursors`.

```js
assert.match(code, /this\\.cursors\\s*=\\s*this\\.input\\.keyboard\\.createCursorKeys\\(\\s*\\)/);
```
""",
    step3_seed,
)


# Step 4 — animations + play idle.
def step4_seed(prev):
    return prev.replace(
        "    this.cursors = this.input.keyboard.createCursorKeys();\n  }",
        "    this.cursors = this.input.keyboard.createCursorKeys();\n\n--fcc-editable-region--\n\n--fcc-editable-region--\n  }",
        1,
    )


step(
    4, "step-4",
    """
Define the hero animations and a coin-spin animation, then play `"idle"` on the player. The hero sheet has 16 frames laid out as four 4-frame rows: row 0 walk-down (`0..3`), row 1 walk-up (`4..7`), row 2 walk-left (`8..11`), row 3 walk-right (`12..15`). Use a single-frame `"idle"` mapped to frame 0. Walk animations play at `frameRate: 8`, `idle` at `6`, and `coin-spin` at `12`. All loop with `repeat: -1`.

The `"coin-spin"` animation iterates `coin` frames `0..7`. Finish the step by calling `this.player.anims.play("idle")`.
""",
    """
You should create animations keyed `"idle"`, `"walk-down"`, `"walk-up"`, `"walk-left"`, and `"walk-right"`.

```js
assert.match(code, /key:\\s*[\"']idle[\"']/);
assert.match(code, /key:\\s*[\"']walk-down[\"']/);
assert.match(code, /key:\\s*[\"']walk-up[\"']/);
assert.match(code, /key:\\s*[\"']walk-left[\"']/);
assert.match(code, /key:\\s*[\"']walk-right[\"']/);
```

You should create a `"coin-spin"` animation that iterates `coin` frames `0..7`.

```js
assert.match(code, /key:\\s*[\"']coin-spin[\"'][\\s\\S]*?frames:[\\s\\S]*?[\"']coin[\"'][\\s\\S]*?start:\\s*0[\\s\\S]*?end:\\s*7/);
```

You should play the `"idle"` animation on the player.

```js
assert.match(code, /this\\.player\\.anims\\.play\\(\\s*[\"']idle[\"']\\s*\\)/);
```
""",
    step4_seed,
)


# Step 5 — update() body.
def step5_seed(prev):
    return prev.replace(
        "    this.player.anims.play(\"idle\");\n  }\n}",
        "    this.player.anims.play(\"idle\");\n  }\n\n  update() {\n--fcc-editable-region--\n\n--fcc-editable-region--\n  }\n}",
        1,
    )


step(
    5, "step-5",
    """
Add an `update` method that drives the player. Reset the velocity to zero each frame, then read the cursors: left/right move horizontally at `±120` and play `"walk-left"` / `"walk-right"`; up/down move vertically at `±120` and play `"walk-up"` / `"walk-down"`. Use `setFlipX(false)` for left and `setFlipX(true)` for right so the same row reads as both directions. When no key is held, fall back to `"idle"`.
""",
    """
You should reset the player's velocity to zero each frame.

```js
assert.match(code, /this\\.player\\.setVelocity\\(\\s*0\\s*\\)/);
```

You should drive horizontal movement with `this.cursors.left` / `this.cursors.right` at ±120.

```js
assert.match(code, /this\\.cursors\\.left\\.isDown[\\s\\S]*?setVelocityX\\(\\s*-120\\s*\\)/);
assert.match(code, /this\\.cursors\\.right\\.isDown[\\s\\S]*?setVelocityX\\(\\s*120\\s*\\)/);
```

You should drive vertical movement with `this.cursors.up` / `this.cursors.down` at ±120.

```js
assert.match(code, /this\\.cursors\\.up\\.isDown[\\s\\S]*?setVelocityY\\(\\s*-120\\s*\\)/);
assert.match(code, /this\\.cursors\\.down\\.isDown[\\s\\S]*?setVelocityY\\(\\s*120\\s*\\)/);
```

You should fall back to the `"idle"` animation when no cursor key is held.

```js
assert.match(code, /else\\s*\\{\\s*this\\.player\\.anims\\.play\\(\\s*[\"']idle[\"']/);
```
""",
    step5_seed,
)


# Step 6 — coin group.
def step6_seed(prev):
    return prev.replace(
        "    this.player.anims.play(\"idle\");\n  }",
        "    this.player.anims.play(\"idle\");\n\n--fcc-editable-region--\n\n--fcc-editable-region--\n  }",
        1,
    )


step(
    6, "step-6",
    """
Add a coin group inside `create`, after the animations are defined. Create a physics group via `this.coins = this.physics.add.group();`, then iterate over five `[x, y]` coordinates — `[80, 80]`, `[400, 80]`, `[80, 280]`, `[400, 280]`, `[240, 80]` — calling `this.coins.create(x, y, "coin")` for each. For every coin, scale it by 2, set its depth to `10` so it paints above the background, and play the `"coin-spin"` animation.
""",
    """
You should assign a physics group to `this.coins`.

```js
assert.match(code, /this\\.coins\\s*=\\s*this\\.physics\\.add\\.group\\(\\s*\\)/);
```

You should create coins via `this.coins.create(x, y, "coin")`.

```js
assert.match(code, /this\\.coins\\.create\\([\\s\\S]*?[\"']coin[\"']/);
```

Each coin should set its depth to 10 and play `"coin-spin"`.

```js
assert.match(code, /coin\\.setDepth\\(\\s*10\\s*\\)/);
assert.match(code, /\\.anims\\.play\\(\\s*[\"']coin-spin[\"']\\s*\\)/);
```
""",
    step6_seed,
)


# Step 7 — bg + player setDepth.
def step7_seed(prev):
    return prev.replace(
        "    });\n  }\n\n  update()",
        "    });\n\n--fcc-editable-region--\n\n--fcc-editable-region--\n  }\n\n  update()",
        1,
    )


step(
    7, "step-7",
    """
Lock down the rest of the layering. After the coin group, set `this.bg.setDepth(0)` and `this.player.setDepth(10)`. The background sits at the back, the entities (player and coins) at depth 10. The HUD at depth 100 will land in a few steps.
""",
    """
The background should sit at depth 0.

```js
assert.match(code, /this\\.bg\\.setDepth\\(\\s*0\\s*\\)/);
```

The player should sit at depth 10.

```js
assert.match(code, /this\\.player\\.setDepth\\(\\s*10\\s*\\)/);
```
""",
    step7_seed,
)


# Step 8 — wire overlap.
def step8_seed(prev):
    return prev.replace(
        "    this.player.setDepth(10);\n  }",
        "    this.player.setDepth(10);\n--fcc-editable-region--\n\n--fcc-editable-region--\n  }",
        1,
    )


step(
    8, "step-8",
    """
Wire the pickup callback. Inside `create`, after the player depth is set, call `this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this);`. The fourth argument (`null`) is a process callback you don't need; the fifth (`this`) binds the scene as the callback's context so you can read `this.score` later.
""",
    """
You should register a physics overlap between `this.player` and `this.coins`, calling `this.collectCoin`.

```js
assert.match(code, /this\\.physics\\.add\\.overlap\\(\\s*this\\.player\\s*,\\s*this\\.coins\\s*,\\s*this\\.collectCoin/);
```

You should bind `this` as the callback context.

```js
assert.match(code, /this\\.collectCoin\\s*,\\s*null\\s*,\\s*this\\s*\\)/);
```
""",
    step8_seed,
)


# Step 9 — collectCoin with setTint.
def step9_seed(prev):
    return prev.replace(
        "  update() {\n" + UPDATE_BODY + "\n  }\n}",
        "  update() {\n" + UPDATE_BODY + "\n  }\n\n--fcc-editable-region--\n\n--fcc-editable-region--\n}",
        1,
    )


step(
    9, "step-9",
    """
Define the pickup callback. After `update`, declare `collectCoin(player, coin)` on the class. Inside its body, recolour the coin with `coin.setTint(0xff3366)` to paint it a hit-pink. The coin still reads through — `setTint` multiplies, so the original gold shimmers through the pink.
""",
    """
You should declare a `collectCoin(player, coin)` method on `MainScene`.

```js
assert.match(code, /collectCoin\\s*\\(\\s*player\\s*,\\s*coin\\s*\\)\\s*\\{/);
```

You should call `coin.setTint(0xff3366)` inside `collectCoin`.

```js
assert.match(code, /coin\\.setTint\\(\\s*0xff3366\\s*\\)/);
```
""",
    step9_seed,
)


# Step 10 — tween coin scale to 0 and destroy.
def step10_seed(prev):
    return prev.replace(
        "    coin.setTint(0xff3366);\n  }",
        "    coin.setTint(0xff3366);\n--fcc-editable-region--\n\n--fcc-editable-region--\n  }",
        1,
    )


step(
    10, "step-10",
    """
Animate the coin out. After the tint, add `this.tweens.add({ ... })` that targets the coin, animates `scale` to `0` over `200` ms, and destroys the coin in `onComplete`. The coin shrinks into a sparkle and disappears.
""",
    """
You should call `this.tweens.add` targeting the coin.

```js
assert.match(code, /this\\.tweens\\.add\\(\\s*\\{[\\s\\S]*?targets:\\s*coin/);
```

You should animate `scale` to `0` over `200` ms.

```js
assert.match(code, /scale:\\s*0[\\s\\S]*?duration:\\s*200/);
```

You should destroy the coin in `onComplete`.

```js
assert.match(code, /onComplete:[\\s\\S]*?coin\\.destroy\\(\\s*\\)/);
```
""",
    step10_seed,
)


# Step 11 — "+10" floater + tween up/fade.
def step11_seed(prev):
    return prev.replace(
        "      onComplete: () => coin.destroy()\n    });\n  }",
        "      onComplete: () => coin.destroy()\n    });\n--fcc-editable-region--\n\n--fcc-editable-region--\n  }",
        1,
    )


step(
    11, "step-11",
    """
Drop a "+10" floater at the coin's position. After the coin tween, declare a local `floater` text via `this.add.text(coin.x, coin.y, "+10", { fontSize: "16px", fill: "#ffeeaa" })`. Centre its origin with `setOrigin(0.5)` and put it on the foreground layer with `setDepth(50)`. Then animate it: `this.tweens.add({ targets: floater, y: floater.y - 30, alpha: 0, duration: 500, onComplete: () => floater.destroy() })`. The number floats up while fading, then destroys itself.
""",
    """
You should add a `"+10"` text at the coin's position.

```js
assert.match(code, /this\\.add\\.text\\(\\s*coin\\.x\\s*,\\s*coin\\.y\\s*,\\s*[\"']\\+10[\"']/);
```

You should set the floater's origin to 0.5 and its depth to 50.

```js
assert.match(code, /\\.setOrigin\\(\\s*0\\.5\\s*\\)/);
assert.match(code, /\\.setDepth\\(\\s*50\\s*\\)/);
```

You should tween the floater up by 30 and fade it to alpha 0 over 500 ms, destroying it on complete.

```js
assert.match(code, /targets:\\s*floater[\\s\\S]*?y:\\s*floater\\.y\\s*-\\s*30[\\s\\S]*?alpha:\\s*0[\\s\\S]*?duration:\\s*500[\\s\\S]*?floater\\.destroy/);
```
""",
    step11_seed,
)


# Step 12 — ring graphics in create() (no blend, no follow yet).
def step12_seed(prev):
    return prev.replace(
        "    this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this);\n  }",
        "    this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this);\n\n--fcc-editable-region--\n\n--fcc-editable-region--\n  }",
        1,
    )


step(
    12, "step-12",
    """
Add a glowing ring around the player. In `create`, after the overlap is wired, allocate a graphics object with `this.ring = this.add.graphics()` and put it on the foreground layer with `setDepth(50)`. Set a 2-pixel white pen via `this.ring.lineStyle(2, 0xffffff, 1)`, draw a circle at local `(0, 0)` of radius `24` with `this.ring.strokeCircle(0, 0, 24)`, and place the whole graphics object at the player with `this.ring.setPosition(this.player.x, this.player.y)`.

Drawing at local `(0, 0)` means you can move the ring with `setPosition` later, instead of clearing and re-drawing it every frame.
""",
    """
You should allocate a graphics object on `this.ring` and set its depth to 50.

```js
assert.match(code, /this\\.ring\\s*=\\s*this\\.add\\.graphics\\(\\s*\\)/);
assert.match(code, /this\\.ring\\.setDepth\\(\\s*50\\s*\\)/);
```

You should set a 2-pixel white line style and stroke a circle at local (0, 0) with radius 24.

```js
assert.match(code, /this\\.ring\\.lineStyle\\(\\s*2\\s*,\\s*0xffffff/);
assert.match(code, /this\\.ring\\.strokeCircle\\(\\s*0\\s*,\\s*0\\s*,\\s*24\\s*\\)/);
```

You should position the ring at the player.

```js
assert.match(code, /this\\.ring\\.setPosition\\(\\s*this\\.player\\.x\\s*,\\s*this\\.player\\.y\\s*\\)/);
```
""",
    step12_seed,
)


# Step 13 — ring follows the player in update.
def step13_seed(prev):
    return prev.replace(
        UPDATE_BODY + "\n  }",
        UPDATE_BODY + "\n--fcc-editable-region--\n\n--fcc-editable-region--\n  }",
        1,
    )


step(
    13, "step-13",
    """
Make the ring follow the player. At the bottom of `update`, after the cursor logic, call `this.ring.setPosition(this.player.x, this.player.y)`. Each frame the ring snaps to the player's new position — no clear, no redraw.
""",
    """
You should call `this.ring.setPosition(this.player.x, this.player.y)` inside `update`.

```js
assert.match(code, /update\\s*\\(\\s*\\)\\s*\\{[\\s\\S]*?this\\.ring\\.setPosition\\(\\s*this\\.player\\.x\\s*,\\s*this\\.player\\.y\\s*\\)/);
```
""",
    step13_seed,
)


# Step 14 — setBlendMode ADD on the ring.
def step14_seed(prev):
    return prev.replace(
        "    this.ring.setDepth(50);\n    this.ring.lineStyle",
        "    this.ring.setDepth(50);\n--fcc-editable-region--\n--fcc-editable-region--\n    this.ring.lineStyle",
        1,
    )


step(
    14, "step-14",
    """
Make the ring glow. Right after `this.ring.setDepth(50)`, add `this.ring.setBlendMode(Phaser.BlendModes.ADD)` so the white outline blends additively with whatever it covers. The ring now reads as light, not paint.
""",
    """
You should set the ring's blend mode to `Phaser.BlendModes.ADD`.

```js
assert.match(code, /this\\.ring\\.setBlendMode\\(\\s*Phaser\\.BlendModes\\.ADD\\s*\\)/);
```
""",
    step14_seed,
)


# Step 15 — ring pulse on pickup.
def step15_seed(prev):
    return prev.replace(
        "      onComplete: () => floater.destroy()\n    });\n  }",
        "      onComplete: () => floater.destroy()\n    });\n--fcc-editable-region--\n\n--fcc-editable-region--\n  }",
        1,
    )


step(
    15, "step-15",
    """
Pulse the ring on each pickup. After the floater tween in `collectCoin`, add `this.tweens.add({ targets: this.ring, scale: 1.5, duration: 200, yoyo: true })`. The ring scales up 1.5× and back, all in 400 ms total.
""",
    """
You should tween the ring's scale to 1.5 with `yoyo: true`.

```js
assert.match(code, /targets:\\s*this\\.ring[\\s\\S]*?scale:\\s*1\\.5[\\s\\S]*?yoyo:\\s*true/);
```
""",
    step15_seed,
)


# Step 16 — score HUD init in create.
def step16_seed(prev):
    return prev.replace(
        "    this.ring.setPosition(this.player.x, this.player.y);\n  }\n\n  update()",
        "    this.ring.setPosition(this.player.x, this.player.y);\n\n--fcc-editable-region--\n\n--fcc-editable-region--\n  }\n\n  update()",
        1,
    )


step(
    16, "step-16",
    """
Add a score HUD. After the ring is initialised in `create`, set `this.score = 0` and create `this.scoreText = this.add.text(10, 10, "Score: 0", { fontSize: "16px", fill: "#ffffff" })`. Lock it to the camera with `this.scoreText.setScrollFactor(0)` and put it on the HUD layer with `this.scoreText.setDepth(100)`.
""",
    """
You should initialise the score and create a HUD text.

```js
assert.match(code, /this\\.score\\s*=\\s*0/);
assert.match(code, /this\\.scoreText\\s*=\\s*this\\.add\\.text\\(/);
```

You should lock the score text to the camera and set its depth to 100.

```js
assert.match(code, /this\\.scoreText\\.setScrollFactor\\(\\s*0\\s*\\)/);
assert.match(code, /this\\.scoreText\\.setDepth\\(\\s*100\\s*\\)/);
```
""",
    step16_seed,
)


# Step 17 — increment score in collectCoin.
def step17_seed(prev):
    return prev.replace(
        "      yoyo: true\n    });\n  }",
        "      yoyo: true\n    });\n--fcc-editable-region--\n\n--fcc-editable-region--\n  }",
        1,
    )


step(
    17, "step-17",
    """
Increment the score. After the ring pulse in `collectCoin`, add `this.score += 10` and update the HUD with `this.scoreText.setText("Score: " + this.score)`.
""",
    """
You should increment the score by 10 and update the HUD text.

```js
assert.match(code, /this\\.score\\s*\\+=\\s*10/);
assert.match(code, /this\\.scoreText\\.setText\\(/);
```
""",
    step17_seed,
)


# Step 18 — multi-camera HUD overlay.
def step18_seed(prev):
    return prev.replace(
        "    this.scoreText.setDepth(100);\n  }",
        "    this.scoreText.setDepth(100);\n\n--fcc-editable-region--\n\n--fcc-editable-region--\n  }",
        1,
    )


step(
    18, "step-18",
    """
Split the HUD onto its own camera. After the score HUD setup, add a second camera with `this.uiCamera = this.cameras.add(0, 0, 480, 360)`. Tell the main camera to ignore the HUD: `this.cameras.main.ignore(this.scoreText)`. Tell the UI camera to ignore everything else: `this.uiCamera.ignore([this.bg, this.player, this.coins, this.ring])`.

Each camera renders its own layer. The score text now lives on a camera that doesn't follow the world — exactly the pattern Chapter 6 will return to.
""",
    """
You should add a second camera and assign it to `this.uiCamera`.

```js
assert.match(code, /this\\.uiCamera\\s*=\\s*this\\.cameras\\.add\\(/);
```

The main camera should ignore the score text.

```js
assert.match(code, /this\\.cameras\\.main\\.ignore\\(\\s*this\\.scoreText\\s*\\)/);
```

The UI camera should ignore the bg, player, coins, and ring.

```js
assert.match(code, /this\\.uiCamera\\.ignore\\(\\s*\\[\\s*this\\.bg\\s*,\\s*this\\.player\\s*,\\s*this\\.coins\\s*,\\s*this\\.ring\\s*\\]\\s*\\)/);
```
""",
    step18_seed,
)


# Step 19 — HUD pulse on score change.
def step19_seed(prev):
    return prev.replace(
        "    this.scoreText.setText(\"Score: \" + this.score);\n  }",
        "    this.scoreText.setText(\"Score: \" + this.score);\n--fcc-editable-region--\n\n--fcc-editable-region--\n  }",
        1,
    )


step(
    19, "step-19",
    """
Make the HUD react. After updating `this.scoreText`, tween it: `this.tweens.add({ targets: this.scoreText, scale: 1.4, duration: 100, yoyo: true })`. The HUD bumps up and back every time the player picks a coin.
""",
    """
You should tween the score text's scale to 1.4 with `yoyo: true`.

```js
assert.match(code, /targets:\\s*this\\.scoreText[\\s\\S]*?scale:\\s*1\\.4[\\s\\S]*?yoyo:\\s*true/);
```
""",
    step19_seed,
)


# Step 20 — full win overlay (graphics rect + tween + restart text + spacebar listener)
def step20_seed(prev):
    return prev.replace(
        "      yoyo: true\n    });\n  }\n}",
        "      yoyo: true\n    });\n--fcc-editable-region--\n\n--fcc-editable-region--\n  }\n}",
        1,
    )


step(
    20, "step-20",
    """
Ship the win overlay. After the HUD pulse, check `if (this.score >= 50) { ... }` for the all-collected condition.

Inside the if-block, build a full-screen Graphics rectangle: `const overlay = this.add.graphics(); overlay.fillStyle(0x000000, 1); overlay.fillRect(0, 0, 480, 360); overlay.setDepth(200); overlay.setAlpha(0); overlay.setScrollFactor(0); this.cameras.main.ignore(overlay);`. Tween it in: `this.tweens.add({ targets: overlay, alpha: 0.6, duration: 500 })`.

Then add restart text: `const restartText = this.add.text(240, 180, "Press SPACE to restart", { fontSize: "18px", fill: "#ffffff" }); restartText.setOrigin(0.5); restartText.setDepth(201); restartText.setScrollFactor(0); this.cameras.main.ignore(restartText);`. Finally, listen for spacebar once and restart: `this.input.keyboard.once("keydown-SPACE", () => this.scene.restart())`.

Now play the game: walk around, collect five coins (50 points total), watch the HUD pulse, the ring glow, the floaters drift up. When the overlay fades in, press space — fresh run.

Congratulations — Chapter 2 ships.
""",
    """
You should gate the overlay on `this.score >= 50`.

```js
assert.match(code, /if\\s*\\(\\s*this\\.score\\s*>=\\s*50\\s*\\)/);
```

You should draw a full-screen graphics rectangle with depth 200, alpha 0, and `setScrollFactor(0)`.

```js
assert.match(code, /this\\.add\\.graphics\\(\\s*\\)[\\s\\S]*?fillRect\\(\\s*0\\s*,\\s*0\\s*,\\s*480\\s*,\\s*360[\\s\\S]*?setDepth\\(\\s*200\\s*\\)[\\s\\S]*?setAlpha\\(\\s*0\\s*\\)[\\s\\S]*?setScrollFactor\\(\\s*0\\s*\\)/);
```

You should tween the overlay's alpha to 0.6 over 500 ms.

```js
assert.match(code, /alpha:\\s*0\\.6[\\s\\S]*?duration:\\s*500/);
```

You should add a `Press SPACE to restart` text and listen for `keydown-SPACE` once, restarting the scene.

```js
assert.match(code, /Press\\s+SPACE\\s+to\\s+restart/);
assert.match(code, /this\\.input\\.keyboard\\.once\\(\\s*[\"']keydown-SPACE[\"'][\\s\\S]*?this\\.scene\\.restart\\(/);
```
""",
    step20_seed,
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
        # Sanity check: each workshop step must have exactly two markers.
        markers = seed_js.count("--fcc-editable-region--")
        if markers != 2:
            raise SystemExit(f"step {n} has {markers} markers, expected 2")
        solution_js = SOLUTIONS[n]() if n == 20 else None
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
