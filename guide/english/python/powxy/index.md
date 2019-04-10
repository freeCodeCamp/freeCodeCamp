---
title: Python Powxy
---
`pow(x, y, z)` is a built-in function in Python 3 to calculate `x` to the power `y`, and if `z` is present, returns `x` to the power `y` [modulo](https://processing.org/reference/modulo.html) `z`.

## Arguments

The arguments must have numeric types.
This function takes two arguments, `x` and `y`, as well as three, `x`, `y`, and`z`.
If `z` is present, `x` and `y` must be of integer types, and y must be non-negative.

## Return

If `z` is present, it returns `x` to the power `y` modulo `z`. If only `x` and `y` are present, it returns `x` to the power `y` (same as `x**y`).

## Example
```python
print(pow(2,4))    # prints 16
print(pow(10,-2))  # prints 0.01
print(pow(4,3,5))  # prints 4
```

<a href='https://repl.it/CTGi' target='_blank' rel='nofollow'>🚀Run Code</a>

<a href='https://docs.python.org/3/library/functions.html#pow' target='_blank' rel='nofollow'>Official Documentation</a>
