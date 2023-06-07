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

`[23, 65, 98, 5, 13].myMap(item => item * 2)` 应该等于 `[46, 130, 196, 10, 26]`。

```js
const _test_s = [23, 65, 98, 5, 13];
const _callback = item => item * 2;
assert(JSON.stringify(_test_s.map(_callback)) === JSON.stringify(_test_s.myMap(_callback)));
```

`["naomi", "quincy", "camperbot"].myMap(element => element.toUpperCase())` 应该返回 `["NAOMI", "QUINCY", "CAMPERBOT"]`。

```js
const _test_s = ["naomi", "quincy", "camperbot"];
const _callback = element => element.toUpperCase();
assert(JSON.stringify(_test_s.map(_callback)) === JSON.stringify(_test_s.myMap(_callback)));
```

`[1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0])` 应该返回 `[1, 2, 5, 2, 1]`。

```js
const _test_s = [1, 1, 2, 5, 2];
const _callback = (element, index, array) => array[index + 1] || array[0];
assert(JSON.stringify(_test_s.map(_callback)) === JSON.stringify(_test_s.myMap(_callback)));
```

你的代码不应该使用 `map` 方法。

```js
assert(!code.match(/\.?[\s\S]*?map/g));
```

# --seed--

## --seed-contents--

```js
Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line

  // Only change code above this line
  return newArray;
};
```

# --solutions--

```js
Array.prototype.myMap = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
};

// Test case
const s = [23, 65, 98, 5];
const doubled_s = s.myMap(item => item * 2);
```
