---
title: String Strip Method
localeTitle: Método de tira de cadena
---
## Método de tira de cadena

Hay tres opciones para eliminar caracteres de una cadena en Python, `lstrip()` , `rstrip()` y `strip()` .

Cada uno devolverá una copia de la cadena con los caracteres eliminados, desde el principio, el final o el principio y el final. Si no se dan argumentos, el valor predeterminado es quitar los caracteres de espacio en blanco.

Ejemplo:

```py
>>> string = '   Hello, World!    ' 
 >>> strip_beginning = string.lstrip() 
 >>> strip_beginning 
 'Hello, World!    ' 
 >>> strip_end = string.rstrip() 
 >>> strip_end 
 '   Hello, World!' 
 >>> strip_both = string.strip() 
 >>> strip_both 
 'Hello, World!' 
```

Se puede proporcionar un argumento opcional como una cadena que contiene todos los caracteres que desea eliminar.

```py
>>> url = 'www.example.com/' 
 >>> url.strip('w./') 
 'example.com' 
```

Sin embargo, note que solo la primera `.` Me despojaron de la cuerda. Esto se debe a que la función de `strip` solo elimina los argumentos que se encuentran a la izquierda o la derecha. Desde w viene antes de la primera `.` se despojan juntos, mientras que 'com' está presente en el extremo derecho antes de `.` despues de pelar `/`

#### Más información:

Cadena de [documentación de los](https://docs.python.org/3/library/stdtypes.html#string-methods) métodos.