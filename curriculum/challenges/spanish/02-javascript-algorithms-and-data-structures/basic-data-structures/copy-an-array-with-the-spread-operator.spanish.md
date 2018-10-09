---
id: 587d7b7b367417b2b2512b13
title: Copy an Array with the Spread Operator
localeTitle: Copiar una matriz con el operador de propagación
challengeType: 1
---

## Description
<section id='description'>
Mientras <code>slice()</code> nos permite ser selectivos sobre qué elementos de una matriz copiar, entre otras muchas tareas útiles, el nuevo <dfn>operador de difusión de</dfn> ES6 nos permite copiar fácilmente <em>todos</em> los elementos de una matriz, en orden, con una sintaxis simple y altamente legible . La sintaxis de propagación simplemente se ve así: <code>...</code>
En la práctica, podemos usar el operador de propagación para copiar una matriz de la siguiente manera:
<blockquote>let thisArray = [true, true, undefined, false, null];<br>let thatArray = [...thisArray];<br>// thatArray equals [true, true, undefined, false, null]<br>// thisArray remains unchanged, and is identical to thatArray</blockquote>
</section>

## Instructions
<section id='instructions'>
Hemos definido una función, <code>copyMachine</code> que toma <code>arr</code> (una matriz) y <code>num</code> (un número) como argumentos. Se supone que la función devuelve una nueva matriz formada por <code>num</code> copias de <code>arr</code> . Hemos hecho la mayor parte del trabajo por usted, pero todavía no funciona del todo bien. Modifique la función utilizando la sintaxis de dispersión para que funcione correctamente (sugerencia: ¡otro método que ya hemos cubierto podría ser útil aquí!).
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: ' <code>copyMachine([true, false, true], 2)</code> debe devolver <code>[[true, false, true], [true, false, true]]</code> '
    testString: 'assert.deepEqual(copyMachine([true, false, true], 2), [[true, false, true], [true, false, true]], "<code>copyMachine([true, false, true], 2)</code> should return <code>[[true, false, true], [true, false, true]]</code>");'
  - text: ' <code>copyMachine([1, 2, 3], 5)</code> debe devolver <code>[[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]</code> '
    testString: 'assert.deepEqual(copyMachine([1, 2, 3], 5), [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]], "<code>copyMachine([1, 2, 3], 5)</code> should return <code>[[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]</code>");'
  - text: ' <code>copyMachine([true, true, null], 1)</code> debe devolver <code>[[true, true, null]]</code> '
    testString: 'assert.deepEqual(copyMachine([true, true, null], 1), [[true, true, null]], "<code>copyMachine([true, true, null], 1)</code> should return <code>[[true, true, null]]</code>");'
  - text: ' <code>copyMachine([&quot;it works&quot;], 3)</code> debería devolver <code>[[&quot;it works&quot;], [&quot;it works&quot;], [&quot;it works&quot;]]</code> '
    testString: 'assert.deepEqual(copyMachine(["it works"], 3), [["it works"], ["it works"], ["it works"]], "<code>copyMachine(["it works"], 3)</code> should return <code>[["it works"], ["it works"], ["it works"]]</code>");'
  - text: La función <code>copyMachine</code> debe utilizar el <code>spread operator</code> con array <code>arr</code>
    testString: 'assert.notStrictEqual(copyMachine.toString().indexOf(".concat(_toConsumableArray(arr))"), -1, "The <code>copyMachine</code> function should utilize the <code>spread operator</code> with array <code>arr</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line

    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
