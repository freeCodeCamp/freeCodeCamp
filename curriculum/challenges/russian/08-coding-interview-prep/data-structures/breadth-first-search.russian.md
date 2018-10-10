---
id: 587d825c367417b2b2512c90
title: Breadth-First Search
challengeType: 1
videoUrl: ''
localeTitle: Поиск по ширине
---

## Description
<section id="description"> До сих пор мы изучили разные способы создания представлений графиков. Что теперь? Один естественный вопрос - какие расстояния между любыми двумя узлами графика? Введите <dfn>алгоритмы обхода графа</dfn> . <dfn>Алгоритмы</dfn> траверса - это алгоритмы для перемещения или посещения узлов в графе. Одним типом алгоритма обхода является алгоритм поиска ширины. Этот алгоритм начинается с одного узла, сначала посещает всех его соседей, которые находятся на одном крае, а затем переходит к каждому из своих соседей. Визуально это то, что делает алгоритм. <img class="img-responsive" src="https://camo.githubusercontent.com/2f57e6239884a1a03402912f13c49555dec76d06/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f342f34362f416e696d617465645f4246532e676966"> Чтобы реализовать этот алгоритм, вам нужно будет ввести структуру графика и узел, с которого вы хотите начать. Во-первых, вы хотите знать расстояния от стартового узла. Это вы хотите сначала начать все свои расстояния на некоторое количество, например <code>Infinity</code> . Это дает ссылку на случай, когда узел может быть недоступен из вашего стартового узла. Затем вы захотите перейти от стартового узла к своим соседям. Эти соседи находятся на одном крае, и в этот момент вы должны добавить одну единицу расстояния до расстояний, которые вы отслеживаете. Наконец, важной структурой данных, которая поможет реализовать алгоритм поиска по ширине, является очередь. Это массив, в котором вы можете добавлять элементы в один конец и удалять элементы с другого конца. Это также известно как структура данных <dfn>FIFO</dfn> или <dfn>First-In-First-Out</dfn> . </section>

## Instructions
<section id="instructions"> Напишите функцию <code>bfs()</code> которая принимает граф матрицы смежности (двумерный массив) и корень метки узла в качестве параметров. Метка узла будет просто целочисленным значением узла между <code>0</code> и <code>n - 1</code> , где <code>n</code> - общее количество узлов в графе. Ваша функция выведет пары ключ-значение объекта JavaScript с узлом и его удалением от корня. Если узел не может быть достигнут, он должен иметь расстояние до <code>Infinity</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Входной график <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> с начальным узлом <code>1</code> должен возвращать <code>{0: 1, 1: 0, 2: 1, 3: 2}</code>'
    testString: 'assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]; var results = bfs(graph, 1); return isEquivalent(results, {0: 1, 1: 0, 2: 1, 3: 2})})(), "The input graph <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> with a start node of <code>1</code> should return <code>{0: 1, 1: 0, 2: 1, 3: 2}</code>");'
  - text: 'Входной граф <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]</code> с начальным узлом <code>1</code> должен возвращать <code>{0: 1, 1: 0, 2: 1, 3: Infinity}</code>'
    testString: 'assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]; var results = bfs(graph, 1); return isEquivalent(results, {0: 1, 1: 0, 2: 1, 3: Infinity})})(), "The input graph <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]</code> with a start node of <code>1</code> should return <code>{0: 1, 1: 0, 2: 1, 3: Infinity}</code>");'
  - text: 'Входной граф <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> с начальным узлом <code>0</code> должен возвращать <code>{0: 0, 1: 1, 2: 2, 3: 3}</code>'
    testString: 'assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]; var results = bfs(graph, 0); return isEquivalent(results, {0: 0, 1: 1, 2: 2, 3: 3})})(), "The input graph <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> with a start node of <code>0</code> should return <code>{0: 0, 1: 1, 2: 2, 3: 3}</code>");'
  - text: 'Входной график <code>[[0, 1], [1, 0]]</code> с начальным узлом <code>0</code> должен возвращать <code>{0: 0, 1: 1}</code>'
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
