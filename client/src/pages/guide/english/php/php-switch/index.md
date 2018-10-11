---
title: PHP Switch
---
## PHP Switch

The `switch` statement in PHP is similar to a series of `if ` statements on same expression. The `switch` statement is used to execute different actions at different conditions. The Syntax of the `switch` statement is follows

```
switch (expression) {

    case label1:
        // code block to be executed if there is a match with result of expression
        break;      
    case label2:
        // code block to be executed if there is a match with result of expression
        break;
    case label3:
        // code block to be executed if there is a match with result of expression
        break;
    default:
        // code block to be executed if there is no match with result of expression

}

```
When we run the program , the expression inside the `switch` statement is evaluated. The result of that expression is checked with corresponding labels if there is a match then corresponding `case` block is executed.  If no match is found with any of the case statements, only the block of code following the `default` are executed. 

Illustration of `switch` statement with an example

```
<?php

$i = 1
switch ($i) {
    case 0:
        echo "i equals 0";
        break;
    case 1:
        echo "i equals 1";
        break;
    case 2:
        echo "i equals 2";
        break;
}

?>

```
The `switch` statement can also be used without `break` statement. In that case , statements after the matched cases will be executed. Below is an usage of `switch` statement without `break` statement.

```
<?php
switch ($i) {
    case 0:
        echo "i equals 0";
    case 1:
        echo "i equals 1";
    case 2:
        echo "i equals 2";
}
?>

/*output --> i equals 0i equals 1i equals 2 */

```
#### More Information:
[Switch Statement - PHP Documentation](http://php.net/manual/en/control-structures.switch.php)

[PHP5 Switch - W3Schools](https://www.w3schools.com/php/php_switch.asp)
