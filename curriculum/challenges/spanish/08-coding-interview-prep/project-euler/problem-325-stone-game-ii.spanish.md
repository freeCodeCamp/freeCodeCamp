---
id: 5
localeTitle: 5900f4b11000cf542c50ffc4
challengeType: 5
title: 'Problem 325: Stone Game II'
---

## Description
<section id='description'> 
Un juego se juega con dos pilas de piedras y dos jugadores. En su turno, un jugador quita varias piedras de la pila más grande. El número de piedras que retira debe ser un múltiplo positivo del número de piedras en la pila más pequeña. 



Por ejemplo, deje que el par ordenado (6,14) describa una configuración con 6 piedras en la pila más pequeña y 14 piedras en la pila más grande, luego el primer jugador puede quitar 6 o 12 piedras de la pila más grande. 



El jugador que toma todas las piedras de una pila gana el juego. 



Una configuración ganadora es aquella en la que el primer jugador puede forzar una victoria. Por ejemplo, (1,5), (2,6) y (3,12) son configuraciones ganadoras porque el primer jugador puede eliminar inmediatamente todas las piedras en la segunda pila. 



Una configuración perdida es aquella en la que el segundo jugador puede forzar una victoria, sin importar lo que haga el primer jugador. Por ejemplo, (2,3) y (3,4) están perdiendo configuraciones: cualquier movimiento legal deja una configuración ganadora para el segundo jugador. 



Defina S (N) como la suma de (xi + yi) para todas las configuraciones perdedoras (xi, yi), 0 &lt;xi &lt;yi ≤ N. Podemos verificar que S (10) = 211 y S (104 ) = 230312207313. 



Encuentra S (1016) mod 710. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler325()</code> debe devolver 54672965.
    testString: 'assert.strictEqual(euler325(), 54672965, "<code>euler325()</code> should return 54672965.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler325() {
  // Good luck!
  return true;
}

euler325();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
