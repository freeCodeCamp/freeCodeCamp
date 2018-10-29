---
title: Code Block
localeTitle: 代码块
---
## 介绍

在计算机编程中， **块**或代码**块**是组合在一起的代码段。块由一个或多个声明和语句组成。允许创建块的编程语言（包括嵌套在其他块中的块）称为块结构编程语言。 JavaScript就是这样一种编程语言。

JavaScript中的**块**语句用于对零个或多个语句进行分组。该块由一对花括号分隔。
```
{ 
  statement_1; 
  statement_2; 
  ... 
  statement_n; 
 } 
```

[MDN链接](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block)

## 例子

**块**语句通常与控制流语句一起使用（例如， `if...else` ， `for` ， `while` ）和函数。
```
while (x < 10) { 
  x++; 
 } 
 
 function addnums(num1, num2) { 
  var sum = 0; 
  sum = num1 + num2; 
  return sum; 
 } 

```