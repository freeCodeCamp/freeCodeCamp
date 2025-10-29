---
id: 68a47dcdbce12193caf77012
title: Implement a Sorted Index Finder
challengeType: 26
dashedName: lab-sorted-index-finder
---

# --description--

In this lab you will create a function that returns the lowest index at which a value should be inserted into an array once it has been sorted in ascending order.

**Objective**: Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should have a `getIndexToIns` function that takes two arguments: an array and a number.  
2. You should use the `sort` method to sort the array in ascending order.
3. Your `getIndexToIns` function should return the lowest index at which the number should be inserted by using the `findIndex` method.
4. Your `getIndexToIns` function should always return a number.

**Hint:**  
The `findIndex` method is a built-in array method in JavaScript. It takes a callback function and returns the index of the first element that satisfies the condition. Both `findIndex` and `sort` are higher-order functions.

**Examples:**

- `getIndexToIns([1, 2, 3, 4], 1.5)` should return `1` because `1.5` is greater than `1` (index `0`) and less than `2` (index `1`).
- `getIndexToIns([20, 3, 5], 19)` should return `2` because after sorting to `[3, 5, 20]`, `19` is less than `20` (index `2`) and greater than `5` (index `1`).


# --hints--

You should have a `getIndexToIns` function.

```js
assert.isFunction(getIndexToIns);
```

`getIndexToIns` should always return a number.

```js
assert.isNumber(getIndexToIns([10, 20, 30, 40, 50], 35));
```

Your function should use the `sort` method.

```js
assert.match(getIndexToIns.toString(), /\.sort\(/);
```


Your function should make use of the `findIndex` method.

```js
assert.match(getIndexToIns.toString(), /\.findIndex\(/);
```

`getIndexToIns([10, 20, 30, 40, 50], 35)` should return `3`.

```js
assert.strictEqual(getIndexToIns([10, 20, 30, 40, 50], 35), 3);
```

`getIndexToIns([10, 20, 30, 40, 50], 30)` should return `2`.

```js
assert.strictEqual(getIndexToIns([10, 20, 30, 40, 50], 30), 2);
```

`getIndexToIns([40, 60], 50)` should return `1`.

```js
assert.strictEqual(getIndexToIns([40, 60], 50), 1);
```

`getIndexToIns([3, 10, 5], 3)` should return `0`.

```js
assert.strictEqual(getIndexToIns([3, 10, 5], 3), 0);
```

`getIndexToIns([5, 3, 20, 3], 5)` should return `2`.

```js
assert.strictEqual(getIndexToIns([5, 3, 20, 3], 5), 2);
```

`getIndexToIns([2, 20, 10], 19)` should return `2`.

```js
assert.strictEqual(getIndexToIns([2, 20, 10], 19), 2);
```

`getIndexToIns([3, 10, 5], 11)` should return `3`

```js
assert.strictEqual(getIndexToIns([3, 10, 5], 11), 3);
```

`getIndexToIns([], 5)` should return `0`

```js
assert.strictEqual(getIndexToIns([], 5), 0);
```

# --seed--

## --seed-contents--

```js
``` 

# --solutions--

```js
function getIndexToIns(arr, num) {
  const sorted = [...arr].sort((a, b) => a - b);
  const index = sorted.findIndex(el => el >= num);

  return index === -1 ? sorted.length : index;
}
``` 

