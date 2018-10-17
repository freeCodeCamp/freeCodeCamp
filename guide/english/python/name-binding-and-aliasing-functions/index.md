---
title: Python Name Binding and Aliasing Functions
---
A function definition introduces the function name in the current symbol table. The value of the function name has a type that is recognized by the interpreter as a user-defined function.

    >>> something = 1
    >>> type(something)
    <type 'int'>
    >>> def something():
    ...     pass
    ...
    >>> type(something)
    <type 'function'>
    >>> something = []
    >>> type(something)
    <type 'list'>

This value can be assigned to another name which can then also be used as a function. This serves as a general renaming mechanism:

    >>> fib
    <function fib at 10042ed0>
    >>> f = fib
    >>> f(100)
    0 1 1 2 3 5 8 13 21 34 55 89