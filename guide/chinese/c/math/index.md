---
title: Basic Math
localeTitle: 基础数学
---
# 数学在C.

C为数学提供了很多选择。我们首先从一些比较常见的开始。

## 基本的东西

以下示例不是完整的代码，它们只是一段代码的示例。请记住，在C中，我们需要在使用之前声明所有内容 - `result` ， `a`和`b`将需要已经初始化并设置为值。无论是`int` ， `double`还是其他什么对于防止错误和信息丢失都很重要 - 我们稍后会介绍。

#### 增加： `+`

使用`+`执行添加，如下所示：

```C
result = a + b; 
```

在上面的例子中，变量`result`将等于a + b。

#### 减法： `-`

添加是使用`-` ，如下所示：

```C
result = a - b; 
```

在上面的例子中，变量`result`将等于a-b。

#### 乘法： `*`

使用`*`执行乘法，如下所示：

```C
result = a * b; 
```

在上面的例子中，变量`result`将等于a乘以b。

#### 部门： `/`

使用`/`执行除法，如下所示：

```C
result = a / b; 
```

在上面的例子中，变量`result`将等于a除以b。然而，这并不总是超过b的一小部分。在处理整数时，事情会有所不同 - 稍后会有所不同。

# 不那么基本的东西

## 模数：'％'

好的，现在事情变得有点奇怪了。

Modulo允许您在除法中找到余数。请记住，对于整数，我们不能有小数。分部是关于找到一个数字适合另一个数字的次数，模数是关于找到遗留的东西。取27除以4：4适合27 6次。 6次4是24，这意味着剩下3次。结果，27％4是3. 10除以5是2,2倍5是10，所以剩下0。结果，10％5为0。

模运算符比您想象的更重要，尤其是在C中，强制执行浮点数和整数数之间的差异。值得拥抱。这是一个例子：

```C
result = a % b; 
```

在上面的例子中， `result`将等于模b。

## 整数和数学

整数不能有小数。因此，当您使用整数执行除法时，将截断任何类型的小数。例如，17除以10是1.7。但是，如果我们只处理整数，那么结果将是1，而不是1.7。 10次​​适合17次1，所以答案是1。

处理浮点数时，这不是问题。浮点数可以取小数位，因此我们不必担心会被截断的事情。

### 为什么C这样做？

如前所述，C是一种低级语言。计算机硬件中的浮点数和整数数之间存在很大差异，它们要求某些数据类型具有某些属性（例如，不接受小数）。 C不会假设你想要什么，并强迫你自己思考它。

### 为什么我们不一直只使用浮点数？

这也归结为C是一种低级语言。 C比许多其他语言更快，更快，更轻，也是这样的原因之一，因为程序员能够对数据类型做出明智的决策。请记住，浮点数比整数占用更多内存。因此，使用适当的数据类型很重要，并在需要时处理整数到浮点的转换。

### 我们如何解决这个问题？

铸造（后面描述）是一种解决方案。另一种是使用浮点数。如果正在操作的一个或两个数字是浮点数，则结果将是浮点数。当我们开始处理操作顺序时，这变得更加复杂，但是现在，请注意这是有效的：

```C
double result = 23.0 / 2; 
```

# 一个完整的例子

```C
#include <stdio.h> 
 
 // This is a comment. It gets ignored by the compiler, so we can write notes after the double slashes. 
 
 int main(void) { 
    int a = 3; 
    int b = 5; 
    int result = 0; 
 
    // Doing things with variables: 
    result = a + b; 
    printf("a plus b = %i \n", result); 
 
    // You can also do the operation inside the printf. 
    // Here's an example of that with subtraction: 
    printf("a minus b = %i \n", ab); 
 
    // You don't need to do this with variables at all. 
    // Here's an example of that with multiplication: 
    printf("10 times 5 = %i \n", 10*5); 
 
    // Here's a look at division. 
    // Notice that the decimals are truncated because we're dealing with integers. 
    printf("12 divided by 5 = %i \n", 12/5); 
 
    // Now let's force floating point numbers by including a decimal. 
    // Notice that even though these are integers, the decimal forces them to be 
    // treated as floating point numbers, so they aren't truncated. 
    // Note that I'm printing a double with %d, not an int with %i. 
    printf("12.0 divided by 5 = %d \n", 12.0/5); 
 
    return 0; 
 } 
```

给出一个运行来看看会发生什么，并确保使用运算符和值来查看事物的变化和方式。

# 数学库

C提供了一个数学库（ `math.h` ），它提供了许多有用的数学函数。例如，数字的幂可以计算为：

```c
#include<math.h>
int result = pow(2,3) // will result in 2*2*2 or 8 
```

其他一些可能证明有用的（ `math.h` ）库函数是：

`#include <math.h> double angle = cos(90.00); // Givs us 0.00 int result = sqrt(16); // Gives us 4 double result = log(10.00) // Gives us 2.30 (note this is ln(10), not log base 10)`

// C代码来说明 //使用ceil函数。

# 包括

# 包括

int main（） { float val1，val2，val3，val4;

val1 = 1.6; val2 = 1.2; val3 = -2.8; val4 = -2.3;

printf（“value1 =％。1lf \\ n”，ceil（val1））; printf（“value2 =％。1lf \\ n”，ceil（val2））; printf（“value3 =％。1lf \\ n”，ceil（val3））; printf（“value4 =％。1lf \\ n”，ceil（val4））;

返回（0）; }

# 在你继续之前......

## 回顾

*   有几个基本的运算符：
*   `+`加法
*   `-`减法
*   `*`用于乘法
*   `/`分裂
*   模数`%`
*   还有更多的运营商，但我们稍后会详细介绍它们。
*   整数数学是C非常严格的事情。
*   C对数据类型非常严格
*   如果只涉及整数，则返回一个整数
*   如果操作中涉及浮点数，则该部分操作变为浮点
*   C为`math.h`库提供了多个函数，如`pow`用于计算数字的幂。