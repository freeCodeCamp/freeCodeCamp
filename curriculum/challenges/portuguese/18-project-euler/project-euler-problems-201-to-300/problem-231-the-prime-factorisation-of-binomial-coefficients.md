---
id: 5900f4531000cf542c50ff66
title: 'Problema 231: Fatoração de números primos de coeficientes binomiais'
challengeType: 1
forumTopicId: 301875
dashedName: problem-231-the-prime-factorisation-of-binomial-coefficients
---

# --description--

O coeficiente binomial $\displaystyle\binom{10}{3} = 120$.

$120 = 2^3 × 3 × 5 = 2 × 2 × 2 × 3 × 5$, and $2 + 2 + 2 + 3 + 5 = 14$.

Portanto, a soma dos termos na fatoração de números primos de $\displaystyle\binom{10}{3}$ é $14$.

Encontre a soma dos termos na fatoração de números primos de $\binom{20.000.000}{15.000.000}$.

# --hints--

`primeFactorisation()` deve retornar `7526965179680`.

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
