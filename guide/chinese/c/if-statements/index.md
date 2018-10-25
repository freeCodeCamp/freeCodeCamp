---
title: Logical Operators and If Statements
localeTitle: 逻辑运算符和If语句
---
# 如果是C语句

更改基于环境中某些信息的代码行为的能力称为条件代码流。有时您希望代码根据特定条件运行。在这种情况下，我们可以使用If语句。它也被称为决策声明，因为它根据给定的表达式（或在给定的条件下）做出决定。如果表达式求值为true，那么将执行'if'语句中的代码块。如果表达式的计算结果为false，那么将执行'if'语句结束后（结束大括号之后）的第一组代码。表达式是一个表达式，它具有对布尔变量进行操作的关系和/或逻辑运算符。表达式的计算结果为true或false。

## _if语句的_语法
```
if (testExpression) { 
   // statements 
 } 
```

## 一个简单的例子

让我们看一下这个实例的一个例子：

```C
#include <stdio.h> 
 #include <stdbool.h> 
 
 int main(void) { 
    if(true) { 
        printf("Statement is True!\n"); 
    } 
 
    return 0; 
 } 
```

```
output: 
 Statement is True! 
```

就像helloworld.c一样，stdio.h已被包含在内。这个程序的新功能是stdbool.h，它是标准的布尔库 - 它包含的代码可以让我们访问'true'和'false'。

上面例子中的新内容是'if'语句。如果括号内的语句为true，则将运行if语句括号内的代码。对于此示例，true为true，因此代码将运行`printf`函数。

## 如果别的

在'If-else'语句中，如果括号内的语句为true，则将执行'if'语句括号内的代码，如果括号内的语句为false，则括号内的代码为'否则'声明将被执行。

当然，这个例子并不是很有用，因为真的总是如此。这是另一个更实用的：

```C
#include <stdio.h> 
 
 int main(void) { 
    int n = 2; 
 
    if(n == 3) { // comparing n with 3 
        printf("Statement is True!\n"); 
    } 
    else { // if first condition is not true, then comes to this block of code. 
        printf("Statement is False!\n"); 
    } 
 
    return 0; 
 } 
```

```
output: 
 Statement is False! 
```

这里有一些不同的重要事情。首先， `stdbool.h`尚未包含在内。这没关系，因为`true`和`false`都没有被使用。在C中，我们将语句视为true和false，即使操作中不涉及true或false。

在if语句的括号内也是新的东西： `n == 3` 。这是`n`和数字3之间的比较。 `==`是比较运算符，是C中几个比较运算之一。

## 嵌套if-else

if-else语句允许在两个可能的替代方案之间进行选择。有时必须在两种以上的可能性之间做出选择。例如，如果参数小于零，则数学中的符号函数返回-1，如果参数大于零，则返回+1，如果参数为零，则返回零。以下C ++语句实现此功能：

```C
if (x < 0) 
   sign = -1; 
 else 
   if (x == 0) 
      sign = 0; 
   else 
      sign = 1; 
```

这是一个if-else语句，其中else后面的语句本身就是一个if-else语句。如果x小于零，则sign设置为-1，但如果不小于零，则执行else之后的语句。在这种情况下，如果x等于零，则将sign设置为零，否则将其设置为1。 新手程序员经常使用if语句序列而不是使用嵌套的if-else语句。那就是他们用逻辑等价的形式写上面的内容：

```C
if (x < 0) 
   sign = -1; 
 if (x == 0) 
   sign = 0; 
 if (x > 0) 
   sign = 1; 
```

建议不要使用此版本，因为它不清楚只有一个赋值语句将针对给定的x值执行。此外，它是低效的，因为总是测试所有三个条件。

## 比较运算符

运营商名称|用法|运营商结果 ---------------------------- |：---------：| --------- -------- 等于| a == b |如果a等于b则为真，否则为假 不等于| a！= b |如果a不等于b则为真，否则为假 大于| a> b |如果a大于b则为真，否则为假 大于或等于| a> = b |如果a大于或等于b则为真，否则为假 小于| a <b |如果a小于b则为真，否则为假 小于或等于| a <= b |如果a小于或等于b则为真，否则为假

那个例子也有一个新词： `else` 。在中的代码`else`块只运行，如果内部的代码`if`不运行。

我们可以为所有这些运营商做很多事情！考虑以下内容，我们将使用if-else语句：

```C
#include <stdio.h> 
 
 int main(void) { 
    int n = 5; 
 
    if(n == 5) { 
        printf("n is equal to 5!\n"); 
    } 
    else if (n > 5) { 
        printf("n is greater than 5!\n"); 
    } 
 
    return 0; 
 } 
```

```
output: 
 n is equal to 5! 
```

if-else语句附加了'else if'。如果前一个if中的条件为false，则会运行此代码，但会在其自己的括号内添加一个条件，该条件在运行代码之前必须为true。

## 逻辑运算符

当然，如果不是真的，或者如果它和其他东西都是真的，我们可能会想要发生一些事情。为此，我们有逻辑运算符：！ for not，&& for and，and ||为或。让我们来看看这个行动：

```C
#include <stfio.h> 
 
 int main(void) { 
    int n = 5; 
    int m = 10; 
 
    if(n > m || n == 15) { 
        printf("Either n is greater than m, or n is equal to 15\n"); 
    } 
    else if( n == 5 && m == 10 ) { 
        printf("n is equal to 5 and m is equal to 10!\n"); 
    } 
    else if ( !(n == 6)) { 
        printf("It is not true that n is equal to 6!\n"); 
    } 
    else if (n > 5) { 
        printf("n is greater than 5!\n"); 
    } 
 
    return 0; 
 } 
```

```
output: 
 n is equal to 5 and m is equal to 10! 
```

这是第一组括号： `n > m || n == 5` 。如果n大于m，或者n等于5，则为真.n不大于m，但n等于5.因为其中一个是真的，并且它们由or连接，声明将为真，并且将打印其中的代码。

因为之前的代码已经执行，所以它不会检查其他语句 - 如果之前的语句没有被检查，那么只会检查它们。但是，仅仅为了练习，请考虑其余代码将要检查的内容。如果n等于5且m等于`n == 5 && m == 10`则`n == 5 && m == 10`将为真。这是正确的，但如果n为6则不再为真，并且其他内的代码将不会运行。

`!(n == 6)`使用括号使操作更加明显。就像在数学中一样，括号可用于操作顺序：括号内的事物将在不在括号内的事物之前执行。所以在这种情况下，将评估`n == 6` ，并且为false。的`!` ，'not'，将其从false转换为true，因此此操作返回true。然而，和之前一样，它不会仅仅因为之前的一个陈述是真的而已经运行了。

最后， `n > 5`评估为真吗？答案是否定的，因为n _是_ 5，因此它不大于5.因此，此代码不会评估为true。为了使此求值为true，应使用`>=`运算符。

## 关于C比较的细节

之前你读到比较是在检查某些事情是真还是假，但那真的只有一半是真的。请记住，C关于轻巧且靠近硬件硬件，很容易检查是否为0，其他任何事情都需要更多工作。因此，比较实际上做的是检查某些内容是否为假，是否为0，或者检查它是否为false（任何其他值）。

因此，此if语句为真且有效：

```C
if(12452) { 
    printf("This is true!\n") 
 } 
```

按照设计，0为假，按照惯例，1为真。实际上，这里是一个前面描述的`stdbool.h`库：

```C
#define false   0 
 #define true    1 
```

实际上还有更多，但这是完成所有工作的部分。

这两行代码告诉编译器，'false'一词应替换为'0'，而'true'一词应替换为'1'。 `stdbool.h`也有一些文档和编译器指令，将在后面讨论，但这两行都是真的。

# 技巧和窍门

考虑以下代码：

```C
#include <stdio.h> 
 
 int main() { 
    int i=3; 
 
    if(i=4) { 
      printf("This block is executed"); 
    } 
    else { 
      printf("NO! I am boss"); 
    } 
 } 
```

什么是输出？ “不！我是老板”？如果你猜测这个输出那么你错了。 为什么会这样？因为在if语句中你使用“=”而不是“==”运算符。 “==”是比较器。

它将在两个变量之间进行比较，但“=”是赋值运算符 当我们说i = 4时，我们只是将值4赋给整数i，并且因为在“C”中每个NON-ZERO值都为真，所以 如果（i = 4）是真实的陈述，则执行此下的指令

# 在你继续之前......

## 回顾

*   'if'语句检查表达式是否为true，然后它在大括号内运行代码。
*   'else'可以添加到'if'的末尾，并且只有在前一个if（s）语句为false时才会运行。
*   'else if'也可以添加到'if'的末尾，并且只有在前一个if（s）语句为false时才会运行。
*   计算机中的所有内容都由数字表示，因此C中的每个比较都可以通过处理数字 - 甚至是真，假和字符等值来完成。
*   有一堆比较运算符：
*   \==等于
*   ！=不等于
*   \>大于
*   <小于
*   \> =小于或等于
*   <=小于或等于
*   我们还有一些逻辑运算符，它们允许我们将逻辑运算链接在一起：
*   ！被称为NOT运算符 - 它反转操作数的状态
*   &&称为AND运算符 - 当两个条件都为真时返回true
*   ||被称为OR运算符 - 当至少一个条件为真时返回true