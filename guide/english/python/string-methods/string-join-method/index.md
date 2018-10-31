---
title: String Join Method
---
## String Join Method

The `str.join(iterable)` method is used to join all elements in an `iterable` with a specified string ```str```.
If the iterable contains any non-string values, it raises a TypeError exception.

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
4) Joining with empty string.
```python
list1 = ['p','r','o','g','r','a','m']  
print("".join(list1))
```
Output:
```shell
program
```
5) Joining with sets.
```python
test =  {'2', '1', '3'}
s = ', '
print(s.join(test))
```
Output:
```shell
2, 3, 1
```

#### More Information:
<a href='https://docs.python.org/2/library/stdtypes.html#str.join' target='_blank' rel='nofollow'>Python Documentation on String Join</a>
