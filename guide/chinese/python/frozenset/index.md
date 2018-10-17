---
title: Python Frozenset
localeTitle: Python Frozenset
---
**`frozenset`基本信息** `frozenset`类型是一个内置的集合类型，它是不可变的和可散列的 - 它的内容在创建后不能被改变;但是，它可以用作字典键或另一组的元素。 Frozensets就像套装一样，只是它们不能改变，即它们是不变的。
```
>>> cities = frozenset(["Frankfurt", "Basel", "Freiburg"]) 
 >>> cities.add("Strasbourg") 
 Traceback (most recent call last): 
    File "<stdin>", line 1, in <module> 
 AttributeError: 'frozenset' object has no attribute 'add' 
 >>> 
```

`frozenset`构造函数： `frozenset([iterable])` iterable包含用于初始化frozenset的元素。可以设置iterable，dictionary，tuple等。如果没有传递参数， `frozenset()`方法返回一个空的冻结集。

**例子**
```
>>> vowels = ('a', 'e', 'i', 'o', 'u') 
 >>> fSet = frozenset(vowels) 
 >>> print("The frozen set is: ", fSet) 
 The frozen set is: frozenset({'i', 'e', 'a', 'u', 'o'}) 
 >>> print("The empty frozen set is: ", frozenset()) 
 The empty frozen set is: frozenset() 
 >>> 
```

**另一个例子**
```
>>> person = {"name": "John", "age": 23, "sex": "male"} 
 >>> fSet = frozenset(person) 
 >>> print("The frozen set is: ", fSet) 
 The frozen set is: frozenset({'sex', 'name', 'age'}) 
 >>> 
```

**附加信息** [Python Frozenset（）](https://www.programiz.com/python-programming/methods/built-in/frozenset) [设置类型 - 设置，冷冻设置](https://docs.python.org/2.4/lib/types-set.html) [Python教程：集合和冻结集](https://www.python-course.eu/sets_frozensets.php)