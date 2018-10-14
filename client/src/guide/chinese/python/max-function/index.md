---
title: Python Max Function
localeTitle: Python Max函数
---
`max()`是Python 3中的内置函数。它返回可迭代中的最大项或两个或多个参数中的最大项。

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
max(2, 'a') 
 max([1, 2, 3, 'a']) 
 max([]) 
```

## 回报价值

返回iterable中的最大项。如果提供了两个或多个位置参数，则返回最大的位置参数。如果iterable为空并且未提供default，则引发`ValueError` 。

## 代码示例
```
print(max(2, 3)) # Returns 3 as 3 is the largest of the two values 
 print(max(2, 3, 23)) # Returns 23 as 23 is the largest of all the values 
 
 list1 = [1, 2, 4, 5, 54] 
 print(max(list1)) # Returns 54 as 54 is the largest value in the list 
 
 list2 = ['a', 'b', 'c' ] 
 print(max(list2)) # Returns 'c' as 'c' is the largest in the list because c has ascii value larger then 'a' ,'b'. 
 
 list3 = [1, 2, 'abc', 'xyz'] 
 print(max(list3)) # Gives TypeError as values in the list are of different type 
 
 #Fix the TypeError mentioned above first before moving on to next step 
 
 list4 = [] 
 print(max(list4)) # Gives ValueError as the argument is empty 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CVok)

[官方文件](https://docs.python.org/3/library/functions.html#max)