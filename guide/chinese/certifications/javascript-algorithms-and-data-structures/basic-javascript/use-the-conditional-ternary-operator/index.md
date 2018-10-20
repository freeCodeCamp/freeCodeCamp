---
title: Use the Conditional (Ternary) Operator
localeTitle: 使用条件（三元）运算符
---
## 使用条件（三元）运算符

### 提示1

使用三元运算符检查是否相等。

### 警告解决方案！

```javascript
function checkEqual(a, b) { 
  return (a = b ? true : false ); 
 } 
 
 checkEqual(1, 2); 

```