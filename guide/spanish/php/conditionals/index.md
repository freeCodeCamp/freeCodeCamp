---
title: Conditionals
localeTitle: Condicionales
---
## Condicionales

Los condicionales en PHP se escriben usando la sintaxis `if` , `elseif` , `else` . El uso de condicionales le permite realizar diferentes acciones dependiendo de las diferentes entradas y valores proporcionados a una página en tiempo de ejecución. En PHP, los condicionales a menudo se denominan estructuras de control.

### Si

```PHP
<?php 
 if ($_GET['name'] = "freecodecamp"){ 
  echo "You viewed the freeCodeCamp Page!"; 
 } 
```

### Elseif

```PHP
<?php 
 if ($_GET['name'] = "freecodecamp"){ 
  echo "You viewed the freeCodeCamp Page!"; 
 } elseif ($_GET['name'] = "freecodecampguide"){ 
  echo "You viewed the freeCodeCamp Guide Page!"; 
 } 
```

### Más

```PHP
<?php 
 if ($_GET['name'] = "freecodecamp"){ 
  echo "You viewed the freeCodeCamp Page!"; 
 } elseif ($_GET['name'] = "freecodecampguide"){ 
  echo "You viewed the freeCodeCamp Guide Page!"; 
 } else { 
  echo "You viewed a page that does not exist yet!"; 
 } 
```

### Nota

En los casos en que tenga muchas condiciones posibles, es posible que desee utilizar una [Declaración de cambio](/php/switch) .

#### Más información:

*   [Manual de estructuras de control de php.net](https://secure.php.net/manual/en/control-structures.elseif.php)