---
title: Continue Statement
---
## Introduction

The **continue** statement terminates execution of the statements in the current iteration of the current or labeled loop, and continues execution of the loop with the next iteration.

    continue;

If the **continue** statement is used in a labeled statement, the syntax is as follows:

    continue labelName;

In contrast to the **break** statement, **continue** does not terminate the execution of the loop entirely; instead:  
- In a `while` loop, it jumps back to the condition.  
- In a `for` loop, it jumps to the update expression.


## Examples

The following example shows a `while` loop that has a **continue** statement that executes when the value of **i** is 3\. Thus, **n** takes on the values 1, 3, 7, and 12.

    var i = 0;
    var n = 0;

    while (i < 5) {
      i++;

      if (i === 3) {
        continue;
      }

      n += i;
      console.log (n);
    }

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/C7hx/0' target='_blank' rel='nofollow'>Run Code</a>

In the following example, a loop iterates from 1 through 9\. The statements between **continue** and the end of the `for` body are skipped because of the use of the **continue** statement together with the expression `(i < 5)`.

    for (var i = 1; i < 10; i++) {
        if (i < 5) {
            continue;
        }
        console.log (i);
    }

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/C7hs/0' target='_blank' rel='nofollow'>Run Code</a>

## Other Resources

* [MDN link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue)
* [MSDN link](https://msdn.microsoft.com/en-us/library/8de3fkc8.aspx)
