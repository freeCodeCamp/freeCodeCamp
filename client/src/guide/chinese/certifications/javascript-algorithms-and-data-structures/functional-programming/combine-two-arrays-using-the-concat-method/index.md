---
title: Combine Two Arrays Using the concat Method
localeTitle: 使用concat方法组合两个数组
---
## 使用concat方法组合两个数组

*   concat方法用于连接两个或多个数组或字符串。
*   此方法不会改变现有数组，但会返回一个新数组。

## 解

```javascript
function nonMutatingConcat(original, attach) { 
  // Add your code below this line 
 
  return original.concat(attach); 
 
  // Add your code above this line 
 } 
 var first = [1, 2, 3]; 
 var second = [4, 5]; 
 nonMutatingConcat(first, second); 

```