---
id: 587d7da9367417b2b2512b69
title: 使用 sort 方法按字母顺序给数组排序
challengeType: 1
forumTopicId: 18303
dashedName: sort-an-array-alphabetically-using-the-sort-method
---

# --description--

`sort` 方法可以根据回调函数对数组元素进行排序。

举个例子：

```js
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

ascendingOrder([1, 5, 2, 3, 4]);
```

这将返回值 `[1, 2, 3, 4, 5]`。

```js
function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

reverseAlpha(['l', 'h', 'z', 'b', 's']);
```

这将返回值 `['z', 's', 'l', 'h', 'b']`。

JavaScript 的默认排序方法是 Unicode 值顺序排序，有时可能会得到意想不到的结果。 因此，建议提供一个回调函数来指定如何对数组项目排序。 这个回调函数通常叫做 `compareFunction`，它根据 `compareFunction` 的返回值决定数组元素的排序方式： 如果两个元素 `a` 和 `b`，`compareFunction(a,b)` 返回一个比 0 小的值，那么 `a` 会在 `b` 的前面。 如果两个元素 `a` 和 `b`，`compareFunction(a,b)` 返回一个比 0 大的值，那么 `b` 会在 `a` 的前面。 如果两个元素 `a` 和 `b`，`compareFunction(a,b)` 返回等于 0 的值，那么 `a` 和 `b` 的位置保持不变。

# --instructions--

在 `alphabeticalOrder` 函数中使用 `sort` 方法对 `arr` 中的元素按照字母顺序排列。 该函数应返回一个排序的数组。

# --hints--

应该使用 `sort` 方法。

```js
assert(code.match(/\.sort/g));
```

`alphabeticalOrder(["a", "d", "c", "a", "z", "g"])` 应返回 `["a", "a", "c", "d", "g", "z"]`。

```js
assert(
  JSON.stringify(alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g'])) ===
    JSON.stringify(['a', 'a', 'c', 'd', 'g', 'z'])
);
```

`alphabeticalOrder(["x", "h", "a", "m", "n", "m"])`应返回`["a", "h", "m", "m", "n", "x"]`。

```js
assert(
  JSON.stringify(alphabeticalOrder(['x', 'h', 'a', 'm', 'n', 'm'])) ===
    JSON.stringify(['a', 'h', 'm', 'm', 'n', 'x'])
);
```

`alphabeticalOrder(["a", "a", "a", "a", "x", "t"])` 应返回 `["a", "a", "a", "a", "t", "x"]`。

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
