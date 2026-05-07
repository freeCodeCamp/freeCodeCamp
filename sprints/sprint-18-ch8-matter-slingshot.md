# Sprint 18 — Chapter 8 Module 2: Matter physics & slingshot

**Goal:** Two lectures (arcade vs Matter; Matter bodies & constraints) and a 40-step slingshot launcher workshop demonstrating spring constraints, polygon bodies, and stacked Matter blocks.

**Prerequisites:** Sprint 17 merged.

**Out of scope:** Match-3 cert lab + chapter 8 finalize (Sprint 19).

---

## References

- `PHASER_CERTIFICATION_PLAN.md` §8 (Chapter 8 Module 2).
- Phaser docs: [`Physics.Matter.MatterPhysics`](https://newdocs.phaser.io/docs/3.80.1/Phaser.Physics.Matter.MatterPhysics), [`Matter.Constraint`](https://newdocs.phaser.io/docs/3.80.1/Phaser.Physics.Matter.Matter.Constraint).
- Matter.js docs: <https://brm.io/matter-js/docs/>.

---

## ID allocation

| Block                                   | IDs                                                                |
| --------------------------------------- | ------------------------------------------------------------------ |
| `lecture-arcade-vs-matter`              | `66faa80000000000000000d9` … `66faa80000000000000000db`            |
| `lecture-matter-bodies-and-constraints` | `66faa80000000000000000dc` … `66faa80000000000000000de`            |
| `workshop-slingshot-launcher`           | `66faa80000000000000000df` … `66faa80000000000000000fa` (40 steps) |

> **Note:** Chapter 8 has 50 (workshop) + 40 (workshop) + 6 (lectures) + 6 (lectures across 2 modules) ≈ ~110 challenges, which fits the `66faa8...` range comfortably (256 IDs).

---

## Deliverables

### 1. Block JSONs

| Path                                                                     | Type     |
| ------------------------------------------------------------------------ | -------- |
| `curriculum/structure/blocks/lecture-arcade-vs-matter.json`              | lecture  |
| `curriculum/structure/blocks/lecture-matter-bodies-and-constraints.json` | lecture  |
| `curriculum/structure/blocks/workshop-slingshot-launcher.json`           | workshop |

### 2. Lecture challenges

`lecture-arcade-vs-matter` × 3:

- "Arcade Physics vs Matter Physics" — performance, accuracy, feature trade-offs.
- "When Each Is the Right Choice" — top-down/platformer favour arcade; ragdoll/stacking favour Matter.
- "Switching Physics Per Scene" — `physics: { default: 'matter', matter: { ... } }`.

`lecture-matter-bodies-and-constraints` × 3:

- "Matter Body Shapes" — rectangle, circle, polygon, compound; verts.
- "Constraints" — pin, spring, distance; `pointA`, `pointB`, `length`, `stiffness`, `damping`.
- "Sleeping and Performance" — Matter's sleep system; tuning thresholds.

### 3. Workshop — `workshop-slingshot-launcher` (40 steps)

Angry-Birds-style game: drag projectile back against a spring, release, watch it knock down a tower of Matter blocks. Score by blocks knocked off the ground.

Step plan:

1. Bootstrap MainScene + config with `physics.default: 'matter'`.
2. Add ground rectangle as a static Matter body.
3. Add a slingshot anchor at fixed point.
4. Spawn a projectile circle with a spring constraint to the anchor.
5. Set the spring `stiffness` and `length`.
6. Make the projectile draggable on pointer-down.
7. Constrain drag distance.
8. On pointer-up, the spring fires the projectile.
9. Add a stack of 8 Matter blocks at the right side.
10. `physics.add.collider`-equivalent: collisions are automatic in Matter.
11. Detect block-falls-off-ground and score.
12. HUD with score and projectiles remaining.
13. Add 3 projectile attempts per round.
14. Round ends when no projectiles left.
15. Compute end-of-round score from blocks knocked.
16. Round transition cinematic with tween.
17. Add 5 levels with different block stack arrangements.
18. Add a polygon "log" block.
19. Add a "boulder" heavy circle.
20. Add a "balloon" body that floats (negative gravity per body).
21. Add explosive blocks: detonate on impact, push neighbors with `applyForce`.
22. Visualize trajectory while aiming with `Graphics`.
23. Show predicted path using a low-fidelity simulation.
24. Add a chain of projectile types on a deck (red default, big rock, exploder, splitter).
25. Splitter projectile splits into 3 mid-air on tap.
26. Exploder explodes mid-air on tap.
27. Big rock projectile is heavier with extra impact.
28. Persist best score per level in localStorage.
29. Camera shake on big impacts (from chapter 6/7).
30. Particle burst on block destroy.
31. Audio cue on launch / impact (from chapter 7).
32. Honor `prefers-reduced-motion` for shake/dust.
33. Add UI to switch between projectile types.
34. Mobile touch controls.
35. Tutorial overlay on first run.
36. Game-cleared celebration when last block falls.
37. Game-failed scene when no projectiles left and stack remains.
38. Polish: lock input during projectile flight.
39. Polish: clean up bodies that fall off-world.
40. Final integration: 3 levels playable end-to-end.

Reference solution in step 40.

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
    },
    {
      "dashedName": "intro-to-matter-physics",
      "blocks": [
        "lecture-arcade-vs-matter",
        "lecture-matter-bodies-and-constraints",
        "workshop-slingshot-launcher"
      ]
    }
  ]
}
```

Keep `comingSoon: true`.

### 5. i18n + Playwright

`e2e/phaser-slingshot.spec.ts`.

---

## Acceptance criteria

```bash
pnpm lint
pnpm test-curriculum-content
cd curriculum && pnpm test-tooling && cd ..
cd e2e && pnpm exec playwright test phaser-slingshot.spec.ts --project=chromium && cd ..
pnpm develop
# Beat all 3 levels; verify special projectile types behave; verify Matter stacking is correct.
```

---

## Definition of done

- [ ] All 40 workshop steps pass.
- [ ] All 4 projectile types behave correctly.
- [ ] Matter physics doesn't trip Phaser's loop-protect (ensure `disableLoopProtect*` flags are set on the workshop block).
- [ ] PR title: `feat(curriculum): add Phaser cert ch8 module 2 — Matter slingshot`.
