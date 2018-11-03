---
title: PHP strings
localeTitle: Cadenas de PHP
---
Son secuencias de caracteres, como "PHP soporta operaciones de cadena".

NOTA - Las funciones de cadena incorporadas se dan en la referencia de funciones Funciones de cadena de PHP

Los siguientes son ejemplos válidos de cadena

$ string _1 = "Esta es una cadena entre comillas dobles"; $ string_ 2 = "Esta es una cadena un poco más larga, citada individualmente"; $ string _39 = "Esta cadena tiene treinta y nueve caracteres"; $ string_ 0 = ""; // una cadena con cero caracteres Las cadenas citadas individualmente se tratan casi literalmente, mientras que las cadenas citadas por duplicado reemplazan las variables con sus valores, así como la interpretación especial de ciertas secuencias de caracteres.
```
<?php 
   $variable = "name"; 
   $literally = 'My $variable will not print!\\n'; 
 
   print($literally); 
   print "<br />"; 
 
   $literally = "My $variable will print!\\n"; 
 
   print($literally); 
 ?> 
```

Esto producirá el siguiente resultado:
```
My $variable will not print!\n 
 My name will print 
```

No hay límites artificiales en la longitud de la cadena: dentro de los límites de la memoria disponible, debe poder crear cadenas arbitrariamente largas.

Las cadenas que están delimitadas por comillas dobles (como en "esto") están preprocesadas en las dos formas siguientes mediante PHP:

Ciertas secuencias de caracteres que comienzan con barra invertida () se reemplazan con caracteres especiales

Los nombres de las variables (que comienzan con $) se reemplazan con representaciones de cadena de sus valores.

Los reemplazos de la secuencia de escape son:

\\ n es reemplazado por el carácter de nueva línea \\ r se sustituye por el carácter de retorno de carro \\ t se sustituye por el carácter de pestaña \\ $ es reemplazado por el signo de dólar en sí ($) \\ "se sustituye por una comilla doble (") \\ se reemplaza por una sola barra invertida ()

### Operador de concatenacion de cuerdas

Para concatenar dos variables de cadena juntas, use el operador de punto (.) -
```
<?php 
   $string1="Hello World"; 
   $string2="1234"; 
 
   echo $string1 . " " . $string2; 
 ?> 
```

Esto producirá el siguiente resultado:
```
Hello World 1234 
```

Si observamos el código anterior, veremos que usamos el operador de concatenación dos veces. Esto se debe a que tuvimos que insertar una tercera cadena.

Entre las dos variables de cadena agregamos una cadena con un solo carácter, un espacio vacío, para separar las dos variables.

### Usando la función strlen ()

La función strlen () se usa para encontrar la longitud de una cadena.

Busquemos la longitud de nuestra cadena "¡Hola mundo!":
```
<?php 
   echo strlen("Hello world!"); 
 ?> 
```

Esto producirá el siguiente resultado:
```
12 
```

La longitud de una cadena se usa a menudo en bucles u otras funciones, cuando es importante saber cuándo termina la cadena. (es decir, en un bucle, queremos detener el bucle después del último carácter de la cadena)

### Usando la función strpos ()

La función strpos () se utiliza para buscar una cadena o un carácter dentro de una cadena.

Si se encuentra una coincidencia en la cadena, esta función devolverá la posición de la primera coincidencia. Si no se encuentra ninguna coincidencia, devolverá FALSE.

A ver si podemos encontrar la cadena "mundo" en nuestra cadena -
```
<?php 
   echo strpos("Hello world!","world"); 
 ?> 
```

Esto producirá el siguiente resultado:
```
 6 
```

Como ves, la posición de la cadena "mundo" en nuestra cadena es la posición 6. La razón por la que es 6, y no 7, es que la primera posición en la cadena es 0, y no 1.