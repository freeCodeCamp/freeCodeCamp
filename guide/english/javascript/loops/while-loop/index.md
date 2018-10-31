---
title: While Loop
---
The while loop starts by evaluating the condition. If the condition is true, the statement(s) is/are executed. If the condition is false, the statement(s) is/are not executed. After that, while loop ends.

Here is the **syntax** for while loop:

## Syntax:

    while (condition)
        code to be executed
    {

      statement(s);

    }

_statement(s):_ A statement that is executed as long as the condition evaluates to true.

_condition:_ Here, condition is a Boolean expression which is evaluated before each pass through the loop. If this condition evaluates to true, statement(s) is/are executed. When condition evaluates to false, execution continues with the statement after the while loop.

## Example:

        var i = 1;
        while (i < 10) 
        {
          console.log(i);
           i++; // i=i+1 same thing
        }

        Output:
        1 
        2 
        3 
        4
        5
        6
        7
        8
        9
        
## Example 2:
var text = "";
var i = 0;
while (i < 10) {
    text += "<br>The number is " + i;
    i++;
}
* Soucre: https://www.w3schools.com/js/js_loop_while.asp
*Source: [While Loop - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)*
