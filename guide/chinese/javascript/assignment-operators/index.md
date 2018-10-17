---
title: Assignment Operators
localeTitle: 分配运营商
---
# 分配运营商

赋值运算符，顾名思义，为变量赋值（或重新赋值）。虽然赋值运算符有很多变化，但它们都是基本赋值运算符的构建。

## 句法

`x = y;` |说明|必要性 ：---------：|：---------------------：|：---------：  
`x` |变量|需要  
`=` |分配操作员|需要  
`y` |赋值给变量的值需要

## 例子
```
let initialVar = 5;   // Variable initialization requires the use of an assignment operator 
 
 let newVar = 5; 
 newVar = 6;   // Variable values can be modified using an assignment operator 
```

## 变化

其他赋值运算符是使用变量（由上面的x表示）和值（由上面的y表示）执行某些操作的简写，然后将结果赋给变量本身。

例如，下面是加法赋值运算符的语法：
```
x += y; 
```

这与应用加法运算符并将总和重新分配给原始变量（即x）相同，可以通过以下代码表示：
```
x = x + y; 
```

为了使用实际值来说明这一点，下面是使用加法赋值运算符的另一个示例：
```
let myVar = 5;   // value of myVar: 5 
 myVar += 7;   // value of myVar: 12 = 5 + 7 
```

## Javascript的赋值运算符的完整列表

运营商|语法|长版  
\------------------------------- | --------- | -------------  
作业| x = y | x = y  
添加任务| x + = y | x = x + y  
减法赋值| x - = y | x = x - y  
乘法赋值| x \* = y | x = x \* y  
部门分配| x / = y | x = x / y  
剩余任务| x％= y | x = x％y  
指数分配| x \*\* = y | x = x \*\* y  
左移分配| x << = y | x = x << y 右移分配| x >> = y | x = x >> y  
无符号右移分配| x >>> = y | x = x >>> y  
按位AND赋值| x＆= y | x = x＆y  
按位异或分配| x ^ = y | x = x ^ y  
按位OR赋值| x | = y | x = x | ÿ

### 更多信息：

[MDN链接](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Assignment)

[MSDN链接](https://docs.microsoft.com/en-us/scripting/javascript/reference/assignment-operator-decrement-equal-javascript)