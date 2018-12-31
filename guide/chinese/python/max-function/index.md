---
title: Python Max Function
localeTitle: Python Max函数
---
`max()`是Python 3中的内置函数。它返回可迭代（iterable）中的最大项,它也可以返回两个或多个参数中的最大项。

## 参数

此函数将两个或多个数字或任何类型的iterable作为参数。在给出一个iterable作为参数时，我们必须确保iterable中的所有元素都是相同的类型。这意味着我们无法传递一个包含字符串和整数值的列表。 句法： max（iterable，\* iterables \[，key，default\]） max（arg1，arg2，\* args \[，key\]）

有效参数：
```
max(2, 3) 
 max([1, 2, 3]) 
 max('a', 'b', 'c') 
```

参数无效：
```
max(2, 'a') #参数类型一致
 max([1, 2, 3, 'a']) #迭代中有参数不一致
 max([]) #空的迭代
```

## 返回值

返回iterable中的最大项。如果提供了两个或多个位置参数，则返回最大的位置参数。如果iterable为空并且未提供default，则引发`ValueError` 。

## 代码示例
```
print(max(2, 3)) # 返回两个参数中的最大值 3 。
 print(max(2, 3, 23)) # 返回三个参数中的最大值 23 。
 
 list1 = [1, 2, 4, 5, 54] 
 print(max(list1)) # 返回 list1 （一个迭代变量）中的最大值 54 。
 
 list2 = ['a', 'b', 'c' ] 
 print(max(list2)) # 返回’c'，因为‘c'是 list2 中ascii值最大的， ‘a'的ascii值是97，'b'的ascii值是98，而'c'的ascii值是99。

 list3 = [1, 2, 'abc', 'xyz'] 
 print(max(list3)) # 返回 TypeError， 因为 list3 中的变量类型并不一致。
 
 #请先将此错误修改再进行后面的编码 
 
 list4 = [] 
 print(max(list4)) # 返回 ValueError， 因为 list4 是空的。
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CVok)

[官方文件](https://docs.python.org/3/library/functions.html#max)
