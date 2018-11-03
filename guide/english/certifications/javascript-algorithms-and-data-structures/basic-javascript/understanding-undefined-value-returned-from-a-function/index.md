---
title: Understanding Undefined Value returned from a Function
---
## Understanding Undefined Value returned from a Function

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
A function with no `return` statement, has an output of `undefined`. So, if you try to equal a varaible to the output of a function with no `return` statement, that variable will equal `undefined`.

Go ahead and define `addFive()` like so...

```javascript
function addFive() {
  sum += 5;
}
```
As you can see, `sum` is added by 5 with no issues, but since there is no return statement, there is an `undefined` output.

```javascript
var result = addFive(); // This is undefined
```
