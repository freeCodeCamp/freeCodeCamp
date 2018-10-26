---
title: Inline Functions in C++
localeTitle: C ++中的内联函数
---
## C ++中的内联函数

当程序执行函数调用指令时，CPU存储函数调用之后的指令的存储器地址，复制函数的参数在堆栈上，最后将控制转移到指定的函数。然后，CPU执行功能代码，将功能返回值存储在预定义的存储器位置/寄存器中，并将控制返回给调用功能。如果函数的执行时间小于从调用函数到被调用函数（被调用者）的切换时间，则这可能成为开销。对于大型和/或执行复杂任务的函数，与函数运行所花费的时间相比，函数调用的开销通常是微不足道的。但是，对于常用的小函数，进行函数调用所需的时间通常比实际执行函数代码所需的时间多得多。小功能的开销是因为小功能的执行时间小于切换时间。

C ++提供了一个内联函数来减少函数调用开销。内联函数是一个在调用时按行扩展的函数。当调用内联函数时，内联函数的整个代码在内联函数调用点插入或替换。此替换由C ++编译器在编译时执行。内联函数如果很小则可以提高效率。 定义函数内联的语法是：

```cpp
inline return-type function-name(parameters) 
 { 
    // function code 
 } 
```

请记住，内联只是对编译器的请求，而不是命令。编译器可以忽略内联请求。编译器可能不会在以下情况下执行内联：

*   如果函数包含循环。 （for，while，do-while）
*   如果函数包含静态变量。
*   如果函数是递归的。
*   如果函数返回类型不是void，则函数体中不存在return语句。
*   如果函数包含switch或goto语句。

### 内联函数具有以下优点：

*   不会发生函数调用开销。
*   调用函数时，它还可以节省堆栈上push / pop变量的开销。
*   它还节省了函数返回调用的开销。
*   内联函数时，可以使编译器在函数体上执行特定于上下文的优化。对于正常的函数调用，这种优化是不可能的。通过考虑调用上下文和被调用上下文的流程，可以获得其他优化。
*   对于嵌入式系统，内联函数可能很有用（如果它很小），因为内联可以产生比函数调用前导码和返回更少的代码。

### 内联功能缺点：

*   内联函数中添加的变量会消耗额外的寄存器，如果要使用寄存器的变量数增加，则可能会在寄存器变量资源利用率上产生开销。这意味着当在函数调用点替换内联函数体时，函数使用的变量总数也会被插入。因此，用于变量的寄存器数量也将增加。因此，如果在函数内联变量数量大幅增加之后，它肯定会导致寄存器利用率的开销。
    
*   如果使用太多内联函数，则二进制可执行文件的大小将很大，因为相同代码的重复。
    
*   过多的内联也会降低指令缓存命中率，从而降低从缓存内存到主内存的指令获取速度。
    
*   如果有人更改了内联函数中的代码，则内联函数可能会增加编译时间开销，因此必须重新编译所有调用位置，因为编译器需要再次替换所有代码以反映更改，否则它将继续使用旧功能。
    
*   内联函数可能对许多嵌入式系统无用。因为在嵌入式系统中，代码大小比速度更重要。
    
*   内联函数可能会导致颠簸，因为内联可能会增加二进制可执行文件的大小。内存中的颠簸会导致计算机性能下降。
    

以下程序演示了这个概念：

```cpp
#include <iostream> 
 using namespace std; 
 class operation 
 { 
    int a,b,add,sub,mul; 
    float div; 
 public: 
    void get(); 
    void sum(); 
    void difference(); 
    void product(); 
    void division(); 
 }; 
 inline void operation :: get() 
 { 
    cout << "Enter first value:"; 
    cin >> a; 
    cout << "Enter second value:"; 
    cin >> b; 
 } 
 
 inline void operation :: sum() 
 { 
    add = a+b; 
    cout << "Addition of two numbers: " << a+b << "\n"; 
 } 
 
 inline void operation :: difference() 
 { 
    sub = ab; 
    cout << "Difference of two numbers: " << ab << "\n"; 
 } 
 
 inline void operation :: product() 
 { 
    mul = a*b; 
    cout << "Product of two numbers: " << a*b << "\n"; 
 } 
 
 inline void operation ::division() 
 { 
    div=a/b; 
    cout<<"Division of two numbers: "<<a/b<<"\n" ; 
 } 
 
 int main() 
 { 
    cout << "Program using inline function\n"; 
    operation s; 
    s.get(); 
    s.sum(); 
    s.difference(); 
    s.product(); 
    s.division(); 
    return 0; 
 } 
```

输出：
```
Enter first value: 45 
 Enter second value: 15 
 Addition of two numbers: 60 
 Difference of two numbers: 30 
 Product of two numbers: 675 
 Division of two numbers: 3 

```