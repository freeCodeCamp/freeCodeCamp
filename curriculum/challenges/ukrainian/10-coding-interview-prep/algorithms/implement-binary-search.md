---
id: 61abc7ebf3029b56226de5b6
title: Implement Binary Search
challengeType: 1
forumTopicId: 487618
dashedName: implement-binary-search
---

# --description--

Binary search is an **O(log(n))** efficiency algorithm for searching a sorted array to find an element. It operates using the following steps:

1. Find the middle `value` of a sorted array. If `value == target` return `true` (The value has been found and the search is complete).
1. If middle `value < target`, search right half of array in next compare.
1. If middle `value > target`, search left half of array in next compare.
1. If after searching the whole array the value is not present, return `false` (The array has been searched and the value is not in the array).

As you can see, you are successively halving an array, which gives you the log(n) efficiency. For this challenge, we want you to show your work - how you got to the target value... the path you took!

# --instructions--

Write a function `binarySearch` that implements the binary search algorithm on an array, returning the path you took (each middle value comparison) to find the target in an array.

The function takes a sorted array of integers and a target value as input. It returns an array containing (in-order) the middle value you found at each halving of the original array until you found the target value. The target value should be the last element of the returned array. If the value is not found, return the string `Value Not Found`.

For example, `binarySearch([1,2,3,4,5,6,7], 5)` would return `[4,6,5]`.

For this challenge, when halving, you MUST use `Math.floor()` when doing division: `Math.floor(x/2)`. This will give a consistent, testable path.

**Note:** The following array will be used in tests:

```js
const testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];
```

# --hints--

`binarySearch` має бути функцією.

```js
assert(typeof binarySearch == 'function');
```

`binarySearch(testArray, 0)` має повернути `[13, 5, 2, 0]`.

```js
assert.deepEqual(binarySearch(_testArray, 0), [13, 5, 2, 0]);
```

`binarySearch(testArray, 1)` має повернути `[13, 5, 2, 0, 1]`.

```js
assert.deepEqual(binarySearch(_testArray, 1), [13, 5, 2, 0, 1]);
```


`binarySearch(testArray, 2)` має повернути `[13, 5, 2]`.

```js
assert.deepEqual(binarySearch(_testArray, 2), [13, 5, 2]);
```

`binarySearch(testArray, 6)` має повернути рядок `Value Not Found`.

```js
assert.strictEqual(binarySearch(_testArray, 6), 'Value Not Found');
```

`binarySearch(testArray, 11)` має повернути `[13, 5, 10, 11]`.

```js
assert.deepEqual(binarySearch(_testArray, 11), [13, 5, 10, 11])
```

`binarySearch(testArray, 13)` має повернути `[13]`.

```js
assert.deepEqual(binarySearch(_testArray, 13), [13]);
```

`binarySearch(testArray, 70)` має повернути `[13, 19, 22, 49, 70]`.

```js
assert.deepEqual(binarySearch(_testArray, 70), [13, 19, 22, 49, 70]);
```

# --seed--

## --after-user-code--

```js
const _testArray = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];
```

## --seed-contents--

```js
function binarySearch(searchList, value) {
  let arrayPath = [];
  return arrayPath;
}
```



# --solutions--

```js
let binarySearch = (searchList, value) => {
  let arrayPath = [];

  // set initial L - M - R
  let left = 0;
  let right = searchList.length - 1;
  let middle = Math.floor(right / 2);

  // if first comparison finds value
  if (searchList[middle] == value) {
    arrayPath.push(searchList[middle]);
    return arrayPath;
  }

  while (searchList[middle] !== value) {
    // add to output array
    arrayPath.push(searchList[middle]);

    // not found
    if (right < left) {
      return 'Value Not Found';
    }
    // value is in left or right portion of array
    // update L - M - R
    if (searchList[middle] > value) {
      right = middle - 1;
      middle = left + Math.floor((right - left) / 2);
    } else {
      left = middle + 1;
      middle = left + Math.floor((right - left) / 2);
    }

    // if found update output array and exit
    if (searchList[middle] == value) {
      arrayPath.push(searchList[middle]);

      break;
    }
  }
  return arrayPath;
};
```
