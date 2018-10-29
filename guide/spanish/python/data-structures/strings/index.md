---
title: The Python Strings
localeTitle: Las cuerdas de Python
---
Python permite que los objetos `str` , o _cadenas_ , se expresen de diferentes maneras:

*   Comillas simples: `'Single quote strings can have "double" quotes inside.'`
    
*   Comillas dobles: `"Double quote strings can have 'single' quotes inside."`
    
*   Triple citado:
    
    ```
    """Triple quoted strings can span multiple lines. 
     Unescaped "double" and 'single' quotes in triple quoted strings are retained.""" 
     
     '''Triple quoted strings can be 'single'or "double" quotes. 
     Unescaped newlines are also retained.''' 
    
    ```
    
*   Inmutable: no puede editar / cambiar directamente una cadena Python después de haberla creado. Por ejemplo, si intenta reasignar / cambiar directamente la primera letra de una cadena, se produce un error.
    
    ```
    >>> foo = "my string" 
     >>> foo[0] = "a" 
     Traceback (most recent call last): 
            File "<stdin>", line 1, in <module> 
     TypeError: 'str' object does not support item assignment 
    
    ```
    

## Referencia:

[Tipo de secuencia de texto _str_](https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str)