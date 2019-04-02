---
title: Sorting Arrays
localeTitle: Сортировка массивов
---
## Сортировка массивов

PHP предлагает несколько функций для сортировки массивов. На этой странице описаны различные функции и примеры.

### Сортировать()

Функция `sort()` сортирует значения массива в порядке возрастания в алфавитном / цифровом порядке (например, A, B, C, D, E ... 5, 4, 3, 2, 1 ...)

```PHP
<?php 
 $freecodecamp = array("free", "code", "camp"); 
 sort($freecodecamp); 
 print_r($freecodecamp); 
```

**Выход:**

```text
Array 
 ( 
    [0] => camp 
    [1] => code 
    [2] => free 
 ) 
```

### rsort ()

Функции `rsort()` сортируют значения массива в нисходящем алфавитном / числовом порядке (Eg Z, Y, X, W, V ... 5, 4, 3, 2, 1 ...)

```PHP
<?php 
 $freecodecamp = array("free", "code", "camp"); 
 rsort($freecodecamp); 
 print_r($freecodecamp); 
```

**Выход:**

```text
Array 
 ( 
    [0] => free 
    [1] => code 
    [2] => camp 
 ) 
```

### asort ()

Функция `asort()` сортирует ассоциативный массив по его значениям в восходящем алфавитном / цифровом порядке (например, A, B, C, D, E ... 5, 4, 3, 2, 1 ...)

```PHP
<?php 
 $freecodecamp = array("zero"=>"free", "one"=>"code", "two"=>"camp"); 
 asort($freecodecamp); 
 print_r($freecodecamp); 
```

**Выход:**

```text
Array 
 ( 
    [two] => camp 
    [one] => code 
    [zero] => free 
 ) 
```

### ksort ()

Функция `ksort()` сортирует ассоциативный массив по его ключам в порядке возрастания в алфавитном / цифровом порядке (например, A, B, C, D, E ... 5, 4, 3, 2, 1 ...)

```PHP
<?php 
 $freecodecamp = array("zero"=>"free", "one"=>"code", "two"=>"camp"); 
 ksort($freecodecamp); 
 print_r($freecodecamp); 
```

**Выход:**

```text
Array 
 ( 
    [one] => code 
    [two] => camp 
    [zero] => free 
 ) 
```

### arsort ()

Функция `arsort()` сортирует ассоциативный массив по его значениям в нисходящем алфавитном / цифровом порядке (Eg Z, Y, X, W, V ... 5, 4, 3, 2, 1 ...)

```PHP
<?php 
 $freecodecamp = array("zero"=>"free", "one"=>"code", "two"=>"camp"); 
 arsort($freecodecamp); 
 print_r($freecodecamp); 
```

**Выход:**

```text
Array 
 ( 
    [zero] => free 
    [one] => code 
    [two] => camp 
 ) 
```

### krsort ()

Функция `krsort()` сортирует ассоциативный массив по его клавишам в нисходящем алфавитном / цифровом порядке (Eg Z, Y, X, W, V ... 5, 4, 3, 2, 1 ...)

```PHP
<?php 
 $freecodecamp = array("zero"=>"free", "one"=>"code", "two"=>"camp"); 
 krsort($freecodecamp); 
 print_r($freecodecamp); 
```

**Выход:**

```text
Array 
 ( 
    [zero] => free 
    [two] => camp 
    [one] => code 
 ) 
```

#### Дополнительная информация:

*   [Справочник php.net sort ()](https://secure.php.net/manual/en/function.sort.php)
*   [Руководство пользователя php.net rsort ()](https://secure.php.net/manual/en/function.rsort.php)
*   [Руководство пользователя php.net asort ()](https://secure.php.net/manual/en/function.asort.php)
*   [Руководство пользователя php.net ksort ()](https://secure.php.net/manual/en/function.ksort.php)
*   [Руководство пользователя php.net arsort ()](https://secure.php.net/manual/en/function.arsort.php)
*   [Руководство пользователя php.net krsort ()](https://secure.php.net/manual/en/function.krsort.php)
*   [Руководство пользователя php.net print\_r ()](https://secure.php.net/manual/en/function.print-r.php)