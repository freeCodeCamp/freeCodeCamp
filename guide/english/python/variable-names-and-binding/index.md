---
title: Python Variables Names and Binding
---
Having _objects_ isn't useful unless there is a way to use them. In order to use an _object_, there must be a way to reference them. In Python this is done by **binding** objects to **names**. A detailed overview of can be found <a href='https://docs.python.org/3/reference/executionmodel.html' target='_blank' rel='nofollow'>here</a>

One way this is done is by using an <a href='https://docs.python.org/3/reference/simple_stmts.html#assignment-statements' target='_blank' rel='nofollow'>_assignment statement_</a>. This is commonly called _assigning a variable_ in the context of Python. If speaking about programming in the context of other languages, **binding** an _object_ to a **name** may be more precise.

    >>> some_number = 1
    >>> print(some_number)
    1

In the example above, the target of the assignment statement is a name (identifier), `some_number`. The _object_ being assigned is the number 1\. The statement **binds** the _object_ to the **name**. The second statement, we use this binding `print` the _object_ that `some_number` refers to.

The identifier is not preceeded by a _type_. That is because Python is dynamically-typed language. The identifier is bound to an _object_ that does have a _type_, however, the identifier itself can be rebound to another _object_ of a different _type_:

    >>> some_variable = 1
    >>> print(some_variable)
    1
    >>> some_variable = "Hello campers!"
    >>> print(some_variable)
    Hello campers!
    
When naming variables, you must follow these rules:
- A variable name must start with a letter or the underscore character
- A variable name cannot start with a number or special characters (!@#%^&*, etc.)
- A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )
- Variable names are case-sensitive (num, NUM and Num are three different variables)
