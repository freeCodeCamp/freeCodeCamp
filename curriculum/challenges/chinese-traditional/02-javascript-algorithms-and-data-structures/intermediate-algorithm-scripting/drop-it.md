---
id: a5deed1811a43193f9f1c841
title: 根據參數刪除數組元素
challengeType: 1
forumTopicId: 16010
dashedName: drop-it
---

# --description--

給定數組 `arr`，從數組的第一個元素開始，用函數 `func` 來檢查數組的每個元素是否返回 `true`。 如果返回 false，就把這個元素刪除。 持續執行刪除操作，直到某個元素傳入 func 時返回 true 爲止。

然後在條件滿足後返回數組的其餘部分，否則， `arr` 應作爲空數組返回。

# --hints--

`dropElements([1, 2, 3, 4], function(n) {return n >= 3;})` 應返回 `[3, 4]`。

```js
assert.deepEqual(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  }),
  [3, 4]
);
```

`dropElements([0, 1, 0, 1], function(n) {return n === 1;})` 應返回 `[1, 0, 1]`。

```js
assert.deepEqual(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  }),
  [1, 0, 1]
);
```

`dropElements([1, 2, 3], function(n) {return n > 0;})` 應返回 `[1, 2, 3]`。

```js
assert.deepEqual(
  dropElements([1, 2, 3], function (n) {
    return n > 0;
  }),
  [1, 2, 3]
);
```

`dropElements([1, 2, 3, 4], function(n) {return n > 5;})` 應返回 `[]`。

```js
assert.deepEqual(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5;
  }),
  []
);
```

`dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;})` 應返回 `[7, 4]`。

```js
assert.deepEqual(
  dropElements([1, 2, 3, 7, 4], function (n) {
    return n > 3;
  }),
  [7, 4]
);
```

`dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})` 應返回 `[3, 9, 2]`。

```js
assert.deepEqual(
  dropElements([1, 2, 3, 9, 2], function (n) {
    return n > 2;
  }),
  [3, 9, 2]
);
```

# --seed--

## --seed-contents--

```js
function dropElements(arr, func) {
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
```

# --solutions--

```js
function dropElements(arr, func) {
  while (arr.length && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}
```
