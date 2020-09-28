---
id: 587d8256367417b2b2512c78
title: Adjacency Matrix
challengeType: 1
forumTopicId: 301621
localeTitle: Матрица смежности
---

## Description
<section id='description'>
Другим способом представления графика является его размещение в <dfn>матрице смежности</dfn> . Матрица <dfn>смежности</dfn> представляет собой двумерный (2D) массив, где каждый вложенный массив имеет такое же количество элементов, что и внешний массив. Другими словами, это матрица или сетка чисел, где числа представляют собой ребра. Нули означают, что нет границ или отношений. <blockquote> 1 2 3 <br> ------ <br> 1 | 0 1 1 <br> 2 | 1 0 0 <br> 3 | 1 0 0 </blockquote> Выше - очень простой, неориентированный граф, где у вас есть три узла, где первый узел подключен ко второму и третьему узлам. <strong>Примечание</strong> . Числа в верхней и левой частях матрицы являются только метками для узлов. Ниже приведена реализация JavaScript того же самого. <blockquote> var adjMat = [ <br> [0, 1, 1], <br> [1, 0, 0], <br> [1, 0, 0] <br> ]; </blockquote> В отличие от списка смежности, каждая «строка» матрицы должна иметь такое же количество элементов, что и узлы в графике. Здесь у нас есть три-три матрицы, что означает, что мы имеем три узла в нашем графике. Ориентированный граф будет похож. Ниже приведен график, в котором первый узел имеет ребро, указывающее на второй узел, а затем второй узел имеет ребро, указывающее на третий узел. <blockquote> var adjMatDirected = [ <br> [0, 1, 0], <br> [0, 0, 1], <br> [0, 0, 0] <br> ]; </blockquote> Графики также могут иметь <dfn>веса</dfn> по краям. До сих пор у нас есть <dfn>невзвешенные</dfn> края, где только наличие и отсутствие ребра двоично ( <code>0</code> или <code>1</code> ). Вы можете иметь разные веса в зависимости от вашего приложения.
</section>

## Instructions
<section id='instructions'>
Создайте матрицу смежности неориентированного графа с пятью узлами. Эта матрица должна быть в многомерном массиве. Эти пять узлов имеют отношения между первым и четвертым узлами, первым и третьим узлом, третьим и пятым узлами и четвертым и пятым узлами. Все весовые коэффициенты являются единичными.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>undirectedAdjList</code> should only contain five nodes.
    testString: assert((adjMatUndirected.length === 5) && adjMatUndirected.map(function(x) { return x.length === 5 }).reduce(function(a, b) { return a && b }) );
  - text: There should be an edge between the first and fourth node.
    testString: assert((adjMatUndirected[0][3] === 1) && (adjMatUndirected[3][0] === 1));
  - text: There should be an edge between the first and third node.
    testString: assert((adjMatUndirected[0][2] === 1) && (adjMatUndirected[2][0] === 1));
  - text: There should be an edge between the third and fifth node.
    testString: assert((adjMatUndirected[2][4] === 1) && (adjMatUndirected[4][2] === 1));
  - text: There should be an edge between the fourth and fifth node.
    testString: assert((adjMatUndirected[3][4] === 1) && (adjMatUndirected[4][3] === 1));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var adjMatUndirected = [];

```

</div>

</section>

## Solution
<section id='solution'>

```js
var adjMatUndirected = [
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [1, 0, 0, 0, 1],
  [1, 0, 0, 0, 1],
  [0, 0, 1, 1, 0]
];
```

</section>
