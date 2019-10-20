---
id: 587d8257367417b2b2512c7b
title: Add a New Element to a Binary Search Tree
challengeType: 1
videoUrl: ''
localeTitle: Agregar un nuevo elemento a un árbol de búsqueda binario
---

## Description
<section id="description"> Ahora que tenemos una idea de lo básico, vamos a escribir un método más complejo. En este desafío, crearemos un método para agregar nuevos valores a nuestro árbol de búsqueda binario. El método debe llamarse <code>add</code> y debe aceptar un valor entero para agregarlo al árbol. Tenga cuidado de mantener el invariante de un árbol de búsqueda binario: el valor en cada elemento secundario izquierdo debe ser menor o igual que el valor principal, y el valor en cada elemento secundario derecho debe ser mayor o igual que el valor principal. En este caso, vamos a hacer que nuestro árbol no pueda contener valores duplicados. Si intentamos agregar un valor que ya existe, el método debe devolver <code>null</code> . De lo contrario, si la adición es exitosa, se debe devolver <code>undefined</code> . Pista: ¡los árboles son naturalmente estructuras de datos recursivas! </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La estructura de datos <code>BinarySearchTree</code> existe.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() }; return (typeof test == "object")})(), "The <code>BinarySearchTree</code> data structure exists.");'
  - text: El árbol de búsqueda binario tiene un método llamado <code>add</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.add == "function")})(), "The binary search tree has a method called <code>add</code>.");'
  - text: El método add agrega elementos de acuerdo con las reglas del árbol de búsqueda binario.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.add !== "function") { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); const expectedResult = [ 1, 4, 7, 8, 34, 45, 73, 87 ]; const result = test.inOrder(); return (expectedResult.toString() === result.toString()); })(), "The add method adds elements according to the binary search tree rules.");'
  - text: Al añadir un elemento que ya existe devuelve <code>null</code>
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.add !== "function") { return false; }; test.add(4); return test.add(4) == null; })(), "Adding an element that already exists returns <code>null</code>");'

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
