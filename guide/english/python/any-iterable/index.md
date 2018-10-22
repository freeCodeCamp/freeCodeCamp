---
title: Python Any Iterable
---
`any()` is a built-in function in Python 3 (and Python 2 since version 2.5), to check if any of the items of an <a href='https://docs.python.org/3/glossary.html#term-iterable' target='_blank' rel='nofollow'>_iterable_</a> is `True`. It takes one argument, `iterable`. This table below is helpful in understanding `all` and `any` iterable.

<p align="center">
<img src="https://www.geeksforgeeks.org/wp-content/uploads/All-any-in-python.png" alt="All Vs Any" width="350" />
</center>
    
## Argument

### iterable

The `iterable` argument is the collection whose entries are to be checked. It can typically be a `list`, `str`, `dict`, `tuple` etc., even a `file object`.

## Return Value

The return value is a Boolean. It returns 'False' if and only if **all** entries of iterable are `False`, or the `iterable` is empty. This function essentially performs a Boolean `OR` operation over all elements.

If even one of them is `True`, it returns `True`.

The `any()` operation is equivalent to (internally, may not be implemented exactly like this)

    def any(iterable):
        for element in iterable:
            if element:
                return True
        return False
        
It stops the execution as soon as the result is known.

## Code Sample

    print(any([])) #=> False
    print(any({})) #=> False
    print(any([None])) #=> False
    print(any(['', {}, 0])) #=> False
    print(any([6, 7])) #=> True
    print(any([6, 7, None])) #=> True
    print(any([0, 6, 7])) #=> True
    print(any([9, 8, [1, 2]])) #=> True
    print(any([None, []])) #=> False
    print(any([9, False, [1, 2]])) #=> True

🚀 <a href='https://repl.it/@arverma/GleefulCanineAmericanrobin' target='_blank' rel='nofollow'>Run Code</a>

<a href='https://docs.python.org/3/library/functions.html#any' target='_blank' rel='nofollow'>Official Docs</a>

### Sources
1. <a href='https://www.geeksforgeeks.org/any-all-in-python/' target='_blank'>Any & All in Python, Accessed: October 22, 2018</a>
2. <a href='https://www.geeksforgeeks.org/wp-content/uploads/All-any-in-python.png' target='_blank'>Image, Accessed: October 22, 2018</a>
