---
id: 5951815dd895584b06884620
title: Cerchi di raggio dato attraverso due punti
challengeType: 1
forumTopicId: 302231
dashedName: circles-of-given-radius-through-two-points
---

# --description--

Dati due punti su un piano, e un raggio, in genere due cerchi di raggio dato possono essere disegnati attraverso i punti.

**Eccezioni:**

<ul>
  <li>Un raggio di zero deve essere trattato come non descrivente mai cerchi (eccetto nel caso in cui i punti sono coincidenti).</li>
  <li>Se i punti sono coincidenti allora si può disegnare un numero infinito di cerchi con i punti sulla loro circonferenza; a meno che il raggio non sia pure uguale a zero, il che collassa i cerchi a un punto.</li>
  <li>Se i punti formano un diametro allora restituisci un singolo cerchio.</li>
  <li>Se i punti sono troppo distanti allora nessun cerchio può essere disegnato.</li>
</ul>

# --instructions--

Implementa una funzione che accetta due punti e un raggio e restituisce i due cerchi attraverso quei punti. Per ogni cerchio risultante, provvedi le coordinate del centro di ogni cerchio arrotondate a quattro cifre decimali. Restituisci ogni coordinata come un array, e le coordinate come un array di array.

**Per casi limite, restituisci le cose seguenti:**

<ul>
  <li>Se i punti sono sul diametro, restituisci un punto. Se il raggio è pure zero allora restituisci <code>"Radius Zero"</code>.</li>
  <li>Se i punti sono coincidenti, restituisci <code>"Coincident point. Infinite solutions"</code>.</li>
  <li>Se i punti sono più distanti tra loro del diametro, restituisci <code>"No intersection. Points further apart than circle diameter"</code>.</li>
</ul>

**Esempio di input:**

<pre>      p1                p2           r
0.1234, 0.9876    0.8765, 0.2345    2.0
0.0000, 2.0000    0.0000, 0.0000    1.0
0.1234, 0.9876    0.1234, 0.9876    2.0
0.1234, 0.9876    0.8765, 0.2345    0.5
0.1234, 0.9876    0.1234, 0.9876    0.0
</pre>

# --hints--

`getCircles` dovrebbe essere una funzione.

```js
assert(typeof getCircles === 'function');
```

`getCircles([0.1234, 0.9876], [0.8765, 0.2345], 2.0)` dovrebbe restituire `[[1.8631, 1.9742], [-0.8632, -0.7521]]`.

```js
assert.deepEqual(getCircles(...testCases[0]), answers[0]);
```

`getCircles([0.0000, 2.0000], [0.0000, 0.0000], 1.0)` dovrebbe restituire `[0, 1]`

```js
assert.deepEqual(getCircles(...testCases[1]), answers[1]);
```

`getCircles([0.1234, 0.9876], [0.1234, 0.9876], 2.0)` dovrebbe restituire `Coincident point. Infinite solutions`

```js
assert.deepEqual(getCircles(...testCases[2]), answers[2]);
```

`getCircles([0.1234, 0.9876], [0.8765, 0.2345], 0.5)` dovrebbe restituire `No intersection. Points further apart than circle diameter`

```js
assert.deepEqual(getCircles(...testCases[3]), answers[3]);
```

`getCircles([0.1234, 0.9876], [0.1234, 0.9876], 0.0)` dovrebbe restituire `Radius Zero`

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
