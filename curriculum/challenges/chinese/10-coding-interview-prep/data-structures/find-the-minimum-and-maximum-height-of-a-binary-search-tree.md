---
id: 587d8257367417b2b2512c7d
title: 找到二叉搜索树的最小和最大高度
challengeType: 1
videoUrl: ''
---

# --description--

在最后一个挑战中，我们描述了树可能变得不平衡的情景。为了理解平衡的概念，让我们看看另一个树属性：高度。树中的高度表示从根节点到任何给定叶节点的距离。高度分支的树结构中的不同路径可以具有不同的高度，但是对于给定的树，将具有最小和最大高度。如果树是平衡的，则这些值最多相差一个。这意味着在平衡树中，所有叶节点都存在于同一级别中，或者如果它们不在同一级别内，则它们最多相隔一个级别。平衡的属性对于树很重要，因为它决定了树操作的效率。正如我们在上一次挑战中所解释的那样，我们面临严重不平衡树木的最坏情况时间复杂性。自平衡树通常用于在具有动态数据集的树中解决此问题。这些的常见例子包括AVL树，红黑树和B树。这些树都包含额外的内部逻辑，当插入或删除创建不平衡状态时，它会重新平衡树。注意：与height相似的属性是depth，它指的是给定节点距根节点的距离。说明：为我们的二叉树编写两种方法： `findMinHeight`和`findMaxHeight` 。这些方法应分别返回给定二叉树内最小和最大高度的整数值。如果节点为空，请为其指定高度`-1` （这是基本情况）。最后，添加第三个方法`isBalanced` ，它返回`true`或`false`具体取决于树是否平衡。您可以使用刚才编写的前两种方法来确定这一点。

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

二叉搜索树有一个名为`findMinHeight`的方法。

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

二叉搜索树有一个名为`findMaxHeight`的方法。

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

二叉搜索树有一个名为`isBalanced`的方法。

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

`findMinHeight`方法返回树的最小高度。

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

`findMaxHeight`方法返回树的最大高度。

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

空树返回高度`-1` 。

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

如果树是平衡二叉搜索树，则`isBalanced`方法返回true。

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
    return !test.isBalanced();
  })()
);
```

# --solutions--

