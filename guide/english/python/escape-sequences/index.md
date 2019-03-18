---
title: Python Escape Sequences
---
A list of escape sequences can be found <a href='https://docs.python.org/3/reference/lexical_analysis.html#strings' target='_blank' rel='nofollow'>here</a>

Escape sequences allow for including special characters into strings.

    >>> print('Single quote strings can have \'single\' quotes if they are escaped')
    "Single quote strings can have 'single' quotes if they are escaped"
    >>> print("Double quote strings can have \"double\" quotes if they are escaped")
    'Double quote strings can have "double" quotes if they are escaped'
    >>> print("Multiline strings\ncan be created\nusing escape sequences.")
    Multiline strings
    can be created
    using escape sequences.
    >>> print("Backslashes \\ need to be escaped.")
    Backslashes \ need to be escaped.

A _raw_ string can be used by prefixing the string with `r` or `R` which allows for backslashes to be included without the need to escape them -

    >>> print(r"Backslashes \ don't need to be escaped in raw strings.")
    Backslashes \ don't need to be escaped in raw strings.
    >>> print(r"An odd number of backslashes at the end of a raw string will cause an error\")
      File "<stdin>", line 1
        print(r"An odd number of backslashes at the end of a raw string will cause an error\")
                                                                                             ^
    SyntaxError: EOL while scanning string literal.

## Some more examples of escape sequences.

Escape Sequence	<- Intended Character
- \\\ 	<- backslash
- \\' 	<- single quote / apostrophe	
- \\" 	<- double quote / quotation mark	
- \\a 	<- ASCII bell makes ringing the bell alert sounds ( eg. xterm ) 
- \\b 	<- ASCII backspace ( BS ) removes previous character 
- \\n   <- newline
- \\r   <- carriage return
