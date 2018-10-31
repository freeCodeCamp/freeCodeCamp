---
id: 587d8259367417b2b2512c86
title: Implement Insertion Sort
challengeType: 1
videoUrl: ''
localeTitle: Implementar orden de inserción
---

## Description
<section id="description"> El siguiente método de clasificación que veremos es la ordenación por inserción. Este método funciona mediante la creación de una matriz ordenada al principio de la lista. Comienza la matriz ordenada con el primer elemento. Luego inspecciona el siguiente elemento y lo intercambia hacia atrás en la matriz ordenada hasta que esté en la posición ordenada. Continúa recorriendo la lista e intercambiando nuevos elementos hacia atrás en la parte ordenada hasta que llega al final. Este algoritmo tiene una complejidad de tiempo cuadrática en los casos promedio y en los peores. <strong>Instrucciones:</strong> Escriba una función <code>insertionSort</code> que toma una matriz de enteros como entrada y devuelve una matriz de estos enteros en orden ordenado de menor a mayor. <strong>Nota:</strong> <br> Estamos llamando a esta función desde detrás de la escena; La matriz de prueba que estamos utilizando está comentada en el editor. ¡Intente registrar la <code>array</code> para ver su algoritmo de clasificación en acción! </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>insertionSort</code> es una función.
    testString: 'assert(typeof insertionSort == "function", "<code>insertionSort</code> is a function.");'
  - text: <code>insertionSort</code> devuelve una matriz ordenada (menor a mayor).
    testString: 'assert(isSorted(insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])), "<code>insertionSort</code> returns a sorted array (least to greatest).");'
  - text: '<code>insertionSort</code> devuelve una matriz que no se modifica, excepto para el orden.'
    testString: 'assert.sameMembers(insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]), [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92], "<code>insertionSort</code> returns an array that is unchanged except for order.");'
  - text: <code>insertionSort</code> no debe usar el método <code>.sort()</code> .
    testString: 'assert.strictEqual(code.search(/\.sort\(/), -1, "<code>insertionSort</code> should not use the built-in <code>.sort()</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function insertionSort(array) {
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
