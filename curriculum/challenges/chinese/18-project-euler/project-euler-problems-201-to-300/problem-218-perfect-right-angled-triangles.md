---
id: 5900f4461000cf542c50ff59
title: '问题218：完美的直角三角形'
challengeType: 1
forumTopicId: 301860
dashedName: problem-218-perfect-right-angled-triangles
---

# --description--

Consider the right-angled triangle with sides $a=7$, $b=24$ and $c=25$.

如果-it是一个原始的直角三角形，我们将称为直角三角形完美 - 斜边是一个完美的正方形

Moreover it is a primitive right-angled triangle as $gcd(a,b) = 1$ and $gcd(b,c) = 1$.

Also $c$ is a perfect square.

We will call a right-angled triangle perfect if:

- it is a primitive right-angled triangle
- its hypotenuse is a perfect square

We will call a right-angled triangle super-perfect if:

- it is a perfect right-angled triangle
- its area is a multiple of the perfect numbers 6 and 28.

How many perfect right-angled triangles with $c ≤ {10}^{16}$ exist that are not super-perfect?

# --hints--

`perfectRightAngledTriangles()` should return `0`.

```js
assert.strictEqual(perfectRightAngledTriangles(), 0);
```

# --seed--

## --seed-contents--

```js
function perfectRightAngledTriangles() {

  return true;
}

perfectRightAngledTriangles();
```

# --solutions--

```js
// solution required
```
