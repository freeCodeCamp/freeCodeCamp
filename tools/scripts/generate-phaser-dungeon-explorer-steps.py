"""Generate workshop-top-down-dungeon-explorer step .md files (steps 1..50).

Each step wraps exactly one editable region (two ``--fcc-editable-region--``
markers) around the focused diff against the previous step's solution. The
canonical solutions live in a state machine that keeps a single running
``script.js`` string and mutates it with anchor-based inserts and replaces.
"""

from pathlib import Path

OUT_DIR = (
    Path(__file__).resolve().parents[2]
    / "curriculum/challenges/english/blocks/workshop-top-down-dungeon-explorer"
)
HEX_BASE = "66faa500000000000000{:04x}"
ID_OFFSET = 0xCA  # step 1 -> 0xcb, step 50 -> 0xfc


HTML = """\
```html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Top-Down Dungeon Explorer</title>
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


CONFIG_BLOCK = """\

const config = {
  type: Phaser.AUTO,
  width: 320,
  height: 240,
  parent: "game-container",
  backgroundColor: "#0b0b18",
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: { gravity: { y: 0 }, debug: false }
  },
  scene: [MainScene, UIScene]
};

new Phaser.Game(config);
"""


# ---------------------------------------------------------------------------
# State machine: a single running script.js text, mutated step by step.
# ---------------------------------------------------------------------------


class State:
    def __init__(self, initial_text: str):
        self.text = initial_text
        self.scenes = ["MainScene"]

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


# ---------------------------------------------------------------------------
# Step 1 baseline: empty MainScene shell.
# ---------------------------------------------------------------------------

INITIAL_TEXT = """\
class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  preload() {
  }

  create() {
    /* main-create */
  }

  update(time, delta) {
    /* main-update */
  }
}

class UIScene extends Phaser.Scene {
  constructor() {
    super({ key: "UIScene", active: false });
  }

  create() {
    /* ui-create */
  }

  update(time, delta) {
    /* ui-update */
  }
}
""" + CONFIG_BLOCK

state = State(INITIAL_TEXT)
solutions: list[str | None] = [None]


def snap() -> None:
    solutions.append(state.render())


# Step 1: empty class shell (state already at INITIAL_TEXT).
snap()


# ---------------------------------------------------------------------------
# Code fragments for steps 2..50.
# Each is appended/inserted via an anchor into state.text. The anchors are
# usually the previously-inserted block (so the chain is self-anchoring).
# ---------------------------------------------------------------------------

LOAD_TILESET = (
    '    this.load.image(\n'
    '      "tiles",\n'
    '      "/curriculum-assets/phaser/tilemaps/tileset-dungeon.png"\n'
    "    );\n"
)
LOAD_TILEMAP = (
    "    this.load.tilemapTiledJSON(\n"
    '      "dungeon",\n'
    '      "/curriculum-assets/phaser/tilemaps/dungeon-01.json"\n'
    "    );\n"
)
MAKE_MAP = (
    '    const map = this.make.tilemap({ key: "dungeon" });\n'
    '    const tileset = map.addTilesetImage("dungeon", "tiles");\n'
    "    this.map = map;\n"
)
MAKE_LAYERS = (
    '    const floor = map.createLayer("floor", tileset, 0, 0);\n'
    '    const walls = map.createLayer("walls", tileset, 0, 0);\n'
    "    floor.setDepth(0);\n"
    "    walls.setDepth(10);\n"
    "    this.walls = walls;\n"
)
WALL_COLLISION = (
    "    walls.setCollisionByProperty({ collides: true });\n"
)
SPAWN_PLAYER = (
    '    const spawn = map.findObject("objects", (o) => o.type === "spawn");\n'
    "    this.player = this.add.rectangle(\n"
    "      spawn.x + 8,\n"
    "      spawn.y + 8,\n"
    "      12,\n"
    "      12,\n"
    "      0x66ddff\n"
    "    );\n"
)
PLAYER_PHYSICS = (
    "    this.physics.add.existing(this.player);\n"
    "    this.player.body.setCollideWorldBounds(true);\n"
    "    this.player.setDepth(20);\n"
    "    this.physics.add.collider(this.player, walls);\n"
)
WORLD_AND_CAMERA = (
    "    this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);\n"
    "    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);\n"
    "    this.cameras.main.startFollow(this.player);\n"
    "    this.cameras.main.setLerp(0.12, 0.12);\n"
    "    this.cursors = this.input.keyboard.createCursorKeys();\n"
)
EIGHT_WAY_MOVE = (
    "    this.facing = this.facing || { x: 0, y: 1 };\n"
    "    const speed = 100;\n"
    "    const body = this.player.body;\n"
    "    body.setVelocity(0);\n"
    "    let vx = 0;\n"
    "    let vy = 0;\n"
    "    if (this.cursors.left.isDown) vx = -1;\n"
    "    else if (this.cursors.right.isDown) vx = 1;\n"
    "    if (this.cursors.up.isDown) vy = -1;\n"
    "    else if (this.cursors.down.isDown) vy = 1;\n"
    "    if (vx !== 0 || vy !== 0) {\n"
    "      const len = Math.hypot(vx, vy);\n"
    "      body.setVelocity((vx / len) * speed, (vy / len) * speed);\n"
    "      this.facing = { x: vx, y: vy };\n"
    "    }\n"
)
NPC_BLOCK = (
    '    const npcObj = map.findObject("objects", (o) => o.type === "npc");\n'
    "    this.npc = this.add.rectangle(\n"
    "      npcObj.x + 8,\n"
    "      npcObj.y + 8,\n"
    "      12,\n"
    "      14,\n"
    "      0xffaa66\n"
    "    );\n"
    "    this.npc.setDepth(20);\n"
    "    this.physics.add.existing(this.npc, true);\n"
    "    this.physics.add.collider(this.player, this.npc);\n"
    '    this.npcLines = npcObj.properties.find((p) => p.name === "lines").value.split("|");\n'
    "    this.dialogueIndex = 0;\n"
)
NPC_KEY_INIT = (
    '    this.eKey = this.input.keyboard.addKey("E");\n'
    "    this.lastTalkAt = 0;\n"
)
NPC_TALK_UPDATE = (
    "    const distToNpc = Phaser.Math.Distance.Between(\n"
    "      this.player.x,\n"
    "      this.player.y,\n"
    "      this.npc.x,\n"
    "      this.npc.y\n"
    "    );\n"
    "    if (\n"
    "      distToNpc < 28 &&\n"
    "      Phaser.Input.Keyboard.JustDown(this.eKey) &&\n"
    "      time > this.lastTalkAt + 250\n"
    "    ) {\n"
    "      this.lastTalkAt = time;\n"
    '      const line = this.npcLines[Math.min(this.dialogueIndex, this.npcLines.length - 1)];\n'
    '      this.events.emit("ui:dialogue", line);\n'
    "      this.dialogueIndex++;\n"
    '      this.flags.add("talked-to-npc");\n'
    "    }\n"
)
FLAGS_INIT = "    this.flags = new Set();\n"

UI_DIALOGUE_CREATE = (
    '    const main = this.scene.get("MainScene");\n'
    "    this.box = this.add\n"
    "      .rectangle(160, 210, 304, 44, 0x000000, 0.7)\n"
    "      .setVisible(false);\n"
    "    this.box.setStrokeStyle(1, 0xffffff, 0.4);\n"
    "    this.text = this.add.text(16, 192, \"\", {\n"
    "      fontSize: \"10px\",\n"
    "      color: \"#ffffff\",\n"
    "      wordWrap: { width: 288 }\n"
    "    });\n"
    "    this.text.setVisible(false);\n"
    '    main.events.on("ui:dialogue", (line) => {\n'
    "      this.fullLine = line;\n"
    "      this.shown = 0;\n"
    "      this.typing = true;\n"
    "      this.text.setText(\"\").setVisible(true);\n"
    "      this.box.setVisible(true);\n"
    "    });\n"
    '    this.fullLine = "";\n'
    "    this.shown = 0;\n"
    "    this.typing = false;\n"
)

UI_TYPEWRITER_UPDATE = (
    "    if (this.typing) {\n"
    "      this.shown += delta * 0.06;\n"
    "      const slice = this.fullLine.slice(0, Math.floor(this.shown));\n"
    "      this.text.setText(slice);\n"
    "      if (slice.length >= this.fullLine.length) this.typing = false;\n"
    "    }\n"
)

LAUNCH_UI = '    this.scene.launch("UIScene");\n'

NOTICE_LISTENER_INIT = (
    '    this.notice = this.add.text(160, 24, "", {\n'
    '      fontSize: "10px",\n'
    '      color: "#ffe066",\n'
    '      backgroundColor: "rgba(0,0,0,0.7)",\n'
    "      padding: { x: 4, y: 2 }\n"
    "    });\n"
    "    this.notice.setOrigin(0.5, 0.5).setVisible(false);\n"
    '    main.events.on("ui:notice", (msg) => {\n'
    "      this.notice.setText(msg);\n"
    "      this.notice.setVisible(true);\n"
    "      this.time.delayedCall(2000, () => this.notice.setVisible(false));\n"
    "    });\n"
)
KEY_BLOCK = (
    "    this.inventory = new Set();\n"
    '    const keyObj = map.findObject("objects", (o) => o.type === "key");\n'
    "    this.keyItem = this.add.rectangle(\n"
    "      keyObj.x + 8,\n"
    "      keyObj.y + 8,\n"
    "      8,\n"
    "      8,\n"
    "      0xffe066\n"
    "    );\n"
    "    this.physics.add.existing(this.keyItem, true);\n"
    "    this.keyItem.setDepth(15);\n"
    "    this.physics.add.overlap(this.player, this.keyItem, () => {\n"
    "      if (!this.keyItem.active) return;\n"
    "      this.keyItem.destroy();\n"
    '      this.inventory.add("bronze_key");\n'
    '      this.events.emit("ui:notice", "Bronze Key obtained");\n'
    "    });\n"
)
LOCKED_DOOR_BLOCK = (
    '    const lockedDoor = map.findObject("objects", (o) => {\n'
    '      if (o.type !== "door" || !o.properties) return false;\n'
    '      return o.properties.some((p) => p.name === "locked" && p.value === true);\n'
    "    });\n"
    "    this.lockedDoor = lockedDoor;\n"
    '    this.lockedDoorTx = lockedDoor.properties.find((p) => p.name === "tx").value;\n'
    '    this.lockedDoorTy = lockedDoor.properties.find((p) => p.name === "ty").value;\n'
    "    this.lastDoorAt = 0;\n"
)
LOCKED_DOOR_UPDATE = (
    "    const distToDoor = Phaser.Math.Distance.Between(\n"
    "      this.player.x,\n"
    "      this.player.y,\n"
    "      this.lockedDoor.x + 8,\n"
    "      this.lockedDoor.y + 8\n"
    "    );\n"
    "    if (\n"
    "      distToDoor < 24 &&\n"
    "      Phaser.Input.Keyboard.JustDown(this.eKey) &&\n"
    "      time > this.lastDoorAt + 500\n"
    "    ) {\n"
    "      this.lastDoorAt = time;\n"
    '      if (this.inventory.has("bronze_key")) {\n'
    "        this.walls.removeTileAt(this.lockedDoorTx, this.lockedDoorTy);\n"
    '        this.events.emit("ui:notice", "Bronze door unlocks");\n'
    '        this.flags.add("door-unlocked");\n'
    "      } else {\n"
    '        this.events.emit("ui:notice", "It is locked. You need a bronze key.");\n'
    "      }\n"
    "    }\n"
)
CHEST_BLOCK = (
    '    const chestObj = map.findObject("objects", (o) => o.type === "chest");\n'
    "    this.chest = this.add\n"
    '      .sprite(chestObj.x + 8, chestObj.y + 8, "tiles", 27)\n'
    "      .setDepth(15);\n"
    "    this.chestOpened = false;\n"
)
CHEST_UPDATE = (
    "    const distToChest = Phaser.Math.Distance.Between(\n"
    "      this.player.x,\n"
    "      this.player.y,\n"
    "      this.chest.x,\n"
    "      this.chest.y\n"
    "    );\n"
    "    if (\n"
    "      distToChest < 24 &&\n"
    "      Phaser.Input.Keyboard.JustDown(this.eKey) &&\n"
    "      !this.chestOpened\n"
    "    ) {\n"
    "      this.chestOpened = true;\n"
    "      this.chest.setFrame(28);\n"
    "      this.score += 50;\n"
    '      this.events.emit("ui:score", this.score);\n'
    '      this.events.emit("ui:notice", "Chest opens. +50 gold");\n'
    "    }\n"
)
SCORE_INIT = "    this.score = 0;\n"

SAVE_BLOCK = (
    '    const saveObj = map.findObject("objects", (o) => o.type === "save");\n'
    "    this.savePoint = this.add.rectangle(\n"
    "      saveObj.x + 8,\n"
    "      saveObj.y + 8,\n"
    "      12,\n"
    "      12,\n"
    "      0xffff66\n"
    "    );\n"
    "    this.savePoint.setDepth(15);\n"
)
SAVE_UPDATE = (
    "    const distToSave = Phaser.Math.Distance.Between(\n"
    "      this.player.x,\n"
    "      this.player.y,\n"
    "      this.savePoint.x,\n"
    "      this.savePoint.y\n"
    "    );\n"
    "    if (\n"
    "      distToSave < 24 &&\n"
    "      Phaser.Input.Keyboard.JustDown(this.eKey)\n"
    "    ) {\n"
    "      this.saveGame();\n"
    '      this.events.emit("ui:notice", "Game saved");\n'
    "    }\n"
)
SAVE_METHOD = (
    "    this.saveGame = () => {\n"
    "      const save = {\n"
    "        x: this.player.x,\n"
    "        y: this.player.y,\n"
    "        hp: this.hp,\n"
    "        score: this.score,\n"
    "        inventory: Array.from(this.inventory),\n"
    "        flags: Array.from(this.flags),\n"
    "        chestOpened: this.chestOpened\n"
    "      };\n"
    '      localStorage.setItem(\n'
    '        "phaser-dungeon-explorer-save",\n'
    "        JSON.stringify(save)\n"
    "      );\n"
    "    };\n"
)
LOAD_METHOD = (
    "    this.loadGame = () => {\n"
    '      const raw = localStorage.getItem("phaser-dungeon-explorer-save");\n'
    "      if (!raw) return;\n"
    "      try {\n"
    "        const save = JSON.parse(raw);\n"
    "        this.player.x = save.x;\n"
    "        this.player.y = save.y;\n"
    "        this.hp = save.hp;\n"
    "        this.score = save.score;\n"
    "        this.inventory = new Set(save.inventory);\n"
    "        this.flags = new Set(save.flags);\n"
    "        if (save.chestOpened) {\n"
    "          this.chestOpened = true;\n"
    "          this.chest.setFrame(28);\n"
    "        }\n"
    "      } catch (e) {\n"
    "        return;\n"
    "      }\n"
    "    };\n"
)
LOAD_CALL = "    this.loadGame();\n"

SLIME_BLOCK = (
    '    const slimeObj = map.findObject("objects", (o) => o.type === "slime");\n'
    "    this.slime = this.add.rectangle(\n"
    "      slimeObj.x,\n"
    "      slimeObj.y,\n"
    "      14,\n"
    "      12,\n"
    "      0x88ee66\n"
    "    );\n"
    "    this.physics.add.existing(this.slime);\n"
    "    this.slime.body.setCollideWorldBounds(true);\n"
    "    this.slime.setDepth(18);\n"
    "    this.physics.add.collider(this.slime, walls);\n"
)
SLIME_PATROL_INIT = (
    "    this.slimePoly = slimeObj.polyline.map((p) => ({\n"
    "      x: slimeObj.x + p.x,\n"
    "      y: slimeObj.y + p.y\n"
    "    }));\n"
    "    this.slimeTarget = 1;\n"
    "    this.slimeHp = 2;\n"
)
SLIME_PATROL_UPDATE = (
    "    if (this.slime.active && this.slimeHp > 0) {\n"
    "      const target = this.slimePoly[this.slimeTarget];\n"
    "      const dx = target.x - this.slime.x;\n"
    "      const dy = target.y - this.slime.y;\n"
    "      const d = Math.hypot(dx, dy);\n"
    "      if (d < 4) {\n"
    "        this.slimeTarget = (this.slimeTarget + 1) % this.slimePoly.length;\n"
    "      } else {\n"
    "        const sp = 30;\n"
    "        this.slime.body.setVelocity((dx / d) * sp, (dy / d) * sp);\n"
    "      }\n"
    "    }\n"
)
HP_INIT = (
    "    this.hp = 3;\n"
    "    this.maxHp = 3;\n"
    "    this.iframesUntil = 0;\n"
)
SLIME_DAMAGE_OVERLAP = (
    "    this.physics.add.overlap(this.player, this.slime, () => {\n"
    "      if (this.time.now < this.iframesUntil || !this.slime.active) return;\n"
    "      this.iframesUntil = this.time.now + 800;\n"
    "      this.hp = Math.max(0, this.hp - 1);\n"
    '      this.events.emit("ui:hp", this.hp);\n'
    "      this.cameras.main.shake(150, 0.005);\n"
    "    });\n"
)
HP_UI_BLOCK = (
    "    this.hpBar = this.add.graphics();\n"
    "    this.hpBar.setScrollFactor(0).setDepth(60);\n"
    "    this.drawHp = (hp) => {\n"
    "      this.hpBar.clear();\n"
    "      this.hpBar.fillStyle(0x222222, 1).fillRect(8, 8, 60, 8);\n"
    "      this.hpBar.fillStyle(0xff5566, 1).fillRect(8, 8, (hp / 3) * 60, 8);\n"
    "      this.hpBar.lineStyle(1, 0xffffff, 1).strokeRect(8, 8, 60, 8);\n"
    "    };\n"
    "    this.drawHp(3);\n"
    '    main.events.on("ui:hp", (hp) => this.drawHp(hp));\n'
)
ATTACK_INIT = (
    '    this.spaceKey = this.input.keyboard.addKey("SPACE");\n'
    "    this.lastAttackAt = 0;\n"
    "    this.swing = this.add\n"
    "      .rectangle(0, 0, 16, 16, 0xffffff, 0.6)\n"
    "      .setDepth(25)\n"
    "      .setVisible(false);\n"
)
ATTACK_UPDATE = (
    "    if (\n"
    "      Phaser.Input.Keyboard.JustDown(this.spaceKey) &&\n"
    "      time > this.lastAttackAt + 350\n"
    "    ) {\n"
    "      this.lastAttackAt = time;\n"
    "      const ax = this.player.x + this.facing.x * 14;\n"
    "      const ay = this.player.y + this.facing.y * 14;\n"
    "      this.swing.setPosition(ax, ay).setVisible(true).setAlpha(0.6);\n"
    "      this.tweens.add({\n"
    "        targets: this.swing,\n"
    "        alpha: { from: 0.6, to: 0 },\n"
    "        duration: 200,\n"
    "        onComplete: () => this.swing.setVisible(false)\n"
    "      });\n"
    "      if (\n"
    "        this.slime.active &&\n"
    "        Phaser.Math.Distance.Between(ax, ay, this.slime.x, this.slime.y) < 14\n"
    "      ) {\n"
    "        this.slimeHp--;\n"
    "        this.slime.body.setVelocity(\n"
    "          this.facing.x * 200,\n"
    "          this.facing.y * 200\n"
    "        );\n"
    "        this.cameras.main.shake(80, 0.003);\n"
    "        if (this.slimeHp <= 0) {\n"
    "          this.slime.destroy();\n"
    "          this.score += 30;\n"
    '          this.events.emit("ui:score", this.score);\n'
    '          this.events.emit("ui:notice", "Slime defeated. +30 gold");\n'
    "        }\n"
    "      }\n"
    "    }\n"
)
GOAL_BLOCK = (
    '    const goalObj = map.findObject("objects", (o) => o.type === "goal");\n'
    "    this.goal = this.add\n"
    '      .sprite(goalObj.x + 8, goalObj.y + 8, "tiles", 31)\n'
    "      .setDepth(15);\n"
    "    this.physics.add.existing(this.goal, true);\n"
    "    this.physics.add.overlap(this.player, this.goal, () => {\n"
    '      if (this.flags.has("victory")) return;\n'
    '      this.flags.add("victory");\n'
    '      this.events.emit("ui:victory");\n'
    "      this.cameras.main.fade(800, 0, 0, 0);\n"
    "    });\n"
)
VICTORY_UI_BLOCK = (
    '    main.events.on("ui:victory", () => {\n'
    "      this.add\n"
    "        .rectangle(160, 120, 320, 240, 0x000000, 0.7)\n"
    "        .setDepth(80);\n"
    "      this.add\n"
    '        .text(160, 120, "Victory!", {\n'
    '          fontSize: "32px",\n'
    '          color: "#ffe066"\n'
    "        })\n"
    "        .setOrigin(0.5)\n"
    "        .setDepth(81);\n"
    "    });\n"
)
TORCH_BLOCK = (
    '    map.filterObjects("objects", (o) => o.type === "torch").forEach(\n'
    "      (t) => {\n"
    "        const torch = this.add\n"
    '          .sprite(t.x + 8, t.y + 8, "tiles", 25)\n'
    "          .setDepth(15);\n"
    "        this.tweens.add({\n"
    "          targets: torch,\n"
    "          alpha: { from: 1, to: 0.6 },\n"
    "          duration: 500,\n"
    "          yoyo: true,\n"
    "          repeat: -1\n"
    "        });\n"
    "      }\n"
    "    );\n"
)
ROOM_DETECT_INIT = (
    '    this.currentRoom = "NW";\n'
    '    this.visitedRooms = new Set(["NW"]);\n'
    "    this.transitionLockedUntil = 0;\n"
)
ROOM_DETECT_UPDATE = (
    "    const room = this.detectRoom(this.player.x, this.player.y);\n"
    "    if (\n"
    "      room &&\n"
    "      room !== this.currentRoom &&\n"
    "      time > this.transitionLockedUntil\n"
    "    ) {\n"
    "      this.currentRoom = room;\n"
    "      this.transitionLockedUntil = time + 600;\n"
    "      this.cameras.main.fadeOut(150, 0, 0, 0);\n"
    '      this.cameras.main.once("camerafadeoutcomplete", () =>\n'
    "        this.cameras.main.fadeIn(150)\n"
    "      );\n"
    "      this.visitedRooms.add(room);\n"
    '      this.events.emit("ui:room", room);\n'
    "    }\n"
)
DETECT_ROOM_METHOD = (
    "    this.detectRoom = (px, py) => {\n"
    "      const tx = px / 16;\n"
    "      const ty = py / 16;\n"
    '      if (tx < 22 && ty < 17) return "NW";\n'
    '      if (tx >= 22 && ty < 17) return "NE";\n'
    '      if (tx < 22 && ty >= 17) return "SW";\n'
    '      return "SE";\n'
    "    };\n"
)
MINIMAP_INIT = (
    "    this.minimap = this.cameras\n"
    "      .add(252, 4, 60, 40)\n"
    "      .setZoom(0.1)\n"
    "      .setBackgroundColor(0x000000);\n"
    "    this.minimap.setBounds(0, 0, map.widthInPixels, map.heightInPixels);\n"
    "    this.minimap.startFollow(this.player);\n"
)
MINIMAP_IGNORE = (
    "    this.minimap.ignore([\n"
    "      this.npc,\n"
    "      this.slime,\n"
    "      this.chest,\n"
    "      this.keyItem,\n"
    "      this.savePoint,\n"
    "      this.goal,\n"
    "      this.swing\n"
    "    ]);\n"
)
PLAYER_MARKER_BLOCK = (
    "    this.marker = this.add\n"
    "      .rectangle(0, 0, 16, 16, 0xff66ff, 1)\n"
    "      .setDepth(70);\n"
    "    this.cameras.main.ignore(this.marker);\n"
)
PLAYER_MARKER_UPDATE = (
    "    this.marker.setPosition(this.player.x, this.player.y);\n"
)
ROOM_LABEL_BLOCK = (
    "    this.roomLabel = this.add\n"
    '      .text(160, 36, "", {\n'
    '        fontSize: "12px",\n'
    '        color: "#ffffff",\n'
    '        backgroundColor: "rgba(0,0,0,0.6)",\n'
    "        padding: { x: 6, y: 2 }\n"
    "      })\n"
    "      .setOrigin(0.5)\n"
    "      .setVisible(false);\n"
    '    main.events.on("ui:room", (name) => {\n'
    "      this.roomLabel.setText(name);\n"
    "      this.roomLabel.setVisible(true);\n"
    "      this.time.delayedCall(2000, () => this.roomLabel.setVisible(false));\n"
    "    });\n"
)
SCORE_TEXT_BLOCK = (
    "    this.scoreText = this.add\n"
    '      .text(252, 50, "0", {\n'
    '        fontSize: "10px",\n'
    '        color: "#ffe066"\n'
    "      })\n"
    "      .setOrigin(0.5);\n"
    '    main.events.on("ui:score", (s) => this.scoreText.setText("Gold: " + s));\n'
)
SHUTDOWN_HOOK = (
    '    this.events.on("shutdown", () => {\n'
    '      main.events.off("ui:dialogue");\n'
    '      main.events.off("ui:notice");\n'
    '      main.events.off("ui:hp");\n'
    '      main.events.off("ui:victory");\n'
    '      main.events.off("ui:room");\n'
    '      main.events.off("ui:score");\n'
    "    });\n"
)
ATTACK_GUARD = (
    "      if (time < this.lastAttackAt + 200) return;\n"
)
NPC_PROXIMITY_HINT = (
    "    if (\n"
    "      distToNpc < 28 &&\n"
    "      time > this.lastTalkAt + 250 &&\n"
    "      !Phaser.Input.Keyboard.JustDown(this.eKey)\n"
    "    ) {\n"
    "      // hint glyph could go here in a fuller game\n"
    "    }\n"
)


# ---------------------------------------------------------------------------
# Step orchestration helpers.
# ---------------------------------------------------------------------------


REGION = "--fcc-editable-region--"


def seed_insert(prev_solution: str, anchor: str) -> str:
    """Insert an empty editable region immediately after `anchor`."""
    if prev_solution.count(anchor) != 1:
        raise SystemExit(
            f"seed anchor must be unique; got {prev_solution.count(anchor)}\n---\n{anchor!r}"
        )
    region = f"{REGION}\n\n{REGION}\n"
    return prev_solution.replace(anchor, anchor + region, 1)


def seed_wrap(prev_solution: str, span: str) -> str:
    """Wrap `span` (existing code) in an editable region. Replaces it as-is."""
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


# ---------------------------------------------------------------------------
# Step 1: special case — empty MainScene shell with config below.
# Seed is the file with markers above the (still-defined) config; student
# types the class. Solution is the same INITIAL_TEXT we already snapped.
# ---------------------------------------------------------------------------

# We've already done snap() once for step 1; we still need to record its
# metadata.
SHELL_SEED_FOOTER = """\

class UIScene extends Phaser.Scene {
  constructor() {
    super({ key: "UIScene", active: false });
  }

  create() {
    /* ui-create */
  }

  update(time, delta) {
    /* ui-update */
  }
}

const config = {
  type: Phaser.AUTO,
  width: 320,
  height: 240,
  parent: "game-container",
  backgroundColor: "#0b0b18",
  pixelArt: true,
  physics: {
    default: "arcade",
    arcade: { gravity: { y: 0 }, debug: false }
  },
  scene: [MainScene, UIScene]
};

new Phaser.Game(config);
"""

STEP1_SEED = (
    f"{REGION}\n\n{REGION}\n" + SHELL_SEED_FOOTER
)

titles.append("Step 1")
descriptions.append(
    "Welcome to the dungeon explorer. Across 50 steps you will load a 4-room "
    "Tiled map, drive a player with cursor keys, talk to an NPC, pick up a "
    "key, unlock a door, fight a slime, save your progress, and reach the "
    "victory stairs.\n\nA `UIScene` shell is already defined below — that's "
    "the HUD layer for dialogue, notices, HP, and minimap. You'll fill it in "
    "later. For now, declare `MainScene` extending `Phaser.Scene` with a "
    "constructor that calls `super(\"MainScene\")` and empty `preload`, "
    "`create`, and `update(time, delta)` methods.\n\n```js\n"
    "class MainScene extends Phaser.Scene {\n"
    "  constructor() {\n"
    "    super(\"MainScene\");\n"
    "  }\n\n"
    "  preload() {}\n\n"
    "  create() {}\n\n"
    "  update(time, delta) {}\n"
    "}\n```\n\nThe `config` object below already references both scenes."
)
hints_per_step.append(
    [
        (
            "You should declare a `MainScene` class extending `Phaser.Scene`.",
            r"class\s+MainScene\s+extends\s+Phaser\.Scene",
        ),
        (
            "The constructor should call `super(\"MainScene\")`.",
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


# ---------------------------------------------------------------------------
# Step 2: load tileset image.
# ---------------------------------------------------------------------------

step(
    2,
    title="Step 2",
    description=(
        "A Tiled map needs two assets in the loader: the tileset PNG and the "
        "map JSON. Start with the tileset image. Inside `preload`, load "
        "`/curriculum-assets/phaser/tilemaps/tileset-dungeon.png` under the "
        "cache key `\"tiles\"`:\n\n"
        "```js\n"
        'this.load.image(\n  "tiles",\n  "/curriculum-assets/phaser/tilemaps/tileset-dungeon.png"\n);\n'
        "```"
    ),
    hints=[
        (
            "You should load `tileset-dungeon.png` under the key `\"tiles\"` in `preload`.",
            r'this\.load\.image\(\s*["\']tiles["\']\s*,\s*["\']/curriculum-assets/phaser/tilemaps/tileset-dungeon\.png["\']\s*\)',
        )
    ],
    seed_text=seed_insert(solutions[1], "  preload() {\n"),
    mutate=lambda: state.insert_after("  preload() {\n", LOAD_TILESET),
)

# ---------------------------------------------------------------------------
# Step 3: load tilemap JSON.
# ---------------------------------------------------------------------------

step(
    3,
    title="Step 3",
    description=(
        "Now load the Tiled JSON map. `tilemapTiledJSON` parses Tiled's export "
        "format — layers, tilesets, objects — and caches it under the key you "
        "provide. Inside `preload`, after the tileset load, add:\n\n"
        "```js\n"
        'this.load.tilemapTiledJSON(\n  "dungeon",\n  "/curriculum-assets/phaser/tilemaps/dungeon-01.json"\n);\n'
        "```\n\nKeep the keys distinct: `\"tiles\"` for the image, `\"dungeon\"` for the map."
    ),
    hints=[
        (
            "You should call `this.load.tilemapTiledJSON(\"dungeon\", \"/curriculum-assets/phaser/tilemaps/dungeon-01.json\")` in `preload`.",
            r'this\.load\.tilemapTiledJSON\(\s*["\']dungeon["\']\s*,\s*["\']/curriculum-assets/phaser/tilemaps/dungeon-01\.json["\']\s*\)',
        )
    ],
    seed_text=seed_insert(solutions[2], LOAD_TILESET),
    mutate=lambda: state.insert_after(LOAD_TILESET, LOAD_TILEMAP),
)

# ---------------------------------------------------------------------------
# Step 4: make tilemap + add tileset image.
# ---------------------------------------------------------------------------

step(
    4,
    title="Step 4",
    description=(
        "With both assets cached, the next job is to construct the runtime "
        "`Tilemap` object. `this.make.tilemap({ key })` reads the cached JSON; "
        "`map.addTilesetImage(\"dungeon\", \"tiles\")` connects the map's "
        "logical tileset name (the one Tiled stored, `\"dungeon\"`) to the "
        "loader cache key for the PNG (`\"tiles\"`).\n\nInside `create`, add:\n\n"
        "```js\n"
        'const map = this.make.tilemap({ key: "dungeon" });\n'
        'const tileset = map.addTilesetImage("dungeon", "tiles");\n'
        "this.map = map;\n"
        "```"
    ),
    hints=[
        (
            "You should call `this.make.tilemap({ key: \"dungeon\" })` and store the result in a `map` constant.",
            r'const\s+map\s*=\s*this\.make\.tilemap\(\s*\{\s*key:\s*["\']dungeon["\']\s*\}\s*\)',
        ),
        (
            "You should call `map.addTilesetImage(\"dungeon\", \"tiles\")` and store the result in a `tileset` constant.",
            r'const\s+tileset\s*=\s*map\.addTilesetImage\(\s*["\']dungeon["\']\s*,\s*["\']tiles["\']\s*\)',
        ),
        (
            "You should keep a reference on the scene with `this.map = map`.",
            r"this\.map\s*=\s*map",
        ),
    ],
    seed_text=seed_wrap(solutions[3], "    /* main-create */\n"),
    mutate=lambda: state.replace("    /* main-create */\n", MAKE_MAP),
)

# ---------------------------------------------------------------------------
# Step 5: createLayer floor + walls + setDepth.
# ---------------------------------------------------------------------------

step(
    5,
    title="Step 5",
    description=(
        "A tilemap is data; layers are what render. The `floor` layer carries "
        "the ground tiles, the `walls` layer carries the solid wall tiles. "
        "Render order matters — walls must be drawn on top of floor. Use "
        "`setDepth` to lock that order so future objects (player, props) can "
        "sit cleanly between them.\n\n"
        "```js\n"
        'const floor = map.createLayer("floor", tileset, 0, 0);\n'
        'const walls = map.createLayer("walls", tileset, 0, 0);\n'
        "floor.setDepth(0);\n"
        "walls.setDepth(10);\n"
        "this.walls = walls;\n"
        "```"
    ),
    hints=[
        (
            "You should call `map.createLayer(\"floor\", tileset, 0, 0)` and store it in `floor`.",
            r'const\s+floor\s*=\s*map\.createLayer\(\s*["\']floor["\']\s*,\s*tileset\s*,\s*0\s*,\s*0\s*\)',
        ),
        (
            "You should call `map.createLayer(\"walls\", tileset, 0, 0)` and store it in `walls`.",
            r'const\s+walls\s*=\s*map\.createLayer\(\s*["\']walls["\']\s*,\s*tileset\s*,\s*0\s*,\s*0\s*\)',
        ),
        (
            "You should call `floor.setDepth(0)`.",
            r"floor\.setDepth\(\s*0\s*\)",
        ),
        (
            "You should call `walls.setDepth(10)`.",
            r"walls\.setDepth\(\s*10\s*\)",
        ),
        (
            "You should expose the walls layer on the scene with `this.walls = walls`.",
            r"this\.walls\s*=\s*walls",
        ),
    ],
    seed_text=seed_insert(solutions[4], MAKE_MAP),
    mutate=lambda: state.insert_after(MAKE_MAP, MAKE_LAYERS),
)

# ---------------------------------------------------------------------------
# Step 6: walls collision by property.
# ---------------------------------------------------------------------------

step(
    6,
    title="Step 6",
    description=(
        "Tiles in the `walls` layer carry a `collides: true` custom property. "
        "Tell arcade physics to honour it — every tile with `collides: true` "
        "becomes a solid body for collision checks.\n\n"
        "```js\n"
        "walls.setCollisionByProperty({ collides: true });\n"
        "```\n\nThis is a one-shot setup call: Phaser walks the layer once and "
        "caches the collision flags."
    ),
    hints=[
        (
            "You should call `walls.setCollisionByProperty({ collides: true })`.",
            r"walls\.setCollisionByProperty\(\s*\{\s*collides:\s*true\s*\}\s*\)",
        )
    ],
    seed_text=seed_insert(solutions[5], MAKE_LAYERS),
    mutate=lambda: state.insert_after(MAKE_LAYERS, WALL_COLLISION),
)

# ---------------------------------------------------------------------------
# Step 7: spawn player from object layer.
# ---------------------------------------------------------------------------

step(
    7,
    title="Step 7",
    description=(
        "The map's object layer carries a single `spawn` object. Read it with "
        "`map.findObject` and place a 12×12 cyan rectangle there as the "
        "player. Object coordinates are in pixels and refer to the top-left "
        "corner; add `8` to centre on a 16×16 tile.\n\n"
        "```js\n"
        'const spawn = map.findObject("objects", (o) => o.type === "spawn");\n'
        "this.player = this.add.rectangle(\n  spawn.x + 8,\n  spawn.y + 8,\n  12,\n  12,\n  0x66ddff\n);\n"
        "```"
    ),
    hints=[
        (
            "You should read the spawn object from the `\"objects\"` layer.",
            r'const\s+spawn\s*=\s*map\.findObject\(\s*["\']objects["\']\s*,\s*\(\s*\w+\s*\)\s*=>\s*\w+\.type\s*===\s*["\']spawn["\']\s*\)',
        ),
        (
            "You should create the player as a 12×12 rectangle with colour `0x66ddff`, centred on the spawn tile.",
            r"this\.player\s*=\s*this\.add\.rectangle\(\s*spawn\.x\s*\+\s*8\s*,\s*spawn\.y\s*\+\s*8\s*,\s*12\s*,\s*12\s*,\s*0x66ddff\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[6], WALL_COLLISION),
    mutate=lambda: state.insert_after(WALL_COLLISION, SPAWN_PLAYER),
)

# ---------------------------------------------------------------------------
# Step 8: player physics body + collider.
# ---------------------------------------------------------------------------

step(
    8,
    title="Step 8",
    description=(
        "The player rectangle has no body yet — it can't push against walls. "
        "Add an arcade body, lock it to the world, raise its depth above the "
        "walls layer, and register a collider against the `walls` layer.\n\n"
        "```js\n"
        "this.physics.add.existing(this.player);\n"
        "this.player.body.setCollideWorldBounds(true);\n"
        "this.player.setDepth(20);\n"
        "this.physics.add.collider(this.player, walls);\n"
        "```"
    ),
    hints=[
        (
            "You should call `this.physics.add.existing(this.player)`.",
            r"this\.physics\.add\.existing\(\s*this\.player\s*\)",
        ),
        (
            "You should call `this.player.body.setCollideWorldBounds(true)`.",
            r"this\.player\.body\.setCollideWorldBounds\(\s*true\s*\)",
        ),
        (
            "You should call `this.player.setDepth(20)`.",
            r"this\.player\.setDepth\(\s*20\s*\)",
        ),
        (
            "You should add a collider between the player and the `walls` layer.",
            r"this\.physics\.add\.collider\(\s*this\.player\s*,\s*walls\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[7], SPAWN_PLAYER),
    mutate=lambda: state.insert_after(SPAWN_PLAYER, PLAYER_PHYSICS),
)

# ---------------------------------------------------------------------------
# Step 9: world + camera bounds + cursors.
# ---------------------------------------------------------------------------

step(
    9,
    title="Step 9",
    description=(
        "The map is bigger than the viewport. Bound the physics world to the "
        "map, bound the camera to the map, follow the player with a small lerp "
        "for smoothness, and grab the cursor keys.\n\n"
        "```js\n"
        "this.physics.world.setBounds(0, 0, map.widthInPixels, map.heightInPixels);\n"
        "this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);\n"
        "this.cameras.main.startFollow(this.player);\n"
        "this.cameras.main.setLerp(0.12, 0.12);\n"
        "this.cursors = this.input.keyboard.createCursorKeys();\n"
        "```"
    ),
    hints=[
        (
            "You should set the physics world bounds to the map size.",
            r"this\.physics\.world\.setBounds\(\s*0\s*,\s*0\s*,\s*map\.widthInPixels\s*,\s*map\.heightInPixels\s*\)",
        ),
        (
            "You should set the main camera bounds to the map size.",
            r"this\.cameras\.main\.setBounds\(\s*0\s*,\s*0\s*,\s*map\.widthInPixels\s*,\s*map\.heightInPixels\s*\)",
        ),
        (
            "You should start the main camera following `this.player`.",
            r"this\.cameras\.main\.startFollow\(\s*this\.player\s*\)",
        ),
        (
            "You should set the camera lerp to `(0.12, 0.12)`.",
            r"this\.cameras\.main\.setLerp\(\s*0\.12\s*,\s*0\.12\s*\)",
        ),
        (
            "You should create cursor keys with `this.input.keyboard.createCursorKeys()`.",
            r"this\.cursors\s*=\s*this\.input\.keyboard\.createCursorKeys\(\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[8], PLAYER_PHYSICS),
    mutate=lambda: state.insert_after(PLAYER_PHYSICS, WORLD_AND_CAMERA),
)

# ---------------------------------------------------------------------------
# Step 10: 8-direction normalized movement (in update).
# ---------------------------------------------------------------------------

step(
    10,
    title="Step 10",
    description=(
        "Top-down movement with 4 cursor keys lets you press two at once for "
        "diagonals — but a naive implementation makes diagonals 1.41× faster. "
        "Normalize the direction vector before scaling by speed so all 8 "
        "directions feel the same. Also remember the latest direction in "
        "`this.facing` so the next steps (attacks, dialogue glyphs) know which "
        "way the player is facing.\n\nInside `update`:\n\n"
        "```js\n"
        "this.facing = this.facing || { x: 0, y: 1 };\n"
        "const speed = 100;\n"
        "const body = this.player.body;\n"
        "body.setVelocity(0);\n"
        "let vx = 0;\n"
        "let vy = 0;\n"
        "if (this.cursors.left.isDown) vx = -1;\n"
        "else if (this.cursors.right.isDown) vx = 1;\n"
        "if (this.cursors.up.isDown) vy = -1;\n"
        "else if (this.cursors.down.isDown) vy = 1;\n"
        "if (vx !== 0 || vy !== 0) {\n"
        "  const len = Math.hypot(vx, vy);\n"
        "  body.setVelocity((vx / len) * speed, (vy / len) * speed);\n"
        "  this.facing = { x: vx, y: vy };\n"
        "}\n"
        "```"
    ),
    hints=[
        (
            "You should reset the player's velocity to zero each frame.",
            r"body\.setVelocity\(\s*0\s*\)",
        ),
        (
            "You should detect the four cursor key presses to set `vx` and `vy`.",
            r"this\.cursors\.left\.isDown[\s\S]*this\.cursors\.right\.isDown[\s\S]*this\.cursors\.up\.isDown[\s\S]*this\.cursors\.down\.isDown",
        ),
        (
            "You should normalize the direction vector with `Math.hypot(vx, vy)` before scaling by `speed`.",
            r"const\s+len\s*=\s*Math\.hypot\(\s*vx\s*,\s*vy\s*\)[\s\S]*body\.setVelocity\(\s*\(\s*vx\s*/\s*len\s*\)\s*\*\s*speed\s*,\s*\(\s*vy\s*/\s*len\s*\)\s*\*\s*speed\s*\)",
        ),
        (
            "You should track the current facing direction in `this.facing`.",
            r"this\.facing\s*=\s*\{\s*x:\s*vx\s*,\s*y:\s*vy\s*\}",
        ),
    ],
    seed_text=seed_wrap(solutions[9], "    /* main-update */\n"),
    mutate=lambda: state.replace("    /* main-update */\n", EIGHT_WAY_MOVE),
)

# ---------------------------------------------------------------------------
# Step 11: read NPC + render + body + collider + lines parsing.
# ---------------------------------------------------------------------------

step(
    11,
    title="Step 11",
    description=(
        "Time to populate the world. The map's object layer carries one "
        "`type: \"npc\"` entry — the elder. Render it as an orange rectangle, "
        "give it a static body so the player can't walk through it, and parse "
        "its `lines` custom property (a `|`-separated string) into an array.\n\n"
        "```js\n"
        'const npcObj = map.findObject("objects", (o) => o.type === "npc");\n'
        "this.npc = this.add.rectangle(\n  npcObj.x + 8,\n  npcObj.y + 8,\n  12,\n  14,\n  0xffaa66\n);\n"
        "this.npc.setDepth(20);\n"
        "this.physics.add.existing(this.npc, true);\n"
        "this.physics.add.collider(this.player, this.npc);\n"
        'this.npcLines = npcObj.properties.find((p) => p.name === "lines").value.split("|");\n'
        "this.dialogueIndex = 0;\n"
        "```\n\nThe `true` second argument to `add.existing` makes the body "
        "static — the NPC has collision but doesn't move."
    ),
    hints=[
        (
            "You should read the NPC object from the `\"objects\"` layer.",
            r'const\s+npcObj\s*=\s*map\.findObject\(\s*["\']objects["\']\s*,\s*\(\s*\w+\s*\)\s*=>\s*\w+\.type\s*===\s*["\']npc["\']\s*\)',
        ),
        (
            "You should render the NPC as a 12×14 rectangle with colour `0xffaa66`.",
            r"this\.npc\s*=\s*this\.add\.rectangle\(\s*npcObj\.x\s*\+\s*8\s*,\s*npcObj\.y\s*\+\s*8\s*,\s*12\s*,\s*14\s*,\s*0xffaa66\s*\)",
        ),
        (
            "You should add a static body to the NPC.",
            r"this\.physics\.add\.existing\(\s*this\.npc\s*,\s*true\s*\)",
        ),
        (
            "You should add a collider between the player and the NPC.",
            r"this\.physics\.add\.collider\(\s*this\.player\s*,\s*this\.npc\s*\)",
        ),
        (
            "You should parse the NPC's `lines` property into an array on `this.npcLines`.",
            r'this\.npcLines\s*=\s*npcObj\.properties\.find\(\s*\(\s*\w+\s*\)\s*=>\s*\w+\.name\s*===\s*["\']lines["\']\s*\)\.value\.split\(\s*["\']\|["\']\s*\)',
        ),
    ],
    seed_text=seed_insert(solutions[10], WORLD_AND_CAMERA),
    mutate=lambda: state.insert_after(WORLD_AND_CAMERA, NPC_BLOCK),
)

# ---------------------------------------------------------------------------
# Step 12: E key + lastTalkAt initialization.
# ---------------------------------------------------------------------------

step(
    12,
    title="Step 12",
    description=(
        "Talking to the NPC will fire on `E`. Two pieces of state need to "
        "exist before the talk handler can read them: the `E` key binding "
        "and a `lastTalkAt` timestamp used later to debounce the press.\n\n"
        "After the NPC block, add:\n\n"
        "```js\n"
        'this.eKey = this.input.keyboard.addKey("E");\n'
        "this.lastTalkAt = 0;\n"
        "```"
    ),
    hints=[
        (
            "You should bind `this.eKey` to the `E` key.",
            r'this\.eKey\s*=\s*this\.input\.keyboard\.addKey\(\s*["\']E["\']\s*\)',
        ),
        (
            "You should initialize `this.lastTalkAt` to `0`.",
            r"this\.lastTalkAt\s*=\s*0",
        ),
    ],
    seed_text=seed_insert(solutions[11], NPC_BLOCK),
    mutate=lambda: state.insert_after(NPC_BLOCK, NPC_KEY_INIT),
)

# ---------------------------------------------------------------------------
# Step 13: flags Set initialization (will be populated by talk + door + chest).
# ---------------------------------------------------------------------------

step(
    13,
    title="Step 13",
    description=(
        "Throughout the dungeon you'll mark progress in a `flags` Set — "
        "`talked-to-npc`, `door-unlocked`, `victory`, etc. Initialize the Set "
        "now so every later step can `add()` to it without checking for "
        "existence.\n\n```js\nthis.flags = new Set();\n```"
    ),
    hints=[
        (
            "You should initialize `this.flags` as a new `Set`.",
            r"this\.flags\s*=\s*new\s+Set\(\s*\)",
        )
    ],
    seed_text=seed_insert(solutions[12], NPC_KEY_INIT),
    mutate=lambda: state.insert_after(NPC_KEY_INIT, FLAGS_INIT),
)

# ---------------------------------------------------------------------------
# Step 14: NPC talk update (proximity + JustDown + emit dialogue + flags).
# ---------------------------------------------------------------------------

step(
    14,
    title="Step 14",
    description=(
        "Add the talk handler. When the player is within 28 pixels of the NPC "
        "and presses `E` (with a 250 ms debounce), emit a `\"ui:dialogue\"` "
        "event with the next line, advance the dialogue index, and mark the "
        "NPC as talked-to.\n\nInside `update`, after the movement block:\n\n"
        "```js\n"
        "const distToNpc = Phaser.Math.Distance.Between(\n  this.player.x,\n  this.player.y,\n  this.npc.x,\n  this.npc.y\n);\n"
        "if (\n  distToNpc < 28 &&\n  Phaser.Input.Keyboard.JustDown(this.eKey) &&\n  time > this.lastTalkAt + 250\n) {\n"
        "  this.lastTalkAt = time;\n"
        "  const line = this.npcLines[Math.min(this.dialogueIndex, this.npcLines.length - 1)];\n"
        '  this.events.emit("ui:dialogue", line);\n'
        "  this.dialogueIndex++;\n"
        '  this.flags.add("talked-to-npc");\n'
        "}\n"
        "```"
    ),
    hints=[
        (
            "You should compute the distance between the player and the NPC with `Phaser.Math.Distance.Between`.",
            r"Phaser\.Math\.Distance\.Between\(\s*this\.player\.x\s*,\s*this\.player\.y\s*,\s*this\.npc\.x\s*,\s*this\.npc\.y\s*\)",
        ),
        (
            "You should require proximity, `Phaser.Input.Keyboard.JustDown(this.eKey)`, and a 250 ms debounce against `this.lastTalkAt`.",
            r"distToNpc\s*<\s*28[\s\S]*Phaser\.Input\.Keyboard\.JustDown\(\s*this\.eKey\s*\)[\s\S]*time\s*>\s*this\.lastTalkAt\s*\+\s*250",
        ),
        (
            "You should emit a `\"ui:dialogue\"` event with the current line.",
            r'this\.events\.emit\(\s*["\']ui:dialogue["\']\s*,\s*line\s*\)',
        ),
        (
            "You should advance `this.dialogueIndex` after each talk.",
            r"this\.dialogueIndex\+\+",
        ),
        (
            "You should add `\"talked-to-npc\"` to `this.flags`.",
            r'this\.flags\.add\(\s*["\']talked-to-npc["\']\s*\)',
        ),
    ],
    seed_text=seed_insert(solutions[13], EIGHT_WAY_MOVE),
    mutate=lambda: state.insert_after(EIGHT_WAY_MOVE, NPC_TALK_UPDATE),
)

# ---------------------------------------------------------------------------
# Step 15: launch UIScene from MainScene.create.
# ---------------------------------------------------------------------------

step(
    15,
    title="Step 15",
    description=(
        "The boilerplate already defines a `UIScene` shell at the bottom of the "
        "file and registers both scenes in `config.scene`. What's missing is "
        "telling Phaser to actually start `UIScene` in parallel with "
        "`MainScene`.\n\nIn `MainScene.create`, after the flags initialization, "
        "launch the UI scene:\n\n"
        "```js\n"
        'this.scene.launch("UIScene");\n'
        "```\n\n`launch` (not `start`) keeps the current scene running and adds "
        "the second one alongside — exactly what you want for a HUD."
    ),
    hints=[
        (
            "You should call `this.scene.launch(\"UIScene\")` in MainScene's create method.",
            r'this\.scene\.launch\(\s*["\']UIScene["\']\s*\)',
        ),
    ],
    seed_text=seed_insert(solutions[14], FLAGS_INIT),
    mutate=lambda: state.insert_after(FLAGS_INIT, LAUNCH_UI),
)

# ---------------------------------------------------------------------------
# Step 16: UIScene listens for "ui:dialogue" + renders text box.
# ---------------------------------------------------------------------------

step(
    16,
    title="Step 16",
    description=(
        "Time to flesh out the empty `UIScene.create` body. Replace the "
        "`/* ui-create */` placeholder with code that wires up the dialogue "
        "box, listens for `\"ui:dialogue\"` events emitted by `MainScene`, and "
        "stores the typewriter state.\n\n"
        "```js\n"
        'const main = this.scene.get("MainScene");\n'
        "this.box = this.add\n"
        "  .rectangle(160, 210, 304, 44, 0x000000, 0.7)\n"
        "  .setVisible(false);\n"
        "this.box.setStrokeStyle(1, 0xffffff, 0.4);\n"
        "this.text = this.add.text(16, 192, \"\", {\n"
        "  fontSize: \"10px\",\n"
        "  color: \"#ffffff\",\n"
        "  wordWrap: { width: 288 }\n"
        "});\n"
        "this.text.setVisible(false);\n"
        'main.events.on("ui:dialogue", (line) => {\n'
        "  this.fullLine = line;\n"
        "  this.shown = 0;\n"
        "  this.typing = true;\n"
        "  this.text.setText(\"\").setVisible(true);\n"
        "  this.box.setVisible(true);\n"
        "});\n"
        'this.fullLine = "";\n'
        "this.shown = 0;\n"
        "this.typing = false;\n"
        "```\n\n`scene.get(\"MainScene\")` returns the running MainScene instance — "
        "that's how UIScene subscribes to MainScene's events."
    ),
    hints=[
        (
            "The UIScene should grab the running MainScene via `this.scene.get(\"MainScene\")`.",
            r'const\s+main\s*=\s*this\.scene\.get\(\s*["\']MainScene["\']\s*\)',
        ),
        (
            "The UIScene should create a 304×44 dialogue box rectangle.",
            r"this\.box\s*=\s*this\.add\s*\.rectangle\(\s*160\s*,\s*210\s*,\s*304\s*,\s*44\s*,\s*0x000000\s*,\s*0\.7\s*\)",
        ),
        (
            "The UIScene should add a text object for the dialogue line.",
            r"this\.text\s*=\s*this\.add\.text\(\s*16\s*,\s*192\s*,",
        ),
        (
            "The UIScene should listen for `\"ui:dialogue\"` events from MainScene.",
            r'main\.events\.on\(\s*["\']ui:dialogue["\']',
        ),
        (
            "The UIScene should initialize `this.fullLine`, `this.shown`, and `this.typing`.",
            r'this\.fullLine\s*=\s*["\']{2}[\s\S]*this\.shown\s*=\s*0[\s\S]*this\.typing\s*=\s*false',
        ),
    ],
    seed_text=seed_wrap(solutions[15], "    /* ui-create */\n"),
    mutate=lambda: state.replace(
        "    /* ui-create */\n", UI_DIALOGUE_CREATE
    ),
)

# ---------------------------------------------------------------------------
# Step 17: UIScene typewriter effect in update.
# ---------------------------------------------------------------------------

step(
    17,
    title="Step 17",
    description=(
        "The dialogue box exists but the text appears all at once — not very "
        "narrative. Add a typewriter effect by replacing the "
        "`/* ui-update */` placeholder. Each frame, advance a `shown` "
        "counter by `delta * 0.06` (about 60 chars/sec) and slice the line.\n\n"
        "```js\n"
        "if (this.typing) {\n"
        "  this.shown += delta * 0.06;\n"
        "  const slice = this.fullLine.slice(0, Math.floor(this.shown));\n"
        "  this.text.setText(slice);\n"
        "  if (slice.length >= this.fullLine.length) this.typing = false;\n"
        "}\n"
        "```"
    ),
    hints=[
        (
            "You should advance `this.shown` by `delta * 0.06` while typing.",
            r"this\.shown\s*\+=\s*delta\s*\*\s*0\.06",
        ),
        (
            "You should slice `this.fullLine` to `Math.floor(this.shown)` characters and set the text.",
            r"this\.fullLine\.slice\(\s*0\s*,\s*Math\.floor\(\s*this\.shown\s*\)\s*\)",
        ),
        (
            "You should stop typing once the slice covers the full line.",
            r"slice\.length\s*>=\s*this\.fullLine\.length\s*\)\s*this\.typing\s*=\s*false",
        ),
    ],
    seed_text=seed_wrap(solutions[16], "    /* ui-update */\n"),
    mutate=lambda: state.replace(
        "    /* ui-update */\n", UI_TYPEWRITER_UPDATE
    ),
)

# ---------------------------------------------------------------------------
# Step 18: Notice text + listener in UIScene.create.
# ---------------------------------------------------------------------------

step(
    18,
    title="Step 18",
    description=(
        "A `notice` is a short floating message — \"Bronze Key obtained\", "
        "\"Game saved\", \"+30 gold\". Add a notice text element to UIScene "
        "and a listener for `\"ui:notice\"` events that shows the message for "
        "two seconds.\n\nAfter the dialogue setup in `UIScene.create`, add:\n\n"
        "```js\n"
        "this.notice = this.add.text(160, 24, \"\", {\n"
        "  fontSize: \"10px\",\n"
        "  color: \"#ffe066\",\n"
        "  backgroundColor: \"rgba(0,0,0,0.7)\",\n"
        "  padding: { x: 4, y: 2 }\n"
        "});\n"
        "this.notice.setOrigin(0.5, 0.5).setVisible(false);\n"
        'main.events.on("ui:notice", (msg) => {\n'
        "  this.notice.setText(msg);\n"
        "  this.notice.setVisible(true);\n"
        "  this.time.delayedCall(2000, () => this.notice.setVisible(false));\n"
        "});\n"
        "```"
    ),
    hints=[
        (
            "You should add a `notice` text element at `(160, 24)` in UIScene.",
            r"this\.notice\s*=\s*this\.add\.text\(\s*160\s*,\s*24\s*,",
        ),
        (
            "You should listen for `\"ui:notice\"` events from MainScene.",
            r'main\.events\.on\(\s*["\']ui:notice["\']',
        ),
        (
            "You should hide the notice after 2000 ms with `this.time.delayedCall`.",
            r"this\.time\.delayedCall\(\s*2000\s*,",
        ),
    ],
    seed_text=seed_insert(solutions[17], UI_DIALOGUE_CREATE),
    mutate=lambda: state.insert_after(UI_DIALOGUE_CREATE, NOTICE_LISTENER_INIT),
)

# ---------------------------------------------------------------------------
# Step 19: inventory + key item + overlap pickup.
# ---------------------------------------------------------------------------

step(
    19,
    title="Step 19",
    description=(
        "Time to populate the dungeon with collectibles. Initialize an "
        "inventory `Set`, read the `key` object from the map, render it as a "
        "small yellow square with a static body, and on overlap with the "
        "player destroy it, add `\"bronze_key\"` to inventory, and emit a "
        "notice.\n\nAfter `LAUNCH_UI` (the `this.scene.launch(\"UIScene\")` "
        "line) in `MainScene.create`:\n\n"
        "```js\n"
        "this.inventory = new Set();\n"
        'const keyObj = map.findObject("objects", (o) => o.type === "key");\n'
        "this.keyItem = this.add.rectangle(\n  keyObj.x + 8,\n  keyObj.y + 8,\n  8,\n  8,\n  0xffe066\n);\n"
        "this.physics.add.existing(this.keyItem, true);\n"
        "this.keyItem.setDepth(15);\n"
        "this.physics.add.overlap(this.player, this.keyItem, () => {\n"
        "  if (!this.keyItem.active) return;\n"
        "  this.keyItem.destroy();\n"
        '  this.inventory.add("bronze_key");\n'
        '  this.events.emit("ui:notice", "Bronze Key obtained");\n'
        "});\n"
        "```"
    ),
    hints=[
        (
            "You should initialize `this.inventory` as a new Set.",
            r"this\.inventory\s*=\s*new\s+Set\(\s*\)",
        ),
        (
            "You should read the key object from the `\"objects\"` layer.",
            r'const\s+keyObj\s*=\s*map\.findObject\(\s*["\']objects["\']\s*,\s*\(\s*\w+\s*\)\s*=>\s*\w+\.type\s*===\s*["\']key["\']\s*\)',
        ),
        (
            "You should render the key item as an 8×8 yellow rectangle.",
            r"this\.keyItem\s*=\s*this\.add\.rectangle\(\s*keyObj\.x\s*\+\s*8\s*,\s*keyObj\.y\s*\+\s*8\s*,\s*8\s*,\s*8\s*,\s*0xffe066\s*\)",
        ),
        (
            "You should add an overlap between the player and the key that destroys the key and adds `\"bronze_key\"` to inventory.",
            r'physics\.add\.overlap\(\s*this\.player\s*,\s*this\.keyItem[\s\S]*this\.keyItem\.destroy\(\s*\)[\s\S]*this\.inventory\.add\(\s*["\']bronze_key["\']\s*\)',
        ),
    ],
    seed_text=seed_insert(solutions[18], LAUNCH_UI),
    mutate=lambda: state.insert_after(LAUNCH_UI, KEY_BLOCK),
)

# ---------------------------------------------------------------------------
# Step 20: locked door read.
# ---------------------------------------------------------------------------

step(
    20,
    title="Step 20",
    description=(
        "Read the locked-door object. The map has multiple `door` objects, "
        "but exactly one carries a `locked: true` custom property — that's "
        "the bronze door. Use `findObject` with a property scan, then store "
        "the object plus its `tx`/`ty` (the wall tile it blocks).\n\n"
        "After the key block in `MainScene.create`:\n\n"
        "```js\n"
        'const lockedDoor = map.findObject("objects", (o) => {\n'
        '  if (o.type !== "door" || !o.properties) return false;\n'
        '  return o.properties.some((p) => p.name === "locked" && p.value === true);\n'
        "});\n"
        "this.lockedDoor = lockedDoor;\n"
        'this.lockedDoorTx = lockedDoor.properties.find((p) => p.name === "tx").value;\n'
        'this.lockedDoorTy = lockedDoor.properties.find((p) => p.name === "ty").value;\n'
        "this.lastDoorAt = 0;\n"
        "```\n\n`lastDoorAt` is the cooldown timestamp the next step will use."
    ),
    hints=[
        (
            "You should call `map.findObject` with a predicate that filters for a `door` whose `locked` property is `true`.",
            r'map\.findObject\(\s*["\']objects["\']\s*,\s*\([\s\S]*?o\.type\s*!==\s*["\']door["\']\s*\|\|\s*!\s*o\.properties[\s\S]*?o\.properties\.some\(\s*\(\s*\w+\s*\)\s*=>\s*\w+\.name\s*===\s*["\']locked["\']\s*&&\s*\w+\.value\s*===\s*true\s*\)',
        ),
        (
            "You should store the locked door object on `this.lockedDoor`.",
            r"this\.lockedDoor\s*=\s*lockedDoor",
        ),
        (
            "You should read the `tx` and `ty` properties off the locked door.",
            r'this\.lockedDoorTx\s*=\s*lockedDoor\.properties\.find\([\s\S]*?p\.name\s*===\s*["\']tx["\'][\s\S]*?\.value[\s\S]*this\.lockedDoorTy\s*=\s*lockedDoor\.properties\.find\([\s\S]*?p\.name\s*===\s*["\']ty["\'][\s\S]*?\.value',
        ),
        (
            "You should initialize `this.lastDoorAt` to `0`.",
            r"this\.lastDoorAt\s*=\s*0",
        ),
    ],
    seed_text=seed_insert(solutions[19], KEY_BLOCK),
    mutate=lambda: state.insert_after(KEY_BLOCK, LOCKED_DOOR_BLOCK),
)

# ---------------------------------------------------------------------------
# Step 21: locked door update interaction.
# ---------------------------------------------------------------------------

step(
    21,
    title="Step 21",
    description=(
        "Now wire up the locked-door interaction. When the player is within "
        "24 pixels of the door, presses `E`, and the cooldown has elapsed: if "
        "they have the bronze key, remove the wall tile at `(tx, ty)` and "
        "show \"Bronze door unlocks\"; otherwise show \"It is locked. You "
        "need a bronze key.\".\n\nIn `MainScene.update`, after the NPC talk "
        "block:\n\n"
        "```js\n"
        "const distToDoor = Phaser.Math.Distance.Between(\n"
        "  this.player.x,\n  this.player.y,\n  this.lockedDoor.x + 8,\n  this.lockedDoor.y + 8\n);\n"
        "if (\n"
        "  distToDoor < 24 &&\n"
        "  Phaser.Input.Keyboard.JustDown(this.eKey) &&\n"
        "  time > this.lastDoorAt + 500\n"
        ") {\n"
        "  this.lastDoorAt = time;\n"
        '  if (this.inventory.has("bronze_key")) {\n'
        "    this.walls.removeTileAt(this.lockedDoorTx, this.lockedDoorTy);\n"
        '    this.events.emit("ui:notice", "Bronze door unlocks");\n'
        '    this.flags.add("door-unlocked");\n'
        "  } else {\n"
        '    this.events.emit("ui:notice", "It is locked. You need a bronze key.");\n'
        "  }\n"
        "}\n"
        "```"
    ),
    hints=[
        (
            "You should compute `distToDoor` between the player and the locked door's centre.",
            r"const\s+distToDoor\s*=\s*Phaser\.Math\.Distance\.Between\(\s*this\.player\.x\s*,\s*this\.player\.y\s*,\s*this\.lockedDoor\.x\s*\+\s*8\s*,\s*this\.lockedDoor\.y\s*\+\s*8\s*\)",
        ),
        (
            "You should require proximity, `JustDown(this.eKey)`, and a 500 ms `lastDoorAt` cooldown.",
            r"distToDoor\s*<\s*24[\s\S]*Phaser\.Input\.Keyboard\.JustDown\(\s*this\.eKey\s*\)[\s\S]*time\s*>\s*this\.lastDoorAt\s*\+\s*500",
        ),
        (
            "On unlock, you should call `this.walls.removeTileAt(this.lockedDoorTx, this.lockedDoorTy)`.",
            r"this\.walls\.removeTileAt\(\s*this\.lockedDoorTx\s*,\s*this\.lockedDoorTy\s*\)",
        ),
        (
            "On unlock, you should mark the `\"door-unlocked\"` flag.",
            r'this\.flags\.add\(\s*["\']door-unlocked["\']\s*\)',
        ),
        (
            "Without the key, you should emit a notice that says \"You need a bronze key.\".",
            r'this\.events\.emit\(\s*["\']ui:notice["\']\s*,\s*["\']It is locked\. You need a bronze key\.["\']\s*\)',
        ),
    ],
    seed_text=seed_insert(solutions[20], NPC_TALK_UPDATE),
    mutate=lambda: state.insert_after(NPC_TALK_UPDATE, LOCKED_DOOR_UPDATE),
)

# ---------------------------------------------------------------------------
# Step 22: score init + chest object.
# ---------------------------------------------------------------------------

step(
    22,
    title="Step 22",
    description=(
        "The chest is a sprite from the tileset (frame `27` is the closed "
        "chest, frame `28` is open). Initialize the score, read the chest "
        "object, and render it.\n\nAfter the locked-door block in "
        "`MainScene.create`:\n\n"
        "```js\n"
        "this.score = 0;\n"
        'const chestObj = map.findObject("objects", (o) => o.type === "chest");\n'
        "this.chest = this.add\n"
        '  .sprite(chestObj.x + 8, chestObj.y + 8, "tiles", 27)\n'
        "  .setDepth(15);\n"
        "this.chestOpened = false;\n"
        "```"
    ),
    hints=[
        (
            "You should initialize `this.score` to `0`.",
            r"this\.score\s*=\s*0",
        ),
        (
            "You should read the chest object from the `\"objects\"` layer.",
            r'const\s+chestObj\s*=\s*map\.findObject\(\s*["\']objects["\']\s*,\s*\(\s*\w+\s*\)\s*=>\s*\w+\.type\s*===\s*["\']chest["\']\s*\)',
        ),
        (
            "You should render the chest as a sprite using frame `27` of the `\"tiles\"` image.",
            r'this\.chest\s*=\s*this\.add\s*\.sprite\(\s*chestObj\.x\s*\+\s*8\s*,\s*chestObj\.y\s*\+\s*8\s*,\s*["\']tiles["\']\s*,\s*27\s*\)',
        ),
        (
            "You should track `this.chestOpened = false`.",
            r"this\.chestOpened\s*=\s*false",
        ),
    ],
    seed_text=seed_insert(solutions[21], LOCKED_DOOR_BLOCK),
    mutate=lambda: state.insert_after(
        LOCKED_DOOR_BLOCK, SCORE_INIT + CHEST_BLOCK
    ),
)

# ---------------------------------------------------------------------------
# Step 23: chest update interaction.
# ---------------------------------------------------------------------------

step(
    23,
    title="Step 23",
    description=(
        "Open the chest on `E` press when the player is close. Switch to the "
        "open frame, mark `chestOpened`, add 50 gold, and emit a notice.\n\n"
        "In `MainScene.update`, after the locked-door block:\n\n"
        "```js\n"
        "const distToChest = Phaser.Math.Distance.Between(\n"
        "  this.player.x,\n  this.player.y,\n  this.chest.x,\n  this.chest.y\n);\n"
        "if (\n"
        "  distToChest < 24 &&\n"
        "  Phaser.Input.Keyboard.JustDown(this.eKey) &&\n"
        "  !this.chestOpened\n"
        ") {\n"
        "  this.chestOpened = true;\n"
        "  this.chest.setFrame(28);\n"
        "  this.score += 50;\n"
        '  this.events.emit("ui:score", this.score);\n'
        '  this.events.emit("ui:notice", "Chest opens. +50 gold");\n'
        "}\n"
        "```"
    ),
    hints=[
        (
            "You should compute `distToChest` between the player and the chest.",
            r"const\s+distToChest\s*=\s*Phaser\.Math\.Distance\.Between\(\s*this\.player\.x\s*,\s*this\.player\.y\s*,\s*this\.chest\.x\s*,\s*this\.chest\.y\s*\)",
        ),
        (
            "You should require proximity, `JustDown(this.eKey)`, and `!this.chestOpened`.",
            r"distToChest\s*<\s*24[\s\S]*Phaser\.Input\.Keyboard\.JustDown\(\s*this\.eKey\s*\)[\s\S]*!\s*this\.chestOpened",
        ),
        (
            "You should switch to frame `28` and add 50 to score.",
            r"this\.chest\.setFrame\(\s*28\s*\)[\s\S]*this\.score\s*\+=\s*50",
        ),
        (
            "You should emit `\"ui:score\"` with the new score.",
            r'this\.events\.emit\(\s*["\']ui:score["\']\s*,\s*this\.score\s*\)',
        ),
    ],
    seed_text=seed_insert(solutions[22], LOCKED_DOOR_UPDATE),
    mutate=lambda: state.insert_after(LOCKED_DOOR_UPDATE, CHEST_UPDATE),
)

# ---------------------------------------------------------------------------
# Step 24: save point object + render.
# ---------------------------------------------------------------------------

step(
    24,
    title="Step 24",
    description=(
        "Add a save point. Read the `save` object and render it as a small "
        "yellow square in the SW room.\n\nAfter the chest block in "
        "`MainScene.create`:\n\n"
        "```js\n"
        'const saveObj = map.findObject("objects", (o) => o.type === "save");\n'
        "this.savePoint = this.add.rectangle(\n  saveObj.x + 8,\n  saveObj.y + 8,\n  12,\n  12,\n  0xffff66\n);\n"
        "this.savePoint.setDepth(15);\n"
        "```"
    ),
    hints=[
        (
            "You should read the save object from the `\"objects\"` layer.",
            r'const\s+saveObj\s*=\s*map\.findObject\(\s*["\']objects["\']\s*,\s*\(\s*\w+\s*\)\s*=>\s*\w+\.type\s*===\s*["\']save["\']\s*\)',
        ),
        (
            "You should render the save point as a 12×12 rectangle with colour `0xffff66`.",
            r"this\.savePoint\s*=\s*this\.add\.rectangle\(\s*saveObj\.x\s*\+\s*8\s*,\s*saveObj\.y\s*\+\s*8\s*,\s*12\s*,\s*12\s*,\s*0xffff66\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[23], SCORE_INIT + CHEST_BLOCK),
    mutate=lambda: state.insert_after(
        SCORE_INIT + CHEST_BLOCK, SAVE_BLOCK
    ),
)

# ---------------------------------------------------------------------------
# Step 25: declare saveGame + loadGame closures in MainScene.create.
# ---------------------------------------------------------------------------

step(
    25,
    title="Step 25",
    description=(
        "Persistence. Define `saveGame` and `loadGame` as instance closures "
        "on the scene, right after the save point block. Closures (rather "
        "than class methods) keep the entire save/load implementation in one "
        "editable region — and reading `this.x` from inside a closure is "
        "exactly the same as from a method.\n\n"
        "After the save point block in `MainScene.create`:\n\n"
        "```js\n"
        "this.saveGame = () => {\n"
        "  const save = {\n"
        "    x: this.player.x,\n    y: this.player.y,\n    hp: this.hp,\n    score: this.score,\n    inventory: Array.from(this.inventory),\n    flags: Array.from(this.flags),\n    chestOpened: this.chestOpened\n  };\n"
        "  localStorage.setItem(\n"
        '    "phaser-dungeon-explorer-save",\n'
        "    JSON.stringify(save)\n"
        "  );\n"
        "};\n"
        "this.loadGame = () => {\n"
        '  const raw = localStorage.getItem("phaser-dungeon-explorer-save");\n'
        "  if (!raw) return;\n"
        "  try {\n"
        "    const save = JSON.parse(raw);\n"
        "    this.player.x = save.x;\n"
        "    this.player.y = save.y;\n"
        "    this.hp = save.hp;\n"
        "    this.score = save.score;\n"
        "    this.inventory = new Set(save.inventory);\n"
        "    this.flags = new Set(save.flags);\n"
        "    if (save.chestOpened) {\n"
        "      this.chestOpened = true;\n"
        "      this.chest.setFrame(28);\n"
        "    }\n"
        "  } catch (e) {\n"
        "    return;\n"
        "  }\n"
        "};\n"
        "```\n\n`save.hp` will be `undefined` until the next steps initialize "
        "HP — `JSON.stringify` skips undefined values, so this is safe."
    ),
    hints=[
        (
            "You should assign `this.saveGame` to an arrow function.",
            r"this\.saveGame\s*=\s*\(\s*\)\s*=>\s*\{",
        ),
        (
            "`saveGame` should serialise inventory and flags to arrays.",
            r"inventory:\s*Array\.from\(\s*this\.inventory\s*\)[\s\S]*flags:\s*Array\.from\(\s*this\.flags\s*\)",
        ),
        (
            "`saveGame` should call `localStorage.setItem(\"phaser-dungeon-explorer-save\", ...)`.",
            r'localStorage\.setItem\(\s*["\']phaser-dungeon-explorer-save["\']\s*,\s*JSON\.stringify\(\s*save\s*\)\s*\)',
        ),
        (
            "You should assign `this.loadGame` to an arrow function.",
            r"this\.loadGame\s*=\s*\(\s*\)\s*=>\s*\{",
        ),
        (
            "`loadGame` should read `\"phaser-dungeon-explorer-save\"` and return early if missing.",
            r'localStorage\.getItem\(\s*["\']phaser-dungeon-explorer-save["\']\s*\)[\s\S]*?if\s*\(\s*!\s*raw\s*\)\s*return',
        ),
        (
            "`loadGame` should restore position, inventory, and flags.",
            r"this\.player\.x\s*=\s*save\.x[\s\S]*this\.player\.y\s*=\s*save\.y[\s\S]*this\.inventory\s*=\s*new\s+Set\(\s*save\.inventory\s*\)[\s\S]*this\.flags\s*=\s*new\s+Set\(\s*save\.flags\s*\)",
        ),
        (
            "If `save.chestOpened` is true, you should set the chest's frame to 28.",
            r"if\s*\(\s*save\.chestOpened\s*\)\s*\{\s*this\.chestOpened\s*=\s*true[\s\S]*?this\.chest\.setFrame\(\s*28\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[24], SAVE_BLOCK),
    mutate=lambda: state.insert_after(SAVE_BLOCK, SAVE_METHOD + LOAD_METHOD),
)

# ---------------------------------------------------------------------------
# Step 26: save update interaction (calls this.saveGame()).
# ---------------------------------------------------------------------------

step(
    26,
    title="Step 26",
    description=(
        "Hook up the save trigger. When the player stands on the save point "
        "and presses `E`, call `this.saveGame()` and show a notice.\n\n"
        "In `MainScene.update`, after the chest block:\n\n"
        "```js\n"
        "const distToSave = Phaser.Math.Distance.Between(\n"
        "  this.player.x,\n  this.player.y,\n  this.savePoint.x,\n  this.savePoint.y\n);\n"
        "if (\n"
        "  distToSave < 24 &&\n"
        "  Phaser.Input.Keyboard.JustDown(this.eKey)\n"
        ") {\n"
        "  this.saveGame();\n"
        '  this.events.emit("ui:notice", "Game saved");\n'
        "}\n"
        "```"
    ),
    hints=[
        (
            "You should compute `distToSave` between the player and the save point.",
            r"const\s+distToSave\s*=\s*Phaser\.Math\.Distance\.Between\(\s*this\.player\.x\s*,\s*this\.player\.y\s*,\s*this\.savePoint\.x\s*,\s*this\.savePoint\.y\s*\)",
        ),
        (
            "On overlap+E, you should call `this.saveGame()` and emit a `\"Game saved\"` notice.",
            r"this\.saveGame\(\s*\)[\s\S]*this\.events\.emit\(\s*[\"']ui:notice[\"']\s*,\s*[\"']Game saved[\"']\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[25], CHEST_UPDATE),
    mutate=lambda: state.insert_after(CHEST_UPDATE, SAVE_UPDATE),
)

# ---------------------------------------------------------------------------
# Step 27: loadGame call in create.
# ---------------------------------------------------------------------------

step(
    27,
    title="Step 27",
    description=(
        "Restore on scene start. After the save/load closures in "
        "`MainScene.create`, call `this.loadGame()`. If a save exists, the "
        "player teleports to where they were; otherwise it's a no-op.\n\n"
        "```js\n"
        "this.loadGame();\n"
        "```"
    ),
    hints=[
        (
            "You should call `this.loadGame()` from `MainScene.create`.",
            r"this\.loadGame\(\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[26], SAVE_METHOD + LOAD_METHOD),
    mutate=lambda: state.insert_after(SAVE_METHOD + LOAD_METHOD, LOAD_CALL),
)

# ---------------------------------------------------------------------------
# Step 28: slime read + render + collider with walls.
# ---------------------------------------------------------------------------

step(
    28,
    title="Step 28",
    description=(
        "Read the slime object from the SE room, render it as a green "
        "rectangle, give it an arcade body, and collide it with walls so it "
        "can't phase through stone.\n\nAfter the loadGame call in "
        "`MainScene.create`:\n\n"
        "```js\n"
        'const slimeObj = map.findObject("objects", (o) => o.type === "slime");\n'
        "this.slime = this.add.rectangle(\n"
        "  slimeObj.x,\n  slimeObj.y,\n  14,\n  12,\n  0x88ee66\n);\n"
        "this.physics.add.existing(this.slime);\n"
        "this.slime.body.setCollideWorldBounds(true);\n"
        "this.slime.setDepth(18);\n"
        "this.physics.add.collider(this.slime, walls);\n"
        "```\n\nThe slime starts at the polyline's origin. Patrol logic comes "
        "in the next two steps."
    ),
    hints=[
        (
            "You should read the slime object from the `\"objects\"` layer.",
            r'const\s+slimeObj\s*=\s*map\.findObject\(\s*["\']objects["\']\s*,\s*\(\s*\w+\s*\)\s*=>\s*\w+\.type\s*===\s*["\']slime["\']\s*\)',
        ),
        (
            "You should render the slime as a 14×12 green rectangle (`0x88ee66`).",
            r"this\.slime\s*=\s*this\.add\.rectangle\(\s*slimeObj\.x\s*,\s*slimeObj\.y\s*,\s*14\s*,\s*12\s*,\s*0x88ee66\s*\)",
        ),
        (
            "You should give the slime a dynamic arcade body and lock it to world bounds.",
            r"this\.physics\.add\.existing\(\s*this\.slime\s*\)[\s\S]*this\.slime\.body\.setCollideWorldBounds\(\s*true\s*\)",
        ),
        (
            "You should collide the slime with the walls layer.",
            r"this\.physics\.add\.collider\(\s*this\.slime\s*,\s*walls\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[27], LOAD_CALL),
    mutate=lambda: state.insert_after(LOAD_CALL, SLIME_BLOCK),
)

# ---------------------------------------------------------------------------
# Step 29: slime patrol setup (poly + target index + hp).
# ---------------------------------------------------------------------------

step(
    29,
    title="Step 29",
    description=(
        "The map's slime object carries a `polyline` array of "
        "`{x, y}` waypoints (relative to the object's origin). Convert them "
        "to world-space coordinates, set the initial target to the next "
        "waypoint, and give the slime two hit points.\n\nAfter the slime "
        "block:\n\n"
        "```js\n"
        "this.slimePoly = slimeObj.polyline.map((p) => ({\n"
        "  x: slimeObj.x + p.x,\n  y: slimeObj.y + p.y\n}));\n"
        "this.slimeTarget = 1;\n"
        "this.slimeHp = 2;\n"
        "```"
    ),
    hints=[
        (
            "You should map the polyline points to world-space and store on `this.slimePoly`.",
            r"this\.slimePoly\s*=\s*slimeObj\.polyline\.map\(\s*\(\s*\w+\s*\)\s*=>\s*\(?\s*\{\s*x:\s*slimeObj\.x\s*\+\s*\w+\.x\s*,\s*y:\s*slimeObj\.y\s*\+\s*\w+\.y\s*\}\s*\)?\s*\)",
        ),
        (
            "You should set `this.slimeTarget = 1` (next waypoint) and `this.slimeHp = 2`.",
            r"this\.slimeTarget\s*=\s*1[\s\S]*this\.slimeHp\s*=\s*2",
        ),
    ],
    seed_text=seed_insert(solutions[28], SLIME_BLOCK),
    mutate=lambda: state.insert_after(SLIME_BLOCK, SLIME_PATROL_INIT),
)

# ---------------------------------------------------------------------------
# Step 30: slime patrol update (move toward target waypoint).
# ---------------------------------------------------------------------------

step(
    30,
    title="Step 30",
    description=(
        "Each frame, point the slime toward the current waypoint. When it's "
        "within 4 pixels, advance to the next waypoint (wrapping around the "
        "polyline). Otherwise drive its velocity along the unit vector at "
        "speed 30.\n\nIn `MainScene.update`, after the save block:\n\n"
        "```js\n"
        "if (this.slime.active && this.slimeHp > 0) {\n"
        "  const target = this.slimePoly[this.slimeTarget];\n"
        "  const dx = target.x - this.slime.x;\n"
        "  const dy = target.y - this.slime.y;\n"
        "  const d = Math.hypot(dx, dy);\n"
        "  if (d < 4) {\n"
        "    this.slimeTarget = (this.slimeTarget + 1) % this.slimePoly.length;\n"
        "  } else {\n"
        "    const sp = 30;\n"
        "    this.slime.body.setVelocity((dx / d) * sp, (dy / d) * sp);\n"
        "  }\n"
        "}\n"
        "```"
    ),
    hints=[
        (
            "You should guard on `this.slime.active && this.slimeHp > 0`.",
            r"this\.slime\.active\s*&&\s*this\.slimeHp\s*>\s*0",
        ),
        (
            "You should compute `dx`, `dy`, and `d = Math.hypot(dx, dy)`.",
            r"const\s+dx\s*=\s*target\.x\s*-\s*this\.slime\.x[\s\S]*const\s+dy\s*=\s*target\.y\s*-\s*this\.slime\.y[\s\S]*const\s+d\s*=\s*Math\.hypot\(\s*dx\s*,\s*dy\s*\)",
        ),
        (
            "When within 4 pixels, you should advance `this.slimeTarget` by `(idx + 1) % length`.",
            r"this\.slimeTarget\s*=\s*\(\s*this\.slimeTarget\s*\+\s*1\s*\)\s*%\s*this\.slimePoly\.length",
        ),
        (
            "Otherwise you should drive the slime's body velocity along `(dx/d, dy/d)` scaled by speed `30`.",
            r"this\.slime\.body\.setVelocity\(\s*\(\s*dx\s*/\s*d\s*\)\s*\*\s*sp\s*,\s*\(\s*dy\s*/\s*d\s*\)\s*\*\s*sp\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[29], SAVE_UPDATE),
    mutate=lambda: state.insert_after(SAVE_UPDATE, SLIME_PATROL_UPDATE),
)

# ---------------------------------------------------------------------------
# Step 31: HP init (hp, maxHp, iframesUntil).
# ---------------------------------------------------------------------------

step(
    31,
    title="Step 31",
    description=(
        "Before the slime can hurt the player, give the player some HP and a "
        "place to track invincibility frames.\n\nAfter the slime patrol "
        "init:\n\n"
        "```js\n"
        "this.hp = 3;\n"
        "this.maxHp = 3;\n"
        "this.iframesUntil = 0;\n"
        "```"
    ),
    hints=[
        (
            "You should initialize `this.hp = 3`, `this.maxHp = 3`, `this.iframesUntil = 0`.",
            r"this\.hp\s*=\s*3[\s\S]*this\.maxHp\s*=\s*3[\s\S]*this\.iframesUntil\s*=\s*0",
        ),
    ],
    seed_text=seed_insert(solutions[30], SLIME_PATROL_INIT),
    mutate=lambda: state.insert_after(SLIME_PATROL_INIT, HP_INIT),
)

# ---------------------------------------------------------------------------
# Step 32: slime damage overlap (with i-frames).
# ---------------------------------------------------------------------------

step(
    32,
    title="Step 32",
    description=(
        "Add an overlap callback between the player and the slime. On contact, "
        "respect the i-frame window — if the player took damage in the last "
        "800 ms, ignore the overlap. Otherwise decrement HP, set the next "
        "i-frame deadline, emit the new HP to the UI, and shake the camera.\n\n"
        "After the HP init:\n\n"
        "```js\n"
        "this.physics.add.overlap(this.player, this.slime, () => {\n"
        "  if (this.time.now < this.iframesUntil || !this.slime.active) return;\n"
        "  this.iframesUntil = this.time.now + 800;\n"
        "  this.hp = Math.max(0, this.hp - 1);\n"
        '  this.events.emit("ui:hp", this.hp);\n'
        "  this.cameras.main.shake(150, 0.005);\n"
        "});\n"
        "```"
    ),
    hints=[
        (
            "You should add an overlap between the player and the slime.",
            r"this\.physics\.add\.overlap\(\s*this\.player\s*,\s*this\.slime\s*,",
        ),
        (
            "The overlap callback should bail when `this.time.now < this.iframesUntil` or the slime is inactive.",
            r"this\.time\.now\s*<\s*this\.iframesUntil\s*\|\|\s*!\s*this\.slime\.active",
        ),
        (
            "On a successful hit, you should set `this.iframesUntil = this.time.now + 800`.",
            r"this\.iframesUntil\s*=\s*this\.time\.now\s*\+\s*800",
        ),
        (
            "You should decrement HP using `Math.max(0, this.hp - 1)` and emit `\"ui:hp\"`.",
            r"this\.hp\s*=\s*Math\.max\(\s*0\s*,\s*this\.hp\s*-\s*1\s*\)[\s\S]*this\.events\.emit\(\s*[\"']ui:hp[\"']",
        ),
        (
            "You should shake the camera with `cameras.main.shake(150, 0.005)`.",
            r"this\.cameras\.main\.shake\(\s*150\s*,\s*0\.005\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[31], HP_INIT),
    mutate=lambda: state.insert_after(HP_INIT, SLIME_DAMAGE_OVERLAP),
)

# ---------------------------------------------------------------------------
# Step 33: UIScene HP bar + drawHp closure.
# ---------------------------------------------------------------------------

step(
    33,
    title="Step 33",
    description=(
        "On the UI side, add an HP bar — a graphics rectangle that redraws "
        "whenever MainScene emits `\"ui:hp\"`. Define the redraw as a closure "
        "(`this.drawHp`) so it stays in one editable region.\n\nAfter the "
        "notice listener in `UIScene.create`:\n\n"
        "```js\n"
        "this.hpBar = this.add.graphics();\n"
        "this.hpBar.setScrollFactor(0).setDepth(60);\n"
        "this.drawHp = (hp) => {\n"
        "  this.hpBar.clear();\n"
        "  this.hpBar.fillStyle(0x222222, 1).fillRect(8, 8, 60, 8);\n"
        "  this.hpBar.fillStyle(0xff5566, 1).fillRect(8, 8, (hp / 3) * 60, 8);\n"
        "  this.hpBar.lineStyle(1, 0xffffff, 1).strokeRect(8, 8, 60, 8);\n"
        "};\n"
        "this.drawHp(3);\n"
        'main.events.on("ui:hp", (hp) => this.drawHp(hp));\n'
        "```"
    ),
    hints=[
        (
            "You should add a `this.hpBar` graphics object pinned to the camera with `setScrollFactor(0)`.",
            r"this\.hpBar\s*=\s*this\.add\.graphics\(\s*\)[\s\S]*this\.hpBar\.setScrollFactor\(\s*0\s*\)",
        ),
        (
            "You should assign `this.drawHp` to an arrow function that fills a 60×8 bar at `(8, 8)`.",
            r"this\.drawHp\s*=\s*\(\s*\w+\s*\)\s*=>\s*\{[\s\S]*?fillRect\(\s*8\s*,\s*8\s*,\s*60\s*,\s*8\s*\)",
        ),
        (
            "`drawHp` should fill the foreground bar proportional to `hp / 3`.",
            r"fillRect\(\s*8\s*,\s*8\s*,\s*\(\s*hp\s*/\s*3\s*\)\s*\*\s*60\s*,\s*8\s*\)",
        ),
        (
            "You should subscribe to `\"ui:hp\"` and call `drawHp` with the new HP.",
            r'main\.events\.on\(\s*["\']ui:hp["\']\s*,\s*\(\s*hp\s*\)\s*=>\s*this\.drawHp\(\s*hp\s*\)\s*\)',
        ),
    ],
    seed_text=seed_insert(solutions[32], NOTICE_LISTENER_INIT),
    mutate=lambda: state.insert_after(NOTICE_LISTENER_INIT, HP_UI_BLOCK),
)

# ---------------------------------------------------------------------------
# Step 34: SPACE key + swing rect init.
# ---------------------------------------------------------------------------

step(
    34,
    title="Step 34",
    description=(
        "Combat. Bind the spacebar, track the last attack timestamp, and add "
        "a small white \"swing\" rectangle that's invisible until an attack "
        "fires.\n\nAfter the slime damage overlap in `MainScene.create`:\n\n"
        "```js\n"
        'this.spaceKey = this.input.keyboard.addKey("SPACE");\n'
        "this.lastAttackAt = 0;\n"
        "this.swing = this.add\n"
        "  .rectangle(0, 0, 16, 16, 0xffffff, 0.6)\n"
        "  .setDepth(25)\n"
        "  .setVisible(false);\n"
        "```"
    ),
    hints=[
        (
            "You should bind `this.spaceKey` to the SPACE key.",
            r'this\.spaceKey\s*=\s*this\.input\.keyboard\.addKey\(\s*["\']SPACE["\']\s*\)',
        ),
        (
            "You should initialize `this.lastAttackAt = 0`.",
            r"this\.lastAttackAt\s*=\s*0",
        ),
        (
            "You should add a 16×16 white `this.swing` rectangle, hidden by default.",
            r"this\.swing\s*=\s*this\.add\s*\.rectangle\(\s*0\s*,\s*0\s*,\s*16\s*,\s*16\s*,\s*0xffffff\s*,\s*0\.6\s*\)[\s\S]*\.setVisible\(\s*false\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[33], SLIME_DAMAGE_OVERLAP),
    mutate=lambda: state.insert_after(SLIME_DAMAGE_OVERLAP, ATTACK_INIT),
)

# ---------------------------------------------------------------------------
# Step 35: attack update — swing + slime damage + knockback + defeat.
# ---------------------------------------------------------------------------

step(
    35,
    title="Step 35",
    description=(
        "On `SPACE`, throw the swing rectangle 14 px in front of the player "
        "(based on `this.facing`), tween it out, and if the slime is within "
        "14 px of the swing position: damage it, knock it back along the "
        "facing vector, shake the camera, and on death drop 30 gold and "
        "destroy the slime.\n\nIn `MainScene.update`, after the slime "
        "patrol block:\n\n"
        "```js\n"
        "if (\n"
        "  Phaser.Input.Keyboard.JustDown(this.spaceKey) &&\n"
        "  time > this.lastAttackAt + 350\n"
        ") {\n"
        "  this.lastAttackAt = time;\n"
        "  const ax = this.player.x + this.facing.x * 14;\n"
        "  const ay = this.player.y + this.facing.y * 14;\n"
        "  this.swing.setPosition(ax, ay).setVisible(true).setAlpha(0.6);\n"
        "  this.tweens.add({\n"
        "    targets: this.swing,\n"
        "    alpha: { from: 0.6, to: 0 },\n"
        "    duration: 200,\n"
        "    onComplete: () => this.swing.setVisible(false)\n"
        "  });\n"
        "  if (\n"
        "    this.slime.active &&\n"
        "    Phaser.Math.Distance.Between(ax, ay, this.slime.x, this.slime.y) < 14\n"
        "  ) {\n"
        "    this.slimeHp--;\n"
        "    this.slime.body.setVelocity(\n"
        "      this.facing.x * 200,\n"
        "      this.facing.y * 200\n"
        "    );\n"
        "    this.cameras.main.shake(80, 0.003);\n"
        "    if (this.slimeHp <= 0) {\n"
        "      this.slime.destroy();\n"
        "      this.score += 30;\n"
        '      this.events.emit("ui:score", this.score);\n'
        '      this.events.emit("ui:notice", "Slime defeated. +30 gold");\n'
        "    }\n"
        "  }\n"
        "}\n"
        "```"
    ),
    hints=[
        (
            "You should fire on `JustDown(this.spaceKey)` with a 350 ms cooldown.",
            r"Phaser\.Input\.Keyboard\.JustDown\(\s*this\.spaceKey\s*\)\s*&&\s*time\s*>\s*this\.lastAttackAt\s*\+\s*350",
        ),
        (
            "You should compute `ax`/`ay` 14 px in front of the player along `this.facing`.",
            r"const\s+ax\s*=\s*this\.player\.x\s*\+\s*this\.facing\.x\s*\*\s*14[\s\S]*const\s+ay\s*=\s*this\.player\.y\s*\+\s*this\.facing\.y\s*\*\s*14",
        ),
        (
            "You should fade the swing rectangle out with a tween.",
            r"this\.tweens\.add\(\s*\{\s*targets:\s*this\.swing[\s\S]*alpha:\s*\{\s*from:\s*0\.6\s*,\s*to:\s*0\s*\}",
        ),
        (
            "You should hit the slime when within 14 px of the swing position.",
            r"Phaser\.Math\.Distance\.Between\(\s*ax\s*,\s*ay\s*,\s*this\.slime\.x\s*,\s*this\.slime\.y\s*\)\s*<\s*14",
        ),
        (
            "You should knock the slime back along the facing vector at speed 200.",
            r"this\.slime\.body\.setVelocity\(\s*this\.facing\.x\s*\*\s*200\s*,\s*this\.facing\.y\s*\*\s*200\s*\)",
        ),
        (
            "On `slimeHp <= 0` you should destroy the slime and add 30 to score.",
            r"this\.slimeHp\s*<=\s*0[\s\S]*this\.slime\.destroy\(\s*\)[\s\S]*this\.score\s*\+=\s*30",
        ),
    ],
    seed_text=seed_insert(solutions[34], SLIME_PATROL_UPDATE),
    mutate=lambda: state.insert_after(SLIME_PATROL_UPDATE, ATTACK_UPDATE),
)

# ---------------------------------------------------------------------------
# Step 36: goal object read + overlap → fade + emit ui:victory.
# ---------------------------------------------------------------------------

step(
    36,
    title="Step 36",
    description=(
        "Read the `goal` object (the stairs up out of the dungeon). Render it "
        "as a sprite using frame `31` of the tileset, give it a static body, "
        "and on overlap with the player set the `victory` flag, emit "
        "`\"ui:victory\"`, and fade the camera to black. The flag guard "
        "ensures the overlap fires exactly once.\n\nAfter the attack init in "
        "`MainScene.create`:\n\n"
        "```js\n"
        'const goalObj = map.findObject("objects", (o) => o.type === "goal");\n'
        "this.goal = this.add\n"
        '  .sprite(goalObj.x + 8, goalObj.y + 8, "tiles", 31)\n'
        "  .setDepth(15);\n"
        "this.physics.add.existing(this.goal, true);\n"
        "this.physics.add.overlap(this.player, this.goal, () => {\n"
        '  if (this.flags.has("victory")) return;\n'
        '  this.flags.add("victory");\n'
        '  this.events.emit("ui:victory");\n'
        "  this.cameras.main.fade(800, 0, 0, 0);\n"
        "});\n"
        "```"
    ),
    hints=[
        (
            "You should read the goal object from the `\"objects\"` layer.",
            r'const\s+goalObj\s*=\s*map\.findObject\(\s*["\']objects["\']\s*,\s*\(\s*\w+\s*\)\s*=>\s*\w+\.type\s*===\s*["\']goal["\']\s*\)',
        ),
        (
            "You should render the goal as a sprite using frame 31 of the `\"tiles\"` image.",
            r'this\.goal\s*=\s*this\.add\s*\.sprite\(\s*goalObj\.x\s*\+\s*8\s*,\s*goalObj\.y\s*\+\s*8\s*,\s*["\']tiles["\']\s*,\s*31\s*\)',
        ),
        (
            "You should add an overlap that fires exactly once via the `\"victory\"` flag.",
            r'physics\.add\.overlap\(\s*this\.player\s*,\s*this\.goal[\s\S]*?if\s*\(\s*this\.flags\.has\(\s*["\']victory["\']\s*\)\s*\)\s*return',
        ),
        (
            "On victory you should emit `\"ui:victory\"` and fade the camera with `(800, 0, 0, 0)`.",
            r'this\.events\.emit\(\s*["\']ui:victory["\']\s*\)[\s\S]*this\.cameras\.main\.fade\(\s*800\s*,\s*0\s*,\s*0\s*,\s*0\s*\)',
        ),
    ],
    seed_text=seed_insert(solutions[35], ATTACK_INIT),
    mutate=lambda: state.insert_after(ATTACK_INIT, GOAL_BLOCK),
)

# ---------------------------------------------------------------------------
# Step 37: UIScene victory overlay listener.
# ---------------------------------------------------------------------------

step(
    37,
    title="Step 37",
    description=(
        "On the UI side, render a black overlay and a yellow \"Victory!\" "
        "title when MainScene emits `\"ui:victory\"`.\n\nAfter the HP block "
        "in `UIScene.create`:\n\n"
        "```js\n"
        'main.events.on("ui:victory", () => {\n'
        "  this.add\n"
        "    .rectangle(160, 120, 320, 240, 0x000000, 0.7)\n"
        "    .setDepth(80);\n"
        "  this.add\n"
        '    .text(160, 120, "Victory!", {\n'
        '      fontSize: "32px",\n'
        '      color: "#ffe066"\n'
        "    })\n"
        "    .setOrigin(0.5)\n"
        "    .setDepth(81);\n"
        "});\n"
        "```"
    ),
    hints=[
        (
            "You should listen for `\"ui:victory\"` events from MainScene.",
            r'main\.events\.on\(\s*["\']ui:victory["\']',
        ),
        (
            "You should add a full-screen 70%-opacity black rectangle.",
            r"this\.add\s*\.rectangle\(\s*160\s*,\s*120\s*,\s*320\s*,\s*240\s*,\s*0x000000\s*,\s*0\.7\s*\)",
        ),
        (
            "You should add the text \"Victory!\" centred at `(160, 120)` in 32px yellow.",
            r'this\.add\s*\.text\(\s*160\s*,\s*120\s*,\s*["\']Victory!["\']',
        ),
    ],
    seed_text=seed_insert(solutions[36], HP_UI_BLOCK),
    mutate=lambda: state.insert_after(HP_UI_BLOCK, VICTORY_UI_BLOCK),
)

# ---------------------------------------------------------------------------
# Step 38: torches with pulsing alpha tween.
# ---------------------------------------------------------------------------

step(
    38,
    title="Step 38",
    description=(
        "Read every `torch` object and render it as a sprite using frame `25` "
        "of the tileset, with a yoyo'd alpha tween for that flickering-fire "
        "feel.\n\nAfter the goal block in `MainScene.create`:\n\n"
        "```js\n"
        'map.filterObjects("objects", (o) => o.type === "torch").forEach(\n'
        "  (t) => {\n"
        "    const torch = this.add\n"
        '      .sprite(t.x + 8, t.y + 8, "tiles", 25)\n'
        "      .setDepth(15);\n"
        "    this.tweens.add({\n"
        "      targets: torch,\n"
        "      alpha: { from: 1, to: 0.6 },\n"
        "      duration: 500,\n"
        "      yoyo: true,\n"
        "      repeat: -1\n"
        "    });\n"
        "  }\n"
        ");\n"
        "```"
    ),
    hints=[
        (
            "You should read all torches with `map.filterObjects(\"objects\", o => o.type === \"torch\")`.",
            r'map\.filterObjects\(\s*["\']objects["\']\s*,\s*\(\s*\w+\s*\)\s*=>\s*\w+\.type\s*===\s*["\']torch["\']\s*\)',
        ),
        (
            "Each torch should be a sprite using frame 25 of the `\"tiles\"` image.",
            r'this\.add\s*\.sprite\(\s*\w+\.x\s*\+\s*8\s*,\s*\w+\.y\s*\+\s*8\s*,\s*["\']tiles["\']\s*,\s*25\s*\)',
        ),
        (
            "Each torch should yoyo its alpha from `1` to `0.6` indefinitely.",
            r"alpha:\s*\{\s*from:\s*1\s*,\s*to:\s*0\.6\s*\}[\s\S]*yoyo:\s*true[\s\S]*repeat:\s*-1",
        ),
    ],
    seed_text=seed_insert(solutions[37], GOAL_BLOCK),
    mutate=lambda: state.insert_after(GOAL_BLOCK, TORCH_BLOCK),
)

# ---------------------------------------------------------------------------
# Step 39: room detect init (currentRoom, visitedRooms, transitionLockedUntil).
# ---------------------------------------------------------------------------

step(
    39,
    title="Step 39",
    description=(
        "Set up room-tracking state. The dungeon has four rooms (NW, NE, SW, "
        "SE). Track which room the player is in, which rooms they've visited, "
        "and a cooldown for room transitions.\n\nAfter the torch block:\n\n"
        "```js\n"
        'this.currentRoom = "NW";\n'
        'this.visitedRooms = new Set(["NW"]);\n'
        "this.transitionLockedUntil = 0;\n"
        "```"
    ),
    hints=[
        (
            "You should initialize `this.currentRoom = \"NW\"`.",
            r'this\.currentRoom\s*=\s*["\']NW["\']',
        ),
        (
            "You should initialize `this.visitedRooms` as a `Set([\"NW\"])`.",
            r'this\.visitedRooms\s*=\s*new\s+Set\(\s*\[\s*["\']NW["\']\s*\]\s*\)',
        ),
        (
            "You should initialize `this.transitionLockedUntil = 0`.",
            r"this\.transitionLockedUntil\s*=\s*0",
        ),
    ],
    seed_text=seed_insert(solutions[38], TORCH_BLOCK),
    mutate=lambda: state.insert_after(TORCH_BLOCK, ROOM_DETECT_INIT),
)

# ---------------------------------------------------------------------------
# Step 40: detectRoom closure on MainScene.
# ---------------------------------------------------------------------------

step(
    40,
    title="Step 40",
    description=(
        "Define `this.detectRoom(px, py)` as an instance closure that "
        "classifies a world coordinate into one of the four quadrant rooms. "
        "Tile boundaries: x split at column 22, y split at row 17.\n\n"
        "After the room-detect init:\n\n"
        "```js\n"
        "this.detectRoom = (px, py) => {\n"
        "  const tx = px / 16;\n"
        "  const ty = py / 16;\n"
        '  if (tx < 22 && ty < 17) return "NW";\n'
        '  if (tx >= 22 && ty < 17) return "NE";\n'
        '  if (tx < 22 && ty >= 17) return "SW";\n'
        '  return "SE";\n'
        "};\n"
        "```"
    ),
    hints=[
        (
            "You should assign `this.detectRoom` to an arrow function of `(px, py)`.",
            r"this\.detectRoom\s*=\s*\(\s*px\s*,\s*py\s*\)\s*=>\s*\{",
        ),
        (
            "You should split rooms at tile column 22 and row 17.",
            r"const\s+tx\s*=\s*px\s*/\s*16[\s\S]*const\s+ty\s*=\s*py\s*/\s*16[\s\S]*tx\s*<\s*22[\s\S]*ty\s*<\s*17",
        ),
        (
            "You should return the four room names \"NW\", \"NE\", \"SW\", \"SE\".",
            r'return\s+["\']NW["\'][\s\S]*return\s+["\']NE["\'][\s\S]*return\s+["\']SW["\'][\s\S]*return\s+["\']SE["\']',
        ),
    ],
    seed_text=seed_insert(solutions[39], ROOM_DETECT_INIT),
    mutate=lambda: state.insert_after(ROOM_DETECT_INIT, DETECT_ROOM_METHOD),
)

# ---------------------------------------------------------------------------
# Step 41: room detect update + camera fade transition.
# ---------------------------------------------------------------------------

step(
    41,
    title="Step 41",
    description=(
        "Each frame, classify the player's room. If it changed and we're past "
        "the transition cooldown, fade the camera, mark the new room visited, "
        "and emit `\"ui:room\"` so the UI can announce it.\n\nIn "
        "`MainScene.update`, after the attack block:\n\n"
        "```js\n"
        "const room = this.detectRoom(this.player.x, this.player.y);\n"
        "if (\n"
        "  room &&\n"
        "  room !== this.currentRoom &&\n"
        "  time > this.transitionLockedUntil\n"
        ") {\n"
        "  this.currentRoom = room;\n"
        "  this.transitionLockedUntil = time + 600;\n"
        "  this.cameras.main.fadeOut(150, 0, 0, 0);\n"
        '  this.cameras.main.once("camerafadeoutcomplete", () =>\n'
        "    this.cameras.main.fadeIn(150)\n"
        "  );\n"
        "  this.visitedRooms.add(room);\n"
        '  this.events.emit("ui:room", room);\n'
        "}\n"
        "```"
    ),
    hints=[
        (
            "You should call `this.detectRoom(this.player.x, this.player.y)`.",
            r"this\.detectRoom\(\s*this\.player\.x\s*,\s*this\.player\.y\s*\)",
        ),
        (
            "You should fire only when room changed and `time > this.transitionLockedUntil`.",
            r"room\s*!==\s*this\.currentRoom\s*&&\s*time\s*>\s*this\.transitionLockedUntil",
        ),
        (
            "You should set the cooldown to `time + 600`.",
            r"this\.transitionLockedUntil\s*=\s*time\s*\+\s*600",
        ),
        (
            "You should fade out for 150 ms then fade back in on `camerafadeoutcomplete`.",
            r'this\.cameras\.main\.fadeOut\(\s*150\s*,\s*0\s*,\s*0\s*,\s*0\s*\)[\s\S]*this\.cameras\.main\.once\(\s*["\']camerafadeoutcomplete["\']\s*,[\s\S]*this\.cameras\.main\.fadeIn\(\s*150\s*\)',
        ),
        (
            "You should add the new room to `this.visitedRooms` and emit `\"ui:room\"`.",
            r'this\.visitedRooms\.add\(\s*room\s*\)[\s\S]*this\.events\.emit\(\s*["\']ui:room["\']\s*,\s*room\s*\)',
        ),
    ],
    seed_text=seed_insert(solutions[40], ATTACK_UPDATE),
    mutate=lambda: state.insert_after(ATTACK_UPDATE, ROOM_DETECT_UPDATE),
)

# ---------------------------------------------------------------------------
# Step 42: UIScene room label listener.
# ---------------------------------------------------------------------------

step(
    42,
    title="Step 42",
    description=(
        "Add a transient room-label HUD: when MainScene emits `\"ui:room\"`, "
        "show the room name centred at the top of the screen for 2 seconds.\n\n"
        "After the victory block in `UIScene.create`:\n\n"
        "```js\n"
        "this.roomLabel = this.add\n"
        '  .text(160, 36, "", {\n'
        '    fontSize: "12px",\n'
        '    color: "#ffffff",\n'
        '    backgroundColor: "rgba(0,0,0,0.6)",\n'
        "    padding: { x: 6, y: 2 }\n"
        "  })\n"
        "  .setOrigin(0.5)\n"
        "  .setVisible(false);\n"
        'main.events.on("ui:room", (name) => {\n'
        "  this.roomLabel.setText(name);\n"
        "  this.roomLabel.setVisible(true);\n"
        "  this.time.delayedCall(2000, () => this.roomLabel.setVisible(false));\n"
        "});\n"
        "```"
    ),
    hints=[
        (
            "You should add a centred `roomLabel` text element at `(160, 36)`.",
            r"this\.roomLabel\s*=\s*this\.add\s*\.text\(\s*160\s*,\s*36\s*,",
        ),
        (
            "You should listen for `\"ui:room\"` and set the text on the label.",
            r'main\.events\.on\(\s*["\']ui:room["\']\s*,\s*\(\s*name\s*\)\s*=>\s*\{[\s\S]*?this\.roomLabel\.setText\(\s*name\s*\)',
        ),
        (
            "You should hide the label after 2000 ms.",
            r"this\.time\.delayedCall\(\s*2000\s*,\s*\(\s*\)\s*=>\s*this\.roomLabel\.setVisible\(\s*false\s*\)\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[41], VICTORY_UI_BLOCK),
    mutate=lambda: state.insert_after(VICTORY_UI_BLOCK, ROOM_LABEL_BLOCK),
)

# ---------------------------------------------------------------------------
# Step 43: UIScene score text listener.
# ---------------------------------------------------------------------------

step(
    43,
    title="Step 43",
    description=(
        "Add a small \"Gold\" counter in the top-right corner that updates "
        "whenever MainScene emits `\"ui:score\"`.\n\nAfter the room-label "
        "block in `UIScene.create`:\n\n"
        "```js\n"
        "this.scoreText = this.add\n"
        '  .text(252, 50, "0", {\n'
        '    fontSize: "10px",\n'
        '    color: "#ffe066"\n'
        "  })\n"
        "  .setOrigin(0.5);\n"
        'main.events.on("ui:score", (s) => this.scoreText.setText("Gold: " + s));\n'
        "```"
    ),
    hints=[
        (
            "You should add a `scoreText` element at `(252, 50)`.",
            r"this\.scoreText\s*=\s*this\.add\s*\.text\(\s*252\s*,\s*50\s*,",
        ),
        (
            "You should listen for `\"ui:score\"` and prefix the text with `\"Gold: \"`.",
            r'main\.events\.on\(\s*["\']ui:score["\']\s*,\s*\(\s*s\s*\)\s*=>\s*this\.scoreText\.setText\(\s*["\']Gold:\s*["\']\s*\+\s*s\s*\)',
        ),
    ],
    seed_text=seed_insert(solutions[42], ROOM_LABEL_BLOCK),
    mutate=lambda: state.insert_after(ROOM_LABEL_BLOCK, SCORE_TEXT_BLOCK),
)

# ---------------------------------------------------------------------------
# Step 44: minimap camera (added at corner) + bounds + follow.
# ---------------------------------------------------------------------------

step(
    44,
    title="Step 44",
    description=(
        "A minimap is just a second camera. Add one at the top-right corner "
        "with a low zoom, bound to the map, following the player.\n\n"
        "After the room-detect init in `MainScene.create`:\n\n"
        "```js\n"
        "this.minimap = this.cameras\n"
        "  .add(252, 4, 60, 40)\n"
        "  .setZoom(0.1)\n"
        "  .setBackgroundColor(0x000000);\n"
        "this.minimap.setBounds(0, 0, map.widthInPixels, map.heightInPixels);\n"
        "this.minimap.startFollow(this.player);\n"
        "```"
    ),
    hints=[
        (
            "You should add a second camera at `(252, 4)` sized 60×40 with zoom 0.1.",
            r"this\.minimap\s*=\s*this\.cameras\s*\.add\(\s*252\s*,\s*4\s*,\s*60\s*,\s*40\s*\)\s*\.setZoom\(\s*0\.1\s*\)",
        ),
        (
            "You should give the minimap a black background and bind its bounds to the map.",
            r"setBackgroundColor\(\s*0x000000\s*\)[\s\S]*this\.minimap\.setBounds\(\s*0\s*,\s*0\s*,\s*map\.widthInPixels\s*,\s*map\.heightInPixels\s*\)",
        ),
        (
            "You should call `this.minimap.startFollow(this.player)`.",
            r"this\.minimap\.startFollow\(\s*this\.player\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[43], DETECT_ROOM_METHOD),
    mutate=lambda: state.insert_after(DETECT_ROOM_METHOD, MINIMAP_INIT),
)

# ---------------------------------------------------------------------------
# Step 45: minimap ignore object-layer entities.
# ---------------------------------------------------------------------------

step(
    45,
    title="Step 45",
    description=(
        "Ask the minimap to skip rendering specific entities — the NPC, "
        "slime, key, chest, save point, goal, and swing rectangle — so the "
        "minimap shows the floor and walls cleanly.\n\nAfter the minimap "
        "init:\n\n"
        "```js\n"
        "this.minimap.ignore([\n"
        "  this.npc,\n"
        "  this.slime,\n"
        "  this.chest,\n"
        "  this.keyItem,\n"
        "  this.savePoint,\n"
        "  this.goal,\n"
        "  this.swing\n"
        "]);\n"
        "```"
    ),
    hints=[
        (
            "You should call `this.minimap.ignore([...])` with all of the entity refs.",
            r"this\.minimap\.ignore\(\s*\[\s*this\.npc\s*,\s*this\.slime\s*,\s*this\.chest\s*,\s*this\.keyItem\s*,\s*this\.savePoint\s*,\s*this\.goal\s*,\s*this\.swing\s*\]\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[44], MINIMAP_INIT),
    mutate=lambda: state.insert_after(MINIMAP_INIT, MINIMAP_IGNORE),
)

# ---------------------------------------------------------------------------
# Step 46: player marker on minimap.
# ---------------------------------------------------------------------------

step(
    46,
    title="Step 46",
    description=(
        "The player rectangle is rendered to the main camera (where it's 12 "
        "pixels wide). On the minimap (zoom 0.1) that's 1.2 pixels — "
        "invisible. Solve it with a separate marker rectangle that the *main* "
        "camera ignores. The marker is huge in world coordinates but only the "
        "minimap renders it, so it appears as a clear dot on the small "
        "view.\n\nAfter the minimap-ignore block:\n\n"
        "```js\n"
        "this.marker = this.add\n"
        "  .rectangle(0, 0, 16, 16, 0xff66ff, 1)\n"
        "  .setDepth(70);\n"
        "this.cameras.main.ignore(this.marker);\n"
        "```"
    ),
    hints=[
        (
            "You should add a 16×16 magenta `marker` rectangle at depth 70.",
            r"this\.marker\s*=\s*this\.add\s*\.rectangle\(\s*0\s*,\s*0\s*,\s*16\s*,\s*16\s*,\s*0xff66ff\s*,\s*1\s*\)\s*\.setDepth\(\s*70\s*\)",
        ),
        (
            "You should call `this.cameras.main.ignore(this.marker)` so the main camera skips it.",
            r"this\.cameras\.main\.ignore\(\s*this\.marker\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[45], MINIMAP_IGNORE),
    mutate=lambda: state.insert_after(MINIMAP_IGNORE, PLAYER_MARKER_BLOCK),
)

# ---------------------------------------------------------------------------
# Step 47: marker follows player in update.
# ---------------------------------------------------------------------------

step(
    47,
    title="Step 47",
    description=(
        "Every frame, snap the marker to the player's position so the "
        "minimap dot tracks them.\n\nIn `MainScene.update`, after the room "
        "detect block:\n\n"
        "```js\n"
        "this.marker.setPosition(this.player.x, this.player.y);\n"
        "```"
    ),
    hints=[
        (
            "You should call `this.marker.setPosition(this.player.x, this.player.y)`.",
            r"this\.marker\.setPosition\(\s*this\.player\.x\s*,\s*this\.player\.y\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[46], ROOM_DETECT_UPDATE),
    mutate=lambda: state.insert_after(ROOM_DETECT_UPDATE, PLAYER_MARKER_UPDATE),
)

# ---------------------------------------------------------------------------
# Step 48: shutdown cleanup hook in UIScene.
# ---------------------------------------------------------------------------

step(
    48,
    title="Step 48",
    description=(
        "When `UIScene` shuts down, unsubscribe from MainScene events. "
        "Without this, repeated scene restarts pile up listeners and "
        "double-fire dialogue/HP/notice handlers.\n\nAt the very end of "
        "`UIScene.create` (after the score-text listener):\n\n"
        "```js\n"
        'this.events.on("shutdown", () => {\n'
        '  main.events.off("ui:dialogue");\n'
        '  main.events.off("ui:notice");\n'
        '  main.events.off("ui:hp");\n'
        '  main.events.off("ui:victory");\n'
        '  main.events.off("ui:room");\n'
        '  main.events.off("ui:score");\n'
        "});\n"
        "```"
    ),
    hints=[
        (
            "You should listen for `\"shutdown\"` on `this.events`.",
            r'this\.events\.on\(\s*["\']shutdown["\']',
        ),
        (
            "You should call `main.events.off` for each of the six event names.",
            r'main\.events\.off\(\s*["\']ui:dialogue["\']\s*\)[\s\S]*main\.events\.off\(\s*["\']ui:notice["\']\s*\)[\s\S]*main\.events\.off\(\s*["\']ui:hp["\']\s*\)[\s\S]*main\.events\.off\(\s*["\']ui:victory["\']\s*\)[\s\S]*main\.events\.off\(\s*["\']ui:room["\']\s*\)[\s\S]*main\.events\.off\(\s*["\']ui:score["\']\s*\)',
        ),
    ],
    seed_text=seed_insert(solutions[47], SCORE_TEXT_BLOCK),
    mutate=lambda: state.insert_after(SCORE_TEXT_BLOCK, SHUTDOWN_HOOK),
)

# ---------------------------------------------------------------------------
# Step 49: input lock during room transition.
# ---------------------------------------------------------------------------

step(
    49,
    title="Step 49",
    description=(
        "Polish: while the camera fades between rooms, freeze the player. "
        "Modify the movement block in `MainScene.update` so it returns early "
        "when `time < this.transitionLockedUntil`. Without this, you can "
        "speed-clip past the fade and out the other side of a room.\n\n"
        "Replace the first line of the movement block:\n\n"
        "```js\n"
        "this.facing = this.facing || { x: 0, y: 1 };\n"
        "if (time < this.transitionLockedUntil) {\n"
        "  this.player.body.setVelocity(0);\n"
        "  return;\n"
        "}\n"
        "const speed = 100;\n"
        "// ...rest of the movement block stays the same...\n"
        "```"
    ),
    hints=[
        (
            "Inside `update`, you should bail with `setVelocity(0)` when `time < this.transitionLockedUntil`.",
            r"if\s*\(\s*time\s*<\s*this\.transitionLockedUntil\s*\)\s*\{\s*this\.player\.body\.setVelocity\(\s*0\s*\)\s*;\s*return\s*;\s*\}",
        ),
    ],
    seed_text=seed_wrap(
        solutions[48],
        "    this.facing = this.facing || { x: 0, y: 1 };\n",
    ),
    mutate=lambda: state.replace(
        "    this.facing = this.facing || { x: 0, y: 1 };\n",
        "    this.facing = this.facing || { x: 0, y: 1 };\n"
        "    if (time < this.transitionLockedUntil) {\n"
        "      this.player.body.setVelocity(0);\n"
        "      return;\n"
        "    }\n",
    ),
)

# ---------------------------------------------------------------------------
# Step 50: emit initial UI state on create + final integration.
# ---------------------------------------------------------------------------

step(
    50,
    title="Step 50",
    description=(
        "Final integration. The HUD currently starts blank — the HP bar shows "
        "nothing, the gold counter is still showing the placeholder zero, "
        "and the room label hasn't fired. Emit the starting state at the end "
        "of `MainScene.create` so the HUD reflects reality from frame one.\n\n"
        "After the player marker block:\n\n"
        "```js\n"
        'this.events.emit("ui:hp", this.hp);\n'
        'this.events.emit("ui:score", this.score);\n'
        'this.events.emit(\n'
        '  "ui:room",\n'
        '  map.properties.find((p) => p.name === "name").value\n'
        ");\n"
        "```\n\nYou shipped a 50-step top-down dungeon explorer: tilemap "
        "loading, object-layer-driven NPC, locked door with key, save/load, "
        "patrolling slime with knockback combat, four-room camera "
        "transitions, minimap, and a victory overlay. Same shape as a tiny "
        "Zelda. Sprint 12 takes the runner harness into Chapter 6."
    ),
    hints=[
        (
            "You should emit `\"ui:hp\"`, `\"ui:score\"`, and `\"ui:room\"` "
            "in sequence at the end of `MainScene.create`.",
            r'this\.events\.emit\(\s*["\']ui:hp["\']\s*,\s*this\.hp\s*\)\s*;\s*this\.events\.emit\(\s*["\']ui:score["\']\s*,\s*this\.score\s*\)\s*;\s*this\.events\.emit\(\s*["\']ui:room["\']',
        ),
        (
            "The `\"ui:room\"` emit should pull its value from `map.properties.find((p) => p.name === \"name\").value`.",
            r'this\.events\.emit\(\s*["\']ui:room["\']\s*,\s*map\.properties\.find\(\s*\(\s*\w+\s*\)\s*=>\s*\w+\.name\s*===\s*["\']name["\']\s*\)\.value',
        ),
    ],
    seed_text=seed_insert(solutions[49], PLAYER_MARKER_BLOCK),
    mutate=lambda: state.insert_after(
        PLAYER_MARKER_BLOCK,
        '    this.events.emit("ui:hp", this.hp);\n'
        '    this.events.emit("ui:score", this.score);\n'
        '    this.events.emit(\n'
        '      "ui:room",\n'
        '      map.properties.find((p) => p.name === "name").value\n'
        "    );\n",
    ),
)
# ---------------------------------------------------------------------------


import re as _re

_ANCHOR_LINE = _re.compile(
    r"^[ \t]*/\* (?:main-create|main-update|ui-create|ui-update) \*/\n",
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

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for n in range(1, len(solutions)):
        hex_id = HEX_BASE.format(ID_OFFSET + n)
        path = OUT_DIR / f"{hex_id}.md"
        path.write_text(render_markdown(n), encoding="utf-8")
    import tempfile

    debug_path = Path(tempfile.gettempdir()) / "fcc-dungeon-explorer-solutions.json"
    debug_path.write_text(
        _json.dumps(
            [strip_anchors(s) if s is not None else "" for s in solutions]
        ),
        encoding="utf-8",
    )
    print(f"Wrote {len(solutions) - 1} step files (1..{len(solutions) - 1})")


if __name__ == "__main__":
    main()
