---
id: 5
localeTitle: 5900f4fe1000cf542c510010
challengeType: 5
title: 'Problem 400: Fibonacci tree game'
---

## Description
<section id='description'> 
Un árbol de Fibonacci es un árbol binario recursivamente definido como: T (0) es el árbol vacío. 
T (1) es el árbol binario con un solo nodo. 
T (k) consiste en un nodo raíz que tiene T (k-1) y T (k-2) como hijos. 

En tal árbol, dos jugadores juegan un juego para llevar. En cada turno, un jugador selecciona un nodo y elimina ese nodo junto con el subárbol arraigado en ese nodo. 
El jugador que está obligado a tomar el nodo raíz de todo el árbol pierde. 


Estos son los movimientos ganadores del primer jugador en el primer turno para T (k) de k = 1 a k = 6. 




Sea f (k) el número de movimientos ganadores del primer jugador (es decir, los movimientos para los cuales el segundo jugador no tiene una estrategia ganadora) en el primer turno del juego cuando este juego se juega en T (k ). 



Por ejemplo, f (5) = 1 y f (10) = 17. 



Encuentre f (10000). Da los últimos 18 dígitos de tu respuesta. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler400()</code> debe devolver 438505383468410600.
    testString: 'assert.strictEqual(euler400(), 438505383468410600, "<code>euler400()</code> should return 438505383468410600.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler400() {
  // Good luck!
  return true;
}

euler400();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
