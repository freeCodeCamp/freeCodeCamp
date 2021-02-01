---
id: 587d8257367417b2b2512c7c
title: 检查二进制搜索树中是否存在元素
challengeType: 1
videoUrl: ''
dashedName: check-if-an-element-is-present-in-a-binary-search-tree
---

# --description--

现在我们对二进制搜索树有了一般意义，让我们更详细地讨论它。二进制搜索树为平均情况下的查找，插入和删除的常见操作提供对数时间，并且在最坏情况下提供线性时间。为什么是这样？这些基本操作中的每一个都要求我们在树中找到一个项目（或者在插入的情况下找到它应该去的地方），并且由于每个父节点处的树结构，我们向左或向右分支并且有效地排除了一半的大小剩下的树。这使得搜索与树中节点数的对数成比例，这在平均情况下为这些操作创建对数时间。好的，但最坏的情况呢？那么，可考虑从以下值建构一棵树，将它们从左至右： `10` ， `12` ， `17` ， `25` 。根据我们的规则二叉搜索树，我们将增加`12`到右侧`10` ， `17` ，以这样的权利，以及`25`到这一权利。现在我们的树类似于一个链表，并且遍历它以找到`25`将要求我们以线性方式遍历所有项目。因此，在最坏的情况下，线性时间。这里的问题是树是不平衡的。我们将更多地了解这在以下挑战中意味着什么。说明：在此挑战中，我们将为树创建一个实用程序。编写一个方法`isPresent` ，它接受一个整数值作为输入，并在二叉搜索树中返回该值是否存在的布尔值。

# --hints--

存在`BinarySearchTree`数据结构。

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

二叉搜索树有一个名为`isPresent`的方法。

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

`isPresent`方法正确检查添加到树中的元素是否存在。

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

`isPresent`处理树为空的情况。

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
