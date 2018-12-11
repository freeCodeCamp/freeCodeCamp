---
title: For Loop
localeTitle: 对于循环
---
# 对于循环

`for`循环为您提供了一种迭代一系列值的简洁方法。 基本`for`语句有三个部分：变量初始化，布尔表达式和增量表达式。

```java
for (variable initialization; boolean expression; increment expression) 
 { 
    // Statements 
 } 
```

*   `initialization` - 初始化循环并在开头只执行一次。

您可以在基本`for`循环声明的第一部分初始化多个相同类型的变量;每个初始化必须用逗号分隔。

*   `expression` - 在每次迭代开始时进行评估。如果`expression`计算结果为`true` ，则将执行`Statements` 。
*   `increment` - 每次迭代循环后调用。您可以在此处增加/减少变量的值。确保增量对表达式值有效，以避免无限循环。

使用`for`循环的一种常见方法是，如果需要迭代代码特定次数。例如，如果要输出数字0-10，则将计数器的变量初始化为0，然后检查该值是否小于10，并在每次迭代后向计数器添加一个。

请注意，您将检查该值是否小于10，不小于或等于10，因为您将计数器设置为0。

```java
for (int iter_For = 0; iter_For < 10; iter_For++) 
 { 
    System.out.print(iter_For + " "); 
    // Iterated 10 times, iter_For 0,1,2...9 
 } 
 
 System.out.println("iter_For Value: " + iter_For); 
```

注意：将for循环中的变量声明为单个语句也是可以接受的。

```java
for (int iter_For = 0; iter_For < 10; iter_For++) 
 { 
    System.out.print (iter_For + " "); 
    // Iterated 10 times, iter_For 0,1,2...9 
 } 
```

输出：
```
0 1 2 3 4 5 6 7 8 9 
 iter_For Value: 10 
```

添加前50个数字的for循环的另一个例子是这样的。 i ++表示i = i + 1。

```java
int addUntil = 50; 
 int sum 0; 
 
 for (int i = 1; i <= addUntil; i++) 
 { 
    sum+=i 
 } 
 
 System.out.println("The sum of the first 50 numbers is: " + 50); 
```

![:rocket:](https://forum.freecodecamp.org/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CJYr/0)

### 附加功能

您不能使用数字（旧的C风格的语言结构）或任何不评估布尔值的内容作为if语句或循环结构的条件。例如，你不能说if（x），除非x是一个布尔变量。

此外，请务必记住，布尔表达式在某些时候必须求值为true。否则，您的程序将陷入无限循环。