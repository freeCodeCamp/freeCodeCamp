---
title: Do...While Loop
localeTitle: 做......循环
---
# 做......循环

`do while`类似于`while`循环，但是在检查给定条件之前，保证语句组至少运行一次。 需要注意的一点是'while'循环是一个退出控制循环。虽然（它不一定会执行），'do while'是一个入口控制循环（它将至少执行一次，即使条件不是真的）。

```java
do 
 { 
    // Statements 
 } 
 while (condition); 
```

## 例

```java
int iter_DoWhile = 20; 
 do 
 { 
    System.out.print (iter_DoWhile + " "); 
 
    // Increment the counter 
    iter_DoWhile++; 
 } 
 while (iter_DoWhile < 10); 
 System.out.println("iter_DoWhile Value: " + iter_DoWhile); 
```

输出：
```
    20 
    iter_DoWhile Value: 21 
```

**记住** ：执行一次代码体之后检查`do-while`循环的条件。

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CJYl/0)

## 行使

你能猜出以下代码片段的输出吗？

```java
int i = 10; 
 do 
 { 
    System.out.println("The value of i is " + i); 
    i--; 
 } 
 while (i >= 10); 

```