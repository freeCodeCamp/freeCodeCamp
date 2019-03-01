---
title: If-else Statement
---
## Introduction
If/Else is a conditional statement where depending on the truthiness of a condition, different actions will be performed.  

> **Note:** The `{}` brackets are only needed if the condition has more than one action statement; however, it is best practice to include them regardless.

## If Statement

```
<?php

  if (condition) {
    statement1;
    statement2;
  }
```
> **Note:** You can nest as many statements in an "if" block as you'd like; you are not limited to the amount in the examples.
## If/Else Statement

```
<?php

  if (condition) {
    statement1;
    statement2;
  } else {
    statement3;
    statement4;
  }
```
> **Note:** The `else` statement is optional.
## If/Elseif/Else Statement

```
<?php

  if (condition1) {
    statement1;
    statement2;
  } elseif (condition2) {
    statement3;
    statement4;
  } else {
    statement5;
  }
```
> **Note:** `elseif` should always be written as one word.
## Nested If/Else Statement

```
<?php

  if (condition1) {
      if (condition2) {
        statement1;
        statement2;
      } else {
        statement3;
        statement4;
      }
  } else {
      if (condition3) {
        statement5;
        statement6;
      } else {
        statement7;
        statement8;
      }
  }
```

## Multiple Conditions

Multiple conditions can be used at once with the "or" (||), "xor", and "and" (&&) logical operators.

For instance:

```
<?php

  if (condition1 && condition2) {
    echo 'Both conditions are true!';
  } elseif (condition 1 || condition2) {
    echo 'One condition is true!';
  } else (condition1 xor condition2) {
    echo 'One condition is true, and one condition is false!';
  }
```
> **Note:** It's a good practice to wrap individual conditions in parens when you have more than one (it can improve readability).

## Ternary Operators

Another important option to consider when using short If/Else statements is the ternary operator.

```php
  $statement=(condition1 ? "condition1 is true" : "condition1 is false");
```

## Alternative If/Else Syntax

There is also an alternative syntax for control structures

```php
  if (condition1):
    statement1;
  else:
    statement5;
  endif;
```    

#### More Information:
* <a href='http://php.net/manual/en/control-structures.alternative-syntax.php' target='_blank' rel='nofollow'>PHP Alternative syntax for control structures</a>
* <a href="http://php.net/manual/en/control-structures.if.php" rel="nofollow">php.net control structures If Manual</a>
* <a href="https://secure.php.net/manual/en/control-structures.elseif.php" rel="nofollow">php.net control structures Else If Manual</a>