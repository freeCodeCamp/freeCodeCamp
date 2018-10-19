---
title: The Python Objects
---
> In Python, everything is an _object_.

_Objects_ represent a logical grouping of attributes. Attributes are data and/or functions. When an object is created in Python it is created with an _identity_, _type_, and _value_.

In other languages, _primitives_ are _values_ that have no _properties_ (attributes). For example, in javascript `undefined`, `null`, `boolean`, `string`, `number`, and `symbol` (new in ECMAScript 2015) are primitives.

In Python, there are no primitives. `None`, _booleans_, _strings_, _numbers_, and even _functions_ are all _objects_ regardless how they are created.

We can demonstrate this using some built-in functions:

*   <a href='https://docs.python.org/3/library/functions.html#id' target='_blank' rel='nofollow'>`id`</a>
*   <a href='https://docs.python.org/3/library/functions.html#type' target='_blank' rel='nofollow'>`type`</a>
*   <a href='https://docs.python.org/3/library/functions.html#dir' target='_blank' rel='nofollow'>`dir`</a>
*   <a href='https://docs.python.org/3/library/functions.html#issubclass' target='_blank' rel='nofollow'>`issubclass`</a>

Built-in constants `None`, `True`, and `False` are _objects_:

We test the `None` object here.

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

Next, let's inspect `True`.

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

No reason to leave out `False`!

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

_Strings_, even when created by a string literals, are also _objects_.

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

Same with _numbers_

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

## Functions are Objects Too

> In Python, functions are first class objects.

_Functions_ in Python are also _objects_, created with an _identity_, _type_, and _value_. They too can be passed into other _functions_:

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

It is also possible to bind functions to a name and called the bound function using that name:

```python
>>> a = dir
>>> print(a)
<built-in function dir>
>>> a(a)
['__call__', '__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__le__', '__lt__', '__module__', '__name__', '__ne__', '__new__', '__qualname__', '__reduce__', '__reduce_ex__', '__repr__', '__self__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__text_signature__']
```

Resources:

* <a href='https://www.jeffknupp.com/blog/2014/06/18/improve-your-python-python-classes-and-object-oriented-programming/' target='_blank' rel='nofollow'>Click Here</a> to learn more.