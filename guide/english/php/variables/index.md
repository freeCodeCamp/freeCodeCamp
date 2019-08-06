---
title: Variables
---

## Variables
# Creating (Declaring) PHP Variables

Variables are "containers" for storing information. They are the main way to store information in a PHP program. 

All variables in PHP are denoted with a leading dollar sign like "$variable_name".
Variables are assigned with the "=" operator, with the variable on the left-hand side and the expression to be evaluated on the right.

**Syntax:**

```php
<?php
// Assign the value "Hello world" to the variable "txt"
$txt = "Hello world!";
// Assign the value "5" to the variable "x"
$x = 5;
// Assign the value "10.5" to the variable "y"
$y = 10.5;
?>
```

##### Note: Using quotes or not using quotes will change the type of variable created. [Read more](https://guide.freecodecamp.org/php/data-types) about variable and data types.

##### Note: Unlike other programming languages, PHP has no command for declaring a variable. It is created the moment you first assign a value to it.

# Rules for PHP variables:

* A variable starts with the $ sign, followed by the name of the variable
* A variable name must start with a letter or the underscore character
* A variable name cannot start with a number
* A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ ) You cannot use characters like `+ , - , % , ( , ) . &` in its name.
* Variable names are case-sensitive ($age and $AGE are two different variables)

Some examples of allowed variable names:

* $my_variable
* $anotherVariable
* $the2ndVariable

# Predefined Variables

PHP has several special keywords that while are "valid" variable names, cannot be used for your variables. The reason for this is that the language itself has already defined those variables and they have are used for special purposes. Several examples are listed below, for a complete list see the [PHP documentation site](https://secure.php.net/manual/en/language.variables.predefined.php).
-  `$this`
- `$_GET`
- `$_POST`
- `$_SERVER`
- `$_FILES`

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

# Variable lifecycle

In PHP variables have a default value. If a variable is not declared before you attempt to use it, its value will be NULL. It is unset. So you can't use it by writing "isset($variable)" before using it.

#### More Information:

For even more information check out these resources: 
- [PHP Variable Documentation](http://php.net/manual/en/language.variables.php)
- [W3Schools PHP Variables](https://www.w3schools.com/php/php_variables.asp)
- [PHP Data Types](https://guide.freecodecamp.org/php/data-types)
Learn about the different types of variables you can create: [Data Types](https://guide.freecodecamp.org/php/variables/data-types)
<!-- Please add any articles you think might be helpful to read before writing the article -->

