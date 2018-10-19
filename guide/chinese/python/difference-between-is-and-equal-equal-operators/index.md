---
title: Difference between Python 'is' and '==' operators
localeTitle: Python'是'和'=='运算符之间的区别
---
`is`是检查对象标识 - 即检查两个或多个变量是否指向同一个对象。你不能超载`is` 。

如果变量引用的对象相等，则`==`计算结果为true。您可以通过`__eq__`运算符重载`==` 。

## 回报价值

两者的返回值可以是`True`或`False` 。

## 代码示例
```
a = 2.3 
 a is 2.3  # => False 
 a == 2.3  # => True 
 
 a = [234,123,321] 
 b = [234,123,321] 
 a == b  # => True 
 a is b  # => False 
 a = b 
 a == b  # => True 
 a is b  # => True, because if we change a, b changes too 

```