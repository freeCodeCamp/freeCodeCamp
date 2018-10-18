---
id: 8d5123c8c441eddfaeb5bdef
title: Implement Bubble Sort
challengeType: 1
videoUrl: ''
localeTitle: Implementar Bubble Sort
---

## Descripción
<section id="description"> Este es el primero de varios desafíos sobre algoritmos de ordenamiento. Dado un arreglo de elementos desordenados, queremos poder devolver un arreglo ordenado. Veremos varios métodos diferentes para hacer esto y aprenderemos acerca de las ventajas y desventajas de estos diferentes enfoques. Si bien la mayoría de los lenguajes modernos tienen métodos de ordenamiento incorporados para operaciones como esta, todavía es importante entender algunos de los enfoques básicos comunes y aprender cómo pueden implementarse. Aquí veremos el algoritmo llamado _Bubble sort_. Este método comienza con un arreglo sin ordenar y &#39;burbujea&#39; valores sin ordenar hacia el final, iterando a través del arreglo hasta que esté completamente ordenado. Lo hace comparando elementos adyacentes e intercambiándolos si están en desorden. El método continúa en bucle a través del arreglo hasta que no se produzcan intercambios de elementos. Es en este punto que el arreglo estará ordenado. Este método requiere múltiples iteraciones a través del arreglo y, en promedio, en el peor de los casos tiene una complejidad de tiempo cuadrática. Aunque simple, generalmente es poco práctico en la mayoría de las situaciones. <strong>Instrucciones:</strong> Escriba una función <code>bubbleSort</code> que toma un arreglo de enteros como entrada y devuelve un arreglo de estos enteros ordenado de menor a mayor. <strong>Nota:</strong> <br> Estamos llamando a esta función tras bambalinas; el arreglo de prueba que estamos utilizando está comentado en el editor. ¡Intente loggear el <code>array</code> para ver su algoritmo de ordenamiento en acción! </section>

## Instrucciones
<section id="instructions">
</section>

## Pruebas
<section id='tests'>

```yml
tests:
  - text: <code>bubbleSort</code> es una función.
    testString: 'assert(typeof bubbleSort == "function", "<code>bubbleSort</code> is a function.");'
  - text: <code>bubbleSort</code> devuelve una matriz ordenada (de menor a mayor).
    testString: 'assert(isSorted(bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])), "<code>bubbleSort</code> returns a sorted array (least to greatest).");'
  - text: '<code>bubbleSort</code> devuelve una matriz que no se modifica, excepto para el orden.'
    testString: 'assert.sameMembers(bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]), [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92], "<code>bubbleSort</code> returns an array that is unchanged except for order.");'
  - text: <code>bubbleSort</code> no debe usar el método <code>.sort()</code> .
    testString: 'assert.strictEqual(code.search(/\.sort\(/), -1, "<code>bubbleSort</code> should not use the built-in <code>.sort()</code> method.");'

```

</section>

## Semilla del desafío
<section id='challengeSeed'>

<div id='js-seed'>

```js
function bubbleSort(array) {
  // change code below this line

  // change code above this line
  return array;
}

// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]

```

</div>


### Después de las pruebas
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solución
<section id='solution'>

```js
// solution required
```
</section>
