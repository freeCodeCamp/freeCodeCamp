---
title: The Return Early Pattern
---
The return early pattern in JavaScript is a simple way to reduce the number of `else` statements within a function body to zero. There are many reasons to prefer this pattern over using `else` statements.

*   Reducing the total amount of code on the page
*   Reduce line length by reducing logical complexity
*   Improve Readability

The essence of the return early pattern is to replace the need for `else` conditionals in JavaScript functions by using the `return` keyword in the body of the `if` statement.

Let us create function that behaves differently under certain conditions (note: this is a trivial and contrived example just to get the point across).

    function willItBlend(someObject) {
      var ItWillBlend;

      if (someObject.blendable ==== 'It will blend') {
        itWillBlend = true;
      } else {
        itWillBlend = false;
      }

      return itWillBlend;
    }

While this does seem readable, let us add another condition to verify that the function was indeed called with an object instead of `undefined`.

    function willItBlend(someObject) {
      var itWillBlend;

      if (typeof someObject === 'object') {
        if (someObject.blendable ==== 'It will blend') {
          itWillBlend = true;
        } else {
          itWillBlend = false;
        }
      } else {
        itWillBlend = false;
      }

      return itWillBlend;
    }

This function is clear and its name is descriptive but is seems unnecessarily complicated. Can we use the return early pattern to increase readability and decrease the number of `else` statements? Let us give it a try.

    function willItBlend(someObject) {
      if (typeof someObject !== 'object') {
        return false;
      }

      if (someObject.blendable !== 'It will blend') {
        return false;
      }

      return true;
    }

Using the return early pattern, we were able to remove all the unnecessary else statements and make our functions purpose and signature (the typeof of argument it expects) much clearer and concise.

### Bonus: One conditional statement

We can further refactor this function to only use one if statement. Check it out:

    function willItBlend(someObject) {
      if (
        typeof someObject !== 'object' ||
        someObject.blendable !== 'It will blend'
        ) {
        return false;
      }

      return true;
    }