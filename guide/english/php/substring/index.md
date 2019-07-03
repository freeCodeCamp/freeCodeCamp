---
title: subtring
---

## Substring Function in PHP

The Substring function in PHP returns a portion of the string, specified by two parameters, the start and the length.


## Syntax

The substring function is used like any other function in php, and uses the subtr() syntax.


```
<?php

subtr( $string, $start, $length);


```


## Example

Below is an example of how you could use the substring function in a real world situation:

```
<?php

$apple = 'Apple';
$alphabet = 'abcdefghijklmnopqrstuvwxyz';

substr($apple, 0, 5);  				// Apple;
substr($apple, 0, 3);  				// App;
substr($apple, 3, 2);  				// le;
substr($alphabet, 0, 26);  			// abcdefghijklmnopqrstuvwxyz;
substr($alphabet, 12, 6);  			// mnopqr;

```

## Additional Info

For more information, please see [PHP: Substring](http://php.net/manual/en/function.substr.php)
