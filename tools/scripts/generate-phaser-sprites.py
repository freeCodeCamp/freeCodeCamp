"""Generate the Chapter 2 sprite-sheet bundle for the Phaser certification.

Produces three CC0 16x16 pixel-art sprite sheets in
client/static/curriculum-assets/phaser/spritesheets/. Run once when
authoring Sprint 02; the PNGs are committed and this script is not.
"""

from pathlib import Path
from PIL import Image, ImageDraw

OUT_DIR = (
    Path(__file__).resolve().parents[2]
    / "client/static/curriculum-assets/phaser/spritesheets"
)
OUT_DIR.mkdir(parents=True, exist_ok=True)

T = (0, 0, 0, 0)
HERO_BODY = (90, 178, 255, 255)
HERO_BODY_DK = (52, 120, 200, 255)
HERO_TRIM = (255, 230, 130, 255)
HERO_FACE = (255, 219, 179, 255)
HERO_EYE = (30, 30, 30, 255)
COIN_LIGHT = (255, 220, 100, 255)
COIN_MID = (240, 175, 50, 255)
COIN_DARK = (170, 110, 20, 255)
COIN_SHINE = (255, 250, 220, 255)
SLIME_LIGHT = (130, 220, 130, 255)
SLIME_MID = (70, 175, 70, 255)
SLIME_DARK = (40, 110, 40, 255)
SLIME_EYE = (20, 30, 20, 255)
SLIME_HIGHLIGHT = (210, 255, 210, 255)


def hero_frame(direction: str, step: int) -> Image.Image:
    """Render a single 16x16 hero frame.

    direction in {"down","up","left","right"}, step in 0..3.
    The walk cycle alternates leg position by parity of step; mid-stride
    frames bob the head one pixel to fake weight transfer.
    """
    img = Image.new("RGBA", (16, 16), T)
    d = ImageDraw.Draw(img)
    bob = 1 if step in (1, 3) else 0
    body_top = 5 + bob

    d.rectangle((6, 1 + bob, 9, 4 + bob), fill=HERO_FACE)
    if direction == "down":
        d.point((6, 3 + bob), fill=HERO_EYE)
        d.point((9, 3 + bob), fill=HERO_EYE)
    elif direction == "up":
        pass
    elif direction == "left":
        d.point((6, 3 + bob), fill=HERO_EYE)
    else:
        d.point((9, 3 + bob), fill=HERO_EYE)
    d.rectangle((5, body_top, 10, body_top + 4), fill=HERO_BODY)
    d.line((5, body_top + 4, 10, body_top + 4), fill=HERO_BODY_DK)
    d.line((5, body_top, 10, body_top), fill=HERO_TRIM)

    leg_y = body_top + 5
    if step % 2 == 0:
        d.line((5, leg_y, 5, leg_y + 1), fill=HERO_BODY_DK)
        d.line((10, leg_y, 10, leg_y + 1), fill=HERO_BODY_DK)
    else:
        d.line((4, leg_y, 5, leg_y + 1), fill=HERO_BODY_DK)
        d.line((10, leg_y, 11, leg_y + 1), fill=HERO_BODY_DK)
    return img


def make_hero_sheet() -> None:
    sheet = Image.new("RGBA", (64, 64), T)
    rows = ["down", "up", "left", "right"]
    for r, direction in enumerate(rows):
        for s in range(4):
            sheet.paste(hero_frame(direction, s), (s * 16, r * 16))
    sheet.save(OUT_DIR / "hero-walk.png", optimize=True)


def coin_frame(step: int) -> Image.Image:
    img = Image.new("RGBA", (16, 16), T)
    d = ImageDraw.Draw(img)
    width_table = [10, 8, 5, 2, 0, 2, 5, 8]
    w = width_table[step]
    cx = 8
    cy_top, cy_bot = 4, 11
    if w == 0:
        d.line((cx, cy_top, cx, cy_bot), fill=COIN_DARK)
        return img
    left = cx - w // 2
    right = left + w - 1
    d.rectangle((left, cy_top, right, cy_bot), fill=COIN_MID)
    d.line((left, cy_top, right, cy_top), fill=COIN_LIGHT)
    d.line((left, cy_bot, right, cy_bot), fill=COIN_DARK)
    if w >= 4:
        d.point((left + 1, cy_top + 1), fill=COIN_SHINE)
    return img


def make_coin_sheet() -> None:
    sheet = Image.new("RGBA", (128, 16), T)
    for i in range(8):
        sheet.paste(coin_frame(i), (i * 16, 0))
    sheet.save(OUT_DIR / "coin.png", optimize=True)


def slime_frame(step: int) -> Image.Image:
    img = Image.new("RGBA", (16, 16), T)
    d = ImageDraw.Draw(img)
    squish = step in (1, 3)
    top = 6 if not squish else 8
    bot = 14
    left, right = 2, 13
    if squish:
        left, right = 1, 14
    d.rectangle((left, top, right, bot), fill=SLIME_MID)
    d.line((left, top, right, top), fill=SLIME_HIGHLIGHT)
    d.line((left, bot, right, bot), fill=SLIME_DARK)
    eye_y = top + 2
    d.point((left + 3, eye_y), fill=SLIME_EYE)
    d.point((right - 3, eye_y), fill=SLIME_EYE)
    return img


def make_slime_sheet() -> None:
    sheet = Image.new("RGBA", (64, 16), T)
    for i in range(4):
        sheet.paste(slime_frame(i), (i * 16, 0))
    sheet.save(OUT_DIR / "slime.png", optimize=True)


if __name__ == "__main__":
    make_hero_sheet()
    make_coin_sheet()
    make_slime_sheet()
    for name in ("hero-walk.png", "coin.png", "slime.png"):
        size = (OUT_DIR / name).stat().st_size
        print(f"{name}: {size} bytes")
