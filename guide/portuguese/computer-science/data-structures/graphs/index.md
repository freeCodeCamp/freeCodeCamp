---
title: Graphs
localeTitle: Gráficos
---
## Gráficos

Um gráfico é uma estrutura de dados que você pode usar para resolver problemas de roteamento, como "Esses dois componentes estão conectados?" e "Qual é o caminho mais curto do ponto a para b?"

Um gráfico consiste em nós e arestas. Um nó (isto é, vértice) é um objeto em seu gráfico. Um nó pode conter informações como o nome do nó e quais bordas ele está anexado. Uma aresta é um link que conecta dois nós. A borda pode conter informações como o peso da borda. Se dois nós estiverem conectados por uma aresta, eles são vizinhos (isto é, adjacentes).

Dependendo do problema, você pode usar arestas bidirecionais (não direcionadas) ou unidirecionais (direcionadas). Se você tem uma borda não dirigida de a para b, há também um caminho de b para a. Se você tiver uma borda direcionada de a para b, não há necessariamente uma borda de b para a.

Você pode usar gráficos para formular situações como:

*   Mapas geográficos
*   Cada cidade em seu país é um nó
*   Se duas cidades estão ligadas por uma estrada, há uma vantagem entre elas \* Estradas podem ser de uma ou duas vias (ambas as arestas direcionadas e não direcionadas) \* o peso pode ser o comprimento da estrada
*   Fluxo de água
    *   Cada comporta é um nó
    *   Cada canal é uma vantagem
        *   a água fluirá somente em uma direção para que as bordas sejam direcionadas
        *   o peso pode ser a capacidade máxima de água do fluxo

Exemplo: um gráfico que tem como nós as capitais dos países nórdicos e como (não direcionado) limita a distância de condução às cidades conectadas por estrada direta.
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