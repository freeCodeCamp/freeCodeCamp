---
title: Python Bool Function
localeTitle: Python Bool函数
---
`bool()`是Python 3中的内置函数。此函数返回一个布尔值，即True或False。它需要一个参数， `x` 。

## 参数

它需要一个参数`x` 。使用标准[真值测试程序](https://docs.python.org/3/library/stdtypes.html#truth)转换`x` 。

## 返回值

如果`x`为false或省略，则返回`False` ;否则返回`True` 。

## 代码示例
```
print(bool(4 > 2)) # Returns True as 4 is greater than 2 
print(bool(4 < 2)) # Returns False as 4 is not less than 2 
print(bool(4 == 4)) # Returns True as 4 is equal to 4 
print(bool(4 != 4)) # Returns False as 4 is equal to 4 so inequality doesn't holds 
print(bool(4)) # Returns True as 4 is a non-zero value 
print(bool(-4)) # Returns True as -4 is a non-zero value 
print(bool(0)) # Returns False as it is a zero value 
print(bool('dskl')) # Returns True as the string is a non-zero value 
print(bool([1, 2, 3])) # Returns True as the list is a non-zero value 
print(bool((2,3,4))) # Returns True as tuple is a non-zero value 
print(bool([])) # Returns False as list is empty and equal to 0 according to truth value testing 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CVCS/2)

[官方文件](https://docs.python.org/3/library/functions.html#bool)
