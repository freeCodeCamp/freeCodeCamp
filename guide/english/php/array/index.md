---
title: array
---

## Introduction to PHP Array

An array can be thought of as a collection of items.

## Syntax

An array is defined by array(), or [].

An example of an array in each style can be seen below:

```
<?php

$bikes = array('Suzuki','BMW','Yamaha');
```
```
<?php

$bikes = ['Suzuki', 'BMW', 'Yamaha'];
```

## Key => Value

Arrays can also be defined with named keys, as shown below:

```
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

```
<?php

$bikes = ['Suzuki', 'BMW', 'Yamaha'];

echo 'I like '. $bikes[0];
```

Would produce the following output:

```
I like Suzuki
```

Another example, using named keys can be seen below:
```
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
I like BWM
```

## Pitfalls

When working with arrays, there are a few important things to keep in mind:

1) A comma after the last element is optional.
2) Named keys must be escaped to be accessed (i.e. $bikes[not my favorite] would not work).

For more information, please see [PHP: Arrays](http://php.net/manual/en/language.types.array.php)

## Sorting an array

An elements of an array can be sorted in alphabetical or numerical order with ascending and descending it with predefined sorting methods.

### sort() Method

Sorts an elements in an ascending order.

```
<?php 

$myArray = ['Kivi','Lichi','Banana','Apple'];
sort($myArray);
$arrayLength = count($myArray);
for($i = 0; $i < $arrayLength; $i++){
    echo $myArray[$i];
    echo '<br />';
}
?>
```
Would give sorted array in ascending order:

```
Apple
Banana
Kivi
Lichi

```

## rsort() Method

Sorts an elements in a descending order.

```
<?php 

$myArray = ['Kivi','Apple','Banana','Lichi'];
rsort($myArray);
$arrayLength = count($myArray);
for($i = 0; $i < $arrayLength; $i++){
    echo $myArray[$i];
    echo '<br />';
}
?>
```
Would give sorted array in descending order:

```
Lichi
Kivi
Banana
Apple

```
There are more array sorting function.For more information, please visit [PHP: Arrays](http://php.net/manual/en/language.types.array.php)
