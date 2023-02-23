---
id: 5900f5311000cf542c510044
title: 'Problematik 453: Quadrilaterale Gitter'
challengeType: 1
forumTopicId: 302126
dashedName: problem-453-lattice-quadrilaterals
---

# --description--

Ein einfaches Viereck ist ein Vieleck, das vier verschiedene Eckpunkte hat, keine geraden Winkel aufweist und sich nicht selbst schneidet.

Lasse $Q(m, n)$ die Anzahl der einfachen Vierecke sein, deren Eckpunkte Gitterpunkte mit Koordinaten ($x$, $y$) sind, die $0 ≤ x ≤ m$ und $0 ≤ y ≤ n$ erfüllen.

Zum Beispiel $Q(2, 2) = 94$, wie unten zu sehen ist:

<img class="img-responsive center-block" alt="94 Vierecke, deren Eckpunkte Gitterpunkte mit Koordinaten (x, y) sind, die 0 &le; x &le; m und 0 &le; y &le; n genügen" src="https://cdn.freecodecamp.org/curriculum/project-euler/lattice-quadrilaterals.png" style="background-color: white; padding: 10px;" />

Es lässt sich auch nachweisen, dass $Q(3, 7) = 39\\,590$, $Q(12, 3) = 309\\,000$ und $Q(123, 45) = 70\\,542\\,215\\,894\\,646$.

Finde $Q(12\\,345, 6\\,789)\bmod 135\\,707\\,531$.

# --hints--

`latticeQuadrilaterals()` sollte `104354107` zurückgeben.

```js
assert.strictEqual(latticeQuadrilaterals(), 104354107);
```

# --seed--

## --seed-contents--

```js
function latticeQuadrilaterals() {

  return true;
}

latticeQuadrilaterals();
```

# --solutions--

```js
// solution required
```
