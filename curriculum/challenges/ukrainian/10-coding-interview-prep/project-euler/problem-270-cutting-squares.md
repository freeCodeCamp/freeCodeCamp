---
id: 5900f47c1000cf542c50ff8e
title: 'Завдання 270: Незмінні квадрати'
challengeType: 1
forumTopicId: 301920
dashedName: problem-270-cutting-squares
---

# --description--

Квадратний шматок паперу з цілими розмірами $N×N$ розміщений з кутом на початку координат і двох його сторін вздовж $x$- і $y$-осей. Потім, ми розрізаємо їх відповідно до таких правил:

- Ми робимо лише прямі розрізи між двома точками, розташованих на різних сторонах квадрату та з цілочисельними координатами.
- Два розрізи не можуть перетинатись, але декілька можуть зустрітись на точці на межі.
- Продовжуйте, поки є можливість робити розрізи.

Рахуючи будь-які віддзеркалення або обертання віддаленими, ми називаємо $C(N)$ кількістю способів скоротити квадрат $N×N$. Наприклад $C(1) = 2$ and $C(2) = 30$ (показано нижче).

<img class="img-responsive center-block" alt="способи розрізати квадрат 2x2, рахуючи віддзеркалення та обертання різними" src="https://cdn.freecodecamp.org/curriculum/project-euler/cutting-squares.gif" style="background-color: white; padding: 10px;" />

Що значить $C(30)\bmod {10}^8$?

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
