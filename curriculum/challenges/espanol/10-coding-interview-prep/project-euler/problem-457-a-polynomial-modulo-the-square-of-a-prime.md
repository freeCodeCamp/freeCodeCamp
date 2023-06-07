---
id: 5900f5361000cf542c510048
title: 'Problema 457: Un módulo polinomial al cuadrado de un primo'
challengeType: 1
forumTopicId: 302131
dashedName: problem-457-a-polynomial-modulo-the-square-of-a-prime
---

# --description--

Sean: $f(n) = n^2 - 3n - 1$.

$p$ un primo.

$R(p)$ el entero positivo más pequeño $n$ tal que $f(n)\bmod p^2 = 0$ si existe un entero $n$, de lo contrario $R(p) = 0$.

$SR(L)$ $\sum R(p)$ para todos los primos que no superen $L$.

Calcular $SR({10}^7)$.

# --hints--

`polynomialModuloSquareOfPrime()` debería retornar `2647787126797397000`.

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
