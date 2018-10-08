---
id: 5
localeTitle: 5900f4c51000cf542c50ffd7
challengeType: 5
title: 'Problem 344: Silver dollar game'
---

## Description
<section id='description'> 
Una variante del juego del dólar de plata de NG de Bruijn se puede describir de la siguiente manera: 

En una tira de cuadrados se colocan varias monedas, como máximo una moneda por cuadrado. Sólo una moneda, llamada el dólar de plata, tiene algún valor. Dos jugadores se turnan para hacer movimientos. En cada turno, un jugador debe hacer un movimiento regular o especial. 

Un movimiento regular consiste en seleccionar una moneda y moverla una o más casillas a la izquierda. La moneda no puede salir de la tira o saltar sobre o sobre otra moneda. 

Alternativamente, el jugador puede elegir hacer el movimiento especial de embolsar la moneda más a la izquierda en lugar de hacer un movimiento regular. Si no es posible realizar movimientos regulares, el jugador se ve obligado a embolsar la moneda más a la izquierda. 

El ganador es el jugador que se lleva el dólar de plata. 





Una configuración ganadora es un arreglo de monedas en la tira donde el primer jugador puede forzar una victoria sin importar lo que haga el segundo jugador. 

Sea W (n, c) el número de configuraciones ganadoras para una franja de n cuadrados, c monedas sin valor y un dólar de plata. 

Se le da que W (10,2) = 324 y W (100,10) = 1514704946113500. 

Encuentre W (1 000 000, 100) módulo la semiprima 1000 036 000 099 (= 1 000 003 · 1 000 033). 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler344()</code> debe devolver 65579304332.
    testString: 'assert.strictEqual(euler344(), 65579304332, "<code>euler344()</code> should return 65579304332.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler344() {
  // Good luck!
  return true;
}

euler344();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
