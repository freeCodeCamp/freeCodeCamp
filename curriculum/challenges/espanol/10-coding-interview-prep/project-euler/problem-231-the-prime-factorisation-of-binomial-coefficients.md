---
id: 5900f4531000cf542c50ff66
title: 'Problema 231: Factorización prima de coeficientes binomiales'
challengeType: 1
forumTopicId: 301875
dashedName: problem-231-the-prime-factorisation-of-binomial-coefficients
---

# --description--

El coeficiente binomial $\displaystyle\binom{10}{3} = 120$.

$120 = 2^3 × 3 × 5 = 2 × 2 × 2 × 3 × 5$, y $2 + 2 + 2 + 3 + 5 = 14$.

Entonces la suma de los términos en la factorización prima de $\displaystyle\binom{10}{3}$ es $14$.

Encuentra la suma de los términos en la factorización prima de $\binom{20\\,000\\,000}{15\\,000\\,000}$.

# --hints--

`primeFactorisation()` debe devolver `7526965179680`.

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
