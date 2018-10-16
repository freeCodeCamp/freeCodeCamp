---
title: Learn About Python Sets
localeTitle: 了解Python集
---
Python中的`Set`是一种可变但无序的数据结构，它只能包含_唯一的_元素。

**创建：**

`set`文字：

圆括号`{}` _不能_用于创建空集：

```python
>>> not_set = {}     # set constructor must be used to make empty sets. 
 >>> type(not_set)    # Empty curly brackets create empty dictionaries. 
 <class 'dict'> 
```

您只能使用`set()`方法创建一个空集。

```python
>>> example_set = set() 
 >>> type(example_set) 
 <class 'set'> 
```

但是，如果元素包含在大括号内，那么创建集合的语法是可以接受的。

```python
>>> example_set_2 = {1, 2, 3} 
 >>> type(example_set_2) 
 <class 'set'> 
```

\`