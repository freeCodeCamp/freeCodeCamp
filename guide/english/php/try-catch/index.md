---
title: try catch
---

## Try Catch in PHP

When working in PHP, it is considered good practice to utilize error handling within your code. This allows you to return error messages, rather than crashing returning nothing, or worse, crashing your application. There are many ways to utilize Exceptions in PHP, but a common one is the Try Catch block.


## Syntax

The syntax for a try catch starts with a try statement, followed by code to be executed, which is then followed by a catch statement with some form of error handling.

```
<?php

try {
	//Code to be executed.
} catch (Exception $e) {
	//Code to handle the exception
}


```


## Example

Below is an example of how you could use a try catch block in a real world situation:

```
<?php

$numOne = 123;
$numTwo = 456;

public function sum ($numOne, $numTwo = null) {

	try {
		$sum = $numOne + $numTwo;
		//code with error
	
	} catch (Exception $e) {
		echo $e; // echos the error that occured.
	}
	
}

```

## Use Cases
It is important to add error handling to your code to ensure that you are handling and responding to errors accordingly. A try catch block can be used anywhere from functions you write, API calls, and even database queries to handle an array of arrays.

## Additional Info

For more information, please see [PHP: Exceptions](http://php.net/manual/en/language.exceptions.php#language.exceptions.catch)
