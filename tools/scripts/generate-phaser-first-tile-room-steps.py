"""Generate workshop-first-tile-room step .md files (steps 1..30).

Each step wraps exactly one editable region (two ``--fcc-editable-region--``
markers) around the focused diff against the previous step's solution. The
canonical solutions live in a state-machine builder so the seed/solution
chain stays an invariant: ``seed[n+1]`` is ``solutions[n]`` with markers
inserted at the spot where step ``n+1`` makes its change.
"""

from pathlib import Path

OUT_DIR = (
    Path(__file__).resolve().parents[2]
    / "curriculum/challenges/english/blocks/workshop-first-tile-room"
)
HEX_BASE = "66faa500000000000000{:04x}"
ID_OFFSET = 0xA6  # step 1 -> 0xa7, step 30 -> 0xc4


HTML = """\
```html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>First Tile Room with Phaser</title>
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
        self.preload_body = ""
        self.create_body = ""
        self.update_body = ""
        self.methods = []
        self.scenes = ["MainScene"]


def render(state: State) -> str:
    out = []
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
    out.append("}\n\n")
    out.append("const config = {\n")
    out.append("  type: Phaser.AUTO,\n")
    out.append("  width: 240,\n")
    out.append("  height: 160,\n")
    out.append('  parent: "game-container",\n')
    out.append('  backgroundColor: "#0b0b18",\n')
    out.append("  pixelArt: true,\n")
    out.append("  physics: {\n")
    out.append('    default: "arcade",\n')
    out.append("    arcade: { gravity: { y: 0 }, debug: false }\n")
    out.append("  },\n")
    out.append("  scene: [" + ", ".join(state.scenes) + "]\n")
    out.append("};\n\n")
    out.append("new Phaser.Game(config);")
    return "".join(out)


# ---------------------------------------------------------------------------
# Code fragments. Each one is appended cleanly into preload/create/update.
# ---------------------------------------------------------------------------

LOAD_IMAGE_BLOCK = (
    "    this.load.image(\n"
    '      "tiles",\n'
    '      "/curriculum-assets/phaser/tilemaps/tileset-dungeon.png"\n'
    "    );\n"
)

LOAD_JSON_BLOCK = (
    "    this.load.tilemapTiledJSON(\n"
    '      "room1",\n'
    '      "/curriculum-assets/phaser/tilemaps/room-01.json"\n'
    "    );\n"
)

MAKE_MAP_LINE = '    const map = this.make.tilemap({ key: "room1" });\n'
ADD_TILESET_LINE = '    const tileset = map.addTilesetImage("dungeon", "tiles");\n'
CREATE_FLOOR_LINE = '    const floor = map.createLayer("floor", tileset, 0, 0);\n'
CREATE_WALLS_LINE = '    const walls = map.createLayer("walls", tileset, 0, 0);\n'
DEPTHS_BLOCK = "    floor.setDepth(0);\n    walls.setDepth(10);\n"

PLAYER_INIT_BLOCK = (
    "    this.player = this.add.rectangle(40, 60, 12, 12, 0x66ddff);\n"
    "    this.physics.add.existing(this.player);\n"
    "    this.player.body.setCollideWorldBounds(true);\n"
    "    this.cursors = this.input.keyboard.createCursorKeys();\n"
)

MOVE_UPDATE_BLOCK = (
    "    const speed = 90;\n"
    "    this.player.body.setVelocity(0);\n"
    "    if (this.cursors.left.isDown) {\n"
    "      this.player.body.setVelocityX(-speed);\n"
    "    } else if (this.cursors.right.isDown) {\n"
    "      this.player.body.setVelocityX(speed);\n"
    "    }\n"
    "    if (this.cursors.up.isDown) {\n"
    "      this.player.body.setVelocityY(-speed);\n"
    "    } else if (this.cursors.down.isDown) {\n"
    "      this.player.body.setVelocityY(speed);\n"
    "    }\n"
)

WALLS_COLLISION_PROP_LINE = (
    "    walls.setCollisionByProperty({ collides: true });\n"
)

WALLS_COLLIDER_LINE = (
    "    this.physics.add.collider(this.player, walls);\n"
)

WORLD_BOUNDS_LINE = (
    "    this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);\n"
)

CAM_BOUNDS_LINE = (
    "    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);\n"
)

CAM_FOLLOW_LINE = (
    "    this.cameras.main.startFollow(this.player);\n"
)

DEBUG_OVERLAY_BLOCK = (
    "    this.debugGfx = this.add.graphics().setDepth(50).setVisible(false);\n"
    '    this.input.keyboard.on("keydown-G", () => {\n'
    "      this.debugGfx.clear();\n"
    "      if (!this.debugGfx.visible) {\n"
    "        this.debugGfx.setVisible(true);\n"
    "        walls.renderDebug(this.debugGfx, {\n"
    "          tileColor: null,\n"
    "          collidingTileColor: new Phaser.Display.Color(255, 80, 80, 80),\n"
    "          faceColor: new Phaser.Display.Color(255, 255, 80, 100)\n"
    "        });\n"
    "      } else {\n"
    "        this.debugGfx.setVisible(false);\n"
    "      }\n"
    "    });\n"
)

SPAWN_LOOKUP_LINE = (
    '    const spawn = map.findObject("objects", (o) => o.name === "spawn");\n'
)

PLAYER_TO_SPAWN_BLOCK = (
    "    this.player.x = spawn.x;\n"
    "    this.player.y = spawn.y;\n"
)

DOOR_INIT_BLOCK = (
    '    const doorObj = map.findObject("objects", (o) => o.type === "door");\n'
    "    this.door = this.add.zone(doorObj.x, doorObj.y, 16, 16).setOrigin(0, 0);\n"
    "    this.physics.add.existing(this.door, true);\n"
)

DOOR_OVERLAP_BLOCK = (
    "    this.physics.add.overlap(this.player, this.door, () => {\n"
    '      console.log("next room");\n'
    "    });\n"
)

COIN_GROUP_BLOCK = (
    "    this.coins = this.physics.add.staticGroup();\n"
    '    map.filterObjects("objects", (o) => o.type === "coin").forEach((c) => {\n'
    "      const coin = this.add.rectangle(c.x + 8, c.y + 8, 6, 6, 0xffe066);\n"
    "      this.physics.add.existing(coin, true);\n"
    "      this.coins.add(coin);\n"
    "    });\n"
)

COIN_OVERLAP_BLOCK = (
    "    this.physics.add.overlap(this.player, this.coins, (player, coin) => {\n"
    "      coin.destroy();\n"
    "    });\n"
)

SCORE_INIT_LINE = "    this.score = 0;\n"

SCORE_OVERLAP_BLOCK = (
    "    this.physics.add.overlap(this.player, this.coins, (player, coin) => {\n"
    "      coin.destroy();\n"
    "      this.score += 10;\n"
    '      this.hud.setText("Score: " + this.score + "  " + this.roomName);\n'
    "    });\n"
)

HUD_INIT_BLOCK = (
    '    this.roomName = map.properties.find((p) => p.name === "name").value;\n'
    '    this.hud = this.add\n'
    '      .text(4, 4, "Score: 0  " + this.roomName, {\n'
    '        fontSize: "8px",\n'
    '        color: "#ffffff",\n'
    '        backgroundColor: "rgba(0,0,0,0.55)"\n'
    "      })\n"
    "      .setScrollFactor(0)\n"
    "      .setDepth(60);\n"
)

PLAYER_DEPTH_LINE = "    this.player.setDepth(20);\n"

TORCH_BLOCK = (
    '    const torchObj = map.findObject("objects", (o) => o.type === "torch");\n'
    "    const torch = this.add\n"
    '      .sprite(torchObj.x + 8, torchObj.y + 8, "tiles", 25)\n'
    "      .setDepth(15);\n"
    "    this.tweens.add({\n"
    "      targets: torch,\n"
    "      alpha: { from: 1, to: 0.6 },\n"
    "      duration: 500,\n"
    "      yoyo: true,\n"
    "      repeat: -1\n"
    "    });\n"
)

WALLS_SET_COLLISION_LINE = "    walls.setCollision(12);\n"
WALLS_RANGE_COLLISION_LINE = "    walls.setCollisionBetween(13, 23);\n"

REMOVE_TILE_BLOCK = (
    '    this.input.keyboard.on("keydown-X", () => {\n'
    "      walls.removeTileAt(10, 10);\n"
    "    });\n"
)

CAM_LERP_BLOCK = (
    "    this.cameras.main.setLerp(0.1, 0.1);\n"
    "    this.player.body.setSize(10, 10);\n"
)


# ---------------------------------------------------------------------------
# Build solutions s1..s30 by mutating state at each step.
# ---------------------------------------------------------------------------

solutions = [None]
state = State()


def snap():
    solutions.append(render(state))


# Step 1: empty MainScene shell (preload, create, update bodies all empty).
snap()

# Step 2: load the tileset PNG.
state.preload_body += LOAD_IMAGE_BLOCK
snap()

# Step 3: load the Tiled JSON.
state.preload_body += LOAD_JSON_BLOCK
snap()

# Step 4: build the tilemap from the cache.
state.create_body += MAKE_MAP_LINE
snap()

# Step 5: bind the tileset image.
state.create_body += ADD_TILESET_LINE
snap()

# Step 6: render the floor layer.
state.create_body += CREATE_FLOOR_LINE
snap()

# Step 7: render the walls layer.
state.create_body += CREATE_WALLS_LINE
snap()

# Step 8: set explicit depths.
state.create_body += DEPTHS_BLOCK
snap()

# Step 9: spawn a placeholder player + cursor keys.
state.create_body += PLAYER_INIT_BLOCK
snap()

# Step 10: cursor-key movement in update.
state.update_body += MOVE_UPDATE_BLOCK
snap()

# Step 11: turn on collision flags on the walls layer.
state.create_body += WALLS_COLLISION_PROP_LINE
snap()

# Step 12: collide the player with the walls layer.
state.create_body += WALLS_COLLIDER_LINE
snap()

# Step 13: lock the physics world to the map size.
state.create_body += WORLD_BOUNDS_LINE
snap()

# Step 14: lock the camera to the map size.
state.create_body += CAM_BOUNDS_LINE
snap()

# Step 15: camera follows the player.
state.create_body += CAM_FOLLOW_LINE
snap()

# Step 16: G hotkey toggles the debug overlay.
state.create_body += DEBUG_OVERLAY_BLOCK
snap()

# Step 17: read the spawn point from the object layer.
state.create_body += SPAWN_LOOKUP_LINE
snap()

# Step 18: move the player to spawn.x / spawn.y.
state.create_body += PLAYER_TO_SPAWN_BLOCK
snap()

# Step 19: read the door object + create a zone trigger.
state.create_body += DOOR_INIT_BLOCK
snap()

# Step 20: overlap on the door logs "next room".
state.create_body += DOOR_OVERLAP_BLOCK
snap()

# Step 21: build a static group of coin rectangles via filterObjects.
state.create_body += COIN_GROUP_BLOCK
snap()

# Step 22: overlap player ↔ coins; destroy on contact.
state.create_body += COIN_OVERLAP_BLOCK
snap()

# Step 23: replace the basic coin overlap with a scoring version.
state.create_body = state.create_body.replace(
    COIN_OVERLAP_BLOCK,
    SCORE_INIT_LINE + SCORE_OVERLAP_BLOCK,
)
snap()

# Step 24: add the HUD reading the room name from map properties.
# Insert the HUD block right after the score init line so the text creation
# happens before the overlap callback that updates it.
state.create_body = state.create_body.replace(
    SCORE_INIT_LINE,
    SCORE_INIT_LINE + HUD_INIT_BLOCK,
)
snap()

# Step 25: bump the player to depth 20 so it sits above walls.
state.create_body += PLAYER_DEPTH_LINE
snap()

# Step 26: torch decoration with pulsing alpha tween.
state.create_body += TORCH_BLOCK
snap()

# Step 27: alternative API — single-id collision flag.
state.create_body += WALLS_SET_COLLISION_LINE
snap()

# Step 28: alternative API — range collision flag.
state.create_body += WALLS_RANGE_COLLISION_LINE
snap()

# Step 29: hotkey X removes a tile at (10, 10).
state.create_body += REMOVE_TILE_BLOCK
snap()

# Step 30: smooth camera + tighten the player body for crisp pickup.
state.create_body += CAM_LERP_BLOCK
snap()


# ---------------------------------------------------------------------------
# Seed builders: turn solutions[n - 1] into the seed for step n.
# ---------------------------------------------------------------------------


def empty_region() -> str:
    return "--fcc-editable-region--\n\n--fcc-editable-region--\n"


def insert_empty(prev: str, anchor: str) -> str:
    if prev.count(anchor) != 1:
        raise SystemExit(
            f"anchor must occur exactly once; found {prev.count(anchor)}\n---\n{anchor!r}"
        )
    return prev.replace(anchor, anchor + empty_region(), 1)


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


def step1_seed() -> str:
    """Replace the entire MainScene class body with an empty editable region."""
    s1 = solutions[1]
    cls_start = s1.index("class MainScene extends Phaser.Scene {\n")
    cls_end = s1.index("}\n\nconst config", cls_start) + 2
    return (
        s1[:cls_start]
        + "--fcc-editable-region--\n\n--fcc-editable-region--\n\n"
        + s1[cls_end:]
    )


SEED_BUILDERS = {
    2: lambda prev: insert_empty(prev, "  preload() {\n"),
    3: lambda prev: insert_empty(prev, LOAD_IMAGE_BLOCK),
    4: lambda prev: insert_empty(prev, "  create() {\n"),
    5: lambda prev: insert_empty(prev, MAKE_MAP_LINE),
    6: lambda prev: insert_empty(prev, ADD_TILESET_LINE),
    7: lambda prev: insert_empty(prev, CREATE_FLOOR_LINE),
    8: lambda prev: insert_empty(prev, CREATE_WALLS_LINE),
    9: lambda prev: insert_empty(prev, DEPTHS_BLOCK),
    10: lambda prev: insert_empty(prev, "  update(time, delta) {\n"),
    11: lambda prev: insert_empty(prev, PLAYER_INIT_BLOCK),
    12: lambda prev: insert_empty(prev, WALLS_COLLISION_PROP_LINE),
    13: lambda prev: insert_empty(prev, WALLS_COLLIDER_LINE),
    14: lambda prev: insert_empty(prev, WORLD_BOUNDS_LINE),
    15: lambda prev: insert_empty(prev, CAM_BOUNDS_LINE),
    16: lambda prev: insert_empty(prev, CAM_FOLLOW_LINE),
    17: lambda prev: insert_empty(prev, DEBUG_OVERLAY_BLOCK),
    18: lambda prev: insert_empty(prev, SPAWN_LOOKUP_LINE),
    19: lambda prev: insert_empty(prev, PLAYER_TO_SPAWN_BLOCK),
    20: lambda prev: insert_empty(prev, DOOR_INIT_BLOCK),
    21: lambda prev: insert_empty(prev, DOOR_OVERLAP_BLOCK),
    22: lambda prev: insert_empty(prev, COIN_GROUP_BLOCK),
    23: lambda prev: wrap_existing(prev, COIN_OVERLAP_BLOCK),
    24: lambda prev: wrap_existing(prev, SCORE_INIT_LINE),
    25: lambda prev: insert_empty(prev, HUD_INIT_BLOCK),
    26: lambda prev: insert_empty(prev, PLAYER_DEPTH_LINE),
    27: lambda prev: insert_empty(prev, TORCH_BLOCK),
    28: lambda prev: insert_empty(prev, WALLS_SET_COLLISION_LINE),
    29: lambda prev: insert_empty(prev, WALLS_RANGE_COLLISION_LINE),
    30: lambda prev: insert_empty(prev, REMOVE_TILE_BLOCK),
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
    solution_js: "str | None" = None,
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
# Step specs (description + hints).
# ---------------------------------------------------------------------------

STEPS = []


def add_step(num, dashed, description, hints):
    STEPS.append(
        {"num": num, "dashed": dashed, "description": description, "hints": hints}
    )


add_step(
    1,
    "step-1",
    """\
Welcome to the first tile-room workshop. Over 30 steps you will load a
hand-crafted Tiled map, render two layers, drive a player with cursor keys,
collide with walls, follow with the camera, and read object-layer data for
spawns, doors, and coins.

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

The `config` object below already references `MainScene`. Once the class
exists the canvas mounts.
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
assert.match(code, /\\bpreload\\s*\\(\\s*\\)\\s*\\{/);
```

You should declare a `create` method.

```js
assert.match(code, /\\bcreate\\s*\\(\\s*\\)\\s*\\{/);
```

You should declare an `update` method that takes `time` and `delta`.

```js
assert.match(code, /\\bupdate\\s*\\(\\s*time\\s*,\\s*delta\\s*\\)\\s*\\{/);
```
""",
)

add_step(
    2,
    "step-2",
    """\
A Tiled map needs two assets in the loader: the tileset PNG and the map
JSON. Start with the tileset image. Inside `preload`, load
`/curriculum-assets/phaser/tilemaps/tileset-dungeon.png` under the cache key
`"tiles"`:

```js
this.load.image(
  "tiles",
  "/curriculum-assets/phaser/tilemaps/tileset-dungeon.png"
);
```

The cache key is what you will pass to `addTilesetImage` later — pick a
short, descriptive string and reuse it.
""",
    """\
You should call `this.load.image("tiles", "/curriculum-assets/phaser/tilemaps/tileset-dungeon.png")` inside `preload`.

```js
assert.match(code, /this\\.load\\.image\\(\\s*["']tiles["']\\s*,\\s*["']\\/curriculum-assets\\/phaser\\/tilemaps\\/tileset-dungeon\\.png["']\\s*\\)/);
```
""",
)

add_step(
    3,
    "step-3",
    """\
Now load the Tiled map JSON. After the existing `load.image` call, queue
the map JSON with `this.load.tilemapTiledJSON`, using the cache key
`"room1"`:

```js
this.load.tilemapTiledJSON(
  "room1",
  "/curriculum-assets/phaser/tilemaps/room-01.json"
);
```

`tilemapTiledJSON` is a dedicated loader that parses the JSON immediately
when it lands in the cache, so by the time `create` runs the parsed map is
ready to wire up.
""",
    """\
You should call `this.load.tilemapTiledJSON("room1", "/curriculum-assets/phaser/tilemaps/room-01.json")`.

```js
assert.match(code, /this\\.load\\.tilemapTiledJSON\\(\\s*["']room1["']\\s*,\\s*["']\\/curriculum-assets\\/phaser\\/tilemaps\\/room-01\\.json["']\\s*\\)/);
```
""",
)

add_step(
    4,
    "step-4",
    """\
Switch to `create`. Pull the parsed JSON out of the cache and turn it into
a `Tilemap` object you can render against:

```js
const map = this.make.tilemap({ key: "room1" });
```

Nothing renders yet — `make.tilemap` only builds the data structure. You
will reference `map` for the rest of `create`.
""",
    """\
You should declare `const map = this.make.tilemap({ key: "room1" })` in `create`.

```js
assert.match(code, /const\\s+map\\s*=\\s*this\\.make\\.tilemap\\(\\s*\\{\\s*key\\s*:\\s*["']room1["']\\s*\\}\\s*\\)/);
```
""",
)

add_step(
    5,
    "step-5",
    """\
Bind the tileset image to the map. The first argument is the **name of the
tileset inside the JSON** (`"dungeon"`); the second is the cache key from
`load.image` (`"tiles"`):

```js
const tileset = map.addTilesetImage("dungeon", "tiles");
```

If the first argument does not match `tilesets[0].name` in the JSON,
`addTilesetImage` returns `null` and every layer renders blank. With this
map the name is `"dungeon"`.
""",
    """\
You should declare `const tileset = map.addTilesetImage("dungeon", "tiles")`.

```js
assert.match(code, /const\\s+tileset\\s*=\\s*map\\.addTilesetImage\\(\\s*["']dungeon["']\\s*,\\s*["']tiles["']\\s*\\)/);
```
""",
)

add_step(
    6,
    "step-6",
    """\
Render the floor. `createLayer(layerName, tileset, x, y)` creates a
`TilemapLayer` game object that draws the tiles each frame. The first arg
is the *name* of the tile layer inside the JSON (`"floor"`); the last two
are pixel offsets, almost always `(0, 0)`:

```js
const floor = map.createLayer("floor", tileset, 0, 0);
```

Save the return value — you will read its depth and visibility later. If
`createLayer` returns `null`, the layer name does not match anything in the
JSON.
""",
    """\
You should declare `const floor = map.createLayer("floor", tileset, 0, 0)`.

```js
assert.match(code, /const\\s+floor\\s*=\\s*map\\.createLayer\\(\\s*["']floor["']\\s*,\\s*tileset\\s*,\\s*0\\s*,\\s*0\\s*\\)/);
```
""",
)

add_step(
    7,
    "step-7",
    """\
Render the walls layer the same way. `walls` will become the layer you
collide against and toggle a debug overlay on later:

```js
const walls = map.createLayer("walls", tileset, 0, 0);
```

The walls layer paints over the floor because it is created later and
shares the default depth — fine for now, fixed explicitly in the next step.
""",
    """\
You should declare `const walls = map.createLayer("walls", tileset, 0, 0)`.

```js
assert.match(code, /const\\s+walls\\s*=\\s*map\\.createLayer\\(\\s*["']walls["']\\s*,\\s*tileset\\s*,\\s*0\\s*,\\s*0\\s*\\)/);
```
""",
)

add_step(
    8,
    "step-8",
    """\
Pin each layer to an explicit depth so you can drop a player or HUD between
them later without re-numbering everything:

```js
floor.setDepth(0);
walls.setDepth(10);
```

Spaced gaps (`0`, `10`, `20`, `30`) leave room for decorations and the
player to slot in cleanly later in the workshop.
""",
    """\
You should call `floor.setDepth(0)`.

```js
assert.match(code, /floor\\.setDepth\\(\\s*0\\s*\\)/);
```

You should call `walls.setDepth(10)`.

```js
assert.match(code, /walls\\.setDepth\\(\\s*10\\s*\\)/);
```
""",
)

add_step(
    9,
    "step-9",
    """\
Drop a placeholder player into the room. Use a `Rectangle` game object —
no sprite sheet required — and give it an arcade physics body so it can
move and collide:

```js
this.player = this.add.rectangle(40, 60, 12, 12, 0x66ddff);
this.physics.add.existing(this.player);
this.player.body.setCollideWorldBounds(true);
this.cursors = this.input.keyboard.createCursorKeys();
```

`physics.add.existing(target)` attaches a *dynamic* arcade body to a game
object you already created. The cursor-key handle goes on `this.cursors`
so `update` can read it.
""",
    """\
You should create the player as a `12 × 12` rectangle at `(40, 60)` and attach a physics body.

```js
assert.match(code, /this\\.player\\s*=\\s*this\\.add\\.rectangle\\(\\s*40\\s*,\\s*60\\s*,\\s*12\\s*,\\s*12\\s*,\\s*0x66ddff\\s*\\)/);
assert.match(code, /this\\.physics\\.add\\.existing\\(\\s*this\\.player\\s*\\)/);
```

You should call `this.player.body.setCollideWorldBounds(true)`.

```js
assert.match(code, /this\\.player\\.body\\.setCollideWorldBounds\\(\\s*true\\s*\\)/);
```

You should grab cursor keys as `this.cursors`.

```js
assert.match(code, /this\\.cursors\\s*=\\s*this\\.input\\.keyboard\\.createCursorKeys\\(\\s*\\)/);
```
""",
)

add_step(
    10,
    "step-10",
    """\
Drive the player from `update`. Top-down dungeons use 4-directional
movement: zero the velocity each frame, then re-apply it on whichever
arrow keys are held:

```js
const speed = 90;
this.player.body.setVelocity(0);
if (this.cursors.left.isDown) {
  this.player.body.setVelocityX(-speed);
} else if (this.cursors.right.isDown) {
  this.player.body.setVelocityX(speed);
}
if (this.cursors.up.isDown) {
  this.player.body.setVelocityY(-speed);
} else if (this.cursors.down.isDown) {
  this.player.body.setVelocityY(speed);
}
```

Clearing velocity first means releasing a key stops motion immediately —
no drift to fight with later. The player walks around but currently passes
straight through walls; that is the next fix.
""",
    """\
You should zero `this.player.body.setVelocity(0)` each frame.

```js
assert.match(code, /this\\.player\\.body\\.setVelocity\\(\\s*0\\s*\\)/);
```

You should drive horizontal velocity from cursor left / right.

```js
assert.match(code, /cursors\\.left\\.isDown[\\s\\S]{0,120}?setVelocityX\\(/);
assert.match(code, /cursors\\.right\\.isDown[\\s\\S]{0,120}?setVelocityX\\(/);
```

You should drive vertical velocity from cursor up / down.

```js
assert.match(code, /cursors\\.up\\.isDown[\\s\\S]{0,120}?setVelocityY\\(/);
assert.match(code, /cursors\\.down\\.isDown[\\s\\S]{0,120}?setVelocityY\\(/);
```
""",
)

add_step(
    11,
    "step-11",
    """\
The walls layer renders correctly but does not block anything yet. Each
wall tile in the JSON has a custom property `collides: true`; tell the
layer to honor it:

```js
walls.setCollisionByProperty({ collides: true });
```

This walks every tile in the walls layer once and flips the body-collision
flags on the tiles whose properties match. Tiles outside the predicate
(in this case, every empty cell) stay non-collidable.
""",
    """\
You should call `walls.setCollisionByProperty({ collides: true })`.

```js
assert.match(code, /walls\\.setCollisionByProperty\\(\\s*\\{\\s*collides\\s*:\\s*true\\s*\\}\\s*\\)/);
```
""",
)

add_step(
    12,
    "step-12",
    """\
Flagging tiles is half the job — the player still needs a collider that
talks to the walls layer:

```js
this.physics.add.collider(this.player, walls);
```

Walk into a wall now and the player stops dead. Notice that the layer
itself never moves — only dynamic bodies penetrate static layers, and the
collider resolves their velocity.
""",
    """\
You should add a collider between the player and the walls layer.

```js
assert.match(code, /this\\.physics\\.add\\.collider\\(\\s*this\\.player\\s*,\\s*walls\\s*\\)/);
```
""",
)

add_step(
    13,
    "step-13",
    """\
Lock the physics world to the map size. Without this, the player can keep
walking past the right edge of the map and `setCollideWorldBounds(true)`
clamps to whatever Phaser configured by default (often the canvas size,
not the map):

```js
this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
```

`map.widthInPixels` and `map.heightInPixels` are derived from the JSON's
width × tilewidth so the bounds match the map regardless of size.
""",
    """\
You should call `this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels)`.

```js
assert.match(code, /this\\.physics\\.world\\.setBounds\\(\\s*0\\s*,\\s*0\\s*,\\s*map\\.widthInPixels\\s*,\\s*map\\.heightInPixels\\s*\\)/);
```
""",
)

add_step(
    14,
    "step-14",
    """\
Bound the camera to the same rectangle so it never scrolls past the map
edges:

```js
this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
```

This is a separate concept from the *physics* bounds you just set. World
bounds clamp where bodies can move; camera bounds clamp where the camera
can scroll. Both should match the map.
""",
    """\
You should call `this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels)`.

```js
assert.match(code, /this\\.cameras\\.main\\.setBounds\\(\\s*0\\s*,\\s*0\\s*,\\s*map\\.widthInPixels\\s*,\\s*map\\.heightInPixels\\s*\\)/);
```
""",
)

add_step(
    15,
    "step-15",
    """\
Have the camera follow the player. The bounds you just set keep the
follow from running off the map:

```js
this.cameras.main.startFollow(this.player);
```

Walk near a wall and the camera centers on the player. Walk into a corner
and the camera stops at the bound — no black bars, no out-of-room
parallax.
""",
    """\
You should call `this.cameras.main.startFollow(this.player)`.

```js
assert.match(code, /this\\.cameras\\.main\\.startFollow\\(\\s*this\\.player\\s*\\)/);
```
""",
)

add_step(
    16,
    "step-16",
    """\
Tilemaps render the *visual* tiles but the *collision* edges are invisible
by default, which makes "why is the player snagging here?" hard to debug.
Add a hotkey overlay so you can flip a wireframe of the colliding tiles
on and off:

```js
this.debugGfx = this.add.graphics().setDepth(50).setVisible(false);
this.input.keyboard.on("keydown-G", () => {
  this.debugGfx.clear();
  if (!this.debugGfx.visible) {
    this.debugGfx.setVisible(true);
    walls.renderDebug(this.debugGfx, {
      tileColor: null,
      collidingTileColor: new Phaser.Display.Color(255, 80, 80, 80),
      faceColor: new Phaser.Display.Color(255, 255, 80, 100)
    });
  } else {
    this.debugGfx.setVisible(false);
  }
});
```

`renderDebug` walks the layer once and paints the colliding faces into the
graphics object you pass in. Pressing `G` again hides the overlay so you
can play with a clean view.
""",
    """\
You should attach a `keydown-G` listener that toggles a debug graphics overlay.

```js
assert.match(code, /this\\.debugGfx\\s*=\\s*this\\.add\\.graphics\\(\\s*\\)[\\s\\S]{0,80}?setDepth\\(\\s*50\\s*\\)/);
assert.match(code, /this\\.input\\.keyboard\\.on\\(\\s*["']keydown-G["']/);
```

You should call `walls.renderDebug(this.debugGfx, ...)` when toggling on.

```js
assert.match(code, /walls\\.renderDebug\\(\\s*this\\.debugGfx/);
```
""",
)

add_step(
    17,
    "step-17",
    """\
The `(40, 60)` spawn was a placeholder. Read the *real* spawn point from
the map's object layer:

```js
const spawn = map.findObject("objects", (o) => o.name === "spawn");
```

`map.findObject(layerName, predicate)` returns the first object that
matches. The layer is named `"objects"` in the JSON, and the spawn point
is the only object with `name === "spawn"`.
""",
    """\
You should call `map.findObject("objects", (o) => o.name === "spawn")` and store the result in `spawn`.

```js
assert.match(code, /const\\s+spawn\\s*=\\s*map\\.findObject\\(\\s*["']objects["']\\s*,\\s*\\(?\\s*o\\s*\\)?\\s*=>\\s*o\\.name\\s*===\\s*["']spawn["']\\s*\\)/);
```
""",
)

add_step(
    18,
    "step-18",
    """\
Move the player to the spawn coordinates. The spawn rectangle in the JSON
is at `(32, 192)` (tile column 2, row 12 in pixel space):

```js
this.player.x = spawn.x;
this.player.y = spawn.y;
```

The player now starts where the level designer placed them, not where you
hard-coded a number in step 9.
""",
    """\
You should set `this.player.x = spawn.x` and `this.player.y = spawn.y`.

```js
assert.match(code, /this\\.player\\.x\\s*=\\s*spawn\\.x/);
assert.match(code, /this\\.player\\.y\\s*=\\s*spawn\\.y/);
```
""",
)

add_step(
    19,
    "step-19",
    """\
Pull the door object out of the same object layer. The door is a 16 × 16
rectangle on the right wall — read it with `findObject` again, then create
a Phaser zone with a *static* physics body so overlap detection works:

```js
const doorObj = map.findObject("objects", (o) => o.type === "door");
this.door = this.add.zone(doorObj.x, doorObj.y, 16, 16).setOrigin(0, 0);
this.physics.add.existing(this.door, true);
```

The second argument to `physics.add.existing(obj, true)` is the
`isStatic` flag — passing `true` gives the zone a static body that does
not move and stays where you place it.
""",
    """\
You should call `map.findObject("objects", (o) => o.type === "door")` and store it in `doorObj`.

```js
assert.match(code, /const\\s+doorObj\\s*=\\s*map\\.findObject\\(\\s*["']objects["']\\s*,\\s*\\(?\\s*o\\s*\\)?\\s*=>\\s*o\\.type\\s*===\\s*["']door["']\\s*\\)/);
```

You should create a 16 × 16 zone at `doorObj.x, doorObj.y` and attach a static body.

```js
assert.match(code, /this\\.door\\s*=\\s*this\\.add\\.zone\\(\\s*doorObj\\.x\\s*,\\s*doorObj\\.y\\s*,\\s*16\\s*,\\s*16\\s*\\)[\\s\\S]{0,40}?setOrigin\\(\\s*0\\s*,\\s*0\\s*\\)/);
assert.match(code, /this\\.physics\\.add\\.existing\\(\\s*this\\.door\\s*,\\s*true\\s*\\)/);
```
""",
)

add_step(
    20,
    "step-20",
    """\
Fire a placeholder when the player overlaps the door zone. In a real
multi-room dungeon (Sprint 11) this would call `scene.start` on the next
room — for now, log so we can confirm the wiring works:

```js
this.physics.add.overlap(this.player, this.door, () => {
  console.log("next room");
});
```

`physics.add.overlap` runs its callback every frame the bodies overlap.
For triggers that should fire once you would set a flag inside the
callback; for now the spammy log is informative.
""",
    """\
You should add an overlap between the player and the door that logs `"next room"`.

```js
assert.match(code, /this\\.physics\\.add\\.overlap\\(\\s*this\\.player\\s*,\\s*this\\.door\\s*,[\\s\\S]{0,80}?console\\.log\\(\\s*["']next room["']\\s*\\)/);
```
""",
)

add_step(
    21,
    "step-21",
    """\
Build a static group of coin pickups from every object whose
`type === "coin"`. `map.filterObjects` is the array-version of
`findObject`:

```js
this.coins = this.physics.add.staticGroup();
map.filterObjects("objects", (o) => o.type === "coin").forEach((c) => {
  const coin = this.add.rectangle(c.x + 8, c.y + 8, 6, 6, 0xffe066);
  this.physics.add.existing(coin, true);
  this.coins.add(coin);
});
```

The rectangle is centered (`+ 8`) inside the 16 × 16 object cell, given a
static body, and added to the group. Coins render the same color as the
torch tile so the dungeon reads cohesively.
""",
    """\
You should declare `this.coins = this.physics.add.staticGroup()`.

```js
assert.match(code, /this\\.coins\\s*=\\s*this\\.physics\\.add\\.staticGroup\\(\\s*\\)/);
```

You should iterate `map.filterObjects("objects", (o) => o.type === "coin")` and add each as a rectangle into `this.coins`.

```js
assert.match(code, /map\\.filterObjects\\(\\s*["']objects["']\\s*,\\s*\\(?\\s*o\\s*\\)?\\s*=>\\s*o\\.type\\s*===\\s*["']coin["']\\s*\\)/);
assert.match(code, /this\\.coins\\.add\\(\\s*coin\\s*\\)/);
```
""",
)

add_step(
    22,
    "step-22",
    """\
Make the player collect coins on contact. Use `physics.add.overlap` (not
`collider` — coins should not push the player back) and destroy the coin
in the callback:

```js
this.physics.add.overlap(this.player, this.coins, (player, coin) => {
  coin.destroy();
});
```

The two callback arguments arrive in the same order as the two bodies you
passed to `add.overlap`. Calling `destroy()` removes the coin from the
group, the scene, and the next frame's render.
""",
    """\
You should overlap the player with `this.coins` and destroy the coin in the callback.

```js
assert.match(code, /this\\.physics\\.add\\.overlap\\(\\s*this\\.player\\s*,\\s*this\\.coins\\s*,[\\s\\S]{0,160}?coin\\.destroy\\(\\s*\\)/);
```
""",
)

add_step(
    23,
    "step-23",
    """\
Track score. Stamp `this.score = 0` *before* the overlap (it has to exist
when the overlap callback first reads it), then bump the score on every
collect. Replace the existing overlap with a scoring version that also
updates the HUD you will add next:

```js
this.score = 0;
this.physics.add.overlap(this.player, this.coins, (player, coin) => {
  coin.destroy();
  this.score += 10;
  this.hud.setText("Score: " + this.score + "  " + this.roomName);
});
```

`this.hud` and `this.roomName` will be created in the next step — the
overlap callback runs once per frame of contact, so by the time it fires
the HUD already exists.
""",
    """\
You should initialize `this.score = 0` before the coin overlap.

```js
assert.match(code, /this\\.score\\s*=\\s*0/);
```

The overlap callback should increment `this.score` by 10 and update `this.hud` text.

```js
assert.match(code, /this\\.physics\\.add\\.overlap\\(\\s*this\\.player\\s*,\\s*this\\.coins\\s*,[\\s\\S]{0,200}?this\\.score\\s*\\+=\\s*10/);
assert.match(code, /this\\.hud\\.setText\\(/);
```
""",
)

add_step(
    24,
    "step-24",
    """\
Surface the score and the room name as a HUD that follows the camera.
Read the room name from the map's *map-level* `properties` array
(set in Tiled under Map > Map Properties), and render the HUD with a
zero scroll factor so it pins to the screen:

```js
this.roomName = map.properties.find((p) => p.name === "name").value;
this.hud = this.add
  .text(4, 4, "Score: 0  " + this.roomName, {
    fontSize: "8px",
    color: "#ffffff",
    backgroundColor: "rgba(0,0,0,0.55)"
  })
  .setScrollFactor(0)
  .setDepth(60);
```

`map.properties` is the array of Tiled custom properties. Each entry has
`{ name, type, value }`. The room is named `"Stone Chamber"` in the JSON.
""",
    """\
You should read the room name from `map.properties` into `this.roomName`.

```js
assert.match(code, /this\\.roomName\\s*=\\s*map\\.properties\\.find\\(\\s*\\(?\\s*p\\s*\\)?\\s*=>\\s*p\\.name\\s*===\\s*["']name["']\\s*\\)\\.value/);
```

You should render `this.hud` text pinned to the screen with `setScrollFactor(0)`.

```js
assert.match(code, /this\\.hud\\s*=\\s*this\\.add\\s*\\.\\s*text\\([\\s\\S]{0,200}?setScrollFactor\\(\\s*0\\s*\\)/);
```
""",
)

add_step(
    25,
    "step-25",
    """\
Right now the player is drawn between floor (depth 0) and walls (depth
10) thanks to creation order. The player should sit *above* the walls
with explicit depth:

```js
this.player.setDepth(20);
```

Walk behind a column of walls now and you stay visible — the wall depth
is `10`, the player depth is `20`, paint order matches game-feel.
""",
    """\
You should call `this.player.setDepth(20)`.

```js
assert.match(code, /this\\.player\\.setDepth\\(\\s*20\\s*\\)/);
```
""",
)

add_step(
    26,
    "step-26",
    """\
Add a torch decoration that pulses to give the room a heartbeat. Read the
torch object from the object layer, render it as a sprite from the
tileset (tile id 25 is the torch), and tween its alpha:

```js
const torchObj = map.findObject("objects", (o) => o.type === "torch");
const torch = this.add
  .sprite(torchObj.x + 8, torchObj.y + 8, "tiles", 25)
  .setDepth(15);
this.tweens.add({
  targets: torch,
  alpha: { from: 1, to: 0.6 },
  duration: 500,
  yoyo: true,
  repeat: -1
});
```

Depth `15` puts the torch above the walls (`10`) but below the player
(`20`). The tween flickers the alpha forever (`yoyo: true, repeat: -1`).
""",
    """\
You should look up the torch object via `map.findObject("objects", (o) => o.type === "torch")`.

```js
assert.match(code, /const\\s+torchObj\\s*=\\s*map\\.findObject\\(\\s*["']objects["']\\s*,\\s*\\(?\\s*o\\s*\\)?\\s*=>\\s*o\\.type\\s*===\\s*["']torch["']\\s*\\)/);
```

You should render the torch as a tile sprite at `(torchObj.x + 8, torchObj.y + 8)` and tween its alpha.

```js
assert.match(code, /this\\.add\\s*\\.\\s*sprite\\(\\s*torchObj\\.x\\s*\\+\\s*8\\s*,\\s*torchObj\\.y\\s*\\+\\s*8\\s*,\\s*["']tiles["']\\s*,\\s*25\\s*\\)/);
assert.match(code, /this\\.tweens\\.add\\(\\s*\\{[\\s\\S]{0,200}?targets\\s*:\\s*torch[\\s\\S]{0,200}?alpha\\s*:[\\s\\S]{0,80}?yoyo\\s*:\\s*true/);
```
""",
)

add_step(
    27,
    "step-27",
    """\
`setCollisionByProperty` is the strategy the rest of the workshop uses,
but Phaser also lets you flag tiles by **id** — handy when a tileset is
not authored with custom properties. Add an explicit single-id flag for
tile id `12` (the wall tile):

```js
walls.setCollision(12);
```

Tile id `12` was already collidable from the property pass in step 11; the
extra call is a no-op for this map. The point is the API surface — `setCollision(idx)` is the right tool when you only have ids and no properties to read.
""",
    """\
You should call `walls.setCollision(12)`.

```js
assert.match(code, /walls\\.setCollision\\(\\s*12\\s*\\)/);
```
""",
)

add_step(
    28,
    "step-28",
    """\
Phaser also accepts a *range* of tile ids in one call. Mark the entire
wall-pieces row collidable with `setCollisionBetween`:

```js
walls.setCollisionBetween(13, 23);
```

You now have three flavors of the same idea side by side: property-based
(`setCollisionByProperty`), single id (`setCollision`), and range
(`setCollisionBetween`). Reach for the property version when the tileset
has custom data, and the id versions when it does not.
""",
    """\
You should call `walls.setCollisionBetween(13, 23)`.

```js
assert.match(code, /walls\\.setCollisionBetween\\(\\s*13\\s*,\\s*23\\s*\\)/);
```
""",
)

add_step(
    29,
    "step-29",
    """\
Tilemaps are *editable* at runtime — `removeTileAt(tx, ty)` clears the
tile at the given **tile** coordinates (not pixel). Add a hotkey that
knocks out one wall to demo the API:

```js
this.input.keyboard.on("keydown-X", () => {
  walls.removeTileAt(10, 10);
});
```

Press `X` and the wall tile at column 10, row 10 disappears, with the
collision flag cleared automatically. This is the foundation for
destructible terrain — combine it with audio + particles in later
chapters.
""",
    """\
You should listen for `keydown-X` and call `walls.removeTileAt(10, 10)` inside the handler.

```js
assert.match(code, /this\\.input\\.keyboard\\.on\\(\\s*["']keydown-X["'][\\s\\S]{0,160}?walls\\.removeTileAt\\(\\s*10\\s*,\\s*10\\s*\\)/);
```
""",
)

add_step(
    30,
    "step-30",
    """\
Final polish. Smooth the camera follow with a small lerp factor, and
shrink the player's physics body slightly so the visual square fits more
forgivingly through doorways:

```js
this.cameras.main.setLerp(0.1, 0.1);
this.player.body.setSize(10, 10);
```

`setLerp(x, y)` controls how aggressively the camera chases the target —
`0.1` means the camera covers 10% of the remaining distance per frame.
`setSize(10, 10)` shrinks the dynamic body inside the 12 × 12 visual.

You shipped your first tilemap-driven scene — load JSON, render layers,
collide, follow, read object data, score, decorate, hot-edit. Sprint 11
takes the same harness and runs it through a four-room dungeon.
""",
    """\
You should call `this.cameras.main.setLerp(0.1, 0.1)`.

```js
assert.match(code, /this\\.cameras\\.main\\.setLerp\\(\\s*0\\.1\\s*,\\s*0\\.1\\s*\\)/);
```

You should call `this.player.body.setSize(10, 10)`.

```js
assert.match(code, /this\\.player\\.body\\.setSize\\(\\s*10\\s*,\\s*10\\s*\\)/);
```
""",
)


# ---------------------------------------------------------------------------
# Entrypoint.
# ---------------------------------------------------------------------------


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    if len(STEPS) != 30:
        raise SystemExit(f"expected 30 steps, got {len(STEPS)}")
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
        solution_js = solutions[30] if n == 30 else None
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
