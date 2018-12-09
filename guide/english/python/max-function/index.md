---
title: Python Max Function
---
`max()` is a built-in function in Python 3\. It returns the largest item in an iterable or the largest of two or more arguments.

## Arguments

This function takes two or more numbers or any kind of iterable as an argument. While giving an iterable as an argument we must make sure that all the elements in the iterable are of the same type. This means that we cannot pass a list which has both string and integer values stored in it.
<br>Syntax:
<br>_max(iterable, *iterables[,key, default])_
<br>_max(arg1, arg2, *args[, key])_

Valid Arguments:  

    max(2, 3)
    max([1, 2, 3])
    max('a', 'b', 'c')

Invalid Arguments:  

    max(2, 'a')
    max([1, 2, 3, 'a'])
    max([])

## Return Value

The largest item in the iterable is returned. If two or more positional arguments are provided, the largest of the positional arguments is returned. If the iterable is empty and default is not provided, a `ValueError` is raised.

## Code Sample

    print(max(2, 3)) # Returns 3 as 3 is the largest of the two values
    print(max(2, 3, 23)) # Returns 23 as 23 is the largest of all the values

    list1 = [1, 2, 4, 5, 54]
    print(max(list1)) # Returns 54 as 54 is the largest value in the list

    list2 = ['a', 'b', 'c' ]
    print(max(list2)) # Returns 'c' as 'c' is the largest in the list because c has ascii value larger then 'a' ,'b'.

    list3 = [1, 2, 'abc', 'xyz']
    print(max(list3)) # Gives TypeError as values in the list are of different type

    #Fix the TypeError mentioned above first before moving on to next step

    list4 = []
    print(max(list4)) # Gives ValueError as the argument is empty

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CVok' target='_blank' rel='nofollow'>Run Code</a>

<a href='https://docs.python.org/3/library/functions.html#max' target='_blank' rel='nofollow'>Official Docs</a>
