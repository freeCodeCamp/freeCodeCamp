---
title: The Python Objects
localeTitle: Os objetos do Python
---
> No Python, tudo é um _objeto_ .

_Objetos_ representam um agrupamento lógico de atributos. Atributos são dados e / ou funções. Quando um objeto é criado no Python, ele é criado com uma _identidade_ , _tipo_ e _valor_ .

Em outras linguagens, os _primitivos_ são _valores_ que não possuem _propriedades_ (atributos). Por exemplo, em javascript `undefined` , `null` , `boolean` , `string` , `number` e `symbol` (novo no ECMAScript 2015) são primitivos.

Em Python, não há primitivos. `None` , _booleanas_ , _cadeias de caracteres_ , _números_ e _funções_ pares são todos os _objetos,_ independentemente de como eles são criados.

Podemos demonstrar isso usando algumas funções internas:

*   [`id`](https://docs.python.org/3/library/functions.html#id)
*   [`type`](https://docs.python.org/3/library/functions.html#type)
*   [`dir`](https://docs.python.org/3/library/functions.html#dir)
*   [`issubclass`](https://docs.python.org/3/library/functions.html#issubclass)

Constantes `None` , `True` e `False` são _objetos_ :

Nós testamos o objeto `None` aqui.

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

Em seguida, vamos inspecionar `True` .

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

Nenhuma razão para deixar de fora `False` !

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

_Strings_ , mesmo quando criadas por literais de string, também são _objetos_ .

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

O mesmo com os _números_

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

## Funções são objetos também

> No Python, as funções são objetos de primeira classe.

_Funções_ em Python também são _objetos_ , criados com uma _identidade_ , _tipo_ e _valor_ . Eles também podem ser passados ​​para outras _funções_ :

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

Também é possível ligar funções a um nome e chamar a função ligada usando esse nome:

```python
>>> a = dir 
 >>> print(a) 
 <built-in function dir> 
 >>> a(a) 
 ['__call__', '__class__', '__delattr__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__gt__', '__hash__', '__init__', '__le__', '__lt__', '__module__', '__name__', '__ne__', '__new__', '__qualname__', '__reduce__', '__reduce_ex__', '__repr__', '__self__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__text_signature__'] 
```

Recursos:

*   [Clique aqui](https://www.jeffknupp.com/blog/2014/06/18/improve-your-python-python-classes-and-object-oriented-programming/) para saber mais.