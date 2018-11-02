---
title: Arrays
localeTitle: Arrays
---
## Arrays

### Tipos de matrices

En PHP hay tres tipos de matrices: Matrices indexadas, Matrices asociativas y Matrices multidimensionales.

### Ejemplo de matriz indexada

Una matriz indexada accede a los objetos por número de índice.

```PHP
<?php 
 $freecodecamp = array("free", "code", "camp"); 
```

`$freecodecamp[0]` devolvería `"free"` , `$freecodecamp[1]` devolvería `"code"` , y `$freecodecamp[2]` devolvería `"camp"` .

### Ejemplo de matriz asociativa

Una matriz asociativa accede a los objetos por nombre de clave.

```PHP
<?php 
 $freecodecamp = array("free"=>"0","code"=>"1","camp"=>"2"); 
```

`$freecodecamp['free']` devolvería "0", `$freecodecamp['code']` devolvería "1", `$freecodecamp['camp']` devolvería "2",

### Ejemplo de matriz multidimensional

Una matriz multidimensional es una matriz que contiene otras matrices.

```PHP
<?php 
 $freecodecamp = array(array("free"=>"0","code"=>"1","camp"=>"2"),array("free"=>"0","code"=>"1","camp"=>"2"),array("free"=>"0","code"=>"1","camp"=>"2")); 
```

#### Más información:

*   [manual php.net arrays](https://secure.php.net/manual/en/language.types.array.php)