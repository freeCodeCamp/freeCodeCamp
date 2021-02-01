---
id: 8d1323c8c441eddfaeb5bdef
title: 创建一个Set类
challengeType: 1
videoUrl: ''
dashedName: create-a-set-class
---

# --description--

在接下来的几个练习中，我们将创建一个函数来模拟一个名为“Set”的数据结构。 Set类似于数组，但不能包含重复值。 Set的典型用途是简单地检查项目是否存在。这可以用对象实现，例如：

> var set = new Object（）;  
> set.foo = true;  
> //看看我们的集合中是否存在foo：  
> console.log（set.foo）// true

在接下来的几个练习中，我们将从头开始构建一个全功能的Set。对于本练习，只要该值中尚不存在该值，就创建一个将值添加到set集合的函数。例如：

> this.add = function（element）{  
> //一些代码来为集合添加值  
> }

如果成功添加该值，则该函数应返回`true`否则返回`false` 。

# --hints--

您的`Set`类应该有一个`add`方法。

```js
assert(
  (function () {
    var test = new Set();
    return typeof test.add === 'function';
  })(),
  'Your <code>Set</code> class should have an <code>add</code> method.'
);
```

您的`add`方法不应添加重复值。

```js
assert(
  (function () {
    var test = new Set();
    test.add('a');
    test.add('b');
    test.add('a');
    var vals = test.values();
    return vals[0] === 'a' && vals[1] === 'b' && vals.length === 2;
  })(),
  'Your <code>add</code> method should not add duplicate values.'
);
```

成功添加值后， `add`方法应返回`true` 。

```js
assert(
  (function () {
    var test = new Set();
    var result = test.add('a');
    return result != undefined && result === true;
  })(),
  'Your <code>add</code> method should return <code>true</code> when a value has been successfully added.'
);
```

`add`重复值时， `add`方法应返回`false` 。

```js
assert(
  (function () {
    var test = new Set();
    test.add('a');
    var result = test.add('a');
    return result != undefined && result === false;
  })(),
  'Your <code>add</code> method should return <code>false</code> when a duplicate value is added.'
);
```

# --seed--

## --seed-contents--

```js
class Set {
  constructor() {
    // Dictionary will hold the items of our set
    this.dictionary = {};
    this.length = 0;
  }

  // This method will check for the presence of an element and return true or false
  has(element) {
    return this.dictionary[element] !== undefined;
  }

  // This method will return all the values in the set
  values() {
    return Object.values(this.dictionary);
  }

  // Only change code below this line
  
  // Only change code above this line
}
```

# --solutions--

```js
class Set {
  constructor() {
    this.dictionary = {};
    this.length = 0;
  }

  has(element) {
    return this.dictionary[element] !== undefined;
  }

  values() {
    return Object.values(this.dictionary);
  }

  add(element) {
    if (!this.has(element)) {
      this.dictionary[element] = element;
      this.length++;
      return true;
    }

    return false;
  }

  remove(element) {
    if (this.has(element)) {
      delete this.dictionary[element];
      this.length--;
      return true;
    }

    return false;
  }

  size() {
    return this.length;
  }
}
```
