---
title: PHP Variable Basics
localeTitle: Conceptos básicos de variables de PHP
---
Las variables permiten a los programadores usar datos a través de un script PHP.

En PHP, las variables siempre comienzan con un símbolo `$` seguido del nombre de la variable. Solo las letras, los números (pueden no ser el primer carácter) y los guiones bajos pueden componer el nombre de una variable.

Por ejemplo, `$my_variable` , `$anotherVariable` y `$the2ndVariable` permiten nombres de variables válidos.

Los nombres de las variables distinguen entre mayúsculas y minúsculas. `$my_variable` es diferente de `$My_Variable` que es diferente de `$mY_vARiAblE` .

Antes de poder utilizar una variable, debe tener un valor asignado.

```PHP
    <?php 
    $my_number = 1; 
    echo($my_number); 
 
    >>> 1 
```

En el ejemplo anterior, la variable es `$my_number` . El valor asignado a él fue el número `1` . La variable se pasó luego como parámetro a la función de `echo` , que envía el valor a la línea de comando.