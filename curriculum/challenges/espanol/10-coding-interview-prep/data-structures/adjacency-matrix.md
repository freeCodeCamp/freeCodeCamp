---
id: 587d8256367417b2b2512c78
title: Matriz de Adyacencia
challengeType: 1
forumTopicId: 301621
dashedName: adjacency-matrix
---

# --description--

Otra forma de representar un grafo es ponerlo en una <dfn>matriz de adyacencia</dfn>. Una <dfn>matriz de adyacencia</dfn> es un arreglo de 2 dos-dimensiones (2D) donde cada arreglo anidado tiene el mismo número de elementos que el arreglo externo. En otras palabras, es una matriz o cuadrícula de números, donde los numeros representas las aristas.

**Nota**: los números de la parte superios y a la izquierda de la matriz son solo etiquetas para los nodos. Dentro de la matriz, los unos indican que existe una arista entre los vertices (nodos) que representan la fila y la columna. Finalmente, los ceros indican que no existe una arista o relación.

<pre>
    1 2 3
  \------
1 | 0 1 1
2 | 1 0 0
3 | 1 0 0
</pre>

El grafo anterior es muy simple, grafo no dirigido donde tienes tres nodos, donde el primer nodo está conectado al segundo y tercer nodo. A continuación se muestra una implementación en JavaScript del mismo objeto.

```js
var adjMat = [
  [0, 1, 1],
  [1, 0, 0],
  [1, 0, 0]
];
```

A diferencia de una lista de adyacencia, cada "fila" de la matriz tiene que tener el mismo número de elementos como nodos en el grafo. Aquí tenemos una matriz de tres por tres, esto significa que tenemos tres nodos en nuestro grafo. Un grafo dirigido sería similar. A continuación se muestra un grafo donde el primer nodo tiene una arista apuntanto al segundo nodo, y luego el segundo nodo tiene una arista apuntando al terecer nodo.

```js
var adjMatDirected = [
  [0, 1, 0],
  [0, 0, 1],
  [0, 0, 0]
];
```

Los grafos tambien pueden tener <dfn>pesos</dfn> en sus aristas. Hasta el momento, tenemos aristas <dfn>no ponderadas</dfn> donde solo la presencia y falta de arista es binaria(`0` o `1`). Puedes tener diferentes pesos dependiendo de tu aplicación.

# --instructions--

Crear una matriz de adyacencia de un grafo no dirigido con cinco nodos. Esta matriz debe estar en un arreglo muti-dimensional. Estos cinco nodos tienen relaciones entre el primero y el cuarto nodo, el primero y el tercer nodo, el tercer y quinto nodo, y el cuarto y el quinto nodo. Todos los pesos de las aristas son uno.

# --hints--

`undirectedAdjList` debe contener solamente cinco nodos.

```js
assert(
  adjMatUndirected.length === 5 &&
    adjMatUndirected
      .map(function (x) {
        return x.length === 5;
      })
      .reduce(function (a, b) {
        return a && b;
      })
);
```

Debe hacer una arista entre el primer y cuarto nodo.

```js
assert(adjMatUndirected[0][3] === 1 && adjMatUndirected[3][0] === 1);
```

Debe haber una arista entre el primer y tercer nodo.

```js
assert(adjMatUndirected[0][2] === 1 && adjMatUndirected[2][0] === 1);
```

Debe haber una arista entre el tercer y quinto nodo.

```js
assert(adjMatUndirected[2][4] === 1 && adjMatUndirected[4][2] === 1);
```

Debe haber una arista entre el cuarto y quinto nodo.

```js
assert(adjMatUndirected[3][4] === 1 && adjMatUndirected[4][3] === 1);
```

# --seed--

## --seed-contents--

```js
var adjMatUndirected = [];
```

# --solutions--

```js
var adjMatUndirected = [
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [0, 0, 1, 1, 0]
];
```
