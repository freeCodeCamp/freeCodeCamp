---
title: Copy an Array with the Spread Operator
---
## Copy an Array with the Spread Operator

- The final hint in the example tells you to use a recently learned method.
- The spread operator copies all elements into a new empty object. 

```javascript 
while (num >= 1) {
    newArr = [...arr]
    num--;
}
```

- The code above will copy all of the elements into `newArr` but will also reinitialise `newArr` with every new iteration of the while loop. 
- A new variable should first be initialised using the spread operator - `let obj = [...arr];` - then this variable should be added to the `newArr` for every iteration of the while loop.

## Solution:
```javascript
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // change code below this line
    newArr.push([...arr]);
    // change code above this line
    num--;
  }
  return newArr;
}

// change code here to test different cases:
console.log(copyMachine([true, false, true], 2));
```
