---
title: Python Min Function
localeTitle: Python Min函数
---
`min()`是Python 3中的内置函数。它返回可迭代中的最小项或两个或多个参数中的最小项。

## 参数

此函数将两个或多个数字或任何类型的iterable作为参数。在给出一个iterable作为参数时，我们必须确保iterable中的所有元素都是相同的类型。这意味着我们无法传递一个包含字符串和整数值的列表。

有效参数：
```
min(2, 3) 
 min([1, 2, 3]) 
 min('a', 'b', 'c') 
```

参数无效：
```
min(2, 'a') 
 min([1, 2, 3, 'a']) 
 min([]) 
```

## 回报价值

返回iterable中的最小项。如果提供了两个或多个位置参数，则最小的位置参数  
被退回。如果iterable为空并且未提供default，则引发ValueError。

## 代码示例
```
print(min(2, 3)) # Returns 2 as 2 is the smallest of the two values 
 print(min(2, 3, -1)) # Returns -1 as -1 is the smallest of the two values 
 
 list1 = [1, 2, 4, 5, -54] 
 print(min(list1)) # Returns -54 as -54 is the smallest value in the list 
 
 list2 = ['a', 'b', 'c' ] 
 print(min(list2)) # Returns 'a' as 'a' is the smallest in the list in alphabetical order 
 
 list3 = [1, 2, 'abc', 'xyz'] 
 print(min(list3)) # Gives TypeError as values in the list are of different type 
 
 #Fix the TypeError mentioned above first before moving on to next step 
 
 list4 = [] 
 print(min(list4)) # Gives ValueError as the argument is empty 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 "：火箭：") [运行代码](https://repl.it/CVir/4)

[官方文件](https://docs.python.org/3/library/functions.html#min)