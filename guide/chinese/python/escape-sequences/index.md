---
title: Python Escape Sequences
localeTitle: Python转义序列
---
可以在[此处](https://docs.python.org/3/reference/lexical_analysis.html#strings)找到转义序列列表

转义序列允许将特殊字符包含在字符串中。
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

可以通过在字符串前加上`r`或`R`来使用_原始_字符串，这允许包含反斜杠而无需转义它们 -
```
>>> print(r"Backslashes \ don't need to be escaped in raw strings.") 
 Backslashes \ don't need to be escaped in raw strings. 
 >>> print(r"An odd number of backslashes at the end of a raw string will cause an error\") 
  File "<stdin>", line 1 
    print(r"An odd number of backslashes at the end of a raw string will cause an error\") 
                                                                                         ^ 
 SyntaxError: EOL while scanning string literal. 
```

＃转义序列的一些例子。 逃脱序列  
\\打印反斜杠  
\`打印单引号  
“打印双引号  
\\ ASCII铃声响铃铃声（例如xterm） \\ b ASCII退格（BS）删除前一个字符 \\ n添加换行符。