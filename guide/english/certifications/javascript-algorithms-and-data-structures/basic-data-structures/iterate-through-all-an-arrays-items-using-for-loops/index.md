---
title: Iterate Through All an Array's Items Using For Loops
---
## Iterate Through All an Array's Items Using For Loops

## Hint 1
- A nested ``for`` loop must be used to search through every element in the array.
```javascript
 for (let i = 0; i < arr.length; i++) {
````
## Hint 2
- Every element of the array must then be compared to the `elem` parameter passed through the `filteredArray()` function.
```javascript
if (arr[i].indexOf(elem)==-1){
```
## Hint 3
- If a match is NOT found then `newArr` have that entire subarray added. The `push()` function is very useful here. 
```javascript
newArr.push(arr[i]);
```
- Once that entire subarray is added to `newArr` the loop continue with the next element.

## Solution:
```javascript
function filteredArray(arr, elem) {
  let newArr = [];
  // change code below this line
  
 for (let i = 0; i < arr.length; i++) { 
    if (arr[i].indexOf(elem)==-1){ //Checks every parameter for the element and if is NOT there continues the code
          newArr.push(arr[i]); //Inserts the element of the array in the new filtered array
            };
          };

  // change code above this line
  return newArr;
};
// change code here to test different cases:
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
```
