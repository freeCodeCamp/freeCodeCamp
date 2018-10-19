---
title: Python Containers
---
Some objects contain references to other objects; these are called containers. Examples of containers are tuples, lists and dictionaries. The references are part of a container's value. In most cases, when we talk about the value of a container, we imply the values, not the identities of the contained objects; however, when we talk about the mutability of a container, only the identities of the immediately contained objects are implied. So, if an immutable container (like a tuple) contains a reference to a mutable object, its value changes if that mutable object is changed.

<a href='https://docs.python.org/3/reference/datamodel.html#objects-values-and-types' target='_blank' rel='nofollow'>Python Docs - Object Values & Types</a>