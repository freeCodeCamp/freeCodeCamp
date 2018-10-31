---
title: Shortest Path on a Graph
localeTitle: Caminho mais curto em um gráfico
---
## Caminho mais curto em um gráfico

Encontrar o caminho mais curto entre dois pontos em um gráfico é um problema comum em estruturas de dados, especialmente quando se lida com otimização. Um gráfico é uma série de nós conectados por arestas. Os gráficos podem ser ponderados (as bordas carregam valores) e direcional (as bordas têm direção).

Algumas aplicações deste são otimização de rotas de voo ou [6 graus de Kevin Bacon](https://en.wikipedia.org/wiki/Six_Degrees_of_Kevin_Bacon)

## Algoritmo de Dijkstra

A solução mais comum para esse problema é o algoritmo de Dijkstra, que atualiza o caminho mais curto entre o nó atual e todos os seus vizinhos. Depois de atualizar a distância de todos os vizinhos, ele se move para o nó com a menor distância e repete o processo com todos os vizinhos não-pesquisados. Esse processo continua até que todo o gráfico tenha sido visitado.

![Imagem dos níveis de código](https://upload.wikimedia.org/wikipedia/commons/5/57/Dijkstra_Animation.gif)

**Passo 0:**

Nosso gráfico precisa ser configurado para que possamos registrar os valores necessários. Em qualquer borda, temos a distância entre os dois nós que ela conecta. Em qualquer nó, temos a menor distância do nó inicial. Vamos definir o valor em cada nó para o infinito positivo e definir o valor no nó inicial como zero.

**Passo 1:**

Observe todos os nós diretamente adjacentes ao nó inicial. Os valores transportados pelas arestas que conectam o início e esses nós adjacentes são as distâncias mais curtas para cada nó correspondente. Registre essas distâncias no nó - sobrescrever o infinito - e também cruzar os nós, significando que seu caminho mais curto foi encontrado.

**Passo 2:**

Selecione um dos nós que teve seu caminho mais curto calculado, chamaremos isso de pivô. Observe os nós adjacentes a ele (chamaremos esses nós de destino) e as distâncias que os separam. Para cada nó de destino: se o valor no pivô mais o valor de borda que o conecta totalizar menos que o valor do nó de destino, atualize seu valor, pois um novo caminho mais curto foi encontrado. Se todas as rotas para esse nó de destino tiverem sido exploradas, elas poderão ser cortadas.

**Etapa 3:**

Repita o passo 2 até que todos os nós tenham sido cruzados. Agora temos um gráfico onde os valores mantidos em qualquer nó serão a menor distância até ele do nó inicial.

#### Mais Informações:

[Mais sobre o algoritmo de Dijkstra](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm)

[Outros algoritmos de caminho mais curto](https://en.wikipedia.org/wiki/Shortest_path_problem#Algorithms)