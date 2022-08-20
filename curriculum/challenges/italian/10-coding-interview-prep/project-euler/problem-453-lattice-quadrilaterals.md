---
id: 5900f5311000cf542c510044
title: 'Problema 453: reticoli di quadrilateri'
challengeType: 1
forumTopicId: 302126
dashedName: problem-453-lattice-quadrilaterals
---

# --description--

Un semplice quadrilatero è un poligono che ha quattro vertici distinti, non ha angoli dritti e non si auto-interseca.

Lascia che $Q(m, n)$ sia il numero di quadrilaterali semplici i cui vertici sono punti del reticolo con coordinate ($x$, $y$) soddisfacenti $0 ≤ x ≤ m$ e $0 ≤ y ≤ n$.

Per esempio, $Q(2, 2) = 94$ come si può vedere di seguito:

<img class="img-responsive center-block" alt="94 quadrilaterali i cui vertici sono punti del reticolo con coordinate (x, y) che soddisfano 0 &le; x &le; m e 0 &le; y &le; n" src="https://cdn.freecodecamp.org/curriculum/project-euler/lattice-quadrilaterals.png" style="background-color: white; padding: 10px;" />

Può anche essere verificato che $Q(3, 7) = 39\\,590$, $Q(12, 3) = 309\\,000$ and $Q(123, 45) = 70\\,542\\,215\\,894\\,646$.

Trova $Q(12\\,345, 6\\,789)\bmod 135\\,707\\,531$.

# --hints--

`latticeQuadrilaterals()` dovrebbe restituire `104354107`.

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
