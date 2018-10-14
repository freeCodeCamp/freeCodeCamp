---
title: List Index Method
localeTitle: Método de índice de lista
---
## Método de índice de lista

Entre las muchas funciones que vienen junto con la estructura de datos de la lista, el `index()` devuelve la primera aparición / índice del elemento en la lista dada como un argumento a la función.

Las listas son la estructura de datos de Python más básica y almacenan una lista de valores en orden (en comparación con los diccionarios, el orden no importa). Recuperamos los artículos por índice numérico.

Teniendo en cuenta el hecho de que la indexación comienza desde 0, o se considera que el primer elemento se encuentra en el índice 0, veamos algunos ejemplos.

#### Ejemplo de uso:

```py
numbers = [1, 2, 2, 3, 9, 5, 6, 10] 
 words = ["I", "love", "Python", "I", "love"] 
 
 print(numbers.index(9)) 
 print(numbers.index(2)) 
 print(words.index("I")) 
 print(words.index("am")) 
```

##### Salida:

```py
4 
 1 
 0 
 Traceback (most recent call last): 
  File "<stdin>", line 1, in <module> 
 ValueError: 'am' is not in list 
```

Aquí la primera salida es muy obvia, pero la segunda y la tercera pueden parecer confusas al principio. Pero recuerda que `index()` devuelve la primera aparición del elemento y, por lo tanto, en este caso `1` y `0` son los índices donde `2` y `"I"` aparecen primero en las listas respectivamente.

Además, si un elemento no se encuentra en la lista, se devuelve un `ValueError` como en el caso de la indexación `"am"` en la lista de `words` .

#### Argumentos opcionales:

También puede usar argumentos opcionales para limitar su búsqueda a una subsecuencia particular de la lista como se ilustra en este ejemplo:

```py
words = ["I","am", "a", "I", "am", "Pythonista"] 
 
 print(words.index("am",2,5)) 
```

##### Salida:
```
4 
```

Aquí, aunque el elemento se busca entre los índices 2 (inclusive) y 5 (no incluido), el índice devuelto se calcula en relación con el principio de la lista completa en lugar del argumento de inicio.

#### Más información:

La documentación oficial de `index()` se puede encontrar [aquí.](https://docs.python.org/3.6/tutorial/datastructures.html)