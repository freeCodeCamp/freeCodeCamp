---
id: 587d8259367417b2b2512c83
title: Invert a Binary Tree
localeTitle: Invertir un árbol binario
challengeType: 1
---

## Description
<section id='description'> 
Aquí crearemos una función para invertir un árbol binario. Dado un árbol binario, queremos producir un nuevo árbol que sea equivalente a la imagen de espejo de este árbol. La ejecución de un recorrido inorder en un árbol invertido explorará los nodos en orden inverso en comparación con el recorrido inorder del árbol original. Escribe un método para hacer esto llamado <code>invert</code> en nuestro árbol binario. Llamar a este método debería invertir la estructura de árbol actual. Idealmente, nos gustaría hacer esto in situ en tiempo lineal. Es decir, solo visitamos cada nodo una vez y modificamos la estructura de árbol existente a medida que avanzamos, sin utilizar ninguna memoria adicional. ¡Buena suerte! 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La estructura de datos <code>BinarySearchTree</code> existe.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() }; return (typeof test == "object")})(), "The <code>BinarySearchTree</code> data structure exists.");'
  - text: El árbol de búsqueda binario tiene un método llamado <code>invert</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.invert == "function")})(), "The binary search tree has a method called <code>invert</code>.");'
  - text: El método de <code>invert</code> invierte correctamente la estructura de árbol.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.invert !== "function") { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); test.invert(); return test.inorder().join("") == "877345348741"; })(), "The <code>invert</code> method correctly inverts the tree structure.");'
  - text: Invertir un árbol vacío devuelve <code>null</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.invert !== "function") { return false; }; return (test.invert() == null); })(), "Inverting an empty tree returns <code>null</code>.");'

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
