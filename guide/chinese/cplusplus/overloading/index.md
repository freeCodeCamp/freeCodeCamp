---
title: C++ Overloading
localeTitle: C ++重载
---
C ++允许您为同一范围内的函数名称或运算符指定多个定义，分别称为函数重载和运算符重载。

重载声明是声明，声明与同一作用域中先前声明的声明具有相同的名称，除了两个声明具有不同的参数和明显不同的定义（实现）。

当您调用重载函数或运算符时，编译器通过将用于调用函数或运算符的参数类型与定义中指定的参数类型进行比较，确定要使用的最合适的定义。选择最合适的重载函数或运算符的过程称为重载决策。

### C ++中的函数重载

您可以在同一范围内对同一函数名称具有多个定义。函数的定义必须通过参数列表中的参数的类型和/或数量彼此不同。您不能重载仅由返回类型不同的函数声明。

以下是使用相同函数print（）打印不同数据类型的示例 -

```cpp
#include <iostream> 
 #include <string> 
 using namespace std; 
 
 class printData { 
   public: 
      void print(int i) { 
        cout << "Printing int: " << i << endl; 
      } 
      void print(double  f) { 
        cout << "Printing float: " << f << endl; 
      } 
      void print(const string& s) { 
        cout << "Printing string: " << s << endl; 
      } 
 }; 
 
 int main() { 
   printData pd; 
 
   // Call print to print integer 
   pd.print(5); 
 
   // Call print to print float 
   pd.print(500.263); 
 
   // Call print to print string 
   pd.print("Hello C++"); 
 
   return 0; 
 } 
```

编译并执行上述代码时，会产生以下结果 -
```
Printing int: 5 
 Printing float: 500.263 
 Printing string: Hello C++ 
```

### C ++中的运算符重载

大多数内置运算符也可以在C ++中重载。这允许程序员根据参数为操作符分配不同的实现。这些重载的运算符可以用于用户定义的类。
```
#include<iostream> 
 using namespace std; 
 
 class Complex_Number{ 
 private: 
    int real; 
    int imag; 
 public: 
    Complex_Number(int i = 0, int j =0) 
    { 
        real = i; 
        imag = j; 
    } 
    //Here the operator '+' is being overloaded 
    Complex_Number operator + (Complex_Number const &a) 
    { 
         Complex_Number x; 
         x.real = real + a.real; 
         x.imag = imag + a.imag; 
         return x; 
    } 
    void print() 
    { 
         cout<<real<<" + i"<<imag<<endl; 
    } 
 }; 
 
 int main() 
 { 
    Complex_Number c1(3, 2), c2(1, 1); 
    //Here, the overloaded operator is called. The numbers get added according to the function defined 
    Complex_Number c3 = c1 + c2; 
    c3.print(); 
 } 
```

上述计划的输出
```
4 + i3 

```