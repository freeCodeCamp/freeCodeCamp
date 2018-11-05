---
title: Structured data types
localeTitle: 结构化数据类型
---
# C中的结构化数据类型

在编程过程中，您可能会觉得需要定义自己的数据类型。在C中，这是使用两个关键字完成的： `struct`和`typedef` 。 结构和联合将使您有机会将非同质数据类型存储到单个集合中。

## 声明一种新的数据类型

```C
typedef struct student_structure{ 
    char* name; 
    char* surname; 
    int year_of_birth; 
 }student; 
```

在这个小代码之后， `student`将成为一个新的保留关键字，您将能够创建`student`类型的变量。 请注意，这种新类型的变量将被构造，这意味着定义一个物理分组的变量列表，这些变量列表将放在一个内存块中的一个名称下。

## 新数据类型用法

现在让我们创建一个新的`student`变量并初始化它的属性：

```C
   student stu; 
 
   strcpy( stu.name, "John"); 
   strcpy( stu.surname, "Snow"); 
   stu.year_of_birth = 1990; 
 
   printf( "Student name : %s\n", stu.name); 
   printf( "Student surname : %s\n", stu.surname); 
   printf( "Student year of birth : %d\n", stu.year_of_birth); 
```

正如您在此示例中所看到的，您需要为新数据类型中包含的所有变量赋值。 要访问结构变量，您可以使用`stu.name`的点。 还有一种更短的方法可以为结构赋值：

```C
typedef struct{ 
   int    x; 
   int    y; 
 }point; 
 
 point image_dimension = {640,480}; 
```

或者，如果您希望按照不同的顺序设置它的值：

```C
point img_dim = { .y = 480, .x = 640 }; 
```

## 工会与结构

联合声明与结构相同，但不同，因为联盟中只能使用一个项目。

```C
typedef union{ 
      int circle; 
      int triangle; 
      int ovel; 
 }shape; 
```

在这种情况下，您应该使用`union` ，只应用一个条件，并且只使用一个变量。 请不要忘记我们也可以使用我们全新的数据类型：

```C
typedef struct{ 
      char* model; 
      int year; 
 }car_type; 
 
 typedef struct{ 
      char* owner; 
      int weight; 
 }truck_type; 
 
 typedef union{ 
  car_type car; 
  truck_type truck; 
 }vehicle; 
```

## 还有一些技巧

*   使用`&`运算符创建指向结构的指针时，可以使用特殊的`->`缀运算符来对其进行处理。例如，在C中使用链接列表时，这非常常用
*   新定义的类型可以像几乎所有的其他基本类型一样使用。例如，尝试创建一个类型为`student`的数组，并查看它是如何工作的。
*   结构可以复制或分配，但你无法比较它们！