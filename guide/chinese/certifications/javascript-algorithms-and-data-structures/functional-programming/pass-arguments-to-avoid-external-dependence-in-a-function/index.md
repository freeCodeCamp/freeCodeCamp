---
title: Pass Arguments to Avoid External Dependence in a Function
localeTitle: 传递参数以避免函数中的外部依赖
---
## 传递参数以避免函数中的外部依赖

## 提示：1

尝试将参数传递给函数并返回此参数的增加值。

**提前解决！**

## 基本代码解决方案

```javascript
// the global variable 
 var fixedValue = 4; 
 
 // Add your code below this line 
 function incrementer (value) { 
  return value + 1; 
 
  // Add your code above this line 
 } 
 
 var newValue = incrementer(fixedValue); // Should equal 5 
 console.log(fixedValue); // Should print 4 
```

### 方法

此代码将提供与上一个挑战相同的结果，只是这次我们将`fixedValue`作为参数传递给函数。