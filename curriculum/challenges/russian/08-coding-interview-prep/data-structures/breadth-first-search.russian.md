---
id: 587d825c367417b2b2512c90
title: Breadth-First Search
challengeType: 1
forumTopicId: 301622
localeTitle: Поиск по ширине
---

## Description
<section id='description'>
До сих пор мы изучили разные способы создания представлений графиков. Что теперь? Один естественный вопрос - какие расстояния между любыми двумя узлами графика? Введите <dfn>алгоритмы обхода графа</dfn> . <dfn>Алгоритмы</dfn> траверса - это алгоритмы для перемещения или посещения узлов в графе. Одним типом алгоритма обхода является алгоритм поиска ширины. Этот алгоритм начинается с одного узла, сначала посещает всех его соседей, которые находятся на одном крае, а затем переходит к каждому из своих соседей. Визуально это то, что делает алгоритм. <img class="img-responsive" src="https://camo.githubusercontent.com/2f57e6239884a1a03402912f13c49555dec76d06/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f342f34362f416e696d617465645f4246532e676966"> Чтобы реализовать этот алгоритм, вам нужно будет ввести структуру графика и узел, с которого вы хотите начать. Во-первых, вы хотите знать расстояния от стартового узла. Это вы хотите сначала начать все свои расстояния на некоторое количество, например <code>Infinity</code> . Это дает ссылку на случай, когда узел может быть недоступен из вашего стартового узла. Затем вы захотите перейти от стартового узла к своим соседям. Эти соседи находятся на одном крае, и в этот момент вы должны добавить одну единицу расстояния до расстояний, которые вы отслеживаете. Наконец, важной структурой данных, которая поможет реализовать алгоритм поиска по ширине, является очередь. Это массив, в котором вы можете добавлять элементы в один конец и удалять элементы с другого конца. Это также известно как структура данных <dfn>FIFO</dfn> или <dfn>First-In-First-Out</dfn> .
</section>

## Instructions
<section id='instructions'>
Напишите функцию <code>bfs()</code> которая принимает граф матрицы смежности (двумерный массив) и корень метки узла в качестве параметров. Метка узла будет просто целочисленным значением узла между <code>0</code> и <code>n - 1</code> , где <code>n</code> - общее количество узлов в графе. Ваша функция выведет пары ключ-значение объекта JavaScript с узлом и его удалением от корня. Если узел не может быть достигнут, он должен иметь расстояние до <code>Infinity</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'The input graph <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> with a start node of <code>1</code> should return <code>{0: 1, 1: 0, 2: 1, 3: 2}</code>'
    testString: 'assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]; var results = bfs(graph, 1); return isEquivalent(results, {0: 1, 1: 0, 2: 1, 3: 2})})());'
  - text: 'The input graph <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]</code> with a start node of <code>1</code> should return <code>{0: 1, 1: 0, 2: 1, 3: Infinity}</code>'
    testString: 'assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]; var results = bfs(graph, 1); return isEquivalent(results, {0: 1, 1: 0, 2: 1, 3: Infinity})})());'
  - text: 'The input graph <code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> with a start node of <code>0</code> should return <code>{0: 0, 1: 1, 2: 2, 3: 3}</code>'
    testString: 'assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]; var results = bfs(graph, 0); return isEquivalent(results, {0: 0, 1: 1, 2: 2, 3: 3})})());'
  - text: 'The input graph <code>[[0, 1], [1, 0]]</code> with a start node of <code>0</code> should return <code>{0: 0, 1: 1}</code>'
    testString: 'assert((function() { var graph = [[0, 1], [1, 0]]; var results = bfs(graph, 0); return isEquivalent(results, {0: 0, 1: 1})})());'

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

### After Tests
<div id='js-teardown'>

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

</div>

</section>

## Solution
<section id='solution'>

```js
function bfs(graph, root) {
  // Distance object returned
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

</section>
