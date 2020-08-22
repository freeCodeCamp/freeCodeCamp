---
id: 587d8256367417b2b2512c79
title: Incidence Matrix
challengeType: 1
videoUrl: ''
localeTitle: 发生率矩阵
---

## Description
<section id="description">表示图形的另一种方式是将其置于<dfn>关联矩阵中。</dfn> <dfn>入射矩阵</dfn>是二维（2D）阵列。一般而言，关联矩阵在其两个维度之间涉及两个不同类别的对象。这种矩阵类似于邻接矩阵。但是，行和列在这里意味着其他东西。在图表中，我们有边缘和节点。这些将是我们的“两类不同的对象”。该矩阵将使行为节点，列为边。这意味着我们可以拥有不均匀的行数和列数。每列将代表一个独特的边缘。此外，每个边连接两个节点。要显示两个节点之间存在边缘，您将在特定列的两行中放置1。下面是一个3节点图，节点1和节点3之间有一条边。 <blockquote> 1 <br> --- <br> 1 | 1 <br> 2 | 0 <br> 3 | 1 </blockquote>以下是具有4个边和4个节点的<code>incidence matrix</code>的示例。请记住，列是边，行是节点本身。 <blockquote> 1 2 3 4 <br> -------- <br> 1 | 0 1 1 1 <br> 2 | 1 1 0 0 <br> 3 | 1 0 0 1 <br> 4 | 0 0 1 0 </blockquote>下面是同一件事的JavaScript实现。 <blockquote> var incMat = [ <br> [0,1,1,1]， <br> [1,1,0,0]， <br> [1,0,0,1]， <br> [0,0,1,0] <br> ]。 </blockquote>要制作有向图，请使用<code>-1</code>表示离开特定节点的边，使用<code>1</code>作为边进入节点。 <blockquote> var incMatDirected = [ <br> [0，-1,1，-1]， <br> [-1,1,0,0]， <br> [1,0,0,1]， <br> [0,0，-1,0] <br> ]。 </blockquote>图形的边缘也可以有权<dfn>重</dfn> 。到目前为止，我们有<dfn>未加权的</dfn>边缘，只有存在和缺少边是二进制（ <code>0</code>或<code>1</code> ）。根据您的应用，您可以拥有不同的重量。不同的权重表示为大于1的数字。 </section>

## Instructions
<section id="instructions">创建具有五个节点和四个边的无向图的关联矩阵。该矩阵应该是多维数组。这五个节点在关系之后具有关系。第一边缘在第一和第二节点之间。第二个边缘位于第二个和第三个节点之间。第三个边缘位于第三个和第五个节点之间。并且四个边缘在第四和第二节点之间。所有边权重均为1，边缘顺序很重要。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>incMatUndirected</code>应该只包含五个节点。
    testString: assert((incMatUndirected.length === 5) && incMatUndirected.map(function(x) { return x.length === 4 }).reduce(function(a, b) { return a && b }) );
  - text: 第一个和第二个节点之间应该有第一条边。
    testString: assert((incMatUndirected[0][0] === 1) && (incMatUndirected[1][0] === 1));
  - text: 第二个和第三个节点之间应该有第二条边。
    testString: assert((incMatUndirected[1][1] === 1) && (incMatUndirected[2][1] === 1));
  - text: 第三个和第五个节点之间应该有第三条边。
    testString: assert((incMatUndirected[2][2] === 1) && (incMatUndirected[4][2] === 1));
  - text: 第二个和第四个节点之间应该有第四条边。
    testString: assert((incMatUndirected[1][3] === 1) && (incMatUndirected[3][3] === 1));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var incMatUndirected = [

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
