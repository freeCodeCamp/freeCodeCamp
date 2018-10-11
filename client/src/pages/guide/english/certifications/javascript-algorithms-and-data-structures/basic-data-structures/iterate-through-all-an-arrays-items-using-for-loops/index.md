---
title: Iterate Through All an Array's Items Using For Loops
---
## Iterate Through All an Array's Items Using For Loops

- A nested for loop must be used to search through every element in the array.
- Every element of the array must then be compared to the `elem` parameter passed through the `filteredArray()` function.
- If a match is found then `newArr` must have that entire subarray removed. The `splice()` function is very useful here. 
- Once that entire subarray is removed from `newArr` then you must reset the for loop and continue the search.

## Solution:
```javascript
function filteredArray(arr, elem) {
  let newArr = [...arr];
  for(let i = 0; i < newArr.length; i++) {
    for(let j = 0; j < newArr[i].length; j++) {
      if(newArr[i][j] == elem) {
        newArr.splice(i,1);
        i--;
        break;
      }
    }
  }
  return newArr;
}

// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
```
