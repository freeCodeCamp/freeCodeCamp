---
title: Comparison with the Less Than Operator
localeTitle: 与小于算子的比较
---
## 与小于算子的比较

**`<`** （Less Than）是一个逻辑运算符，它返回true，左边的值低于右边的值。

## 基本解决方案

```javascript
function testLessThan(val) { 
  if (val < 25) 
    return "Under 25"; 
 
  if (val < 55) 
    return "Under 55"; 
 
  return "55 or Over"; 
 } 

```