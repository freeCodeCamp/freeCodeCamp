---
title: Write Arrow Functions with Parameters
---
## Write Arrow Functions with Parameters

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Here is a [cool resource about anonymous functions in JavaScript](http://helephant.com/2008/08/23/javascript-anonymous-functions/), in case you are still wondering what they are, and their role.

Now, you are tasked at putting parameters inside arrow functions. 

## Hint 1:

Get rid of the `function` keyword. Put the arrow operator.

## Hint 2:

Make sure you changed the `var` to a `const`.

## Spoiler Warning - Solution Ahead!

## Solution:

```javascript
const myConcat = (arr1, arr2) => {
  "use strict";
  return arr1.concat(arr2);
};
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));
```
