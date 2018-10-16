---
title: Python Defining Functions
localeTitle: Python Definindo Funções
---
[Documentos em Python](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

Podemos criar uma função que grava a série Fibonacci em um limite arbitrário:
```
>>> def fib(n):    # write Fibonacci series up to n 
 ...     """Print a Fibonacci series up to n.""" 
 ...     a, b = 0, 1 
 ...     while a < n: 
 ...         print(a, end=' ') 
 ...         a, b = b, a+b 
 ...     print() 
 ... 
 >>> # Now call the function we just defined: 
 ... fib(2000) 
 0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 
```

A palavra-chave [`def`](https://docs.python.org/3/reference/compound_stmts.html#def) introduz uma definição de função. Deve ser seguido pelo nome da função e pela lista de parâmetros formais entre parênteses. As instruções que formam o corpo da função começam na próxima linha e devem ser recuadas.

A primeira instrução do corpo da função pode ser opcionalmente uma string literal; este string literal é a string de documentação da função, ou [docstring](https://www.python.org/dev/peps/pep-0257/) (mais sobre docstrings podem ser encontradas na seção Documentation Strings). Algumas ferramentas usam docstrings para produzir automaticamente documentação on-line ou impressa ou para permitir que o usuário navegue interativamente pelo código. É uma boa prática incluir docstrings no código que você escreve, então tente fazer disso um hábito.