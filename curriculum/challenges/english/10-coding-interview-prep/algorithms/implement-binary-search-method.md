---
id: 61709a1ae1d297650dbdc719
title: Implement Binary Search Method
challengeType: 1
forumTopicId: 301615
dashedName: Implement-Binary-Search-Method
---

# --description--

The binary search method is an an **O(log(n))** efficient algorithm for searching a sorted array. It operates using the following steps, which can be done iteratively or recursively:

**1)** find the middle value of a sorted array. If value == target return (found it!).

**2)** if middle value < target, search left half of array next compare.

**3)** if middle value > target, search right half of array next compare.

As you can see, you are successively halving an array, which gives your the log(n) efficiency. For this challenge, we want you to show your work - how you got to the target value... the path you took!

**Instructions:** Write a function `binarySearch` that implements the binary search algorithm on an array, recording the path you took (each middle value comparison) to find the target.

The function takes a sorted array of integers and a target value as input. It returns an array containing (in-order) the middle value you found at each halving of the original array until you found the target value. If value not found, return "Value Not Found"

For example, binarySearch([1,2,3,4,5,6,7], 5) would return [4,6,5].

For this challenge, when halving, you MUST use Math.floor() when doing division: Math.floor(x/2). This will give a consistent, testable path.

# --hints--

`binarySearch` should be a function.

```js
assert(typeof binarySearch == 'function');
```

`binarySearch` should return X, Y, Z.

```js
let searchList = [
  0, 1, 2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 49, 70
];
let testArray = [
  [13, 5, 2, 0],
  [13, 5, 2, 0, 1],
  [13, 5, 2],
  [13, 5, 2, 3],
  [13, 5, 2, 3, 4],
  [13, 5],
  'Value Not Found',
  'Value Not Found',
  [13, 5, 10, 8],
  [13, 5, 10, 8, 9],
  [13, 5, 10],
  [13, 5, 10, 11],
  [13, 5, 10, 11, 12],
  [13],
  [13, 19, 16, 14]
];

for (let i = 0; i < 15; i++) {
  let pass = true;

  //user algo did not find value
  if (binarySearch(searchList, i) == 'Value Not Found') {
    if (testArray[i] == 'Value Not Found') {
    } else {
      assert.fail();
    }
    continue;
  }
  //user algo found value
  for (let j = 0; j < testArray[i].length; j++) {
    if (binarySearch(searchList, i)[j] != testArray[i][j]) {
      pass = false;
      assert.fail(
        '***ERROR***',
        binarySearch(searchList, i),
        '!=',
        testArray[i]
      );
      break;
    }
  }
}
```

# --seed--

## --after-user-code--

## --seed-contents--

```js
function binarySearch(searchList, value) {
  let arrayPath = [];

  // Only change code below this line

  return arrayPath;
  // Only change code above this line
}
```

# --solutions--

```js
let binarySearch = (searchList, value) => {
  let arrayPath = [];

  //set initial L - M - R
  let left = 0;
  let right = searchList.length - 1;
  let middle = Math.floor(right / 2);

  //if first comparison finds value
  if (searchList[middle] == value) {
    arrayPath.push(searchList[middle]);
    return arrayPath;
  }

  while (searchList[middle] !== value) {
    //add to output array
    arrayPath.push(searchList[middle]);

    //not found
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

    //if found update output array and exit
    if (searchList[middle] == value) {
      arrayPath.push(searchList[middle]);

      break;
    }
  }
  return arrayPath;
};
```
