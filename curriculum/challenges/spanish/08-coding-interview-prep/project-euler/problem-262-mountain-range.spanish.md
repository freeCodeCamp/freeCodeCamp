---
id: 5
localeTitle: 5900f4731000cf542c50ff85
challengeType: 5
title: 'Problem 262: Mountain Range'
---

## Description
<section id='description'> 
La siguiente ecuación representa la topografía continua de una región montañosa, que da la elevación h en cualquier punto (x, y): 




Un mosquito tiene la intención de volar desde A (200,200) a B (1400,1400), sin dejando el área dada por 0 ≤ x, y ≤ 1600. 

Debido a las montañas que intervienen, primero se eleva directamente hasta un punto A &#39;, que tiene una elevación f. Luego, mientras permanece en la misma elevación f, vuela alrededor de cualquier obstáculo hasta que llega a un punto B &#39;directamente arriba de B. 

Primero, determine fmin, que es la elevación constante mínima que permite un viaje de A a B, mientras permanece En el área especificada. 
Luego, encuentra la longitud del camino más corto entre A &#39;y B&#39;, mientras vuelas a esa constante constante fmin. 

Da esa longitud como tu respuesta, redondeada a tres lugares decimales. 

Nota: Por conveniencia, la función de elevación que se muestra arriba se repite a continuación, en una forma adecuada para la mayoría de los lenguajes de programación: 
h = (5000-0.005 * (x * x + y * y + x * y) + 12.5 * ( x + y)) * exp (-abs (0.000001 * (x * x + y * y) -0.0015 * (x + y) +0.7)) 
</section>

## Instructions
<section id='instructions'> 

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
