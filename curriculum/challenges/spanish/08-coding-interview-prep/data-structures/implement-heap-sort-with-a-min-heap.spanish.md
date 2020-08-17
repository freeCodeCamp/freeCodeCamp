---
id: 587d825b367417b2b2512c8c
title: Implement Heap Sort with a Min Heap
challengeType: 1
videoUrl: ''
localeTitle: Implementar Heap Sort con un Min Heap
---

## Description
<section id="description"> Ahora que podemos agregar y eliminar elementos, veamos algunas de las aplicaciones en que se pueden usar los montones. Los montones se usan comúnmente para implementar colas de prioridad porque siempre almacenan un artículo de mayor o menor valor en la primera posición. Además, se utilizan para implementar un algoritmo de clasificación denominado ordenación de pila. Veremos cómo hacer esto aquí. La clasificación de montones utiliza un montón mínimo, lo contrario de un montón máximo. Un montón mínimo siempre almacena el elemento de menor valor en la posición raíz. La ordenación de montones funciona tomando una matriz sin clasificar, agregando cada elemento de la matriz a un montón mínimo y luego extrayendo cada elemento de la pila mínima a una nueva matriz. La estructura de almacenamiento dinámico mínimo garantiza que la nueva matriz contendrá los elementos originales en el orden más pequeño al más grande. Este es uno de los algoritmos de clasificación más eficientes con un rendimiento promedio y en el peor de los casos de O (nlog (n)). Instrucciones: Implementemos la ordenación de pilas con una pila mínima. Siéntase libre de adaptar su código de pila máxima aquí. Cree un objeto MinHeap con métodos de insertar, eliminar y ordenar. El método de clasificación debe devolver una matriz de todos los elementos en el montón mínimo ordenados de menor a mayor. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La estructura de datos MinHeap existe.
    testString: 'assert((function() { var test = false; if (typeof MinHeap !== "undefined") { test = new MinHeap() }; return (typeof test == "object")})(), "The MinHeap data structure exists.");'
  - text: MinHeap tiene un método llamado insertar.
    testString: 'assert((function() { var test = false; if (typeof MinHeap !== "undefined") { test = new MinHeap() } else { return false; }; return (typeof test.insert == "function")})(), "MinHeap has a method called insert.");'
  - text: MinHeap tiene un método llamado eliminar.
    testString: 'assert((function() { var test = false; if (typeof MinHeap !== "undefined") { test = new MinHeap() } else { return false; }; return (typeof test.remove == "function")})(), "MinHeap has a method called remove.");'
  - text: MinHeap tiene un método llamado ordenar.
    testString: 'assert((function() { var test = false; if (typeof MinHeap !== "undefined") { test = new MinHeap() } else { return false; }; return (typeof test.sort == "function")})(), "MinHeap has a method called sort.");'
  - text: El método de clasificación devuelve una matriz que contiene todos los elementos agregados al montón mínimo en orden ordenado.
    testString: 'assert((function() { var test = false; if (typeof MinHeap !== "undefined") { test = new MinHeap() } else { return false; }; test.insert(3); test.insert(12); test.insert(5); test.insert(10); test.insert(1); test.insert(27); test.insert(42); test.insert(57); test.insert(5); var result = test.sort(); return (isSorted(result)); })(), "The sort method returns an array containing all items added to the min heap in sorted order.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// check if array is sorted
function isSorted(a){
  for(let i = 0; i < a.length - 1; i++)
    if(a[i] > a[i + 1])
      return false;
  return true;
}
// generate a randomly filled array
var array = new Array();
(function createArray(size = 5) {
  array.push(+(Math.random() * 100).toFixed(0));
  return (size > 1) ? createArray(size - 1) : undefined;
})(25);
var MinHeap = function() {
  // change code below this line
  // change code above this line
};

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
