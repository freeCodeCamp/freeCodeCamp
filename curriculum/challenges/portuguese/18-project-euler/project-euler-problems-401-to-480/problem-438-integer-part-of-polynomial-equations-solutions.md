---
id: 5900f5231000cf542c510034
title: 'Problema 438: Parte inteira das soluções da equação polinomial'
challengeType: 1
forumTopicId: 302109
dashedName: problem-438-integer-part-of-polynomial-equations-solutions
---

# --description--

Para uma tupla $n$ de números inteiros $t = (a_1, \ldots, a_n)$, considere $(x_1, \ldots, x_n)$ como as soluções da equação polinomial $x^n + a_1x^{n - 1} + a_2x^{n - 2} + \ldots + a_{n - 1}x + a_n = 0$.

Considere as duas condições a seguir:

- $x_1, \ldots, x_n$ são todos reais.
- Se $x_1, ..., x_n$ estiverem ordenados, $⌊x_i⌋ = i$ para $1 ≤ i ≤ n$. ($⌊·⌋:$ função de piso.)

No caso de $n = 4$, há 12 tuplas $n$ de números inteiros que satisfazem ambas as condições.

Definimos $S(t)$ como a soma de valores absolutos dos números inteiros em $t$.

Para $n = 4$ podemos verificar que $\sum S(t) = 2087$ para todas as tuplas $n$ $t$ que satisfazem ambas as condições.

Encontre a $\sum S(t)$ para $n = 7$.

# --hints--

`polynomialIntegerPart()` deve retornar `2046409616809`.

```js
assert.strictEqual(polynomialIntegerPart(), 2046409616809);
```

# --seed--

## --seed-contents--

```js
function polynomialIntegerPart() {

  return true;
}

polynomialIntegerPart();
```

# --solutions--

```js
// solution required
```
