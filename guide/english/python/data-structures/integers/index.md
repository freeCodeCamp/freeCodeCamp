---
title: Python Integers
---
Integers are whole numbers with no decimal point. They include negative, zero, and positive numbers. The theoretical domain for integers in python is negative infinity to infinity. In practice, integer values are limited by the amount of available memory.

In Python 2, there was a distinction between **`int`**, numbers that fit in a 32 or 64 bit _C long_, and **`long`**, numbers limited by available memory. Python 3 unified the two types into just **`int`** (more info in <a href='https://www.python.org/dev/peps/pep-0237/' target='_blank' rel='nofollow'>PEP 237</a>).

**`int` creation using integer literals**

<a href='https://docs.python.org/3/reference/lexical_analysis.html#integer-literals' target='_blank' rel='nofollow'>Integer Literals</a>

_Integer objects_ can be created using using integer literals. Unadorned numbers without decimals are integer literals:

    >>> 1234567890           # Unadorned numbers are integer literals
    1234567890
    >>> type(1234567890)
    <class 'int'>

Numeric literals do not contain a sign, however creating negative _integer objects_ is possible by prefixing with a unary `-` (minus) operator with no space before the literal:

    >>> -1234567890
    -1234567890
    >>> type(-1234567890)
    <class 'int'>

Likewise, positive integer objects can be created by prefixing a unary `+` (plus) operator with no space before the digits. Usually `+` is omitted:

    >>> +1234
    1234

Binary (base 2, prefix: `0b` or `0B`), octal (base 8, prefix: `0o` or `0O`), and hexadecimal (base 16, prefix: `0x` or `0X`) integers can also be created using integer literals:

    >>> 0b1, 0b10, 0b11
    (1, 2, 3)
    >>> 0o1, 0o10, 0o11
    (1, 8, 9)
    >>> 0x1, 0x10, 0x11
    (1, 16, 17)

Note that leading 0's for non-zero integer literals are **not allowed**:

    >>> 0     # Zero by itself is okay.
    0
    >>> 01    # Leading zero(s) cause SyntaxError.
      File "<stdin>", line 1
        01
         ^
    SyntaxError: invalid token

The `int` <a href='https://docs.python.org/3/library/functions.html#int' target='_blank' rel='nofollow'>constructor</a> is another way to create _integer objects_.

    class int(x=0)
    class int(x, base=10)

Creating _integer objects_ with integer literals is preferred when possible:

    >>> a = 1         # Prefer integer literal when possible.
    >>> type(a)
    <class 'int'>
    >>> b = int(1)    # Works but unnecessary.
    >>> type(b)
    <class 'int'>

However, the constructor allows for creating _integer objects_ from other number types:

    >>> a = 1.123
    >>> type(a)
    <class 'float'>
    >>> print(a)
    1.123
    >>> b = int(1.123)
    >>> type(b)
    <class 'int'>
    >>> print(b)
    1

Using the `int` constructor for floating point numbers will truncate the number towards zero:

    >>> int(-1.23)
    -1
    >>> int(1.23)
    1

The built-in `boolean` constants are instances of the `bool` class, and are subclasses of the `int` class, making them a kind of numeric type:

    >>> type(True)
    <class 'bool'>
    >>> issubclass(bool, int)
    True

If that doesn't make sense to you, don't worry. For now just remember that calling the int constructor with `boolean` objects will return _integer objects_:

    >>> int(True)
    1
    >>> int(False)
    0

The `int` constructor will also make _integer objects_ from strings:

    >>> a = "10"
    >>> type(a)
    <class 'str'>
    >>> b = int("10")
    >>> type(b)
    <class 'int'>

_Strings_ for the `int` constructor must represent an integer literal:

The second parameter of the `int` constructor is to specify a base (default: 10). Valid bases are 0 and 2-36.

If an explicit base is provided the first argument must be a string.

    >>> int("111", 2)
    7
    >>> int(111, 2)
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    TypeError: int() can't convert non-string with explicit base

The string used for the `int` constructor with an explicit base must be a valid integer literal for that base:

    >>> int('11', 2)
    3
    >>> int('12', 2)
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    ValueError: invalid literal for int() with base 2: '12'

Both prefixed and non-prefixed strings of integer literals can be used, however, if used, the prefix must match the provided base.

    >>> int('1101', 2)
    13
    >>> int('0b1101', 2)
    13
    >>> int('0x1101', 2)
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    ValueError: invalid literal for int() with base 2: '0x1101'

If a prefixed string and base 0 is used, the created integer object will use the base specified by the prefix. If no prefix is used, then the base is assumed 10

    >>> int('100', 0)
    100
    >>> int('0b100', 0)
    4
    >>> int('0o100', 0)
    64
