---
title: Python Variables Names and Binding
localeTitle: Python变量名称和绑定
---
除非有办法使用它们，否则拥有_对象_是没用的。为了使用_对象_ ，必须有一种方法来引用它们。在Python中，这是通过**将**对象**绑定**到**名称**来完成的。详细的概述可以在[这里](https://docs.python.org/3/reference/executionmodel.html)找到

这样做的一种方法是使用[_赋值语句_](https://docs.python.org/3/reference/simple_stmts.html#assignment-statements) 。这通常称为在Python的上下文中_分配变量_ 。如果在其他语言的上下文中谈论编程，则将_对象_ **绑定**到**名称**可能更精确。
```
>>> some_number = 1 
 >>> print(some_number) 
 1 
```

在上面的示例中，赋值语句的目标是名称（标识符）， `some_number` 。分配的_对象_是数字1.语句**将** _对象_ **绑定**到**名称** 。第二个语句，我们使用这个绑定`print` `some_number`引用的_对象_ 。

标识符不以_类型_开头。那是因为Python是动态类型的语言。标识符绑定到具有_类型_的_对象_ ，但是，标识符本身可以反弹到另一个不同_类型的_ _对象_ ：
```
>>> some_variable = 1 
 >>> print(some_variable) 
 1 
 >>> some_variable = "Hello campers!" 
 >>> print(some_variable) 
 Hello campers! 
```

命名变量时，必须遵循以下规则：

*   变量名必须以字母或下划线字符开头
*   变量名不能以数字或特殊字符开头（！@＃％^＆\*等）
*   变量名只能包含字母数字字符和下划线（Az，0-9和\_）
*   变量名称区分大小写（num，NUM和Num是三个不同的变量）