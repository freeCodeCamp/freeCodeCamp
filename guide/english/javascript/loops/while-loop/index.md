---
title: While Loop
---
The while loop starts by evaluating the condition. If the condition is true, the statement(s) is/are executed. If the condition is false, the statement(s) is/are not executed. After that, while loop ends. While loops deserve some attention, since if the false condition is never met, you will create an infinite loops. These infinite loops can crash your application or browser. Make sure all while loops in your code are finite.

Here is the **syntax** for while loop:

## Syntax:

    while (condition)

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
## Example of an infite loop:
     var x = 0;
        while (x < 10) 
        {
          console.log(x);
           x--; // i=i-1 same thing
        }

        Output:
        0
        -1
        -2
        -3
        -4
        -5
        -6
        -7
        -8
        -9
        ...etc. 
        
  
*Source: [While Loop - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)*
