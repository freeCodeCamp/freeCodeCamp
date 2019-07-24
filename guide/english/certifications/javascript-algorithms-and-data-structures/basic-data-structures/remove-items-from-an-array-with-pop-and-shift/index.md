---
title: Remove Items from an Array with pop() and shift()
---
# Remove Items from an Array with pop() and shift()

---
## Problem Explanation
- The `.pop()` method and `.shift()` method must be called and initialised using the `popped` and `shifted` variables to return the correct answer from the function.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```javascript
function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}

// do not change code below this line
console.log(popShift(["challenge", "is", "not", "complete"]));
```
</details>