---
title: Basic Syntax
localeTitle: Sintaxis basica
---
# Sintaxis basica

Un script PHP se puede colocar en cualquier parte del documento.

Un script PHP comienza con `<?php` y termina con `?>`

A continuación, tenemos un ejemplo de un archivo PHP simple, con un script PHP que utiliza una función de PHP "echo" para generar el texto "Hola Mundo!" en una página web


# Mi primera página PHP
```

La ejecución del script muestra: 

```

Mi primera página PHP

Hola Mundo!
```
#### Nota: Las instrucciones de PHP terminan con punto y coma (;). 
 
 # Comentarios en PHP
 
 PHP soporta varia sintaxis de comentarios: 
 
 // Este es un ejemplo de comentario en línea
 
 #  Este es otro ejemplo de comentario en línea
 
 /* Este es un ejemplo
    de comentario
    en varias líneas */
```

```
# Sensibilidad a mayúsculas/minúsculas en PHP
 
 En PHP, todas las palabras clave (p.ej. if, else, while, echo, etc.), clases, funciones, y funciones definidas por el usuario NO son sensibles a mayúsculas o minúsculas. 
 
 En el ejemplo de abajo, las tres ejecuciones de echo son válidas:
 
 echo "Hola mundo!"; // Hola mundo!
 eCHo "Hola mundo!"; // Hola mundo!
 ECHO "Hola mundo!"; // Hola mundo!
```

```
### Sin embargo; los nombres de variables sí son sensibles. 

 En el ejemplo de abajo, solamente la primera línea mostrará el valor de la variable $color (porque $color, $COLOR y $coLOR se tratan como tres variables diferentes):
 
 $color = "rojo";
 
 echo $color; // rojo
 echo $COLOR; // Notice: Undefined variable: COLOR
 echo $coLOR; // Notice: Undefined variable: coLOR
 
```

