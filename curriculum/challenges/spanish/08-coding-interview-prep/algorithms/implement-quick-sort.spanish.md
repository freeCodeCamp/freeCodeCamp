---
id: 587d825a367417b2b2512c89
title: Implement Quick Sort
challengeType: 1
videoUrl: ''
localeTitle: Implementar ordenación rápida
---

## Description
<section id="description"> Aquí pasaremos a un algoritmo de clasificación intermedio: clasificación rápida. La clasificación rápida es un método eficiente y recursivo con un enfoque tipo dividir y conquistar para clasificar una matriz. En este método, se elige un valor pivote en la matriz original. La matriz se divide en dos subgrupos de valores menores y mayores que el valor de pivote. Luego combinamos el resultado de llamar recursivamente el algoritmo de ordenamiento rápido en ambos subarreglos. Esto continúa hasta que se alcanza el caso base de una matriz vacía o de un solo elemento, que devolvemos. El desenrollamiento de las llamadas recursivas nos devuelve la matriz ordenada. La clasificación rápida es un método de clasificación muy eficiente, que proporciona un rendimiento de <i>O (nlog (n))</i> en promedio. También es relativamente fácil de implementar. Estos atributos lo convierten en un método de clasificación popular y útil. <strong>Instrucciones:</strong> Escriba una función <code>quickSort</code> que tome una matriz de enteros como entrada y devuelva una matriz de estos enteros en orden ordenado de menor a mayor. Si bien la elección del valor de pivote es importante, cualquier pivote servirá para nuestros propósitos aquí. Por simplicidad, el primer o último elemento podría ser utilizado. <strong>Nota:</strong> <br> Estamos llamando a esta función desde detrás de la escena; La matriz de prueba que estamos utilizando está comentada en el editor. ¡Intente registrar la <code>array</code> para ver su algoritmo de clasificación en acción! </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>quickSort</code> es una función.
    testString: 'assert(typeof quickSort == "function", "<code>quickSort</code> is a function.");'
  - text: <code>quickSort</code> devuelve una matriz ordenada (de menor a mayor).
    testString: 'assert(isSorted(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])), "<code>quickSort</code> returns a sorted array (least to greatest).");'
  - text: '<code>quickSort</code> devuelve una matriz que no se modifica, excepto para el orden.'
    testString: 'assert.sameMembers(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]), [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92], "<code>quickSort</code> returns an array that is unchanged except for order.");'
  - text: <code>quickSort</code> no debe usar el método <code>.sort()</code> .
    testString: 'assert.strictEqual(code.search(/\.sort\(/), -1, "<code>quickSort</code> should not use the built-in <code>.sort()</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function quickSort(array) {
  // change code below this line

  // change code above this line
  return array;
}

// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
