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
print(bool(4 > 2)) # Regresa True (Verdad) porque 4 es mayor que 2
 print(bool(4 < 2)) # Regresa False (Falso) porque 4 no es menor que 2
 print(bool(4 == 4)) # Regresa True (Verdad) porque 4 es igual a 4
 print(bool(4 != 4)) # Regresa False (False) porque 4 es igual a 4 y la desigualdad no se sostiene.
 print(bool(4)) # Regresa True (Verdad) porque 4 es un valor verdadero (no es igual a 0)
 print(bool(-4)) # Regresa True (Verdad) porque -4 es un valor verdadero (no es igual a 0)
 print(bool(0)) # Regresa False (Falso) porque 0 es un valor Falso en Python.
 print(bool('dskl')) # Regresa True (Verdad) porque una cadena de caracteres (string) es un valor existente no-falso.
 print(bool([1, 2, 3])) # Regresa True (Verdad) porque una lista con valores es un valor existente no-falso.
 print(bool((2,3,4))) # Regresa True (Verdad) porque una tupla con valores es un valor existente no-falso.
 print(bool([])) # Regresa False (Falso) porque una lista vacia es un valor Falso en Python.
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CVCS/2)

[Documentos oficiales](https://docs.python.org/3/library/functions.html#bool)
