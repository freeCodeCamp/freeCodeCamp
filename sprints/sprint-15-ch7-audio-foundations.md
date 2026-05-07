# Sprint 15 — Chapter 7 Module 1: Audio foundations

**Goal:** Two audio lectures and a 20-step soundboard workshop. First audio assets land here (~6 SFX + a music loop). Asset bundle 3.

**Prerequisites:** Sprint 14 merged.

**Out of scope:** Game-feel/juice workshop (Sprint 16) and chapter 7 finalize.

---

## References

- `PHASER_CERTIFICATION_PLAN.md` §8 (Chapter 7 Module 1).
- Phaser docs: [`Phaser.Sound.WebAudioSoundManager`](https://newdocs.phaser.io/docs/3.80.1/Phaser.Sound.WebAudioSoundManager), [`load.audio`](https://newdocs.phaser.io/docs/3.80.1/Phaser.Loader.LoaderPlugin#audio), [`sound.add`](https://newdocs.phaser.io/docs/3.80.1/Phaser.Sound.BaseSoundManager#add).

---

## ID allocation (Chapter 7 range = `66faa7...`)

| Block                                | IDs                                                                |
| ------------------------------------ | ------------------------------------------------------------------ |
| `lecture-loading-and-playing-audio`  | `66faa70000000000000000a1` … `66faa70000000000000000a3`            |
| `lecture-volume-pan-and-music-fades` | `66faa70000000000000000a4` … `66faa70000000000000000a6`            |
| `workshop-soundboard`                | `66faa70000000000000000a7` … `66faa70000000000000000ba` (20 steps) |

---

## Deliverables

### 1. Asset bundle 3 — audio

Add to `client/static/curriculum-assets/phaser/audio/`:

| File                | Use                          | Source                                |
| ------------------- | ---------------------------- | ------------------------------------- |
| `sfx-jump.ogg`      | Jump SFX                     | Kenney "Interface Sounds" CC0         |
| `sfx-coin.ogg`      | Coin pickup SFX              | Kenney "Casino Audio" CC0             |
| `sfx-hit.ogg`       | Hit SFX                      | Kenney "Impact Sounds" CC0            |
| `sfx-explosion.ogg` | Explosion SFX                | Kenney "Sci-Fi Sounds" CC0            |
| `sfx-ui-click.ogg`  | UI click                     | Kenney "Interface Sounds" CC0         |
| `music-ambient.ogg` | Loopable ambient music, ~60s | OpenGameArt CC0 (cite specific track) |

Update `LICENSE.md`. Total bundle <2 MB. Provide MP3 fallbacks (`*.mp3`) for Safari, since Phaser auto-selects the playable format. Ship both `*.ogg` and `*.mp3` for each file.

### 2. Block JSONs

| Path                                                                  | Type     |
| --------------------------------------------------------------------- | -------- |
| `curriculum/structure/blocks/lecture-loading-and-playing-audio.json`  | lecture  |
| `curriculum/structure/blocks/lecture-volume-pan-and-music-fades.json` | lecture  |
| `curriculum/structure/blocks/workshop-soundboard.json`                | workshop |

### 3. Lecture challenges

`lecture-loading-and-playing-audio` × 3:

- "Loading Audio in Phaser" — `load.audio('key', ['file.ogg', 'file.mp3'])` for cross-browser fallback.
- "Playing Sounds with `sound.add` vs `sound.play`" — when to keep references vs fire-and-forget.
- "Mobile Autoplay Restrictions" — must wait for first user gesture.

`lecture-volume-pan-and-music-fades` × 3:

- "Volume and Detune at Runtime" — `setVolume`, `setDetune`, `setRate`.
- "Stereo Pan with `setPan`" — directional audio.
- "Crossfading Music" — tween a track's volume to 0 while a new track tweens up.

### 4. Workshop — `workshop-soundboard` (20 steps)

A scene with 6 buttons; each plays a distinct SFX. A play/pause music control loops the ambient track. Volume sliders for SFX bus and music bus persist to localStorage.

Step plan:

1. Bootstrap MainScene + config.
2. `load.audio` for all 6 SFX + music (with ogg+mp3 fallbacks).
3. Add 6 button rectangles labeled with SFX names.
4. `setInteractive` each button + `pointerdown` plays the SFX.
5. Acknowledge mobile autoplay restriction with a "TAP TO ENABLE AUDIO" overlay.
6. After first tap, dismiss overlay and unlock audio.
7. Add a master music play button.
8. Music plays in loop with `loop: true`.
9. Add a music pause/resume toggle.
10. Add a SFX volume slider.
11. Add a music volume slider.
12. Persist both volumes to localStorage on change.
13. Restore both volumes on scene start.
14. Add a "mute all" toggle.
15. Add a stereo pan slider tied to a "ping" SFX.
16. Add a "rate" slider that pitch-shifts the ping.
17. Add a music crossfade button between two music tracks (use the same ambient track on both for now; in chapter 9 a second track is introduced).
18. Show currently-playing sound names in a HUD list.
19. Honor `(prefers-reduced-motion)` by default-muting music (audio is sometimes part of motion sensitivity).
20. Final polish: cleanup all sounds on scene shutdown, prevent double-play of same SFX within 50ms.

Reference solution in step 20.

### 5. Wire into superblock

```json
{
  "dashedName": "audio-and-game-feel",
  "comingSoon": true,
  "modules": [
    {
      "dashedName": "audio-foundations",
      "blocks": [
        "lecture-loading-and-playing-audio",
        "lecture-volume-pan-and-music-fades",
        "workshop-soundboard"
      ]
    }
  ]
}
```

Keep `comingSoon: true`.

### 6. i18n + Playwright

`e2e/phaser-soundboard.spec.ts` — must include the post-tap audio unlock flow (Playwright simulates a first user gesture before audio is expected to play).

---

## Acceptance criteria

```bash
pnpm lint
pnpm test-curriculum-content
cd curriculum && pnpm test-tooling && cd ..
cd e2e && pnpm exec playwright test phaser-soundboard.spec.ts --project=chromium && cd ..
pnpm develop
# Verify: tap-to-enable overlay shows; clicking each button plays the matching SFX; music loops; volumes persist across reloads.
```

---

## Definition of done

- [ ] Asset bundle 3 lands with `LICENSE.md` updated, OGG + MP3 for each file.
- [ ] All 20 workshop steps pass.
- [ ] First-tap audio unlock flow works.
- [ ] Volume settings persist.
- [ ] Playwright spec green.
- [ ] PR title: `feat(curriculum): add Phaser cert ch7 module 1 — audio foundations`.
