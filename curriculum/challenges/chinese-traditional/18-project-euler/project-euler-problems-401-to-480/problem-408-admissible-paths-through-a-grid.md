---
id: 5900f5091000cf542c51001b
title: '問題408：通過網格的可允許路徑'
challengeType: 1
forumTopicId: 302076
dashedName: problem-408-admissible-paths-through-a-grid
---

# --description--

Let's call a lattice point ($x$, $y$) inadmissible if $x$, $y$ and $x + y$ are all positive perfect squares.

例如，（9,16）是不允許的，而（0,4），（3,1）和（9,4）則不允許。

Consider a path from point ($x_1$, $y_1$) to point ($x_2$, $y_2$) using only unit steps north or east. 如果其中間點都不允許，我們可以稱這樣的路徑是可以接受的。

Let $P(n)$ be the number of admissible paths from (0, 0) to ($n$, $n$). It can be verified that $P(5) = 252$, $P(16) = 596\\,994\\,440$ and $P(1\\,000)\bmod 1\\,000\\,000\\,007 = 341\\,920\\,854$.

Find $P(10\\,000\\,000)\bmod 1\\,000\\,000\\,007$.

# --hints--

`admissiblePaths()` should return `299742733`.

```js
assert.strictEqual(admissiblePaths(), 299742733);
```

# --seed--

## --seed-contents--

```js
function admissiblePaths() {

  return true;
}

admissiblePaths();
```

# --solutions--

```js
// solution required
```
