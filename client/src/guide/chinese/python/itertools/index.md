---
title: Itertools
localeTitle: Itertools
---
Itertools是一个函数的python模块，它返回生成器，只在迭代时才起作用的对象。 itertool函数的一些示例包括但不限于：chain（），imap（），product（）和compress（）。

### 链（）

chain（）函数将几个迭代器作为参数，并返回一个迭代器，它生成所有这些迭代器的内容，就像它们来自一个序列一样。

```py
import itertools 
 list(itertools.chain([1, 2], [3, 4])) 
 
 # Output 
 # [1, 2, 3, 4] 
```

### islice（）

islice（）函数返回一个迭代器，它通过索引从输入迭代器返回所选项。它采用与列表的切片运算符相同的参数：start，stop和step。启动和停止是可选的。

```py
import itertools 
 list(itertools.islice(count(), 5)) 
 
 # Output 
 # [0,1, 2, 3, 4] 
```

### izip（）

izip（）返回一个迭代器，它将几个迭代器的元素组合成元组。它的工作方式类似于内置函数zip（），除了它返回迭代器而不是列表。

```py
import itertools 
 list(izip([1, 2, 3], ['a', 'b', 'c'])) 
 
 # Output 
 # [(1, 'a'),(2, 'b'),(3, 'c')] 
```

组合迭代器：

迭代器参数结果 product（）p，q，... \[repeat = 1\]笛卡尔积，相当于嵌套的for循环 permutations（）p \[，r\] r-length元组，所有可能的排序，没有重复的元素 组合（）p，r r-length元组，按排序顺序，没有重复元素 _与_ replacement（）p，r r-length元组的组合，按排序顺序，具有重复元素 产品（'ABCD'，重复= 2）AA AB AC AD BA BB BC BD CA CB CC CD DA DB DC DD 排列（'ABCD'，2）AB AC AD BA BC BD CA CB CD DA DB DC

组合（'ABCD'，2）AB AC AD BC BD CD

_与_替换组合（'ABCD'，2）AA AB AC AD BB BC BD CC CD DD

来源：HTTPS：//docs.python.org/3/library/itertools.html