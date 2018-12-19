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
        
    Instead, you can convert the string into a list, modify the list element (string character) you wish to change, and then join  the list elements back to a string, like so:
        
        >>> foo = "my string"
        >>> foo_list_form = list(foo)
        >>> foo_list_form[0] = "a"
        >>> foo = ' '.join(foo_list_form)
        >>> print(foo)
        ay string # The required output
        
## Reference:

<a href='https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str' target='_blank' rel='nofollow'>Text Sequence Type _str_</a>
