---
title: Remove Items from an Array with pop() and shift()
localeTitle: 使用pop（）和shift（）从数组中删除项
---
## 使用pop（）和shift（）从数组中删除项

*   必须使用`popped`和`shifted`变量调用和初始化`.pop()`方法和`.shift()`方法，以从函数返回正确的答案。

## 解：

```javascript
function popShift(arr) { 
  let popped = arr.pop(); 
  let shifted = arr.shift(); 
  return [shifted, popped]; 
 } 
 
 // do not change code below this line 
 console.log(popShift(['challenge', 'is', 'not', 'complete'])); 

```