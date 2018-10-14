---
title: Switch
---
## Overview
`Switch` is a selection statement that will select a switch statement and execute it from the list of candidates. Switch consists of `case` and an optional `default`. The execution can be stopped by using a `break` or `return`.

## Syntax
```php
switch(x)
{
    case value1:
      //code
      break;
    case value2:
      //code
      break;

    ...

    default:
      // execute if cases above do not apply
}
```


## Example
```php

<?php
//initialize with a random integer within range
$diceNumber = mt_rand(1, 6);

//initialize
$numText = "";

//calling switch statement
  switch($diceNumber)
  {
  case 1:
    $numText = "One";
    break;
  case 2:
    $numText = "Two";
    break;
  case 3:
  case 4:
    // case 3 and 4 will go to this line
    $numText = "Three or Four";
    break;
  case 5:
    $numText = "Five";
    echo $numText;
    // break; //without specify break or return it will continue execute to next case.
  case 6:
    $numText = "Six";
    echo $numText;
    break;
  default:
    $numText = "unknown";
  }

  //display result
  echo 'Dice show number '.$numText.'.';
?>
```

## Output
```
if case is 1
> Dice show number One.

if case is 2
> Dice show number Two.

if case is 3
> Dice show number Three or Four.

if case is 4
> Dice show number Three or Four.

if case is 5
> FiveSixDice show number Six.

if case is 6
> SixDice show number Six.

if none of the above
> Dice show number unknown.
```

#### More Information:
* <a href="https://secure.php.net/manual/en/control-structures.switch.php" rel="nofollow">php.net docs Switch</a>
