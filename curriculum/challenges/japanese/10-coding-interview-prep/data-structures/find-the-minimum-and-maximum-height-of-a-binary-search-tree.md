---
id: 587d8257367417b2b2512c7d
title: 二分探索木の最小と最大の高さを見つける
challengeType: 1
forumTopicId: 301641
dashedName: find-the-minimum-and-maximum-height-of-a-binary-search-tree
---

# --description--

直前のチャレンジでは、木が不均衡になる (平衡でなくなる) 可能性のあるシナリオを説明しました。 平衡の概念を理解するために、木のもう一つの性質である「高さ」に注目してみましょう。 木の高さは、根ノードから、与えられた葉ノードまでの距離を表します。 分岐の多いツリー構造では経路によって高さが異なる場合がありますが、与えられた木には最小と最大の高さがあります。 平衡木の場合、これらの値の差は最大 1 です。 つまり平衡木では、すべての葉ノードが同じレベル内にあるか、または、同じレベル内でないとしても差は 1 レベル以内です。

平衡性は、木の操作効率を左右するので木にとって重要なものです。 直前のチャレンジで説明したように、ひどく不均衡な木では最悪ケースの時間計算量になってしまいます。 動的データセットを持つ木でこの問題を考慮するために、平衡木がよく使われます。 その一般的な例としては、AVL 木、赤黒木、B 木などがあります。 これらすべての木には、挿入や削除によって平衡でなくなった木を再び平衡にするための内部ロジックが追加されています。

**注:**「高さ」と似た性質として「深さ」があります。深さは、与えられたノードが根ノードからどれだけ離れているかを表します。

# --instructions--

私たちの二分木に対して 2 つのメソッド、`findMinHeight` と `findMaxHeight` を記述してください。 これらのメソッドは、与えられた二分木の中の最小と最大の高さの整数値をそれぞれ返す必要があります。 ノードが空の場合は、`-1` の高さを割り当てましょう (これは初期条件です)。 最後に、木が平衡であるかどうかに応じて `true` または `false` を返す 3 つ目のメソッド、`isBalanced` を追加してください。 木が平衡かどうかを決定するには、最初の 2 つのメソッドを使用できます。

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

二分探索木に `findMinHeight` というメソッドが必要です。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.findMinHeight == 'function';
  })()
);
```

二分探索木に `findMaxHeight` というメソッドが必要です。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.findMaxHeight == 'function';
  })()
);
```

二分探索木に `isBalanced` というメソッドが必要です。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.isBalanced == 'function';
  })()
);
```

`findMinHeight` メソッドは、木の最小の高さを返す必要があります。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.findMinHeight !== 'function') {
      return false;
    }
    test.add(4);
    test.add(1);
    test.add(7);
    test.add(87);
    test.add(34);
    test.add(45);
    test.add(73);
    test.add(8);
    return test.findMinHeight() == 1;
  })()
);
```

`findMaxHeight` メソッドは、木の最大の高さを返す必要があります。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.findMaxHeight !== 'function') {
      return false;
    }
    test.add(4);
    test.add(1);
    test.add(7);
    test.add(87);
    test.add(34);
    test.add(45);
    test.add(73);
    test.add(8);
    return test.findMaxHeight() == 5;
  })()
);
```

空の木は `-1` の高さを返す必要があります。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.findMaxHeight !== 'function') {
      return false;
    }
    return test.findMaxHeight() == -1;
  })()
);
```

`isBalanced` メソッドは、その木が不均衡な二分探索木である場合に `false` を返す必要があります。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.isBalanced !== 'function') {
      return false;
    }
    test.add(4);
    test.add(1);
    test.add(7);
    test.add(87);
    test.add(34);
    test.add(45);
    test.add(73);
    test.add(8);
    return test.isBalanced() === false;
  })()
);
```

`isBalanced` メソッドは、その木が平衡な二分探索木である場合に `true` を返す必要があります。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.isBalanced !== 'function') {
      return false;
    }
    test.add(10);
    test.add(3);
    test.add(22);
    test.add(1);
    test.add(4);
    test.add(17);
    test.add(32);
    return test.isBalanced() === true;
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

      var node = this.root;
      if (node == null) {
        this.root = new Node(value);
        return;
      } else {
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
  this.findMinHeight = function(root = this.root) {
    // empty tree.
    if (root === null) {
      return -1;
    }
    // leaf node.
    if (root.left === null && root.right === null) {
      return 0;
    }
    if (root.left === null) {
      return this.findMinHeight(root.right) + 1;
    }
    if (root.right === null) {
      return this.findMinHeight(root.left) + 1;
    }
    const lHeight = this.findMinHeight(root.left);
    const rHeight = this.findMinHeight(root.right);
    return Math.min(lHeight, rHeight) + 1;
  };
  this.findMaxHeight = function(root = this.root) {
    // empty tree.
    if (root === null) {
      return -1;
    }
    // leaf node.
    if (root.left === null && root.right === null) {
      return 0;
    }
    if (root.left === null) {
      return this.findMaxHeight(root.right) + 1;
    }
    if (root.right === null) {
      return this.findMaxHeight(root.left) + 1;
    }
    const lHeight = this.findMaxHeight(root.left);
    const rHeight = this.findMaxHeight(root.right);
    return Math.max(lHeight, rHeight) + 1;
  };
  this.isBalanced = function(root = this.root) {
    if (root === null) {
      return true;
    }

    if (root.left === null && root.right === null) {
      return true;
    }

    if (root.left === null) {
      return this.findMaxHeight(root.right) <= 0;
    }

    if (root.right === null) {
      return this.findMaxHeight(root.left) <= 0;
    }

    const lHeight = this.findMaxHeight(root.left);
    const rHeight = this.findMaxHeight(root.right);
    if (Math.abs(lHeight - rHeight) > 1) {
      return false;
    }
    return this.isBalanced(root.left) && this.isBalanced(root.right);
  };
}
```
