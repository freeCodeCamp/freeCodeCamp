---
title: Local Scope and Functions
---
## Local Scope and Functions

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Local scope means that the variable is available within a certain area. In the case of this exercise, `myVar` is only available within the function, and not anywhere outside. 

Here is the basic code solution to create a local `myVar` variable.

```javascript
function myLocalScope() {
  var myVar;
  console.log(myVar);
}
myLocalScope();
```
The variable only exists in the function. Outside the function, it is non-existent.
