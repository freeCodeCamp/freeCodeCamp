---
id: 5900f4731000cf542c50ff85
challengeType: 5
title: 'Problem 262: Mountain Range'
videoUrl: ''
localeTitle: 'Problema 262: Cordillera'
---

## Description
<section id="description"> La siguiente ecuación representa la topografía continua de una región montañosa, dando la elevación h en cualquier punto (x, y): <p> Un mosquito tiene la intención de volar de A (200,200) a B (1400,1400), sin abandonar el área dada por 0 ≤ x, y ≤ 1600. </p><p> Debido a las montañas intermedias, primero se eleva directamente hasta un punto A &#39;, que tiene una elevación f. Luego, mientras permanece en la misma elevación f, vuela alrededor de cualquier obstáculo hasta que llega a un punto B &#39;directamente arriba de B. </p><p> Primero, determine fmin, que es la elevación constante mínima que permite un viaje de A a B, mientras permanece en el área especificada. Luego, encuentre la longitud del camino más corto entre A &#39;y B&#39;, mientras vuela a esa altitud constante fmin. </p><p> Da esa longitud como tu respuesta, redondeada a tres lugares decimales. </p><p> Nota: Por conveniencia, la función de elevación que se muestra arriba se repite a continuación, en una forma adecuada para la mayoría de los lenguajes de programación: h = (5000-0.005 <em>(x</em> x + y <em>y + x</em> y) +12.5 <em>(x + y))</em> exp (- abs (0.000001 <em>(x</em> x + y <em>y) -0.0015</em> (x + y) +0.7)) </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler262()</code> debe devolver 2531.205.
    testString: 'assert.strictEqual(euler262(), 2531.205, "<code>euler262()</code> should return 2531.205.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler262() {
  // Good luck!
  return true;
}

euler262();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
