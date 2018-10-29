---
title: Python Slicestartstopstep
localeTitle: Python Slicestartstopstep
---
`slice(start:stop[:step])`是一个通常包含序列一部分的对象。使用下标符号创建切片，\[\]在给定多个数字时使用数字之间的冒号，例如在variable\_name \[1：3：5\]中。

## 参数

此函数可用于切片元组，数组和列表。

`start`参数的值（如果未提供，则为None）

`stop`参数的值（或序列的最后一个索引）

`step`参数的值（如果未提供则为None）。它不能是0。

这三个必须是整数类型。

## 返回

如果仅提供`stop` ，则它生成从索引`0`到`stop`的序列的一部分。

如果仅提供`start` ，则在索引`start`之后生成序列的一部分直到最后一个元素。

如果同时提供了`start`和`stop` ，它会在索引`start`直到`stop`生成一部分序列。

如果提供了全部三个`start` ， `stop`和`step` ，则在索引`start`之后生成序列的一部分，直到`stop`并增加索引`step` 。

## 例
```
a = [1, 2, 3, 4, 5, 6, 7, 8] 
 print(a[:5])    # prints [1, 2, 3, 4, 5] 
 print(a[2:])    # prints [3, 4, 5, 6, 7, 8] 
 print(a[2:5])    # prints [3, 4, 5] 
 print(a[2:7:2])    # prints [3, 5, 7] 
```

您可以使用`-1`索引序列的最后一个索引：
```
a = [1, 2, 3, 4, 5, 6] 
 print(a[-1])    # prints 6 
 print(a[2:-1])    # prints [3, 4, 5] 
```

您可以使用`[::-1]`切片表示法来翻转序列：
```
a = [1, 2, 3, 4, 5, 6] 
 print(a[::-1])    # prints [6, 5, 4, 3, 2, 1] 
```

[官方文件](https://docs.python.org/3/library/functions.html#slice) ![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CT5h)