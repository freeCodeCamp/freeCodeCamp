---
title: PHP Variables
localeTitle: Variables PHP
---
## Variables

Las variables son "contenedores" para almacenar información. Las variables se declaran utilizando el signo de dólar ($) seguido inmediatamente por el nombre de la variable. Por ejemplo, el siguiente bloque de código crearía una variable llamada `myVariable` y le asignaría la cadena `Hello World` .

```php
<?php 
 $myVariable = "Hello World"; 
 $x = 5; 
 $y = 10.5; 
 $z = '42'; 
 ?> 
```

Después de la ejecución de las declaraciones anteriores, la variable `$myVariable` mantendrá una cadena con un valor de ¡Hola mundo! La variable `$x` contendrá un número entero con un valor de 5, y la variable `$y` mantendrá una flotación con un valor de 10.5, y la variable `$z` tendrá una cadena con un valor de 42.

# Nombrando variables

Al igual que con cualquier lenguaje de programación, PHP tiene ciertas reglas que se aplican a las variables de denominación. Los nombres de variables válidos seguirán las siguientes reglas

*   Una variable debe comenzar con el signo $, seguido del nombre de la variable
*   Un nombre de variable debe comenzar con una letra o el carácter de subrayado
*   Un nombre de variable no puede comenzar con un número
*   Un nombre de variable solo puede contener caracteres alfanuméricos y guiones bajos (Az, 0-9 y \_)
*   Los nombres de las variables distinguen entre mayúsculas y minúsculas ($ age y $ AGE son dos variables diferentes)

# Variables predefinidas

PHP tiene varias palabras clave especiales que, si bien son nombres de variable "válidos", no se pueden usar para sus variables. La razón de esto es que el lenguaje en sí ya ha definido esas variables y se han utilizado para fines especiales. A continuación se enumeran varios ejemplos, para obtener una lista completa, consulte el [sitio de documentación de PHP](https://secure.php.net/manual/en/language.variables.predefined.php) .

*   `$this`
*   `$_GET`
*   `$_POST`
*   `$_SERVER`
*   `$_FILES`

# Asignación de valores a variables

Para asignar un valor a una variable, simplemente escriba la variable seguida del operador igual (=) seguido del valor. Por ejemplo

`PHP $myVariable = "Hello World"; $number1 = 5; $number2 = 10; $total = $number1 + $number2;`

Es posible que hayas notado varias cosas importantes sobre el ejemplo anterior. La primera variable la declaré igual a **Hello World** , entre comillas. Esto se debe a que **Hello World** es una cadena de texto y las cadenas deben estar entre comillas. La segunda línea declaré que `$number1` es igual al valor de 5. Podría haber declarado que `$number1` es igual a `"5"` , lo que le diría a PHP que quiero que el 5 se almacene como una cadena, no como un valor real. La diferencia es que no se puede realizar el cálculo (como hice en la 4ª línea) en cadenas. La cuarta línea declaro que `$total` es igual a los valores de `$number1` más `$number2` . Esto se llama declarar un valor por referencia.

# PHP es un lenguaje vagamente escrito

En el ejemplo anterior, observe que no tuvimos que decirle a PHP qué tipo de datos es la variable. PHP convierte automáticamente la variable al tipo de datos correcto, dependiendo de su valor. En otros lenguajes como C, C ++ y Java, el programador debe declarar el nombre y el tipo de la variable antes de usarla.

# Conclusión

PHP facilita el trabajo con variables, y debe pensar en las variables como contenedores para almacenar información. Para más información, echa un vistazo a estos recursos:

*   [Documentación Variable PHP](http://php.net/manual/en/language.variables.php)
*   [W3Schools PHP Variables](https://www.w3schools.com/php/php_variables.asp)
*   [Tipos de datos PHP](https://guide.freecodecamp.org/php/data-types)