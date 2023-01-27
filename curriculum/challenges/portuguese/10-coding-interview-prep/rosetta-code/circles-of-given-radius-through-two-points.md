---
id: 5951815dd895584b06884620
title: Círculos de raio determinado através de dois pontos
challengeType: 1
forumTopicId: 302231
dashedName: circles-of-given-radius-through-two-points
---

# --description--

Dados dois pontos em um plano e num raio, geralmente dois círculos de um determinado raio podem ser traçados através dos pontos.

**Exceções:**

<ul>
  <li>Um raio de zero deve ser tratado como nunca descrevendo círculos (exceto no caso em que os pontos são coincidentes).</li>
  <li>Se os pontos forem coincidentes, pode haver um número infinito de círculos em que o ponto de sua circunferência pode ser desenhado, a não ser que o raio seja igual a zero, o que fará com que os círculos não passem de um ponto.</li>
  <li>Se os pontos formarem um diâmetro, então retorne um único círculo.</li>
  <li>Se os pontos estiverem muito distantes, não será possível desenhar os círculos.</li>
</ul>

# --instructions--

Implementa uma função que recebe dois pontos e um raio e retorna os dois círculos através desses pontos. Para cada círculo resultante, forneça as coordenadas para o centro de cada círculo arredondadas para quatro casas decimais. Retorne cada coordenada como um array, e as coordenadas como um array de arrays.

**Para casos extremos, retorne o seguinte:**

<ul>
  <li>Se os pontos estão no diâmetro, retorne um ponto. No entanto, se o raio também for zero, retorne <code>"Radius Zero"</code>.</li>
  <li>Se os pontos forem coincidentes, retornar <code>"Coincident point. Infinite solutions"</code>.</li>
  <li>Se os pontos forem mais distantes do que o diâmetro, retornar <code>"No intersection. Points further apart than circle diameter"</code>.</li>
</ul>

**Exemplo de entradas:**

<pre>      p1                p2           r
0.1234, 0.9876    0.8765, 0.2345    2.0
0.0000, 2.0000    0.0000, 0.0000    1.0
0.1234, 0.9876    0.1234, 0.9876    2.0
0.1234, 0.9876    0.8765, 0.2345    0.5
0.1234, 0.9876    0.1234, 0.9876    0.0
</pre>

# --hints--

`getCircles` deve ser uma função.

```js
assert(typeof getCircles === 'function');
```

`getCircles([0.1234, 0.9876], [0.8765, 0.2345], 2.0)` deve retornar `[[1.8631, 1.9742], [-0.8632, -0.7521]]`.

```js
assert.deepEqual(getCircles(...testCases[0]), answers[0]);
```

`getCircles([0.0000, 2.0000], [0.0000, 0.0000], 1.0)` deve retornar `[0, 1]`

```js
assert.deepEqual(getCircles(...testCases[1]), answers[1]);
```

`getCircles([0.1234, 0.9876], [0.1234, 0.9876], 2.0)` deve retornar `Coincident point. Infinite solutions`

```js
assert.deepEqual(getCircles(...testCases[2]), answers[2]);
```

`getCircles([0.1234, 0.9876], [0.8765, 0.2345], 0.5)` deve retornar `No intersection. Points further apart than circle diameter`

```js
assert.deepEqual(getCircles(...testCases[3]), answers[3]);
```

`getCircles([0.1234, 0.9876], [0.1234, 0.9876], 0.0)` deve retornar `Radius Zero`

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
