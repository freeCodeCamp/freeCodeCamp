---
title: Python Numeric Operations
---
<a href='https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex' target='_blank' rel='nofollow'>Python Docs - Numeric Operations</a>

Python fully supports mixed arithmetic: when a binary arithmetic operator has operands of different numeric types, the operand with the "narrower" type is widened to that of the other, where integer is narrower than floating point, which is narrower than complex. Comparisons between numbers of mixed type use the same rule. <a href='https://docs.python.org/3/library/functions.html#abs' target='_blank' rel='nofollow'>2] The constructors int(), float(), and complex() can be used to produce numbers of a specific type.

All numeric types (except complex) support the following operations, sorted by ascending priority (all numeric operations have a higher priority than comparison operations):

Operation | Results | Notes | Full documentation  
----------------- | --------------------------------------------------------------------------- | ------ | -----------------------------------------------------------------------  
`x + y` | sum of x and y | |  
`x - y` | difference of x and y | |  
`x * y` | product of x and y | |  
`x / y` | quotient of x and y | |  
`x // y` | floored quotient of x and y | (1) |  
`x % y` | remainder of x / y | (2)  
`-x` | x negated | |  
`+x` | x unchanged | |  
`abs(x)` | absolute value or magnitude of x | | [`abs()`</a>  
`int(x)` | x converted to integer | (3)(6) | <a href='https://docs.python.org/3/library/functions.html#int' target='_blank' rel='nofollow'>`int()`</a>  
`float(x)` | x converted to floating point | (4)(6) | <a href='https://docs.python.org/3/library/functions.html#float' target='_blank' rel='nofollow'>`float()`</a>  
`complex(re, im)` | a complex number with real part re, imaginary part im. im defaults to zero. | (6) | <a href='https://docs.python.org/3/library/functions.html#complex' target='_blank' rel='nofollow'>`complex()`</a>  
`c.conjugate()` | conjugate of the complex number c | |  
`divmod(x, y)` | the pair (x // y, x % y) | (2) | <a href='https://docs.python.org/3/library/functions.html#divmod' target='_blank' rel='nofollow'>`divmod()`</a>  
`pow(x, y)` | x to the power y | (5) | <a href='https://docs.python.org/3/library/functions.html#pow' target='_blank' rel='nofollow'>`pow()`</a>  
`x ** y` | x to the power y | (5)

**Notes:**

1.  Also referred to as integer division. The resultant value is a whole integer, though the result's type is not necessarily int. The result is always rounded towards minus infinity: `1//2` is `0`, `(-1)//2` is `-1`, `1//(-2)` is `-1`, and `(-1)//(-2)` is `0`.

2.  Not for complex numbers. Instead convert to floats using `abs()` if appropriate.

3.  Conversion from floating point to integer may round or truncate as in C; see functions <a href='https://docs.python.org/3/library/math.html#math.floor' target='_blank' rel='nofollow'>`math.floor()`</a> and <a href='https://docs.python.org/3/library/math.html#math.ceil' target='_blank' rel='nofollow'>`math.ceil()`</a> for well- defined conversions.

4.  `float` also accepts the strings `“nan”` and `“inf”` with an optional prefix `“+”` or `“-”` for Not a Number (NaN) and positive or negative infinity.

5.  Python defines `pow(0, 0)` and `0 ** 0` to be `1`, as is common for programming languages.

6.  The numeric literals accepted include the digits 0 to 9 or any Unicode equivalent (code points with the `Nd` property).

> See <a href='http://www.unicode.org/Public/8.0.0/ucd/extracted/DerivedNumericType.txt' target='_blank' rel='nofollow'>Unicode Derived Numeric Type</a> for a complete list of code points with the `Nd` property.