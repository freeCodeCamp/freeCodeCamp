---
id: 587d825d367417b2b2512c96
title: Depth-First Search
challengeType: 1
videoUrl: ''
localeTitle: Búsqueda en profundidad
---

## Description
<section id="description"> De forma similar a la <dfn>búsqueda de amplitud en primer lugar</dfn> , aquí aprenderemos sobre otro algoritmo de recorrido de gráficos llamado <dfn>búsqueda de profundidad en primer lugar</dfn> . Mientras que la búsqueda de amplitud busca las longitudes de borde incrementales lejos del nodo de origen, la <dfn>búsqueda de profundidad primero</dfn> primero recorre un camino de bordes tan lejos como puede. Una vez que llegue a un extremo de una ruta, la búsqueda volverá al último nodo con una ruta de borde no visitada y continuará la búsqueda. Visualmente, esto es lo que hace el algoritmo donde el nodo superior es el punto de inicio de la búsqueda. <img class="img-responsive" src="https://camo.githubusercontent.com/aaad9e39961daf34d967c616edeb50abf3bf1235/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f372f37662f44657074682d46697273742d5365617263682e676966"> Un resultado simple de este algoritmo es una lista de nodos a los que se puede acceder desde un nodo determinado. Entonces, al implementar este algoritmo, deberá realizar un seguimiento de los nodos que visita. </section>

## Instructions
<section id="instructions"> Escriba una función <code>dfs()</code> que tome un <code>graph</code> matriz de adyacencia no <code>graph</code> y una <code>root</code> etiqueta de nodo como parámetros. La etiqueta del nodo solo será el valor numérico del nodo entre <code>0</code> y <code>n - 1</code> , donde <code>n</code> es el número total de nodos en el gráfico. Su función debe generar una matriz de todos los nodos accesibles desde la <code>root</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'El gráfico de entrada <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> con un nodo de inicio de <code>1</code> debe devolver una matriz con <code>0</code> , <code>1</code> , <code>2</code> y <code>3</code> .'
    testString: 'assert.sameMembers((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]; return dfs(graph, 1);})(), [0, 1, 2, 3], "The input graph <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> with a start node of <code>1</code> should return an array with <code>0</code>, <code>1</code>, <code>2</code>, and <code>3</code>.");'
  - text: 'El gráfico de entrada <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> con un nodo de inicio de <code>1</code> Debe devolver una matriz con cuatro elementos.'
    testString: 'assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]; return dfs(graph, 1);})().length === 4, "The input graph <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> with a start node of <code>1</code> should return an array with four elements.");'
  - text: 'El gráfico de entrada <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]</code> con un nodo de inicio de <code>3</code> Debe devolver una matriz con <code>3</code> .'
    testString: 'assert.sameMembers((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]; return dfs(graph, 3);})(), [3], "The input graph <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]</code> with a start node of <code>3</code> should return an array with <code>3</code>.");'
  - text: 'El gráfico de entrada <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]</code> con un nodo de inicio de <code>3</code> Debe devolver una matriz con un elemento.'
    testString: 'assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]; return dfs(graph, 3);})().length === 1, "The input graph <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]</code> with a start node of <code>3</code> should return an array with one element.");'
  - text: 'El gráfico de entrada <code>[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]</code> con un nodo de inicio de <code>3</code> Debe devolver una matriz con <code>2</code> y <code>3</code> .'
    testString: 'assert.sameMembers((function() { var graph = [[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]; return dfs(graph, 3);})(), [2, 3], "The input graph <code>[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]</code> with a start node of <code>3</code> should return an array with <code>2</code> and <code>3</code>.");'
  - text: 'El gráfico de entrada <code>[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]</code> con un nodo de inicio de <code>3</code> Debe devolver una matriz con dos elementos.'
    testString: 'assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]; return dfs(graph, 3);})().length === 2, "The input graph <code>[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]</code> with a start node of <code>3</code> should return an array with two elements.");'
  - text: 'El gráfico de entrada <code>[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]</code> con un nodo de inicio de <code>0</code> Debe devolver una matriz con <code>0</code> y <code>1</code> .'
    testString: 'assert.sameMembers((function() { var graph = [[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]; return dfs(graph, 0);})(), [0, 1], "The input graph <code>[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]</code> with a start node of <code>0</code> should return an array with <code>0</code> and <code>1</code>.");'
  - text: 'El gráfico de entrada <code>[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]</code> con un nodo de inicio de <code>0</code> Debe devolver una matriz con dos elementos.'
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
