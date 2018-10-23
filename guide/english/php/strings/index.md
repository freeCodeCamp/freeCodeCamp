---
title: Strings
---
## Strings
A string is a sequence of characters, like "Hello world!".

## PHP String Functions
In this chapter we will look at some commonly used functions to manipulate strings.

## Get The Length of a String
The PHP strlen() function returns the length of a string.
The example below returns the length of the string "Hello world!":
````
<?php
echo strlen("Hello world!"); // outputs 12
?>
````
A string is series of characters.
PHP only supports a 256-character set and hence does not offer native Unicode support.

## Count The Number of Words in a String
The PHP str_word_count() function counts the number of words in a string:
````
<?php
echo str_word_count("Hello world!"); // outputs 2
?>
````

## Reverse a String
The PHP strrev() function reverses a string:
````
<?php
echo strrev("Hello world!"); // outputs !dlrow olleH
?>
````

## Search For a Specific Text Within a String
The PHP strpos() function searches for a specific text within a string.
If a match is found, the function returns the character position of the first match. If no match is found, it will return FALSE.
The example below searches for the text "world" in the string "Hello world!":
````
<?php
echo strpos("Hello world!", "world"); // outputs 6
?>
````

## Replace Text Within a String
````
<?php
echo str_replace("world", "Dolly", "Hello world!"); // outputs Hello Dolly!
?>
````

#### More Information:
[PHP String tutorial](https://www.w3schools.com/php/php_string.asp)
