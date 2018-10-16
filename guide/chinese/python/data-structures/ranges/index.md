---
title: The Python Range
localeTitle: Python范围
---
## Python范围

范围实际上是[不可变的序列类型](https://docs.python.org/3/library/stdtypes.html#immutable-sequence-types) ，而不是函数，通常用于在for循环中循环特定次数。

**创建：**

`ranges`是使用`range`构造函数创建的。构造函数的参数是：

*   `start` ：包含范围的第一个值（可选整数，默认为0）。
*   `stop` ：独占停止值，当提供此值或更大值时，范围停止（必需整数）。
*   `step` ：添加到当前值以获取下一个值的量（可选整数，默认为1）。

```python
>>> range(10)          # Only the stop parameter is required. 
 range(0, 10) 
 >>> range(0, 10)       # Default for start parameter is 0. 
 range(0, 10) 
 >>> range(0, 10, 1)    # Default for step is 1\. Start parameter is required if 
 step is needed. 
 range(0, 10) 
```

**例子：**

由于`ranges`是可迭代的，因此可以将它们传递给`list`和`tuple`构造函数以创建这些类型的序列。使用这个事实，我们可以想象一些例子：

```python
>>> list(range(10))     # range as argument for list constructor. 
 [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] 
 >>> tuple(range(10))    # range as argument for tuple constructor. 
 (0, 1, 2, 3, 4, 5, 6, 7, 8, 9) 
```

零长度`ranges` ：

```python
>>> list(range(10, 0))        # start greater than stop with postive step. 
 [] 
 >>> list(range(10, 10))       # start equal to stop with postive step. 
 [] 
 >>> list(range(10, 10, -1))   # start equal to stop with negative step. 
 [] 
 >>> list(range(0, 10, -1))    # start less than stop with negative step. 
 [] 
```

带步长参数的`ranges` ：

```python
>>> list(range(0, 10, 2))       # next value would be 10, stops at 8. 
 [0, 2, 4, 6, 8] 
 >>> list(range(0, 10, 3))       # next value would be 12, stops at 9. 
 [0, 3, 6, 9] 
 >>> list(range(0, 10, 4))       # next value would be 12, stops at 8. 
 [0, 4, 8] 
 >>> list(range(10, 0, -1))      # negative step makes decreasing ranges. 
 [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] 
 >>> list(range(-5, -30, -3))    # negative integers are valid arguments. 
 [-5, -8, -11, -14, -17, -20, -23, -26, -29] 
```

**优点：**

使用`range`的好处是，无论指定的范围有多大，只需要少量内存来存储`range` ，即start，stop和step的值。在迭代时计算`ranges`的各个值。

```python
>>> import sys 
 >>> a_range = range(1000000) 
 >>> a_list = list(a_range) 
 >>> a_tuple = tuple(a_range) 
 >>> sys.getsizeof(a_range) 
 48 
 >>> sys.getsizeof(a_list) 
 9000112 
 >>> sys.getsizeof(a_tuple) 
 8000048 
```

### 更多信息：

[Python Doc - Ranges](https://docs.python.org/3/library/stdtypes.html#ranges)

**TODO：方法`ranges`是否实现**