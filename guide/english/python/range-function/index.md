---
title: Range Method
---

# Range Function
If you do need to iterate over a sequence of numbers, the built-in function range() comes in handy. It generates arithmetic progressions.

#### Example Usage
 ```python
for i in range(5):
    print(i)
 ```
 
 #### Output
 ```
0
1
2
3
4
 ```
 
#### Example with optional additional arguments
The first argument, *start*, is the starting number of the sequence.

The second argument, *stop*, means to generate numbers up to, but not including this number.

The third argument, *step*, is the amount to increment by. In other words, it's the difference between each number in the sequence. It defaults to 1 if step is not specified. If step is zero, `ValueError` is raised.

 ```python
for i in range(3, 12, 2):
    print(i)
 ```
 
 #### Output
 ```python
3
5
7
9
11
 ```

#### Input and Output types
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

#### Equality of range objects (Python 3)
Range objects can be compared as sequences with the use of `==` or `!=` operators. Two range objects are considered equal if they represent the same sequence of values. This means that even if the start, stop and step attributes of two range objects are different, they can still be equal if they generate the same sequence of values.
```python
range(4, 8, 3) == range(4, 9, 3) # => True as they generate the same sequence of values => 4 and 7
```
