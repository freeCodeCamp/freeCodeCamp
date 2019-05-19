---
title: Tokens Part 1
localeTitle: 代币第1部分
---
### 什么是令牌？

标记是程序的最小单元，对编译器很重要。有不同种类的令牌：

*   关键词
    
*   运营商
    
*   标点符号
    
*   字面
    
*   身份标识
    
*   **令牌的组合形成表达**
    

### 什么是变量？

*   教科书定义：变量是指定数据可以更改的内存位置。

*   但我希望你把变量想象成一个类似于盒子的东西，如下所示： ![图](https://cdn-media-1.freecodecamp.org/imgr/YdbgWHL.png)
    

所以，例如： 我正在转移到一个新的地方，我需要把我的东西安排在盒子里。因此，我想到了两件事情， **盒子里会存储什么样的东西，所以盒子的大小是已知的（数据类型）** ， **我如何识别盒子？（命名变量）**  
因此，我们知道C ++中的变量需要_名称_和_数据类型，_并且可以更改存储在其中的值。

### C ++中的数据类型：

在c ++中声明变量时，它们必须具有您稍后将要使用的名称，值（常量或非常量）和类型。 该类型将告诉编译器变量可以使用的值，可能的操作并将在memmory中保存一定的空间。 在c ++中有两种类型的数据：

*   简单的类型
*   结构类型

### 简单的数据类型

*   布尔 - 布尔 像开关一样工作，可以打开或关闭。
*   人物 - 炭火 存储单个字符。
*   整数 - 整数 存储[整数](https://en.wikipedia.org/wiki/Integer) 。
*   浮点 - 浮点数 他们可以使用小数。
*   双浮点 - 双 浮点型的双精度。

在这里你可以看到一些例子：

```cpp
bool GameRunning = true; 
 char a; 
 int x = 2; 
```

#### 这些类型也可以使用修饰符进行修改，例如：

签 无符号 短 长

### 结构数据类型

#### 身份标识。

*   标识符是赋予变量或类或函数或任何用户定义函数的名称。

## 命名变量的规则：

*   用AZ或az中的字母开始命名。
*   数字可以跟随您的第一个字母，但我们无法开始用数字命名。
*   不允许使用空格或特殊字符，而是使用UNDERSCORE \_。

#### 声明变量：

语法如下 < _数据类型_ > < _变量名称_ >; 要么 < _data type_ > < _variable name_ > = < _value_ >;如果我们也想初始化变量。

例如 ： `cpp int a ; //declaring a variable named 'a' of type integer. a=4; //initializing a variable int b = 5 ; //declaring and initializing a variable 'b' of type integer.`

**声明变量的示例：**

```cpp
int a9; 
 char A; 
 double area_circle; 
 long l; 
```

**声明变量的错误方法** -

```cpp
int 9a; 
 char -a; 
 double area of circle; 
 long l!!; 
```

*   变量名称不能以数字开头
*   不允许有特殊字符
*   不允许有空格

您可以想象不同尺寸的不同盒子，并将不同的东西存储为不同的变量。

**注意：**

1.  **C ++编译器忽略空格，它们通常用于美化代码，以便任何程序员调试或理解代码。**
2.  **如果未初始化变量，则它包含垃圾值。让我举个例子：**

### 变量范围

所有变量都具有其功能区域，并且在该边界之外它们不保持其值，该边界称为变量的范围。对于大多数情况，它在花括号之间，其中变量被声明为存在变量，而不是在变量之外。我们稍后会研究存储类，但到目前为止，我们可以将变量大致分为两种主要类型，

\*全球变量。

\*局部变量。

#### 全局变量

全局变量是那些，一旦声明并且可以在程序的整个生命周期中由任何类或任何函数使用。它们必须在main（）函数之外声明。如果仅声明，则可以在程序生命周期的不同时间为它们分配不同的值。但即使它们在main（）函数之外同时声明和初始化，也可以在程序的任何一点为它们分配任何值。

示例：仅声明，未初始化。

```cpp
#include <iostream> 
 using namespace std; 
 int x;                // Global variable declared 
 int main() 
 { 
 x=10;                 // Initialized once 
 cout <<"first value of x = "<< x; 
 x=20;                 // Initialized again 
 cout <<"Initialized again with value = "<< x; 
 } 
```

#### 局部变量

局部变量是仅存在于其声明的花括号之间的变量。在外面它们不可用并导致编译时错误。

示例：

```cpp
#include <iostream> 
 using namespace std; 
 int main() 
 { 
 int i=10; 
 if(i<20)        // if condition scope starts 
  { 
    int n=100;   // Local variable declared and initialized 
  }              // if condition scope ends 
 cout << n;      // Compile time error, n not available here 
 } 
```

### 常数变量

常量变量是无法更改的变量。例如，如果您的代码中需要“pi”，则不希望在初始化后更改它。

示例：

```cpp
#include <iostream> 
 using namespace std; 
 const double PI = 3.14159253; 
 int main() 
 { 
 //Calculating the area of a circle, using user provided radius 
 double radius; 
 //input and output explained in other guide 
 cin>>radius; 
 //pi*r^2 
 double area = PI*radius*radius; 
 cout<<area<<endl; 
 } 
```

### 变量中的垃圾值

如果未初始化变量，则它包含垃圾值。例如：

所以就盒子而言，你可以把它想象成 -

![图](https://cdn-media-1.freecodecamp.org/imgr/YdbgWHL.png)

\`\`\`CPP ＃包括 使用命名空间std; int main（） { int a; cout <<“垃圾值中的一个：”<< a << endl; //声明类型为integer的名为'a'的变量 一个= 5; //初始化变量。 cout <<“一个新的价值”<< a << endl;

} \`\`\`

### 输出是：
```
Garbage value in a : 0 
 New value in a :  5 
```

正如您所看到的，在我们给它一个值（这里，它是0）之前，已经有一个值存储在'a'中。这应该保留在每个程序员的脑海中，这样当使用变量时，它们不会创建逻辑错误并打印垃圾值。

[亲自尝试一下代码吧！ :)](https://repl.it/Mg7j)

#### 关键字：

_关键字是为编译器传达特殊含义的保留字。它们**不能**用于在c ++中命名。_ 关键字示例： 内联，运算符，私有int，double，void，char，模板，使用，虚拟，休息，案例，开关，朋友等。

**这些关键字中的每一个都用于C ++中的特殊功能。**

_令牌第1部分结束了。在Tokens的[第2部分](https://guide.freecodecamp.org/cplusplus/tokens-part-II)见到你的露营者:)_

**祝大家好运**

**快乐的编码！ :)**

**随意在FreeCodeCamp的GitHub页面或[FreeCodeCamp的论坛](https://forum.freecodecamp.org/)上询问任何问题[。](https://forum.freecodecamp.org/)**
