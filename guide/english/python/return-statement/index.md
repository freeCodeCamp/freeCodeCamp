---
title: Python Return Statement
---
<a href='https://docs.python.org/3/reference/simple_stmts.html#the-return-statement' target='_blank' rel='nofollow'>Python Docs</a>

All functions return a value when called.

If a return statement is followed by an expression list, that expression list is evaluated and the value is returned:

    >>> def greater_than_1(n):
    ...     return n > 1
    ...
    >>> print(greater_than_1(1))
    False
    >>> print(greater_than_1(2))
    True

If no expression list is specified, `None` is returned:

    >>> def no_expression_list():
    ...     return    # No return expression list.
    ...
    >>> print(no_expression_list())
    None

If a return statement is reached during the execution of a function, the current function call is left at that point:

    >>> def return_middle():
    ...     a = 1
    ...     return a
    ...     a = 2     # This assignment is never reached.
    ...
    >>> print(return_middle())
    1

If there is no return statement the function returns None when it reaches the end:

    >>> def no_return():
    ...     pass     # No return statement.
    ...
    >>> print(no_return())
    None
     
 A single function can have multiple `return` statements.  Execution of the function ends when one of these `return` statements is reached:
 
     >>> def multiple_returns(n):
     ...    if(n):
     ...        return "First Return Statement"
     ...    else:
     ...        return "Second Return Statement"
     ...
     >>> print(multiple_returns(True))
     First Return Statement
     >>> print(multiple_returns(False))
     Second Return Statement
     
 A single function can return various types:
 
     >>> def various_return_types(n):
     ...     if(n==1):
     ...         return "Hello World."   # Return a string
     ...     elif(n==2):
     ...         return 42               # Return a value
     ...     else:
     ...         return True             # Return a boolean
     ... 
     >>> print(various_return_types(1))
     Hello World.
     >>> print(various_return_types(2))
     42
     >>> print(various_return_types(3))
     True
 
 It is even possible to have a single function return multiple values with only a single return:
 
     >>> def return_two_values():
     ...     a = 40
     ...     b = 2
     ...     return a,b
     ...
     >>> print("First value = %d,  Second value = %d" %(return_two_values()))
     First value = 40,  Second value = 2
