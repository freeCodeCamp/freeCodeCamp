---
title: Comparison with the Equality Operator
localeTitle: 与平等算子的比较
---
## 与等式运算符的比较

### 问题解释：

_将相等运算符添加到指示的行，以便当`val`等于12时，函数将返回“Equal”。_

#### 提示1

请记住， _相等性与赋值（ `=` ）不同，后者将运算符右侧的值赋给左侧的变量。_ [1](#cite1)

> _现在尝试解决问题_

## 扰流板警报！

**提前解决！**

## 基本代码解决方案

```javascript
function testEqual(val) { 
  if (val == 12) { // Change this line 
    return "Equal"; 
  } 
  return "Not equal"; 
 } 
 // Change this value to test 
 testEqual(10); 
```

· [在repl.it上运行代码](https://repl.it/@AdrianSkar/Basic-JS-Equality-operator)

### 代码说明

功能首先评估`if`条件`(val == 12)`的计算结果为`true` 。如果是，则返回大括号之间的语句（“Equal”）。如果没有，则返回它们之外的下一个`return`语句（“Not equal”）。

### 来源

1 。 [“基本JavaScript：与平等运算符的比较”，JCC _算法和数据结构认证的_ fCC课程](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator)

### 资源

*   [“Equality operator” - _MDN JavaScript参考_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Equality_())