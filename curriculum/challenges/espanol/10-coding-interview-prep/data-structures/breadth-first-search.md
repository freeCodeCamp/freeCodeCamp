---
id: 587d825c367417b2b2512c90
title: Búsqueda en Anchura
challengeType: 1
forumTopicId: 301622
dashedName: breadth-first-search
---

# --description--

Hasta ahora, hemos aprendido diferentes formas de crear representaciones de grafos. ¿Y ahora qué? Una pregunta natural a tener es ¿cuál es la distancia entre dos cualquiera en el grafo? Introduciremos los <dfn>algoritmos de recorrido de grafos</dfn>.

<dfn>Los Algoritmos de Recorrido</dfn> son algoritmos para atravesar o visitar los nodos en un grafo. Un tipo de algoritmo de recorrido es el algoritmo de búsqueda en anchura.

Este algoritmo empieza en un nodo y visita todos los vecinos que están a una arista de distancia. Luego visita cada uno de los vecinos hasta que todos los nodos hayan sido visitados.

Una estructura de datos importante que ayudará a implementar el algoritmo de búsqueda en anchura es la cola. Esta es un arreglo donde tu puedes agregar elementos en un extremos y eliminarlos desde el otro extremo. Esta también es conocida como una estructura de datos <dfn>FIFO</dfn> o <dfn>First-In-First-Out</dfn>.

Visualmente, esto es lo que el algoritmo hace. ![Algortimo de Búsqueda en anchura moviéndose a través del árbol](https://camo.githubusercontent.com/2f57e6239884a1a03402912f13c49555dec76d06/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f342f34362f416e696d617465645f4246532e676966)

El sombreado gris representa un nodo siendo agregado a la cola y el sombreado negro representa un nodo siendo removido de la cola. Ve como cada vez un nodo se elimina de la cola (el nodo se vuelve negro), todos los vecinos son agregados en la cola ( los nodos se vuelven gris).

Para implementar este algoritmo, necesitarás un estructura de grafo y un nodo en el que quieras comenzar.

Primero, querrá ser consciente de las distancias desde, o números de aristas de distancias, el nodo inicial. Querrás empezar todas las distancias con un número largo como el `Infinity`. Esto evita que existan problemas cuando un nodo no puede ser alcanzado desde el nodo inicial. Luego, querrás ir desde el nodo inicial a sus vecinos. Estos vecinos estan a una arista de distancia y en este punto debes agregar una unidad de distancia a las distancia que has estado guardando.

# --instructions--

Escribe una función `bfs()` que tome una matriz de adyacencia de un grafo ( un arreglo de dos-dimensiones) y una etiqueta para el nodo raíz como parámetro. La etiqueta del nodo solo debe ser el valor entero del nodo entre `0` y `n - 1`, donde `n` es el total de números de nodos en el grafo.

Tu función mostrará pares clave-valor como un objeto JavaScript con el nodo y su distancia desde la raíz. Si el nodo no puede ser alcanzado, deberá tener una distancia de `Infinity`.

# --hints--

El grafo de entrada `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]` con un nodo inicial `1` debe devolver `{0: 1, 1: 0, 2: 1, 3: 2}`

```js
assert(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [0, 0, 1, 0]
    ];
    var results = bfs(graph, 1);
    return isEquivalent(results, { 0: 1, 1: 0, 2: 1, 3: 2 });
  })()
);
```

El grafo de entrada `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]` con un nodo inicial `1` debe devolver `{0: 1, 1: 0, 2: 1, 3: Infinity}`

```js
assert(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0]
    ];
    var results = bfs(graph, 1);
    return isEquivalent(results, { 0: 1, 1: 0, 2: 1, 3: Infinity });
  })()
);
```

El grafo de entrada `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]` con un nodo inicial `0` debe devolver `{0: 0, 1: 1, 2: 2, 3: 3}`

```js
assert(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [0, 0, 1, 0]
    ];
    var results = bfs(graph, 0);
    return isEquivalent(results, { 0: 0, 1: 1, 2: 2, 3: 3 });
  })()
);
```

El grafo de entrada `[[0, 1], [1, 0]]` con un nodo inicial `0` debe devolver `{0: 0, 1: 1}`

```js
assert(
  (function () {
    var graph = [
      [0, 1],
      [1, 0]
    ];
    var results = bfs(graph, 0);
    return isEquivalent(results, { 0: 0, 1: 1 });
  })()
);
```

# --seed--

## --after-user-code--

```js
// Source: http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html
function isEquivalent(a, b) {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }
    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    // If we made it this far, objects
    // are considered equivalent
    return true;
}
```

## --seed-contents--

```js
function bfs(graph, root) {
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

# --solutions--

```js
function bfs(graph, root) {
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
  return nodesLen;
}
```
