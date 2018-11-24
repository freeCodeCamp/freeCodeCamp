---
title: PHP Variables
localeTitle: Variables PHP
---

### PHP- Tipos de variables

Las variables son la forma principal de almacenar información en el medio de un programa PHP. Todas las variables en PHP son declaradas con un signo de dólar como `$nombre_de_la_variable` . Las variables se asignan con el `= operador` , con la variable en el lado izquierdo y la expresión a evaluar a la derecha.

### Nombre de variable

Las reglas para nombrar una variable se enumeran a continuación:

1.  Los nombres de las variables deben comenzar con una letra o un carácter de subrayado. 2.El nombre de una variable puede consistir en números, letras, guiones bajos, pero no puede usar caracteres como `+ , - , % , ( , ) . &` en su nombre. 3. Los nombres de las variables distinguen entre mayúsculas y minúsculas, es decir `($edad y $EDAD son dos variables diferentes)` .

### Creando (Declarando) Variables PHP

En PHP, una variable comienza con el signo $, seguido del nombre de la variable. El fragmento de código dado a continuación lo muestra.

`shell <?php $txt = "Hello world!"; $x = 6; $y = 10.5; ?>`
