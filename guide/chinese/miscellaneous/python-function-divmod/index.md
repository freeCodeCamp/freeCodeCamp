---
title: Python Function Divmod
localeTitle: Python函数Divmod
---
# Python `divmod(a,b)`

`divmod()`是Python 3中的内置函数，它在将数字`a`除以数字`b`时返回商和余数。它需要两个数字作为参数`a`和`b` 。这个论点不能是一个复杂的数字。

## 论据

它需要两个参数`a` ＆ `b` - 一个整数或一个十进制数。它不能是一个复数。

## 回报价值

返回值将是对由通过划分获得的商和余数的正数的`a`由`b` 。在混合操作数类型的情况下，将应用二进制算术运算符的规则。  
对于**整数参数** ，返回值将与`(a // b, a % b)` 。  
对于**十进制数字参数** ，返回值将与`(q, a % b)` ，其中`q`通常是**math.floor（a / b），**但可能比该值小1。

## 代码示例
```
print(divmod(5,2)) # prints (2,1) 
 print(divmod(13.5,2.5)) # prints (5.0, 1.0) 
 q,r = divmod(13.5,2.5)  # Assigns q=quotient & r= remainder 
 print(q) # prints 5.0 because math.floor(13.5/2.5) = 5.0 
 print(r) # prints 1.0 because (13.5 % 2.5) = 1.0 
```

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 "：火箭：") [回复吧！](https://repl.it/FGLK/0)

[官方文件](https://docs.python.org/3/library/functions.html#divmod)