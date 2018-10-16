---
title: Python Calling Functions
---
A function definition statement does not execute the function. Executing (calling) a function is done by using the name of the function followed by parenthesis enclosing required arguments (if any).

    >>> def say_hello():
    ...     print('Hello')
    ...
    >>> say_hello()
    Hello

The execution of a function introduces a new symbol table used for the local variables of the function. More precisely, all variable assignments in a function store the value in the local symbol table; whereas variable references first look in the local symbol table, then in the local symbol tables of enclosing functions, then in the global symbol table, and finally in the table of built-in names. Thus, global variables cannot be directly assigned a value within a function (unless named in a global statement), although they may be referenced.

    >>> a = 1
    >>> b = 10
    >>> def fn():
    ...     print(a)    # local a is not assigned, no enclosing function, global a referenced.
    ...     b = 20      # local b is assigned in the local symbol table for the function.
    ...     print(b)    # local b is referenced.
    ...
    >>> fn()
    1
    20
    >>> b               # global b is not changed by the function call.
    10

The actual parameters (arguments) to a function call are introduced in the local symbol table of the called function when it is called; thus, arguments are passed using call by value (where the value is always an object reference, not the value of the object). When a function calls another function, a new local symbol table is created for that call.

    >>> def greet(s):
    ...     s = "Hello " + s    # s in local symbol table is reassigned.
    ...     print(s)
    ...
    >>> person = "Bob"
    >>> greet(person)
    Hello Bob
    >>> person                  # person used to call remains bound to original object, 'Bob'.
    'Bob'

The arguments used to call a function cannot be reassigned by the function, but arguments that reference mutable objects can have their values changed:

    >>> def fn(arg):
    ...     arg.append(1)
    ...
    >>> a = [1, 2, 3]
    >>> fn(a)
    >>> a
    [1, 2, 3, 1]