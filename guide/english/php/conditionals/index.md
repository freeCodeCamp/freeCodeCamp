---
title: Conditionals
---
## Conditionals
Conditionals in PHP are written using the `if`, `elseif`, `else` syntax. Using conditionals allows you to perform different actions depending on different inputs and values provided to a page at run time. In PHP conditionals are often referred to as control structures.

### If
```PHP
<?php
if ($_GET['name'] == "freecodecamp"){
  echo "You viewed the freeCodeCamp Page!";
}
```
### Elseif
```PHP
<?php
if ($_GET['name'] == "freecodecamp"){
  echo "You viewed the freeCodeCamp Page!";
} elseif ($_GET['name'] == "freecodecampguide"){
  echo "You viewed the freeCodeCamp Guide Page!";
}
```
### Else
```PHP
<?php
if ($_GET['name'] == "freecodecamp"){
  echo "You viewed the freeCodeCamp Page!";
} elseif ($_GET['name'] == "freecodecampguide"){
  echo "You viewed the freeCodeCamp Guide Page!";
} else {
  echo "You viewed a page that does not exist yet!";
}
```
### Note
In cases where you have a lot of possible conditions you may want to use a <a href="/php/switch">Switch Statement</a>.

#### More Information:
* <a href="https://secure.php.net/manual/en/control-structures.elseif.php" rel="nofollow">php.net control structures manual</a>
