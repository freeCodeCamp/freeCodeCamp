---
title: Exceptions and Errors Handling
localeTitle: Excepciones y manejo de errores.
---
## Excepciones y manejo de errores.

Al crear un programa, podemos cometer errores que terminan con errores y los peores programas que hacemos dejan de ejecutarse, sería aún más molesto si no pudiéramos encontrar errores en el código que cometimos o en lo que estaba mal. En palabras simples, los errores son algo que los programadores evitan al hacer un programa. Para resolver este problema en Python podemos usar `try` y `except`

Ejemplo:

```shell
>>> try: 
 >>> . . . print "this is not a string "+1 
 >>> except: 
 >>> . . . print "error" 
 error 
```

y si desea obtener mensajes de error más detallados de su código, puede agregar argumentos `except Exception as err`

```shell
>>> try: 
 >>> . . . print "this is not a string "+1 
 >>> except Exception as err: 
 >>> . . . print "error:\n"+str(err) 
 error: 
 cannot concatenate 'str' and 'int' objects 
```

Más información:

[Documentación de](https://docs.python.org/2/tutorial/errors.html) errores y excepciones.