---
title: PHP Data Types
---

## PHP Data Types

Variables can store data of different types such as:
* String ("Hello")
* Integer (5)
* Float (also called double) (1.0)
* Boolean ( 1 or 0 )
* Array ( array("I", "am", "an", "array") )
* Object
* NULL
* Resource

### PHP String

A string is a sequence of characters. It can be any text inside quotes (single or double):

#### Example
```php
$x = "Hello!";
$y = 'Hello!';
```

### PHP Integer

An integer data type is a non-decimal number between -2,147,483,648 and 2,147,483,647.

Rules for integers:

* An integer must have at least one digit
* An integer must not have a decimal point
* An integer can be either positive or negative
* Integers can be specified in three formats: decimal (10-based), hexadecimal (16-based - prefixed with 0x) or octal (8-based - prefixed with 0)

#### Example
`$x = 5;`


### PHP Float

A float (floating point number) is a number with a decimal point or a number in exponential form.

#### Example
`$x = 5.01;`

### PHP Boolean

A Boolean represents two possible states: TRUE or FALSE. Booleans are often used in conditional testing.

```php
$x = true;
$y = false;
```

### PHP Array

An array stores multiple values in one single variable.

`$colours = array("Blue","Purple","Pink");`


### PHP NULL Value

Null is a special data type which can have only one value: NULL.
A variable of data type NULL is a variable that has no value assigned to it.
Variables can also be emptied by setting the value to NULL.

**Note:** If a variable is created without a value, it is automatically assigned a value of NULL.

```php
<?php
$x = "Hello world!";
$x = null;
?>
```

Output:
NULL


### PHP Object

An object is a data type which stores data and information on how to process that data.
In PHP, an object must be explicitly declared.
First we must declare a class of object. A class is a structure that can contain properties and methods.

**Example:**
```php
<?php
class Car {
    function Car() {
        $this->model = "VW";
    }
}

// create an object
$herbie = new Car();

// show object properties
echo $herbie->model;
?>
```
