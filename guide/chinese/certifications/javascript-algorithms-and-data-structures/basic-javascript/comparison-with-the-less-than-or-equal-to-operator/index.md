---
title: Comparison with the Less Than Or Equal To Operator
localeTitle: 与小于或等于运算符的比较
---
## 与小于或等于运算符的比较

**`<=`** （小于或等于）是一个逻辑运算符，它返回true，左边的值与右边的值**相同或者更低** 。

## 基本解决方案

```javascript
function testLessOrEqual(val) { 
  if (val <= 12) 
    return "Smaller Than or Equal to 12"; 
 
  if (val <= 24) 
    return "Smaller Than or Equal to 24"; 
 
  return "More Than 24"; 
 } 

```