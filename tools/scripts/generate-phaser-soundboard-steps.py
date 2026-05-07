"""Generate workshop-soundboard step .md files (steps 1..20).

Each step ships exactly one editable region (two ``--fcc-editable-region--``
markers) wrapped around the focused diff against the previous step's
solution. The structure is designed so every change a step needs is
contiguous in source order AND every reference resolves at runtime:

* Step 4 introduces ``this.sfxVolume``, ``this.musicVolume``, and
  ``this.playSfx`` upfront, so later steps modify them in place.
* Step 7 inserts ``this.makeButton`` + ``this.musicBtn`` immediately after
  ``this.playSfx`` so every later button (mute, crossfade) sits AFTER the
  helper definition in execution order.
* Step 8 grows ``this.musicBtn`` into a real ``this.music`` instance so
  step 19's ``prefers-reduced-motion`` block can call
  ``this.music.setVolume(0)`` synchronously.
* Step 14 inserts the mute button after the music play/pause toggle
  block so ``this.makeButton`` is already defined.
* The HUD update logic is registered as a ``this.events.on("update")``
  listener inside ``create()`` so step 18 only edits one method.
* Cleanup lives in step 19 with the reduce-motion default; step 20 only
  modifies ``this.playSfx`` to add the 50ms anti-double-play guard.
"""

from __future__ import annotations

from pathlib import Path

OUT_DIR = (
    Path(__file__).resolve().parents[2]
    / "curriculum/challenges/english/blocks/workshop-soundboard"
)
HEX_BASE = "66faa700000000000000{:04x}"
ID_OFFSET = 0xA6  # step 1 -> 0xa7, step 20 -> 0xba

REGION = "--fcc-editable-region--"


HTML = """\
```html

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Soundboard</title>
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
  width: 600,
  height: 480,
  parent: "game-container",
  backgroundColor: "#101020",
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
    /* preload */
  }

  create() {
    /* main-create */
  }

  update(time, delta) {}
}
""" + CONFIG_BLOCK


state = State(INITIAL_TEXT)
solutions: list[str | None] = [None]


def snap() -> None:
    solutions.append(state.render())


snap()  # solutions[1]


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


# -----------------------------------------------------------------------------
# Step 1: empty MainScene shell.

STEP1_SEED = (
    f"{REGION}\n\n{REGION}\n\nconst config = {{\n"
    "  type: Phaser.AUTO,\n"
    "  width: 600,\n"
    "  height: 480,\n"
    '  parent: "game-container",\n'
    '  backgroundColor: "#101020",\n'
    "  scene: [MainScene]\n"
    "};\n\n"
    "new Phaser.Game(config);\n"
)

titles.append("Step 1")
descriptions.append(
    "Welcome to the soundboard workshop. Across 20 steps you'll wire 6 "
    "sound-effect buttons, a music play/pause toggle, volume sliders that "
    "persist to `localStorage`, a tap-to-enable audio overlay for mobile, a "
    "stereo pan and rate slider, a music crossfade, a HUD list of currently "
    "playing sounds, and a `prefers-reduced-motion`-aware accessibility "
    "default.\n\nStart by declaring `MainScene` extending `Phaser.Scene` "
    'with a constructor that calls `super("MainScene")`, an empty `preload` '
    "method, an empty `create` method, and an empty `update(time, delta)` "
    "method.\n\n```js\n"
    "class MainScene extends Phaser.Scene {\n"
    "  constructor() {\n"
    '    super(\"MainScene\");\n'
    "  }\n\n"
    "  preload() {}\n\n"
    "  create() {}\n\n"
    "  update(time, delta) {}\n"
    "}\n```\n\n"
    "The `config` object below is already filled in - a 600x480 canvas with "
    "no physics."
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


# -----------------------------------------------------------------------------
# Reusable code fragments.

PRELOAD_BODY = (
    "    const SFX_KEYS = [\n"
    '      "sfx-jump",\n'
    '      "sfx-coin",\n'
    '      "sfx-hit",\n'
    '      "sfx-explosion",\n'
    '      "sfx-ui-click",\n'
    '      "sfx-ping"\n'
    "    ];\n"
    "    SFX_KEYS.forEach((key) => {\n"
    "      this.load.audio(key, [`audio/${key}.ogg`, `audio/${key}.mp3`]);\n"
    "    });\n"
    '    this.load.audio("music-ambient", [\n'
    '      "audio/music-ambient.ogg",\n'
    '      "audio/music-ambient.mp3"\n'
    "    ]);\n"
)

# Step 3 - draw the row of SFX buttons (no interactivity yet).
SFX_BUTTONS_BLOCK = (
    "    const SFX_KEYS = [\n"
    '      "sfx-jump",\n'
    '      "sfx-coin",\n'
    '      "sfx-hit",\n'
    '      "sfx-explosion",\n'
    '      "sfx-ui-click",\n'
    '      "sfx-ping"\n'
    "    ];\n"
    "    SFX_KEYS.forEach((key, i) => {\n"
    "      const x = 8 + i * 95;\n"
    "      const bg = this.add\n"
    "        .rectangle(x, 8, 90, 36, 0x2a3045)\n"
    "        .setOrigin(0)\n"
    "        .setStrokeStyle(2, 0x6c8aff);\n"
    "      this.add\n"
    '        .text(x + 45, 26, key.replace("sfx-", ""), {\n'
    '          fontSize: "10px",\n'
    '          color: "#ffffff"\n'
    "        })\n"
    "        .setOrigin(0.5);\n"
    "    });\n"
)

# Step 4 - introduce sfxVolume, musicVolume, playSfx helper, plus interactive
# SFX buttons. Replaces the SFX_BUTTONS_BLOCK above.
SFX_BUTTONS_BLOCK_INTERACTIVE = (
    "    this.sfxVolume = 0.6;\n"
    "    this.musicVolume = 0.5;\n"
    "    this.playSfx = (key) => this.sound.play(key);\n"
    "    const SFX_KEYS = [\n"
    '      "sfx-jump",\n'
    '      "sfx-coin",\n'
    '      "sfx-hit",\n'
    '      "sfx-explosion",\n'
    '      "sfx-ui-click",\n'
    '      "sfx-ping"\n'
    "    ];\n"
    "    SFX_KEYS.forEach((key, i) => {\n"
    "      const x = 8 + i * 95;\n"
    "      const bg = this.add\n"
    "        .rectangle(x, 8, 90, 36, 0x2a3045)\n"
    "        .setOrigin(0)\n"
    "        .setStrokeStyle(2, 0x6c8aff);\n"
    "      this.add\n"
    '        .text(x + 45, 26, key.replace("sfx-", ""), {\n'
    '          fontSize: "10px",\n'
    '          color: "#ffffff"\n'
    "        })\n"
    "        .setOrigin(0.5);\n"
    "      bg.setInteractive();\n"
    '      bg.on("pointerdown", () => this.playSfx(key));\n'
    "    });\n"
)

OVERLAY_BLOCK = (
    "    this.overlay = this.add\n"
    "      .rectangle(0, 0, 600, 480, 0x000000, 0.85)\n"
    "      .setOrigin(0)\n"
    "      .setDepth(1000);\n"
    "    this.overlayText = this.add\n"
    '      .text(300, 240, "TAP TO ENABLE AUDIO", {\n'
    '        fontSize: "24px",\n'
    '        color: "#ffffff"\n'
    "      })\n"
    "      .setOrigin(0.5)\n"
    "      .setDepth(1001);\n"
)

UNLOCK_BLOCK = (
    '    this.input.once("pointerdown", () => {\n'
    "      if (this.sound.locked) this.sound.unlock();\n"
    "      this.overlay.destroy();\n"
    "      this.overlayText.destroy();\n"
    "    });\n"
)

# Step 7: makeButton helper + Music: Play (no-op) button, contiguous.
MAKE_BUTTON_AND_MUSIC_NOOP = (
    "    this.makeButton = (x, y, w, h, label, onClick) => {\n"
    "      const bg = this.add\n"
    "        .rectangle(x, y, w, h, 0x222244)\n"
    "        .setOrigin(0)\n"
    "        .setStrokeStyle(2, 0x6c8aff);\n"
    "      const text = this.add\n"
    "        .text(x + w / 2, y + h / 2, label, {\n"
    '          fontSize: "12px",\n'
    '          color: "#ffffff"\n'
    "        })\n"
    "        .setOrigin(0.5);\n"
    "      bg.setInteractive();\n"
    '      bg.on("pointerdown", onClick);\n'
    "      return { bg, label: text };\n"
    "    };\n"
    "    this.musicBtn = this.makeButton(\n"
    "      8,\n"
    "      56,\n"
    "      140,\n"
    "      32,\n"
    '      "Music: Play",\n'
    "      () => {}\n"
    "    );\n"
)

MUSIC_BTN_NOOP_LINES = (
    "    this.musicBtn = this.makeButton(\n"
    "      8,\n"
    "      56,\n"
    "      140,\n"
    "      32,\n"
    '      "Music: Play",\n'
    "      () => {}\n"
    "    );\n"
)

# Step 8: add `this.music` and wire button to play. musicVolume already at top.
MUSIC_INSTANCE_AND_PLAY = (
    '    this.music = this.sound.add("music-ambient", {\n'
    "      loop: true,\n"
    "      volume: this.musicVolume\n"
    "    });\n"
    "    this.musicBtn = this.makeButton(\n"
    "      8,\n"
    "      56,\n"
    "      140,\n"
    "      32,\n"
    '      "Music: Play",\n'
    "      () => this.music.play()\n"
    "    );\n"
)

MUSIC_BTN_PLAY_HANDLER = "      () => this.music.play()\n"

MUSIC_BTN_TOGGLE_HANDLER = (
    "      () => {\n"
    "        if (this.music.isPlaying) {\n"
    "          this.music.pause();\n"
    '          this.musicBtn.label.setText("Music: Resume");\n'
    "        } else if (this.music.isPaused) {\n"
    "          this.music.resume();\n"
    '          this.musicBtn.label.setText("Music: Pause");\n'
    "        } else {\n"
    "          this.music.play();\n"
    '          this.musicBtn.label.setText("Music: Pause");\n'
    "        }\n"
    "      }\n"
)

# Step 9 result.
MUSIC_INSTANCE_AND_TOGGLE = (
    '    this.music = this.sound.add("music-ambient", {\n'
    "      loop: true,\n"
    "      volume: this.musicVolume\n"
    "    });\n"
    "    this.musicBtn = this.makeButton(\n"
    "      8,\n"
    "      56,\n"
    "      140,\n"
    "      32,\n"
    '      "Music: Play",\n'
    "      () => {\n"
    "        if (this.music.isPlaying) {\n"
    "          this.music.pause();\n"
    '          this.musicBtn.label.setText("Music: Resume");\n'
    "        } else if (this.music.isPaused) {\n"
    "          this.music.resume();\n"
    '          this.musicBtn.label.setText("Music: Pause");\n'
    "        } else {\n"
    "          this.music.play();\n"
    '          this.musicBtn.label.setText("Music: Pause");\n'
    "        }\n"
    "      }\n"
    "    );\n"
)

# Step 10: replace the no-op `this.playSfx` (from step 4) with a block that
# defines makeSlider, the SFX-volume slider, and a volume-aware playSfx.
PLAY_SFX_INITIAL = (
    "    this.playSfx = (key) => this.sound.play(key);\n"
)
SLIDER_HELPER_AND_SFX_VOL_BLOCK = (
    "    this.makeSlider = (x, y, w, h, initial, onChange) => {\n"
    "      const track = this.add\n"
    "        .rectangle(x, y, w, h, 0x222244)\n"
    "        .setOrigin(0)\n"
    "        .setStrokeStyle(1, 0x6c8aff);\n"
    "      const knob = this.add\n"
    "        .rectangle(x + initial * w - 4, y - 2, 8, h + 4, 0xffd166)\n"
    "        .setOrigin(0);\n"
    "      track.setInteractive();\n"
    '      track.on("pointerdown", (pointer) => {\n'
    "        const v = Phaser.Math.Clamp((pointer.x - x) / w, 0, 1);\n"
    "        knob.x = x + v * w - 4;\n"
    "        onChange(v);\n"
    "      });\n"
    "      return { track, knob };\n"
    "    };\n"
    '    this.add.text(8, 108, "SFX Vol", {\n'
    '      fontSize: "10px",\n'
    '      color: "#ffffff"\n'
    "    });\n"
    "    this.makeSlider(80, 102, 300, 16, this.sfxVolume, (v) => {\n"
    "      this.sfxVolume = v;\n"
    "    });\n"
    "    this.playSfx = (key) =>\n"
    "      this.sound.play(key, { volume: this.sfxVolume });\n"
)

# Step 11: music vol slider; goes in `create()` AT THE END so it's adjacent
# to the SFX slider for step 12 to wrap both. We insert it AFTER
# SLIDER_HELPER_AND_SFX_VOL_BLOCK.
MUSIC_VOL_BLOCK = (
    '    this.add.text(8, 148, "Music Vol", {\n'
    '      fontSize: "10px",\n'
    '      color: "#ffffff"\n'
    "    });\n"
    "    this.makeSlider(80, 142, 300, 16, this.musicVolume, (v) => {\n"
    "      this.musicVolume = v;\n"
    "      this.music.setVolume(v);\n"
    "    });\n"
)


# Step 12: persist - the editable region wraps both sliders + the playSfx
# line that sits between them. The student edits the two onChange callbacks.
SLIDERS_PERSIST_OLD = (
    "    this.makeSlider(80, 102, 300, 16, this.sfxVolume, (v) => {\n"
    "      this.sfxVolume = v;\n"
    "    });\n"
    "    this.playSfx = (key) =>\n"
    "      this.sound.play(key, { volume: this.sfxVolume });\n"
    '    this.add.text(8, 148, "Music Vol", {\n'
    '      fontSize: "10px",\n'
    '      color: "#ffffff"\n'
    "    });\n"
    "    this.makeSlider(80, 142, 300, 16, this.musicVolume, (v) => {\n"
    "      this.musicVolume = v;\n"
    "      this.music.setVolume(v);\n"
    "    });\n"
)
SLIDERS_PERSIST_NEW = (
    "    this.makeSlider(80, 102, 300, 16, this.sfxVolume, (v) => {\n"
    "      this.sfxVolume = v;\n"
    '      localStorage.setItem("sb:sfxVol", String(v));\n'
    "    });\n"
    "    this.playSfx = (key) =>\n"
    "      this.sound.play(key, { volume: this.sfxVolume });\n"
    '    this.add.text(8, 148, "Music Vol", {\n'
    '      fontSize: "10px",\n'
    '      color: "#ffffff"\n'
    "    });\n"
    "    this.makeSlider(80, 142, 300, 16, this.musicVolume, (v) => {\n"
    "      this.musicVolume = v;\n"
    "      this.music.setVolume(v);\n"
    '      localStorage.setItem("sb:musicVol", String(v));\n'
    "    });\n"
)

# Step 13: restore - both volume initialisers are adjacent at the top of
# create (declared in step 4).
VOL_INITS_OLD = (
    "    this.sfxVolume = 0.6;\n"
    "    this.musicVolume = 0.5;\n"
)
VOL_INITS_NEW = (
    "    this.sfxVolume = parseFloat(\n"
    '      localStorage.getItem("sb:sfxVol") ?? "0.6"\n'
    "    );\n"
    "    this.musicVolume = parseFloat(\n"
    '      localStorage.getItem("sb:musicVol") ?? "0.5"\n'
    "    );\n"
)

MUTE_BTN_BLOCK = (
    "    this.muteBtn = this.makeButton(\n"
    "      158,\n"
    "      56,\n"
    "      140,\n"
    "      32,\n"
    '      "Mute: Off",\n'
    "      () => {\n"
    "        this.sound.mute = !this.sound.mute;\n"
    "        this.muteBtn.label.setText(\n"
    '          this.sound.mute ? "Mute: On" : "Mute: Off"\n'
    "        );\n"
    "      }\n"
    "    );\n"
)

# Step 15: pan slider + playPing helper. Defined together so step 16 can
# wrap them as a single region and grow into a rate slider.
PAN_AND_PLAY_PING = (
    "    this.pingPan = 0;\n"
    "    this.playPing = () => {\n"
    '      const ping = this.sound.add("sfx-ping", {\n'
    "        volume: this.sfxVolume\n"
    "      });\n"
    "      ping.setPan(this.pingPan);\n"
    "      ping.play();\n"
    '      ping.once("complete", () => ping.destroy());\n'
    "    };\n"
    '    this.add.text(8, 188, "Pan", {\n'
    '      fontSize: "10px",\n'
    '      color: "#ffffff"\n'
    "    });\n"
    "    this.makeSlider(80, 182, 300, 16, 0.5, (v) => {\n"
    "      this.pingPan = (v - 0.5) * 2;\n"
    "      this.playPing();\n"
    "    });\n"
)

# Step 16: rewrite playPing with rate, and append rate slider to the same
# editable region.
PAN_AND_PLAY_PING_WITH_RATE = (
    "    this.pingPan = 0;\n"
    "    this.pingRate = 1;\n"
    "    this.playPing = () => {\n"
    '      const ping = this.sound.add("sfx-ping", {\n'
    "        volume: this.sfxVolume,\n"
    "        rate: this.pingRate\n"
    "      });\n"
    "      ping.setPan(this.pingPan);\n"
    "      ping.play();\n"
    '      ping.once("complete", () => ping.destroy());\n'
    "    };\n"
    '    this.add.text(8, 188, "Pan", {\n'
    '      fontSize: "10px",\n'
    '      color: "#ffffff"\n'
    "    });\n"
    "    this.makeSlider(80, 182, 300, 16, 0.5, (v) => {\n"
    "      this.pingPan = (v - 0.5) * 2;\n"
    "      this.playPing();\n"
    "    });\n"
    '    this.add.text(8, 228, "Rate", {\n'
    '      fontSize: "10px",\n'
    '      color: "#ffffff"\n'
    "    });\n"
    "    this.makeSlider(80, 222, 300, 16, 1 / 3, (v) => {\n"
    "      this.pingRate = 0.5 + v * 1.5;\n"
    "      this.playPing();\n"
    "    });\n"
)

CROSSFADE_BLOCK = (
    "    this.crossfade = () => {\n"
    "      if (!this.music.isPlaying) return;\n"
    '      const next = this.sound.add("music-ambient", {\n'
    "        loop: true,\n"
    "        volume: 0\n"
    "      });\n"
    "      next.play();\n"
    "      this.tweens.add({\n"
    "        targets: this.music,\n"
    "        volume: 0,\n"
    "        duration: 1000,\n"
    "        onComplete: () => this.music.stop()\n"
    "      });\n"
    "      this.tweens.add({\n"
    "        targets: next,\n"
    "        volume: this.musicVolume,\n"
    "        duration: 1000,\n"
    "        onComplete: () => {\n"
    "          this.music = next;\n"
    "        }\n"
    "      });\n"
    "    };\n"
    "    this.crossfadeBtn = this.makeButton(\n"
    "      308,\n"
    "      56,\n"
    "      140,\n"
    "      32,\n"
    '      "Crossfade",\n'
    "      () => this.crossfade()\n"
    "    );\n"
)

# Step 18: HUD text + an `update` listener registered from `create()`. Single
# create-only edit means we never need a second editable region.
HUD_BLOCK = (
    '    this.hudText = this.add.text(8, 270, "Now playing:", {\n'
    '      fontSize: "10px",\n'
    '      color: "#ffffff"\n'
    "    });\n"
    '    this.events.on("update", () => {\n'
    "      if (!this.hudText) return;\n"
    "      const playing = this.sound.sounds\n"
    "        .filter((s) => s.isPlaying)\n"
    "        .map((s) => s.key);\n"
    "      this.hudText.setText(\n"
    '        "Now playing: " + (playing.join(", ") || "(none)")\n'
    "      );\n"
    "    });\n"
)

# Step 19: prefers-reduced-motion default-mute + scene shutdown cleanup.
REDUCE_MOTION_AND_CLEANUP_BLOCK = (
    "    const prefersReduced =\n"
    '      typeof window !== "undefined" &&\n'
    '      typeof window.matchMedia === "function" &&\n'
    '      window.matchMedia("(prefers-reduced-motion: reduce)").matches;\n'
    "    if (prefersReduced) {\n"
    "      this.music.setVolume(0);\n"
    "    }\n"
    '    this.events.on("shutdown", () => {\n'
    "      this.sound.stopAll();\n"
    "      this.tweens.killAll();\n"
    "    });\n"
)

# Step 20: gate playSfx through a 50ms anti-double-play guard. The editable
# region wraps the existing volume-aware playSfx; the student replaces it with
# `this.lastPlayed` plus the guarded helper.
PLAY_SFX_VOLUME_LINES = (
    "    this.playSfx = (key) =>\n"
    "      this.sound.play(key, { volume: this.sfxVolume });\n"
)
PLAY_SFX_GUARDED_LINES = (
    "    this.lastPlayed = new Map();\n"
    "    this.playSfx = (key) => {\n"
    "      const now = this.time.now;\n"
    "      const last = this.lastPlayed.get(key) ?? -Infinity;\n"
    "      if (now - last < 50) return;\n"
    "      this.lastPlayed.set(key, now);\n"
    "      this.sound.play(key, { volume: this.sfxVolume });\n"
    "    };\n"
)


# -----------------------------------------------------------------------------
# Step 2: load all 7 audio files in preload.
step(
    2,
    title="Step 2",
    description=(
        "A soundboard is nothing without sounds. Load all six SFX plus the "
        "ambient music track in `preload`, with both `.ogg` and `.mp3` "
        "fallbacks so the asset works in every browser.\n\nDeclare a local "
        "`SFX_KEYS` array, iterate it, and call `this.load.audio(key, [...])` "
        "for each in array form so the browser can pick its preferred format. "
        'Then load the `"music-ambient"` track too.\n\n```js\n'
        "const SFX_KEYS = [\n"
        '  "sfx-jump",\n'
        '  "sfx-coin",\n'
        '  "sfx-hit",\n'
        '  "sfx-explosion",\n'
        '  "sfx-ui-click",\n'
        '  "sfx-ping"\n'
        "];\n"
        "SFX_KEYS.forEach((key) => {\n"
        "  this.load.audio(key, [`audio/${key}.ogg`, `audio/${key}.mp3`]);\n"
        "});\n"
        'this.load.audio("music-ambient", [\n'
        '  "audio/music-ambient.ogg",\n'
        '  "audio/music-ambient.mp3"\n'
        "]);\n```\n\n"
        "Listing `.ogg` first lets Chrome and Firefox win on file size while "
        "Safari falls through to the `.mp3` fallback."
    ),
    hints=[
        (
            "Inside `preload`, declare a local `SFX_KEYS` array with the six sfx keys.",
            r'const\s+SFX_KEYS\s*=\s*\[\s*["\']sfx-jump["\']\s*,\s*["\']sfx-coin["\']\s*,\s*["\']sfx-hit["\']\s*,\s*["\']sfx-explosion["\']\s*,\s*["\']sfx-ui-click["\']\s*,\s*["\']sfx-ping["\']\s*\]',
        ),
        (
            "Call `this.load.audio(key, [...ogg, mp3])` for each SFX key in a `forEach`.",
            r"SFX_KEYS\.forEach\([\s\S]*this\.load\.audio\(\s*key\s*,\s*\[\s*`audio/\$\{key\}\.ogg`\s*,\s*`audio/\$\{key\}\.mp3`\s*\]\s*\)",
        ),
        (
            'Load the music track with `this.load.audio("music-ambient", [...ogg, mp3])`.',
            r'this\.load\.audio\(\s*["\']music-ambient["\']\s*,\s*\[\s*["\']audio/music-ambient\.ogg["\']\s*,\s*["\']audio/music-ambient\.mp3["\']\s*\]\s*\)',
        ),
    ],
    seed_text=seed_insert(solutions[1], "/* preload */\n"),
    mutate=lambda: state.insert_after("/* preload */\n", PRELOAD_BODY),
)


# -----------------------------------------------------------------------------
# Step 3: 6 SFX button rectangles in create.
step(
    3,
    title="Step 3",
    description=(
        "Now build the visible row of six sound-effect buttons. Each is a "
        "90x36 rectangle with the SFX name centered on top, laid out in a "
        "horizontal row across the top of the canvas.\n\nIn `create`, "
        "redeclare `SFX_KEYS` (we'll de-duplicate later) and `forEach` it. "
        "For each key, build a `rectangle` at `(8 + i * 95, 8)` and a "
        "centered `text` showing the key with its `sfx-` prefix "
        "stripped.\n\n```js\n"
        "const SFX_KEYS = [\n"
        '  "sfx-jump",\n'
        '  "sfx-coin",\n'
        '  "sfx-hit",\n'
        '  "sfx-explosion",\n'
        '  "sfx-ui-click",\n'
        '  "sfx-ping"\n'
        "];\n"
        "SFX_KEYS.forEach((key, i) => {\n"
        "  const x = 8 + i * 95;\n"
        "  const bg = this.add\n"
        "    .rectangle(x, 8, 90, 36, 0x2a3045)\n"
        "    .setOrigin(0)\n"
        "    .setStrokeStyle(2, 0x6c8aff);\n"
        "  this.add\n"
        '    .text(x + 45, 26, key.replace("sfx-", ""), {\n'
        '      fontSize: "10px",\n'
        '      color: "#ffffff"\n'
        "    })\n"
        "    .setOrigin(0.5);\n"
        "});\n```\n\nThe row spans `8 + 95 * 5 + 90 = 573` pixels - well "
        "within the 600px canvas."
    ),
    hints=[
        (
            "Inside `create`, declare a local `SFX_KEYS` array with the six sfx keys.",
            r'create\s*\(\s*\)\s*\{[\s\S]*const\s+SFX_KEYS\s*=\s*\[\s*["\']sfx-jump["\']',
        ),
        (
            "Iterate `SFX_KEYS` with `forEach((key, i) => ...)` and build a 90x36 rectangle at `(8 + i * 95, 8)`.",
            r"SFX_KEYS\.forEach\(\s*\(\s*key\s*,\s*i\s*\)[\s\S]*const\s+x\s*=\s*8\s*\+\s*i\s*\*\s*95[\s\S]*\.rectangle\(\s*x\s*,\s*8\s*,\s*90\s*,\s*36\s*,\s*0x2a3045\s*\)",
        ),
        (
            'Add a centered `text` at `(x + 45, 26)` showing `key.replace("sfx-", "")`.',
            r'\.text\(\s*x\s*\+\s*45\s*,\s*26\s*,\s*key\.replace\(\s*["\']sfx-["\']\s*,\s*["\']{2}\s*\)',
        ),
    ],
    seed_text=seed_insert(solutions[2], "/* main-create */\n"),
    mutate=lambda: state.insert_after("/* main-create */\n", SFX_BUTTONS_BLOCK),
)


# -----------------------------------------------------------------------------
# Step 4: introduce sfxVolume + musicVolume + playSfx + interactive buttons.
step(
    4,
    title="Step 4",
    description=(
        "Buttons that don't react are decorations. Wire each SFX button to "
        "play its sound on `pointerdown` - and route the play through a "
        "`this.playSfx(key)` helper now, so we can tune volume and add "
        "anti-double-tap guards in later steps without rewriting every "
        "handler.\n\nReplace the entire `SFX_KEYS` block in `create` with "
        "the version below. The new lines at the top declare the SFX and "
        "music volume defaults plus the `this.playSfx` helper, then the "
        "`forEach` calls `setInteractive()` on the button background and "
        'wires `pointerdown` to `this.playSfx(key)`.\n\n```js\n'
        "this.sfxVolume = 0.6;\n"
        "this.musicVolume = 0.5;\n"
        "this.playSfx = (key) => this.sound.play(key);\n"
        "const SFX_KEYS = [\n"
        '  "sfx-jump",\n'
        '  "sfx-coin",\n'
        '  "sfx-hit",\n'
        '  "sfx-explosion",\n'
        '  "sfx-ui-click",\n'
        '  "sfx-ping"\n'
        "];\n"
        "SFX_KEYS.forEach((key, i) => {\n"
        "  const x = 8 + i * 95;\n"
        "  const bg = this.add\n"
        "    .rectangle(x, 8, 90, 36, 0x2a3045)\n"
        "    .setOrigin(0)\n"
        "    .setStrokeStyle(2, 0x6c8aff);\n"
        "  this.add\n"
        '    .text(x + 45, 26, key.replace("sfx-", ""), {\n'
        '      fontSize: "10px",\n'
        '      color: "#ffffff"\n'
        "    })\n"
        "    .setOrigin(0.5);\n"
        "  bg.setInteractive();\n"
        '  bg.on("pointerdown", () => this.playSfx(key));\n'
        "});\n```\n\n"
        "Click any button - you'll see a click flash but won't hear "
        "anything yet. iOS and Safari block audio until the user has "
        "interacted with the page; we'll fix that in step 6."
    ),
    hints=[
        (
            "Initialise `this.sfxVolume = 0.6` at the top of `create`.",
            r"this\.sfxVolume\s*=\s*0\.6",
        ),
        (
            "Initialise `this.musicVolume = 0.5` at the top of `create`.",
            r"this\.musicVolume\s*=\s*0\.5",
        ),
        (
            "Define `this.playSfx = (key) => this.sound.play(key)` so later steps can extend it.",
            r"this\.playSfx\s*=\s*\(\s*key\s*\)\s*=>\s*this\.sound\.play\(\s*key\s*\)",
        ),
        (
            "Call `bg.setInteractive()` inside the `forEach`.",
            r"bg\.setInteractive\(\s*\)",
        ),
        (
            'Wire `bg.on("pointerdown", () => this.playSfx(key))`.',
            r'bg\.on\(\s*["\']pointerdown["\']\s*,\s*\(\s*\)\s*=>\s*this\.playSfx\(\s*key\s*\)\s*\)',
        ),
    ],
    seed_text=seed_wrap(solutions[3], SFX_BUTTONS_BLOCK),
    mutate=lambda: state.replace(SFX_BUTTONS_BLOCK, SFX_BUTTONS_BLOCK_INTERACTIVE),
)


# -----------------------------------------------------------------------------
# Step 5: tap-to-enable overlay (rect + text).
step(
    5,
    title="Step 5",
    description=(
        "Mobile browsers refuse to start audio that wasn't triggered by a "
        "user gesture, so right now your SFX buttons may be silent on iOS. "
        "Add a full-canvas overlay with a `TAP TO ENABLE AUDIO` "
        "label.\n\nAfter the SFX `forEach`:\n\n```js\n"
        "this.overlay = this.add\n"
        "  .rectangle(0, 0, 600, 480, 0x000000, 0.85)\n"
        "  .setOrigin(0)\n"
        "  .setDepth(1000);\n"
        "this.overlayText = this.add\n"
        '  .text(300, 240, "TAP TO ENABLE AUDIO", {\n'
        '    fontSize: "24px",\n'
        '    color: "#ffffff"\n'
        "  })\n"
        "  .setOrigin(0.5)\n"
        "  .setDepth(1001);\n```\n\n"
        "Depth `1000`/`1001` keeps the overlay on top of every game object "
        "you'll add later."
    ),
    hints=[
        (
            "Add `this.overlay` as a 600x480 rectangle at `(0, 0)` with `0x000000, 0.85` and depth `1000`.",
            r"this\.overlay\s*=\s*this\.add\s*\.rectangle\(\s*0\s*,\s*0\s*,\s*600\s*,\s*480\s*,\s*0x000000\s*,\s*0\.85\s*\)[\s\S]*\.setDepth\(\s*1000\s*\)",
        ),
        (
            'Add `this.overlayText` at `(300, 240)` reading `"TAP TO ENABLE AUDIO"` with depth `1001`.',
            r'this\.overlayText\s*=\s*this\.add\s*\.text\(\s*300\s*,\s*240\s*,\s*["\']TAP TO ENABLE AUDIO["\'][\s\S]*\.setDepth\(\s*1001\s*\)',
        ),
    ],
    seed_text=seed_insert(solutions[4], SFX_BUTTONS_BLOCK_INTERACTIVE),
    mutate=lambda: state.insert_after(
        SFX_BUTTONS_BLOCK_INTERACTIVE, OVERLAY_BLOCK
    ),
)


# -----------------------------------------------------------------------------
# Step 6: dismiss overlay + unlock audio on first tap.
step(
    6,
    title="Step 6",
    description=(
        "Add a one-shot `pointerdown` listener that calls "
        "`this.sound.unlock()` if the manager is locked, then destroys "
        "both the overlay rectangle and its text.\n\nAfter the overlay "
        "block:\n\n```js\n"
        'this.input.once("pointerdown", () => {\n'
        "  if (this.sound.locked) this.sound.unlock();\n"
        "  this.overlay.destroy();\n"
        "  this.overlayText.destroy();\n"
        "});\n```\n\n"
        "`this.sound.locked` is `true` until the first user gesture; "
        "`unlock()` resumes the suspended `AudioContext`. After this "
        "fires, every subsequent `sound.play` works normally."
    ),
    hints=[
        (
            'Use `this.input.once("pointerdown", ...)` so the listener fires exactly once.',
            r'this\.input\.once\(\s*["\']pointerdown["\']',
        ),
        (
            "Inside the handler, call `this.sound.unlock()` only when `this.sound.locked` is true.",
            r"if\s*\(\s*this\.sound\.locked\s*\)\s*this\.sound\.unlock\(\s*\)",
        ),
        (
            "Destroy both `this.overlay` and `this.overlayText`.",
            r"this\.overlay\.destroy\(\s*\)[\s\S]*this\.overlayText\.destroy\(\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[5], OVERLAY_BLOCK),
    mutate=lambda: state.insert_after(OVERLAY_BLOCK, UNLOCK_BLOCK),
)


# -----------------------------------------------------------------------------
# Step 7: makeButton helper + Music: Play (no-op).
# Inserted right after `this.playSfx = ...` so every later step that calls
# `this.makeButton(...)` (mute, crossfade) and every reference to `this.music`
# (prefers-reduced-motion) sits AFTER its definition in execution order.
step(
    7,
    title="Step 7",
    description=(
        "Time to add a control button for the music. We'll need several "
        "rectangular buttons, so extract the pattern into a "
        "`this.makeButton(x, y, w, h, label, onClick)` helper that returns "
        "`{ bg, label }` so callers can update the label later.\n\n"
        "Right after `this.playSfx = ...`:\n\n```js\n"
        "this.makeButton = (x, y, w, h, label, onClick) => {\n"
        "  const bg = this.add\n"
        "    .rectangle(x, y, w, h, 0x222244)\n"
        "    .setOrigin(0)\n"
        "    .setStrokeStyle(2, 0x6c8aff);\n"
        "  const text = this.add\n"
        "    .text(x + w / 2, y + h / 2, label, {\n"
        '      fontSize: "12px",\n'
        '      color: "#ffffff"\n'
        "    })\n"
        "    .setOrigin(0.5);\n"
        "  bg.setInteractive();\n"
        '  bg.on("pointerdown", onClick);\n'
        "  return { bg, label: text };\n"
        "};\n"
        "this.musicBtn = this.makeButton(\n"
        "  8,\n"
        "  56,\n"
        "  140,\n"
        "  32,\n"
        '  "Music: Play",\n'
        "  () => {}\n"
        ");\n```\n\n"
        "The button does nothing yet - we wire actual playback in step 8. "
        "Defining the helper next to `this.playSfx` keeps every later "
        "button (mute in step 14, crossfade in step 17) below its own "
        "creator."
    ),
    hints=[
        (
            "Define `this.makeButton` as an arrow function `(x, y, w, h, label, onClick) => ...` that returns `{ bg, label }`.",
            r"this\.makeButton\s*=\s*\(\s*x\s*,\s*y\s*,\s*w\s*,\s*h\s*,\s*label\s*,\s*onClick\s*\)\s*=>\s*\{[\s\S]*return\s*\{\s*bg\s*,\s*label\s*:\s*text\s*\}",
        ),
        (
            "The bg rectangle should be `(x, y, w, h, 0x222244)` with `setStrokeStyle(2, 0x6c8aff)`.",
            r"\.rectangle\(\s*x\s*,\s*y\s*,\s*w\s*,\s*h\s*,\s*0x222244\s*\)[\s\S]*\.setStrokeStyle\(\s*2\s*,\s*0x6c8aff\s*\)",
        ),
        (
            'Wire the bg with `setInteractive()` and `on("pointerdown", onClick)`.',
            r"bg\.setInteractive\(\s*\)[\s\S]*bg\.on\(\s*[\"']pointerdown[\"']\s*,\s*onClick\s*\)",
        ),
        (
            'Use the helper to build `this.musicBtn` at `(8, 56, 140, 32)` with label `"Music: Play"` and an empty handler.',
            r'this\.musicBtn\s*=\s*this\.makeButton\(\s*8\s*,\s*56\s*,\s*140\s*,\s*32\s*,\s*["\']Music: Play["\']',
        ),
    ],
    seed_text=seed_insert(solutions[6], PLAY_SFX_INITIAL),
    mutate=lambda: state.insert_after(PLAY_SFX_INITIAL, MAKE_BUTTON_AND_MUSIC_NOOP),
)


# -----------------------------------------------------------------------------
# Step 8: introduce this.music + wire button to play.
step(
    8,
    title="Step 8",
    description=(
        "Wire actual playback. Replace the entire music button block with "
        "a version that adds a looping music instance using the "
        "`this.musicVolume` you initialised in step 4, then makes the click "
        "handler call `this.music.play()`.\n\nUse `this.sound.add` (not "
        "`this.sound.play`) so we get a `Sound` reference back - we'll "
        "need it for pause/resume in step 9 and crossfade later.\n\n"
        "```js\n"
        'this.music = this.sound.add("music-ambient", {\n'
        "  loop: true,\n"
        "  volume: this.musicVolume\n"
        "});\n"
        "this.musicBtn = this.makeButton(\n"
        "  8,\n"
        "  56,\n"
        "  140,\n"
        "  32,\n"
        '  "Music: Play",\n'
        "  () => this.music.play()\n"
        ");\n```"
    ),
    hints=[
        (
            'Create `this.music` with `this.sound.add("music-ambient", { loop: true, volume: this.musicVolume })`.',
            r'this\.music\s*=\s*this\.sound\.add\(\s*["\']music-ambient["\']\s*,\s*\{\s*loop:\s*true\s*,\s*volume:\s*this\.musicVolume\s*\}\s*\)',
        ),
        (
            "The button's click handler should call `this.music.play()`.",
            r"\(\s*\)\s*=>\s*this\.music\.play\(\s*\)",
        ),
    ],
    seed_text=seed_wrap(solutions[7], MUSIC_BTN_NOOP_LINES),
    mutate=lambda: state.replace(MUSIC_BTN_NOOP_LINES, MUSIC_INSTANCE_AND_PLAY),
)


# -----------------------------------------------------------------------------
# Step 9: tri-state play/pause/resume toggle.
step(
    9,
    title="Step 9",
    description=(
        "Right now clicking the music button after it's already playing "
        "creates a *new* `Sound` instance every time. Replace the click "
        "handler with a tri-state toggle: pause when playing, resume when "
        "paused, otherwise play. Update the button label each time.\n\n"
        "Replace the click handler line `() => this.music.play()` with:\n\n"
        "```js\n"
        "() => {\n"
        "  if (this.music.isPlaying) {\n"
        "    this.music.pause();\n"
        '    this.musicBtn.label.setText("Music: Resume");\n'
        "  } else if (this.music.isPaused) {\n"
        "    this.music.resume();\n"
        '    this.musicBtn.label.setText("Music: Pause");\n'
        "  } else {\n"
        "    this.music.play();\n"
        '    this.musicBtn.label.setText("Music: Pause");\n'
        "  }\n"
        "}\n```"
    ),
    hints=[
        (
            'When `this.music.isPlaying`, call `this.music.pause()` and set the label to `"Music: Resume"`.',
            r"if\s*\(\s*this\.music\.isPlaying\s*\)[\s\S]*this\.music\.pause\(\s*\)[\s\S]*this\.musicBtn\.label\.setText\(\s*[\"']Music: Resume[\"']\s*\)",
        ),
        (
            'When `this.music.isPaused`, call `this.music.resume()` and set the label to `"Music: Pause"`.',
            r"else\s+if\s*\(\s*this\.music\.isPaused\s*\)[\s\S]*this\.music\.resume\(\s*\)[\s\S]*this\.musicBtn\.label\.setText\(\s*[\"']Music: Pause[\"']\s*\)",
        ),
        (
            'Otherwise, call `this.music.play()` and set the label to `"Music: Pause"`.',
            r"else\s*\{\s*this\.music\.play\(\s*\)\s*;?\s*this\.musicBtn\.label\.setText\(\s*[\"']Music: Pause[\"']\s*\)",
        ),
    ],
    seed_text=seed_wrap(solutions[8], MUSIC_BTN_PLAY_HANDLER),
    mutate=lambda: state.replace(MUSIC_BTN_PLAY_HANDLER, MUSIC_BTN_TOGGLE_HANDLER),
)


# -----------------------------------------------------------------------------
# Step 10: replace the no-op playSfx with makeSlider helper, the SFX-volume
# slider, and a volume-aware playSfx. Single-region edit because we wrap the
# existing playSfx line and grow it into a contiguous block.
step(
    10,
    title="Step 10",
    description=(
        "Add an SFX volume slider. We'll need a slider helper for several "
        "controls, so define `this.makeSlider` first, then add the slider "
        "and finally extend `this.playSfx` to pass the live volume.\n\n"
        "Replace the line `this.playSfx = (key) => this.sound.play(key);` "
        "with the entire block below. The four parts: a "
        "`this.makeSlider(x, y, w, h, initial, onChange)` helper that "
        "draws a track and clamped knob, an `\"SFX Vol\"` label, the "
        "slider itself, and a new `this.playSfx` that passes "
        "`{ volume: this.sfxVolume }` to `this.sound.play`.\n\n```js\n"
        "this.makeSlider = (x, y, w, h, initial, onChange) => {\n"
        "  const track = this.add\n"
        "    .rectangle(x, y, w, h, 0x222244)\n"
        "    .setOrigin(0)\n"
        "    .setStrokeStyle(1, 0x6c8aff);\n"
        "  const knob = this.add\n"
        "    .rectangle(x + initial * w - 4, y - 2, 8, h + 4, 0xffd166)\n"
        "    .setOrigin(0);\n"
        "  track.setInteractive();\n"
        '  track.on("pointerdown", (pointer) => {\n'
        "    const v = Phaser.Math.Clamp((pointer.x - x) / w, 0, 1);\n"
        "    knob.x = x + v * w - 4;\n"
        "    onChange(v);\n"
        "  });\n"
        "  return { track, knob };\n"
        "};\n"
        'this.add.text(8, 108, "SFX Vol", {\n'
        '  fontSize: "10px",\n'
        '  color: "#ffffff"\n'
        "});\n"
        "this.makeSlider(80, 102, 300, 16, this.sfxVolume, (v) => {\n"
        "  this.sfxVolume = v;\n"
        "});\n"
        "this.playSfx = (key) =>\n"
        "  this.sound.play(key, { volume: this.sfxVolume });\n```\n\n"
        "Click anywhere on the track and the knob jumps to your click "
        "(no drag yet) and the SFX get louder or quieter from the next "
        "press onward."
    ),
    hints=[
        (
            "Define `this.makeSlider` as an arrow function taking `(x, y, w, h, initial, onChange)`.",
            r"this\.makeSlider\s*=\s*\(\s*x\s*,\s*y\s*,\s*w\s*,\s*h\s*,\s*initial\s*,\s*onChange\s*\)\s*=>",
        ),
        (
            "The track rectangle should use `(x, y, w, h, 0x222244)` with `setStrokeStyle(1, 0x6c8aff)` and a `0xffd166` knob 8px wide.",
            r"\.rectangle\(\s*x\s*,\s*y\s*,\s*w\s*,\s*h\s*,\s*0x222244\s*\)[\s\S]*\.setStrokeStyle\(\s*1\s*,\s*0x6c8aff\s*\)[\s\S]*\.rectangle\(\s*x\s*\+\s*initial\s*\*\s*w\s*-\s*4\s*,\s*y\s*-\s*2\s*,\s*8\s*,\s*h\s*\+\s*4\s*,\s*0xffd166\s*\)",
        ),
        (
            "On `pointerdown`, clamp `(pointer.x - x) / w` to `0..1` with `Phaser.Math.Clamp` and call `onChange(v)`.",
            r"Phaser\.Math\.Clamp\(\s*\(\s*pointer\.x\s*-\s*x\s*\)\s*/\s*w\s*,\s*0\s*,\s*1\s*\)[\s\S]*onChange\(\s*v\s*\)",
        ),
        (
            'Build a slider at `(80, 102, 300, 16, this.sfxVolume, (v) => { this.sfxVolume = v; })` and an `"SFX Vol"` label at `(8, 108)`.',
            r'this\.add\.text\(\s*8\s*,\s*108\s*,\s*["\']SFX Vol["\'][\s\S]*this\.makeSlider\(\s*80\s*,\s*102\s*,\s*300\s*,\s*16\s*,\s*this\.sfxVolume',
        ),
        (
            "Replace `this.playSfx` to pass `{ volume: this.sfxVolume }` to `this.sound.play`.",
            r"this\.playSfx\s*=\s*\(\s*key\s*\)\s*=>\s*this\.sound\.play\(\s*key\s*,\s*\{\s*volume:\s*this\.sfxVolume\s*\}\s*\)",
        ),
    ],
    seed_text=seed_wrap(solutions[9], PLAY_SFX_INITIAL),
    mutate=lambda: state.replace(PLAY_SFX_INITIAL, SLIDER_HELPER_AND_SFX_VOL_BLOCK),
)


# -----------------------------------------------------------------------------
# Step 11: music volume slider.
step(
    11,
    title="Step 11",
    description=(
        "Add a matching slider for music volume. Its callback updates "
        "`this.musicVolume` AND calls `this.music.setVolume(v)` so the "
        "running track responds in real time.\n\nAfter the SFX-volume "
        "block:\n\n```js\n"
        'this.add.text(8, 148, "Music Vol", {\n'
        '  fontSize: "10px",\n'
        '  color: "#ffffff"\n'
        "});\n"
        "this.makeSlider(80, 142, 300, 16, this.musicVolume, (v) => {\n"
        "  this.musicVolume = v;\n"
        "  this.music.setVolume(v);\n"
        "});\n```"
    ),
    hints=[
        (
            'Add a `"Music Vol"` label at `(8, 148)` with `fontSize: "10px"`.',
            r'this\.add\.text\(\s*8\s*,\s*148\s*,\s*["\']Music Vol["\']\s*,\s*\{\s*fontSize:\s*["\']10px["\']',
        ),
        (
            "Add a slider at `(80, 142, 300, 16, this.musicVolume, ...)` whose `onChange` updates `this.musicVolume` and calls `this.music.setVolume(v)`.",
            r"this\.makeSlider\(\s*80\s*,\s*142\s*,\s*300\s*,\s*16\s*,\s*this\.musicVolume\s*,\s*\(\s*v\s*\)\s*=>\s*\{\s*this\.musicVolume\s*=\s*v[\s\S]*this\.music\.setVolume\(\s*v\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[10], SLIDER_HELPER_AND_SFX_VOL_BLOCK),
    mutate=lambda: state.insert_after(
        SLIDER_HELPER_AND_SFX_VOL_BLOCK, MUSIC_VOL_BLOCK
    ),
)


# -----------------------------------------------------------------------------
# Step 12: persist both volumes to localStorage. Single region wraps the
# entire SFX-slider/playSfx/music-vol block so we modify both onChange
# callbacks in one place.
step(
    12,
    title="Step 12",
    description=(
        "Volumes that reset every reload are annoying. Persist both "
        "sliders to `localStorage` on change.\n\nReplace the SFX slider's "
        "onChange to also call `localStorage.setItem(\"sb:sfxVol\", "
        "String(v))`. Then replace the music slider's onChange with "
        '`localStorage.setItem("sb:musicVol", String(v))`. Keep '
        "`this.playSfx` exactly as it was - we only touch the slider "
        "callbacks.\n\n```js\n"
        "this.makeSlider(80, 102, 300, 16, this.sfxVolume, (v) => {\n"
        "  this.sfxVolume = v;\n"
        '  localStorage.setItem("sb:sfxVol", String(v));\n'
        "});\n"
        "// ... this.playSfx stays the same ...\n"
        "this.makeSlider(80, 142, 300, 16, this.musicVolume, (v) => {\n"
        "  this.musicVolume = v;\n"
        "  this.music.setVolume(v);\n"
        '  localStorage.setItem("sb:musicVol", String(v));\n'
        "});\n```"
    ),
    hints=[
        (
            'The SFX slider should call `localStorage.setItem("sb:sfxVol", String(v))` on change.',
            r"this\.sfxVolume\s*=\s*v[\s\S]*localStorage\.setItem\(\s*[\"']sb:sfxVol[\"']\s*,\s*String\(\s*v\s*\)\s*\)",
        ),
        (
            'The music slider should call `localStorage.setItem("sb:musicVol", String(v))`.',
            r"this\.music\.setVolume\(\s*v\s*\)[\s\S]*localStorage\.setItem\(\s*[\"']sb:musicVol[\"']\s*,\s*String\(\s*v\s*\)\s*\)",
        ),
    ],
    seed_text=seed_wrap(solutions[11], SLIDERS_PERSIST_OLD),
    mutate=lambda: state.replace(SLIDERS_PERSIST_OLD, SLIDERS_PERSIST_NEW),
)


# -----------------------------------------------------------------------------
# Step 13: restore both volumes on scene start. Single region wraps the two
# adjacent initialisers at the top of create().
step(
    13,
    title="Step 13",
    description=(
        "Persisting only matters if we read the saved value back. Replace "
        "the two volume initialisers at the top of `create` to read from "
        "`localStorage` with sane defaults.\n\nReplace:\n\n```js\n"
        "this.sfxVolume = 0.6;\n"
        "this.musicVolume = 0.5;\n```\n\nwith:\n\n```js\n"
        "this.sfxVolume = parseFloat(\n"
        '  localStorage.getItem("sb:sfxVol") ?? "0.6"\n'
        ");\n"
        "this.musicVolume = parseFloat(\n"
        '  localStorage.getItem("sb:musicVol") ?? "0.5"\n'
        ");\n```\n\n"
        "Reload the preview after touching the sliders and the saved "
        "values come back."
    ),
    hints=[
        (
            'Initialise `this.sfxVolume` from `parseFloat(localStorage.getItem("sb:sfxVol") ?? "0.6")`.',
            r'this\.sfxVolume\s*=\s*parseFloat\(\s*localStorage\.getItem\(\s*["\']sb:sfxVol["\']\s*\)\s*\?\?\s*["\']0\.6["\']\s*\)',
        ),
        (
            'Initialise `this.musicVolume` from `parseFloat(localStorage.getItem("sb:musicVol") ?? "0.5")`.',
            r'this\.musicVolume\s*=\s*parseFloat\(\s*localStorage\.getItem\(\s*["\']sb:musicVol["\']\s*\)\s*\?\?\s*["\']0\.5["\']\s*\)',
        ),
    ],
    seed_text=seed_wrap(solutions[12], VOL_INITS_OLD),
    mutate=lambda: state.replace(VOL_INITS_OLD, VOL_INITS_NEW),
)


# -----------------------------------------------------------------------------
# Step 14: master mute toggle. Anchors off the music play/pause/resume block
# so muteBtn ends up right after `this.makeButton` is defined - calling
# `this.makeButton(...)` here resolves at runtime.
step(
    14,
    title="Step 14",
    description=(
        "Add a master mute that flips `this.sound.mute` (which mutes "
        "every active and future sound through the `SoundManager`).\n\n"
        "Right after the music play/pause toggle button:\n\n```js\n"
        "this.muteBtn = this.makeButton(\n"
        "  158,\n"
        "  56,\n"
        "  140,\n"
        "  32,\n"
        '  "Mute: Off",\n'
        "  () => {\n"
        "    this.sound.mute = !this.sound.mute;\n"
        "    this.muteBtn.label.setText(\n"
        '      this.sound.mute ? "Mute: On" : "Mute: Off"\n'
        "    );\n"
        "  }\n"
        ");\n```\n\n"
        "Click it, then click any SFX button or play music - everything "
        "is silent. Click again and audio returns at the previous volumes."
    ),
    hints=[
        (
            'Build `this.muteBtn` at `(158, 56, 140, 32)` with label `"Mute: Off"`.',
            r'this\.muteBtn\s*=\s*this\.makeButton\(\s*158\s*,\s*56\s*,\s*140\s*,\s*32\s*,\s*["\']Mute: Off["\']',
        ),
        (
            'The handler should toggle `this.sound.mute` and update the label between `"Mute: On"` and `"Mute: Off"`.',
            r"this\.sound\.mute\s*=\s*!\s*this\.sound\.mute[\s\S]*this\.muteBtn\.label\.setText\(\s*[\s\S]*this\.sound\.mute\s*\?\s*[\"']Mute: On[\"']\s*:\s*[\"']Mute: Off[\"']",
        ),
    ],
    seed_text=seed_insert(solutions[13], MUSIC_INSTANCE_AND_TOGGLE),
    mutate=lambda: state.insert_after(MUSIC_INSTANCE_AND_TOGGLE, MUTE_BTN_BLOCK),
)


# -----------------------------------------------------------------------------
# Step 15: pan slider + playPing helper. Inserted as one block so step 16
# can wrap it for a single-region edit that adds the rate slider.
step(
    15,
    title="Step 15",
    description=(
        "Add a stereo pan slider that fires the `sfx-ping` SFX with "
        "`setPan` set from the slider value. Pan is `-1..+1` (full left "
        "to full right), so we map the slider's `0..1` to that "
        "range.\n\nFirst define `this.playPing` so we can also reuse it "
        "in step 16. Then add the pan label and slider:\n\n```js\n"
        "this.pingPan = 0;\n"
        "this.playPing = () => {\n"
        '  const ping = this.sound.add("sfx-ping", {\n'
        "    volume: this.sfxVolume\n"
        "  });\n"
        "  ping.setPan(this.pingPan);\n"
        "  ping.play();\n"
        '  ping.once("complete", () => ping.destroy());\n'
        "};\n"
        'this.add.text(8, 188, "Pan", {\n'
        '  fontSize: "10px",\n'
        '  color: "#ffffff"\n'
        "});\n"
        "this.makeSlider(80, 182, 300, 16, 0.5, (v) => {\n"
        "  this.pingPan = (v - 0.5) * 2;\n"
        "  this.playPing();\n"
        "});\n```\n\n"
        "Click far-left on the slider - the ping plays only in your left "
        "ear. Far-right, only on the right."
    ),
    hints=[
        (
            "Initialise `this.pingPan = 0`.",
            r"this\.pingPan\s*=\s*0",
        ),
        (
            'Define `this.playPing` to add a `"sfx-ping"` instance, call `setPan(this.pingPan)`, play it, and destroy it on `"complete"`.',
            r"this\.playPing\s*=\s*\(\s*\)\s*=>\s*\{[\s\S]*this\.sound\.add\(\s*[\"']sfx-ping[\"'][\s\S]*ping\.setPan\(\s*this\.pingPan\s*\)[\s\S]*ping\.once\(\s*[\"']complete[\"']\s*,\s*\(\s*\)\s*=>\s*ping\.destroy",
        ),
        (
            'Add a `"Pan"` slider at `(80, 182, 300, 16, 0.5, ...)` whose handler maps `(v - 0.5) * 2` to `this.pingPan` and calls `this.playPing()`.',
            r"this\.makeSlider\(\s*80\s*,\s*182\s*,\s*300\s*,\s*16\s*,\s*0\.5[\s\S]*this\.pingPan\s*=\s*\(\s*v\s*-\s*0\.5\s*\)\s*\*\s*2[\s\S]*this\.playPing\(\s*\)",
        ),
    ],
    seed_text=seed_insert(solutions[14], MUTE_BTN_BLOCK),
    mutate=lambda: state.insert_after(MUTE_BTN_BLOCK, PAN_AND_PLAY_PING),
)


# -----------------------------------------------------------------------------
# Step 16: rate slider that pitch-shifts the ping. Wraps the entire pan block
# from step 15 and grows it to include rate handling + a rate slider.
step(
    16,
    title="Step 16",
    description=(
        "Add a rate slider that drives `pingRate`, then rebuild the "
        "ping with both `volume` AND `rate`.\n\nReplace the entire pan "
        "block from step 15 with the version below. The diff: a "
        "`this.pingRate = 1` initialiser, `rate: this.pingRate` added to "
        "the `sound.add` config, and a brand-new rate slider after the "
        "pan slider:\n\n```js\n"
        "this.pingPan = 0;\n"
        "this.pingRate = 1;\n"
        "this.playPing = () => {\n"
        '  const ping = this.sound.add("sfx-ping", {\n'
        "    volume: this.sfxVolume,\n"
        "    rate: this.pingRate\n"
        "  });\n"
        "  ping.setPan(this.pingPan);\n"
        "  ping.play();\n"
        '  ping.once("complete", () => ping.destroy());\n'
        "};\n"
        'this.add.text(8, 188, "Pan", {\n'
        '  fontSize: "10px",\n'
        '  color: "#ffffff"\n'
        "});\n"
        "this.makeSlider(80, 182, 300, 16, 0.5, (v) => {\n"
        "  this.pingPan = (v - 0.5) * 2;\n"
        "  this.playPing();\n"
        "});\n"
        'this.add.text(8, 228, "Rate", {\n'
        '  fontSize: "10px",\n'
        '  color: "#ffffff"\n'
        "});\n"
        "this.makeSlider(80, 222, 300, 16, 1 / 3, (v) => {\n"
        "  this.pingRate = 0.5 + v * 1.5;\n"
        "  this.playPing();\n"
        "});\n```\n\n"
        "The rate slider's `1/3` initial position maps to `pingRate = 1` "
        "(`0.5 + 1/3 * 1.5 = 1.0`). Drag left for slow + low, drag right "
        "for fast + high."
    ),
    hints=[
        (
            "`this.playPing` should pass `rate: this.pingRate` in the `sound.add` config.",
            r"this\.sound\.add\(\s*[\"']sfx-ping[\"']\s*,\s*\{\s*volume:\s*this\.sfxVolume\s*,\s*rate:\s*this\.pingRate",
        ),
        (
            "Initialise `this.pingRate = 1`.",
            r"this\.pingRate\s*=\s*1\b",
        ),
        (
            'Add a `"Rate"` slider at `(80, 222, 300, 16, 1 / 3, ...)` whose handler sets `this.pingRate = 0.5 + v * 1.5` and calls `this.playPing()`.',
            r"this\.makeSlider\(\s*80\s*,\s*222\s*,\s*300\s*,\s*16\s*,\s*1\s*/\s*3[\s\S]*this\.pingRate\s*=\s*0\.5\s*\+\s*v\s*\*\s*1\.5[\s\S]*this\.playPing\(\s*\)",
        ),
    ],
    seed_text=seed_wrap(solutions[15], PAN_AND_PLAY_PING),
    mutate=lambda: state.replace(PAN_AND_PLAY_PING, PAN_AND_PLAY_PING_WITH_RATE),
)


# -----------------------------------------------------------------------------
# Step 17: music crossfade.
step(
    17,
    title="Step 17",
    description=(
        "A music transition cuts amateurishly. Crossfade swaps tracks by "
        "tweening the outgoing volume to `0` while the incoming track "
        "tweens up. Define `this.crossfade` and a `Crossfade` button "
        "next to the existing music controls.\n\nAfter the rate "
        "slider:\n\n```js\n"
        "this.crossfade = () => {\n"
        "  if (!this.music.isPlaying) return;\n"
        '  const next = this.sound.add("music-ambient", {\n'
        "    loop: true,\n"
        "    volume: 0\n"
        "  });\n"
        "  next.play();\n"
        "  this.tweens.add({\n"
        "    targets: this.music,\n"
        "    volume: 0,\n"
        "    duration: 1000,\n"
        "    onComplete: () => this.music.stop()\n"
        "  });\n"
        "  this.tweens.add({\n"
        "    targets: next,\n"
        "    volume: this.musicVolume,\n"
        "    duration: 1000,\n"
        "    onComplete: () => {\n"
        "      this.music = next;\n"
        "    }\n"
        "  });\n"
        "};\n"
        "this.crossfadeBtn = this.makeButton(\n"
        "  308,\n"
        "  56,\n"
        "  140,\n"
        "  32,\n"
        '  "Crossfade",\n'
        "  () => this.crossfade()\n"
        ");\n```\n\n"
        "We re-use the same `music-ambient` track for both legs - "
        "Chapter 9 introduces a second track for proper genre changes."
    ),
    hints=[
        (
            "Define `this.crossfade` that early-returns when `!this.music.isPlaying`.",
            r"this\.crossfade\s*=\s*\(\s*\)\s*=>\s*\{[\s\S]*if\s*\(\s*!\s*this\.music\.isPlaying\s*\)\s*return",
        ),
        (
            'Build `next` with `this.sound.add("music-ambient", { loop: true, volume: 0 })`, play it, then tween its volume up to `this.musicVolume` over `1000`ms.',
            r'this\.sound\.add\(\s*["\']music-ambient["\']\s*,\s*\{\s*loop:\s*true\s*,\s*volume:\s*0\s*\}\s*\)[\s\S]*next\.play\(\s*\)[\s\S]*targets:\s*next\s*,\s*volume:\s*this\.musicVolume\s*,\s*duration:\s*1000',
        ),
        (
            "Tween the outgoing `this.music` volume to `0` over `1000`ms and call `this.music.stop()` on complete.",
            r"targets:\s*this\.music\s*,\s*volume:\s*0\s*,\s*duration:\s*1000[\s\S]*onComplete:\s*\(\s*\)\s*=>\s*this\.music\.stop\(\s*\)",
        ),
        (
            "On the incoming tween's `onComplete`, reassign `this.music = next`.",
            r"onComplete:\s*\(\s*\)\s*=>\s*\{\s*this\.music\s*=\s*next",
        ),
        (
            'Build `this.crossfadeBtn` at `(308, 56, 140, 32)` labelled `"Crossfade"`.',
            r'this\.crossfadeBtn\s*=\s*this\.makeButton\(\s*308\s*,\s*56\s*,\s*140\s*,\s*32\s*,\s*["\']Crossfade["\']',
        ),
    ],
    seed_text=seed_insert(solutions[16], PAN_AND_PLAY_PING_WITH_RATE),
    mutate=lambda: state.insert_after(PAN_AND_PLAY_PING_WITH_RATE, CROSSFADE_BLOCK),
)


# -----------------------------------------------------------------------------
# Step 18: HUD list of currently playing sounds. Both the text and the
# update-driven setText live inside `create()` via `this.events.on("update")`,
# so the edit fits in a single contiguous region.
step(
    18,
    title="Step 18",
    description=(
        "Show the user which sounds are currently audible. Add a HUD "
        "text and an `update`-tick listener inside `create()` - that way "
        "the entire HUD wires up in one place.\n\n`this.events.on("
        '"update")` runs once per scene tick, just like the `update` '
        "method, but lives inline with the rest of `create`. Inside it, "
        "filter `this.sound.sounds` (the manager's array of every active "
        "instance) for the playing ones and rebuild the HUD label.\n\n"
        "After the crossfade block:\n\n```js\n"
        'this.hudText = this.add.text(8, 270, "Now playing:", {\n'
        '  fontSize: "10px",\n'
        '  color: "#ffffff"\n'
        "});\n"
        'this.events.on("update", () => {\n'
        "  if (!this.hudText) return;\n"
        "  const playing = this.sound.sounds\n"
        "    .filter((s) => s.isPlaying)\n"
        "    .map((s) => s.key);\n"
        "  this.hudText.setText(\n"
        '    "Now playing: " + (playing.join(", ") || "(none)")\n'
        "  );\n"
        "});\n```"
    ),
    hints=[
        (
            'Add `this.hudText` at `(8, 270)` reading `"Now playing:"` with `fontSize: "10px"`.',
            r'this\.hudText\s*=\s*this\.add\.text\(\s*8\s*,\s*270\s*,\s*["\']Now playing:["\']',
        ),
        (
            'Register a `this.events.on("update", ...)` listener.',
            r'this\.events\.on\(\s*["\']update["\']\s*,',
        ),
        (
            "Filter `this.sound.sounds` for `s.isPlaying` and map to `s.key`.",
            r"this\.sound\.sounds\s*\.filter\(\s*\(\s*s\s*\)\s*=>\s*s\.isPlaying\s*\)\s*\.map\(\s*\(\s*s\s*\)\s*=>\s*s\.key\s*\)",
        ),
        (
            'The HUD text should read `"Now playing: " + (playing.join(", ") || "(none)")`.',
            r'["\']Now playing: ["\']\s*\+\s*\(\s*playing\.join\(\s*["\'], ["\']\s*\)\s*\|\|\s*["\']\(none\)["\']',
        ),
    ],
    seed_text=seed_insert(solutions[17], CROSSFADE_BLOCK),
    mutate=lambda: state.insert_after(CROSSFADE_BLOCK, HUD_BLOCK),
)


# -----------------------------------------------------------------------------
# Step 19: prefers-reduced-motion default-mute + scene shutdown cleanup.
step(
    19,
    title="Step 19",
    description=(
        "Two accessibility/cleanup polish items in one block.\n\n"
        "1. **`prefers-reduced-motion`**: some users set this OS-level "
        "preference not just to suppress visual motion but also to soften "
        "unexpected ambient audio. Default the music to `0` volume when "
        "the media query matches.\n\n"
        "2. **Cleanup**: when the scene shuts down, stop every active "
        "sound and kill any in-flight tweens.\n\nAfter the HUD listener:"
        "\n\n```js\n"
        "const prefersReduced =\n"
        '  typeof window !== "undefined" &&\n'
        '  typeof window.matchMedia === "function" &&\n'
        '  window.matchMedia("(prefers-reduced-motion: reduce)").matches;\n'
        "if (prefersReduced) {\n"
        "  this.music.setVolume(0);\n"
        "}\n"
        'this.events.on("shutdown", () => {\n'
        "  this.sound.stopAll();\n"
        "  this.tweens.killAll();\n"
        "});\n```\n\n"
        "Toggle the OS preference and reload the preview - the music "
        "starts silent, but the slider still works as an override."
    ),
    hints=[
        (
            'Read `prefersReduced` from `window.matchMedia("(prefers-reduced-motion: reduce)").matches`.',
            r'window\.matchMedia\(\s*["\']\(prefers-reduced-motion: reduce\)["\']\s*\)\.matches',
        ),
        (
            "Guard with `typeof window !== \"undefined\"` and `typeof window.matchMedia === \"function\"`.",
            r'typeof\s+window\s*!==\s*["\']undefined["\']\s*&&\s*typeof\s+window\.matchMedia\s*===\s*["\']function["\']',
        ),
        (
            "When `prefersReduced`, call `this.music.setVolume(0)`.",
            r"if\s*\(\s*prefersReduced\s*\)\s*\{\s*this\.music\.setVolume\(\s*0\s*\)",
        ),
        (
            'Hook the `"shutdown"` event and call `this.sound.stopAll()` + `this.tweens.killAll()`.',
            r'this\.events\.on\(\s*["\']shutdown["\']\s*,\s*\(\s*\)\s*=>\s*\{\s*this\.sound\.stopAll\(\s*\)[\s\S]*this\.tweens\.killAll\(\s*\)',
        ),
    ],
    seed_text=seed_insert(solutions[18], HUD_BLOCK),
    mutate=lambda: state.insert_after(HUD_BLOCK, REDUCE_MOTION_AND_CLEANUP_BLOCK),
)


# -----------------------------------------------------------------------------
# Step 20: 50ms anti-double-play guard inside this.playSfx. The single region
# wraps the existing volume-aware playSfx and grows to a per-key timestamp map
# plus the guarded helper.
step(
    20,
    title="Step 20",
    description=(
        "Final polish. Rapid click-mashing on a SFX button stacks "
        "instances of the same SFX on the same frame, which sounds harsh. "
        "Gate every SFX play through a `playSfx(key)` helper that ignores "
        "calls within `50ms` of the previous one for that key.\n\n"
        "Replace the existing `this.playSfx = ...` with a "
        "`this.lastPlayed` map plus a guarded helper:\n\n```js\n"
        "this.lastPlayed = new Map();\n"
        "this.playSfx = (key) => {\n"
        "  const now = this.time.now;\n"
        "  const last = this.lastPlayed.get(key) ?? -Infinity;\n"
        "  if (now - last < 50) return;\n"
        "  this.lastPlayed.set(key, now);\n"
        "  this.sound.play(key, { volume: this.sfxVolume });\n"
        "};\n```\n\n"
        "You shipped a 20-step soundboard: six tappable SFX, looping "
        "music with play/pause/resume, persistent volume sliders, a "
        "tap-to-enable overlay, mute-all, stereo pan and pitch on a "
        "ping SFX, music crossfade, a HUD list of currently-playing "
        "sounds, a `prefers-reduced-motion`-aware accessibility default, "
        "and an anti-double-play guard. Sprint 16 takes these primitives "
        "into a juicy arcade brawler."
    ),
    hints=[
        (
            "Initialise `this.lastPlayed = new Map()` to track per-key timestamps.",
            r"this\.lastPlayed\s*=\s*new\s+Map\(\s*\)",
        ),
        (
            "Define `this.playSfx = (key) => ...` that returns early when `now - last < 50` and updates the map before calling `this.sound.play`.",
            r"this\.playSfx\s*=\s*\(\s*key\s*\)\s*=>\s*\{[\s\S]*const\s+now\s*=\s*this\.time\.now[\s\S]*if\s*\(\s*now\s*-\s*last\s*<\s*50\s*\)\s*return[\s\S]*this\.lastPlayed\.set\(\s*key\s*,\s*now\s*\)[\s\S]*this\.sound\.play\(\s*key\s*,\s*\{\s*volume:\s*this\.sfxVolume\s*\}\s*\)",
        ),
    ],
    seed_text=seed_wrap(solutions[19], PLAY_SFX_VOLUME_LINES),
    mutate=lambda: state.replace(PLAY_SFX_VOLUME_LINES, PLAY_SFX_GUARDED_LINES),
)


# -----------------------------------------------------------------------------
# Renderer.

import re as _re

_ANCHOR_LINE = _re.compile(
    r"^[ \t]*/\* (?:main-create|main-update|preload) \*/\n",
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

    debug_path = Path(tempfile.gettempdir()) / "fcc-soundboard-solutions.json"
    debug_path.write_text(
        _json.dumps(
            [strip_anchors(s) if s is not None else "" for s in solutions]
        ),
        encoding="utf-8",
    )
    print(f"Wrote {len(solutions) - 1} step files (1..{len(solutions) - 1})")


if __name__ == "__main__":
    main()
