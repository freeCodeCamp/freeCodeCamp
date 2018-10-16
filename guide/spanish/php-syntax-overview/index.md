---
title: PHP Syntax Overview
localeTitle: Resumen de la sintaxis de PHP
---
Este capítulo le dará una idea de la sintaxis muy básica de PHP y muy importante para fortalecer su base de PHP.

### Escapando a PHP

El motor de análisis de PHP necesita una forma de diferenciar el código PHP de otros elementos en la página. El mecanismo para hacerlo se conoce como 'escapar a PHP'. Hay cuatro maneras de hacer esto:

#### Etiquetas PHP canónicas

El estilo de etiqueta PHP más efectivo universalmente es -
```
<?php...?> 
```

Si utiliza este estilo, puede estar seguro de que sus etiquetas siempre se interpretarán correctamente.

#### Etiquetas de apertura corta (estilo SGML)

Las etiquetas cortas o abiertas se ven así:
```
<?...?> 
```

Las etiquetas cortas son, como uno podría esperar, la opción más corta. Debe hacer una de dos cosas para permitir que PHP reconozca las etiquetas:

Elija la opción de configuración --enable-short-tags cuando esté compilando PHP.

Establezca la configuración de etiqueta _abierta_ corta en su archivo php.ini en activado. Esta opción debe estar deshabilitada para analizar XML con PHP porque la misma sintaxis se usa para las etiquetas XML.

#### Etiquetas de estilo ASP

Las etiquetas de estilo ASP imitan las etiquetas utilizadas por las páginas Active Server para delinear los bloques de código. Las etiquetas de estilo ASP se ven así:
```
<%...%> 
```

Para usar etiquetas de estilo ASP, deberá configurar la opción de configuración en su archivo php.ini.

#### Etiquetas de script HTML

Las etiquetas de script HTML se ven así:
```
<script language="PHP">...</script> 
```

### Comentando el código PHP

Un comentario es la parte de un programa que existe solo para el lector humano y se elimina antes de mostrar el resultado de los programas. Hay dos formatos de comentarios en PHP:

#### Comentarios de una sola línea -

Generalmente se utilizan para explicaciones breves o notas relevantes para el código local. Aquí están los ejemplos de comentarios de una sola línea.

\`\` \` <? # Esto es un comentario, y # Esta es la segunda línea del comentario.

// Esto también es un comentario. Cada estilo comenta solo imprimir "Un ejemplo con comentarios de una sola línea"; ?>
```
#### Multi-lines printing − 
 Here are the examples to print multiple lines in a single print statement − 
 
 ``` 
 <? 
   # First Example 
   print <<<END 
   This uses the "here document" syntax to output 
   multiple lines with $variable interpolation. Note 
   that the here document terminator must appear on a 
   line with just a semicolon no extra whitespace! 
   END; 
 
   # Second Example 
   print "This spans 
   multiple lines. The newlines will be 
   output as well"; 
 ?> 
```

#### Comentarios multilínea -

Generalmente se utilizan para proporcionar algoritmos de pseudocódigo y explicaciones más detalladas cuando sea necesario. El estilo multilínea de comentar es el mismo que en C. A continuación se muestra el ejemplo de los comentarios multilínea.
```
<? 
   /* This is a comment with multiline 
      Author : Mohammad Mohtashim 
      Purpose: Multiline Comments Demo 
      Subject: PHP 
   */ 
 
   print "An example with multi line comments"; 
 ?> 
```

### PHP es insensible al espacio en blanco

Los espacios en blanco son las cosas que escribe que generalmente son invisibles en la pantalla, incluidos los espacios, las pestañas y los retornos de carro (caracteres de fin de línea).

PHP insensible al espacio en blanco significa que casi nunca importa la cantidad de caracteres de espacio en blanco que tenga en una fila. Un carácter de espacio en blanco es igual a muchos de esos caracteres.

Por ejemplo, cada una de las siguientes declaraciones de PHP que asigna la suma de 2 + 2 a la variable $ cuatro es equivalente:
```
$four = 2 + 2; // single spaces 
 $four <tab>=<tab2<tab>+<tab>2 ; // spaces and tabs 
 $four = 
 2+ 
 2; // multiple lines 
```

### PHP es sensible a mayúsculas

Sí, es cierto que PHP es un lenguaje sensible a mayúsculas y minúsculas. Pruebe el siguiente ejemplo:
```
<html> 
   <body> 
 
      <?php 
         $capital = 67; 
         print("Variable capital is $capital<br>"); 
         print("Variable CaPiTaL is $CaPiTaL<br>"); 
      ?> 
 
   </body> 
 </html> 
```

Esto producirá el siguiente resultado:
```
Variable capital is 67 
 Variable CaPiTaL is 
```

### Las declaraciones son expresiones terminadas por punto y coma.

Una declaración en PHP es cualquier expresión seguida de un punto y coma (;). Cualquier secuencia de declaraciones PHP válidas que esté incluida en las etiquetas PHP es un programa PHP válido. Aquí hay una declaración típica en PHP, que en este caso asigna una cadena de caracteres a una variable llamada $ saludo -
```
$greeting = "Welcome to PHP!"; 
```

### Las expresiones son combinaciones de fichas.

Los bloques de construcción más pequeños de PHP son los tokens indivisibles, como números (3.14159), cadenas (.two.), Variables ($ dos), constantes (TRUE) y las palabras especiales que conforman la sintaxis de PHP como si , si no, mientras, para y así sucesivamente

### Los frenos hacen bloques

Aunque las declaraciones no se pueden combinar como expresiones, siempre se puede colocar una secuencia de declaraciones en cualquier lugar en que una declaración pueda ir encerrándolas entre un conjunto de llaves.

Aquí ambas declaraciones son equivalentes.
```
if (3 == 2 + 1) 
   print("Good - I haven't totally lost my mind.<br>"); 
 
 if (3 == 2 + 1) { 
   print("Good - I haven't totally"); 
   print("lost my mind.<br>"); 
 } 
```

### Ejecución de secuencias de comandos PHP desde el símbolo del sistema

Sí, puede ejecutar su script PHP en su línea de comandos. Suponiendo que tiene el siguiente contenido en el archivo test.php
```
<?php 
   echo "Hello PHP!!!!!"; 
 ?> 
```

Ahora ejecute este script como símbolo del sistema de la siguiente manera:
```
$ php test.php 
```

Producirá el siguiente resultado:
```
Hello PHP!!!!! 
```

Espero que ahora tienes conocimientos básicos de sintaxis de PHP.