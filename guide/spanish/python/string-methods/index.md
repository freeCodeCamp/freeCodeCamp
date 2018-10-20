---
title: String Methods
localeTitle: Métodos de cuerda
---
**TODO: `string` información básica**

[Python Docs - Cuerdas](https://docs.python.org/3/library/stdtypes.html#strings)

**Creación:**

Una `string` vacía se crea utilizando un par de comillas o apóstrofes:

```shell
>>> new_string = '' 
 >>> type(new_string) 
 <class 'string'> 
 >>> len(new_string) 
 0 
```

[Python Docs - Más sobre cuerdas](https://docs.python.org/3/tutorial/datastructures.html#more-on-strings)

*   `string.find('you')` Devuelve la posición más baja en la que se encuentra la subcadena.
    
*   `str.join(iterable)` Une todos los elementos en un `iterable` con una cadena especificada.
    
*   `str.replace(old, new, max)` se usa para reemplazar la subcadena `old` con la cadena `new` por un total de `max` veces. Este método devuelve una nueva copia de la cadena con el reemplazo, y la `str` original no se modifica.
    
*   `string.split(separator, maxsplit)` Devuelve una lista de subcadenas delimitadas por el `separator` , un número de `maxsplit` opcional de veces, y si no se especifica, la cadena se dividirá en todas las instancias del `separator` .
    
*   `string.strip(to_strip)` Devuelve una cadena con `to_strip` eliminada tanto del principio como del final de la cadena. Si no se especifica `to_strip` , esto eliminará todos los caracteres de espacio en blanco.