---
id: 587d7b8f367417b2b2512b62
title: 在原型上實現 map 方法
challengeType: 1
forumTopicId: 301230
dashedName: implement-map-on-a-prototype
---

# --description--

之前用到了 `Array.prototype.map()` 方法（即 `map()`），通過 `map` 返回一個與調用它的數組長度相同的數組。 只要它的回調函數不改變原始數組，它就不會改變原始數組。

換句話說，`map` 是一個純函數，它的輸出僅取決於輸入的數組和作爲參數傳入的回調函數。 此外，它接收另一個函數作爲它的參數。

實現一個 `map`，加深對它的瞭解。 你可以用 `for` 循環或者 `Array.prototype.forEach()` 方法。

# --instructions--

寫一個和 `Array.prototype.map()` 一樣的 `Array.prototype.myMap()`。 不能使用內置的 `map` 方法。 在 `myMap` 方法內，可以使用 `this` 訪問 `Array` 實例。

# --hints--

`new_s` 應該等於 `[46, 130, 196, 10]`。

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
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // Only change code below this line

  // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});
```

# --solutions--

```js
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  for (const elem of this) {
    newArray.push(callback(elem));
  }
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});
```
