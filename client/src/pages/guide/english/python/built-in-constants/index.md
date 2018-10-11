---
title: Python Built in Constants
---
<a href='https://docs.python.org/3/library/constants.html' target='_blank' rel='nofollow'>Constants</a>

Three commonly used built-in constants:

*   `True`: The true value of the _bool_ type. Assignments to `True` raise a _SyntaxError_.
*   `False`: The false value of the _bool_ type. Assignments to `False` raise a _SyntaxError_.
*   `None` : The sole value of the type _NoneType_. None is frequently used to represent the absence of a value, as when default arguments are not passed to a function. Assignments to `None` raise a _SyntaxError_.

Other built-in constants:

*   `NotImplemented`: Special value which should be returned by the binary special methods, such as `__eg__()`, `__add__()`, `__rsub__()`, etc.) to indicate that the operation is not implemented with respect to the other type.
*   `Ellipsis`: Special value used mostly in conjunction with extended slicing syntax for user-defined container data types.	
*   `__debug__`: True if Python was not started with an -o option.

Constants added by the site module
The site module (which is imported automatically during startup, except if the -S command-line option is given) adds several constants to the built-in namespace. They are useful for the interactive interpreter shell and should not be used in programs.

Objects that when printed, print a message like “Use quit() or Ctrl-D (i.e. EOF) to exit”, and when called, raise SystemExit with the specified exit code:

*   quit(code=None)
*   exit(code=None)

Objects that when printed, print a message like “Type license() to see the full license text”, and when called, display the corresponding text in a pager-like fashion (one screen at a time):

*   copyright
*   license
*   credits
