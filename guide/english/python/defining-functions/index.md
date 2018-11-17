---
title: Python Defining Functions
---
<a href='https://docs.python.org/3/tutorial/controlflow.html#defining-functions' target='_blank' rel='nofollow'>Python Docs</a>

We can create a function that writes the Fibonacci series to an arbitrary boundary:

    >>> def fib(n):    # write Fibonacci series up to n
    ...     """Print a Fibonacci series up to n."""
    ...     a, b = 0, 1
    ...     while a < n:
    ...         print(a, end=' ')
    ...         a, b = b, a+b
    ...     print()
    ...
    >>> # Now call the function we just defined:
    ... fib(2000)
    0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597

The [`def`](https://docs.python.org/3/reference/compound_stmts.html#def) keyword introduces a function definition. It must be followed by the function name and the parenthesized list of formal parameters, followed by a colon. The statements that form the body of the function start at the next line and must be indented.

The first statement of the function body can optionally be a string literal; this string literal is the function's documentation string, or [docstring](https://www.python.org/dev/peps/pep-0257/) (More about docstrings can be found in the section Documentation Strings). Some tools use docstrings to automatically produce online or printed documentation or to let the user interactively browse through code. It's good practice to include docstrings in code that you write, so try to make a habit of it.

No closing statement is required for the function (eg something similar to Ruby's END), all code that is indented following the opening definition is within scope of the function.


One interesting thing about functions in Python...
We can define a function inside another function!

    >>> def foo():
    ...     def bar():
    ...         print('BAR')
    ...     print('FOO')
    ...     bar()
    >>> # Now call the function we just defined:
    ... foo()
    FOO
    BAR

If a function is defined inside another function, the inner function can only be called inside the function in which it was defined.
