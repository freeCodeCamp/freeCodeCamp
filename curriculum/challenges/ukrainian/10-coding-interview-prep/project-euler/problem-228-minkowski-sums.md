---
id: 5900f4511000cf542c50ff63
title: 'Завдання 228: Сума Мінковського'
challengeType: 1
forumTopicId: 301871
dashedName: problem-228-minkowski-sums
---

# --description--

Нехай $S_n$ — це правильний $n$-сторонній багатокутник або фігура, у якої вершини $v_k (k = 1, 2, \ldots, n)$ мають координати:

$$\begin{align} & x_k = cos(\frac{2k - 1}{n} × 180°) \\\\
& y_k = sin(\frac{2k - 1}{n} × 180°) \end{align}$$

Кожен $S_n$ зображено зафарбованою фігурою, яка складається з усіх точок на периметрі та всередині.

Сума Мінковського, $S + T$, двох форм $S$ і $T$ є результатом додавання кожної точки $S$ до кожної точки $T$, де додавання точок виконується по координатах: $(u, v) + (x, y) = (u + x, v + y)$.

Наприклад, сума $S_3$ та $S_4$ — це шестикутник, який нижче зображено рожевим кольором:

<img class="img-responsive center-block" alt="зображення S_3, S_4 та S_3 + S_4" src="https://cdn.freecodecamp.org/curriculum/project-euler/minkowski-sums.png" style="background-color: white; padding: 10px;" />

Скільки сторін має $S_{1864} + S_ {1865} + \ ldots + S_ {1909}$?

# --hints--

`minkowskiSums()` має повернути `86226`.

```js
assert.strictEqual(minkowskiSums(), 86226);
```

# --seed--

## --seed-contents--

```js
function minkowskiSums() {

  return true;
}

minkowskiSums();
```

# --solutions--

```js
// solution required
```
