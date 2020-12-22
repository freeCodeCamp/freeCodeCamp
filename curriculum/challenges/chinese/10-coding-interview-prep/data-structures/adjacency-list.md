---
id: 587d8256367417b2b2512c77
title: 邻接名单
challengeType: 1
videoUrl: ''
---

# --description--

图表可以以不同方式表示。这里我们描述一种方法，称为<dfn>邻接列表</dfn> 。邻接列表本质上是项目符号列表，其中左侧是节点，右侧列出它所连接的所有其他节点。下面是邻接列表的表示。

> Node1：Node2，Node3  
> Node2：Node1  
> Node3：Node1

以上是无向图，因为`Node1`连接到`Node2`和`Node3` ，并且该信息与`Node2`和`Node3`显示的连接一致。有向图的邻接列表意味着列表的每一行都显示方向。如果指示上述内容，那么`Node2: Node1`将意味着有向边缘从`Node2`指向`Node1` 。我们可以将上面的无向图表示为邻接列表，方法是将其放在JavaScript对象中。

> var undirectedG = {  
> 节点1：\[“Node2”，“Node3”]，  
> Node2：\[“Node1”]，  
> Node3：\[“Node1”]  
> };

这也可以更简单地表示为一个数组，其中节点只有数字而不是字符串标签。

> var undirectedGArr = \[  
> \[1,2]，＃Node1  
> \[0]，＃Node2  
> \[0] #Node3  
> ]。

# --instructions--

创建一个社交网络作为无向图，其中有4个节点/人名为`James` ， `Jill` ， `Jenny`和`Jeff` 。詹姆斯和杰夫，吉尔和珍妮以及杰夫和珍妮之间存在边缘/关系。

# --hints--

`undirectedAdjList`应该只包含四个节点。

```js
assert(Object.keys(undirectedAdjList).length === 4);
```

`Jeff`和`James`之间应该有优势。

```js
assert(
  undirectedAdjList.James.indexOf('Jeff') !== -1 &&
    undirectedAdjList.Jeff.indexOf('James') !== -1
);
```

`Jill`和`Jenny`之间应该有一个优势。

```js
assert(
  undirectedAdjList.Jill.indexOf('Jenny') !== -1 &&
    undirectedAdjList.Jill.indexOf('Jenny') !== -1
);
```

`Jeff`和`Jenny`之间应该有优势。

```js
assert(
  undirectedAdjList.Jeff.indexOf('Jenny') !== -1 &&
    undirectedAdjList.Jenny.indexOf('Jeff') !== -1
);
```

# --solutions--

