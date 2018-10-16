---
title: Implement Bubble Sort
localeTitle: 实施冒泡排序
---
## 实施冒泡排序

### 方法：

*   冒泡排序是一种排序算法，它将每个过程结束时最大数字排序或_冒泡_作为最后一个元素。
*   我们将每个元素与前面的元素进行比较，如果之前的元素较小，我们交换它们的位置。
*   冒泡排序的时间复杂度为**O（n 2 ）** 。
*   这是一个**稳定的**算法。
*   ![泡泡排序在行动](https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif)

### 解：

#### 解决方案1：基本

```js
function swap(a, b, arr){ 
  let tmp = arr[a]; 
  arr[a] = arr[b]; 
  arr[b] = tmp; 
 } 
 function bubbleSort(array) { 
  for (let i = 0; i < array.length; i++){ 
    for (let j = 0; j < array.length-1-i; j++){ // -i because the largest element will be bubbled at the end so we don't have to compare. 
      if (array[j] > array[j+1]){ 
        swap(j, j+1, array); 
      } 
    } 
  } 
  return array; 
 } 
```

#### 解决方案2：高级

`js function bubbleSort(array) { for (let i = 0; i < array.length; i++){ for (let j = 0; j < array.length-1-i; j++){ if (array[j] > array[j+1]) [array[j], array[j+1]] = [array[j+1], array[j]]; // Using ES6 array destructuring to swap } } return array; }`

*   [运行代码](https://repl.it/@ezioda004/Bubble-Sort)
    
    ### 参考文献：
    
*   [GeeksForGeeks](https://www.geeksforgeeks.org/bubble-sort/)
    
*   [维基百科](https://en.wikipedia.org/wiki/Bubble_sort)
    
*   视频来自[HackerRank](https://www.youtube.com/watch?v=6Gv8vg0kcHc)