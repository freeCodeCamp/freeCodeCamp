---
id: 587d8254367417b2b2512c6e
title: 对两组数据执行差异
challengeType: 1
videoUrl: ''
---

# --description--

在本练习中，我们将对两组数据进行区分。我们将在我们的`Set`数据结构上创建一个名为`difference` 。集合的差异应比较两组并返回第一组中不存在的项目。此方法应将另一个`Set`作为参数，并返回两个集的`difference` 。例如，如果`setA = ['a','b','c']`和`setB = ['a','b','d','e']` ，则setA和setB的差异为： `setA.difference(setB) = ['c']` 。

# --hints--

你的`Set`类应该有一个`difference`方法。

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.difference === 'function';
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
    var differenceSetAB = setA.difference(setB);
    return (
      differenceSetAB.size() === 2 &&
      DeepEqual(differenceSetAB.values(), ['a', 'b'])
    );
  })()
);
```

# --solutions--

