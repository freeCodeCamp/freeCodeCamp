---
id: 587d8258367417b2b2512c82
title: Delete a Node with Two Children in a Binary Search Tree
localeTitle: Eliminar un nodo con dos hijos en un árbol de búsqueda binario
challengeType: 1
---

## Description
<section id='description'> 
Eliminar los nodos que tienen dos hijos es el caso más difícil de implementar. La eliminación de un nodo como este produce dos subárboles que ya no están conectados a la estructura de árbol original. ¿Cómo podemos reconectarlos? Un método es encontrar el valor más pequeño en el subárbol derecho del nodo de destino y reemplazar el nodo de destino con este valor. Seleccionar el reemplazo de esta manera asegura que sea mayor que cada nodo en el subárbol izquierdo, se convierte en el nuevo padre, pero también en menos que cada nodo en el subárbol derecho se convierte en el nuevo padre. 
Una vez que se realiza este reemplazo, el nodo de reemplazo debe eliminarse del subárbol derecho. Incluso esta operación es complicada porque el reemplazo puede ser una hoja o puede ser el padre de un subárbol derecho. Si es una hoja debemos eliminar la referencia de su padre. De lo contrario, debe ser el hijo derecho del objetivo. En este caso, debemos reemplazar el valor objetivo con el valor de reemplazo y hacer que la referencia objetivo sea el hijo derecho del reemplazo. 
Instrucciones: Terminemos nuestro método de <code>remove</code> manejando el tercer caso. Hemos proporcionado un código nuevo para los dos primeros casos. Agregue un poco de código ahora para manejar los nodos de destino con dos hijos. ¿Algún caso de borde a tener en cuenta? ¿Qué pasa si el árbol tiene sólo tres nodos? Una vez que haya terminado, esto completará nuestra operación de eliminación de árboles de búsqueda binarios. Buen trabajo, este es un problema bastante difícil! 
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
  - text: El árbol de búsqueda binario tiene un método llamado <code>remove</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.remove == "function")})(), "The binary search tree has a method called <code>remove</code>.");'
  - text: Intentar eliminar un elemento que no existe devuelve <code>null</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.remove == "function") ? (test.remove(100) == null) : false})(), "Trying to remove an element that does not exist returns <code>null</code>.");'
  - text: &#39;Si el nodo raíz no tiene hijos, al eliminarlo, se establece la raíz en <code>null</code> &#39;.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; test.add(500); test.remove(500); return (typeof test.remove == "function") ? (test.inorder() == null) : false})(), "If the root node has no children, deleting it sets the root to <code>null</code>.");'
  - text: El método de <code>remove</code> elimina los nodos de hoja del árbol.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; test.add(5); test.add(3); test.add(7); test.add(6); test.add(10); test.add(12); test.remove(3); test.remove(12); test.remove(10); return (typeof test.remove == "function") ? (test.inorder().join("") == "567") : false})(), "The <code>remove</code> method removes leaf nodes from the tree");'
  - text: El método <code>remove</code> elimina los nodos con un hijo.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== "function") { return false; }; test.add(-1); test.add(3); test.add(7); test.add(16); test.remove(16); test.remove(7); test.remove(3); return (test.inorder().join("") == "-1"); })(), "The <code>remove</code> method removes nodes with one child.");'
  - text: Al eliminar la raíz en un árbol con dos nodos, el segundo es la raíz.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== "function") { return false; }; test.add(15); test.add(27); test.remove(15); return (test.inorder().join("") == "27"); })(), "Removing the root in a tree with two nodes sets the second to be the root.");'
  - text: El método de <code>remove</code> elimina los nodos con dos hijos mientras mantiene la estructura del árbol de búsqueda binario.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== "function") { return false; }; test.add(1); test.add(4); test.add(3); test.add(7); test.add(9); test.add(11); test.add(14); test.add(15); test.add(19); test.add(50); test.remove(9); if (!test.isBinarySearchTree()) { return false; }; test.remove(11); if (!test.isBinarySearchTree()) { return false; }; test.remove(14); if (!test.isBinarySearchTree()) { return false; }; test.remove(19); if (!test.isBinarySearchTree()) { return false; }; test.remove(3); if (!test.isBinarySearchTree()) { return false; }; test.remove(50); if (!test.isBinarySearchTree()) { return false; }; test.remove(15); if (!test.isBinarySearchTree()) { return false; }; return (test.inorder().join("") == "147"); })(), "The <code>remove</code> method removes nodes with two children while maintaining the binary search tree structure.");'
  - text: La raíz se puede eliminar en un árbol de tres nodos.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== "function") { return false; }; test.add(100); test.add(50); test.add(300); test.remove(100); return (test.inorder().join("") == 50300); })(), "The root can be removed on a tree of three nodes.");'

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
    // case 2: target has one child
    else if (children == 1) {
      var newChild = (target.left !== null) ? target.left : target.right;
      if (parent === null) {
        target.value = newChild.value;
        target.left = null;
        target.right = null;
      } else if (newChild.value < parent.value) {
        parent.left = newChild;
      } else {
        parent.right = newChild;
      }
      target = null;
    }
    // case 3: target has two children, change code below this line
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
