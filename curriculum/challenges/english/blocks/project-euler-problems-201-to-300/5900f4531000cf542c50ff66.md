---
id: 5900f4531000cf542c50ff66
title: 'Problem 231: The prime factorisation of binomial coefficients'
challengeType: 1
forumTopicId: 301875
dashedName: problem-231-the-prime-factorisation-of-binomial-coefficients
---

# --description--

The binomial coefficient $\displaystyle\binom{10}{3} = 120$.

$120 = 2^3 × 3 × 5 = 2 × 2 × 2 × 3 × 5$, and $2 + 2 + 2 + 3 + 5 = 14$.

So the sum of the terms in the prime factorisation of $\displaystyle\binom{10}{3}$ is $14$.

Find the sum of the terms in the prime factorisation of $\binom{20\\,000\\,000}{15\\,000\\,000}$.

# --hints--

`primeFactorisation()` should return `7526965179680`.

```js
assert.strictEqual(primeFactorisation(), 7526965179680);
```

# --seed--

## --seed-contents--

```js
function primeFactorisation() {

  return true;
}

primeFactorisation();
```

# --solutions--

```js
// solution required
```
