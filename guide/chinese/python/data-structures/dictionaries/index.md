---
title: The Python Dict
localeTitle: Python Dict
---
python中的Dictionary（又名“dict”）是一种内置数据类型，可用于存储**`key-value`**对。这允许您将**`dict`**视为存储和组织数据的_数据库_ 。

关于字典的特殊之处在于它们的实现方式。类似哈希表的结构使其易于检查 存在 - 这意味着我们可以轻松确定字典中是否存在特定键而无需检查 每个元素。 Python解释器只需转到位置键并检查密钥是否存在。

字典几乎可以使用任意数据类型，如字符串，整数等，用于键。但是，不可清除的值， 也就是说，包含列表，字典或其他可变类型（通过值而不是通过对象标识进行比较）的值不能用作键。用于键的数字类型遵循用于数字比较的常规规则：如果两个数字比较相等（例如`1`和`1.0` ），则它们可以互换地用于索引相同的字典条目。 （但请注意，由于计算机将浮点数存储为近似值，因此将它们用作字典键通常是不明智的。）

字典的一个最重要的要求是密钥**必须**是唯一的。  
要创建一个空字典，只需使用一对大括号：

```python
    >>> teams = {} 
    >>> type(teams) 
    >>> <class 'dict'> 
```

  
要创建包含一些初始值的非空字典，请放置以逗号分隔的键值对列表：

```python
    >>> teams = {'barcelona': 1875, 'chelsea': 1910} 
    >>> teams 
    {'barcelona': 1875, 'chelsea': 1910} 
```

将键值对添加到现有字典很容易：

```python
    >>> teams['santos'] = 1787 
    >>> teams 
    {'chelsea': 1910, 'barcelona': 1875, 'santos': 1787} # Notice the order - Dictionaries are unordered ! 
    >>> # extracting value - Just provide the key 
    ... 
    >>> teams['barcelona'] 
    1875 
```

  
**`del`**运算符用于从dict中删除键值对。在已经使用的密钥再次用于存储值的情况下，与该密钥关联的旧值完全丢失。另外，请记住，使用不存在的密钥提取值是错误的。

```python
    >>> del teams['santos'] 
    >>> teams 
    {'chelsea': 1910, 'barcelona': 1875} 
    >>> teams['chelsea'] = 2017 # overwriting 
    >>> teams 
    {'chelsea': 2017, 'barcelona': 1875} 
```

  
**`in`** keyword可用于检查dict中是否存在密钥：

```python
    >>> 'sanots' in teams 
    False 
    >>> 'barcelona' in teams 
    True 
    >>> 'chelsea' not in teams 
    False 
```

  
**`keys`**是一种内置_方法_ ，可用于获取给定字典的键。要将dict中存在的键提取为列表：

```python
    >>> club_names = list(teams.keys()) 
    >>> club_names 
    ['chelsea', 'barcelona'] 
```

  
另一种创建字典的方法是使用**`dict()`**方法：

```python
    >>> players = dict( [('messi','argentina'), ('ronaldo','portugal'), ('kaka','brazil')] ) # sequence of key-value pair is passed 
    >>> players 
    {'ronaldo': 'portugal', 'kaka': 'brazil', 'messi': 'argentina'} 
    >>> 
    >>> # If keys are simple strings, it's quite easier to specify pairs using keyword arguments 
    ... 
    >>> dict( totti = 38, zidane = 43 ) 
    {'zidane': 43, 'totti': 38} 
```

也可以使用Dict理解来从任意键和值表达式创建字典：

```python
    >>> {x: x**2 for x in (2, 4, 6)} 
    {2: 4, 4: 16, 6: 36} 
```

**在词典中循环**  
简单地循环遍历字典中的键，而不是键和值：

```python
    >>> d = {'x': 1, 'y': 2, 'z': 3} 
    >>> for key in d: 
    ...     print(key) # do something 
    ... 
    x 
    y 
    z 
```

要循环键和值，您可以使用以下内容：  
对于Python 2.x：

```python
    >>> for key, item in d.iteritems(): 
    ...     print items 
    ... 
    1 
    2 
    3 
```

对Python 3.x使用**`items()`** ：

```python
    >>> for key, item in d.items(): 
    ...     print(key, items) 
    ... 
    x 1 
    y 2 
    z 3 

```