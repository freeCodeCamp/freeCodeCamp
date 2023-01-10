---
id: 5900f4d01000cf542c50ffe3
title: 'Problema 356: Le più grandi radici dei polinomi cubici'
challengeType: 1
forumTopicId: 302016
dashedName: problem-356-largest-roots-of-cubic-polynomials
---

# --description--

Sia $a_n$ la più grande radice reale di un polinomio $g(x) = x^3 - 2^n \times x^2 + n$.

Per esempio, $a_2 = 3.86619826\ldots$

Trova le ultime otto cifre di $\displaystyle\sum_{i = 1}^{30} \lfloor {a_i}^{987654321}\rfloor$.

**Nota:** $\lfloor a\rfloor$ rappresenta la funzione floor.

# --hints--

`rootsOfCubicPolynomials()` dovrebbe restituire `28010159`.

```js
assert.strictEqual(rootsOfCubicPolynomials(), 28010159);
```

# --seed--

## --seed-contents--

```js
function rootsOfCubicPolynomials() {

  return true;
}

rootsOfCubicPolynomials();
```

# --solutions--

```js
// solution required
```
