---
title: The Python Strings
localeTitle: Строки Python
---
Python позволяет `str` объектам или _строкам_ выражаться несколькими способами:

*   Одиночные кавычки: `'Single quote strings can have "double" quotes inside.'`
    
*   Двойные кавычки: `"Double quote strings can have 'single' quotes inside."` двойными кавычками `"Double quote strings can have 'single' quotes inside."`
    
*   Тройные кавычки:
    
    ```
    """Triple quoted strings can span multiple lines. 
     Unescaped "double" and 'single' quotes in triple quoted strings are retained.""" 
     
     '''Triple quoted strings can be 'single'or "double" quotes. 
     Unescaped newlines are also retained.''' 
    
    ```
    
*   Неизменяемость: вы не можете напрямую редактировать / изменять строку Python после ее создания. Например, если вы попытаетесь напрямую переназначить / изменить первую букву в строке, возникает ошибка.
    
    ```
    >>> foo = "my string" 
     >>> foo[0] = "a" 
     Traceback (most recent call last): 
            File "<stdin>", line 1, in <module> 
     TypeError: 'str' object does not support item assignment 
    
    ```
    

## Справка:

[Тип текстовой последовательности _str_](https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str)
