---
id: 587d825d367417b2b2512c96
title: Depth-First Search
challengeType: 1
videoUrl: ''
localeTitle: Поиск по глубине
---

## Description
<section id="description"> Подобно <dfn>широкому поиску</dfn> , здесь мы узнаем о другом алгоритме обхода графа, называемом методом поиска по <dfn>глубине</dfn> . В то время как поиск по ширине ищет инкрементные длины кромок от исходного узла, <dfn>поиск по глубине сначала</dfn> идет по пути ребер, насколько это возможно. Как только он достигнет одного конца пути, поиск вернется к последнему узлу с не посещенным краем пути и продолжит поиск. Визуально это то, что делает алгоритм, когда верхний узел является отправной точкой поиска. <img class="img-responsive" src="https://camo.githubusercontent.com/aaad9e39961daf34d967c616edeb50abf3bf1235/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f372f37662f44657074682d46697273742d5365617263682e676966"> Простым выходом этого алгоритма является список узлов, которые достижимы с данного узла. Поэтому при реализации этого алгоритма вам нужно будет отслеживать узлы, которые вы посещаете. </section>

## Instructions
<section id="instructions"> Напишите функцию <code>dfs()</code> которая принимает неориентированный <code>graph</code> матрицы смежности и <code>root</code> метки узла в качестве параметров. Метка узла будет просто числовым значением узла между <code>0</code> и <code>n - 1</code> , где <code>n</code> - общее количество узлов на графике. Ваша функция должна выводить массив всех узлов, доступных из <code>root</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Входной график <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> с начальным узлом <code>1</code> должен возвращать массив с <code>0</code> , <code>1</code> , <code>2</code> и <code>3</code> .'
    testString: 'assert.sameMembers((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]; return dfs(graph, 1);})(), [0, 1, 2, 3], "The input graph <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> with a start node of <code>1</code> should return an array with <code>0</code>, <code>1</code>, <code>2</code>, and <code>3</code>.");'
  - text: 'Входной график <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> с начальным узлом <code>1</code> должен возвращать массив с четырьмя элементами.'
    testString: 'assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]; return dfs(graph, 1);})().length === 4, "The input graph <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> with a start node of <code>1</code> should return an array with four elements.");'
  - text: 'Входной граф <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]</code> с начальным узлом <code>3</code> должен возвращать массив с <code>3</code> .'
    testString: 'assert.sameMembers((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]; return dfs(graph, 3);})(), [3], "The input graph <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]</code> with a start node of <code>3</code> should return an array with <code>3</code>.");'
  - text: 'Входной граф <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]</code> с начальным узлом <code>3</code> должен возвращать массив с одним элементом.'
    testString: 'assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]; return dfs(graph, 3);})().length === 1, "The input graph <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]</code> with a start node of <code>3</code> should return an array with one element.");'
  - text: 'Входной граф <code>[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]</code> с начальным узлом <code>3</code> должен возвращать массив с <code>2</code> и <code>3</code> .'
    testString: 'assert.sameMembers((function() { var graph = [[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]; return dfs(graph, 3);})(), [2, 3], "The input graph <code>[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]</code> with a start node of <code>3</code> should return an array with <code>2</code> and <code>3</code>.");'
  - text: 'Входной граф <code>[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]</code> с начальным узлом <code>3</code> должен возвращать массив с двумя элементами.'
    testString: 'assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]; return dfs(graph, 3);})().length === 2, "The input graph <code>[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]</code> with a start node of <code>3</code> should return an array with two elements.");'
  - text: 'Входной граф <code>[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]</code> с начальным узлом <code>0</code> должен возвращать массив с <code>0</code> и <code>1</code> .'
    testString: 'assert.sameMembers((function() { var graph = [[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]; return dfs(graph, 0);})(), [0, 1], "The input graph <code>[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]</code> with a start node of <code>0</code> should return an array with <code>0</code> and <code>1</code>.");'
  - text: 'Входной граф <code>[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]</code> с начальным узлом <code>0</code> должен возвращать массив с двумя элементами.'
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
