---
title: String Methods
---
**TODO: `string` basic info**

[Python Docs - Strings](https://docs.python.org/3/library/stdtypes.html#strings)

**Creation:**

An empty `string` is created using a pair of quotation marks or apostrophes:
```shell
>>> new_string = ''
>>> type(new_string)
<class 'string'>
>>> len(new_string)
0
```

[Python Docs - More on Strings](https://docs.python.org/3/tutorial/datastructures.html#more-on-strings)

*   `string.find('you')` Returns the lowest position that the substring is found at.

*  `str.join(iterable)` Join all elements in an `iterable` with a specified string.

*   `str.replace(old, new, max)`  method is used to replace the substring `old` with the string `new` for a total of `max` times. This method returns a new copy of the string with the replacement, and the original `str` is unchanged.

*   `string.split(separator, maxsplit)` Returns a list of substrings delimited by the `separator`, an optional `maxsplit` number of times, and if not specified, the string will be split on all instances of the `separator`.

*  `string.strip(to_strip)`  Returns a string with `to_strip` removed from both the beginning and the end of the string. If `to_strip` is not specified, this will strip all whitespace characters.


