---
id: 5900f5021000cf542c510014
title: 'Problem 405: A rectangular tiling'
challengeType: 1
forumTopicId: 302073
dashedName: problem-405-a-rectangular-tiling
---

# --description--

We wish to tile a rectangle whose length is twice its width.

Let $T(0)$ be the tiling consisting of a single rectangle.

For $n > 0$, let $T(n)$ be obtained from $T( n- 1)$ by replacing all tiles in the following manner:

<img alt="obtaining T(n) from T(n - 1)" src="https://cdn.freecodecamp.org/curriculum/project-euler/a-rectangular-tiling-1.png" style="background-color: white; padding: 10px; display: block; margin-right: auto; margin-left: auto; margin-bottom: 1.2rem;">

The following animation demonstrates the tilings $T(n)$ for $n$ from 0 to 5:

<img alt="animation with tilings T(n) for n from 0 to 5" src="https://cdn.freecodecamp.org/curriculum/project-euler/a-rectangular-tiling-2.gif" style="background-color: white; padding: 10px; display: block; margin-right: auto; margin-left: auto; margin-bottom: 1.2rem;">

Let $f(n)$ be the number of points where four tiles meet in $T(n)$. For example, $f(1) = 0$, $f(4) = 82$ and $f({10}^9)\bmod {17}^7 = 126\\,897\\,180$.

Find $f({10}^k)$ for $k = {10}^{18}$, give your answer modulo ${17}^7$.

# --hints--

`rectangularTiling()` should return `237696125`.

```js
assert.strictEqual(rectangularTiling(), 237696125);
```

# --seed--

## --seed-contents--

```js
function rectangularTiling() {

  return true;
}

rectangularTiling();
```

# --solutions--

```js
// solution required
```
