---
id: 587d8258367417b2b2512c81
title: 在二叉搜索树中删除具有一个子节点的节点
challengeType: 1
videoUrl: ''
---

# --description--

现在我们可以删除叶子节点，让我们继续第二种情况：删除一个子节点。对于这种情况，假设我们有一棵树，其中包含以下节点1 - 2 - 3，其中1是根。要删除2，我们只需要在1到3中做出正确的引用。更一般地说，为了删除只有一个子节点的节点，我们将该节点的父引用作为树中的下一个节点。说明：我们在`remove`方法中提供了一些代码，用于完成上一次挑战中的任务。我们找到要删除的目标及其父节点，并定义目标节点具有的子节点数。让我们在这里为仅有一个子节点的目标节点添加下一个案例。在这里，我们必须确定单个子节点是树中的左或右分支，然后在父节点中设置正确的引用以指向此节点。另外，让我们考虑目标是根节点的情况（这意味着父节点将为`null` ）。只要通过测试，请随意用自己的代码替换所有入门代码。

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

二叉搜索树有一个名为`remove`的方法。

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

尝试删除不存在的元素将返回`null` 。

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

如果根节点没有子节点，则删除它会将根节点设置为`null` 。

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

`remove`方法从树中删除叶节点

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

`remove`方法删除具有一个子节点的节点。

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
    test.add(-1);
    test.add(3);
    test.add(7);
    test.add(16);
    test.remove(16);
    test.remove(7);
    test.remove(3);
    return test.inorder().join('') == '-1';
  })()
);
```

删除具有两个节点的树中的根将第二个节点设置为根。

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
    test.add(27);
    test.remove(15);
    return test.inorder().join('') == '27';
  })()
);
```

# --solutions--

