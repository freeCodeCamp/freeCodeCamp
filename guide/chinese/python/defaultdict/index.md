---
title: Python defaultdict
localeTitle: Python defaultdict
---
## Python defaultdict

Dictionary是Python中最常用的数据结构之一。 字典是无序的项集合，我们通常将字符和值存储在字典中。 让我们看一下通常如何使用字典的几个例子。

```python
# dictionary declaration 1 
 dict1 = dict() 
 
 # dictionary declaration 2 
 dict2 = {} 
 
 # Add items to the dictionary 
 # The syntax to add and retrieve items is same for either of the two objects we defined above. 
 key = "X" 
 value = "Y" 
 dict1[key] = value 
 
 # The dictionary doesn't have any specific data-type. 
 # So, the values can be pretty diverse. 
 dict1[key] = dict2 
```

现在让我们看一些检索方法。

```python
# Since "X" exists in our dictionary, this will retrieve the value 
 value = dict1[key] 
 
 # This key doesn't exist in the dictionary. 
 # So, we will get a `KeyError` 
 value = dict1["random"] 
```

### 避免KeyError：使用.get函数

如果字典中不存在给定的键，Python将抛出`KeyError` 。 有一个简单的解决方法。让我们看一下如何使用the来避免`KeyError` 用于字典的内置`.get`函数。

```python
dict_ = {} 
 
 # Some random key 
 random_key = "random" 
 
 # The most basic way of doing this is to check if the key 
 # exists in the dictionary or not and only retrieve if the 
 # key exists. Otherwise not. 
 if random_key in dict_: 
  print(dict_[random_key]) 
 else: 
  print("Key = {} doesn't exist in the dictionary".format(dict_)) 
```

很多时候，当密钥不存在时，我们可以获得默认值。例如，何时 建立一个柜台。有一种更好的方法可以从字典中获取默认值 丢失密钥而不是依赖标准的`if-else` 。

```python
# Let's say we want to build a frequency counter for items in the following array 
 arr = [1,2,3,1,2,3,4,1,2,1,4,1,2,3,1] 
 
 freq = {} 
 
 for item in arr: 
  # Fetch a value of 0 in case the key doesn't exist. Otherwise, fetch the stored value 
  freq[item] = freq.get(item, 0) + 1 
```

因此， `get(<key>, <defaultval>)`是一个方便的操作，用于从字典中检索任何给定键的默认值。 当我们想要将可变数据结构作为值（例如`list`或`set`处理时，会出现此方法的问题。

```python
dict_ = {} 
 
 # Some random key 
 random_key = "random" 
 
 dict_[random_key] = dict_.get(random_key, []).append("Hello World!") 
 print(dict_) # {'random': None} 
 
 dict_ = {} 
 dict_[random_key] = dict_.get(random_key, set()).add("Hello World!") 
 print(dict_) # {'random': None} 
```

你看到了问题吗？

新的`set`或`list`不会被分配到字典的密钥。我们应该分配一个新的`list`或一`set` 在缺少值的情况下键，然后分别`append`或`add` 。莱伊看了一个例子。

```python
dict_ = {} 
 dict_[random_key] = dict_.get(random_key, set()) 
 dict_[random_key].add("Hello World!") 
 print(dict_) # {'random': set(['Hello World!'])}. Yay! 
```

### 避免KeyError：使用defaultdict

这在大多数时候都适用。但是，有一种更好的方法可以做到这一点。一种更加`pythonic`方式。 `defaultdict`是内置dict类的子类。 `defaultdict`只是分配我们在缺少键时指定的默认值。那么，这两个步骤：

```python
dict_[random_key] = dict_.get(random_key, set()) 
 dict_[random_key].add("Hello World!") 
```

现在可以合并为一个步骤。例如

```python
from collections import defaultdict 
 
 # Yet another random key 
 random_key = "random_key" 
 
 # list defaultdict 
 list_dict_ = defaultdict(list) 
 
 # set defaultdict 
 set_dict_ = defaultdict(set) 
 
 # integer defaultdict 
 int_dict_ = defaultdict(int) 
 
 list_dict_[random_key].append("Hello World!") 
 set_dict_[random_key].add("Hello World!") 
 int_dict_[random_key] += 1 
 
 """ 
  defaultdict(<class 'list'>, {'random_key': ['Hello World!']}) 
  defaultdict(<class 'set'>, {'random_key': {'Hello World!'}}) 
  defaultdict(<class 'int'>, {'random_key': 1}) 
 """ 
 print(list_dict_, set_dict_, int_dict_) 
```

* * *

[官方文件](https://docs.python.org/2/library/collections.html)