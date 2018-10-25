---
title: Structures
localeTitle: 结构
---
## C中的结构

### 什么是结构？

*   **结构**是C中的用户定义类型。它基于这样的想法，即程序员不仅要管理原始数据类型，还需要管理程序员定义的数据类型。
*   **结构** ，顾名思义，是由各种原语数据类型，如字符，整数，浮点变量，数组等等
*   **结构**还可以包含各种其他用户定义的数据类型。接下来你将学习嵌套结构。
*   **结构**构成了**_面向对象编程_**的基础，因为_类_的概念源于结构。

### struct关键字

*   `struct`关键字可以帮助我们定义用户定义的数据类型。

```C
struct StudentRecord 
 { 
  char Name[20]; 
  int Class; 
  char Address[30]; 
  char Phone[10]; 
 }; 
```

*   我们还可以使用**typedef**定义一个**结构** ，这样可以更轻松地在程序中稍后初始化一个结构。

```C
typedef struct StudentRecord 
 { 
  char Name[20]; 
  int Class; 
  char Address[30]; 
  char Phone[10]; 
 }Record; 
```

在`main()` ，用户定义的数据类型**StudentRecord**定义为：

```C
int main(void) 
 { 
  struct StudentRecord student1; 
 } 
```

使用**typedef** ，用户定义的数据类型如下所示：

```C
int main(void) 
 { 
  Record student1; 
 } 
```

要访问存储在**student1中**的数据，我们使用点（ **。** ）运算符来访问结构类型变量的内容。

```C
int main(void) 
 { 
  struct StudentRecord student1; 
  student1.Class = 10; 
  printf("Enter Name of Student\n"); 
  scanf("%s",&student1.Name); 
  printf("Enter Address of Student\n"); 
  scanf("%s",&student1.Address); 
  printf("Enter Phone Number of Student\n"); 
  scanf("%s",&student1.Phone); 
  // Printing the Data 
  printf("Name: %s \n, Class: %d \n, Address: %s \n, Phone: %s \n",student1.Name, student1.Class, student1.Address, student1.Phone); 
 } 
```

### 更多信息

https://www.tutorialspoint.com/cprogramming/c\_structures.htm