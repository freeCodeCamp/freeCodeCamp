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

`[23, 65, 98, 5, 13].myMap(item => item * 2)` 應該等於 `[46, 130, 196, 10, 26]`。

```js
const _test_s = [23, 65, 98, 5, 13];
const _callback = item => item * 2;
assert(JSON.stringify(_test_s.map(_callback)) === JSON.stringify(_test_s.myMap(_callback)));
```

`["naomi", "quincy", "camperbot"].myMap(element => element.toUpperCase())` 應該返回 `["NAOMI", "QUINCY", "CAMPERBOT"]`。

```js
const _test_s = ["naomi", "quincy", "camperbot"];
const _callback = element => element.toUpperCase();
assert(JSON.stringify(_test_s.map(_callback)) === JSON.stringify(_test_s.myMap(_callback)));
```

`[1, 1, 2, 5, 2].myMap((element, index, array) => array[index + 1] || array[0])` 應該返回 `[1, 2, 5, 2, 1]`。

```js
const _test_s = [1, 1, 2, 5, 2];
const _callback = (element, index, array) => array[index + 1] || array[0];
assert(JSON.stringify(_test_s.map(_callback)) === JSON.stringify(_test_s.myMap(_callback)));
```

你的代碼不應該使用 `map` 方法。

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
