---
title: Python Idobject
---
`id()` is a built-in function in Python 3, which returns the _identity_ of an object. The _identity_ is a unique integer for that object during its lifetime. This is also the address of the object in memory.

For the average programmer this function isn't very helpful.  If the id() of two objects in a program are the same, then they are actually the same object.  Although you can use this to test, the keyword "is" is a better solution.

## Argument

#### object

The `object` argument can typically be a `int`,`float`,`str`,`list`,`dict`,`tuple` etc.

## Code Sample

    a = 2
    print(id(a)) #=> 140454723286976 (Values returned by id() might be different for different users)

    b = 3
    print(id(b)) #=> 140454723287008

    c = 2
    print(id(c)) #=> 140454723286976 (This is same as id(a) since they both contain the same value and hence have same memory address)

    print(id(a) == id(b)) #=> False (since a and b have different values stored in them)
    print(id(a) == id(c)) #=> True (since a and c have same values stored in them)

    d = 1.1
    e = 1.1 
    print(id(d) == id(e)) #=> True (since d and e have same values stored in them)

    str1 = 'hello'
    str2 = 'hello'
    print(id(str1) == id(str2)) #=> True (since str1 and str2 have same values stored in them)

    # For complex objects like lists, tuples, dictionaries etc. id() would give a unique integer even if the content of those containers is same.
    tup1 = (1,1)
    tup2 = (1,1)
    print(id(tup1) == id(tup2)) #=> False

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CQw7/1' target='_blank' rel='nofollow'>Run Code</a>

<a href='https://docs.python.org/3/library/functions.html#id' target='_blank' rel='nofollow'>Official Docs</a>
