---
title: Switch Case
localeTitle: 开关盒
---
# 开关盒

switch语句就像一组`if statements` 。

这是一个可能性列表，每个可能性都有一个动作，以及一个可选的默认动作，以防其他任何事情的评估结果为真。

我们`break`从交换机退出。如果在下一个案例开始之前没有达到`break`语句，则执行将通过并在下一种情况下开始执行代码。
注： switch语句只能使用在char或int这两种类型的数据。

switch (数据类型必须 char or int)

## 开关语法...案例

```c
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

## 例

在多个if / else语句上使用switch语句可以提高速度和可读性。

```c
# include <stdio.h> 
 
 int main() { 
 
    char operator; 
    double firstNumber,secondNumber; 
 
    printf("Enter an operator (+, -, *, /): "); 
    scanf("%c", &operator); 
 
    printf("Enter two operands: "); 
    scanf("%lf %lf",&firstNumber, &secondNumber); 
 
    switch (operator) { 
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
            printf("%.1lf / %.1lf = %.1lf",firstNumber, secondNumber, firstNumber/firstNumber); 
            break; 
        // Operator is doesn't match any case constant (+, -, *, /) 
        default: 
            printf("Error! operator is not correct"); 
    } 
 
    return 0; 
 } 
```

## 输出：

```c
-> Enter an operator (+, -, *,): - 
 -> Enter two operands: 32.5 
 -> 12.4 
 -> 32.5 - 12.4 = 20.1 
```

## 评论：切换vs if else

*   检查测试表达式：if-then-else语句可以根据值或条件的范围测试表达式，而switch语句仅基于单个整数，枚举值或String对象测试表达式。
*   切换到Multi way分支更好：当编译器编译switch语句时，它将检查每个case常量并创建一个“跳转表”，它将用于根据表达式的值选择执行路径。因此，如果我们需要在一大组值中进行选择，则switch语句的运行速度将比使用if-elses序列编码的等效逻辑快得多。编译器可以这样做，因为它知道case常量都是相同的类型，并且必须与switch表达式进行相等性比较，而在if表达式的情况下，编译器没有这样的知识。
*   if-else更适合布尔值：If-else条件分支对于导致布尔值的变量条件很有用，而switch语句对于固定数据值很有用。
*   速度：如果提供的案例数量良好，则可以证明switch语句更快。如果只有少数情况，则无论如何都不会影响速度。如果案例数超过5，则更喜欢切换，否则也可以使用if-else。
*   如果一个开关包含五个以上的项目，则使用查找表或哈希列表实现。这意味着与if：s列表相比，所有项目都获得相同的访问时间，其中最后一个项目需要更长的时间才能到达，因为它必须首先评估每个先前的条件。
*   可读性清晰：当您需要组合案例时，开关看起来更清晰。如果也很容易出错。错过其他声明会让你陷入混乱。使用开关更轻松地添加/删除标签，使您的代码更易于更改和维护。
