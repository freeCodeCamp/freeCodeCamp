---
title: Add Items to an Array with push() and unshift()
---
## Add Items to an Array with push() and unshift()

- Just like the example given, use the `.unshift()` method on the array to add elements to the start of the array and use the `.push()` method to add elements to the end of the array. 

## Solution:
```javascript
function mixedNumbers(arr) {
  // change code below this line
arr.unshift('I',2,'three');
arr.push(7,'VIII', 9);
  // change code above this line
  return arr;
}

// do not change code below this line
console.log(mixedNumbers(['IV', 5, 'six']));
```
