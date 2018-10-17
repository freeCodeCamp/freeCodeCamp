---
title: Continue Control Statement
localeTitle: 继续控制声明
---
# 继续控制声明

`continue`语句使循环在继续之后跳过所有以下行，并跳转到下一次迭代的开始。在`for`循环中，控制跳转到update语句，在`while`或`do while`循环中，控制跳转到布尔表达式/条件。

```java
for (int j = 0; j < 10; j++) 
 { 
    if (j == 5) 
    { 
        continue; 
    } 
    System.out.print (j + " "); 
 } 
```

除非等于`5` ，否则将为每次迭代打印`j`的值。由于`continue` ，将跳过print语句，输出将是：
```
0 1 2 3 4 6 7 8 9 
```

假设你想要在`mississippi`这个词中计算`i`的数量。在这里，您可以使用带有`continue`语句的循环，如下所示：

```java
String searchWord = "mississippi"; 
 
 // max stores the length of the string 
 int max = searchWord.length(); 
 int numPs = 0; 
 
 for (int i = 0; i < max; i++) 
 { 
    // We only want to count i's - skip other letters 
    if (searchWord.charAt(i) != 'i') 
    { 
        continue; 
    } 
 
    // Increase count_i for each i encountered 
    numPs++; 
 } 
 
 System.out.println("numPs = " + numPs); 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CJZH/0)

此外，您可以使用标签从嵌套集中选择特定循环以跳到下一次迭代。