---
id: 587d825a367417b2b2512c88
title: 反转双重链接列表
challengeType: 1
videoUrl: ''
---

# --description--

让我们为我们的双向链表创建一个名为reverse的方法，它可以反转列表。一旦执行该方法，头部应指向前一个尾部，尾部应指向前一个头部。现在，如果我们从头到尾遍历列表，我们应该以与原始列表相反的顺序来满足节点。尝试反转空列表应返回null。

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

DoublyLinkedList有一个名为reverse的方法。

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    if (test.reverse == undefined) {
      return false;
    }
    return typeof test.reverse == 'function';
  })()
);
```

反转空列表将返回null。

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    return test.reverse() == null;
  })()
);
```

反向方法反转列表。

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    test.add(58);
    test.add(61);
    test.add(32);
    test.reverse();
    return test.print().join('') == '326158';
  })()
);
```

当列表反转时，正确维护下一个和上一个引用。

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    test.add(11);
    test.add(22);
    test.add(33);
    test.reverse();
    return test.printReverse().join('') == '112233';
  })()
);
```

# --solutions--

