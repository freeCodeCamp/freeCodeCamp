# Sprint 17 — Chapter 8 Module 1: Tweens, post-FX & match-3 workshop

**Goal:** Two lectures (tween system from scratch + post-processing pipelines) and the 50-step `workshop-match-3-puzzle`. The match-3 game is tween-driven, no physics — and demonstrates chained tweens at scale.

**Prerequisites:** Sprint 16 merged.

**Out of scope:** Matter slingshot (Sprint 18) and match-3 cert lab (Sprint 19).

---

## References

- `PHASER_CERTIFICATION_PLAN.md` §8 (Chapter 8 Module 1).
- Phaser docs: [`tweens.add`](https://newdocs.phaser.io/docs/3.80.1/Phaser.Tweens.TweenManager#add), [`tweens.chain`](https://newdocs.phaser.io/docs/3.80.1/Phaser.Tweens.TweenManager#chain), `setPostPipeline`, [easing functions](https://newdocs.phaser.io/docs/3.80.1/Phaser.Math.Easing).

---

## ID allocation (Chapter 8 range = `66faa8...`)

| Block                               | IDs                                                                |
| ----------------------------------- | ------------------------------------------------------------------ |
| `lecture-tween-system-from-scratch` | `66faa80000000000000000a1` … `66faa80000000000000000a3`            |
| `lecture-post-processing-pipelines` | `66faa80000000000000000a4` … `66faa80000000000000000a6`            |
| `workshop-match-3-puzzle`           | `66faa80000000000000000a7` … `66faa80000000000000000d8` (50 steps) |

---

## Deliverables

### 1. Block JSONs

| Path                                                                 | Type     |
| -------------------------------------------------------------------- | -------- |
| `curriculum/structure/blocks/lecture-tween-system-from-scratch.json` | lecture  |
| `curriculum/structure/blocks/lecture-post-processing-pipelines.json` | lecture  |
| `curriculum/structure/blocks/workshop-match-3-puzzle.json`           | workshop |

### 2. Lecture challenges

`lecture-tween-system-from-scratch` × 3:

- "Anatomy of a Tween" — `targets`, `props`, `duration`, `ease`, `repeat`, `yoyo`, `delay`.
- "Chained and Sequenced Tweens" — `tweens.chain` for multi-stage animations.
- "Easing Curves Visualized" — interactive snippets cycling through Cubic, Bounce, Elastic, Back, etc.

`lecture-post-processing-pipelines` × 3:

- "What a Pipeline Is" — fragment-shader pass on a render target.
- "Built-in Pipelines" — `Phaser.Renderer.WebGL.Pipelines.PostFX.*` (Glow, Blur, Pixelate, Vignette, Bloom in 3.60+).
- "Performance Cost on Mobile" — when to use, when to skip; scale to hardware.

### 3. Workshop — `workshop-match-3-puzzle` (50 steps)

A complete match-3: 8×8 grid of gem sprites, swap with pointer/touch, detect 3-in-a-row matches, cascade with chained tweens, score, levels, win condition.

Step plan (representative):

1. Bootstrap MainScene + config.
2. Create a `Grid` class with 8×8 positions.
3. Render gem sprites at grid positions (use chapter-2 sprite sheet for 5 gem colors).
4. Track grid state as a 2D array of gem types.
5. Add pointer-down → select; pointer-up on adjacent → request swap.
6. Tween two gems' positions to swap.
7. After swap, check for 3-in-a-row matches.
8. If no matches, tween-swap them back.
9. If matches, tween matched gems to scale 0 then destroy.
10. Drop above-gems down to fill empty slots via chained tween.
11. Spawn new gems at the top to fill the grid.
12. Cascade-check after settling — if new matches, recurse.
13. Score per matched gem.
14. HUD with score.
15. Combo counter (number of cascading match rounds).
16. Bonus score for combos.
17. Add 4-in-a-row "stripe" gem creation rule.
18. Stripe gem clears entire row on match.
19. Add 5-in-a-row "color-bomb" gem creation rule.
20. Color-bomb clears all gems of one color.
21. Add T- and L-shape "wrapped" gem rule.
22. Wrapped gem clears 3×3 area.
23. Animate special-gem creation with a bigger tween + particle burst.
24. Add level definitions: clear N gems of a color within M moves.
25. HUD with moves remaining.
26. Win/lose end states.
27. Win → next level.
28. Lose → game-over scene with restart.
29. Persist best score per level in localStorage.
30. Add post-FX vignette around the playfield.
31. Add bloom on special-gem creation.
32. Honor `prefers-reduced-motion`: shorten tween durations.
33. Mobile touch: drag gem in cardinal direction to swap.
34. Add a tutorial overlay explaining the rules on first run.
35. Add a hint system: after 5 seconds idle, pulse a viable swap.
36. Time-attack mode: clear N gems in 60 seconds.
37. Mode select on title screen.
38. Add audio (reuses chapter 7 audio bundle): swap, match, cascade, lose, win.
39. SFX volume tied to settings from chapter 7's soundboard.
40. Add a pause menu.
41. Polish: lock input during cascade.
42. Polish: prevent diagonal swaps (only horizontal/vertical).
43. Polish: prevent bottomless cascade by limiting recursion depth defensively.
44. Polish: align gem sprites pixel-perfect.
45. Polish: handle window resize (re-center grid).
46. Polish: typeable score animation.
47. Polish: save partial progress to localStorage.
48. Polish: load saved game on refresh.
49. Polish: clear all timers on scene shutdown.
50. Final integration: complete 3 levels end-to-end.

Reference solution in step 50.

### 4. Wire into superblock

```json
{
  "dashedName": "tweens-fx-and-matter-physics",
  "comingSoon": true,
  "modules": [
    {
      "dashedName": "tween-mastery-and-post-fx",
      "blocks": [
        "lecture-tween-system-from-scratch",
        "lecture-post-processing-pipelines",
        "workshop-match-3-puzzle"
      ]
    }
  ]
}
```

Keep `comingSoon: true`.

### 5. i18n + Playwright

`e2e/phaser-match-3.spec.ts`.

---

## Acceptance criteria

```bash
pnpm lint
pnpm test-curriculum-content
cd curriculum && pnpm test-tooling && cd ..
cd e2e && pnpm exec playwright test phaser-match-3.spec.ts --project=chromium && cd ..
pnpm develop
# Clear 3 levels end-to-end, observe cascading combos, special gems creation, bonus scoring.
```

---

## Definition of done

- [ ] All 50 workshop steps pass.
- [ ] All 3 special-gem rules trigger correctly.
- [ ] Cascade scoring is bug-free across recursion.
- [ ] PR title: `feat(curriculum): add Phaser cert ch8 module 1 — tweens + match-3 workshop`.
