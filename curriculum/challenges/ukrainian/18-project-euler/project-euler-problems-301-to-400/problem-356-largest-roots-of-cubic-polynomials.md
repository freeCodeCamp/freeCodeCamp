---
id: 5900f4d01000cf542c50ffe3
title: 'Завдання 356: найбільші корені кубічних многочленів'
challengeType: 1
forumTopicId: 302016
dashedName: problem-356-largest-roots-of-cubic-polynomials
---

# --description--

Нехай $a_n$ буде найбільшим дійсним коренем многочлена $g(x) = x^3 - 2^n \times x^2 + n$.

Наприклад, $a_2 = 3.86619826\ldots$

Знайдіть останні 8 цифр в $\displaystyle\sum_{i = 1}^{30} \lfloor {a_i}^{987654321}\rfloor$.

**Примітка:** $\lfloor a\rfloor$ позначає функцію підлоги.

# --hints--

`rootsOfCubicPolynomials()` має повернути `28010159`.

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
