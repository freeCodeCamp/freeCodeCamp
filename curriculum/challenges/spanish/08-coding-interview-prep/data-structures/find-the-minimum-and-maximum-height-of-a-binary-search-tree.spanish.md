---
id: 587d8257367417b2b2512c7d
title: Find the Minimum and Maximum Height of a Binary Search Tree
localeTitle: Encuentra la altura mínima y máxima de un árbol de búsqueda binario
challengeType: 1
---

## Description
<section id='description'> 
En el último desafío describimos un escenario en el que un árbol podría desequilibrarse. Para entender el concepto de equilibrio, echemos un vistazo a otra propiedad del árbol: la altura. La altura en un árbol representa la distancia desde el nodo raíz a cualquier nodo hoja dado. Diferentes caminos en una estructura de árbol altamente ramificada pueden tener diferentes alturas, pero para un árbol dado habrá una altura mínima y máxima. Si el árbol está equilibrado, estos valores diferirán como máximo en uno. Esto significa que en un árbol equilibrado, todos los nodos de hoja existen dentro del mismo nivel, o si no están dentro del mismo nivel, están a lo sumo en un nivel. 
La propiedad del equilibrio es importante para los árboles porque es lo que determina la eficiencia de las operaciones de los árboles. Como explicamos en el último desafío, enfrentamos la complejidad del peor de los casos para árboles muy desequilibrados. Los árboles de equilibrio automático se usan comúnmente para explicar este problema en árboles con conjuntos de datos dinámicos. Los ejemplos comunes de estos incluyen árboles AVL, árboles rojo-negros y árboles-B. Todos estos árboles contienen lógica interna adicional que vuelve a equilibrar el árbol cuando las inserciones o eliminaciones crean un estado de desequilibrio. 
Nota: una propiedad similar a la altura es la profundidad, que se refiere a qué tan lejos está un nodo dado del nodo raíz. 
Instrucciones: escriba dos métodos para nuestro árbol binario: <code>findMinHeight</code> y <code>findMaxHeight</code> . Estos métodos deben devolver un valor entero para la altura mínima y máxima dentro de un árbol binario dado, respectivamente. Si el nodo está vacío, asignémosle una altura de <code>-1</code> (ese es el caso base). Finalmente, agregue un tercer método <code>isBalanced</code> que devuelva <code>true</code> o <code>false</code> dependiendo de si el árbol está equilibrado o no. Puedes usar los dos primeros métodos que acabas de escribir para determinar esto. 
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
  - text: El árbol de búsqueda binario tiene un método llamado <code>findMinHeight</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.findMinHeight == "function")})(), "The binary search tree has a method called <code>findMinHeight</code>.");'
  - text: El árbol de búsqueda binario tiene un método llamado <code>findMaxHeight</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.findMaxHeight == "function")})(), "The binary search tree has a method called <code>findMaxHeight</code>.");'
  - text: El árbol de búsqueda binario tiene un método llamado <code>isBalanced</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.isBalanced == "function")})(), "The binary search tree has a method called <code>isBalanced</code>.");'
  - text: El método <code>findMinHeight</code> devuelve la altura mínima del árbol.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMinHeight !== "function") { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return (test.findMinHeight() == 1); })(), "The <code>findMinHeight</code> method returns the minimum height of the tree.");'
  - text: El método <code>findMaxHeight</code> devuelve la altura máxima del árbol.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMaxHeight !== "function") { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return (test.findMaxHeight() == 5); })(), "The <code>findMaxHeight</code> method returns the maximum height of the tree.");'
  - text: Un árbol vacío devuelve una altura de <code>-1</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMaxHeight !== "function") { return false; }; return (test.findMaxHeight() == -1); })(), "An empty tree returns a height of <code>-1</code>.");'
  - text: El método <code>isBalanced</code> devuelve verdadero si el árbol es un árbol de búsqueda binaria equilibrada.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.isBalanced !== "function") { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return test.isBalanced(); })(), "The <code>isBalanced</code> method returns true if the tree is a balanced binary search tree.");'

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
