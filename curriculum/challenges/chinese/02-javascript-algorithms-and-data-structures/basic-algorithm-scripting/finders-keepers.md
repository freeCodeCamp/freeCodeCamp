---
id: a6e40f1041b06c996f7b2406
title: 按参数过滤数组
challengeType: 1
forumTopicId: 16016
dashedName: finders-keepers
---

# --description--

请写一个函数来检查数组（第一个参数 `arr`）中的元素，并返回数组中第一个通过校验测试的元素。 其中，“通过校验测试”指的是对于数组中的一个元素 `x`，若 `func(x)` 返回的结果为 `true`，则校验测试通过。 如果没有元素通过测试，请返回 `undefined`。

# --hints--

`findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })` 应返回 `8`。

```js
assert.strictEqual(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  }),
  8
);
```

`findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })` 应返回 `undefined`。

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
