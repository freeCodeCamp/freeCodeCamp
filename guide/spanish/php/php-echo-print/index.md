---
title: PHP 5 echo and print Statements
localeTitle: PHP 5 declaraciones de echo y print
---
En PHP hay dos formas básicas de mostrar salida: echo o print.

En este tutorial usamos echo (o print) en casi todos los ejemplos. Por lo tanto, este capítulo contiene un poco más de información sobre esas dos declaraciones de salida.

### PHP declaraciones echo e imprimir declaraciones

La declaraciones echo y print son parecidas. Ambos se utilizan para enviar datos a la pantalla.

Las diferencias son pequeñas: el echo no tiene valor de retorno, mientras que print tiene un valor de retorno de 1, por lo que se puede usar en expresiones. echo puede tomar múltiples parámetros (aunque tal uso es raro) mientras que la impresión puede tomar un argumento. El eco es ligeramente más rápido que la impresión.

### El PHP echo Statement

La declaración echo puede usarse con o sin paréntesis: echo o echo ().

#### Mostrar texto

El siguiente ejemplo muestra cómo generar texto con el comando echo (observe que el texto puede contener un código HTML):

#### Ejemplo

```php
<?php 
 echo "<h2>PHP is Fun!</h2>"; 
 echo "Hello world!<br>"; 
 echo "I'm about to learn PHP!<br>"; 
 echo "This ", "string ", "was ", "made ", "with multiple parameters."; 
 ?> 
```

#### Visualizar variables

El siguiente ejemplo muestra cómo generar texto y variables con la declaración echo:

#### Ejemplo

```php
<?php 
 $txt1 = "Learn PHP"; 
 $txt2 = "W3Schools.com"; 
 $x = 5; 
 $y = 4; 
 
 echo "<h2>" . $txt1 . "</h2>"; 
 echo "Study PHP at " . $txt2 . "<br>"; 
 echo $x + $y; 
 ?> 
```

### La declaración de impresión de PHP

La declaración de impresión se puede utilizar con o sin paréntesis: print o print().

#### Mostrar texto

El siguiente ejemplo muestra cómo generar texto con el comando de impresión (observe que el texto puede contener un código HTML):

#### Ejemplo

```php
<?php 
 print "<h2>PHP is Fun!</h2>"; 
 print "Hello world!<br>"; 
 print "I'm about to learn PHP!"; 
 ?> 
```

#### Visualizar variables

El siguiente ejemplo muestra cómo generar texto y variables con la declaración de impresión:

#### Ejemplo

```php
<?php 
 $txt1 = "Learn PHP"; 
 $txt2 = "W3Schools.com"; 
 $x = 5; 
 $y = 4; 
 
 print "<h2>" . $txt1 . "</h2>"; 
 print "Study PHP at " . $txt2 . "<br>"; 
 print $x + $y; 
 ?> 

```
