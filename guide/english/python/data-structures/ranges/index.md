---
title: The Python Range
---
## Python Ranges

Rather than being a function, a range is actually an <a href='https://docs.python.org/3/library/stdtypes.html#immutable-sequence-types' target='_blank' rel='nofollow'>immutable sequence type</a> and is commonly used for looping a specific number of times in for loops.

**Creation:**

`ranges` are created using the `range` constructor. The parameters for the constructor are:

*   `start`: Inclusive first value of the range (optional integer, defaults to 0).
*   `stop` : Exclusive stop value, range stops when this value or greater would be provided (required integer).
*   `step` : The amount added to the current value to get the next value (optional integer, defaults to 1).

```python
>>> range(10)          # Only the stop parameter is required.
range(0, 10)
>>> range(0, 10)       # Default for start parameter is 0.
range(0, 10)
>>> range(0, 10, 1)    # Default for step is 1\. Start parameter is required if
step is needed.
range(0, 10)
```

**Examples:**

Since `ranges` are iterables they can be passed into the `list` and `tuple` constructors to create those types of sequences. Using this fact, we can visualize some examples:

```python
>>> list(range(10))     # range as argument for list constructor.
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> tuple(range(10))    # range as argument for tuple constructor.
(0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
```

Zero length `ranges`:

```python
>>> list(range(10, 0))        # start greater than stop with postive step.
[]
>>> list(range(10, 10))       # start equal to stop with postive step.
[]
>>> list(range(10, 10, -1))   # start equal to stop with negative step.
[]
>>> list(range(0, 10, -1))    # start less than stop with negative step.
[]
```

`ranges` with step arguments:

```python
>>> list(range(0, 10, 2))       # next value would be 10, stops at 8.
[0, 2, 4, 6, 8]
>>> list(range(0, 10, 3))       # next value would be 12, stops at 9.
[0, 3, 6, 9]
>>> list(range(0, 10, 4))       # next value would be 12, stops at 8.
[0, 4, 8]
>>> list(range(10, 0, -1))      # negative step makes decreasing ranges.
[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
>>> list(range(-5, -30, -3))    # negative integers are valid arguments.
[-5, -8, -11, -14, -17, -20, -23, -26, -29]
```

**Benefits:**

The benefit of using `range` is that regardless of how large of a range specified, only a small amount of memory is needed to store the `range`, the values for start, stop, and step. The individual values of the `ranges` are calculated upon iteration.

```python
>>> import sys
>>> a_range = range(1000000)
>>> a_list = list(a_range)
>>> a_tuple = tuple(a_range)
>>> sys.getsizeof(a_range)
48
>>> sys.getsizeof(a_list)
9000112
>>> sys.getsizeof(a_tuple)
8000048
```

### More Inforamtion:
<a href='https://docs.python.org/3/library/stdtypes.html#ranges' target='_blank' rel='nofollow'>Python Doc - Ranges</a>

**TODO: Methods `ranges` do and do not implement**