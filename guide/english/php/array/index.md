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

echo 'I like '. $bikes[0]
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

echo 'I like '. $bikes['not my favorite']
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
