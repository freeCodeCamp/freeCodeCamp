---
id: 587d825d367417b2b2512c96
title: Depth-First Search
challengeType: 1
videoUrl: ''
localeTitle: Pesquisa de Profundidade-Primeiro
---

## Description
<section id="description"> Semelhante à <dfn>pesquisa em largura</dfn> , aqui aprenderemos sobre outro algoritmo de travessia de gráfico chamado <dfn>de busca em profundidade</dfn> . Enquanto a pesquisa por largura inicial pesquisa comprimentos de aresta incrementais longe do nó de origem, <dfn>a pesquisa em profundidade</dfn> primeiro desce um caminho de arestas o máximo possível. Uma vez que atinja uma extremidade de um caminho, a pesquisa retrocederá até o último nó com um caminho de borda não visitado e continuará pesquisando. Visualmente, isso é o que o algoritmo está fazendo, onde o nó superior é o ponto inicial da pesquisa. <img class="img-responsive" src="https://camo.githubusercontent.com/aaad9e39961daf34d967c616edeb50abf3bf1235/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f372f37662f44657074682d46697273742d5365617263682e676966"> Uma saída simples desse algoritmo é uma lista de nós que podem ser alcançados de um determinado nó. Portanto, ao implementar esse algoritmo, você precisará acompanhar os nós que você visita. </section>

## Instructions
<section id="instructions"> Escreva uma função <code>dfs()</code> que tenha um <code>graph</code> matriz de adjacência não <code>graph</code> e uma <code>root</code> rótulo de nó como parâmetros. O rótulo do nó será apenas o valor numérico do nó entre <code>0</code> e <code>n - 1</code> , onde <code>n</code> é o número total de nós no gráfico. Sua função deve produzir uma matriz de todos os nós acessíveis pela <code>root</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'O gráfico de entrada <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> com um nó inicial de <code>1</code> deve retornar uma matriz com <code>0</code> , <code>1</code> , <code>2</code> e <code>3</code> .'
    testString: 'assert.sameMembers((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]; return dfs(graph, 1);})(), [0, 1, 2, 3], "The input graph <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> with a start node of <code>1</code> should return an array with <code>0</code>, <code>1</code>, <code>2</code>, and <code>3</code>.");'
  - text: 'O gráfico de entrada <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> com um nó inicial de <code>1</code> deve retornar um array com quatro elementos.'
    testString: 'assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]; return dfs(graph, 1);})().length === 4, "The input graph <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> with a start node of <code>1</code> should return an array with four elements.");'
  - text: 'O gráfico de entrada <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]</code> com um nó inicial de <code>3</code> deve retornar um array com <code>3</code> .'
    testString: 'assert.sameMembers((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]; return dfs(graph, 3);})(), [3], "The input graph <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]</code> with a start node of <code>3</code> should return an array with <code>3</code>.");'
  - text: 'O gráfico de entrada <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]</code> com um nó inicial de <code>3</code> deve retornar um array com um elemento.'
    testString: 'assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]; return dfs(graph, 3);})().length === 1, "The input graph <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]</code> with a start node of <code>3</code> should return an array with one element.");'
  - text: 'O gráfico de entrada <code>[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]</code> com um nó inicial de <code>3</code> deve retornar um array com <code>2</code> e <code>3</code> .'
    testString: 'assert.sameMembers((function() { var graph = [[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]; return dfs(graph, 3);})(), [2, 3], "The input graph <code>[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]</code> with a start node of <code>3</code> should return an array with <code>2</code> and <code>3</code>.");'
  - text: 'O gráfico de entrada <code>[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]</code> com um nó inicial de <code>3</code> deve retornar um array com dois elementos.'
    testString: 'assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]; return dfs(graph, 3);})().length === 2, "The input graph <code>[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]</code> with a start node of <code>3</code> should return an array with two elements.");'
  - text: 'O gráfico de entrada <code>[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]</code> com um nó inicial de <code>0</code> deve retornar uma matriz com <code>0</code> e <code>1</code> .'
    testString: 'assert.sameMembers((function() { var graph = [[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]; return dfs(graph, 0);})(), [0, 1], "The input graph <code>[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]</code> with a start node of <code>0</code> should return an array with <code>0</code> and <code>1</code>.");'
  - text: 'O gráfico de entrada <code>[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]</code> com um nó inicial de <code>0</code> deve retornar um array com dois elementos.'
    testString: 'assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]; return dfs(graph, 0);})().length === 2, "The input graph <code>[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]</code> with a start node of <code>0</code> should return an array with two elements.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

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

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
