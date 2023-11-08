---
id: 5900f47c1000cf542c50ff8e
title: 'Завдання 270: розрізання квадратів'
challengeType: 1
forumTopicId: 301920
dashedName: problem-270-cutting-squares
---

# --description--

Квадратний шматок паперу з цілими розмірами $N×N$ розміщений на початку координат, а його сторони розміщені вздовж осей $x$ та $y$. Цей шматок розрізають відповідно до таких правил:

- Між двома точками на різних сторонах квадрата можна робити лише прямі розрізи, а координати точок мають бути цілими числами.
- Два розрізи не можуть перетинатись, але вони можуть мати спільну точку на краю.
- Продовжуйте різати квадрат, поки є можливість.

Вважаючи будь-які віддзеркалення або обертання різними, назвемо $C(N)$ кількістю способів розрізати квадрат $N×N$. Наприклад, $C(1) = 2$ та $C(2) = 30$ (показано нижче).

<img class="img-responsive center-block" alt="способи розрізати квадрат 2x2, вважаючи віддзеркалення та обертання різними" src="https://cdn.freecodecamp.org/curriculum/project-euler/cutting-squares.gif" style="background-color: white; padding: 10px;" />

Чому дорівнює $C(30)\bmod {10}^8$ ?

# --hints--

`cuttingSquares()` має повернути `82282080`.

```js
assert.strictEqual(cuttingSquares(), 82282080);
```

# --seed--

## --seed-contents--

```js
function cuttingSquares() {

  return true;
}

cuttingSquares();
```

# --solutions--

```js
// solution required
```
