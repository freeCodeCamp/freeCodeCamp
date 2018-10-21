---
title: Remove Items Using splice()
---
## Remove Items Using splice()

- The `splice()` function must be called on the `arr` array in order to remove 1 or more elements from the center of the array.
- The array `arr` currently adds up to the value of 16. Simply remove as many variables neccessary to return 10.

## Solution:
```javascript
function sumOfTen(arr) {
  // change code below this line
  arr.splice(1,2);
  // change code above this line
  return arr.reduce((a, b) => a + b);
}

// do not change code below this line
console.log(sumOfTen([2, 5, 1, 5, 2, 1]));
```
