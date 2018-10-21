---
title: Dinamic Memory Management
localeTitle: Dinamic内存管理
---
# Dinamic内存管理

有时您需要在堆中分配内存空间，也称为dinamic内存。当您在编译期间不知道数据结构（如数组）的大小时，这非常有用。

## 一个例子

这是一个简单的例子，我们分配一个数组，要求用户选择维度

```C
#include <stdio.h> 
 #include <stdlib.h> 
 
 int main(void) { 
    int arrayDimension,i; 
    int* arrayPointer; 
 
    scanf("Please insert the array dimension:%d",arrayDimension); 
    arrayPointer = (int*)malloc(sizeof(int)*arrayDimension); 
 
    if(arrayPointer == NULL){ 
      printf("Error allocating memory!"); 
      return -1; 
     } 
 
     for(i=0;i<arrayDimension;i++){ 
        printf("Insert the %d value of the array:",i+1); 
        scanf("%d\n",arrayPointer[i]); 
     } 
 
    free(arrayPointer); 
    return 0; 
 } 
```

正如您所看到的，为了在dinamic内存中分配空间，您需要知道指针在C中的工作方式。 这里的魔术函数是`malloc` ，它将作为输出返回一个void指针（它是一个指向未知数据类型区域的指针）到我们刚刚分配的新内存空间。 让我们看看如何逐步使用此功能：

## 在运行时分配数组

```C
sizeof(int) 
```

让我们从`sizeof`开始吧。 `malloc`需要知道为您的数据分配多少空间。事实上， `int`变量将使用更少的存储空间，然后使用`double`存储空间。 假设任何数据类型的大小通常是不安全的。例如，尽管32位系统上的大多数C和C ++实现都将int类型定义为四个八位字节，但是当代码移植到不同的系统时，此大小可能会发生变化，从而破坏了代码。 `sizeof`因为它的名字建议生成变量或数据类型的大小。

```C
arrayPointer = (int*) malloc(sizeof(int) * arrayDimension); 
```

在此示例中，malloc分配内存并返回指向内存块的指针。分配的块大小等于int类型的单个对象乘以`arrayDimension`的字节数， `arrayDimension`是系统有足够的可用空间。 但是如果你没有足够的空间或者`malloc`因为其他原因而无法分配呢？

## 检查malloc输出

这种情况并不常见，但在分配新的内存空间后检查指针变量的值是一种非常好的做法。

```C
    if(arrayPointer == NULL) 
      printf("Error allocating memory!"); 
```

这在调试阶段也非常有用，并且可以使用示例中使用的最后一个函数来防止一些可能的错误。

## 关于free（）的一句话

通常，变量在其范围被破坏时自动解除分配，从而释放它们正在使用的内存。 使用`malloc`手动分配内存时，不会发生这种简单。 为了防止更复杂的程序中的内存泄漏，并且为了不在系统中创建垃圾，您必须在终止代码执行之前释放最近使用的内存区域。

```C
  free(arrayPointer); 
```

最后，您将确定需要检查`arrayPointer`值以防止使用`free`函数发生错误。 如果`arrayPointer`值等于`NULL`您可能已经过期了某种错误。

## 其他功能类似于malloc

有时您不仅需要为操作保留新的内存区域，还可能需要将所有字节初始化为零。 这就是`calloc`的用途。 在其他情况下，您希望调整指针指向的内存量。例如，如果您的指针充当大小为`n`的数组，并且您想将其更改为大小为`m`的数组，则可以使用`realloc` 。

```C
  int *arr = malloc(2 * sizeof(int)); 
  arr[0] = 1; 
  arr[1] = 2; 
  arr = realloc(arr, 3 * sizeof(int)); 
  arr[2] = 3; 
```

## 常见错误

如前所述，动态内存分配的不当使用常常会成为错误的根源。 最常见的错误是：

*   不检查分配失败 内存分配不能保证成功，而是可以返回空指针。 使用返回的值，而不检查分配是否成功，调用未定义的行为。这通常会导致崩溃（由于空指针取消引用导致的分段错误），但不能保证会发生崩溃，因此依赖于此也会导致问题。
*   内存泄漏 未能使用`free`释放内存会导致不可重用的内存堆积，程序不再使用该内存。
*   逻辑错误 所有分配必须遵循相同的模式：使用`malloc`分配，使用存储数据，使用`free`进行`free` 。如果你不遵循这种模式，通常会给出分段错误错误，程序将崩溃。这些错误可能是暂时的并且难以调试 - 例如，释放的内存通常不会被系统立即回收，并且悬空指针可能会持续一段时间并且似乎可以正常工作。