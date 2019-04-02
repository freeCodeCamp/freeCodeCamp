---
title: Conditional Statements
localeTitle: 条件陈述
---# C中的条件语句

条件语句也称为分支语句。他们之所以这么称呼，是因为该计划选择跟随一个或另一个分支。

## 如果声明

这是条件语句的最简单形式。它由一个布尔表达式后跟一个或多个语句组成。如果布尔表达式的计算结果为**true** ，那么将执行'if'语句中的代码块。如果布尔表达式的计算结果为**false** ，那么将执行'if'语句结束后（在结束大括号之后）的第一组代码。

C编程语言**_将任何非零和非空值假定为true_** ，如果它**_为零或null，则将其假定为false_**值。

#### 句法

```C
if(boolean_expression) 
 { 
    //Block of Statements executed when boolean_expression is true 
 } 
```

#### 例

```C
int a = 100; 
 if(a < 200) 
 { 
    printf("a is less than 200\n" ); 
 } 
```

#### 结果

`a is less than 200`

## 2.如果......其他声明

如果布尔表达式的计算结果为**true** ，则执行if块，否则执行else块。

#### 句法

```C
if(boolean_expression) 
 { 
    //Block of Statements executed when boolean_expression is true 
 } 
 else 
 { 
    //Block of Statements executed when boolean_expression is false 
 } 
```

#### 例

```C
int a = 300; 
 if(a < 200) 
 { 
    printf("a is less than 200\n" ); 
 } 
 else 
 { 
    printf("a is more than 200\n"); 
 } 
```

#### 结果

`a is more than 200`

## 3\. if ... else if else注释

当使用if ... else if..else语句时，要记住几点 -

*   一个**if**可以有**0或者其他**的， **如果是的话** ，它**必须在其他任何地方之后** 。
*   一个**if**可以**有零到多个，如果**是，他们**必须在其他之前** 。
*   一旦**else**成功，其余的其他if或者其他都将被测试。

#### 句法

```C
if(boolean_expression_1) 
 { 
    //Block of Statements executed when boolean_expression_1 is true 
 } 
 else if(boolean_expression_2) 
 { 
    //Block of Statements executed when boolean_expression_1 is false and boolean_expression_2 is true 
 } 
 else if(boolean_expression_3) 
 { 
    //Block of Statements executed when both boolean_expression_1 and boolean_expression_2 are false and boolean_expression_3 is true 
 } 
 else 
 { 
    //Block of Statements executed when all boolean_expression_1, boolean_expression_2 and boolean_expression_3 are false 
 } 
```

#### 例

```C
int a = 300; 
 if(a == 100) 
 { 
    printf("a is equal to 100\n" ); 
 } 
 else if(a == 200) 
 { 
    printf("a is equal to 200\n"); 
 } 
 else if(a == 300) 
 { 
    printf("a is equal to 300\n"); 
 } 
 else 
 { 
    printf("a is more than 300\n"); 
 } 
```

#### 结果

`a is equal to 300`

## 4.嵌套if语句

嵌套if-else语句在C编程中总是合法的，这意味着你可以在另一个if或else if语句中使用if或else if语句。

#### 句法

```C
if(boolean_expression_1) 
 { 
    //Executed when boolean_expression_1 is true 
    if(boolean_expression_2) 
    { 
      //Executed when both boolean_expression_1 and boolean_expression_2 are true 
    } 
 } 
```

#### 例

```C
int a = 100; 
 int b = 200; 
 if(a == 100) 
 { 
    printf("a is equal to 100\n" ); 
    if(b == 200) 
    { 
        printf("b is equal to 200\n"); 
    } 
 } 
```

#### 结果

```bash
a is equal to 100 
 b is equal to 200 
```

## 5\. Switch Case Statement

如果... else（并非总是），switch语句通常比嵌套更快。此外，switch语句的语法更清晰，易于理解。

### 开关盒的语法
```
switch (n) 
 { 
    case constant1: 
        // code to be executed if n is equal to constant1; 
        break; 
 
    case constant2: 
        // code to be executed if n is equal to constant2; 
        break; 
        . 
        . 
        . 
    default: 
        // code to be executed if n doesn't match any constant 
 } 
```

当找到与switch表达式匹配的case常量时，程序的控制将传递给与该case相关联的代码块。

在上面的伪代码中，假设n的值等于constant2。编译器将执行与case语句关联的代码块，直到switch块结束，或者直到遇到break语句。

break语句用于防止代码进入下一种情况。

### 例：
```
// Program to create a simple calculator 
 // Performs addition, subtraction, multiplication or division depending the input from user 
 
 # include <stdio.h> 
 
 int main() 
 { 
 
    char operator; 
    double firstNumber,secondNumber; 
 
    printf("Enter an operator (+, -, *, /): "); 
    scanf("%c", &operator); 
 
    printf("Enter two operands: "); 
    scanf("%lf %lf",&firstNumber, &secondNumber); 
 
    switch(operator) 
    { 
        case '+': 
            printf("%.1lf + %.1lf = %.1lf",firstNumber, secondNumber, firstNumber+secondNumber); 
            break; 
 
        case '-': 
            printf("%.1lf - %.1lf = %.1lf",firstNumber, secondNumber, firstNumber-secondNumber); 
            break; 
 
        case '*': 
            printf("%.1lf * %.1lf = %.1lf",firstNumber, secondNumber, firstNumber*secondNumber); 
            break; 
 
        case '/': 
            printf("%.1lf / %.1lf = %.1lf",firstNumber, secondNumber, firstNumber/secondNumber); 
            break; 
 
        // operator is doesn't match any case constant (+, -, *, /) 
        default: 
            printf("Error! operator is not correct"); 
    } 
 
    return 0; 
 } 
```

### 产量
```
Enter an operator (+, -, *,): - 
 Enter two operands: 32.5 
 12.4 
 32.5 - 12.4 = 20.1 
```

用户输入的“ - ”运算符存储在运算符变量中。并且，两个操作数32.5和12.4分别存储在变量firstNumber和secondNumber中。

然后，程序的控制跳转到
```
printf("%.1lf / %.1lf = %.1lf",firstNumber, secondNumber, firstNumber/firstNumber); 
```

最后，break语句结束switch语句。

如果未使用break语句，则执行正确大小写之后的所有情况。