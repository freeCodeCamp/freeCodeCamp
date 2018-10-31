---
id: 587d8258367417b2b2512c81
title: Delete a Node with One Child in a Binary Search Tree
challengeType: 1
videoUrl: ''
localeTitle: Eliminar un nodo con un hijo en un árbol de búsqueda binario
---

## Description
<section id="description"> Ahora que podemos eliminar los nodos de hoja, pasemos al segundo caso: eliminar un nodo con un hijo. Para este caso, digamos que tenemos un árbol con los siguientes nodos 1 - 2 - 3 donde 1 es la raíz. Para eliminar 2, simplemente necesitamos hacer la referencia correcta en 1 punto a 3. De manera más general, para eliminar un nodo con un solo hijo, hacemos que la referencia principal de ese nodo sea el siguiente nodo del árbol. Instrucciones: Hemos proporcionado algún código en nuestro método de <code>remove</code> que cumple las tareas del último desafío. Encontramos el objetivo a eliminar y su padre y definimos la cantidad de hijos que tiene el nodo objetivo. Agreguemos el siguiente caso aquí para los nodos de destino con un solo hijo. Aquí, tendremos que determinar si el único hijo es una rama izquierda o derecha en el árbol y luego establecer la referencia correcta en el padre para apuntar a este nodo. Además, consideremos el caso en el que el destino es el nodo raíz (esto significa que el nodo principal será <code>null</code> ). Siéntase libre de reemplazar todo el código de inicio con el suyo, siempre y cuando pase las pruebas. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La estructura de datos <code>BinarySearchTree</code> existe.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() }; return (typeof test == "object")})(), "The <code>BinarySearchTree</code> data structure exists.");'
  - text: El árbol de búsqueda binario tiene un método llamado <code>remove</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.remove == "function")})(), "The binary search tree has a method called <code>remove</code>.");'
  - text: Intentar eliminar un elemento que no existe devuelve <code>null</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== "function") { return false; }; return (test.remove(100) == null); })(), "Trying to remove an element that does not exist returns <code>null</code>.");'
  - text: 'Si el nodo raíz no tiene hijos, al eliminarlo, se establece la raíz en <code>null</code> .'
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== "function") { return false; }; test.add(500); test.remove(500); return (test.inorder() == null); })(), "If the root node has no children, deleting it sets the root to <code>null</code>.");'
  - text: El método de <code>remove</code> elimina los nodos de hoja del árbol.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== "function") { return false; }; test.add(5); test.add(3); test.add(7); test.add(6); test.add(10); test.add(12); test.remove(3); test.remove(12); test.remove(10); return (test.inorder().join("") == "567"); })(), "The <code>remove</code> method removes leaf nodes from the tree");'
  - text: El método <code>remove</code> elimina los nodos con un hijo.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== "function") { return false; }; test.add(-1); test.add(3); test.add(7); test.add(16); test.remove(16); test.remove(7); test.remove(3); return (test.inorder().join("") == "-1"); })(), "The <code>remove</code> method removes nodes with one child.");'
  - text: 'Al eliminar la raíz en un árbol con dos nodos, el segundo es la raíz.'
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== "function") { return false; }; test.add(15); test.add(27); test.remove(15); return (test.inorder().join("") == "27"); })(), "Removing the root in a tree with two nodes sets the second to be the root.");'

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
  this.remove = function(value) {
    if (this.root === null) {
      return null;
    }
    var target;
    var parent = null;
    // find the target value and its parent
    (function findValue(node = this.root) {
      if (value == node.value) {
        target = node;
      } else if (value < node.value && node.left !== null) {
        parent = node;
        return findValue(node.left);
      } else if (value < node.value && node.left === null) {
        return null;
      } else if (value > node.value && node.right !== null) {
        parent = node;
        return findValue(node.right);
      } else {
        return null;
      }
    }).bind(this)();
    if (target === null) {
      return null;
    }
    // count the children of the target to delete
    var children = (target.left !== null ? 1 : 0) + (target.right !== null ? 1 : 0);
    // case 1: target has no children
    if (children === 0) {
      if (target == this.root) {
        this.root = null;
      }
      else {
        if (parent.left == target) {
          parent.left = null;
        } else {
          parent.right = null;
        }
      }
    }
    // case 2: target has one child, change code below this line
  };
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
