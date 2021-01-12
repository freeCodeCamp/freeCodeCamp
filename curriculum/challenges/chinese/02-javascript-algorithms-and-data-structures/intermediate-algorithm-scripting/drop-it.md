---
id: a5deed1811a43193f9f1c841
title: 根据参数删除数组元素
challengeType: 5
forumTopicId: 16010
---

# --description--

给定数组 `arr`，从数组的第一个元素开始，用函数 `func` 来检查数组的每个元素是否返回 `true`。如果返回 `false`，就把这个元素删除。持续执行删除操作，直到某个元素传入 `func` 时返回 `true` 为止。换言之，函数的最终返回值也应是一个数组，它由原数组中第一个使得 `func` 为 `true` 的元素及其之后的所有元素组成。

如果数组中的所有元素都不能让 `func` 为 `true`，则返回空数组 `[]`。

# --hints--

`dropElements([1, 2, 3, 4], function(n) {return n >= 3;})` 应返回 `[3, 4]`。

```js
assert.deepEqual(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  }),
  [3, 4]
);
```

`dropElements([0, 1, 0, 1], function(n) {return n === 1;})` 应返回 `[1, 0, 1]`。

```js
assert.deepEqual(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  }),
  [1, 0, 1]
);
```

`dropElements([1, 2, 3], function(n) {return n > 0;})` 应返回 `[1, 2, 3]`。

```js
assert.deepEqual(
  dropElements([1, 2, 3], function (n) {
    return n > 0;
  }),
  [1, 2, 3]
);
```

`dropElements([1, 2, 3, 4], function(n) {return n > 5;})` 应返回 `[]`。

```js
assert.deepEqual(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  }),
  []
);
```

`dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})` 应返回 `[7, 4]`。

```js
assert.deepEqual(
  dropElements([1, 2, 3, 7, 4], function (n) {
    return n > 3;
  }),
  [7, 4]
);
```

`dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})` 应返回 `[3, 9, 2]`。

```js
assert.deepEqual(
  dropElements([1, 2, 3, 9, 2], function (n) {
    return n > 2;
  }),
  [3, 9, 2]
);
```

# --solutions--

