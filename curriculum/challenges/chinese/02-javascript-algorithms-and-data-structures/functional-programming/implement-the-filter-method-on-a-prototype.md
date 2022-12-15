---
id: 587d7b8f367417b2b2512b64
title: 在原型上实现 filter 方法
challengeType: 1
forumTopicId: 301231
dashedName: implement-the-filter-method-on-a-prototype
---

# --description--

为了加深对 `filter` 的理解，可以自己实现一个。 可以用 `for` 循环或 `Array.prototype.forEach()`。

# --instructions--

编写一个和 `Array.prototype.filter()` 功能一样的 `Array.prototype.myFilter()` 方法。 不能使用内置的 `filter` 方法。 在 `myFilter` 方法内部，可以使用 `this` 访问 `Array` 实例。

# --hints--

`[23, 65, 98, 5, 13].myFilter(item => item % 2)` 应该等于 `[23, 65, 5, 13]`。

```js
const _test_s = [23, 65, 98, 5, 13];
const _callback = item => item % 2;
assert(JSON.stringify(_test_s.filter(_callback)) === JSON.stringify(_test_s.myFilter(_callback)));
```

`["naomi", "quincy", "camperbot"].myFilter(element => element === "naomi")` 应该返回 `["naomi"]`。

```js
const _test_s = ["naomi", "quincy", "camperbot"];
const _callback = element => element === "naomi";
assert(JSON.stringify(_test_s.filter(_callback)) === JSON.stringify(_test_s.myFilter(_callback)));
```

`[1, 1, 2, 5, 2].myFilter((element, index, array) => array.indexOf(element) === index)` 应该返回 `[1, 2, 5]`。

```js
const _test_s = [1, 1, 2, 5, 2];
const _callback = (element, index, array) => array.indexOf(element) === index;
assert(JSON.stringify(_test_s.filter(_callback)) === JSON.stringify(_test_s.myFilter(_callback)));
```

你的代码不应该使用 `filter` 方法。

```js
assert(!code.match(/\.?[\s\S]*?filter/g));
```

# --seed--

## --seed-contents--

```js
Array.prototype.myFilter = function(callback) {
  const newArray = [];
  // Only change code below this line

  // Only change code above this line
  return newArray;
};
```

# --solutions--

```js
Array.prototype.myFilter = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) newArray.push(this[i]);
  }
  return newArray;
};

// Test case
const s = [23, 65, 98, 5];
const odd_s = s.myFilter(item => item % 2 === 1);
```
