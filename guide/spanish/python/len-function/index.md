---
title: Python Len Function
localeTitle: Función de Python Len
---
`len()` es una función incorporada en Python 3. Este método devuelve la longitud (el número de elementos) de un objeto. Se necesita un argumento `x` .

## Argumentos

Se necesita un argumento, `x` . Este argumento puede ser una secuencia (como una cadena, bytes, tupla, lista o rango) o una colección (como un diccionario, conjunto o conjunto congelado).

## Valor de retorno

Esta función devuelve el número de elementos en el argumento que se pasa a la función `len()` .

## Ejemplo de código
```
list1 = [123, 'xyz', 'zara'] # list 
 print(len(list1)) # prints 3 as there are 3 elements in the list1 
 
 str1 = 'basketball' # string 
 print(len(str1)) # prints 10 as the str1 is made of 10 characters 
 
 tuple1 = (2, 3, 4, 5) # tuple 
 print(len(tuple1)) # prints 4 as there are 4 elements in the tuple1 
 
 dict1 = {'name': 'John', 'age': 4, 'score': 45} # dictionary 
 print(len(dict1)) # prints 3 as there are 3 key and value pairs in the dict1 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CUmt/15)

[Documentos oficiales](https://docs.python.org/3/library/functions.html#len)