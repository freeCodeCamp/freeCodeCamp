---
title: Functions
localeTitle: Funciones
---
## Introducción a las funciones PHP

Una función es un bloque de instrucciones que se pueden usar repetidamente en un programa.

### Función simple + llamada

```php
function say_hello() { 
  return "Hello!"; 
 } 
 
 echo say_hello(); 
```

### Función simple + parámetro + llamada

```php
function say_hello($friend) { 
  return "Hello " . $friend . "!"; 
 } 
 
 echo say_hello('Tommy'); 
```

### strtoupper - Hace que todos los caracteres sean MÁS GRANDES Y MÁS GRANDES!

```php
function makeItBIG($a_lot_of_names) { 
  foreach($a_lot_of_names as $the_simpsons) { 
    $BIG[] = strtoupper($the_simpsons); 
  } 
  return $BIG; 
 } 
 
 $a_lot_of_names = ['Homer', 'Marge', 'Bart', 'Maggy', 'Lisa']; 
 var_dump(makeItBIG($a_lot_of_names)); 
```

#### Más información:

*   [Manual de funciones definidas por el usuario de php.net](https://secure.php.net/manual/en/functions.user-defined.php)