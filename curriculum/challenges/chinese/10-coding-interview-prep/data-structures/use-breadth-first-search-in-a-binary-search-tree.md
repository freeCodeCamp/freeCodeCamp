---
id: 587d8258367417b2b2512c7f
title: 在二叉搜索树中使用广度优先搜索
challengeType: 1
videoUrl: ''
---

# --description--

这里我们将介绍另一种树遍历方法：广度优先搜索。与上一次挑战中的深度优先搜索方法相比，广度优先搜索在继续进入下一级别之前探索树中给定级别中的所有节点。通常，队列在广度优先搜索算法的设计中用作辅助数据结构。在此方法中，我们首先将根节点添加到队列中。然后我们开始一个循环，我们将队列中的第一个项目出列，将其添加到一个新数组，然后检查它们的子子树。如果它的孩子不是空的，他们每个都被排队。此过程将继续，直到队列为空。说明：让我们在树中创建一个名为`levelOrder`的广度优先搜索方法。此方法应返回一个包含所有树节点值的数组，并以广度优先的方式进行探索。确保返回数组中的值，而不是节点本身。应从左到右遍历一个级别。接下来，让我们编写一个名为`reverseLevelOrder`的类似方法，它在每个级别执行相同的搜索，但是反向（从右到左）。

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

二叉搜索树有一个名为`levelOrder`的方法。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.levelOrder == 'function';
  })()
);
```

二叉搜索树有一个名为`reverseLevelOrder`的方法。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    return typeof test.reverseLevelOrder == 'function';
  })()
);
```

`levelOrder`方法返回按级别顺序探索的树节点值的数组。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.levelOrder !== 'function') {
      return false;
    }
    test.add(7);
    test.add(1);
    test.add(9);
    test.add(0);
    test.add(3);
    test.add(8);
    test.add(10);
    test.add(2);
    test.add(5);
    test.add(4);
    test.add(6);
    return test.levelOrder().join('') == '719038102546';
  })()
);
```

`reverseLevelOrder`方法返回以反向级别顺序探索的树节点值的数组。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.reverseLevelOrder !== 'function') {
      return false;
    }
    test.add(7);
    test.add(1);
    test.add(9);
    test.add(0);
    test.add(3);
    test.add(8);
    test.add(10);
    test.add(2);
    test.add(5);
    test.add(4);
    test.add(6);
    return test.reverseLevelOrder().join('') == '791108305264';
  })()
);
```

`levelOrder`方法为空树返回`null` 。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.levelOrder !== 'function') {
      return false;
    }
    return test.levelOrder() == null;
  })()
);
```

`reverseLevelOrder`方法为空树返回`null` 。

```js
assert(
  (function () {
    var test = false;
    if (typeof BinarySearchTree !== 'undefined') {
      test = new BinarySearchTree();
    } else {
      return false;
    }
    if (typeof test.reverseLevelOrder !== 'function') {
      return false;
    }
    return test.reverseLevelOrder() == null;
  })()
);
```

# --solutions--

