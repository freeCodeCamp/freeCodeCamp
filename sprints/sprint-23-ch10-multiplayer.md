# Sprint 23 — Chapter 10 Module 2: Local & networked multiplayer

**Goal:** Three lectures (local input splitting, networking patterns, mocking a server) and a 45-step 2-player party game workshop. The networking workshop ships a _mock_ server that simulates latency in-browser — no real backend.

**Prerequisites:** Sprint 22 merged.

**Out of scope:** Deployment workshop (Sprint 24), cert labs (Sprint 25).

---

## References

- `PHASER_CERTIFICATION_PLAN.md` §8 (Chapter 10 Module 2).
- "1500 Archers on a 28.8" by Mark Terrano (concept on lockstep) — concept only.
- "Fast-Paced Multiplayer" by Gabriel Gambetta — concept on snapshot interpolation.

---

## ID allocation

| Block                                       | IDs                                                                |
| ------------------------------------------- | ------------------------------------------------------------------ |
| `lecture-local-multiplayer-input-splitting` | `66faaa0000000000000000e6` … `66faaa0000000000000000e8`            |
| `lecture-networking-patterns`               | `66faaa0000000000000000e9` … `66faaa0000000000000000eb`            |
| `lecture-mocking-a-multiplayer-server`      | `66faaa0000000000000000ec` … `66faaa0000000000000000ee`            |
| `workshop-2-player-party-game`              | `66faaa0000000000000000ef` … `66faaa00000000000000011b` (45 steps) |

> If `66faaa...` overflows, the cert-lab range `66faab...` is the next free range, but reserve `66faab00000000000000000a–0e` for capstone labs first.

---

## Deliverables

### 1. Block JSONs

| Path                                                                         | Type     |
| ---------------------------------------------------------------------------- | -------- |
| `curriculum/structure/blocks/lecture-local-multiplayer-input-splitting.json` | lecture  |
| `curriculum/structure/blocks/lecture-networking-patterns.json`               | lecture  |
| `curriculum/structure/blocks/lecture-mocking-a-multiplayer-server.json`      | lecture  |
| `curriculum/structure/blocks/workshop-2-player-party-game.json`              | workshop |

### 2. Lecture challenges

`lecture-local-multiplayer-input-splitting` × 3:

- "Splitting Keyboard Input" — Player 1: WASD/Q. Player 2: Arrows/Slash. Two key maps.
- "Two Players, One Scene" — separate state per player, shared scene.
- "Designing for Local Co-op" — screen real estate, player visibility, parity.

`lecture-networking-patterns` × 3:

- "Lockstep" — all clients send inputs, all clients run identical sim. Pros/cons.
- "Snapshot Interpolation" — server is authority, clients render delayed snapshots and interpolate.
- "Authority Models" — peer-to-peer vs client-server; cheating concerns.

`lecture-mocking-a-multiplayer-server` × 3:

- "Why Mock" — teaches the protocol without infrastructure.
- "Implementing a Fake Server in the Browser" — `class FakeServer` with `setTimeout` queues.
- "Testing Without Real Latency" — adjustable latency for teaching.

### 3. Workshop — `workshop-2-player-party-game` (45 steps)

Split-keyboard local 2-player party game (e.g. tank duel): each player drives a tank, fires shells, wins by reducing opponent's HP to 0. Best-of-5 rounds. Mobile-friendly with virtual joysticks.

Step plan:

1. Bootstrap MainScene + config.
2. Render an arena (tilemap or static rectangles).
3. Spawn Player 1 tank.
4. Spawn Player 2 tank on the other side.
5. Wire P1 input: WASD for movement, Q for fire.
6. Wire P2 input: arrows for movement, Slash for fire.
7. Tank rotates with left/right; moves forward with up.
8. Fire button shoots a shell from the tank's barrel.
9. Shell physics with arcade.
10. Shell hits opponent → opponent takes damage.
11. HP bars per tank.
12. Tank destroyed → round over.
13. Round winner stored.
14. Best-of-5: first to 3 round wins.
15. Round break with countdown.
16. Reset arena between rounds.
17. Add destructible terrain blocks.
18. Add a power-up that spawns mid-round.
19. Power-ups: speed boost, shield, multi-shot.
20. HUD: P1/P2 scoreboards.
21. End-of-match cinematic.
22. Persistent best win streak in localStorage.
23. Mobile virtual joystick for P1 (left side).
24. Mobile virtual joystick for P2 (right side).
25. Mobile fire buttons.
26. Honor `prefers-reduced-motion`.
27. Audio: fire, hit, win, lose (chapter 7).
28. Add a tutorial round on first launch.
29. Add a "rematch" prompt on match end.
30. Add stats summary (shots fired, hits, accuracy).
31. Implement the `FakeServer` class for the optional networked mode.
32. `FakeServer.connect(playerId, callbacks)`.
33. `FakeServer.send(playerId, msg)` queues with simulated latency.
34. Latency simulation: 50ms ± 30ms jitter.
35. Build a "local mode" toggle vs "fake networked mode".
36. In fake-networked mode, P1 input goes through fake server; P2 is server-controlled bot.
37. Demonstrate snapshot interpolation: client renders 100ms behind authoritative state.
38. Show without interpolation (jittery) vs with (smooth).
39. Add a debug overlay showing simulated ping.
40. Polish: input lockout during round-break.
41. Polish: prevent multiple shell spawns per fire press.
42. Polish: clean up FakeServer connections on shutdown.
43. Polish: handle window blur (auto-pause).
44. Polish: ensure mobile virtual joysticks don't conflict with touch elsewhere.
45. Final integration: best-of-5 match end-to-end in both local and fake-networked modes.

Reference solution in step 45.

### 4. Wire into superblock

```json
{
  "dashedName": "procgen-multiplayer-and-deployment",
  "comingSoon": true,
  "modules": [
    {
      "dashedName": "procedural-generation",
      "blocks": [
        /* unchanged from Sprint 22 */
      ]
    },
    {
      "dashedName": "local-and-networked-multiplayer",
      "blocks": [
        "lecture-local-multiplayer-input-splitting",
        "lecture-networking-patterns",
        "lecture-mocking-a-multiplayer-server",
        "workshop-2-player-party-game"
      ]
    }
  ]
}
```

Keep `comingSoon: true`.

### 5. i18n + Playwright

`e2e/phaser-2-player-party-game.spec.ts` — Playwright simulates two simultaneous keyboard sources via the `keyboard.down`/`up` API.

---

## Acceptance criteria

```bash
pnpm lint
pnpm test-curriculum-content
cd curriculum && pnpm test-tooling && cd ..
cd e2e && pnpm exec playwright test phaser-2-player-party-game.spec.ts --project=chromium && cd ..
pnpm develop
# Best-of-5 match completable; fake-networked mode shows visibly smoother movement with snapshot interpolation.
```

---

## Definition of done

- [ ] All 45 workshop steps pass.
- [ ] Both input modes (local + fake-networked) work.
- [ ] Snapshot interpolation visibly smooths movement when latency is added.
- [ ] PR title: `feat(curriculum): add Phaser cert ch10 module 2 — multiplayer party game`.
