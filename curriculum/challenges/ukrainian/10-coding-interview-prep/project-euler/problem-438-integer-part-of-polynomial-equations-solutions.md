---
id: 5900f5231000cf542c510034
title: 'Завдання 438: Ціла частина розв’язків поліноміального рівняння'
challengeType: 1
forumTopicId: 302109
dashedName: problem-438-integer-part-of-polynomial-equations-solutions
---

# --description--

Для $n$-tuple цілих чисел $t = (a_1, \ldots, a_n)$, нехай $(x_1, \ldots, x_n)$ будуть розв'язками поліноміального рівняння $x^n + a_1x^{n - 1} + a_2x^{n - 2} + \ldots + a_{n - 1}x + a_n = 0$.

Розглянемо наступні два трикутники:

- $x_1, \ldots, x_n$ є дійсними.
- Якщо $x_1, ..., x_n$ сортовані, то $⌊x_i⌋ = i$ за $1 ≤ i n$. ($⌊·⌋:$ floor function.)

У випадку якщо $n = 4$, є 12 $n$-tuples цілих чисел, які задовольняють обидві умови.

Ми визначаємо $S(t)$ як суму абсолютних значень цілих чисел у $t$.

For $n = 4$ we can verify that $\sum S(t) = 2087$ for all $n$-tuples $t$ which satisfy both conditions.

Знайти: $\суму S(t)$ за $n = 7$.

# --hints--

`polynomialIntegerPart()` має видати `2046409616809`.

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
