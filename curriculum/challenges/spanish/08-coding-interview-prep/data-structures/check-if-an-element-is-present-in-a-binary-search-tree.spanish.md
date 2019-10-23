---
id: 587d8257367417b2b2512c7c
title: Check if an Element is Present in a Binary Search Tree
challengeType: 1
videoUrl: ''
localeTitle: Compruebe si un elemento está presente en un árbol de búsqueda binario
---

## Description
<section id="description"> Ahora que tenemos una idea general de lo que es un árbol de búsqueda binario, hablemos de ello con un poco más de detalle. Los árboles de búsqueda binarios proporcionan tiempo logarítmico para las operaciones comunes de búsqueda, inserción y eliminación en el caso promedio, y el tiempo lineal en el peor de los casos. ¿Por qué es esto? Cada una de esas operaciones básicas nos obliga a encontrar un elemento en el árbol (o en el caso de la inserción para encontrar dónde debe ir) y debido a la estructura de árbol en cada nodo principal, estamos bifurcando a la izquierda o la derecha y excluyendo efectivamente la mitad del tamaño del árbol restante. Esto hace que la búsqueda sea proporcional al logaritmo del número de nodos en el árbol, lo que crea el tiempo logarítmico para estas operaciones en el caso promedio. Ok, pero ¿qué pasa con el peor de los casos? Bueno, considere construir un árbol a partir de los siguientes valores, agregándolos de izquierda a derecha: <code>10</code> , <code>12</code> , <code>17</code> , <code>25</code> . Siguiendo nuestras reglas para un árbol de búsqueda binario, agregaremos <code>12</code> a la derecha de <code>10</code> , <code>17</code> a la derecha de este, y <code>25</code> a la derecha de este. Ahora nuestro árbol se asemeja a una lista enlazada y recorrerla para encontrar <code>25</code> requeriría que recorriéramos todos los elementos de manera lineal. Por lo tanto, el tiempo lineal en el peor de los casos. El problema aquí es que el árbol está desequilibrado. Veremos un poco más sobre lo que esto significa en los siguientes desafíos. Instrucciones: En este desafío, crearemos una utilidad para nuestro árbol. Escriba un método <code>isPresent</code> que toma un valor entero como entrada y devuelve un valor booleano para la presencia o ausencia de ese valor en el árbol de búsqueda binario. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La estructura de datos <code>BinarySearchTree</code> existe.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() }; return (typeof test == "object")})(), "The <code>BinarySearchTree</code> data structure exists.");'
  - text: El árbol de búsqueda binario tiene un método llamado <code>isPresent</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.isPresent == "function")})(), "The binary search tree has a method called <code>isPresent</code>.");'
  - text: El método <code>isPresent</code> verifica correctamente la presencia o ausencia de elementos agregados al árbol.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.isPresent !== "function") { return false; }; test.add(4); test.add(7); test.add(411); test.add(452); return ( test.isPresent(452) && test.isPresent(411) && test.isPresent(7) && !test.isPresent(100) ); })(), "The <code>isPresent</code> method correctly checks for the presence or absence of elements added to the tree.");'
  - text: <code>isPresent</code> maneja casos donde el árbol está vacío.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.isPresent !== "function") { return false; }; return test.isPresent(5) == false; })(), "<code>isPresent</code> handles cases where the tree is empty.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
function BinarySearchTree() {
    this.root = null;
    // change code below this line
    // change code above this line
}

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
