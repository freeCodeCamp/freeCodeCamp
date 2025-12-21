---
id: a6e40f1041b06c996f7b2406
title: Build a First Element Finder
challengeType: 26
dashedName: build-a-first-element-finder
---

# --description--

In this lab, you will create a function that looks through an array and returns the first element that passes a test function (also known as a "truth test"). 

The function would iterate through the array and test each element using the provided test function. At the end, it would return the first element where the test function returns `true`.

Example:

```js
findElement([1, 3, 5, 8], num => num % 2 === 0) // returns 8
findElement([1, 3, 5], num => num % 2 === 0)    // returns undefined
```

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should have a function named `findElement` that accepts an array and a function as arguments.
2. The function should return the first item in the array that passes a truth test. This means that, calling the passed in function `func`, given an element `x`, the truth test is passed if `func(x)` is `true`.
3. If no element passes the test, the function should return `undefined`.

# --hints--

You should have a `findElement` function.

```js
assert.isFunction(findElement);
```

`findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })` should return `8`.

```js
assert.strictEqual(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  }),
  8
);
```

`findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })` should return `undefined`.

```js
assert.strictEqual(
  findElement([1, 3, 5, 9], function (num) {
    return num % 2 === 0;
  }),
  undefined
);
```

`findElement([1, 2, 3, 4], function(num) { return num > 2; })` should return `3`.

```js
assert.strictEqual(
  findElement([1, 2, 3, 4], function (num) {
    return num > 2;
  }),
  3
);
```

`findElement(["hello", "world", "javascript"], function(str) { return str.length > 5; })` should return `"javascript"`.

```js
assert.strictEqual(
  findElement(["hello", "world", "javascript"], function (str) {
    return str.length > 5;
  }),
  "javascript"
);
```

`findElement(["cat", "dog", "bird"], function(str) { return str.length > 10; })` should return `undefined`.

```js
assert.strictEqual(
  findElement(["cat", "dog", "bird"], function (str) {
    return str.length > 10;
  }),
  undefined
);
```

`findElement([2, 4, 6, 8], function(num) { return num % 2 === 0; })` should return `2`.

```js
assert.strictEqual(
  findElement([2, 4, 6, 8], function (num) {
    return num % 2 === 0;
  }),
  2
);
```

`findElement([], function(num) { return num > 0; })` should return `undefined`.

```js
assert.strictEqual(
  findElement([], function (num) {
    return num > 0;
  }),
  undefined
);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function findElement(arr, func) {
  return arr.filter(func)[0];
}

findElement([1, 2, 3, 4], num => num % 2 === 0);
```
