---
id: 5900f5311000cf542c510042
title: 'Завдання 451: обернені за модулем числа'
challengeType: 1
forumTopicId: 302124
dashedName: problem-451-modular-inverses
---

# --description--

Розглянемо число 15.

Існує вісім додатних чисел менших за 15, які є взаємно простими з 15: 1, 2, 4, 7, 8, 11, 13, 14.

Оберненими за модулем 15 цих чисел є 1, 8, 4, 13, 2, 11, 7, 14, оскільки

$$\begin{align}   & 1  \times 1\bmod 15 = 1 \\\\
  & 2  \times 8  = 16\bmod 15 = 1 \\\\   & 4  \times 4  = 16\bmod 15 = 1 \\\\
  & 7  \times 13 = 91\bmod 15 = 1 \\\\   & 11 \times 11 = 121\bmod 15 = 1 \\\\
  & 14 \times 14 = 196\bmod 15 = 1 \end{align}$$

Нехай $I(n)$ буде найбільшим додатним числом $m$ меншим за $n - 1$, за якого обернене за модулем $m$ число $n$ дорівнюватиме $m$.

Отже, $I(15) = 11$.

А також $I(100) = 51$ та $I(7) = 1$.

Знайдіть $\sum I(n)$ за умови $3 ≤ n ≤ 2 \times {10}^7$

# --hints--

`modularInverses()` має повернути `153651073760956`.

```js
assert.strictEqual(modularInverses(), 153651073760956);
```

# --seed--

## --seed-contents--

```js
function modularInverses() {

  return true;
}

modularInverses();
```

# --solutions--

```js
// solution required
```
