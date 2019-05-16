---
title: Range Method
---

# Range Method
If you need to iterate over a sequence of numbers, the built-in function `range()` comes in handy. It generates arithmetic progressions.

### Example Usage
 ```python
for i in range(5):
    print(i)
 ```
 
### Output
 ```
0
1
2
3
4
 ```
 
### Example with Optional Additional Arguments
```python
# A range function call.
range(start, stop, step)
```

The first argument, *start*, is the starting number of the sequence.

The second argument, *stop*, means to generate numbers up to, but not including this number.

The third argument, *step*, is the amount to increment by. In other words, it's the difference between each number in the sequence. It defaults to 1 if step is not specified. If step is zero, `ValueError` is raised.

 ```python
for i in range(3, 12, 2):
    print(i)
 ```
 
 ### Output
 ```python
3
5
7
9
11
 ```

#### Changes in Python 3
In Python 3, by default the range function will not generate a list of integers when assigned to a variable. Instead, the user must manually convert it to a list.

#### Example usage in Python 3
 ```py
numbers = list(range(1, 10))
print(numbers)
 ```
 
#### Output
 ```
[1, 2, 3, 4, 5, 6, 7, 8, 9]
 ```

## Input and Output types
**Input** - All arguments to the range function must be integers (either built-in `int` or any object that implements the `__index__` special method).

**Output in Python 2.x** - Returns a list of values

```python
print range(3) # => [0, 1, 2]
```

**Output in Python 3.x** - Returns an iterator of class `range` (Similar to `xrange` function in Python2.x)

```python
print(range(3)) # => range(0, 3)
```

Range objects implement the `collections.abc.Sequence` and provide features such as containment tests, element index lookup, slicing and support for negative indices.

***Note*** - The advantage of return type in Python 3 vs Python 2 is that `range` function in Python 3 can take arbitrarily large values too. Also iterators only use a finite small amount of memory whereas a list uses memory proportional to its size. Hence all `range` objects in Python 3 use up similar amounts of memory space irrespective of the size of the sequence.

## Equality of range objects (Python 3)
Range objects can be compared as sequences with the use of `==` or `!=` operators. Two range objects are considered equal if they represent the same sequence of values. This means that even if the start, stop and step attributes of two range objects are different, they can still be equal if they generate the same sequence of values.
```python
range(4, 8, 3) == range(4, 9, 3) # => True as they generate the same sequence of values => 4 and 7
```

## Notes
In Python 2, there are 2 functions for going through a range of numbers: `range()` and `xrange()`. Out of these functions, `xrange()` is the "lazy" function, meaning it generates numbers as necessary instead of actually creating a list of numbers and iterating through them. range(), on the other hand, makes an entire list of numbers and iterates through this list. This makes it a strain on the memory in the case of really long lists.

In Python 3, the `range()` function mimics `xrange()` as the "lazy" variant, and `xrange()` itself has been removed.
