---
title: PHP 5 echo and print Statements
---

In PHP there are two basic ways to get output: echo and print.

In this tutorial we use echo (and print) in almost every example. So, this chapter contains a little more info about those two output statements.

### PHP echo and print Statements

echo and print are used to output data to the screen.

The differences are small:
* echo has no return value while print has a return value of 1 so it can be used in expressions.

* echo can take multiple parameters (although such usage is rare) while print can take one argument. echo is marginally faster than print.

### The PHP echo Statement

The echo statement can be used with or without parentheses: echo or echo().

#### Display Text

The following example shows how to output text with the echo command (notice that the text can contain HTML markup):

#### Example
```php
<?php
echo "<h2>PHP is Fun!</h2>";
echo "Hello world!<br>";
echo "I'm about to learn PHP!<br>";
echo "This ", "string ", "was ", "made ", "with multiple parameters.";
?>
```

#### Display Variables

The following example shows how to output text and variables with the echo statement:

#### Example
```php
<?php
$txt1 = "Learn PHP";
$txt2 = "W3Schools.com";
$x = 5;
$y = 4;

echo "<h2>" . $txt1 . "</h2>";
echo "Study PHP at " . $txt2 . "<br>";
echo $x + $y;
?>
```

### The PHP print Statement

The print statement can be used with or without parentheses: print or print().

#### Display Text

The following example shows how to output text with the print command (notice that the text can contain HTML markup):

#### Example
```php
<?php
print "<h2>PHP is Fun!</h2>";
print "Hello world!<br>";
print "I'm about to learn PHP!";
?>
```

#### Display Variables

The following example shows how to output text and variables with the print statement:

#### Example
```php
<?php
$txt1 = "Learn PHP";
$txt2 = "W3Schools.com";
$x = 5;
$y = 4;

print "<h2>" . $txt1 . "</h2>";
print "Study PHP at " . $txt2 . "<br>";
print $x + $y;
?>
```

### The PHP print_r Statement
The `print_r()` function writes out the value of any variable (such as an array) or argument to the screen, unlike the echo or print functions which are more limited.


#### Display Variables

The following example shows how to output a variable with the print command:

```php
<?php
$freecodecamp = "freeCodeCamp";
print_r($freecodecamp);
```

#### More Information:

* <a href="https://secure.php.net/manual/en/function.echo.php" rel="nofollow">php.net echo() manual</a>
* <a href="https://secure.php.net/manual/en/function.print.php" rel="nofollow">php.net print() manual</a>
* <a href="https://secure.php.net/manual/en/function.print-r.php" rel="nofollow">php.net print_r() manual</a>
