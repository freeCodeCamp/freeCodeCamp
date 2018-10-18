---
title: Use the every Method to Check that Every Element in an Array Meets a Criteria
localeTitle: 使用every方法检查数组中的每个元素是否符合条件
---
## 使用every方法检查数组中的每个元素是否符合条件

### 问题说明：

使用`checkPositive`函数中的`every`方法检查`arr`每个元素是否为正数。该函数应返回一个布尔值。

#### 相关链接：

*   [Array.prototype.every（）](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

### 暗示

不要忘记`return` 。

## 解

```javascript
function checkPositive(arr) { 
  // Add your code below this line 
 
  return arr.every(val => val > 0); 
  // Add your code above this line 
 } 
 checkPositive([1, 2, 3, -4, 5]); 
```

## 替代方案

```javascript
function checkPositive(arr) { 
  // Add your code below this line 
    return arr.every(function(value) { 
        return value > 0; 
    }); 
  // Add your code above this line 
 } 
 checkPositive([1, 2, 3, -4, 5]); 

```