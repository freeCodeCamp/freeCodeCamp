---
title: Pointers
localeTitle: 指针
---
# C中的指针

到现在为止你应该知道C是一种低级语言，没有什么能比指针更好。指针是通过“指向”内存位置而不是存储变量本身的值来获取变量值的变量。这允许一些方便的技巧，并且还使我们能够访问数组和文件处理等。

＃
```
type *var-name; 
```

## 制作和使用指针

```c
#include <stdio.h> 
 
 int main(void){ 
    double my_double_variable = 10.1; 
    double *my_pointer; 
 
    my_pointer = &my_double_variable; 
 
    printf("value of my_double_variable: %f\n", my_double_variable); 
 
    ++my_double_variable; 
 
    printf("value of my_pointer: %f\n", *my_pointer); 
 
    return 0; 
 } 
```

输出：
```
value of my_double_variable: 10.100000 
 value of my_pointer: 11.100000 
```

在此代码中，有两个声明。第一个是典型的变量初始化，它创建一个`double`并将其设置为10.1。我们的声明中的新内容是`*`的用法。星号（ `*` ）通常用于乘法，但是当我们通过将它放在变量前面来使用它时，它会告诉C这是一个指针变量。

下一行告诉编译器实际上在哪里。通过使用`&`以这种方式，它成为'解除引用运算符'，并返回它正在查看的变量的内存位置。

考虑到这一点，让我们再看一下这段代码：

```c
double *my_pointer; 
 // my_pointer now stored the address of my_double_variable 
 my_pointer = &my_double_variable; 
```

`my_pointer`已被声明，并且已被声明为指针。 C编译器现在知道`my_pointer`将指向一个内存位置。下一行使用`&`为`my_pointer`分配一个内存位置值。

现在让我们来看看代码的内存位置意味着什么：

```c
    printf("value of my_double_variable: %f\n", my_double_variable); 
 
    // Same as my_double_variable = my_double_variable + 1 
    // In human language, adding one to my_double_variable 
    ++my_double_variable; 
 
    printf("value of my_pointer: %f\n", *my_pointer); 
```

请注意，为了在`*my_pointer`获取数据的值，您需要告诉C您想要获取变量指向的值。尝试在没有该星号的情况下运行此代码，您将能够打印内存位置，因为这是`my_variable`变量实际保存的内容。

您可以像使用标准变量一样在单个语句中声明多个指针，如下所示：

```c
int *x, *y; 
```

请注意， `*`在每个变量之前都是必需的。这是因为将指针视为变量的一部分而不是数据类型的一部分。

## 指针的实际用途

### 数组

指针的最常见应用是在数组中。您将在稍后阅读的数组允许一组变量。你实际上不必处理`*`和`&`来使用数组，但这就是他们在幕后所做的事情。

### 功能

有时您想要调整函数内部变量的值，但如果您只是传递变量值，则该函数将使用变量的副本而不是变量本身。相反，如果传入指向变量内存位置的指针，则可以从其正常范围之外访问和修改它。这是因为您正在触摸原始内存位置本身，允许您调整函数中的某些内容并在其他位置进行更改。与“按值调用”相反，这称为“按引用调用”。

以下程序在专用`swap`函数内`swap`两个变量的值。为此，变量通过引用传入。

```c
 /* C Program to swap two numbers using pointers and function. */ 
 #include <stdio.h> 
 void swap(int *n1, int *n2); 
 
 int main() 
 { 
    int num1 = 5, num2 = 10; 
 
    // address of num1 and num2 is passed to the swap function 
    swap( &num1, &num2); 
    printf("Number1 = %d\n", num1); 
    printf("Number2 = %d", num2); 
    return 0; 
 } 
 
 void swap(int * n1, int * n2) 
 { 
    // pointer n1 and n2 points to the address of num1 and num2 respectively 
    int temp; 
    temp = *n1; 
    *n1 = *n2; 
    *n2 = temp; 
 } 
```

产量
```
Number1 = 10 
 Number2 = 5 
```

`num1`和`num2`的地址或存储单元被传递给函数`swap` ，并由函数内部的指针`*n1`和`*n2`表示。因此，现在指针`n1`和`n2`指向`num1`和`num2`的地址。

所以，现在指针n1和n2分别指向num1和num2的地址。

当指针的值改变时，指向的存储器位置中的值也相应地改变。

因此，对\* n1和\* n2的更改反映在main函数中的num1和num2中。

### 指针作为功能的参数

当我们将任何参数传递给函数时，我们正在制作参数的副本。让我们看看这个例子

```C
#include <stdio.h> 
 
 void func(int); 
 
 int main(void) { 
    int a = 11; 
    func(a); 
    printf("%d",a);// print 11 
 
 
    return 0; 
 } 
 void func(int a){ 
 a=5 
 printf("%d",a);//print 5 
 } 
```

在上面的例子中，我们正在函数func中更改整数a的值，但我们仍然在main函数中使用11。这是因为在整数a的函数副本中已经作为参数传递，所以在这个函数中我们无法访问main函数中的'a'。

那你怎么能用另一个函数改变main中定义的整数的值呢？ POINTERS在这里扮演角色。 当我们提供指针作为参数时，我们可以访问该参数的地址，我们可以使用此参数进行任何操作，结果将随处显示。 下面是一个我们想要完全相同的例子......

通过解除引用`n1`和`n2` ，我们现在可以修改`n1`和`n2`指向的内存。这允许我们更改`main`函数中在其正常范围之外声明的两个变量`num1`和`num2`的值。函数完成后，两个变量现在交换了它们的值，如输出中所示。

### 内存位置技巧

只要可以避免，最好保持代码易于阅读和理解。在最好的情况下，您的代码将讲述一个故事 - 如果您大声朗读它将具有易于阅读的变量名称，并且您将使用偶尔的注释来阐明代码行的作用。

因此，使用指针时应该小心。很容易让你混淆调试或让别人阅读。但是，可以用它们做一些非常巧妙的事情。

看看这段代码，它将大小写变为小写：

```c
#include <stdio.h> 
 #include <ctype.h> 
 
 char *lowerCase (char *string) { 
    char *p = string; 
    while (*p) { 
        if (isupper(*p)) *p = tolower(*p); 
        p++; 
    } 
    return string; 
 } 
```

这首先是一个字符串（当你进入数组时你会学到的东西）并遍历每个位置。请注意p ++。这会增加指针，这意味着它正在查看下一个内存位置。每个字母都是一个内存位置，因此指针会以这种方式查看每个字母并决定每个字母要做什么。

### Const Qualifer

限定符const可以应用于任何变量的声明，以指定其值不会被更改（这取决于存储const变量的位置，我们可以通过使用指针来更改const变量的值）。

# 指向变量的指针

我们可以改变ptr的值，我们也可以改变指向的对象ptr的值。 下面的代码片段解释了变量的指针

```c
#include <stdio.h> 
 int main(void) 
 { 
    int i = 10; 
    int j = 20; 
    int *ptr = &i;        /* pointer to integer */ 
    printf("*ptr: %d\n", *ptr); 
 
    /* pointer is pointing to another variable */ 
    ptr = &j; 
    printf("*ptr: %d\n", *ptr); 
 
    /* we can change value stored by pointer */ 
    *ptr = 100; 
    printf("*ptr: %d\n", *ptr); 
 
    return 0; 
 } 
```

# 指向常数的指针

我们可以将指针更改为指向任何其他整数变量，但不能使用指针ptr更改指向的对象（实体）的值。

```c
#include <stdio.h> 
 int main(void) 
 { 
    int i = 10; 
    int j = 20; 
    const int *ptr = &i;    /* ptr is pointer to constant */ 
 
    printf("ptr: %d\n", *ptr); 
    *ptr = 100;        /* error: object pointed cannot be modified 
                     using the pointer ptr */ 
 
    ptr = &j;          /* valid */ 
    printf("ptr: %d\n", *ptr); 
 
    return 0; 
 } 
```

# 常量指向变量的指针

在这里我们可以改变指针所指向的变量的值。但我们无法改变指向的指针 另一个变量。

```c
#include <stdio.h> 
 int main(void) 
 { 
   int i = 10; 
   int j = 20; 
   int *const ptr = &i;    /* constant pointer to integer */ 
 
   printf("ptr: %d\n", *ptr); 
 
   *ptr = 100;    /* valid */ 
   printf("ptr: %d\n", *ptr); 
 
   ptr = &j;        /* error */ 
   return 0; 
 } 
```

# 常量指针指向常量

上面的声明是指向常量变量的常量指针，这意味着我们不能改变指针指向的值，也不能将指针指向其他变量。

```c
#include <stdio.h> 
 
 int main(void) 
 { 
    int i = 10; 
    int j = 20; 
    const int *const ptr = &i; /* constant pointer to constant integer */ 
 
    printf("ptr: %d\n", *ptr); 
 
    ptr = &j;            /* error */ 
    *ptr = 100;        /* error */ 
 
    return 0; 
 } 
```

# 在你继续之前......

## 回顾

*   指针是变量，但它们不存储值，而是存储内存位置。
*   `*`和`&`分别用于访问存储器位置的值和访问存储器位置。
*   指针对C的一些基本特征很有用。

# C中的指针与数组

大多数情况下，指针和数组访问可以被视为相同的行为，主要的例外是：

1）sizeof运算符

*   `sizeof(array)`返回数组中所有元素使用的内存量
*   `sizeof(pointer)`仅返回指针变量本身使用的内存量

2）＆运营商

*   ＆array是＆array \[0\]的别名，并返回数组中第一个元素的地址
*   ＆pointer返回指针的地址

3）字符数组的字符串文字初始化

*   `char array[] = “abc”`将数组中的前四个元素设置为'a'，'b'，'c'和'\\ 0'
*   `char *pointer = “abc”`设置指向“abc”字符串地址的指针（可以存储在只读存储器中，因此不可更改）

4）指针变量可以赋值，而数组变量不能。

```c
    int a[10]; 
    int *p; 
    p = a; /*legal*/ 
    a = p; /*illegal*/ 
```

5）允许对指针变量进行算术运算。

```c
    p++; /*Legal*/ 
    a++; /*illegal*/ 

```