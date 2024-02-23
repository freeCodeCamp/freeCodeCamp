---
id: 587d8256367417b2b2512c77
title: 隣接リスト
challengeType: 1
forumTopicId: 301620
dashedName: adjacency-list
---

# --description--

グラフはさまざまな方法で表すことができます。 ここでは、<dfn>隣接リスト</dfn>と呼ばれる方法について説明します。 隣接リストは基本的に箇条書きリストで、左側がノードであり、右側にはそのノードが接続されている他のすべてのノードが列挙されます。 隣接リストの表現を次に示します。

<blockquote>Node1: Node2, Node3<br>Node2: Node1<br>Node3: Node1</blockquote>

上のリストでは、`Node1` が `Node2` と `Node3` に接続されており、その情報は `Node2` と `Node3` が示す接続と一致しているので、無向グラフです。 有向グラフの隣接リストとは、リストの各行が方向を示しているリストのことです。 これが有向グラフであった場合、`Node2: Node1` とは、そこでは有向エッジ (枝) が `Node2` から `Node1` へ向かっているという意味です。 JavaScript オブジェクトの中に入れることで、上の無向グラフを隣接リストとして表すことができます。

```js
var undirectedG = {
  Node1: ["Node2", "Node3"],
  Node2: ["Node1"],
  Node3: ["Node1"]
};
```

これは、ノードが文字列ラベルではなく数字だけを持つ配列として、より単純に表現することもできます。

```js
var undirectedGArr = [
  [1, 2], // Node1
  [0],    // Node2
  [0]     // Node3
];
```

# --instructions--

`James`、`Jill`、`Jenny`、`Jeff` という 4 つ (4人) のノードを持つ無向グラフとしてソーシャルネットワークを作成してください。 James と Jeff の間、Jill と Jenny の間、および Jeff と Jenny の間にはエッジ / 関係があります。

# --hints--

`undirected AdjList` には 4 つのノードのみが含まれている必要があります。

```js
assert(Object.keys(undirectedAdjList).length === 4);
```

`Jeff` と `James` の間にはエッジが必要です。

```js
assert(
  undirectedAdjList.James.indexOf('Jeff') !== -1 &&
    undirectedAdjList.Jeff.indexOf('James') !== -1
);
```

`Jill` と `Jenny` の間にはエッジが必要です。

```js
assert(
  undirectedAdjList.Jill.indexOf('Jenny') !== -1 &&
    undirectedAdjList.Jenny.indexOf('Jill') !== -1
);
```

`Jeff` と `Jenny` の間にはエッジが必要です。

```js
assert(
  undirectedAdjList.Jeff.indexOf('Jenny') !== -1 &&
    undirectedAdjList.Jenny.indexOf('Jeff') !== -1
);
```

# --seed--

## --seed-contents--

```js
var undirectedAdjList = {};
```

# --solutions--

```js
var undirectedAdjList = {
  James: ['Jeff'],
  Jill: ['Jenny'],
  Jenny: ['Jill', 'Jeff'],
  Jeff: ['James', 'Jenny']
};
```
