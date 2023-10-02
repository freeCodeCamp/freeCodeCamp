---
id: 587d8256367417b2b2512c77
title: Lista de Adyacencia
challengeType: 1
forumTopicId: 301620
dashedName: adjacency-list
---

# --description--

Los gráficos pueden ser representados en diferentes formas. Aquí describimos una forma, llamada <dfn>lista de adyacencia</dfn>. Una lista de adyacencia es esencialmente una lista numerada donde el lado izquierdo es el nodo y el lado derecho lista todos los nodos a los que está conectada. A continuación se muestra una representación de una lista de adyacencia.

<blockquote>Node1: Node2, Node3<br>Node2: Node1<br>Node3: Node1</blockquote>

El gráfico anterior descrito es uno no dirigido porque `Node1` está conectado al `Node2` y `Node3`, y esa información es consistente con las conexiones que muestran `Node2` y `Node3`. Una lista de adyacencia para un gráfico dirigido significaría que cada fila de la lista muestra una dirección. Si el gráfico anterior fuera dirigido, entonces `Node2: Node1` significaría que la dirección de la arista está apuntando desde `Node2` hacia `Node1`. Podemos representar el anterior gráfico no dirigido como una lista de adyacencia poniendolo en un objeto JavaScript.

```js
var undirectedG = {
  Node1: ["Node2", "Node3"],
  Node2: ["Node1"],
  Node3: ["Node1"]
};
```

Esta además puede ser respresentado más simple como una matriz donde los nodos solo tienen números en lugar de etiquetas de cadena.

```js
var undirectedGArr = [
  [1, 2], // Node1
  [0],    // Node2
  [0]     // Node3
];
```

# --instructions--

Crea una red social como un gráfico no dirigido con 4 nodos/personar llamados `James`, `Jill`, `Jenny`, y `Jeff`. Hay aristas/relaciones entre James y Jeff, Jill y Jenny, y Jeff y Jenny.

# --hints--

`undirectedAdjList` debe tener solo cuatro nodos.

```js
assert(Object.keys(undirectedAdjList).length === 4);
```

Debe haber una arista entre `Jeff` y `James`.

```js
assert(
  undirectedAdjList.James.indexOf('Jeff') !== -1 &&
    undirectedAdjList.Jeff.indexOf('James') !== -1
);
```

Debe haber una arista entre `Jill` y `Jenny`.

```js
assert(
  undirectedAdjList.Jill.indexOf('Jenny') !== -1 &&
    undirectedAdjList.Jenny.indexOf('Jill') !== -1
);
```

Debe haber una arista entre `Jeff` y `Jenny`.

```js
assert(
  undirectedAdjList.Jeff.indexOf('Jenny') !== -1 &&
    undirectedAdjList.Jenny.indexOf('Jeff') !== -1
);
```

# --seed--

## --seed-contents--

```js
var undirectedAdjList = {};
```

# --solutions--

```js
var undirectedAdjList = {
  James: ['Jeff'],
  Jill: ['Jenny'],
  Jenny: ['Jill', 'Jeff'],
  Jeff: ['James', 'Jenny']
};
```
