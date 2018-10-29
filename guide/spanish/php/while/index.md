---
title: While Loop
localeTitle: Bucle While
---
## Bucle While

Un bucle `while` ejecuta las sentencias contenidas dentro de su bloque, siempre y cuando cumpla la condición definida.

### Sintaxis:

```php
$x = 0; 
 while ($x < 11) {
    echo "Ejecución número " . $x . "<br />; 
    $x++; 
 } 
 
 /* Salida
 ----------------------
    Ejecución número 0
    Ejecución número 1
    Ejecución número 2
    Ejecución número 3
    Ejecución número 4
    Ejecución número 5
    Ejecución número 6
    Ejecución número 7
    Ejecución número 8
    Ejecución número 9
    Ejecución número 10
-----------------------
*/
```

**Nota:** El código de bloque debe tener alguna declaración para cambiar o incrementar la condición. De lo contrario podría resultar un bucle infinito.

### Más información:

[PHP Bucle While](http://php.net/manual/es/control-structures.while.php)
