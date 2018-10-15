---
title: Add Elements to the End of an Array Using concat Instead of push
---

## Add Elements to the End of an Array Using concat Instead of push
Where the `push` method adds new element to the end of the orginal array, the `concat` method creates a new array containing the elements from the original array and the new element. The original array remains the same when using `concat`.

#### Relevant Links:
- [Array.prototype.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

## Solution
```javascript
function nonMutatingPush(original, newItem) {

  // Add your code below this line
  
  return original.concat(newItem);

  // Add your code above this line
}

var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);

```