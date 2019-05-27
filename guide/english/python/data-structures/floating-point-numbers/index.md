---
title: Python Floating Point Numbers
---
# Python Floating Point Numbers

Some general information about floating point numbers and how they work in Python, can be found <a href='https://docs.python.org/3/tutorial/floatingpoint.html' target='_blank' rel='nofollow'>here</a>.

Nearly all implementations of Python follow the IEEE 754 specification: Standard for Binary Floating-Point Arithmetic. More information found on the <a href='http://grouper.ieee.org/groups/754/' target='_blank' rel='nofollow'>IEEE site</a>.

## Float objects using floating point literals
Float objects can be created using using <a href='https://docs.python.org/3/reference/lexical_analysis.html#floating-point-literals' target='_blank' rel='nofollow'>floating point literals</a>:

    >>> 3.14
    3.14
    >>> 314.    # Trailing zero(s) not required.
    314.0
    >>> .314    # Leading zero(s) not required.
    0.314
    >>> 3e0
    3.0
    >>> 3E0     # 'e' or 'E' can be used.
    3.0
    >>> 3e1     # Positive value after e moves the decimal to the right.
    30.0
    >>> 3e-1    # Negative value after e moves the decimal to the left.
    0.3
    >>> 3.14e+2 # '+' not required but can be used for exponent part.
    314.0

Numeric literals do not contain a sign, however creating negative float objects is possible by prefixing with a unary `-` (minus) operator with no space before the literal

    >>> -3.141592653589793
    -3.141592653589793
    >>> type(-3.141592653589793)
    <class 'float'>

Likewise, positive float objects can be prefixed with a unary `+` (plus) operator with no space before the literal. Usually `+` is omitted:

    >>> +3.141592653589793
    3.141592653589793

Note that leading and trailing zero(s) are valid for floating point literals

    >>> 0.0
    0.0
    >>> 00.00
    0.0
    >>> 00100.00100
    100.001
    >>> 001e0010      # Same as 1e10
    10000000000.0

## Float objects using float constructors
The <a href='https://docs.python.org/3/library/functions.html#float' target='_blank' rel='nofollow'>`float`</a> constructor is another way to create `float` objects.

Creating `float` objects with floating point literals is preferred when possible:

    >>> a = 3.14         # Prefer floating point literal when possible.
    >>> type(a)
    <class 'float'>
    >>> b = int(3.14)    # Works but unnecessary.
    >>> type(b)
    <class 'float'>

However, the float constructor allows for creating float objects from other number types:

    >>> a = 4
    >>> type(a)
    <class 'int'>
    >>> print(a)
    4
    >>> b = float(4)
    >>> type(b)
    <class 'float'>
    >>> print(b)
    4.0
    >>> float(400000000000000000000000000000000)
    4e+32
    >>> float(.00000000000000000000000000000004)
    4e-32
    >>> float(True)
    1.0
    >>> float(False)
    0.0

The `float` constructor will also make `float` objects from strings that represent number literals:

    >>> float('1')
    1.0
    >>> float('.1')
    0.1
    >>> float('3.')
    3.0
    >>> float('1e-3')
    0.001
    >>> float('3.14')
    3.14
    >>> float('-.15e-2')
    -0.0015

The `float` constructor can also be used to make numeric representation of `NaN` (Not a Number), negative `infinity` and `infinity` (note strings for these are case insensitive):

    >>> float('nan')
    nan
    >>> float('inf')
    inf
    >>> float('-inf')
    -inf
    >>> float('infinity')
    inf
    >>> float('-infinity')
    -inf
