---
id: 5900f5361000cf542c510048
title: 'Problem 457: Ein Polynom modulo des Quadrats einer Primzahl'
challengeType: 1
forumTopicId: 302131
dashedName: problem-457-a-polynomial-modulo-the-square-of-a-prime
---

# --description--

Lasse $f(n) = n^2 - 3n - 1$ sein.

Lasse $p$ eine Primzahl sein.

Lasse $R(p)$ die kleinste positive ganze Zahl $n$ sein, so dass $f(n)\bmod p^2 = 0$ ist, wenn ein solcher Integer $n$ existiert, andernfalls $R(p) = 0$.

Lasse $SR(L)$ $\sum R(p)$ für alle Primzahlen sein, die $L$ nicht übersteigen.

Finde $SR({10}^7)$.

# --hints--

`polynomialModuloSquareOfPrime()` sollte `2647787126797397000` zurückgeben.

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
