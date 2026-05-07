"""Generate Chapter 6 endless-runner assets for the Phaser certification.

Produces 5 horizontally tileable parallax PNGs plus a cactus obstacle and a
flying enemy sprite-sheet under
client/static/curriculum-assets/phaser/spritesheets/. Run once when authoring
Sprint 13; the PNGs are committed and this script is not.
"""

from pathlib import Path
from PIL import Image, ImageDraw

OUT_DIR = (
    Path(__file__).resolve().parents[2]
    / "client/static/curriculum-assets/phaser/spritesheets"
)
OUT_DIR.mkdir(parents=True, exist_ok=True)

T = (0, 0, 0, 0)

SKY_TOP = (62, 122, 200, 255)
SKY_MID = (118, 178, 232, 255)
SKY_BOT = (210, 232, 248, 255)
SUN = (255, 232, 154, 255)
SUN_GLOW = (255, 232, 154, 80)

MTN_DARK = (62, 76, 110, 255)
MTN_MID = (88, 102, 138, 255)
MTN_SNOW = (235, 240, 248, 255)

HILL_DARK = (66, 116, 86, 255)
HILL_MID = (92, 148, 110, 255)
HILL_LIGHT = (132, 184, 138, 255)

GROUND_GRASS = (108, 168, 96, 255)
GROUND_GRASS_DK = (72, 132, 70, 255)
GROUND_DIRT = (148, 102, 70, 255)
GROUND_DIRT_DK = (102, 70, 48, 255)
GROUND_STONE = (78, 64, 56, 255)

CLOUD = (255, 255, 255, 230)
CLOUD_EDGE = (224, 232, 248, 230)

CACTUS = (78, 142, 86, 255)
CACTUS_DK = (52, 102, 60, 255)
CACTUS_HL = (134, 192, 132, 255)
CACTUS_SPINE = (40, 70, 44, 255)

ENEMY_BODY = (188, 78, 102, 255)
ENEMY_BODY_DK = (134, 48, 70, 255)
ENEMY_WING = (240, 192, 200, 255)
ENEMY_EYE = (28, 28, 32, 255)
ENEMY_BEAK = (252, 196, 88, 255)


def make_sky() -> None:
    w, h = 256, 320
    img = Image.new("RGBA", (w, h), T)
    px = img.load()
    for y in range(h):
        t = y / (h - 1)
        if t < 0.55:
            k = t / 0.55
            r = int(SKY_TOP[0] + (SKY_MID[0] - SKY_TOP[0]) * k)
            g = int(SKY_TOP[1] + (SKY_MID[1] - SKY_TOP[1]) * k)
            b = int(SKY_TOP[2] + (SKY_MID[2] - SKY_TOP[2]) * k)
        else:
            k = (t - 0.55) / 0.45
            r = int(SKY_MID[0] + (SKY_BOT[0] - SKY_MID[0]) * k)
            g = int(SKY_MID[1] + (SKY_BOT[1] - SKY_MID[1]) * k)
            b = int(SKY_MID[2] + (SKY_BOT[2] - SKY_MID[2]) * k)
        for x in range(w):
            px[x, y] = (r, g, b, 255)
    d = ImageDraw.Draw(img, "RGBA")
    cx, cy, r = 200, 70, 22
    for k in range(3):
        rr = r + 8 + k * 6
        d.ellipse((cx - rr, cy - rr, cx + rr, cy + rr), fill=SUN_GLOW)
    d.ellipse((cx - r, cy - r, cx + r, cy + r), fill=SUN)
    img.save(OUT_DIR / "parallax-sky.png", optimize=True)


def make_mountains() -> None:
    w, h = 256, 160
    img = Image.new("RGBA", (w, h), T)
    d = ImageDraw.Draw(img)
    far_peaks = [(-30, 110), (40, 60), (110, 100), (180, 50), (260, 110), (286, 110)]
    d.polygon(far_peaks + [(w + 10, h), (-30, h)], fill=MTN_MID)
    near_peaks = [
        (-40, 130),
        (20, 80),
        (60, 120),
        (110, 70),
        (150, 110),
        (200, 64),
        (260, 120),
    ]
    d.polygon(near_peaks + [(w + 10, h), (-40, h)], fill=MTN_DARK)
    for px, py in [(20, 80), (110, 70), (200, 64)]:
        d.polygon(
            [(px - 8, py + 12), (px, py), (px + 8, py + 12)],
            fill=MTN_SNOW,
        )
    img.save(OUT_DIR / "parallax-mountains.png", optimize=True)


def make_hills() -> None:
    w, h = 256, 100
    img = Image.new("RGBA", (w, h), T)
    d = ImageDraw.Draw(img)
    d.ellipse((-60, 30, 120, 150), fill=HILL_MID)
    d.ellipse((90, 40, 230, 160), fill=HILL_DARK)
    d.ellipse((180, 30, 320, 150), fill=HILL_MID)
    d.ellipse((-30, 60, 60, 130), fill=HILL_LIGHT)
    d.ellipse((140, 70, 220, 130), fill=HILL_LIGHT)
    img.save(OUT_DIR / "parallax-hills.png", optimize=True)


def make_ground() -> None:
    w, h = 256, 64
    img = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(img)
    d.rectangle((0, 0, w, 7), fill=GROUND_GRASS)
    d.rectangle((0, 0, w, 0), fill=GROUND_GRASS_DK)
    for x in range(0, w, 2):
        if (x // 2) % 3 == 0:
            d.line((x, 0, x, 2), fill=GROUND_GRASS_DK)
    d.rectangle((0, 8, w, h - 1), fill=GROUND_DIRT)
    for sx, sy in [(20, 16), (54, 28), (96, 14), (140, 36), (180, 22), (228, 42)]:
        d.ellipse((sx - 4, sy - 3, sx + 4, sy + 3), fill=GROUND_DIRT_DK)
    for sx, sy in [(34, 50), (110, 54), (200, 50)]:
        d.ellipse((sx - 3, sy - 2, sx + 3, sy + 2), fill=GROUND_STONE)
    d.line((0, h - 1, w, h - 1), fill=GROUND_DIRT_DK)
    img.save(OUT_DIR / "parallax-ground.png", optimize=True)


def make_clouds() -> None:
    w, h = 256, 96
    img = Image.new("RGBA", (w, h), T)
    d = ImageDraw.Draw(img, "RGBA")
    clouds = [
        [(20, 40), (40, 28), (60, 38), (80, 44), (54, 50)],
        [(120, 22), (140, 14), (160, 22), (180, 28), (146, 32)],
        [(200, 60), (218, 50), (240, 58), (256, 64), (228, 68)],
    ]
    for blobs in clouds:
        for cx, cy in blobs:
            d.ellipse((cx - 18, cy - 10, cx + 18, cy + 10), fill=CLOUD)
        for cx, cy in blobs:
            d.ellipse((cx - 18, cy - 12, cx + 18, cy - 4), fill=CLOUD_EDGE)
    img.save(OUT_DIR / "parallax-clouds.png", optimize=True)


def make_cactus() -> None:
    w, h = 24, 32
    img = Image.new("RGBA", (w, h), T)
    d = ImageDraw.Draw(img)
    d.rectangle((10, 6, 14, 30), fill=CACTUS)
    d.line((10, 6, 10, 30), fill=CACTUS_HL)
    d.line((14, 6, 14, 30), fill=CACTUS_DK)
    d.rectangle((4, 12, 9, 16), fill=CACTUS)
    d.rectangle((4, 8, 6, 16), fill=CACTUS)
    d.line((4, 8, 4, 16), fill=CACTUS_HL)
    d.rectangle((15, 16, 19, 20), fill=CACTUS)
    d.rectangle((18, 12, 20, 20), fill=CACTUS)
    d.line((20, 12, 20, 20), fill=CACTUS_DK)
    for y in (10, 14, 20, 26):
        d.point((11, y), fill=CACTUS_SPINE)
        d.point((13, y), fill=CACTUS_SPINE)
    d.line((9, 30, 15, 30), fill=CACTUS_DK)
    img.save(OUT_DIR / "cactus.png", optimize=True)


def enemy_frame(step: int) -> Image.Image:
    img = Image.new("RGBA", (24, 16), T)
    d = ImageDraw.Draw(img)
    d.ellipse((6, 5, 18, 13), fill=ENEMY_BODY)
    d.line((6, 5, 18, 5), fill=ENEMY_BODY)
    d.arc((6, 5, 18, 13), start=180, end=360, fill=ENEMY_BODY_DK)
    if step in (0, 2):
        d.polygon([(7, 7), (1, 2), (8, 9)], fill=ENEMY_WING)
        d.polygon([(17, 7), (23, 2), (16, 9)], fill=ENEMY_WING)
    else:
        d.polygon([(7, 9), (1, 13), (8, 11)], fill=ENEMY_WING)
        d.polygon([(17, 9), (23, 13), (16, 11)], fill=ENEMY_WING)
    d.point((10, 8), fill=ENEMY_EYE)
    d.point((14, 8), fill=ENEMY_EYE)
    d.polygon([(18, 8), (22, 9), (18, 10)], fill=ENEMY_BEAK)
    return img


def make_flying_enemy() -> None:
    sheet = Image.new("RGBA", (96, 16), T)
    for i in range(4):
        sheet.paste(enemy_frame(i), (i * 24, 0))
    sheet.save(OUT_DIR / "flying-enemy.png", optimize=True)


if __name__ == "__main__":
    make_sky()
    make_mountains()
    make_hills()
    make_ground()
    make_clouds()
    make_cactus()
    make_flying_enemy()
    for name in (
        "parallax-sky.png",
        "parallax-mountains.png",
        "parallax-hills.png",
        "parallax-ground.png",
        "parallax-clouds.png",
        "cactus.png",
        "flying-enemy.png",
    ):
        path = OUT_DIR / name
        size = path.stat().st_size
        with Image.open(path) as im:
            print(f"{name}: {im.size} {size} bytes")
