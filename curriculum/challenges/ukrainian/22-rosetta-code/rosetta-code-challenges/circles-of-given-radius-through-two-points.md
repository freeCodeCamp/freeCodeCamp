---
id: 5951815dd895584b06884620
title: Кола з заданим радіусом через дві точки
challengeType: 1
forumTopicId: 302231
dashedName: circles-of-given-radius-through-two-points
---

# --description--

Якщо дано дві точки на площині та радіус, то зазвичай через ці точки можна провести два кола заданого радіуса.

**Винятки:**

<ul>
  <li>Нульовий радіус повинен розглядатися як такий, що ніколи не описує кола (крім випадку, коли точки співпадають).</li>
  <li>Якщо точки збігаються, то можна намалювати нескінченну кількість кіл, що проходять через цю точку на окружності (крім випадку, коли радіус також дорівнює нулю, що перетворить кола на точку).</li>
  <li>Якщо точки утворюють діаметр, то поверніть одне коло.</li>
  <li>Якщо точки знаходяться занадто далеко одна від одної, то неможливо намалювати кола.</li>
</ul>

# --instructions--

Напишіть функцію, яка приймає дві точки і радіус та повертає два кола через ці точки. Для кожного отриманого кола надайте координати центру, округлені до чотирьох знаків після коми. Поверніть кожну координату як масив, а координати — як масив масивів.

**В граничних випадках поверніть наступне:**

<ul>
  <li>Якщо точки знаходяться на діаметрі, поверніть одну точку. Якщо радіус також дорівнює нулю, то поверніть <code>"Radius Zero"</code>.</li>
  <li>Якщо точки збігаються, то поверніть <code>"Coincident point. Infinite solutions"</code>.</li>
  <li>Якщо точки знаходяться одна від одної далі за діаметр, то поверніть <code>"No intersection. Points further apart than circle diameter"</code>.</li>
</ul>

**Приклади вхідних даних:**

<pre>      p1                p2           r
0.1234, 0.9876    0.8765, 0.2345    2.0
0.0000, 2.0000    0.0000, 0.0000    1.0
0.1234, 0.9876    0.1234, 0.9876    2.0
0.1234, 0.9876    0.8765, 0.2345    0.5
0.1234, 0.9876    0.1234, 0.9876    0.0
</pre>

# --hints--

`getCircles` має бути функцією.

```js
assert(typeof getCircles === 'function');
```

`getCircles([0.1234, 0.9876], [0.8765, 0.2345], 2.0)` має повернути `[[1.8631, 1.9742], [-0.8632, -0.7521]]`.

```js
assert.deepEqual(getCircles(...testCases[0]), answers[0]);
```

`getCircles([0.0000, 2.0000], [0.0000, 0.0000], 1.0)` має повернути `[0, 1]`

```js
assert.deepEqual(getCircles(...testCases[1]), answers[1]);
```

`getCircles([0.1234, 0.9876], [0.1234, 0.9876], 2.0)` має повернути `Coincident point. Infinite solutions`

```js
assert.deepEqual(getCircles(...testCases[2]), answers[2]);
```

`getCircles([0.1234, 0.9876], [0.8765, 0.2345], 0.5)` має повернути `No intersection. Points further apart than circle diameter`

```js
assert.deepEqual(getCircles(...testCases[3]), answers[3]);
```

`getCircles([0.1234, 0.9876], [0.1234, 0.9876], 0.0)` має повернути `Radius Zero`

```js
assert.deepEqual(getCircles(...testCases[4]), answers[4]);
```

# --seed--

## --after-user-code--

```js
const testCases = [
  [[0.1234, 0.9876], [0.8765, 0.2345], 2.0],
  [[0.0000, 2.0000], [0.0000, 0.0000], 1.0],
  [[0.1234, 0.9876], [0.1234, 0.9876], 2.0],
  [[0.1234, 0.9876], [0.8765, 0.2345], 0.5],
  [[0.1234, 0.9876], [0.1234, 0.9876], 0.0]
];
const answers = [
  [[1.8631, 1.9742], [-0.8632, -0.7521]],
  [0, 1],
  'Coincident point. Infinite solutions',
  'No intersection. Points further apart than circle diameter',
  'Radius Zero'
];
```

## --seed-contents--

```js
function getCircles(...args) {

  return true;
}
```

# --solutions--

```js
const hDist = (p1, p2) => Math.hypot(...p1.map((e, i) => e - p2[i])) / 2;
const pAng = (p1, p2) => Math.atan(p1.map((e, i) => e - p2[i]).reduce((p, c) => c / p, 1));
const solveF = (p, r) => t => [parseFloat((r * Math.cos(t) + p[0]).toFixed(4)), parseFloat((r * Math.sin(t) + p[1]).toFixed(4))];
const diamPoints = (p1, p2) => p1.map((e, i) => parseFloat((e + (p2[i] - e) / 2).toFixed(4)));

function getCircles(...args) {
  const [p1, p2, s] = args;
  const solve = solveF(p1, s);
  const halfDist = hDist(p1, p2);

  let msg = [];
  switch (Math.sign(s - halfDist)) {
    case 0:
      msg = s ? diamPoints(p1, p2) :
        'Radius Zero';
      break;
    case 1:
      if (!halfDist) {
        msg = 'Coincident point. Infinite solutions';
      }
      else {
        const theta = pAng(p1, p2);
        const theta2 = Math.acos(halfDist / s);
        [1, -1].map(e => solve(theta + e * theta2)).forEach(
          e => msg.push(e));
      }
      break;
    case -1:
      msg = 'No intersection. Points further apart than circle diameter';
      break;
    default:
      msg = 'Reached the default';
  }
  return msg;
}
```
