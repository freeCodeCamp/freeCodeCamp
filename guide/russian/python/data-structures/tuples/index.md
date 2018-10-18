---
title: The Tuples
localeTitle: Кортежи
---
## Кортежи

Кортеж представляет собой последовательность объектов Python. Кортежи неизменяемы, что означает, что они не могут быть изменены после создания, в отличие от списков.

**Создание:**

Пустой `tuple` создается с помощью пары круглых скобок `()` :

```shell
    >>> empty_tuple = () 
    >>> print(empty_tuple) 
    () 
    >>> type(empty_tuple) 
    <class 'tuple'> 
    >>> len(empty_tuple) 
    0 
```

`tuple` с элементами создается путем разделения элементов запятыми (окружающие круглые скобки, `()` , являются необязательными с исключениями):

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

`tuple` с одним элементом должен иметь конечную запятую (с круглыми скобками или без них):

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

Круглые скобки требуются в случаях двусмысленности (если кортеж является частью большего выражения):

> Обратите внимание, что на самом деле это запятая, которая делает кортеж, а не круглые скобки. Скобки являются необязательными, за исключением случая пустого кортежа, или когда они необходимы, чтобы избежать синтаксической двусмысленности. Например, `f(a, b, c)` является вызовом функции с тремя аргументами, тогда как `f((a, b, c))` является вызовом функции с 3-кортежем в качестве единственного аргумента.

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

`tuple` также может быть создан с помощью конструктора `tuple` :

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

**Доступ к элементам `tuple` :**

Доступ к элементам `tuples` осуществляется и индексируется так же, как и `lists` .

```shell
    >>> my_tuple = 1, 2, 9, 16, 25 
    >>> print(my_tuple) 
    (1, 2, 9, 16, 25) 
```

_Нулевой индекс_

```shell
    >>> my_tuple[0] 
    1 
    >>> my_tuple[1] 
    2 
    >>> my_tuple[2] 
    9 
```

_Обтекание индексации_

```shell
    >>> my_tuple[-1] 
    25 
    >>> my_tuple[-2] 
    16 
```

**Упаковка и распаковка:**

Утверждение `t = 12345, 54321, 'hello!'` пример упаковки кортежей: значения `12345` , `54321` и `'hello!'` упаковываются вместе в кортеж. Также возможна обратная операция:

```shell
    >>> x, y, z = t 
```

Это называется, достаточно подходящим образом, распаковка последовательности и работает для любой последовательности с правой стороны. Для распаковки последовательности требуется, чтобы в левой части знака равенства было столько же переменных, сколько элементов в последовательности. Обратите внимание, что множественное назначение - это всего лишь комбинация упаковки кортежей и распаковки последовательностей.

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

**Неизменный:**

`tuples` являются неизменяемыми контейнерами, гарантируя, **что** объекты, **которые** они содержат, не изменятся. Это **не** гарантирует, что объекты, которые они содержат, не изменятся:

```shell
    >>> a_list = [] 
    >>> a_tuple = (a_list,)    # A tuple (immutable) with a list (mutable) element. 
    >>> print(a_tuple) 
    ([],) 
 
    >>> a_list.append("Hello campers!") 
    >>> print(a_tuple)         # Element of the immutable is mutated. 
    (['Hello campers!'],) 
```

Область **применения:**

Функции могут возвращать только одно значение, однако гетерогенный `tuple` может использоваться для возврата нескольких значений из функции. Одним из примеров является встроенная функция `enumerate` которая возвращает итерабельность гетерогенных `tuples` :

```shell
    >>> greeting = ["Hello", "campers!"] 
    >>> enumerator = enumerate(greeting) 
    >>> enumerator.next() 
    >>> enumerator.__next__() 
    (0, 'Hello') 
    >>> enumerator.__next__() 
    (1, 'campers!') 
```

### Больше информации:

[Документы Python - кортежи](https://docs.python.org/3/library/stdtypes.html#tuples)