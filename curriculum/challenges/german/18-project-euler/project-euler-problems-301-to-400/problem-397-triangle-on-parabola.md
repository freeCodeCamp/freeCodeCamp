---
id: 5900f4f91000cf542c51000c
title: 'Problem 397: Dreieck auf Parabel'
challengeType: 1
forumTopicId: 302062
dashedName: problem-397-triangle-on-parabola
---

# --description--

On the parabola $y = \frac{x^2}{k}$, three points $A(a, \frac{a^2}{k})$, $B(b, \frac{b^2}{k})$ and $C(c, \frac{c^2}{k})$ are chosen.

Lasse $F(K, X)$ die Anzahl der ganzzahligen Quadrupel $(k, a, b, c)$ sein, sodass mindestens ein Winkel des Dreiecks $ABC$ 45° beträgt, wobei $1 ≤ k ≤ K$ und $-X ≤ a &lt; b &lt; c ≤ X$.

For example, $F(1, 10) = 41$ and $F(10, 100) = 12\\,492$.

Find $F({10}^6, {10}^9)$.

# --hints--

`triangleOnParabola()` should return `141630459461893730`.

```js
assert.strictEqual(triangleOnParabola(), 141630459461893730);
```

# --seed--

## --seed-contents--

```js
function triangleOnParabola() {

  return true;
}

triangleOnParabola();
```

# --solutions--

```js
// solution required
```
