---
title: Learn About Php Variables
localeTitle: Aprenda acerca de las variables php
---
Las variables son contenedores para almacenar datos como `strings` , `integers` , valores `boolean` , `array` y objetos.

PHP sigue ciertas reglas para declaraciones de variables tales como:

*   La variable debe comenzar con un signo de dólar ($)

Ejemplo:

`php <?php $var = 5; ?>`

*   El nombre de la variable puede contener caracteres como AZ, az, 0-9, \_ y [ASCII](http://www.asciitable.com/ "ASCII Table") desde 127-255.

Ejemplo:

`php <?php $var = 5; //Valid $var_1 = "Foo"; //Valid $_var2 = 'Bar'; //Valid $var.3 = 'Baz'; //Invalid ?>`

*   El nombre de la variable puede comenzar con un guión bajo (\_).

Ejemplo:

`php <?php $_var2 = 'Bar'; //Valid ?>`

*   El nombre de la variable no debe comenzar con un número 0-9.

Ejemplo:

`php <?php $9var3 = 'Baz'; //Invalid ?>`

*   El nombre de la variable distingue entre mayúsculas y minúsculas.

Ejemplo:
```
<?php 
    $var = 5; //Valid 
    $VAR = "Foo"; //Valid 
    echo $var; //Output 5 
    echo "<br>"; 
    echo $VAR; //Output Foo 
 ?> 
```

PHP es un lenguaje escrito de forma flexible, por lo tanto, no necesitamos declarar el tipo de datos de una variable al declarar la variable. A diferencia de Java o C.
```
<?php 
    $var = 5; 
    $var2 = 4; 
    $sum = $var+$var2; 
    echo $sum; //Output 9 
    echo "<br>"; 
    echo $var+$var2; //Output 9 
 ?> 
```

Las variables también se pueden asignar por referencia. Esto permite que dos variables se refieran al mismo contenido. El operador `&` se coloca antes de la variable a la que se va a hacer referencia.

Ejemplo:
```
<?php 
    $var1 = "foo"; 
    $var2 = "bar"; 
 
 myTest($var1, $var2); 
 
 echo $var1; //Output foo 
 echo $var2; //Output BAR 
 
 function myTest($var1, &$var2){ 
    $var1 = "FOO"; 
    $var2 = "BAR"; 
 } 
 ?> 
```

Para tener nombres de variables establecidos dinámicamente usamos las variables variables. Esto puede ser particularmente útil cuando existe la necesidad de crear múltiples variables.

Ejemplo:
```
<?php 
 
    $var = 'Tom'; 
    echo $var;      //Output Tom 
    $$var = 'Cat'; //The value of $$var is the value of $var. So $$var and $Tom give the same output. 
    echo $$var;   //Output Cat 
    echo $Tom;   //Output Cat 
 ?> 
```

# Alcance variable

El alcance de la variable se refiere a los lugares desde donde una variable es accesible.

*   El alcance global es para las variables que se declaran fuera de una función. Se puede acceder a estas variables desde cualquier lugar pero no dentro de una función.
*   El alcance local es para las variables declaradas dentro de una función a las que no se puede acceder desde cualquier lugar fuera de la función.

Ejemplo:
```
<?php 
   $global = "Hello"; 
 
  function Test(){ 
   $local = "World"; 
   echo $global; //Error 
   echo $local; //Output World 
  } 
 
   Test(); 
   echo $global; //Output Hello 
   echo $local; //Error 
 ?> 
```

Para acceder a las variables globales dentro de una función:
```
<?php 
   $global = "Hello"; 
 
 function Test(){ 
   global $global; 
   $local = "World"; 
   echo $global; //Output Hello 
   echo $local; //Output World 
  } 
 
   Test(); 
   echo $global; //Output Hello 
   echo $local; //Error 
 ?> 
```

# Variables estáticas

Cada vez que se crea una función, todas sus variables locales se eliminan. Para retener el último valor de la variable lo declaramos `static` .

Ejemplo:
```
<?php 
 
 function WithStatic(){ 
   static $var = 0; 
   echo $var; 
   $var++; 
  } 
 
   WithStatic(); //Output 0 
   WithStatic(); //Output 1 
   WithStatic(); //Output 2 
 
 function WithoutStatic(){ 
   $var = 0; 
   echo $var; 
   $var++; 
  } 
 
   WithoutStatic(); //Output 0 
   WithoutStatic(); //Output 0 
   WithoutStatic(); //Output 0 
 ?> 

```