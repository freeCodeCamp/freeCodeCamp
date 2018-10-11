---
title: PHP Variables
---

## Variables
Variables are "containers" for storing information. Variables are declared using the dollar ($) sign followed immediately by the variable name. For example, the code block below would create a variable called `myVariable` and assign the string `Hello World` to it. 

```php
<?php
$myVariable = "Hello World";
$x = 5;
$y = 10.5;
$z = '42';
?>
```

After the execution of the statements above, the variable `$myVariable` will hold a string with a value of Hello world!, the variable `$x` will hold a integer with a value of 5, and the variable `$y` will hold a float with a value of 10.5, and the variable `$z` will hold a string with a value of 42.

# Naming Variables

As with any programming language, PHP has certain rules that apply to naming variables. Valid variable names will follow the following rules

* A variable must start with the $ sign, followed by the name of the variable
* A variable name must start with a letter or the underscore character
* A variable name cannot start with a number
* A variable name can only contain alpha-numeric characters and underscores (A-z, 0-9, and _ )
* Variable names are case-sensitive ($age and $AGE are two different variables)

# Predefined Variables

PHP has several special keywords that while are "valid" variable names, cannot be used for your variables. The reason for this is that the language itself has already defined those variables and they have are used for special purposes. Several examples are listed below, for a complete list see the [PHP documentation site](https://secure.php.net/manual/en/language.variables.predefined.php).
-  `$this`
- `$_GET`
- `$_POST`
- `$_SERVER`
- `$_FILES`

# Assigning Values to Variables

To assign a value to a variable, you simply type the variable followed by the equals operator ( = ) followed by the value. For example

``` PHP
$myVariable = "Hello World";
$number1 = 5;
$number2 = 10;
$total = $number1 + $number2; 
```

You may have noticed several important things about the example above. The first variable I declared it equal to **Hello World**, surrounded by quotation marks. This is because **Hello World** is a string of text and strings must be surrounded by quotation marks. 
The second line I declared `$number1` to be equal to the value of 5. I could have declared `$number1` to be equal to `"5"`, which would tell PHP I want the 5 to be stored as a string, not a actual value. The difference is that you cannot perform calculation (as I did in the 4th line) on strings.
The fourth line I declare `$total` to be equal to the values of `$number1` plus `$number2`. This is called declaring a value by reference. 

# PHP is a Loosely Typed Language

In the example above, notice that we did not have to tell PHP which data type the variable is.
PHP automatically converts the variable to the correct data type, depending on its value.
In other languages such as C, C++, and Java, the programmer must declare the name and type of the variable before using it.

# Conclusion
PHP makes it easy to work with variables, and you should think of variables as containers to store information. For even more information check out these resources: 
- [PHP Variable Documentation](http://php.net/manual/en/language.variables.php)
- [W3Schools PHP Variables](https://www.w3schools.com/php/php_variables.asp)
- [PHP Data Types](https://guide.freecodecamp.org/php/data-types)
