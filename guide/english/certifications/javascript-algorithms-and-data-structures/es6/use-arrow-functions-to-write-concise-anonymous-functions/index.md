---
title: Use Arrow Functions to Write Concise Anonymous Functions
---
## Use Arrow Functions to Write Concise Anonymous Functions

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Again, ES6 is all about making JavaScript more elegant, and for some, more readable. 

Anonymous functions, as stated, can be created when you are sure that the function will not be called by name anywhere else.

## Hint 1:

Get rid of the `function` key word, and plug in this `=>` arrow.

## Hint 2:

Did you get rid of the `var` keyword?

## Spoiler Alert - Solution Ahead!

## Solution

```javascript
const magic = () => {
  "use strict";
  return new Date();
};
```

As long as you got rid of the `var` keyword, you're good.
