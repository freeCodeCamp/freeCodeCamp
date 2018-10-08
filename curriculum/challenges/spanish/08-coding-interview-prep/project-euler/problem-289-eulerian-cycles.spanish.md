---
id: 5
localeTitle: 5900f48d1000cf542c50ffa0
challengeType: 5
title: 'Problem 289: Eulerian Cycles'
---

## Description
<section id='description'> 
Sea C (x, y) un círculo que pasa por los puntos (x, y), (x, y + 1), (x + 1, y) y (x + 1, y + 1). 

Para los enteros positivos m y n, sea E (m, n) una configuración que consiste en los círculos m · n: 
{C (x, y): 0 ≤ x &lt;m, 0 ≤ y &lt;n, x y y son números enteros} 

Un ciclo euleriano en E (m, n) es un camino cerrado que pasa a través de cada arco exactamente una vez. 
Muchos de estos caminos son posibles en E (m, n), pero solo nos interesan aquellos que no se cruzan solos: 
Un camino que no se cruza solo se toca en los puntos de la red, pero nunca se cruza. 

La imagen de abajo muestra E (3,3) y un ejemplo de una ruta Euleriana sin cruce. 

Sea L (m, n) el número de caminos no cruzados eulerianos en E (m, n). 
Por ejemplo, L (1,2) = 2, L (2,2) = 37 y L (3,3) = 104290. 

Encuentra L (6,10) mod 1010. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler289()</code> debe devolver 6567944538.
    testString: 'assert.strictEqual(euler289(), 6567944538, "<code>euler289()</code> should return 6567944538.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler289() {
  // Good luck!
  return true;
}

euler289();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
