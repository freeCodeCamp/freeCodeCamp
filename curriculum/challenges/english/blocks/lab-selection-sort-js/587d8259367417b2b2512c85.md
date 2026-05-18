---
id: 587d8259367417b2b2512c85
title: Implement the Selection Sort Algorithm
challengeType: 26
dashedName: implement-the-selection-sort-algorithm
---

# --description--

In this lab you will implement the selection sort algorithm. Selection sort works by selecting the minimum value in a list and swapping it with the first value in the list. It then starts at the second position, selects the smallest value in the remaining list, and swaps it with the second element. It continues iterating through the list and swapping elements until it reaches the end of the list. Now the list is sorted. Selection sort has quadratic time complexity in all cases.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should have a `selectionSort` function.
1. The `selectionSort` function should take an array, and return an array with the same elements but ordered from least to greatest.

# --hints--

`selectionSort` should be a function.

```js
assert.isFunction(selectionSort);
```

`selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92])` should return an array that is unchanged except for order.

```js
assert.sameMembers(
  selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]),
  [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
);
```

`selectionSort` should return a sorted array (least to greatest).

```js
assert.sameOrderedMembers(
  selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]),
  [1, 1, 2, 2, 4, 8, 32, 43, 43, 55, 63, 92, 123, 123, 234, 345, 5643]
)
```

`selectionSort` should not use the built-in `.sort()` method.

```js
function isBuiltInSortUsed(){
  let sortUsed = false;
  const temp = Array.prototype.sort;
  Array.prototype.sort = () => sortUsed = true;
  try {
    selectionSort([0, 1]);
  } finally {
    Array.prototype.sort = temp;
  }
  return sortUsed;
}
assert.isFalse(isBuiltInSortUsed());
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function selectionSort(array) {
  for (let i = 0; i < array.length-1; i++) {
    let minimumIndex = i;
    for (let j = i+1; j < array.length; j++){
      if (array[j] < array[minimumIndex]) {
        minimumIndex = j;
      }
    }
    let value = array[minimumIndex];
    array[minimumIndex] = array[i];
    array[i] = value;
  }
    return array;
}
```
