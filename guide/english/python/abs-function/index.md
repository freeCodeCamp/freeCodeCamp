---
title: Python Abs Function
---
`abs()` is a built-in function in Python 3, to compute the absolute value of any number. The absolute value of a number "means only how far a number is from 0" <sup>1</sup> It takes one argument `x`. The argument can even be a <a href='https://docs.python.org/3.0/library/cmath.html' target='_blank' rel='nofollow'>complex number</a>, and in that case its <a href='http://www.mathcentre.ac.uk/resources/sigma%20complex%20number%20leaflets/sigma-complex9-2009-1.pdf' target='_blank' rel='nofollow'>modulus</a> is returned.

## Argument

It takes one argument `x` - an integer, or decimal, or a complex number.

## Return Value

The return value would be a positive number or zero. Even if a complex number is passed, it would return its magnitude, computed as per complex number algebra.

## Code Sample
```python
print(abs(3.4)) # prints 3.4
print(abs(-6)) # prints 6
print(abs(3 + 4j)) # prints 5.0, because |3 + 4j| = 5
```

<a href='https://repl.it/CL8k/0' target='_blank' rel='nofollow'>🚀 Run Code</a>

<a href='https://docs.python.org/3/library/functions.html#abs' target='_blank' rel='nofollow'>Official Docs</a>

### Sources
1. <a href='https://www.mathsisfun.com/numbers/absolute-value.html' target='_blank'>Math Is Fun. Accessed: October 25, 2017</a>
