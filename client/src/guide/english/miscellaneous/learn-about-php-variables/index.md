---
title: Learn About Php Variables
---
Variables are containers for storing data such as `strings`, `integers`, `boolean` values, `array` and objects.

PHP follows certain rules for variable declarations such as:

*   The variable must begin with a dollar sign ($)

Example:

`php  
<?php  
$var = 5;  
?>` 

*   The variable name can contain characters such as A-Z, a-z, 0-9, _ and <a href='http://www.asciitable.com/ "ASCII Table"' target='_blank' rel='nofollow'>ASCII</a> characters from 127-255.

Example:

`php  
<?php  
$var = 5; //Valid  
$var_1 = "Foo"; //Valid  
$_var2 = 'Bar'; //Valid  
$var.3 = 'Baz'; //Invalid  
?>` 

*   The variable name can begin with underscore (_).

Example:

`php  
<?php  
$_var2 = 'Bar'; //Valid  
?>` 

*   The variable name must not begin with a number 0-9.

Example:

`php  
<?php  
$9var3 = 'Baz'; //Invalid  
?>` 

*   The variable name is case sensitive.

Example:

    <?php
        $var = 5; //Valid
        $VAR = "Foo"; //Valid
        echo $var; //Output 5
        echo "<br>";
        echo $VAR; //Output Foo
    ?>

PHP is a loosely typed language, hence we don't need to declare the data type of a variable when declaring the variable. Unlike Java or C.

    <?php
        $var = 5; 
        $var2 = 4; 
        $sum = $var+$var2;
        echo $sum; //Output 9
        echo "<br>";
        echo $var+$var2; //Output 9
    ?>

The variables can also be assigned by referencing. This allows two variables to refer to the same content. The `&` operator is placed before the variable that is to be referenced.

Example :

    <?php
        $var1 = "foo";
        $var2 = "bar";

    myTest($var1, $var2);

    echo $var1; //Output foo
    echo $var2; //Output BAR

    function myTest($var1, &$var2){
        $var1 = "FOO";
        $var2 = "BAR";
    }
    ?>

To have variable names set dynamically we use the variable variables. This can be particularly useful when there is a need to create multiple variables.

Example :

    <?php

        $var = 'Tom'; 
        echo $var;      //Output Tom
        $$var = 'Cat'; //The value of $$var is the value of $var. So $$var and $Tom give the same output.
        echo $$var;   //Output Cat
        echo $Tom;   //Output Cat
    ?>

# Variable Scope

Scope of variable refers to the places from where a variable is accessible.

*   Global scope is for the variables that are declared outside a function. These variables can be accessed from anywhere but not within a function.
*   Local scope is for the variables declared within a function that can not be accessed from anywhere outside the function.

Example:

    <?php
       $global = "Hello";

      function Test(){
       $local = "World";
       echo $global; //Error
       echo $local; //Output World
      }

       Test();
       echo $global; //Output Hello
       echo $local; //Error
    ?>

To access global variables inside a function:

    <?php
       $global = "Hello";

     function Test(){
       global $global;
       $local = "World";
       echo $global; //Output Hello
       echo $local; //Output World
      }

       Test();
       echo $global; //Output Hello
       echo $local; //Error
    ?>

# Static Variables

Everytime a function is created all of its local variables are deleted. To retain the variable's last value we declare it `static`.

Example :

    <?php

     function WithStatic(){
       static $var = 0;
       echo $var;
       $var++;
      }

       WithStatic(); //Output 0
       WithStatic(); //Output 1
       WithStatic(); //Output 2

     function WithoutStatic(){
       $var = 0;
       echo $var;
       $var++;
      }

       WithoutStatic(); //Output 0
       WithoutStatic(); //Output 0
       WithoutStatic(); //Output 0
    ?>