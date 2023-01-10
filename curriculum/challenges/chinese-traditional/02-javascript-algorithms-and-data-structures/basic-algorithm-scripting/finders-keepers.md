---
id: a6e40f1041b06c996f7b2406
title: 按參數過濾數組
challengeType: 1
forumTopicId: 16016
dashedName: finders-keepers
---

# --description--

請寫一個函數來檢查數組（第一個參數 `arr`）中的元素，並返回數組中第一個通過校驗測試的元素。 其中，“通過校驗測試”指的是對於數組中的一個元素 `x`，若 `func(x)` 返回的結果爲 `true`，則校驗測試通過。 如果沒有元素通過測試，請返回 `undefined`。

# --hints--

`findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })` 應返回 `8`。

```js
assert.strictEqual(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  }),
  8
);
```

`findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })` 應返回 `undefined`。

```js
assert.strictEqual(
  findElement([1, 3, 5, 9], function (num) {
    return num % 2 === 0;
  }),
  undefined
);
```

# --seed--

## --seed-contents--

```js
function findElement(arr, func) {
  let num = 0;
  return num;
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
```

# --solutions--

```js
function findElement(arr, func) {
  return arr.filter(func)[0];
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
```
