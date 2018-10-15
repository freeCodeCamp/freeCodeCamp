---
title: Add Elements to the End of an Array Using concat Instead of push
localeTitle: 使用concat将元素添加到数组的末尾而不是push
---
## 使用concat将元素添加到数组的末尾而不是push

在`push`方法将新元素添加到原始数组的末尾的地方， `concat`方法创建一个新数组，其中包含原始数组和新元素中的元素。使用`concat`时，原始数组保持不变。

#### 相关链接：

*   [Array.prototype.concat（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

## 解

```javascript
function nonMutatingPush(original, newItem) { 
 
  // Add your code below this line 
 
  return original.concat(newItem); 
 
  // Add your code above this line 
 } 
 
 var first = [1, 2, 3]; 
 var second = [4, 5]; 
 nonMutatingPush(first, second); 

```