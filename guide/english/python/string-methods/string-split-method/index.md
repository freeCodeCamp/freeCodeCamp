---
title: String Split Method
---

The `split()` function is commonly used for string splitting in Python. 

#### The `split()` method

Template: `string.split(separator, maxsplit)`

`separator`: The delimiter string. You split the string based on this character. For eg. it could be " ", ":", ";" etc

`maxsplit`: The number of times to split the string based on the `separator`. If not specified or -1, the string is split based on all occurrences of the `separator`

This method returns a list of substrings delimited by the `separator`

#### Examples

1) Split string on space: " "
```python
string = "freeCodeCamp is fun."
print(string.split(" "))
```
Output:
```python
['freeCodeCamp', 'is', 'fun.']
```

2) Split string on comma: ","
```python
string = "freeCodeCamp,is fun, and informative"
print(string.split(","))
```
Output:
```python
['freeCodeCamp', 'is fun', ' and informative']
```

3) No `separator` specified
```python
string = "freeCodeCamp is fun and informative"
print(string.split())
```
Output:
```python
['freeCodeCamp', 'is', 'fun', 'and', 'informative']
```
Note: If no `separator` is specified, then the string is stripped of __all__ whitespace

```python
string = "freeCodeCamp        is     fun and    informative"
print(string.split())
```
Output:
```python
['freeCodeCamp', 'is', 'fun', 'and', 'informative']
```

3) Split string using `maxsplit`. Here we split the string on " " twice:
```python
string = "freeCodeCamp is fun and informative"
print(string.split(" ", 2))
```
Output:
```python
['freeCodeCamp', 'is', 'fun and informative']
```

#### More Information

Check out the <a href='https://docs.python.org/2/library/stdtypes.html#str.split' target='_blank' rel='nofollow'>Python docs on string splitting</a>
