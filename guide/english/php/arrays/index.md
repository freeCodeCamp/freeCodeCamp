---
title: Arrays
---
## Arrays

Arrays are like regular variables, but hold multiple values in an ordered list. This can be useful if you have multiple values that are all related to each other, like a list of student names or a list of capital cities.

### Types Of Arrays
In PHP, there are two types of arrays: Indexed arrays and Associative arrays. Each has their own use and we'll look at how to create these arrays.

### Indexed Array Example
An indexed array is a list of ordered values. Each of these values in the array is assigned an index number. Indexes for arrays always start at `0` for the first value and then increase by one from there.

```php
<?php
$shopping_list = array("eggs", "milk", "cheese");
```
`$shopping_list[0]` would return `"eggs"`, `$shopping_list[1]` would return `"milk"`, and `$shopping_list[2]` would return `"cheese"`.

### Associative Array Example
An associative array is a list of values that are accessed via a key instead of index numbers. The key can be any value but it must be unique to the array. 

```php
<?php
$student_scores = array("Joe" => 83, "Frank" => "93", "Benji" => "90");
```
`$student_scores['Joe']` would return `83`, `$student_scores['Frank']` would return `93`, `$student_scores['Benji']` would return `90`.

### Multidimensional Array Example
A multidimensional array is an array that contains other arrays. This lets you create complex data structures that can model a very complex group of data.
```php
<?php
$students = 
  array(
    array("first_name" => "Joe", "score" => 83, "last_name" => "Smith"),
    array("first_name" => "Frank", "score" => 92, "last_name" => "Barbson"),
    array("first_name" => "Benji", "score" => 90, "last_name" => "Warner")   
  );
```

Now you can get the first student's `first_name` with:
```PHP
$students[0]['first_name']
```

### Get The Length of an Array - The count() Function
The `"count()"` function is used to return the length (the number of elements) of an array:
```php
<?php
<?php
$cars = array("Volvo", "BMW", "Toyota");
echo count($cars);
?>
```

#### More Information:
* <a href="https://secure.php.net/manual/en/language.types.array.php" rel="nofollow">php.net arrays manual</a>