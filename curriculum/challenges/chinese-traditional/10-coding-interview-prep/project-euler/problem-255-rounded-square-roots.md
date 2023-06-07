---
id: 5900f46d1000cf542c50ff7f
title: 'Problem 255: Rounded Square Roots'
challengeType: 1
forumTopicId: 301903
dashedName: problem-255-rounded-square-roots
---

# --description--

We define the rounded-square-root of a positive integer $n$ as the square root of $n$ rounded to the nearest integer.

The following procedure (essentially Heron's method adapted to integer arithmetic) finds the rounded-square-root of $n$:

Let $d$ be the number of digits of the number $n$.

If $d$ is odd, set $x_0 = 2 × {10}^{\frac{d - 1}{2}}$.

If $d$ is even, set $x_0 = 7 × {10}^{\frac{d - 2}{2}}$.

重複：

$$x_{k + 1} = \left\lfloor\frac{x_k + \left\lceil\frac{n}{x_k}\right\rceil}{2}\right\rfloor$$

until $x_{k + 1} = x_k$.

As an example, let us find the rounded-square-root of $n = 4321$.

$n$ has 4 digits, so $x_0 = 7 × {10}^{\frac{4-2}{2}} = 70$.

$$x_1 = \left\lfloor\frac{70 + \left\lceil\frac{4321}{70}\right\rceil}{2}\right\rfloor = 66 \\\\
x_2 = \left\lfloor\frac{66 + \left\lceil\frac{4321}{66}\right\rceil}{2}\right\rfloor = 66$$

Since $x_2 = x_1$, we stop here. So, after just two iterations, we have found that the rounded-square-root of 4321 is 66 (the actual square root is 65.7343137…).

The number of iterations required when using this method is surprisingly low. For example, we can find the rounded-square-root of a 5-digit integer ($10\\,000 ≤ n ≤ 99\\,999$) with an average of 3.2102888889 iterations (the average value was rounded to 10 decimal places).

Using the procedure described above, what is the average number of iterations required to find the rounded-square-root of a 14-digit number (${10}^{13} ≤ n &lt; {10}^{14}$)? Give your answer rounded to 10 decimal places.

**Note:** The symbols $⌊x⌋$ and $⌈x⌉$ represent the floor function and ceiling function respectively.

# --hints--

`roundedSquareRoots()` should return `4.447401118`.

```js
assert.strictEqual(roundedSquareRoots(), 4.447401118);
```

# --seed--

## --seed-contents--

```js
function roundedSquareRoots() {

  return true;
}

roundedSquareRoots();
```

# --solutions--

```js
// solution required
```
