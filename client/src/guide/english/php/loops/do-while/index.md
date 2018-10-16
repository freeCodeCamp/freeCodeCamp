---
title: Do-While Loop
---

# Do...While loop
Another PHP control structure, which is very similar to the while loop, is the do-while loop, which loops through a block of code while the condition is true.

## Syntax
```
do
{
    // Code to be executed
}
while (expr);

```

## Example
```php
<?php
$index = 3;
do
{
    // execute this at least 1 time
    echo "Index: ".$index.".\n";
    $index --;
}
while ($index > 0);
?>

```
This will output:

```
> Index: 3.
> Index: 2.
> Index: 1.
```

#### More Information

[do-while loop - PHP Documentation](http://php.net/manual/en/control-structures.do.while.php)
