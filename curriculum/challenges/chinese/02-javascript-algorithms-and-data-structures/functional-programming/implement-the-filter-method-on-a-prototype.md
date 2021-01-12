---
id: 587d7b8f367417b2b2512b64
title: 在原型上实现 filter 方法
challengeType: 1
forumTopicId: 301231
dashedName: implement-the-filter-method-on-a-prototype
---

# --description--

为了加深对`filter`的理解，现在我们来自己实现一下`Array.prototype.filter()`方法。可以用`for`循环或`Array.prototype.forEach()`。

请注意：纯函数可以改变其作用域内定义的局部变量，但我们最好不要这样做。

# --instructions--

编写一个和`Array.prototype.filter()`功能一样的`Array.prototype.myFilter()`方法。你可以用`for`循环或`Array.prototype.forEach()`方法。

# --hints--

`new_s`应等于`[23, 65, 5]`。

```js
assert(JSON.stringify(new_s) === JSON.stringify([23, 65, 5]));
```

不能使用`filter`方法。

```js
assert(!code.match(/\.filter/g));
```

# --seed--

## --seed-contents--

```js
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  var newArray = [];
  // Only change code above this line
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
```

# --solutions--

```js
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  var newArray = [];
  // Only change code below this line
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) newArray.push(this[i]);
  }
  // Only change code above this line
  return newArray;
};

var new_s = s.myFilter(function(item) {
  return item % 2 === 1;
});
```
