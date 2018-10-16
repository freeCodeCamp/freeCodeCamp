---
title: PHP Variables
---

### Overview
Variables are the main way to store information in a PHP program.
All variables in PHP are denoted with a leading dollar sign: `$variable_name`.
Variables are assigned with the `=` operator, with the variable on the left-hand side and the expression to be evaluated on the right.

### Variable Naming
Rules for naming a variable are listed below:-
 1. Variables names must begin with a letter or underscores character.
 2. A variable name can consist of numbers, letters, underscores but cannot have special characters like `+ , - , % , ( , ) . &` in its name.
 3. Variable names are case-sensitive i.e. (`$age` and `$AGE` are two different variables).
 4. Variable names may not clash with php operator names.

### Creating (Declaring) PHP Variables
In PHP, a variable starts with the `$` sign, followed by the name of the variable. The code snippet given below gives an example:

``` php
 <?php
    $txt = "Hello world!";
    $x = 6;
    $y = 10.5;
 ?>
 ```
