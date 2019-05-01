---
title: Python Keywords
---
## Python Keywords

Keywords are the reserved words present in all programming languages .Python has a list of 
<a href='https://docs.python.org/3/reference/lexical_analysis.html#keywords' target='_blank' rel='nofollow'>keywords</a> that cannot be used as function names or identifiers (variable names) .Python is a dynamic language , so the list of keywords may change in future. Currently,  there are 33 keywords in Python 3.3 .  Trying to use any of these keywords as variables will create a <b>Syntax Error</b> and your Python script will not run:

    >>> False = "Hello campers!"
    File "<ipython-input-27-22bd50eb1a1a>", line 1
     False = "Hello campers!"
                            ^
    SyntaxError: can't assign to keyword

    >>> break = "Hello campers!"
    File ""<ipython-input-28-e668b2a47f09>"", line 1
        break = "Hello campers!"
                ^
        SyntaxError: invalid syntax
        
    >>> class = "Hello campers!"
    File "<ipython-input-29-189cc6451267>", line 1
    class = "Hello campers!"
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


All the keywords except `True` , `False` and `None` are in lowercase as shown above. 
