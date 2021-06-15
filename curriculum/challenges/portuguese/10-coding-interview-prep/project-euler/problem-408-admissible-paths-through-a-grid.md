---
id: 5900f5091000cf542c51001b
title: 'Problem 408: Admissible paths through a grid'
challengeType: 5
forumTopicId: 302076
dashedName: problem-408-admissible-paths-through-a-grid
---

# --description--

Let's call a lattice point (x, y) inadmissible if x, y and x + y are all positive perfect squares.

For example, (9, 16) is inadmissible, while (0, 4), (3, 1) and (9, 4) are not.

Consider a path from point (x1, y1) to point (x2, y2) using only unit steps north or east. Let's call such a path admissible if none of its intermediate points are inadmissible.

Let P(n) be the number of admissible paths from (0, 0) to (n, n). It can be verified that P(5) = 252, P(16) = 596994440 and P(1000) mod 1 000 000 007 = 341920854.

Find P(10 000 000) mod 1 000 000 007.

# --hints--

`euler408()` should return 299742733.

```js
assert.strictEqual(euler408(), 299742733);
```

# --seed--

## --seed-contents--

```js
function euler408() {

  return true;
}

euler408();
```

# --solutions--

```js
// solution required
```
