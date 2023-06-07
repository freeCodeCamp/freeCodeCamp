---
id: 5cc0bd7a49b71cb96132e54c
title: 使用递归来创建一个数字序列
challengeType: 1
forumTopicId: 301180
dashedName: use-recursion-to-create-a-range-of-numbers
---

# --description--

接着上一个挑战，有另外一个机会来用递归函数解决问题。

# --instructions--

已经定义好了 `rangeOfNumbers` 函数，包含两个参数。 函数应该返回一个连续数字数组，`startNum` 参数开始 `endNum` 参数截止。 开始的数字小于或等于截止数字。 函数必需递归调用自身，不能使用任意形式的循环。 要考虑到 `startNum` 和 `endNum` 相同的情况。

# --hints--

函数应该返回一个数组。

```js
assert(Array.isArray(rangeOfNumbers(5, 10)));
```

不能包含循环语句（`for` 或者 `while` 或者高阶函数比如 `forEach`、`map`、`filter` 或者 `reduce`）。

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

`rangeOfNumbers` 应该使用递归函数（调用自身）来完成这个挑战。

```js
assert(
  rangeOfNumbers.toString().match(/rangeOfNumbers\s*\(.+\)/)
);
```

`rangeOfNumbers(1, 5)` 应该返回 `[1, 2, 3, 4, 5]`。

```js
assert.deepStrictEqual(rangeOfNumbers(1, 5), [1, 2, 3, 4, 5]);
```

`rangeOfNumbers(6, 9)` 应该返回 `[6, 7, 8, 9]`。

```js
assert.deepStrictEqual(rangeOfNumbers(6, 9), [6, 7, 8, 9]);
```

`rangeOfNumbers(4, 4)` 应该返回 `[4]`。

```js
assert.deepStrictEqual(rangeOfNumbers(4, 4), [4]);
```

不应使用全局变量来缓存数组。

```js
rangeOfNumbers(1, 3)
assert.deepStrictEqual(rangeOfNumbers(6, 9), [6, 7, 8, 9]);
```

# --seed--

## --seed-contents--

```js
function rangeOfNumbers(startNum, endNum) {
  return [];
};
```

# --solutions--

```js
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
```
