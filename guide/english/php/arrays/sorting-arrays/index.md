---
title: Sorting Arrays
---
## Sorting Arrays

PHP offers several functions to sort arrays. This page describes the different functions and includes examples.

### sort()
The `sort()` function sorts the values of an array in ascending alphabetical/numerical order (E.g. A, B, C, D, E... 5, 4, 3, 2, 1...)
```PHP
<?php
$freecodecamp = array("free", "code", "camp");
sort($freecodecamp);
print_r($freecodecamp);
```
**Output:**
```text
Array
(
    [0] => camp
    [1] => code
    [2] => free
)
```

### rsort()
The `rsort()` functions sort the values of an array in descending alphabetical/numerical order (E.g. Z, Y, X, W, V... 5, 4, 3, 2, 1...)
```PHP
<?php
$freecodecamp = array("free", "code", "camp");
rsort($freecodecamp);
print_r($freecodecamp);
```
**Output:**
```text
Array
(
    [0] => free
    [1] => code
    [2] => camp
)
```

### asort()
The `asort()` function sorts an associative array, by it's values, in ascending alphabetical/numerical order (E.g. A, B, C, D, E... 5, 4, 3, 2, 1...)
```PHP
<?php
$freecodecamp = array("zero"=>"free", "one"=>"code", "two"=>"camp");
asort($freecodecamp);
print_r($freecodecamp);
```
**Output:**
```text
Array
(
    [two] => camp
    [one] => code
    [zero] => free
)
```

### ksort()
The `ksort()` function sorts an associative array, by it's keys, in ascending alphabetical/numerical order (E.g. A, B, C, D, E... 5, 4, 3, 2, 1...)
```PHP
<?php
$freecodecamp = array("zero"=>"free", "one"=>"code", "two"=>"camp");
ksort($freecodecamp);
print_r($freecodecamp);
```
**Output:**
```text
Array
(
    [one] => code
    [two] => camp
    [zero] => free
)
```

### arsort()
The `arsort()` function sorts an associative array, by it's values, in descending alphabetical/numerical order (E.g. Z, Y, X, W, V... 5, 4, 3, 2, 1...)
```PHP
<?php
$freecodecamp = array("zero"=>"free", "one"=>"code", "two"=>"camp");
arsort($freecodecamp);
print_r($freecodecamp);
```
**Output:**
```text
Array
(
    [zero] => free
    [one] => code
    [two] => camp
)
```

### krsort()
The `krsort()` function sorts an associative array, by it's keys in descending alphabetical/numerical order (E.g. Z, Y, X, W, V... 5, 4, 3, 2, 1...)
```PHP
<?php
$freecodecamp = array("zero"=>"free", "one"=>"code", "two"=>"camp");
krsort($freecodecamp);
print_r($freecodecamp);
```
**Output:**
```text
Array
(
    [zero] => free
    [two] => camp
    [one] => code
)
```

#### More Information:
* <a href="https://secure.php.net/manual/en/function.sort.php" rel="nofollow">php.net sort() manual</a>
* <a href="https://secure.php.net/manual/en/function.rsort.php" rel="nofollow">php.net rsort() manual</a>
* <a href="https://secure.php.net/manual/en/function.asort.php" rel="nofollow">php.net asort() manual</a>
* <a href="https://secure.php.net/manual/en/function.ksort.php" rel="nofollow">php.net ksort() manual</a>
* <a href="https://secure.php.net/manual/en/function.arsort.php" rel="nofollow">php.net arsort() manual</a>
* <a href="https://secure.php.net/manual/en/function.krsort.php" rel="nofollow">php.net krsort() manual</a>
* <a href="https://secure.php.net/manual/en/function.print-r.php" rel="nofollow">php.net print_r() manual</a>
