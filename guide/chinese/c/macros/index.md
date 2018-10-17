---
title: Macros in C
localeTitle: C中的宏
---
## C中的宏

宏是一段具有给定名称的代码。使用名称时，它将替换为宏的内容。

#### 定义宏

`#define`关键字用于定义新宏。接下来是名称和内容。按照惯例，宏名称以大写字母书写。

```C
#define PI 3.14 
```

如果你这样使用宏：

```C
printf("Value of PI: %d", PI); 
```

写这个是一样的：

```C
printf("Value of PI: %d", 3.14); 
```

#### 宏的类型

有两种类型的宏。上面显示`Object-like`宏和`Function-like`宏。

#### 功能类宏

类似函数使用相同的`#define`关键字。区别在于您在函数名后使用了一对括号。

```C
#define hello_world() printf("Hello World!") 
```

所以打电话：

```C
hello_world() 
```

你得到：

```C
printf("Hello World!"); 
```

您也可以设置参数：

```C
#define hello(X) printf("Hello " X "!") 
```

现在打电话：

```C
hello("World"); 
```

你得到了相同的：

```C
printf("Hello World!"); 
```

#### 更多信息：

[GCC在线文档：宏](https://gcc.gnu.org/onlinedocs/cpp/Macros.html)

[GCC在线文档：类似对象的宏](https://gcc.gnu.org/onlinedocs/cpp/Object-like-Macros.html#Object-like-Macros)

[GCC在线文档：类似函数的宏](https://gcc.gnu.org/onlinedocs/cpp/Function-like-Macros.html#Function-like-Macros)