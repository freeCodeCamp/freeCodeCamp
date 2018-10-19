---
title: Python Escape Sequences
localeTitle: Последовательности выхода Python
---
Список escape-последовательностей можно найти [здесь](https://docs.python.org/3/reference/lexical_analysis.html#strings)

Последовательности эвакуации позволяют включать специальные символы в строки.
```
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
```

_Необработанную_ строку можно использовать, префикс строки с `r` или `R` которая позволяет включать обратную косую черту без необходимости их избегать -
```
>>> print(r"Backslashes \ don't need to be escaped in raw strings.") 
 Backslashes \ don't need to be escaped in raw strings. 
 >>> print(r"An odd number of backslashes at the end of a raw string will cause an error\") 
  File "<stdin>", line 1 
    print(r"An odd number of backslashes at the end of a raw string will cause an error\") 
                                                                                         ^ 
 SyntaxError: EOL while scanning string literal. 
```

#Достаточно больше примеров escape-последовательностей. Escape Sequence  
\\ Печать обратной косой черты  
\`Печать одной кавычки  
\\ "Печать двойной кавычки  
\\ a Колокол ASCII вызывает звуковые сигналы звонка (например, xterm) \\ b ASCII backspace (BS) удаляет предыдущий символ \\ n Добавляет новую строку.