---
title: array
---

## Introduction of PHP array

An array in PHP is actually an ordered map. A map is a type that associates values to keys. 
This type is optimized for several different uses; it can be treated as an array, list (vector), hash table (an implementation of a map), dictionary, collection, stack, queue, and probably more. 
As array values can be other arrays, trees and multidimensional arrays are also possible.


Here is an example:
```
<?php
// array without keys
$bikes = array("Suzuki","BMW","Yamaha");
echo "I like " . $bikes[0] . ", " . $bikes[1] . " and " . $bikes[2] . ".";
?>
```

PHP array has so many functions to work with. Here is all list sorted: <a href="https://www.w3schools.com/php/php_ref_array.asp" target="_blank">Functions</a>

## Associative arrays

PHP arrays can be used as key and value like map. It can be accessed by key too.

Here is an simple example:
```
<?php
$array = array(
    "foo" => "bar",
    "bar" => "foo",
);

echo $array['bar'];

```

Have a good day, happy coding !!!
