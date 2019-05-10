---
title: Python Abs Function
---
`abs()` is a built-in function in Python 3, to compute the absolute value of any number. The absolute value of a number "means only how far a number is from 0" <sup>1</sup> It takes one argument `x`. The argument can even be a <a href='https://docs.python.org/3.0/library/cmath.html' target='_blank' rel='nofollow'>complex number</a>, or a <a href='https://en.wikipedia.org/wiki/Expression_(mathematics)' target='_blank' rel='nofollow'>mathematical expression</a>. 

## Argument

It takes one argument `x` - either an integer, or decimal, or complex number, or any mathematical expression in general.

## Return Value

The return value would be a positive number or zero. Even if a complex number is passed, it would return its magnitude, computed as per complex number algebra.
+ A complex number is passed - It would return its <a href='http://www.mathcentre.ac.uk/resources/sigma%20complex%20number%20leaflets/sigma-complex9-2009-1.pdf' target='_blank' rel='nofollow'>modulus</a> i.e., magnitude, computed as per complex number algebra.
+ A mathematical expression is passed - It would return its `|result|`, computed as per <a href ='https://en.wikipedia.org/wiki/Order_of_operations' target='_blank' rel='nofollow'> BODMAS </a> rule. 

## Code Sample
```python
print(abs(3.4)) # prints 3.4
print(abs(-6)) # prints 6
print(abs(3 + 4j)) # prints 5.0, because |3 + 4j| = 5
print(abs(3 + 4 - 6 * 3.4)) # prints 13.4, because |3 + 4 - (6 * 3.4)| = |3 + 4 - 20.4| = |-13.4| = 13.4
print(abs(3 - 4j - 3 - 4j)) # prints 8.0, because |(3 - 3) + (- 4j - 4j)| = 8.0
```

<a href='https://repl.it/@arverma/DeepskyblueJitteryObject' target='_blank' rel='nofollow'>🚀 Run Code</a>


<a href='https://docs.python.org/3/library/functions.html#abs' target='_blank' rel='nofollow'>Official Docs</a>

### Sources
1. <a href='https://www.mathsisfun.com/numbers/absolute-value.html' target='_blank'>Math Is Fun. Accessed: October 25, 2017</a>
