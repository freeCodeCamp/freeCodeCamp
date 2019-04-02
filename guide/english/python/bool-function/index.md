---
title: Python Bool Function
---
`bool()` is a built-in function in Python 3\. This function returns a Boolean value, i.e. True or False. It takes one argument, `x`.

## Arguments

It takes one argument, `x`. `x` is converted using the standard <a href='https://docs.python.org/3/library/stdtypes.html#truth' target='_blank' rel='nofollow'>Truth Testing Procedure</a>.

## Return Value

If `x` is false or omitted, this returns `False`; otherwise it returns `True`.

## Comparison Operators

There are three Boolean Operators they are `and`, `or`, and `not`.

### and

| expression | result |
| --- | --- |
| true `and` true | true |
| true `and` false | false |
| false `and` true | false |
| false `and` false | false |

### or

| expression | result |
| --- | --- |
| true `or` true | true |
| true `or` false | true |
| false `or` true | true |
| false `or` false | false |

### not

| expression | result |
| --- | --- |
| `not` true | false |
| `not` false | true |

## Code Sample

    print(bool(4 > 2)) # Returns True as 4 is greater than 2
    print(bool(4 < 2)) # Returns False as 4 is not less than 2
    print(bool(4 == 4)) # Returns True as 4 is equal to 4
    print(bool(4 != 4)) # Returns False as 4 is equal to 4 so inequality doesn't holds
    print(bool(4)) # Returns True as 4 is a non-zero value
    print(bool(-4)) # Returns True as -4 is a non-zero value
    print(bool(0)) # Returns False as it is a zero value
    print(bool('dskl')) # Returns True as the string is a non-zero value
    print(bool('')) # Returns False as the string is a zero value
    print(bool([1, 2, 3])) # Returns True as the list is a non-zero value
    print(bool((2,3,4))) # Returns True as tuple is a non-zero value
    print(bool([])) # Returns False as list is empty and equal to 0 according to truth value testing

<a href='https://repl.it/CVCS/2' target='_blank' rel='nofollow'>Run Code</a>

<a href='https://docs.python.org/3/library/functions.html#bool' target='_blank' rel='nofollow'>Official Docs</a>
