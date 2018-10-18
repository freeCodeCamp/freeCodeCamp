---
title: Echo and Print
---
## Echo and Print
The echo and print functions provide a way to write out the value of a variable or argument to the screen.

### echo
The `echo()` function writes out the value of a variable or argument to the screen.
```PHP
<?php
echo "freeCodeCamp";
```
NOTE: A short hand way to open the PHP tag and echo is <?=
```
<?= "freeCodeCamp"; ?>
```

### print
The `print()` function out the value of a variable or argument to the screen.
```PHP
<?php
print "freeCodeCamp";
```

### print_r
The `print_r()` function writes out the value of any variable (such as an array) or argument to the screen, unlike the echo or print functions which are more limited.
```PHP
<?php
$freecodecamp = "freeCodeCamp";
print_r($freecodecamp);
```

#### More Information:
* <a href="https://secure.php.net/manual/en/function.echo.php" rel="nofollow">php.net echo() manual</a>
* <a href="https://secure.php.net/manual/en/function.print.php" rel="nofollow">php.net print() manual</a>
* <a href="https://secure.php.net/manual/en/function.print-r.php" rel="nofollow">php.net print_r() manual</a>
