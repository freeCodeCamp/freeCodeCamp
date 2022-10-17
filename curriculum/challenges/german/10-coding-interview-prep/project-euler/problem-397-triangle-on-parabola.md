---
id: 5900f4f91000cf542c51000c
title: 'Problem 397: Triangle on parabola'
challengeType: 1
forumTopicId: 302062
dashedName: problem-397-triangle-on-parabola
---

# --description--

On the parabola $y = \frac{x^2}{k}$, three points $A(a, \frac{a^2}{k})$, $B(b, \frac{b^2}{k})$ and $C(c, \frac{c^2}{k})$ are chosen.

Let $F(K, X)$ be the number of the integer quadruplets $(k, a, b, c)$ such that at least one angle of the triangle $ABC$ is 45°, with $1 ≤ k ≤ K$ and $-X ≤ a &lt; b &lt; c ≤ X$.

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
