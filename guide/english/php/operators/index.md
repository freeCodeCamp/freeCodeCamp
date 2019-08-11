---
title: Operators
---

## Operators


PHP contains all the normal operators one would expect to find in a programming language. 

A single “=” is used as the assignment operator and a double “==” or triple “===” is used for comparison. 

The usual “<” and “>” can also be used for comparison and “+=” can be used to add a value and assign it at the same time.

Most notable is the use of the “.” to concatenate strings and “.=” to append one string to the end of another. 

New to PHP 7.0.X is the Spaceship operator (<=>).
The spaceship operator returns -1, 0 or 1 when $a is less than, equal to, or greater than $b.

```php
<?php

echo 1 <=> 1; // 0
echo 1 <=> 2; // -1
echo 2 <=> 1; // 1

```
### Ternary Operators

If you need a very short, simple, easy maintaining that work just like if else statement then php give you ternary operator. A very poweful but easy operator. It looks like this - (?:). Simple, right? Lets get to examle.

Suppose you need to send a massage that if the user is logged in then say 'Hello user_name' if not then 'Hello guest'.

if we use if-else statement:
```
if($user == !NULL {
  $message = 'Hello '. $user; 
} else {
  $message = 'Hello guest';
}
```
Using ternary operator:

```
$message = 'Hello '.($user == !NULL ? $user : 'Guest');
```
Both of them do exactly same thing. But the later one is easy for maintainance.

#### More Resources
- [PHP Shorthand If/Else Using Ternary Operators (?:)](https://davidwalsh.name/php-shorthand-if-else-ternary-operators)
