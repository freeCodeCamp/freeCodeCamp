---
title: Python Zip Function
localeTitle: Python Zip功能
---
`zip()`是Python中的一个内置函数，它返回一个元组列表。第n个元组将具有来自每个可迭代参数的第n个元素。如果序列中的参数长度不等，它将返回一个截断为最短迭代长度的列表。

## 论据

由逗号分隔的任意数量的iterables。

## 回报价值

所有序列中第n个元素的元组列表

## 代码示例
```
nums = [1,2,3,4] 
 print(*nums) # prints 1 2 3 4 
 numsAndNames = zip([1,2,3],['one','two','three']) 
 print(*numsAndNames) # prints (1,'one') (2,'two') (3,'three') 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/@StuffsExplained/pythonZipFunction)

[官方文档 - Python 3](https://docs.python.org/3.3/library/functions.html#zip)

[官方文档 - Python 2.7](https://docs.python.org/2/library/functions.html#zip)