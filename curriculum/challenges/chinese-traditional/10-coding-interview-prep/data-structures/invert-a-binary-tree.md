---
id: 587d8259367417b2b2512c83
title: 反轉二叉樹
challengeType: 1
forumTopicId: 301704
dashedName: invert-a-binary-tree
---

# --description--

這裏我們將創建一個反轉二叉樹的函數。 給定二叉樹，我們希望生成一個新樹，它等效於該樹的鏡像。 與原始樹的中序遍歷相比，在倒轉樹上運行中序遍歷將以相反的順序探索節點。 在我們的二叉樹上編寫一個名爲 `invert` 的方法。 調用此方法應該反轉當前樹結構。 理想情況下，我們希望在線性時間內就地執行此操作。 也就是說，我們只訪問每個節點一次，我們在不使用任何額外內存的情況下修改現有的樹結構。 祝你好運！

# --hints--

存在 `BinarySearchTree` 數據結構。

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

二叉搜索樹有一個名爲 `invert` 的方法。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.invert == 'function';
  })()
);
```

`invert` 方法正確地反轉樹結構。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.invert !== 'function') {
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
    test.invert();
    return test.inorder().join('') == '877345348741';
  })()
);
```

反轉空樹應該返回 `null`。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.invert !== 'function') {
      return false;
    }
    return test.invert() == null;
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
            return searchTree(node.left)
          };
        } else if (value > node.value) {
          if (node.right == null) {
            node.right = new Node(value);
            return;
          } else if (node.right != null) {
            return searchTree(node.right);
          };
        } else {
          return null;
        };
      }

      var node = this.root;
      if (node == null) {
        this.root = new Node(value);
        return;
      } else {
        return searchTree(node);
      };
    },
    inorder: function() {
      if (this.root == null) {
        return null;
      } else {
        var result = new Array();
        function traverseInOrder(node) {
          if (node.left != null) {
            traverseInOrder(node.left);
          };
          result.push(node.value);
          if (node.right != null) {
            traverseInOrder(node.right);
          };
        }
        traverseInOrder(this.root);
        return result;
      };
    }
  }
);
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
  // Only change code below this line
  this.invert = function(node = this.root) {
    if (node) {
      const temp = node.left;
      node.left = node.right;
      node.right = temp;
      this.invert(node.left);
      this.invert(node.right);
    }
    return node;
  }
    // Only change code above this line
}
```
