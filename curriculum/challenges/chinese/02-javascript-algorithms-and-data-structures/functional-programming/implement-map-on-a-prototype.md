---
id: 587d7b8f367417b2b2512b62
title: 在原型上实现 map 方法
challengeType: 1
forumTopicId: 301230
dashedName: implement-map-on-a-prototype
---

# --description--

之前用到了 `Array.prototype.map()` 方法（即 `map()`），通过 `map` 返回一个与调用它的数组长度相同的数组。 只要它的回调函数不改变原始数组，它就不会改变原始数组。

换句话说，`map` 是一个纯函数，它的输出仅取决于输入的数组和作为参数传入的回调函数。 此外，它接收另一个函数作为它的参数。

实现一个 `map`，加深对它的了解。 你可以用 `for` 循环或者 `Array.prototype.forEach()` 方法。

# --instructions--

写一个和 `Array.prototype.map()` 一样的 `Array.prototype.myMap()`。 不能使用内置的 `map` 方法。 在 `myMap` 方法内，可以使用 `this` 访问 `Array` 实例。

# --hints--

`new_s` 应该等于 `[46, 130, 196, 10]`。

```js
assert(JSON.stringify(new_s) === JSON.stringify([46, 130, 196, 10]));
```

不能使用 `map` 方法。

```js
assert(!code.match(/\.?[\s\S]*?map/g));
```

# --seed--

## --seed-contents--

```js
// The global variable
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  // Only change code below this line

  // Only change code above this line
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});
```

# --solutions--

```js
// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  // Only change code below this line
  for (var elem of this) {
    newArray.push(callback(elem));
  }
  // Only change code above this line
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});
```
