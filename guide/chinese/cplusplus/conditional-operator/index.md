---
title: Conditional Operator
localeTitle: 条件运算符
---
## 条件运算符

条件运算符是三元运算符，它需要3个操作数。 它根据表达式的结果返回两个值中的一个 条件运算符用于替换简单的if-else语句。

句法 ：

```cpp
  (condition)?(expression-1):(expression-2); 
```

这里，当条件为真时评估表达式-1，当条件为假时评估表达式-2。 类似的if-else语句将是：

```cpp
if(condition) 
  { 
    expression-1; 
  } 
 else 
  { 
    expression-2; 
  } 
```

因此，当您需要编写简单的if-else语句时，条件运算符非常方便。它也可以在#define中使用 当在多个地方使用类似条件时的预处理器。

例如，要查找最多两个数字条件运算符，可以使用如下：

```cpp
#define big(a,b) (a>=b)?a:b 
 
 int maximum,x=5,y=6; // variable to store maximum of two numbers 
 maximum=(x>y)?x:y; // directly using conditional operator 
 maximum=big(x,y); // using the #define preprocessor defined above as big 
```

**祝大家好运**

**快乐的编码！ :)**

**随意在FreeCodeCamp的GitHub页面或[FreeCodeCamp的论坛](https://forum.freecodecamp.org/)上询问任何问题[。](https://forum.freecodecamp.org/)**