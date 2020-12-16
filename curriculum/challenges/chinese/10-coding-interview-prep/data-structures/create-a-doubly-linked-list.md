---
id: 587d825a367417b2b2512c87
title: 创建双向链接列表
challengeType: 1
videoUrl: ''
---

# --description--

到目前为止，我们创建的所有链接列表都是单链表。在这里，我们将创建一个<dfn>双向链表</dfn> 。顾名思义，双向链表中的节点引用了列表中的下一个和上一个节点。这允许我们在两个方向上遍历列表，但它还需要使用更多内存，因为每个节点必须包含对列表中前一个节点的附加引用。

# --instructions--

我们提供了一个`Node`对象并启动了我们的`DoublyLinkedList` 。让我们将两个方法添加到名为`add` and `remove`双向链表`remove` 。 `add`方法应该将给定元素添加到列表中，而`remove`方法应该删除列表中所有出现的给定元素。编写这些方法时要小心处理任何可能的边缘情况，例如删除第一个或最后一个元素。此外，删除空列表中的任何项应返回`null` 。

# --hints--

存在DoublyLinkedList数据结构。

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    return typeof test == 'object';
  })()
);
```

DoublyLinkedList有一个名为add的方法。

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    if (test.add == undefined) {
      return false;
    }
    return typeof test.add == 'function';
  })()
);
```

DoublyLinkedList有一个名为remove的方法。

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    if (test.remove == undefined) {
      return false;
    }
    return typeof test.remove == 'function';
  })()
);
```

从空列表中删除项目将返回null。

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    return test.remove(100) == null;
  })()
);
```

add方法将项添加到列表中。

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    test.add(5);
    test.add(6);
    test.add(723);
    return test.print().join('') == '56723';
  })()
);
```

每个节点都跟踪前一个节点。

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    test.add(50);
    test.add(68);
    test.add(73);
    return test.printReverse().join('') == '736850';
  })()
);
```

可以从列表中删除第一个项目。

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    test.add(25);
    test.add(35);
    test.add(60);
    test.remove(25);
    return test.print().join('') == '3560';
  })()
);
```

最后一项可以从列表中删除。

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    test.add(25);
    test.add(35);
    test.add(60);
    test.remove(60);
    return test.print().join('') == '2535';
  })()
);
```

# --solutions--

