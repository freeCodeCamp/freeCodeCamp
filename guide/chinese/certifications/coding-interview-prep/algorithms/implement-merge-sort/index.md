---
title: Implement Merge Sort
localeTitle: 实现合并排序
---
## 实现合并排序

### 方法：

*   合并排序是一个经典的分而治之的问题。
*   涉及以下步骤：
*   除以：我们使用recusion从中间打破数组，直到我们留下1个元素。
*   征服：然后我们对这些小数组进行排序。
*   组合：最后，我们将这些小数组合并为一个排序数组并继续执行直到我们组合所有数组。
*   Merge Sort的时间复杂度为**O（nlogn）** 。
*   Merge Sort的空间复杂度为**O（n）** 。
*   这是一个**稳定的**算法。
*   ![合并排序操作](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif)

### 解：

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

*   [运行代码](https://repl.it/@ezioda004/Merge-Sort)

### 参考文献：

*   [维基百科](https://en.wikipedia.org/wiki/Merge_sort)
*   [Hackerrank的](https://www.youtube.com/watch?v=KF2j-9iSf4Q)视频