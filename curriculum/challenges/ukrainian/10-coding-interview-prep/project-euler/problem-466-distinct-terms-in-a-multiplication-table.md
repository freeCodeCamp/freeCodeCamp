---
id: 5900f53e1000cf542c510051
title: 'Завдання 466: Різні елементи в таблиці множення'
challengeType: 1
forumTopicId: 302141
dashedName: problem-466-distinct-terms-in-a-multiplication-table
---

# --description--

Нехай $P(m,n)$ — це кількість різних елементів у таблиці множення $m×n$.

Наприклад, таблиця множення 3×4 має такий вигляд:

$$\begin{array}{c}   ×          & \mathbf{1} & \mathbf{2} & \mathbf{3} & \mathbf{4}  \\\\
  \mathbf{1} & 1          & 2          & 3          & 4  \\\\   \mathbf{2} & 2          & 4          & 6          & 8  \\\\
  \mathbf{3} & 3          & 6          & 9          & 12 \end{array}$$

Тут є 8 різних елементів {1, 2, 3, 4, 6, 8, 9, 12}, тому $P(3, 4) = 8$.

Дано, що:

$$\begin{align}   & P(64, 64) = 1\\,263, \\\\
  & P(12, 345) = 1\\,998, \text{ and} \\\\   & P(32, {10}^{15}) = 13\\,826\\,382\\,602\\,124\\,302. \\\\
\end{align}$$

Знайдіть $P(64, {10}^{16})$.

# --hints--

`multiplicationTable()` має повернути `258381958195474750`.

```js
assert.strictEqual(multiplicationTable(), 258381958195474750);
```

# --seed--

## --seed-contents--

```js
function multiplicationTable() {

  return true;
}

multiplicationTable();
```

# --solutions--

```js
// solution required
```
