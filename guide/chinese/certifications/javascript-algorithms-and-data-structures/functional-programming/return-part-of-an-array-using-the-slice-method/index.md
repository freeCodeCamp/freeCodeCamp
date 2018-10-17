---
title: Return Part of an Array Using the slice Method
localeTitle: 使用切片方法返回数组的一部分
---
## 使用切片方法返回数组的一部分

### 问题解释

在给定提供的beginSlice和endSlice索引的情况下，使用sliceArray函数中的slice方法返回anim数组的一部分。该函数应返回一个数组。

### 方法

只需编写一行代码即返回语句即可编写该函数。就像在给出的示例中一样，使用`beginSlice`和`endSlice`参数作为`slice()`方法的参数，将函数作为参数的数组`slice()` 。 记住`slice()`方法的结构：

```javascript
var arr = ["Cat", "Dog", "Tiger", "Zebra", "Ant"]; 
 arr.slice([index-to-begin-slice] , [index-to-end-slice]); 
```

### 解

```javascript
function sliceArray(anim, beginSlice, endSlice) { 
  // Add your code below this line 
  return anim.slice(beginSlice, endSlice); 
  // Add your code above this line 
 } 
 var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"]; 
 sliceArray(inputAnim, 1, 3); 
```

#### 相关链接：

*   [Array.prototype.slice（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)