---
title: Ternary Operator
localeTitle: 三元运算符
---## 三元运算符

程序员在C中使用三元运算符来代替条件语句**if**和**else**进行决策。 三元运算符是一个带三个参数的运算符。第一个参数是比较参数，第二个参数是真实比较的结果，第三个参数是错误比较的结果。如果有帮助，您可以将运算符视为编写if-else语句的缩短方式。

这是一个使用**if**和**else**的简单决策示例：

```c
int a = 10, b = 20, c; 
 
 if (a < b) { 
    c = a; 
 } 
 else { 
    c = b; 
 } 
 
 printf("%d", c); 
```

此示例需要超过10行，但这不是必需的。您可以使用**三元运算符**在3行代码中编写上述程序。

### 句法

`condition ? value_if_true : value_if_false`

如果条件为真，则语句将对statement\_1进行评估，否则返回statement\_2。

以上是使用三元运算符重写的上述示例：

```c
int a = 10, b = 20, c; 
 
 c = (a < b) ? a : b; 
 
 printf("%d", c); 
```

示例的输出应该是：

```c
10 
```

`c`被设置为等于`a` ，因为条件`a<b`为真。

这看起来很简单吧？请注意， `value_if_true`和`value_if_false`必须具有相同的类型，并且它们不能是完整语句，而只是表达式。

三元运算符可以嵌套，就像嵌套的if-else语句一样。考虑这个嵌套的if-else语句：

```c
int a = 1, b = 2, ans; 
 if (a == 1) { 
    if (b == 2) { 
        ans = 3; 
    } else { 
        ans = 5; 
    } 
 } else { 
    ans = 0; 
 } 
 printf ("%d\n", ans); 
```

以下是使用嵌套三元运算符重写的上述代码：

```c
int a = 1, b = 2, ans; 
 ans = (a == 1 ? (b == 2 ? 3 : 5) : 0); 
 printf ("%d\n", ans); 
```

上述两个代码的输出应为：

```c
3 

```