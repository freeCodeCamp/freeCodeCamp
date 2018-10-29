---
title: Use the some Method to Check that Any Elements in an Array Meet a Criteria
localeTitle: 使用某些方法检查阵列中的任何元素是否符合条件
---
## 使用某些方法检查阵列中的任何元素是否符合条件

### 问题解释

使用checkPositive函数中的some方法检查arr中的任何元素是否为正数。 `checkPositive`函数应返回一个布尔值。

#### 相关链接：

*   [Array.prototype.some（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

### 解：

```javascript
function checkPositive(arr) { 
  return arr.some((elem) => elem > 0); 
 } 
 checkPositive([1, 2, 3, -4, 5]); 

```