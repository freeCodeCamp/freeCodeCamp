---
id: 587d8259367417b2b2512c85
title: Implement Selection Sort
challengeType: 1
videoUrl: ''
localeTitle: Implementar Selección Ordenar
---

## Description
<section id="description"> Aquí vamos a implementar el ordenamiento por selección. El ordenamiento por selección funciona seleccionando el valor mínimo en una lista e intercambiándolo con el primer valor en la lista. Luego comienza en la segunda posición, selecciona el valor más pequeño en la lista restante y lo intercambia con el segundo elemento. Continúa recorriendo la lista e intercambiando elementos hasta que llega al final de la lista. Ahora la lista está ordenada. El ordenamiento de selección tiene una complejidad de tiempo cuadrática en todos los casos. <strong>Instrucciones</strong> : Escriba una función <code>selectionSort</code> que toma una matriz de enteros como entrada y devuelve una matriz de estos enteros en orden ordenado de menor a mayor. <strong>Nota:</strong> <br> Estamos llamando a esta función desde detrás de la escena; La matriz de prueba que estamos utilizando está comentada en el editor. ¡Intente registrar la <code>array</code> para ver su algoritmo de clasificación en acción! </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>selectionSort</code> es una función.
    testString: 'assert(typeof selectionSort == "function", "<code>selectionSort</code> is a function.");'
  - text: <code>selectionSort</code> devuelve una matriz ordenada (menor a mayor).
    testString: 'assert(isSorted(selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])), "<code>selectionSort</code> returns a sorted array (least to greatest).");'
  - text: '<code>selectionSort</code> devuelve una matriz que no se modifica, excepto para el orden.'
    testString: 'assert.sameMembers(selectionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]), [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92], "<code>selectionSort</code> returns an array that is unchanged except for order.");'
  - text: <code>selectionSort</code> no debe usar el método <code>.sort()</code> .
    testString: 'assert.strictEqual(code.search(/\.sort\(/), -1, "<code>selectionSort</code> should not use the built-in <code>.sort()</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function selectionSort(array) {
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
