---
id: 5
localeTitle: 5900f4b71000cf542c50ffca
challengeType: 5
title: 'Problem 331: Cross flips'
---

## Description
<section id='description'> 
discos de 
N × N se colocan en un tablero de juego cuadrado. Cada disco tiene un lado negro y un lado blanco. 

En cada turno, puede elegir un disco y voltear todos los discos en la misma fila y la misma columna que este disco: por lo tanto, se voltean 2 × N-1 discos. El juego termina cuando todos los discos muestran su lado blanco. El siguiente ejemplo muestra un juego en un tablero de 5 × 5. 



Se puede probar que 3 es el número mínimo de turnos para terminar este juego. 

El disco inferior izquierdo de la placa N × N tiene coordenadas (0,0); 
el disco inferior derecho tiene coordenadas (N-1,0) y el disco superior izquierdo tiene coordenadas (0, N-1). 

Deje que CN sea la siguiente configuración de una placa con discos N × N: 
Un disco en (x, y) satisfactorio, muestra su lado negro; De lo contrario, muestra su lado blanco. C5 se muestra arriba. 

Deje que T (N) sea el número mínimo de turnos para terminar un juego comenzando desde la configuración CN o 0 si la configuración CN no tiene solución. 
Hemos demostrado que T (5) = 3. También se le da que T (10) = 29 y T (1 000) = 395253. 

Buscar. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler331()</code> debe devolver 467178235146843500.
    testString: 'assert.strictEqual(euler331(), 467178235146843500, "<code>euler331()</code> should return 467178235146843500.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler331() {
  // Good luck!
  return true;
}

euler331();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
