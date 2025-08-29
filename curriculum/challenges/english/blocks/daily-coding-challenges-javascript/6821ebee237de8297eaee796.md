---
id: 6821ebee237de8297eaee796
title: "JavaScript Challenge 20: Array Duplicates"
challengeType: 28
dashedName: javascript-challenge-20
---

# --description--

Given an array of integers, return an array of integers that appear more than once in the initial array, sorted in ascending order. If no values appear more than once, return an empty array.

- Only include one instance of each value in the returned array.

# --hints--

`findDuplicates([1, 2, 3, 4, 5])` should return `[]`.

```js
assert.deepEqual(findDuplicates([1, 2, 3, 4, 5]), []);
```

`findDuplicates([1, 2, 3, 4, 1, 2])` should return `[1, 2]`.

```js
assert.deepEqual(findDuplicates([1, 2, 3, 4, 1, 2]), [1, 2]);
```

`findDuplicates([2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4])` should return `[-6, 0, 2, 4, 5, 23]`.

```js
assert.deepEqual(findDuplicates([2, 34, 0, 1, -6, 23, 5, 3, 2, 5, 67, -6, 23, 2, 43, 2, 12, 0, 2, 4, 4]), [-6, 0, 2, 4, 5, 23]);
```

# --seed--

## --seed-contents--

```js
function findDuplicates(arr) {

  return arr;
}
```

# --solutions--

```js
function findDuplicates(arr) {
  const duplicates = [];
  
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
  }

  return duplicates.sort((a, b) => a - b);
}
```
