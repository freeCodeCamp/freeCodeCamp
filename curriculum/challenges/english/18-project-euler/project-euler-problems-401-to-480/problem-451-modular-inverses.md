---
id: 5900f5311000cf542c510042
title: 'Problem 451: Modular inverses'
challengeType: 1
forumTopicId: 302124
dashedName: problem-451-modular-inverses
---

# --description--

Consider the number 15.

There are eight positive numbers less than 15 which are coprime to 15: 1, 2, 4, 7, 8, 11, 13, 14.

The modular inverses of these numbers modulo 15 are: 1, 8, 4, 13, 2, 11, 7, 14 because

$$\begin{align}
  & 1  \times 1\bmod 15 = 1 \\\\
  & 2  \times 8  = 16\bmod 15 = 1 \\\\
  & 4  \times 4  = 16\bmod 15 = 1 \\\\
  & 7  \times 13 = 91\bmod 15 = 1 \\\\
  & 11 \times 11 = 121\bmod 15 = 1 \\\\
  & 14 \times 14 = 196\bmod 15 = 1
\end{align}$$

Let $I(n)$ be the largest positive number $m$ smaller than $n - 1$ such that the modular inverse of $m$ modulo $n$ equals $m$ itself.

So $I(15) = 11$.

Also $I(100) = 51$ and $I(7) = 1$.

Find $\sum I(n)$ for $3 ≤ n ≤ 2 \times {10}^7$

# --hints--

`modularInverses()` should return `153651073760956`.

```js
assert.strictEqual(modularInverses(), 153651073760956);
```

# --seed--

## --seed-contents--

```js
function modularInverses() {

  return true;
}

modularInverses();
```

# --solutions--

```js
// solution required
```
