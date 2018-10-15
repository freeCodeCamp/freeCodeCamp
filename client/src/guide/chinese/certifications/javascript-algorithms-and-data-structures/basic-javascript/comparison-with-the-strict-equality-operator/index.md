---
title: Comparison with the strict equality operator
localeTitle: 与严格相等算子比较
---
## 与严格相等算子比较

### 问题解释：

· _在`if`语句中使用strict equality运算符，因此当`val`严格等于`7`时，函数将返回“Equal”。_

#### 提示1

请记住，在上一次练习中， _相等性与赋值（ `=` ）不同，后者将运算符右侧的值赋给左侧的变量。_ [1](#cite1)

> _现在尝试解决问题_
> 
> #### 提示2
> 
> _与尝试将两个值都转换为公共类型的等于运算符不同，严格相等运算符不执行类型转换。_ [2](#cite2) _现在尝试解决问题_

## 扰流板警报！

**提前解决！**

## 基本代码解决方案

```javascript
// Setup 
 function testStrict(val) { 
  if (val === 7) { // Change this line 
    return "Equal"; 
  } 
  return "Not equal"; 
 } 
 
 // Change this value to test 
 testStrict(10); 
```

### 代码说明

功能首先评估`if`条件`(val === 7)`的计算结果为`true` 。如果是，则返回大括号之间的语句（“Equal”）。如果没有，则返回它们之外的下一个`return`语句（“Not equal”）。

### 来源

1 。 [“基本JavaScript：与平等运算符的比较”，JCC _算法和数据结构认证的_ fCC课程](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator)

2 。 [“基本JavaScript：与严格平等运算符的比较”，JCC _算法和数据结构认证的_ fCC课程](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-equality-operator)

### 资源

*   [“if ... else” - _MDN JavaScript参考_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if…else)
    
*   [孔多夫，亚历山大。 “理解JS：强制”。 _Hackernoon_](https://hackernoon.com/understanding-js-coercion-ff5684475bfc) ，2018年9月15日访问
    
*   [“比较运算符” - _MDN JavaScript参考_](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)