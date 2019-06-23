---
title: JavaScript for Loops Explained
---
The for statement creates a loop that consists of three optional expressions, enclosed in parentheses and separated by semicolons, followed by a statement or a set of statements executed in the loop.

The for loop has the following syntax:

    for (<a href='http://forum.freecodecamp.com/t/javascript-while-loop/14668' target='_blank' rel='nofollow'>initialization]; [condition]; [final-expression]) {  
        code block to be executed                  
    }

The [initialization] is executed before the loop (the code block) starts.

The [condition] defines the condition for running the loop (the code block).

The [final-expression] is executed each time after the loop (the code block) has been executed.

## Example in JavaScript:

    var ourArray = [];
    for (var i = 0; i < 5; i++) {
        ourArray.push(i);
    }

From the example above, you can read:

[initialization] sets a variable before the loop starts (var i = 0).

[condition] defines the condition for the loop to run (i must be less than 5).

[final-expression] increases a value (i++) each time the code block in the loop has been executed.

## Why do we need "for loops"?

For loops are used to loop through a block of code for a known number of times. Sometimes only the computer knows how many times the loop will occur, not you, either way it is still known.

Checkout some of our other articles on loops:

*   [While Loop</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-for-in-loop/14665' target='_blank' rel='nofollow'>For In Loop</a>
