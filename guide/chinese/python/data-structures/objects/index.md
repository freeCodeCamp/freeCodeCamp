---
title: The Python Objects
localeTitle: Python对象
---
> 在Python中，一切都是_对象_ 。

_对象_表示属性的逻辑分组。属性是数据和/或功能。在Python中创建对象时，将使用_标识_ ， _类型_和_值_创建对象。

在其他语言中， _原始数据_是没有_属性_ （属性） _值_ 。例如，在javascript `undefined` ， `null` ， `boolean` ， `string` ， `number`和`symbol` （ECMAScript 2015中的新内容）是原语。

在Python中，没有原语。 `None` ， _布尔值_ ， _字符串_ ， _数字_甚至_函数_都是_对象，_无论它们是如何创建的。

我们可以使用一些内置函数来演示：

*   [`id`](https://docs.python.org/3/library/functions.html#id)
*   [`type`](https://docs.python.org/3/library/functions.html#type)
*   [`dir`](https://docs.python.org/3/library/functions.html#dir)
*   [`issubclass`](https://docs.python.org/3/library/functions.html#issubclass)

内置常量`None` ， `True`和`False`是_对象_ ：

我们在这里测试`None`对象。

```python
>>> id(None) 
 4550218168 
 >>> type(None) 
 <class 'NoneType'> 
 >>> dir(None) 
 [__bool__', '__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__le__', '__lt__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__'] 
 >>> issubclass(type(None), object) 
 True 
```

接下来，让我们检查一下`True` 。

```python
>>> id(True) 
 4550117616 
 >>> type(True) 
 <class 'bool'> 
 >>> dir(True) 
 ['__abs__', '__add__', '__and__', '__bool__', '__ceil__', '__class__', '__delattr__', '__dir__', '__divmod__', '__doc__', '__eq__', '__float__', '__floor__', '__floordiv__', '__format__', '__ge__', '__getattribute__', '__getnewargs__', '__gt__', '__hash__', '__index__', '__init__', '__int__', '__invert__', '__le__', '__lshift__', '__lt__', '__mod__', '__mul__', '__ne__', '__neg__', '__new__', '__or__', '__pos__', '__pow__', '__radd__', '__rand__', '__rdivmod__', '__reduce__', '__reduce_ex__', '__repr__', '__rfloordiv__', '__rlshift__', '__rmod__', '__rmul__', '__ror__', '__round__', '__rpow__', '__rrshift__', '__rshift__', '__rsub__', '__rtruediv__', '__rxor__', '__setattr__', '__sizeof__', '__str__', '__sub__', '__subclasshook__', '__truediv__', '__trunc__', '__xor__', 'bit_length', 'conjugate', 'denominator', 'from_bytes', 'imag', 'numerator', 'real', 'to_bytes'] 
 >>> issubclass(type(True), object) 
 True 
```

没理由遗漏`False` ！

```python
>>> id(False) 
 4550117584 
 >>> type(False) 
 <class 'bool'> 
 >>> dir(False) 
 ['__abs__', '__add__', '__and__', '__bool__', '__ceil__', '__class__', '__delattr__', '__dir__', '__divmod__', '__doc__', '__eq__', '__float__', '__floor__', '__floordiv__', '__format__', '__ge__', '__getattribute__', '__getnewargs__', '__gt__', '__hash__', '__index__', '__init__', '__int__', '__invert__', '__le__', '__lshift__', '__lt__', '__mod__', '__mul__', '__ne__', '__neg__', '__new__', '__or__', '__pos__', '__pow__', '__radd__', '__rand__', '__rdivmod__', '__reduce__', '__reduce_ex__', '__repr__', '__rfloordiv__', '__rlshift__', '__rmod__', '__rmul__', '__ror__', '__round__', '__rpow__', '__rrshift__', '__rshift__', '__rsub__', '__rtruediv__', '__rxor__', '__setattr__', '__sizeof__', '__str__', '__sub__', '__subclasshook__', '__truediv__', '__trunc__', '__xor__', 'bit_length', 'conjugate', 'denominator', 'from_bytes', 'imag', 'numerator', 'real', 'to_bytes'] 
 >>> issubclass(type(False), object) 
 True 
```

_字符串_ ，即使通过字符串文字创建的，也是_对象_ 。

```python
>>> id("Hello campers!") 
 4570186864 
 >>> type('Hello campers!') 
 <class 'str'> 
 >>> dir("Hello campers!") 
 ['__add__', '__class__', '__contains__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getnewargs__', '__gt__', '__hash__', '__init__', '__iter__', '__le__', '__len__', '__lt__', '__mod__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__rmod__', '__rmul__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', 'capitalize', 'casefold', 'center', 'count', 'encode', 'endswith', 'expandtabs', 'find', 'format', 'format_map', 'index', 'isalnum', 'isalpha', 'isdecimal', 'isdigit', 'isidentifier', 'islower', 'isnumeric', 'isprintable', 'isspace', 'istitle', 'isupper', 'join', 'ljust', 'lower', 'lstrip', 'maketrans', 'partition', 'replace', 'rfind', 'rindex', 'rjust', 'rpartition', 'rsplit', 'rstrip', 'split', 'splitlines', 'startswith', 'strip', 'swapcase', 'title', 'translate', 'upper', 'zfill'] 
 >>> issubclass(type('Hello campers!'), object) 
 True 
```

与_数字_相同

```python
>>> id(42) 
 4550495728 
 >>> type(42) 
 <class 'int'> 
 >>> dir(42) 
 ['__abs__', '__add__', '__and__', '__bool__', '__ceil__', '__class__', '__delattr__', '__dir__', '__divmod__', '__doc__', '__eq__', '__float__', '__floor__', '__floordiv__', '__format__', '__ge__', '__getattribute__', '__getnewargs__', '__gt__', '__hash__', '__index__', '__init__', '__int__', '__invert__', '__le__', '__lshift__', '__lt__', '__mod__', '__mul__', '__ne__', '__neg__', '__new__', '__or__', '__pos__', '__pow__', '__radd__', '__rand__', '__rdivmod__', '__reduce__', '__reduce_ex__', '__repr__', '__rfloordiv__', '__rlshift__', '__rmod__', '__rmul__', '__ror__', '__round__', '__rpow__', '__rrshift__', '__rshift__', '__rsub__', '__rtruediv__', '__rxor__', '__setattr__', '__sizeof__', '__str__', '__sub__', '__subclasshook__', '__truediv__', '__trunc__', '__xor__', 'bit_length', 'conjugate', 'denominator', 'from_bytes', 'imag', 'numerator', 'real', 'to_bytes'] 
 >>> issubclass(type(42), object) 
 True 
```

## 功能也是对象

> 在Python中，函数是第一类对象。

Python中的_函数_也是使用_标识_ ， _类型_和_值_创建的_对象_ 。它们也可以传递给其他_函数_ ：

```python
>>> id(dir) 
 4568035688 
 >>> type(dir) 
 <class 'builtin_function_or_method'> 
 >>> dir(dir) 
 ['__call__', '__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__le__', '__lt__', '__module__', '__name__', '__ne__', '__new__', '__qualname__', '__reduce__', '__reduce_ex__', '__repr__', '__self__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__text_signature__'] 
 >>> issubclass(type(dir), object) 
 True 
```

也可以将函数绑定到名称，并使用该名称调用绑定函数：

```python
>>> a = dir 
 >>> print(a) 
 <built-in function dir> 
 >>> a(a) 
 ['__call__', '__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__le__', '__lt__', '__module__', '__name__', '__ne__', '__new__', '__qualname__', '__reduce__', '__reduce_ex__', '__repr__', '__self__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__text_signature__'] 
```

资源：

*   [点击这里](https://www.jeffknupp.com/blog/2014/06/18/improve-your-python-python-classes-and-object-oriented-programming/)了解更多信息。