---
id: 5
localeTitle: 5900f4931000cf542c50ffa6
challengeType: 5
title: 'Problem 295: Lenticular holes'
---

## Description
<section id='description'> 
Llamamos al área convexa encerrada por dos círculos un agujero lenticular si: 
Los centros de ambos círculos están en puntos de celosía. 
Los dos círculos se intersecan en dos puntos de celosía distintos. 
El interior del área convexa encerrada por ambos círculos no contiene ningún punto de celosía. 

Considera los círculos: 
C0: x2 + y2 = 25 
C1: (x + 4) 2+ (y-4) 2 = 1 
C2: (x-12) 2+ (y-4) 2 = 65 


Los círculos C0, C1 y C2 se dibujan en la siguiente imagen. 


C0 y C1 forman un orificio lenticular, así como C0 y C2. 

Llamamos a un par ordenado de números reales positivos (r1, r2) un par lenticular si existen dos círculos con radios r1 y r2 que forman un agujero lenticular. 
Podemos verificar que (1, 5) y (5, √65) son los pares lenticulares del ejemplo anterior. 

Sea L (N) el número de pares lenticulares distintos (r1, r2) para los cuales 0 &lt;r1 ≤ r2 ≤ N. 
Podemos verificar que L (10) = 30 y L (100) = 3442. 

Encuentra L (100 000). 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler295()</code> debe devolver 4884650818.
    testString: 'assert.strictEqual(euler295(), 4884650818, "<code>euler295()</code> should return 4884650818.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler295() {
  // Good luck!
  return true;
}

euler295();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
