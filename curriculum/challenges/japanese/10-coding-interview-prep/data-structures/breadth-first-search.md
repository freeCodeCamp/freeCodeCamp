---
id: 587d825c367417b2b2512c90
title: 幅優先探索
challengeType: 1
forumTopicId: 301622
dashedName: breadth-first-search
---

# --description--

これまで、グラフを表現するさまざまな方法を学びました。 次は何でしょう？ 自然に生まれる問いは、グラフ内の 2 つのノード間の距離はどのくらいかということです。 そこで、<dfn>グラフ走査アルゴリズム</dfn>の出番です。

<dfn>走査アルゴリズム</dfn>は、グラフ内のノードを走査したり訪問したりするためのアルゴリズムです。 走査アルゴリズムのタイプの一つは、幅優先探索アルゴリズムです。

このアルゴリズムは 1 つのノードから始まり、エッジ 1 本分だけ離れているすべての隣接ノードを訪問します。 その後、すべてのノードに到達するまで、それぞれの隣接ノードを訪れ続けます。

幅優先探索アルゴリズムを実装するのに役立つ重要なデータ構造は、キューです。 これは、一方の端に要素を追加し、もう一方の端から要素を削除することができる配列です。 これは、<dfn>FIFO</dfn> または<dfn>先入れ先出し</dfn>のデータ構造とも呼ばれます。

このアルゴリズムが行っていることを視覚的に表すと、このようになります。 ![木の中を移動する幅優先探索アルゴリズム](https://camo.githubusercontent.com/2f57e6239884a1a03402912f13c49555dec76d06/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f342f34362f416e696d617465645f4246532e676966)

灰色はキューに追加されるノードを表し、黒はキューから削除されるノードを表します。 ノードがキューから削除される (ノードが黒に変わる) たびに、すべての隣接ノードがキューに追加される (ノードが灰色に変わる) 様子を確認してください。

このアルゴリズムを実装するには、グラフ構造と開始ノードを入力する必要があります。

まず、開始ノードからの距離、すなわち開始ノードからのエッジの数を知る必要があります。 `Infinity` のような大きな数字ですべての距離を開始します。 これにより、開始ノードから到達できないノードがある場合のカウントの問題を防ぎます。 次に、開始ノードから隣接ノードに移動します。 これらの隣接ノードはエッジ 1 本分だけ離れており、この時点で、あなたが追跡している距離に 1 単位の距離を追加する必要があります。

# --instructions--

隣接行列グラフ (二次元配列) とノードラベルの根 (開始ノード) をパラメータとして取る関数、`bfs()` を記述してください。 ノードラベルは単に `0` から `n - 1` の間の整数値です (`n` はグラフ内のノードの総数)。

この関数は、JavaScript オブジェクトのキーと値のペア (ノードと、根からそのノードまでの距離) を出力します。 そのノードに到達できなかった場合、そのノードは `Infinity` の距離を持つ必要があります。

# --hints--

`1` の開始ノードを持つ入力グラフ `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]` は、`{0: 1, 1: 0, 2: 1, 3: 2}` を返す必要があります。

```js
assert(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [0, 0, 1, 0]
    ];
    var results = bfs(graph, 1);
    return isEquivalent(results, { 0: 1, 1: 0, 2: 1, 3: 2 });
  })()
);
```

`1` の開始ノードを持つ入力グラフ `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0]]` は、`{0: 1, 1: 0, 2: 1, 3: Infinity}` を返す必要があります。

```js
assert(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 0],
      [0, 0, 0, 0]
    ];
    var results = bfs(graph, 1);
    return isEquivalent(results, { 0: 1, 1: 0, 2: 1, 3: Infinity });
  })()
);
```

`0` の開始ノードを持つ入力グラフ `[[0, 1, 0, 0], [1, 0, 1, 0], [0, 1, 0, 1], [0, 0, 1, 0]]` は、`{0: 0, 1: 1, 2: 2, 3: 3}` を返す必要があります。

```js
assert(
  (function () {
    var graph = [
      [0, 1, 0, 0],
      [1, 0, 1, 0],
      [0, 1, 0, 1],
      [0, 0, 1, 0]
    ];
    var results = bfs(graph, 0);
    return isEquivalent(results, { 0: 0, 1: 1, 2: 2, 3: 3 });
  })()
);
```

入力グラフ `[[0, 1], [1, 0]]` の開始ノードが `0` の場合、`{0: 0, 1: 1}` を返す必要があります。

```js
assert(
  (function () {
    var graph = [
      [0, 1],
      [1, 0]
    ];
    var results = bfs(graph, 0);
    return isEquivalent(results, { 0: 0, 1: 1 });
  })()
);
```

# --seed--

## --after-user-code--

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

## --seed-contents--

```js
function bfs(graph, root) {
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

# --solutions--

```js
function bfs(graph, root) {
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
