---
title: Python Containers
---
Some objects contain references to other objects; these are called containers. Examples of containers are tuples, lists and dictionaries. The references are part of a container's value. In most cases, when we talk about the value of a container, we imply the values, not the identities of the contained objects; however, when we talk about the mutability of a container, only the identities of the immediately contained objects are implied. So, if an immutable container (like a tuple) contains a reference to a mutable object, its value changes if that mutable object is changed.

Lists:
  lists are characterized by the use of square brackets which enclose a list of comma separated values.  the values are mutable and are referenced by their index within the list. the first element in the list has the index of 0, the next element is 1 and increases by 1 for each other element in the list.  the last value in the list also has the index -1.

Tuples:
  Tuples are similar to lists, but are characterized by the use of parentheses which enclose a list of comma separated values.  the elements within the tuple are immutable and cannot be changed.
  
Dictionaries:
  Dictionaries are key-value mapping lists characterized by the use of curly brackets enclosing a list of key-value elements.  the key and value are separated by a colon, and the key-value set is separated by a comma.

<a href='https://docs.python.org/3/reference/datamodel.html#objects-values-and-types' target='_blank' rel='nofollow'>Python Docs - Object Values & Types</a>
