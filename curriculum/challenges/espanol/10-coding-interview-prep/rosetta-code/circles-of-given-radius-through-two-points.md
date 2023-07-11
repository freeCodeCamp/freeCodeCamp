---
id: 5951815dd895584b06884620
title: Círculos del radio dado a través de dos puntos
challengeType: 1
forumTopicId: 302231
dashedName: circles-of-given-radius-through-two-points
---

# --description--

Dados dos puntos sobre un plano y un radio, usualmente dos círculos de un radio dado pueden ser dibujados a través de puntos.

**Excepciones:**

<ul>
  <li>Un radio de cero debería ser tratado como como jamás describiendo círculos (excepto en el caso donde los puntos son coincidentes).</li>
  <li>Si los puntos son coincidentes entonces un infinito número de círculos con el punto sobre su circunferencia puede ser dibujado, a menos que el radio sea igual a cero lo que tambíen luego colapsa los círculos a un punto.</li>
  <li>Si los puntos forman un diámetro entonces devuelve un solo círculo.</li>
  <li>Si los puntos están demasiado lejos entonces no se pueden dibujar círculos.</li>
</ul>

# --instructions--

Implementa una función que toma dos puntos y un radio y devuelve los dos círculos a través de dichos puntos. Para cada círculo resultante, proporciona las coordenadas para el centro de cada círculo redondeado a cuatro dígitos decimales. Devuelve cada coordenada como un arreglo, y coordenadas como un arreglo de arreglos.

**Para casos de bordes, devuelve lo siguiente:**

<ul>
  <li>Si los puntos están en el diámetro, devuelve un punto. Sin embargo si el radio también es cero, devuelve <code>"Radius Zero"</code>.</li>
  <li>Si los puntos son coincidentes, devuelve <code>"Coincident point. Infinite solutions"</code>.</li>
  <li>Si los puntos estan demasiados separados que el diámetro, devuelve <code>"No intersection. Points further apart than circle diameter"</code>.</li>
</ul>

**Entradas de muestra:**

<pre>      p1                p2           r
0.1234, 0.9876    0.8765, 0.2345    2.0
0.0000, 2.0000    0.0000, 0.0000    1.0
0.1234, 0.9876    0.1234, 0.9876    2.0
0.1234, 0.9876    0.8765, 0.2345    0.5
0.1234, 0.9876    0.1234, 0.9876    0.0
</pre>

# --hints--

`getCircles` debería ser una función.

```js
assert(typeof getCircles === 'function');
```

`getCircles([0.1234, 0.9876], [0.8765, 0.2345], 2.0)` debería devolver `[[1.8631, 1.9742], [-0.8632, -0.7521]]`.

```js
assert.deepEqual(getCircles(...testCases[0]), answers[0]);
```

`getCircles([0.0000, 2.0000], [0.0000, 0.0000], 1.0)` debería devolver `[0, 1]`

```js
assert.deepEqual(getCircles(...testCases[1]), answers[1]);
```

`getCircles([0.1234, 0.9876], [0.1234, 0.9876], 2.0)` debería devolver `Coincident point. Infinite solutions`

```js
assert.deepEqual(getCircles(...testCases[2]), answers[2]);
```

`getCircles([0.1234, 0.9876], [0.8765, 0.2345], 0.5)` debería devolver `No intersection. Points further apart than circle diameter`

```js
assert.deepEqual(getCircles(...testCases[3]), answers[3]);
```

`getCircles([0.1234, 0.9876], [0.1234, 0.9876], 0.0)` debería devolver `Radius Zero`

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
