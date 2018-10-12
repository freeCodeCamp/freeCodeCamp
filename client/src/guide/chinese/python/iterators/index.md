---
title: Python Iterators
localeTitle: Python迭代器
---
Python支持迭代容器的概念。这是使用两种不同的方法实现的;这些用于允许用户定义的类支持迭代。

[Python文档 - 迭代器类型](https://docs.python.org/3/library/stdtypes.html#iterator-types)

迭代是以编程方式重复步骤给定次数的过程。程序员可以利用迭代对数据集合中的每个项目执行相同的操作，例如打印出列表中的每个项目。

*   对象可以实现`__iter__()`方法，该方法返回迭代器对象以支持迭代。
    
*   迭代器对象必须实现：
    
    *   `__iter__()` ：返回迭代器对象。
        
    *   `__next__()` ：返回容器的下一个对象。
        
    
    iterator _object ='abc'。 **iter** （） print（迭代器_对象） print（id（迭代器_对象）） print（id（iterator_ **object。iter** （）））＃返回迭代器本身。 打印（迭代器_对象。 **下一个** （））＃返回第一对象和前进迭代器。 打印（迭代器_对象。 **下一个** （））＃返回第二对象和前进迭代器。 打印（迭代器_对象。 **下一个** （））＃返回第三对象和前进迭代器。 打印（迭代器_对象。 **下一个** （））＃引发StopIteration异常。
    

输出：
```
<str_iterator object at 0x102e196a0> 
 4343305888 
 4343305888 
 a 
 b 
 c 
 --------------------------------------------------------------------------- 
 StopIteration                             Traceback (most recent call last) 
 <ipython-input-1-d466eea8c1b0> in <module>() 
      6 print(iterator_object.__next__())     # Returns 2nd object and advances iterator. 
      7 print(iterator_object.__next__())     # Returns 3rd object and advances iterator. 
 ----> 8 print(iterator_object.__next__())     # Raises StopIteration Exception. 
 
 StopIteration: 

```