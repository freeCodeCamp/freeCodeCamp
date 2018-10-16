---
title: Python Parenthesis for Boolean Operations
---
Just as in math, parenthesis can be used to override order of operations:

    >>> not True or True
    True
    >>> not (True or True)
    False

    >>> True or False and False
    True
    >>> (True or False) and False
    False