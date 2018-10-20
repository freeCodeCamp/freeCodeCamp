---
title: List Sort Method
localeTitle: 列表排序方法
---
## 列表排序方法

Python列表有一个内置的`sort()`方法，它可以就地修改列表，以及一个`sorted()`内置函数，它可以从一个可迭代构建一个新的排序列表。

list.sort（key = ...，reverse = \[True / False\]）

### 参数

此方法有两个可选参数 _key_ - key参数的输入值应该是一个函数，它接受一个参数并返回一个用于比较的值来对列表中的项进行排序 _反向= \[值\]_ _value = True_ ：按降序对列表中的项目进行排序 _value = False_ ：按升序对列表中的项目进行排序。这被视为默认值。 请注意， `sort()`方法不返回任何值。它修改原始列表。

### 示例用法

```py
a = [4, 2, 5, 3, 1] 
 a.sort() 
 print a # prints [1, 2, 3, 4, 5] 
 
 b = ['free', 'code', 'camp'] 
 b.sort() 
 print b # prints ['camp', 'code', 'free'] 
```

考虑一个带**反向**参数的例子

```py
a = [4, 2, 5, 3, 1] 
 
 #Sorts the list in descending order 
 a.sort(reverse=True) 
 
 print a # prints [5, 4, 3, 2, 1] 
```

如果要根据自己的函数对列表进行排序，请使用**key**参数。 下面是按长度按升序对列表中的字符串进行排序的示例

```py
a = ["hello", "hi", "hey"] 
 
 #The built-in len() function is given as an input to key parameter to sort the strings by length 
 a.sort(key = len) 
 
 print a # prints ['hi', 'hey', 'hello'] 
```

这是另一个示例，其中列表包含元组（名称，年龄）。 以下用法显示了如何按年龄按升序对列表进行排序。

```py
#Consider the second element in the tuple for sorting 
 >>> def compareByAge(element): 
 ...     return element[1] 
 
 b = [('Adam', 20), ('Rahman', 30), ('Rahul', 25)] 
 
 #Sort the list by age 
 b.sort(key = compareByAge) 
 
 #Output 
 print b # prints [('Adam', 20), ('Rahul', 25), ('Rahman', 30)] 
```

### 排序基础知识

简单的升序排序非常简单 - 只需调用sorted（）函数即可。它返回一个新的排序列表：

```python
>>> sorted([5, 2, 3, 1, 4]) 
 [1, 2, 3, 4, 5] 
```

您还可以使用列表的list.sort（）方法。它就地修改列表（并返回None以避免混淆）。通常它不如sorted（）方便 - 但如果你不需要原始列表，它会更有效率。

```python
>>> a = [5, 2, 3, 1, 4] 
 >>> a.sort() 
 >>> a 
 [1, 2, 3, 4, 5] 
```

另一个区别是list.sort（）方法仅为列表定义。相反，sorted（）函数接受任何iterable。

```python
>>> sorted({1: 'D', 2: 'B', 3: 'B', 4: 'E', 5: 'A'}) 
 [1, 2, 3, 4, 5] 
```

#### 实施细节

如果想知道有关sort函数，算法和时间复杂度等的实现的详细信息，请参阅[此处](http://svn.python.org/projects/python/trunk/Objects/listsort.txt) 。简而言之，sort函数使用TimSort算法，根据Python Developers，它是： -

> 一种适应性，稳定，自然的融合，适度称呼 蒂姆索特（嘿，我赚了它 ）。它在很多方面都有超自然的表现 各种部分有序的数组（需要少于lg（N！）的比较，和 与N-1一样少，但速度与Python之前高度调整的样本一样快 混合随机阵列。

#### sort（）参数

默认情况下，sort（）不需要任何额外的参数。但是，它有两个可选参数：

*   reverse - 如果为true，则排序列表（或按降序排序）
*   key - 用作排序比较的键的函数

#### 更多信息：

有关`sort()`更多信息，请[访问此处](https://docs.python.org/3/library/functions.html#sorted)

有关sort（）和sorted（）的更多信息，请参见[此处](https://docs.python.org/3.6/tutorial/datastructures.html)

有关sort（）和sorted（）的更多信息，请参见[此处](https://docs.python.org/3.6/tutorial/datastructures.html) 。