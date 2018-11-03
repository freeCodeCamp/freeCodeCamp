---
title: Comparison with the Greater Than Operator
localeTitle: 与大于运营商的比较
---
## 与大于运营商的比较

`>` （大于）是一个逻辑运算符，它返回true，左边的值高于右边的值。

## 基本解决方案

```javascript
function testGreaterThan(val) { 
  if (val > 100) 
    return "Over 100"; 
 
  if (val > 10) 
    return "Over 10"; 
 
  return "10 or Under"; 
 } 

```