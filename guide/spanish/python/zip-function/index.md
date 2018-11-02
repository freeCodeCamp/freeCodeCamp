---
title: Python Zip Function
localeTitle: Función Zip Python
---
`zip()` es una función incorporada en Python que devuelve una lista de tuplas. La nth tupla tendrá el nth elemento de cada uno de los argumentos iterables. Si los argumentos en la secuencia son de longitudes desiguales, devolverá una lista truncada a la longitud del iterable más corto.

## Argumento

Cualquier número de iterables separados por comas.

## Valor de retorno

Una lista de la tupla del elemento nth de todas las secuencias

## Ejemplo de código
```
nums = [1,2,3,4] 
 print(*nums) # prints 1 2 3 4 
 numsAndNames = zip([1,2,3],['one','two','three']) 
 print(*numsAndNames) # prints (1,'one') (2,'two') (3,'three') 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/@StuffsExplained/pythonZipFunction)

[Documentos oficiales - Python 3](https://docs.python.org/3.3/library/functions.html#zip)

[Documentos oficiales - Python 2.7](https://docs.python.org/2/library/functions.html#zip)