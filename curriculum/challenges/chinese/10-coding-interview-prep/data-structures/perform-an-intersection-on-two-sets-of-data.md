---
id: 587d8253367417b2b2512c6d
title: 在两组数据上执行交集
challengeType: 1
videoUrl: ''
---

# --description--

在本练习中，我们将对两组数据执行交集。我们将在我们的`Set`数据结构上创建一个名为`intersection` 。集合的交集表示两个或更多集合共有的所有值。此方法应将另一个`Set`作为参数，并返回两个集合的`intersection` 。例如，如果`setA = ['a','b','c']`和`setB = ['a','b','d','e']` ，则setA和setB的交集为： `setA.intersection(setB) = ['a', 'b']` 。

# --hints--

您的`Set`类应该有一个`intersection`方法。

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.intersection === 'function';
  })()
);
```

收回了适当的收藏

```js
assert(
  (function () {
    var setA = new Set();
    var setB = new Set();
    setA.add('a');
    setA.add('b');
    setA.add('c');
    setB.add('c');
    setB.add('d');
    var intersectionSetAB = setA.intersection(setB);
    return (
      intersectionSetAB.size() === 1 && intersectionSetAB.values()[0] === 'c'
    );
  })()
);
```

# --solutions--

