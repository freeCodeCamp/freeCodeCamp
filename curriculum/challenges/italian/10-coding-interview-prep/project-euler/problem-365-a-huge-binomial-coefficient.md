---
id: 5900f4da1000cf542c50ffec
title: 'Problema 365: Un grande coefficiente binomiale'
challengeType: 1
forumTopicId: 302026
dashedName: problem-365-a-huge-binomial-coefficient
---

# --description--

Il coefficiente binomiale $\displaystyle\binom{{10}^{18}}{{10}^9}$ è un numero con più di 9 miliardi ($9 × {10}^9$) di cifre.

Sia $M(n, k, m)$ il coefficiente binomiale $\displaystyle\binom{n}{k}$ modulo $m$.

Calcola $\sum M({10}^{18}, {10}^9, p \times q \times r)$ per $1000 &lt; p &lt; q &lt; r &lt; 5000$ e $p$, $q$, $r$ numeri primi.

# --hints--

`hugeBinomialCoefficient()` dovrebbe restituire `162619462356610300`.

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
