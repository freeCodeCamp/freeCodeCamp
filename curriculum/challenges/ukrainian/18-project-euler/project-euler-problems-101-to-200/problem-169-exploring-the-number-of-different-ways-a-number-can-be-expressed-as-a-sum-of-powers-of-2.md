---
id: 5900f4151000cf542c50ff28
title: >-
  Завдання 169: вивчення кількості різних способів запису числа як суми степенів двійки
challengeType: 1
forumTopicId: 301803
dashedName: >-
  problem-169-exploring-the-number-of-different-ways-a-number-can-be-expressed-as-a-sum-of-powers-of-2
---

# --description--

Визначимо $f(0)=1$ та $f(n)$ як кількість різних способів представити $n$ у вигляді суми степенів числа 2, використовуючи кожен ступінь не більше двох разів.

Наприклад, $f(10)=5$, оскільки існує п’ять різних способів представити 10:

$$\begin{align}   & 1 + 1 + 8 \\\\
  & 1 + 1 + 4 + 4 \\\\   & 1 + 1 + 2 + 2 + 4 \\\\
  & 2 + 4 + 4 \\\\ & 2 + 8 \end{align}$$

Чому дорівнює $f({10}^{25})$?

# --hints--

`numberOfWaysToExpress()` має повернути `178653872807`.

```js
assert.strictEqual(numberOfWaysToExpress(), 178653872807);
```

# --seed--

## --seed-contents--

```js
function numberOfWaysToExpress() {

  return true;
}

numberOfWaysToExpress();
```

# --solutions--

```js
// solution required
```
