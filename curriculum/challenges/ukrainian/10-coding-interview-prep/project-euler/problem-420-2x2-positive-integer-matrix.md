---
id: 5900f5111000cf542c510023
title: 'Задача 420: матриця натуральних чисел 2x2'
challengeType: 1
forumTopicId: 302090
dashedName: problem-420-2x2-positive-integer-matrix
---

# --description--

Матриця натуральних чисел – матриця, всі елементи якої є натуральними числами.

Деякі матриці натуральних чисел можуть бути виражені у вигляді квадрата матриці натуральних чисел двома різними способами. Наприклад:

$$\begin{pmatrix}   40 & 12 \\\\
  48 & 40 \end{pmatrix} =
{\begin{pmatrix}
  2 & 3 \\\\
 12 & 2 \end{pmatrix}}^2 =
{\begin{pmatrix}
  6 & 1 \\\\
  4 & 6 \end{pmatrix}}^2$$

Визначаємо $F (N)$ як кількість матриць натуральних чисел 2x2, які мають слід менше N, і які можуть бути виражені у вигляді квадрата натурального числа матриці двома різними способами.

Перевіримо, що $F(50) = 7$ та $F(1000) = 1019$.

Знайдіть $F({10}^7)$.

# --hints--

`positiveIntegerMatrix()` має повертати до `145159332`.

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
