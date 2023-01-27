---
id: 5900f5361000cf542c510048
title: 'Problema 457: Um módulo polinomial, o quadrado de um primo'
challengeType: 1
forumTopicId: 302131
dashedName: problem-457-a-polynomial-modulo-the-square-of-a-prime
---

# --description--

Considere $f(n) = n^2 - 3n - 1$.

Considere que $p$ é um número primo.

Considere $R(p)$ o menor número inteiro positivo $n$, tal que $f(n)\bmod p^2 = 0$, se um número inteiro $n$ existir. Do contrário, considere que $R(p) = 0$.

Considere $SR(L)$ como a $\sum R(p)$ de todos os números primos que não exceda $L$.

Encontre $SR({10}^7)$.

# --hints--

`polynomialModuloSquareOfPrime()` deve retornar `2647787126797397000`.

```js
assert.strictEqual(polynomialModuloSquareOfPrime(), 2647787126797397000);
```

# --seed--

## --seed-contents--

```js
function polynomialModuloSquareOfPrime() {

  return true;
}

polynomialModuloSquareOfPrime();
```

# --solutions--

```js
// solution required
```
