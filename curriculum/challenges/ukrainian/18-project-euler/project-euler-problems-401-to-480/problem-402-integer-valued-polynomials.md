---
id: 5900f4ff1000cf542c510011
title: 'Problem 402: Integer-valued polynomials'
challengeType: 1
forumTopicId: 302070
dashedName: problem-402-integer-valued-polynomials
---

# --description--

It can be shown that the polynomial $n^4 + 4n^3 + 2n^2 + 5n$ is a multiple of 6 for every integer $n$. It can also be shown that 6 is the largest integer satisfying this property.

Define $M(a, b, c)$ as the maximum $m$ such that $n^4 + an^3 + bn^2 + cn$ is a multiple of $m$ for all integers $n$. For example, $M(4, 2, 5) = 6$.

Also, define $S(N)$ as the sum of $M(a, b, c)$ for all $0 &lt; a, b, c ≤ N$.

We can verify that $S(10) = 1\\,972$ and $S(10\\,000) = 2\\,024\\,258\\,331\\,114$.

Let $F_k$ be the Fibonacci sequence:

- $F_0 = 0$, $F_1 = 1$ and
- $F_k = F_{k - 1} + F_{k - 2}$ for $k ≥ 2$.

Find the last 9 digits of $\sum S(F_k)$ for $2 ≤ k ≤ 1\\,234\\,567\\,890\\,123$.

# --hints--

`integerValuedPolynomials()` should return `356019862`.

```js
assert.strictEqual(integerValuedPolynomials(), 356019862);
```

# --seed--

## --seed-contents--

```js
function integerValuedPolynomials() {

  return true;
}

integerValuedPolynomials();
```

# --solutions--

```js
// solution required
```
