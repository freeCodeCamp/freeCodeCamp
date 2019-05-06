---
title: PHP Syntax
---

# Basic PHP Syntax

### Start
All PHP files are saved by the extension ` .php `. PHP scripts can be added anywhere in the document. A PHP script starts with ` <?php ` and ends with ` ?> `.

` <?php   //PHP code goes here  ?> `

### Print
To print any statement in PHP we use `echo` command.

#### Code sample
```php
<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page</h1>

<?php
echo "Hello World!";
?>

</body>
</html>
```
##### NOTE: PHP statements ends with semicolon `;`

### Declaring Variables
We declare variables in PHP by adding dollar `$` sign before them.
```php
<?php
$x = 5;
echo $x;
?>
```

### Comments in PHP
To write a single line comment in PHP we put hashtag `#` or by putting `//` before the comment.

```php
<?php
# This is a single line comment
// This is also a single line comment
?>
```

To write a multiple line comment we start the comment with `/*` and end with `*/`.
```php
<?php
/* This is a
Multiple line comment. */
?>
```
We can also comment out some parts of the code line.

#### Code Sample
```php
<!DOCTYPE html>
<html>
<body>

<?php
// You can also use comments to leave out parts of a code line
$x = 5 /* + 15 */ + 5;
echo $x;
?>

</body>
</html>
```

You can see more about this on [PHP Manual](http://php.net/manual/en/)
