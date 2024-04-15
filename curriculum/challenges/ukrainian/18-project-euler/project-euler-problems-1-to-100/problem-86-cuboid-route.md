---
id: 5900f3c31000cf542c50fed5
title: 'Завдання 86: маршрут паралелепіпедом'
challengeType: 1
forumTopicId: 302200
dashedName: problem-86-cuboid-route
---

# --description--

Павук S сидить в одному кутку кімнати у формі паралелепіпеда 6×5×3, а муха F сидить в протилежному кутку. Подорожуючи поверхнями кімнати, найкоротша відстань від S до F становить 10, як показано на малюнку нижче.

<img class="img-responsive center-block" alt="шлях павука та мухи з одного кута кімнати у протилежний" src="https://cdn-media-1.freecodecamp.org/project-euler/cuboid-route.png" style="background-color: white; padding: 10px;" />

Однак для будь-якого прямокутного паралелепіпеда існує до трьох можливих «найкоротших» шляхів, а найкоротший не завжди має цілу довжину.

Існує `2060` прямокутних паралелепіпедів з максимальним розміром M×M×M, для яких найкоротший шлях становить ціле число, якщо M = 100. Це найменше значення М, для якого кількість розв’язків перевищує дві тисячі: кількість розв’язків при М = 99 становить `1975`.

Знайдіть найменше значення М, при якому кількість розв’язків перевищує `n`.

# --hints--

`cuboidRoute(2000)` має повернути число.

```js
assert(typeof cuboidRoute(2000) === 'number');
```

`cuboidRoute(2000)` має повернути `100`.

```js
assert.strictEqual(cuboidRoute(2000), 100);
```

`cuboidRoute(25000)` має повернути `320`.

```js
assert.strictEqual(cuboidRoute(25000), 320);
```

`cuboidRoute(500000)` має повернути `1309`.

```js
assert.strictEqual(cuboidRoute(500000), 1309);
```

`cuboidRoute(1000000)` має повернути `1818`.

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
