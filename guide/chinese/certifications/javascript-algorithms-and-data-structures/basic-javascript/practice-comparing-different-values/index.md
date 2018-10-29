---
title: Practice comparing different values
localeTitle: 练习比较不同的值
---
## 练习比较不同的值

### 问题解释：

· _修改函数，使其仅在值**严格**相等时返回“Equal”。_

#### 提示1

请记住，在上一次练习中， _与等于运算符不同的是，它尝试将两个值转换为常见类型，而严格相等运算符不执行类型转换。_ [1](#cite1)

> _现在尝试解决问题_

## 扰流板警报！

**提前解决！**

## 基本代码解决方案

```javascript
// Setup 
 function compareEquality(a, b) { 
    if (a === b) { // Change this line 
        return  "Equal"; 
    } 
    return  "Not Equal"; 
 } 
 
 // Change this value to test 
 compareEquality(10, "10"); 
```

### 代码说明

功能首先评估`if`条件`(a === b)`的计算结果为`true`同时考虑类型和值。如果是，则返回大括号之间的语句（“Equal”）。如果没有，则返回它们之外的下一个`return`语句（“Not equal”）。

### 来源

1 。 [“基本JavaScript：与严格平等运算符的比较”，JCC _算法和数据结构认证的_ fCC课程](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-equality-operator)

### 资源

*   [“使用Equality Operators” - _MDN JavaScript参考_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators#Using_the_Equality_Operators)