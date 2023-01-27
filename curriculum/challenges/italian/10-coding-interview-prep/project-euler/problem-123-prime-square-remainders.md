---
id: 5900f3e71000cf542c50fefa
title: 'Problema 123: Resti di quadrati primi'
challengeType: 1
forumTopicId: 301750
dashedName: problem-123-prime-square-remainders
---

# --description--

Sia $p_n$ l'$n$° primo: 2, 3, 5, 7, 11, ... e sia $r$ il resto quando ${(p_n−1)}^n + {(p_n+1)}^n$ è diviso per ${p_n}^2$.

Per esempio, quando $n = 3, p_3 = 5$, e $4^3 + 6^3 = 280 ≡ 5\\ mod\\ 25$.

Il valore minimo di $n$ per il quale il resto supera per primo $10^9$ è 7037.

Trova il valore minimo di $n$ per il quale il resto supera per primo $10 ^{10}$.

# --hints--

`primeSquareRemainders()` dovrebbe restituire `21035`.

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
