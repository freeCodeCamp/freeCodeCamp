---
id: 587d8257367417b2b2512c7e
title: Use Depth First Search in a Binary Search Tree
localeTitle: Utilice la búsqueda en profundidad primero en un árbol de búsqueda binario
challengeType: 1
---

## Description
<section id='description'> 
Sabemos cómo buscar un árbol de búsqueda binario para un valor específico. Pero ¿y si solo queremos explorar todo el árbol? ¿O qué sucede si no tenemos un árbol ordenado y solo necesitamos buscar un valor? Aquí introduciremos algunos métodos de recorrido de árboles que se pueden usar para explorar estructuras de datos de árboles. Lo primero es buscar primero en profundidad. En la búsqueda en profundidad, un subárbol determinado se explora lo más profundamente posible antes de que la búsqueda continúe en otro subárbol. Hay tres formas de hacerlo: 
En orden: comience la búsqueda en el nodo más a la izquierda y finalice en el nodo más a la derecha. 
Pre-orden: Explorar todas las raíces antes de las hojas. 
Orden posterior: Explorar todas las hojas antes de las raíces. 
Como puede suponer, puede elegir diferentes métodos de búsqueda según el tipo de datos que su árbol esté almacenando y lo que está buscando. Para un árbol de búsqueda binario, un recorrido inorder devuelve los nodos en orden ordenado. 
Instrucciones: Aquí crearemos estos tres métodos de búsqueda en nuestro árbol de búsqueda binario. La búsqueda en profundidad es una operación intrínsecamente recursiva que continúa explorando más subárboles mientras haya nodos secundarios presentes. Una vez que entienda este concepto básico, puede simplemente reorganizar el orden en el que explora los nodos y subárboles para producir cualquiera de las tres búsquedas anteriores. Por ejemplo, en la búsqueda posterior al pedido querríamos repetir todo el camino a un nodo hoja antes de que comencemos a devolver cualquiera de los nodos, mientras que en la búsqueda previa al pedido deseamos devolver primero los nodos y luego continuar recurriendo abajo del arbol 
Defina los métodos <code>inorder</code> , <code>preorder</code> y <code>postorder</code> en nuestro árbol. Cada uno de estos métodos debe devolver una matriz de elementos que representan el recorrido del árbol. Asegúrese de devolver los valores enteros en cada nodo de la matriz, no los nodos en sí. Finalmente, devuelve <code>null</code> si el árbol está vacío. 
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
  - text: El árbol de búsqueda binario tiene un método llamado <code>inorder</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.inorder == "function")})(), "The binary search tree has a method called <code>inorder</code>.");'
  - text: El árbol de búsqueda binario tiene un método llamado <code>preorder</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.preorder == "function")})(), "The binary search tree has a method called <code>preorder</code>.");'
  - text: El árbol de búsqueda binario tiene un método llamado <code>postorder</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.postorder == "function")})(), "The binary search tree has a method called <code>postorder</code>.");'
  - text: El método <code>inorder</code> devuelve una matriz de los valores de nodo que resultan de un recorrido inorder.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.inorder !== "function") { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.inorder().join("") == "012345678910"); })(), "The <code>inorder</code> method returns an array of the node values that result from an inorder traversal.");'
  - text: El método de <code>preorder</code> retorna una matriz de los valores de nodo que resultan de un recorrido de preorder.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.preorder !== "function") { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.preorder().join("") == "710325469810"); })(), "The <code>preorder</code> method returns an array of the node values that result from a preorder traversal.");'
  - text: El método de orden <code>postorder</code> devuelve una matriz de los valores de nodo que resultan de un recorrido de orden posterior.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.postorder !== "function") { return false; }; test.add(7); test.add(1); test.add(9); test.add(0); test.add(3); test.add(8); test.add(10); test.add(2); test.add(5); test.add(4); test.add(6); return (test.postorder().join("") == "024653181097"); })(), "The <code>postorder</code> method returns an array of the node values that result from a postorder traversal.");'
  - text: El método <code>inorder</code> devuelve <code>null</code> para un árbol vacío.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.inorder !== "function") { return false; }; return (test.inorder() == null); })(), "The <code>inorder</code> method returns <code>null</code> for an empty tree.");'
  - text: El método de <code>preorder</code> devuelve <code>null</code> para un árbol vacío.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.preorder !== "function") { return false; }; return (test.preorder() == null); })(), "The <code>preorder</code> method returns <code>null</code> for an empty tree.");'
  - text: El método <code>postorder</code> devuelve <code>null</code> para un árbol vacío.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.postorder !== "function") { return false; }; return (test.postorder() == null); })(), "The <code>postorder</code> method returns <code>null</code> for an empty tree.");'

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
