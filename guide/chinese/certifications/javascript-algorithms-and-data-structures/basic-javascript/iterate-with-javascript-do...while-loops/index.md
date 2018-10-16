---
title: Iterate with JavaScript Do...While Loops
localeTitle: 使用JavaScript迭代...循环
---
## 使用JavaScript迭代...循环

*   `Do...While`循环确保代码至少执行一次，并且在执行之后，如果`while()`内的条件为**真** ，则继续循环，否则停止。

## 解

```javascript
var myArray = []; 
 var i = 10; 
 
 do { 
  myArray.push(i); 
  i++; 
 } while(i <= 10); 

```