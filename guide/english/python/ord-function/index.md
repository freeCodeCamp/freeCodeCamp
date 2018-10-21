---
title: Python Ord Function
---

## Ord function

`ord()` is a built-in function in Python 3, to convert the string representing one Unicode character into integer 
representing the Unicode code of the character.

#### Examples:
```
>>> ord('d')
100
>>> ord('1')
49
```

## chr function

`chr()` is a built-in function in Python 3, to convert the integer 
representing the Unicode code into a string representing a corresponding character.

#### Examples:
```
>>> chr(49)
'1'
```
One thing is to be noted that, if the integer value passed to `chr()` is out of range then, a ValueError will be raised.
```
>>> chr(-10)
'Traceback (most recent call last):
  File "<pyshell#24>", line 1, in <module>
    chr(-1)
ValueError: chr() arg not in range(0x110000)'
```




