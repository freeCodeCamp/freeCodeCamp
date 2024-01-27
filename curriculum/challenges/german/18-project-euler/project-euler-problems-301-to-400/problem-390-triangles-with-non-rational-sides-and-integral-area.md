---
id: 5900f4f21000cf542c510005
title: 'Problem 390: Dreiecke mit nicht ganzzahligen Seiten und ganzzahliger Fläche'
challengeType: 1
forumTopicId: 302055
dashedName: problem-390-triangles-with-non-rational-sides-and-integral-area
---

# --description--

Consider the triangle with sides $\sqrt{5}$, $\sqrt{65}$ and $\sqrt{68}$. It can be shown that this triangle has area 9.

$S(n)$ ist die Summe der Flächen aller Dreiecke mit den Seiten $\sqrt{1 + b^2}$, $\sqrt{1 + c^2}$ und $\sqrt{b^2 + c^2}$ (für positive ganze Zahlen $b$ und $c$), deren Flächeninhalt $n$ nicht überschreitet.

The example triangle has $b = 2$ and $c = 8$.

$S({10}^6) = 18\\,018\\,206$.

Find $S({10}^{10})$.

# --hints--

`nonRationalSidesAndIntegralArea()` should return `2919133642971`.

```js
assert.strictEqual(nonRationalSidesAndIntegralArea(), 2919133642971);
```

# --seed--

## --seed-contents--

```js
function nonRationalSidesAndIntegralArea() {

  return true;
}

nonRationalSidesAndIntegralArea();
```

# --solutions--

```js
// solution required
```
