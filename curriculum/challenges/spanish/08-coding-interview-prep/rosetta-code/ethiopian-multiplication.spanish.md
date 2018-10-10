---
title: Ethiopian multiplication
id: 599d1566a02b571412643b84
challengeType: 5
videoUrl: ''
localeTitle: Multiplicación etíope
---

## Description
<section id="description"><p> La multiplicación etíope es un método para multiplicar enteros utilizando solo la suma, el doblado y la reducción a la mitad. </p><p> Método: </p> Toma dos números para multiplicarlos y escríbelos en la parte superior de las dos columnas. En la columna de la izquierda, reduzca a la mitad el último número, descartando cualquier resto, y escriba el resultado debajo del último en la misma columna, hasta que escriba un valor de 1. En la columna de la derecha doble, doble el último número y escriba el Resultado a continuación. deténgase cuando agregue un resultado en la misma fila donde se muestra la columna de la izquierda 1. Examine la tabla producida y descarte cualquier fila donde el valor de la columna de la izquierda sea par. Suma los valores en la columna de la derecha que quedan para producir el resultado de multiplicar los dos números originales juntos <p> Por ejemplo: 17 × 34. </p><p> 17 34 </p><p> Reduciendo a la mitad la primera columna: </p><p> 17 34 </p><p> 8 </p><p> 4 </p><p> 2 </p><p> 1 </p><p> Duplicando la segunda columna: </p><p> 17 34 </p><p> 8 68 </p><p> 4 136 </p><p> 2 272 </p><p> 1 544 </p><p> Filas tachadas cuya primera celda es par: </p><p> 17 34 </p><p> 8 <strike>68</strike> </p><p> 4 <strike>136</strike> </p><p> 2 <strike>272</strike> </p><p> 1 544 </p><p> Suma los números restantes en la columna de la derecha: </p><p> 17 34 </p><p> 8 - </p><p> 4 --- </p><p> 2 --- </p><p> 1 544 </p><p> ==== </p><p> 578 </p><p> Entonces 17 multiplicado por 34, por el método etíope es 578. </p> Tarea: <p> La tarea es definir tres funciones nombradas / métodos / procedimientos / subrutinas: </p> uno para reducir a la mitad un número entero, uno para duplicar un número entero y otro para indicar si un número entero es par. <p> Usa estas funciones para crear una función que haga la multiplicación etíope. </p></section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>eth_mult</code> es una función.
    testString: 'assert(typeof eth_mult === "function", "<code>eth_mult</code> is a function.");'
  - text: '<code>eth_mult(17,34)</code> debe devolver <code>578</code> .'
    testString: 'assert.equal(eth_mult(17, 34), 578, "<code>eth_mult(17,34)</code> should return <code>578</code>.");'
  - text: '<code>eth_mult(23,46)</code> debe devolver <code>1058</code> .'
    testString: 'assert.equal(eth_mult(23, 46), 1058, "<code>eth_mult(23,46)</code> should return <code>1058</code>.");'
  - text: '<code>eth_mult(12,27)</code> debe devolver <code>324</code> .'
    testString: 'assert.equal(eth_mult(12, 27), 324, "<code>eth_mult(12,27)</code> should return <code>324</code>.");'
  - text: '<code>eth_mult(56,98)</code> debe devolver <code>5488</code> .'
    testString: 'assert.equal(eth_mult(56, 98), 5488, "<code>eth_mult(56,98)</code> should return <code>5488</code>.");'
  - text: '<code>eth_mult(63,74)</code> debe devolver <code>4662</code> .'
    testString: 'assert.equal(eth_mult(63, 74), 4662, "<code>eth_mult(63,74)</code> should return <code>4662</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function eth_mult (a, b) {
  // Good luck!
}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
