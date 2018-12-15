---
title: While Loop
---

## While Loop
A `while` loop executes statements within the loop as long as the loops condition is met. 

### Syntax:
```php
<?php
$x = 0;
while ($x < 11) {
    statement1;
    $x++;
}
```

**Note:** The block code must have a statement that changes or increments the condition.  Otherwise an infinite loop could result.  


Another loop statement is `do...while` where you execute your code at least once.

### Syntax
```php
$x = 0;

do {
   ++$x;
} while ($x < 11);
```

**Note:** Same as the `while` block, this should have a statement that changes, otherwise an infinite loop could result.

### More Information:
- [PHP While Loop](http://php.net/manual/en/control-structures.while.php)
- [PHP Do-While Loop](http://php.net/manual/en/control-structures.do.while.php)
