---
title: The Tuples
localeTitle: 元组
---
## 元组

元组是一系列Python对象。元组是不可变的，这意味着它们在创建后不能被修改，这与列表不同。

**创建：**

使用一对圆括号`()`创建一个空`tuple` ：

```shell
    >>> empty_tuple = () 
    >>> print(empty_tuple) 
    () 
    >>> type(empty_tuple) 
    <class 'tuple'> 
    >>> len(empty_tuple) 
    0 
```

通过用逗号分隔元素来创建带元素的`tuple` （围绕圆括号， `()` ，可选，但有例外）：

```shell
    >>> tuple_1 = 1, 2, 3       # Create tuple without round brackets. 
    >>> print(tuple_1) 
    (1, 2, 3) 
    >>> type(tuple_1) 
    <class 'tuple'> 
    >>> len(tuple_1) 
    3 
    >>> tuple_2 = (1, 2, 3)     # Create tuple with round brackets. 
    >>> print(tuple_2) 
    (1, 2, 3) 
    >>> tuple_3 = 1, 2, 3,      # Trailing comma is optional. 
    >>> print(tuple_3) 
    (1, 2, 3) 
    >>> tuple_4 = (1, 2, 3,)    # Trailing comma in round brackets is also optional. 
    >>> print(tuple_4) 
    (1, 2, 3) 
```

具有单个元素的`tuple`必须具有尾随逗号（带或不带圆括号）：

```shell
    >>> not_tuple = (2)    # No trailing comma makes this not a tuple. 
    >>> print(not_tuple) 
    2 
    >>> type(not_tuple) 
    <class 'int'> 
    >>> a_tuple = (2,)     # Single element tuple. Requires trailing comma. 
    >>> print(a_tuple) 
    (2,) 
    >>> type(a_tuple) 
    <class 'tuple'> 
    >>> len(a_tuple) 
    1 
    >>> also_tuple = 2,    # Round brackets omitted. Requires trailing comma. 
    >>> print(also_tuple) 
    (2,) 
    >>> type(also_tuple) 
    <class 'tuple'> 
```

在歧义的情况下需要圆括号（如果元组是更大表达式的一部分）：

> 请注意，它实际上是一个逗号，它产生一个元组，而不是括号。括号是可选的，除了空元组情况，或者需要它们以避免语法歧义。例如， `f(a, b, c)`是具有三个参数的函数调用，而`f((a, b, c))`是以3元组作为唯一参数的函数调用。

```shell
    >>> print(1,2,3,4,)          # Calls print with 4 arguments: 1, 2, 3, and 4 
    1 2 3 4 
    >>> print((1,2,3,4,))        # Calls print with 1 argument: (1, 2, 3, 4,) 
    (1, 2, 3, 4) 
    >>> 1, 2, 3 == (1, 2, 3)     # Equivalent to 1, 2, (3 == (1, 2, 3)) 
    (1, 2, False) 
    >>> (1, 2, 3) == (1, 2, 3)   # Use surrounding round brackets when ambiguous. 
    True 
```

一个`tuple`也可以与创建的`tuple`的构造函数：

```shell
    >>> empty_tuple = tuple() 
    >>> print(empty_tuple) 
    () 
    >>> tuple_from_list = tuple([1,2,3,4]) 
    >>> print(tuple_from_list) 
    (1, 2, 3, 4) 
    >>> tuple_from_string = tuple("Hello campers!") 
    >>> print(tuple_from_string) 
    ('H', 'e', 'l', 'l', 'o', ' ', 'c', 'a', 'm', 'p', 'e', 'r', 's', '!') 
    >>> a_tuple = 1, 2, 3 
    >>> b_tuple = tuple(a_tuple)    # If the constructor is called with a tuple for 
    the iterable, 
    >>> a_tuple is b_tuple          # the tuple argument is returned. 
    True 
```

**访问`tuple`元素：**

访问`tuples`元素并以与`lists`相同的方式编制索引。

```shell
    >>> my_tuple = 1, 2, 9, 16, 25 
    >>> print(my_tuple) 
    (1, 2, 9, 16, 25) 
```

_零索引_

```shell
    >>> my_tuple[0] 
    1 
    >>> my_tuple[1] 
    2 
    >>> my_tuple[2] 
    9 
```

_包裹索引_

```shell
    >>> my_tuple[-1] 
    25 
    >>> my_tuple[-2] 
    16 
```

**包装和拆包：**

声明`t = 12345, 54321, 'hello!'`是元组封装的一个例子：值`12345` ， `54321`和`'hello!'`在元组中包装在一起。反向操作也是可能的：

```shell
    >>> x, y, z = t 
```

这足够恰当地称为序列解包，适用于右侧的任何序列。序列解包需要在等号左侧有尽可能多的变量，因为序列中有元素。请注意，多重赋值实际上只是元组打包和序列解包的组合。

```shell
    >>> t = 1, 2, 3    # Tuple packing. 
    >>> print(t) 
    (1, 2, 3) 
    >>> a, b, c = t    # Sequence unpacking. 
    >>> print(a) 
    1 
    >>> print(b) 
    2 
    >>> print(c) 
    3 
    >>> d, e, f = 4, 5, 6    # Multiple assignment combines packing and unpacking. 
    >>> print(d) 
    4 
    >>> print(e) 
    5 
    >>> print(f) 
    6 
    >>> a, b = 1, 2, 3       # Multiple assignment requires each variable (right) 
    have a matching element (left). 
    Traceback (most recent call last): 
      File "<stdin>", line 1, in <module> 
    ValueError: too many values to unpack (expected 2) 
```

**一成不变的：**

`tuples`是不可变的容器，保证**其**对象它们含有不会改变。它并**不能**保证它们包含的对象不会改变：

```shell
    >>> a_list = [] 
    >>> a_tuple = (a_list,)    # A tuple (immutable) with a list (mutable) element. 
    >>> print(a_tuple) 
    ([],) 
 
    >>> a_list.append("Hello campers!") 
    >>> print(a_tuple)         # Element of the immutable is mutated. 
    (['Hello campers!'],) 
```

**用途：**

函数只能返回单个值，但是，异构`tuple`可用于从函数返回多个值。一个例子是内置的`enumerate`函数，它返回一个可迭代的异构`tuples` ：

```shell
    >>> greeting = ["Hello", "campers!"] 
    >>> enumerator = enumerate(greeting) 
    >>> enumerator.next() 
    >>> enumerator.__next__() 
    (0, 'Hello') 
    >>> enumerator.__next__() 
    (1, 'campers!') 
```

### 更多信息：

[Python文档 - 元组](https://docs.python.org/3/library/stdtypes.html#tuples)