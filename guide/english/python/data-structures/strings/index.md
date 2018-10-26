---
title: The Python Strings
---
Python allows `str` objects, or _strings_, to be expressed in a few different ways:

*   Single quotes: `'Single quote strings can have "double" quotes inside.'`
*   Double quotes: `"Double quote strings can have 'single' quotes inside."`
*   Triple quoted:

        """Triple quoted strings can span multiple lines.
        Unescaped "double" and 'single' quotes in triple quoted strings are retained."""

        '''Triple quoted strings can be 'single'or "double" quotes.
        Unescaped newlines are also retained.'''
*   Immutable: You cannot directly edit/change a Python string after you have created it. For example, if you try to directly reassign/change the first letter in a string, an error is thrown.
    
        >>> foo = "my string"
        >>> foo[0] = "a"
        Traceback (most recent call last):
                File "<stdin>", line 1, in <module>
        TypeError: 'str' object does not support item assignment
*   Indexable: You can access any character of `str` object by specifying its index. And as it supports slicing like in `list` and `tuple` objects.
    
        >>> foo = "my string"
        >>> foo[3]
        's'
        >>> foo[3:]
        'string'
        >>> foo[::-1]
        'gnirts ym'
        

## Reference:

<a href='https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str' target='_blank' rel='nofollow'>Text Sequence Type _str_</a>
