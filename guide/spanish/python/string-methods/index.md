---
title: String Methods
localeTitle: Métodos String
---
**TODO: información básica sobre `string`**

[Python Docs - Strings](https://docs.python.org/3/library/stdtypes.html#strings)

**Creación:**

Una `string` vacía se crea utilizando un par de comillas o apóstrofes:
```shell
>>> new_string = '' 
 >>> type(new_string) 
 <class 'string'> 
 >>> len(new_string) 
 0 
```

[Python Docs - Más sobre Strings](https://docs.python.org/3/tutorial/datastructures.html#more-on-strings)

* `string.find('you')` Devuelve la posición más baja en la que se encuentra la *substring*.
    
* `str.join(iterable)` Une todos los elementos en un `iterable` con una *string* especificada.
    
* `str.replace(old, new, max)` se usa para reemplazar la *substring* `old` con la *string* `new` por un total de `max` veces. Este método devuelve una nueva copia de la *string* con el reemplazo, y la `str` original no se modifica.
    
* `string.split(separator, maxsplit)` Devuelve una lista de *substrings* delimitadas por el `separator` , un número de `maxsplit` opcional de veces, y si no se especifica, la *string* se dividirá en todas las instancias del `separator`.
    
* `string.strip(to_strip)` Devuelve una *string* con `to_strip` eliminado tanto del principio como del final de la *string*. Si no se especifica `to_strip`, esto eliminará todos los caracteres en blanco.
