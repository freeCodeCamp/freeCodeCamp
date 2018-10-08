---
id: 5
localeTitle: 5900f49f1000cf542c50ffb1
challengeType: 5
title: 'Problem 306: Paper-strip Game'
---

## Description
<section id='description'> 
El siguiente juego es un ejemplo clásico de Combinatorial Game Theory: 

Dos jugadores comienzan con una tira de n cuadrados blancos y toman turnos alternativos. 
En cada turno, un jugador elige dos cuadrados blancos contiguos y los pinta de negro. 
El primer jugador que no puede hacer un movimiento pierde. 

Si n = 1, no hay movimientos válidos, por lo que el primer jugador pierde automáticamente. 
Si n = 2, solo hay un movimiento válido, después del cual el segundo jugador pierde. 
Si n = 3, hay dos movimientos válidos, pero ambos dejan una situación en la que el segundo jugador pierde. 
Si n = 4, hay tres movimientos válidos para el primer jugador; Ella puede ganar el juego pintando los dos cuadrados del medio. 
Si n = 5, hay cuatro movimientos válidos para el primer jugador (se muestra a continuación en rojo); pero no importa lo que haga, el segundo jugador (azul) gana. 



Entonces, para 1 ≤ n ≤ 5, hay 3 valores de n para los cuales el primer jugador puede forzar una victoria. 
De manera similar, para 1 ≤ n ≤ 50, hay 40 valores de n para los cuales el primer jugador puede forzar una victoria. 

Para 1 ≤ n ≤ 1 000 000, ¿cuántos valores de n hay para los cuales el primer jugador puede forzar una victoria? 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler306()</code> debe devolver 852938.
    testString: 'assert.strictEqual(euler306(), 852938, "<code>euler306()</code> should return 852938.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler306() {
  // Good luck!
  return true;
}

euler306();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
