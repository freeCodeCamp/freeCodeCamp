---
id: 5900f4da1000cf542c50ffec
title: 'Problem 365: Ein riesiger Binomialkoeffizient'
challengeType: 1
forumTopicId: 302026
dashedName: problem-365-a-huge-binomial-coefficient
---

# --description--

The binomial coefficient $\displaystyle\binom{{10}^{18}}{{10}^9}$ is a number with more than 9 billion ($9 × {10}^9$) digits.

Bezeichne $M(n, k, m)$ als den Binomialkoeffizienten $\displaystyle\binom{n}{k}$ modulo $m$.

Berechne $\sum M({10}^{18}, {10}^9, p \times q \times r)$ für $1000 &lt; p &lt; q &lt; r &lt; 5000$ und $p$, $q$, $r$ Primzahl.

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
