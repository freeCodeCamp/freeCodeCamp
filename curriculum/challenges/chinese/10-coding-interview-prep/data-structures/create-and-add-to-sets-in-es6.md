---
id: 587d8254367417b2b2512c70
title: 在ES6中创建和添加集
challengeType: 1
videoUrl: ''
---

# --description--

既然您已经完成了ES5，那么您将在ES6中执行类似的操作。这将相当容易。 ES6包含一个内置的数据结构`Set`现在包含了您手动编写的许多操作。我们来看看：创建一个新的空集： `var set = new Set();`您可以使用值创建一个集合： `var set = new Set(1);`您可以使用数组创建一个集合： `var set = new Set([1, 2, 3]);`创建集合后，可以使用`add`方法添加所需的值：

> var set = new Set（\[1,2,3]）;  
> set.add（\[4,5,6]）;

提醒一下，集合是一种不能包含重复值的数据结构：

> var set = new Set（\[1,2,3,1,2,3]）;  
> // set仅包含\[1,2,3]

# --instructions--

在本练习中，返回一个具有以下值的集合： `1, 2, 3, 'Taco', 'Cat', 'Awesome'`

# --hints--

您的`Set`应该只包含值`1, 2, 3, Taco, Cat, Awesome` 。

```js
assert(
  (function () {
    var test = checkSet();
    return (
      test.size == 6 &&
      test.has(1) &&
      test.has(2) &&
      test.has(3) &&
      test.has('Taco') &&
      test.has('Cat') &&
      test.has('Awesome')
    );
  })()
);
```

# --solutions--

