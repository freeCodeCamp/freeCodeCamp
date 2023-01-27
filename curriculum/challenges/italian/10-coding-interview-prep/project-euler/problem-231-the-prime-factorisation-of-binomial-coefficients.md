---
id: 5900f4531000cf542c50ff66
title: 'Problema 231: La fattorizzazione prima dei coefficienti binomiali'
challengeType: 1
forumTopicId: 301875
dashedName: problem-231-the-prime-factorisation-of-binomial-coefficients
---

# --description--

Il coefficiente binomiale $\displaystyle\binom{10}{3} = 120$.

$120 = 2^3 × 3 × 5 = 2 × 2 × 2 × 3 × 5$, e $2 + 2 + 2 + 3 + 5 = 14$.

Quindi la somma dei termini nella fattorizzazione prima di $\displaystyle\binom{10}{3}$ è $14$.

Trova la somma dei termini nella fattorizzazione prima di $\binom{20\\,000\\,000}{15\\,000\\,000}$.

# --hints--

`primeFactorisation()` dovrebbe restituire `7526965179680`.

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
