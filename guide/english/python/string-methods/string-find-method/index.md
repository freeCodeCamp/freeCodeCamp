---
title: String Find Method
---
## String Find Method

There are two options for finding a substring within a string in Python, `find()` and `rfind()`.

Each will return the position that the substring is found at. The difference between the two is that `find()` returns the lowest position, and `rfind()` returns the highest position.

Optional start and end arguments can be provided to limit the search for the substring to within portions of the string.

Example:

```shell
>>> string = "Don't you call me a mindless philosopher, you overweight glob of grease!"
>>> string.find('you')
6
>>> string.rfind('you')
42
```
If the substring is not found, -1 is returned.

```shell
>>> string = "Don't you call me a mindless philosopher, you overweight glob of grease!"
>>> string.find('you', 43)  # find 'you' in string anywhere from position 43 to the end of the string
-1
```

More Information:

String methods <a href='https://docs.python.org/3/library/stdtypes.html#string-methods' target='_blank' rel='nofollow'>documentation</a>.
