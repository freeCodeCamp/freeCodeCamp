---
title: Combine Two Arrays Using the concat Method
---
## Combine Two Arrays Using the concat Method

- The concat method is used to join two or more arrays or strings.
- This method does not mutate the existing arrays, but returns a new array.

## Solution
```javascript
function nonMutatingConcat(original, attach) {
  // Add your code below this line
  
  return original.concat(attach); 
  
  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);
```
