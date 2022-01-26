---
id: 5cc0c1b32479e176caf3b422
title: 木が二分探索木であるかを調べる
challengeType: 1
forumTopicId: 301624
dashedName: check-if-tree-is-binary-search-tree
---

# --description--

二分探索木がどのようなものかはもう分かったので、このチャレンジでは、ある木が二分探索木であるかどうかを知る方法を学びます。

二分探索木の主な特徴は、ノードが整然と順序付けられることです。 ノードは、子ノードの値が親ノード以上なのか (右)、親ノードより小さいのか (左) に基づいて、最大 2 つの子ノード (右か左、またはその両方) を持ちます。

# --instructions--

このチャレンジでは、あなたの木に対するユーティリティを作成します。 木を入力として受け取り、その木が二分探索木であるかどうかのブール値を返す、JavaScript メソッド `isBinarySearchTree` を記述してください。 可能な限り再帰を使用してください。

# --hints--

二分探索木は、`isBinarySearchTree()` で調べられたときに true を返す必要があります。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    test.push(1);
    test.push(5);
    test.push(3);
    test.push(2);
    test.push(4);
    return isBinarySearchTree(test) == true;
  })()
);
```

`isBinarySearchTree()` は、二分探索木でない木を調べたときに false を返す必要があります。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    test.push(1);
    test.root.left = new Node(1);
    return isBinarySearchTree(test) == false;
  })()
);
```

# --seed--

## --after-user-code--

```js
BinarySearchTree.prototype.push = function(val) {
  var root = this.root;

  if (!root) {
    this.root = new Node(val);
    return;
  }

  var currentNode = root;
  var newNode = new Node(val);

  while (currentNode) {
    if (val < currentNode.value) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        break;
      } else {
        currentNode = currentNode.left;
      }
    } else {
      if (!currentNode.right) {
        currentNode.right = newNode;
        break;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
};
```

## --seed-contents--

```js
var displayTree = (tree) => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
}
function isBinarySearchTree(tree) {
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
}
function isBinarySearchTree(tree) {
  if (tree.root == null) {
    return null;
  } else {
    let isBST = true;
    function checkTree(node) {
      if (node.left != null) {
        const left = node.left;
        if (left.value >= node.value) {
          isBST = false;
        } else {
          checkTree(left);
        }
      }
      if (node.right != null) {
        const right = node.right;
        if (right.value < node.value) {
          isBST = false;
        } else {
          checkTree(right);
        }
      }
    }
    checkTree(tree.root);
    return isBST;
  }
};
```
