---
title: Break Control Statement
localeTitle: 中断控制声明
---
# 中断控制声明

终止循环并开始执行紧跟循环的代码。如果你有嵌套循环， `break`语句将只结束它所在的循环。

```java
// Loop 1 
 for (int i = 0; i < 10; i++) 
 { 
    // Loop 2 
    for (int j = 0; j < 10; j++) 
    { 
        if (i == 5 && j == 5) 
        { 
            break; // Will terminate Loop 2, but Loop 1 will keep going 
        } 
    } 
 } 
```

但是，如果您确实想要突破外部循环，可以使用标签退出：

```java
loop1: // This is a label 
 for (int i = 0; i < 10; i++) 
 { 
    // Loop 2 
    for (int j = 0; j < 10; j++) 
    { 
        if (i == 5 && j == 5) 
        { 
            break loop1; // Will break out of Loop 1, instead of Loop 2 
        } 
    } 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CJZA/0)

在搜索数组中的元素时， `break`语句特别有用。使用下面代码中的`break`可以提高效率，因为一旦找到我们要查找的元素（ `searchFor` ），循环就会停止，而不是一直到达`arrayInts`的末尾。

```java
int j = 0; 
 int[] arrayOfInts = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}; 
 int searchFor = 5; 
 
 for (int i : arrayOfInts) 
 { 
    if (arrayOfInts[j] == searchFor) 
    { 
        break; 
    } 
    j++; 
 } 
 
 System.out.println("j = " + j); 
```

Break语句也可以在while语句下使用。

```java
int i = 0; 
 int[] arrayOfInts = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9}; 
 int searchFor = 5; 
 
 while(i < 10){ 
 System.out.println("i = " + j); 
 if(arrayOfInts[i] > 7){ 
  break; 
  } 
 } 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CJZC/0)