---
id: a789b3483989747d63b0e427
title: Build the Largest Number Finder
challengeType: 26
dashedName: build-the-largest-number-finder
---

# --description--

In this lab, you will build a function that returns an array consisting of the largest number from each provided sub-array.

Remember, you can iterate through an array with a simple `for` loop, and access each member with array syntax `arr[i]`.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should create a function `largestOfAll` that takes an array of arrays as an argument.
2. The function should return an array containing the largest number from each sub-array.

# --hints--

You should create a function named `largestOfAll`.

```js
assert.isFunction(largestOfAll);
```

`largestOfAll` should take a single parameter.

```js
assert.lengthOf(largestOfAll, 1);
```

`largestOfAll([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])` should return an array.

```js
assert.isArray(
  largestOfAll([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ])
);
```

`largestOfAll([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])` should return `[27, 5, 39, 1001]`.

```js
assert.deepEqual(
  largestOfAll([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ]),
  [27, 5, 39, 1001]
);
```

`largestOfAll([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])` should return `[9, 35, 97, 1000000]`.

```js
assert.deepEqual(
  largestOfAll([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1]
  ]),
  [9, 35, 97, 1000000]
);
```

`largestOfAll([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])` should return `[25, 48, 21, -3]`.

```js
assert.deepEqual(
  largestOfAll([
    [17, 23, 25, 12],
    [25, 7, 34, 48],
    [4, -10, 18, 21],
    [-72, -3, -17, -10]
  ]),
  [25, 48, 21, -3]
);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function largestOfAll(arr) {
  return arr.map(subArr => Math.max.apply(null, subArr));
}

largestOfAll([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);
```
