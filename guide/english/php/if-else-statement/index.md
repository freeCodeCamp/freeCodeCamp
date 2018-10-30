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
> **Note:** The `else` statement is optional.
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
> **Note:** `elseif` should always be written as one word.
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

## Shorthand If / Else Examples
Basic True / False Declaration
```
<?php
  $is_admin = ($user['permissions'] == 'admin') ? true : false;
```
Conditional Welcome Message
```
<?php
  echo 'Welcome '.($user['is_logged_in'] ? $user['first_name'] : 'Guest').'!';
```
Conditional Items Message
```
<?php
  echo 'Your cart contains '.$num_items.' item'.($num_items != 1 ? 's' : '').'.';
```
Conditional Error Reporting Level
```
<?php
  error_reporting($WEBSITE_IS_LIVE ? 0 : E_STRICT);
```
Conditional Basepath
```
<?php
  echo '<base href="http'.($PAGE_IS_SECURE ? 's' : '').'://mydomain.com" />';
```
Nested PHP Shorthand
```
<?php
  echo 'Your score is:  '.($score > 10 ? ($age > 10 ? 'Average' : 'Exceptional') : ($age > 10 ? 'Horrible' : 'Average') );
```
Leap Year Check
```
<?php
  $is_leap_year = ((($year % 4) == 0) && ((($year % 100) != 0) || (($year %400) == 0)));
```
Conditional PHP Redirect
```
<?php
  header('Location: '.($valid_login ? '/members/index.php' : 'login.php?errors=1')); exit();
```

## Ternary Operators

Another important option to consider when using short If/Else statements is the ternary operator.

Also there is an alternative syntax for control structures
~~~~
  if (condition1):
    statement1;
  endif;
  else
    statement5;
~~~~
For more information check out the following link:
<a href='http://php.net/manual/en/control-structures.alternative-syntax.php' target='_blank' rel='nofollow'>PHP Alternative syntax for control structures</a>

For more information please check out the following link:
[PHP: if](http://php.net/manual/en/control-structures.if.php)
