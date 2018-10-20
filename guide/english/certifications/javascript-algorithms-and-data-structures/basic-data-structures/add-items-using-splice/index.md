---
title: Add Items Using splice()
---
## Add Items Using splice()
- Using the splice() function, you must remove the first 2 elements from array `arr` and replace them with `DarkSalmon` and `BlanchedAlmond`.
- Remember the splice function can take up to three parameters. 
## Example:
```javascript
arr.splice(0, 1, "Two");
/*  The first two paramemters are the same as they were in the previous challenge. 
    `0` will start the `splice()` function off at index 0.
    The second parameter `1` will remove only 1 variable from the array.
    The final variable "Two" will replace the variable in arr[0].
    Note: The final parameter can take more than 1 arguement.
*/
```

## Solution:
```javascript
function htmlColorNames(arr) {
  // change code below this line
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  // change code above this line
  return arr;
} 
 
// do not change code below this line
console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurqoise', 'FireBrick']));
```
