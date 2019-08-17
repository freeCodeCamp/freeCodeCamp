---
title: Graphs
localeTitle: Grafos
---
## Grafos

Um grafo é uma estrutura de dados que você pode usar para resolver problemas de roteamento, como "Esses dois componentes estão conectados?" e "Qual é o caminho mais curto do ponto a para b?"

Um grafo consiste em nós e arestas. Um nó (isto é, vértice) é um objeto em seu grafo. Um nó pode conter informações como o nome do nó e quais aresta ele está anexado. Uma aresta é um link que conecta dois nós. A aresta pode conter informações como o peso da aresta. Se dois nós estiverem conectados por uma aresta, eles são vizinhos (isto é, adjacentes).

Dependendo do problema, você pode usar arestas bidirecionais (não direcionadas) ou unidirecionais (direcionadas). Se você tem uma aresta não dirigida de a para b, há também um caminho de b para a. Se você tiver uma aresta direcionada de a para b, não há necessariamente uma aresta de b para a.

Você pode usar grafos para formular situações como:

*   Mapas geográficos
*   Cada cidade em seu país é um nó
*   Se duas cidades estão ligadas por uma estrada, há uma vantagem entre elas \* Estradas podem ser de uma ou duas vias (ambas as arestas direcionadas e não direcionadas) \* o peso pode ser o comprimento da estrada
*   Fluxo de água
    *   Cada comporta é um nó
    *   Cada canal é uma aresta
        *   a água fluirá somente em uma direção, então as arestas são direcionadas
        *   o peso de cada aresta pode ser a capacidade máxima de água do fluxo

Exemplo: um grafo que tem como nós as capitais dos países nórdicos e arestas (não direcionadas) que limitam a distância entre às cidades conectadas por estrada direta.
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

#### Mais Informações:

[Largura da Primeira Pesquisa (BFS)](https://github.com/freecodecamp/guides/tree/master/src/pages/algorithms/graph-algorithms/breadth-first-search/index.md)

[Primeira pesquisa de profundidade (DFS)](https://github.com/freecodecamp/guides/tree/master/src/pages/algorithms/graph-algorithms/depth-first-search/index.md)
