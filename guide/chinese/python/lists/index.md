---
title: Lists
localeTitle: 清单
---
**TODO： `list`基本信息**

[Python文档 - 列表](https://docs.python.org/3/library/stdtypes.html#lists)

**创建：**

使用一对方括号创建一个空`list` ：

```shell
>>> empty_list = [] 
 >>> type(empty_list) 
 <class 'list'> 
 >>> len(empty_list) 
 0 
```

通过用逗号分隔的带有方括号的元素`list`可以使用元素创建列表。列表允许元素具有不同类型（异构），但最常见的是单一类型（同类）：

```shell
>>> homogeneous_list = [1, 1, 2, 3, 5, 8] 
 >>> type(homogeneous_list) 
 <class 'list'> 
 >>> print(homogeneous_list) 
 [1, 1, 2, 3, 5, 8] 
 >>> len(homogeneous_list) 
 6 
 >>> heterogeneous_list = [1, "Hello Campers!"] 
 >>> print(heterogeneous_list) 
 [1, "Hello Campers!"] 
 >>> len(heterogeneous_list) 
 2 
```

`list`构造函数也可用于创建`list` ：

```shell
>>> empty_list = list()                            # Creates an empty list 
 >>> print(empty_list) 
 [] 
 >>> list_from_iterable = list("Hello campers!")    # Creates a list from an iterable. 
 >>> print(list_from_iterable) 
 ['H', 'e', 'l', 'l', 'o', ' ', 'c', 'a', 'm', 'p', 'e', 'r', 's', '!'] 
```

**访问`list`元素：**

```shell
>>> my_list = [1, 2, 9, 16, 25] 
 >>> print(my_list) 
 [1, 2, 9, 16, 25] 
```

_零索引_

```shell
>>> my_list[0] 
 1 
 >>> my_list[1] 
 2 
 >>> my_list[2] 
 9 
```

_包裹索引_

```shell
>>> my_list[-1] 
 25 
 >>> my_list[-2] 
 16 
```

_解压缩python-3的列表_

```shell
>>> print(*my_list) 
 1 2 9 16 25 
```

**易变的：**

`lists`是可变容器。可变容器是容器，允许更改容器包含的对象。 **TODO：加入更多？**

_重新排列列表中的元素_

可以使用另一`list`作为索引来提取和重新排列`list`元素。

```shell
>>> my_list = [1, 2, 9, 16, 25, 34, 53, 21] 
 >>> my_index = [5, 2, 0] 
 >>> my_new_list = [my_list[i] for i in my_index] 
 >>> print(my_new_list) 
 [34, 9, 1] 
```

**TODO：这里应讨论以下哪些方面：**

[Python文档 - 有关列表的更多信息](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)

*   `list.append(x)`将项添加到列表的末尾。相当于\[len（a）：\] = \[x\]。
    
*   `list.extend(L)`通过附加给定列表中的所有项来扩展列表。相当于\[len（a）：\] = L.
    
*   `list.insert(i, x)`在给定位置插入一个项目。第一个参数是要插入的元素的索引，因此a.insert（0，x）插入列表的前面，而a.insert（len（a），x）等同于a.append（ X）。
    
*   `list.remove(x)`从列表中删除值为x的第一个项目。如果没有这样的项目则是错误的。
    
*   `list.pop([i])`删除列表中给定位置的项目，然后将其返回。如果未指定索引，则a.pop（）将删除并返回列表中的最后一项。 （方法签名中i周围的方括号表示该参数是可选的，而不是您应该在该位置键入方括号。您将在Python Library Reference中经常看到这种表示法。）
    
*   `list.clear()`从列表中删除所有项目。相当于del a \[：\]。
    
*   `list.index(x)`返回值为x的第一个项的列表中的索引。如果没有这样的项目则是错误的。
    
*   `list.count(x)`返回x在列表中出现的次数。
    
*   `list.sort(key=None, reverse=False)`对列表中的项进行排序（参数可用于排序自定义，请参阅sorted（）以获取解释）。
    
*   `list.reverse()`在适当的位置反转列表的元素。
    
*   `list.copy()`返回列表的浅表副本。相当于\[：\]。