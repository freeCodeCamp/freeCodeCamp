---
id: 5900f4fa1000cf542c51000d
title: 'Problem 398: Cutting rope'
challengeType: 1
forumTopicId: 302063
dashedName: problem-398-cutting-rope
---

# --description--

Inside a rope of length $n$, $n - 1$ points are placed with distance 1 from each other and from the endpoints. Among these points, we choose $m - 1$ points at random and cut the rope at these points to create $m$ segments.

Lasse $E(n, m)$ die erwartete Länge des zweitkürzesten Abschnitts sein. For example, $E(3, 2) = 2$ and $E(8, 3) = \frac{16}{7}$. Wenn mehrere Segmente dieselbe kürzeste Länge haben, wird die Länge des zweitkürzesten Segments als dieselbe wie die kürzeste Länge definiert.

Find $E({10}^7, 100)$. Give your answer rounded to 5 decimal places behind the decimal point.

# --hints--

`cuttingRope()` should return `2010.59096`.

```js
assert.strictEqual(cuttingRope(), 2010.59096);
```

# --seed--

## --seed-contents--

```js
function cuttingRope() {

  return true;
}

cuttingRope();
```

# --solutions--

```js
// solution required
```
