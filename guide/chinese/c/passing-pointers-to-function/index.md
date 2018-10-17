---
title: Passing pointers to funtions
localeTitle: 将指针传递给功能
---
# 将指针传递给功能

C允许将指针传递给函数。要实现此目的，只需将参数声明为指针类型即可。 当您想要修改超出该函数范围的变量时，这种传递函数的方法很有用。

```C
// incorrect implementation of swap 
 #include <stdio.h> 
 void swap(int a, int b){ 
    int c; 
    c = a; 
    a = b; 
    b = c; 
 } 
 int main(){ 
    int var1 = 10; 
    int var2 = 20; 
    swap(var1, var2); 
    printf("Value of var1: %d \n", var1); // prints 10 
    printf("Value of var2: %d \n", var2); // prints 20 
 } 
```

在此代码示例中，交换函数不能按预期工作，因为它交换了仅存在于该函数范围内的两个变量。为了解决这个问题，我们进行了如下所示的修改。

```C
// correct implementation of swap 
 #include <stdio.h> 
 void swap(int* a, int* b){ 
    int c = *a; 
    *a = *b; 
    *b = c; 
 } 
 int main(){ 
    int var1 = 10; 
    int var2 = 20; 
    swap(&var1, &var2); 
    printf("Value of var1: %d \n", var1); // prints 20 
    printf("Value of var2: %d \n", var2); // prints 10 
 } 
```

在第二个代码示例中，您只能更改变量的值，因为您不断地在函数内取消引用指针而不是尝试直接更改值