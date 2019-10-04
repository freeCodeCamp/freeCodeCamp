---
id: 587d825c367417b2b2512c8f
title: Implement Merge Sort
challengeType: 1
videoUrl: ''
localeTitle: Implementar Merge Sort
---

## Description
<section id="description"> Otro algoritmo de ordenamiento intermedio que es muy común es el ordenamiento por fusión. Al igual que la ordenación rápida, la ordenación combinada también usa una metodología recursiva de dividir y conquistar para ordenar un arreglo. Aprovecha el hecho de que es relativamente fácil clasificar dos arreglos siempre que cada una esté ordenada en primer lugar. Pero comenzaremos con solo un arreglo como entrada, entonces, ¿cómo podemos obtener dos arreglos ordenados de eso? Bueno, podemos dividir recursivamente la entrada original en dos hasta que alcancemos el caso base de un arreglo con un elemento. Un arreglo de un solo elemento se ordena naturalmente, por lo que podemos comenzar a combinar. Esta combinación desenrollará las llamadas recursivas que dividen el arreglo original, produciendo finalmente un arreglo ordenado final de todos los elementos. Los pasos de la ordenación por fusión, entonces, son: <strong>1)</strong> Divide recursivamente el arreglo de entrada por la mitad hasta que se genere un sub-arreglo con solo un elemento. <strong>2)</strong> Combinar cada sub-arreglo ordenado para producir el arreglo ordenado final. La clasificación de mezcla es un método de clasificación eficiente, con una complejidad de tiempo de <i>O (nlog (n))</i> . Este algoritmo es popular porque es eficaz y relativamente fácil de implementar. Como nota al margen, este será el último algoritmo de clasificación que cubrimos aquí. Sin embargo, más adelante en la sección sobre estructuras de datos de árbol, describiremos la ordenación de pilas, otro método de clasificación eficiente que requiere una pila binaria en su implementación. <strong>Instrucciones:</strong> Escriba una función <code>mergeSort</code> que toma un arreglo de enteros como entrada y devuelve un arreglo de estos enteros en orden, ordenado de menor a mayor. Una buena manera de implementar esto es escribir una función, por ejemplo, <code>merge</code> , que es responsable de combinar dos arreglos ordenados, y otra función, por ejemplo <code>mergeSort</code> , que es responsable de la recursión que produce arreglos de un solo elemento para alimentar la fusión. ¡Buena suerte! <strong>Nota:</strong> <br> Estamos llamando a esta función desde detrás de la escena; El arreglo de prueba que estamos utilizando está comentada en el editor. ¡Intente registrar la <code>array</code> para ver su algoritmo de clasificación en acción! </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>mergeSort</code> es una función.
    testString: 'assert(typeof mergeSort == "function", "<code>mergeSort</code> is a function.");'
  - text: <code>mergeSort</code> devuelve un arreglo ordenado (menor a mayor).
    testString: 'assert(isSorted(mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])), "<code>mergeSort</code> returns a sorted array (least to greatest).");'
  - text: '<code>mergeSort</code> devuelve un arreglo que no se modifica, excepto para el orden.'
    testString: 'assert.sameMembers(mergeSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]), [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92], "<code>mergeSort</code> returns an array that is unchanged except for order.");'
  - text: <code>mergeSort</code> no debe usar el método <code>.sort()</code> .
    testString: 'assert.strictEqual(code.search(/\.sort\(/), -1, "<code>mergeSort</code> should not use the built-in <code>.sort()</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function mergeSort(array) {
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
