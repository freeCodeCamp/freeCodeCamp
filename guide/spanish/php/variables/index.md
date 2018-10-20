---
title: Variables
localeTitle: Variables
---
## Variables

# Creando (Declarando) Variables PHP

Las variables son "contenedores" para almacenar información.

**Sintaxis:**

```php
<?php 
 $txt = "Hello world!"; 
 $x = 5; 
 $y = 10.5; 
 ?> 
```

Después de la ejecución de las declaraciones anteriores, la variable $ txt mantendrá el valor ¡Hola mundo! La variable $ x mantendrá el valor 5, y la variable $ y mantendrá el valor 10.5.

##### Nota: cuando asigne un valor de texto a una variable, ponga comillas alrededor del valor.

##### Nota: A diferencia de otros lenguajes de programación, PHP no tiene comando para declarar una variable. Se crea en el momento en que primero le asigna un valor.

# Reglas para las variables de PHP:

*   Una variable comienza con el signo $, seguido del nombre de la variable
*   Un nombre de variable debe comenzar con una letra o el carácter de subrayado
*   Un nombre de variable no puede comenzar con un número
*   Un nombre de variable solo puede contener caracteres alfanuméricos y guiones bajos (Az, 0-9 y \_)
*   Los nombres de las variables distinguen entre mayúsculas y minúsculas ($ age y $ AGE son dos variables diferentes)

# Variables de salida

La declaración de eco de PHP se usa a menudo para enviar datos a la pantalla.

El siguiente ejemplo mostrará cómo generar texto y una variable:

```php
<?php 
 $txt = "github.com"; 
 echo "I love $txt!"; 
 ?> 
```

El siguiente ejemplo producirá la misma salida que el ejemplo anterior:

```php
<?php 
 $txt = "github.com"; 
 echo "I love " . $txt . "!"; 
 ?> 
```

El siguiente ejemplo dará salida a la suma de dos variables:

```php
<?php 
 $x = 5; 
 $y = 4; 
 echo $x + $y; 
 ?> 
```

# PHP es un lenguaje vagamente escrito

En el ejemplo anterior, observe que no tuvimos que decirle a PHP qué tipo de datos es la variable. PHP convierte automáticamente la variable al tipo de datos correcto, dependiendo de su valor. En otros lenguajes como C, C ++ y Java, el programador debe declarar el nombre y el tipo de la variable antes de usarla.

#### Más información: