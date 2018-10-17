---
title: Variables
---

## Variables
# Creating (Declaring) PHP Variables

Variables are "containers" for storing information.

**Syntax:**

```php
<?php
$txt = "Hello world!";
$x = 5;
$y = 10.5;
?>
```

After the execution of the statements above, the variable $txt will hold the value Hello world!, the variable $x will hold the value 5, and the variable $y will hold the value 10.5.

##### Note: When you assign a text value to a variable, put quotes around the value.

##### Note: Unlike other programming languages, PHP has no command for declaring a variable. It is created the moment you first assign a value to it.

# Rules for PHP variables:

* A variable starts with the $ sign, followed by the name of the variable
* A variable name must start with a letter or the underscore character
* A variable name cannot start with a number
* A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )
* Variable names are case-sensitive ($age and $AGE are two different variables)

# Output Variables

The PHP echo statement is often used to output data to the screen.

The following example will show how to output text and a variable:
````php
<?php
$txt = "github.com";
echo "I love $txt!";
?>
````

The following example will produce the same output as the example above:
````php
<?php
$txt = "github.com";
echo "I love " . $txt . "!";
?>
````

The following example will output the sum of two variables:
````php
<?php
$x = 5;
$y = 4;
echo $x + $y;
?>
````

# PHP is a Loosely Typed Language

In the example above, notice that we did not have to tell PHP which data type the variable is.
PHP automatically converts the variable to the correct data type, depending on its value.
In other languages such as C, C++, and Java, the programmer must declare the name and type of the variable before using it.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

