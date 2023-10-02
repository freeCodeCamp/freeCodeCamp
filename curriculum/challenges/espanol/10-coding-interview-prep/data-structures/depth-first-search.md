---
id: 587d825d367417b2b2512c96
title: Búsqueda en Profundidad
challengeType: 1
forumTopicId: 301640
dashedName: depth-first-search
---

# --description--

Similar a <dfn>breadth-first-search</dfn>, aquí aprendermos sobre otro algoritmo de recorrido de grafos llamado <dfn>depth-first-search</dfn>.

Donde la búsqueda en profundidad busca de manera incremental arista alejándose del nodo fuente, <dfn>depth-first-search</dfn> primero baja sobre un camino se aristas tan lejos como pueda.

Una vez que alcance el extremo de una ruta, la búsqueda retrocederá al último nodo con una arista no visitado y continuará la búsqueda.

La animación siguiente muestra como funciona el algoritmo. El algoritmo inicia con el nodo de arriba y visita los nodos en orden numerado.

<img class='img-responsive' src='https://camo.githubusercontent.com/aaad9e39961daf34d967c616edeb50abf3bf1235/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f372f37662f44657074682d46697273742d5365617263682e676966' />

Observa como, a diferencia de la búsqueda en anchura, cada vez que un nodo es visitado, no visita a todos sus vecinos. En cambio, primero visita uno de sus vecinos y continúa por ese camino hasta que no haya más nodos para ser visitados en ese camino.

Para implementar este algoritmo, querrás usar una pila. Una pila es un arreglo donde el último elemento añadido es el primero en ser eliminado. Esto también es conocido como una estructura de datos <dfn>Last-In-First-Out</dfn>. Una pila es útil en el algoritmo de búsqueda en profundidad porque, como agregamos vecinos a la pila, queremos visitar los vecinos añadido más recientes y eliminarlo de la pila.

Un salida simple de este algoritmo es una lista de nodos los cuales son alcanzables desde un nodo determinado. Por lo tanto, también querrá llevar un seguimiento de los nodos que visita.

# --instructions--

Escribe una función `dfs()` que tome una matriz, de adyacencia de un `graph` no dirigido y una etiqueta de nodo `root` como parámetros. La etiqueta de nodo solo debe ser el valor numérico del nodo entre `0` y `n - 1`, donde `n` es el número total de nodos en el grafo.

Tu función debe mostrar un arreglo de todos los nodos alcanzables desde `root`.

# --hints--

La entrada del grafo `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]` con un nodo inicial de `1` debe devolver un arreglo con `0`, `1`,`2`, y `3`.

```js
assert.sameMembers(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [0, 0, 1, 0]
    ];
    return dfs(graph, 1);
  })(),
  [0, 1, 2, 3]
);
```

La entrada del grafo `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]` con un nodo inicial `3` debe devolver un arreglo con `3`,`2`,`1`, y `0`.

```js
assert.sameMembers(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [0, 0, 1, 0]
    ];
    return dfs(graph, 3);
  })(),
  [3, 2, 1, 0]
);
```

El grafo de entrada `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]` con un nodo de inicio `1` debe devolver un arreglo con cuatro elementos.

```js
assert(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [0, 0, 1, 0]
    ];
    return dfs(graph, 1);
  })().length === 4
);
```

El grafo de entrada `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]` con un nodo de inicio `3` debe devolver un arreglo con `3`.

```js
assert.sameMembers(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0]
    ];
    return dfs(graph, 3);
  })(),
  [3]
);
```

El grafo de entrada `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]` con un nodo de inicio `3` debe devolver un arreglo con un elemento.

```js
assert(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0]
    ];
    return dfs(graph, 3);
  })().length === 1
);
```

El grafo de entrada `[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]` con un nodo de inicio `3` debe devolver un arreglo con `2` y `3`.

```js
assert.sameMembers(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 1, 0]
    ];
    return dfs(graph, 3);
  })(),
  [2, 3]
);
```

El grafo de entrada `[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]` con un nodo de inicio `3` debe devolver un arreglo con dos elementos.

```js
assert(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 1, 0]
    ];
    return dfs(graph, 3);
  })().length === 2
);
```

El grafo de entrada `[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]` con un nodo de inicio `0` debe devolver un arreglo con `0` y `1`.

```js
assert.sameMembers(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 1, 0]
    ];
    return dfs(graph, 0);
  })(),
  [0, 1]
);
```

El grafo de entrada `[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]` con un nodo de inicio `0` debe devolver un arreglo con dos elementos.

```js
assert(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 0, 0],
      [0, 0, 0, 1],
      [0, 0, 1, 0]
    ];
    return dfs(graph, 0);
  })().length === 2
);
```

# --seed--

## --seed-contents--

```js
function dfs(graph, root) {

}

var exDFSGraph = [
  [0, 1, 0, 0],
  [1, 0, 1, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0]
];
console.log(dfs(exDFSGraph, 3));
```

# --solutions--

```js
function dfs(graph, root) {
    var stack = [];
    var tempV;
    var visited = [];
    var tempVNeighbors = [];
    stack.push(root);
    while (stack.length > 0) {
        tempV = stack.pop();
        if (visited.indexOf(tempV) == -1) {
            visited.push(tempV);
            tempVNeighbors = graph[tempV];
            for (var i = 0; i < tempVNeighbors.length; i++) {
                if (tempVNeighbors[i] == 1) {
                    stack.push(i);
                }
            }
        }
    }
    return visited;
}
```
