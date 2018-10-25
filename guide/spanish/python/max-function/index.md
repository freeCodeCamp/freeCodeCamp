---
title: Python Max Function
localeTitle: Función Max Python
---
`max()` es una función incorporada en Python 3. Devuelve el elemento más grande en un iterable o el más grande de dos o más argumentos.

## Argumentos

Esta función toma dos o más números o cualquier tipo de iterable como argumento. Al dar un iterable como argumento, debemos asegurarnos de que todos los elementos en el iterable sean del mismo tipo. Esto significa que no podemos pasar una lista que tenga valores de cadena y enteros almacenados en ella. Sintaxis: max (iterable, \* iterables \[, clave, predeterminado\]) max (arg1, arg2, \* args \[, tecla\])

Argumentos válidos:
```
max(2, 3) 
 max([1, 2, 3]) 
 max('a', 'b', 'c') 
```

Argumentos inválidos:
```
max(2, 'a') 
 max([1, 2, 3, 'a']) 
 max([]) 
```

## Valor de retorno

Se devuelve el artículo más grande en el iterable. Si se proporcionan dos o más argumentos posicionales, se devuelve el mayor de los argumentos posicionales. Si el iterable está vacío y no se proporciona el valor predeterminado, se `ValueError` un `ValueError` .

## Ejemplo de código
```
print(max(2, 3)) # Returns 3 as 3 is the largest of the two values 
 print(max(2, 3, 23)) # Returns 23 as 23 is the largest of all the values 
 
 list1 = [1, 2, 4, 5, 54] 
 print(max(list1)) # Returns 54 as 54 is the largest value in the list 
 
 list2 = ['a', 'b', 'c' ] 
 print(max(list2)) # Returns 'c' as 'c' is the largest in the list because c has ascii value larger then 'a' ,'b'. 
 
 list3 = [1, 2, 'abc', 'xyz'] 
 print(max(list3)) # Gives TypeError as values in the list are of different type 
 
 #Fix the TypeError mentioned above first before moving on to next step 
 
 list4 = [] 
 print(max(list4)) # Gives ValueError as the argument is empty 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CVok)

[Documentos oficiales](https://docs.python.org/3/library/functions.html#max)