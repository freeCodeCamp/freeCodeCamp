# Sprint 24 — Chapter 10 Module 3: Mobile scaling & deployment

**Goal:** Three lectures (Scale Manager, asset loading strategies for perf, shipping to itch.io / GitHub Pages) and a 25-step "optimize and ship" workshop where the learner takes a deliberately bloated game, optimizes it, and walks through deployment.

**Prerequisites:** Sprint 23 merged.

**Out of scope:** Cert labs (Sprint 25), final cert flip (Sprint 26).

---

## References

- `PHASER_CERTIFICATION_PLAN.md` §8 (Chapter 10 Module 3).
- Phaser docs: [`Phaser.Scale.ScaleManager`](https://newdocs.phaser.io/docs/3.80.1/Phaser.Scale.ScaleManager), config `scale.mode`, `scale.autoCenter`.
- itch.io HTML5 publishing docs.

---

## ID allocation

The chapter-10 range may be tight by this sprint. If `66faaa...` is exhausted, fall back to `66faab...` starting at `66faab0000000000000000a0` (reserving `66faab00000000000000000a–0e` for cert labs).

| Block                                          | IDs                             |
| ---------------------------------------------- | ------------------------------- |
| `lecture-scale-manager-and-responsive-design`  | next 3 free in chapter-10 range |
| `lecture-asset-loading-strategies-and-perf`    | next 3 free                     |
| `lecture-shipping-to-itch-io-and-github-pages` | next 3 free                     |
| `workshop-optimize-and-ship-a-game`            | next 25 free                    |
| `review-procgen-multiplayer-and-deployment`    | `66faad0000000000000000a9`      |
| `quiz-procgen-multiplayer-and-deployment`      | `66faac0000000000000000a9`      |

Document final ID assignments at the top of the sprint PR description.

---

## Deliverables

### 1. Block JSONs

| Path                                                                            | Type     |
| ------------------------------------------------------------------------------- | -------- |
| `curriculum/structure/blocks/lecture-scale-manager-and-responsive-design.json`  | lecture  |
| `curriculum/structure/blocks/lecture-asset-loading-strategies-and-perf.json`    | lecture  |
| `curriculum/structure/blocks/lecture-shipping-to-itch-io-and-github-pages.json` | lecture  |
| `curriculum/structure/blocks/workshop-optimize-and-ship-a-game.json`            | workshop |
| `curriculum/structure/blocks/review-procgen-multiplayer-and-deployment.json`    | review   |
| `curriculum/structure/blocks/quiz-procgen-multiplayer-and-deployment.json`      | quiz     |

### 2. Lecture challenges

`lecture-scale-manager-and-responsive-design` × 3:

- "Phaser Scale Modes" — `FIT`, `RESIZE`, `ENVELOP`, `EXACT_FIT`. When each is right.
- "Auto-Center" — `Phaser.Scale.CENTER_BOTH`.
- "Mobile-First Canvas Sizing" — design at a base resolution, scale to device.

`lecture-asset-loading-strategies-and-perf` × 3:

- "Texture Atlases Beat Single Images" — fewer GL bind calls.
- "Object Pooling for Bullets and Particles" — recycle, don't recreate.
- "Lazy Loading per Scene" — load only what each scene needs.

`lecture-shipping-to-itch-io-and-github-pages` × 3:

- "Building a Production Bundle" — folder structure, minification.
- "Uploading to itch.io" — zip, upload, configure HTML5 viewport.
- "Deploying to GitHub Pages" — `gh-pages` branch, custom domain.

### 3. Workshop — `workshop-optimize-and-ship-a-game` (25 steps)

Hands the learner a deliberately bloated game (each bullet creates a new sprite, each frame queries unbatched textures, scaling broken on mobile), then walks them through optimization.

Step plan:

1. Bootstrap with the deliberately-bloated reference game pre-loaded.
2. Open dev tools and observe FPS dropping when bullets spawn.
3. Diagnose: `Phaser.GameObjects.Container` stats; texture-atlas vs single-image.
4. Replace single-image bullet load with a packed atlas.
5. Verify FPS recovery.
6. Diagnose: `bullets.create` allocates new sprites per shot.
7. Implement object pool for bullets.
8. Reuse bullets via `setActive(true).setVisible(true)`.
9. Verify GC pressure dropped (note: in lieu of GC tools, monitor frame jitter).
10. Diagnose: scaling broken on mobile.
11. Configure `scale.mode = Phaser.Scale.FIT` and `autoCenter = CENTER_BOTH`.
12. Test in mobile viewport (Playwright iPhone preset).
13. Diagnose: assets all loaded up-front, even ones for unused scenes.
14. Move scene-specific loads into per-scene `preload`.
15. Verify boot time improvement.
16. Add a loading screen that runs during preload.
17. Add a progress bar driven by `this.load.on('progress')`.
18. Build a deployable zip: contents = `index.html`, `script.js`, `/curriculum-assets/`.
19. Configure itch.io project metadata (template included).
20. Configure GitHub Pages: list the steps as a checklist with copy-pasteable commands.
21. Add a `manifest.json` for "Add to Home Screen" support.
22. Add a service worker stub for offline caching (template).
23. Add Lighthouse / PageSpeed tips inline.
24. Add accessibility audit checklist (color contrast, motion-reduced, keyboard parity).
25. Final integration: a measurably faster game, a deploy-ready bundle, and a published URL (instructions only — actual hosting outside the lesson).

Reference solution in step 25.

### 4. Review + quiz

Sections covering: procgen + RNG, BSP, loot tables, local + networked multiplayer, snapshot interp, scale manager, perf optimization, deployment.

### 5. Wire into superblock

```json
{
  "dashedName": "procgen-multiplayer-and-deployment",
  "comingSoon": true,
  "modules": [
    {
      "dashedName": "procedural-generation",
      "blocks": [
        /* unchanged */
      ]
    },
    {
      "dashedName": "local-and-networked-multiplayer",
      "blocks": [
        /* unchanged */
      ]
    },
    {
      "dashedName": "mobile-scaling-and-deployment",
      "blocks": [
        "lecture-scale-manager-and-responsive-design",
        "lecture-asset-loading-strategies-and-perf",
        "lecture-shipping-to-itch-io-and-github-pages",
        "workshop-optimize-and-ship-a-game",
        "review-procgen-multiplayer-and-deployment",
        "quiz-procgen-multiplayer-and-deployment"
      ]
    }
  ]
}
```

Keep `comingSoon: true` on the chapter — Sprint 25 (cert labs) flips it.

### 6. i18n + Playwright

`e2e/phaser-optimize-and-ship.spec.ts`. Run the workshop's reference solution against both desktop and Playwright's `iPhone 12` preset to verify scale config.

---

## Acceptance criteria

```bash
pnpm lint
pnpm test-curriculum-content
cd curriculum && pnpm test-tooling && cd ..
cd e2e && pnpm exec playwright test phaser-optimize-and-ship.spec.ts --project=chromium && cd ..
cd e2e && pnpm exec playwright test phaser-optimize-and-ship.spec.ts --project='Mobile Safari' && cd ..
pnpm develop
# Workshop runs without FPS drops after step 8 (object pool installed).
# Mobile preset shows the canvas correctly scaled and centered.
```

---

## Definition of done

- [ ] All 25 workshop steps pass.
- [ ] FPS measurably improves between the bloated initial state and the post-optimization state.
- [ ] Mobile scale config works on Playwright mobile presets.
- [ ] Review + quiz authored.
- [ ] PR title: `feat(curriculum): add Phaser cert ch10 module 3 — scaling + deployment`.
