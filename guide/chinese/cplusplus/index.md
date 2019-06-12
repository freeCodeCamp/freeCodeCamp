---
title: C++
localeTitle: C ++
---
# 你好，世界！ - 您的第一个C ++程序

## 什么是C ++？

*   C ++是一种通用编程语言，自1990年代开始使用
    
*   它由Bjarne Stroustrup设计，名称为“C with classes”。
    
*   它是C的一个版本，包括面向对象的元素，包括类和函数。
    
*   它被认为是最大的编程语言之一，如下图所示： ![图](http://static1.businessinsider.com/image/59deb30392406c21008b6148-1200/for-bonus-points-heres-the-chart-showing-these-languages-relative-popularity.jpg) _来源：Github_
    

### 您在C ++中的第一个程序

```cpp
#include <iostream> 
 using namespace std; 
 int main() 
 { 
    cout << "Hello World" << endl; 
    return 0; 
 } 
```

#### 该程序的输出将简单地是：
```
Hello World! 
```

现在，让我们分解代码：

#### 第1行和第2行

```cpp
#include <iostream> 
 using namespace std; 
```

*   第一行告诉计算机为此特定程序使用“iostream”头文件。头文件是带有预先编写的C ++代码的单独文件。还有许多其他头文件需要特定程序才能正常运行。其中一些是：数学，矢量和字符串。头文件通常用“.h”扩展名表示（包含C ++标准库文件时不需要添加.h）
*   `iostream`代表输入输出流。 “iostream”文件包含允许计算机使用C ++语言获取输入并生成输出的代码。
*   第二行告诉计算机使用包含标准C ++功能的标准命名空间。你可以在没有这一行的情况下编写这个程序，但是你必须在第4行使用`std::cout`而不是`cout`和`std::endl`而不是`endl` 。它使代码更具可读性，并且我们作为程序员的生活更容易。

#### 3号线和4号线

```cpp
int main() 
 { 
```

*   C ++从-main function- `int main()`开始执行程序。在执行期间，计算机开始从`{` （开始括号）到`}`每一行运行代码（结束括号） **注意：每个函数都以一个左大括号“{”开头，以一个右大括号“}”结束。**
*   第4行表示main（）函数的开始。

#### 第5,6和7行

```cpp
    cout << "Hello World" << endl; 
    return 0; 
 } 
```

*   C ++中的单词`cout`用于输出。
*   接下来是`<<` ， _插入运算符_ 。
*   无论是在双引号`""`被打印出来。某些特殊字符对于print语句具有不同的语法
*   现在要打印任何其他类型的数据，你必须添加`<<` 。

**_挑战：尝试将Hello World更改为任何其他句子或单词。什么是输出？_**

*   当使用C ++语言**结束此行并在输出期间转到下一行时，** `endl`是保留字。 - _cout代表“控制台输出”_
*   最后，用分号完成命令`;` 。

**注意：除主函数定义和#include指令之外的每个命令都需要以分号结束。没有 ”;” ，您可能会遇到错误。**

*   `return 0;`在这种情况下安全地终止当前函数，即'main（）'，因为在'main（）'之后没有函数跟随程序终止。
*   不要忘记告诉计算机这是main（）函数的结束。要执行此操作，请添加结束大括号“}”。如果不包含**}，**则在程序执行前会遇到错误。

### 代码看起来应该是这样的：

![图](https://cdn-media-1.freecodecamp.org/imgr/d1liGwI.png)

程序员使用Hello World程序（就像这个程序）作为使用新编程语言的仪式。这是好运的象征。  
_您已经完成了第一个C ++程序的编码，并且已经理解了您编写/键入的大部分代码。恭喜！_

**祝大家好运，编码愉快！ :)**

**快乐的编码！ :)**

**欢迎在FreeCodeCamp的GitHub页面或[FreeCodeCamp的论坛](https://forum.freecodecamp.org/)上提出任何问题[。](https://forum.freecodecamp.org/)**

[亲自尝试一下！ :)](https://repl.it/L4k3)

**您可能需要一些软件来编写和执行C ++代码。我建议使用CodeBlocks。下面有一个下载链接：**

下载链接： [在此下载](http://www.codeblocks.org/downloads/26)

*   单击用于Windows的GNU / GCC编译器的链接。这不需要额外安装

其他替代方案可以是visual studio，使用编译器或在线IDE，例如Cloud9或repl.it

Mac [版](https://developer.apple.com/xcode/)链接＃2： [在这里下载Mac＃2](https://developer.apple.com/xcode/)
