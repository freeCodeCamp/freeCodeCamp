---
id: 5900f4da1000cf542c50ffec
title: 'Problema 365: Um coeficiente binomial enorme'
challengeType: 1
forumTopicId: 302026
dashedName: problem-365-a-huge-binomial-coefficient
---

# --description--

O coeficiente binomial $\displaystyle\binom{{10}^{18}}{{10}^9}$ é um número com mais de 9 bilhões de algarismos ($9 × {10}^9$).

Considere $M(n, k, m)$ como o coeficiente binomial $\displaystyle\binom{n}{k}$ modulo $m$.

Calcule $\sum M({10}^{18}, {10}^9, p \times q \times r)$ para$1000 &lt; p &lt; q &lt; r &lt; 5000$ e com $p$, $q$, $r$ sendo números primos.

# --hints--

`hugeBinomialCoefficient()` deve retornar `162619462356610300`.

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
