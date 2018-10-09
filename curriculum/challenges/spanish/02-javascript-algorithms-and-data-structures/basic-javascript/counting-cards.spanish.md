---
id: 565bbe00e9cc8ac0725390f4
title: Counting Cards
localeTitle: Tarjetas de conteo
challengeType: 1
---

## Description
<section id='description'>
En el juego de casino Blackjack, un jugador puede obtener una ventaja sobre la casa al hacer un seguimiento del número relativo de cartas altas y bajas que quedan en el mazo. Esto se llama <a href='https://en.wikipedia.org/wiki/Card_counting' target='_blank'>conteo de cartas</a> .
Tener más cartas altas en el mazo favorece al jugador. A cada tarjeta se le asigna un valor de acuerdo con la siguiente tabla. Cuando el conteo es positivo, el jugador debe apostar alto. Cuando el conteo es cero o negativo, el jugador debe apostar bajo.
<table class="table table-striped"><thead><tr><th> Cambio de cuenta </th><th> Tarjetas </th></tr></thead><tbody><tr><td> +1 </td><td> 2, 3, 4, 5, 6 </td></tr><tr><td> 0 </td><td> 7, 8, 9 </td></tr><tr><td> -1 </td><td> 10, &#39;J&#39;, &#39;Q&#39;, &#39;K&#39;, &#39;A&#39; </td></tr></tbody></table>
Escribirás una función de conteo de cartas. Recibirá un parámetro de <code>card</code> , que puede ser un número o una cadena, y aumentará o disminuirá la variable de <code>count</code> global según el valor de la tarjeta (consulte la tabla). La función devolverá una cadena con el recuento actual y la cadena <code>Bet</code> si el recuento es positivo, o <code>Hold</code> si el recuento es cero o negativo. El conteo actual y la decisión del jugador ( <code>Bet</code> o <code>Hold</code> ) deben estar separados por un solo espacio.
<strong>Ejemplo de salida</strong> <br> <code>-3 Hold</code> <br> <code>5 Bet</code>
<strong>Sugerencia</strong> <br> NO reinicie el <code>count</code> a 0 cuando el valor sea 7, 8 o 9. <br> NO devuelva una matriz. <br> NO incluya comillas (simples o dobles) en la salida.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Las secuencias de cartas 2, 3, 4, 5, 6 deben devolver <code>5 Bet</code> '
    testString: 'assert((function(){ count = 0; cc(2);cc(3);cc(4);cc(5);var out = cc(6); if(out === "5 Bet") {return true;} return false; })(), "Cards Sequence 2, 3, 4, 5, 6 should return <code>5 Bet</code>");'
  - text: 'Las secuencias de cartas 7, 8, 9 deben devolver <code>0 Hold</code> '
    testString: 'assert((function(){ count = 0; cc(7);cc(8);var out = cc(9); if(out === "0 Hold") {return true;} return false; })(), "Cards Sequence 7, 8, 9 should return <code>0 Hold</code>");'
  - text: 'La secuencia de cartas 10, J, Q, K, A debería devolver <code>-5 Hold</code> '
    testString: 'assert((function(){ count = 0; cc(10);cc("J");cc("Q");cc("K");var out = cc("A"); if(out === "-5 Hold") {return true;} return false; })(), "Cards Sequence 10, J, Q, K, A should return <code>-5 Hold</code>");'
  - text: 'Las secuencias de cartas 3, 7, Q, 8, A deben devolver <code>-1 Hold</code> '
    testString: 'assert((function(){ count = 0; cc(3);cc(7);cc("Q");cc(8);var out = cc("A"); if(out === "-1 Hold") {return true;} return false; })(), "Cards Sequence 3, 7, Q, 8, A should return <code>-1 Hold</code>");'
  - text: 'Las secuencias de cartas 2, J, 9, 2, 7 deben devolver <code>1 Bet</code> '
    testString: 'assert((function(){ count = 0; cc(2);cc("J");cc(9);cc(2);var out = cc(7); if(out === "1 Bet") {return true;} return false; })(), "Cards Sequence 2, J, 9, 2, 7 should return <code>1 Bet</code>");'
  - text: 'Las secuencias de cartas 2, 2, 10 deben devolver <code>1 Bet</code> '
    testString: 'assert((function(){ count = 0; cc(2);cc(2);var out = cc(10); if(out === "1 Bet") {return true;} return false; })(), "Cards Sequence 2, 2, 10 should return <code>1 Bet</code>");'
  - text: 'Secuencia de cartas 3, 2, A, 10, K debería devolver <code>-1 Hold</code> '
    testString: 'assert((function(){ count = 0; cc(3);cc(2);cc("A");cc(10);var out = cc("K"); if(out === "-1 Hold") {return true;} return false; })(), "Cards Sequence 3, 2, A, 10, K should return <code>-1 Hold</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var count = 0;

function cc(card) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
```

</div>



</section>

## Solution
<section id='solution'>


```js
var count = 0;
function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
  }
  if(count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}
```

</section>
