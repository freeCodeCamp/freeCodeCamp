---
title: Implement Insertion Sort
localeTitle: 实现插入排序
---
## 实现插入排序

### 方法：

*   插入排序假定数组分为两部分：

1.  排序（最初是第一个元素）
2.  未分类

*   每次传递，我们选择一个元素，并根据排序的数组进行检查。
*   如果所选元素小于已排序数组的最后一个元素，那么我们将排序数组移1，直到找到要_插入_所选元素的点。
*   ![插入排序在行动中](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif) - [来源](https://en.wikipedia.org/wiki/Insertion_sort)
*   插入排序的时间复杂度为**O（n 2 ）** 。
*   这是一个**稳定的**算法。

### 解：

```js
function insertionSort(array) { 
  for (let i = 1; i < array.length; i++){ 
    let curr = array[i]; 
    for (var j = i-1; j >= 0 && array[j] > curr; j--){ 
      array[j+1] = array[j]; 
    } 
    array[j+1] = curr; 
  } 
  return array; 
 } 
```

*   [运行代码](https://repl.it/@ezioda004/Insertion-Sort)

### 参考文献：

*   [维基百科](https://en.wikipedia.org/wiki/Insertion_sort)
*   [可汗学院](https://www.youtube.com/watch?v=lCzQvQr8Utw)