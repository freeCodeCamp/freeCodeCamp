---
id: 587d8258367417b2b2512c80
title: Delete a Leaf Node in a Binary Search Tree
localeTitle: Eliminar un nodo de hoja en un árbol de búsqueda binario
challengeType: 1
---

## Description
<section id='description'>
Este es el primero de los tres desafíos en los que implementaremos una operación más difícil en los árboles de búsqueda binarios: eliminación. La eliminación es difícil porque la eliminación de nodos rompe los enlaces en el árbol. Estos enlaces deben restablecerse cuidadosamente para garantizar que se mantenga la estructura del árbol binario. Para algunas eliminaciones, esto significa que el árbol debe ser reorganizado. En general, encontrará uno de los tres casos cuando intente eliminar un nodo:
Nodo hoja: el objetivo que se eliminará tiene cero hijos.
Un hijo: el objetivo que se eliminará solo tiene un hijo.
Dos hijos: El objetivo a eliminar tiene dos nodos hijos.
Eliminar un nodo hoja es fácil, simplemente lo eliminamos. Eliminar un nodo con un hijo también es relativamente fácil, simplemente lo eliminamos y vinculamos su padre al hijo del nodo que eliminamos. Sin embargo, la eliminación de un nodo con dos hijos es más difícil, ya que esto crea dos nodos hijos que deben volver a conectarse al árbol padre. Veremos cómo lidiar con este caso en el tercer desafío. Además, debe tener en cuenta algunos casos de ventaja al manejar la eliminación. ¿Qué pasa si el árbol está vacío? ¿Qué pasa si el nodo a eliminar es el nodo raíz? ¿Y si solo hay dos elementos en el árbol? Por ahora, vamos a manejar el primer caso donde eliminamos un nodo de hoja.
Instrucciones: Crea un método en nuestro árbol binario llamado <code>remove</code> . Construiremos la lógica para nuestra operación de eliminación aquí. Primero, querrá crear una función dentro de eliminar que encuentre el nodo que intentamos eliminar en el árbol actual. Si el nodo no está presente en el árbol, <code>remove</code> debe devolver <code>null</code> . Ahora, si el nodo de destino es un nodo de hoja sin hijos, entonces la referencia principal debe establecerse en <code>null</code> . Esto elimina efectivamente el nodo del árbol. Para hacer esto, también deberá hacer un seguimiento del padre del nodo que estamos intentando eliminar. También será útil para crear una forma de realizar un seguimiento del número de hijos que tiene el nodo de destino, ya que esto determinará en qué caso se encuentra nuestra eliminación.
Manejaremos el segundo y tercer caso en los próximos desafíos. ¡Buena suerte!
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
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== "function") { return false; }; return (test.remove(100) == null); })(), "Trying to remove an element that does not exist returns <code>null</code>.");'
  - text: 'Si el nodo raíz no tiene hijos, al eliminarlo, se establece la raíz en <code>null</code> '
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== "function") { return false; }; test.add(500); test.remove(500); return (test.inorder() == null); })(), "If the root node has no children, deleting it sets the root to <code>null</code>.");'
  - text: El método de <code>remove</code> elimina los nodos de hoja del árbol.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.remove !== "function") { return false; }; test.add(5); test.add(3); test.add(7); test.add(6); test.add(10); test.add(12); test.remove(3); test.remove(12); test.remove(10); return (test.inorder().join("") == "567"); })(), "The <code>remove</code> method removes leaf nodes from the tree");'

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
    // case 1: target has no children, change code below this line
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
