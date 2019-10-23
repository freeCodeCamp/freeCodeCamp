---
id: 587d825c367417b2b2512c90
title: Breadth-First Search
challengeType: 1
videoUrl: ''
localeTitle: Primeira pesquisa
---

## Description
<section id="description"> Até agora, aprendemos diferentes maneiras de criar representações de gráficos. E agora? Uma questão natural a ter é quais são as distâncias entre dois nós no gráfico? Digite os <dfn>algoritmos de percurso de gráfico</dfn> . <dfn>Algoritmos de passagem</dfn> são algoritmos para atravessar ou visitar nós em um gráfico. Um tipo de algoritmo de travessia é o algoritmo de pesquisa em amplitude. Esse algoritmo começa em um nó, primeiro visita todos os seus vizinhos que estão a uma distância de distância e depois visita cada um dos vizinhos. Visualmente, isso é o que o algoritmo está fazendo. <img class="img-responsive" src="https://camo.githubusercontent.com/2f57e6239884a1a03402912f13c49555dec76d06/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f342f34362f416e696d617465645f4246532e676966"> Para implementar esse algoritmo, você precisará inserir uma estrutura de gráfico e um nó no qual deseja iniciar. Primeiro, você deve estar ciente das distâncias do nó inicial. Isso você vai querer começar todas as suas distâncias inicialmente um grande número, como o <code>Infinity</code> . Isso fornece uma referência para o caso em que um nó pode não estar acessível a partir do seu nó inicial. Em seguida, você vai querer ir do nó inicial para seus vizinhos. Estes vizinhos estão a uma distância de distância e neste ponto você deve adicionar uma unidade de distância às distâncias que você está acompanhando. Por último, uma estrutura de dados importante que ajudará a implementar o algoritmo de pesquisa de largura única é a fila. Esta é uma matriz onde você pode adicionar elementos a uma extremidade e remover elementos da outra extremidade. Isso também é conhecido como uma estrutura de dados <dfn>FIFO</dfn> ou <dfn>First-In-First-Out</dfn> . </section>

## Instructions
<section id="instructions"> Escreva uma função <code>bfs()</code> que usa um gráfico de matriz de adjacência (uma matriz bidimensional) e uma raiz de rótulo de nó como parâmetros. O rótulo do nó será apenas o valor inteiro do nó entre <code>0</code> e <code>n - 1</code> , onde <code>n</code> é o número total de nós no gráfico. Sua função produzirá um par de valores-chave do objeto JavaScript com o nó e sua distância da raiz. Se o nó não puder ser alcançado, ele deverá ter uma distância do <code>Infinity</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'O gráfico de entrada <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> com um nó inicial de <code>1</code> deve retornar <code>{0: 1, 1: 0, 2: 1, 3: 2}</code>'
    testString: 'assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]; var results = bfs(graph, 1); return isEquivalent(results, {0: 1, 1: 0, 2: 1, 3: 2})})(), "The input graph <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> with a start node of <code>1</code> should return <code>{0: 1, 1: 0, 2: 1, 3: 2}</code>");'
  - text: 'O gráfico de entrada <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]</code> com um nó inicial de <code>1</code> deve retornar <code>{0: 1, 1: 0, 2: 1, 3: Infinity}</code>'
    testString: 'assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]; var results = bfs(graph, 1); return isEquivalent(results, {0: 1, 1: 0, 2: 1, 3: Infinity})})(), "The input graph <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]</code> with a start node of <code>1</code> should return <code>{0: 1, 1: 0, 2: 1, 3: Infinity}</code>");'
  - text: 'O gráfico de entrada <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> com um nó inicial de <code>0</code> deve retornar <code>{0: 0, 1: 1, 2: 2, 3: 3}</code>'
    testString: 'assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]; var results = bfs(graph, 0); return isEquivalent(results, {0: 0, 1: 1, 2: 2, 3: 3})})(), "The input graph <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> with a start node of <code>0</code> should return <code>{0: 0, 1: 1, 2: 2, 3: 3}</code>");'
  - text: 'O gráfico de entrada <code>[[0, 1], [1, 0]]</code> com um nó inicial de <code>0</code> deve retornar <code>{0: 0, 1: 1}</code>'
    testString: 'assert((function() { var graph = [[0, 1], [1, 0]]; var results = bfs(graph, 0); return isEquivalent(results, {0: 0, 1: 1})})(), "The input graph <code>[[0, 1], [1, 0]]</code> with a start node of <code>0</code> should return <code>{0: 0, 1: 1}</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function bfs(graph, root) {
  // Distance object returned
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

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
