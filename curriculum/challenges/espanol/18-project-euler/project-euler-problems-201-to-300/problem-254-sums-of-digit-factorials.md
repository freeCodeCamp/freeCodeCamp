---
id: 5900f46b1000cf542c50ff7d
title: 'Problema 254: Suma de Dígitos Factoriales'
challengeType: 1
forumTopicId: 301902
dashedName: problem-254-sums-of-digit-factorials
---

# --description--

Define $f(n)$ as the sum of the factorials of the digits of $n$. For example, $f(342) = 3! + 4! + 2! = 32$.

Defina $sf(n)$ como la suma de los dígitos de $f(n)$. Entonces $sf(342) = 3 + 2 = 5$.

Defina $g(i)$ para ser el entero positivo más pequeño $n$ tal que $sf(n) = i$. Aunque $sf(342)$ es 5, $sf(25)$ también es 5, y puede ser verificado que $g(5)$ es 25.

Defina $sg(i)$ como la suma de los dígitos de $g(i)$. Entonces $sg(5) = 2 + 5 = 7$.

Además, puede verificarse que $g(20)$ es 267 y $\sum sg(i)$ para $1 ≤ i ≤ 20$ es 156.

Cuál es $\sum sg(i)$ para $1 ≤ i ≤ 150$?

# --hints--

`sumsOfDigitFactorials()` debería devolver `8184523820510`.

```js
assert.strictEqual(sumsOfDigitFactorials(), 8184523820510);
```

# --seed--

## --seed-contents--

```js
function sumsOfDigitFactorials() {

  return true;
}

sumsOfDigitFactorials();
```

# --solutions--

```js
// solution required
```
