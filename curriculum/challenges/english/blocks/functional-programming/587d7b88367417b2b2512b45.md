---
id: 587d7b88367417b2b2512b45
title: 'Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem'
challengeType: 1
forumTopicId: 301311
dashedName: use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem
---

# --description--

Now that you have worked through a few challenges using higher-order functions like `map()`, `filter()`, and `reduce()`, you now get to apply them to solve a more complex challenge.

# --instructions--

Complete the code for the `squareList` function using any combination of `map()`, `filter()`, and `reduce()`. The function should return a new array containing the squares of *only* the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array of real numbers is `[-3, 4.8, 5, 3, -3.2]`.

**Note:** Your function should not use any kind of `for` or `while` loops or the `forEach()` function.

# --hints--

`squareList` should be a `function`.

```js
assert.typeOf(squareList, 'function'),
  '<code>squareList</code> should be a <code>function</code>';
```

`for`, `while`, and `forEach` should not be used.

```js
assert(!__helpers.removeJSComments(code).match(/for|while|forEach/g));
```

`map`, `filter`, or `reduce` should be used.

```js
assert(
  __helpers
    .removeWhiteSpace(__helpers.removeJSComments(code))
    .match(/\.(map|filter|reduce)\(/g)
);
```

The function should return an `array`.

```js
assert(Array.isArray(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])));
```

`squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2])` should return `[16, 1764, 36]`.

```js
assert.deepStrictEqual(squareList([4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]), [
  16,
  1764,
  36
]);
```

`squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3])` should return `[9, 100, 49]`.

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
