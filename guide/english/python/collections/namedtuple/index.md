---
title: Python namedtuple
---

## Python namedtuple

A namedtuple assigns names, as well as the numerical index, to each member. 
Each kind of namedtuple is represented by its own class, created by using the namedtuple() factory function.
The arguments are the name of the new class and a string containing the names of the elements. 
Like dictionaries they contain keys that are hashed to a particular value. But on contrary, it supports both access from key value and iteration, the functionality that dictionaries lack.

```python

# import module "collections"
import collections

# declaring namedtuple()
Employee = collections.namedtuple('Employee', ['name', 'age', 'salary'])

# adding values
emp = Employee('Chris', '28', '170000')

# access by index
print emp[2]  # 170000


# access by keyname
print emp.name   # Chris

# access by getattr()
print getattr(emp, 'age')   # 28

```

[More info](https://docs.python.org/2/library/collections.html#collections.namedtuple)
