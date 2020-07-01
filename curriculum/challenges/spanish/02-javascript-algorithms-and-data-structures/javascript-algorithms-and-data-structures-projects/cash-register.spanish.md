---
id: aa2e6f85cab2ab736c9a9b24
title: Cash Register
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Caja registradora
---

## Description
<section id="description"> Diseñe una función de caja registradora <code>checkCashRegister()</code> que acepte el precio de compra como primer argumento ( <code>price</code> ), el pago como segundo argumento ( <code>cash</code> ) y el efectivo en caja ( <code>cid</code> ) como tercer argumento. <code>cid</code> es una matriz 2D que muestra el dinero disponible. La función <code>checkCashRegister()</code> siempre debe devolver un objeto con una clave de <code>status</code> y una clave de <code>change</code> . Devuelva <code>{status: &quot;INSUFFICIENT_FUNDS&quot;, change: []}</code> si el efectivo en caja es inferior al cambio debido, o si no puede devolver el cambio exacto. Devuelva <code>{status: &quot;CLOSED&quot;, change: [...]}</code> con <code>cid</code> como el valor para la clave <code>change</code> si este es igual al cambio debido. De lo contrario, devuelva <code>{status: &quot;OPEN&quot;, change: [...]}</code> , con el cambio en monedas y billetes, ordenados de mayor a menor, como el valor de la clave <code>change</code> . Recuerda usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> si te atascas. Trate de emparejar el programa. Escribe tu propio código. <table class="table table-striped"><tbody><tr><th> Unidad monetaria </th><th> Cantidad </th></tr><tr><td> Centavo </td><td> $ 0.01 (PENNY) </td></tr><tr><td> Níquel </td><td> $ 0.05 (níquel) </td></tr><tr><td> Moneda de diez centavos </td><td> $ 0.1 (DIME) </td></tr><tr><td> Trimestre </td><td> $ 0.25 (TRIMESTRE) </td></tr><tr><td> Dólar </td><td> $ 1 (DÓLAR) </td></tr><tr><td> Cinco dólares </td><td> $ 5 (CINCO) </td></tr><tr><td> Diez dólares </td><td> $ 10 (DIEZ) </td></tr><tr><td> Veinte dólares </td><td> $ 20 (VEINTE) </td></tr><tr><td> Cien dolares </td><td> $ 100 (100) </td></tr></tbody></table></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>checkCashRegister(19.5, 20, [[&quot;PENNY&quot;, 1.01], [&quot;NICKEL&quot;, 2.05], [&quot;DIME&quot;, 3.1], [&quot;QUARTER&quot;, 4.25], [&quot;ONE&quot;, 90], [&quot;FIVE&quot;, 55], [&quot;TEN&quot;, 20], [&quot;TWENTY&quot;, 60], [&quot;ONE HUNDRED&quot;, 100]])</code> debe devolver un objeto.'
    testString: 'assert.deepEqual(Object.prototype.toString.call(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])), "[object Object]", "<code>checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])</code> should return an object.");'
  - text: '<code>checkCashRegister(19.5, 20, [[&quot;PENNY&quot;, 1.01], [&quot;NICKEL&quot;, 2.05], [&quot;DIME&quot;, 3.1], [&quot;QUARTER&quot;, 4.25], [&quot;ONE&quot;, 90], [&quot;FIVE&quot;, 55], [&quot;TEN&quot;, 20], [&quot;TWENTY&quot;, 60], [&quot;ONE HUNDRED&quot;, 100]])</code> debe devolver <code>{status: &quot;OPEN&quot;, change: [[&quot;QUARTER&quot;, 0.5]]}</code> .'
    testString: 'assert.deepEqual(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]), {status: "OPEN", change: [["QUARTER", 0.5]]}, "<code>checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])</code> should return <code>{status: "OPEN", change: [["QUARTER", 0.5]]}</code>.");'
  - text: '<code>checkCashRegister(3.26, 100, [[&quot;PENNY&quot;, 1.01], [&quot;NICKEL&quot;, 2.05], [&quot;DIME&quot;, 3.1], [&quot;QUARTER&quot;, 4.25], [&quot;ONE&quot;, 90], [&quot;FIVE&quot;, 55], [&quot;TEN&quot;, 20], [&quot;TWENTY&quot;, 60], [&quot;ONE HUNDRED&quot;, 100]])</code> debe devolver <code>{status: &quot;OPEN&quot;, change: [[&quot;TWENTY&quot;, 60], [&quot;TEN&quot;, 20], [&quot;FIVE&quot;, 15], [&quot;ONE&quot;, 1], [&quot;QUARTER&quot;, 0.5], [&quot;DIME&quot;, 0.2], [&quot;PENNY&quot;, 0.04]]}</code> .'
    testString: 'assert.deepEqual(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]), {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}, "<code>checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])</code> should return <code>{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}</code>.");'
  - text: '<code>checkCashRegister(19.5, 20, [[&quot;PENNY&quot;, 0.01], [&quot;NICKEL&quot;, 0], [&quot;DIME&quot;, 0], [&quot;QUARTER&quot;, 0], [&quot;ONE&quot;, 0], [&quot;FIVE&quot;, 0], [&quot;TEN&quot;, 0], [&quot;TWENTY&quot;, 0], [&quot;ONE HUNDRED&quot;, 0]])</code> debe devolver <code>{status: &quot;INSUFFICIENT_FUNDS&quot;, change: []}</code> .'
    testString: 'assert.deepEqual(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), {status: "INSUFFICIENT_FUNDS", change: []}, "<code>checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])</code> should return <code>{status: "INSUFFICIENT_FUNDS", change: []}</code>.");'
  - text: '<code>checkCashRegister(19.5, 20, [[&quot;PENNY&quot;, 0.01], [&quot;NICKEL&quot;, 0], [&quot;DIME&quot;, 0], [&quot;QUARTER&quot;, 0], [&quot;ONE&quot;, 1], [&quot;FIVE&quot;, 0], [&quot;TEN&quot;, 0], [&quot;TWENTY&quot;, 0], [&quot;ONE HUNDRED&quot;, 0]])</code> debe devolver <code>{status: &quot;INSUFFICIENT_FUNDS&quot;, change: []}</code> .'
    testString: 'assert.deepEqual(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), {status: "INSUFFICIENT_FUNDS", change: []}, "<code>checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])</code> should return <code>{status: "INSUFFICIENT_FUNDS", change: []}</code>.");'
  - text: '<code>checkCashRegister(19.5, 20, [[&quot;PENNY&quot;, 0.5], [&quot;NICKEL&quot;, 0], [&quot;DIME&quot;, 0], [&quot;QUARTER&quot;, 0], [&quot;ONE&quot;, 0], [&quot;FIVE&quot;, 0], [&quot;TEN&quot;, 0], [&quot;TWENTY&quot;, 0], [&quot;ONE HUNDRED&quot;, 0]])</code> debe devolver <code>{status: &quot;CLOSED&quot;, change: [[&quot;PENNY&quot;, 0.5], [&quot;NICKEL&quot;, 0], [&quot;DIME&quot;, 0], [&quot;QUARTER&quot;, 0], [&quot;ONE&quot;, 0], [&quot;FIVE&quot;, 0], [&quot;TEN&quot;, 0], [&quot;TWENTY&quot;, 0], [&quot;ONE HUNDRED&quot;, 0]]}</code> .'
    testString: 'assert.deepEqual(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]), {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}, "<code>checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])</code> should return <code>{status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function checkCashRegister(price, cash, cid) {
  var change;
  // Here is your change, ma'am.
  return change;
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
