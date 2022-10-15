---
id: 5900f5231000cf542c510035
title: 'Problem 439: Sum of sum of divisors'
challengeType: 1
forumTopicId: 302110
dashedName: problem-439-sum-of-sum-of-divisors
---

# --description--

Let $d(k)$ be the sum of all divisors of $k$.

We define the function $S(N) = \sum_{i = 1}^N \sum_{j = 1}^N d(i \times j)$.

For example, $S(3) = d(1) + d(2) + d(3) + d(2) + d(4) + d(6) + d(3) + d(6) + d(9) = 59$.

You are given that $S({10}^3) = 563\\,576\\,517\\,282$ and $S({10}^5)\bmod {10}^9 = 215\\,766\\,508$.

Find $S({10}^{11})\bmod {10}^9$.

# --hints--

`sumOfSumOfDivisors()` should return `968697378`.

```js
assert.strictEqual(sumOfSumOfDivisors(), 968697378);
```

# --seed--

## --seed-contents--

```js
function sumOfSumOfDivisors() {

  return true;
}

sumOfSumOfDivisors();
```

# --solutions--

```js
// solution required
```
