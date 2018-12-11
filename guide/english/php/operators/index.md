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
