---
title: Python Keywords
---
## Python Keywords

Python has a list of <a href='https://docs.python.org/3/reference/lexical_analysis.html#keywords' target='_blank' rel='nofollow'>keywords</a> that cannot be used as identifiers (variable names). Trying to use any of these keywords as variables will create a <b>Syntax Error</b> and your Python script will not be run:

    >>> False = "Hello campers!"
    File "<stdin>"
    SyntaxError: can't assign to keyword

    >>> break = "Hello campers!"
    File "<stdin>", line 1
        break = "Hello campers!"
                ^
        SyntaxError: invalid syntax

#### List of Keywords

Keyword | - | - | - | -
--- | --- | --- | --- | ---
`False` | `class` | `finally` | `is` | `return`
`None` | `continue` |  `for` | `lambda` | `try`
`True` | `def` | `from` | `nonlocal` | `while`
`and` | `del` | `global` | `not` | `with`
`as` | `elif` | `if` | `or` | `yield`
`assert` | `else` | `import` | `pass`
`break` | `except` | `in` | `raise`
#### To check keywords in python run the below
```python
>>> import keyword
>>> print (keyword.kwlist)
['False', 'None', 'True', 'and', 'as', 'assert', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield']
>>> 
```
