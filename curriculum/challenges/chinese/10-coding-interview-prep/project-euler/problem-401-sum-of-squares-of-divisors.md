---
id: 5900f4fd1000cf542c51000f
title: 'Problem 401: Sum of squares of divisors'
challengeType: 1
forumTopicId: 302069
dashedName: problem-401-sum-of-squares-of-divisors
---

# --description--

The divisors of 6 are 1, 2, 3 and 6.

The sum of the squares of these numbers is $1 + 4 + 9 + 36 = 50$.

Let $\sigma_2(n)$ represent the sum of the squares of the divisors of $n$. Thus $\sigma_2(6) = 50$.

Let $\Sigma_2$ represent the summatory function of $\sigma_2$, that is $\Sigma_2(n) = \sum \sigma_2(i)$ for $i=1$ to $n$. The first 6 values of $\Sigma_2$ are: 1, 6, 16, 37, 63 and 113.

Find $\Sigma_2({10}^{15})$ modulo ${10}^9$.

# --hints--

`sumOfSquaresDivisors()` should return `281632621`.

```js
assert.strictEqual(sumOfSquaresDivisors(), 281632621);
```

# --seed--

## --seed-contents--

```js
function sumOfSquaresDivisors() {

  return true;
}

sumOfSquaresDivisors();
```

# --solutions--

```js
// solution required
```
