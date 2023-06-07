---
id: 5900f4da1000cf542c50ffec
title: 'Problem 365: A huge binomial coefficient'
challengeType: 1
forumTopicId: 302026
dashedName: problem-365-a-huge-binomial-coefficient
---

# --description--

The binomial coefficient $\displaystyle\binom{{10}^{18}}{{10}^9}$ is a number with more than 9 billion ($9 × {10}^9$) digits.

Let $M(n, k, m)$ denote the binomial coefficient $\displaystyle\binom{n}{k}$ modulo $m$.

Calculate $\sum M({10}^{18}, {10}^9, p \times q \times r)$ for $1000 &lt; p &lt; q &lt; r &lt; 5000$ and $p$, $q$, $r$ prime.

# --hints--

`hugeBinomialCoefficient()` should return `162619462356610300`.

```js
assert.strictEqual(hugeBinomialCoefficient(), 162619462356610300);
```

# --seed--

## --seed-contents--

```js
function hugeBinomialCoefficient() {

  return true;
}

hugeBinomialCoefficient();
```

# --solutions--

```js
// solution required
```
