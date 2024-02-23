---
id: 587d8256367417b2b2512c77
title: Lista de adjacência
challengeType: 1
forumTopicId: 301620
dashedName: adjacency-list
---

# --description--

Grafos podem ser representados de maneiras diferentes. Aqui, descrevemos uma das maneiras, chamada de <dfn>lista de adjacência</dfn>. Uma lista de adjacência é essencialmente uma lista de pontos onde o lado esquerdo é o nó e o lado direito lista todos os outros nós aos quais ele está conectado. Abaixo vemos uma representação de uma lista de adjacência.

<blockquote>Node1: Node2, Node3<br>Node2: Node1<br>Node3: Node1</blockquote>

Acima vemos um grafo não direcionado porque `Node1` está conectado a `Node2` e `Node3`. Essa informação é consistente com as conexões mostradas em `Node2` e `Node3`. Uma lista de adjacência para um grafo direcionado significaria que cada linha da lista mostra para qual sentido ela vai. Se o comando acima fosse direcionado, `Node2: Node1` significaria que a aresta direcionada está apontando de `Node2` para `Node1`. Podemos representar o grafo não direcionado acima como uma lista de adjacência colocando-a dentro de um objeto JavaScript.

```js
var undirectedG = {
  Node1: ["Node2", "Node3"],
  Node2: ["Node1"],
  Node3: ["Node1"]
};
```

Isso também pode ser representado de maneira mais simples como um array onde os nós só têm números em vez de etiquetas de string.

```js
var undirectedGArr = [
  [1, 2], // Node1
  [0],    // Node2
  [0]     // Node3
];
```

# --instructions--

Crie uma rede social como um grafo não direcionado com 4 nós/pessoas, chamadas `James`, `Jill`, `Jenny` e `Jeff`. Existem arestas/relações entre James e Jeff, Jill e Jenny, e Jeff e Jenny.

# --hints--

`undirectedAdjList` deve conter apenas quatro nós.

```js
assert(Object.keys(undirectedAdjList).length === 4);
```

Deve haver uma aresta entre `Jeff` e `James`.

```js
assert(
  undirectedAdjList.James.indexOf('Jeff') !== -1 &&
    undirectedAdjList.Jeff.indexOf('James') !== -1
);
```

Deve haver uma aresta entre `Jill` e `Jenny`.

```js
assert(
  undirectedAdjList.Jill.indexOf('Jenny') !== -1 &&
    undirectedAdjList.Jenny.indexOf('Jill') !== -1
);
```

Deve haver uma aresta entre `Jeff` e `Jenny`.

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
