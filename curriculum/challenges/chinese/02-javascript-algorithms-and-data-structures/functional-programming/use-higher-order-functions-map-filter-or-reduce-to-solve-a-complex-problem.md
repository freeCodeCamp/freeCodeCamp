---
id: 587d7b88367417b2b2512b45
title: '使用高阶函数 map、filter 或者 reduce 来解决复杂问题'
challengeType: 1
forumTopicId: 301311
dashedName: use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem
---

# --description--

已经接触了高阶函数如 `map()`、 `filter()` 和 `reduce()`的使用，是时候用它们来完成一些复杂的挑战了。

# --instructions--

使用 `map()`、`filter()` 和 `reduce()` 的任何组合完成 `squareList` 函数的代码。 传递一个包含实数的数组给函数时，函数应返回一个新的数组，*只*包含正整数（小数不是整数）的平方值， 例如 `[-3, 4.8, 5, 3, -3.2]` 这样一个包含实数的数组。

**注意：** 函数不应该包含任何形式的 `for` 或者 `while` 循环或者 `forEach()` 函数。

# --hints--

`squareList` 应该是一个 `function`。

```js
assert.typeOf(squareList, 'function'),
  '<code>squareList</code> should be a <code>function</code>';
```

不应该使用 `for`、`while` 或者 `forEach`。

```js
assert(!code.match(/for|while|forEach/g));
```

应该使用 `map`、`filter` 或者 `reduce`。

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/\.(map|filter|reduce)\(/g)
);
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

# --seed--

## --seed-contents--

```js
const squareList = arr => {
  // Only change code below this line
  return arr;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
```

# --solutions--

```js
const squareList = arr => {
  const positiveIntegers = arr.filter(num => {
    return num >= 0 && Number.isInteger(num);
  });
  const squaredIntegers = positiveIntegers.map(num => {
    return num ** 2;
  });
  return squaredIntegers;
};
```
