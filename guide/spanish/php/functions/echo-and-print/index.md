---
title: Echo and Print
localeTitle: Eco y estampa
---
## Eco y estampa

Las funciones de eco e impresión proporcionan una manera de escribir el valor de una variable o argumento en la pantalla.

### eco

La función `echo()` escribe el valor de una variable o argumento en la pantalla.

```PHP
<?php 
 echo "freeCodeCamp"; 
```

NOTA: Una forma breve de abrir la etiqueta PHP y el eco es <? =
```
<?= "freeCodeCamp"; ?> 
```

### impresión

La función `print()` elimina el valor de una variable o argumento en la pantalla.

```PHP
<?php 
 print "freeCodeCamp"; 
```

### print\_r

La función `print_r()` escribe el valor de cualquier variable (como una matriz) o un argumento en la pantalla, a diferencia de las funciones de eco o impresión que son más limitadas.

```PHP
<?php 
 $freecodecamp = "freeCodeCamp"; 
 print_r($freecodecamp); 
```

#### Más información:

*   [php.net echo () manual](https://secure.php.net/manual/en/function.echo.php)
*   [php.net print () manual](https://secure.php.net/manual/en/function.print.php)
*   [php.net print\_r () manual](https://secure.php.net/manual/en/function.print-r.php)