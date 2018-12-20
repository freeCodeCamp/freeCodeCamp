---
title: Python's Enumerate Function
---

## Overview
`enumerate()` is a built-in function in Python. It is useful for iteration over a list or any other iterable.

## Arguments
`enumerate()` requires an iterable, and `start` as an optional parameter (it defines where the indexing starts).

## Return Value
Returns an enumerate object. If you call `list()` on it, you can see that each item in the object is a tuple – an index followed by the item in the iterable.

## Usage Example
    animals = ['cat', 'dog', 'rabbit', 'fox', 'wolf'] # A list of animals.
    for index, item in enumerate(animals, start=20):
      print(index, item)
### Output
    20 cat
    21 dog
    22 rabbit
    23 fox
    24 wolf

<a href='https://repl.it/repls/DarksalmonMajesticDecagons'>Try it out!</a>

#### More Information

- <a href='https://docs.python.org/3/library/functions.html#enumerate'>Python's Docs</a>
