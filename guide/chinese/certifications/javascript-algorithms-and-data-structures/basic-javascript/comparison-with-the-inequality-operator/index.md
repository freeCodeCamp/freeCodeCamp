---
title: Comparison with the Inequality Operator
localeTitle: 与不等式算子的比较
---
## 与不等式算子的比较

*   `!=` （不等式）是一个逻辑运算符，它返回true，左边的值与右边的值不同。
*   不等式运算符认为`7`和`"7"`是相同的，因为它不比较变量的类型。

## 基本解决方案

```javascript
function testNotEqual(val) { 
  if (val != 99) 
    return "Not Equal"; 
 
  return "Equal"; 
 } 

```