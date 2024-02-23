---
id: 587d7da9367417b2b2512b69
title: 使用 sort 方法按字母順序給數組排序
challengeType: 1
forumTopicId: 18303
dashedName: sort-an-array-alphabetically-using-the-sort-method
---

# --description--

`sort` 方法可以根據回調函數對數組元素進行排序。

舉個例子：

```js
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

ascendingOrder([1, 5, 2, 3, 4]);
```

這將返回值 `[1, 2, 3, 4, 5]`。

```js
function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

reverseAlpha(['l', 'h', 'z', 'b', 's']);
```

這將返回值 `['z', 's', 'l', 'h', 'b']`。

JavaScript 的默認排序方法是 Unicode 值順序排序，有時可能會得到意想不到的結果。 因此，建議提供一個回調函數來指定如何對數組項目排序。 這個回調函數通常叫做 `compareFunction`，它根據 `compareFunction` 的返回值決定數組元素的排序方式： 如果兩個元素 `a` 和 `b`，`compareFunction(a,b)` 返回一個比 0 小的值，那麼 `a` 會在 `b` 的前面。 如果兩個元素 `a` 和 `b`，`compareFunction(a,b)` 返回一個比 0 大的值，那麼 `b` 會在 `a` 的前面。 如果兩個元素 `a` 和 `b`，`compareFunction(a,b)` 返回等於 0 的值，那麼 `a` 和 `b` 的位置保持不變。

# --instructions--

在 `alphabeticalOrder` 函數中使用 `sort` 方法對 `arr` 中的元素按照字母順序排列。 該函數應返回一個排序的數組。

# --hints--

應該使用 `sort` 方法。

```js
assert(code.match(/\.sort/g));
```

`alphabeticalOrder(["a", "d", "c", "a", "z", "g"])` 應返回 `["a", "a", "c", "d", "g", "z"]`。

```js
assert(
  JSON.stringify(alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g'])) ===
    JSON.stringify(['a', 'a', 'c', 'd', 'g', 'z'])
);
```

`alphabeticalOrder(["x", "h", "a", "m", "n", "m"])`應返回`["a", "h", "m", "m", "n", "x"]`。

```js
assert(
  JSON.stringify(alphabeticalOrder(['x', 'h', 'a', 'm', 'n', 'm'])) ===
    JSON.stringify(['a', 'h', 'm', 'm', 'n', 'x'])
);
```

`alphabeticalOrder(["a", "a", "a", "a", "x", "t"])` 應返回 `["a", "a", "a", "a", "t", "x"]`。

```js
assert(
  JSON.stringify(alphabeticalOrder(['a', 'a', 'a', 'a', 'x', 't'])) ===
    JSON.stringify(['a', 'a', 'a', 'a', 't', 'x'])
);
```

# --seed--

## --seed-contents--

```js
function alphabeticalOrder(arr) {
  // Only change code below this line

  return arr
  // Only change code above this line
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
```

# --solutions--

```js
function alphabeticalOrder(arr) {
  return arr.sort();
}
```
