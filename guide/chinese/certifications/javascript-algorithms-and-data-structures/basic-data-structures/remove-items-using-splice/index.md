---
title: Remove Items Using splice()
localeTitle: 使用splice（）删除项目
---
## 使用splice（）删除项目

*   必须在`arr`数组上调用`splice()`函数，以便从数组的中心删除1个或多个元素。
*   数组`arr`目前的`arr`值为16.只需删除返回10所需的任意数量的变量。

## 解：

```javascript
function sumOfTen(arr) { 
  // change code below this line 
  arr.splice(1,2); 
  // change code above this line 
  return arr.reduce((a, b) => a + b); 
 } 
 
 // do not change code below this line 
 console.log(sumOfTen([2, 5, 1, 5, 2, 1])); 

```