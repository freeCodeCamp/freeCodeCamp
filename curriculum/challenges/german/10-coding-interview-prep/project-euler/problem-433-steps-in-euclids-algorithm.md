---
id: 5900f51d1000cf542c51002f
title: 'Problem 433: Steps in Euclid''s algorithm'
challengeType: 1
forumTopicId: 302104
dashedName: problem-433-steps-in-euclids-algorithm
---

# --description--

Let $E(x_0, y_0)$ be the number of steps it takes to determine the greatest common divisor of $x_0$ and $y_0$ with Euclid's algorithm. More formally:

$$\begin{align}   & x_1 = y_0, y_1 = x_0\bmod y_0 \\\\
  & x_n = y_{n - 1}, y_n = x_{n - 1}\bmod y_{n - 1} \end{align}$$

$E(x_0, y_0)$ is the smallest $n$ such that $y_n = 0$.

We have $E(1, 1) = 1$, $E(10, 6) = 3$ and $E(6, 10) = 4$.

Define $S(N)$ as the sum of $E(x, y)$ for $1 ≤ x$, $y ≤ N$.

We have $S(1) = 1$, $S(10) = 221$ and $S(100) = 39\\,826$.

Find $S(5 \times {10}^6)$.

# --hints--

`stepsInEuclidsAlgorithm()` should return `326624372659664`.

```js
assert.strictEqual(stepsInEuclidsAlgorithm(), 326624372659664);
```

# --seed--

## --seed-contents--

```js
function stepsInEuclidsAlgorithm() {

  return true;
}

stepsInEuclidsAlgorithm();
```

# --solutions--

```js
// solution required
```
