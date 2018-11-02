---
title: Write Concise Object Literal Declarations Using Simple Fields
---
## Write Concise Object Literal Declarations Using Simple Fields

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Here, we are tasked at returning an object that accepts the function's parameters as its attributes. 

# Hint 1:

Get rid of the colons, and the duplicate words.

## Spoiler Alert - Solution Ahead

## Solution

```javascript
const createPerson = (name, age, gender) => {
  "use strict";
  // change code below this line
  return {
    name,
    age,
    gender
  };
  // change code above this line
};
```
