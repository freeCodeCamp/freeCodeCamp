"""Generate the Chapter 5 tilemap asset bundle for the Phaser certification.

Outputs three CC0 assets in
``client/static/curriculum-assets/phaser/tilemaps/``:

* ``tileset-dungeon.png``  — 12x10 tileset (120 tiles, 16x16 px each).
* ``room-01.json``         — 20x15 single-room Tiled JSON (used by Sprint 10).
* ``dungeon-01.json``      — 60x40 four-room Tiled JSON (used by Sprint 11).

Every wall tile id (12..27) carries a ``collides: true`` custom property so
``walls.setCollisionByProperty({ collides: true })`` lights up the layer.
The torch tile (id 25), door tile (id 24), and decorative tiles render
inside the tileset image and are placed in the maps as either layer tiles
or rectangle objects on the object layer.

Run once when authoring Sprint 10. The PNG and JSONs are committed; this
script is not part of the runtime build.
"""

from pathlib import Path
import json
import random

from PIL import Image, ImageDraw

OUT_DIR = (
    Path(__file__).resolve().parents[2]
    / "client/static/curriculum-assets/phaser/tilemaps"
)
OUT_DIR.mkdir(parents=True, exist_ok=True)

TILE = 16
COLS, ROWS = 12, 10
TILE_COUNT = COLS * ROWS  # 120

T = (0, 0, 0, 0)

FLOOR_LIGHT = (146, 134, 112, 255)
FLOOR_MID = (108, 96, 78, 255)
FLOOR_DARK = (74, 64, 50, 255)
FLOOR_GROUT = (52, 44, 34, 255)
FLOOR_MOSS = (96, 142, 90, 255)

WALL_LIGHT = (104, 90, 80, 255)
WALL_MID = (74, 62, 56, 255)
WALL_DARK = (44, 34, 30, 255)
WALL_HIGHLIGHT = (140, 122, 108, 255)
WALL_MORTAR = (24, 18, 16, 255)

DOOR_WOOD = (138, 88, 48, 255)
DOOR_DARK = (90, 56, 32, 255)
DOOR_BAND = (58, 38, 22, 255)
DOOR_KNOB = (236, 196, 96, 255)

TORCH_HANDLE = (90, 60, 38, 255)
TORCH_FLAME = (255, 200, 80, 255)
TORCH_FLAME_HOT = (255, 240, 200, 255)
TORCH_GLOW = (255, 160, 60, 200)

COIN_LIGHT = (255, 224, 96, 255)
COIN_MID = (236, 184, 56, 255)
COIN_DARK = (160, 108, 24, 255)
COIN_SHINE = (255, 248, 224, 255)

CHEST_WOOD = (132, 88, 48, 255)
CHEST_DARK = (84, 54, 28, 255)
CHEST_GOLD = (236, 196, 96, 255)
CHEST_LID = (96, 62, 32, 255)

KEY_GOLD = (240, 196, 80, 255)
KEY_DARK = (168, 128, 36, 255)

STAIRS_LIGHT = (118, 108, 96, 255)
STAIRS_DARK = (76, 68, 58, 255)

SKULL_BONE = (224, 218, 200, 255)
SKULL_DARK = (60, 56, 48, 255)


def fill_floor_base(d: ImageDraw.ImageDraw, ox=0, oy=0, hue_shift=0) -> None:
    rng = random.Random((ox * 31 + oy * 17 + hue_shift) & 0xFFFF)
    for y in range(TILE):
        for x in range(TILE):
            if rng.random() < 0.45:
                base = FLOOR_MID
            else:
                base = FLOOR_LIGHT
            r, g, b, a = base
            jitter = rng.randint(-12, 8)
            d.point(
                (ox + x, oy + y),
                fill=(
                    max(0, min(255, r + jitter)),
                    max(0, min(255, g + jitter)),
                    max(0, min(255, b + jitter)),
                    a,
                ),
            )
    # Soft grout cross every 4 px to imply tile seams.
    for k in (0, 8):
        d.line((ox, oy + k, ox + TILE - 1, oy + k), fill=FLOOR_GROUT)
    for k in (0, 8):
        d.line((ox + k, oy, ox + k, oy + TILE - 1), fill=FLOOR_GROUT)


def draw_floor(d: ImageDraw.ImageDraw, ox: int, oy: int, idx: int) -> None:
    fill_floor_base(d, ox, oy, hue_shift=idx * 7)
    if idx == 1:
        # Cracked floor: a forked crack.
        d.line((ox + 4, oy + 5, ox + 9, oy + 9), fill=FLOOR_DARK)
        d.line((ox + 9, oy + 9, ox + 12, oy + 11), fill=FLOOR_DARK)
        d.line((ox + 9, oy + 9, ox + 11, oy + 6), fill=FLOOR_DARK)
    elif idx == 2:
        # Mossy floor.
        for px, py in ((3, 11), (4, 12), (10, 4), (11, 5), (8, 9), (9, 9)):
            d.point((ox + px, oy + py), fill=FLOOR_MOSS)
    elif idx == 3:
        # Pebble.
        d.rectangle((ox + 6, oy + 7, ox + 8, oy + 9), fill=FLOOR_DARK)
        d.point((ox + 6, oy + 7), fill=FLOOR_LIGHT)
    elif idx == 4:
        # Subtle diagonal scrape.
        d.line((ox + 1, oy + 12, ox + 12, oy + 1), fill=FLOOR_DARK)
    # 5..11 keep the base texture (light variation only).


def draw_wall_block(d: ImageDraw.ImageDraw, ox: int, oy: int, idx: int) -> None:
    """Render a wall tile. idx in 0..11 selects the variant within row 1."""
    # Solid stone fill with mortar lines.
    for y in range(TILE):
        for x in range(TILE):
            base = WALL_LIGHT if (x + y) % 4 == 0 else WALL_MID
            d.point((ox + x, oy + y), fill=base)
    # Brick rows.
    d.line((ox, oy + 4, ox + TILE - 1, oy + 4), fill=WALL_MORTAR)
    d.line((ox, oy + 11, ox + TILE - 1, oy + 11), fill=WALL_MORTAR)
    d.line((ox + 7, oy, ox + 7, oy + 3), fill=WALL_MORTAR)
    d.line((ox + 3, oy + 5, ox + 3, oy + 10), fill=WALL_MORTAR)
    d.line((ox + 11, oy + 5, ox + 11, oy + 10), fill=WALL_MORTAR)
    d.line((ox + 7, oy + 12, ox + 7, oy + 15), fill=WALL_MORTAR)
    # Top-edge highlight + bottom-edge shadow.
    d.line((ox, oy, ox + TILE - 1, oy), fill=WALL_HIGHLIGHT)
    d.line((ox, oy + TILE - 1, ox + TILE - 1, oy + TILE - 1), fill=WALL_DARK)
    # Variant overlays expose corners / edges.
    if idx == 1:  # top edge cap
        d.line((ox, oy + 1, ox + TILE - 1, oy + 1), fill=WALL_HIGHLIGHT)
    elif idx == 2:  # bottom edge cap
        d.line((ox, oy + TILE - 2, ox + TILE - 1, oy + TILE - 2), fill=WALL_DARK)
    elif idx == 3:  # left edge cap
        d.line((ox, oy, ox, oy + TILE - 1), fill=WALL_HIGHLIGHT)
    elif idx == 4:  # right edge cap
        d.line(
            (ox + TILE - 1, oy, ox + TILE - 1, oy + TILE - 1),
            fill=WALL_DARK,
        )
    elif idx == 5:  # TL corner
        d.line((ox, oy, ox, oy + TILE - 1), fill=WALL_HIGHLIGHT)
        d.line((ox, oy, ox + TILE - 1, oy), fill=WALL_HIGHLIGHT)
    elif idx == 6:  # TR corner
        d.line(
            (ox + TILE - 1, oy, ox + TILE - 1, oy + TILE - 1),
            fill=WALL_DARK,
        )
        d.line((ox, oy, ox + TILE - 1, oy), fill=WALL_HIGHLIGHT)
    elif idx == 7:  # BL corner
        d.line((ox, oy, ox, oy + TILE - 1), fill=WALL_HIGHLIGHT)
        d.line((ox, oy + TILE - 1, ox + TILE - 1, oy + TILE - 1), fill=WALL_DARK)
    elif idx == 8:  # BR corner
        d.line(
            (ox + TILE - 1, oy, ox + TILE - 1, oy + TILE - 1),
            fill=WALL_DARK,
        )
        d.line((ox, oy + TILE - 1, ox + TILE - 1, oy + TILE - 1), fill=WALL_DARK)
    elif idx == 9:  # vertical pillar (top + bottom)
        d.line((ox, oy, ox + TILE - 1, oy), fill=WALL_HIGHLIGHT)
        d.line((ox, oy + TILE - 1, ox + TILE - 1, oy + TILE - 1), fill=WALL_DARK)
    elif idx == 10:  # horizontal beam (left + right)
        d.line((ox, oy, ox, oy + TILE - 1), fill=WALL_HIGHLIGHT)
        d.line(
            (ox + TILE - 1, oy, ox + TILE - 1, oy + TILE - 1),
            fill=WALL_DARK,
        )
    elif idx == 11:  # isolated single block (full outline)
        d.rectangle(
            (ox, oy, ox + TILE - 1, oy + TILE - 1),
            outline=WALL_HIGHLIGHT,
        )


def draw_door(d: ImageDraw.ImageDraw, ox: int, oy: int) -> None:
    fill_floor_base(d, ox, oy, hue_shift=99)
    d.rectangle((ox + 2, oy + 2, ox + 13, oy + 15), fill=DOOR_WOOD)
    for x in range(ox + 3, ox + 13, 3):
        d.line((x, oy + 3, x, oy + 14), fill=DOOR_DARK)
    d.rectangle((ox + 2, oy + 2, ox + 13, oy + 3), fill=DOOR_BAND)
    d.rectangle((ox + 2, oy + 13, ox + 13, oy + 14), fill=DOOR_BAND)
    d.point((ox + 11, oy + 8), fill=DOOR_KNOB)
    d.point((ox + 11, oy + 9), fill=DOOR_KNOB)


def draw_torch(d: ImageDraw.ImageDraw, ox: int, oy: int) -> None:
    fill_floor_base(d, ox, oy, hue_shift=42)
    d.rectangle((ox + 7, oy + 8, ox + 8, oy + 14), fill=TORCH_HANDLE)
    d.rectangle((ox + 6, oy + 5, ox + 9, oy + 8), fill=TORCH_FLAME)
    d.point((ox + 7, oy + 4), fill=TORCH_FLAME)
    d.point((ox + 8, oy + 4), fill=TORCH_FLAME)
    d.point((ox + 7, oy + 6), fill=TORCH_FLAME_HOT)
    d.point((ox + 8, oy + 7), fill=TORCH_FLAME_HOT)


def draw_coin_tile(d: ImageDraw.ImageDraw, ox: int, oy: int) -> None:
    fill_floor_base(d, ox, oy, hue_shift=64)
    d.ellipse((ox + 4, oy + 4, ox + 11, oy + 11), fill=COIN_MID)
    d.ellipse((ox + 5, oy + 5, ox + 10, oy + 10), fill=COIN_LIGHT)
    d.point((ox + 6, oy + 6), fill=COIN_SHINE)
    d.line((ox + 4, oy + 11, ox + 11, oy + 11), fill=COIN_DARK)


def draw_chest(d: ImageDraw.ImageDraw, ox: int, oy: int, *, open: bool) -> None:
    fill_floor_base(d, ox, oy, hue_shift=88)
    d.rectangle((ox + 2, oy + 7, ox + 13, oy + 14), fill=CHEST_WOOD)
    d.rectangle((ox + 2, oy + 13, ox + 13, oy + 14), fill=CHEST_DARK)
    if open:
        d.rectangle((ox + 2, oy + 3, ox + 13, oy + 6), fill=CHEST_LID)
        d.point((ox + 7, oy + 9), fill=CHEST_GOLD)
        d.point((ox + 8, oy + 9), fill=CHEST_GOLD)
    else:
        d.rectangle((ox + 2, oy + 5, ox + 13, oy + 8), fill=CHEST_LID)
        d.point((ox + 7, oy + 10), fill=CHEST_GOLD)
        d.point((ox + 8, oy + 10), fill=CHEST_GOLD)


def draw_key(d: ImageDraw.ImageDraw, ox: int, oy: int) -> None:
    fill_floor_base(d, ox, oy, hue_shift=21)
    d.ellipse((ox + 3, oy + 5, ox + 8, oy + 10), outline=KEY_GOLD)
    d.line((ox + 8, oy + 7, ox + 13, oy + 7), fill=KEY_GOLD)
    d.point((ox + 12, oy + 8), fill=KEY_GOLD)
    d.point((ox + 11, oy + 9), fill=KEY_GOLD)
    d.line((ox + 4, oy + 6, ox + 7, oy + 9), fill=KEY_DARK)


def draw_stairs(d: ImageDraw.ImageDraw, ox: int, oy: int, *, down: bool) -> None:
    fill_floor_base(d, ox, oy, hue_shift=12)
    for i in range(5):
        y = oy + 2 + i * 3
        d.rectangle((ox + 2, y, ox + 13, y + 1), fill=STAIRS_LIGHT)
        d.line((ox + 2, y + 1, ox + 13, y + 1), fill=STAIRS_DARK)
    if down:
        d.line((ox + 7, oy + 14, ox + 8, oy + 14), fill=WALL_MORTAR)


def draw_skull(d: ImageDraw.ImageDraw, ox: int, oy: int) -> None:
    fill_floor_base(d, ox, oy, hue_shift=55)
    d.ellipse((ox + 4, oy + 3, ox + 11, oy + 11), fill=SKULL_BONE)
    d.point((ox + 6, oy + 7), fill=SKULL_DARK)
    d.point((ox + 9, oy + 7), fill=SKULL_DARK)
    d.line((ox + 6, oy + 10, ox + 9, oy + 10), fill=SKULL_DARK)
    d.line((ox + 4, oy + 12, ox + 11, oy + 12), fill=SKULL_BONE)


def draw_pillar(d: ImageDraw.ImageDraw, ox: int, oy: int) -> None:
    fill_floor_base(d, ox, oy, hue_shift=33)
    d.rectangle((ox + 5, oy + 1, ox + 10, oy + 14), fill=WALL_LIGHT)
    d.line((ox + 5, oy + 1, ox + 10, oy + 1), fill=WALL_HIGHLIGHT)
    d.line((ox + 5, oy + 14, ox + 10, oy + 14), fill=WALL_DARK)
    d.line((ox + 6, oy + 4, ox + 9, oy + 4), fill=WALL_MORTAR)
    d.line((ox + 6, oy + 11, ox + 9, oy + 11), fill=WALL_MORTAR)


def draw_signpost(d: ImageDraw.ImageDraw, ox: int, oy: int) -> None:
    fill_floor_base(d, ox, oy, hue_shift=77)
    d.rectangle((ox + 7, oy + 6, ox + 8, oy + 14), fill=DOOR_DARK)
    d.rectangle((ox + 3, oy + 3, ox + 12, oy + 7), fill=DOOR_WOOD)
    d.line((ox + 5, oy + 5, ox + 10, oy + 5), fill=DOOR_DARK)


def draw_rug(d: ImageDraw.ImageDraw, ox: int, oy: int) -> None:
    fill_floor_base(d, ox, oy, hue_shift=18)
    d.rectangle((ox + 1, oy + 4, ox + 14, oy + 11), fill=(176, 60, 60, 255))
    d.line((ox + 1, oy + 4, ox + 14, oy + 4), fill=(120, 28, 28, 255))
    d.line((ox + 1, oy + 11, ox + 14, oy + 11), fill=(120, 28, 28, 255))
    d.line((ox + 4, oy + 7, ox + 11, oy + 7), fill=(232, 200, 100, 255))
    d.line((ox + 4, oy + 8, ox + 11, oy + 8), fill=(232, 200, 100, 255))


# ---------------------------------------------------------------------------
# Render the full tileset image.
# ---------------------------------------------------------------------------

# Tile-id catalog (tile id 0..119). Wall tiles are 12..23.
WALL_IDS = list(range(12, 24))


def render_tileset() -> Image.Image:
    img = Image.new("RGBA", (COLS * TILE, ROWS * TILE), T)
    d = ImageDraw.Draw(img)
    for idx in range(TILE_COUNT):
        col = idx % COLS
        row = idx // COLS
        ox = col * TILE
        oy = row * TILE
        if 0 <= idx <= 11:
            draw_floor(d, ox, oy, idx)
        elif 12 <= idx <= 23:
            draw_wall_block(d, ox, oy, idx - 12)
        elif idx == 24:
            draw_door(d, ox, oy)
        elif idx == 25:
            draw_torch(d, ox, oy)
        elif idx == 26:
            draw_coin_tile(d, ox, oy)
        elif idx == 27:
            draw_chest(d, ox, oy, open=False)
        elif idx == 28:
            draw_chest(d, ox, oy, open=True)
        elif idx == 29:
            draw_key(d, ox, oy)
        elif idx == 30:
            draw_stairs(d, ox, oy, down=True)
        elif idx == 31:
            draw_stairs(d, ox, oy, down=False)
        elif idx == 32:
            draw_skull(d, ox, oy)
        elif idx == 33:
            draw_pillar(d, ox, oy)
        elif idx == 34:
            draw_rug(d, ox, oy)
        elif idx == 35:
            draw_signpost(d, ox, oy)
        else:
            draw_floor(d, ox, oy, idx % 5)
    return img


# ---------------------------------------------------------------------------
# Build Tiled-style JSON maps.
# ---------------------------------------------------------------------------

FIRST_GID = 1


def gid(tile_id: int) -> int:
    """0 = empty in Tiled. Otherwise tile_id 0 maps to gid 1."""
    return 0 if tile_id < 0 else tile_id + FIRST_GID


def tileset_definition(image_filename: str) -> dict:
    return {
        "columns": COLS,
        "firstgid": FIRST_GID,
        "image": image_filename,
        "imageheight": ROWS * TILE,
        "imagewidth": COLS * TILE,
        "margin": 0,
        "name": "dungeon",
        "spacing": 0,
        "tilecount": TILE_COUNT,
        "tileheight": TILE,
        "tilewidth": TILE,
        "tiles": [
            {
                "id": tid,
                "properties": [
                    {"name": "collides", "type": "bool", "value": True},
                ],
            }
            for tid in WALL_IDS
        ],
    }


def tilelayer(name: str, layer_id: int, width: int, height: int, data: list[int]) -> dict:
    return {
        "data": data,
        "height": height,
        "id": layer_id,
        "name": name,
        "opacity": 1,
        "type": "tilelayer",
        "visible": True,
        "width": width,
        "x": 0,
        "y": 0,
    }


def objectgroup(name: str, layer_id: int, objects: list[dict]) -> dict:
    return {
        "draworder": "topdown",
        "id": layer_id,
        "name": name,
        "objects": objects,
        "opacity": 1,
        "type": "objectgroup",
        "visible": True,
        "x": 0,
        "y": 0,
    }


def make_object(
    obj_id: int,
    name: str,
    obj_type: str,
    tx: int,
    ty: int,
    *,
    width: int = TILE,
    height: int = TILE,
) -> dict:
    return {
        "height": height,
        "id": obj_id,
        "name": name,
        "rotation": 0,
        "type": obj_type,
        "visible": True,
        "width": width,
        "x": tx * TILE,
        "y": ty * TILE,
    }


def map_envelope(
    width: int,
    height: int,
    layers: list[dict],
    *,
    next_layer_id: int,
    next_object_id: int,
    properties: list[dict],
    image_filename: str,
) -> dict:
    return {
        "compressionlevel": -1,
        "height": height,
        "infinite": False,
        "layers": layers,
        "nextlayerid": next_layer_id,
        "nextobjectid": next_object_id,
        "orientation": "orthogonal",
        "properties": properties,
        "renderorder": "right-down",
        "tiledversion": "1.10.2",
        "tileheight": TILE,
        "tilesets": [tileset_definition(image_filename)],
        "tilewidth": TILE,
        "type": "map",
        "version": "1.10",
        "width": width,
    }


# ---- Room 01 (20x15) -------------------------------------------------------

ROOM_W, ROOM_H = 20, 15

# 'W' = wall, '.' = empty (gap; player can pass; renders only floor).
ROOM_LAYOUT = [
    "WWWWWWWWWWWWWWWWWWWW",
    "W..................W",
    "W..................W",
    "W..................W",
    "W..................W",
    "W....WWW...........W",
    "W....W.............W",
    "W....W.............W",  # door gap on row 7 col 19 below
    "W..................W",
    "W..................W",
    "W..............WWW.W",
    "W................W.W",
    "W..................W",
    "W..................W",
    "WWWWWWWWWWWWWWWWWWWW",
]

# Open the door gap on the right wall (row 7, col 19).
_row = list(ROOM_LAYOUT[7])
_row[ROOM_W - 1] = "."
ROOM_LAYOUT[7] = "".join(_row)


def build_room_01() -> dict:
    rng = random.Random(42)
    floor_data: list[int] = []
    walls_data: list[int] = []
    for ty in range(ROOM_H):
        line = ROOM_LAYOUT[ty]
        for tx in range(ROOM_W):
            roll = rng.random()
            floor_id = 0
            if roll < 0.06:
                floor_id = 1  # cracked
            elif roll < 0.12:
                floor_id = 2  # mossy
            elif roll < 0.16:
                floor_id = 3  # pebble
            floor_data.append(gid(floor_id))
            cell = line[tx]
            if cell == "W":
                walls_data.append(gid(12))
            else:
                walls_data.append(0)

    objects = [
        make_object(1, "spawn", "spawn", 2, 12),
        make_object(2, "door", "door", ROOM_W - 1, 7),
        make_object(3, "coin1", "coin", 5, 3),
        make_object(4, "coin2", "coin", 14, 3),
        make_object(5, "coin3", "coin", 14, 12),
        make_object(6, "coin4", "coin", 9, 9),
        make_object(7, "coin5", "coin", 2, 6),
        make_object(8, "torch", "torch", 10, 2),
    ]

    layers = [
        tilelayer("floor", 1, ROOM_W, ROOM_H, floor_data),
        tilelayer("walls", 2, ROOM_W, ROOM_H, walls_data),
        objectgroup("objects", 3, objects),
    ]

    return map_envelope(
        ROOM_W,
        ROOM_H,
        layers,
        next_layer_id=4,
        next_object_id=len(objects) + 1,
        properties=[
            {"name": "name", "type": "string", "value": "Stone Chamber"},
            {"name": "ambient", "type": "string", "value": "torch-flicker"},
        ],
        image_filename="tileset-dungeon.png",
    )


# ---- Dungeon 01 (60x40, 4 rooms + corridors) -------------------------------

DUN_W, DUN_H = 60, 40


def build_dungeon_01() -> dict:
    """Hand-laid 4-room dungeon. Rooms are connected via straight corridors.

    Sprint 11 needs every object the dungeon-explorer workshop reads: NPC,
    locked door (a wall tile the student removes once the key is collected),
    slime with patrol polyline, chest, save point, goal. Room layout stays
    constant across runs because the rng seed is fixed.
    """
    walls = [["." for _ in range(DUN_W)] for _ in range(DUN_H)]

    # Outer wall.
    for tx in range(DUN_W):
        walls[0][tx] = "W"
        walls[DUN_H - 1][tx] = "W"
    for ty in range(DUN_H):
        walls[ty][0] = "W"
        walls[ty][DUN_W - 1] = "W"

    rooms = [
        (2, 2, 18, 12),    # NW room
        (32, 2, 56, 12),   # NE room
        (2, 22, 18, 36),   # SW room
        (32, 22, 56, 36),  # SE room
    ]

    def carve_room(x1: int, y1: int, x2: int, y2: int) -> None:
        # Wall ring around an empty floor.
        for tx in range(x1, x2 + 1):
            walls[y1][tx] = "W"
            walls[y2][tx] = "W"
        for ty in range(y1, y2 + 1):
            walls[ty][x1] = "W"
            walls[ty][x2] = "W"

    for room in rooms:
        carve_room(*room)

    def carve_corridor(x1: int, y1: int, x2: int, y2: int) -> None:
        # 3-tile-wide corridor with walls on either side.
        if x1 == x2:
            ya, yb = sorted((y1, y2))
            for ty in range(ya, yb + 1):
                walls[ty][x1 - 1] = "W"
                walls[ty][x1] = "."
                walls[ty][x1 + 1] = "."
                walls[ty][x1 + 2] = "W"
        else:
            xa, xb = sorted((x1, x2))
            for tx in range(xa, xb + 1):
                walls[y1 - 1][tx] = "W"
                walls[y1][tx] = "."
                walls[y1 + 1][tx] = "."
                walls[y1 + 2][tx] = "W"

    # NW <-> NE: horizontal corridor through y=7.
    carve_corridor(18, 7, 32, 7)
    # NW <-> SW: vertical corridor through x=10.
    carve_corridor(10, 12, 10, 22)
    # NE <-> SE: vertical corridor through x=44.
    carve_corridor(44, 12, 44, 22)
    # SW <-> SE: horizontal corridor through y=29.
    carve_corridor(18, 29, 32, 29)

    # Locked-door wall: blocks the NW->NE corridor at (24, 7) until the
    # workshop's locked-door logic calls walls.removeTileAt(24, 7).
    walls[7][24] = "W"

    rng = random.Random(7)
    floor_data: list[int] = []
    walls_data: list[int] = []
    for ty in range(DUN_H):
        for tx in range(DUN_W):
            roll = rng.random()
            floor_id = 0
            if roll < 0.05:
                floor_id = 1
            elif roll < 0.10:
                floor_id = 2
            elif roll < 0.13:
                floor_id = 3
            floor_data.append(gid(floor_id))
            walls_data.append(gid(12) if walls[ty][tx] == "W" else 0)

    locked_door_obj = make_object(2, "locked_door", "door", 24, 7)
    locked_door_obj["properties"] = [
        {"name": "locked", "type": "bool", "value": True},
        {"name": "tx", "type": "int", "value": 24},
        {"name": "ty", "type": "int", "value": 7},
    ]

    npc_obj = make_object(15, "elder", "npc", 8, 6)
    npc_obj["properties"] = [
        {
            "name": "lines",
            "type": "string",
            "value": (
                "Welcome traveler.|"
                "Find the bronze key in the southern crypt.|"
                "Then return to the corridor in the east."
            ),
        }
    ]

    slime_obj = make_object(16, "slime_patrol", "slime", 38, 28)
    slime_obj["polyline"] = [
        {"x": 0, "y": 0},
        {"x": 96, "y": 0},
        {"x": 96, "y": 96},
        {"x": 0, "y": 96},
    ]
    slime_obj["width"] = 0
    slime_obj["height"] = 0

    objects = [
        make_object(1, "spawn", "spawn", 4, 4),
        locked_door_obj,
        make_object(3, "door_ne", "door", 49, 4),
        make_object(4, "door_se", "door", 49, 32),
        make_object(5, "door_sw", "door", 4, 32),
        make_object(6, "key", "key", 8, 32),
        make_object(7, "torch_nw", "torch", 6, 3),
        make_object(8, "torch_ne", "torch", 50, 3),
        make_object(9, "torch_sw", "torch", 6, 35),
        make_object(10, "torch_se", "torch", 50, 35),
        make_object(11, "coin_nw", "coin", 6, 9),
        make_object(12, "coin_ne", "coin", 38, 6),
        make_object(13, "coin_sw", "coin", 14, 32),
        make_object(14, "coin_se", "coin", 38, 32),
        npc_obj,
        slime_obj,
        make_object(17, "chest", "chest", 50, 6),
        make_object(18, "save", "save", 10, 32),
        make_object(19, "goal", "goal", 54, 32),
    ]

    layers = [
        tilelayer("floor", 1, DUN_W, DUN_H, floor_data),
        tilelayer("walls", 2, DUN_W, DUN_H, walls_data),
        objectgroup("objects", 3, objects),
    ]

    return map_envelope(
        DUN_W,
        DUN_H,
        layers,
        next_layer_id=4,
        next_object_id=20,
        properties=[
            {"name": "name", "type": "string", "value": "Forgotten Crypt"},
            {"name": "ambient", "type": "string", "value": "drip-echo"},
        ],
        image_filename="tileset-dungeon.png",
    )


# ---------------------------------------------------------------------------
# Entrypoint.
# ---------------------------------------------------------------------------


def main() -> None:
    img = render_tileset()
    img.save(OUT_DIR / "tileset-dungeon.png", optimize=True)
    (OUT_DIR / "room-01.json").write_text(
        json.dumps(build_room_01(), separators=(",", ":")) + "\n",
        encoding="utf-8",
    )
    (OUT_DIR / "dungeon-01.json").write_text(
        json.dumps(build_dungeon_01(), separators=(",", ":")) + "\n",
        encoding="utf-8",
    )
    for name in ("tileset-dungeon.png", "room-01.json", "dungeon-01.json"):
        size = (OUT_DIR / name).stat().st_size
        print(f"{name}: {size} bytes")


if __name__ == "__main__":
    main()
