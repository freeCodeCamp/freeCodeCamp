---
title: Circles of given radius through two points
id: 5951815dd895584b06884620
localeTitle: 5951815dd895584b06884620
challengeType: 5
---

## Description
<section id='description'> 
<p> Dados dos puntos en un plano y un radio, generalmente se pueden dibujar dos círculos de un radio dado a través de los puntos. </p> 
Excepciones: 
Un radio de cero debe tratarse como si nunca describiera círculos (excepto en el caso de que los puntos coincidan). 
Si los puntos son coincidentes, se puede dibujar un número infinito de círculos con el punto en su circunferencia, a menos que el radio también sea igual a cero, lo que luego colapsa los círculos en un punto. 
Si los puntos forman un diámetro, devuelva un solo círculo. 
Si los puntos están demasiado separados, no se pueden dibujar círculos. Tarea: 
Implemente una función que tome dos puntos y un radio y devuelva los dos círculos a través de esos puntos. Para cada círculo resultante, proporcione las coordenadas para el centro de cada círculo redondeado a cuatro dígitos decimales. Devuelve cada coordenada como una matriz y las coordenadas como una matriz de matrices. 
Para casos de borde, devuelva lo siguiente: 
Si los puntos están en el diámetro, devuelva un punto. Sin embargo, si el radio también es cero, devuelve <code>&quot;Radius Zero&quot;</code> . 
Si los puntos coinciden, devuelva <code>&quot;Coincident point. Infinite solutions&quot;</code> . 
Si los puntos están más separados que el diámetro, regrese <code>&quot;No intersection. Points further apart than circle diameter&quot;</code> . 
Entradas de muestra: 
<pre> 
p1 p2 r 
0.1234, 0.9876 0.8765, 0.2345 2.0 
0.0000, 2.0000 0.0000, 0.0000 1.0 
0.1234, 0.9876 0.1234, 0.9876 2.0 
0.1234, 0.9876 0.8765, 0.2345 0.5 
0.1234, 0.9876 0.1234, 0.9876 0.0 
</pre> 
Ref: 
<a href="http://mathforum.org/library/drmath/view/53027.html" title="enlace: http://mathforum.org/library/drmath/view/53027.html">Encontrar el centro de un círculo a partir de 2 puntos y el radio</a> en el foro de Matemáticas @ Drexel 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getCircles</code> es una función.
    testString: 'assert(typeof getCircles === "function", "<code>getCircles</code> is a function.");'
  - text: &#39; <code>getCircles([0.1234, 0.9876], [0.8765, 0.2345], 2.0)</code> debe devolver <code>[[1.8631, 1.9742], [-0.8632, -0.7521]]</code> .&#39;
    testString: 'assert.deepEqual(getCircles(...testCases[0]), answers[0], "<code>getCircles([0.1234, 0.9876], [0.8765, 0.2345], 2.0)</code> should return <code>[[1.8631, 1.9742], [-0.8632, -0.7521]]</code>.");'
  - text: &#39; <code>getCircles([0.0000, 2.0000], [0.0000, 0.0000], 1.0)</code> debe devolver <code>[0, 1]</code> &#39;
    testString: 'assert.deepEqual(getCircles(...testCases[1]), answers[1], "<code>getCircles([0.0000, 2.0000], [0.0000, 0.0000], 1.0)</code> should return <code>[0, 1]</code>");'
  - text: &#39; <code>getCircles([0.1234, 0.9876], [0.1234, 0.9876], 2.0)</code> debe devolver el <code>Coincident point. Infinite solutions</code> &#39;
    testString: 'assert.deepEqual(getCircles(...testCases[2]), answers[2], "<code>getCircles([0.1234, 0.9876], [0.1234, 0.9876], 2.0)</code> should return <code>Coincident point. Infinite solutions</code>");'
  - text: &#39; <code>getCircles([0.1234, 0.9876], [0.8765, 0.2345], 0.5)</code> debe devolver <code>No intersection. Points further apart than circle diameter</code> &#39;
    testString: 'assert.deepEqual(getCircles(...testCases[3]), answers[3], "<code>getCircles([0.1234, 0.9876], [0.8765, 0.2345], 0.5)</code> should return <code>No intersection. Points further apart than circle diameter</code>");'
  - text: &#39; <code>getCircles([0.1234, 0.9876], [0.1234, 0.9876], 0.0)</code> debe devolver <code>Radius Zero</code> &#39;
    testString: 'assert.deepEqual(getCircles(...testCases[4]), answers[4], "<code>getCircles([0.1234, 0.9876], [0.1234, 0.9876], 0.0)</code> should return <code>Radius Zero</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function getCircles (...args) {
  // Good luck!
  return true;
}
```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
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

function getCircles (...args) {
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
