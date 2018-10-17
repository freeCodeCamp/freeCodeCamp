---
title: The Auto Feature
localeTitle: 自动功能
---
## 自动功能

`auto`是一种C ++ 11特性，它允许编译器在定义中为您推断数据类型。这可以为您节省大量的打字，特别是对于复杂的类型。

没有`auto` ：

```cpp
double x = 10.425; 
 double y = x * x; 
```

有了`auto` ：

```cpp
double x = 10.425; 
 auto y = x * x; 
```

虽然它看似微不足道，但当数据类型开始变得复杂时，它变得非常有用。例如，假设您要存储员工的[`vector`](https://guide.freecodecamp.org/cplusplus/vector) ，并且您只对他们的姓名和年龄感兴趣。一种方法来存储姓名和年龄可能是`pair`一个`string`和`unsigned int` 。这被声明为`std::vector<std::pair<std::string, unsigned int>> employees` 。现在假设您要访问最后添加的员工：

```cpp
std::vector<std::pair<std::string, unsigned int>> employees; 
 
 // without auto, you have to write: 
 std::pair<std::string, unsigned int>> last_employee = employees.back(); 
 
 // with auto, you just have to write: 
 auto last_employee = employees.back(); 
```

一旦编译器确定了`=`右侧的类型，它就会用该类型替换`auto` 。

在C ++的现代版本中（从C ++ 14开始）， `auto`也可以在函数声明中用作返回类型。然后，编译器将从函数内部的return语句中推断返回类型。以员工为例：
```
std::vector<std::pair<std::string, unsigned int>> employees; 
 auto get_last_employee() { 
    return employees.back(); // Compiler knows the return type from this line. 
 } 
```

编译器将从返回语句的行知道函数的返回类型应该是`std::vector<std::pair<std::string, unsigned int>>` 。

虽然非常技术性，但[auto上](http://en.cppreference.com/w/cpp/language/auto)的[cppreference页面](http://en.cppreference.com/w/cpp/language/auto)描述了更多的`auto`用法以及何时可以使用和不能使用的详细信息。

### 在C ++ 11之前的`auto`

在一些包含_非常_旧代码的旧教科书中，关键字`auto`以非常不同的方式使用。

这个特定的`auto`是一个从C借用的关键字，可能是有史以来用得最少的关键字。

在C ++中，所有变量都有_自动持续时间_ ，也就是说，它们被定义，直到你离开它们定义的函数。

例如：

\`\`\`CPP

# 包括

int main（） { int a; a = 1; //有意义，因为它是在同一个函数中定义的
```
    return 0; 
```

} a = 2; //没有意义，因为这里没有定义 \`\`\`

这是在C ++中给出的，并且`auto`指定变量应该具有_自动持续时间_ ，因此缺乏使用。

## 进一步阅读：

*   http://www.stroustrup.com/C++11FAQ.html#auto