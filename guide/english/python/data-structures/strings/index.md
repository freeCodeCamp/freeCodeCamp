---
title: The Python Strings
---
# Strings
Python allows `str` objects, or [_strings_](https://docs.python.org/2/library/string.html), to be expressed in a few different ways:

*   Single quotes: 

        `'Single quote strings can have "double" quotes inside.'`
        
*   Double quotes: 

        `"Double quote strings can have 'single' quotes inside."`
        
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
*   Indexable: You can access any character of `str` object by specifying its index. And as it supports slicing like in `list` and `tuple` objects.
    
        >>> foo = "my string"
        >>> foo[3]
        's'
        >>> foo[3:]
        'string'
        >>> foo[::-1]
        'gnirts ym'
        
        
If we have a string `S`, we can access its length with the command `len(S)`.  
```python
>>> S = 'Hero'
>>> len(S)
4
```
  
#### Accessing elements, Indexing and Slicing:
Strings are zero-indexed. We can associate each element in a string with a number, the `1st` element indexed at `0`. So, a string of `N` characters would have `N` indices, from `0` to `N-1`.  
Indices help us to access elements of the string.  
```python
>>> S = 'ABCDEFGH'
>>> S[0]
'A'
>>> S[2]
'C'
>>> S[8]
Traceback (most recent call last):
  File "<pyshell#9>", line 1, in <module>
    S[8]
IndexError: string index out of range
>>>
>>> S[7]
'H'
```  
As we see above, we type `S[0]` to access the 1st element of the string, i.e., `'A'`. Also note that since the indices start at `0`, the last element in the string `ABCDEFGH` has the index `7` and not `8`, even though the string itself has length `8`. Hence, we see that `IndexError` message when we try to access `S[8]`.  
Another cool thing we can do with strings is slicing. Instead of accessing individual elements, we can access chunks of the string with slices. The syntax is `S[start:stop:step]` where `start` (default value `0`) refers to the index at which we want to begin slicing, `stop` (default value `len(S)`) is the index where we want to end slicing, and `step` (default value `1`) is the jump after each element. Let's look at this in action.  
```python
>>> S = 'ABCDEFGH'
>>> S[0:5:1]
'ABCDE'
>>> S[2:8]
'CDEFGH'
>>> S[1::2]
'BDFH'
>>> S[::-1]
'HGFEDCBA'
```  
Please note that the part of string that gets printed out goes up to `stop - 1` value and not `stop`. Hence, `S[0:5:1]` starts at `S[0]` and stops at `S[4]`.  
When we don't specify a value for a parameter, Python automatically takes the default value as stated above.  
See how making the `step` equal to `-1` just reverses the string. Cool, huh?  
Feel free to experiment with different combinations to get comfortable with slicing. It's going to be very useful.  
  
#### Concatenation and Repetition:  
```python
>>> 2 + 3
5
>>> 'My' + ' ' + 'Hero' + ' ' + 'Academia'
'My Hero Academia'
>>>
>>> 4 * 9
36
>>> 'Yo!' * 3
'Yo!Yo!Yo!'
```  
The `+` and `*` operators are said to be `overloaded` because they behave differently for different types of objects.  
Using the `+` operator on strings leads to `concatenation`, while the `*` operator results in `repetition`.  

## Reference:

<a href='https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str' target='_blank' rel='nofollow'>Python Documentation - Text Sequence Type _str_</a>
