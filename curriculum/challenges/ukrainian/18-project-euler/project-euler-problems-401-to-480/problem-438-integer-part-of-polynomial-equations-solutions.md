---
id: 5900f5231000cf542c510034
title: 'Завдання 438: ціла частина розв’язків поліноміального рівняння'
challengeType: 1
forumTopicId: 302109
dashedName: problem-438-integer-part-of-polynomial-equations-solutions
---

# --description--

Нехай $(x_1, \ldots, x_n)$ будуть розв’язками для поліноміального рівняння $x^n + a_1x^{n - 1} + a_2x^{n - 2} + \ldots + a_{n - 1}x + a_n = 0$ для кортежу з $n$ цілих чисел $t = (a_1, \ldots, a_n)$.

Розглянемо дві умови:

- $x_1, \ldots, x_n$ є дійсними числами.
- Якщо $x_1, ..., x_n$ відсортовані, то $⌊x_i⌋ = i$ за умови $1 ≤ i ≤ n$. ($⌊·⌋:$ функція підлоги.)

Якщо $n = 4$, то існує 12 кортежів з $n$ цілих чисел, що задовільняють обидві умови.

Визначимо $S(t)$ як суму абсолютних значень цілих чисел в $t$.

Якщо $n = 4$, то можна довести, що $\sum S(t) = 2087$ для всіх кортежів $t$ з $n$ цілих чисел, що задовільняють обидві умови.

Знайдіть $\sum S(t)$ за умови $n = 7$.

# --hints--

`polynomialIntegerPart()` має повернути `2046409616809`.

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
