---
id: 5900f4d01000cf542c50ffe3
title: 'Problem 356: Die größten Wurzeln kubischer Polynome'
challengeType: 1
forumTopicId: 302016
dashedName: problem-356-largest-roots-of-cubic-polynomials
---

# --description--

Let $a_n$ be the largest real root of a polynomial $g(x) = x^3 - 2^n \times x^2 + n$.

For example, $a_2 = 3.86619826\ldots$

Finde die letzten acht Ziffern von $\displaystyle\sum_{i = 1}^{30} \lfloor {a_i}^{987654321}\rfloor$.

**Hinweis:** $\lfloor a\rfloor$ steht für die Bodenfunktion.

# --hints--

`rootsOfCubicPolynomials()` should return `28010159`.

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
