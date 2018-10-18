---
title: Return a Sorted Array Without Changing the Original Array
localeTitle: 返回排序数组而不更改原始数组
---
## 返回排序数组而不更改原始数组

### 方法

首先将作为参数的数组连接到新的空数组。然后使用上一个挑战中所见的`sort()`方法，并创建一个函数以按升序对新数组进行排序。

### 解

```javascript
var globalArray = [5, 6, 3, 2, 9]; 
 function nonMutatingSort(arr) { 
  // Add your code below this line 
  return [].concat(arr).sort(function(a, b) { 
    return a - b; 
  }); 
  // Add your code above this line 
 } 
 nonMutatingSort(globalArray); 

```