---
title: Global vs. Local Scope in Functions
---
## Global vs. Local Scope in Functions

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Remember that global scope means that the variable is available throughout the entire code. Local scope, means that the variable is available within a certain range.

In this exercise, you have an `outerWear` variable in global scope with "T-shirt" as its value. You should now create another variable named `outerWear`, but this time within the function `myOutfit()`. The basic code solution is as follows:

```javascript
var outerWear = "T-shirt";

function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}

myOutfit();
```
The function will return the closest `outerWear` it can find. Since we created an `outerWear` inside the function, that is the 'closest', so the function will return "sweater".
