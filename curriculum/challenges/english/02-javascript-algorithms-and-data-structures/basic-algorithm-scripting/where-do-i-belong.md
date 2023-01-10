---
id: a24c1a4622e3c05097f71d67
title: Where do I Belong
challengeType: 1
forumTopicId: 16094
dashedName: where-do-i-belong
---

# --description--

Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, `getIndexToIns([1,2,3,4], 1.5)` should return `1` because it is greater than `1` (index 0), but less than `2` (index 1).

Likewise, `getIndexToIns([20,3,5], 19)` should return `2` because once the array has been sorted it will look like `[3,5,20]` and `19` is less than `20` (index 2) and greater than `5` (index 1).

# --hints--

`getIndexToIns([10, 20, 30, 40, 50], 35)` should return `3`.

```js
assert(getIndexToIns([10, 20, 30, 40, 50], 35) === 3);
```

`getIndexToIns([10, 20, 30, 40, 50], 35)` should return a number.

```js
assert(typeof getIndexToIns([10, 20, 30, 40, 50], 35) === 'number');
```

`getIndexToIns([10, 20, 30, 40, 50], 30)` should return `2`.

```js
assert(getIndexToIns([10, 20, 30, 40, 50], 30) === 2);
```

`getIndexToIns([10, 20, 30, 40, 50], 30)` should return a number.

```js
assert(typeof getIndexToIns([10, 20, 30, 40, 50], 30) === 'number');
```

`getIndexToIns([40, 60], 50)` should return `1`.

```js
assert(getIndexToIns([40, 60], 50) === 1);
```

`getIndexToIns([40, 60], 50)` should return a number.

```js
assert(typeof getIndexToIns([40, 60], 50) === 'number');
```

`getIndexToIns([3, 10, 5], 3)` should return `0`.

```js
assert(getIndexToIns([3, 10, 5], 3) === 0);
```

`getIndexToIns([3, 10, 5], 3)` should return a number.

```js
assert(typeof getIndexToIns([3, 10, 5], 3) === 'number');
```

`getIndexToIns([5, 3, 20, 3], 5)` should return `2`.

```js
assert(getIndexToIns([5, 3, 20, 3], 5) === 2);
```

`getIndexToIns([5, 3, 20, 3], 5)` should return a number.

```js
assert(typeof getIndexToIns([5, 3, 20, 3], 5) === 'number');
```

`getIndexToIns([2, 20, 10], 19)` should return `2`.

```js
assert(getIndexToIns([2, 20, 10], 19) === 2);
```

`getIndexToIns([2, 20, 10], 19)` should return a number.

```js
assert(typeof getIndexToIns([2, 20, 10], 19) === 'number');
```

`getIndexToIns([2, 5, 10], 15)` should return `3`.

```js
assert(getIndexToIns([2, 5, 10], 15) === 3);
```

`getIndexToIns([2, 5, 10], 15)` should return a number.

```js
assert(typeof getIndexToIns([2, 5, 10], 15) === 'number');
```

`getIndexToIns([], 1)` should return `0`.

```js
assert(getIndexToIns([], 1) === 0);
```

`getIndexToIns([], 1)` should return a number.

```js
assert(typeof getIndexToIns([], 1) === 'number');
```

# --seed--

## --seed-contents--

```js
function getIndexToIns(arr, num) {
  return num;
}

getIndexToIns([40, 60], 50);
```

# --solutions--

```js
function getIndexToIns(arr, num) {
  arr = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }

  return arr.length;
}

getIndexToIns([40, 60], 50);
```
