---
title: Implement Selection Sort
localeTitle: 实施选择排序
---
## 实施选择排序

### 方法：

*   Selection Sort是理解和实现的更简单的排序算法之一。
*   该算法将数组分为两部分：

1.  排序
2.  未分类

*   Sorted部分位于数组的开头，之后是Unsorted部分。
*   每次传递，最初我们假设第一个元素是最小的，然后我们遍历整个数组并_选择_最小的元素。在传递结束时，我们将最小元素交换到排序数组。
*   它具有**O（n 2 ）**时间复杂度。

### 解：

```js
function swap(a, b, arr){ 
  let tmp = arr[a]; 
  arr[a] = arr[b]; 
  arr[b] = tmp; 
 } 
 function selectionSort(array) { 
  for (let i = 0; i < array.length-1; i++){ 
    let min = i; 
    for (let j = i+1; j < array.length; j++){ 
      if (array[min] > array[j]) min = j; 
    } 
    swap(i, min, array); 
  } 
  return array; 
 } 
```

### 参考文献：

*   阅读[维基百科的](https://en.wikipedia.org/wiki/Selection_sort)选择排序