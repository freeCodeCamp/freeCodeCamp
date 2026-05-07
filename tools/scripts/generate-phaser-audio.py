"""Generate Chapter 7 audio assets for the Phaser certification.

Synthesizes 5 short SFX (jump, coin, hit, explosion, ui-click) and one ~60s
ambient music loop using `sox` and converts to OGG (Vorbis) and MP3
(libmp3lame) via `ffmpeg`. Output lands in
client/static/curriculum-assets/phaser/audio/. Run once when authoring
Sprint 15; the audio files are committed and this script is not.

Tools:
  - sox            (synthesis + WAV)
  - ffmpeg         (WAV -> ogg/mp3)

All assets are CC0; nothing is sourced from third-party packs. Total
bundle stays under ~1 MB.
"""

from __future__ import annotations

import shutil
import subprocess
from pathlib import Path

OUT_DIR = (
    Path(__file__).resolve().parents[2]
    / "client/static/curriculum-assets/phaser/audio"
)
OUT_DIR.mkdir(parents=True, exist_ok=True)

SAMPLE_RATE = 44100


def run(*cmd: str) -> None:
    subprocess.run(cmd, check=True, capture_output=True)


def sox_cmd(*args: str) -> list[str]:
    return ["sox", "-V0", *args]


def synth_jump(wav: Path) -> None:
    """Short rising chirp (~180ms) — classic 'boop'."""
    run(
        *sox_cmd(
            "-n",
            "-r",
            str(SAMPLE_RATE),
            "-b",
            "16",
            "-c",
            "1",
            str(wav),
            "synth",
            "0.18",
            "sine",
            "330-880",
            "fade",
            "h",
            "0.005",
            "0.18",
            "0.05",
            "vol",
            "0.6",
        )
    )


def synth_coin(wav: Path) -> None:
    """Two ascending tones (~250ms) — bright pickup."""
    part1 = wav.with_name(wav.stem + ".p1.wav")
    part2 = wav.with_name(wav.stem + ".p2.wav")
    run(
        *sox_cmd(
            "-n",
            "-r",
            str(SAMPLE_RATE),
            "-b",
            "16",
            "-c",
            "1",
            str(part1),
            "synth",
            "0.09",
            "sine",
            "988",
            "fade",
            "h",
            "0.005",
            "0.09",
            "0.02",
            "vol",
            "0.55",
        )
    )
    run(
        *sox_cmd(
            "-n",
            "-r",
            str(SAMPLE_RATE),
            "-b",
            "16",
            "-c",
            "1",
            str(part2),
            "synth",
            "0.18",
            "sine",
            "1318",
            "fade",
            "h",
            "0.005",
            "0.18",
            "0.05",
            "vol",
            "0.6",
        )
    )
    run(*sox_cmd(str(part1), str(part2), str(wav)))
    part1.unlink()
    part2.unlink()


def synth_hit(wav: Path) -> None:
    """Punchy noise burst (~120ms)."""
    run(
        *sox_cmd(
            "-n",
            "-r",
            str(SAMPLE_RATE),
            "-b",
            "16",
            "-c",
            "1",
            str(wav),
            "synth",
            "0.12",
            "brownnoise",
            "fade",
            "h",
            "0.002",
            "0.12",
            "0.06",
            "lowpass",
            "1800",
            "vol",
            "0.7",
        )
    )


def synth_explosion(wav: Path) -> None:
    """Noise burst + downward sweep (~700ms)."""
    noise = wav.with_name(wav.stem + ".noise.wav")
    sweep = wav.with_name(wav.stem + ".sweep.wav")
    run(
        *sox_cmd(
            "-n",
            "-r",
            str(SAMPLE_RATE),
            "-b",
            "16",
            "-c",
            "1",
            str(noise),
            "synth",
            "0.7",
            "brownnoise",
            "fade",
            "t",
            "0.005",
            "0.7",
            "0.55",
            "lowpass",
            "1200",
            "vol",
            "0.75",
        )
    )
    run(
        *sox_cmd(
            "-n",
            "-r",
            str(SAMPLE_RATE),
            "-b",
            "16",
            "-c",
            "1",
            str(sweep),
            "synth",
            "0.7",
            "sine",
            "320-60",
            "fade",
            "t",
            "0.005",
            "0.7",
            "0.6",
            "vol",
            "0.4",
        )
    )
    run(*sox_cmd("-m", str(noise), str(sweep), str(wav)))
    noise.unlink()
    sweep.unlink()


def synth_ui_click(wav: Path) -> None:
    """Tiny click (~50ms)."""
    run(
        *sox_cmd(
            "-n",
            "-r",
            str(SAMPLE_RATE),
            "-b",
            "16",
            "-c",
            "1",
            str(wav),
            "synth",
            "0.05",
            "sine",
            "1760",
            "fade",
            "h",
            "0.002",
            "0.05",
            "0.04",
            "vol",
            "0.45",
        )
    )


def synth_ping(wav: Path) -> None:
    """Bell-like ping (~400ms) — bright sustained tone for pan/rate demos."""
    run(
        *sox_cmd(
            "-n",
            "-r",
            str(SAMPLE_RATE),
            "-b",
            "16",
            "-c",
            "1",
            str(wav),
            "synth",
            "0.4",
            "sine",
            "880",
            "fade",
            "h",
            "0.005",
            "0.4",
            "0.35",
            "vol",
            "0.55",
        )
    )


def synth_music_ambient(wav: Path) -> None:
    """~60s seamless ambient pad: layered low sine drones with slow tremolo.

    Built from three concatenated 20s loop cells (A B A) so the clip loops
    cleanly head-to-tail. Each cell is the same chord (C2 + G2 + Eb3) plus
    one swelling layer (G3 -> Bb3) tweened in/out with `fade`.
    """
    bed_a = wav.with_name(wav.stem + ".bed_a.wav")
    bed_b = wav.with_name(wav.stem + ".bed_b.wav")
    bed_c = wav.with_name(wav.stem + ".bed_c.wav")

    def cell(out: Path, top_freq: str) -> None:
        layers = []
        for i, freq in enumerate([65.41, 98.0, 155.56, top_freq]):
            layer = out.with_name(out.stem + f".l{i}.wav")
            layers.append(layer)
            run(
                *sox_cmd(
                    "-n",
                    "-r",
                    str(SAMPLE_RATE),
                    "-b",
                    "16",
                    "-c",
                    "1",
                    str(layer),
                    "synth",
                    "20",
                    "sine",
                    str(freq),
                    "fade",
                    "t",
                    "1.5",
                    "20",
                    "1.5",
                    "tremolo",
                    str(0.12 + i * 0.04),
                    "30",
                    "vol",
                    "0.18",
                )
            )
        run(*sox_cmd("-m", *(str(layer) for layer in layers), str(out)))
        for layer in layers:
            layer.unlink()

    cell(bed_a, "196.0")
    cell(bed_b, "233.08")
    cell(bed_c, "196.0")
    run(*sox_cmd(str(bed_a), str(bed_b), str(bed_c), str(wav), "norm", "-3"))
    bed_a.unlink()
    bed_b.unlink()
    bed_c.unlink()


def to_ogg(wav: Path, ogg: Path) -> None:
    run(*sox_cmd(str(wav), "-C", "5", str(ogg)))


def to_mp3(wav: Path, mp3: Path) -> None:
    run(
        "ffmpeg",
        "-y",
        "-loglevel",
        "error",
        "-i",
        str(wav),
        "-codec:a",
        "libmp3lame",
        "-qscale:a",
        "5",
        str(mp3),
    )


SFX = [
    ("sfx-jump", synth_jump),
    ("sfx-coin", synth_coin),
    ("sfx-hit", synth_hit),
    ("sfx-explosion", synth_explosion),
    ("sfx-ui-click", synth_ui_click),
    ("sfx-ping", synth_ping),
    ("music-ambient", synth_music_ambient),
]


def main() -> None:
    if not shutil.which("sox") or not shutil.which("ffmpeg"):
        raise SystemExit("sox and ffmpeg are required.")
    for name, synth in SFX:
        wav = OUT_DIR / f"{name}.wav"
        synth(wav)
        to_ogg(wav, OUT_DIR / f"{name}.ogg")
        to_mp3(wav, OUT_DIR / f"{name}.mp3")
        wav.unlink()
        size_ogg = (OUT_DIR / f"{name}.ogg").stat().st_size
        size_mp3 = (OUT_DIR / f"{name}.mp3").stat().st_size
        print(f"  {name}: ogg={size_ogg:>7}B  mp3={size_mp3:>7}B")


if __name__ == "__main__":
    main()
