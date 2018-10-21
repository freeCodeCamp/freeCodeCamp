---
title: Python Len Function
localeTitle: Python Len函数
---
`len()`是Python 3中的内置函数。此方法返回对象的长度（项数）。它需要一个参数`x` 。

## 参数

它需要一个参数， `x` 。此参数可以是序列（例如字符串，字节，元组，列表或范围）或集合（例如字典，集合或冻结集）。

## 回报价值

此函数返回传递给`len()`函数的参数中的元素数。

## 代码示例
```
list1 = [123, 'xyz', 'zara'] # list 
 print(len(list1)) # prints 3 as there are 3 elements in the list1 
 
 str1 = 'basketball' # string 
 print(len(str1)) # prints 10 as the str1 is made of 10 characters 
 
 tuple1 = (2, 3, 4, 5) # tuple 
 print(len(tuple1)) # prints 4 as there are 4 elements in the tuple1 
 
 dict1 = {'name': 'John', 'age': 4, 'score': 45} # dictionary 
 print(len(dict1)) # prints 3 as there are 3 key and value pairs in the dict1 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CUmt/15)

[官方文件](https://docs.python.org/3/library/functions.html#len)