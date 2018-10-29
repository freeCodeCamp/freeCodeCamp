---
title: PHP Switch
localeTitle: PHP Switch
---
## PHP Switch

La instrucción `switch` en PHP es similar a una serie de instrucciones `if` en la misma expresión. La instrucción de `switch` se utiliza para ejecutar diferentes acciones en diferentes condiciones. La sintaxis de la sentencia `switch` es la siguiente
```
switch (expression) { 
 
    case label1: 
        // code block to be executed if there is a match with result of expression 
        break; 
    case label2: 
        // code block to be executed if there is a match with result of expression 
        break; 
    case label3: 
        // code block to be executed if there is a match with result of expression 
        break; 
    default: 
        // code block to be executed if there is no match with result of expression 
 
 } 
```

Cuando ejecutamos el programa, se evalúa la expresión dentro de la instrucción `switch` . El resultado de esa expresión se verifica con las etiquetas correspondientes si hay una coincidencia y se ejecuta el bloque de `case` correspondiente. Si no se encuentra ninguna coincidencia con ninguna de las declaraciones de caso, solo se ejecutará el bloque de código que sigue al `default` .

Ilustración de la declaración del `switch` con un ejemplo
```
<?php 
 
 $i = 1 
 switch ($i) { 
    case 0: 
        echo "i equals 0"; 
        break; 
    case 1: 
        echo "i equals 1"; 
        break; 
    case 2: 
        echo "i equals 2"; 
        break; 
 } 
 
 ?> 
```

La instrucción `switch` también se puede utilizar sin una instrucción `break` . En ese caso, las declaraciones después de los casos coincidentes se ejecutarán. A continuación se muestra un uso de la instrucción `switch` sin una instrucción `break` .
```
<?php 
 switch ($i) { 
    case 0: 
        echo "i equals 0"; 
    case 1: 
        echo "i equals 1"; 
    case 2: 
        echo "i equals 2"; 
 } 
 ?> 
 
 /*output --> i equals 0i equals 1i equals 2 */ 
```

#### Más información:

[Switch Statement - Documentación PHP](http://php.net/manual/en/control-structures.switch.php)

[Interruptor PHP5 - W3Schools](https://www.w3schools.com/php/php_switch.asp)