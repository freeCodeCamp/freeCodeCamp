---
title: Python Frozenset
---
**`frozenset` basic info**<br>
The `frozenset` type is a builtin set types which is immutable and hashable -- its contents cannot be altered after it is created; however, it can be used as a dictionary key or as an element of another set. Frozensets are like sets except that they cannot be changed, i.e they are immutale.

    >>> cities = frozenset(["Frankfurt", "Basel", "Freiburg"])
    >>> cities.add("Strasbourg")
    Traceback (most recent call last):
        File "<stdin>", line 1, in <module>
    AttributeError: 'frozenset' object has no attribute 'add'
    >>>
    
`frozenset` constructor:<br>
`frozenset([iterable])` <br>
The iterable contains elements to initialize the frozenset with. The iterable can be set, dictionary, tuple etc. If no parameter is passed, the `frozenset()` method returns an empty frozenset.

**Examples** <br>

    >>> vowels = ('a', 'e', 'i', 'o', 'u')
    >>> fSet = frozenset(vowels)
    >>> print("The frozen set is: ", fSet)
    The frozen set is: frozenset({'i', 'e', 'a', 'u', 'o'})
    >>> print("The empty frozen set is: ", frozenset())
    The empty frozen set is: frozenset()
    >>>
    
**Another Example** <br>

    >>> person = {"name": "John", "age": 23, "sex": "male"}
    >>> fSet = frozenset(person)
    >>> print("The frozen set is: ", fSet)
    The frozen set is: frozenset({'sex', 'name', 'age'})
    >>>
    
**Additional Information** <br>
<a href="https://www.programiz.com/python-programming/methods/built-in/frozenset">Python Frozenset()</a> <br>
<a href="https://docs.python.org/2.4/lib/types-set.html">Set Types -- set, frozenset</a> <br>
<a href="https://www.python-course.eu/sets_frozensets.php">Python Tutorial: Sets and Frozen sets</a>
