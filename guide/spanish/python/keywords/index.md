---
title: Python Keywords
localeTitle: Palabras clave de Python
---
## Palabras clave de Python

Python tiene una lista de [palabras clave](https://docs.python.org/3/reference/lexical_analysis.html#keywords) que no se pueden usar como identificadores (nombres de variables). Intentar usar cualquiera de estas palabras clave como variables creará un **error de sintaxis** y su secuencia de comandos de Python no se ejecutará:
```
>>> False = "Hello campers!" 
 File "<stdin>" 
 SyntaxError: can't assign to keyword 
 
 >>> break = "Hello campers!" 
 File "<stdin>", line 1 
    break = "Hello campers!" 
            ^ 
    SyntaxError: invalid syntax 
```

#### Lista de palabras clave

Palabra clave | - | - | - | - --- | --- | --- | --- | --- `False` | `class` | `finally` | `is` | `return` `None` | `continue` | `for` | `lambda` `try` `True` | `def` | `from` | `nonlocal` | `while` `and` | `del` | `global` | `not` | `with` `as` | `elif` | `if` | `or` | `yield` `assert` `else` | `import` `pass` `break` `except` | `in` | `raise`