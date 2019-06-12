---
title: The Tuples
---
## The Tuples

A tuple is a sequence of Python objects. Tuples are immutable which means they cannot be modified after creation, unlike lists.

    >>> tuple = (1,2,3)
    >>> tuple[1] = 4
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: 'tuple' object does not support item assignment

**Creation:**

An empty `tuple` is created using a pair of round brackets, `()`:
```shell
    >>> empty_tuple = ()
    >>> print(empty_tuple)
    ()
    >>> type(empty_tuple)
    <class 'tuple'>
    >>> len(empty_tuple)
    0
```
A `tuple` with elements is created by separating the elements with commas (surrounding round brackets, `()`, are optional with exceptions):
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
A `tuple` with a single element must have the trailing comma (with or without round brackets):
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
Round brackets are required in cases of ambiguity (if the tuple is part of a larger expression):

> Note that it is actually the comma which makes a tuple, not the parentheses. The parentheses are optional, except in the empty tuple case, or when they are needed to avoid syntactic ambiguity. For example, `f(a, b, c)` is a function call with three arguments, while `f((a, b, c))` is a function call with a 3-tuple as the sole argument.
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
A `tuple` can also be created with the `tuple` constructor:
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
**Accessing elements of a `tuple`:**

Elements of `tuples` are accessed and indexed the same way that `lists` are.
```shell
    >>> my_tuple = 1, 2, 9, 16, 25
    >>> print(my_tuple)
    (1, 2, 9, 16, 25)
```
_Zero indexed_
```shell
    >>> my_tuple[0]
    1
    >>> my_tuple[1]
    2
    >>> my_tuple[2]
    9
```
_Wrap around indexing_
```shell
    >>> my_tuple[-1]
    25
    >>> my_tuple[-2]
    16
```
**Packing and Unpacking:**

The statement `t = 12345, 54321, 'hello!'` is an example of tuple packing: the values `12345`, `54321` and `'hello!'` are packed together in a tuple. The reverse operation is also possible:
```shell
    >>> x, y, z = t
```
This is called, appropriately enough, sequence unpacking and works for any sequence on the right-hand side. Sequence unpacking requires that there are as many variables on the left side of the equals sign as there are elements in the sequence. Note that multiple assignment is really just a combination of tuple packing and sequence unpacking.
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
**Immutable:**

`tuples` are immutable containers, guaranteeing **which** objects they contain will not change. It does **not** guarantee that the objects they contain will not change:
```shell
    >>> a_list = []
    >>> a_tuple = (a_list,)    # A tuple (immutable) with a list (mutable) element.
    >>> print(a_tuple)
    ([],)

    >>> a_list.append("Hello campers!")
    >>> print(a_tuple)         # Element of the immutable is mutated.
    (['Hello campers!'],)
```
**Uses:**

Functions can only return a single value, however, a heterogeneous `tuple` can be used to return multiple values from a function. One example is the built-in `enumerate` function that returns an iterable of heterogeneous `tuples`:
```shell
    >>> greeting = ["Hello", "campers!"]
    >>> enumerator = enumerate(greeting)
    >>> enumerator.next()
    >>> enumerator.__next__()
    (0, 'Hello')
    >>> enumerator.__next__()
    (1, 'campers!')
```
### More Inforamtion:
<a href='https://docs.python.org/3/library/stdtypes.html#tuples' target='_blank' rel='nofollow'>Python Docs - Tuples</a>
