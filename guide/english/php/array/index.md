---
title: array
---

## Introduction to PHP Array

An array can be thought of as a collection of items.

## Syntax

An array is defined by `array()`, or `[]`.

An example of an array in each style can be seen below:

```php
<?php

$bikes = array('Suzuki','BMW','Yamaha');

// OR

$bikes = ['Suzuki', 'BMW', 'Yamaha'];
```

## Associative array (key => value)

PHP arrays can store more than one type of value at a time:
```
<?php

$arr = array('Suzuki', 3.1415, false, -273);
```
As you can see there is a string, a float number, a boolean valuea and an integer number.


Arrays can also be defined with named keys, as shown below:

```php
<?php

$bikes = [
    'favorite'        => 'Suzuki',
    'second favorite' => 'BMW',
    'not my favorite' => 'Yamaha'
];
```

## Accessing Items

Items within an array can be accessed by their corresponding key, or location within the array.

For instance:

```php
<?php

$bikes = ['Suzuki', 'BMW', 'Yamaha'];

echo 'I like '. $bikes[0];
```

Would produce the following output:

```
I like Suzuki
```

Another example, using named keys can be seen below:
```php
<?php

$bikes = [
    'favorite'        => 'Suzuki',
    'second favorite' => 'BMW',
    'not my favorite' => 'Yamaha'
];

echo 'I like '. $bikes['not my favorite'];
```

Would produce the following output:

```
I like Yamaha
```

## Add Item

Is possible to add any item to an existing array.

An example of addition can be seen below:

```
<?php

$bikes = array('Suzuki', 'BMW');

$bikes[] = 'Yamaha';
```

Another example, using named keys can be seen below:

```
<?php

$bikes = [
    'favorite'        => 'Suzuki',
    'second favorite' => 'BMW'
];

$bikes['not my favorite'] = 'Yamaha';
```

## Multidimensional Array

As we mentioned earlier arrays are collection of items, often times these items may be arrays of themselves. 
![alt text](https://preview.ibb.co/hLBfcf/img.png "Screenshot of multidimensional arrays")

You will always be able to get the value for the specific key by going down the layers: $arr['layerOne']['two']


## Pitfalls

When working with arrays, there are a few important things to keep in mind:

1) A comma after the last element is optional.
2) Named keys must use quotes to be accessed (i.e. $bikes[not my favorite] would not work).

For more information, please see [PHP: Arrays](http://php.net/manual/en/language.types.array.php)


## Length of an Array

The count() function is used to return the length (the number of elements) of an array:

<?php
    $cars = array("Volvo", "BMW", "Toyota");
    echo count($cars);
?>
