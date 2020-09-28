---
id: a56138aff60341a09ed6c480
title: Inventory Update
challengeType: 5
videoUrl: ''
localeTitle: Actualización de inventario
---

## Description
<section id="description"> Compare y actualice el inventario almacenado en una matriz 2D con una segunda matriz 2D de una entrega nueva. Actualice las cantidades de artículos de inventario existentes actuales (en <code>arr1</code> ). Si no se puede encontrar un artículo, agregue el nuevo artículo y la cantidad en la matriz de inventario. La matriz de inventario devuelta debe estar ordenada alfabéticamente por artículo. Recuerda usar <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask</a> si te atascas. Trate de hacer programación en pareja. Escribe tu propio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La función <code>updateInventory</code> debería devolver una matriz.
    testString: 'assert.isArray(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]), "The function <code>updateInventory</code> should return an array.");'
  - text: '<code>updateInventory([[21, &quot;Bowling Ball&quot;], [2, &quot;Dirty Sock&quot;], [1, &quot;Hair Pin&quot;], [5, &quot;Microphone&quot;]], [[2, &quot;Hair Pin&quot;], [3, &quot;Half-Eaten Apple&quot;], [67, &quot;Bowling Ball&quot;], [7, &quot;Toothpaste&quot;]])</code> debe devolver una matriz con una longitud de 6.'
    testString: 'assert.equal(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).length, 6, "<code>updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])</code> should return an array with a length of 6.");'
  - text: '<code>updateInventory([[21, &quot;Bowling Ball&quot;], [2, &quot;Dirty Sock&quot;], [1, &quot;Hair Pin&quot;], [5, &quot;Microphone&quot;]], [[2, &quot;Hair Pin&quot;], [3, &quot;Half-Eaten Apple&quot;], [67, &quot;Bowling Ball&quot;], [7, &quot;Toothpaste&quot;]])</code> debe devolver <code>[[88, &quot;Bowling Ball&quot;], [2, &quot;Dirty Sock&quot;], [3, &quot;Hair Pin&quot;], [3, &quot;Half-Eaten Apple&quot;], [5, &quot;Microphone&quot;], [7, &quot;Toothpaste&quot;]]</code> .'
    testString: 'assert.deepEqual(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]), [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]], "<code>updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])</code> should return <code>[[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]</code>.");'
  - text: '<code>updateInventory([[21, &quot;Bowling Ball&quot;], [2, &quot;Dirty Sock&quot;], [1, &quot;Hair Pin&quot;], [5, &quot;Microphone&quot;]], [])</code> debe devolver <code>[[21, &quot;Bowling Ball&quot;], [2, &quot;Dirty Sock&quot;], [1, &quot;Hair Pin&quot;], [5, &quot;Microphone&quot;]]</code> .'
    testString: 'assert.deepEqual(updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], []), [[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], "<code>updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [])</code> should return <code>[[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]]</code>.");'
  - text: '<code>updateInventory([], [[2, &quot;Hair Pin&quot;], [3, &quot;Half-Eaten Apple&quot;], [67, &quot;Bowling Ball&quot;], [7, &quot;Toothpaste&quot;]])</code> debe devolver <code>[[67, &quot;Bowling Ball&quot;], [2, &quot;Hair Pin&quot;], [3, &quot;Half-Eaten Apple&quot;], [7, &quot;Toothpaste&quot;]]</code> .'
    testString: 'assert.deepEqual(updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]), [[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]], "<code>updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]])</code> should return <code>[[67, "Bowling Ball"], [2, "Hair Pin"], [3, "Half-Eaten Apple"], [7, "Toothpaste"]]</code>.");'
  - text: '<code>updateInventory([[0, &quot;Bowling Ball&quot;], [0, &quot;Dirty Sock&quot;], [0, &quot;Hair Pin&quot;], [0, &quot;Microphone&quot;]], [[1, &quot;Hair Pin&quot;], [1, &quot;Half-Eaten Apple&quot;], [1, &quot;Bowling Ball&quot;], [1, &quot;Toothpaste&quot;]])</code> debe devolver <code>[[1, &quot;Bowling Ball&quot;], [0, &quot;Dirty Sock&quot;], [1, &quot;Hair Pin&quot;], [1, &quot;Half-Eaten Apple&quot;], [0, &quot;Microphone&quot;], [1, &quot;Toothpaste&quot;]]</code> .'
    testString: 'assert.deepEqual(updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]), [[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]], "<code>updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]])</code> should return <code>[[1, "Bowling Ball"], [0, "Dirty Sock"], [1, "Hair Pin"], [1, "Half-Eaten Apple"], [0, "Microphone"], [1, "Toothpaste"]]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
