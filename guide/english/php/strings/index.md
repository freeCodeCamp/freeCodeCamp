---
title: Strings
---
## Strings

A string is series of characters. These can be used to store any textual information in your application.

There are a number of different ways to create strings in PHP.

### Single Quotes

Simple strings can be created using single quotes.
```PHP
$name = 'Joe';
```

To include a single quote in the string, use a backslash to escape it.

```PHP
$last_name = 'O\'Brian';
```


### Double Quotes

You can also create strings using double quotes.
```PHP
$name = "Joe";
```

To include a double quote, use a backslash to escape it.

```PHP
$quote = "Mary said, \"I want some toast,\" and then ran away.";
```

Double quoted strings also allow escape sequences. These are special codes that put characters in your string that represent typically invisible characters. Examples include newlines `\n`, tabs `\t`, and actual backslashes `\\`.

You can also embed PHP variables in double quoted strings to have their values added to the string.
```PHP
$name = 'Joe';
$greeting = "Hello $name"; // now contains the string "Hello Joe"
```


### PHP String Functions
In this chapter we will look at some commonly used functions to manipulate strings.

#### Get The Length of a String
The PHP strlen() function returns the length of a string.
The example below returns the length of the string "Hello world!":
````
<?php
echo strlen("Hello world!"); // outputs 12
?>
````
A string is series of characters.
PHP only supports a 256-character set and hence does not offer native Unicode support.

#### Count The Number of Words in a String
The PHP str_word_count() function counts the number of words in a string:
````
<?php
echo str_word_count("Hello world!"); // outputs 2
?>
````

#### Reverse a String
The PHP strrev() function reverses a string:
````
<?php
echo strrev("Hello world!"); // outputs !dlrow olleH
?>
````

#### Search For a Specific Text Within a String
The PHP strpos() function searches for a specific text within a string.
If a match is found, the function returns the character position of the first match. If no match is found, it will return FALSE.
The example below searches for the text "world" in the string "Hello world!":
````
<?php
echo strpos("Hello world!", "world"); // outputs 6
?>
````

#### Replace Text Within a String
````
<?php
echo str_replace("world", "Dolly", "Hello world!"); // outputs Hello Dolly!
?>
````

### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
* [PHP: Strings](http://php.net/manual/en/language.types.string.php)
* [PHP String tutorial](https://www.w3schools.com/php/php_string.asp)
