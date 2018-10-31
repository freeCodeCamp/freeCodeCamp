---
title: default function parameters
---

## Default Function Parameters in PHP

When working with functions in PHP, you will occasionally come accross the need to add default parameters to functions, in the chance that no paremters is passed. This allows you to add in optional parameters to a function, such as additional options or conditions.


## Syntax

The syntax for default function parameters is simple, just set the value of a parameter inside the function delcaration. 


```
<?php

public function foo ($numOne = 1, $numTwo = 2) {
	//Code here
}

```


## Example

Below is an example of how you could use a do while loop in a real world situation:

```
<?php


function sum ($numOne = 1, $numTwo = 2, $wholeNumber = false) {
	$sum = $numOne + $numTwo;
	if ($wholeNumber == false ) {
		echo $sum;
	} else {
		echo round($sum);
	}
}


sum();  				// 3;
sum(4); 				// 6
sum(4, 4); 				// 8
sum(4.5, 12.6);			// 17.1
sum(4.5, 12.6, true);	// 17

```

## Additional Info

For more information, please see [PHP: Function Arguments](http://php.net/manual/en/functions.arguments.php)
