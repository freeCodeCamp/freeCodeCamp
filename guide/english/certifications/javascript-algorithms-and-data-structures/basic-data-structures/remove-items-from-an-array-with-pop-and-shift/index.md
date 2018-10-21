---
title: Remove Items from an Array with pop() and shift()
---
## Remove Items from an Array with pop() and shift()

- The `.pop()` method and `.shift()` method must be called and initialised using the `popped` and `shifted` variables to return the correct answer from the function.

## Solution:
```javascript
function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}

// do not change code below this line
console.log(popShift(['challenge', 'is', 'not', 'complete']));
```
