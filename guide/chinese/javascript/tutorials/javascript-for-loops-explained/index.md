---
title: JavaScript for Loops Explained
localeTitle: 用于循环的JavaScript解释
---
for语句创建一个循环，该循环由三个可选表达式组成，括在括号中并用分号分隔，后跟循环中执行的语句或一组语句。

for循环具有以下语法：
```
for (<a href='http://forum.freecodecamp.com/t/javascript-while-loop/14668' target='_blank' rel='nofollow'>initialization]; [condition]; [final-expression]) { 
    code block to be executed 
 } 
```

在循环（代码块）开始之前执行\[初始化\]。

\[condition\]定义运行循环的条件（代码块）。

每次执行循环（代码块）后执行\[final-expression\]。

## JavaScript中的示例：
```
var ourArray = []; 
 for (var i = 0; i < 5; i++) { 
    ourArray.push(i); 
 } 
```

从上面的示例中，您可以阅读：

\[initialization\]在循环开始之前设置变量（var i = 0）。

\[condition\]定义循环运行的条件（i必须小于5）。

\[final-expression\]每次执行循环中的代码块时都会增加一个值（i ++）。

## 为什么我们需要“for循环”？

for循环用于循环遍历代码块已知次数。有时它是计算机知道多少次，而不是你，但它仍然是已知的。

查看我们关于循环的其他一些文章：

*   \[而Loop
*   [对于In Loop](http://forum.freecodecamp.com/t/javascript-for-in-loop/14665)