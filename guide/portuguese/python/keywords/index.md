---
title: Python Keywords
localeTitle: Palavras-chave Python
---
## Palavras-chave Python

O Python possui uma lista de [palavras-chave](https://docs.python.org/3/reference/lexical_analysis.html#keywords) que não podem ser usadas como identificadores (nomes de variáveis). Tentar usar qualquer uma dessas palavras-chave como variáveis ​​criará um **erro de sintaxe** e seu script Python não será executado:
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

#### Lista de palavras-chave

Palavra chave | - | - | - | - --- | --- | --- | --- | --- `False` | `class` | `finally` | `is` | `return` `None` | `continue` | `for` | `lambda` | `try` `True` | `def` | `from` | `nonlocal` | `while` `and` | `del` | `global` | `not` | `with` `as` | `elif` | `if` | `or` | `yield` `assert` | `else` | `import` | `pass` `break` | `except` | `in` | `raise`