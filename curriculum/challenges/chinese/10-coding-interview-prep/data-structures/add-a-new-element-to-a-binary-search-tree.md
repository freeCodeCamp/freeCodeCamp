---
id: 587d8257367417b2b2512c7b
title: 将新元素添加到二叉搜索树
challengeType: 1
forumTopicId: 301618
dashedName: add-a-new-element-to-a-binary-search-tree
---

# --description--

这一系列的挑战将介绍树形数据结构。 树是计算机科学中一个重要的、通用的数据结构。 当然，它们的名称来自这样一个事实：当可视化时，它们看起来很像我们在自然界中熟悉的树木。 树数据结构从一个节点（通常称为根）开始，并从此处分支到其他节点，每个节点可能具有更多的子节点，依此类推。 数据结构通常以根节点为顶点进行可视化；你可以把它想象成一棵倒过来的自然树。

首先，让我们描述一下我们将遇到的关于树的一些常见术语。 根节点（root）是树的顶部。 树中的数据点称为节点（node）。 分支通向其他节点的节点称为分支通向的节点（即子节点）的父节点。 如你所料，其他更复杂的家庭术语也适用。 子树指的是某一特定节点的所有后代，分支可称为边，而叶子节点是位于树的末端的且没有子节点的节点。 最后，请注意，树本质上是递归的数据结构。 也就是说，一个节点的任何子节点都是其自己的子树的父节点，依此类推。 在为常见的树操作设计算法时，树的递归性质很重要。

To begin, we will discuss a particular type of tree, the binary tree. 实际上，我们将讨论特定的二叉树，即二叉搜索树。 让我们来看看这意味着什么。 虽然树形数据结构在一个节点上可以有任意数量的分支，但二叉树每个节点只能有两个分支。 此外，一个二叉搜索树相对于其子子树是有序的，即对于一个节点而言，其左子树中每个节点的值都小于或等于该节点的值，而其右子树中每个节点的值都大于或等于该节点的值。 为了更好地理解这种关系，将这种关系形象化是非常有帮助的：

<div style='width: 100%; display: flex; justify-content: center; align-items: center;'><img alt="an example of a binairy search tree" style='width: 100%; max-width: 350px; background-color: var(--gray-05);' src='https://user-images.githubusercontent.com/18563015/32136009-1e665d98-bbd6-11e7-9133-63184f9f9182.png'></div>

现在，这种有序的关系是非常容易看到的。 注意，根节点 8 左边的每个值都小于 8，右边的每个值都大于 8。 还要注意的是，这种关系也适用于每个子树。 例如，第一个左孩子节点是一个子树。 3 是父节点，它正好有两个子节点——根据二进制搜索树的规则，我们甚至不用看就知道这个节点的左子节点（以及它的任何子节点）都将小于 3，右子节点（以及它的任何子节点）都将大于 3（但也小于根结点的值），依此类推。

二叉搜索树是非常常见且有用的数据结构，因为它们在几种常见操作（例如查找、插入和删除）的平均情况下提供对数的时间复杂度。

# --instructions--

我们将从简单的内容开始。 我们在这里定义了一个二叉搜索树结构的骨架，此外还有一个为我们的树创建节点的函数。 注意观察每个节点可能有一个左值和右值。 如果子树存在，它们将被分配给对应的子树。 In our binary search tree, you will create a method to add new values to the tree. 该方法应该被称为`add` ，它应该接受一个整数值来添加到树中。 注意保持二叉搜索树的不变量：每个左子项中的值应小于或等于父值，并且每个右子项中的值应大于或等于父值。 在这里，让我们确保我们的树不会含有重复的值。 如果我们尝试添加已存在的值，则该方法应返回`null` 。 否则，如果添加成功，则应返回`undefined` 。

**提示：** 树是自然的递归数据结构！

# --hints--

存在 `BinarySearchTree` 的数据结构。

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

二叉搜索树应该有一个名为 `add` 的方法。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.add == 'function';
  })()
);
```

添加的方法应该根据二叉搜索树的规则来添加元素。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.add !== 'function') {
      return false;
    }
    test.add(4);
    test.add(1);
    test.add(1);
    test.add(7);
    test.add(87);
    test.add(34);
    test.add(45);
    test.add(73);
    test.add(8);
    const expectedResult = [1, 4, 7, 8, 34, 45, 73, 87];
    const result = test.inOrder();
    return expectedResult.toString() === result.toString();
  })()
);
```

添加一个已经存在的元素应该返回 `null`。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.add !== 'function') {
      return false;
    }
    test.add(4);
    return test.add(4) == null;
  })()
);
```

# --seed--

## --after-user-code--

```js
BinarySearchTree.prototype = Object.assign(
  BinarySearchTree.prototype,
  {
    inOrder() {
      if (!this.root) {
        return null;
      }
      var result = new Array();
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.value);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
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
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  this.add = function(element) {
    let current = this.root;
    if (!current) {
      this.root = new Node(element);
      return;
    } else {
      const searchTree = function(current) {
        if (current.value > element) {
          if (current.left) {
            return searchTree(current.left);
          } else {
            current.left = new Node(element);
            return;
          }
        } else if (current.value < element) {
          if (current.right) {
            return searchTree(current.right);
          } else {
            current.right = new Node(element);
            return;
          }
        } else {
          return null;
        }
      };
      return searchTree(current);
    }
  };
}
```
