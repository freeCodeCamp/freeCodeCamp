---
id: 587d825d367417b2b2512c96
challengeType: 1
videoUrl: ''
title: 深度优先搜索
---

## Description
<section id="description">与<dfn>广度优先搜索</dfn>类似，这里我们将学习另一种称为<dfn>深度优先搜索的</dfn>图遍历算法。广度优先搜索搜索远离源节点的增量边长度，而<dfn>深度优先搜索</dfn>首先尽可能地沿着边缘路径向下<dfn>搜索</dfn> 。一旦到达路径的一端，搜索将回溯到具有未访问边缘路径的最后一个节点并继续搜索。在视觉上，这就是算法正在做的事情，其中​​顶部节点是搜索的起始点。 <img class="img-responsive" src="https://camo.githubusercontent.com/aaad9e39961daf34d967c616edeb50abf3bf1235/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f372f37662f44657074682d46697273742d5365617263682e676966">该算法的简单输出是可从给定节点到达的节点列表。因此，在实施此算法时，您需要跟踪您访问的节点。 </section>

## Instructions
<section id="instructions">编写一个函数<code>dfs()</code> ，它将无向，邻接矩阵<code>graph</code>和节点标签<code>root</code>作为参数。节点标签将只是<code>0</code>和<code>n - 1</code>之间节点的数值，其中<code>n</code>是图中节点的总数。您的函数应输出从<code>root</code>可到达的所有节点的数组。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '输入图<code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> ，起始节点为<code>1</code>应返回一个数组<code>0</code> ， <code>1</code> ， <code>2</code> ，和<code>3</code> 。'
    testString: assert.sameMembers((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]; return dfs(graph, 1);})(), [0, 1, 2, 3]);
  - text: '输入图<code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]</code> ，起始节点为<code>1</code>应该返回一个包含四个元素的数组。'
    testString: assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]; return dfs(graph, 1);})().length === 4);
  - text: '输入图<code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]</code> ，起始节点为<code>3</code>应该返回一个<code>3</code>的数组。'
    testString: assert.sameMembers((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]; return dfs(graph, 3);})(), [3]);
  - text: '输入图<code>[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]</code> ，起始节点为<code>3</code>应该返回一个包含一个元素的数组。'
    testString: assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]; return dfs(graph, 3);})().length === 1);
  - text: '输入图<code>[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]</code> ，起始节点为<code>3</code>应该返回一个<code>2</code>和<code>3</code>的数组。'
    testString: assert.sameMembers((function() { var graph = [[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]; return dfs(graph, 3);})(), [2, 3]);
  - text: '输入图<code>[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]</code> ，起始节点为<code>3</code>应该返回一个包含两个元素的数组。'
    testString: assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]; return dfs(graph, 3);})().length === 2);
  - text: '输入图<code>[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]</code> ，起始节点为<code>0</code>应该返回一个<code>0</code>和<code>1</code>的数组。'
    testString: assert.sameMembers((function() { var graph = [[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]; return dfs(graph, 0);})(), [0, 1]);
  - text: '输入图<code>[[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]</code> ，起始节点为<code>0</code>应该返回一个包含两个元素的数组。'
    testString: assert((function() { var graph = [[0, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 1], [0, 0, 1, 0]]; return dfs(graph, 0);})().length === 2);

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

/section>
