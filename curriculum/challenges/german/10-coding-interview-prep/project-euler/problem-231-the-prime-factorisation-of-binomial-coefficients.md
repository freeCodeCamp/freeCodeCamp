---
id: 5900f4531000cf542c50ff66
title: 'Problem 231: Die Primfaktorzerlegung der Binomialkoeffizienten'
challengeType: 1
forumTopicId: 301875
dashedName: problem-231-the-prime-factorisation-of-binomial-coefficients
---

# --description--

Der Binomialkoeffizient $\displaystyle\binom{10}{3} = 120$.

$120 = 2^3 × 3 × 5 = 2 × 2 × 2 × 3 × 5$, und $2 + 2 + 2 + 3 + 5 = 14$.

Die Summe der Begriffe in der Primfaktorzerlegung von $\displaystyle\binom{10}{3}$ ist also $14$.

Finde die Summe der Begriffe in der Primfaktorzerlegung von $\binom{20\\,000\\,000}{15\\,000\,000}$.

# --hints--

`primeFactorisation()` sollte `7526965179680` zurückgeben.

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
