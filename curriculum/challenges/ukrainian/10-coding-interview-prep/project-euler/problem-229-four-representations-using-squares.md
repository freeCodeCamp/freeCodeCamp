---
id: 5900f4521000cf542c50ff64
title: 'Завдання 229: Чотири вираження числа через піднесення до квадрата'
challengeType: 1
forumTopicId: 301872
dashedName: problem-229-four-representations-using-squares
---

# --description--

Розглянемо число 3600. Воно дуже особливе, оскільки

$$\begin{align}   & 3600 = {48}^2 + {36}^2   \\\\
  & 3600 = {20}^2 + {2×40}^2 \\\\   & 3600 = {30}^2 + {3×30}^2 \\\\
  & 3600 = {45}^2 + {7×15}^2 \\\\ \end{align}$$

Аналогічно бачимо, що $88201 = {99}^2 + {280}^2 = {287}^2 + 2 × {54}^2 = {283}^2 + 3 × {52}^2 = {197}^2 + 7 × {84}^2$.

У 1747 році Ейлер довів які числа є сумою двох квадратів. Нас цікавлять числа $n$, які можна виразити через наступні чотири формули:

$$\begin{align}   & n = {a_1}^2 + {b_1}^2  \\\\
  & n = {a_2}^2 + 2{b_2}^2 \\\\   & n = {a_3}^2 + 3{b_3}^2 \\\\
  & n = {a_7}^2 + 7{b_7}^2 \\\\ \end{align}$$

де $a_k$ та $b_k$ додатні цілі числа.

Існує 75373 подібних чисел, що не перевищують ${10}^7$.

Скільки існує чисел, що не перевищують $2 × {10}^9$?

# --hints--

`representationsUsingSquares()` має повернути `11325263`.

```js
assert.strictEqual(representationsUsingSquares(), 11325263);
```

# --seed--

## --seed-contents--

```js
function representationsUsingSquares() {

  return true;
}

representationsUsingSquares();
```

# --solutions--

```js
// solution required
```
