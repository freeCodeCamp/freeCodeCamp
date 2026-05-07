# Sprint 16 — Chapter 7 Module 2: Game feel & juice

**Goal:** Two lectures (anatomy of a juicy hit + particles with emitters) and a 40-step arcade brawler workshop where every hit stacks the full juice toolkit. Plus chapter 7 review + quiz. Flip Chapter 7 from `comingSoon` to live.

**Prerequisites:** Sprint 15 merged.

**Out of scope:** Chapter 8.

---

## References

- `PHASER_CERTIFICATION_PLAN.md` §8 (Chapter 7 Module 2).
- "Juice it or lose it" (Martin Jonasson & Petri Purho talk) for the conceptual frame; build the implementation from scratch in Phaser.
- Phaser docs: [`add.particles`](https://newdocs.phaser.io/docs/3.80.1/Phaser.GameObjects.GameObjectFactory#particles), [`tweens.chain`](https://newdocs.phaser.io/docs/3.80.1/Phaser.Tweens.TweenManager#chain).

---

## ID allocation

| Block                                | IDs                                                                |
| ------------------------------------ | ------------------------------------------------------------------ |
| `lecture-anatomy-of-a-juicy-hit`     | `66faa70000000000000000bb` … `66faa70000000000000000bd`            |
| `lecture-particles-with-emitters`    | `66faa70000000000000000be` … `66faa70000000000000000c0`            |
| `workshop-arcade-brawler-with-juice` | `66faa70000000000000000c1` … `66faa70000000000000000e8` (40 steps) |
| `review-audio-and-game-feel`         | `66faad0000000000000000a6`                                         |
| `quiz-audio-and-game-feel`           | `66faac0000000000000000a6`                                         |

---

## Deliverables

### 1. Block JSONs

| Path                                                                  | Type     |
| --------------------------------------------------------------------- | -------- |
| `curriculum/structure/blocks/lecture-anatomy-of-a-juicy-hit.json`     | lecture  |
| `curriculum/structure/blocks/lecture-particles-with-emitters.json`    | lecture  |
| `curriculum/structure/blocks/workshop-arcade-brawler-with-juice.json` | workshop |
| `curriculum/structure/blocks/review-audio-and-game-feel.json`         | review   |
| `curriculum/structure/blocks/quiz-audio-and-game-feel.json`           | quiz     |

### 2. Lecture challenges

`lecture-anatomy-of-a-juicy-hit` × 3:

- "The Six-Stack Recipe" — squash/stretch + tint flash + screen shake + hit-pause + particle burst + audio cue.
- "Hit-Pause Implementation" — `physics.world.pause()` for ~50ms then resume.
- "Building Restraint Into Juice" — when juice fights gameplay, it loses; how to scale by impact magnitude.

`lecture-particles-with-emitters` × 3:

- "The 3.60+ Particles API" — `add.particles(x, y, key, config)`.
- "Emitter Properties: speed, lifespan, scale, rotate, alpha" — practical recipes.
- "Bursts vs Continuous Emitters" — `explode()` vs streamed emitters.

### 3. Workshop — `workshop-arcade-brawler-with-juice` (40 steps)

A 1-screen brawler: punch enemies that explode in particles, with the full juice stack on every hit.

Step plan:

1. Bootstrap MainScene + config.
2. Add player using chapter-2 sprite sheet.
3. Cursor-key + WASD movement (action-map from chapter 3).
4. Add an attack action (J / pointer click).
5. Render a hitbox rectangle in front of the player when attacking.
6. Add 5 enemy rectangles.
7. `physics.add.overlap(hitbox, enemies, onHit)` only during attack frames.
8. `onHit` plays an audio SFX (using the chapter-7 audio bundle).
9. Tween enemy `scaleX/scaleY` 1 → 1.3 → 1 (squash/stretch).
10. `setTint(0xffffff)` for 80ms then `clearTint`.
11. `cameras.main.shake(80, 0.005)`.
12. Hit-pause: `physics.world.pause()` then `time.delayedCall(40, () => physics.world.resume())`.
13. Particle burst at hit point (`add.particles(...).explode(20)`).
14. Add tween chain — multiple steps of recoil.
15. Reduce enemy HP; destroy at 0 with full explode.
16. Score tracking.
17. HUD on UI scene.
18. Spawn enemies on a timer.
19. Increase spawn rate over time.
20. Add a sword sprite that swings on attack via tween rotation.
21. Add a swing trail using `Graphics`.
22. Add a "combo counter" that resets after N seconds without a hit.
23. Display combo in HUD with growing tint.
24. Add a heavy-hit variant that scales juice up.
25. Add screen shake intensity scaled by impact.
26. Add slow-mo: brief `time.timeScale = 0.4` on a heavy hit.
27. Add a crit chance with extra particles.
28. Add a player damage state with full juice (red flash + tint + shake).
29. Game over scene.
30. Add a boss enemy with multi-stage HP.
31. Boss-defeated cinematic: long shake + chain of particle bursts.
32. Persistent best score.
33. Honor `prefers-reduced-motion`: scale all juice multipliers to 0.2 when set.
34. Mute toggle in HUD.
35. Add controller-friendly virtual buttons on touch.
36. Polish: prevent attack spam.
37. Polish: prevent enemies overlapping each other excessively.
38. Polish: clamp combo counter font size.
39. Polish: dispose of particle emitters on destroy.
40. Final integration: a 60-second run with full juice on every interaction.

Reference solution in step 40.

### 4. Review — `review-audio-and-game-feel`

Sections: loading audio, playing sounds, volume/pan/rate, music fades, juice recipe, particles, hit-pause, accessibility opt-out.

### 5. Quiz — `quiz-audio-and-game-feel`

20 questions covering all of chapter 7.

### 6. Wire into superblock

```json
{
  "dashedName": "audio-and-game-feel",
  "modules": [
    {
      "dashedName": "audio-foundations",
      "blocks": [
        "lecture-loading-and-playing-audio",
        "lecture-volume-pan-and-music-fades",
        "workshop-soundboard"
      ]
    },
    {
      "dashedName": "game-feel-and-juice",
      "blocks": [
        "lecture-anatomy-of-a-juicy-hit",
        "lecture-particles-with-emitters",
        "workshop-arcade-brawler-with-juice",
        "review-audio-and-game-feel",
        "quiz-audio-and-game-feel"
      ]
    }
  ]
}
```

**Remove `comingSoon: true` from the chapter.** Chapter 7 has no cert lab — its workshop is the capstone. The next cert lab is in chapter 8.

### 7. i18n + Playwright

`e2e/phaser-arcade-brawler.spec.ts`. Test motion-reduced flag actually scales juice down.

---

## Acceptance criteria

```bash
pnpm lint
pnpm test-curriculum-content
cd curriculum && pnpm test-tooling && cd ..
cd e2e && pnpm exec playwright test phaser-arcade-brawler.spec.ts --project=chromium && cd ..
pnpm develop
# Beat 60 seconds with full juice; toggle motion-reduced and verify shakes/tween scales drop.
```

---

## Definition of done

- [ ] All 40 workshop steps pass.
- [ ] Full juice stack visible on every hit when motion-reduced is OFF.
- [ ] Juice stack measurably damped when motion-reduced is ON.
- [ ] Chapter 7 no longer `comingSoon`.
- [ ] PR title: `feat(curriculum): add Phaser cert ch7 module 2 — game feel + juice`.
