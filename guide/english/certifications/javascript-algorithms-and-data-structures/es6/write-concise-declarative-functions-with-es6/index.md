---
title: Write Concise Declarative Functions with ES6
---
## Write Concise Declarative Functions with ES6

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
ES6 makes it easy, and fancy, to write declarative functions! In this lesson, you are tasked at changing the function to follow ES6 standards.

## Hint 1:

Get rid of the `function` keyword.

## Spoiler Alert - Solution Ahead!

## Solution

```javascript
const bicycle = {
  gear: 2,
  setGear(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
```
