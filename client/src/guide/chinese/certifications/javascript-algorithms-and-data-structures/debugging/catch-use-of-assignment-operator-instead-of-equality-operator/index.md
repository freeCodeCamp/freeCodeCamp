---
title: Catch Use of Assignment Operator Instead of Equality Operator
localeTitle: 捕获使用赋值运算符而不是等式运算符
---
## 捕获使用赋值运算符而不是等式运算符

*   在这个挑战中只能编辑if语句。
*   `=`运算符本身仅用于赋值，而不是用于比较它们。

## 解

```javascript
let x = 7; 
 let y = 9; 
 let result = "to come"; 
 
 if(x == y) { 
  result = "Equal!"; 
 } else { 
  result = "Not equal!"; 
 } 
 
 console.log(result); 

```