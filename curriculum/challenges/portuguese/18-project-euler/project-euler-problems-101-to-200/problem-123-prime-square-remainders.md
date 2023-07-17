---
id: 5900f3e71000cf542c50fefa
title: 'Problema 123: Resto dos quadrados dos primos'
challengeType: 1
forumTopicId: 301750
dashedName: problem-123-prime-square-remainders
---

# --description--

Considere $p_n$ o $n$-ésimo número primo: 2, 3, 5, 7, 11, ..., e $r$ o resto da divisão quando ${(p_n−1)}^n + {(p_n+1)}^n$ é dividido por ${p_n}^2$.

Por exemplo, quando $n = 3, p_3 = 5$ e $4^3 + 6^3 = 280 ≡ 5\\ mod\\ 25$.

O menor valor de $n$ para o qual o resto excede $10^9$ é 7037.

Encontre o menor valor de $n$ para o qual o resto excede $10^{10}$.

# --hints--

`primeSquareRemainders()` deve retornar `21035`.

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
