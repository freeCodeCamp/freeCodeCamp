---
title: The Python Strings
localeTitle: Python字符串
---
Python允许`str`对象或_字符串_以几种不同的方式表达：

*   单引号： `'Single quote strings can have "double" quotes inside.'`
    
*   双引号： `"Double quote strings can have 'single' quotes inside."`
    
*   三重引用：
    
    ```
    """Triple quoted strings can span multiple lines. 
     Unescaped "double" and 'single' quotes in triple quoted strings are retained.""" 
     
     '''Triple quoted strings can be 'single'or "double" quotes. 
     Unescaped newlines are also retained.''' 
    
    ```
    
*   不可变：创建后不能直接编辑/更改Python字符串。例如，如果您尝试直接重新分配/更改字符串中的第一个字母，则会引发错误。
    
    ```
    >>> foo = "my string" 
     >>> foo[0] = "a" 
     Traceback (most recent call last): 
            File "<stdin>", line 1, in <module> 
     TypeError: 'str' object does not support item assignment 
    
    ```
    

## 参考：

[文本序列类型_str_](https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str)