---
title: PHP Operators
---
## PHP Operators

Operators are used to perform operations on variables and values.

PHP divides the operators in the following groups:

- Arithmetic operators
- Assignment operators
- Comparison operators
- Increment/Decrement operators
- Logical operators
- String operators
- Array operators

### PHP Arithmetic Operators
The PHP arithmetic operators are used with numeric values to perform common arithmetical operations, such as addition, subtraction, multiplication etc.

Operator | Name           | Example  | Result
-------- | -------------- | -------- | ---
\+       | Addition       | $a + $b  | Sum of $a and $b
\-       | Subtraction    | $a - $b  | Difference of $a and $b
\*       | Multiplication | $a * $b  | Product of $a and $b
\/       | Division       | $a / $b  | Quotient of $a and $b
\%       | Modulus        | $a % $b  | Remainder of $a divided by $b
\**      | Exponentiation | $a ** $b | Result of raising $a to the $b'th power

### PHP Comparison Operators
The PHP comparison operators are used to compare two values

Operator | Name                     | Example   | Result
-------- | ------------------------ | --------- | ---
==       | Equal                    | $a == $b  | Returns **true** if $a is equal to $b
===      | Identical                | $a === $b | Returns **true** if $a is equal to $b, and they are the same type 
!=       | Not equal                | $a != $b  | Returns **true** if $a is not equal to $b
<>       | Not equal                | $a <> $b  | Returns **true** if $a is not equal to $b
!==      | Not identical            | $a !== $b | Returns **true** if $a is not equal to $b, or they are different types
\>       | Greater than             | $a > $b   | Returns **true** if $a is greater than $b
\<       | Less than                | $a < $b   | Returns **true** if $a is less than $b
\>=      | Greater than or equal to | $a >= $b  | Returns **true** if $a is greater than or equal to $b
\<=      | Less than or equal to    | $a <= $b  | Returns **true** if $a is less than or equal to $b
\<=>     | Spaceship                | $a <=> $b | Returns an **integer** less than, equal to, or greater than zero when $a is respectively less than, equal to, or greater than $b.

**Note:** Spaceship operator is available as of PHP 7+
#### Spaceship example
```php
echo 1 <=> 0; // returns 1
echo 1 <=> 1; // returns 0
echo 1 <=> 2; // returns -1
```

#### More Information:
- <a href='http://php.net/manual/en/language.operators.arithmetic.php' target='_blank' rel='nofollow'>Arithmetic Operators</a></li>
- <a href='http://php.net/manual/en/language.operators.assignment.php' target='_blank' rel='nofollow'>Assignment Operators</a></li>
