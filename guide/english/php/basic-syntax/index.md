---
title: Basic Syntax
---
# Basic Syntax

A PHP script can be placed anywhere in the document.

A PHP script starts with `<?php` and ends with `?>`

Below, we have an example of a simple PHP file, with a PHP script that uses a built-in PHP function "echo" to output the text "Hello World!" on a web page

````<!DOCTYPE html>
<html>
<body>

<h1>My first PHP page</h1>

<?php echo "Hello World!"; ?>

</body>
</html> 
````


The output of that would be :

```` 
My first PHP page

Hello World!
````

#### Note: PHP statements end with a semicolon (;).

# Comments in PHP

PHP supports several ways of commenting:

````
<!DOCTYPE html>
<html>
<body>

<?php
// This is a single-line comment

# This is also a single-line comment

/*
This is a multiple-lines comment block
that spans over multiple
lines
*/

// You can also use comments to leave out parts of a code line
$x = 5 /* + 15 */ + 5;
echo $x;
?>

</body>
</html>
````

# PHP Case Sensitivity

In PHP, all keywords (e.g. if, else, while, echo, etc.), classes, functions, and user-defined functions are NOT case-sensitive.

In the example below, all three echo statements are legal (and equal):

````
<!DOCTYPE html>
<html>
<body>

<?php
ECHO "Hello World!<br>";
echo "Hello World!<br>";
EcHo "Hello World!<br>";
?>

</body>
</html>
````

### However; all variable names are case-sensitive.

In the example below, only the first statement will display the value of the $color variable (this is because $color, $COLOR, and $coLOR are treated as three different variables):

````
<!DOCTYPE html>
<html>
<body>

<?php
$color = "red";
echo "My car is " . $color . "<br>";
echo "My house is " . $COLOR . "<br>";
echo "My boat is " . $coLOR . "<br>";
?>

</body>
</html>
````
