---
title: String Find Method
localeTitle: Método de búsqueda de cadenas
---
## Método de búsqueda de cadenas

Hay dos opciones para encontrar una subcadena dentro de una cadena en Python, `find()` y `rfind()` .

Cada uno devolverá la posición en la que se encuentra la subcadena. La diferencia entre los dos es que `find()` devuelve la posición más baja, y `rfind()` devuelve la posición más alta.

Se pueden proporcionar argumentos opcionales de inicio y fin para limitar la búsqueda de la subcadena a partes de la cadena.

Ejemplo:

```shell
>>> string = "Don't you call me a mindless philosopher, you overweight glob of grease!" 
 >>> string.find('you') 
 6 
 >>> string.rfind('you') 
 42 
```

Si no se encuentra la subcadena, se devuelve -1.

```shell
>>> string = "Don't you call me a mindless philosopher, you overweight glob of grease!" 
 >>> string.find('you', 43)  # find 'you' in string anywhere from position 43 to the end of the string 
 -1 
```

Más información:

Cadena de [documentación de los](https://docs.python.org/3/library/stdtypes.html#string-methods) métodos.