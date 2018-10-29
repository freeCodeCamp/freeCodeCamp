---
title: While Loop
localeTitle: Mientras bucle
---
## Mientras bucle

El `while loop` es uno de los tipos de bucle más fáciles de PHP. Ejecuta el bloque de instrucciones hasta que la expresión se evalúe como **VERDADERA** . Si el valor de la expresión cambia en el momento de la ejecución, entonces el bucle se ejecuta hasta que la expresión se convierta en **FALSO** . La forma básica de bucle mientras está dada a continuación:

```shell
while (expr) 
    statement 
```

Las declaraciones dentro del bucle while se pueden incluir entre llaves o se pueden usar según la siguiente sintaxis:

```shell
while (expr): 
    statement 
    ... 
 endwhile; 
```

Ilustrando la sintaxis simple y alternativa del bucle while usando el ejemplo:

```php
<?php 
 
 /* using the simple form of while loop */ 
 
 $i = 1;  /* initialisation part */ 
 
 while ($i <= 100 && $i!=5 ) 
 { 
    echo $i++; 
 } 
 
 /*using the alternate synatx of while loop*/ 
 
 $i = 0; 
 
 while ($i <= 10): 
    echo $i++; 
 endwhile; 
 
 ?> 
```

#### Más información

[While loop - Documentación PHP](http://php.net/manual/en/control-structures.while.php)