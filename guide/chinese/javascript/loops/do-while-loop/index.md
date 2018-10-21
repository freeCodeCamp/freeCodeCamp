---
title: Do...While Loop
localeTitle: 做......循环
---
`do...while`循环与[`while`](http://forum.freecodecamp.com/t/javascript-while-loop/14668)循环密切相关。在do while循环中，在循环结束时检查条件。

这是`do...while`循环的**语法** ：

## 句法：
```
 do { 
 
   *Statement(s);* 
 
 } while (*condition*); 
```

**statement（s）：**在计算条件或布尔表达式之前**至少**执行**一次的**语句，并**在**每次条件计算结果为true时重新执行。

**condition：**这里，条件是布尔表达式 。如果布尔表达式的计算结果为true，则再次执行该语句。当布尔表达式求值为false时，循环结束。

## 例：
```
var i = 0; 
 do { 
  i = i + 1; 
  console.log(i); 
 } while (i < 5); 
 
 Output: 
 1 
 2 
 3 
 4 
 5 
```

来源： [**做......同时**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do…while)