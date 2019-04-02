---
title: Python Keywords
localeTitle: Python关键字
---
## Python关键字

Python有一个不能用作标识符（变量名）的[关键字](https://docs.python.org/3/reference/lexical_analysis.html#keywords)列表。尝试将这些关键字中的任何一个用作变量将创建**语法错误，**并且不会运行您的Python脚本：
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

#### 关键字列表

关键字| - | - | - | - --- | --- | --- | --- | --- `False` | `class` | `finally` | `is` | `return` `None` | `continue` | `for` | `lambda` | `try` `True` `def` | `from` | `nonlocal` `while` `and` | `del` | `global` | `not` | `with` `as` | `elif` | `if` | `or` `yield` `assert` | `else` | `import` | `pass` `break` | `except` | `in` | `raise`