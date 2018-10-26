---
title: Do...While Loop
---
The `do...while` loop is closely related to <a href='http://forum.freecodecamp.com/t/javascript-while-loop/14668' target='_blank' rel='nofollow'>`while`</a> loop. In the do while loop, the condition is checked at the end of the loop.

Here is the **syntax** for `do...while` loop:

## Syntax:

     do {

       *Statement(s);*

    } while (*condition*);

**statement(s):** A statement that is executed **at least once** before the condition or Boolean expression is evaluated and is re-executed each time the condition evaluates to true.

**condition:** Here, a condition is a <a>Boolean expression</a>. If Boolean expression evaluates to true, the statement is executed again. When Boolean expression evaluates to false, the loops ends.

## Example:

    var i = 0;
    do {
    
      i = i + 1;
      console.log(i);
    } 
    
    while (i < 5);

    Output:
    1
    2
    3
    4
    5

source: <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while' target='_blank' rel='nofollow'>**do...while**</a>
