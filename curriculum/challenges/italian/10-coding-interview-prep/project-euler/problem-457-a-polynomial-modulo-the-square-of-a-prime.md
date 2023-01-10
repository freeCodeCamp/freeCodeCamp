---
id: 5900f5361000cf542c510048
title: 'Problema 457: Un polinomiale modulo il quadrato di un primo'
challengeType: 1
forumTopicId: 302131
dashedName: problem-457-a-polynomial-modulo-the-square-of-a-prime
---

# --description--

Sia $f(n) = n^2 - 3n - 1$.

Sia $p$ un numero primo.

Sia $R(p)$ il più piccolo numero intero positivo $n$ tale che $f(n)\bmod p^2 = 0$ se esiste un numero intero $n$, altrimenti $R(p) = 0$.

Sia $SR(L)$ pari a $\sum R(p)$ per tutti i primi non superiori a $L$.

Trova $SR({10}^7)$.

# --hints--

`polynomialModuloSquareOfPrime()` dovrebbe restituire `2647787126797397000`.

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
