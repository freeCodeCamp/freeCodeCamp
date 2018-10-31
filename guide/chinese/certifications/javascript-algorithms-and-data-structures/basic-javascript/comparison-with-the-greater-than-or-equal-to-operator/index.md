---
title: Comparison with the Greater Than Or Equal To Operator
localeTitle: 与大于或等于运算符的比较
---
## 与大于或等于运算符的比较

*   `>=` （大于或等于）是一个逻辑运算符，它返回true，左边的值与右边的值**相同或更高** 。

## 基本解决方案

```javascript
function testGreaterOrEqual(val) { 
  if (val >= 20) 
    return "20 or Over"; 
 
  if (val >= 10) 
    return "10 or Over"; 
 
  return "Less than 10"; 
 } 

```