---
title: The Python Strings
localeTitle: As cordas do Python
---
O Python permite que objetos `str` , ou _strings_ , sejam expressos de algumas maneiras diferentes:

*   Aspas simples: `'Single quote strings can have "double" quotes inside.'`
    
*   Aspas duplas: `"Double quote strings can have 'single' quotes inside."`
    
*   Triplo citado:
    
    ```
    """Triple quoted strings can span multiple lines. 
     Unescaped "double" and 'single' quotes in triple quoted strings are retained.""" 
     
     '''Triple quoted strings can be 'single'or "double" quotes. 
     Unescaped newlines are also retained.''' 
    
    ```
    
*   Imutável: Você não pode editar / alterar diretamente uma string do Python depois de criá-la. Por exemplo, se você tentar reatribuir / alterar diretamente a primeira letra de uma string, um erro será lançado.
    
    ```
    >>> foo = "my string" 
     >>> foo[0] = "a" 
     Traceback (most recent call last): 
            File "<stdin>", line 1, in <module> 
     TypeError: 'str' object does not support item assignment 
    
    ```
    

## Referência:

[Tipo de Sequência de Texto _str_](https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str)