---
title: List Index Method
---
## List Index Method

Among the many functions which come along with the list data structure the `index()` returns the the first occurrence/index of the element in the list given as an argument to the function. 

Lists are the most basic Python data structure and stores a list of values in order (in comparison to dictionaries, which order doesn't matter). We retrieve the items by numerical index.

Keeping in mind the fact that indexing starts from 0, or the first element is taken to be at the 0 index, let's have a look at some examples. 

#### Example Usage:

```py
numbers = [1, 2, 2, 3, 9, 5, 6, 10]
words = ["I", "love", "Python", "I", "love"]

print(numbers.index(9))
print(numbers.index(2))
print(words.index("I"))
print(words.index("am"))
```

##### Output:

```py
4
1
0
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: 'am' is not in list
```

Here the first output is very obvious, but the second and third might seem confusing at first.But remember `index()` returns the first occurrence of the element and hence in this case `1` and `0` are the indices where `2` and `"I"` occur first in the lists respectively.

Also, if an element is not found in the list, a `ValueError` is returned as in the case of indexing `"am"` in the `words` list.

#### Optional arguments:

You can also use optional arguments to limit your search to a particular subsequence of the list as illustrated by this example:

```py
words = ["I","am", "a", "I", "am", "Pythonista"]

print(words.index("am",2,5))
```
##### Output:
```
4
```
Here although the element is searched between the indices 2(inclusive) and 5(not inclusive) but the returned index is computed relative to the beginning of the full list rather than the start argument.

#### More Information:

The official documentation for `index()` can be found <a href='https://docs.python.org/3.6/tutorial/datastructures.html' target='_blank' rel='nofollow'>here</a>


