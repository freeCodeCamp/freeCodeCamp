---
title: Switch Statements
localeTitle: Cambiar declaraciones
---
## Cambiar declaraciones

Las instrucciones de conmutación ejecutan bloques de código en función del valor de una condición.

### Sintaxis:

```PHP
switch(x) { 
  case 1: 
    statement1; 
    break; 
   case 2: 
     statement2; 
     break; 
   default: 
     defaultstatement; 
 } 
```

En el ejemplo anterior, x es la condición. Las declaraciones posteriores al caso que coincidan serán ejecutadas. Si no hay coincidencias, se ejecutarán las instrucciones predeterminadas.

La palabra clave `break` se utiliza para finalizar cada caso.

### Más información:

[PHP Switch](http://php.net/manual/en/control-structures.switch.php)