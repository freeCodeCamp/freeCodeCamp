---
title: Type Casting
---

## Type Casting in PHP

In PHP, variable types are not explicitly declared. Instead, a variables type is determined by what value is assigned to that variable. That is to say, if a string value is assigned to variable $var, $var becomes a string. If an integer value is then assigned to $var, $var becomes an integer.

As you can imagine, this can cause some issues at times. For example, if I assign a variable the value "123", it is a string, but if I assign it 123, it will be an int.

Sometimes we want to ensure that a variable is of a certain type, and that is where type casting comes in. It allows us to define the type of a variable to ensure we get the correct value from that variable.

## Syntax

To cast a variable to a specific type, simply write the type inside parenthesis in front of the variable.


```
<?php

(string) $string = 'abc';
(int) $num = 123;
```
Below are some more examples of type casted variables;

```
<?php

(int) $num = 123;
(bool) $bool = false;
(float) $float = 
(double) $double = 
(string) $string = "abc";
(array) $arr = [];
(unset) $null = null;
```
You can use type casting inside of functions to predetermine variable types passed into that function.

```
public function foo ( (string) $myString, (int) $myInt) {
   //Code Here
}

```


## List of Types

Below is a list of casts that are allowed:

(int), (integer) - cast to integer </br>
(bool), (boolean) - cast to boolean </br>
(float), (double), (real) - cast to float </br>
(string) - cast to string </br>
(array) - cast to array </br>
(object) - cast to object </br>
(unset) - cast to NULL </br>


For more information, please see [PHP: Type Juggling](http://php.net/manual/en/language.types.type-juggling.php)
