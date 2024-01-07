---
id: 587d825d367417b2b2512c96
title: Busca em profundidade
challengeType: 1
forumTopicId: 301640
dashedName: depth-first-search
---

# --description--

Do mesmo modo que na <dfn>busca em largura</dfn>, aqui aprenderemos sobre outro algoritmo de travessia de grafos chamado <dfn>busca em profundidade</dfn>.

Enquanto a busca em largura busca pela distância das arestas do nó de origem de modo incremental, a <dfn>busca em profundidade</dfn> desce todo o caminho das arestas o mais distante que ela puder.

Ao chegar ao fim de um caminho, a busca voltará para o último nó com um caminho de aresta não visitado e continuará a procurar.

A animação abaixo mostra como o algoritmo funciona. O algoritmo começa com o nó superior e visita os nós em ordem numerada.

<img class='img-responsive' src='https://camo.githubusercontent.com/aaad9e39961daf34d967c616edeb50abf3bf1235/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f372f37662f44657074682d46697273742d5365617263682e676966' />

Observe como, diferente da busca em largura, cada vez que um nó é visitado, ele não visita todos os seus vizinhos. Em vez disso, visita pela primeira vez um dos seus vizinhos e continua por esse caminho até que não haja mais nós a visitar nele.

Para implementar este algoritmo, você vai querer usar uma pilha. Uma pilha é um array onde o último elemento adicionado é o primeiro a ser removido. Isto também é conhecido como uma estrutura de dados <dfn>Last-In-First-Out</dfn> (ou seja, o último a entrar é o primeiro a sair). Uma pilha é útil em algoritmos de busca em profundidade porque, conforme adicionamos vizinhos à pilha, queremos visitar primeiro os vizinhos que foram adicionados mais recentemente e removê-los da pilha.

Uma saída simples deste algoritmo é uma lista de nós que são acessíveis a partir de um determinado nó. Portanto, você também vai querer acompanhar os nós que visita.

# --instructions--

Escreva uma função `dfs()` que recebe um `graph` de matriz de adjacência e uma etiqueta de nó `root` como parâmetros. A etiqueta do nó será apenas o valor numérico do nó entre `0` e `n - 1`, onde `n` é o número total de nós no grafo.

A função deve gerar um array de todos os nós acessíveis a partir de `root`.

# --hints--

O grafo de entrada `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]` com o nó inicial `1` deve retornar um array com `0`, `1`, `2` e `3`.

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

O grafo de entrada `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]` com o nó inicial `3` deve retornar um array com `3`, `2`, `1` e `0`.

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

O grafo de entrada `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]` com o nó inicial `1` deve retornar um array com quatro elementos.

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

O grafo de entrada `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]` com o nó inicial `3` deve retornar um array com `3`.

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

O grafo de entrada `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]` com o nó inicial `3` deve retornar um array com um elemento.

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

O grafo de entrada `[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]` com o nó inicial `3` deve retornar um array com `2` e `3`.

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

O grafo de entrada `[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]` com o nó inicial `3` deve retornar um array com dois elementos.

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

O grafo de entrada `[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]` com o nó inicial `0` deve retornar um array com `0` e `1`.

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

O grafo de entrada `[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]` com o nó inicial `0` deve retornar um array com dois elementos.

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
