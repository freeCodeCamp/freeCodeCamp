---
title: Loops of all kinds
localeTitle: 各种循环
---
# C中的各种循环

当您拥有要循环的代码时，循环就是您所使用的，这意味着在运行之后，您可能希望它循环到开头并再次运行。在C中有一些这些。

## 循环

最简单的是while循环。 while循环将在括号内的条件为真时运行。当你想要发生某些事情直到某种情况发生时，应该使用它们。

### 句法
```
while(condition) { 
   statement(s); 
 } 
```

这是一个例子：

```C
#include <stdio.h> 
 
 int main(void) { 
    int my_number = 0; 
 
    while(my_number != 10){ 
        ++my_number; 
    } 
 
    printf("my_number = %i", my_number); 
 
    return 0; 
 } 
```

虽然while循环中的语句为true，但括号内的内容将会运行。当程序命中`while(my_number)` ，它会检查括号内的语句。如果该语句为false，则不会运行while循环。相反，它将跳过两个括号之间的代码，并将从中断处继续。

如果该语句为true，则将运行括号内的代码。括号内的代码运行后，将再次检查括号内的语句。就像之前一样，如果语句为true，则代码将被运行，如果为false，则将跳过代码。

在玩这个或任何其他循环时你可能遇到的一个问题是无限循环的想法 - 一个循环将运行无限次，因为没有什么可以阻止它。有时这可能是故意发生的：

```C
while(1) { 
    printf("This will get printed forever unless the program is stopped!"); 
 } 
```

当然，它也可能偶然发生。这是与以前相同的代码，但是有一个微妙的区别，将其变成无限循环：

```C
#include <stdio.h> 
 
 int main(void) { 
    int my_number = 11; 
 
    while(my_number != 10){ 
        ++my_number; 
    } 
 
    printf("my_number = %i", my_number); 
 
    return 0; 
 } 
```

当评估此while循环时，将检查`my_number`以查看它是否不是10.它不是，因为它已在11初始化，因此while循环中的代码将运行且`my_number`将为12. 12不等于10，所以while循环中的代码将运行， `my_number`将为13.这将永远运行，因为这种情况永远不会变为false - 它停止的唯一方法是强制程序停止运行。这是一个无限循环的例子，因为如果单独留下，它将运行无限次。

## Do-while循环

Do-while循环是一个不太常用的while循环版本。循环以评估开始，因此如果该评估为false，则括号内的代码将不会运行。但是，使用do-while循环，括号内的代码将运行一次，然后执行评估以查看是否应该再次运行。

### 句法
```
do { 
   statement(s); 
 } while( condition ); 
```

这是一个看看：

```C
#include <stdio.h> 
 
 int main(void){ 
    int a = 0; 
 
    do { 
        a++ 
    } while(a == -123); 
 
    printf("%i\n", a); 
 
    return 0; 
 } 
```

如果这是一个while循环，则括号内的代码将永远不会运行，因为执行评估时此条件不正确。但是，因为这是一个do-while循环，代码将执行一次，然后进行评估以查看是否应该再次执行。当你知道你想要做一次事情时，Do-while循环很有用，但是你可能需要在那之后再运行一次。

## 对于循环

For循环适用于我们想要运行一定次数的东西。

### 句法
```
for(initialisation; condition; changer) 
 { 
   statement(s); 
 } 
```

这是一个例子：

```C
#include <stdio.h> 
 
 int main(void) { 
    int a = 4; 
    int b = 2; 
    int result = 0; 
 
    for(int count = 0; count != b; count++) { 
        result = result + a; 
    } 
 
    printf("a times b is %i\n", result); 
 
    return 0; 
 } 
```

乘法只是重复添加，所以这是在`a` ， `b`次上添加。让我们一来看看该`for`在特定位：

```C
for(int count = 0; count != b; count++) 
```

与for循环不同，括号中有三个由分号分隔的东西。第一部分用于初始化，称为“初始化”：它允许您创建一个新变量并将其设置为一个值，或者将现有变量设置为不同的值，或者您不能设置任何内容而只是放置一个分号下来。

下一节是一个布尔条件，将检查其是true还是false，就像我们的while循环一样。它被称为“条件”，因为它是在开始循环之前将被检查的条件。

最后一节称为“递增/递减”。它的工作是在每个循环中执行一些操作 - 通常在初始变量中添加或减去 - 在括号内的代码运行之后。在这种情况下，它只是在计数中添加一个。这是使用增量的最常用方法，因为它可以让您计算通过for循环运行的次数。

### 语法比较
```
main() 
 { 
  int i = 1; 
  while(i<=5) 
  { 
     printf(“While”); 
     i++; 
   } 
  getch(); 
 } 
 
 
 main() 
 { 
  int i = 1; 
  do 
  { 
     printf(“do-while”); 
     i++; 
   } while(i<=5); 
  getch(); 
 
 } 
 
 
 main() 
 { 
  int i 
  for(i=1;i<=5;i++) 
  { 
     printf(“for”); 
   } 
  getch(); 
 } 
```

# 循环控制语句

循环控制语句从正常顺序改变执行。当执行离开作用域时，将销毁在该作用域中创建的所有自动对象。

C支持以下控制语句：

#### 1.休息声明

终止**循环**或**switch**语句，并在循环或切换后立即将执行转移到语句。

#### 2.继续声明

导致循环跳过其身体的其余部分，并在重复之前立即重新测试其状态。

#### 3.转到声明

将控制转移到带标签的声明。

# 一些有趣和有用的怪癖

## for循环无限循环

花点时间考虑一下这段代码会做什么：

```C
for(;;){ 
    printf("hello, world! \n"); 
 } 
 
 while("Free Code Camp"){ 
    printf("hello, world! \n"); 
 } 
```

初始化部分没有任何内容，因此没有任何内容被初始化。这很好，有时候这样做是因为你并不总是想要或者需要初始化任何东西。

接下来是条件，这是空白的。这有点奇怪。这意味着不会测试任何条件，因此它永远不会是错误的，所以它将贯穿循环，执行事后的想法（这是什么都不做），然后再次检查条件，这将使它再次运行。你可能已经意识到，这是一个无限循环。事实证明，这实际上很有用。在创建执行无限循环时，执行`while(1)`是完全合法的，但每次都执行比较。另一方面， `for(;;)`则没有。出于这个原因， `for(;;)`具有合法用途，因为它比其他无限循环方法更有效。值得庆幸的是，许多编译器会为您解决这个问题。

第二个代码中的循环（“Free Code Camp”）也将无限执行。原因是因为C将任何非零值视为true，因此将无限地执行循环。

## 不使用括号

在整个页面中，您已经读过“括号内的代码”是运行的代码，而这大部分都是正确的。但是，如果没有括号怎么办？

```C
while(true) 
    printf("hello, world! \n"); 
```

在这种情况下，C会将下一行视为唯一需要循环的内容。 C忽略空格，因此缩进只是为了清晰起见。只有那一行将被视为处于循环中，并且这是if语句，for循环和while循环共享的属性。因为忽略了空格，所以放置无关紧要：只要中间没有其他代码行，它就可以在同一行，下一行，或300行和两个空格。当您只在一个语句中运行一行代码时，此功能可以使您的代码看起来更清晰。

## 用分号代替括号

如果没有括号，编译器将只查看下一行并将其作为循环的内容。分号告诉编译器一行已结束。把这些东西结合起来，我们可以让C等到事情成真。假设我们有一个名为`is_button_pressed`的方法，如果没有按下按钮则返回false，如果按下按钮则返回true：

```C
while(!is_button_pressed()); 
```

在这个循环中没有任何事情发生，因为它将看到的唯一一行是分号。结果，将调用`is_button_pressed`方法，并将评估其返回值。如果未按下按钮且返回值为false，则`!`将其翻转为true，以便再次运行该函数并再次进行评估。如果返回值为true，则`!`将它翻转为false并退出while循环。

这会导致代码暂停。在这种情况下，代码到达while循环，并且没有进一步。相反，它会不断检查要更改的按钮的状态。这对于在满足特定条件之前不希望发生任何事情的情况非常有用。

# 在你继续之前......

## 回顾

*   循环允许您的代码在满足某些条件时运行多次。
*   C中有几个循环可供我们使用：
*   while循环，允许我们在条件为真时运行代码
*   Do-while循环，运行代码，然后在条件为真时继续运行代码
*   for循环，在条件为真时运行代码并允许我们在每个循环中执行操作。

## 使用循环来设计模式。

#### 示例1：使用\*打印半金字塔的程序
```
* 
 * * 
 * * * 
 * * * * 
 * * * * * 
```

**源代码**

```c
#include <stdio.h> 
 
 int main() 
 { 
    int i, j, rows; 
 
    printf("Enter number of rows: "); 
    scanf("%d",&rows); 
 
    for(i=1; i<=rows; ++i) 
    { 
        for(j=1; j<=i; ++j) 
        { 
            printf("* "); 
        } 
        printf("\n"); 
    } 
    return 0; 
 } 
```

#### 示例2：使用数字打印半金字塔a的程序
```
1 
 1 2 
 1 2 3 
 1 2 3 4 
 1 2 3 4 5 
```

**源代码**

```c
#include <stdio.h> 
 
 int main() 
 { 
    int i, j, rows; 
 
    printf("Enter number of rows: "); 
    scanf("%d",&rows); 
 
    for(i=1; i<=rows; ++i) 
    { 
        for(j=1; j<=i; ++j) 
        { 
            printf("%d ",j); 
        } 
        printf("\n"); 
    } 
    return 0; 
 } 
```

#### 示例3：使用字母表打印半金字塔的程序
```
A 
 BB 
 CCC 
 DDDD 
 EEEEE 
```

**源代码**

```c
#include <stdio.h> 
 
 int main() 
 { 
    int i, j; 
    char input, alphabet = 'A'; 
 
    printf("Enter the uppercase character you want to print in last row: "); 
    scanf("%c",&input); 
 
    for(i=1; i <= (input-'A'+1); ++i) 
    { 
        for(j=1;j<=i;++j) 
        { 
            printf("%c", alphabet); 
        } 
        ++alphabet; 
 
        printf("\n"); 
    } 
    return 0; 
 } 
```

使用\*和数字打印倒半金字塔的程序

#### 示例4：使用\*的倒半金字塔
```
* * * * * 
 * * * * 
 * * * 
 * * 
 * 
```

**源代码**

```c
#include <stdio.h> 
 
 int main() 
 { 
    int i, j, rows; 
 
    printf("Enter number of rows: "); 
    scanf("%d",&rows); 
 
    for(i=rows; i>=1; --i) 
    { 
        for(j=1; j<=i; ++j) 
        { 
            printf("* "); 
        } 
        printf("\n"); 
    } 
 
    return 0; 
 } 
```

#### 示例5：使用数字的倒半金字塔
```
1 2 3 4 5 
 1 2 3 4 
 1 2 3 
 1 2 
 1 
```

**源代码**

```c
#include <stdio.h> 
 
 int main() 
 { 
    int i, j, rows; 
 
    printf("Enter number of rows: "); 
    scanf("%d",&rows); 
 
    for(i=rows; i>=1; --i) 
    { 
        for(j=1; j<=i; ++j) 
        { 
            printf("%d ",j); 
        } 
        printf("\n"); 
    } 
 
    return 0; 
 } 
```

#### 示例6：使用\*打印全金字塔的程序
```
        * 
      * * * 
    * * * * * 
  * * * * * * * 
 * * * * * * * * * 
```

**源代码**

```c
#include <stdio.h> 
 
 int main() 
 { 
    int i, space, rows, k=0; 
 
    printf("Enter number of rows: "); 
    scanf("%d",&rows); 
 
    for(i=1; i<=rows; ++i, k=0) 
    { 
        for(space=1; space<=rows-i; ++space) 
        { 
            printf("  "); 
        } 
 
        while(k != 2*i-1) 
        { 
            printf("* "); 
            ++k; 
        } 
 
        printf("\n"); 
    } 
 
    return 0; 
 } 
```

#### 示例7：使用数字打印金字塔的程序
```
        1 
      2 3 2 
    3 4 5 4 3 
  4 5 6 7 6 5 4 
 5 6 7 8 9 8 7 6 5 
```

**源代码**

```c
#include <stdio.h> 
 
 int main() 
 { 
    int i, space, rows, k=0, count = 0, count1 = 0; 
 
    printf("Enter number of rows: "); 
    scanf("%d",&rows); 
 
    for(i=1; i<=rows; ++i) 
    { 
        for(space=1; space <= rows-i; ++space) 
        { 
            printf("  "); 
            ++count; 
        } 
 
        while(k != 2*i-1) 
        { 
            if (count <= rows-1) 
            { 
                printf("%d ", i+k); 
                ++count; 
            } 
            else 
            { 
                ++count1; 
                printf("%d ", (i+k-2*count1)); 
            } 
            ++k; 
        } 
        count1 = count = k = 0; 
 
        printf("\n"); 
    } 
    return 0; 
 } 
```

#### 例8：使用\*的倒金字塔
```
* * * * * * * * * 
  * * * * * * * 
    * * * * * 
      * * * 
        * 
```

**源代码**

```c
#include<stdio.h> 
 
 int main() 
 { 
    int rows, i, j, space; 
 
    printf("Enter number of rows: "); 
    scanf("%d",&rows); 
 
    for(i=rows; i>=1; --i) 
    { 
        for(space=0; space < rows-i; ++space) 
            printf("  "); 
 
        for(j=i; j <= 2*i-1; ++j) 
            printf("* "); 
 
        for(j=0; j < i-1; ++j) 
            printf("* "); 
 
        printf("\n"); 
    } 
 
    return 0; 
 } 
```

#### 例9：打印Pascal的三角形
```
           1 
         1   1 
       1   2   1 
     1   3   3    1 
   1  4    6   4   1 
 1  5   10   10  5   1 
```

**源代码**

```c
#include <stdio.h> 
 
 int main() 
 { 
    int rows, coef = 1, space, i, j; 
 
    printf("Enter number of rows: "); 
    scanf("%d",&rows); 
 
    for(i=0; i<rows; i++) 
    { 
        for(space=1; space <= rows-i; space++) 
            printf("  "); 
 
        for(j=0; j <= i; j++) 
        { 
            if (j==0 || i==0) 
                coef = 1; 
            else 
                coef = coef*(i-j+1)/j; 
 
            printf("%4d", coef); 
        } 
        printf("\n"); 
    } 
 
    return 0; 
 } 
```

#### 例10：打印弗洛伊德的三角形。
```
1 
 2 3 
 4 5 6 
 7 8 9 10 
```

**源代码**

```c
#include <stdio.h> 
 
 int main() 
 { 
    int rows, i, j, number= 1; 
 
    printf("Enter number of rows: "); 
    scanf("%d",&rows); 
 
    for(i=1; i <= rows; i++) 
    { 
        for(j=1; j <= i; ++j) 
        { 
            printf("%d ", number); 
            ++number; 
        } 
 
        printf("\n"); 
    } 
 
    return 0; 
 } 

```