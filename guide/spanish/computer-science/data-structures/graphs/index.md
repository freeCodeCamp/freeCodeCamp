---
title: Graphs
localeTitle: Graficas
---
## Graficas

Un gráfico es una estructura de datos que puede utilizar para resolver problemas de enrutamiento, como "¿Están conectados estos dos componentes?" y "¿Cuál es el camino más corto desde el punto a hasta el punto b?"

Una gráfica consta de nodos y aristas. Un nodo (es decir, vértice) es un objeto en su gráfica. Un nodo puede contener información como el nombre del nodo y los bordes a los que se adjunta. Un borde es un enlace que conecta dos nodos. El borde puede contener información tal como el peso del borde. Si dos nodos están conectados por un borde, son vecinos (es decir, adyacentes).

Dependiendo del problema, puede utilizar bordes de dos vías (no direccionados) o de una vía (dirigidos). Si tiene un borde no dirigido de a a b, también hay una forma de b a a. Si tiene un borde dirigido de a a b, no hay necesariamente un borde de b a a.

Puedes usar gráficas para formular situaciones como:

*   Mapas geograficos
*   Cada ciudad de tu país es un nodo.
*   Si dos ciudades están conectadas por una carretera, hay un borde entre ellas. \* Las carreteras pueden ser de una o dos vías (bordes tanto dirigidos como no dirigidos) \* El peso puede ser la longitud del camino.
*   Flujo de agua
    *   Cada compuerta es un nodo.
    *   Cada canal es un borde.
        *   el agua solo fluirá en una dirección para que los bordes se dirijan
        *   El peso puede ser la capacidad máxima de agua del caudal.

Ejemplo: un gráfico que tiene como nodos las capitales de los países nórdicos, y como (no dirigido) limita la distancia de conducción a las ciudades conectadas por carretera directa.
```
.     +---------+ 
 .     |Reykjavik| 
 .     +---------+ 
 . 
 . 
 .         529 km   +---------+  1760 km  +--------+ 
 .    +------------+|Stockholm|+---------+|Helsinki| 
 .    |             +---------+           +--------+ 
 .    +                                        + 
 . +----+                    1991 km           | 
 . |Oslo|+-------------------------------------+ 
 . +----+ 
 .         +----------+ 
 .         |Copenhagen| 
 .         +----------+ 
```

#### Más información:

[Primera búsqueda de amplitud (BFS)](https://github.com/freecodecamp/guides/tree/master/src/pages/algorithms/graph-algorithms/breadth-first-search/index.md)

[Primera búsqueda de profundidad (DFS)](https://github.com/freecodecamp/guides/tree/master/src/pages/algorithms/graph-algorithms/depth-first-search/index.md)