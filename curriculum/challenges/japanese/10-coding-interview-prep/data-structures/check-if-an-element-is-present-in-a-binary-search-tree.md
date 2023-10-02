---
id: 587d8257367417b2b2512c7c
title: 二分探索木に要素が存在するかを調べる
challengeType: 1
forumTopicId: 301623
dashedName: check-if-an-element-is-present-in-a-binary-search-tree
---

# --description--

二分探索木について大まかに理解できたので、もう少し詳しく見ていきましょう。 二分探索木は、検索、挿入、削除という一般的操作の平均ケースでは対数時間計算量、最悪ケースでは線形時間計算量になります。 なぜでしょうか？ これらの基本操作のそれぞれで、木の中の要素を見つける (または、挿入の場合は挿入先を見つける) 必要があります。また、各親ノードのツリー構造上、操作は左または右に分岐し、残りの木の半分のサイズを完全に排除します。 そのため検索は木のノード数の対数に比例し、これらの操作は平均ケースで対数時間計算量になります。 しかし最悪ケースについてはどうでしょうか？ では、`10`, `12`, `17`, `25` という値を左から右に足していくことで、木を構成してみましょう。 二分探索木のルールに従って、`12` を `10` の右に、`17` をその右に、そして `25` をその右に追加します。 出来上がった木はリンクリストに似ており、`25` を見つけるために木を走査するには、すべての要素を線形に走査する必要があります。 したがって、最悪ケースでは線形時間計算量になります。 ここでの問題は、木が平衡でないことです。 それが何を意味するのかについては、以降のチャレンジでもう少し詳しく説明します。

# --instructions--

このチャレンジでは、私たちの木に対するユーティリティを作成します。 整数値を入力として受け取り、二分探索木でその値が存在するかどうかのブール値を返す、`isPresent` メソッドを記述してください。

# --hints--

`BinarySearchTree` データ構造が存在する必要があります。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    }
    return typeof test == 'object';
  })()
);
```

二分探索木に `isPresent` というメソッドが必要です。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.isPresent == 'function';
  })()
);
```

`isPresent` メソッドは、木に追加された要素の有無を正しく調べる必要があります。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.isPresent !== 'function') {
      return false;
    }
    test.add(4);
    test.add(7);
    test.add(411);
    test.add(452);
    return (
      test.isPresent(452) &&
      test.isPresent(411) &&
      test.isPresent(7) &&
      !test.isPresent(100)
    );
  })()
);
```

`isPresent` は、木が空であるケースを処理する必要があります。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.isPresent !== 'function') {
      return false;
    }
    return test.isPresent(5) == false;
  })()
);
```

# --seed--

## --after-user-code--

```js
BinarySearchTree.prototype = Object.assign(
  BinarySearchTree.prototype,
  {
    add: function(value) {
      var node = this.root;
      if (node == null) {
        this.root = new Node(value);
        return;
      } else {
        function searchTree(node) {
          if (value < node.value) {
            if (node.left == null) {
              node.left = new Node(value);
              return;
            } else if (node.left != null) {
              return searchTree(node.left);
            }
          } else if (value > node.value) {
            if (node.right == null) {
              node.right = new Node(value);
              return;
            } else if (node.right != null) {
              return searchTree(node.right);
            }
          } else {
            return null;
          }
        }
        return searchTree(node);
      }
    }
  }
);
```

## --seed-contents--

```js
var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  this.isPresent = function (value) {
    var current = this.root
    while (current) {
      if (value === current.value) {
        return true;
      }
      current = value < current.value ? current.left : current.right;
    }
    return false;
  }
}
```
