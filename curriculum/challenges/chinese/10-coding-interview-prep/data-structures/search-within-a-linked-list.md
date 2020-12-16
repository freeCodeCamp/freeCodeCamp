---
id: 587d8251367417b2b2512c64
title: 在链接列表中搜索
challengeType: 1
videoUrl: ''
---

# --description--

让我们为链表类添加一些更有用的方法。如果我们可以判断我们的列表是否为空，那么它是否有用，就像我们的`Stack`和`Queue`类一样？我们还应该能够在链表中找到特定元素。遍历数据结构是你想要进行大量练习的东西！让我们创建一个`indexOf`方法，该方法将`element`作为参数，并在链表中返回该元素的`index` 。如果在链接列表中找不到该元素，则返回`-1` 。让我们实现一个相反的方法：一个`elementAt`方法，它将`index`作为参数并返回给定`index`处的`element` 。如果未找到任何`element` ，则返回`undefined` 。

# --instructions--

编写一个检查链表是否为空的`isEmpty`方法，返回给定元素`index`的`indexOf`方法，以及返回给定`index.`处`element`的`elementAt` `index.`

# --hints--

您的`LinkedList`类应该有一个`indexOf`方法。

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.indexOf === 'function';
  })()
);
```

您的`LinkedList`类应该有一个`elementAt`方法。

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.elementAt === 'function';
  })()
);
```

您的`size`方法应返回链表的长度

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.size() === 3;
  })()
);
```

`indexOf`方法应该返回给定元素的索引。

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.indexOf('kitten') === 2;
  })()
);
```

您的`elementAt`方法应该返回给定索引处的元素。

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.elementAt(1) === 'dog';
  })()
);
```

# --solutions--

