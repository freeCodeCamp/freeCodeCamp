---
title: Python Bool Function
localeTitle: Función Python Bool
---
`bool()` es una función incorporada en Python 3. Esta función devuelve un valor booleano, es decir, Verdadero o Falso. Se necesita un argumento, `x` .

## Argumentos

Se necesita un argumento, `x` . `x` se convierte utilizando el [procedimiento de prueba de verdad](https://docs.python.org/3/library/stdtypes.html#truth) estándar.

## Valor de retorno

Si `x` es falso u omitido, esto devuelve `False` ; De lo contrario, devuelve `True` .

## Ejemplo de código
```
print(bool(4 > 2)) # Returns True as 4 is greater than 2 
 print(bool(4 < 2)) # Returns False as 4 is not less than 2 
 print(bool(4 == 4)) # Returns True as 4 is equal to 4 
 print(bool(4 != 4)) # Returns False as 4 is equal to 4 so inequality doesn't holds 
 print(bool(4)) # Returns True as 4 is a non-zero value 
 print(bool(-4)) # Returns True as -4 is a non-zero value 
 print(bool(0)) # Returns False as it is a zero value 
 print(bool('dskl')) # Returns True as the string is a non-zero value 
 print(bool([1, 2, 3])) # Returns True as the list is a non-zero value 
 print(bool((2,3,4))) # Returns True as tuple is a non-zero value 
 print(bool([])) # Returns False as list is empty and equal to 0 according to truth value testing 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CVCS/2)

[Documentos oficiales](https://docs.python.org/3/library/functions.html#bool)