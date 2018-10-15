---
title: Functions in C++
localeTitle: C ++中的函数
---
## 定义：

函数是一组一起执行任务的语句。每个C ++程序至少有一个函数，即main（）。

函数声明告诉编译器函数的名称，返回类型和参数。函数定义提供函数的实际主体。

## C ++函数定义的一般形式：

```cpp
return_type function_name( parameter list ) 
 { 
   body of the function 
 } 
```

### 返回类型：

函数可以返回值。返回_类型是函数返回的值的数据类型。某些函数执行所需的操作而不返回值。在这种情况下，返回_类型是关键字void。

### 功能名称：

这是函数的实际名称。函数名称和参数列表一起构成函数签名。

### 参数：

参数类似于占位符。调用函数时，将值传递给参数。该值称为实际参数或参数。参数列表是指函数参数的类型，顺序和数量。参数是可选的;也就是说，函数可能不包含任何参数。

### 功能体：

函数体包含一组语句，用于定义函数的功能。

## 例：

```cpp
int max(int num1, int num2) 
 { 
   // local variable declaration 
   int result; 
 
   if (num1 > num2) 
      result = num1; 
   else 
      result = num2; 
 
   return result; 
 } 
```

## 功能为何重要？

函数支持模块化（将工作分解为称为模块的较小部分），这是OOP的一个基本特征，它主要将C ++与C分离。 具有执行特定任务的特定功能可消除混淆并缩短主要功能的长度。 该函数还执行代码的可重用性。因此，下次您必须在同一程序中再次计算两个不同数字的最大值时，您无需复制和粘贴代码。你只需要调用该函数，它就可以完成其余的工作。

## 更多信息

*   [TutorialsPoint](https://www.tutorialspoint.com/cplusplus/cpp_functions.htm)