---
id: 5900f5111000cf542c510023
title: 'Завдання 420: натуральна матриця 2×2'
challengeType: 1
forumTopicId: 302090
dashedName: problem-420-2x2-positive-integer-matrix
---

# --description--

Натуральна матриця — це матриця, всі елементи якої є натуральними числами.

Деякі натуральні матриці можуть бути виражені у вигляді квадрата натуральної матриці двома різними способами. Ось приклад:

$$\begin{pmatrix}   40 & 12 \\\\
  48 & 40 \end{pmatrix} =
{\begin{pmatrix}
  2 & 3 \\\\
 12 & 2 \end{pmatrix}}^2 =
{\begin{pmatrix}
  6 & 1 \\\\
  4 & 6 \end{pmatrix}}^2$$

Визначимо $F(N)$ як кількість натуральних матриць 2×2, слід яких менший за N, та які можна виразити як квадрат натуральної матриці двома різними способами.

Можна довести, що $F(50) = 7$ та $F(1000) = 1019$.

Знайдіть $F({10}^7)$.

# --hints--

`positiveIntegerMatrix()` має повернути `145159332`.

```js
assert.strictEqual(positiveIntegerMatrix(), 145159332);
```

# --seed--

## --seed-contents--

```js
function positiveIntegerMatrix() {

  return true;
}

positiveIntegerMatrix();
```

# --solutions--

```js
// solution required
```
