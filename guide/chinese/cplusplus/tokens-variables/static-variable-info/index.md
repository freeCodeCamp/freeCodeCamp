---
title: Variables
localeTitle: 变量
---
让我们讨论一些被称为变量的东西。变量就像一个桶。你可以把东西放进去然后改变它 之后需要的时候。 在C ++中，有许多类型的变量，如整数，字符串，布尔值等等。 让我们看一个使用整数变量的简单程序。整数存储正数，负数或零的整数。整数不是分数，例如1 / 2,1 / 4和1/5。让我们看一个使用整数的简单程序 变量。

```cpp
#include <iostream> 
 using namespace std ; 
 int main() 
 { 
    int a;          // Declare an integer variable a 
    a = 5;          // Assign value of 5 to variable a 
    cout << a;      // Display the value of variable a which contains 5 
    return 0; 
 } 
```

执行此程序时，屏幕上会显示5

*   请注意，在上面的程序中//放在行之后。符号“//”用于注释我们的代码。符号后面的代码 “//”不会在其放置的行中被执行。
    
*   在第5行，声明了一个简单的整数变量。
    
*   在第6行，值5被赋给变量a。现在每当我们在程序中使用变量a时，它的值将为5 除非我们改变它。
    
*   在第7行，我们显示变量a的值，并在屏幕上打印5。
    

### 变量范围

所有变量都具有其功能区域，并且在该边界之外它们不保持其值，该边界称为变量的范围。对于大多数情况，它在花括号之间，其中变量被声明为存在变量，而不是在变量之外。我们稍后会研究存储类，但到目前为止，我们可以将变量大致分为两种主要类型，

\*全球变量。

\*局部变量。

#### 全局变量

全局变量是那些，一旦声明并且可以在程序的整个生命周期中由任何类或任何函数使用。它们必须在main（）函数之外声明。如果仅声明，则可以在程序生命周期的不同时间为它们分配不同的值。但即使它们在main（）函数之外同时声明和初始化，也可以在程序的任何一点为它们分配任何值。

示例：仅声明，未初始化。

```cpp
include <iostream> 
 using namespace std; 
 int x;                // Global variable declared 
 int main() 
 { 
 x=10;                 // Initialized once 
 cout <<"first value of x = "<< x; 
 x=20;                 // Initialized again 
 cout <<"Initialized again with value = "<< x;` 
 } 
```

#### 局部变量

局部变量是仅存在于其声明的花括号之间的变量。在外面它们不可用并导致编译时错误。

示例：

```cpp
include <iostream> 
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

现在让我们来看看一种新型的变量 -

#### 静态变量

静态变量：当一个变量声明为static时，它的空间将被分配给程序的生命周期。即使多次调用该函数，静态变量的空间也只分配一次，前一次调用中的变量值通过下一个函数调用传递。这对于在C / C ++或需要存储先前函数状态的任何其他应用程序中实现协同程序非常有用。 通俗地说，这意味着当超出范围时，正常变量会失去它的标识（值），但静态变量具有全局范围并保留其值直到程序结束，但与全局变量不同，没有必要声明它在计划开始时。

#### 额外-

Static是C ++中的一个关键字，用于为元素赋予特殊的特征。静态元素在静态存储区域的程序生命周期中仅分配存储一次。他们有一个范围，直到程序生命周期。

#### 码-
```
#include <iostream> 
 #include <string> 
 using namespace std; 
 
 void howstaticworks() 
 { 
    static int count = 0;  // static variable 
    cout << count << " "; 
 
    /* value is updated and 
     will be carried to next 
     function calls*/ 
    count++; 
 } 
 
 int main() 
 { 
    for (int i=0; i<5; i++) 
        howstaticworks(); 
    return 0; 
 } 
```

#### 试试自己

只需复制代码并将其粘贴到给定的链接中即可。 在IDE上运行 - https://ideone.com/

输出： 0 1 2 3 4

您可以在上面的程序中看到变量count被声明为static。因此，它的值通过函数调用来传递。每次调用函数时，变量计数都不会被初始化。

让我们通过删除“static”关键字来尝试相同的代码并猜测输出并将其与IDE上的一个进行比较。 静态现在转换为正常变量