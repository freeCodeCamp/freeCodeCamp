---
id: 587d7b88367417b2b2512b45
title: '使用高階函數 map、filter 或者 reduce 來解決複雜問題'
challengeType: 1
forumTopicId: 301311
dashedName: use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem
---

# --description--

已經接觸了高階函數如 `map()`、 `filter()` 和 `reduce()`的使用，是時候用它們來完成一些複雜的挑戰了。

# --instructions--

使用 `map()`、`filter()` 和 `reduce()` 的任何組合完成 `squareList` 函數的代碼。 傳遞一個包含實數的數組給函數時，函數應返回一個新的數組，*只*包含正整數（小數不是整數）的平方值， 例如 `[-3, 4.8, 5, 3, -3.2]` 這樣一個包含實數的數組。

**注意：** 函數不應該包含任何形式的 `for` 或者 `while` 循環或者 `forEach()` 函數。

# --hints--

`squareList` 應該是一個 `function`。

```js
assert.typeOf(squareList, 'function'),
  '<code>squareList</code> should be a <code>function</code>';
```

不應該使用 `for`、`while` 或者 `forEach`。

```js
assert(!code.match(/for|while|forEach/g));
```

應該使用 `map`、`filter` 或者 `reduce`。

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/\.(map|filter|reduce)\(/g)
);
```

函數應該返回 `array`。

```js
assert(Array.isArray(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])));
```

`squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])` 應該返回 `[16, 1764, 36]`。

```js
assert.deepStrictEqual(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]), [
  16,
  1764,
  36
]);
```

`squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])` 應該返回 `[9, 100, 49]`。

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
