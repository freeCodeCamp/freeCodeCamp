---
title: While Loop
localeTitle: 而Loop
---
# 而Loop

`while`循环重复执行语句块，直到括号中指定的条件求值为`false` 。例如：

```java
while (some_condition_is_true) 
 { 
    // do something 
 } 
```

每个'迭代'（执行语句块）之前都要对括号中指定的条件进行求值 - 只有在条件求值为`true`时才执行语句。如果计算结果为`false` ，则程序的执行将从`while`块之后的语句继续执行。

**注意** ：要使`while`循环开始执行，您最初需要条件为`true` 。但是，要退出循环，必须在语句块中执行某些操作，以便在条件计算结果为`false`时最终到达迭代（如下所示）。否则循环将永远执行。 （实际上，它会一直运行直到[JVM](https://guide.freecodecamp.org/java/the-java-virtual-machine-jvm)内存不足。）

## 例

在以下示例中， `expression`由`iter_While < 10`给出。每次执行循环时，我们将`iter_While`增加`1` 。当`iter_While`值达到`10`时， `while`循环中断。

```java
int iter_While = 0; 
 while (iter_While < 10) 
 { 
    System.out.print(iter_While + " "); 
    // Increment the counter 
    // Iterated 10 times, iter_While 0,1,2...9 
    iter_While++; 
 } 
 System.out.println("iter_While Value: " + iter_While); 
```

输出：
```
0 1 2 3 4 5 6 7 8 9 
 iter_While Value: 10 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CJYj/0)