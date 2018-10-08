---
id: 5
localeTitle: 5900f54a1000cf542c51005c
challengeType: 5
title: 'Problem 477: Number Sequence Game'
---

## Description
<section id='description'> 
El juego de secuencia de números comienza con una secuencia S de N números escritos en una línea. 
Dos jugadores alternan turnos. En su turno, un jugador debe seleccionar y eliminar el primer o el último número que queda en la secuencia. 
La puntuación del jugador es la suma de todos los números que ha tomado. Cada jugador intenta maximizar su propia suma. 
Si N = 4 y S = {1, 2, 10, 3}, entonces cada jugador maximiza su puntuación de la siguiente manera: 
Jugador 1: elimina el primer número (1) 
Jugador 2: elimina el último número de la secuencia restante (3) 
Jugador 1: elimina el último número de la secuencia restante (10) 
Jugador 2: elimina el número restante (2) 
puntuación del jugador 1 es 1 + 10 = 11. 
Sea F (N) la puntuación de jugador 1 si ambos jugadores siguen la estrategia óptima para la secuencia S = {s1, s2, ..., sN} definida como: 
s1 = 0 
si + 1 = (si2 + 45) módulo 1 000 000 007 
La secuencia comienza con S = {0, 45, 2070, 4284945, 753524550, 478107844, 894218625, ...}. 
Te dan F (2) = 45, F (4) = 4284990, F (100) = 26365463243, F (104) = 2495838522951. 
Encuentra F (108). 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler477()</code> debe devolver 25044905874565164.
    testString: 'assert.strictEqual(euler477(), 25044905874565164, "<code>euler477()</code> should return 25044905874565164.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler477() {
  // Good luck!
  return true;
}

euler477();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
