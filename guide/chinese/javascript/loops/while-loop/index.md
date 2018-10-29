---
title: While Loop
localeTitle: 而Loop
---
while循环首先评估条件。如果条件为真，则执行语句。如果条件为假，则不执行语句。之后，while循环结束。

这是while循环的**语法** ：

## 句法：
```
while (condition) 
 
 { 
 
  statement(s); 
 
 } 
```

_statement（s）：_只要条件求值为true就执行的语句。

_condition：_这里，condition是一个布尔表达式，在每次循环之前计算。如果此条件的计算结果为true，则执行语句。当condition的计算结果为false时，继续执行while循环后的语句。

## 例：
```
    var i = 1; 
    while (i < 10) 
    { 
      console.log(i); 
       i++; // i=i+1 same thing 
    } 
 
    Output: 
    1 
    2 
    3 
    4 
    5 
    6 
    7 
    8 
    9 
```

_来源： [While Loop - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)_