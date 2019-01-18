---
title: Python Len Function
---
`len()` is a built-in function in Python 3\. This method returns the length (the number of items) of an object. It takes one argument `x`.

## Arguments

It takes one argument, `x`. This argument may be a sequence (such as a string, bytes, tuple, list, or range) or a collection (such as a dictionary, set, or frozen set).

## Return Value

This function returns the number of elements in the argument which is passed to the `len()` function.

## Code Sample
```py
    >>> list1 = [123, 'xyz', 'zara'] # list
    >>> print(len(list1)) # prints 3 as there are 3 elements in the list1
    3
```
```py
    >>> str1 = 'basketball' # string
    >>> print(len(str1)) # prints 10 as the str1 is made of 10 characters
    10
```
```py
    >>> tuple1 = (2, 3, 4, 5) # tuple 
    >>> print(len(tuple1)) # prints 4 as there are 4 elements in the tuple1
    4
```
```py
    >>> dict1 = {'name': 'John', 'age': 4, 'score': 45} # dictionary
    >>> print(len(dict1)) # prints 3 as there are 3 key and value pairs in the dict1
    3
```   
```py
    >>> d2=[[1,2,3],[3,4,5],[5,6,7,2]] # 2 dimensional list or a list of lists
    >>> print(len(d2)) #prints 3 because there are 3 different lists in the outer list.
    3
```    

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CUmt/15' target='_blank' rel='nofollow'>Run Code</a>

<a href='https://docs.python.org/3/library/functions.html#len' target='_blank' rel='nofollow'>Official Docs</a>
