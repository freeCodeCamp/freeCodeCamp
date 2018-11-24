---
title: Variables and Basic Data Types 
localeTitle: 变量和基本数据类型
---
# 变量和基本数据类型

## 什么是变量？

变量存储值。基本上，您为存储值指定一个名称，稍后要使用该名称。重要的是要注意，一个变量一次只能存储一个值。但是稍后，您可以稍后在代码中更改存储的值，也可以将一个变量的值分配给另一个变量。

> 当你创建一个变量时，它被称为`declaring` ，当你给它一个值来存储时，它被称为`assignment` 。如果在声明变量的同时为变量赋值，则称为`initializing` 。 对于如何创建变量以及存储变量的内容，C非常挑剔。 C是一种`strongly typed`语言，这意味着您必须在声明时定义每个变量的类型和名称。变量的名称可以由字母，数字和下划线字符组成。

## 基本类型

在标准C中，有四种重要的基本数据类型： `int` ， `float` ， `double` ， `char` 。

### 整型

对于整数值，使用`int`关键字（整数的缩写）。 让我们来看一个简单的程序：

```C
#include <stdio.h> 
 int main(void){ 
 
 int a; // Declaring a variable which stores integer values and is called 'a' 
 int b = 5; //Initializing an int called 'b' with the value 5 
 a = 6; // Assigning the value 6 to the variable 'a' 
 int c; 
 c = a + b; // Assign the sum of 'a' and 'b' to the variable c 
 int d = a + c; //But we could also initialize it right away. 
 
 //Some shiny things 
 printf("%d \n", c); 
 printf("%d %d \n", a, b); 
 
 return 0; 
 } 
```

让我们分解我们在`Some shingy things`下`Some shingy things` ：

```C
printf("%d \n", c); 
```

要打印出变量`c`的值，可以使用`printf()`函数。请注意双引号中的`%d` 。这告诉计算机期望一个**d**值，并且它在逗号之后。

```C
printf("%d %d \n", a, b); 
```

您可以按逗号后面的顺序打印出几个整数。

请注意，当您尝试在`int`存储十进制值时，您将只获取它的整个部分，因为它们将被截断。

我们也可以用以下方式编写程序：
```
#include <stdio.h> 
 int main(void){ 
 
 int a=3,b=4,c; // we can also assign and declare the values in 1 line 
 c = a + b; // Assign the sum of 'a' and 'b' to the variable c 
 
 printf("%d %d \n", a, b); 
 printf("%d \n", c); 
 
 return 0; 
 } 
```

### 浮动和双打

要存储十进制值，可以使用`float`和`double`关键字。它们之间的区别在于精度， `double`有大约13位数，而`float`大约有7位，但这与CPU不同。 \`\`\`C ＃包括 int main（void）{ 双a = 3.23; printf（“变量a的值为：％f \\ n”，a）; //可以使用％f打印双值 返回0; }
```
### Characters 
 You can store a single character with the `char` keyword. You will learn about storing multiple characters later, when we introduce `arrays`. Let's look at some code: 
```

C

# 包括

int main（void）{ char a ='A'; //初始化值为'A'的char，请注意简单的引号！ printf（“字符为：％c”，a）//字符可以用％c打印 返回0; }
```
## The Boolean type 
 Later in C a new type was added, called `bool`. Bool stores true/false values, which comes in handy when you have to make decisions in the code. To use it though, you have to inlcude another header next to `<stdio.h>` called `<stdbool.h>`. 
```

C

# 包括

# 包括

int main（void）{ bool a = true; bool b = false;

返回0; } \`\`\`

## 注释

变量的类型告诉编译器为变量创建（分配）多少空间。现在您已经看到了基本数据类型，但是有一些修饰符可以修改为变量分配的空间量。修饰符可以增加或减少默认值。 C有5个修饰符： `short` ， `long` ， `signed` ， `unsigned` ， `long long` 。它们以基本类型为前缀。