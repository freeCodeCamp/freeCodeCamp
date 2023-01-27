---
id: 5900f4711000cf542c50ff84
title: 'Завдання 261: Ключові суми площі'
challengeType: 1
forumTopicId: 301910
dashedName: problem-261-pivotal-square-sums
---

# --description--

Назвемо натуральне ціле число $k$ квадратною зведеною, якщо є пара цілих чисел $m > 0$ і $n ≥ k$, так що сума ($m + 1$) послідовних квадратів до $k$ дорівнює сумі послідовних квадратів $m$ з ($n + 1$) на:

$${(k - m)}^2 + \ldots + k^2 = {(n + 1)}^2 + \ldots + {(n + m)}^2$$

Деякі маленькі квадратні повороти є

$$\begin{align}   & \mathbf{4}: 3^2 + \mathbf{4}^2 = 5^2 \\\\
  & \mathbf{21}: {20}^2 + \mathbf{21}^2 = {29}^2 \\\\   & \mathbf{24}: {21}^2 + {22}^2 + {23}^2 + \mathbf{24}^2 = {25}^2 + {26}^2 + {27}^2 \\\\
  & \mathbf{110}: {108}^2 + {109}^2 + \mathbf{110}^2 = {133}^2 + {134}^2 \\\\ \end{align}$$

Знайдіть суму всіх різних квадратних куточків $≤ {10}^{10}$.

# --hints--

`pivotalSquareSums()` має повернути `238890850232021`.

```js
assert.strictEqual(pivotalSquareSums(), 238890850232021);
```

# --seed--

## --seed-contents--

```js
function pivotalSquareSums() {

  return true;
}

pivotalSquareSums();
```

# --solutions--

```js
// solution required
```
