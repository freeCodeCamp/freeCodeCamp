---
title: Python Keywords
localeTitle: Ключевые слова Python
---
## Ключевые слова Python

В Python есть список [ключевых слов,](https://docs.python.org/3/reference/lexical_analysis.html#keywords) которые нельзя использовать в качестве идентификаторов (имена переменных). Попытка использовать любое из этих ключевых слов в качестве переменных приведет к созданию **ошибки синтаксиса,** и ваш скрипт Python не будет запущен:
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

#### Список ключевых слов

Ключевое слово | - | - | - | - --- | --- | --- | --- | --- `False` | `class` | `finally` | `is` | `return` `None` | `continue` | `for` | `lambda` | `try` `True` | `def` | `from` | `nonlocal` | `while` `and` | `del` | `global` | `not` | `with` `as` | `elif` | `if` | `or` | `yield` `assert` | `else` | `import` | `pass` `break` | `except` | `in` | `raise`