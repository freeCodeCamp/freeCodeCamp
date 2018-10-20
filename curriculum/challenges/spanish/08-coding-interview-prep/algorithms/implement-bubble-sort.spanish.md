---
id: 8d5123c8c441eddfaeb5bdef
title: Implement Bubble Sort
challengeType: 1
videoUrl: ''
localeTitle: Implementar Bubble Sort
---

## Description
<section id="description"> Este es el primero de varios desafíos en la clasificación de algoritmos. Dada una matriz de elementos sin clasificar, queremos poder devolver una matriz ordenada. Veremos varios métodos diferentes para hacer esto y aprenderemos algunas compensaciones entre estos diferentes enfoques. Si bien la mayoría de los lenguajes modernos tienen métodos de clasificación incorporados para operaciones como esta, todavía es importante entender algunos de los enfoques básicos comunes y aprender cómo pueden implementarse. Aquí veremos "burbuja ordenada". El método de clasificación de burbujas comienza al principio de una matriz sin ordenar y &#39;burbujea&#39; valores sin ordenar hacia el final, iterando a través de la matriz hasta que esté completamente ordenada. Lo hace comparando elementos adyacentes e intercambiándolos si están fuera de orden. El método continúa en bucle a través de la matriz hasta que no se produzcan swaps en qué punto se clasifica la matriz. Este método requiere múltiples iteraciones a través de la matriz y, en promedio, en el peor de los casos tiene una complejidad de tiempo cuadrática. Aunque simple, generalmente es poco práctico en la mayoría de las veces. <strong>Instrucciones:</strong> Escriba una función <code>bubbleSort</code> que toma una matriz de enteros como entrada y devuelve una matriz de estos enteros en orden ordenado de menor a mayor. <strong>Nota:</strong> <br> Estamos llamando a esta función desde detrás de la escena; La matriz de prueba que estamos utilizando está comentada en el editor. ¡Intenta registrar la <code>array</code> para ver su algoritmo de clasificación en acción! </section>

## Instructions
<section id="instructions">
</section>

## Tests
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

## Challenge Seed
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
