---
title: Python Boolean Operations
---
<a href='https://docs.python.org/3/reference/expressions.html#or' target='_blank' rel='nofollow'>`or`</a>, <a href='https://docs.python.org/3/reference/expressions.html#and' target='_blank' rel='nofollow'>`and`</a>, <a href='https://docs.python.org/3/reference/expressions.html#not' target='_blank' rel='nofollow'>`not`</a>

<a href='https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not' target='_blank' rel='nofollow'>Python Docs - Boolean Operations</a>

These are the Boolean operations, ordered by ascending priority:

Operation | Result | Notes  
--------- | ------------------------------------ | -----  
x or y | if x is false, then y, else x | (1)  
x and y | if x is false, then x, else y | (2)  
not x | if x is false, then True, else False | (3)

**Notes:**

1.  This is a short-circuit operator, so it only evaluates the second argument if the first one is False.
2.  This is a short-circuit operator, so it only evaluates the second argument if the first one is True.
3.  `not` has a lower priority than non-Boolean operators, so `not a == b` is interpreted as `not (a == b)`, and `a == not b` is a syntax error.

## Examples:

### `or`:

    >>> True or False    # Short-circuited at first argument.
    True
    >>> False or True    # Second argument is evaluated.
    True
    >>> False or False   # Second argument is evaluated.
    False

### `and`:

    >>> True and False    # Second argument is evaluated.
    False
    >>> False and True    # Short-circuted at first argument.
    False
    >>> True and True     # Second argument is evaluated.
    True
    
### `not`:

    >>> not True
    False
    >>> not False
    True
    >>> False or False   # Second argument is evaluated.
    False

