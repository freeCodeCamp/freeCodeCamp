---
title: Jump Statements
localeTitle: 跳转声明
---
# 跳转声明

跳转语句是一种[_控制流_](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/flow.html)语句。基本上，您可以使用它们来更改正常执行过程中执行语句的顺序。实质上，这些语句会导致程序控制从下一个预期执行点“跳”到程序中的另一个位置。

以下跳转语句通常与循环一起使用：

*   [打破](http://forum.freecodecamp.com/t/java-loops-break-control-statement)
*   [继续](http://forum.freecodecamp.com/t/java-loops-continue-control-statement)

当满足条件时，'break'控制语句会跳出循环。这意味着循环的其余部分将不会运行。 例如，在下面的循环中，如果我达到5，则循环中断，因此它不会继续。

```java
for(int i=0;i<10;i++){ 
 
  if(i == 5){ //if i is 5, break out of the loop. 
    break; 
  } 
 
 System.out.println(i); 
 } 
```

输出：
```
    0 1 2 3 4 
```

'continue'控制语句是'break'的不太强烈的版本。它只会突破当前的循环实例并继续。在下面的循环中，如果i为5，则循环继续，因此它将跳过下面的print语句并继续前进，直到我达到10并且循环停止。

```java
for(int i=0;i<10;i++){ 
 
  if(i == 5){ //if i is 5, break out of the current instance loop. 
    continue; 
  } 
 
 System.out.println(i); 
 } 
```

输出：
```
    0 1 2 3 4 6 7 8 9 

```