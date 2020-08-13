---
id: 587d8256367417b2b2512c77
title: Adjacency List
challengeType: 1
videoUrl: ''
localeTitle: 邻接名单
---

## Description
<section id="description">图表可以以不同方式表示。这里我们描述一种方法，称为<dfn>邻接列表</dfn> 。邻接列表本质上是项目符号列表，其中左侧是节点，右侧列出它所连接的所有其他节点。下面是邻接列表的表示。 <blockquote> Node1：Node2，Node3 <br> Node2：Node1 <br> Node3：Node1 </blockquote>以上是无向图，因为<code>Node1</code>连接到<code>Node2</code>和<code>Node3</code> ，并且该信息与<code>Node2</code>和<code>Node3</code>显示的连接一致。有向图的邻接列表意味着列表的每一行都显示方向。如果指示上述内容，那么<code>Node2: Node1</code>将意味着有向边缘从<code>Node2</code>指向<code>Node1</code> 。我们可以将上面的无向图表示为邻接列表，方法是将其放在JavaScript对象中。 <blockquote> var undirectedG = { <br>节点1：[“Node2”，“Node3”]， <br> Node2：[“Node1”]， <br> Node3：[“Node1”] <br> }; </blockquote>这也可以更简单地表示为一个数组，其中节点只有数字而不是字符串标签。 <blockquote> var undirectedGArr = [ <br> [1,2]，＃Node1 <br> [0]，＃Node2 <br> [0] #Node3 <br> ]。 </blockquote></section>

## Instructions
<section id="instructions">创建一个社交网络作为无向图，其中有4个节点/人名为<code>James</code> ， <code>Jill</code> ， <code>Jenny</code>和<code>Jeff</code> 。詹姆斯和杰夫，吉尔和珍妮以及杰夫和珍妮之间存在边缘/关系。 </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>undirectedAdjList</code>应该只包含四个节点。
    testString: assert(Object.keys(undirectedAdjList).length === 4);
  - text: <code>Jeff</code>和<code>James</code>之间应该有优势。
    testString: assert(undirectedAdjList.James.indexOf("Jeff") !== -1 && undirectedAdjList.Jeff.indexOf("James") !== -1);
  - text: <code>Jill</code>和<code>Jenny</code>之间应该有一个优势。
    testString: assert(undirectedAdjList.Jill.indexOf("Jenny") !== -1 && undirectedAdjList.Jill.indexOf("Jenny") !== -1);
  - text: <code>Jeff</code>和<code>Jenny</code>之间应该有优势。
    testString: assert(undirectedAdjList.Jeff.indexOf("Jenny") !== -1 && undirectedAdjList.Jenny.indexOf("Jeff") !== -1);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var undirectedAdjList = {
};

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

/section>
