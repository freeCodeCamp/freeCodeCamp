---
id: 587d8258367417b2b2512c80
title: 二分探索木の葉ノードを削除する
challengeType: 1
forumTopicId: 301637
dashedName: delete-a-leaf-node-in-a-binary-search-tree
---

# --description--

これは、二分探索木でやや難しい操作を実装する 3 つのチャレンジの 1 つ目、「削除」です。 削除がなぜ難しいかというと、ノードを削除すると木の中でリンクが切れてしまうからです。 二分木構造が維持されるように、これらのリンクを注意深く作り直す必要があります。 つまり、場合によっては削除の際に木の中を再配置する必要があります。 一般的に、ノードを削除しようとすると次の 3 つのケースのいずれかが起こります。「葉ノード」: 削除対象ノードは子を持っていません。 「子が 1 つ」: 削除対象ノードは子を 1 つ持っています。 「子が 2 つ」: 削除対象ノードは子を 2 つ持っています。 葉ノードを削除するのは簡単で、単純にそれを削除します。 1 つの子を持つノードを削除することも比較的簡単です。単純に削除し、その親を、削除したノードの子とリンクさせます。 しかし 2 つの子を持つノードを削除するのは少しやっかいです。親木に再接続する必要のある子ノードが 2 つ生じるからです。 3 つ目のチャレンジで、このケースに対処する方法を見ていきます。 さらに、削除を処理する際には、いくつかのエッジケースに注意する必要があります。 木が空だったらどうでしょうか？ 削除するノードが根ノードである場合はどうなるでしょうか？ 木に 2 つの要素しかない場合はどうでしょうか？ まずは、葉ノードを削除する最初のケースを処理しましょう。

# --instructions--

二分木に対して `remove` というメソッドを作成してください。 ここに、削除操作のロジックを構築します。 まず、現在の木で削除しようとしているノードを見つける関数を remove 内に作成します。 木の中にそのノードが存在しない場合、`remove` は `null` を返す必要があります。 対象ノードが子を持たない葉ノードの場合、それへの親参照を `null` に設定する必要があります。 これにより、ノードが木から完全に削除されます。 これを行うには、削除しようとしているノードの親も追跡する必要があります。 また、対象ノードが持つ子の数を追跡するための手段を作ることも有用です。そうすれば、その削除がどのケースに該当するかを判断できるからです。 次のチャレンジでは、第 2 および 第 3 のケースを処理します。 頑張ってください！

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

二分探索木に `remove` というメソッドが必要です。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.remove == 'function';
  })()
);
```

空の木から要素を削除しようすると、`null` が返される必要があります。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.remove !== 'function') {
      return false;
    }
    return test.remove(100) == null;
  })()
);
```

存在しない要素を削除しようとすると、`null` が返される必要があります。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.remove !== 'function') {
      return false;
    }
    test.add(15);
    test.add(30);
    return test.remove(100) == null;
  })()
);
```

根ノードに子がない場合は、削除すると根が `null` に設定される必要があります。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.remove !== 'function') {
      return false;
    }
    test.add(500);
    test.remove(500);
    return test.inorder() == null;
  })()
);
```

`remove` メソッドは、葉ノードを木から削除する必要があります。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.remove !== 'function') {
      return false;
    }
    test.add(5);
    test.add(3);
    test.add(7);
    test.add(6);
    test.add(10);
    test.add(12);
    test.remove(3);
    test.remove(12);
    test.remove(10);
    return test.inorder().join('') == '567';
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
    },
    inorder: function() {
      if (this.root == null) {
        return null;
      } else {
        var result = new Array();
        function traverseInOrder(node) {
          if (node.left != null) {
            traverseInOrder(node.left);
          }
          result.push(node.value);
          if (node.right != null) {
            traverseInOrder(node.right);
          }
        }
        traverseInOrder(this.root);
        return result;
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
}
```

# --solutions--

```js
// solution required
```
