---
title: Switch
---
## Switch
In PHP, the `Switch` statement is very similar to the Javascript `Switch` statement (See the <a href="/javascript/switch-statements">Javascript Switch Guide</a> to compare and contrast). It allows rapid case testing with a lot of different possible conditions, the code is also more readable.

### Syntax
```php
<?php
	// Switch Statement Example
	switch ($i) {
    	case "free":
    	    echo "i is free";
    	    break;
    	case "code":
    	    echo "i is code";
    	    break;
    	case "camp":
    	    echo "i is camp";
    	    break;
    	default:
    	    echo "i is freecodecamp";
            break;
	}

```

### Break
The `break;` statement exits the switch and goes on to run the rest of the application's code. If you do not use the `break;` statement you may end up running mulitple cases and statements, sometimes this may be desired in which case you should not include the `break;` statement.

An example of this behavior can be seen below:

```
<?php
    $j = 0;

    switch ($i) {
        case '2':
            $j++;
        case '1':
            $j++;
            break;
        default:
            break;
    }
```

If $i = 1, the value of $j would be:

```
1
```

If $i = 2, the value of $j would be:

```
2
```

While break can be omitted without causing fall-through in some instances (see below), it is generally best practice to include it for legibility and safety (see below):

```
<?php
    switch ($i) {
        case '1':
            return 1;
        case '2':
            return 2;
        default:
            break;
     }
```
```
<?php
    switch ($i) {
        case '1':
            return 1;
            break;
        case '2':
            return 2;
            break;
        default:
            break;
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
* [php.net docs Switch](https://secure.php.net/manual/en/control-structures.switch.php")
