---
id: 5900f5311000cf542c510044
title: 'Problem 453: Lattice Quadrilaterals'
challengeType: 1
forumTopicId: 302126
dashedName: problem-453-lattice-quadrilaterals
---

# --description--

A simple quadrilateral is a polygon that has four distinct vertices, has no straight angles and does not self-intersect.

Let $Q(m, n)$ be the number of simple quadrilaterals whose vertices are lattice points with coordinates ($x$, $y$) satisfying $0 ≤ x ≤ m$ and $0 ≤ y ≤ n$.

For example, $Q(2, 2) = 94$ as can be seen below:

<img class="img-responsive center-block" alt="94 quadrilaterals whose vertices are lattice points with coordinates (x, y) satiffying 0 &le; x &le; m and 0 &le; y &le; n" src="https://cdn.freecodecamp.org/curriculum/project-euler/lattice-quadrilaterals.png" style="background-color: white; padding: 10px;">

It can also be verified that $Q(3, 7) = 39\\,590$, $Q(12, 3) = 309\\,000$ and $Q(123, 45) = 70\\,542\\,215\\,894\\,646$.

Find $Q(12\\,345, 6\\,789)\bmod 135\\,707\\,531$.

# --hints--

`latticeQuadrilaterals()` should return `104354107`.

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
