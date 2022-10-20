---
id: 5900f43c1000cf542c50ff4e
title: 'Problem 207: Integer partition equations'
challengeType: 1
forumTopicId: 301848
dashedName: problem-207-integer-partition-equations
---

# --description--

For some positive integers $k$, there exists an integer partition of the form $4^t = 2^t + k$,

where $4^t$, $2^t$, and $k$ are all positive integers and $t$ is a real number.

The first two such partitions are $4^1 = 2^1 + 2$ and $4^{1.584\\,962\\,5\ldots} = 2^{1.584\\,962\\,5\ldots} + 6$.

Partitions where $t$ is also an integer are called perfect. For any $m ≥ 1$ let $P(m)$ be the proportion of such partitions that are perfect with $k ≤ m$.

Thus $P(6) = \frac{1}{2}$.

In the following table are listed some values of $P(m)$

$$\begin{align}   & P(5) = \frac{1}{1}    \\\\
  & P(10) = \frac{1}{2}   \\\\   & P(15) = \frac{2}{3}   \\\\
  & P(20) = \frac{1}{2}   \\\\   & P(25) = \frac{1}{2}   \\\\
  & P(30) = \frac{2}{5}   \\\\   & \ldots                \\\\
  & P(180) = \frac{1}{4}  \\\\ & P(185) = \frac{3}{13} \end{align}$$

Find the smallest $m$ for which $P(m) &lt; \frac{1}{12\\,345}$

# --hints--

`integerPartitionEquations()` should return `44043947822`.

```js
assert.strictEqual(integerPartitionEquations(), 44043947822);
```

# --seed--

## --seed-contents--

```js
function integerPartitionEquations() {

  return true;
}

integerPartitionEquations();
```

# --solutions--

```js
// solution required
```
