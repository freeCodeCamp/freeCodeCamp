---
id: 587d8250367417b2b2512c5f
title: 创建一个堆栈类
challengeType: 1
videoUrl: ''
---

# --description--

在上一节中，我们讨论了堆栈是什么以及如何使用数组来表示堆栈。在本节中，我们将创建自己的堆栈类。虽然您可以使用数组来创建堆栈，但有时最好限制我们对堆栈的控制量。除了`push`和`pop`方法之外，堆栈还有其他有用的方法。让我们为我们的堆栈类添加一个`peek` ， `isEmpty`和`clear`方法。说明编写一个`push`方法，将元素推送到堆栈顶部，一个`pop`方法删除堆栈顶部的元素，一个`peek`堆栈中第一个元素的`peek`方法，一个`isEmpty`方法，用于检查是否存在stack是空的，是一个`clear`堆栈中所有元素的方法。通常堆栈没有这个，但我们添加了一个控制台记录集合的`print`助手方法。

# --hints--

你的`Stack`类应该有一个`push`方法。

```js
assert(
  (function () {
    var test = new Stack();
    return typeof test.push === 'function';
  })()
);
```

你的`Stack`类应该有一个`pop`方法。

```js
assert(
  (function () {
    var test = new Stack();
    return typeof test.pop === 'function';
  })()
);
```

你的`Stack`类应该有一个`peek`方法。

```js
assert(
  (function () {
    var test = new Stack();
    return typeof test.peek === 'function';
  })()
);
```

您的`Stack`类应该有一个`isEmpty`方法。

```js
assert(
  (function () {
    var test = new Stack();
    return typeof test.isEmpty === 'function';
  })()
);
```

你的`Stack`类应该有一个`clear`方法。

```js
assert(
  (function () {
    var test = new Stack();
    return typeof test.clear === 'function';
  })()
);
```

`peek`方法应该返回堆栈的顶部元素

```js
assert(
  (function () {
    var test = new Stack();
    test.push('CS50');
    return test.peek() === 'CS50';
  })()
);
```

`pop`方法应该删除并返回堆栈的顶部元素

```js
assert(
  (function () {
    var test = new Stack();
    test.push('CS50');
    return test.pop() === 'CS50';
  })()
);
```

如果堆栈不包含任何元素，则`isEmpty`方法应返回true

```js
assert(
  (function () {
    var test = new Stack();
    return test.isEmpty();
  })()
);
```

`clear`方法应该从堆栈中删除所有元素

```js
assert(
  (function () {
    var test = new Stack();
    test.push('CS50');
    test.clear();
    return test.isEmpty();
  })()
);
```

# --solutions--

