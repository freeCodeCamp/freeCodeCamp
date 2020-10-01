---
id: 587d825c367417b2b2512c90
challengeType: 1
videoUrl: ''
title: 广度优先搜索
---

## Description
<section id="description">到目前为止，我们已经学会了创建图表表示的不同方法。现在怎么办？一个自然的问题是图中任何两个节点之间的距离是多少？输入<dfn>图遍历算法</dfn> 。 <dfn>遍历算法</dfn>是遍历或访问图中节点的算法。一种遍历算法是广度优先搜索算法。该算法从一个节点开始，首先访问一个边缘的所有邻居，然后继续访问它们的每个邻居。在视觉上，这就是算法正在做的事情。 <img class="img-responsive" src="https://camo.githubusercontent.com/2f57e6239884a1a03402912f13c49555dec76d06/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f342f34362f416e696d617465645f4246532e676966">要实现此算法，您需要输入图形结构和要启动的节点。首先，您需要了解距起始节点的距离。这个你想要开始你所有的距离最初一些大的数字，如<code>Infinity</code> 。这为从起始节点无法访问节点的情况提供了参考。接下来，您将要从开始节点转到其邻居。这些邻居是一个边缘，此时你应该添加一个距离单位到你要跟踪的距离。最后，有助于实现广度优先搜索算法的重要数据结构是队列。这是一个数组，您可以在其中添加元素到一端并从另一端删除元素。这也称为<dfn>FIFO</dfn>或<dfn>先进先出</dfn>数据结构。 </section>

## Instructions
<section id="instructions">编写一个函数<code>bfs()</code> ，它将邻接矩阵图（二维数组）和节点标签根作为参数。节点标签只是<code>0</code>到<code>n - 1</code>之间节点的整数值，其中<code>n</code>是图中节点的总数。您的函数将输出JavaScript对象键值对与节点及其与根的距离。如果无法到达节点，则其距离应为<code>Infinity</code> 。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '输入图<code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> ，起始节点为<code>1</code>应该返回<code>{0: 1, 1: 0, 2: 1, 3: 2}</code>'
    testString: 'assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]; var results = bfs(graph, 1); return isEquivalent(results, {0: 1, 1: 0, 2: 1, 3: 2})})());'
  - text: '输入图<code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]</code> ，起始节点为<code>1</code>应该返回<code>{0: 1, 1: 0, 2: 1, 3: Infinity}</code>'
    testString: 'assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]; var results = bfs(graph, 1); return isEquivalent(results, {0: 1, 1: 0, 2: 1, 3: Infinity})})());'
  - text: '输入图<code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> ，起始节点为<code>0</code>应该返回<code>{0: 0, 1: 1, 2: 2, 3: 3}</code>'
    testString: 'assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]; var results = bfs(graph, 0); return isEquivalent(results, {0: 0, 1: 1, 2: 2, 3: 3})})());'
  - text: '起始节点为<code>0</code>的输入图<code>[[0, 1], [1, 0]]</code>应返回<code>{0: 0, 1: 1}</code>'
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

/section>
