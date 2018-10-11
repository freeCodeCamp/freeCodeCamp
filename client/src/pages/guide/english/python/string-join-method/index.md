---
title: String Join Method
---
## String Join Method

The `str.join(iterable)` method is used to join all elements in an `iterable` with a specified string ```str```.

`iterable`: All iterables of string. Could a list of strings, tuple of string or even a plain string.

#### Examples

1) Join a ist of strings with `":"`
```python
print ":".join(["freeCodeCamp", "is", "fun"])
```
Output
```shell
freeCodeCamp:is:fun
```

2) Join a tuple of strings with `" and "`
```python
print " and ".join(["A", "B", "C"])
```
Output
```shell
A and B and C
```

3) Insert a `" "` after every character in a string
```python
print " ".join("freeCodeCamp")
```
Output:
```shell
f r e e C o d e C a m p
```

#### More Information:
<a href='https://docs.python.org/2/library/stdtypes.html#str.join' target='_blank' rel='nofollow'>Python Documentation on String Join</a>
