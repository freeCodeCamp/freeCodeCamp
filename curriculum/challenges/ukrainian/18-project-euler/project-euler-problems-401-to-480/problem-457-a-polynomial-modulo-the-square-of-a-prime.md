---
id: 5900f5361000cf542c510048
title: 'Завдання 457: многочлен за модулем квадрата простого числа'
challengeType: 1
forumTopicId: 302131
dashedName: problem-457-a-polynomial-modulo-the-square-of-a-prime
---

# --description--

Нехай $f(n) = n^2 - 3n - 1$.

Нехай $p$ буде простим числом.

Нехай $R(p)$ буде найменшим додатним числом $n$, за якого $f(n)\bmod p^2 = 0$, якщо таке число $n$ існує; в іншому випадку $R(p) = 0$.

Нехай $SR(L)$ буде $\sum R(p)$ для всіх простих чисел, що не перевищують $L$.

Знайдіть $SR({10}^7)$.

# --hints--

`polynomialModuloSquareOfPrime()` має повернути `2647787126797397000`.

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
