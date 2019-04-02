---
title: Python Escape Sequences
localeTitle: Secuencias de escape de Python
---
Una lista de secuencias de escape se puede encontrar [aquí](https://docs.python.org/3/reference/lexical_analysis.html#strings)

Las secuencias de escape permiten incluir caracteres especiales en las cadenas.
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

Se puede usar una cadena en _bruto_ prefijando la cadena con `r` o `R` que permite que se incluyan barras invertidas sin la necesidad de escapar de ellas.
```
>>> print(r"Backslashes \ don't need to be escaped in raw strings.") 
 Backslashes \ don't need to be escaped in raw strings. 
 >>> print(r"An odd number of backslashes at the end of a raw string will cause an error\") 
  File "<stdin>", line 1 
    print(r"An odd number of backslashes at the end of a raw string will cause an error\") 
                                                                                         ^ 
 SyntaxError: EOL while scanning string literal. 
```

\# Algunos ejemplos más de secuencias de escape. Secuencia de escape  
\\ Imprime la barra invertida  
\`Imprime una sola cita  
\\ "Imprime comillas dobles  
\\ una campana ASCII hace sonar los sonidos de alerta de campana (por ejemplo, xterm) \\ b ASCII retroceso (BS) elimina el carácter anterior \\ n agrega nueva linea