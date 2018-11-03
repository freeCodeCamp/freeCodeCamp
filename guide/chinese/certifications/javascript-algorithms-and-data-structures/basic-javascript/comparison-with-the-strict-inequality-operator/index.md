---
title: Comparison with the Strict Inequality Operator
localeTitle: 与严格不等式算子的比较
---
## 与严格不等式算子的比较

### 问题解释：

· _将`strict inequality operator`添加到`if`语句，以便当`val`不严格等于`17`时，函数将返回“Not Equal”。_

#### 提示1

如果第一个值不等于考虑值类型的第二个值，则严格不等式运算符（ `!==` ）将返回`true` 。

> _现在尝试解决问题_

## 扰流板警报！

**提前解决！**

## 基本代码解决方案

```javascript
function testStrictNotEqual(val) { 
  if (val !== 17) { 
    return "Not equal"; 
  } 
  return "Equal"; 
 } 
 
 // Change this value to test 
 testStrictNotEqual(10); 
```

### 代码说明

该函数首先计算`if`条件`(val !== 17)`计算结果为`true`考虑价值和价值型。如果是，则返回花括号之间的语句（“不等于”）。如果没有，则返回它们之外的下一个`return`语句（“Equal”）。

### 资源

*   [“非身份/严格不平等（！==）” - _MDN JavaScript参考_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Non-identity_strict_inequality_(!))