---
title: Learn About Python Sets
---
`Set`s in Python are a type of mutable but unordered data structure, which can only contain *unique* elements. 

**Creation:**

`set` literal:

Curly brackets, `{}`, *cannot* be used to create an empty set:

```python
>>> not_set = {}     # set constructor must be used to make empty sets.
>>> type(not_set)    # Empty curly brackets create empty dictionaries.
<class 'dict'>
```

You can only create an empty set by using the `set()` method.

```python
>>> example_set = set()
>>> type(example_set)
<class 'set'>
```

However, if elements are included within the curly brackets, then it would be acceptable syntax to create a set.

```python
>>> example_set_2 = {1, 2, 3}
>>> type(example_set_2)
<class 'set'>
````
