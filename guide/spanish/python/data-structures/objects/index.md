---
title: The Python Objects
localeTitle: Los objetos de Python
---
> En Python, todo es un _objeto_ .

_Los objetos_ representan una agrupación lógica de atributos. Los atributos son datos y / o funciones. Cuando se crea un objeto en Python, se crea con una _identidad_ , _tipo_ y _valor_ .

En otros idiomas, las _primitivas_ son _valores_ que no tienen _propiedades_ (atributos). Por ejemplo, en javascript `undefined` , `null` , `boolean` , `string` , `number` y `symbol` (nuevo en ECMAScript 2015) son primitivos.

En Python, no hay primitivos. `None` , _booleanos_ , _cadenas_ , _números_ e incluso _funciones_ son _objetos,_ independientemente de cómo se creen.

Podemos demostrar esto usando algunas funciones incorporadas:

*   [`id`](https://docs.python.org/3/library/functions.html#id)
*   [`type`](https://docs.python.org/3/library/functions.html#type)
*   [`dir`](https://docs.python.org/3/library/functions.html#dir)
*   [`issubclass`](https://docs.python.org/3/library/functions.html#issubclass)

Las constantes incorporadas `None` , `True` y `False` son _objetos_ :

Aquí probamos el objeto `None` .

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

A continuación, vamos a inspeccionar el `True` .

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

No hay razón para dejar de lado lo `False` !

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

_Las cadenas_ , incluso cuando son creadas por literales de una cadena, también son _objetos_ .

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

Igual con _numeros_

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

## Las funciones son objetos también

> En Python, las funciones son objetos de primera clase.

_Las funciones_ en Python también son _objetos_ , creados con una _identidad_ , _tipo_ y _valor_ . Ellos también pueden ser pasados ​​a otras _funciones_ :

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

También es posible vincular funciones a un nombre y llamar a la función enlazada usando ese nombre:

```python
>>> a = dir 
 >>> print(a) 
 <built-in function dir> 
 >>> a(a) 
 ['__call__', '__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__le__', '__lt__', '__module__', '__name__', '__ne__', '__new__', '__qualname__', '__reduce__', '__reduce_ex__', '__repr__', '__self__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__text_signature__'] 
```

Recursos:

*   [Haga clic aquí](https://www.jeffknupp.com/blog/2014/06/18/improve-your-python-python-classes-and-object-oriented-programming/) para obtener más información.