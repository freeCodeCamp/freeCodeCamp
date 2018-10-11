---
title: Implement Merge Sort
---
## Implement Merge Sort

### Method:
- Merge Sort is a classic divide and conquer problem.
- The following steps are involved:
  - Divide: We break the array from the middle using recusion until we're left with 1 element.
  - Conquer: Then we sort these small arrays.
  - Combine: Finally, we merge these small arrays into one sorted array and keep doing it until we combine all the arrays.
- Time complexity of Merge Sort is **O(nlogn)**.
- Space complexity of Merge Sort is **O(n)**.
- It's a **stable** algorithm.
- ![Merge Sort in action](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

### Solution:
```js
//Merger function, which merges 2 sorted array into 1 sorted array
function merger(arr1, arr2){
  let i = 0, j = 0, mergedArr = [];
  while (i < arr1.length && j < arr2.length){
    if (arr1[i] > arr2[j]) mergedArr.push(arr2[j++]);
    else mergedArr.push(arr1[i++]);
  }
  while (i < arr1.length){
    mergedArr.push(arr1[i++]);
  }
  while (j < arr2.length){
    mergedArr.push(arr2[j++]);
  }
  return mergedArr;
}
function mergeSort(array) {
  //Array of length 1 is sorted so we return the same array back
  if (array.length == 1) return array;
  
  //Break down the array to half from middle into left and right
  let middle = Math.floor(array.length/2);
  let left = mergeSort(array.slice(0, middle));
  let right = mergeSort(array.slice(middle));  
  
  //Return the merged sorted array
  return merger(left, right);
}
```
- [Run Code](https://repl.it/@ezioda004/Merge-Sort)
### References:
- [Wikipedia](https://en.wikipedia.org/wiki/Merge_sort)
- Video by [Hackerrank](https://www.youtube.com/watch?v=KF2j-9iSf4Q)
