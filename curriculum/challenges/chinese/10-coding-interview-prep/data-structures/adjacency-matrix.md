---
id: 587d8256367417b2b2512c78
challengeType: 1
videoUrl: ''
title: 邻接矩阵
---

## Description
<section id="description">表示图形的另一种方法是将其置于<dfn>邻接矩阵中</dfn> 。 <dfn>邻接矩阵</dfn>是二维（2D）阵列，其中每个嵌套数组具有与外部数组相同数量的元素。换句话说，它是数字的矩阵或网格，其中数字代表边缘。零意味着没有边缘或关系。 <blockquote> 1 2 3 <br> ------ <br> 1 | 0 1 1 <br> 2 | 1 0 0 <br> 3 | 1 0 0 </blockquote>上面是一个非常简单的无向图，其中有三个节点，第一个节点连接到第二个和第三个节点。 <strong>注意</strong> ：矩阵顶部和左侧的数字只是节点的标签。下面是同一件事的JavaScript实现。 <blockquote> var adjMat = [ <br> [0,1,1]， <br> [1,0,0]， <br> [1,0,0] <br> ]。 </blockquote>与邻接列表不同，矩阵的每个“行”必须具有与图中的节点相同数量的元素。这里我们有一个三乘三矩阵，这意味着我们的图中有三个节点。有向图看起来很相似。下面是第一节点具有指向第二节点的边缘，然后第二节点具有指向第三节点的边缘的图。 <blockquote> var adjMatDirected = [ <br> [0,1,0]， <br> [0,0,1]， <br> [0,0,0] <br> ]。 </blockquote>图形的边缘也可以有权<dfn>重</dfn> 。到目前为止，我们有<dfn>未加权的</dfn>边缘，只有存在和缺少边是二进制（ <code>0</code>或<code>1</code> ）。根据您的应用，您可以拥有不同的重量。 </section>

## Instructions
<section id="instructions">创建具有五个节点的无向​​图的邻接矩阵。该矩阵应该是多维数组。这五个节点在第一和第四节点，第一和第三节点，第三和第五节点以及第四和第五节点之间具有关系。所有边缘权重都是一个。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>undirectedAdjList</code>应该只包含五个节点。
    testString: assert((adjMatUndirected.length === 5) && adjMatUndirected.map(function(x) { return x.length === 5 }).reduce(function(a, b) { return a && b }) );
  - text: 第一个和第四个节点之间应该有一条边。
    testString: assert((adjMatUndirected[0][3] === 1) && (adjMatUndirected[3][0] === 1));
  - text: 第一个和第三个节点之间应该有一条边。
    testString: assert((adjMatUndirected[0][2] === 1) && (adjMatUndirected[2][0] === 1));
  - text: 第三个和第五个节点之间应该有一条边。
    testString: assert((adjMatUndirected[2][4] === 1) && (adjMatUndirected[4][2] === 1));
  - text: 第四个和第五个节点之间应该有一条边。
    testString: assert((adjMatUndirected[3][4] === 1) && (adjMatUndirected[4][3] === 1));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var adjMatUndirected = [
];

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
