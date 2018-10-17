---
title: Implement Quick Sort
---
## Implement Quick Sort

### Method:
- Quick sort is an efficient sorting algorithm. It's an in-place algorithm so it doesn't take any auxilary space.
- First pick a random pivot point around which move all the smaller elements to it to the left of it and the bigger elements to the right of it. 
- After getting the pivotIndex which is essentially the fixed position of that element, we find other pivotIndex by recusirvely calling this function.
- Quick sort's worst case is **O(n<sup>2</sup>)** but that can be avoided if we pick random pivot point, so that way it's big O is **O(nlogn)**.
- It's space complexity is **O(logn)**.
- It's an **unstable** algorithm.
- ![Quick sort in action](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)

### Solution:
```js
//Swapping array elements via ES6 array destructuring 
function swap(arr, x, y){
  [arr[x], arr[y]] = [arr[y], arr[x]];
}

//Pivot function returns the fixed pivot point
function pivot(arr, left = 0, right = arr.length-1){
  let shift = left;
  for (let i = left+1; i <= right; i++){
  
    //Move all the small elements on the left side
    if (arr[i] < arr[left]) swap(arr, i, ++shift);
  }
  
  //Finally swapping the last element with the left
  swap(arr, left, shift);
  return shift;
}

function quickSort(array, left = 0, right = array.length-1) {
  if (left < right){
    let pivotIndex = pivot(array, left, right);
    
    //Recusrively calling the function to the left of the pivot and to the right of the pivot
    quickSort(array, left, pivotIndex-1);
    quickSort(array, pivotIndex+1, right);
  }
  return array;
}
```
- [Run Code](https://repl.it/@ezioda004/Quick-Sort)
### Reference:
- [Wikipedia](https://en.wikipedia.org/wiki/Quicksort)
- [Khan Academy](https://www.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/overview-of-quicksort)

