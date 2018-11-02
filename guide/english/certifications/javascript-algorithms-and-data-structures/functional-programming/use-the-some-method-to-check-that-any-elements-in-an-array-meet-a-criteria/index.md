---
title: Use the some Method to Check that Any Elements in an Array Meet a Criteria
---
## Use the some Method to Check that Any Elements in an Array Meet a Criteria

### Problem Explanation

Use the some method inside the checkPositive function to check if any element in arr is positive. The `checkPositive` function should return a Boolean value.

#### Relevant Links:
  - [Array.prototype.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
  

### Solution:
```javascript
function checkPositive(arr) {
  return arr.some((elem) => elem > 0);
}
checkPositive([1, 2, 3, -4, 5]);
```
