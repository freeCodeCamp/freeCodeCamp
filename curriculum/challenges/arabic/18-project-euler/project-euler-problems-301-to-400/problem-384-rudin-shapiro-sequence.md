---
id: 5900f4ed1000cf542c50fffe
title: 'Problem 384: Rudin-Shapiro sequence'
challengeType: 1
forumTopicId: 302048
dashedName: problem-384-rudin-shapiro-sequence
---

# --description--

Define the sequence $a(n)$ as the number of adjacent pairs of ones in the binary expansion of $n$ (possibly overlapping).

E.g.: $a(5) = a({101}_2) = 0$, $a(6) = a({110}_2) = 1$, $a(7) = a({111}_2) = 2$

Define the sequence $b(n) = {(-1)}^{a(n)}$. This sequence is called the Rudin-Shapiro sequence.

Also consider the summatory sequence of $b(n)$: $s(n) = \displaystyle\sum_{i = 0}^{n} b(i)$.

The first couple of values of these sequences are:

$$\begin{array}{lr}   n    & 0 & 1 & 2 &  3 & 4 & 5 &  6 & 7 \\\\
  a(n) & 0 & 0 & 0 &  1 & 0 & 0 &  1 & 2 \\\\   b(n) & 1 & 1 & 1 & -1 & 1 & 1 & -1 & 1 \\\\
  s(n) & 1 & 2 & 3 &  2 & 3 & 4 &  3 & 4 \end{array}$$

The sequence $s(n)$ has the remarkable property that all elements are positive and every positive integer $k$ occurs exactly $k$ times.

Define $g(t, c)$, with $1 ≤ c ≤ t$, as the index in $s(n)$ for which $t$ occurs for the $c$'th time in $s(n)$.

E.g.: $g(3, 3) = 6$, $g(4, 2) = 7$ and $g(54321, 12345) = 1\\,220\\,847\\,710$.

Let $F(n)$ be the fibonacci sequence defined by:

$$\begin{align}   & F(0) = F(1) = 1 \text{ and} \\\\
  & F(n) = F(n - 1) + F(n - 2) \text{ for } n > 1. \end{align}$$

Define $GF(t) = g(F(t), F(t - 1))$.

Find $\sum GF(t)$ for$ 2 ≤ t ≤ 45$.

# --hints--

`rudinShapiroSequence()` should return `3354706415856333000`.

```js
assert.strictEqual(rudinShapiroSequence(), 3354706415856333000);
```

# --seed--

## --seed-contents--

```js
function rudinShapiroSequence() {

  return true;
}

rudinShapiroSequence();
```

# --solutions--

```js
// solution required
```
