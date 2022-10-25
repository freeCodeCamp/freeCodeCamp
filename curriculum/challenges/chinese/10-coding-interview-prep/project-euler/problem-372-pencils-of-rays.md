---
id: 5900f4e11000cf542c50fff3
title: 'Problem 372: Pencils of rays'
challengeType: 1
forumTopicId: 302034
dashedName: problem-372-pencils-of-rays
---

# --description--

Let $R(M, N)$ be the number of lattice points ($x$, $y$) which satisfy $M \lt x \le N$, $M \lt y \le N$ and $\left\lfloor\frac{y^2}{x^2}\right\rfloor$ is odd.

We can verify that $R(0, 100) = 3\\,019$ and $R(100, 10\\,000) = 29\\,750\\,422$.

Find $R(2 \times {10}^6, {10}^9)$.

**Note:** $\lfloor x\rfloor$ represents the floor function.

# --hints--

`pencilsOfRays()` should return `301450082318807040`.

```js
assert.strictEqual(pencilsOfRays(), 301450082318807040);
```

# --seed--

## --seed-contents--

```js
function pencilsOfRays() {

  return true;
}

pencilsOfRays();
```

# --solutions--

```js
// solution required
```
