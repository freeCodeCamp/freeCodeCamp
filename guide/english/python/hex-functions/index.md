---
title: Python Hex Function
---
`hex(x)` is a built-in function in Python 3 to convert an integer number to a lowercase <a href='https://www.mathsisfun.com/hexadecimals.html' target='_blank' rel='nofollow'>hexadecimal</a> string prefixed with “0x”.

## Argument

This function takes one argument, `x`, that should be of integer type.

## Return

This function returns a lowercase hexadecimal string prefixed with "0x".

## Example

    print(hex(16))    # prints  0x10
    print(hex(-298))  # prints -0x12a
    print(hex(543))   # prints  0x21f

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CV0S' target='_blank' rel='nofollow'>Run Code</a>

## Hexadecimal number to decimal number

To change hexadecimal numbers to decimal numbers.

```
hex = "0xFA"
hex2 = "-0x12a"
hex3 = "0x21F"
number = int(hex, 16)
number2 = int(hex2, 16)
number3 = int(hex3, 16)
print(number)
print(number2)
print(number3)
```
Prints the results:
```
250
-298
543
```
<a href='https://docs.python.org/3/library/functions.html#hex' target='_blank' rel='nofollow'>Official Documentation</a>
