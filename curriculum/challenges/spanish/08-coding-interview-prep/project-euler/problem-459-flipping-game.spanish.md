---
id: 5
localeTitle: 5900f5371000cf542c51004a
challengeType: 5
title: 'Problem 459: Flipping game'
---

## Description
<section id='description'> 
El juego de volteo es un juego de dos jugadores jugado en un tablero cuadrado de N por N. 
Cada cuadrado contiene un disco con un lado blanco y un lado negro. 
El juego comienza con todos los discos mostrando su lado blanco. 

Un turno consiste en voltear todos los discos en un rectángulo con las siguientes propiedades: 
la esquina superior derecha del rectángulo contiene un disco blanco 
el ancho del rectángulo es un cuadrado perfecto (1, 4, 9, 16, ...) 
la altura del rectángulo es un número triangular (1, 3, 6, 10, ...) 


Los jugadores alternan turnos. Un jugador gana girando la cuadrícula todo negro. 

Deje que W (N) sea el número de movimientos ganadores para el primer jugador en un tablero N por N con todos los discos blancos, asumiendo que es el juego perfecto. 
W (1) = 1, W (2) = 0, W (5) = 8 y W (102) = 31395. 

Para N = 5, los ocho primeros movimientos ganadores del primer jugador son: 




Encuentre W (106). 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler459()</code> debe devolver 3996390106631.
    testString: 'assert.strictEqual(euler459(), 3996390106631, "<code>euler459()</code> should return 3996390106631.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler459() {
  // Good luck!
  return true;
}

euler459();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
