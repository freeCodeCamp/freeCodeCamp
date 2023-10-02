---
id: 5900f5311000cf542c510042
title: 'Завдання 451: Обернені за модулем числа'
challengeType: 1
forumTopicId: 302124
dashedName: problem-451-modular-inverses
---

# --description--

Візьмімо число 15.

Існує вісім додатних чисел, менших за 15, які є взаємно простими з 15: 1, 2, 4, 7, 8, 11, 13, 14.

Числа 1, 8, 4, 13, 2, 11, 7, 14 є оберненими за модулем 15, оскільки

$$\begin{align}   & 1  \times 1\bmod 15 = 1 \\\\
  & 2  \times 8  = 16\bmod 15 = 1 \\\\   & 4  \times 4  = 16\bmod 15 = 1 \\\\
  & 7  \times 13 = 91\bmod 15 = 1 \\\\   & 11 \times 11 = 121\bmod 15 = 1 \\\\
  & 14 \times 14 = 196\bmod 15 = 1 \end{align}$$

Нехай $I(n)$ — це найбільше додатне число $m$, менше за $n - 1$, при якому обернене за модулем число $m$ з модулем $n$ дорівнює цьому ж числу $m$.

Отже, $I(15) = 11$.

А також $I(100) = 51$ і $I(7) = 1$.

Знайдіть $\sum I(n)$ для $3 ≤ n ≤ 2 \times {10}^7$

# --hints--

`modularInverses()` повинен видати `153651073760956`.

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
