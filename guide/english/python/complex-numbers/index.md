---
title: Python Complex Numbers
---
Complex numbers have a real and an imaginary part, each represented by a floating point number.

The imaginary part of a complex number can be created using an imaginary literal, this results in a complex number with a real part of `0.0`:
```python
>>> a = 3.5j
>>> type(a)
<class 'complex'>
>>> print(a)
3.5j
>>> a.real
0.0
>>> a.imag
3.5
```

No literal exists for creating a complex number with non-zero real and imaginary parts. To create a non-zero real part complex number, add an imaginary literal to a floating point number:

```python
>>> a = 1.1 + 3.5j
>>> type(a)
<class 'complex'>
>>> print(a)
(1.1+3.5j)
>>> a.real
1.1
>>> a.imag
3.5
```

Or use the <a href='https://docs.python.org/3/library/functions.html#complex' target='_blank' rel='nofollow'>complex constructor</a>.

```python
class complex([real[, imag]])
```

The arguments used to call the complex constructor can be of numeric (including `complex`) type for either parameter:

```python
>>> complex(1, 1)
(1+1j)
>>> complex(1j, 1j)
(-1+1j)
>>> complex(1.1, 3.5)
(1.1+3.5j)
>>> complex(1.1)
(1.1+0j)
>>> complex(0, 3.5)
3.5j
```

A `string` can also be used as the argument. No second argument is allowed if a string is used as an argument

```python
>>> complex("1.1+3.5j")
(1.1+3.5j)
```