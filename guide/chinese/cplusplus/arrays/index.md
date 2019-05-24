---
title: C++ Arrays
localeTitle: C ++数组
---
## 什么是阵列？

数组是一系列相同数据类型的元素，它们存储在连续的内存位置，可以单独引用。

例如，包含5个称为数字的整数值的数组声明如下：

```cpp
int numbers [5]; 
```

Initializiation：

```cpp
//Initialization with entries: 
 int numbers [5] = {1, 2, 3, 4, 5}; 
 
 //Initialization with no values: 
 int numbers [5] = {}; 
 
 //Initialization with declaration: 
 int numbers [] = {1, 2, 3, 4, 5}; 
 //Note that here the number of values defines the size of the array. 
 //In the examples above, the size was fixed beforehand 
```

**请注意** ，C ++中的数组在大小上是不可置换的，这意味着一旦声明了大小为5的数组，就无法将其放大或缩小。如果您确实需要具有相同条目的更大阵列，则必须将所有条目复制到更大尺寸的新阵列。

### 访问：

可以通过引用它们在数组中的位置来访问数组中的元素。 （从0开始计数）。  
例：

```cpp
x = numbers[0]; // = 1. [0] == first position 
 numbers[2] = 55; // Sets the third position (3) to the new number 55 
 //numbers[] is now: {1, 2, 55, 4, 5} 

```