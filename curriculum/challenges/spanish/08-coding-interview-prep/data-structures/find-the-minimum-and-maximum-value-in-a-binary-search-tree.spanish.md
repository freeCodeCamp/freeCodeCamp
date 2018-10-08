---
id: 587d8256367417b2b2512c7a
title: Find the Minimum and Maximum Value in a Binary Search Tree
localeTitle: Encuentre el valor mínimo y máximo en un árbol de búsqueda binario
challengeType: 1
---

## Description
<section id='description'> 
Esta serie de desafíos introducirá la estructura de datos del árbol. Los árboles son una estructura de datos importante y versátil en informática. Por supuesto, su nombre proviene del hecho de que cuando se visualizan se parecen mucho a los árboles con los que estamos familiarizados en el mundo natural. Una estructura de datos de árbol comienza con un nodo, normalmente denominado raíz, y desde aquí se bifurca a nodos adicionales, cada uno de los cuales puede tener más nodos secundarios, y así sucesivamente. La estructura de datos generalmente se visualiza con el nodo raíz en la parte superior; Se puede pensar en él como un árbol natural al revés. 
Primero, describamos algunos términos comunes que encontraremos con los árboles. El nodo raíz es la parte superior del árbol. Los puntos de datos en el árbol se llaman nodos. Los nodos con ramas que conducen a otros nodos se conocen como el padre del nodo al que la rama lleva (el hijo). Otros términos familiares más complicados se aplican como podría esperarse. Un subárbol se refiere a todos los descendientes de un nodo particular, las ramas se pueden denominar bordes y los nodos de hoja son nodos al final del árbol que no tienen hijos. Finalmente, tenga en cuenta que los árboles son inherentemente estructuras de datos recursivas. Es decir, cualquier hijo de un nodo es padre de su propio subárbol, y así sucesivamente. Es importante entender la naturaleza recursiva de los árboles cuando se diseñan algoritmos para operaciones de árboles comunes. 
Para comenzar, discutiremos un tipo particular de árbol, el árbol binario. De hecho, discutiremos un árbol binario particular, un árbol de búsqueda binario. Vamos a describir lo que esto significa. Si bien la estructura de datos del árbol puede tener cualquier número de ramas en un solo nodo, un árbol binario solo puede tener dos ramas para cada nodo. Además, un árbol de búsqueda binario se ordena con respecto a los subárboles secundarios, de modo que el valor de cada nodo en el subárbol izquierdo es menor o igual que el valor del nodo principal, y el valor de cada nodo en el subárbol derecho es mayor o igual que el valor del nodo padre. Es muy útil visualizar esta relación para entenderla mejor: 
<div style='width: 100%; display: flex; justify-content: center; align-items: center;'><img style='width: 100%; max-width: 350px;' src='https://user-images.githubusercontent.com/18563015/32136009-1e665d98-bbd6-11e7-9133-63184f9f9182.png'></div> 
Ahora esta relación ordenada es muy fácil de ver. Tenga en cuenta que cada valor a la izquierda de 8, el nodo raíz, es menor que 8, y cada valor a la derecha es mayor que 8. También tenga en cuenta que esta relación se aplica también a cada uno de los subárboles. Por ejemplo, el primer hijo izquierdo es un subárbol. 3 es el nodo principal, y tiene exactamente dos nodos secundarios: según las reglas que gobiernan los árboles de búsqueda binarios, sabemos sin mirar que el elemento secundario izquierdo de este nodo (y cualquiera de sus elementos secundarios) será menor que 3, y el derecho child (y cualquiera de sus hijos) será mayor que 3 (pero también menor que el valor raíz de la estructura), y así sucesivamente. 
Los árboles de búsqueda binarios son estructuras de datos muy comunes y útiles porque proporcionan tiempo logarítmico en el caso promedio para varias operaciones comunes, como búsqueda, inserción y eliminación. 
Instrucciones: Empezaremos simple. Aquí hemos definido el esqueleto de una estructura de árbol de búsqueda binaria además de una función para crear nodos para nuestro árbol. Observe que cada nodo puede tener un valor izquierdo y derecho. A estos se les asignarán subárboles secundarios si existen. En nuestro árbol de búsqueda binario, defina dos métodos, <code>findMin</code> y <code>findMax</code> . Estos métodos deben devolver el valor mínimo y máximo retenido en el árbol de búsqueda binario (no se preocupe por agregar valores al árbol por ahora, hemos agregado algunos en el fondo). Si te quedas atascado, reflexiona sobre el invariante que debe ser cierto para los árboles de búsqueda binarios: cada subárbol izquierdo es menor o igual que su principal y cada subárbol derecho es mayor o igual que su principal. Digamos también que nuestro árbol solo puede almacenar valores enteros. Si el árbol está vacío, cualquiera de los métodos debe devolver <code>null</code> . 
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
  - text: El árbol de búsqueda binario tiene un método llamado <code>findMin</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.findMin == "function")})(), "The binary search tree has a method called <code>findMin</code>.");'
  - text: El árbol de búsqueda binario tiene un método llamado <code>findMax</code> .
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; return (typeof test.findMax == "function")})(), "The binary search tree has a method called <code>findMax</code>.");'
  - text: El método <code>findMin</code> devuelve el valor mínimo en el árbol de búsqueda binario.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMin !== "function") { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return test.findMin() == 1; })(), "The <code>findMin</code> method returns the minimum value in the binary search tree.");'
  - text: El método <code>findMax</code> devuelve el valor máximo en el árbol de búsqueda binario.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMax !== "function") { return false; }; test.add(4); test.add(1); test.add(7); test.add(87); test.add(34); test.add(45); test.add(73); test.add(8); return test.findMax() == 87; })(), "The <code>findMax</code> method returns the maximum value in the binary search tree.");'
  - text: Los métodos <code>findMin</code> y <code>findMax</code> devuelven un <code>null</code> para un árbol vacío.
    testString: 'assert((function() { var test = false; if (typeof BinarySearchTree !== "undefined") { test = new BinarySearchTree() } else { return false; }; if (typeof test.findMin !== "function") { return false; }; if (typeof test.findMax !== "function") { return false; }; return (test.findMin() == null && test.findMax() == null) })(), "The <code>findMin</code> and <code>findMax</code> methods return <code>null</code> for an empty tree.");'

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
