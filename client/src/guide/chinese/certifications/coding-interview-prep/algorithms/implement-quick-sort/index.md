---
title: Implement Quick Sort
localeTitle: 实施快速排序
---
## 实施快速排序

### 方法：

*   快速排序是一种有效的排序算法。它是一种就地算法，因此它不需要任何辅助空间。
*   首先选择一个随机的枢轴点，将所有较小的元素移动到它的左边，将更大的元素移动到它的右边。
*   在获得该实际上是该元素的固定位置的pivotIndex之后，我们通过重新调用此函数找到其他pivotIndex。
*   快速排序的最坏情况是**O（n 2 ）**但是如果我们选择随机枢轴点就可以避免这种情况，因此它的大O是**O（nlogn）** 。
*   它的空间复杂度是**O（logn）** 。
*   这是一个**不稳定的**算法。
*   ![快速排序行动](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)

### 解：

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

*   [运行代码](https://repl.it/@ezioda004/Quick-Sort)

### 参考：

*   [维基百科](https://en.wikipedia.org/wiki/Quicksort)
*   [可汗学院](https://www.khanacademy.org/computing/computer-science/algorithms/quick-sort/a/overview-of-quicksort)