---
title: Python from X Import Y
localeTitle: Python de X Import Y
---
Si ha leído el wiki de `import statements` entonces me habría visto usar esta declaración en uno de los ejemplos. Hoy, trataremos de entender lo que hace.

Así que recogiendo el mismo ejemplo:
```
>>> from math import ceil, sqrt 
 >>> # here it would be 
 >>> sqrt(36) 
 <<< 6 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CS5t/1)

O podríamos usar esto:
```
>>> import math 
 >>> # here it would be 
 >>> math.sqrt(36) 
 <<< 6 
```

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":cohete:") [Ejecutar código](https://repl.it/CS5u)

Entonces nuestro código se vería como `math.sqrt(x)` lugar de `sqrt(x)` . Esto sucede porque cuando usamos `import x` , se crea un espacio de nombres `x` para evitar conflictos de nombre. Tienes que acceder a cada objeto del módulo como `x.<name>` . Pero cuando usamos `from x import y` aceptamos agregar `y` al espacio de nombres global principal. Entonces, al usar esto, debemos asegurarnos de que no tenemos un objeto con el mismo nombre en nuestro programa.

> **Nunca use `from x import y` si ya existe un objeto llamado `y`**

Por ejemplo, en el módulo `os` hay un método `open` . Pero incluso tenemos una función incorporada llamada `open` . Por lo tanto, aquí deberíamos evitar el uso `from os import open` .

Incluso podemos usar `form x import *` , esto importaría todos los métodos, clases de ese módulo al espacio de nombres global del programa. Esta es una mala práctica de programación. Por favor, evítalo.

En general, debe evitar la `from x import y` simplemente por los problemas que puede causar en programas a gran escala. Por ejemplo, nunca se sabe si un compañero programador podría querer hacer una nueva función que sea el nombre de una de las funciones existentes. Tampoco sabe si Python cambiará la biblioteca desde la que está importando funciones. Si bien estos problemas no existirán tan a menudo para los proyectos en solitario, como se dijo anteriormente, es una mala práctica de programación y debe evitarse.