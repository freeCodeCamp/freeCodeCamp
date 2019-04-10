---
title: List Index Method
localeTitle: 列表索引方法
---
## 列表索引方法

在列表数据结构附带的许多函数中， `index()`返回列表中元素的第一个出现/索引，该列表作为函数的参数给出。

列表是最基本的Python数据结构，并按顺序存储值列表（与字典相比，哪个顺序无关紧要）。我们通过数字索引检索项目。

请记住，索引从0开始，或者第一个元素被视为0索引，让我们看看一些例子。

#### 用法示例：

```py
numbers = [1, 2, 2, 3, 9, 5, 6, 10] 
 words = ["I", "love", "Python", "I", "love"] 
 
 print(numbers.index(9)) 
 print(numbers.index(2)) 
 print(words.index("I")) 
 print(words.index("am")) 
```

##### 输出：

```py
4 
 1 
 0 
 Traceback (most recent call last): 
  File "<stdin>", line 1, in <module> 
 ValueError: 'am' is not in list 
```

这里第一个输出非常明显，但第二个和第三个输出最初可能看起来很混乱。但是请记住`index()`返回元素的第一次出现，因此在这种情况下， `1`和`0`是索引，其中`2`和`"I"`首先出现分别在列表中。

此外，如果在列表中找不到元素，则返回`ValueError` ，就像在`words`列表中索引`"am"`的情况一样。

#### 可选参数：

您还可以使用可选参数将搜索限制为列表的特定子序列，如下例所示：

```py
words = ["I","am", "a", "I", "am", "Pythonista"] 
 
 print(words.index("am",2,5)) 
```

##### 输出：
```
4 
```

这里虽然在索引2（包括）和5（不包括）之间搜索元素，但返回的索引是相对于完整列表的开头而不是start参数计算的。

#### 更多信息：

`index()`的官方文档可以在[这里](https://docs.python.org/3.6/tutorial/datastructures.html)找到