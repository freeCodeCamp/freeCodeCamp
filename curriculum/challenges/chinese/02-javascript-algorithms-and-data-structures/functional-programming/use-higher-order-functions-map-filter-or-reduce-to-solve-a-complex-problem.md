---
id: 587d7b88367417b2b2512b45
title: 使用高阶函数 map、filter 或者 reduce 来解决复杂问题
challengeType: 1
forumTopicId: 301311
---

# --description--

已经接触了高阶函数如 `map()`、 `filter()` 和 `reduce()`的使用，是时候用它们来完成一些复杂的挑战了。

# --instructions--

已经定义了一个函数 `squareList`。任意组合 `map()`、`filter()` 和 `reduce()` 来完成函数，满足以下条件，当传入实数数组（如，`[-3, 4.8, 5, 3, -3.2]`）时，返回*仅*包含正整数的平方的新数组。

**注意：** 函数不应该包含任何形式的 `for` 或者 `while` 循环或者 `forEach()` 函数。

# --hints--

`squareList` 应该是一个 `function`。

```js
assert.typeOf(squareList, 'function'),
  '<code>squareList</code> should be a <code>function</code>';
```

不应该使用 for 或者 while 循环或者 forEach。

```js
assert(!removeJSComments(code).match(/for|while|forEach/g));
```

应该使用 `map`、`filter` 或者 `reduce`。

```js
assert(removeJSComments(code).match(/\.(map|filter|reduce)\s*\(/g));
```

函数应该返回 `array`。

```js
assert(Array.isArray(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])));
```

`squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])` 应该返回 `[16, 1764, 36]`。

```js
assert.deepStrictEqual(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]), [
  16,
  1764,
  36
]);
```

`squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])` 应该返回 `[9, 100, 49]`。

```js
assert.deepStrictEqual(squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]), [
  9,
  100,
  49
]);
```

# --solutions--

