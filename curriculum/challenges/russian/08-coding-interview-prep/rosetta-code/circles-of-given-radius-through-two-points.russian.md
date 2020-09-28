---
title: Circles of given radius through two points
id: 5951815dd895584b06884620
challengeType: 5
forumTopicId: 302231
localeTitle: Круги заданного радиуса через две точки
---

## Description
<section id='description'>
<p> Учитывая две точки на плоскости и радиус, обычно через две точки могут быть проведены два круга заданного радиуса. </p> Исключения: радиус нуля должен рассматриваться как никогда не описывающий круги (за исключением случая, когда точки совпадают). Если точки совпадают, то может быть проведено бесконечное число кругов с точкой на их окружности, если радиус не равен нулю, а затем сворачивает круги в точку. Если точки образуют диаметр, верните один круг. Если точки слишком далеки друг от друга, круги не могут быть нарисованы. Задача: выполнить функцию, которая принимает две точки и радиус и возвращает два круга через эти точки. Для каждого результирующего круга укажите координаты для центра каждого круга, округленного до четырех десятичных цифр. Возвращает каждую координату в виде массива и координирует ее как массив массивов. Для краевых случаев возвращайте следующее: если точки находятся на диаметре, верните одну точку. Если радиус также равен нулю, верните <code>&quot;Radius Zero&quot;</code> . Если точки совпадают, верните <code>&quot;Coincident point. Infinite solutions&quot;</code> . Если точки находятся дальше друг от друга, чем диаметр, верните <code>&quot;No intersection. Points further apart than circle diameter&quot;</code> . Примеры входов: <pre> p1 p2 r
0,1234, 0,9876 0,8765, 0,2345 2,0
0,0000, 2,0000 0,0000, 0,0000 1,0
0,1234, 0,9876 0,1234, 0,9876 2,0
0,1234, 0,9876 0,8765, 0,2345 0,5
0,1234, 0,9876 0,1234, 0,9876 0,0
</pre> Ref: <a href="http://mathforum.org/library/drmath/view/53027.html" title="ссылка: http://mathforum.org/library/drmath/view/53027.html">Поиск центра круга из двух точек и радиуса</a> из математического форума @ Drexel
</section>

## Instructions
<section id='instructions'>
Implement a function that takes two points and a radius and returns the two circles through those points. For each resulting circle, provide the coordinates for the center of each circle rounded to four decimal digits. Return each coordinate as an array, and coordinates as an array of arrays.
<strong>For edge cases, return the following:</strong>
<ul>
  <li>If points are on the diameter, return one point. If the radius is also zero however, return <code>"Radius Zero"</code>.</li>
  <li>If points are coincident, return <code>"Coincident point. Infinite solutions"</code>.</li>
  <li>If points are farther apart than the diameter, return <code>"No intersection. Points further apart than circle diameter"</code>.</li>
</ul>
<strong>Sample inputs:</strong>
<pre>
      p1                p2           r
0.1234, 0.9876    0.8765, 0.2345    2.0
0.0000, 2.0000    0.0000, 0.0000    1.0
0.1234, 0.9876    0.1234, 0.9876    2.0
0.1234, 0.9876    0.8765, 0.2345    0.5
0.1234, 0.9876    0.1234, 0.9876    0.0
</pre>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getCircles</code> is a function.
    testString: assert(typeof getCircles === 'function');
  - text: <code>getCircles([0.1234, 0.9876], [0.8765, 0.2345], 2.0)</code> should return <code>[[1.8631, 1.9742], [-0.8632, -0.7521]]</code>.
    testString: assert.deepEqual(getCircles(...testCases[0]), answers[0]);
  - text: <code>getCircles([0.0000, 2.0000], [0.0000, 0.0000], 1.0)</code> should return <code>[0, 1]</code>
    testString: assert.deepEqual(getCircles(...testCases[1]), answers[1]);
  - text: <code>getCircles([0.1234, 0.9876], [0.1234, 0.9876], 2.0)</code> should return <code>Coincident point. Infinite solutions</code>
    testString: assert.deepEqual(getCircles(...testCases[2]), answers[2]);
  - text: <code>getCircles([0.1234, 0.9876], [0.8765, 0.2345], 0.5)</code> should return <code>No intersection. Points further apart than circle diameter</code>
    testString: assert.deepEqual(getCircles(...testCases[3]), answers[3]);
  - text: <code>getCircles([0.1234, 0.9876], [0.1234, 0.9876], 0.0)</code> should return <code>Radius Zero</code>
    testString: assert.deepEqual(getCircles(...testCases[4]), answers[4]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function getCircles(...args) {
  // Good luck!
  return true;
}

```

</div>

### After Tests
<div id='js-teardown'>

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

</div>

</section>

## Solution
<section id='solution'>

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

</section>
