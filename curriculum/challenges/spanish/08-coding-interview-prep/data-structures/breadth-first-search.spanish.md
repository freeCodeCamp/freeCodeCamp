---
id: 587d825c367417b2b2512c90
title: Breadth-First Search
localeTitle: Búsqueda de amplitud
challengeType: 1
---

## Description
<section id='description'>
Hasta ahora, hemos aprendido diferentes formas de crear representaciones de gráficos. ¿Ahora que? Una pregunta natural que se debe tener es ¿cuáles son las distancias entre dos nodos en el gráfico? Introduzca los <dfn>algoritmos de recorrido del gráfico</dfn> .
<dfn>algoritmos de recorrido</dfn> son algoritmos para atravesar o visitar los nodos en un gráfico. Un tipo de algoritmo de recorrido es el primer algoritmo de búsqueda.
Este algoritmo comienza en un nodo, primero visita a todos sus vecinos que están a un borde de distancia, luego continúa visitando a cada uno de sus vecinos.
Visualmente, esto es lo que hace el algoritmo.
<img class='img-responsive' src='https://camo.githubusercontent.com/2f57e6239884a1a03402912f13c49555dec76d06/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f342f34362f416e696d617465645f4246532e676966'>
Para implementar este algoritmo, deberá ingresar una estructura de gráfico y un nodo en el que desee comenzar.
Primero, querrá estar al tanto de las distancias desde el nodo de inicio. Esto querrá comenzar todas sus distancias, inicialmente un número grande, como <code>Infinity</code> . Esto proporciona una referencia para el caso en el que no se puede acceder a un nodo desde su nodo de inicio.
A continuación, querrá ir desde el nodo de inicio a sus vecinos. Estos vecinos están a un borde de distancia y en este punto debes agregar una unidad de distancia a las distancias que estás siguiendo.
último, la cola es una estructura de datos importante que ayudará a implementar el primer algoritmo de búsqueda. Esta es una matriz donde puede agregar elementos a un extremo y eliminar elementos del otro extremo. Esto también se conoce como estructura de datos <dfn>FIFO</dfn> o <dfn>primero en entrar, primero en salir</dfn> .
</section>

## Instructions
<section id='instructions'>
Escriba una función <code>bfs()</code> que tome un gráfico de matriz de adyacencia (una matriz bidimensional) y una raíz de etiqueta de nodo como parámetros. La etiqueta del nodo solo será el valor entero del nodo entre <code>0</code> y <code>n - 1</code> , donde <code>n</code> es el número total de nodos en el gráfico.
Su función dará salida a un objeto JavaScript pares de clave-valor con el nodo y su distancia desde la raíz. Si no se pudo alcanzar el nodo, debería tener una distancia de <code>Infinity</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'El gráfico de entrada <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> con un nodo de inicio de <code>1</code> debe devolver <code>{0: 1, 1: 0, 2: 1, 3: 2}</code> '
    testString: 'assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]; var results = bfs(graph, 1); return isEquivalent(results, {0: 1, 1: 0, 2: 1, 3: 2})})(), "The input graph <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> with a start node of <code>1</code> should return <code>{0: 1, 1: 0, 2: 1, 3: 2}</code>");'
  - text: 'El gráfico de entrada <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]</code> con un nodo de inicio de <code>1</code> debería devolver <code>{0: 1, 1: 0, 2: 1, 3: Infinity}</code> '
    testString: 'assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]; var results = bfs(graph, 1); return isEquivalent(results, {0: 1, 1: 0, 2: 1, 3: Infinity})})(), "The input graph <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]</code> with a start node of <code>1</code> should return <code>{0: 1, 1: 0, 2: 1, 3: Infinity}</code>");'
  - text: 'El gráfico de entrada <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> con un nodo de inicio de <code>0</code> debe devolver <code>{0: 0, 1: 1, 2: 2, 3: 3}</code> '
    testString: 'assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]; var results = bfs(graph, 0); return isEquivalent(results, {0: 0, 1: 1, 2: 2, 3: 3})})(), "The input graph <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> with a start node of <code>0</code> should return <code>{0: 0, 1: 1, 2: 2, 3: 3}</code>");'
  - text: 'El gráfico de entrada <code>[[0, 1], [1, 0]]</code> con un nodo de inicio de <code>0</code> debe devolver <code>{0: 0, 1: 1}</code> '
    testString: 'assert((function() { var graph = [[0, 1], [1, 0]]; var results = bfs(graph, 0); return isEquivalent(results, {0: 0, 1: 1})})(), "The input graph <code>[[0, 1], [1, 0]]</code> with a start node of <code>0</code> should return <code>{0: 0, 1: 1}</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function bfs(graph, root) {
  // Distance object returned
  var nodesLen = {};

  return nodesLen;
};

var exBFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
];
console.log(bfs(exBFSGraph, 3));
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
function bfs(graph, root) {
// Distance object returned
var nodesLen = {};
// Set all distances to infinity
for (var i = 0; i < graph.length; i++) {
nodesLen[i] = Infinity;
}
nodesLen[root] = 0; // ...except root node
var queue = [root]; // Keep track of nodes to visit
var current; // Current node traversing
// Keep on going until no more nodes to traverse
while (queue.length !== 0) {
current = queue.shift();
// Get adjacent nodes from current node
var curConnected = graph[current]; // Get layer of edges from current
var neighborIdx = []; // List of nodes with edges
var idx = curConnected.indexOf(1); // Get first edge connection
while (idx !== -1) {
neighborIdx.push(idx); // Add to list of neighbors
idx = curConnected.indexOf(1, idx + 1); // Keep on searching
}
// Loop through neighbors and get lengths
for (var j = 0; j < neighborIdx.length; j++) {
// Increment distance for nodes traversed
if (nodesLen[neighborIdx[j]] === Infinity) {
nodesLen[neighborIdx[j]] = nodesLen[current] + 1;
queue.push(neighborIdx[j]); // Add new neighbors to queue
}
}
}
return nodesLen;}
```

</section>
