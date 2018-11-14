---
title: Python Escape Sequences
localeTitle: Seqüências de Escape Python
---
Uma lista de seqüências de escape pode ser encontrada [aqui](https://docs.python.org/3/reference/lexical_analysis.html#strings)

As seqüências de escape permitem incluir caracteres especiais em seqüências de caracteres.
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

Uma string _raw_ pode ser usada prefixando a string com `r` ou `R` que permite que barras invertidas sejam incluídas sem a necessidade de escapar delas.
```
>>> print(r"Backslashes \ don't need to be escaped in raw strings.") 
 Backslashes \ don't need to be escaped in raw strings. 
 >>> print(r"An odd number of backslashes at the end of a raw string will cause an error\") 
  File "<stdin>", line 1 
    print(r"An odd number of backslashes at the end of a raw string will cause an error\") 
                                                                                         ^ 
 SyntaxError: EOL while scanning string literal. 
```

#Alguns exemplos de seqüências de escape. Sequência de fuga  
\\ Prints Backslash  
\`Impressões simples-citação  
\\ "Imprime aspas duplas  
\\ um sino ASCII faz soar a campainha sons de alerta (ex. xterm) \\ b ASCII backspace (BS) remove o caractere anterior \\ n Adiciona nova linha.