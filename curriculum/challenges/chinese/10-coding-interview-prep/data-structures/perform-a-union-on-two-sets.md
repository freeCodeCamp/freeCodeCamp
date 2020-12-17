---
id: 587d8253367417b2b2512c6c
title: 在两个集上执行联合
challengeType: 1
videoUrl: ''
---

# --description--

在本练习中，我们将对两组数据执行联合。我们将在我们的`Set`数据结构上创建一个名为`union` 。此方法应将另一个`Set`作为参数，并返回两个集合的`union`集，不包括任何重复值。例如，如果`setA = ['a','b','c']`和`setB = ['a','b','d','e']` ，则setA和setB的并集为： `setA.union(setB) = ['a', 'b', 'c', 'd', 'e']` 。

# --hints--

你的`Set`类应该有一个`union`方法。

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.union === 'function';
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
    var unionSetAB = setA.union(setB);
    var final = unionSetAB.values();
    return (
      final.indexOf('a') !== -1 &&
      final.indexOf('b') !== -1 &&
      final.indexOf('c') !== -1 &&
      final.indexOf('d') !== -1 &&
      final.length === 4
    );
  })()
);
```

# --solutions--

