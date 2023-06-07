---
id: 5900f4151000cf542c50ff28
title: >-
  Задача 169: Дослідження кількості різноманітних способів, якими можна записати число як суму степенів 2
challengeType: 1
forumTopicId: 301803
dashedName: >-
  problem-169-exploring-the-number-of-different-ways-a-number-can-be-expressed-as-a-sum-of-powers-of-2
---

# --description--

Визначте, що $f(0)=1$ та $f(n)$ буде кількістю різних способів, за якими $n$ може бути виражено у вигляді суми цілих чисел 2 степеня використовуючи кожен степінь не більше ніж двічі.

Наприклад: $f(10)=5$, оскільки існує 5 різних способів виразити 10:

$$\begin{align}   & 1 + 1 + 8 \\\\
  & 1 + 1 + 4 + 4 \\\\   & 1 + 1 + 2 + 2 + 4 \\\\
  & 2 + 4 + 4 \\\\ & 2 + 8 \end{align}$$

Що таке $f({10}^{25})$?

# --hints--

`numberOfWaysToExpress()` має відображати `178653872807`.

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
