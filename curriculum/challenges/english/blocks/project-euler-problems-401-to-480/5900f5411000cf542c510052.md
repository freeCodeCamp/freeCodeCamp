---
id: 5900f5411000cf542c510052
title: 'Problem 467: Superinteger'
challengeType: 1
forumTopicId: 302142
dashedName: problem-467-superinteger
---

# --description--

An integer $s$ is called a superinteger of another integer $n$ if the digits of $n$ form a subsequence of the digits of $s$.

For example, 2718281828 is a superinteger of 18828, while 314159 is not a superinteger of 151.

Let $p(n)$ be the $n$th prime number, and let $c(n)$ be the $n$th composite number. For example, $p(1) = 2$, $p(10) = 29$, $c(1) = 4$ and $c(10) = 18$.

$$\begin{align}
  & \\{p(i) : i ≥ 1\\} = \\{2, 3, 5, 7, 11, 13, 17, 19, 23, 29, \ldots \\} \\\\
  & \\{c(i) : i ≥ 1\\} = \\{4, 6, 8, 9, 10, 12, 14, 15, 16, 18, \ldots \\}
\end{align}$$

Let $P^D$ the sequence of the digital roots of $\\{p(i)\\}$ ($C^D$ is defined similarly for $\\{c(i)\\}$):

$$\begin{align}
  & P^D = \\{2, 3, 5, 7, 2, 4, 8, 1, 5, 2, \ldots \\} \\\\
  & C^D = \\{4, 6, 8, 9, 1, 3, 5, 6, 7, 9, \ldots \\}
\end{align}$$

Let $P_n$ be the integer formed by concatenating the first $n$ elements of $P^D$ ($C_n$ is defined similarly for $C^D$).

$$\begin{align}
  & P_{10} = 2\\,357\\,248\\,152 \\\\
  & C_{10} = 4\\,689\\,135\\,679
\end{align}$$

Let $f(n)$ be the smallest positive integer that is a common superinteger of $P_n$ and $C_n$. For example, $f(10) = 2\\,357\\,246\\,891\\,352\\,679$, and $f(100)\bmod 1\\,000\\,000\\,007 = 771\\,661\\,825$.

Find $f(10\\,000)\bmod 1\\,000\\,000\\,007$.

# --hints--

`superinteger()` should return `775181359`.

```js
assert.strictEqual(superinteger(), 775181359);
```

# --seed--

## --seed-contents--

```js
function superinteger() {

  return true;
}

superinteger();
```

# --solutions--

```js
// solution required
```
