---
id: 587d825c367417b2b2512c90
title: Busca em largura
challengeType: 1
forumTopicId: 301622
dashedName: breadth-first-search
---

# --description--

Até agora, aprendemos diferentes maneiras de criar representações de grafos. E agora? Uma pergunta que é natural fazer é: qual é a distância entre dois nós de um grafo? Aqui entram os <dfn>algoritmos de travessia de grafos</dfn>.

<dfn>Algoritmos de travessia</dfn> são algoritmos que percorrem ou visitem nós em um gráfico. Um tipo de algoritmo de travessia é o algoritmo de busca em largura.

Este algoritmo começa em um nó e visita todos os seus vizinhos que estão a uma aresta de distância. Em seguida, ele visita cada um dos vizinhos desses nós e assim por diante, até que todos os nós tenham sido visitados.

Uma estrutura de dados importante que ajudará a implementar o algoritmo de busca em largura é a fila. Este é um array onde você pode adicionar elementos a uma das extremidades e remover elementos da outra extremidade. Isto também é conhecido como uma estrutura de dados <dfn>FIFO</dfn> ou <dfn>First-In-First-Out</dfn> (ou seja, o primeiro a entrar é o primeiro a sair).

Visualmente, é isso que o algoritmo está fazendo. ![Algoritmo de busca por largura percorrendo uma árvore](https://camo.githubusercontent.com/2f57e6239884a1a03402912f13c49555dec76d06/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f342f34362f416e696d617465645f4246532e676966)

A sombra cinza representa um nó que está sendo adicionado à fila e a sombra preta representa um nó que está sendo removido da fila. Veja como a cada vez que um nó é removido da fila (quando se torna preto), todos os seus vizinhos são adicionados à fila (se tornam cinza).

Para implementar este algoritmo, você precisará inserir uma estrutura de grafo e o nó em que deseja começar.

Primeiro, você vai querer saber as distâncias do nó inicial, ou o número de arestas de afastamento. Você vai querer começar todas as distâncias com algum número grande, como o `Infinity`. Isto evita problemas de contagem quando um nó não estiver acessível a partir do nó inicial. Em seguida, você vai querer percorrer do ponto inicial até os vizinhos dele. Estes vizinhos estão a uma aresta de distância e, neste ponto, você deve adicionar uma unidade de distância às distâncias que você está acompanhando.

# --instructions--

Escreva uma função `bfs()` que recebe um grafo de matriz de adjacência (um array bidimensional) e um nó com a etiqueta de raiz (root) como parâmetros. A etiqueta do nó será apenas o valor inteiro do nó entre `0` e `n - 1`, onde `n` é o número total de nós no grafo.

A função retornará um par chave-valor em JavaScript com o nó e a sua distância do nó raiz. Se o nó não puder ser alcançado, a distância deve ser `Infinity`.

# --hints--

O grafo de entrada `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]` com o nó inicial `1` deve retornar `{0: 1, 1: 0, 2: 1, 3: 2}`

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

O grafo de entrada `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]` com o nó inicial `1` deve retornar `{0: 1, 1: 0, 2: 1, 3: Infinity}`

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

O grafo de entrada `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]` com o nó inicial `0` deve retornar `{0: 0, 1: 1, 2: 2, 3: 3}`

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

O gráfico de entrada `[[0, 1], [1, 0]]` com um nó inicial de `0` deve retornar `{0: 0, 1: 1}`

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
