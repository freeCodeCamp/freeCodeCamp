---
title: for Loop
---
## For Loops
A *for* loops are the most complex loops in PHP. The syntax of a for loop is:

### Syntax:
```php
for (expr1; expr2; expr3)
    statement
```
The first expression (*expr1*) is evaluated (executed) once unconditionally at the beginning of the loop.

In the beginning of each iteration, *expr2* is evaluated. If it evaluates to TRUE, the loop continues and the nested statement(s) are executed. If it evaluates to FALSE, the execution of the loop ends.

At the end of each iteration, *expr3* is evaluated (executed).

Consider the following examples. All of them display the numbers 1 through 10:

```php
<?php
/* example 1 */

for ($i = 1; $i <= 10; $i++) {
    echo $i;
}
```

```php
<?php
/* example 2 */

for ($i = 1; ; $i++) {
    if ($i > 10) {
        break;
    }
    echo $i;
}
```

```php
<?php
/* example 3 */

$i = 1;
for (; ; ) {
    if ($i > 10) {
        break;
    }
    echo $i;
    $i++;
}
```
