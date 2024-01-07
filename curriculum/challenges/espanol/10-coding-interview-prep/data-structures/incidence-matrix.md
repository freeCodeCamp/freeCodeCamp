---
id: 587d8256367417b2b2512c79
title: Matriz de incidencia
challengeType: 1
forumTopicId: 301644
dashedName: incidence-matrix
---

# --description--

Otra forma de representar un gráfico es ponerlo en un <dfn> matriz de incidencia.</dfn>

Un <dfn>matriz de incidencia.</dfn> es una matriz bidimensional (2D). En términos generales, una matriz de incidencia relaciona dos clases diferentes de objetos entre sus dos dimensiones. Este tipo de matriz es similar a una matriz de adyacencia. Sin embargo, las filas y columnas significan algo más aquí.

En los gráficos, tenemos aristas y nodos. Estas serán nuestras "dos clases diferentes de objetos". Esta matriz tendrá las filas como nodos y las columnas como aristas. Esto significa que podemos tener un número desigual de filas y columnas.

Cada columna representará un borde único. Además, cada borde conecta dos nodos. Para mostrar que hay un borde entre dos nodos, se pondrá un 1 en las dos filas de una columna en particular. Debajo hay un gráfico de 3 nodos con un borde entre el nodo 1 y el nodo 3.

<blockquote>    1<br>   ---<br>1 | 1<br>2 | 0<br>3 | 1</blockquote>

He aquí un ejemplo de una matriz de incidencia con 4 bordes y 4 nodos. Recuerde que las columnas son los bordes y las filas son los propios nodos.

<blockquote>    1 2 3 4<br>   --------<br>1 | 0 1 1 1<br>2 | 1 0 0<br>3 | 1 0 0 1<br>4 | 0 0 1 0 0 0 0 0 0 0 0</blockquote>

A continuación se muestra una implementación en JavaScript del mismo objeto.

```js
var incMat = [
  [0, 1, 1, 1],
  [1, 1, 0, 0],
  [1, 0, 0, 1],
  [0, 0, 1, 0]
];
```

Para hacer una gráfica dirigida, use `-1` para que un borde deje un nodo en particular y `1` para que un borde entre en un nodo.

```js
var incMatDirected = [
  [ 0, -1,  1, -1],
  [-1,  1,  0,  0],
  [ 1,  0,  0,  1],
  [ 0,  0, -1,  0]
];
```

Los grafos tambien pueden tener <dfn>pesos</dfn> en sus aristas. Hasta el momento, tenemos aristas <dfn>no ponderadas</dfn> donde solo la presencia y falta de arista es binaria(`0` o `1`). Puedes tener diferentes pesos dependiendo de tu aplicación. Un peso diferente se representa como números mayores que 1.

# --instructions--

Crea una matriz de incidencia de un gráfico no dirigido con cinco nodos y cuatro bordes. Esta matriz debe estar en un arreglo muti-dimensional.

Estos cinco nodos tienen las siguientes relaciones. El primer borde está entre el primer y el segundo nodo. El segundo borde está entre el segundo y el tercer nodo. El tercer borde está entre el tercer y el quinto nodo. El cuarto borde está entre el cuarto y el segundo nodo. Todos los pesos de bordes son uno y el orden de ventaja importa.

# --hints--

`incMatUndirected` solo debe contener cinco nodos.

```js
assert(
  incMatUndirected.length === 5 &&
    incMatUndirected
      .map(function (x) {
        return x.length === 4;
      })
      .reduce(function (a, b) {
        return a && b;
      })
);
```

Debería haber un primer borde entre el primer y el segundo nodo.

```js
assert(incMatUndirected[0][0] === 1 && incMatUndirected[1][0] === 1);
```

Debería haber un segundo borde entre el segundo y el tercer nodo.

```js
assert(incMatUndirected[1][1] === 1 && incMatUndirected[2][1] === 1);
```

Debería haber un tercer borde entre el tercer y el quinto nodo.

```js
assert(incMatUndirected[2][2] === 1 && incMatUndirected[4][2] === 1);
```

Debería haber un cuarto borde entre el segundo y el cuarto nodo.

```js
assert(incMatUndirected[1][3] === 1 && incMatUndirected[3][3] === 1);
```

# --seed--

## --seed-contents--

```js
var incMatUndirected = [

];
```

# --solutions--

```js
var incMatUndirected = [[1, 0, 0, 0],[1, 1, 0, 1],[0, 1, 1, 0],[0, 0, 0, 1],[0, 0, 1, 0]];
```
