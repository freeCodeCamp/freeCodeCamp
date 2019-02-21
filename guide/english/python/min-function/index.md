---
title: Python Min Function
---
`min()` is a built-in function in Python 3\. It returns the smallest item in an iterable, or the smallest of two or more arguments.

## Arguments

This function takes two or more numbers or any kind of iterable as an argument. While giving an iterable as an argument we must make sure that all the elements in the iterable are of the same type. This means that we cannot pass a list which has both string and integer values stored in it.

Valid Arguments:  

    min(2, 3)
    min([1, 2, 3])
    min('a', 'b', 'c')

Invalid Arguments:  

    min(2, 'a')
    min([1, 2, 3, 'a'])
    min([])

## Return Value

The smallest item in the iterable is returned. If two or more positional arguments are provided, the smallest of the positional arguments is returned. If the iterable is empty and default is not provided, a ValueError is raised.

## Code Sample

    print(min(2, 3)) # Returns 2 as 2 is the smallest of the two values
    print(min(2, 3, -1)) # Returns -1 as -1 is the smallest of the two values

    list1 = [1, 2, 4, 5, -54]
    print(min(list1)) # Returns -54 as -54 is the smallest value in the list

    list2 = ['a', 'b', 'c' ]
    print(min(list2)) # Returns 'a' as 'a' is the smallest in the list in alphabetical order

    list3 = [1, 2, 'abc', 'xyz']
    print(min(list3)) # Gives TypeError as values in the list are of different type

    #Fix the TypeError mentioned above first before moving on to next step

    list4 = []
    print(min(list4)) # Gives ValueError as the argument is empty

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CVir/4' target='_blank' rel='nofollow'>Run Code</a>

<a href='https://docs.python.org/3/library/functions.html#min' target='_blank' rel='nofollow'>Official Docs</a>
