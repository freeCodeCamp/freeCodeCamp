---
title: Difference between Python 'is' and '==' operators
---
`is` is a check for object identity - ie, checking if two or more variables are referring to the same object. You can't overload `is`. That object identity is established and assigned with `=`.

`==` evaluates to true if object referred to by the variables are equal. You can overload `==` via the `__eq__` operator.


## Return Value

The return value for both would be either `True` or `False`.

## Code Sample

    a = 2.3
    a is 2.3  # => False
    a == 2.3  # => True

    a = [234,123,321]
    b = [234,123,321]
    a == b  # => True
    a is b  # => False
    a = b
    a == b  # => True
    a is b  # => True, because if we change a, b changes too

