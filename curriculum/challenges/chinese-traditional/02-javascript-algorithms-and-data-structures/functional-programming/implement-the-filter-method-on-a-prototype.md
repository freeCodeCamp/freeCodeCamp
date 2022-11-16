---
id: 587d7b8f367417b2b2512b64
title: 在原型上實現 filter 方法
challengeType: 1
forumTopicId: 301231
dashedName: implement-the-filter-method-on-a-prototype
---

# --description--

爲了加深對 `filter` 的理解，可以自己實現一個。 可以用 `for` 循環或 `Array.prototype.forEach()`。

# --instructions--

編寫一個和 `Array.prototype.filter()` 功能一樣的 `Array.prototype.myFilter()` 方法。 不能使用內置的 `filter` 方法。 在 `myFilter` 方法內部，可以使用 `this` 訪問 `Array` 實例。

# --hints--

`[23, 65, 98, 5, 13].myFilter(item => item % 2)` should equal `[23, 65, 5, 13]`.

```js
const _test_s = [23, 65, 98, 5, 13];
const _callback = item => item % 2;
assert(JSON.stringify(_test_s.filter(_callback)) === JSON.stringify(_test_s.myFilter(_callback)));
```

不應該使用 `filter` 方法。

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
    if (callback(this[i])) newArray.push(this[i]);
  }
  return newArray;
};

// Test case
const s = [23, 65, 98, 5];
const odd_s = s.myFilter(item => item % 2 === 1);
```
