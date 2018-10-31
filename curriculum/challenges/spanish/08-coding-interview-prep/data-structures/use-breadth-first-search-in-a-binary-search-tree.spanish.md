---
id: 587d8258367417b2b2512c7f
title: Use Breadth First Search in a Binary Search Tree
challengeType: 1
videoUrl: ''
localeTitle: Utilice la búsqueda en primer lugar en un árbol de búsqueda binario
---

## Description
<section id="description"> Aquí introduciremos otro método de recorrido de árboles: la búsqueda de amplitud en primer lugar. En contraste con los métodos de búsqueda de profundidad primero del último desafío, la búsqueda de amplitud primero explora todos los nodos en un nivel dado dentro de un árbol antes de continuar al siguiente nivel. Normalmente, las colas se utilizan como estructuras de datos auxiliares en el diseño de los algoritmos de búsqueda más avanzados. En este método, comenzamos agregando el nodo raíz a una cola. Luego comenzamos un ciclo en el que sacamos de la cola el primer elemento de la cola, lo agregamos a una nueva matriz y luego inspeccionamos ambos subárboles secundarios. Si sus hijos no son nulos, se ponen en cola. Este proceso continúa hasta que la cola está vacía. Instrucciones: Vamos a crear un primer método de búsqueda en nuestro árbol llamado <code>levelOrder</code> . Este método debe devolver una matriz que contenga los valores de todos los nodos de árbol, explorados de manera integral. Asegúrese de devolver los valores de la matriz, no los nodos en sí. Un nivel debe ser recorrido de izquierda a derecha. A continuación, escribamos un método similar llamado <code>reverseLevelOrder</code> que realiza la misma búsqueda pero en la dirección inversa (de derecha a izquierda) en cada nivel. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La estructura de datos <code>BinarySearchTree</code> existe.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() }; return (typeof test == "object")})(), "The <code>BinarySearchTree</code> data structure exists.");'
  - text: El árbol de búsqueda binario tiene un método llamado <code>levelOrder</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.levelOrder == "function")})(), "The binary search tree has a method called <code>levelOrder</code>.");'
  - text: El árbol de búsqueda binario tiene un método llamado <code>reverseLevelOrder</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.reverseLevelOrder == "function")})(), "The binary search tree has a method called <code>reverseLevelOrder</code>.");'
  - text: El método <code>levelOrder</code> devuelve una matriz de los valores de nodo de árbol explorados en orden de nivel.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.levelOrder !== "function") { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.levelOrder().join("") == "719038102546"); })(), "The <code>levelOrder</code> method returns an array of the tree node values explored in level order.");'
  - text: El método <code>reverseLevelOrder</code> devuelve una matriz de los valores de nodo de árbol explorados en el orden de nivel inverso.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.reverseLevelOrder !== "function") { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.reverseLevelOrder().join("") == "791108305264"); })(), "The <code>reverseLevelOrder</code> method returns an array of the tree node values explored in reverse level order.");'
  - text: El método <code>levelOrder</code> devuelve <code>null</code> para un árbol vacío.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.levelOrder !== "function") { return false; }; return (test.levelOrder() == null); })(), "The <code>levelOrder</code> method returns <code>null</code> for an empty tree.");'
  - text: El método <code>reverseLevelOrder</code> devuelve <code>null</code> para un árbol vacío.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.reverseLevelOrder !== "function") { return false; }; return (test.reverseLevelOrder() == null); })(), "The <code>reverseLevelOrder</code> method returns <code>null</code> for an empty tree.");'

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
