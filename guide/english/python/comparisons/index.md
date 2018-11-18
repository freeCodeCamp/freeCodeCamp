---
title: Python Comparisons
---
[Python Docs - Comparisons](https://docs.python.org/3/library/stdtypes.html#comparisons)

There are eight comparison operations in Python. They all have the same priority (which is higher than that of the Boolean operations). Comparisons can be chained arbitrarily; for example, `x < y <= z` is equivalent to `x < y and y <= z`, except that `y` is evaluated only once (but in both cases `z` is not evaluated at all when `x < y` is found to be false).

You can also give two condition and check for only one condition using 'or'  like 'x > y or x >= y' will check for either of the two conditions. If one of the condition is true the programme will proceed. This is the functionality of 'or'

This table summarizes the comparison operations:

Operation | Meaning  
--------- | -----------------------  
`<` | strictly less than  
`<=` | less than or equal to 
`>` | strictly greater than 
`>=` | greater than or equal to
`==` | equal to 
`!=` | not equal to 
`is` | object identity  
`is not` | negated object identity

Objects of different types, except different numeric types, never compare equal. Furthermore, some types (for example, function objects) support only a degenerate notion of comparison where any two objects of that type are unequal. The `<`, `<=`, `>` and `>=` operators will raise a `TypeError` exception when comparing a complex number with another built-in numeric type, when the objects are of different types that cannot be compared, or in other cases where there is no defined ordering.

Non-identical instances of a class normally compare as non-equal unless the class defines the `__eq__()` method.

Instances of a class cannot be ordered with respect to other instances of the same class, or other types of object, unless the class defines enough of the methods `__lt__()`, `__le__()`, `__gt__()`, and `__ge__()` (in general, `__lt__()` and `__eq__()` are sufficient, if you want the conventional meanings of the comparison operators).

The behavior of the `is` and `is not` operators cannot be customized; also they can be applied to any two objects and never raise an exception.

We can also chain `<` and `>` operators together. For instance, `3 < 4 < 5` will return `True`, but `3 < 4 > 5` will not. We can also chain the equality operator. For instance, `3 == 3 < 5` will return `True` but `3 == 5 < 5` will not.

### Equality Comparisons - "is" vs "=="

In Python, there are two comparison operators which allow us to check to see if two objects are equal. The `is` operator and the `==` operator. However, there is a key difference between them!

The key difference between 'is' and '==' can be summed up as:
* `is` is used to compare <b>identity</b>
* `==` is used to compare <b>equality</b>

## Example
First, create a list in Python.

```python
myListA = [1,2,3]
```

Next, create a copy of that list. 

```python
myListB = myListA
```

If we use the '==' operator or the 'is' operator, both will result in a <b>True</b> output. 

```python
>>> myListA == myListB # both lists contains similar elements
True
>>> myListB is myListA # myListB contains the same elements
True
```
This is because both myListA and myListB are pointing to the same list variable, which I defined at beginning of my Python program. Both lists are exactly the same, both in identity and in content.

However, what if I now create a new list?

```python
myListC = [1,2,3]
```

Performing the `==` operator still shows that both lists are the same, in terms of content.

```python
>>> myListA == myListC
True
```

However, performing the `is` operator will now produce a `False` output. This is because myListA and myListC are two different variables, despite containing the same data. Even though they look the same, they are <b>different</b>.

```python
>>> myListA is myListC
False # both lists have different reference
```

To sum up:
* An `is` expression outputs `True` if both variables are pointing to the same reference 
* An `==` expression outputs `True` if both variables contain the same data
