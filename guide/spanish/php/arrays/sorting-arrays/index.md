---
title: Sorting Arrays
localeTitle: Ordenando matrices
---
## Ordenando matrices

PHP ofrece varias funciones para ordenar los arreglos. Esta página describe las diferentes funciones e incluye ejemplos.

### ordenar()

La función `sort()` ordena los valores de una matriz en orden ascendente alfabético / numérico (Ej. A, B, C, D, E ... 5, 4, 3, 2, 1 ...)

```PHP
<?php 
 $freecodecamp = array("free", "code", "camp"); 
 sort($freecodecamp); 
 print_r($freecodecamp); 
```

**Salida:**

```text
Array 
 ( 
    [0] => camp 
    [1] => code 
    [2] => free 
 ) 
```

### rsort ()

Las funciones `rsort()` clasifican los valores de una matriz en orden alfabético / numérico descendente (por ejemplo, Z, Y, X, W, V ... 5, 4, 3, 2, 1 ...)

```PHP
<?php 
 $freecodecamp = array("free", "code", "camp"); 
 rsort($freecodecamp); 
 print_r($freecodecamp); 
```

**Salida:**

```text
Array 
 ( 
    [0] => free 
    [1] => code 
    [2] => camp 
 ) 
```

### un tipo()

La función `asort()` ordena una matriz asociativa, por sus valores, en orden alfabético / numérico ascendente (por ejemplo, A, B, C, D, E ... 5, 4, 3, 2, 1 ...)

```PHP
<?php 
 $freecodecamp = array("zero"=>"free", "one"=>"code", "two"=>"camp"); 
 asort($freecodecamp); 
 print_r($freecodecamp); 
```

**Salida:**

```text
Array 
 ( 
    [two] => camp 
    [one] => code 
    [zero] => free 
 ) 
```

### ksort ()

La función `ksort()` ordena una matriz asociativa, por sus teclas, en orden alfabético / numérico ascendente (por ejemplo, A, B, C, D, E ... 5, 4, 3, 2, 1 ...)

```PHP
<?php 
 $freecodecamp = array("zero"=>"free", "one"=>"code", "two"=>"camp"); 
 ksort($freecodecamp); 
 print_r($freecodecamp); 
```

**Salida:**

```text
Array 
 ( 
    [one] => code 
    [two] => camp 
    [zero] => free 
 ) 
```

### Arsort ()

La función `arsort()` ordena una matriz asociativa, por sus valores, en orden alfabético / numérico descendente (por ejemplo, Z, Y, X, W, V ... 5, 4, 3, 2, 1 ...)

```PHP
<?php 
 $freecodecamp = array("zero"=>"free", "one"=>"code", "two"=>"camp"); 
 arsort($freecodecamp); 
 print_r($freecodecamp); 
```

**Salida:**

```text
Array 
 ( 
    [zero] => free 
    [one] => code 
    [two] => camp 
 ) 
```

### krsort ()

La función `krsort()` ordena una matriz asociativa, por sus teclas en orden alfabético / numérico descendente (por ejemplo, Z, Y, X, W, V ... 5, 4, 3, 2, 1 ...)

```PHP
<?php 
 $freecodecamp = array("zero"=>"free", "one"=>"code", "two"=>"camp"); 
 krsort($freecodecamp); 
 print_r($freecodecamp); 
```

**Salida:**

```text
Array 
 ( 
    [zero] => free 
    [two] => camp 
    [one] => code 
 ) 
```

#### Más información:

*   [php.net sort () manual](https://secure.php.net/manual/en/function.sort.php)
*   [php.net rsort () manual](https://secure.php.net/manual/en/function.rsort.php)
*   [php.net asort () manual](https://secure.php.net/manual/en/function.asort.php)
*   [php.net ksort () manual](https://secure.php.net/manual/en/function.ksort.php)
*   [php.net arsort () manual](https://secure.php.net/manual/en/function.arsort.php)
*   [php.net krsort () manual](https://secure.php.net/manual/en/function.krsort.php)
*   [php.net print\_r () manual](https://secure.php.net/manual/en/function.print-r.php)