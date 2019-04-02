---
title: String Strip Method
---
## String Strip Method

There are three options for stripping characters from a string in Python, `lstrip()`, `rstrip()` and `strip()`.

Each will return a copy of the string with characters removed, at from the beginning, the end or both beginning and end. If no arguments are given the default is to strip whitespace characters.

Example:

```py
>>> string = '   Hello, World!    '
>>> strip_beginning = string.lstrip()
>>> strip_beginning
'Hello, World!    '
>>> strip_end = string.rstrip()
>>> strip_end
'   Hello, World!'
>>> strip_both = string.strip()
>>> strip_both
'Hello, World!'
```

An optional argument can be provided as a string containing all characters you wish to strip.

```py
>>> url = 'www.example.com/'
>>> url.strip('w./')
'example.com'
```
However, do notice that only the first `.` got stripped from the string. This is because the `strip` function only strips the argument characters that lie at the left or rightmost. Since w comes before the first `.` they get stripped together, whereas 'com' is present in the right end before the `.` after stripping `/`

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

String methods <a href='https://docs.python.org/3/library/stdtypes.html#string-methods' target='_blank' rel='nofollow'>documentation</a>.
