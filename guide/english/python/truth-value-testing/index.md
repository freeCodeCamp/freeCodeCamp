---
title: Python Truth Value Testing
---
<a href='https://docs.python.org/3/library/stdtypes.html#truth-value-testing' target='_blank' rel='nofollow'>Python Docs - Truth Value Testing</a>

Any object can be tested for truth value, for use in an `if` or `while` condition or as operand of a Boolean operation like `and`, `or`, or `not`.

The following values are considered false:

*   `None`
*   `False`
*   zero of any numeric type, for example, `0`, `0.0`, `0j`, `Decimal(0)`, `Fraction(0, 1)`.
*   any empty sequence, for example, `''`, `()`, `[]`, `set()`, `range(0)`.
*   any empty mapping, for example, `{}`.
*   instances of user-defined classes, if the class defines a `__bool__()` or `__len__()` method, when that method returns `False` or `0`.

All other values are considered true -- so objects of many types are always true.

Operations and built-in functions that have a Boolean result always return `0` or `False` for false and `1` or `True` for true, unless otherwise stated. (Important exception: the Boolean operations `or` and `and` always return one of their operands.)
