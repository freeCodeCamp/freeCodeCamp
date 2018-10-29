---
title: Sorting Arrays
localeTitle: Classificando Arrays
---
## Classificando Arrays

O PHP oferece várias funções para ordenar matrizes. Esta página descreve as diferentes funções e inclui exemplos.

### ordenar()

A função `sort()` ordena os valores de um array em ordem alfabética / numérica crescente (por exemplo, A, B, C, D, E… 5, 4, 3, 2, 1…)

```PHP
<?php 
 $freecodecamp = array("free", "code", "camp"); 
 sort($freecodecamp); 
 print_r($freecodecamp); 
```

**Saída:**

```text
Array 
 ( 
    [0] => camp 
    [1] => code 
    [2] => free 
 ) 
```

### rsort ()

As funções `rsort()` ordenam os valores de uma matriz em ordem alfabética / numérica descendente (por exemplo, Z, Y, X, W, V… 5, 4, 3, 2, 1…)

```PHP
<?php 
 $freecodecamp = array("free", "code", "camp"); 
 rsort($freecodecamp); 
 print_r($freecodecamp); 
```

**Saída:**

```text
Array 
 ( 
    [0] => free 
    [1] => code 
    [2] => camp 
 ) 
```

### um tipo()

A função `asort()` ordena um array associativo, por seus valores, em ordem alfabética ascendente / numérica (eg A, B, C, D, E… 5, 4, 3, 2, 1…)

```PHP
<?php 
 $freecodecamp = array("zero"=>"free", "one"=>"code", "two"=>"camp"); 
 asort($freecodecamp); 
 print_r($freecodecamp); 
```

**Saída:**

```text
Array 
 ( 
    [two] => camp 
    [one] => code 
    [zero] => free 
 ) 
```

### ksort ()

A função `ksort()` ordena um array associativo, por suas teclas, em ordem alfabética / numérica crescente (eg A, B, C, D, E… 5, 4, 3, 2, 1…)

```PHP
<?php 
 $freecodecamp = array("zero"=>"free", "one"=>"code", "two"=>"camp"); 
 ksort($freecodecamp); 
 print_r($freecodecamp); 
```

**Saída:**

```text
Array 
 ( 
    [one] => code 
    [two] => camp 
    [zero] => free 
 ) 
```

### arsort ()

A função `arsort()` ordena um array associativo, pelos seus valores, em ordem decrescente alfabética / numérica (eg Z, Y, X, W, V… 5, 4, 3, 2, 1…)

```PHP
<?php 
 $freecodecamp = array("zero"=>"free", "one"=>"code", "two"=>"camp"); 
 arsort($freecodecamp); 
 print_r($freecodecamp); 
```

**Saída:**

```text
Array 
 ( 
    [zero] => free 
    [one] => code 
    [two] => camp 
 ) 
```

### krsort ()

A função `krsort()` ordena um array associativo, por meio de suas teclas em ordem alfabética / numérica descendente (por exemplo, Z, Y, X, W, V… 5, 4, 3, 2, 1…)

```PHP
<?php 
 $freecodecamp = array("zero"=>"free", "one"=>"code", "two"=>"camp"); 
 krsort($freecodecamp); 
 print_r($freecodecamp); 
```

**Saída:**

```text
Array 
 ( 
    [zero] => free 
    [two] => camp 
    [one] => code 
 ) 
```

#### Mais Informações:

*   [Manual do php.net sort ()](https://secure.php.net/manual/en/function.sort.php)
*   [Manual do php.net rsort ()](https://secure.php.net/manual/en/function.rsort.php)
*   [Manual do php.net asort ()](https://secure.php.net/manual/en/function.asort.php)
*   [php.net ksort () manual](https://secure.php.net/manual/en/function.ksort.php)
*   [Manual do php.net arsort ()](https://secure.php.net/manual/en/function.arsort.php)
*   [php.net krsort () manual](https://secure.php.net/manual/en/function.krsort.php)
*   [Manual do php.net print\_r ()](https://secure.php.net/manual/en/function.print-r.php)