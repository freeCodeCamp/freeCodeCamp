---
id: 587d8256367417b2b2512c78
title: Matriz de adjacência
challengeType: 1
forumTopicId: 301621
dashedName: adjacency-matrix
---

# --description--

Outra forma de representar um grafo é colocá-lo em uma <dfn>matriz de adjacência</dfn>. Um <dfn>matriz de adjacência</dfn> é um array bidimensional (2D) onde cada array aninhado tem o mesmo número de elementos que o array externo. Em outras palavras, é uma matriz ou grade de números, em que os números representam as arestas.

**Observação**: os números na parte superior e à esquerda da matriz são apenas etiquetas para os nós. Dentro da matriz, os 1s significam que existe uma aresta entre os vértices (nós) representando a linha e a coluna. Por fim, os zeros significam que não há aresta nem relação.

<pre>
    1 2 3
  \------
1 | 0 1 1
2 | 1 0 0
3 | 1 0 0
</pre>

Acima vemos um grafo muito simples e não direcionado onde você tem três nós, onde o primeiro nó está conectado ao segundo e ao terceiro nó. Abaixo, vemos uma implementação em JavaScript da mesma coisa.

```js
var adjMat = [
  [0, 1, 1],
  [1, 0, 0],
  [1, 0, 0]
];
```

Diferente do que ocorre em uma lista de adjacência, cada "linha" da matriz deve ter o mesmo número de elementos que os nós do grafo. Aqui temos uma matriz três por três, o que significa que temos três nós no nosso gráfico. Um grafo direcionado teria a mesma aparência. Abaixo, vemos um grafo onde o primeiro nó tem uma aresta apontando para o segundo nó e o segundo nó tem uma aresta apontando para o terceiro nó.

```js
var adjMatDirected = [
  [0, 1, 0],
  [0, 0, 1],
  [0, 0, 0]
];
```

Grafos também podem ter <dfn>pesos</dfn> nas arestas. Até agora, tivemos arestas <dfn>sem peso</dfn>, onde apenas a presença e a falta de aresta é binária (`0` ou `1`). Você pode ter pesos diferentes, dependendo da aplicação.

# --instructions--

Crie uma matriz de adjacência de um grafo não direcionado com cinco nós. Esta matriz deve estar em um array multidimensional. Estes cinco nós têm relações entre o primeiro e o quarto nó, entre o primeiro e o terceiro nó, entre o terceiro e o quinto nó, e entre o quarto e o quinto nó. O peso de todas as arestas é um.

# --hints--

`undirectedAdjList` deve conter apenas cinco nós.

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

Deve haver uma aresta entre o primeiro e o quarto nó.

```js
assert(adjMatUndirected[0][3] === 1 && adjMatUndirected[3][0] === 1);
```

Deve haver uma aresta entre o primeiro e o terceiro nó.

```js
assert(adjMatUndirected[0][2] === 1 && adjMatUndirected[2][0] === 1);
```

Deve haver uma aresta entre o terceiro e o quinto nó.

```js
assert(adjMatUndirected[2][4] === 1 && adjMatUndirected[4][2] === 1);
```

Deve haver uma aresta entre o quarto e o quinto nó.

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
