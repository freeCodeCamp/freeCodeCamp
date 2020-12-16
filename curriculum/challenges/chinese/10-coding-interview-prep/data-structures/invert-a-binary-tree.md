---
id: 587d8259367417b2b2512c83
title: 反转二叉树
challengeType: 1
videoUrl: ''
---

# --description--

这里我们将创建一个反转二叉树的函数。给定二叉树，我们希望生成一个新树，它等效于该树的镜像。与原始树的inorder遍历相比，在倒置树上运行inorder遍历将以相反的顺序探索节点。在我们的二叉树上编写一个名为`invert`的方法。调用此方法应该反转当前树结构。理想情况下，我们希望在线性时间内就地执行此操作。也就是说，我们只访问每个节点一次，我们在不使用任何额外内存的情况下修改现有的树结构。祝你好运！

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

二叉搜索树有一个名为`invert`的方法。

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

`invert`方法正确地反转树结构。

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

反转空树返回`null` 。

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

# --solutions--

