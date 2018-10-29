---
title: Python Min Function
localeTitle: Función Min de Python
---
`min()` es una función incorporada en Python 3. Devuelve el elemento más pequeño en un iterable o el más pequeño de dos o más argumentos.

## Argumentos

Esta función toma dos o más números o cualquier tipo de iterable como argumento. Al dar un iterable como argumento, debemos asegurarnos de que todos los elementos en el iterable sean del mismo tipo. Esto significa que no podemos pasar una lista que tenga valores de cadena y enteros almacenados en ella.

Argumentos válidos:
```
min(2, 3) 
 min([1, 2, 3]) 
 min('a', 'b', 'c') 
```

Argumentos inválidos:
```
min(2, 'a') 
 min([1, 2, 3, 'a']) 
 min([]) 
```

## Valor de retorno

Se devuelve el artículo más pequeño en el iterable. Si se proporcionan dos o más argumentos posicionales, el más pequeño de los argumentos posicionales  
es regresado. Si el iterable está vacío y no se proporciona el valor predeterminado, se genera un ValueError.

## Ejemplo de código
```
print(min(2, 3)) # Returns 2 as 2 is the smallest of the two values 
 print(min(2, 3, -1)) # Returns -1 as -1 is the smallest of the two values 
 
 list1 = [1, 2, 4, 5, -54] 
 print(min(list1)) # Returns -54 as -54 is the smallest value in the list 
 
 list2 = ['a', 'b', 'c' ] 
 print(min(list2)) # Returns 'a' as 'a' is the smallest in the list in alphabetical order 
 
 list3 = [1, 2, 'abc', 'xyz'] 
 print(min(list3)) # Gives TypeError as values in the list are of different type 
 
 #Fix the TypeError mentioned above first before moving on to next step 
 
 list4 = [] 
 print(min(list4)) # Gives ValueError as the argument is empty 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CVir/4)

[Documentos oficiales](https://docs.python.org/3/library/functions.html#min)