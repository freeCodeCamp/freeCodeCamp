---
title: do while loop
---

## Do While Loop in PHP

The do while loop executes a block of code once and until a condition is false. They are a particular case of while loops: they execute a block of code one time and then until the condition is false. A common use of do while loops are input checks.


## Syntax

The syntax for a do while loop is similar to that of other loops in php, with the exception being the condition is listed at the end of the loop.


```
<?php

$i = 0;
do {
    echo $i;
} while ($i > 0);
?>

```


## Example

Below is an example of how you could use a do while loop in a real world situation:

```
<?php

$arr = array('abc','def','ghi');

$i = 0;
do {
    echo $arr[$i];
    $i++;
} while ($i < sizeof($arr));


?>

```
Output 

```
abcdefghi
```
## Additional Info

For more information, please see [PHP: Do While](http://php.net/manual/en/control-structures.do.while.php)
