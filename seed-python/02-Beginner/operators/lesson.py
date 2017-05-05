"""
operators
~~~~~~~~~

Basic comparison operators used in Python.
+ - * / // ** == != < > <= >= << >> & | ~ ^ is not
"""
# Addition
>>> 1 + 1
2

# Subutraciton
>>> 1 - 1
0

# Multiplication
>>> 2 * 3
6

# Division *
>>>  4 / 2
2
* Legacy Python treats `/` as `//` integer division (no floats)
## Python2.7
>>> 5 / 2
2
## Python3.6
>>> 5 / 2
2.5
## Python3.6
>>> 5 / 2
2

# Exponent
>>> 2 ** 3
8

# Equal
>>> 1 == 1
True

# Not Equal
>>> 1 != 3
True

# Less Than
>>> 1 < 3
True

# Less Than or Equal
>>> 3 <= 3
True

# Greater Than
>>> 3 > 1
True

# Greater Than or Equal
>>> 4 >= 3
True

# Binary Operators
# Left Shift
>>> 5 << 1
10
# Right Shift
>>> 5 >> 4
0
# Bitwise AND
>>> 8 & 5
0
# Bitwise OR
>>> 9 | 4
13
# Bitwsise NOT
>>> ~88
-89
# Bitwsise  XOR
>>> 12 ^ 42
38

# Value vs Reference
## `==` compares the value
## `is` compares the objects memory location
>>> a = 456
>>> b = 456
>>> a == b
True
>>> a is b
False
# Not
>>> not

