---
title: Use Caution When Reinitializing Variables Inside a Loop
---
## Use Caution When Reinitializing Variables Inside a Loop

- This challenge must be solved by redefining the scope of `row[]`.
- Below is an example of the desired matrix.
```javascript
[
[0][0],
[0][0],
[0][0]
]
```
- However the current matrix - seen below - is far from the desired matrix
```javascript
[
[0][0][0][0][0][0],
[0][0][0][0][0][0],
[0][0][0][0][0][0]
]
```
- This error occurs due to the `row[]` array being declared as a global variable outside of the nested for loop.
- However, to fill the matrix correctly the `row[]` array must be reset after each iteration of the outer loop.

## Solution 
```javascript
function zeroArray(m, n) {
  let newArray = [];
  for (let i = 0; i < m; i++) {
     let row = []; /* <-----  row has been declared inside the outer loop. 
     Now a new row will be initialised during each iteration of the outer loop allowing 
     for the desired matrix. */
    for (let j = 0; j < n; j++) {

      row.push(0);
    }
    newArray.push(row);
  }
  return newArray;
}
let matrix = zeroArray(3, 2);
console.log(matrix);
```
