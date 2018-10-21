---
title: While Loop
---
## While Loop

The `while loop` is one of the easiest type of loop in PHP. It executes the block of statements until the expression evaluates to **TRUE**. If the value of the expression changes at the time of execution, then the loop runs until the expression evaluates to **FALSE**.The Basic Form of While Loop is given below:

```shell
while (expr)
    statement
```
The Statements inside the while loop can be enclosed within the curly braces or can be used based on the following syntax:

```shell
while (expr):
    statement
    ...
endwhile;
```
Illustrating the simple and alternate syntax of while loop using example:

```php
<?php

/* using the simple form of while loop */

$i = 1;  /* initialisation part */

while ($i <= 100 && $i!=5 ) 
{
    echo $i++;  
}

/*using the alternate synatx of while loop*/

$i = 0;

while ($i <= 10):
    echo $i++;
endwhile;

?>
```

#### More Information

[While loop - PHP Documentation](http://php.net/manual/en/control-structures.while.php)
