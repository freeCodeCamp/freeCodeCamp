---
id: 5900f3e71000cf542c50fefa
title: 'Problema 123: Residuos de cuadrados primos'
challengeType: 1
forumTopicId: 301750
dashedName: problem-123-prime-square-remainders
---

# --description--

Let $p_n$ be the $n$th prime: 2, 3, 5, 7, 11, ..., and let $r$ be the remainder when ${(p_n−1)}^n + {(p_n+1)}^n$ is divided by ${p_n}^2$.

Por ejemplo, cuando $n = 3, p_3 = 5$, y $4^3 + 6^3 = 280 ≡ 5\\ mod\\ 25$.

El valor menor de $n$ para el cual el primer residuo excede $10^9$ is 7037.

Encuentra el valor menor de $n$ para el cual el primer residuo excede $10^{10}$.

# --hints--

`primeSquareRemainders()` debería devolver `21035`.

```js
assert.strictEqual(primeSquareRemainders(), 21035);
```

# --seed--

## --seed-contents--

```js
function primeSquareRemainders() {

  return true;
}

primeSquareRemainders();
```

# --solutions--

```js
// solution required
```
