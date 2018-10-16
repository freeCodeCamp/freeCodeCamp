---
title: Pass Arguments to Avoid External Dependence in a Function
---

## Pass Arguments to Avoid External Dependence in a Function

## Hint: 1

Try to pass argument to function and return increased value of this argument. 


**Solution ahead!**

## Basic Code Solution:

```javascript

// the global variable
var fixedValue = 4;

// Add your code below this line
function incrementer (value) {
  return value + 1;
  
  // Add your code above this line
}

var newValue = incrementer(fixedValue); // Should equal 5
console.log(fixedValue); // Should print 4
```

### Method

This code will provide the same result as the last challenge, only this time we will pass the `fixedValue` into the function as a parameter. 

