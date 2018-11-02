---
title: Add Items to an Array with push() and unshift()
localeTitle: 使用push（）和unshift（）将项添加到数组
---
## 使用push（）和unshift（）将项添加到数组

*   就像给出的示例一样，在数组上使用`.unshift()`方法将元素添加到数组的开头，并使用`.push()`方法将元素添加到数组的末尾。

## 解：

```javascript
function mixedNumbers(arr) { 
  // change code below this line 
 arr.unshift('I',2,'three'); 
 arr.push(7,'VIII', 9); 
  // change code above this line 
  return arr; 
 } 
 
 // do not change code below this line 
 console.log(mixedNumbers(['IV', 5, 'six'])); 

```