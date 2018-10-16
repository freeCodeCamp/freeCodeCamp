---
title: Python Function Divmod
---
# Python `divmod(a,b)`

`divmod()` is a built-in function in Python 3, which returns the quotient and remainder when dividing the number `a` by the number `b`. It takes two numbers as arguments `a` & `b`. The argument can't be a complex number.

## Argument

It takes two arguments `a` & `b` - an integer, or a decimal number.It can't be a complex number.

## Return Value

The return value will be the pair of positive numbers consisting of quotient and remainder obtained by dividing `a` by `b`. In case of mixed operand types, rules for binary arithmetic operators will be applied.  
For **Integer number arguments**, return value will be same as `(a // b, a % b)`.  
For **Decimal number arguments**, return value will be same as `(q, a % b)`, where `q` is usually **math.floor(a / b)** but may be 1 less than that.

## Code Sample

    print(divmod(5,2)) # prints (2,1)
    print(divmod(13.5,2.5)) # prints (5.0, 1.0)
    q,r = divmod(13.5,2.5)  # Assigns q=quotient & r= remainder
    print(q) # prints 5.0 because math.floor(13.5/2.5) = 5.0
    print(r) # prints 1.0 because (13.5 % 2.5) = 1.0

![:rocket:](https://forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=3 ":rocket:") <a href='https://repl.it/FGLK/0' target='_blank' rel='nofollow'>REPL It!</a>

<a href='https://docs.python.org/3/library/functions.html#divmod' target='_blank' rel='nofollow'>Official Docs</a>