---
id: 681cb1b0dab50c87ddb2e518
title: "JavaScript Challenge 7: Targeted Sum"
challengeType: 28
dashedName: javascript-challenge-7
---

# --description--

Given an array of numbers and an integer target, find two unique numbers in the array that add up to the target value. Return an array with the indices of those two numbers, or `Target not found` if no two numbers sum up to the target.

- The returned array should have the indices in ascending order.

# --hints--

`findTarget([2, 7, 11, 15], 9)` should return `[0, 1]`.

```js
assert.deepEqual(findTarget([2, 7, 11, 15], 9), [0, 1]);
```

`findTarget([3, 2, 4, 5], 6)` should return `[1, 2]`.

```js
assert.deepEqual(findTarget([3, 2, 4, 5], 6), [1, 2]);
```

`findTarget([1, 3, 5, 6, 7, 8], 15)` should return `[4, 5]`.

```js
assert.deepEqual(findTarget([1, 3, 5, 6, 7, 8], 15), [4, 5]);
```

`findTarget([1, 3, 5, 7], 14)` should return `Target not found`.

```js
assert.equal(findTarget([1, 3, 5, 7], 14), 'Target not found');
```

# --seed--

## --seed-contents--

```js
function findTarget(arr, target) {

  return arr;
}
```

# --solutions--

```js
function findTarget(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return 'Target not found'
}
```
