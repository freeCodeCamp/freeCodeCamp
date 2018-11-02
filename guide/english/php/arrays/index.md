---
title: Arrays
---
## Arrays

### Types Of Arrays
In PHP there are three types of arrays: Indexed Arrays, Associative arrays, and Multidimensional arrays.

### Indexed Array Example
An indexed array accesses objects by index number.
```PHP
<?php
$freecodecamp = array("free", "code", "camp");
```
`$freecodecamp[0]` would return `"free"`, `$freecodecamp[1]` would return `"code"`, and `$freecodecamp[2]` would return `"camp"`.

### Associative Array Example
An associative array accesses objects by key name.
```PHP
<?php
$freecodecamp = array("free"=>"0","code"=>"1","camp"=>"2");
```
`$freecodecamp['free']` would return "0", `$freecodecamp['code']` would return "1", `$freecodecamp['camp']` would return "2",

### Multidimensional Array Example
A multidimensional array is an array that contains other arrays.
```PHP
<?php
$freecodecamp = array(array("free"=>"0","code"=>"1","camp"=>"2"),array("free"=>"0","code"=>"1","camp"=>"2"),array("free"=>"0","code"=>"1","camp"=>"2"));
```

#### More Information:
* <a href="https://secure.php.net/manual/en/language.types.array.php" rel="nofollow">php.net arrays manual</a>
