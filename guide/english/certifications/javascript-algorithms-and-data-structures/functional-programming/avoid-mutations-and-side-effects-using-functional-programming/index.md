---
title: Avoid Mutations and Side Effects Using Functional Programming
---
## Avoid Mutations and Side Effects Using Functional Programming

### Problem Explanation

Fill in the code for the function `incrementer` so it returns the value of the global variable `fixedValue` increased by one. `fixedValue` should not change, no matter how many times the function `incrememter` is called.

### Hint 1

Using the increment operator (`++`) on `fixedValue` will mutate `fixedValue`, meaning it will no longer reference the same value it was assigned with. 

### Solution:
```javascript
// the global variable
var fixedValue = 4;

function incrementer () {
  // Add your code below this line
  return fixedValue + 1;
  
  // Add your code above this line
}

var newValue = incrementer(); // Should equal 5
console.log(fixedValue); // Should print 4
```
