---
title: Python Idobject
localeTitle: Python Idobject
---
`id()`是Python 3中的内置函数，它返回对象的_标识_ 。 _标识_是该对象在其生命周期内的唯一整数。这也是内存中对象的地址。

## 论据

#### 目的

`object`参数通常可以是`int` ， `float` ， `str` ， `list` ， `dict` ， `tuple`等。

## 代码示例
```
a = 2 
 print(id(a)) #=> 140454723286976 (Values returned by id() might be different for different users) 
 
 b = 3 
 print(id(b)) #=> 140454723287008 
 
 c = 2 
 print(id(c)) #=> 140454723286976 (This is same as id(a) since they both contain the same value and hence have same memory address) 
 
 print(id(a) == id(b)) #=> False (since a and b have different values stored in them) 
 print(id(a) == id(c)) #=> True (since a and c have same values stored in them) 
 
 d = 1.1 
 e = 1.1 
 print(id(d) == id(e)) #=> True (since d and e have same values stored in them) 
 
 str1 = 'hello' 
 str2 = 'hello' 
 print(id(str1) == id(str2)) #=> True (since str1 and str2 have same values stored in them) 
 
 # For complex objects like lists, tuples, dictionaries etc. id() would give a unique integer even if the content of those containers is same. 
 tup1 = (1,1) 
 tup2 = (1,1) 
 print(id(tup1) == id(tup2)) #=> False 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CQw7/1)

[官方文件](https://docs.python.org/3/library/functions.html#id)