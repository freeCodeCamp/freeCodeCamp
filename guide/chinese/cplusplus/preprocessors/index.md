---
title: Preprocessors
localeTitle: 预处理器
---
## C / CPP中的预处理器

顾名思义，预处理器是在编译之前处理源代码的程序。在C / C ++中编写程序和执行程序之间涉及许多步骤。在我们真正开始学习预处理器之前，让我们先看看这些步骤。

![图](https://cdn-media-1.freecodecamp.org/imgr/Pb0aTkV.png)

您可以在上图中看到中间步骤。程序员编写的源代码存储在文件program.c中。然后由预处理器处理该文件，并生成名为program的扩展源代码文件。此扩展文件由编译器编译，生成名为program.obj的目标代码文件。最后，链接器将此目标代码文件链接到库函数的目标代码，以生成可执行文件program.exe。

预处理程序提供预处理程序指令，告诉编译器在编译之前预处理源代码。所有这些预处理程序指令都以`#` （哈希）符号开头。 C / C ++程序中语句开头的这个（'＃'）符号表示它是一个预处理器指令。我们可以将这些预处理器指令放在程序的任何位置。一些预处理程序指令的示例是： `#include` ， `#include` `#define` ， `#ifndef`等。

### 预处理程序指令的类型：

1.  宏
2.  文件包含
3.  条件编译
4.  其他指令

### 宏：

宏是程序中的一段代码，它有一些名称。只要编译器遇到此名称，编译器就会将该名称替换为实际的代码段。 `#define`指令用于定义宏。

```cpp
  #include<iostream> 
  #define LIMIT 3 
  int main() 
  { 
    for(int i=0; i < LIMIT; i++) 
    { 
      std::cout<<i<<" " ; 
    } 
      return 0; 
  } 
```

输出：

`0 1 2`

在上面的程序中，当编译器执行单词`LIMIT`它将其替换为3.宏定义中的`LIMIT`字称为宏模板，'3'表示宏扩展。

在宏定义的末尾不应该有分号（';'）。宏定义不需要使用分号结束。

### 文件包含：

这种类型的预处理程序指令告诉编译器在源代码程序中包含一个文件。用户可以在程序中包含两种类型的文件：

*   ####头文件或标准文件： 这些文件包含预定义函数的定义，如printf（），... scanf（）等。必须包含这些文件才能使用这些函数。 ...在不同的头文件中声明了不同的功能。例如......标准I / O功能在'iostream'文件中，而执行字符串操作的功能在'string'文件中。

#### 句法：

`#include< file_name >` 其中file\_name是要包含的文件的名称。 `<`和`>`括号告诉编译器在标准目录中查找文件。

*   ####用户定义的文件： 当程序变得非常大时，最好将它分成较小的文件并在需要时包含。这些类型的文件是用户定义的文件。这些文件可以包含在： ... `#include"filename"`

### 条件编译：

条件编译指令是指令的类型，它有助于编译程序的特定部分或基于某些条件跳过程序的某些特定部分的编译。这可以通过两个预处理命令`ifdef`和`endif` 。

#### 句法：

```cpp
  ifdef macro_name 
    statement1; 
    statement2; 
    statement3; 
    . 
    . 
    . 
    statementN; 
  endif 
```

如果定义了名为'macroname'的宏，则语句块将正常执行，但如果未定义，则编译器将跳过此语句块。

### 其他指令：

除了上述指令外，还有两个不常用的指令。这些是：

1.  \##### `#undef`指令： `#undef`指令用于`#undef`定义现有宏。该指令的作用如下：

##### 句法：

`#undef LIMIT` 使用此语句将取消定义现有的宏LIMIT。在此语句之后，每个`#ifdef LIMIT`语句将评估为false。

2.  \##### `#pragma`指令： 该指令是一个特殊用途指令，用于打开或关闭某些功能。这种类型的指令是特定于编译器的，即它们因编译器而异。下面讨论一些`#pragma`指令：

##### `#pragma startup`和`#pragma exit` ：

这些指令帮助我们指定在程序启动之前（控件传递给main（）之前）和程序退出之前（在控件从main（）返回之前）运行所需的函数。

```cpp
#include<stdio.h> 
 void func1(); 
 void func2(); 
 #pragma startup func1 
 #pragma exit func2 
 void func1() 
 { 
    printf("Inside func1() "); 
 } 
 void func2() 
 { 
    printf("Inside func2() "); 
 } 
 int main() 
 { 
    printf("Inside main() "); 
 
    return 0; 
 } 
```

输出：  
`Inside func1() Inside main() Inside func2()`  
当在GCC编译器上运行时，上面的代码将产生如下给出的输出：  
输出：  
`Inside main()`  
这是因为GCC不支持#pragma startup或exit。但是，您可以在GCC编译器上使用以下代码获得类似的输出。

```cpp
#include<stdio.h> 
 void func1(); 
 void func2(); 
 void __attribute__((constructor)) func1(); 
 void __attribute__((destructor)) func2(); 
 void func1() 
 { 
    printf("Inside func1()\n"); 
 } 
 void func2() 
 { 
    printf("Inside func2()\n"); 
 } 
 int main() 
 { 
    printf("Inside main()\n"); 
 
    return 0; 
 } 
```

##### `#pragma warn`指令：

该指令用于隐藏编译期间显示的警告消息。 我们可以隐藏警告，如下所示：

##### `#pragma warn -rvl` ：

该指令隐藏了当应该返回值的函数未返回值时引发的警告。

##### `#pragma warn -par` ：

该指令隐藏了当函数不使用传递给它的参数时引发的警告。

##### `#pragma warn -rch` ：

该指令隐藏了代码无法访问时引发的警告。例如：在函数中的return语句之后写入的任何代码都是不可访问的。