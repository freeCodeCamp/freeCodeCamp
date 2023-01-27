---
id: 5900f3c31000cf542c50fed5
title: 'Завдання 86: Кубоподібний маршрут'
challengeType: 1
forumTopicId: 302200
dashedName: problem-86-cuboid-route
---

# --description--

Павук, S, сидить в одному кутку кубоподібної кімнати розміром 6 на 5 на 3, і муха, F, сидить в протилежному кутку. Переміщаючись по поверхнях кімнати, найкоротша відстань від S до F - 10, шлях показано на діаграмі.

<img class="img-responsive center-block" alt="діаграма шляху павука та мухи з одного кутка у протилежний кубоподібної кімнати" src="https://cdn-media-1.freecodecamp.org/project-euler/cuboid-route.png" style="background-color: white; padding: 10px;" />

Однак, для будь-якого даного куба існує до трьох кандидатів на "найкоротший" шлях, та найкоротший маршрут не завжди має цілочисельну довжину.

Можна показати, що існує саме `2060` окремих кубоїди, ігноруючи обертання, з цілочисельною величиною, до максимального розміру М на М на М, для якого найкоротший маршрут має цілочисельну довжину при M = 100. Це найменше значення М, для якого кількість розв'язків спочатку перевищує дві тисячі; кількість розв'язків при М = 99 `1975`.

Знайдіть найменше значення М таким чином, щоб кількість розв'язків спочатку перевищувала `n`.

# --hints--

`cuboidRoute(2000)` має вивести число.

```js
assert(typeof cuboidRoute(2000) === 'number');
```

`cuboidRoute(2000)` має вивести `100`.

```js
assert.strictEqual(cuboidRoute(2000), 100);
```

`cuboidRoute(25000)` має вивести `320`.

```js
assert.strictEqual(cuboidRoute(25000), 320);
```

`cuboidRoute(500000)` має вивести `1309`.

```js
assert.strictEqual(cuboidRoute(500000), 1309);
```

`cuboidRoute(1000000)` має вивести `1818`.

```js
assert.strictEqual(cuboidRoute(1000000), 1818);
```

# --seed--

## --seed-contents--

```js
function cuboidRoute(n) {

  return true;
}

cuboidRoute(2000);
```

# --solutions--

```js
function cuboidRoute(n) {
  // Based on https://www.mathblog.dk/project-euler-86-shortest-path-cuboid/
  function getLength(a, b) {
    return Math.sqrt(a ** 2 + b ** 2);
  }

  let M = 2;
  let counter = 0;

  while (counter < n) {
    M++;
    for (let baseHeightWidth = 3; baseHeightWidth <= 2 * M; baseHeightWidth++) {
      const pathLength = getLength(M, baseHeightWidth);
      if (Number.isInteger(pathLength)) {
        if (baseHeightWidth <= M) {
          counter += Math.floor(baseHeightWidth / 2);
        } else {
          counter += 1 + M - Math.floor((baseHeightWidth + 1) / 2);
        }
      }
    }
  }

  return M;
}
```
