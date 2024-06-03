---
id: 5951815dd895584b06884620
title: Kreise mit gegebenem Radius durch zwei Punkte
challengeType: 1
forumTopicId: 302231
dashedName: circles-of-given-radius-through-two-points
---

# --description--

Given two points on a plane and a radius, usually two circles of given radius can be drawn through the points.

**Ausnahmen:**

<ul>
  <li>A radius of zero should be treated as never describing circles (except in the case where the points are coincident).</li>
  <li>If the points are coincident then an infinite number of circles with the point on their circumference can be drawn, unless the radius is equal to zero as well which then collapses the circles to a point.</li>
  <li>If the points form a diameter then return a single circle.</li>
  <li>If the points are too far apart then no circles can be drawn.</li>
</ul>

# --instructions--

Implementiere eine Funktion, die zwei Punkte und einen Radius annimmt und die beiden Kreise durch diese Punkte zurückgibt. Geben für jeden sich ergebenden Kreis die Koordinaten für den Mittelpunkt jedes Kreises auf vier Dezimalstellen gerundet an. Gib jede Koordinate als ein Array zurück, und Koordinaten als ein Array von Arrays.

**Für Grenzfälle gib Folgendes zurück:**

<ul>
  <li>If points are on the diameter, return one point. If the radius is also zero however, return <code>"Radius Zero"</code>.</li>
  <li>If points are coincident, return <code>"Coincident point. Infinite solutions"</code>.</li>
  <li>If points are farther apart than the diameter, return <code>"No intersection. Points further apart than circle diameter"</code>.</li>
</ul>

**Beispiel-Eingaben:**

<pre>      p1                p2           r
0.1234, 0.9876    0.8765, 0.2345    2.0
0.0000, 2.0000    0.0000, 0.0000    1.0
0.1234, 0.9876    0.1234, 0.9876    2.0
0.1234, 0.9876    0.8765, 0.2345    0.5
0.1234, 0.9876    0.1234, 0.9876    0.0
</pre>

# --hints--

`getCircles` sollte eine Funktion sein.

```js
assert(typeof getCircles === 'function');
```

`getCircles([0.1234, 0.9876], [0.8765, 0.2345], 2.0)` sollte `[[1.8631, 1.9742], [-0.8632, -0.7521]]` zurückgeben.

```js
assert.deepEqual(getCircles(...testCases[0]), answers[0]);
```

`getCircles([0.0000, 2.0000], [0.0000, 0.0000], 1.0)` sollte `[0, 1]` zurückgeben

```js
assert.deepEqual(getCircles(...testCases[1]), answers[1]);
```

`getCircles([0.1234, 0.9876], [0.1234, 0.9876], 2.0)` should return `Coincident point. Infinite solutions`

```js
assert.deepEqual(getCircles(...testCases[2]), answers[2]);
```

`getCircles([0.1234, 0.9876], [0.8765, 0.2345], 0.5)` should return `No intersection. Points further apart than circle diameter`

```js
assert.deepEqual(getCircles(...testCases[3]), answers[3]);
```

`getCircles([0.1234, 0.9876], [0.1234, 0.9876], 0.0)` sollte `Radius Zero` zurückgeben

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
