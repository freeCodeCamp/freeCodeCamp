---
id: 5900f5361000cf542c510048
title: 'Problem 457: A polynomial modulo the square of a prime'
challengeType: 1
forumTopicId: 302131
dashedName: problem-457-a-polynomial-modulo-the-square-of-a-prime
---

# --description--

Let $f(n) = n^2 - 3n - 1$.

Let $p$ be a prime.

Let $R(p)$ be the smallest positive integer $n$ such that $f(n)\bmod p^2 = 0$ if such an integer $n$ exists, otherwise $R(p) = 0$.

Let $SR(L)$ be $\sum R(p)$ for all primes not exceeding $L$.

Find $SR({10}^7)$.

# --hints--

`polynomialModuloSquareOfPrime()` should return `2647787126797397000`.

```js
assert.strictEqual(polynomialModuloSquareOfPrime(), 2647787126797397000);
```

# --seed--

## --seed-contents--

```js
function polynomialModuloSquareOfPrime() {

  return true;
}

polynomialModuloSquareOfPrime();
```

# --solutions--

```js
// solution required
```
